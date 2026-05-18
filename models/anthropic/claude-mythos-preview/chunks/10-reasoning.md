---
provider: anthropic
model: claude-mythos-preview
capability: reasoning
chunk_id: 10-reasoning
last_research_round: 0
last_updated: 2026-05-18
verified_by_dealbreaker: true
source_authority: official_doc (public benchmarks from llm-stats.com, nxcode.io, kingy.ai)
confidence: medium
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [reasoning, benchmarks, gpqa, mmlu, hle, adaptive-thinking, restricted-access]
related_chunks: [00-overview, 11-tool-use, 17-agentic-computer-use, 42-restricted-access]
related_models: [anthropic:claude-opus-4-7, openai:gpt-5-5]
peer_comparisons:
  - peer: openai/gpt-5-5
    relation: stronger
    note: "Mythos GPQA Diamond 94.6% vs GPT-5.5 ~93-94%; narrow lead on hard sciences. HLE-with-tools 64.7% is competitive."
  - peer: anthropic/claude-opus-4-7
    relation: stronger
    note: "Mythos posts higher across reasoning benchmarks but is RESTRICTED — Opus 4.7 is the practical Anthropic primary for general reasoning."
---

# Claude Mythos Preview — Reasoning

**[INFERRED FROM PUBLIC SOURCES — capability not first-hand testable without Glasswing access]**

**Summary** — Mythos Preview posts elite reasoning benchmarks across hard sciences (GPQA Diamond 94.6%) and broad knowledge (MMMLU 92.7%), with competitive HLE-with-tools performance (64.7%). Like Opus 4.7, it uses `thinking.type: "adaptive"` ONLY (no `budget_tokens` — see W7 in dealbreaker-v2 verification supplement).

**Specifics (verified via public benchmarks):**
- **GPQA Diamond: 94.6%** ([llm-stats.com](https://llm-stats.com/models/claude-mythos-preview))
- **MMMLU: 92.7%** (massive multilingual MMLU)
- **HLE (Humanity's Last Exam) with tools: 64.7%**
- **Reasoning mode:** adaptive thinking only (`thinking.type: "adaptive"`); no `budget_tokens` support per the W7 finding that this is Anthropic's standard for 2026-class flagship models. Configure via `output_config.effort = low|medium|high|xhigh|max`.
- **Sources:** [NxCode benchmarks](https://www.nxcode.io/resources/news/claude-mythos-benchmarks-93-swe-bench-every-record-broken-2026), [llm-stats Mythos page](https://llm-stats.com/models/claude-mythos-preview), [Kingy AI comparison](https://kingy.ai/ai/claude-mythos-preview-vs-gpt-5-5-a-benchmark-by-benchmark-showdown-between-the-two-most-important-frontier-models-of-april-2026/)

**Compared to peers (sharpened by Dealbreaker):**
- vs. `openai:gpt-5-5`: Narrow GPQA edge to Mythos; GPT-5.5 has parity on broader reasoning. NOT a reason to pick Mythos for general reasoning when GPT-5.5 is accessible and Mythos is not.
- vs. `anthropic:claude-opus-4-7`: Mythos posts higher across reasoning but Opus 4.7 is the routable Anthropic primary. For users WITHOUT Glasswing access, treat Mythos's reasoning edge as informational — route to Opus 4.7 instead.
- vs. `anthropic:claude-sonnet-4-6`: Sonnet 4.6 is the cost-quality balanced default. Mythos's reasoning lift over Sonnet (94.6 vs ~88% GPQA Diamond) is real but rarely worth 5× the price even WITH access.

**Known limitations on this axis:**
- Cannot be invoked from `lib/council.mjs` (no public API). Reasoning benchmarks are academic until Glasswing access exists.
- Like Opus 4.7, `budget_tokens` returns HTTP 400 — pipelines that need explicit token-level reasoning budgets must use Sonnet 4.6 or Haiku 4.5.
- The "reasoning with tools" 64.7% HLE score includes web search + code execution; ungrounded reasoning is presumably lower (not separately published).

**Sources:**
- [llm-stats.com Mythos Preview page](https://llm-stats.com/models/claude-mythos-preview)
- [NxCode Mythos benchmarks deep-dive](https://www.nxcode.io/resources/news/claude-mythos-benchmarks-93-swe-bench-every-record-broken-2026)
- [Kingy AI Mythos vs GPT-5.5 head-to-head](https://kingy.ai/ai/claude-mythos-preview-vs-gpt-5-5-a-benchmark-by-benchmark-showdown-between-the-two-most-important-frontier-models-of-april-2026/)
- [GPQA Diamond leaderboard](https://llm-stats.com/benchmarks/gpqa)
