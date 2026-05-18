---
generated: 2026-05-17
covers_models: 13 (all Tier 1)
status: active
purpose: routing axis Mitchell explicitly requested — per-provider prompt patterns and meta-prompting techniques that materially change output quality
---

# Meta-Prompting — Cross-Provider Patterns

**Axis:** the provider-specific prompt structures, parameters, and meta-techniques that materially change output quality. Calling the same model with default settings vs. provider-recommended patterns can change cost, latency, and correctness by 2-10x.

**Why this axis matters for routing:** Knowing which model is "best" for a task is only half the answer. The other half is knowing the right prompt structure + parameters to get the model's best output. Routing logic that ignores this gets suboptimal results even from the right model.

## Provider-level meta-prompting techniques (consult before dispatch)

### Anthropic (Claude Opus 4.7, Sonnet 4.6, Haiku 4.5)

**Source:** `api-guides/anthropic/_official-prompt-caching.md` + `_official-tool-use-caching.md`

| Technique | When to use | Effect |
|---|---|---|
| **XML tag delimiters** (`<task>`, `<context>`, `<examples>`) | Always for structured prompts | Claude is RLHF'd to attend to XML structure heavily; improves instruction following by ~15-25% on complex prompts |
| **Role + task injection in system prompt** | Always | System prompt is cached separately from user message; put stable identity/role there for cache savings |
| **`cache_control: ephemeral` breakpoints** | Any prompt with >1024 tokens of stable prefix (system, tools, large docs) | 90% input-token cost reduction on cache hits; 1.25x write cost first call |
| **Extended thinking via `budget_tokens`** | Hard reasoning tasks on Sonnet 4.6 (Opus 4.7 dropped this surface) | Visible reasoning budget control; better for tasks where you want to cap reasoning cost predictably |
| **Adaptive thinking** (Opus 4.7 + Sonnet 4.6 + Haiku 4.5) | Most tasks | Model decides reasoning depth dynamically; no manual tuning needed |
| **Tool-use schema with `defer_loading`** (Opus 4.7 only) | Tool-heavy agents with >5 tools | Tools discovered on-demand via tool-search instead of loaded upfront; preserves prefix cache when toolset grows |
| **"Think step by step" prompt prefix** | NEVER (anti-pattern with extended-thinking-enabled models) | Causes meta-reasoning loops in modern Claude; thinking modes do this internally |

**Quick reference:** Claude responds best to clear XML structure + cache breakpoints + adaptive thinking on by default. Avoid CoT prompts; use the thinking surface instead.

### OpenAI (GPT-5.5, GPT-5.4, GPT-5.3 Chat)

**Source:** `api-guides/openai/_official-prompt-guidance.md` + `_official-reasoning.md` + `_official-gpt-5-2-prompting-cookbook.md`

| Technique | When to use | Effect |
|---|---|---|
| **Responses API (vs Chat Completions)** | Most modern GPT-5 work | Preserves reasoning items across turns; better caching; required for some features |
| **`reasoning_effort` parameter** (none/low/medium/high/xhigh) | Set explicitly per task | Default medium; raise to high/xhigh for hard reasoning; `none` for instant lookups |
| **Structured Outputs with `response_format: {type: "json_schema", strict: true}`** | Any structured-data extraction | Guaranteed valid JSON; better than describing schema in prompt |
| **Stable prefix at top, dynamic content at end** | Any caching-sensitive workflow | `usage.prompt_tokens_details.cached_tokens` confirms cache hits |
| **`previous_response_id` for multi-turn state** | Stateful conversations | Server-side state; cheaper than passing full history |
| **State outcome + success criteria, NOT step-by-step** | Reasoning tasks | GPT-5.5 prefers outcome-first prompts; step-by-step adds noise |
| **Personality steering for customer-facing UX** | Conversational deployments | GPT-5.5 defaults to terse/direct; explicitly steer for warmth if needed |
| **Compaction via `/responses/compact`** | Long agent runs hitting context limits | Loss-aware compression of prior state; keeps task-relevant info |

**Quick reference:** Responses API + explicit `reasoning_effort` + Structured Outputs + outcome-first prompts. Avoid putting the full schema in the prompt text.

### Google Gemini (3.1 Pro, 3 Flash)

**Source:** `api-guides/google/_official-gemini-3-api.md` + `_official-thinking.md` + `_official-prompt-design.md`

| Technique | When to use | Effect |
|---|---|---|
| **`thinking_level`** (minimal/low/medium/high) | Set per task | High is default for Pro; raise/lower based on complexity. Cannot use `thinking_budget` simultaneously (HTTP 400) |
| **`thought_signatures`** must be returned across turns | Function-calling chains, image editing | Required for state continuity; missing signature = HTTP 400 on strict-validation calls |
| **`media_resolution`** parameter per input | Vision tasks | `media_resolution_high` for OCR, `_medium` for PDFs, `_low` for general video |
| **Temperature MUST stay at 1.0** | Always for Gemini 3 | Lowering causes looping; documented anti-pattern |
| **Native `google_search` tool + `url_context` tool combined** | Web-grounding tasks | Gemini's unique trick: combine Search grounding + Function Calling + Structured Outputs in ONE call (not possible on most providers) |
| **System instructions at top, dynamic content at end** | Same caching pattern as Anthropic/OpenAI | Implicit caching auto-on for Gemini 3.1 Pro — 90% off cache reads automatically |
| **`systemInstruction` field, not in user message** | Always | Gemini parses it separately; better instruction adherence |

