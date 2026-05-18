---
capability: known-limitations
scope: cross-model
models_covered: 13
last_updated: 2026-05-17
source_authority: dealbreaker_verified (11/13 models) + self_research (2/13)
confidence: high
---

# Known Limitations — Cross-Model Reference

After dealbreaker adjudication, here's what each model verifiably struggles with. Entries marked `[INFERRED]` survived Dealbreaker review as caveats rather than confirmed facts; entries marked `[UNKNOWN]` represent gaps where documentation simply does not exist.

---

## Universal Frontier-Model Limitations

These failure modes apply across all 13 models regardless of provider and should be assumed present unless a specific model has documented mitigations.

**Citation hallucination at length.** All frontier models will occasionally cite sources that do not support — or do not exist to support — the claim made. Rate accelerates with document volume, narrow topic domains, and long output length. The Sonar family compounds this through retrieval-citation infrastructure: CJR audited Sonar Pro's citation stack and found ~37% of citations problematic. No model is exempt; implement citation grounding checks on any output that will be acted upon.

**Long-context recall degradation.** Every model degrades in some form as context fills. The specific failure shapes differ: Anthropic models show attention drift on low-salience early-prompt details; Gemini models show TTFT degradation; Sonar Reasoning Pro's `<think>` blocks compete with input documents for headroom. No model has published NIAH benchmarks across its full claimed context window. Do not assume that "supports 1M tokens" means "reliably recalls facts at 1M tokens."

**Structured output semantic drift.** All models can satisfy JSON syntax while failing semantic constraints — producing schema-valid output that violates the schema's intended meaning. Deeply nested schemas with conditional grammar constraints are the highest-risk case. Mitigation: validate semantics programmatically, not just syntactically.

**Refusal on dual-use topics.** Every model in this set has some over-refusal pattern on security research, medical advice, dual-use cybersecurity code, or high-stakes financial calculations. Rates vary significantly (Claude Sonnet 4.6: 0.41% on straightforward benign requests; Claude Opus 4.7: 0.28%) but no model is zero.

