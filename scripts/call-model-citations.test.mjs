import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { copyFileSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

import { extractCitations, formatCitationsBlock } from './call-model-policy.mjs';

const SCRIPTS_DIR = dirname(fileURLToPath(import.meta.url));
const EMPTY_COST_LOG = '| — | — | — | — | — | — | — | (no rows yet) |\n';

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

// Runs the real call-model.mjs, copied into a temp council-os tree with its
// own COST_LOG.md, against a stub career-ops root whose council returns
// `result`. The repository's COST_LOG.md is never touched.
function runCallModel(result) {
  const root = mkdtempSync(join(tmpdir(), 'call-model-citations-'));
  try {
    const councilOs = join(root, 'council-os');
    const careerOps = join(root, 'career-ops');
    mkdirSync(join(councilOs, 'scripts'), { recursive: true });
    mkdirSync(join(careerOps, 'lib'), { recursive: true });
    for (const file of ['call-model.mjs', 'call-model-policy.mjs']) {
      copyFileSync(join(SCRIPTS_DIR, file), join(councilOs, 'scripts', file));
    }
    const costLog = join(councilOs, 'COST_LOG.md');
    writeFileSync(costLog, EMPTY_COST_LOG);
    writeFileSync(join(careerOps, 'lib', 'council.mjs'), `
export async function callCouncil() {
  return { results: [${JSON.stringify(result)}], missingKeys: [], totalMs: 1 };
}
`);
    // call-model versions that reserve metered spend import this guard;
    // versions that do not simply never load it.
    writeFileSync(join(careerOps, 'lib', 'metered-spend-guard.mjs'), `
export class MeteredSpendRefused extends Error {}
export function reserve() { return { id: 'test' }; }
export function commit() {}
export function release() {}
`);
    const promptFile = join(root, 'prompt.md');
    const outFile = join(root, 'out', 'answer.md');
    writeFileSync(promptFile, 'question');
    const run = spawnSync(process.execPath, [
      join(councilOs, 'scripts', 'call-model.mjs'),
      '--model', result.model,
      '--prompt-file', promptFile,
      '--out-file', outFile,
    ], {
      encoding: 'utf-8',
      timeout: 30_000,
      env: { ...process.env, CAREER_OPS_ROOT: careerOps },
    });
    assert.equal(run.status, 0, `call-model exited ${run.status}: ${run.stderr}`);
    assert.doesNotMatch(run.stderr, /COST_LOG append failed/);
    return {
      text: readFileSync(outFile, 'utf-8'),
      usage: JSON.parse(run.stdout),
      costLog: readFileSync(costLog, 'utf-8'),
    };
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
}

test('a Perplexity response with citations writes every URL to the out-file', () => {
  const { text, usage, costLog } = runCallModel(PERPLEXITY_RESULT);
  assert.ok(text.startsWith(PERPLEXITY_RESULT.content), 'answer text is preserved first');
  for (const [i, url] of URLS.entries()) {
    assert.ok(text.includes(`[${i + 1}] ${url}`), `out-file is missing [${i + 1}] ${url}`);
  }
  assert.equal(usage.citations_count, 3);
  assert.equal(usage.citations_written, 3);
  assert.match(costLog, /perplexity:sonar-deep-research .*call-model\.mjs/, 'cost row still lands');
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

test('titles are matched by URL, never by position', () => {
  const entries = extractCitations({
    citations: ['https://a.test', 'https://b.test'],
    search_results: [{ url: 'https://b.test', title: 'B' }],
  });
  assert.deepEqual(entries.map((e) => [e.url, e.title]), [['https://a.test', ''], ['https://b.test', 'B']]);
  const noUrl = extractCitations({ citations: [{ title: 'X' }], search_results: [{ url: 'https://u.test', title: 'Y' }] });
  assert.deepEqual([noUrl[0].url, noUrl[0].title], [null, 'X']);
});

test('a bare string citation and a multi-line title stay on one line', () => {
  assert.equal(extractCitations({ citations: 'https://x.test' })[0].url, 'https://x.test');
  const block = formatCitationsBlock({ search_results: [{ url: 'https://y.test', title: 'Two\nlines' }] });
  assert.match(block, /\[1\] https:\/\/y\.test \(Two lines\)\n$/);
});

test('search_results supply URLs and titles when citations are absent', () => {
  const searchResults = [
    { title: 'Alpha paper', url: 'https://example.com/alpha' },
    { title: 'Beta post', url: 'https://example.org/beta' },
  ];
  assert.equal(
    formatCitationsBlock({ search_results: searchResults }),
    '\n\n---\n\n## Sources\n\n[1] https://example.com/alpha (Alpha paper)\n[2] https://example.org/beta (Beta post)\n',
  );
});

test('an unreadable citation keeps its slot so later numbers still line up', () => {
  const block = formatCitationsBlock({ citations: ['https://a.test', null, 'https://c.test'] });
  assert.match(block, /\[2\] \(no URL returned\)\n\[3\] https:\/\/c\.test/);
});
