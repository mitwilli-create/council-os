---
provider: perplexity
model: sonar-pro
capability: latency-throughput
chunk_id: 21-latency-throughput
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: self_research
confidence: medium
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 1
tags: [latency, throughput, ttft, tokens-per-second, web-search-overhead]
related_chunks: [20-pricing, 41-known-limitations]
related_models: [perplexity/sonar, perplexity/sonar-deep-research]
peer_comparisons:
  - peer: perplexity/sonar-deep-research
    relation: stronger
    note: "Deep Research runs multi-pass autonomous research loops taking minutes per task. Sonar Pro returns in seconds — the right choice when turnaround time matters."
  - peer: perplexity/sonar
    relation: comparable
    note: "Both are single-call search models; Sonar may be slightly faster due to smaller context and lower model complexity, but both operate in the seconds range."
---

**Summary** — Sonar Pro returns answers in seconds under typical load, with time-to-first-token around 0.5–1.5 seconds and generation speed of roughly 40–80 tokens/second (Artificial Analysis third-party measurements). These are not provider SLAs and vary with load, context size, and upstream search latency. The web search step introduces latency variance relative to purely offline models.

**Specifics:**
- Typical TTFT: ~**0.5–1.5 seconds** under moderate load (Artificial Analysis). [INFERRED FROM ARTIFICIAL ANALYSIS — not a provider SLA]
- Generation speed: roughly **40–80 tokens/second**, varying by load and context size (Artificial Analysis). [INFERRED FROM ARTIFICIAL ANALYSIS]
- Web search step adds latency variance: upstream site availability and network conditions can cause calls to be slower or time out.
- Rate limits: plan/contract-dependent per Perplexity docs; no precise default public RPM/TPM ladder documented across all plans. [UNKNOWN — R2 Strike B; enterprise caps are negotiated]

**Compared to peers (sharpened by Dealbreaker):**
- vs. perplexity/sonar-deep-research: Deep Research is designed for minutes-long multi-pass research tasks. Sonar Pro is single-call, seconds-range — use it when response turnaround time matters.
- vs. perplexity/sonar: Both are seconds-range single-call models; base Sonar may be marginally faster for short-context queries.

**Known limitations on this axis:**
- Web search step means latency is higher-variance than purely offline models; blocked or slow upstream sites can degrade response time.
- At high QPS, the per-request search step can be a throughput bottleneck.
- Measurements are third-party (Artificial Analysis), not provider SLAs.

**Sources:**
- [Artificial Analysis — Perplexity Sonar Pro benchmarks](https://artificialanalysis.ai)
