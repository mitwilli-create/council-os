#!/usr/bin/env node
/**
 * prep-prompt.mjs — substitute placeholders in a prompt template.
 *
 * Reads a template file with {{MODEL_DISPLAY_NAME}} / {{API_MODEL_ID}} /
 * {{PROVIDER}} / {{PRIOR_CHALLENGES_PATH}} placeholders, substitutes the
 * given values, writes the result to --out.
 *
 * Usage:
 *   node prep-prompt.mjs \
 *     --template prompts/self-research.md \
 *     --display-name "GPT-5.5" \
 *     --api-id "gpt-5.5" \
 *     --provider "OpenAI" \
 *     --out /tmp/self-research-gpt5-5.md
 *
 *   # With prior challenges for round 2+:
 *   node prep-prompt.mjs \
 *     --template prompts/self-research.md \
 *     --display-name "GPT-5.5" \
 *     --api-id "gpt-5.5" \
 *     --provider "OpenAI" \
 *     --prior-challenges-path models/openai/gpt-5-5/research-rounds/round-1-dealbreaker.md \
 *     --out /tmp/self-research-gpt5-5-round-2.md
 */

import { readFileSync, writeFileSync, existsSync } from 'node:fs';

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

const args = parseArgs();

const required = ['template', 'display-name', 'api-id', 'provider', 'out'];
for (const r of required) {
  if (!args[r]) {
    console.error(`Missing --${r}`);
    console.error('Usage: prep-prompt.mjs --template <path> --display-name <name> --api-id <id> --provider <provider> --out <path> [--prior-challenges-path <path>]');
    process.exit(1);
  }
}

if (!existsSync(args.template)) {
  console.error(`Template not found: ${args.template}`);
  process.exit(1);
}

const template = readFileSync(args.template, 'utf-8');

let substituted = template
  .replace(/\{\{MODEL_DISPLAY_NAME\}\}/g, args['display-name'])
  .replace(/\{\{API_MODEL_ID\}\}/g, args['api-id'])
  .replace(/\{\{PROVIDER\}\}/g, args.provider);

// PRIOR_CHALLENGES_PATH handling:
//   - If provided + file exists: INLINE the full dealbreaker content into the
//     prompt (non-Anthropic models called via API can't read files; they need
//     the challenges in-context).
//   - If provided + file missing: substitute path string only (for debugging).
//   - If not provided: round 1 — placeholder becomes "(N/A — round 1)".
if (args['prior-challenges-path']) {
  if (existsSync(args['prior-challenges-path'])) {
    const challenges = readFileSync(args['prior-challenges-path'], 'utf-8');
    const inlined = `(see inlined dealbreaker content below)\n\n---\n\n## PRIOR ROUND DEALBREAKER CHALLENGES (from ${args['prior-challenges-path']})\n\n${challenges}\n\n---\n\nAddress every challenge above in your revision. Do not silently rewrite — explicitly note where each strike/omission/hedge was corrected.`;
    substituted = substituted.replace(/\{\{PRIOR_CHALLENGES_PATH\}\}/g, inlined);
  } else {
    console.error(`[prep-prompt] WARNING: --prior-challenges-path file not found: ${args['prior-challenges-path']}`);
    substituted = substituted.replace(/\{\{PRIOR_CHALLENGES_PATH\}\}/g, args['prior-challenges-path']);
  }
} else {
  substituted = substituted.replace(/\{\{PRIOR_CHALLENGES_PATH\}\}/g, '(N/A — round 1)');
}

writeFileSync(args.out, substituted);
console.error(`[prep-prompt] wrote ${substituted.length} chars to ${args.out}`);
console.log(JSON.stringify({ out: args.out, chars: substituted.length, model: args['display-name'] }, null, 2));
