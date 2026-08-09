import assert from 'node:assert/strict';
import test from 'node:test';

import {
  buildCallPolicy,
  estimateCostUsd,
  resolveModelProvenance,
} from './call-model-policy.mjs';

const REDDIT_LIMITS = Object.freeze({ maxOutputTokens: 16_000 });

test('prompt text never infers the Reddit spend policy', () => {
  const policy = buildCallPolicy({
    prompt: 'Compare two Reddit community posts.',
    maxTokens: '24000',
    redditLimits: REDDIT_LIMITS,
  });

  assert.equal(policy.taskType, undefined);
  assert.equal(policy.maxTokens, 24_000);
});

test('explicit Reddit task type activates the bounded output-token policy', () => {
  const policy = buildCallPolicy({
    taskType: 'reddit_scrape_synthesis',
    prompt: 'Synthesize the supplied public rows.',
    maxTokens: '24000',
    redditLimits: REDDIT_LIMITS,
  });

  assert.equal(policy.taskType, 'reddit_scrape_synthesis');
  assert.equal(policy.maxTokens, 16_000);
});

test('explicit Reddit task type fails closed when limits are unavailable', () => {
  assert.throws(() => buildCallPolicy({
    taskType: 'reddit_scrape_synthesis',
    maxTokens: '24000',
  }), /requires a positive redditLimits\.maxOutputTokens/);
});

test('cost estimation uses the resolved API model rather than a compatibility slot', () => {
  assert.equal(estimateCostUsd({
    requestedSlot: 'google:gemini-2.5-pro',
    resolvedModel: 'gemini-3.1-pro-preview',
    tokens: 1_000,
  }), '0.0070');
});

test('resolved provider model pricing wins over the provider fallback rate', () => {
  assert.equal(estimateCostUsd({
    requestedSlot: 'perplexity:research',
    resolvedModel: 'sonar-deep-research',
    tokens: 1_000,
  }), '0.0050');
});

test('resolved Gemini variants retain the resolved model rate', () => {
  assert.equal(estimateCostUsd({
    requestedSlot: 'google:gemini-2.5-pro',
    resolvedModel: 'gemini-3.1-pro-preview-no-thinking',
    tokens: 1_000,
  }), '0.0070');
});

test('provenance preserves the requested slot and actual resolved model', () => {
  assert.deepEqual(resolveModelProvenance({
    requestedModel: 'google:gemini-3.1-pro',
    result: {
      requestedSlot: 'google:gemini-3.1-pro',
      resolvedModel: 'gemini-3.1-pro-preview+google_search',
    },
  }), {
    requestedSlot: 'google:gemini-3.1-pro',
    resolvedModel: 'gemini-3.1-pro-preview+google_search',
  });
});
