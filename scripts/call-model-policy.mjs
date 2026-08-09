export const REDDIT_TASK_TYPE = 'reddit_scrape_synthesis';

const RATES_PER_MILLION = Object.freeze({
  'anthropic:claude-mythos-preview': 55,
  'anthropic:claude-opus-4-7': 15,
  'anthropic:claude-sonnet-4-6': 6.6,
  'anthropic:claude-haiku-4-5': 2.2,
  'openai:gpt-5': 7,
  'openai:gpt-5-4': 5,
  'openai:gpt-5-3-chat-latest': 3,
  'gemini-3.1-pro-preview': 7,
  'gemini-3.1-pro-preview-no-thinking': 7,
  'gemini-3.6-flash': 1.5,
  'gemini-3-flash-preview': 1.5,
  'gemini-3.1-flash-lite': 0.6,
  'grok-4.20-multi-agent': 4,
  'google:gemini-3.1-pro': 7,
  'google:gemini-3.6-flash': 1.5,
  'google:gemini-2.5-pro': 5,
  'google:gemini-3-flash': 1.5,
  'google:gemini-3-1-flash-lite': 0.6,
  'xai:grok-4': 3,
  'xai:grok-4-x-search': 2,
  'xai:grok-4-20-multi-agent': 4,
  'xai:grok-3-mini': 0.4,
  'perplexity:sonar-pro': 7,
  'perplexity:sonar-reasoning-pro': 3,
  'perplexity:sonar-deep-research': 5,
  'perplexity:sonar': 1,
  anthropic: 6.6,
  openai: 5,
  google: 3,
  xai: 2,
  perplexity: 4,
});

function optionalPositiveNumber(value) {
  if (value === undefined) return undefined;
  const number = Number(value);
  return Number.isFinite(number) && number > 0 ? number : undefined;
}

export function buildCallPolicy({ taskType, maxTokens, redditLimits } = {}) {
  const explicitTaskType = typeof taskType === 'string' && taskType.trim()
    ? taskType.trim()
    : undefined;
  const requestedMaxTokens = optionalPositiveNumber(maxTokens);

  if (explicitTaskType !== REDDIT_TASK_TYPE) {
    return {
      taskType: explicitTaskType,
      maxTokens: requestedMaxTokens,
    };
  }

  const redditMaximum = optionalPositiveNumber(redditLimits?.maxOutputTokens);
  if (redditMaximum === undefined) {
    throw new TypeError('reddit_scrape_synthesis requires a positive redditLimits.maxOutputTokens');
  }
  return {
    taskType: explicitTaskType,
    maxTokens: requestedMaxTokens === undefined
      ? redditMaximum
      : Math.min(requestedMaxTokens, redditMaximum),
  };
}

export function resolveModelProvenance({ requestedModel, result = {} } = {}) {
  return {
    requestedSlot: result.requestedSlot || result.model || requestedModel || null,
    resolvedModel: result.resolvedModel || result.modelUsed || null,
  };
}

export function estimateCostUsd({ requestedSlot, resolvedModel, tokens } = {}) {
  const tokenCount = Number(tokens);
  const safeTokenCount = Number.isFinite(tokenCount) && tokenCount > 0 ? tokenCount : 0;
  const resolvedBase = typeof resolvedModel === 'string'
    ? resolvedModel.split('+')[0].replace(/\s+\(.*$/, '')
    : null;
  const provider = typeof requestedSlot === 'string'
    ? requestedSlot.split(':')[0]
    : null;
  const candidates = [
    resolvedModel,
    resolvedBase,
    provider && resolvedBase ? `${provider}:${resolvedBase}` : null,
  ].filter(Boolean);
  const rate = candidates
    .map((candidate) => RATES_PER_MILLION[candidate])
    .find((candidate) => candidate !== undefined)
    ?? RATES_PER_MILLION[provider]
    ?? 5;

  return (safeTokenCount * rate / 1_000_000).toFixed(4);
}
