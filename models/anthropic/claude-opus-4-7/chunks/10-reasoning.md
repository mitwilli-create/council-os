---
provider: anthropic
model: claude-opus-4-7
capability: reasoning
chunk_id: 10-reasoning
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [reasoning, adaptive-thinking, chain-of-thought, hle, effort-level]
related_chunks: [15-code-generation, 17-agentic-computer-use, 26-context-window, 40-unique-strengths, 41-known-limitations]
related_models: [openai/gpt-5-5, google/gemini-3-1-pro, anthropic/claude-sonnet-4-6, anthropic/claude-haiku-4-5]
peer_comparisons:
  - peer: openai/gpt-5-5
    relation: stronger
    note: "Humanity's Last Exam: Opus 4.7 46.9% vs. GPT-5.5 41.4% — 5.5-point lead on hard graduate-level reasoning."
  - peer: google/gemini-3-1-pro
    relation: stronger
    note: "HLE: Opus 4.7 46.9% vs. Gemini 3.1 Pro 44.4% — 2.5-point lead."
  - peer: anthropic/claude-sonnet-4-6
    relation: different-approach
    note: "Sonnet 4.6 retains the Extended-thinking explicit-budget surface; Opus 4.7 replaced it with adaptive thinking (implicit budget, new xhigh effort level)."
---

**Summary** — Claude Opus 4.7 uses adaptive thinking: the model decides internally how much reasoning to apply before responding, including a new `xhigh` effort level added at launch. Extended-thinking (explicit `budget_tokens` parameter) is NOT available on Opus 4.7 — it was removed relative to Opus 4.6 and Sonnet 4.6. On Humanity's Last Exam, the hardest public reasoning benchmark, Opus 4.7 scores 46.9% — leading GPT-5.5 (41.4%) and Gemini 3.1 Pro (44.4%).

**Specifics:**
- **Adaptive thinking supported; Extended thinking NOT supported.** The models-overview table marks Opus 4.7 as `Extended thinking: No / Adaptive thinking: Yes` — a documented narrowing vs. Opus 4.6, Sonnet 4.6, and Haiku 4.5 which all list `Extended thinking: Yes`. Source: `_official-models-overview.md` lines 33-34.
- **New `xhigh` effort level** added at the 4.7 release for maximum adaptive reasoning. Source: [Anthropic announcement](https://www.anthropic.com/news/claude-opus-4-7).
- **Humanity's Last Exam:** Opus 4.7 46.9% vs. GPT-5.5 41.4% vs. Gemini 3.1 Pro 44.4%. Source: [Spectrum AI Lab benchmark comparison](https://spectrumailab.com/blog/gemini-3-1-pro-vs-claude-opus-4-7-vs-gpt-5-5-decision-framework-2026).
- **Migration required for Opus 4.6 callers:** any caller using `thinking: { type: "enabled", budget_tokens: ... }` on Opus 4.6 must migrate to adaptive-thinking API on 4.7 — no equivalent explicit-budget surface exists on 4.7.

**Compared to peers (sharpened by Dealbreaker):**
- vs. openai/gpt-5-5: Opus 4.7 leads by 5.5 points on HLE (46.9% vs. 41.4%); GPT-5.5 leads on Terminal-Bench 2.0 (82.7% vs. 69.4%) for long-running autonomous agents.
- vs. google/gemini-3-1-pro: Opus 4.7 leads by 2.5 points on HLE (46.9% vs. 44.4%).
- vs. anthropic/claude-sonnet-4-6: Sonnet 4.6 still exposes Extended-thinking with explicit budget control, which Opus 4.7 lost. For tasks requiring precise reasoning-budget control, Sonnet 4.6 is the better routing choice within the Anthropic family.
- vs. anthropic/claude-haiku-4-5: Haiku 4.5 also retains Extended thinking; Opus 4.7's HLE score is plausibly far above Haiku 4.5's (`[UNKNOWN]` — Anthropic did not publish a Haiku 4.5 HLE number).

**Known limitations on this axis:**
- **Silent adaptive-thinking budget truncation `[INFERRED]`:** When the implicit thinking budget is exhausted on a complex task, the model truncates its reasoning and returns a confident-but-incomplete answer with no warning to the caller. There is no API field that signals "thinking budget was hit." Callers must infer from output quality. Source: absence of explicit-budget surface documented in `_official-models-overview.md` line 33.
- **~23.6s TTFT at `xhigh` effort** — not suitable for interactive UX. Streaming does NOT reduce this latency: adaptive-thinking outputs are not emitted to the stream until the thinking phase completes. The 23.6s figure is time-to-first-non-thinking-token. Source: [Digital Applied latency benchmarks](https://www.digitalapplied.com/blog/ai-model-latency-benchmarks-2026-ttft-throughput).
- Extended-thinking callers from Opus 4.6 must rewrite to adaptive-thinking API — no backward-compatible shim.

**Sources:**
- [Anthropic models overview](https://platform.claude.com/docs/en/about-claude/models/overview)
- [Anthropic announcement — xhigh effort level](https://www.anthropic.com/news/claude-opus-4-7)
- [Spectrum AI Lab — HLE benchmark comparison](https://spectrumailab.com/blog/gemini-3-1-pro-vs-claude-opus-4-7-vs-gpt-5-5-decision-framework-2026)
- [Digital Applied latency benchmarks](https://www.digitalapplied.com/blog/ai-model-latency-benchmarks-2026-ttft-throughput)
