#!/usr/bin/env node
/**
 * call-model.mjs — thin CLI wrapper around career-ops/lib/council.mjs
 *
 * Calls a single LLM via the council infrastructure (which handles model-slot
 * resolution, refusal retry, and provider-specific client semantics). Writes
 * the response to a file and prints requested/resolved provenance to stdout.
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
 *   google:gemini-3.1-pro     (resolves to gemini-3.1-pro-preview)
 *   google:gemini-3.6-flash   (stable Flash)
 *   google:gemini-2.5-pro     (COMPATIBILITY SLOT; resolves to current Pro)
 *   xai:grok-4                (auto-escalates to grok-4.3)
 *   xai:grok-4-x-search
 *   xai:grok-4-fast-reasoning
 *   xai:grok-4-20-multi-agent  (high reasoning-effort = 16-agent research mode)
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
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

import {
  buildCallPolicy,
  estimateCostUsd,
  extractCitations,
  formatCitationsBlock,
  REDDIT_TASK_TYPE,
  resolveModelProvenance,
} from './call-model-policy.mjs';

const REPO_ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const CAREER_OPS_ROOT = resolve(
  process.env.CAREER_OPS_ROOT || join(REPO_ROOT, '..', 'career-ops'),
);

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

loadEnv(join(CAREER_OPS_ROOT, '.env'));

async function loadCareerModules({ needsRedditLimits }) {
  const councilUrl = pathToFileURL(join(CAREER_OPS_ROOT, 'lib', 'council.mjs')).href;
  const { callCouncil } = await import(councilUrl);
  if (!needsRedditLimits) return { callCouncil, getRedditLimits: null };

  const redditUrl = pathToFileURL(join(CAREER_OPS_ROOT, 'lib', 'reddit-budget.mjs')).href;
  const { getRedditLimits } = await import(redditUrl);
  return { callCouncil, getRedditLimits };
}

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
    'timeout-ms': timeoutMs,
    'task-type': taskType,
    grounded,
  } = args;

  if (!model || !promptFile || !outFile) {
    console.error('Usage: node call-model.mjs --model <slug> --prompt-file <path> --out-file <path> [--system-file <path>] [--temperature <n>] [--max-tokens <n>] [--reasoning-effort low|medium|high|xhigh] [--thinking-level minimal|low|medium|high] [--task-type <archetype>] [--grounded true|false]');
    process.exit(1);
  }

  if (!existsSync(promptFile)) {
    console.error(`prompt-file not found: ${promptFile}`);
    process.exit(1);
  }

  const prompt = readFileSync(promptFile, 'utf-8');
  const needsRedditLimits = typeof taskType === 'string'
    && taskType.trim() === REDDIT_TASK_TYPE;
  const { callCouncil, getRedditLimits } = await loadCareerModules({ needsRedditLimits });
  const callPolicy = buildCallPolicy({
    taskType,
    maxTokens,
    redditLimits: getRedditLimits?.(),
  });
  const systemPrompt = systemFile && existsSync(systemFile)
    ? readFileSync(systemFile, 'utf-8')
    : undefined;

  const opts = {};
  if (systemPrompt !== undefined) opts.systemPrompt = systemPrompt;
  if (temperature !== undefined) opts.temperature = Number(temperature);
  if (callPolicy.maxTokens !== undefined) opts.maxTokens = callPolicy.maxTokens;
  if (reasoningEffort !== undefined) opts.reasoningEffort = reasoningEffort;
  if (thinkingLevel !== undefined) opts.thinkingLevel = thinkingLevel;
  if (timeoutMs !== undefined) opts.timeoutMs = Number(timeoutMs);
  if (callPolicy.taskType !== undefined) opts.taskType = callPolicy.taskType;
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

  // Citation URLs are part of the answer: the [n] markers in r.content point
  // at nothing unless the list is written alongside them.
  const citations = extractCitations(r);
  const citationsBlock = formatCitationsBlock(r);

  try {
    writeFileSync(outFile, r.content + citationsBlock, 'utf-8');
  } catch (e) {
    console.error(`[call-model] write failed: ${e.message}`);
    process.exit(3);
  }

  // Report usage
  const elapsed = Date.now() - t0;
  const { requestedSlot, resolvedModel } = resolveModelProvenance({
    requestedModel: model,
    result: r,
  });
  const usage = {
    model_requested: requestedSlot,
    model_used: resolvedModel,
    requested_slot: requestedSlot,
    resolved_model: resolvedModel,
    tokens: r.tokens || {},
    citations_count: citations.length,
    citations_written: citations.filter((c) => c.url).length,
    // null means no explicit cap was passed and the provider default applied
    // (32000 for sonar-deep-research in lib/council.mjs).
    max_tokens_requested: opts.maxTokens ?? null,
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
      modelRequested: requestedSlot,
      modelUsed: resolvedModel,
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
  const costLogPath = join(REPO_ROOT, 'COST_LOG.md');
  if (!existsSync(costLogPath)) return; // silently skip if file missing

  const estCostUsd = estimateCostUsd({
    requestedSlot: modelRequested,
    resolvedModel: modelUsed,
    tokens,
  });

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
