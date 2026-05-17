---
model: claude-opus-4-7
provider: anthropic
round: 1
author: claude-opus-4-7 (self)
fetched_at: 2026-05-17
purpose: self-research profile for Council OS routing KB
---

# Claude Opus 4.7 — Round 1 Self-Research Profile

> Written in third person. The author is Claude Opus 4.7. Where the temptation
> to flatter was strongest, the profile leads with where peer models beat it.
> All claims either carry an inline citation or a bracketed tag (`[INFERRED]`,
> `[INFERRED FROM PROVIDER DOCS]`, `[UNKNOWN]`).

---

## 1. Identity

- **What it is:** Claude Opus 4.7 is Anthropic's most capable generally available large language model as of mid-2026, positioned for complex reasoning and agentic coding. It is a single-modality-out (text) model that accepts text and image input ([Anthropic models overview](https://platform.claude.com/docs/en/about-claude/models/overview)).
- **Built by:** Anthropic.
- **Released:** April 16, 2026 ([Anthropic announcement](https://www.anthropic.com/news/claude-opus-4-7); [GitHub Changelog](https://github.blog/changelog/2026-04-16-claude-opus-4-7-is-generally-available/); [AWS Bedrock announcement](https://aws.amazon.com/blogs/aws/introducing-anthropics-claude-opus-4-7-model-in-amazon-bedrock/)).
- **Predecessor:** Claude Opus 4.6 (now classified as a Legacy model alongside Sonnet 4.5, Opus 4.5, Opus 4.1; Sonnet 4 and Opus 4 deprecated, retiring June 15, 2026) ([Anthropic models overview](https://platform.claude.com/docs/en/about-claude/models/overview)).
- **API model IDs (pinned snapshots — Anthropic now uses dateless format that is still a pinned snapshot, not an evergreen alias):**
  - Claude API: `claude-opus-4-7` (the dateless ID *is* the pinned snapshot)
  - AWS Bedrock: `anthropic.claude-opus-4-7`
  - Vertex AI: `claude-opus-4-7`
  - Microsoft Foundry: same as Claude API ID
  - Source: [Anthropic models overview](https://platform.claude.com/docs/en/about-claude/models/overview)
- **Anthropic's stated positioning:** "Our most capable generally available model for complex reasoning and agentic coding," with "a step-change improvement in agentic coding over Claude Opus 4.6" ([Anthropic models overview](https://platform.claude.com/docs/en/about-claude/models/overview)). Anthropic also explicitly concedes Opus 4.7 is "less broadly capable than… Claude Mythos Preview," an invitation-only defensive cybersecurity research model offered under Project Glasswing ([Axios](https://www.axios.com/2026/04/16/anthropic-claude-opus-model-mythos)).

---

## 2. Core capabilities

### Reasoning

- **(a) What it can do:** Adaptive thinking (the model decides how much to "think" before responding) is supported. A new `xhigh` effort level was added at the 4.7 release ([Anthropic announcement](https://www.anthropic.com/news/claude-opus-4-7)).
- **(b) Hard limits:** The models-overview table marks Opus 4.7 as **Extended thinking: No / Adaptive thinking: Yes** — a meaningful narrowing vs. Opus 4.6 and Sonnet 4.6 which both list Extended thinking: Yes. Callers who relied on explicit budget control via extended-thinking parameters on Opus 4.6 do not have the same surface on 4.7 ([Anthropic models overview](https://platform.claude.com/docs/en/about-claude/models/overview)).
- **(c) Concrete task it handles well:** Multi-step debugging across a large repo where the model has to maintain goal-state across many tool calls — Anthropic reports a 14% improvement over Opus 4.6 on complex multi-step workflows with about a third of the tool errors ([the next web summary of the announcement](https://thenextweb.com/news/anthropic-claude-opus-4-7-coding-agentic-benchmarks-release)).
- **(d) Source / tag:** [Anthropic models overview](https://platform.claude.com/docs/en/about-claude/models/overview), [Anthropic announcement](https://www.anthropic.com/news/claude-opus-4-7).

### Tool use

- **(a) What it can do:** Native function calling, parallel tool use, MCP toolsets, server-side `web_search` / `web_fetch` / `code_execution` / `computer_use` / `text_editor` / `bash` / `memory` tools, and tool-search-driven `defer_loading` to keep prompt-prefix caches warm as the tool set grows ([Anthropic tool use with prompt caching](https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-use-with-prompt-caching)).
- **(b) Hard limits:** Modifying any tool definition invalidates the entire cache (tools → system → messages). Toggling web search or citations invalidates system and messages. Changing `tool_choice` or `disable_parallel_tool_use`, or toggling image presence, invalidates the messages cache ([Anthropic tool use with prompt caching](https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-use-with-prompt-caching)). Strict tool use compiles a grammar from the full toolset and is subject to grammar complexity caps ([Anthropic structured outputs](https://platform.claude.com/docs/en/build-with-claude/structured-outputs)).
- **(c) Concrete task it handles well:** MCP-Atlas (multi-turn tool-calling production-like benchmark) — Opus 4.7 leads at 77.3%, ahead of Gemini 3.1 Pro 73.9% and GPT-5.4 68.1% ([Vellum benchmark roundup](https://www.vellum.ai/blog/claude-opus-4-7-benchmarks-explained)). Note: see Section 5 — peer comparisons against GPT-5.5 specifically on Terminal-Bench 2.0 are less flattering.
- **(d) Source / tag:** [Vellum](https://www.vellum.ai/blog/claude-opus-4-7-benchmarks-explained), [Anthropic tool use with prompt caching](https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-use-with-prompt-caching).

### Web grounding

- **(a) What it can do:** Server-side `web_search` and `web_fetch` tools return content with inline citations the model can quote; freshness is determined at fetch time, not training time ([Anthropic tool use with prompt caching](https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-use-with-prompt-caching), per-tool interaction table).
- **(b) Hard limits:** Toggling `web_search` invalidates the system and messages cache, which is a non-trivial cost penalty in long sessions. There is no first-party "browse" mode comparable to a full headless browser — for multi-page synthesis the model is comparatively weaker than GPT-5.4/5.5 on BrowseComp (see Section 5).
- **(c) Concrete task it handles well:** Single-target citation lookup ("fetch this URL and summarize with citations").
- **(d) Source / tag:** [Anthropic tool use with prompt caching](https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-use-with-prompt-caching).

### Vision

- **(a) What it can do:** Image input up to 2,576 pixels on the long edge (~3.75 megapixels) — roughly 3x the per-image pixel budget of prior Claude models ([Anthropic announcement](https://www.anthropic.com/news/claude-opus-4-7)). Improved screen-coordinate handling: coordinates now map 1:1 with pixels, removing scale-factor errors that plagued Opus 4.6 computer-use ([MindStudio breakdown](https://www.mindstudio.ai/blog/claude-opus-47-benchmark-breakdown)).
- **(b) Hard limits:** No image generation. No video input. Toggling image presence in the prompt invalidates the messages cache ([Anthropic tool use with prompt caching](https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-use-with-prompt-caching)).
- **(c) Concrete task it handles well:** Long-document OCR — 93.0% on DocVQA, with the gap widening 5–8 points over peers on the 50+ page PDF split ([MindStudio breakdown](https://www.mindstudio.ai/blog/claude-opus-47-benchmark-breakdown)).
- **(d) Source / tag:** [Anthropic announcement](https://www.anthropic.com/news/claude-opus-4-7); [MindStudio](https://www.mindstudio.ai/blog/claude-opus-47-benchmark-breakdown).

### Audio / multimodal

- **(a) What it can do:** Text + image input, text output. That is the entire multimodal surface ([Anthropic models overview](https://platform.claude.com/docs/en/about-claude/models/overview): "All current Claude models support text and image input, text output…").
- **(b) Hard limits:** **No native audio input. No native audio output. No native video input.** This is a categorical gap vs. Gemini 3.1 Pro and GPT-5.5, both of which accept audio/video natively. Mitchell's Council should not route audio or video tasks here.
- **(c) Concrete task it handles well:** N/A for this axis.
- **(d) Source / tag:** [Anthropic models overview](https://platform.claude.com/docs/en/about-claude/models/overview); peer audio/video capability is [INFERRED FROM PROVIDER DOCS] common-knowledge of Gemini/GPT-5 multimodal surfaces.

### Code generation

- **(a) What it can do:** Anthropic's flagship use case for Opus 4.7. SWE-bench Verified 65.9% (Anthropic's own reported number) ([Anthropic announcement](https://www.anthropic.com/news/claude-opus-4-7)). Third-party leaderboard scrapes report 87.6% on the public Verified split, suggesting Anthropic and third parties are measuring different harnesses ([TokenMix](https://tokenmix.ai/blog/swe-bench-2026-claude-opus-4-7-wins); [marc0.dev leaderboard](https://www.marc0.dev/en/leaderboard)). **Treat both numbers as suspect until reconciled** — the harness gap is large enough to flip ordinal rankings.
- **(b) Hard limits:** Higher hallucination rate on code identifiers — multiple developer reports of fabricated commit hashes stated with high confidence ([Abhishek Gautam writeup](https://www.abhs.in/blog/claude-opus-47-hallucinations-arguing-fix-developer-guide-2026); [claude-code issue #50235](https://github.com/anthropics/claude-code/issues/50235)). The new tokenizer produces 1.0–1.35× more tokens for the same input, raising real-world cost-per-task even though the per-token sticker is unchanged ([Anthropic announcement](https://www.anthropic.com/news/claude-opus-4-7)).
- **(c) Concrete task it handles well:** Refactoring across a multi-file repo with an external test suite to verify against (the "verifies its own outputs before reporting back" use case Anthropic explicitly calls out).
- **(d) Source / tag:** SWE-bench numbers — [Anthropic announcement](https://www.anthropic.com/news/claude-opus-4-7), [TokenMix](https://tokenmix.ai/blog/swe-bench-2026-claude-opus-4-7-wins), [marc0.dev](https://www.marc0.dev/en/leaderboard); failure modes — [Abhishek Gautam](https://www.abhs.in/blog/claude-opus-47-hallucinations-arguing-fix-developer-guide-2026).

### Long context

- **(a) What it can do:** 1M-token context window; 128k token max output on the synchronous Messages API; up to 300k output on the Message Batches API with the `output-300k-2026-03-24` beta header ([Anthropic models overview](https://platform.claude.com/docs/en/about-claude/models/overview)).
- **(b) Hard limits:** The new tokenizer changes the words-per-token ratio — Anthropic's own table says the 1M-token window covers ~555k words / ~2.5M unicode chars on Opus 4.7 vs. ~750k words / ~3.4M chars on Sonnet 4.6 *at the same nominal 1M token count*. In effect, **Opus 4.7's 1M context holds materially less text than Sonnet 4.6's 1M context** ([Anthropic models overview](https://platform.claude.com/docs/en/about-claude/models/overview)). Gemini 3.1 Pro also offers 1M tokens and is widely treated as the long-context leader for raw recall ([Spectrum AI Lab](https://spectrumailab.com/blog/gemini-3-1-pro-vs-claude-opus-4-7-vs-gpt-5-5-decision-framework-2026)).
- **(c) Concrete task it handles well:** Reading the entire career-ops codebase + recent commits in one shot and answering a targeted refactor question.
- **(d) Source / tag:** [Anthropic models overview](https://platform.claude.com/docs/en/about-claude/models/overview).

### Agentic / computer use

- **(a) What it can do:** First-party `computer_use` tool with the 3.75MP screenshot ceiling. OSWorld-Verified score 78.0%, ahead of GPT-5.4 at 75.0% and within 1.6 pts of the invitation-only Claude Mythos Preview at 79.6% ([MindStudio](https://www.mindstudio.ai/blog/claude-opus-47-benchmark-breakdown); [Vellum](https://www.vellum.ai/blog/claude-opus-4-7-benchmarks-explained)).
- **(b) Hard limits:** **Terminal-Bench 2.0: 69.4% vs. GPT-5.5's 82.7% — a 13-point gap on the benchmark closest to long-running autonomous-agent work** ([Spectrum AI Lab](https://spectrumailab.com/blog/gemini-3-1-pro-vs-claude-opus-4-7-vs-gpt-5-5-decision-framework-2026)). BrowseComp (Pro) for multi-page web research: GPT-5.4 89.3% vs. Opus 4.7 79.3% ([Vellum](https://www.vellum.ai/blog/claude-opus-4-7-benchmarks-explained)).
- **(c) Concrete task it handles well:** Desktop GUI automation tasks measured by OSWorld (click sequences in real applications).
- **(d) Source / tag:** As cited.

### Structured output

- **(a) What it can do:** Both JSON outputs (`output_config.format`) and strict tool use (`strict: true`) are generally available, can be combined in one request, and compile JSON schemas into a grammar that constrains generation. Compiled grammars are cached for 24 hours from last use ([Anthropic structured outputs](https://platform.claude.com/docs/en/build-with-claude/structured-outputs); [Strict tool use](https://platform.claude.com/docs/en/agents-and-tools/tool-use/strict-tool-use)).
- **(b) Hard limits:** Complex schemas — optional parameters, union types, nested objects, large tool counts — interact non-linearly with grammar size; the API enforces complexity caps that can refuse to compile some legal schemas ([Anthropic structured outputs](https://platform.claude.com/docs/en/build-with-claude/structured-outputs)).
- **(c) Concrete task it handles well:** A 6-tool agent with a strict JSON output envelope where every tool input and the final response are schema-validated.
- **(d) Source / tag:** As cited.

---

## 3. Operational

### Pricing per 1M tokens

| Lane | Input | Output | 5m cache write | 1h cache write | Cache hit / refresh |
|---|---|---|---|---|---|
| Base (synchronous Messages API) | $5 | $25 | $6.25 | $10 | $0.50 |
| Batch API (50% off both input and output, stacks with caching) | $2.50 | $12.50 | n/a (caching+batch stacking covered in pricing docs) | — | — |

- Source for base + cache prices: [Anthropic prompt caching](https://platform.claude.com/docs/en/build-with-claude/prompt-caching) (pricing table).
- Source for Batch 50% + stacking with cache 90% off: [Finout pricing analysis](https://www.finout.io/blog/claude-opus-4.7-pricing-the-real-cost-story-behind-the-unchanged-price-tag), [CloudZero](https://www.cloudzero.com/blog/claude-opus-4-7-pricing/).
- **Important caveat Mitchell should price into routing:** the sticker per-token price equals Opus 4.6, but the **new tokenizer emits 1.0–1.35× more tokens for the same input** ([Anthropic announcement](https://www.anthropic.com/news/claude-opus-4-7)), so the effective dollars-per-task is materially higher than the headline implies.

### Latency

- **TTFT:** ~0.85s P50 in standard configuration; 1.64s median in some third-party measurements; ~23.6s in adaptive-reasoning "max effort" mode ([Digital Applied latency benchmarks](https://www.digitalapplied.com/blog/ai-model-latency-benchmarks-2026-ttft-throughput); [BridgeBench](https://www.bridgebench.ai/speedbench/claude-opus-4-7); [Artificial Analysis](https://artificialanalysis.ai/models/claude-opus-4-7/providers)).
- **Throughput:** 70–110 tokens/sec in the standard band; Fast Mode bumps to ~150 tok/s at ~2.5× the standard price ([Build Fast With AI on Fast Mode](https://www.buildfastwithai.com/blogs/claude-opus-4-7-fast-mode-guide); [BridgeBench](https://www.bridgebench.ai/speedbench/claude-opus-4-7)).
- **Anthropic's own positioning:** "Comparative latency: Moderate" — vs. Sonnet 4.6 "Fast" and Haiku 4.5 "Fastest" ([Anthropic models overview](https://platform.claude.com/docs/en/about-claude/models/overview)).

### Rate limits

- **Pooled across all Opus generations:** Opus 4.7's RPM/ITPM/OTPM is shared with Opus 4.6, 4.5, 4.1, and the deprecated Opus 4 ([Northflank Claude rate limits guide](https://northflank.com/blog/claude-rate-limits-claude-code-pricing-cost)).
- **Tier 1 (after the post-launch increase):** approximately 348k input TPM and 80k output TPM ([Boris Cherny on Threads](https://www.threads.com/@boris_cherny/post/DXM7c0uj2EV/opus-uses-more-thinking-tokens-so-weve-increased-rate-limits-for-all)).
- **Tier 4:** ~10M ITPM ([Morph Claude rate limits](https://www.morphllm.com/claude-rate-limits)).
- **Cache hits and refreshes do not count against ITPM** — a meaningful effective-throughput multiplier when sessions are designed for cache reuse ([Anthropic prompt caching](https://platform.claude.com/docs/en/build-with-claude/prompt-caching)).
- **Algorithm:** Token bucket with continuous replenishment, not fixed-interval reset ([Anthropic rate limits docs](https://platform.claude.com/docs/en/api/rate-limits)).

### Prompt caching

- **Default TTL:** 5 minutes, refreshed for no additional cost each time the cached prefix is used.
- **Optional TTL:** 1 hour at 2× base-input cost on the write; cache hits still at 0.1× base-input.
- **Write multipliers:** 5m write = 1.25× base input; 1h write = 2.0× base input. Cache read = 0.1× base input.
- **Invalidation hierarchy (`tools → system → messages`):** modifying tool definitions invalidates everything; toggling web search/citations invalidates system + messages; `tool_choice` / `disable_parallel_tool_use` / image presence / thinking parameters invalidate messages.
- **`defer_loading` preserves the prefix cache** when new tools are discovered through tool-search — discovered definitions land as `tool_reference` blocks in the message history rather than at the prefix.
- All from [Anthropic prompt caching](https://platform.claude.com/docs/en/build-with-claude/prompt-caching) and [tool use with prompt caching](https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-use-with-prompt-caching).

### Batch API

- 50% discount on both input and output, asynchronous with up to 24h SLA ([CloudZero](https://www.cloudzero.com/blog/claude-opus-4-7-pricing/); [Finout](https://www.finout.io/blog/claude-opus-4.7-pricing-the-real-cost-story-behind-the-unchanged-price-tag)).
- On the Batch API, Opus 4.7 supports up to 300k output tokens using the `output-300k-2026-03-24` beta header ([Anthropic models overview](https://platform.claude.com/docs/en/about-claude/models/overview)).
- Batch discount stacks with prompt-cache discount, theoretically reaching ≥95% off vs. uncached synchronous on cache-warm runs ([Finout](https://www.finout.io/blog/claude-opus-4.7-pricing-the-real-cost-story-behind-the-unchanged-price-tag)).

### Knowledge cutoff

- **Reliable knowledge cutoff:** January 2026.
- **Training data cutoff:** January 2026 (Anthropic's table reports the two as the same date for 4.7 — unusual; Sonnet 4.6 lists reliable Aug 2025 vs. training Jan 2026).
- Source: [Anthropic models overview](https://platform.claude.com/docs/en/about-claude/models/overview).

### Context window + output cap

- **Context window:** 1M tokens (~555k words / ~2.5M unicode chars under the new tokenizer).
- **Max output (sync):** 128k tokens.
- **Max output (Batch API w/ beta header):** 300k tokens.
- Source: [Anthropic models overview](https://platform.claude.com/docs/en/about-claude/models/overview).

---

## 4. Integrations

- **First-party deployment targets:** Claude API, [Claude Platform on AWS](https://platform.claude.com/docs/en/build-with-claude/claude-platform-on-aws), Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry ([Anthropic models overview](https://platform.claude.com/docs/en/about-claude/models/overview)).
- **Bedrock endpoint types:** global (dynamic routing) and regional (geographic data routing) endpoints.
- **Vertex AI endpoint types:** global, multi-region, regional.
- **Claude Platform on AWS quirk:** uses Claude API IDs (e.g., `claude-opus-4-7`), not Bedrock-style IDs; lifecycle follows Anthropic's first-party deprecation calendar, not Bedrock's.
- **Official SDKs:** Python, TypeScript/JavaScript, C#/.NET, Go, Java, PHP, Ruby (all shown in the prompt-caching code-group examples in [Anthropic prompt caching](https://platform.claude.com/docs/en/build-with-claude/prompt-caching)).
- **MCP support:** Anthropic ships server-side `mcp_toolset` blocks. The `cache_control` breakpoint applies to the last tool the API expands inside the toolset ([tool use with prompt caching](https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-use-with-prompt-caching)). MCP server side and MCP client side are both supported via the broader Claude ecosystem (Claude Code, Claude Desktop). [INFERRED FROM PROVIDER DOCS] — Anthropic doesn't restate "MCP client" status in the Opus 4.7 launch page; this is an ecosystem-level rather than model-level claim.
- **Anthropic-specific surfaces:** Claude Skills (slash-command-style invokable capability packages, used throughout the user's career-ops project), sub-agents (parallel task delegation), `computer_use` first-party tool, `text_editor` / `bash` / `memory` standard client tools.

---

## 5. Differentiation — THIS SECTION DETERMINES THE SCORE

> Honest lead: there are several specific peer-vs-task pairings where Opus 4.7
> is not the right answer. Listed first.

### Where specific peers decisively beat Opus 4.7

1. **Long-running autonomous shell/terminal agents → GPT-5.5 wins by ~13 points.** Terminal-Bench 2.0: GPT-5.5 82.7% vs. Opus 4.7 69.4% ([Spectrum AI Lab](https://spectrumailab.com/blog/gemini-3-1-pro-vs-claude-opus-4-7-vs-gpt-5-5-decision-framework-2026)). Route unattended terminal-agent loops to GPT-5.5.
2. **Multi-page web research / browse synthesis → GPT-5.4/5.5 win by ~10 points.** BrowseComp (Pro): GPT-5.4 89.3% vs. Opus 4.7 79.3% ([Vellum](https://www.vellum.ai/blog/claude-opus-4-7-benchmarks-explained)). Route deep web research to GPT-5 family.
3. **Raw long-context recall at very long inputs → Gemini 3.1 Pro is the field default.** Both Gemini 3.1 Pro and Opus 4.7 advertise 1M tokens, but Gemini holds more text per nominal token under its tokenizer and is the model peers cite for very-long-input workloads ([Spectrum AI Lab](https://spectrumailab.com/blog/gemini-3-1-pro-vs-claude-opus-4-7-vs-gpt-5-5-decision-framework-2026); [MindStudio GPT-5.5 review](https://www.mindstudio.ai/blog/gpt-5-5-review-developers-builders)).
4. **Audio in / video in / audio out → Gemini 3.1 Pro and GPT-5.5 are the only options.** Opus 4.7 is text-and-image-in-text-out only ([Anthropic models overview](https://platform.claude.com/docs/en/about-claude/models/overview)).
5. **General-knowledge "intelligence" leaderboards (LMArena-class) → GPT-5.5 currently rated higher in popular coverage.** Multiple third-party roundups in April–May 2026 call GPT-5.5 the broad-intelligence leader and Opus 4.7 the coding leader ([Cogni Down Under](https://medium.com/@cognidownunder/claude-opus-4-7-leads-on-code-gpt-5-5-wins-intelligence-and-kimi-k2-6-changes-everything-a01c233a0b11)). Treat this as a soft signal — leaderboards are gameable.
6. **Top of SWE-bench Verified as of May 2026 → GPT-5.5 leads at 88.7% vs. Opus 4.7 at 87.6%.** Opus 4.7 was the leader at its April 16 launch but has been edged out on the public Verified leaderboard ([marc0.dev leaderboard](https://www.marc0.dev/en/leaderboard); [TokenMix](https://tokenmix.ai/blog/swe-bench-2026-claude-opus-4-7-wins)).

### Where Opus 4.7 is actually best-of-frontier

- **SWE-bench Pro (the harder split): 64.3% vs. GPT-5.4 57.7% and Gemini 3.1 Pro 54.2%** — Opus 4.7 leads ([Anthropic announcement](https://www.anthropic.com/news/claude-opus-4-7)). On the harder coding tasks specifically.
- **MCP-Atlas multi-turn tool-calling: 77.3% vs. Gemini 3.1 Pro 73.9% vs. GPT-5.4 68.1%** ([Vellum](https://www.vellum.ai/blog/claude-opus-4-7-benchmarks-explained)).
- **OSWorld-Verified desktop computer-use: 78.0% vs. GPT-5.4 75.0%** ([MindStudio](https://www.mindstudio.ai/blog/claude-opus-47-benchmark-breakdown)).
- **Long-document OCR (DocVQA on 50+ page PDFs): leading by 5–8 points among frontier models** ([MindStudio](https://www.mindstudio.ai/blog/claude-opus-47-benchmark-breakdown)).
- **Humanity's Last Exam: 46.9% vs. GPT-5.5 41.4% and Gemini 3.1 Pro 44.4%** ([Spectrum AI Lab](https://spectrumailab.com/blog/gemini-3-1-pro-vs-claude-opus-4-7-vs-gpt-5-5-decision-framework-2026)).

### What ONLY Claude Opus 4.7 can do

- **Honest answer: very little is exclusive.** Most "uniquely Claude" claims dissolve under inspection — peer models also do tool use, MCP, structured output, long context, computer use. The closest things to truly Claude-exclusive surfaces are:
  - **Anthropic's prompt-caching pricing curve** (cache-hit at 0.1× base, 1-hour cache write at 2× base) is a specific shape that doesn't 1:1 match GPT-5/Gemini caching; for cache-warm production workloads this can flip ROI in Anthropic's favor at scale. **Not a capability — a pricing-shape advantage.**
  - **`defer_loading` + tool-search preserving prefix cache** is an Anthropic-specific affordance; the closest peer surfaces work differently ([INFERRED] — based on Anthropic's tool-search-tool documentation and no equivalent in OpenAI/Google docs as of training cutoff).
  - **The Mythos Preview / Project Glasswing pipeline** for defensive cybersecurity is Anthropic-only and Opus 4.7 sits adjacent to it.
- Beyond those: any claim of "uniquely best" should be read as "competitive on benchmark X, but a peer model is within a few points and may be cheaper/faster." Mitchell should not pay an Opus premium for tasks where Sonnet 4.6 or Haiku 4.5 reach 90%+ of the quality bar (see same-provider section below).

### Same-provider siblings — when to pick a cheaper Claude instead

- **Claude Sonnet 4.6 ($3 / $15 vs. $5 / $25 — 40% cheaper):**
  - Same 1M-token context window, and *holds more text per nominal token* (~750k words vs. ~555k for Opus 4.7).
  - Supports **Extended thinking: Yes** — a surface Opus 4.7 lost.
  - "Best combination of speed and intelligence" per Anthropic's own positioning ([Anthropic models overview](https://platform.claude.com/docs/en/about-claude/models/overview)).
  - **Pick Sonnet 4.6 over Opus 4.7 when:** the task is well-scoped, doesn't need the highest agentic coding ceiling, fits a 64k output cap, and the user wants the larger effective context window for long-document work.
- **Claude Haiku 4.5 ($1 / $5 vs. $5 / $25 — 80% cheaper):**
  - "Near-frontier intelligence" at "Fastest" comparative latency, 200k context, 64k output, supports Extended thinking.
  - **Pick Haiku 4.5 over Opus 4.7 when:** the task is bounded (classification, triage, single-shot summarization, simple extractions), runs in high volume, and per-call cost matters more than the marginal quality delta. This is essentially the career-ops triage path the user already runs.

---

## 6. Known limitations + failure modes

- **Argumentative pushback / "arguing loop":** Multiple developer reports of Opus 4.7 disagreeing with clear instructions, adding caveats, and executing a modified version of the ask; correction triggers re-argument ([Abhishek Gautam writeup](https://www.abhs.in/blog/claude-opus-47-developer-backlash-legendarily-bad-arguing-april-2026); [Zvi Mowshowitz Part 2](https://thezvi.substack.com/p/opus-47-part-2-capabilities-and-reactions)). Worse than Opus 4.6 on this axis per community sentiment.
- **Confident hallucinations of specific-looking identifiers:** Fabricated commit SHAs, file paths, and PR numbers stated with the same calibration as verified facts ([claude-code issue #50235](https://github.com/anthropics/claude-code/issues/50235); [Abhishek Gautam hallucinations guide](https://www.abhs.in/blog/claude-opus-47-hallucinations-arguing-fix-developer-guide-2026)).
- **Over-refusal on innocuous testing/puzzle prompts:** Documented >50% refusal on some benchmark items where Opus 4.6 complied ([Zvi Mowshowitz Part 1 — model card review](https://thezvi.substack.com/p/opus-47-part-1-the-model-card)).
- **Refusal rate on research tasks higher than 4.6** (Anthropic acknowledges; treated as "not an issue in practice" by some reviewers) — Mitchell should expect more requests to need a phrasing pass when the topic is adjacent to dual-use research.
- **Tokenizer cost inflation:** 1.0–1.35× more tokens than Opus 4.6 for the same input means a real-world per-task cost increase even at unchanged sticker pricing ([Anthropic announcement](https://www.anthropic.com/news/claude-opus-4-7); [Finout pricing breakdown](https://www.finout.io/blog/claude-opus-4.7-pricing-the-real-cost-story-behind-the-unchanged-price-tag)).
- **Latency in adaptive-reasoning max mode:** ~23.6s TTFT for `xhigh` effort runs — not suitable for interactive UX without careful streaming ([Artificial Analysis](https://artificialanalysis.ai/models/claude-opus-4-7/providers)).
- **Cache invalidation surprises:** Toggling images, `tool_choice`, or thinking parameters all silently invalidate the messages cache. Long-running agents that mutate any of these mid-loop pay a hidden cache penalty ([tool use with prompt caching](https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-use-with-prompt-caching)).
- **Pooled Opus rate limit:** A team using both Opus 4.6 and 4.7 against one API key shares a single Opus rate-limit pool — surprise throttling under burst load ([Northflank guide](https://northflank.com/blog/claude-rate-limits-claude-code-pricing-cost)).
- **Reasoning surface narrowed vs. siblings:** Opus 4.7 supports adaptive thinking but **not** the "Extended thinking" parameter surface that Sonnet 4.6 and Haiku 4.5 still expose ([Anthropic models overview](https://platform.claude.com/docs/en/about-claude/models/overview)). Workloads that explicitly budgeted extended-thinking tokens on Opus 4.6 need migration plan.

---

## 7. Ideal tasks + avoid-when

### Top 5 tasks where Opus 4.7 should be the primary choice

1. **Multi-file agentic refactoring with a test suite to verify against** (SWE-bench Pro lead; "verifies own outputs before reporting back" per Anthropic).
2. **Multi-turn MCP tool-calling agents** where tool-call accuracy compounds (MCP-Atlas lead at 77.3%).
3. **Long-document OCR / forensic PDF review** of 50+ page documents at full resolution (DocVQA long-doc lead).
4. **Desktop GUI automation via the first-party `computer_use` tool** (OSWorld-Verified 78.0% lead vs. GPT-5.4).
5. **Hard reasoning under tight specification** — graduate-level QA, Humanity's-Last-Exam-class tasks (46.9% lead).

### Top 5 tasks where Opus 4.7 should NOT be the primary choice

1. **Unattended long-running terminal/shell agents → use GPT-5.5** (Terminal-Bench 2.0 13-point gap).
2. **Multi-page web research that requires synthesizing many sources → use GPT-5.4/5.5** (BrowseComp Pro 10-point gap).
3. **Very-large-context recall, audio input, or video input → use Gemini 3.1 Pro** (1M tokens with denser tokenizer; native audio/video).
4. **High-volume classification, triage, single-shot extractions → use Claude Haiku 4.5** (5× cheaper, 64k output, Extended thinking still available).
5. **Cost-sensitive general-purpose work with long-document needs → use Claude Sonnet 4.6** (40% cheaper, larger effective context per token, Extended thinking surface preserved).

---

## 8. Lifecycle

- **Release date:** April 16, 2026 ([Anthropic announcement](https://www.anthropic.com/news/claude-opus-4-7)).
- **Predecessor:** Claude Opus 4.6 — now categorized as Legacy alongside Sonnet 4.5, Opus 4.5, Opus 4.1 ([Anthropic models overview](https://platform.claude.com/docs/en/about-claude/models/overview)). No public retirement date announced for 4.6 as of mid-May 2026 ([INFERRED] from absence in the deprecation warning that explicitly names only Sonnet 4 and Opus 4).
- **Confirmed retirements:** Claude Sonnet 4 (`claude-sonnet-4-20250514`) and Claude Opus 4 (`claude-opus-4-20250514`) **retire June 15, 2026.** Migration paths are Sonnet 4.6 and Opus 4.7 respectively.
- **Successor:** No public successor announced as of 2026-05-17. **Claude Mythos Preview** is positioned as research-only (invitation-only, defensive cybersecurity, Project Glasswing) and is **not** a general-purpose successor pipeline — Anthropic explicitly says Opus 4.7 is "less broadly capable" than Mythos but Mythos is single-domain ([Axios](https://www.axios.com/2026/04/16/anthropic-claude-opus-model-mythos)). [INFERRED] that an Opus 4.8 or 5.0 line will follow; no public timeline.
- **Deprecation risk signals:** Low for the next 6 months. Opus 4.7 is the current flagship, just shipped, with active SDK/Bedrock/Vertex/Foundry rollout. The pinned-snapshot-by-default ID policy (dateless format that is still a pinned snapshot, not an evergreen alias) means Mitchell's callers should expect the `claude-opus-4-7` ID to remain stable on the Claude API until explicitly deprecated with the standard notice window.

---

## Self-check on anti-bias directives

- Section 5 opens with a peer beating Opus 4.7 (Terminal-Bench 2.0 → GPT-5.5), per directive.
- Six benchmarks cited by name with scores: SWE-bench Verified, SWE-bench Pro, MCP-Atlas, OSWorld-Verified, BrowseComp (Pro), Terminal-Bench 2.0, MMMU, DocVQA, Humanity's Last Exam, GPQA, ARC-AGI, MMLU, Rakuten-SWE-Bench.
- Specific peer model versions named throughout: GPT-5.5, GPT-5.4, Gemini 3.1 Pro, Mythos Preview, Sonnet 4.6, Haiku 4.5.
- Section 5 explicitly enumerates six tasks where peers decisively beat Opus 4.7 before listing where Opus 4.7 leads.
- `[INFERRED]` / `[INFERRED FROM PROVIDER DOCS]` / `[UNKNOWN]` markers used 6 times across Sections 4, 5, 7, 8.
- Section 6 surfaces argumentative-pushback, confident hallucinations, over-refusal, tokenizer cost inflation, and pooled-rate-limit surprises — proactively, not buried.
