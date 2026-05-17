---
provider: anthropic
model: claude-sonnet-4-6
capability: latency-throughput
chunk_id: 21-latency-throughput
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 5
egoism_strikes_at_convergence: 5
tags: [latency, throughput, ttft, tokens-per-second, provider-routing]
related_chunks: [20-pricing, 43-ideal-tasks, 44-avoid-when]
related_models: [anthropic/claude-opus-4-7, anthropic/claude-haiku-4-5]
peer_comparisons:
  - peer: anthropic/claude-opus-4-7
    relation: stronger
    note: "Opus 4.7 is rated 'Moderate' latency. Sonnet 4.6 is rated 'Fast' — materially faster, though below-average for its price tier per artificialanalysis.ai measurements."
  - peer: anthropic/claude-haiku-4-5
    relation: weaker
    note: "Haiku 4.5 is rated 'Fastest'. For latency-critical pipelines, Haiku 4.5 is the faster choice within the Anthropic family."
---

**Summary** — Sonnet 4.6 is rated "Fast" by Anthropic (vs. Opus 4.7 "Moderate", Haiku 4.5 "Fastest"). Per artificialanalysis.ai measured May 2026 on the Anthropic direct endpoint: TTFT 1.36s and throughput 45.4 tokens/sec — both below-average for the price tier (medians 1.60s TTFT and 56.3 t/s). Fastest provider configurations: Google (1.01s TTFT) and Azure (48.7 t/s throughput).

**Specifics:**
- Official latency class: **"Fast"** (Anthropic classification). Source: [Official models overview](https://platform.claude.com/docs/en/about-claude/models/overview).
- TTFT (Anthropic direct, May 2026): **1.36s** — below-average for price tier (median 1.60s). Source: [artificialanalysis.ai](https://artificialanalysis.ai/models/claude-sonnet-4-6-adaptive).
- Throughput (Anthropic direct, May 2026): **45.4 tokens/sec** — below-average for price tier (median 56.3 t/s). Source: same.
- Fastest TTFT provider configuration: **Google** at **1.01s** TTFT.
- Fastest throughput provider configuration: **Azure** at **48.7 t/s**.
- Adaptive thinking increases per-call latency proportional to reasoning token budget — factor this into SLA planning for thinking-enabled workloads.

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-opus-4-7: Sonnet 4.6 is faster (Opus 4.7 is "Moderate"). Sonnet 4.6 is the routing choice when latency matters and Opus 4.7's quality ceiling is not required.
- vs. anthropic/claude-haiku-4-5: Haiku 4.5 is faster still ("Fastest"). For latency-critical pipelines, Haiku 4.5 is the correct choice within the Anthropic family.

**Known limitations on this axis:**
- 1.36s TTFT is below-average for the price tier — some competing models at similar pricing have sub-1s TTFT.
- 45.4 t/s throughput is below-average — competitors at similar pricing can sustain 56+ t/s.
- Adaptive thinking adds variable latency depending on reasoning budget. High-budget thinking calls can add seconds to minutes of latency.
- Grammar compile latency applies to strict-mode calls after >24h idle — not captured in standard TTFT measurements.

**Sources:**
- [artificialanalysis.ai — Sonnet 4.6 TTFT and throughput](https://artificialanalysis.ai/models/claude-sonnet-4-6-adaptive)
- [Anthropic Official Models Overview](https://platform.claude.com/docs/en/about-claude/models/overview)
