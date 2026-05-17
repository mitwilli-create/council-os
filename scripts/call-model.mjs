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
  process.exit(0);
}

main().catch((e) => {
  console.error(`[call-model] fatal: ${e.message}`);
  console.error(e.stack);
  process.exit(2);
});
