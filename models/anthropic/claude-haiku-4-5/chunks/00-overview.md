---
provider: anthropic
model: claude-haiku-4-5
capability: overview
chunk_id: 00-overview
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 5
egoism_strikes_at_convergence: 0
tags: [identity, positioning, family, cost-tier, agentic]
related_chunks: [20-pricing, 40-unique-strengths, 43-ideal-tasks]
related_models:
  - anthropic/claude-sonnet-4-6
  - anthropic/claude-opus-4-7
peer_comparisons:
  - peer: anthropic/claude-sonnet-4-6
    relation: weaker
    note: "Sonnet 4.6 has adaptive thinking; Haiku 4.5 does not. Sonnet is the quality ceiling for tasks needing dynamic compute allocation."
  - peer: anthropic/claude-opus-4-7
    relation: weaker
    note: "Opus 4.7 is the synthesis/judgment tier; Haiku 4.5 is the throughput/cost tier."
---

**Summary** — Claude Haiku 4.5 is Anthropic's fastest, lowest-cost model in the Claude 4 family, purpose-built for agentic workflows, real-time decision-making, and high-volume batch processing. Its central differentiator is delivering Sonnet 4-quality reasoning at approximately one-third the cost when paired with prompt caching and the Batch API.

**Specifics:**
- Official API model ID: `claude-haiku-4-5` (Anthropic API, October 2025)
- Released: October 15, 2025 (Anthropic-published)
- Family position: cost/speed tier in the Claude 4 family, below Sonnet 4.6 and Opus 4.7
- Benchmark headline: SWE-bench Verified 73.3%, OSWorld 50.7% (both Anthropic-published, Oct 15, 2025)
- Positioning: "Sonnet 4 quality at ~1/3 cost" — enabled by prompt cache read at $0.10/MTok and 50% Batch API discount
- Extended thinking: supported. Adaptive thinking: not supported [INFERRED per round-2 adjudication]

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-sonnet-4-6: Haiku 4.5 is weaker on adaptive-thinking tasks (nuanced heuristics, dynamic compute) but 3× cheaper on cached batch workflows; OSWorld 50.7% vs. Sonnet 42.2% means Haiku outperforms Sonnet on computer-use scaffolding at this benchmark despite lower cost tier
- vs. anthropic/claude-opus-4-7: Opus 4.7 is the orchestration/synthesis ceiling; Haiku 4.5 is the worker tier for bounded, high-volume tasks

**Known limitations on this axis:**
- Adaptive thinking architecture is absent by design — not a bug, not planned to be added at this tier
- Knowledge cutoff: February 2025 [INFERRED, magnitude not independently verified in R2]

**Sources:**
- [Anthropic Claude Haiku 4.5 announcement](https://www.anthropic.com/news/claude-haiku-4-5)
- [Anthropic API model reference](https://docs.anthropic.com/en/docs/models-overview)
