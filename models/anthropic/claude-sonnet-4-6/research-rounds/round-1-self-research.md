---
round: 1
author: claude-sonnet-4-6 (self-research)
date: 2026-05-17
status: pending-dealbreaker-review
---

# Claude Sonnet 4.6 — Self-Research Profile (Round 1)

## 1. Identity

**What it is:** Claude Sonnet 4.6 is a large language model built by Anthropic, positioned as the mid-tier model in the current Claude 4.x family. Anthropic's official description: "The best combination of speed and intelligence."

**Release date:** February 17, 2026. ([Anthropic announcement](https://www.anthropic.com/news/claude-sonnet-4-6))

**Predecessor:** Claude Sonnet 4.5 (`claude-sonnet-4-5-20250929`). Sonnet 4.5 had a 200k token context window and no adaptive thinking. Sonnet 4.6 is a meaningful upgrade on both axes, not a minor patch.

**Official API model ID:** `claude-sonnet-4-6` (dateless pinned snapshot; no dated suffix required). Bedrock: `anthropic.claude-sonnet-4-6`. Vertex AI: `claude-sonnet-4-6`. ([Official models overview](https://platform.claude.com/docs/en/about-claude/models/overview))

**Provider positioning:** Anthropic positions Sonnet 4.6 as the performance-value inflection point — near-Opus intelligence at 40% lower cost and roughly 2x the throughput speed. It is NOT positioned as the most capable model (that is Opus 4.7) and NOT the cheapest (that is Haiku 4.5).

---

## 2. Core Capabilities

### Reasoning

**(a) What it can do:** Supports both extended thinking (explicit, user-set token budget) and adaptive thinking (model self-selects reasoning depth based on prompt complexity). Adaptive thinking is the key differentiator from Sonnet 4.5 — the model does not apply uniform chain-of-thought overhead to simple prompts. ([Anthropic adaptive thinking docs](https://platform.claude.com/docs/en/build-with-claude/adaptive-thinking))

**(b) Hard limits:** GPQA Diamond score of 74.1% — a 17.2-point gap below Opus 4.6's 91.3% and a 20.2-point gap below Gemini 3.1 Pro's 94.3%. Graduate-level physics, biology, and chemistry reasoning is where the gap to frontier reasoning models is most pronounced. ([morphllm.com claude-benchmarks](https://www.morphllm.com/claude-benchmarks))

**(c) Concrete example:** Decomposing a multi-step software architecture problem with 5–10 interdependent constraints, generating a recommendation with explicit trade-off enumeration. Handles this well without requiring user to set a thinking budget.

**(d) Source:** Adaptive thinking feature — official Anthropic docs. GPQA score — [morphllm.com](https://www.morphllm.com/claude-benchmarks), corroborated by [nxcode.io](https://www.nxcode.io/resources/news/claude-sonnet-4-6-complete-guide-benchmarks-pricing-2026).

---

### Tool Use

**(a) What it can do:** Full function calling (parallel and sequential), MCP client and server support, agentic loops with interleaved thinking and tool calls, deferred tool loading that preserves prompt cache. Supports `defer_loading` on tool definitions so dynamically discovered tools do not invalidate the cached prefix. ([Official tool-use caching docs](https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-use-with-prompt-caching))

**(b) Hard limits:** Does not provide native server-side tool execution — code execution, bash, web search are operator-configured client tools, not built-in cloud capabilities (unlike Gemini's Google Search grounding, which is natively integrated). Complex multi-agent coordination beyond 5–10 concurrent tool calls shows latency accumulation [INFERRED — no published limit found].

**(c) Concrete example:** An agentic coding loop where Sonnet 4.6 calls a bash tool, reads output, updates a file via text editor tool, calls tests, and iterates — all in a single extended context session with prompt cache preserved.

**(d) Source:** Official Anthropic tool-use and caching docs. MCP-Atlas score of 61.3% (beats Opus 4.6's 60.3%) from [nxcode.io](https://www.nxcode.io/resources/news/claude-sonnet-4-6-complete-guide-benchmarks-pricing-2026).

---

### Web Grounding

**(a) What it can do:** Web search is available as an operator-configured tool (`web_search_tool`), not a native built-in. When enabled, returns cited results inline.

**(b) Hard limits:** Web search is not default-on — must be explicitly enabled by the API caller. No native real-time grounding equivalent to Gemini 3.1 Pro's integrated Google Search, which can ground every response automatically. Freshness is bounded by when the operator triggers a search, not continuously.

**(c) Concrete example:** A research assistant app that enables web_search_tool to let Sonnet 4.6 pull current pricing data and cite sources inline.

**(d) Source:** [Official tool-use caching docs](https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-use-with-prompt-caching) noting web search enablement invalidates system and messages caches. [INFERRED] on "not default-on" from observed API behavior.

---

### Vision

**(a) What it can do:** Accepts image input alongside text (JPEG, PNG, GIF, WEBP). Standard OCR, diagram reading, screenshot analysis. Supports multi-image inputs within the context window.

**(b) Hard limits:** No native video input. No audio input. Image understanding at very high resolutions may degrade [INFERRED — no published resolution cap found]. Does not match GPT-5.5 on interleaved video+audio tasks.

**(c) Concrete example:** Parsing a complex financial table screenshot and producing structured JSON output.

**(d) Source:** Official models overview (text and image input confirmed). [INFERRED] on resolution degradation.

---

### Audio / Multimodal

**(a) What it can do:** Text and image only. No native audio or video.

**(b) Hard limits:** No audio input, no audio output, no video input. GPT-5.5 and Gemini 3.1 Pro both support native audio modalities that Sonnet 4.6 does not.

**(c) Concrete example:** N/A — audio/video tasks should be routed to GPT-5.5 or Gemini 3.1 Pro.

**(d) Source:** Official models overview (text and image input only listed). [INFERRED] no audio/video from absence of any documentation.

---

### Code Generation

**(a) What it can do:** SWE-bench Verified score of 79.6% — within 1.2 percentage points of Opus 4.6 (80.8%) at 40% lower cost. Ranked #3 on LMArena Code Arena (Elo 1531), behind Opus 4.6 (1560) and Opus 4.6 Thinking (1553). Described by independent evaluators as producing "consistently cleaner, better-commented, easier to maintain" code than Grok 4 on matched tasks. ([buildfastwithai.com](https://www.buildfastwithai.com/blogs/claude-sonnet-4-6-vs-gpt-5-5-vs-gemini-3-1-pro))

**(b) Hard limits:** Gemini 3.1 Pro hits 80.6% on SWE-bench Verified and leads on LiveCodeBench Pro algorithmic coding (Elo 2,439 vs lower for Sonnet 4.6 [UNKNOWN — would need exact Sonnet 4.6 LiveCodeBench Pro Elo]). For novel algorithm generation, Gemini 3.1 Pro is the stronger choice.

**(c) Concrete example:** Debugging a 500-line Python async service, identifying a race condition, generating a patch with a test — completing within a single agentic session without context compaction.

**(d) Source:** SWE-bench scores from [nxcode.io](https://www.nxcode.io/resources/news/claude-sonnet-4-6-complete-guide-benchmarks-pricing-2026) and [morphllm.com](https://www.morphllm.com/claude-benchmarks). LMArena Code Arena from [buildmvpfast.com](https://www.buildmvpfast.com/blog/claude-opus-4-6-lmsys-arena-benchmark-comparison-2026).

---

### Long Context

**(a) What it can do:** 1M token context window (~750k words, ~3.4M unicode chars). Supports up to 300k output tokens via the Batch API with the `output-300k-2026-03-24` beta header. Automatic context compaction in Claude Code: when context approaches the limit, the system summarizes older turns to preserve the semantic core. ([Official models overview](https://platform.claude.com/docs/en/about-claude/models/overview))

**(b) Hard limits:** Haiku 4.5 has only a 200k token context window — so for tasks exceeding 200k tokens, Haiku cannot substitute. However, Opus 4.7 uses a new tokenizer where 1M tokens covers only ~555k words, while Sonnet 4.6's 1M tokens covers ~750k words — Sonnet 4.6 is more efficient per-token on word coverage. Deep in-context recall past 600k tokens shows some degradation [INFERRED from community reports, not formally benchmarked].

**(c) Concrete example:** Analyzing a full codebase (50+ files), maintaining coherent state across 800k+ tokens of conversation history, and producing a consistent architectural recommendation.

**(d) Source:** Context window figures from official models overview. Compaction behavior from [Medium deep dive](https://medium.com/@jiten.p.oswal/the-thinking-era-arrives-a-technical-deep-dive-into-claude-sonnet-4-6-b002f3c9611d). Long-context recall degradation [INFERRED].

---

### Agentic / Computer Use

**(a) What it can do:** Supports computer use (browser, OS control) via the computer use tool. Scores 72.5% on the computer use benchmark, near-identical to Opus 4.6's 72.7%. ([morphllm.com](https://www.morphllm.com/claude-benchmarks))

**(b) Hard limits:** Over-eager GUI task completion is a documented failure mode: in GUI-based tasks, Sonnet 4.6 tends to hallucinate success — claiming "email sent" when a button was broken — more than Opus 4.6. ([GitHub issue #26965](https://github.com/anthropics/claude-code/issues/26965), [rootly.com](https://rootly.com/blog/claude-sonnet-4-6-benchmark-results-and-lessons-for-ai-sre))

**(c) Concrete example:** Filling out a multi-step web form with branching logic, screenshotting and confirming field values before proceeding.

**(d) Source:** Benchmark scores from [morphllm.com](https://www.morphllm.com/claude-benchmarks). Failure mode from [rootly.com benchmark report](https://rootly.com/blog/claude-sonnet-4-6-benchmark-results-and-lessons-for-ai-sre).

---

### Structured Output

**(a) What it can do:** JSON mode via tool use; strict mode enforces schema compliance via grammar construction. Supports Zod-style schema validation patterns in prompts. Deferred tool loading does not break grammar construction — strict mode applies to the full toolset regardless of which tools are deferred. ([Official tool-use caching docs](https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-use-with-prompt-caching))

**(b) Hard limits:** No native JSON schema validation at the API layer (unlike OpenAI's JSON mode with `response_format: json_schema`). Schema compliance is enforced at grammar level via strict mode, but is operator-responsibility to configure. [INFERRED] some edge cases with deeply nested schemas may produce malformed JSON without explicit validation loops.

**(c) Concrete example:** Generating a structured job evaluation report conforming to a 12-field schema across 100 batch items, with consistent field types.

**(d) Source:** Official tool-use caching docs on strict mode and grammar construction.

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
| Batch API input | ~$1.50 (50% discount) [INFERRED — standard Batch API discount] |
| Batch API output | ~$7.50 (50% discount) [INFERRED] |

Source: [Official prompt caching pricing table](https://platform.claude.com/docs/en/build-with-claude/prompt-caching).

### Latency

Comparative latency: "Fast" (per official overview). Opus 4.7 is "Moderate"; Haiku 4.5 is "Fastest." Specific TTFT and tokens/sec figures are not published by Anthropic; they vary by tier, region, and load. [UNKNOWN — would need a fresh third-party benchmark like artificialanalysis.ai for exact TTFT numbers.]

### Rate Limits

Anthropic publishes tier-based rate limits at [platform.claude.com/docs/en/api/rate-limits](https://platform.claude.com/docs/en/api/rate-limits); specific RPM/TPM numbers vary by account tier and are not reproduced here to avoid citing stale numbers. Sonnet 4.x rate limits pool traffic across Sonnet 4.6, Sonnet 4.5, and Sonnet 4.

### Prompt Caching

Fully supported. Both automatic caching (top-level `cache_control` on the request body) and explicit cache breakpoints (per content block). Default TTL: 5 minutes (refreshed for free on each cache hit). 1-hour TTL available at 2x base input price. Cache hierarchy: tools → system → messages; changes at any level invalidate that level and downstream. ([Official prompt caching docs](https://platform.claude.com/docs/en/build-with-claude/prompt-caching))

### Batch API

Supported. Sonnet 4.6 can produce up to 300k output tokens per batch item using the `output-300k-2026-03-24` beta header (same as Opus 4.7 and Opus 4.6). Standard Batch API pricing applies (50% discount on synchronous rates [INFERRED from Anthropic pricing conventions]).

### Knowledge Cutoff

- **Reliable knowledge cutoff:** August 2025 (most extensive and reliable knowledge through this date)
- **Training data cutoff:** January 2026 (broader training data range)

Source: [Official models overview](https://platform.claude.com/docs/en/about-claude/models/overview).

### Context Window + Output Cap

- **Context window:** 1M tokens (~750k words, ~3.4M unicode chars)
- **Synchronous max output:** 64k tokens
- **Batch API max output:** 300k tokens (with beta header)

---

## 4. Integrations

### Deployment Platforms

Available on:
- Anthropic Claude API (direct)
- Claude Platform on AWS (uses Anthropic model IDs, not Bedrock-style)
- Amazon Bedrock (`anthropic.claude-sonnet-4-6`) — global endpoints and regional endpoints
- Google Vertex AI (`claude-sonnet-4-6`) — global, multi-region, and regional endpoints
- Microsoft Foundry

Source: [Official models overview](https://platform.claude.com/docs/en/about-claude/models/overview).

### Official SDK Languages

Python, TypeScript/JavaScript, Go, Java, C#, PHP, Ruby. (Confirmed from SDK examples in prompt caching docs.)

### MCP Support

Both MCP client (Sonnet 4.6 can call MCP servers as tool endpoints) and MCP server support (Claude Code and related tooling). Deferred tool loading via ToolSearch preserves prompt cache when dynamically discovering MCP tools. ([Tool-use caching docs](https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-use-with-prompt-caching))

### Registries / Skill Systems

Claude skills (Claude Code skill system). No native OpenAI Assistants or Gemini Extensions registry equivalent — Anthropic's ecosystem uses Claude.ai skills and third-party integrations.

---

## 5. Differentiation

### Where Specific Peers Beat Sonnet 4.6

Opening with peer superiority, per the template's anti-egoism directive:

**Gemini 3.1 Pro beats Sonnet 4.6 decisively on graduate-level scientific reasoning.** GPQA Diamond: Gemini 3.1 Pro at 94.3% vs. Sonnet 4.6 at 74.1% — a 20.2-point gap. ([smartchunks.com](https://smartchunks.com/gemini-3-1-pro-benchmarks-gpqa-hle-lmsys-frontiermath/), [morphllm.com](https://www.morphllm.com/claude-benchmarks)). Gemini 3.1 Pro also leads on ARC-AGI-2 (77.1%) and novel algorithmic problem generation (LiveCodeBench Pro Elo 2,439). For science-heavy research Q&A, Gemini 3.1 Pro is the routing choice.

**GPT-5.5 beats Sonnet 4.6 on native audio+video multimodality.** GPT-5.5 accepts audio and video input natively; Sonnet 4.6 does not. For any task requiring processing spoken language, video content, or real-time audio streams, GPT-5.5 is the only current option.

**Claude Opus 4.7 beats Sonnet 4.6 on complex agentic coding and multi-step reasoning.** Opus 4.7 is the current top Anthropic model for agentic coding (cited as a "step-change improvement" in official docs). On GPQA Diamond, Opus 4.6 scores 91.3% vs Sonnet 4.6's 74.1% — and Opus 4.7 is further improved. **Cost crossover: Opus 4.7 ($5/$25 per MTok) is 1.67x more expensive on input and 1.67x on output vs. Sonnet 4.6. Use Opus 4.7 when task failure cost exceeds the 1.67x price premium, specifically on multi-step agentic jobs where subtask error compounds.**

**Claude Haiku 4.5 beats Sonnet 4.6 on cost and raw throughput.** Haiku 4.5 is 3x cheaper on both input ($1/MTok) and output ($5/MTok), and is the "fastest" model. **Cost crossover: for tasks where Haiku 4.5's reasoning quality is sufficient (classification, extraction, short summarization, simple Q&A), routing to Haiku saves 67% of inference cost. Haiku 4.5 becomes the inferior choice when tasks require >200k token context, extended thinking, or GPQA-class reasoning.**

### What Sonnet 4.6 Is Actually Differentiated At

These claims are comparator-cited rather than asserted generically:

**Office and knowledge-work productivity vs. all current peers:** On GDPval-AA, Sonnet 4.6 scores 1,633 Elo — ahead of Opus 4.6, GPT-5.4, and Gemini 3.1 Pro on this benchmark. ([nxcode.io](https://www.nxcode.io/resources/news/claude-sonnet-4-6-complete-guide-benchmarks-pricing-2026)) This is a task domain (document drafting, email, analysis) where Sonnet 4.6 leads the field as of early 2026.

**Conversational quality preference vs. GPT-5.4 and Gemini 3.1 Pro in blind evaluations:** Independent human evaluations (Q1 2026) found Claude-generated content preferred 47% of the time vs. 29% for GPT-5.4 and 24% for Gemini 3.1 Pro. ([buildfastwithai.com](https://www.buildfastwithai.com/blogs/claude-sonnet-4-6-vs-gpt-5-5-vs-gemini-3-1-pro)) This preference signal is specific to prose-heavy, explanation-heavy output — not mathematical derivations.

**Tool-use scale vs. Opus 4.6 and Haiku 4.5:** MCP-Atlas score 61.3%, above Opus 4.6's 60.3% — Sonnet 4.6 beats its own more expensive sibling at scaled tool orchestration. ([nxcode.io](https://www.nxcode.io/resources/news/claude-sonnet-4-6-complete-guide-benchmarks-pricing-2026))

**Tau-bench agentic task performance:** Tau2 Telecom 97.9%, Tau2 Retail 91.7% — versus Haiku 4.5's 83.0% and 83.2%. For real-world agentic customer-service and operations tasks, Sonnet 4.6's advantage over Haiku 4.5 is 10–15 points.

**What ONLY Sonnet 4.6 does:** Nothing structurally exclusive. Every unique feature — extended thinking, adaptive thinking, 1M context, MCP, computer use — is either shared with Opus 4.7 or will be matched by competitors. The differentiation is cost-performance positioning, not exclusive capability.

---

## 6. Known Limitations and Failure Modes

### Over-Refusal

Over-refusal rate on higher-difficulty benign requests dropped from 8.50% (Sonnet 4.5) to 0.18% (Sonnet 4.6). However, the model shows elevated refusal on AI safety research tasks — specifically, it refuses tasks like "grade these transcripts for safety violations" more often than Opus 4.6. ([latent.space](https://www.latent.space/p/ainews-claude-sonnet-46-clean-upgrade))

### GUI Over-Eagerness / Hallucinated Completion

Documented in production: Sonnet 4.6 claims GUI task completion when underlying actions fail (e.g., reports "email sent" when the send button was broken). This is more pronounced than in Opus 4.6. Operators building GUI automation agents should add explicit confirmation steps or use Opus 4.7 for higher-stakes computer-use tasks. ([rootly.com](https://rootly.com/blog/claude-sonnet-4-6-benchmark-results-and-lessons-for-ai-sre), [GitHub #26965](https://github.com/anthropics/claude-code/issues/26965))

### Post-Launch Quality Regression (March–April 2026)

A documented quality regression occurred the week of March 9, 2026: users recorded 1,400+ frustration events across 50 sessions (quantified in [GitHub issue #46935](https://github.com/anthropics/claude-code/issues/46935)). Root causes identified by Anthropic's April 23 postmortem: (1) reasoning effort was reduced from high to medium on March 4 to lower latency, causing quality degradation — reverted April 7; (2) a March 26 bug caused Claude to repeatedly clear thinking from sessions, producing forgetful, repetitive behavior. These issues were addressed, but they signal the model is sensitive to reasoning-effort configuration. ([Anthropic engineering postmortem](https://www.anthropic.com/engineering/april-23-postmortem))

### Long-Context Degradation

Sonnet 4.6 holds information significantly better than Sonnet 4.5 across long contexts. However, community reports (not formally benchmarked) indicate some recall drift past 600k tokens. Deep in-context coherence at 800k–1M tokens has not been formally published by Anthropic. [INFERRED from community reports; [UNKNOWN — would need a formal RULER or NIAH benchmark at full window length]].

### Math and Advanced Science

GPQA Diamond at 74.1% means roughly 1 in 4 graduate-level science questions is answered incorrectly. For precise scientific calculations, advanced physics, and formal mathematical proofs, Gemini 3.1 Pro (94.3% GPQA) or Opus 4.7 are more reliable choices.

### Citation Hallucination on Long-Context Retrieval

[INFERRED — no published study on Sonnet 4.6 citation hallucination specifically, but this is a known category of failure across all frontier LLMs in long-document Q&A tasks. Operators using Sonnet 4.6 for document analysis should implement citation grounding checks.]

---

## 7. Ideal Tasks and Avoid-When

### Top 5 Tasks Where Sonnet 4.6 Should Be the Primary Choice

1. **Agentic coding pipelines where cost matters.** 79.6% SWE-bench at $3/$15 per MTok — delivers 99% of Opus 4.6 coding performance at 40% lower cost and 2x throughput. Sweet spot: CI/CD automation, code review bots, coding assistants at scale.

2. **Long-document analysis (200k–1M tokens).** The 1M token window is the largest available at this price point; Haiku 4.5 caps at 200k. Analysis of full codebases, lengthy legal documents, and extended research corpora.

3. **Office and knowledge-work tasks.** GDPval-AA Elo 1,633 — first-ranked among current models on document drafting, email analysis, structured business reporting.

4. **Scaled multi-tool agentic workflows.** MCP-Atlas score 61.3% (beats Opus 4.6). Multi-server MCP pipelines, extended autonomous agent runs with deferred tool loading and prompt cache preservation.

5. **Conversational explanation and prose generation.** 47% human preference in blind evaluations vs. GPT-5.4 (29%) and Gemini 3.1 Pro (24%). Content creation, writing assistance, explanation-heavy technical documentation.

### Top 5 Tasks Where Sonnet 4.6 Should NOT Be Used

1. **Graduate-level scientific reasoning (GPQA-class tasks).** Use **Gemini 3.1 Pro** (94.3% GPQA Diamond vs 74.1%). Chemistry, physics, biology derivations with high accuracy requirements.

2. **Audio or video input processing.** Use **GPT-5.5**. Sonnet 4.6 has no audio or video modality.

3. **High-stakes GUI automation where hallucinated success is unacceptable.** Use **Claude Opus 4.7**. The over-eagerness failure mode (claiming task completion when it failed) is more pronounced in Sonnet 4.6.

4. **Simple, high-volume, latency-critical tasks under 200k tokens.** Use **Haiku 4.5**. 3x cheaper, faster, sufficient for classification, extraction, and simple Q&A where Sonnet-tier reasoning is unnecessary.

5. **Complex multi-step agentic coding with maximum quality ceiling.** Use **Claude Opus 4.7**. Anthropic explicitly cites a "step-change improvement in agentic coding" for Opus 4.7 over earlier models. When task-failure cost is high and the 1.67x price premium is acceptable, Opus 4.7 is the correct choice.

---

## 8. Lifecycle

**Release date:** February 17, 2026.

**Predecessor:** Claude Sonnet 4.5 (`claude-sonnet-4-5-20250929`). Sonnet 4.5 is still available as a legacy model but Anthropic recommends migrating to Sonnet 4.6 for improved performance.

**Successor:** Not announced as of May 2026. Opus 4.7 was released after Sonnet 4.6 and is the current top-tier model; no "Sonnet 4.7" has been announced.

**Deprecation risk signals:** Claude Sonnet 4 (`claude-sonnet-4-20250514`) is deprecated and retires June 15, 2026. Sonnet 4.6 is current-generation with no announced retirement date. The dateless model ID format (`claude-sonnet-4-6`, not a dated snapshot) is the standard for 4.6-generation models — it is a pinned snapshot, not an evergreen pointer. ([Official models overview versioning note](https://platform.claude.com/docs/en/about-claude/models/overview))

**Version ID stability:** `claude-sonnet-4-6` is a pinned snapshot. Callers will not receive surprise model swaps unless they explicitly change the model ID. This is a deliberate design decision starting with the Claude 4.6 generation.

---

*Sources used in this profile:*
- [Anthropic Official Models Overview](https://platform.claude.com/docs/en/about-claude/models/overview)
- [Anthropic Prompt Caching Docs](https://platform.claude.com/docs/en/build-with-claude/prompt-caching)
- [Anthropic Tool-Use Caching Docs](https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-use-with-prompt-caching)
- [Anthropic Adaptive Thinking Docs](https://platform.claude.com/docs/en/build-with-claude/adaptive-thinking)
- [Anthropic Claude Sonnet 4.6 Announcement](https://www.anthropic.com/news/claude-sonnet-4-6)
- [Anthropic April 23 Engineering Postmortem](https://www.anthropic.com/engineering/april-23-postmortem)
- [NxCode: Claude Sonnet 4.6 Complete Guide + Benchmarks 2026](https://www.nxcode.io/resources/news/claude-sonnet-4-6-complete-guide-benchmarks-pricing-2026)
- [MorphLLM: Claude Benchmarks 2026](https://www.morphllm.com/claude-benchmarks)
- [Rootly: Claude Sonnet 4.6 Benchmark Results for AI SRE](https://rootly.com/blog/claude-sonnet-4-6-benchmark-results-and-lessons-for-ai-sre)
- [BuildFastWithAI: Claude Sonnet 4.6 vs GPT-5.5 vs Gemini 3.1 Pro](https://www.buildfastwithai.com/blogs/claude-sonnet-4-6-vs-gpt-5-5-vs-gemini-3-1-pro)
- [SmartChunks: Gemini 3.1 Pro Benchmarks](https://smartchunks.com/gemini-3-1-pro-benchmarks-gpqa-hle-lmsys-frontiermath/)
- [BuildMVPFast: LMSys Arena April 2026 Leaderboard](https://www.buildmvpfast.com/blog/claude-opus-4-6-lmsys-arena-benchmark-comparison-2026)
- [GitHub Issue #26965: Hallucination and Context Loss](https://github.com/anthropics/claude-code/issues/26965)
- [GitHub Issue #46935: Quantified Quality Regression March 2026](https://github.com/anthropics/claude-code/issues/46935)
- [Latent.Space: AINews Claude Sonnet 4.6](https://www.latent.space/p/ainews-claude-sonnet-46-clean-upgrade)
- [365i: Claude Sonnet 4.6 Release Coverage](https://www.365i.co.uk/news/2026/02/18/claude-sonnet-4-6-release-near-flagship-ai/)