**Quick reference:** Default `thinking_level: high` + temperature 1.0 + native Search grounding + return `thought_signatures` across turns. Implicit caching is automatic — no config needed.

### xAI (Grok 4.3, Grok 4.20 Multi-Agent)

**Source:** `api-guides/xai/_official-models-overview.md` (sparse — most patterns inferred from converged profiles)

| Technique | When to use | Effect |
|---|---|---|
| **Three reasoning-intensity levels on Grok 4.3** | Set per task | Lower = faster + cheaper; higher = better complex reasoning |
| **`tools: [{type: 'web_search'}, {type: 'x_search'}]`** via `/v1/responses` | Real-time web + X grounding | Unique to xAI; no other provider has native X-graph access |
| **Multi-Agent variant uses `/v1/responses` endpoint NOT `/chat/completions`** | grok-4.20-multi-agent | HTTP 400 "Multi Agent requests are not allowed on chat completions" if you use the wrong endpoint |
| **Multi-Agent: leader-only output, encrypted sub-agent state** | grok-4.20-multi-agent | Don't expect to see individual agent responses; only synthesized final |
| **Date anchoring in system prompt** | Always (per `lib/council.mjs` `DATE_ANCHOR_DEFAULT()`) | Prevents jailbreak refusals on "2026 seems fictional" grounds; required since 1953bee commit |

**Quick reference:** Use `/v1/responses` for multi-agent or tools. Always include date anchor. Be aware of 2-16x token billing multiplier on multi-agent xhigh.

### Perplexity (Sonar Pro, Sonar Deep Research, Sonar Reasoning Pro)

**Source:** `api-guides/perplexity/_official-models-overview.md` + converged Sonar profiles

| Technique | When to use | Effect |
|---|---|---|
| **`search_domain_filter: ["site1.com", "site2.com"]`** | When sources should be constrained | Restricts grounding to named domains; useful for company-research consistency |
| **`search_recency_filter: "day"/"week"/"month"/"year"`** | Time-bounded queries | Excludes results older than the filter; crucial for "what's happening now" tasks |
| **`return_citations: true`** | Always | Sonar's marquee differentiator — get the URLs for every claim |
| **Sonar Reasoning Pro emits visible `<think>` blocks** | Reasoning tasks | Parse them OUT before downstream consumption; they're not for display |
| **No function calling, no MCP, no tools[] parameter** | Routing decision | If you need tool use, route to Anthropic/OpenAI/Google/xAI — Sonar is research-only |
| **No structured-output strict mode** | If you need JSON schema enforcement | Sonar returns prose with citations; use downstream model to extract structured data |

**Quick reference:** Always use `search_domain_filter` + `search_recency_filter` + `return_citations: true`. Parse out `<think>` blocks from Reasoning Pro output. Don't try to use Sonar for tool calls.

## Cross-provider patterns that ALL benefit from

Every model in the council responds better with these patterns:

1. **Few-shot examples in the prompt** — 1-3 examples of the desired output shape; lower temperature need
2. **Explicit success criteria** — "Done = response contains X, Y, Z; cite sources for each" instead of vague "do well"
3. **Cite sources / mark `[INFERRED]`** instruction — reduces hallucination across all providers
4. **One task per call, no compound instructions** — chain via orchestrator instead
5. **Avoid generic praise of the model in system prompt** — "you are highly capable" makes some models slightly worse; specifics work better

## Anti-patterns by provider

| Provider | Anti-pattern | Why |
|---|---|---|
| Anthropic | "Think step by step" prefix | Causes meta-reasoning loops with extended thinking enabled |
| OpenAI | Putting JSON schema in prompt text | Use `response_format` parameter instead — guaranteed enforcement |
| Google | Temperature < 1.0 on Gemini 3 | Causes looping per official guidance |
| Google | `thinking_level` + `thinking_budget` in same request | HTTP 400 |
| xAI | `/v1/chat/completions` for multi-agent | HTTP 400 — use `/v1/responses` |
| xAI | Calling without date anchor | Jailbreak-refusal probability spikes on 2026-dated queries |
| Perplexity | Asking for structured JSON output without downstream extraction | Sonar returns prose; no strict schema enforcement |

## Routing-level meta-prompting decisions

When the researcher agent picks a model, it should ALSO pick:

1. **The right API endpoint** (Chat Completions vs Responses vs Interactions vs Live)
2. **The right parameter set** (`reasoning_effort`, `thinking_level`, `media_resolution`, `search_recency_filter`)
3. **The right prompt structure** (XML for Anthropic, outcome-first for OpenAI, system_instruction for Gemini)
4. **The right caching/state pattern** (cache_control breakpoints, previous_response_id, implicit caching)

These are encoded in `api-guides/{provider}/_official-*.md` (read those before final dispatch).

## Sources

- `api-guides/anthropic/_official-prompt-caching.md` (81 KB faithful mirror)
- `api-guides/openai/_official-prompt-guidance.md` (54 KB faithful mirror)
- `api-guides/google/_official-gemini-3-api.md` (15 KB faithful mirror) + `_official-thinking.md`
- `api-guides/xai/_official-models-overview.md` (sparse — supplemented by converged profile)
- Converged per-model chunks at `models/{provider}/{slug}/chunks/{NN}-*.md`
- `lib/council.mjs` jailbreak-refusal mitigations (date anchor, refusal detector)
