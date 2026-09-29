import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

import { extractCitations, formatCitationsBlock } from './call-model-policy.mjs';

const CALL_MODEL = join(dirname(fileURLToPath(import.meta.url)), 'call-model.mjs');

const URLS = [
  'https://example.com/alpha',
  'https://example.org/beta',
  'https://example.net/gamma',
];

// Shape returned by career-ops lib/council.mjs for a Perplexity leg.
const PERPLEXITY_RESULT = {
  model: 'perplexity:sonar-deep-research',
  content: 'Alpha holds.[1] Beta disagrees.[2][3]',
  tokens: 1234,
  citations: URLS,
};

// Runs the real call-model.mjs against a stub career-ops root whose council
// returns `result`, and returns the out-file text.
function runCallModel(result) {
  const root = mkdtempSync(join(tmpdir(), 'call-model-citations-'));
  try {
    mkdirSync(join(root, 'lib'));
    writeFileSync(join(root, 'lib', 'council.mjs'), `
export async function callCouncil() {
  return { results: [${JSON.stringify(result)}], missingKeys: [], totalMs: 1 };
}
`);
    // Only the post-2026-09-24 call-model imports this; harmless otherwise.
    writeFileSync(join(root, 'lib', 'metered-spend-guard.mjs'), `
export class MeteredSpendRefused extends Error {}
export function reserve() { return { id: 'test' }; }
export function commit() {}
export function release() {}
`);
    const promptFile = join(root, 'prompt.md');
    const outFile = join(root, 'out', 'answer.md');
    writeFileSync(promptFile, 'question');
    const run = spawnSync(process.execPath, [
      CALL_MODEL,
      '--model', result.model,
      '--prompt-file', promptFile,
      '--out-file', outFile,
    ], {
      encoding: 'utf-8',
      env: {
        ...process.env,
        CAREER_OPS_ROOT: root,
        COUNCIL_OS_COST_LOG_PATH: join(root, 'no-cost-log.md'),
      },
    });
    assert.equal(run.status, 0, `call-model exited ${run.status}: ${run.stderr}`);
    return { text: readFileSync(outFile, 'utf-8'), usage: JSON.parse(run.stdout) };
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
}

test('a Perplexity response with citations writes every URL to the out-file', () => {
  const { text, usage } = runCallModel(PERPLEXITY_RESULT);
  assert.ok(text.startsWith(PERPLEXITY_RESULT.content), 'answer text is preserved first');
  for (const [i, url] of URLS.entries()) {
    assert.ok(text.includes(`[${i + 1}] ${url}`), `out-file is missing [${i + 1}] ${url}`);
  }
  assert.equal(usage.citations_count, 3);
  assert.equal(usage.citations_written, 3);
});

test('a response without citations is written unchanged', () => {
  const { text } = runCallModel({ ...PERPLEXITY_RESULT, model: 'xai:grok-4', citations: [] });
  assert.equal(text, PERPLEXITY_RESULT.content);
});

test('numbering follows the citations array exactly, duplicates included', () => {
  const entries = extractCitations({ citations: ['https://a.test', 'https://a.test', 'https://b.test'] });
  assert.deepEqual(entries.map((e) => [e.n, e.url]), [
    [1, 'https://a.test'], [2, 'https://a.test'], [3, 'https://b.test'],
  ]);
});

test('search_results supply URLs and titles when citations are absent or bare', () => {
  const searchResults = [
    { title: 'Alpha paper', url: 'https://example.com/alpha' },
    { title: 'Beta post', url: 'https://example.org/beta' },
  ];
  assert.equal(
    formatCitationsBlock({ search_results: searchResults }),
    '\n\n---\n\n## Sources\n\n[1] https://example.com/alpha (Alpha paper)\n[2] https://example.org/beta (Beta post)\n',
  );
  const merged = extractCitations({ citations: ['https://example.com/alpha', 'https://example.org/beta'], search_results: searchResults });
  assert.equal(merged[1].title, 'Beta post');
});

test('an unreadable citation keeps its slot so later numbers still line up', () => {
  const block = formatCitationsBlock({ citations: ['https://a.test', null, 'https://c.test'] });
  assert.match(block, /\[2\] \(no URL returned\)\n\[3\] https:\/\/c\.test/);
});
