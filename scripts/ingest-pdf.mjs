#!/usr/bin/env node
/**
 * ingest-pdf.mjs — convert a PDF to a Council OS api-guide markdown mirror.
 *
 * Use case: many providers publish model cards, system cards, or whitepapers
 * as PDFs (e.g., OpenAI GPT-5 system card, Anthropic Claude model cards on
 * the Transparency Hub). This script ingests one PDF and writes a Council OS-
 * format mirror with proper frontmatter.
 *
 * Usage:
 *   node ingest-pdf.mjs --pdf <path-or-url> --provider <provider> --purpose <slug>
 *
 * Examples:
 *   node ingest-pdf.mjs \
 *     --pdf ~/Downloads/gpt-5-system-card.pdf \
 *     --provider openai \
 *     --purpose system-card
 *
 *   node ingest-pdf.mjs \
 *     --pdf https://www.anthropic.com/claude-3-model-card.pdf \
 *     --provider anthropic \
 *     --purpose model-card-3
 *
 * Requirements: `pdftotext` binary (from poppler) — install via Homebrew:
 *   brew install poppler
 *
 * Output: writes to `~/Documents/council-os/api-guides/{provider}/_official-{purpose}.md`
 * with frontmatter matching the existing Phase 2 mirrors.
 *
 * Note: pdftotext gives best-effort text extraction. For complex layouts
 * (multi-column, tables), the markdown may need manual cleanup. The
 * `fetch_quality` frontmatter field is set to `pdf-extracted` so the
 * researcher + dealbreaker know to treat it with appropriate caution.
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, basename } from 'node:path';
import { execSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

function parseArgs() {
  const args = {};
  for (let i = 2; i < process.argv.length; i++) {
    if (process.argv[i].startsWith('--')) {
      args[process.argv[i].slice(2)] = process.argv[i + 1];
      i++;
    }
  }
  return args;
}

async function main() {
  const args = parseArgs();
  const { pdf: pdfSource, provider, purpose } = args;

  if (!pdfSource || !provider || !purpose) {
    console.error('Usage: node ingest-pdf.mjs --pdf <path-or-url> --provider <provider> --purpose <slug>');
    process.exit(1);
  }

  // Check pdftotext exists
  try {
    execSync('which pdftotext', { stdio: 'pipe' });
  } catch {
    console.error('pdftotext not found. Install with: brew install poppler');
    process.exit(1);
  }

  // Resolve PDF: download if URL, otherwise use path
  let pdfPath;
  let sourceUrl;
  if (pdfSource.startsWith('http://') || pdfSource.startsWith('https://')) {
    sourceUrl = pdfSource;
    pdfPath = join(tmpdir(), `council-os-ingest-${Date.now()}.pdf`);
    console.error(`[ingest-pdf] downloading ${sourceUrl} to ${pdfPath}`);
    execSync(`curl -fsSL -o "${pdfPath}" "${sourceUrl}"`, { stdio: 'inherit' });
  } else {
    pdfPath = pdfSource;
    sourceUrl = `file://${pdfPath}`;
    if (!existsSync(pdfPath)) {
      console.error(`PDF not found: ${pdfPath}`);
      process.exit(1);
    }
  }

  // Extract text via pdftotext
  console.error(`[ingest-pdf] extracting text from ${pdfPath}`);
  const txtPath = pdfPath.replace(/\.pdf$/i, '.txt');
  execSync(`pdftotext -layout "${pdfPath}" "${txtPath}"`, { stdio: 'inherit' });

  const text = readFileSync(txtPath, 'utf-8');
  const charCount = text.length;
  console.error(`[ingest-pdf] extracted ${charCount} chars`);

  // Build frontmatter + body
  const today = new Date().toISOString().slice(0, 10);
  const frontmatter = `---
source_url: ${sourceUrl}
fetched_at: ${today}
source_authority: official_doc
provider: ${provider}
purpose: ${purpose}
fetch_quality: pdf-extracted
fetch_note: PDF extracted via pdftotext -layout. Multi-column layouts and tables may need manual cleanup. Verify formatting before downstream consumption.
---

# ${purpose.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}

> Mirror of PDF: ${basename(pdfPath)} (${charCount} chars extracted)

${text}
`;

  // Write to api-guides
  const outPath = `/Users/mitchellwilliams/Documents/council-os/api-guides/${provider}/_official-${purpose}.md`;
  const outDir = dirname(outPath);
  if (!existsSync(outDir)) {
    mkdirSync(outDir, { recursive: true });
  }
  writeFileSync(outPath, frontmatter);
  console.error(`[ingest-pdf] wrote ${frontmatter.length} chars to ${outPath}`);

  console.log(JSON.stringify({
    out: outPath,
    source: sourceUrl,
    provider,
    purpose,
    chars: frontmatter.length,
    extracted_chars: charCount,
  }, null, 2));
}

main().catch(e => {
  console.error(`[ingest-pdf] fatal: ${e.message}`);
  process.exit(1);
});
