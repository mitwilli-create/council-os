---
provider: anthropic
model: claude-haiku-4-5
capability: reasoning
chunk_id: 10-reasoning
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 5
egoism_strikes_at_convergence: 0
tags: [reasoning, extended-thinking, chain-of-thought, agentic, routing]
related_chunks: [17-agentic-computer-use, 11-tool-use, 40-unique-strengths]
related_models:
  - anthropic/claude-sonnet-4-6
  - anthropic/claude-opus-4-7
peer_comparisons:
  - peer: anthropic/claude-sonnet-4-6
    relation: different-approach
    note: "Sonnet 4.6 has both extended AND adaptive thinking; Haiku 4.5 has extended only. Haiku excels at long fixed-budget reasoning chains; Sonnet handles tasks needing dynamic compute reallocation mid-chain."
  - peer: anthropic/claude-opus-4-7
    relation: different-approach
    note: "Opus 4.7 has adaptive thinking only (no extended); Haiku has extended only. The two models have complementary thinking shapes — Haiku for deep chains, Opus for real-time compute optimization."
---

**Summary** — Claude Haiku 4.5 supports extended thinking (chain-of-thought with explicit reasoning tokens) but does not support adaptive thinking (real-time compute reallocation). This gives it a well-defined reasoning shape: deep, sequential chains suitable for agentic routing loops and multi-step planning, but without the dynamic budget adjustment that Sonnet 4.6 provides.

**Specifics:**
- Extended thinking: supported — enables explicit chain-of-thought blocks for complex agentic reasoning (Anthropic-published, Oct 15, 2025)
- Adaptive thinking: not supported [INFERRED per Opus 4.7 adjudication; evidentiary label: inferred, not benchmark-cited]
- In-family thinking architecture (verified):
  - Haiku 4.5: extended ✓, adaptive ✗
  - Sonnet 4.6: extended ✓, adaptive ✓
  - Opus 4.7: extended ✗, adaptive ✓
- OSWorld 50.7% — highest-ever Haiku score; demonstrates extended thinking enables competitive agentic reasoning (Anthropic-published, Oct 15, 2025)
- Routing implication: use Haiku 4.5 for bounded reasoning chains where compute budget is fixed at call time; route to Sonnet 4.6 when tasks require adaptive compute allocation mid-chain

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-sonnet-4-6: Sonnet has adaptive thinking in addition to extended; on ambiguous tasks where optimal compute depth is unknown upfront, Sonnet routes better. Haiku performs comparably on tasks with predictable reasoning depth.
- vs. anthropic/claude-opus-4-7: Opus has adaptive but not extended thinking — the opposite shape. Haiku suits long structured chains; Opus suits synthesis tasks where reasoning depth should self-calibrate.

**Known limitations on this axis:**
- Cannot dynamically reallocate compute within a reasoning chain (adaptive thinking gap)
- Extended thinking add latency overhead; not always appropriate for sub-500ms latency targets even though base Haiku is fast

**Sources:**
- [Anthropic Claude Haiku 4.5 announcement](https://www.anthropic.com/news/claude-haiku-4-5)
- [Anthropic extended thinking docs](https://docs.anthropic.com/en/docs/build-with-claude/extended-thinking)
