---
provider: perplexity
model: sonar-deep-research
capability: pricing
chunk_id: 20-pricing
last_research_round: 3
last_updated: 2026-05-17
verified_by_dealbreaker: false
source_authority: self_research
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [pricing, cost, reasoning-tokens, citation-tokens, search-cost, routing]
related_chunks: [21-latency-throughput, 22-rate-limits, 43-ideal-tasks, 44-avoid-when, 00-overview]
related_models: [perplexity/sonar-pro, perplexity/sonar, openai/gpt-5-5, google/gemini-3-1-pro]
peer_comparisons:
  - peer: perplexity/sonar-pro
    relation: weaker
    note: "Sonar Pro has simpler 2-dimension pricing and is roughly an order of magnitude cheaper per comparable token volume. SDR cost is dominated by reasoning and search tokens, not just I/O."
  - peer: google/gemini-3-1-pro
    relation: weaker
    note: "Gemini 3.1 Pro base input is $2/MTok. SDR input is also $2/MTok but adds $3/M reasoning + $2/M citation + $5/1k searches — total cost is far higher."
---

**Summary** — Sonar Deep Research has the most complex pricing in Perplexity's lineup: five billing dimensions. As of early 2025: input $2/M, output $8/M, citation $2/M, reasoning $3/M, search $5/1k queries. A Perplexity-documented illustrative run (7,163 output tokens, 20,016 citation tokens, 73,997 reasoning tokens, 18 searches) costs ~$0.41. Cost is non-linearly unpredictable — reasoning and search dominate, not visible I/O. This pricing complexity is the centerpiece of routing decisions: most queries should go to Sonar Pro or lower, with SDR reserved for tasks where exhaustive web synthesis provides clear marginal value.

**Specifics:**

| Billing dimension | Rate | Notes |
|---|---|---|
| Input tokens | $2 / 1M | Standard prompt text |
| Output tokens | $8 / 1M | Generated answer text |
| Citation tokens | $2 / 1M | Text extracted from retrieved web pages |
| Reasoning tokens | $3 / 1M | Internal chain-of-thought steps |
| Search queries | $5 / 1,000 | Each web search issued by the pipeline |

- Illustrative run (Perplexity-documented): 7,163 output + 20,016 citation + 73,997 reasoning tokens + 18 searches → ~$0.41 total. Output tokens are ~17% of total cost in this example; reasoning tokens dominate. [INFERRED from Perplexity pricing docs]
- Same input prompt length can produce very different costs depending on how many searches and reasoning steps the pipeline decides to execute.
- No granular API knob to cap search depth or reasoning budget per query; cost monitoring and alerting must be implemented at the application layer.
- No documented batch discount for SDR (unlike some providers). Pricing tables do not distinguish single vs. batched SDR runs.
- Prompt caching applicability to SDR: not well-documented; treat as providing limited relief (application-layer output persistence is the safer optimization). See 23-prompt-caching.

**Compared to peers (sharpened by Dealbreaker):**
- vs. perplexity/sonar-pro: SDR is ~10× more expensive per comparable token volume once reasoning and search are factored in. Sonar Pro should handle 90%+ of Perplexity workloads.
- vs. perplexity/sonar: Sonar is lowest cost in the family. Use for casual Q&A; no comparison warranted with SDR.
- vs. google/gemini-3-1-pro: Gemini 3.1 Pro lacks SDR's 5-dimension billing complexity; for cost-sensitive long-text workloads, Gemini is likely cheaper in practice.
- vs. openai/gpt-5-5: GPT-5.5 pricing structure is different; cost-per-task comparison requires task-specific token profiling.

**Known limitations on this axis:**
- Cost unpredictability is a structural property — cannot precisely estimate per-query cost before running.
- No granular search-budget controls exposed to users.
- Batch discounts not confirmed for SDR; do not assume batch cost optimization.

**Sources:**
- R3 self-research §3.1 (round-3-self-research.md)
- Perplexity pricing documentation (cited in §3.1)
- R2 dealbreaker verdict — s4_pricing verified: "$2/$8/$2/$3/$5 + $0.41 example" (round-2-verdict.yaml)
