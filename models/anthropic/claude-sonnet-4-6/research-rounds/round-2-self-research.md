---
round: 2
prior_round: round-1-self-research.md
challenges_addressed: round-1-dealbreaker.md
---

# Claude Sonnet 4.6 — Self-Research Profile (Round 2)

## 1. Identity

**What it is:** Claude Sonnet 4.6 is a large language model built by Anthropic, positioned as the mid-tier model in the current Claude 4.x family. Anthropic's official description: "The best combination of speed and intelligence."

**Release date:** February 17, 2026. ([Anthropic announcement](https://www.anthropic.com/news/claude-sonnet-4-6))

**Predecessor:** Claude Sonnet 4.5 (`claude-sonnet-4-5-20250929`). Two upgrades from Sonnet 4.5: (a) 1M context window vs. 200k — the larger operational change for most callers, and (b) adaptive thinking added on top of the retained Extended-thinking surface. The context-window upgrade is the bigger shift for most real-world routing decisions; adaptive thinking is the bigger per-call compute-cost change.

**Official API model ID:** `claude-sonnet-4-6` (dateless pinned snapshot; no dated suffix required). Bedrock: `anthropic.claude-sonnet-4-6`. Vertex AI: `claude-sonnet-4-6`. ([Official models overview](https://platform.claude.com/docs/en/about-claude/models/overview))

**Provider positioning:** Anthropic positions Sonnet 4.6 at $3 / $15 per MTok versus Opus 4.7 at $5 / $25 — 40% lower per-token cost on both input and output. It is NOT positioned as the most capable model (that is Opus 4.7) and NOT the cheapest (that is Haiku 4.5). Official comparative latency: Sonnet is "Fast," Opus 4.7 is "Moderate," Haiku 4.5 is "Fastest." Per artificialanalysis.ai (measured May 2026, Anthropic direct): TTFT 1.36s, throughput 45.4 tokens/sec. Fastest provider configuration: Google (1.01s TTFT), Azure (48.7 t/s throughput). ([artificialanalysis.ai](https://artificialanalysis.ai/models/claude-sonnet-4-6-adaptive))

---

## 2. Core Capabilities

### Reasoning

**(a) What it can do:** Supports both Extended thinking (explicit user-set token budget via `thinking: { type: "enabled", budget_tokens: N }`) and Adaptive thinking (model self-selects reasoning depth based on prompt complexity). Extended thinking is a retained capability from Sonnet 4.5 — it was NOT dropped in Sonnet 4.6. This is the critical in-family differentiator vs. Opus 4.7 (see Section 5).

**(b) Hard limits — GPQA methodology note:** GPQA Diamond scores for Sonnet 4.6 conflict across sources and require effort-level annotation.
- **74.1%** — no-extended-thinking baseline, standard sampling, sourced from [morphllm.com](https://www.morphllm.com/claude-benchmarks) and multiple third-party evaluations.
- **89.9%** — adaptive thinking at max effort, averaged over 10 trials, sourced from [artificialanalysis.ai](https://artificialanalysis.ai/models/claude-sonnet-4-6-adaptive) and the Anthropic system card.

Both numbers are real. 74.1% is the no-thinking baseline; 89.9% is the full adaptive-thinking-max-effort ceiling. For comparison: Opus 4.7 at 94.2% GPQA Diamond ([Vellum](https://www.vellum.ai/blog/claude-opus-4-7-benchmarks-explained)), Gemini 3.1 Pro at 94.3%. The frontier has converged at ~94% on GPQA Diamond — Sonnet 4.6 sits 4–5 points below the frontier at max effort, and ~20 points below at baseline. Graduate-level physics, biology, and chemistry reasoning at maximum precision should route to Opus 4.7 or Gemini 3.1 Pro.

**(c) Concrete example:** Multi-step software architecture problems with N interdependent constraints. This is the designed use case for adaptive thinking. Quality on this type of task is not formally benchmarked; user verification recommended before relying on outputs in production architecture decisions.

**(d) Source:** Extended thinking and adaptive thinking features — official Anthropic docs. GPQA scores — [morphllm.com](https://www.morphllm.com/claude-benchmarks) (74.1% baseline), [artificialanalysis.ai](https://artificialanalysis.ai/models/claude-sonnet-4-6-adaptive) (89.9% max effort). Opus 4.7 GPQA 94.2% — [Vellum](https://www.vellum.ai/blog/claude-opus-4-7-benchmarks-explained).

---

### Tool Use

**(a) What it can do:** Full function calling (parallel and sequential), MCP client and server support, agentic loops with interleaved thinking and tool calls, deferred tool loading that preserves prompt cache. Supports `defer_loading` on tool definitions so dynamically discovered tools do not invalidate the cached prefix. ([Official tool-use caching docs](https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-use-with-prompt-caching))

**(b) Hard limits:** MCP-Atlas score 61.3% vs. Opus 4.7 at 77.3% ([Vellum](https://www.vellum.ai/blog/claude-opus-4-7-benchmarks-explained)) — Sonnet 4.6 loses by 16 points to the current Anthropic flagship on multi-turn MCP orchestration. Route multi-turn MCP work to Opus 4.7 if budget allows. Does not provide native server-side tool execution — code execution, bash, web search are operator-configured client tools, not built-in cloud capabilities.

**(c) Concrete example:** An agentic coding loop where Sonnet 4.6 calls a bash tool, reads output, updates a file via text editor tool, calls tests, and iterates — all in a single extended context session with prompt cache preserved.

**(d) Source:** Official Anthropic tool-use and caching docs. MCP-Atlas Sonnet 4.6 61.3% — [nxcode.io](https://www.nxcode.io/resources/news/claude-sonnet-4-6-complete-guide-benchmarks-pricing-2026). Opus 4.7 MCP-Atlas 77.3% — [Vellum](https://www.vellum.ai/blog/claude-opus-4-7-benchmarks-explained).

---

### Web Grounding

**(a) What it can do:** Web search is available as an operator-configured tool (`web_search_tool`), not a native built-in. When enabled, returns cited results inline.

**(b) Hard limits:** Web search is not default-on — must be explicitly enabled by the API caller. No native real-time grounding equivalent to Gemini 3.1 Pro's integrated Google Search. Freshness is bounded by when the operator triggers a search.

**(c) Concrete example:** A research assistant app that enables web_search_tool to let Sonnet 4.6 pull current pricing data and cite sources inline.

**(d) Source:** [Official tool-use caching docs](https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-use-with-prompt-caching) noting web search enablement invalidates system and messages caches.

---

### Vision

**(a) What it can do:** Accepts image input alongside text (JPEG, PNG, GIF, WEBP). Standard OCR, diagram reading, screenshot analysis. Supports multi-image inputs within the context window. Supports JPEG, PNG, GIF, WEBP formats (documented in official models overview — not [INFERRED]).

**(b) Hard limits:** No native video input. No audio input. Does not match GPT-5.5 on interleaved video+audio tasks.

**(c) Concrete example:** Parsing a complex financial table screenshot and producing structured JSON output.

**(d) Source:** Official models overview (text and image input confirmed). Image formats listed in official media documentation.

---

### Audio / Multimodal

**(a) What it can do:** Text and image only. No native audio or video.

**(b) Hard limits:** No audio input, no audio output, no video input. GPT-5.5 and Gemini 3.1 Pro both support native audio modalities that Sonnet 4.6 does not.

**(c) Concrete example:** N/A — audio/video tasks should be routed to GPT-5.5 or Gemini 3.1 Pro.

**(d) Source:** Official models overview (text and image input only listed).

---

### Code Generation

**(a) What it can do:** SWE-bench Verified score of 79.6% — a 1.2-point gap vs. Opus 4.6 (80.8%) at 40% lower cost and roughly 2x throughput. On a UX-weighted 7-category real-world coding rubric, Sonnet 4.6 scored 68/100 vs. Opus 4.7's 63/100 — Sonnet 4.6 wins by 5 points when rubric weights maintainability and UX quality alongside correctness. (Tyler Folkman, [Substack](https://tylerfolkman.substack.com/p/i-tested-opus-47-against-sonnet-46))

LMArena Code Arena (April 2026): Sonnet 4.6 Elo 1,523, placing third after Opus models ([buildmvpfast.com](https://www.buildmvpfast.com/blog/claude-opus-4-6-lmsys-arena-benchmark-comparison-2026)).

**(b) Hard limits:** Opus 4.7 SWE-bench Verified 87.6% vs. Sonnet 4.6's 79.6% — an 8-point gap on this benchmark. Opus 4.7 also leads 64.3% on SWE-bench Pro. For multi-step agentic coding with high task-failure cost, route to Opus 4.7. Haiku 4.5 at 73.3% SWE-bench Verified is only 6.3 points behind Sonnet 4.6 at 1/3 the cost — for cost-sensitive code workloads where a 6-point pass-rate reduction is acceptable, Haiku 4.5 is a viable route.

**(c) Concrete example:** Debugging a 500-line Python async service, identifying a race condition, generating a patch with a test — completing within a single agentic session without context compaction.

**(d) Source:** SWE-bench scores from [nxcode.io](https://www.nxcode.io/resources/news/claude-sonnet-4-6-complete-guide-benchmarks-pricing-2026). Opus 4.7 SWE-bench Verified 87.6%, SWE-bench Pro 64.3% — [Vellum](https://www.vellum.ai/blog/claude-opus-4-7-benchmarks-explained). Haiku 4.5 73.3% — [morphllm.com](https://www.morphllm.com/claude-benchmarks). Tyler Folkman benchmark — [Substack](https://tylerfolkman.substack.com/p/i-tested-opus-47-against-sonnet-46).

---

### Long Context

**(a) What it can do:** 1M token context window (~750k words, ~3.4M unicode chars). Opus 4.7 uses a new tokenizer where 1M tokens covers only ~555k words — Sonnet 4.6's older tokenizer packs 35% more words per nominal token count. At the same 1M token window, Sonnet 4.6 holds ~195k more words than Opus 4.7. For text-heavy long-document tasks above ~550k words, Sonnet 4.6's effective context exceeds Opus 4.7's. This is an inherited advantage from not upgrading tokenizers, not a feature investment. Supports up to 300k output tokens via the Batch API with the `output-300k-2026-03-24` beta header. ([Official models overview](https://platform.claude.com/docs/en/about-claude/models/overview))

**(b) Hard limits:** Haiku 4.5 has only a 200k token context window — for tasks exceeding 200k tokens, Haiku cannot substitute. Deep in-context coherence at 600k–1M tokens has not been formally benchmarked by Anthropic [UNKNOWN — would need a RULER or NIAH benchmark at full window length].

**(c) Concrete example:** Analyzing a full codebase (50+ files), maintaining coherent state across 800k+ tokens of conversation history, and producing a consistent architectural recommendation.

**(d) Source:** Context window figures from official models overview (lines 37, 38). Tokenizer word-coverage comparison — `_official-models-overview.md` line 37 (explicit parenthetical for Opus 4.7). Long-context recall at full window — [UNKNOWN].

---

### Agentic / Computer Use

**(a) What it can do:** Supports computer use (browser, OS control) via the computer use tool. Scores 72.5% on the computer use benchmark, near-identical to Opus 4.6's 72.7%. ([morphllm.com](https://www.morphllm.com/claude-benchmarks))

**(b) Hard limits:** Over-eager GUI task completion is a documented failure mode: in GUI-based tasks, Sonnet 4.6 tends to hallucinate success — claiming "email sent" when a button was broken — more than Opus 4.6. Operators building GUI automation agents should add explicit confirmation steps or use Opus 4.7 for higher-stakes computer-use tasks. ([rootly.com](https://rootly.com/blog/claude-sonnet-4-6-benchmark-results-and-lessons-for-ai-sre))

**(c) Concrete example:** Filling out a multi-step web form with branching logic, screenshotting and confirming field values before proceeding.

**(d) Source:** Benchmark scores from [morphllm.com](https://www.morphllm.com/claude-benchmarks). Failure mode from [rootly.com benchmark report](https://rootly.com/blog/claude-sonnet-4-6-benchmark-results-and-lessons-for-ai-sre).

---

### Structured Output

**(a) What it can do:** Sonnet 4.6 supports strict tool use (`strict: true`) and JSON outputs (`output_config.format`), both of which compile JSON schemas into grammar that constrains generation. Compiled grammars cache for 24 hours from last use, separate from prompt caching — an agent that goes idle for >24h pays the grammar-compile latency hit on the next call. Deferred tool loading does not break grammar construction — strict mode applies to the full toolset regardless of which tools are deferred. ([Official tool-use caching docs](https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-use-with-prompt-caching))

**(b) Hard limits:** Complex schemas with optional parameters, union types, or deep nesting interact non-linearly with grammar size and can refuse to compile. Operators must implement validation loops for complex schema workloads.

**(c) Concrete example:** Generating a structured job evaluation report conforming to a 12-field schema across 100 batch items, with consistent field types.

**(d) Source:** Official tool-use caching docs on strict mode and grammar construction. Grammar 24h expiry — structured-outputs documentation per sibling profile cross-reference.

---

## 3. Operational

### Pricing (per 1M tokens, Claude API)

| Token type | Price |
|---|---|
| Input (base) | $3.00 |
| Output | $15.00 |
| 5-min cache write | $3.75 (1.25x base) |
| 1-hour cache write | $6.00 (2x base) |
| Cache read (hit) | $0.30 (0.10x base) |
| Batch API input | $1.50 (50% discount — documented in `_official-prompt-caching.md` line 285, stacks with cache pricing) |
| Batch API output | $7.50 (50% discount — same source) |

Source: [Official prompt caching pricing table](https://platform.claude.com/docs/en/build-with-claude/prompt-caching) and `_official-prompt-caching.md` line 285.

### Latency

Comparative latency: "Fast" (per official overview). Specific TTFT and throughput per artificialanalysis.ai (Anthropic direct, May 2026): TTFT 1.36s (below-average for price tier, median 1.60s), throughput 45.4 tokens/sec (below-average, median 56.3 t/s). Fastest provider: Google at 1.01s TTFT / Azure at 48.7 t/s throughput. ([artificialanalysis.ai](https://artificialanalysis.ai/models/claude-sonnet-4-6-adaptive))

### Rate Limits

Sonnet 4.x rate limits pool traffic across Sonnet 4.6, Sonnet 4.5, and Sonnet 4. Tier 1 (after $5 cumulative spend): 50 RPM / 30,000 ITPM (sourced from Morph rate limits guide and the official rate-limits page). Tier 2 ($200 cumulative): 2,000 RPM / 800,000 ITPM. Tier 4 ($400 cumulative): 4,000 RPM / 2,000,000 ITPM / 800,000 OTPM. Source: [morphllm.com rate-limits guide](https://www.morphllm.com/claude-rate-limits) and [platform.claude.com/docs/en/api/rate-limits](https://platform.claude.com/docs/en/api/rate-limits).

**Critical operational note:** For most Claude models, only uncached input tokens count toward ITPM rate limits. `cache_read_input_tokens` (tokens read from cache) do NOT count toward ITPM. This means cache-warm workloads can sustain dramatically higher effective throughput than nominal ITPM limits suggest. Source: official rate-limits documentation, corroborated by Opus 4.7 Round 2 sibling profile.

### Prompt Caching

Fully supported. Both automatic caching (top-level `cache_control` on request body) and explicit cache breakpoints (per content block). Default TTL: 5 minutes (refreshed for free on each cache hit). 1-hour TTL available at 2x base input price. Cache hierarchy: `tools → system → messages`; changes at any level invalidate that level and downstream.

**Minimum cacheable prefix size: 1,024 tokens** for Sonnet 4.6 (vs. 4,096 tokens for Opus 4.7, Opus 4.6, and Claude Mythos Preview). Source: `_official-prompt-caching.md` line 650. Short-prompt high-volume workloads can use prompt caching on Sonnet 4.6 but cannot on Opus 4.7 — another in-family Sonnet 4.6 advantage on cost-sensitive pipelines.

**4-breakpoint ceiling:** The API allows up to 4 explicit `cache_control` breakpoints per request. Automatic caching consumes one of those 4 slots. Long agent loops that add more than 4 explicit breakpoints receive a 400 error — silent failure mode in complex pipelines. Source: `_official-prompt-caching.md` line 572.

**Automatic caching platform availability:** Automatic caching is available on Claude API, Claude Platform on AWS, and Microsoft Foundry (beta). Bedrock and Vertex AI do NOT support automatic caching. Source: `_official-prompt-caching.md` note block at line 576.

([Official prompt caching docs](https://platform.claude.com/docs/en/build-with-claude/prompt-caching))

### Batch API

Supported. Sonnet 4.6 can produce up to 300k output tokens per batch item using the `output-300k-2026-03-24` beta header (same as Opus 4.7 and Opus 4.6). Batch API pricing is 50% off synchronous rates — documented in `_official-prompt-caching.md` line 285, not inferred. Batch API discount stacks with prompt caching discounts.

### Knowledge Cutoff

- **Reliable knowledge cutoff:** August 2025 (most extensive and reliable knowledge through this date)
- **Training data cutoff:** January 2026 (broader training data range)

Note: Opus 4.7's reliable knowledge cutoff is January 2026 — 5 months more recent than Sonnet 4.6's August 2025 cutoff. For tasks requiring knowledge of events in Q4 2025 or early 2026, Opus 4.7 has a structural advantage.

Source: [Official models overview](https://platform.claude.com/docs/en/about-claude/models/overview).

### Context Window + Output Cap

- **Context window:** 1M tokens (~750k words, ~3.4M unicode chars)
- **Synchronous max output:** 64k tokens
- **Batch API max output:** 300k tokens (with beta header)

Note: Opus 4.7 synchronous max output is 128k tokens — double Sonnet 4.6's 64k limit. For tasks requiring very long single-turn outputs (>64k tokens) in synchronous mode, route to Opus 4.7.

### Deployment Platforms and Deprecation Calendar

Available on: Anthropic Claude API, Claude Platform on AWS, Amazon Bedrock, Google Vertex AI, Microsoft Foundry.

**Critical: deprecation calendar divergence.** Claude Platform on AWS follows Anthropic's first-party deprecation schedule. Bedrock-direct and Vertex-direct callers may be deprecated on different schedules — do not assume parity with the first-party timeline. Source: `_official-models-overview.md` line 53.

---

## 4. Integrations

### Official SDK Languages

Python, TypeScript/JavaScript, Go, Java, C#, PHP, Ruby.

### MCP Support

Both MCP client (Sonnet 4.6 can call MCP servers as tool endpoints) and MCP server support. Deferred tool loading via ToolSearch preserves prompt cache when dynamically discovering MCP tools.

### Claude Mythos Preview (out-of-band routing)

Claude Mythos Preview (Project Glasswing) is a separate research preview model for defensive cybersecurity workflows, offered invitation-only with no self-serve signup. For cybersecurity-specific tasks, Mythos is the categorical routing alternative above all current-generation models including Sonnet 4.6. Source: `_official-models-overview.md` line 47.

---

## 5. Differentiation

### Where Specific Peers Beat Sonnet 4.6 (current comparators, not legacy)

**Gemini 3.1 Pro beats Sonnet 4.6 on graduate-level scientific reasoning.** GPQA Diamond: Gemini 3.1 Pro at 94.3% vs. Sonnet 4.6 at 89.9% (max effort) or 74.1% (baseline). For science-heavy research Q&A and formal scientific derivations, Gemini 3.1 Pro is the routing choice.

**GPT-5.5 beats Sonnet 4.6 on native audio+video multimodality and knowledge-work benchmarks.** GPT-5.5 accepts audio and video input natively; Sonnet 4.6 does not. GPT-5.5 scores 84.9% on GDPval ([MarkTechPost](https://www.marktechpost.com/2026/04/23/openai-releases-gpt-5-5-a-fully-retrained-agentic-model-that-scores-82-7-on-terminal-bench-2-0-and-84-9-on-gdpval/)) — above Sonnet 4.6's 1,633 GDPval-AA Elo. For audio/video tasks or where GPT-5.5's knowledge-work ceiling matters, GPT-5.5 is the routing choice.

**Claude Opus 4.7 beats Sonnet 4.6 on:**
- SWE-bench Verified: 87.6% vs. 79.6% (8-point gap)
- SWE-bench Pro: 64.3% vs. no published Sonnet 4.6 score ([UNKNOWN])
- GPQA Diamond: 94.2% vs. 89.9% max effort (4-point gap)
- MCP-Atlas multi-turn tool orchestration: 77.3% vs. 61.3% (16-point gap)
- GDPval-AA: 1,753 Elo vs. Sonnet 4.6's 1,633 Elo (120-point lead)
- Synchronous max output: 128k tokens vs. 64k tokens
- Knowledge recency: reliable cutoff Jan 2026 vs. Aug 2025

Cost crossover: Opus 4.7 ($5/$25 per MTok) is 1.67x more expensive on both input and output. Concrete routing rules follow in the sibling matrix below.

**Claude Haiku 4.5 beats Sonnet 4.6 on cost and throughput.** Haiku 4.5 is 3x cheaper on both input ($1/MTok) and output ($5/MTok), and is "Fastest" class. For high-volume triage and classification under 200k tokens where quality floor is acceptable, Haiku 4.5 saves 67% of inference cost. Haiku 4.5 SWE-bench Verified: 73.3% — only 6.3 points behind Sonnet 4.6 at one-third the cost.

---

### What Sonnet 4.6 Is Actually Differentiated At (vs. current comparators)

**#1 — Extended-thinking explicit-budget surface: ONLY available on Sonnet 4.6 and Haiku 4.5 among current-generation models.**

Per `_official-models-overview.md` lines 33-34: Sonnet 4.6 Extended thinking = Yes; **Opus 4.7 Extended thinking = No** (Opus 4.7 has adaptive thinking only). Callers who built workloads around `thinking: { type: "enabled", budget_tokens: N }` on Opus 4.6 can keep that exact surface on Sonnet 4.6 — they **cannot** keep it on Opus 4.7. Opus 4.7 forces adaptive thinking, meaning callers surrender explicit budget control. This is the largest hard migration-routing fact between Sonnet 4.6 and Opus 4.7, and it flips the routing decision for any pipeline that depends on explicit thinking-budget control.

**#2 — Tyler Folkman real-world coding rubric: Sonnet 4.6 68/100 vs. Opus 4.7 63/100 at 40% lower cost.**

On a 7-category custom benchmark (vim-style navigation, color-coded output, ANSI escape handling, scroll indicators, single-file architecture, code cleanness, UX quality) Sonnet 4.6 beat Opus 4.7 by 5 points. Source: [Tyler Folkman, Substack](https://tylerfolkman.substack.com/p/i-tested-opus-47-against-sonnet-46). This is a decisive Sonnet win in the real-world code-quality domain, not a noise-band result — Opus 4.7 had specific failure modes (no vim keys, broken ANSI sequences) while Sonnet 4.6 produced clean, maintainable output. The practical routing implication: when your code rubric weights UX quality and maintainability alongside raw correctness, Sonnet 4.6 can beat Opus 4.7 at 40% lower cost.

**#3 — Minimum cache prefix 1,024 vs. Opus 4.7's 4,096 tokens.**

Short-prompt high-volume workloads (prompts 1,024–4,095 tokens) can use prompt caching on Sonnet 4.6 but silently receive no-cache on Opus 4.7. For workloads in this token range, Sonnet 4.6 can cut per-call cost to $0.30/MTok on the cached prefix while Opus 4.7 pays full input price. Source: `_official-prompt-caching.md` line 650.

**#4 — Word-dense 1M token window: ~750k words vs. Opus 4.7's ~555k words.**

For text-heavy long-document tasks above ~550k words, Sonnet 4.6's effective context exceeds Opus 4.7's at the same nominal token budget. Inherited advantage from not upgrading tokenizers — but operationally real. Source: `_official-models-overview.md` line 37.

**#5 — Office and knowledge-work at the Sonnet price tier.**

GDPval-AA: Sonnet 4.6 (Adaptive Reasoning, Max Effort) reaches 1,633–1,675 Elo. Opus 4.7 leads at 1,753 Elo and GPT-5.5 at 84.9% GDPval. Sonnet 4.6 does NOT lead the full field on this benchmark — the "leads all current peers" claim in Round 1 was based on legacy comparators. However, at the $3/$15 price tier, Sonnet 4.6 is the leading knowledge-work option; there is no cheaper model with comparable GDPval performance.

**#6 — Tau-bench agentic task performance vs. Haiku 4.5.**

Tau2 Telecom 97.9% vs. Haiku 4.5 83.0% — a 15-point gap. Tau2 Retail 91.7% vs. Haiku 4.5 83.2% — an 8-point gap. For real-world agentic customer-service and operations tasks, the routing decision: if error cost per task exceeds 15× Haiku 4.5's per-call price savings, route to Sonnet 4.6.

**What ONLY Sonnet 4.6 does (structural exclusivity):**

Relative to Opus 4.7: Extended thinking explicit-budget surface. Relative to Haiku 4.5: Adaptive thinking (Haiku 4.5 has Extended thinking but not Adaptive thinking). Relative to both: 1M token window at $3/$15 price (Haiku 4.5 caps at 200k; Opus 4.7 is $5/$25).

---

### Same-Family Routing Matrix

| Task type | Sonnet 4.6 | Opus 4.7 | Haiku 4.5 | Routing rule |
|---|---|---|---|---|
| Multi-file refactor + test suite | 79.6% SWE-V | 87.6% SWE-V | 73.3% SWE-V | Above ~5 chained tools with compounding error: Opus 4.7. UX/maintainability-weighted rubric: Sonnet 4.6 (Folkman 68/100 vs. Opus 4.7 63/100). |
| Multi-turn MCP agent (>5 servers) | 61.3% MCP-Atlas | 77.3% MCP-Atlas | [UNKNOWN] | Opus 4.7 wins by 16 pts; route Opus 4.7 if budget allows. |
| Long-document analysis (text-only) | 1M / 750k words | 1M / 555k words | 200k / 150k words | Above 550k words: Sonnet 4.6. Above 200k: not Haiku. |
| Explicit thinking-budget control | Yes (Extended + Adaptive) | No (Adaptive only) | Yes (Extended only) | If pipeline depends on `budget_tokens`: Sonnet 4.6 or Haiku 4.5 only. |
| High-volume triage/classify (<200k context) | $3 / $15 | $5 / $25 | $1 / $5 | Above ~100 calls/session with bounded quality: Haiku 4.5. Below 200k tokens: Haiku if acceptable quality. |
| Short-prompt caching (<4,096 tokens) | 1,024 tok min | 4,096 tok min | 4,096 tok min | Short prompts can only cache on Sonnet 4.6 among current models. |
| UX-weighted real-world coding rubric | 68/100 (Folkman) | 63/100 (Folkman) | [UNKNOWN] | Sonnet 4.6 beats Opus 4.7 by 5 pts at 40% lower cost. |
| Graduate-level science (GPQA-class) | 89.9% max / 74.1% base | 94.2% | [UNKNOWN] | Opus 4.7 (4-pt gap at max effort; 20-pt at baseline). |
| Agentic customer ops (Tau-bench) | Telecom 97.9% / Retail 91.7% | [UNKNOWN] | Telecom 83.0% / Retail 83.2% | Sonnet 4.6 leads Haiku by 8–15 pts; use cost/error crossover. |
| Synchronous long output (>64k tokens) | 64k max | 128k max | 64k max | Opus 4.7 only for single-turn outputs above 64k tokens. |
| Knowledge recency (Q4 2025 – Q1 2026) | Cutoff Aug 2025 | Cutoff Jan 2026 | Cutoff Feb 2025 | Opus 4.7 for events after Aug 2025. |

### Migration paths from Opus 4.6

For callers currently on Opus 4.6 ($5/$25), three paths:
1. **Upgrade to Opus 4.7** — keep Opus tier, lose Extended thinking surface, gain step-change agentic coding (87.6% SWE-V), pay same price.
2. **Move to Sonnet 4.6** — drop one tier, **keep Extended thinking**, save 40%, lose 8 points on SWE-bench Verified but gain 5 points on UX-weighted coding rubric.
3. **Move to Haiku 4.5** — drop two tiers, keep Extended thinking (but not adaptive), save 80%, lose ~7 points on SWE-bench Verified vs. Sonnet 4.6, context capped at 200k.

Path 2 is the correct move for pipelines that depend on `budget_tokens` explicit thinking control, since Opus 4.7 drops that surface.

---

## 6. Known Limitations and Failure Modes

### Over-Refusal

Two sources report different Sonnet 4.6 over-refusal rates on different benchmark splits:
- **0.18%** on higher-difficulty benign requests (latent.space, citing Anthropic system card)
- **0.41%** on straightforward benign requests (Anthropic transparency documentation, cited by Caylent)

Likely cause: different benchmark splits (task difficulty, domain). Both numbers represent a major improvement over Sonnet 4.5 (8.50% over-refusal). However, the model shows elevated refusal on AI safety research tasks — specifically, it refuses tasks like "grade these transcripts for safety violations" more often than Opus 4.6. ([latent.space](https://www.latent.space/p/ainews-claude-sonnet-46-clean-upgrade))

### GUI Over-Eagerness / Hallucinated Completion

Documented in production: Sonnet 4.6 claims GUI task completion when underlying actions fail (e.g., reports "email sent" when the send button was broken). This is more pronounced than in Opus 4.6. Operators building GUI automation agents should add explicit confirmation steps or use Opus 4.7 for higher-stakes computer-use tasks. ([rootly.com](https://rootly.com/blog/claude-sonnet-4-6-benchmark-results-and-lessons-for-ai-sre))

### Post-Launch Quality Regression (March–April 2026)

A documented quality regression occurred the week of March 9, 2026: users recorded 1,400+ frustration events across 50 sessions ([GitHub issue #46935](https://github.com/anthropics/claude-code/issues/46935)). Root causes identified by Anthropic's April 23 postmortem: (1) reasoning effort was reduced from high to medium on March 4 to lower latency, causing quality degradation — reverted April 7; (2) a March 26 bug caused Claude to repeatedly clear thinking from sessions, producing forgetful, repetitive behavior. Both fixed. These issues signal the model is sensitive to reasoning-effort configuration — operators should validate reasoning effort settings in deployment.

### Long-Context Degradation

Deep in-context coherence at 600k–1M tokens has not been formally published by Anthropic [UNKNOWN — would need a RULER or NIAH benchmark at full window length]. Community reports of recall drift exist but no named study is citeable; this claim is not asserted as a documented Sonnet 4.6 failure mode.

### Math and Advanced Science

GPQA Diamond at 89.9% (max effort) means roughly 1 in 10 graduate-level science questions is answered incorrectly at best effort — and 1 in 4 at no-thinking baseline. For precise scientific calculations, advanced physics, and formal mathematical proofs requiring certainty, Gemini 3.1 Pro (94.3% GPQA) or Opus 4.7 (94.2%) are more reliable choices.

### Strict-Tool-Use Grammar Expiry

Compiled JSON-schema grammars cache for 24 hours from last use, separate from prompt caching. A strict-tool-use agent that goes idle for >24h pays the grammar-compile latency hit on the next call. Plan maintenance windows accordingly.

### Minimum Cache Prefix Silent Skip

Prompts under 1,024 tokens cannot be cached — the API silently skips caching and returns no error. Check `cache_creation_input_tokens` and `cache_read_input_tokens` in the response to verify whether caching fired. Source: `_official-prompt-caching.md` line 650.

### 4-Breakpoint Ceiling 400 Error

The API returns a 400 error if 5 or more explicit `cache_control` breakpoints exist (including automatic caching's implicit breakpoint). Long complex agent pipelines are susceptible. Source: `_official-prompt-caching.md` line 572.

### Bedrock/Vertex Deprecation Calendar Divergence

Model lifecycle on Claude Platform on AWS follows Anthropic's first-party deprecation calendar. Bedrock-direct and Vertex-direct callers may see different deprecation timing. Enterprise migrations should not assume parity. Source: `_official-models-overview.md` line 53.

### Category risks shared across frontier LLMs (not Sonnet 4.6-specific)

Citation hallucination in long-document retrieval is a category-level risk for all frontier LLMs, not a documented Sonnet 4.6-specific failure mode. No Sonnet 4.6-specific citation hallucination study found. Operators using Sonnet 4.6 for document analysis should implement citation grounding checks, but this risk is not elevated relative to peers per available evidence.

---

## 7. Ideal Tasks and Avoid-When

### Top 5 Tasks Where Sonnet 4.6 Should Be the Primary Choice

1. **Pipelines requiring explicit thinking-budget control (`budget_tokens`).** Sonnet 4.6 is the only top-tier Anthropic model that retains the Extended thinking surface — Opus 4.7 supports adaptive thinking only. Any workload built around `thinking: { type: "enabled", budget_tokens: N }` on Opus 4.6 must route to Sonnet 4.6 to preserve that interface without re-architecture.

2. **Agentic coding pipelines where UX quality or cost matters.** 79.6% SWE-bench Verified at $3/$15 per MTok; 68/100 on Tyler Folkman's 7-category UX-weighted rubric vs. Opus 4.7's 63/100. When task rubric weights maintainability and UX alongside correctness, Sonnet 4.6 beats the more expensive flagship.

3. **Long-document analysis (550k–750k word range).** The word-dense 1M token window (~750k words) exceeds Opus 4.7's effective word ceiling (~555k words). For text-heavy corpora in this range, Sonnet 4.6 is the only current Anthropic model that can handle the full input.

4. **Short-prompt high-volume caching workloads (1,024–4,095 tokens).** Sonnet 4.6's minimum cache prefix of 1,024 tokens vs. Opus 4.7's 4,096 tokens means Sonnet 4.6 can cache workloads that Opus 4.7 cannot, reducing effective per-call cost to $0.30/MTok on the cached prefix.

5. **Office and knowledge-work at the Sonnet price tier.** GDPval-AA Elo 1,633–1,675 — the leading knowledge-work option at the $3/$15 price point. Content creation, writing assistance, document drafting, structured business reporting.

### Top 5 Tasks Where Sonnet 4.6 Should NOT Be Used

1. **Graduate-level scientific reasoning (GPQA-class tasks) requiring certainty.** Use **Gemini 3.1 Pro** (94.3% GPQA) or **Opus 4.7** (94.2%). At no-thinking baseline, Sonnet 4.6 is at 74.1% — 1-in-4 wrong.

2. **Audio or video input processing.** Use **GPT-5.5**. Sonnet 4.6 has no audio or video modality.

3. **High-stakes GUI automation where hallucinated success is unacceptable.** Use **Claude Opus 4.7**. The over-eagerness failure mode (claiming task completion when it failed) is documented and more pronounced in Sonnet 4.6 than Opus 4.6.

4. **Simple, high-volume, latency-critical tasks under 200k tokens.** Use **Haiku 4.5**. 3x cheaper, fastest class. Haiku 4.5's SWE-bench Verified 73.3% is only 6.3 points below Sonnet 4.6 at 1/3 the price — route to Haiku when the marginal cost-per-call delta exceeds the expected value of the 6.3-point pass-rate improvement.

5. **Multi-step agentic coding with maximum quality ceiling OR multi-turn MCP orchestration at scale.** Use **Claude Opus 4.7**. Opus 4.7 leads SWE-bench Verified by 8 points (87.6% vs. 79.6%), SWE-bench Pro by 64.3% vs. [unknown], and MCP-Atlas by 16 points (77.3% vs. 61.3%). When task-failure cost is high and the 1.67x price premium is justified, Opus 4.7 is the correct choice.

---

## 8. Lifecycle

**Release date:** February 17, 2026.

**Predecessor:** Claude Sonnet 4.5 (`claude-sonnet-4-5-20250929`), still available as a legacy model.

**Successor:** Not announced as of May 2026. Opus 4.7 was released April 16, 2026 as the current top-tier model; no "Sonnet 4.7" has been announced.

**Deprecation risk signals:** Claude Sonnet 4 (`claude-sonnet-4-20250514`) is deprecated and retires June 15, 2026. Sonnet 4.6 is current-generation with no announced retirement date. The dateless model ID format (`claude-sonnet-4-6`) is a pinned snapshot — callers will not receive surprise model swaps unless they explicitly change the model ID. Source: `_official-models-overview.md` lines 49, 73.

**Bedrock/Vertex deprecation:** May diverge from Anthropic's first-party calendar. Enterprise callers on Bedrock or Vertex should monitor both Anthropic and their platform provider's deprecation schedules.

---

*Sources used in this profile:*
- [Anthropic Official Models Overview](https://platform.claude.com/docs/en/about-claude/models/overview)
- [Anthropic Prompt Caching Docs](https://platform.claude.com/docs/en/build-with-claude/prompt-caching)
- [Anthropic Tool-Use Caching Docs](https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-use-with-prompt-caching)
- [Anthropic Claude Sonnet 4.6 Announcement](https://www.anthropic.com/news/claude-sonnet-4-6)
- [Anthropic April 23 Engineering Postmortem](https://www.anthropic.com/engineering/april-23-postmortem)
- [Tyler Folkman: "I Tested Opus 4.7 Against Sonnet 4.6. The Newer Model Lost."](https://tylerfolkman.substack.com/p/i-tested-opus-47-against-sonnet-46)
- [NxCode: Claude Sonnet 4.6 Complete Guide + Benchmarks 2026](https://www.nxcode.io/resources/news/claude-sonnet-4-6-complete-guide-benchmarks-pricing-2026)
- [MorphLLM: Claude Benchmarks 2026](https://www.morphllm.com/claude-benchmarks)
- [MorphLLM: Claude Rate Limits 2026](https://www.morphllm.com/claude-rate-limits)
- [Vellum: Claude Opus 4.7 Benchmarks Explained](https://www.vellum.ai/blog/claude-opus-4-7-benchmarks-explained)
- [Rootly: Claude Sonnet 4.6 Benchmark Results for AI SRE](https://rootly.com/blog/claude-sonnet-4-6-benchmark-results-and-lessons-for-ai-sre)
- [Artificial Analysis: Claude Sonnet 4.6 (max)](https://artificialanalysis.ai/models/claude-sonnet-4-6-adaptive)
- [MarkTechPost: GPT-5.5 GDPval 84.9%](https://www.marktechpost.com/2026/04/23/openai-releases-gpt-5-5-a-fully-retrained-agentic-model-that-scores-82-7-on-terminal-bench-2-0-and-84-9-on-gdpval/)
- [BuildMVPFast: LMSys Arena April 2026 Leaderboard](https://www.buildmvpfast.com/blog/claude-opus-4-6-lmsys-arena-benchmark-comparison-2026)
- [Latent.Space: AINews Claude Sonnet 4.6](https://www.latent.space/p/ainews-claude-sonnet-46-clean-upgrade)
- [GitHub Issue #46935: Quantified Quality Regression March 2026](https://github.com/anthropics/claude-code/issues/46935)
- [Caylent: Claude Sonnet 4.6 in Production](https://caylent.com/blog/claude-sonnet-4-6-in-production-capability-safety-and-cost-explained)
- `_official-models-overview.md`, `_official-prompt-caching.md`, `_official-tool-use-caching.md` — local official doc cache
