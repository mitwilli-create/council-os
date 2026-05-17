---
provider: anthropic
model: claude-sonnet-4-6
capability: code-generation
chunk_id: 15-code-generation
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 5
egoism_strikes_at_convergence: 5
tags: [code, swe-bench, coding, agentic-coding, ux-quality]
related_chunks: [10-reasoning, 11-tool-use, 17-agentic-computer-use, 43-ideal-tasks]
related_models: [anthropic/claude-opus-4-7, anthropic/claude-haiku-4-5]
peer_comparisons:
  - peer: anthropic/claude-opus-4-7
    relation: different-approach
    note: "Opus 4.7 leads on raw SWE-bench (87.6% vs. 79.6%, 8-pt gap) and MCP-Atlas agentic coding. But Sonnet 4.6 beats Opus 4.7 on Tyler Folkman's 7-category UX-weighted rubric (68/100 vs. 63/100) at 40% lower cost. Routing depends on rubric."
  - peer: anthropic/claude-haiku-4-5
    relation: stronger
    note: "Haiku 4.5 SWE-bench Verified 73.3% vs. Sonnet 4.6 79.6% — 6.3-point gap at one-third the cost. Route to Haiku when the cost savings outweigh the 6.3-point pass-rate reduction."
---

**Summary** — Claude Sonnet 4.6 scores 79.6% on SWE-bench Verified, placing it 8 points below Opus 4.7 (87.6%) on this benchmark. However, on Tyler Folkman's 7-category real-world coding rubric weighting UX quality and maintainability alongside correctness, Sonnet 4.6 scores 68/100 vs. Opus 4.7's 63/100 — a decisive 5-point win at 40% lower cost. The routing decision depends on which rubric governs: SWE-bench-style correctness favors Opus 4.7; UX-weighted maintainability favors Sonnet 4.6.

**Specifics:**
- SWE-bench Verified: **79.6%**. ([nxcode.io](https://www.nxcode.io/resources/news/claude-sonnet-4-6-complete-guide-benchmarks-pricing-2026))
- Tyler Folkman 7-category real-world coding rubric (vim-style navigation, color-coded output, ANSI escape handling, scroll indicators, single-file architecture, code cleanliness, UX quality): **68/100** vs. Opus 4.7's **63/100** — Sonnet 4.6 wins by 5 points. Opus 4.7 had specific failure modes in this rubric (no vim keys, broken ANSI sequences). Source: [Tyler Folkman, Substack](https://tylerfolkman.substack.com/p/i-tested-opus-47-against-sonnet-46)
- LMArena Code Arena (April 2026): Sonnet 4.6 Elo **1,523**, placing third after Opus models. ([buildmvpfast.com](https://www.buildmvpfast.com/blog/claude-opus-4-6-lmsys-arena-benchmark-comparison-2026))
- SWE-bench Pro score: not published for Sonnet 4.6. Opus 4.7 scores 64.3% on SWE-bench Pro.
- Concrete strong use case: debugging a 500-line Python async service, identifying a race condition, generating a patch with a test — completing within a single agentic session without context compaction.

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-opus-4-7: Opus 4.7 leads by 8 points on SWE-bench Verified (87.6% vs. 79.6%) and by an unknown margin on SWE-bench Pro. Opus 4.7 also leads by 16 points on MCP-Atlas agentic tool orchestration (77.3% vs. 61.3%). For multi-step agentic coding where task-failure cost is high, route to Opus 4.7. For UX-weighted code quality where maintainability matters, Sonnet 4.6 beats Opus 4.7 at 40% lower cost.
- vs. anthropic/claude-haiku-4-5: Haiku 4.5 SWE-bench Verified 73.3% — 6.3 points below Sonnet 4.6 at one-third the cost ($1/$5 vs. $3/$15 per MTok). For cost-sensitive code workloads where a 6-point pass-rate reduction is acceptable, Haiku 4.5 is a viable route.

**Known limitations on this axis:**
- SWE-bench Verified 79.6% means ~20% of agentic coding tasks fail or produce incorrect patches.
- SWE-bench Pro score not published — unknown how Sonnet 4.6 performs on harder multi-file, multi-step repository tasks.
- MCP-Atlas 61.3% is the relevant ceiling for multi-turn tool-orchestration in coding agents; above ~5 chained tools with compounding error, Opus 4.7 is the better routing choice.

**Sources:**
- [nxcode.io — SWE-bench Verified 79.6%](https://www.nxcode.io/resources/news/claude-sonnet-4-6-complete-guide-benchmarks-pricing-2026)
- [Tyler Folkman, Substack — UX rubric 68/100 vs. Opus 4.7 63/100](https://tylerfolkman.substack.com/p/i-tested-opus-47-against-sonnet-46)
- [buildmvpfast.com — LMArena Code Arena April 2026](https://www.buildmvpfast.com/blog/claude-opus-4-6-lmsys-arena-benchmark-comparison-2026)
- [Vellum — Opus 4.7 SWE-bench 87.6% / SWE-bench Pro 64.3%](https://www.vellum.ai/blog/claude-opus-4-7-benchmarks-explained)
- [morphllm.com — Haiku 4.5 SWE-bench 73.3%](https://www.morphllm.com/claude-benchmarks)
