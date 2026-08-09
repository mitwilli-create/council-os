import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const REPO_ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const readJson = (path) => JSON.parse(readFileSync(join(REPO_ROOT, path), 'utf8'));

test('Tier 1 keeps stable profile IDs and carries provider routing provenance', () => {
  const tier = readJson('scripts/tier-1.json');
  const google = new Map(
    tier.tier_1_models
      .filter((entry) => entry.provider === 'google')
      .map((entry) => [entry.version, entry]),
  );

  assert.equal(google.get('gemini-3-1-pro')?.canonical_slot, 'google:gemini-3.1-pro');
  assert.equal(google.get('gemini-3-1-pro')?.resolved_api_model, 'gemini-3.1-pro-preview');
  assert.equal(google.get('gemini-3-flash')?.canonical_slot, 'google:gemini-3.6-flash');
  assert.equal(google.get('gemini-3-flash')?.resolved_api_model, 'gemini-3.6-flash');
  assert.equal(google.has('gemini-3.1-pro-preview'), false);
  assert.equal(google.has('gemini-3.6-flash'), false);
});

test('source catalog keys match profile directories and carry routing provenance', () => {
  const sources = readJson('scripts/sources.json');
  const google = sources.providers.google.models;

  assert.equal(google['gemini-3-1-pro'].canonical_slot, 'google:gemini-3.1-pro');
  assert.equal(google['gemini-3-1-pro'].api_model_id, 'gemini-3.1-pro-preview');
  assert.equal(google['gemini-3-1-pro'].resolved_api_model, 'gemini-3.1-pro-preview');
  assert.equal(google['gemini-3-flash'].canonical_slot, 'google:gemini-3.6-flash');
  assert.equal(google['gemini-3-flash'].api_model_id, 'gemini-3-flash-preview');
  assert.equal(google['gemini-3-flash'].resolved_api_model, 'gemini-3.6-flash');
  assert.equal(Object.hasOwn(google, 'gemini-3.1-pro'), false);
  assert.equal(Object.hasOwn(google, 'gemini-3.6-flash'), false);
});

test('Gemini source chunks carry the same stable profile and routing fields', () => {
  const cases = [
    ['gemini-3-1-pro', 'google:gemini-3.1-pro', 'gemini-3.1-pro-preview'],
    ['gemini-3-flash', 'google:gemini-3.6-flash', 'gemini-3.6-flash'],
  ];

  for (const [profile, slot, resolved] of cases) {
    const overview = readFileSync(
      join(REPO_ROOT, 'models', 'google', profile, 'chunks', '00-overview.md'),
      'utf8',
    );
    assert.match(overview, new RegExp(`^model: ${profile}$`, 'm'));
    assert.match(overview, new RegExp(`^canonical_slot: ${slot.replace('.', '\\.')}$`, 'm'));
    assert.match(overview, new RegExp(`^resolved_api_model: ${resolved.replace('.', '\\.')}$`, 'm'));
  }
});

test('taxonomy documents optional provider routing provenance fields', () => {
  const taxonomy = readFileSync(join(REPO_ROOT, 'taxonomy.md'), 'utf8');
  assert.match(taxonomy, /^canonical_slot:/m);
  assert.match(taxonomy, /^resolved_api_model:/m);
});

test('Reddit routing policy is represented in its source chunks', () => {
  const sonar = readFileSync(join(
    REPO_ROOT,
    'models/perplexity/sonar-deep-research/chunks/43-ideal-tasks.md',
  ), 'utf8');
  const grok = readFileSync(join(
    REPO_ROOT,
    'models/xai/grok-4-20-multi-agent/chunks/43-ideal-tasks.md',
  ), 'utf8');

  assert.match(sonar, /Apify/);
  assert.match(sonar, /reddit_scrape_synthesis/);
  assert.match(grok, /Reddit corroboration/);
  assert.match(grok, /requested slot and resolved model/);
});

test('all local Markdown links in routing rules resolve', () => {
  const routing = readFileSync(join(REPO_ROOT, 'routing-rules.md'), 'utf8');
  const targets = [...routing.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)]
    .map((match) => match[1])
    .filter((target) => !target.includes('://') && target !== 'path');

  const missing = [...new Set(targets)].filter((target) => (
    !existsSync(join(REPO_ROOT, target.split('#')[0]))
  ));
  assert.deepEqual(missing, []);
});

test('modified executable sources contain no absolute user paths', () => {
  for (const path of ['scripts/call-model.mjs', 'scripts/build-routing-tree.mjs']) {
    const source = readFileSync(join(REPO_ROOT, path), 'utf8');
    assert.doesNotMatch(source, /\/Users\/mitchellwilliams\//);
  }
});

test('generated routing tree records the current source hashes', () => {
  const tree = readJson('routing-tree.json');
  for (const source of tree.source_files) {
    const content = readFileSync(join(REPO_ROOT, source.path));
    const actual = createHash('sha256').update(content).digest('hex').slice(0, 16);
    assert.equal(source.sha256, actual, source.path);
  }
  assert.equal(tree.task_count, tree.tasks.length);
  assert.equal(tree.capability_axis_count, tree.capability_axes.length);
  assert.equal(tree.operational_callout_count, tree.operational_callouts.length);
});
