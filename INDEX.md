# Council OS — Master Index

## Models

### Anthropic

| Version | Slug | Profile | Status | Round | Converged |
|---------|------|---------|--------|-------|-----------|
| Claude Opus 4.7 | `claude-opus-4-7` | [profile](models/anthropic/claude-opus-4-7/profile.md) | pending | — | — |
| Claude Sonnet 4.6 | `claude-sonnet-4-6` | [profile](models/anthropic/claude-sonnet-4-6/profile.md) | pending | — | — |
| Claude Haiku 4.5 | `claude-haiku-4-5` | [profile](models/anthropic/claude-haiku-4-5/profile.md) | pending | — | — |

### OpenAI (GPT-5 family — o-series retired)

| Version | Slug | Profile | Status | Round | Converged |
|---------|------|---------|--------|-------|-----------|
| GPT-5.5 (frontier) | `gpt-5-5` | [profile](models/openai/gpt-5-5/profile.md) | pending | — | — |
| GPT-5.5 Pro | `gpt-5-5-pro` | [profile](models/openai/gpt-5-5-pro/profile.md) | pending | — | — |
| GPT-5.4 Thinking | `gpt-5-4-thinking` | [profile](models/openai/gpt-5-4-thinking/profile.md) | pending | — | — |
| GPT-5.4 Pro | `gpt-5-4-pro` | [profile](models/openai/gpt-5-4-pro/profile.md) | pending | — | — |
| GPT-5.3 Instant (default) | `gpt-5-3-instant` | [profile](models/openai/gpt-5-3-instant/profile.md) | pending | — | — |
| GPT-5.2 | `gpt-5-2` | [profile](models/openai/gpt-5-2/profile.md) | pending | — | — |

### Google Gemini 3 series

| Version | Slug | Profile | Status | Round | Converged |
|---------|------|---------|--------|-------|-----------|
| Gemini 3.1 Pro | `gemini-3-1-pro` | [profile](models/google/gemini-3-1-pro/profile.md) | pending | — | — |
| Gemini 3 Flash | `gemini-3-flash` | [profile](models/google/gemini-3-flash/profile.md) | pending | — | — |
| Gemini 3.1 Flash-Lite | `gemini-3-1-flash-lite` | [profile](models/google/gemini-3-1-flash-lite/profile.md) | pending | — | — |
| Gemini 3.1 Flash Live (A2A) | `gemini-3-1-flash-live-preview` | [profile](models/google/gemini-3-1-flash-live-preview/profile.md) | pending | — | — |
| Nano Banana Pro (image) | `nano-banana-pro` | [profile](models/google/nano-banana-pro/profile.md) | pending | — | — |
| Nano Banana 2 (image) | `nano-banana-2` | [profile](models/google/nano-banana-2/profile.md) | pending | — | — |

### xAI Grok (post-May-15 retirements)

> **NOTE:** `grok-4`, `grok-4-fast`, `grok-4-1-fast`, `grok-code-fast-1`,
> `grok-imagine-image-pro` were retired May 15, 2026. Mitchell's
> `council-of-models` agent still lists `grok-4` + `grok-4-fast-reasoning`
> in its default lineup — needs updating to `grok-4-3` or the `grok-4-20`
> family.

| Version | Slug | Profile | Status | Round | Converged |
|---------|------|---------|--------|-------|-----------|
| Grok 4.3 (flagship) | `grok-4-3` | [profile](models/xai/grok-4-3/profile.md) | pending | — | — |
| Grok 4.20 Reasoning | `grok-4-20-reasoning` | [profile](models/xai/grok-4-20-reasoning/profile.md) | pending | — | — |
| Grok 4.20 Non-Reasoning | `grok-4-20-non-reasoning` | [profile](models/xai/grok-4-20-non-reasoning/profile.md) | pending | — | — |
| Grok 4.20 Multi-Agent | `grok-4-20-multi-agent` | [profile](models/xai/grok-4-20-multi-agent/profile.md) | pending | — | — |
| Grok 3 | `grok-3` | [profile](models/xai/grok-3/profile.md) | pending | — | — |
| Grok 3 Mini | `grok-3-mini` | [profile](models/xai/grok-3-mini/profile.md) | pending | — | — |

### Perplexity Sonar

| Version | Slug | Profile | Status | Round | Converged |
|---------|------|---------|--------|-------|-----------|
| Sonar | `sonar` | [profile](models/perplexity/sonar/profile.md) | pending | — | — |
| Sonar Pro | `sonar-pro` | [profile](models/perplexity/sonar-pro/profile.md) | pending | — | — |
| Sonar Reasoning Pro | `sonar-reasoning-pro` | [profile](models/perplexity/sonar-reasoning-pro/profile.md) | pending | — | — |
| Sonar Deep Research | `sonar-deep-research` | [profile](models/perplexity/sonar-deep-research/profile.md) | pending | — | — |

**Total: 25 active model versions across 5 providers.**

## API Guides (per provider)

- [`api-guides/anthropic/`](api-guides/anthropic/) — prompt caching, extended thinking, tool use, batch, computer use
- [`api-guides/openai/`](api-guides/openai/) — Responses API, reasoning effort, structured outputs, state management
- [`api-guides/google/`](api-guides/google/) — thinking levels, function calling, system instructions, Live API, Interactions API
- [`api-guides/xai/`](api-guides/xai/) — reasoning modes, multi-agent, tool calling, retirement schedule
- [`api-guides/perplexity/`](api-guides/perplexity/) — citation handling, search domain filters, deep-research orchestration

## Capabilities (cross-cuts — populated Phase 4)

Each file compares one capability axis across all 25 versions.

- `capabilities/reasoning.md`
- `capabilities/tool-use.md`
- `capabilities/web-grounding.md`
- `capabilities/vision.md`
- `capabilities/audio-multimodal.md`
- `capabilities/code-generation.md`
- `capabilities/long-context.md`
- `capabilities/agentic-computer-use.md`
- `capabilities/structured-output.md`
- `capabilities/pricing-latency.md`
- `capabilities/connectors-integrations.md`

## Routing

- [`routing-rules.md`](routing-rules.md) — which model version for which task

## Reference

- [`taxonomy.md`](taxonomy.md) — capability axes and chunk frontmatter schema
- [`scripts/orchestrate.md`](scripts/orchestrate.md) — how to rebuild the KB
- [`scripts/sources.json`](scripts/sources.json) — canonical official-doc URLs
- [`COST_LOG.md`](COST_LOG.md) — research spend ledger

## Prompts

- [`prompts/self-research.md`](prompts/self-research.md)
- [`prompts/dealbreaker-anti-sycophancy.md`](prompts/dealbreaker-anti-sycophancy.md)
- [`prompts/chunking-instructions.md`](prompts/chunking-instructions.md)
