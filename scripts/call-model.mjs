#!/usr/bin/env node
/**
 * call-model.mjs — thin CLI wrapper around career-ops/lib/council.mjs
 *
 * Calls a single LLM via the council infrastructure (which handles auto-
 * escalation of retired model IDs, refusal retry, and provider-specific
 * client semantics). Writes the response to a file and prints usage to stdout.
 *
 * Usage:
 *   node call-model.mjs --model <slug> --prompt-file <path> --out-file <path> [--system-file <path>] [--temperature <n>]
 *
 * Examples:
 *   node call-model.mjs \
 *     --model openai:gpt-5 \
 *     --prompt-file ./prompts/self-research-gpt5.md \
 *     --out-file ./models/openai/gpt-5-5/research-rounds/round-1-self-research.md
 *
 *   # With custom system prompt:
 *   node call-model.mjs \
 *     --model anthropic:claude-opus-4-7 \
 *     --system-file ./prompts/self-research-system.md \
 *     --prompt-file ./prompts/self-research-user.md \
 *     --out-file ./out.md
 *
 * Model slugs (passed through to lib/council.mjs PROVIDERS):
 *   anthropic:claude-opus-4-7
 *   openai:gpt-5
 *   google:gemini-2.5-pro     (auto-escalates to gemini-3.1-pro-preview)
 *   xai:grok-4                (auto-escalates to grok-4.3)
 *   xai:grok-4-x-search
 *   xai:grok-4-fast-reasoning
 *   perplexity:sonar-deep-research
 *   perplexity:sonar-reasoning-pro
 *
 * Requires API keys in environment (loaded from career-ops/.env via dotenv).
 * Exit codes:
 *   0  — success, response written to --out-file
 *   1  — usage error (missing args, invalid model)
 *   2  — API call failed (missing key, timeout, refusal not recoverable)
 *   3  — write error
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { callCouncil } from '/Users/mitchellwilliams/Documents/career-ops/lib/council.mjs';

// Inline .env loader — avoids needing dotenv in council-os/node_modules.
// override:true mirrors career-ops memory rule (shell pre-sets ANTHROPIC key
// to empty; we must override).
function loadEnv(path) {
  if (!existsSync(path)) return;
  const content = readFileSync(path, 'utf-8');
  for (const line of content.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const m = trimmed.match(/^([A-Z_][A-Z0-9_]*)\s*=\s*(.*)$/);
    if (m) {
      const [, key, rawValue] = m;
      // Strip surrounding quotes
      const value = rawValue.replace(/^['"]|['"]$/g, '');
      process.env[key] = value;
    }
  }
}

loadEnv('/Users/mitchellwilliams/Documents/career-ops/.env');

function parseArgs() {
  const args = process.argv.slice(2);
  const out = {};
  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith('--')) {
      const key = args[i].slice(2);
      const value = args[i + 1];
      out[key] = value;
      i++;
    }
  }
  return out;
}

async function main() {
  const args = parseArgs();
  const {
    model,
    'prompt-file': promptFile,
    'out-file': outFile,
    'system-file': systemFile,
    temperature,
    'max-tokens': maxTokens,
    'reasoning-effort': reasoningEffort,
    'thinking-level': thinkingLevel,
    grounded,
  } = args;

  if (!model || !promptFile || !outFile) {
    console.error('Usage: node call-model.mjs --model <slug> --prompt-file <path> --out-file <path> [--system-file <path>] [--temperature <n>] [--max-tokens <n>] [--reasoning-effort low|medium|high|xhigh] [--thinking-level minimal|low|medium|high] [--grounded true|false]');
    process.exit(1);
  }

  if (!existsSync(promptFile)) {
    console.error(`prompt-file not found: ${promptFile}`);
    process.exit(1);
  }

  const prompt = readFileSync(promptFile, 'utf-8');
  const systemPrompt = systemFile && existsSync(systemFile)
    ? readFileSync(systemFile, 'utf-8')
    : undefined;

  const opts = {};
  if (systemPrompt !== undefined) opts.systemPrompt = systemPrompt;
  if (temperature !== undefined) opts.temperature = Number(temperature);
  if (maxTokens !== undefined) opts.maxTokens = Number(maxTokens);
  if (reasoningEffort !== undefined) opts.reasoningEffort = reasoningEffort;
  if (thinkingLevel !== undefined) opts.thinkingLevel = thinkingLevel;
  if (grounded !== undefined) opts.grounded = grounded !== 'false';

  console.error(`[call-model] calling ${model}...`);
  console.error(`[call-model] prompt: ${prompt.length} chars, system: ${systemPrompt ? systemPrompt.length + ' chars' : '(default date-anchor)'}`);

  const t0 = Date.now();
  const { results, missingKeys, totalMs } = await callCouncil({
    prompt,
    models: [model],
    opts,
  });

  if (missingKeys.length > 0) {
    console.error(`[call-model] missing env vars: ${JSON.stringify(missingKeys)}`);
    process.exit(2);
  }

  if (results.length === 0) {
    console.error('[call-model] no results returned');
    process.exit(2);
  }

  const r = results[0];
  if (r.error) {
    console.error(`[call-model] error: ${r.error}`);
    process.exit(2);
  }

  if (!r.content) {
    console.error('[call-model] empty content returned');
    process.exit(2);
  }

  // Ensure output directory exists
  const outDir = dirname(resolve(outFile));
  if (!existsSync(outDir)) {
    mkdirSync(outDir, { recursive: true });
  }

  try {
    writeFileSync(outFile, r.content, 'utf-8');
  } catch (e) {
    console.error(`[call-model] write failed: ${e.message}`);
    process.exit(3);
  }

  // Report usage
  const elapsed = Date.now() - t0;
  const usage = {
    model_requested: r.model,
    model_used: r.modelUsed || r.model,
    tokens: r.tokens || {},
    citations_count: r.citations ? r.citations.length : 0,
    elapsed_ms: elapsed,
    content_chars: r.content.length,
    out_file: outFile,
    ...(r.jailbreakRetry ? { jailbreak_retry: true } : {}),
    ...(r.jailbreakRefusal ? { jailbreak_refusal: r.jailbreakRefusal } : {}),
  };
  console.error(`[call-model] wrote ${r.content.length} chars to ${outFile} in ${elapsed}ms`);
  console.log(JSON.stringify(usage, null, 2));

  // Append to COST_LOG.md (best-effort — never blocks the response).
  // Cost estimate is rough: derives from token count + provider-specific per-1M
  // rates documented in sources.json. For exact attribution, check the
  // provider's billing dashboard.
  try {
    appendCostLogRow({
      date: new Date().toISOString().slice(0, 10),
      phase: process.env.COUNCIL_OS_PHASE || 'researcher',
      modelRequested: r.model,
      modelUsed: r.modelUsed || r.model,
      tokens: typeof r.tokens === 'number' ? r.tokens : (r.tokens?.total_tokens ?? 0),
      contentChars: r.content.length,
      elapsedMs: elapsed,
      outFile,
    });
  } catch (e) {
    console.error(`[call-model] WARN: COST_LOG append failed: ${e.message}`);
  }

  process.exit(0);
}

function appendCostLogRow({ date, phase, modelRequested, modelUsed, tokens, contentChars, elapsedMs, outFile }) {
  const costLogPath = '/Users/mitchellwilliams/Documents/council-os/COST_LOG.md';
  if (!existsSync(costLogPath)) return; // silently skip if file missing

  // Per-model rate estimate. Updated 2026-05-18 (meta-audit v2 P0 #2) — the
  // prior flat per-provider rates ($15 for all Anthropic) were misleading once
  // Mythos Preview ($25/$125, 5× Opus) was confirmed and Opus 4.7's 1.0-1.35×
  // tokenizer inflation was verified. Rates below are ~70/30 input/output
  // blended, in $/1M tokens. Exact attribution: provider billing dashboards.
  const ratesPerM = {
    // Anthropic per-model (source: platform.claude.com/docs/en/docs/about-claude/models + Project Glasswing pricing via llm-stats.com)
    'anthropic:claude-mythos-preview': 55,    // $25/$125 → ~55 blended; Glasswing partners only
    'anthropic:claude-opus-4-7':       15,    // $5/$25 → ~11 blended, +tokenizer inflation 1.0-1.35× → 15
    'anthropic:claude-sonnet-4-6':      6.6,  // $3/$15 → ~6.6 blended
    'anthropic:claude-haiku-4-5':       2.2,  // $1/$5  → ~2.2 blended
    // OpenAI per-model (source: openai.com/pricing)
    'openai:gpt-5':              7,           // gpt-5.5 ~$5/$15 blended
    'openai:gpt-5-4':            5,
    'openai:gpt-5-3-chat-latest': 3,          // Instant tier
    // Google per-model (source: ai.google.dev/pricing)
    'google:gemini-2.5-pro':     5,           // gemini-3.1-pro-preview ~$2/$10 blended
    'google:gemini-3-flash':     1.5,         // ~$0.50/$3.00 blended
    'google:gemini-3-1-flash-lite': 0.6,      // $0.25/$1.50 blended
    // xAI per-model
    'xai:grok-4':                3,           // grok-4.3 ~$1.25/$2.50 blended
    'xai:grok-4-x-search':       2,
    'xai:grok-4-20-multi-agent': 4,           // multi-agent sub-agent multiplier
    'xai:grok-3-mini':           0.4,
    // Perplexity per-model
    'perplexity:sonar-pro':              7,   // $3/$15 blended
    'perplexity:sonar-reasoning-pro':    3,   // $1/$5 + $3/M reasoning tokens
    'perplexity:sonar-deep-research':    5,   // $2/$8 + citation tokens
    'perplexity:sonar':                  1,
    // Provider-fallback rates (used if slot not in table above)
    'anthropic': 6.6,   // default to Sonnet-equivalent
    'openai':    5,
    'google':    3,
    'xai':       2,
    'perplexity': 4,
  };
  // Try exact slot first, then provider fallback, then unknown-rate sentinel.
  const exactRate = ratesPerM[modelRequested];
  const provider = (modelRequested || '').split(':')[0] || 'unknown';
  const rateUsd = exactRate ?? ratesPerM[provider] ?? 5;
  const estCostUsd = (tokens * rateUsd / 1_000_000).toFixed(4);

  const row = `| ${date} | ${phase} | ${modelRequested} → ${modelUsed} | call-model.mjs | ~$${estCostUsd} | ${tokens} tok, ${contentChars} chars out, ${elapsedMs}ms → ${outFile.split('/').slice(-3).join('/')} |\n`;

  const existing = readFileSync(costLogPath, 'utf-8');
  const insertMarker = '| — | — | — | — | — | — | — | (no rows yet) |';
  let updated;
  if (existing.includes(insertMarker)) {
    updated = existing.replace(insertMarker, row.trim());
  } else {
    // Append after the last existing table row
    const lines = existing.split('\n');
    let lastRowIdx = -1;
    for (let i = lines.length - 1; i >= 0; i--) {
      if (lines[i].startsWith('| 2026-') || lines[i].startsWith('| 2027-')) {
        lastRowIdx = i;
        break;
      }
    }
    if (lastRowIdx >= 0) {
      lines.splice(lastRowIdx + 1, 0, row.trim());
      updated = lines.join('\n');
    } else {
      updated = existing + '\n' + row;
    }
  }
  writeFileSync(costLogPath, updated);
  console.error(`[call-model] logged cost row to COST_LOG.md (~$${estCostUsd})`);
}

main().catch((e) => {
  console.error(`[call-model] fatal: ${e.message}`);
  console.error(e.stack);
  process.exit(2);
});
