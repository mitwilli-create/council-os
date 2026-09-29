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

function citationUrl(entry) {
  if (typeof entry === 'string') return entry.trim() || null;
  if (entry && typeof entry.url === 'string') return entry.url.trim() || null;
  return null;
}

function oneLine(text) {
  return typeof text === 'string' ? text.replace(/\s+/g, ' ').trim() : '';
}

function asList(value) {
  if (Array.isArray(value)) return value;
  if (typeof value === 'string' && value.trim()) return [value];
  return [];
}

// Perplexity numbers its inline [n] markers against the order of the
// `citations` array, 1-indexed. Positions are kept exactly (no dedupe, no
// dropping of unreadable entries) so that [n] in the answer always names line
// [n] here. `search_results` is used as the list only when `citations` is
// absent; otherwise it only supplies titles, matched by URL, never by position.
export function extractCitations(result = {}) {
  const citations = asList(result.citations);
  const searchResults = asList(result.search_results);
  const titleByUrl = new Map();
  for (const entry of searchResults) {
    const url = citationUrl(entry);
    const title = oneLine(entry?.title);
    if (url && title && !titleByUrl.has(url)) titleByUrl.set(url, title);
  }
  const primary = citations.length > 0 ? citations : searchResults;
  return primary.map((entry, i) => {
    const url = citationUrl(entry);
    const title = oneLine(entry?.title) || (url ? titleByUrl.get(url) ?? '' : '');
    return { n: i + 1, url, title };
  });
}

// Markdown block appended to the out-file so a run keeps its sources. Returns
// '' when the response carried no citations, which leaves non-Perplexity
// output byte-identical.
export function formatCitationsBlock(result = {}) {
  const entries = extractCitations(result);
  if (entries.length === 0) return '';
  const lines = entries.map(({ n, url, title }) => {
    const target = url || '(no URL returned)';
    return title ? `[${n}] ${target} (${title})` : `[${n}] ${target}`;
  });
  return `\n\n---\n\n## Sources\n\n${lines.join('\n')}\n`;
}
