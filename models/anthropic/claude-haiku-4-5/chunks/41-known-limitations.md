---
provider: anthropic
model: claude-haiku-4-5
capability: known-limitations
chunk_id: 41-known-limitations
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 5
egoism_strikes_at_convergence: 0
tags: [limitations, adaptive-thinking, computer-use-failures, knowledge-cutoff, gotchas]
related_chunks: [10-reasoning, 44-avoid-when, 20-pricing]
related_models:
  - anthropic/claude-sonnet-4-6
  - anthropic/claude-opus-4-7
peer_comparisons:
  - peer: anthropic/claude-sonnet-4-6
    relation: weaker
    note: "Sonnet 4.6 has adaptive thinking; Haiku 4.5 does not. Tasks requiring dynamic compute reallocation mid-chain should route to Sonnet."
---

**Summary** — Claude Haiku 4.5's primary structural limitation is the absence of adaptive thinking — it cannot dynamically reallocate reasoning compute once a chain has started. Secondary limitations include a 49.3% computer-use failure rate on OSWorld (acceptable for scaffolded workflows, not for unattended automation), a February 2025 knowledge cutoff, and documented Dealbreaker strikes in round 2 including a sibling-positioning regression, an evidentiary label inconsistency, and a unit error on per-1k-token cost. These were caught by adjudication and noted here for auditability.

**Specifics:**
- Adaptive thinking: absent by architectural design, not a bug. Tasks needing dynamic compute self-allocation must route to Sonnet 4.6 or Opus 4.7.
- OSWorld failure rate: 49.3% — real actions fail roughly half the time on the benchmark. Suitable for scaffolded/supervised agentic loops, not unattended production automation.
- Knowledge cutoff: February 2025 [INFERRED; magnitude not independently verified in R2 — open minor strike S10]
- Vision pixel-budget: not documented (open minor strike S4); do not assume Haiku matches Sonnet ceiling for high-resolution image tasks
- Dealbreaker R2 strikes (for auditability):
  - N1: positioning framing drifted from "Sonnet 4" to "Sonnet 4.6" (sibling-sycophancy regression)
  - N2: adaptive-thinking absence tagged [INFERRED] on one line and "Verified" on another (label inconsistency)
  - N3: stated $0.30 per 1,000 input tokens — off by ~300× (correct: ~$0.001 per 1k at base rate)

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-sonnet-4-6: Haiku is weaker on any task requiring adaptive reasoning depth; Sonnet is the fallback for those cases

**Known limitations on this axis:**
- Adaptive thinking gap is architectural, not fixable via prompting
- Computer-use at 50.7% success rate requires human-in-the-loop for high-stakes workflows

**Sources:**
- [Anthropic Claude Haiku 4.5 announcement](https://www.anthropic.com/news/claude-haiku-4-5)
- Round-2 Dealbreaker verdict: `/council-os/models/anthropic/claude-haiku-4-5/research-rounds/round-2-verdict.yaml`
