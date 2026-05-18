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
| Gemini 3.1 Pro | `gemini-3-1-pro` | [profile](models/google/gemini-3-1-pro/research-rounds/round-2-self-research.md) | converged | R2 | ✅ |
| Gemini 3 Flash | `gemini-3-flash` | [profile](models/google/gemini-3-flash/research-rounds/round-2-self-research.md) | converged | R2 | ✅ |
| Gemini 3.1 Flash-Lite | `gemini-3-1-flash-lite` | [profile](models/google/gemini-3-1-flash-lite/research-rounds/round-2-self-research.md) | converged (audit round) | R2 | ✅ |
| Gemini 3.1 Flash Live (A2A) | `gemini-3-1-flash-live-preview` | (deferred — Live API specialized surface) | deferred | — | — |
| Nano Banana Pro (image) | `nano-banana-pro` | (deferred — image-gen, out of text routing scope) | deferred | — | — |
| Nano Banana 2 (image) | `nano-banana-2` | (deferred — image-gen, out of text routing scope) | deferred | — | — |

### xAI Grok (post-May-15 retirements)

> **NOTE:** `grok-4`, `grok-4-fast`, `grok-4-1-fast`, `grok-code-fast-1`,
> `grok-imagine-image-pro`, **AND `grok-3`** were retired May 15, 2026. Council
> agent default lineup uses `xai:grok-4` which auto-escalates to `grok-4.3`
> (working as designed). `grok-3-mini` was NOT in the retirement list and
> remains active as the cheapest Grok tier.

| Version | Slug | Profile | Status | Round | Converged |
|---------|------|---------|--------|-------|-----------|
| Grok 4.3 (flagship) | `grok-4-3` | [profile](models/xai/grok-4-3/research-rounds/round-2-self-research.md) | converged | R2 | ✅ |
| Grok 4.20 Reasoning | `grok-4-20-reasoning` | (deferred — covered by grok-4-3 + multi-agent) | deferred | — | — |
| Grok 4.20 Non-Reasoning | `grok-4-20-non-reasoning` | (deferred — covered by multi-agent) | deferred | — | — |
| Grok 4.20 Multi-Agent | `grok-4-20-multi-agent` | [profile](models/xai/grok-4-20-multi-agent/research-rounds/round-2-self-research.md) | converged | R2 | ✅ |
| Grok 3 | `grok-3` | **RETIRED 2026-05-15** | retired | — | — |
| Grok 3 Mini | `grok-3-mini` | [profile](models/xai/grok-3-mini/research-rounds/round-2-self-research.md) | converged (audit round) | R2 | ✅ |

### Perplexity Sonar

| Version | Slug | Profile | Status | Round | Converged |
|---------|------|---------|--------|-------|-----------|
| Sonar (base) | `sonar` | [profile](models/perplexity/sonar/research-rounds/round-1-self-research.md) | abandoned at R2 (safety refusal — R1 kept with caveats) | R2 abandoned | ⚠️ |
| Sonar Pro | `sonar-pro` | [profile](models/perplexity/sonar-pro/research-rounds/round-2-self-research.md) | converged | R2 | ✅ |
| Sonar Reasoning Pro | `sonar-reasoning-pro` | [profile](models/perplexity/sonar-reasoning-pro/research-rounds/round-2-self-research.md) | converged | R2 | ✅ |
| Sonar Deep Research | `sonar-deep-research` | [profile](models/perplexity/sonar-deep-research/research-rounds/round-3-self-research.md) | converged | R3 | ✅ |

### Anthropic Claude

| Version | Slug | Profile | Status | Round | Converged |
|---------|------|---------|--------|-------|-----------|
| Claude Opus 4.7 | `claude-opus-4-7` | [profile](models/anthropic/claude-opus-4-7/research-rounds/round-2-self-research.md) | converged | R2 | ✅ |
| Claude Sonnet 4.6 | `claude-sonnet-4-6` | [profile](models/anthropic/claude-sonnet-4-6/research-rounds/round-2-self-research.md) | converged | R2 | ✅ |
| Claude Haiku 4.5 | `claude-haiku-4-5` | [profile](models/anthropic/claude-haiku-4-5/research-rounds/round-2-self-research.md) | converged | R2 | ✅ |

### OpenAI

| Version | Slug | Profile | Status | Round | Converged |
|---------|------|---------|--------|-------|-----------|
| GPT-5.5 | `gpt-5-5` | [profile](models/openai/gpt-5-5/research-rounds/round-2-self-research.md) | converged (borderline) | R2 | ✅ |
| GPT-5.4 | `gpt-5-4` | [profile](models/openai/gpt-5-4/research-rounds/round-2-self-research.md) | converged | R2 | ✅ |
| GPT-5.3 Chat | `gpt-5-3-chat-latest` | [profile](models/openai/gpt-5-3-chat-latest/research-rounds/round-2-self-research.md) | converged (slot fallback documented) | R2 | ✅ |

**Total: 16 profiled model versions across 5 providers (14 Tier-1 + 3 Tier-2 added in audit; 1 Tier-2 audit-abandoned). Plus 7 deferred + 1 retired = 24 known.**

### Newly identified (added 2026-05-18, meta-audit dispatch)

These models were surfaced during the adversarial self-review's meta-audit pass (Gemini 3.1 Pro with grounded search) as Tier-1-capable but were NOT in the original 16-profile lineup. They should be added to the KB in subsequent rounds.

| Version | Slug | Status | Why missing from original review | Action |
|---|---|---|---|---|
| Claude Mythos Preview | `claude-mythos-preview` | **deferred — restricted access** | Invitation-only via [Project Glasswing](https://anthropic.com/glasswing). Defensive cybersecurity workflows. Released April 2026. Not callable from `lib/council.mjs` (no public API). | Document existence + capability in `models/anthropic/claude-mythos-preview/chunks/00-overview.md` so router knows WHY it can't route public requests there. |
| Grok 4.1 Fast Reasoning | `grok-4-1-fast-reasoning` | **active — used by `xai:grok-4-x-search` substrate** | Council OS treated `grok-4-x-search` slot as opaque; the underlying model is grok-4-1-fast-reasoning (2M context, $0.20/$0.50/MTok per [xAI](https://x.ai/news/grok-4-1-fast)). | Documented at `models/xai/grok-4-x-search/chunks/01-substrate.md` (new file 2026-05-18). |
| Perplexity Sonar Pro (200K) | `sonar-pro` | **active — already in lineup** | Profile exists in `models/perplexity/sonar-pro/`; the 200K context window was under-emphasized in routing-rules. | Confirmed via routing-rules.md L91 ("$3/$15 with built-in web search + JSON Schema output + 200k context in a single API call"). |

Future rounds should add full per-model chunks for Claude Mythos Preview (overview, restrictions, capability profile) once Mitchell either obtains Glasswing access or determines the model should remain documented-only.

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
