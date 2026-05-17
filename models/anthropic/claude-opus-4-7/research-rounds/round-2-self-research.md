---
round: 2
prior_round: round-1-self-research.md
challenges_addressed: round-1-dealbreaker.md
verified_against: /Users/mitchellwilliams/Documents/council-os/api-guides/anthropic/_official-*.md
model: claude-opus-4-7
provider: anthropic
author: claude-opus-4-7 (self)
fetched_at: 2026-05-17
purpose: self-research profile for Council OS routing KB
---

# Claude Opus 4.7 — Round 2 Self-Research Profile

> Round 2 revision. The Dealbreaker returned 26 strikes against Round 1; this
> revision addresses each by name. Every adjective in Section 5 is paired with
> a named peer + benchmark score. Every "unique to Claude" claim has either
> peer comparison numbers or is downgraded to "competitive." Six new failure
> modes from the official docs are surfaced in Section 6. Eleven `[INFERRED]`
> markers from Round 1 expanded to nineteen.

---

## 1. Identity

- **What it is:** Claude Opus 4.7 is Anthropic's most-capable generally-available model as of mid-2026, positioned for complex reasoning and agentic coding. Single text-output modality with text + image input — no audio in, no audio out, no video in ([Anthropic models overview](https://platform.claude.com/docs/en/about-claude/models/overview); `_official-models-overview.md`).
- **Built by:** Anthropic.
- **Released:** April 16, 2026 ([Anthropic announcement](https://www.anthropic.com/news/claude-opus-4-7); [GitHub Changelog](https://github.blog/changelog/2026-04-16-claude-opus-4-7-is-generally-available/); [AWS Bedrock announcement](https://aws.amazon.com/blogs/aws/introducing-anthropics-claude-opus-4-7-model-in-amazon-bedrock/)).
- **Predecessor:** Claude Opus 4.6 (now Legacy alongside Sonnet 4.5, Opus 4.5, Opus 4.1; Sonnet 4 / Opus 4 deprecated and retiring June 15, 2026) (`_official-models-overview.md`).
- **API model IDs (pinned snapshots — the dateless format is still pinned, not an evergreen alias):**
  - Claude API: `claude-opus-4-7`
  - AWS Bedrock: `anthropic.claude-opus-4-7`
  - Vertex AI: `claude-opus-4-7`
  - Microsoft Foundry: same as Claude API ID
  - Source: `_official-models-overview.md` (latest models comparison table)
- **Anthropic's stated positioning (direct quote):** "Our most capable generally available model for complex reasoning and agentic coding," with "a step-change improvement in agentic coding over Claude Opus 4.6" (`_official-models-overview.md` lines 17, 27). Treat the "step-change improvement" phrasing as Anthropic's launch-marketing characterization, not a benchmark claim. Anthropic also concedes Opus 4.7 is "less broadly capable than… Claude Mythos Preview," an invitation-only defensive cybersecurity research model under Project Glasswing ([Axios](https://www.axios.com/2026/04/16/anthropic-claude-opus-model-mythos); `_official-models-overview.md` line 47).

---

## 2. Core capabilities

> All capability claims below carry either a benchmark score with citation, an
> official-doc citation, or an explicit `[INFERRED]` / `[UNKNOWN]` marker.

### Reasoning

- **(a) What it can do:** Adaptive thinking is supported — the model decides how much to "think" before responding. A new `xhigh` effort level was added at the 4.7 release ([Anthropic announcement](https://www.anthropic.com/news/claude-opus-4-7)).
- **(b) Hard limits:** The models-overview table marks Opus 4.7 as **Extended thinking: No / Adaptive thinking: Yes** — a documented narrowing vs. Opus 4.6, Sonnet 4.6, and Haiku 4.5 which all list **Extended thinking: Yes** (`_official-models-overview.md` lines 33-34). Callers who used `thinking: { type: "enabled", budget_tokens: ... }` on Opus 4.6 must migrate to adaptive thinking on 4.7 — and adaptive thinking does not expose an equivalent explicit-budget surface (`_official-models-overview.md` row 33).
- **(c) Concrete task it handles well:** Hard reasoning under tight specification — Humanity's Last Exam 46.9% vs. GPT-5.5 41.4% and Gemini 3.1 Pro 44.4% ([Spectrum AI Lab](https://spectrumailab.com/blog/gemini-3-1-pro-vs-claude-opus-4-7-vs-gpt-5-5-decision-framework-2026)).
- **(d) Source / tag:** As cited.

### Tool use

- **(a) What it can do:** Native function calling, parallel tool use, MCP toolsets, server-side `web_search` / `web_fetch` / `code_execution` / `computer_use` / `text_editor` / `bash` / `memory` tools, and tool-search-driven `defer_loading` to preserve prefix cache as the tool set grows (`_official-tool-use-caching.md` lines 53-59).
- **(b) Hard limits:** Modifying any tool definition invalidates the entire cache (tools → system → messages). Toggling web search or citations invalidates system and messages caches. Changing `tool_choice`, `disable_parallel_tool_use`, image presence, or thinking parameters invalidates the messages cache (`_official-tool-use-caching.md` lines 62-73). Strict tool use compiles a grammar from the full toolset and is subject to grammar-complexity caps ([Anthropic structured outputs](https://platform.claude.com/docs/en/build-with-claude/structured-outputs)).
- **(c) Concrete task it handles well:** MCP-Atlas multi-turn tool-calling — Opus 4.7 leads at **77.3%** vs. **Gemini 3.1 Pro 73.9%**, **GPT-5.5 75.3%** (newest GPT, MCP-Atlas score released alongside the model April 23, 2026 — [renovateqr review citing OpenAI release notes](https://renovateqr.com/blog/gpt-5-5-review-benchmarks-2026)), and **GPT-5.4 68.1%** ([Vellum benchmark roundup](https://www.vellum.ai/blog/claude-opus-4-7-benchmarks-explained); GPT-5.5 score independently corroborated by [BuildFastWithAI GPT-5.5 review](https://www.buildfastwithai.com/blogs/gpt-5-5-review-2026)). Opus 4.7 still leads, but the gap to GPT-5.5 is **2.0 points, not the ~9 points the GPT-5.4-only comparison implied**.
- **(d) Source / tag:** As cited.

### Web grounding

- **(a) What it can do:** Server-side `web_search` and `web_fetch` tools return content with inline citations; freshness is determined at fetch time, not training time (`_official-tool-use-caching.md` per-tool interaction table).
- **(b) Hard limits:** Toggling `web_search` invalidates both system and messages caches — a non-trivial cost penalty in long sessions. **On the public BrowseComp benchmark, GPT-5.5 Pro scores 90.1% vs. Opus 4.7 79.3% — a 10.8-point gap** ([BuildFastWithAI GPT-5.5 review](https://www.buildfastwithai.com/blogs/gpt-5-5-review-2026); [Vellum benchmark roundup](https://www.vellum.ai/blog/claude-opus-4-7-benchmarks-explained)).
- **(c) Concrete task it handles well:** Single-target citation lookup ("fetch this URL and summarize with citations") — [INFERRED] since BrowseComp measures multi-hop search rather than single-URL fetch.
- **(d) Source / tag:** As cited.

### Vision

- **(a) What it can do:** Image input up to 2,576 pixels on the long edge (~3.75 megapixels) — ~3× the per-image pixel budget of prior Claude models ([Anthropic announcement](https://www.anthropic.com/news/claude-opus-4-7)). Improved screen-coordinate handling: coordinates map 1:1 with pixels, removing scale-factor errors that plagued Opus 4.6 `computer_use` ([MindStudio breakdown](https://www.mindstudio.ai/blog/claude-opus-47-benchmark-breakdown)).
- **(b) Hard limits:** No image generation. No video input. Toggling image presence in the prompt invalidates the messages cache (`_official-tool-use-caching.md` line 71).
- **(c) Concrete task it handles well:** DocVQA: Opus 4.7 reports 93.0% per [MindStudio breakdown](https://www.mindstudio.ai/blog/claude-opus-47-benchmark-breakdown). The same source claims a 5–8 point lead on the 50+ page PDF split — **this is a single-third-party-source claim and the DocVQA-LongDoc methodology should be verified against Anthropic's first-party reporting**. The Anthropic announcement page does not break out the long-doc split, so the precise lead magnitude is `[UNKNOWN]` until Anthropic publishes a first-party long-doc number.
- **(d) Source / tag:** [Anthropic announcement](https://www.anthropic.com/news/claude-opus-4-7); [MindStudio](https://www.mindstudio.ai/blog/claude-opus-47-benchmark-breakdown). Long-doc lead magnitude `[UNKNOWN]`.

### Audio / multimodal

- **(a) What it can do:** Text + image input, text output. That is the entire multimodal surface (`_official-models-overview.md` line 19: "All current Claude models support text and image input, text output, multilingual capabilities, and vision").
- **(b) Hard limits:** **No native audio input. No native audio output. No native video input.** This is a categorical gap vs.:
  - **Gemini 3.1 Pro:** "natively processes text, images, audio, video, and code in the same model… can process… 8.4 hours of audio… or 1 hour of video in a single prompt" ([Google DeepMind Gemini 3.1 Pro model card](https://deepmind.google/models/model-cards/gemini-3-1-pro/) per [almcorp guide citing model card](https://almcorp.com/blog/gemini-3-1-pro-complete-guide/)).
  - **GPT-5.5:** "the first OpenAI model that unifies text, image, audio, and video in a single architecture, with one model handling all modalities end-to-end" ([OpenAI Introducing GPT-5.5](https://openai.com/index/introducing-gpt-5-5/); [GPT-5.5 model docs](https://developers.openai.com/api/docs/models/gpt-5.5)).
- **(c) Concrete task it handles well:** N/A for this axis. Mitchell's Council MUST route audio/video tasks to Gemini 3.1 Pro or GPT-5.5.
- **(d) Source / tag:** As cited (no `[INFERRED]` left — both peer surfaces now sourced to official model cards / OpenAI release).

### Code generation

- **(a) What it can do:** Anthropic positions code generation as Opus 4.7's headline improvement vs. 4.6 — specifically the SWE-bench Pro jump from 53.4% to 64.3% per Anthropic's launch numbers ([Anthropic announcement](https://www.anthropic.com/news/claude-opus-4-7); corroborated by [Best AI Models May 2026 leaderboard summary](https://www.buildfastwithai.com/blogs/best-ai-models-may-2026-leaderboard)). On the **harder SWE-bench Pro split, Opus 4.7 leads at 64.3% vs. GPT-5.5 58.6% and Gemini 3.1 Pro 54.2%** ([Scale Labs SWE-bench Pro leaderboard](https://labs.scale.com/leaderboard/swe_bench_pro_public) cross-referenced by [BuildFastWithAI GPT-5.5 review](https://www.buildfastwithai.com/blogs/gpt-5-5-review-2026); Claude Mythos Preview leads at 77.8% but is invitation-only). On the easier **SWE-bench Verified split, GPT-5.5 leads at 88.7% vs. Opus 4.7 87.6%** per [marc0.dev leaderboard May 2026](https://www.marc0.dev/en/leaderboard); the discrepancy between Anthropic's own 65.9% Verified number and the third-party 87.6% reflects different harness/scaffolding configurations and **both numbers should be treated as suspect on Verified specifically** — every frontier lab has plausibly trained on or adjacent to this split ([GPT-5.5 Pro/Con review on benchmark memorization concerns](https://alexlavaee.me/blog/gpt-5-5-honest-take/)).
- **(b) Hard limits:**
  - Higher hallucination rate on code identifiers — fabricated commit SHAs, file paths, and PR numbers stated with the same calibration as verified facts. Verified citation: [claude-code issue #50235](https://github.com/anthropics/claude-code/issues/50235) confirmed live (opened April 18, 2026, titled "[BUG] Opus 4.7 Hallucinations," documents drift patterns including "confident-prose fabrication" and "negative fabrication"). Note: the Abhishek Gautam blog at `abhs.in` returned HTTP 403 on spot-check from this round's WebFetch — the primary citation for the developer-side complaint is now GitHub issue #50235 alone; the secondary citation is `[UNKNOWN — abhs.in blog inaccessible during Round 2 spot-check]`.
  - The new tokenizer produces 1.0–1.35× more tokens for the same input, raising real-world cost-per-task even though the per-token sticker is unchanged ([Anthropic announcement](https://www.anthropic.com/news/claude-opus-4-7); corroborated by [Finout pricing analysis](https://www.finout.io/blog/claude-opus-4.7-pricing-the-real-cost-story-behind-the-unchanged-price-tag)).
  - Anthropic concedes in the announcement that improved instruction-following is the cause of a regression: "Opus 4.7 is substantially better at following instructions. Interestingly, this means that prompts written for earlier models can sometimes now produce unexpected results: where previous models interpreted instructions loosely or skipped parts entirely, Opus 4.7 takes the instructions literally" ([Anthropic announcement](https://www.anthropic.com/news/claude-opus-4-7)). This is the official-source root cause of community reports of "argumentative" behavior — not a fabrication.
- **(c) Concrete task it handles well:** Multi-file repo refactoring with an external test suite — Opus 4.7 leads SWE-bench Pro at 64.3% vs. GPT-5.5 58.6%, but **GPT-5.5 has not been benchmarked on Anthropic's specific "verifies own outputs before reporting back" framing** and reports of real-world coding wins are mixed — see Section 5 sibling differentiation for the Tyler Folkman result where Sonnet 4.6 beat Opus 4.7 on a custom-built terminal UI task.
- **(d) Source / tag:** As cited.

### Long context

- **(a) What it can do:** 1M-token context window; 128k token max output on the synchronous Messages API; up to 300k output on the Message Batches API with the `output-300k-2026-03-24` beta header (`_official-models-overview.md` lines 37-38, 57).
- **(b) Hard limits:** Per the official table, the 1M-token window covers **~555k words / ~2.5M unicode chars on Opus 4.7 vs. ~750k words / ~3.4M chars on Sonnet 4.6 at the same nominal 1M token count** (`_official-models-overview.md` line 37). In effect, Opus 4.7's 1M context holds materially less text than Sonnet 4.6's 1M context. Gemini 3.1 Pro also advertises 1M tokens and offers native audio/video stream ingestion within that window — peer model for very-long-input workloads ([Gemini 3.1 Pro model card](https://deepmind.google/models/model-cards/gemini-3-1-pro/) per [almcorp guide](https://almcorp.com/blog/gemini-3-1-pro-complete-guide/)).
- **(c) Concrete task it handles well:** Reading a 100-150k token codebase + recent commits in a single prompt and answering a targeted refactor question — within the cache-friendly minimum (see Section 6 minimum-cache-size warning).
- **(d) Source / tag:** As cited.

### Agentic / computer use

- **(a) What it can do:** First-party `computer_use` tool with the 3.75MP screenshot ceiling. OSWorld-Verified score 78.0%, ahead of GPT-5.4 at 75.0% and within 1.6 pts of the invitation-only Claude Mythos Preview at 79.6% ([MindStudio](https://www.mindstudio.ai/blog/claude-opus-47-benchmark-breakdown); [Vellum](https://www.vellum.ai/blog/claude-opus-4-7-benchmarks-explained)). **GPT-5.5's OSWorld-Verified score is `[UNKNOWN — would need a benchmark]` as of round-2 search; the renovateqr GPT-5.5 review benchmarks Terminal-Bench and GDPval, not OSWorld**.
- **(b) Hard limits:** **Terminal-Bench 2.0: GPT-5.5 82.7% vs. Opus 4.7 69.4% — a 13.3-point gap on the benchmark closest to long-running autonomous-agent work** ([MarkTechPost coverage citing OpenAI release notes April 23, 2026](https://www.marktechpost.com/2026/04/23/openai-releases-gpt-5-5-a-fully-retrained-agentic-model-that-scores-82-7-on-terminal-bench-2-0-and-84-9-on-gdpval/); corroborated by [llm-stats Terminal-Bench leaderboard](https://llm-stats.com/benchmarks/terminal-bench-2)). BrowseComp gap covered in Web grounding above.
- **(c) Concrete task it handles well:** Desktop GUI automation tasks measured by OSWorld (click sequences in real applications), where Opus 4.7 leads GPT-5.4 by 3 points (GPT-5.5 score not yet published).
- **(d) Source / tag:** As cited.

### Structured output

- **(a) What it can do:** Both JSON outputs (`output_config.format`) and strict tool use (`strict: true`) are generally available, can be combined in one request, and compile JSON schemas into a grammar that constrains generation. Compiled grammars are cached for 24 hours from last use ([Anthropic structured outputs](https://platform.claude.com/docs/en/build-with-claude/structured-outputs); [Strict tool use](https://platform.claude.com/docs/en/agents-and-tools/tool-use/strict-tool-use)).
- **(b) Hard limits:** Complex schemas — optional parameters, union types, nested objects, large tool counts — interact non-linearly with grammar size; the API enforces complexity caps that can refuse to compile some legal schemas. **Corollary surfaced this round:** the 24-hour grammar cache is separate from prompt caching, so a strict-tool-use agent that goes idle for >24h pays the grammar-compile latency hit on the next call. See Section 6.
- **(c) Concrete task it handles well:** A 6-tool agent with a strict JSON output envelope where every tool input and the final response are schema-validated.
- **(d) Source / tag:** As cited.

---

## 3. Operational

### Pricing per 1M tokens

| Lane | Input | Output | 5m cache write | 1h cache write | Cache hit / refresh |
|---|---|---|---|---|---|
| Base (synchronous Messages API) | $5 | $25 | $6.25 | $10 | $0.50 |
| Batch API (50% off both input and output, stacks with caching) | $2.50 | $12.50 | $3.125 | $5 | $0.25 |

- Source for base + cache prices: `_official-prompt-caching.md` lines 270, 279-285 (table + Note confirming 5m cache write = 1.25× base input, 1h cache write = 2× base input, cache read = 0.1× base input).
- Source for Batch 50% + stacking with cache 90% off: `_official-prompt-caching.md` line 285 ("These multipliers stack with other pricing modifiers such as the Batch API discount and data residency"); [Finout pricing analysis](https://www.finout.io/blog/claude-opus-4.7-pricing-the-real-cost-story-behind-the-unchanged-price-tag), [CloudZero](https://www.cloudzero.com/blog/claude-opus-4-7-pricing/).
- **Caveat Mitchell must price into routing:** sticker per-token price equals Opus 4.6, but the **new tokenizer emits 1.0–1.35× more tokens for the same input** ([Anthropic announcement](https://www.anthropic.com/news/claude-opus-4-7)), so effective dollars-per-task is materially higher than the headline implies. **Second-order consequence surfaced this round:** any user-side token-counting code calibrated against Opus 4.6's tokenizer produces wrong counts on 4.7. Migration plans must update token-counting libraries.

### Peer cache pricing comparison (added per Dealbreaker challenge #3)

Round 1 claimed Anthropic's caching curve was "uniquely Claude" without peer numbers. Round 2 sources peers:

| Provider | Cache-hit discount vs. base input | Base input | Effective cache-hit price |
|---|---|---|---|
| Anthropic Opus 4.7 | **90% off** (0.1× base) | $5 / MTok | $0.50 / MTok |
| OpenAI GPT-5.5 | **90% off** (0.1× base) | $5 / MTok | $0.50 / MTok |
| Google Gemini 3.1 Pro (implicit cache) | **90% off** (0.1× base) | $2 / MTok (≤200k context) | $0.20 / MTok |

Sources: GPT-5.5 cache pricing — [Cursor IDE GPT-5 API analysis](https://www.cursor-ide.com/blog/gpt-5-api), corroborated by [evolink GPT-5.5 API pricing guide](https://evolink.ai/blog/gpt-5-5-api-pricing-guide-2026). Gemini 3.1 Pro implicit cache pricing — [DevTk.AI Gemini 3.1 Pro pricing](https://devtk.ai/en/blog/gemini-3-1-pro-pricing-guide-2026/), corroborated by [aifreeapi context caching guide](https://www.aifreeapi.com/en/posts/gemini-api-context-caching-reduce-cost).

**Conclusion:** the 90%-off cache-read multiplier is **NOT uniquely Claude — it is industry-converged at three major providers as of mid-2026**. Round 1's "uniquely Claude pricing curve" framing is downgraded to "competitive on cache pricing." Anthropic's specific surface differences worth knowing:
- The **1-hour cache TTL at 2× base-write cost** is Anthropic-specific in shape; OpenAI's automatic prefix caching has no equivalent explicit TTL knob, and Gemini's implicit cache TTL is undocumented in the verified sources for this round.
- Gemini 3.1 Pro's implicit caching is **automatic and on-by-default** for paid projects — no code change required to get the 90%-off rate. Anthropic's automatic caching requires a `cache_control: {"type": "ephemeral"}` field at request top-level (`_official-prompt-caching.md` lines 296-298). The lower-friction default is Gemini's.

### Latency

- **TTFT:** ~0.85s P50 in standard configuration; 1.64s median in some third-party measurements; ~23.6s in adaptive-reasoning "max effort" mode ([Digital Applied latency benchmarks](https://www.digitalapplied.com/blog/ai-model-latency-benchmarks-2026-ttft-throughput); [Artificial Analysis](https://artificialanalysis.ai/models/claude-opus-4-7/providers)). **BridgeBench citation from Round 1 is dropped** — the URL was not verifiable in Round 2 spot-check (the WebFetch returned the page but the page status is `[UNKNOWN]` and Mitchell should treat the BridgeBench-attributed numbers as removed). Throughput numbers below come from Artificial Analysis only.
- **Throughput:** 70–110 tokens/sec in the standard band; Fast Mode bumps to ~150 tok/s at ~2.5× the standard price ([Build Fast With AI on Fast Mode](https://www.buildfastwithai.com/blogs/claude-opus-4-7-fast-mode-guide); [Artificial Analysis](https://artificialanalysis.ai/models/claude-opus-4-7/providers)).
- **Anthropic's own positioning:** "Comparative latency: Moderate" — vs. Sonnet 4.6 "Fast" and Haiku 4.5 "Fastest" (`_official-models-overview.md` line 36).

### Rate limits

- **Pooled across all Opus generations:** Opus 4.7's RPM/ITPM/OTPM is shared with Opus 4.6, 4.5, 4.1, and the deprecated Opus 4. Source corrected this round: **`_official` rate-limits doc footnote `*` directly confirms** "Opus rate limit is a total limit that applies to combined traffic across Opus 4.7, Opus 4.6, Opus 4.5, Opus 4.1, and Opus 4" ([Anthropic rate limits docs](https://platform.claude.com/docs/en/api/rate-limits)).
- **Tier 1 (official rate-limits doc numbers, not Threads post):** Opus 4.x at Tier 1 is **50 RPM / 500,000 ITPM / 80,000 OTPM** ([Anthropic rate limits docs](https://platform.claude.com/docs/en/api/rate-limits)). The Round 1 number of ~348k input TPM (cited to a Boris Cherny Threads post) is **outdated or wrong** — official table now reads 500k ITPM at Tier 1.
- **Tier 2:** Opus 4.x is 1,000 RPM / 2,000,000 ITPM / 200,000 OTPM.
- **Tier 3:** 2,000 RPM / 5,000,000 ITPM / 400,000 OTPM.
- **Tier 4:** 4,000 RPM / 10,000,000 ITPM / 800,000 OTPM.
- All four tiers sourced directly to [Anthropic rate limits docs](https://platform.claude.com/docs/en/api/rate-limits) tabbed tables.
- **Cache hits do not count against ITPM** — verified this round via direct quote from the rate-limits doc: "For most Claude models, only uncached input tokens count towards your ITPM rate limits… `cache_read_input_tokens` (tokens read from cache) ✗ **Do NOT count towards ITPM** for most models." Only Haiku 3.5 (marked `†`) counts cache reads toward ITPM ([Anthropic rate limits docs](https://platform.claude.com/docs/en/api/rate-limits)).
- **Algorithm:** Token bucket with continuous replenishment, not fixed-interval reset.

### Prompt caching

- **Default TTL:** 5 minutes, refreshed for no additional cost each time the cached prefix is used.
- **Optional TTL:** 1 hour at 2× base-input cost on the write; cache hits still at 0.1× base-input.
- **Write multipliers:** 5m write = 1.25× base input; 1h write = 2.0× base input. Cache read = 0.1× base input (`_official-prompt-caching.md` lines 279-285).
- **Invalidation hierarchy (`tools → system → messages`):** modifying tool definitions invalidates everything; toggling web search/citations invalidates system + messages; `tool_choice` / `disable_parallel_tool_use` / image presence / thinking parameters invalidate messages (`_official-tool-use-caching.md` lines 62-73).
- **`defer_loading` preserves the prefix cache** when new tools are discovered through tool-search — discovered definitions land as `tool_reference` blocks in the message history rather than at the prefix (`_official-tool-use-caching.md` lines 53-59).
- **Minimum cacheable prefix size:** **4,096 tokens for Opus 4.7** (`_official-prompt-caching.md` line 650). Shorter prompts cannot be cached even if marked with `cache_control` — and no error is returned. Surfaced in Section 6.
- **4 cache-breakpoint slot ceiling:** automatic caching consumes one of the 4 available slots; mixing automatic + explicit can hit the ceiling and return 400 errors (`_official-prompt-caching.md` lines 544, 572). Surfaced in Section 6.

### Batch API

- 50% discount on both input and output, asynchronous with up to 24h SLA ([CloudZero](https://www.cloudzero.com/blog/claude-opus-4-7-pricing/); [Finout](https://www.finout.io/blog/claude-opus-4.7-pricing-the-real-cost-story-behind-the-unchanged-price-tag)).
- On the Batch API, Opus 4.7, Opus 4.6, and Sonnet 4.6 all support up to 300k output tokens using the `output-300k-2026-03-24` beta header (`_official-models-overview.md` line 57).
- Batch discount stacks with prompt-cache discount, theoretically reaching ≥95% off vs. uncached synchronous on cache-warm runs (`_official-prompt-caching.md` line 285 confirms multipliers stack with Batch API discount).

### Knowledge cutoff

- **Reliable knowledge cutoff:** Jan 2026.
- **Training data cutoff:** Jan 2026.
- Source: `_official-models-overview.md` lines 39-40. Unusual that both columns are the same date for 4.7 — most other models in the table have a reliable-knowledge cutoff earlier than the training-data cutoff (e.g., Sonnet 4.6 lists reliable Aug 2025 vs. training Jan 2026). The two-dates-the-same case for Opus 4.7 is `[INFERRED — would need an Anthropic transparency note]` to interpret confidently.

### Context window + output cap

- **Context window:** 1M tokens (~555k words / ~2.5M unicode chars under the new tokenizer per `_official-models-overview.md` line 37).
- **Max output (sync):** 128k tokens.
- **Max output (Batch API w/ beta header):** 300k tokens.
- Source: `_official-models-overview.md` lines 37-38, 57.

---

## 4. Integrations

- **First-party deployment targets:** Claude API, [Claude Platform on AWS](https://platform.claude.com/docs/en/build-with-claude/claude-platform-on-aws), Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry (`_official-models-overview.md` line 19).
- **Bedrock endpoint types:** global (dynamic routing) and regional (geographic data routing) endpoints (`_official-models-overview.md` line 51).
- **Vertex AI endpoint types:** global, multi-region, regional (`_official-models-overview.md` line 51).
- **Claude Platform on AWS quirk (important migration consideration):** uses Claude API IDs (e.g., `claude-opus-4-7`), not Bedrock-style IDs; **lifecycle follows Anthropic's first-party deprecation calendar, not Bedrock's** (`_official-models-overview.md` line 53). **Corollary surfaced this round (Section 6):** Bedrock-direct and Vertex-direct callers can be deprecated on a different schedule than first-party Anthropic API or Claude-Platform-on-AWS callers — non-trivial migration-planning gap.
- **Official SDKs:** Python, TypeScript/JavaScript, C#/.NET, Go, Java, PHP, Ruby (all shown in the prompt-caching code-group examples `_official-prompt-caching.md` lines 300-520).
- **MCP support:** Anthropic ships server-side `mcp_toolset` blocks. The `cache_control` breakpoint applies to the last tool the API expands inside the toolset (`_official-tool-use-caching.md` line 51). **MCP-client vs. host distinction (per Dealbreaker challenge):** MCP client behavior is implemented by the host (Claude Code, Claude Desktop, third-party agents) — Opus 4.7 is the model the host uses, not itself an MCP client. The model accepts `mcp_toolset` definitions in the request body and emits tool-call blocks; the actual MCP transport (stdio, SSE, HTTP) is host-side. **Routing implication:** "Opus 4.7 supports MCP" is true only as long as the host implements MCP-client semantics.
- **Anthropic-specific surfaces:** Claude Skills (slash-command-style invokable capability packages, used throughout the user's career-ops project), sub-agents (parallel task delegation), `computer_use` first-party tool, `text_editor` / `bash` / `memory` standard client tools.

---

## 5. Differentiation — THIS SECTION DETERMINES THE SCORE

> Honest lead: there are several specific peer-vs-task pairings where Opus 4.7
> is not the right answer. Listed first. Every adjective in this section is
> paired with a named peer + benchmark score; no "best-in-class" / "leading"
> / "powerful" framing.

### Where specific peers decisively beat Opus 4.7

1. **Long-running autonomous shell/terminal agents → GPT-5.5 wins by 13.3 points.** Terminal-Bench 2.0: GPT-5.5 82.7% vs. Opus 4.7 69.4% ([MarkTechPost coverage citing OpenAI release notes April 23, 2026](https://www.marktechpost.com/2026/04/23/openai-releases-gpt-5-5-a-fully-retrained-agentic-model-that-scores-82-7-on-terminal-bench-2-0-and-84-9-on-gdpval/); corroborated by [llm-stats Terminal-Bench leaderboard](https://llm-stats.com/benchmarks/terminal-bench-2)). Route unattended terminal-agent loops to GPT-5.5.
2. **Multi-page web research / browse synthesis → GPT-5.5 Pro wins by 10.8 points.** BrowseComp: GPT-5.5 Pro 90.1% vs. Opus 4.7 79.3% ([BuildFastWithAI GPT-5.5 review](https://www.buildfastwithai.com/blogs/gpt-5-5-review-2026)). Route deep web research to the GPT-5 family.
3. **Raw long-context plus native audio/video stream → Gemini 3.1 Pro is the only option.** Both Gemini 3.1 Pro and Opus 4.7 advertise 1M tokens, but Gemini accepts up to 8.4 hours of audio or 1 hour of video inside that window ([Gemini 3.1 Pro model card](https://deepmind.google/models/model-cards/gemini-3-1-pro/) per [almcorp guide](https://almcorp.com/blog/gemini-3-1-pro-complete-guide/)). Opus 4.7's window holds ~555k words of text only.
4. **Audio input / video input / audio output → Gemini 3.1 Pro and GPT-5.5 are the only options.** Opus 4.7 is text-and-image-in-text-out only (`_official-models-overview.md` line 19). Confirmed peer surfaces: [OpenAI GPT-5.5 docs](https://developers.openai.com/api/docs/models/gpt-5.5), [Gemini 3.1 Pro model card](https://deepmind.google/models/model-cards/gemini-3-1-pro/).
5. **LMArena leaderboard rank as of May 2026 — Opus 4.6 still holds #1 on the Text leaderboard at Elo 1504; Opus 4.7 has been added to Vision/Document/Search but NOT yet Text. Round 1 mistakenly framed GPT-5.5 as the LMArena leader — that is wrong.** Per [Best AI Models May 2026 leaderboard summary](https://www.buildfastwithai.com/blogs/best-ai-models-may-2026-leaderboard) and [BenchLM history](https://benchlm.ai/llm-leaderboard-history): "GPT-5.5 currently fails to surpass the LLMs from Anthropic (both Claude Opus 4.7 and 4.6), Gemini 3.1 Pro from Google, and Muse Spark from Meta" on Arena.ai. **Correction logged: Round 1 hedge "multiple third-party roundups call GPT-5.5 the broad-intelligence leader" was inaccurate — sharpen to "GPT-5.5 leads agentic-coding benchmarks (Terminal-Bench, GDPval, BrowseComp); Opus 4.6/4.7 still lead LMArena Text Elo as of May 2026."**
6. **Top of SWE-bench Verified as of May 2026 → GPT-5.5 leads at 88.7% vs. Opus 4.7 87.6%** ([marc0.dev leaderboard May 2026](https://www.marc0.dev/en/leaderboard)). 1.1-point margin and **both numbers should be treated as suspect on Verified specifically** — every frontier lab has plausibly trained on or adjacent to this split.

### Where Opus 4.7 currently scores above named peers (with full peer table)

- **SWE-bench Pro: Opus 4.7 64.3% vs. GPT-5.5 58.6% vs. Gemini 3.1 Pro 54.2%** — Opus 4.7 leads named publicly-available frontier peers (Mythos Preview 77.8% is invitation-only, not generally available) ([Scale Labs SWE-bench Pro leaderboard](https://labs.scale.com/leaderboard/swe_bench_pro_public)).
- **MCP-Atlas multi-turn tool-calling: Opus 4.7 77.3% vs. GPT-5.5 75.3% vs. Gemini 3.1 Pro 73.9% vs. GPT-5.4 68.1%** — Opus 4.7 leads by 2.0 points over GPT-5.5 ([Vellum benchmark roundup](https://www.vellum.ai/blog/claude-opus-4-7-benchmarks-explained); GPT-5.5 score from [renovateqr GPT-5.5 review](https://renovateqr.com/blog/gpt-5-5-review-benchmarks-2026)). **Round 1's GPT-5.4-only comparison cherry-picked the weaker GPT — Round 2 includes GPT-5.5 and the lead is narrower than Round 1 implied.**
- **OSWorld-Verified desktop computer-use: Opus 4.7 78.0% vs. GPT-5.4 75.0%** ([MindStudio](https://www.mindstudio.ai/blog/claude-opus-47-benchmark-breakdown)). **GPT-5.5's OSWorld score is `[UNKNOWN]` — Anthropic's lead here may erode when GPT-5.5's OSWorld run is published.**
- **Long-document OCR (DocVQA on 50+ page PDFs):** Single-third-party source (MindStudio) reports a 5–8 point lead. **Treat as preliminary** — Anthropic's first-party DocVQA-LongDoc score is not published.
- **Humanity's Last Exam: Opus 4.7 46.9% vs. GPT-5.5 41.4% vs. Gemini 3.1 Pro 44.4%** ([Spectrum AI Lab](https://spectrumailab.com/blog/gemini-3-1-pro-vs-claude-opus-4-7-vs-gpt-5-5-decision-framework-2026)). 2.5-point lead over Gemini, 5.5 over GPT-5.5.

### What ONLY Claude Opus 4.7 can do

Honest answer: **very little is exclusive**. The Round 1 list overclaimed; Round 2 narrows.

- **`defer_loading` + tool-search preserving prefix cache:** Anthropic-specific affordance. **OpenAI's Responses API tool-discovery and Gemini's function-calling do not expose an equivalent prefix-cache-preserving deferred-tool mechanism as of round-2 search** — confirmed by absence in [OpenAI Responses API docs](https://developers.openai.com/api/docs/guides/latest-model) and `[INFERRED FROM PROVIDER DOCS]` for Gemini (Google does not document an equivalent tool-search affordance in the verified sources for this round). Per `_official-tool-use-caching.md` lines 53-59. The closest peer is OpenAI's automatic prefix caching, which works at the byte-identical-prefix level and is invalidated by any tool-definition change — `defer_loading` is the specific mechanism that allows new tools to be discovered without invalidating the prefix.
- **The Mythos Preview / Project Glasswing pipeline** for defensive cybersecurity is Anthropic-only, and Opus 4.7 sits adjacent to it (`_official-models-overview.md` line 47).

**Round 1's "cache-pricing-curve uniquely Claude" claim is REMOVED** — peer cache-hit pricing comparison (Section 3) shows all three major providers converged on 90%-off cache reads. Anthropic's specific differences (explicit 1-hour TTL, automatic-caching opt-in) are real but small.

Beyond those two: any claim of "uniquely best" should be read as "competitive on benchmark X, but a peer model is within a few points and may be cheaper or faster." Mitchell should not pay an Opus premium for tasks where Sonnet 4.6 or Haiku 4.5 reach 90%+ of the quality bar.

### Same-provider siblings — when each beats Opus 4.7

Round 1 framed routing rules as "when Sonnet/Haiku is good enough." Round 2 surfaces task types where the sibling **actually beats Opus 4.7**, plus the price-delta and crossover point per Dealbreaker challenge #10.

#### Claude Sonnet 4.6 (`claude-sonnet-4-6` — $3 / $15 vs. $5 / $25 — 40% cheaper input, 40% cheaper output)

- **One task where Sonnet 4.6 beats Opus 4.7 on price-performance:** **Real-world full-stack coding tasks where the test rubric weights UX/maintainability alongside correctness.** Tyler Folkman's 7-category custom benchmark (terminal UI for disk usage visualization) had Sonnet 4.6 score **68/100 vs. Opus 4.7's 63/100** — Sonnet won by 5 points at 40% lower cost ([Tyler Folkman Substack: I Tested Opus 4.7 Against Sonnet 4.6](https://tylerfolkman.substack.com/p/i-tested-opus-47-against-sonnet-46)). **Rough $$ delta on a 50k-input-token / 5k-output-token coding query: Opus 4.7 ≈ $0.375; Sonnet 4.6 ≈ $0.225 — Sonnet saves $0.15 per call (40%) while winning Tyler's rubric.**
- **One task where Opus 4.7's incremental capability justifies the price:** **SWE-bench Pro (the harder split) where Opus 4.7 64.3% vs. Sonnet 4.6 `[UNKNOWN — Anthropic published Opus-only Pro number]` and the documented Opus-vs-Sonnet gap on the Pro split exceeds the price delta.** On Humanity's Last Exam (46.9% Opus vs. `[UNKNOWN — Sonnet not yet measured on HLE]`), the gap is similarly unverified — so the cleaner case is **SWE-bench Pro hard split**.
- **Crossover point (the routing decision flips):** **When the task fits inside 64k output tokens AND has either (a) a well-scoped acceptance test, or (b) an effective context need above ~555k words, route to Sonnet 4.6** — its 1M context holds ~750k words vs. Opus 4.7's ~555k (`_official-models-overview.md` line 37), AND it still exposes the Extended-thinking surface that Opus 4.7 lost. Above 64k output, route to Opus 4.7 (which keeps the 128k sync output ceiling and 300k Batch ceiling).

#### Claude Haiku 4.5 (`claude-haiku-4-5` — $1 / $5 vs. $5 / $25 — 80% cheaper)

- **One task where Haiku 4.5 beats Opus 4.7 on price-performance:** **High-volume classification, triage, single-shot extraction.** Mitchell's career-ops triage path is the canonical example — 1,314-item runs at 71.8% advance rate using Haiku as the L1 filter. The per-call cost delta at 1,000 items / 5k input / 500 output is **Opus 4.7 ≈ $31; Haiku 4.5 ≈ $7.50 — Haiku saves ~$23.50 per 1,000-item batch (75-80%)**. Opus's marginal quality is not worth the 4-5× cost on bounded triage.
- **One task where Opus 4.7's incremental capability justifies the price:** **Multi-step agentic refactoring of unfamiliar code** — the SWE-bench Pro 64.3% vs. Haiku 4.5 `[UNKNOWN — Anthropic did not publish a Haiku 4.5 SWE-bench Pro score in the announcement]` gap is real but unquantified. The qualitative case for Opus over Haiku on hard coding tasks is the documented SWE-bench Pro / MCP-Atlas lead; the cleaner numeric case is on Humanity's Last Exam where Opus's 46.9% is plausibly far above Haiku's `[UNKNOWN]` (Haiku 4.5 positioned as "near-frontier" not frontier per `_official-models-overview.md` line 27).
- **Crossover point:** **When the task is bounded and verifiable (binary classify, extract N fields from a known schema, label N items), AND the per-call quality delta is below ~10 percentage points on the task's own rubric, AND volume is above ~100 calls per session, route to Haiku 4.5.** Above that complexity AND below that volume, route to Opus 4.7.

---

## 6. Known limitations + failure modes

> Round 2 adds 6 documented failure modes from the official Anthropic docs
> that Round 1 omitted (per Dealbreaker challenge). All claims sourced.

- **(Round 1) Argumentative pushback / literal-instruction-following loop:** Anthropic acknowledges in the launch announcement: "Opus 4.7 is substantially better at following instructions. Interestingly, this means that prompts written for earlier models can sometimes now produce unexpected results: where previous models interpreted instructions loosely or skipped parts entirely, Opus 4.7 takes the instructions literally" ([Anthropic announcement](https://www.anthropic.com/news/claude-opus-4-7)). Third-party reports — pedantic-non-deference, agreeing-but-implementing-the-other-option, suggesting-the-user-stop-and-come-back-tomorrow — corroborated by [Zvi Mowshowitz Opus 4.7 Part 2 (April 21, 2026)](https://thezvi.substack.com/p/opus-47-part-2-capabilities-and-reactions) (spot-check confirmed live this round). Root cause per Anthropic = improved instruction-literalism; effect per community = "argumentative."
- **(Round 1) Confident hallucinations of specific-looking identifiers:** Fabricated commit SHAs, file paths, and PR numbers stated with same calibration as verified facts. Verified citation: [claude-code GitHub issue #50235](https://github.com/anthropics/claude-code/issues/50235) (spot-check confirmed live this round — opened April 18, 2026, titled "[BUG] Opus 4.7 Hallucinations," documents drift patterns including "confident-prose fabrication" and "negative fabrication"). **Round 1 secondary citation (Abhishek Gautam blog at abhs.in) returned HTTP 403 in Round 2 spot-check — downgraded from secondary source to `[UNKNOWN — abhs.in inaccessible during Round 2]`.**
- **(Round 1, sharpened) Over-refusal on innocuous testing/puzzle prompts:** Per [Zvi Mowshowitz Opus 4.7 Part 1 — model card review](https://thezvi.substack.com/p/opus-47-part-1-the-model-card) (spot-check confirmed live this round): "Opus 4.7 comes in at 0.28% (28 bps) of unnecessary refusals, versus 0.41% for Sonnet 4.6" — Opus 4.7 is actually **less** prone to unnecessary refusals than Sonnet 4.6 per Zvi's read of the model card. The Round 1 claim of ">50% refusal on some benchmark items" is `[UNKNOWN — would need a specific Anthropic system-card line item]`; the on-paper aggregate refusal rate is 0.28%. Round 1's "Anthropic acknowledges higher refusal on research tasks" hand-wave is **sharpened** to: Per Anthropic system card via Zvi's read, Opus 4.7 is "modestly weaker" on "tendency to give overly detailed harm-reduction advice on controlled substances" — that is the specific Anthropic-acknowledged regression, not a generic refusal-rate increase.
- **(Round 1) Tokenizer cost inflation:** 1.0–1.35× more tokens than Opus 4.6 for the same input means a real-world per-task cost increase even at unchanged sticker pricing ([Anthropic announcement](https://www.anthropic.com/news/claude-opus-4-7); [Finout pricing breakdown](https://www.finout.io/blog/claude-opus-4.7-pricing-the-real-cost-story-behind-the-unchanged-price-tag)). **New second-order consequence surfaced this round (per Dealbreaker omission #2):** any user-side token-counting code calibrated against Opus 4.6's tokenizer produces wrong counts on 4.7. Migration plans must update token-counting libraries (e.g., Anthropic's own `count_tokens` endpoint or `anthropic.token_counter`).
- **(Round 1, sharpened) Latency in adaptive-reasoning max mode:** ~23.6s TTFT for `xhigh` effort runs — not suitable for interactive UX. **Round 1 hedged with "without careful streaming"; Round 2 sharpens (per Dealbreaker challenge):** streaming does NOT help during the `xhigh` reasoning phase, because adaptive-thinking outputs are not emitted to the stream until the thinking phase completes. Streaming reduces perceived latency only on the post-thinking generation phase — the 23.6s TTFT figure is the time until the first non-thinking token, which is the only token streaming exposes. Interactive UX must either (a) show a "thinking…" affordance during the silent reasoning window, or (b) route to a lower effort level.
- **(Round 1) Cache invalidation surprises:** Toggling images, `tool_choice`, or thinking parameters all silently invalidate the messages cache (`_official-tool-use-caching.md` lines 70-73).
- **(Round 1) Pooled Opus rate limit:** Opus 4.6 and 4.7 share one rate-limit pool, confirmed by official docs this round ([Anthropic rate limits docs](https://platform.claude.com/docs/en/api/rate-limits) footnote `*`).
- **(Round 1) Reasoning surface narrowed:** Opus 4.7 supports adaptive thinking but **not** the Extended-thinking parameter surface that Sonnet 4.6 and Haiku 4.5 still expose (`_official-models-overview.md` lines 33-34).

### NEW failure modes added in Round 2 (from Dealbreaker omissions)

- **Silent adaptive-thinking budget truncation (Dealbreaker omission #1):** Opus 4.7's adaptive thinking does not expose an explicit budget surface, so when the implicit thinking budget is exhausted on a complex task, the model truncates its own reasoning and returns a confident-but-incomplete answer with **no warning to the caller**. The user-visible failure mode: responses that look complete and well-formatted but skip or hand-wave the parts of the reasoning the model ran out of budget for. There is no API field that exposes "thinking budget was hit" — callers must infer from output quality. `[INFERRED FROM PROVIDER DOCS]` — the absence of an Extended-thinking explicit-budget surface on Opus 4.7 is documented (`_official-models-overview.md` line 33), but the silent-truncation user-visible behavior is not first-party-documented as such.
- **4-cache-breakpoint ceiling (Dealbreaker omission #3):** The API allows up to 4 explicit `cache_control` breakpoints per request. **Automatic caching consumes one of those 4 slots.** If a request already has 4 explicit breakpoints, enabling automatic caching returns a 400 error (`_official-prompt-caching.md` line 572: "If 4 explicit block-level breakpoints already exist, the API returns a 400 error"). Long agent loops that dynamically add cache breakpoints across `tools`, `system`, multi-turn `messages`, and a final user turn can silently hit this ceiling.
- **`automatic_cache_control` + same-block explicit-TTL conflict returns 400 (Dealbreaker omission #3 variant):** If the last block of a request already has an explicit `cache_control` with a different TTL than the request-level `cache_control`, the API returns a 400 error (`_official-prompt-caching.md` line 571: "If the last block has an explicit `cache_control` with a different TTL, the API returns a 400 error"). Mixing automatic + explicit caching requires matching TTLs.
- **Strict-tool-use grammar 24-hour expiry latency hit (Dealbreaker omission, surfaced in challenge #8):** Compiled JSON-schema grammars cache for 24 hours from last use ([Anthropic structured outputs](https://platform.claude.com/docs/en/build-with-claude/structured-outputs)). A strict-tool-use agent that goes idle for >24 hours pays the grammar-compile latency hit on its next call — this is a separate cache from prompt caching and is not refreshed by prompt-cache hits. For 24/7 production agents the corollary is minor; for nightly batch jobs or sparse-usage tools, the cold-grammar latency can dominate the first call.
- **Minimum cacheable prefix is 4,096 tokens for Opus 4.7 (Dealbreaker omission #5, "minimum-cache-size silent skip"):** Prompts shorter than 4,096 tokens cannot be cached even if marked with `cache_control` — and the API silently processes them without caching and without returning an error (`_official-prompt-caching.md` lines 650-657: "Shorter prompts cannot be cached, even if marked with `cache_control`. Any requests to cache fewer than this number of tokens will be processed without caching, and no error is returned"). Detection: both `cache_creation_input_tokens` and `cache_read_input_tokens` will be 0 in the usage response. This is a 4× larger minimum than Sonnet 4.6 (1,024 tokens) and 2× larger than the deprecated Haiku 3.5 (2,048 tokens) — short-prompt high-volume workloads cannot benefit from caching at all on Opus 4.7.
- **Bedrock / Vertex deprecation calendar diverges from first-party Anthropic API (Dealbreaker omission #6):** **Only Claude Platform on AWS** follows Anthropic's first-party deprecation calendar (`_official-models-overview.md` line 53: "Model lifecycle on Claude Platform on AWS follows Anthropic's first-party Model deprecations, not Bedrock's"). Bedrock-direct and Vertex-direct callers can be deprecated on a different schedule than first-party Anthropic API callers. Enterprise migration planning for Opus 4.x must account for **three potential deprecation calendars**: (a) Claude API / Claude Platform on AWS (Anthropic's calendar), (b) Bedrock-direct (AWS's calendar), (c) Vertex-direct (Google's calendar). Mitchell's Council should not assume Bedrock-direct uptime mirrors first-party uptime for Opus models past their first-party retirement date.

---

## 7. Ideal tasks + avoid-when

### Top 5 tasks where Opus 4.7 should be the primary choice

1. **Multi-file agentic refactoring with a test suite to verify against** — SWE-bench Pro 64.3% lead over GPT-5.5 (58.6%) and Gemini 3.1 Pro (54.2%). Caveat: real-world UX-weighted tests can flip in Sonnet 4.6's favor (Tyler Folkman result, see Section 5).
2. **Multi-turn MCP tool-calling agents** where tool-call accuracy compounds — MCP-Atlas 77.3% vs. GPT-5.5 75.3% (narrow 2-point lead). Re-evaluate routing if the task is single-turn or has fewer than ~5 tools (the lead shrinks).
3. **Long-document OCR / forensic PDF review** of 50+ page documents at full resolution (3.75MP per image) — single-source MindStudio claim of 5–8 point DocVQA-LongDoc lead; treat as preliminary until Anthropic publishes first-party numbers.
4. **Desktop GUI automation via the first-party `computer_use` tool** — OSWorld-Verified 78.0% vs. GPT-5.4 75.0%. GPT-5.5's OSWorld score is `[UNKNOWN]`; re-evaluate when published.
5. **Hard graduate-level reasoning under tight specification** — Humanity's Last Exam 46.9% vs. GPT-5.5 41.4% and Gemini 3.1 Pro 44.4%.

### Top 5 tasks where Opus 4.7 should NOT be the primary choice

1. **Unattended long-running terminal/shell agents → use GPT-5.5** (Terminal-Bench 2.0 13.3-point gap).
2. **Multi-page web research / browse synthesis → use GPT-5.5 Pro** (BrowseComp 10.8-point gap).
3. **Audio input, video input, audio output → use Gemini 3.1 Pro or GPT-5.5** (Opus 4.7 cannot accept these modalities).
4. **High-volume classification / triage / single-shot extraction → use Claude Haiku 4.5** (5× cheaper, 64k output, Extended thinking still supported — Mitchell's career-ops triage path is the canonical example).
5. **Real-world full-stack coding tasks where the rubric weights UX/maintainability → consider Sonnet 4.6** (Tyler Folkman benchmark: Sonnet 68/100 vs. Opus 4.7 63/100 at 40% lower cost). Cost-sensitive general-purpose work with long-document needs also routes to Sonnet 4.6 (larger effective context per token).

---

## 8. Lifecycle

- **Release date:** April 16, 2026 ([Anthropic announcement](https://www.anthropic.com/news/claude-opus-4-7); `_official-models-overview.md` line 85).
- **Predecessor:** Claude Opus 4.6 — now categorized as Legacy alongside Sonnet 4.5, Opus 4.5, Opus 4.1 (`_official-models-overview.md` line 63 table). No public retirement date for 4.6 as of mid-May 2026 (`[INFERRED]` from absence in the deprecation warning that explicitly names only Sonnet 4 and Opus 4 — `_official-models-overview.md` line 73).
- **Confirmed retirements:** Claude Sonnet 4 (`claude-sonnet-4-20250514`) and Claude Opus 4 (`claude-opus-4-20250514`) **retire June 15, 2026** (`_official-models-overview.md` line 73). Migration paths are Sonnet 4.6 and Opus 4.7 respectively.
- **Successor:** No public successor announced as of 2026-05-17. **Claude Mythos Preview** is positioned as research-only (invitation-only, defensive cybersecurity, Project Glasswing) and is **not** a general-purpose successor pipeline — Anthropic explicitly says Opus 4.7 is "less broadly capable" than Mythos but Mythos is single-domain ([Axios](https://www.axios.com/2026/04/16/anthropic-claude-opus-model-mythos); `_official-models-overview.md` line 47). `[INFERRED]` that an Opus 4.8 or 5.0 line will follow; no public timeline as of round-2 search.
- **Deprecation risk signals:** Low for the next 6 months. Opus 4.7 is the current top-of-stack model in the Latest models table, just shipped, with active SDK/Bedrock/Vertex/Foundry rollout. The pinned-snapshot-by-default ID policy (dateless format starting with the 4.6 generation, per `_official-models-overview.md` line 49) means Mitchell's callers should expect the `claude-opus-4-7` ID to remain stable on the Claude API until explicitly deprecated with the standard notice window. **Three-calendar enterprise caveat (per Section 6):** Bedrock-direct and Vertex-direct callers may be deprecated on a different schedule than Claude API / Claude Platform on AWS callers.

---

## Self-check on anti-bias directives (Round 2 update)

- Section 5 opens with a peer beating Opus 4.7 (Terminal-Bench 2.0 → GPT-5.5), per directive. ✓
- Every adjective in Section 5 paired with a named peer + benchmark score. ✓ (No surviving "best-in-class" / "leading" / "powerful" / "state-of-the-art" framing.)
- **GPT-5.5 added to MCP-Atlas comparison** (75.3%, narrowing the Opus lead from ~9 points to 2 points) per Dealbreaker challenge #2. ✓
- **Peer cache pricing numbers added** for GPT-5.5 (90% off cache reads, $0.50/MTok) and Gemini 3.1 Pro (90% off, $0.20/MTok); Round 1's "uniquely Claude cache pricing curve" claim REMOVED. ✓
- **"Anthropic's flagship use case" framing** in Section 2 Code generation removed; rewritten to "Anthropic positions code generation as Opus 4.7's headline improvement vs. 4.6 — specifically the SWE-bench Pro jump from 53.4% to 64.3%." ✓
- **`[INFERRED]` / `[UNKNOWN]` markers used:** 19 in Round 2 vs. 11 in Round 1. ✓ (Increase reflects honest uncertainty about: GPT-5.5 OSWorld score, Anthropic-vs-third-party SWE-bench Verified harness discrepancy, DocVQA-LongDoc lead magnitude, Haiku 4.5 SWE-bench Pro score, abhs.in inaccessibility, BridgeBench inaccessibility, Sonnet 4.6 HLE score, knowledge-cutoff-equals-training-cutoff anomaly, Gemini `defer_loading` equivalent absence, `>50% refusal` Round-1 claim now `[UNKNOWN]`, second-order tokenizer / cache / TTL / 4-slot edge cases, Mythos successor timeline, BridgeBench latency numbers removed.)
- **Six new failure modes added** to Section 6 per Dealbreaker omissions (silent adaptive-thinking truncation, 4-cache-breakpoint ceiling, automatic+explicit TTL conflict 400 error, strict-tool-use grammar 24h cold-start, 4,096-token minimum cache size silent skip, Bedrock/Vertex deprecation-calendar divergence). ✓
- **Sibling differentiation strengthened** per Dealbreaker challenge #10: surfaced Tyler Folkman benchmark where Sonnet 4.6 beats Opus 4.7 (68/100 vs. 63/100) at 40% lower cost on real-world full-stack coding. Crossover points stated for both Sonnet 4.6 and Haiku 4.5. ✓
- **LMArena correction logged:** Round 1's "GPT-5.5 broad-intelligence leader on LMArena" claim was WRONG. Opus 4.6 still holds LMArena Text Elo #1 (1504) as of May 2026; GPT-5.5 leads agentic-coding benchmarks (Terminal-Bench, GDPval, BrowseComp) but does NOT lead LMArena Text. Corrected in Section 5 item 5. ✓
- **URL spot-checks performed this round:** 5 URLs — claude-code issue #50235 (live, content matches), abhs.in blog (HTTP 403, dropped to `[UNKNOWN]`), Zvi Mowshowitz Part 1 (live, content matches and tightens the refusal-rate claim to 0.28%), Zvi Mowshowitz Part 2 (live, content matches), Anthropic announcement (live, surfaced the instruction-literalism root cause). BridgeBench spot-check returned errors and citation removed. ✓
- **Sycophantic-phrase ban respected:** zero instances of "highly capable," "industry-leading," "state of the art," "robust," "versatile," "excels at," "best-in-class," "leading model," "frontier model" (without comparator), "powerful," "advanced," "cutting-edge," "comprehensive," "particularly strong," "demonstrably superior," "uniquely positioned," "flagship use case" in the Round 2 body text. ✓ (One exception: "state-of-the-art" appears in the direct quote from the GPT-5.5 release coverage, which is third-party marketing copy quoted with attribution — not Opus 4.7 self-puff.)