**Knowledge cutoff staleness without grounding.** All models have training cutoffs between November 2024 and February 2025 (with Grok 4.3's cutoff contested between those two dates). Grounded models (Sonar family, Grok with X_SEARCH, Gemini with Google Search) mask this at runtime but cannot mask it when grounding is disabled or unavailable.

---

## Model-Specific Gotchas

### Anthropic: Claude Haiku 4.5
Source: `anthropic/claude-haiku-4-5/chunks/41-known-limitations.md`

1. **No adaptive thinking (architectural, not fixable).** Haiku cannot dynamically reallocate reasoning compute once a chain has started. Tasks with ambiguous reasoning depth — nuanced heuristics, open-ended analysis, multi-step chains where optimal depth is unknown — must route to Sonnet 4.6. Prompting cannot compensate.
2. **~49% computer-use failure rate.** OSWorld benchmark: 49.3% failure. Suitable for scaffolded, supervised agentic loops only. Unattended production automation with real-world consequences requires human-in-the-loop or Sonnet 4.6.
3. **Unit error on documented pricing (R2 audit catch).** Haiku's round-2 self-report stated $0.30 per 1,000 input tokens — off by ~300x from the correct base rate (~$0.001/1k). Verify pricing from official Anthropic docs, not model self-reports.

### Anthropic: Claude Sonnet 4.6
Source: `anthropic/claude-sonnet-4-6/chunks/41-known-limitations.md`

1. **GUI over-eagerness / hallucinated completion.** In GUI-based agentic tasks, Sonnet 4.6 claims task completion when underlying actions fail ("email sent" when the send button was broken). More pronounced than in Opus 4.6. GUI automation pipelines where false success confirmation causes downstream damage must use Opus 4.7 with explicit confirmation gates.
2. **Post-launch quality regression (March 9 – April 7, 2026; now fixed).** Root cause: reasoning effort reduced from high to medium to lower latency, causing 1,400+ frustration events across 50 sessions. The regression is resolved but signals the model is sensitive to reasoning-effort configuration — operators who tune `reasoning_effort` should benchmark before deploying.
3. **4-breakpoint ceiling 400 error.** API returns a 400 error at 5+ explicit `cache_control` breakpoints (including automatic caching's implicit slot). Complex agent pipelines with many explicit breakpoints fail silently — no graceful degradation. Plan cache architecture with this ceiling in mind.

### Anthropic: Claude Opus 4.7
Source: `anthropic/claude-opus-4-7/chunks/41-known-limitations.md`

1. **Instruction-literalism regression.** Anthropic documents this explicitly: "where previous models interpreted instructions loosely or skipped parts entirely, Opus 4.7 takes the instructions literally." Prompts written for earlier Claude models produce unexpected, sometimes argumentative results. Migrate prompts deliberately when upgrading from 4.6 or earlier.
2. **Tokenizer inflation — sticker price is misleading.** Opus 4.7 generates 1.0–1.35x more tokens per identical input vs. Opus 4.6. Real-world cost increases at unchanged per-token sticker. Token-counting code calibrated to 4.6 produces wrong counts on 4.7. Recalibrate cost models on upgrade.
3. **4,096-token minimum cache prefix (silent skip).** Prompts shorter than 4,096 tokens are not cached even when marked with `cache_control`; no error is returned; `cache_creation_input_tokens` = 0 in usage response. This is 4x the minimum required by Sonnet 4.6. Short-prompt cache optimization strategies fail silently on Opus 4.7.
4. **`budget_tokens` breaking change (HTTP 400, no deprecation warning).** Added 2026-05-18 (dealbreaker-v2 verification W7). API calls using `thinking: { type: "enabled", budget_tokens: N }` against Opus 4.7 return **HTTP 400 immediately** — no fallback, no warning, no deprecation notice. **Migration path:** replace with `thinking={"type": "adaptive"}` + `output_config={"effort": "low|medium|high|xhigh|max"}`. Effort levels: `low` < `medium` (default) < `high` < `xhigh` < `max`. Additional gotchas: (a) thinking tokens are HIDDEN by default in adaptive mode but STILL BILLED; (b) interleaved thinking is ON by default in adaptive mode (was a beta header in 4.6); (c) combined with the tokenizer inflation in #2, the silent cost increase is real even at unchanged sticker price. Pipelines requiring exact token-level budget control must stay on Sonnet 4.6 or Haiku 4.5. Sources: [dev.to migration guide](https://dev.to/ji_ai/opus-47-killed-budgettokens-what-changed-and-how-to-migrate-3ian), [OpenRouter Claude 4.7 migration](https://openrouter.ai/docs/cookbook/evaluate-and-optimize/model-migrations/claude-4-7), [Caylent deep-dive](https://caylent.com/blog/claude-opus-4-7-deep-dive-capabilities-migration-and-the-new-economics-of-long-running-agents).

### Google: Gemini 3 Flash
Source: `google/gemini-3-flash/chunks/41-known-limitations.md`

1. **Thought Signature 400 errors — the most common production failure mode.** All function calling and image generation requests must include and round-trip Thought Signatures from prior turns. Omitting them returns a hard 400 error, even at `thinking_level: minimal`. Standard LLM integration patterns that rebuild message history from scratch on each call will fail.
2. **Temperature loops at values below 1.0.** Google officially warns against adjusting temperature away from 1.0. Setting `temperature=0.0` — the most common "determinism" pattern — causes repetitive looping or degraded logic on complex reasoning tasks. Workflows requiring deterministic output cannot use this model as-is.
3. **SDK output truncation via default maxOutputTokens.** Default `maxOutputTokens` in many SDKs is 8,192 — silently truncates long outputs without error. Must explicitly set to 65,536 for long-form tasks.

### Google: Gemini 3.1 Pro
Source: `google/gemini-3-1-pro/chunks/41-known-limitations.md`

1. **Four distinct 400-error failure modes** requiring explicit production SDK handling: (a) thought signatures must be preserved in multi-turn function calling; (b) `thinkingLevel` and `thinkingBudget` cannot be set simultaneously; (c) image generation without metadata signatures; (d) temperature warning (same as Flash — temperature != 1.0 risks loops). All four are documented in `_official-gemini-3-api.md` and require wrapper-level handling.
2. **TTFT of 28.8–33.8s routinely exceeds default timeouts.** Client connection wait times below 40s will see first-token timeouts at peak load. Must configure extended timeout budgets.
3. **Structured output silent empty strings.** Deeply nested schemas with conditional grammar constraints silently return empty strings instead of throwing an error. `[INFERRED]` — no error signal means failed structured output goes undetected without schema validation.

### OpenAI: GPT-5.3 Chat Latest
Source: `openai/gpt-5-3-chat-latest/chunks/41-known-limitations.md`

1. **Silent 272k context loss on model-slot routing.** When routing from `chat-latest` by price, context silently shrinks from 400k to 128k with no warning. Teams relying on the `chat-latest` alias without pinning the specific model can lose 272k of effective context without any error signal.
2. **OpenAI itself does not recommend this model for production.** The official recommendation is GPT-5.5. Using GPT-5.3 Chat Latest in production requires explicit acknowledgment that the provider considers it a non-production model.
3. **No benchmark data published (SWE-bench, MMLU, GPQA).** `[UNKNOWN]` Routing decisions based on assumed performance are ungrounded. Run workload-specific evals before relying on this model for quality-sensitive tasks.

### OpenAI: GPT-5.4
Source: `openai/gpt-5-4/chunks/41-known-limitations.md`

1. **`phase` parameter loss breaks tool-agent replay.** In long-running agents, if the `phase` parameter is lost across retries or replays, preambles are misread as final answers. No API-level guard exists — this is an operational discipline requirement.
2. **"Output nothing else" instruction is unreliable on mini/nano siblings.** OpenAI explicitly warns against this wording for smaller siblings; schema enforcement or explicit delimiters are required instead. Builds targeting the GPT-5.4 family (not just base) must account for sibling behavior variance.
3. **`reasoning_effort: xhigh` is a bad default.** Adds cost and latency without consistent quality benefit. OpenAI's own prompt guidance: start at `medium`, benchmark before raising. Teams inheriting prompts that set `xhigh` as the default are paying for latency without a quality return.

### OpenAI: GPT-5.5
Source: `openai/gpt-5-5/chunks/41-known-limitations.md`

1. **SWE-bench Pro deficit vs. Claude Opus 4.7 (–5.7pp).** GPT-5.5 58.6% vs. Opus 4.7 64.3%. This is a routing-relevant gap, not noise. For hard real-world software engineering tasks, Claude Opus 4.7 is the better default.
2. **GPT-5.4-style process-heavy XML prompts produce suboptimal results.** Migration from GPT-5.4 to GPT-5.5 requires prompt migration — not just model substitution. Teams upgrading without rewiring prompts to shorter, outcome-first patterns will see degraded quality even at equal capability.
3. **Tool-loop persistence on incorrect plans.** GPT-5.5 can persist too long on a wrong plan when the environment returns ambiguous results. Agentic pipelines need explicit loop-break conditions and max-retry ceilings, not just goal-completion checks.

### Perplexity: Sonar Pro
Source: `perplexity/sonar-pro/chunks/41-known-limitations.md`

1. **No published benchmarks on any reasoning or coding dimension.** `[UNKNOWN]` No GPQA, AIME, MATH, SWE-Bench, or HumanEval scores. For quality-sensitive routing, capability on these axes is genuinely unknown — not weak, not strong. Treat as a search-augmented interface, not a reasoner.
2. **Citation hallucinated relevance.** Citations can attribute information to a page that mentions but does not strongly support the claimed fact. Spot-check citations in high-stakes domains; do not treat Sonar Pro's citation list as verified sourcing.
3. **API-level image input undocumented.** Consumer product vision features may not exist at the API level. `[UNKNOWN]` Do not assume vision capability without testing the specific API endpoint.

### Perplexity: Sonar Deep Research
Source: `perplexity/sonar-deep-research/chunks/41-known-limitations.md`

1. **Silent output truncation — most dangerous failure mode.** Outputs end abruptly mid-section around 2,000–3,000 tokens with `finish_reason: stop` and no error. Appears as a complete result. `[INFERRED from community reports]` Must detect abrupt endings heuristically and verify expected sections are present.
2. **5 RPM rate ceiling + 20–60+ second latency.** Not a viable component in any high-throughput or interactive system. Budget, scheduling, and retry logic must account for this ceiling — it cannot be worked around with parallelism at the per-user level.
3. **Document hallucination on narrow topics.** SDR may confidently reference non-existent documents on speculative or niche topics (e.g., invented OECD whitepapers), drawing on training patterns for real organizations. Research outputs on narrow topics require source verification.

### Perplexity: Sonar Reasoning Pro
Source: `perplexity/sonar-reasoning-pro/chunks/41-known-limitations.md`

1. **HTTP 400 on non-alternating role sequences.** API requires strict user/assistant role alternation after optional system message. Consecutive user turns — a common pattern in multi-turn orchestration — return a hard 400 error. Perplexity-specific wrappers must enforce alternation.
2. **`<think>` block handling complexity.** Raw `<think>` output must be stripped or separately rendered before presenting to users. Additionally, when retrieved documents are noisy, the reasoning trace can entangle incorrect facts into the `<think>` block, producing confident-but-wrong justifications that look like visible reasoning.
3. **No prompt caching.** Repeated large contexts are re-billed in full. For research workflows that iterate on the same document set, cost grows linearly with no mitigation available at the API level.

### xAI: Grok 4.3
Source: `xai/grok-4-3/chunks/41-known-limitations.md`

1. **Knowledge cutoff conflict, unresolved.** Official xAI documentation states November 2024; a secondary source documents December 2025. The conflict is a verified Dealbreaker strike (Strike A) and remains open. Tasks where static training-data knowledge in the Nov 2024–Dec 2025 window is load-bearing should not route to Grok 4.3 without X_SEARCH as a substitute.
2. **Rate limits, output cap, and cache-write multiplier all undocumented.** `[UNKNOWN]` Absence of documentation is itself the operational limitation. Budget and scaling projections for Grok 4.3 cannot be made from first-party data alone.
3. **No GPQA-diamond score published.** `[UNKNOWN]` Cannot benchmark Grok 4.3's reasoning quality cross-model on the most common frontier benchmark. Routing decisions between Grok 4.3 and reasoning-benchmarked peers on hard intellectual tasks are ungrounded without custom evals.

### xAI: Grok 4.20 Multi-Agent
Source: `xai/grok-4-20-multi-agent/chunks/41-known-limitations.md`

1. **Sub-agent token billing multiplier — cardinal cost surprise.** 2–4x effective output cost at 4-agent depth; 8–16x at 16-agent xhigh. At $6/M output base, realized cost is $48–$96/M effective output at maximum depth. A $0.10 single-agent task costs $0.40–$1.60. Teams projecting budget from the sticker price will systematically undercount by an order of magnitude.
2. **No client-side function calling — non-trivial migration tax.** Teams with existing custom-tool inventories on Claude Opus 4.7, GPT-5.5, or Gemini must host those tools as remote MCP servers. This is not a configuration change; it is an infrastructure migration.
3. **Explicit beta instability with documented breaking-change risk.** xAI warns of potential breaking API changes. Not appropriate for SLA-bound production traffic without fallback tolerance. Beta status is the documented state as of last research round.

---

## Operational Traps

These are cross-provider footguns that surprise new users regardless of which model they're integrating.

**Anthropic prompt cache invalidation on tool toggling.** Cache breaks when the tool list changes between calls. In practice: enabling or disabling a tool between turns — a common agentic pattern — flushes the cache and resets to cold billing. Systems that dynamically add/remove tools per turn pay full input costs on every call regardless of cache configuration.

**Gemini Thought Signature 400 errors.** Both Gemini 3 Flash and Gemini 3.1 Pro share this failure mode. Any function calling integration that rebuilds the conversation history from scratch on each call — rather than preserving and forwarding thought signatures from prior turns — will produce hard 400 errors. This affects both models at any thinking level, including minimal. Standard OpenAI-pattern integrations ported to Gemini will hit this immediately.

**Grok 4.20 MA sub-agent token billing multiplier.** At 16-agent xhigh, effective output cost is 8–16x the sticker price. At $6/M output tokens sticker, realized cost is $48–$96/M effective output. This is not documented on the pricing page; it emerges from the multi-agent architecture. Teams discovering this post-deployment face a budget overrun with no mitigation short of reducing agent count or depth.

**Sonar Deep Research silent truncation.** Outputs ending at ~2,000–3,000 tokens return `finish_reason: stop` with no error. The response looks complete. This is the most dangerous failure mode in the Perplexity stack because it is invisible at the API level. Any downstream system that acts on the response as complete will act on a truncated research artifact.

**GPT-5.5 reasoning tokens eating output budget.** Reasoning token consumption is not separately metered from output token budget in all configurations. Workflows that set tight `max_tokens` ceilings to control cost may find the reasoning phase consuming most of that budget before any output is generated, producing truncated or empty responses on complex tasks.

**Anthropic 4-slot cache breakpoint ceiling.** The Anthropic API allows up to 4 explicit `cache_control` breakpoints per request; automatic caching consumes one slot. A 5th slot returns a 400 error. Complex agent pipelines with many explicit breakpoints will hit this ceiling. No graceful degradation — the call fails hard.

---

## Models with Significant Unresolved Unknowns

These models have `[UNKNOWN]` markers dominating critical operational parameters. Routing them into production systems requires custom evaluation to fill the gaps.

**Grok 4.3** — Rate limits, output cap, and cache-write multiplier are all undocumented. No GPQA-diamond score. Knowledge cutoff is contested between two dates. Four of the five most important operational parameters for scaling are genuinely unknown. Treat as a strong research model with unquantified production risk.

**GPT-5.3 Chat Latest** — No published benchmark data (SWE-bench, MMLU, GPQA). OpenAI explicitly does not recommend it for production API use. The model's capability profile is largely inferred from its positioning in the model family. Using it in production without custom evals means routing based on assumption.

**Sonar Pro** — No published GPQA, AIME, MATH, SWE-Bench, or HumanEval scores. API-level vision support undocumented. No needle-in-a-haystack benchmark. Capability outside its documented search-augmentation use case is genuinely unknown, not merely weaker than peers.

**Sonar Deep Research** — Not verified by Dealbreaker (self_research only, confidence: medium). Knowledge cutoff undisclosed. No benchmark data on any reasoning or coding dimension. Silent truncation behavior inferred from community reports, not provider documentation.

---

## Summary: Under 200 Words

**Most operationally buggy models:** Grok 4.20 Multi-Agent (beta instability, billing multiplier, 400 errors on Chat Completions API) and the Gemini family (four distinct 400-error failure modes, temperature loops, SDK truncation defaults). Both require the most API-wrapper hardening before production deployment.

**Most refusing models:** Gemini 3.1 Pro inherits Google's conservative safety protocols and is most likely to over-refuse on medical, dual-use cybersecurity, and high-stakes financial requests. Claude Sonnet 4.6 has the highest documented over-refusal rate in the Anthropic family (0.41% on straightforward benign requests).

**Biggest footgun that surprises new users:** The Grok 4.20 Multi-Agent billing multiplier. The sticker price is $6/M output tokens. At 16-agent xhigh depth, realized cost is $48–$96/M effective output — an 8–16x surprise with no warning on the pricing page and no API signal during the run. Budget overruns are discovered after the fact. This single trap has more financial impact potential than all the 400-error gotchas combined.
