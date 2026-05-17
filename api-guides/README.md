# API Guides

Provider-wide API-usage guidance. Each subdirectory documents the
provider-API-level features that affect every version of that provider's
models — separate from per-version capability profiles.

## Structure

```
api-guides/
├── anthropic/         # Anthropic Claude API surface
├── openai/            # OpenAI Responses + Chat Completions APIs
├── google/            # Gemini API + Interactions API + Live API + Vertex
├── xai/               # xAI Grok API
└── perplexity/        # Perplexity Sonar API
```

## What lives here vs. per-model chunks

**Here (provider-wide):**
- API surface overview (which endpoints exist, when to use which)
- Prompt caching mechanics, TTL, write multipliers, invalidation triggers
- Reasoning-effort / thinking-level controls (where shared across versions)
- Structured outputs / JSON mode / grammar enforcement
- Batch API mechanics
- State management (Responses API previous_response_id, etc.)
- Vision input mechanics
- Tool-use protocol (function-calling JSON schema, parallel call semantics)
- Computer-use / browser-use protocols
- Authentication, rate limiting, retries
- Deprecation schedule

**Per-model chunks (`models/{provider}/{version}/chunks/`):**
- This version's specific capability scores
- This version's pricing, latency, context window
- This version's unique strengths vs. peers
- This version's known limitations

## How these get built

1. **Phase 2** of `scripts/orchestrate.md` populates the provider-wide guides
   from official docs via WebFetch — these are the `_official-*.md` files.
2. **Phase 3** self-research and Dealbreaker rounds surface clarifications,
   corrections, and best-practice synthesis that get added as separate
   curated guide files (without the `_official-` prefix).
3. **Phase 4** does NOT touch these guides — they're independent of the
   per-model chunking workflow.

## File naming convention

- `_official-{purpose}.md` — direct mirror of an official doc page, with
  frontmatter linking back. Don't edit by hand.
- `{NN}-{topic}.md` — curated synthesis built from research + official docs.
  Hand-maintained. Numeric prefix for sort order.
- `README.md` — per-provider table of contents.
