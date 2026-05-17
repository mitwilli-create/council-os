---
provider: anthropic
model: claude-haiku-4-5
capability: latency-throughput
chunk_id: 21-latency-throughput
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: self_research
confidence: medium
sycophancy_strikes_at_convergence: 5
egoism_strikes_at_convergence: 0
tags: [latency, throughput, ttft, real-time, agentic]
related_chunks: [20-pricing, 21-latency-throughput, 43-ideal-tasks]
related_models:
  - anthropic/claude-sonnet-4-6
peer_comparisons:
  - peer: anthropic/claude-sonnet-4-6
    relation: stronger
    note: "Haiku is the speed tier; Sonnet trades latency for quality. Haiku is preferred for sub-2s real-time agentic decision loops."
---

**Summary** — Claude Haiku 4.5 is Anthropic's fastest model in the Claude 4 family, optimized for real-time agentic decision-making. The R2 profile characterizes it as supporting sub-2s latency for agentic routing workflows. Specific p50/p99 TTFT and tokens/sec figures are not published in the R2 profile; the speed advantage is described qualitatively as the fastest Claude 4 tier.

**Specifics:**
- Speed tier: fastest in the Claude 4 family (Anthropic positioning, Oct 15, 2025)
- Real-time agentic use case: sub-2s latency cited as suitable for routing logic and decision steps in R2 profile
- Extended thinking adds latency overhead — when activated, effective TTFT rises; use without extended thinking for lowest-latency paths
- Throughput advantage: 10× more items than Sonnet on fixed budgets in batch mode (derived from 3× cost advantage + 50% Batch API discount)
- p50/p99 TTFT: not published in R2 profile; benchmark before setting SLAs

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-sonnet-4-6: Haiku is materially faster; Sonnet is preferred when quality outweighs latency requirements
- vs. anthropic/claude-opus-4-7: Haiku is significantly faster; Opus is not a latency-first model

**Known limitations on this axis:**
- Specific TTFT and tokens/sec benchmarks not published for Haiku 4.5 in R2 profile; real-world latency varies by region, request size, and load
- Extended thinking mode increases latency substantially — not compatible with strict sub-2s SLAs in all configurations

**Sources:**
- [Anthropic Claude Haiku 4.5 announcement](https://www.anthropic.com/news/claude-haiku-4-5)
