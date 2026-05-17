---
provider: perplexity
model: sonar-deep-research
capability: rate-limits
chunk_id: 22-rate-limits
last_research_round: 3
last_updated: 2026-05-17
verified_by_dealbreaker: false
source_authority: self_research
confidence: medium
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [rate-limits, rpm, throughput, batch, capacity-planning]
related_chunks: [21-latency-throughput, 24-batch-api, 43-ideal-tasks, 44-avoid-when]
related_models: [perplexity/sonar-pro, perplexity/sonar]
peer_comparisons:
  - peer: perplexity/sonar-pro
    relation: weaker
    note: "Sonar Pro has higher RPM limits. SDR's 5 RPM is a hard ceiling imposed by its backend infrastructure costs."
---

**Summary** — Sonar Deep Research has a documented default rate limit of approximately 5 requests per minute. This translates to a theoretical maximum of ~300 queries/hour or ~7,200/day under perfect utilization — but because each query takes 20–60+ seconds, true sustained throughput is substantially lower. The 5 RPM ceiling makes SDR categorically unsuitable for bulk batch workloads, real-time personalization at scale, or any high-throughput pipeline. Custom enterprise limits may be negotiated with Perplexity but are not part of default behavior.

**Specifics:**
- Default rate limit: ~5 RPM per API key (Perplexity-documented). [INFERRED from Perplexity API docs]
- Theoretical ceiling: 300 queries/hour, 7,200 queries/day at 5 RPM with 100% utilization.
- Real ceiling is lower: each query consuming 30–60 seconds means ~1–2 concurrent slots at 5 RPM are already effectively filled.
- No published TPM (tokens per minute) limit for SDR specifically; RPM is the binding constraint.
- Implication for batch workloads: at 5 RPM, processing 1,000 queries requires a minimum of ~3.3 hours serial time plus pipeline overhead; must be scheduled off-peak or across multiple API keys.
- High-throughput alternatives: Sonar Pro or Sonar have higher RPM allowances and are appropriate for volume workloads.
- R2 profile mentioned 5 RPM but did not tie it to throughput implications — R3 and this chunk make the ceiling explicit.

**Compared to peers (sharpened by Dealbreaker):**
- vs. perplexity/sonar-pro: Sonar Pro supports higher throughput for the same daily query budget. Use Sonar Pro for volume.
- vs. openai/gpt-5-5: GPT-5.5 has separate rate tiers; for comparable deep-research-style workloads at volume, GPT-5.5 may offer higher headroom depending on tier.

**Known limitations on this axis:**
- 5 RPM is a default; confirmed enterprise overrides are not documented publicly.
- Rate limit and query latency together create a compounding capacity constraint — the two must be planned jointly, not independently.

**Sources:**
- R3 self-research §3.3 (round-3-self-research.md)
- R2 dealbreaker verdict (s17_rate_limit_routing_implications_missing — addressed in R3)
