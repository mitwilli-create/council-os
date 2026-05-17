---
provider: perplexity
model: sonar-pro
capability: pricing
chunk_id: 20-pricing
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 1
tags: [pricing, cost, per-request, token-cost, sibling-crossover]
related_chunks: [21-latency-throughput, 26-context-window, 43-ideal-tasks, 44-avoid-when]
related_models: [perplexity/sonar, perplexity/sonar-reasoning-pro, perplexity/sonar-deep-research]
peer_comparisons:
  - peer: perplexity/sonar
    relation: weaker
    note: "Sonar: $1/1M in, $1/1M out — ~3.5x cheaper on tokens. Use Sonar for ≤127k context, simpler queries."
  - peer: perplexity/sonar-reasoning-pro
    relation: weaker
    note: "Sonar Reasoning Pro: $2/1M in, $8/1M out — ~47% cheaper per output token. Use Reasoning Pro for visible CoT tasks."
  - peer: perplexity/sonar-deep-research
    relation: stronger
    note: "Deep Research: $2/1M in + $2/1M citation + $3/1M reasoning + $5/1k queries. For >15 queries or >50 citations per task, Deep Research costs become competitive and it's the better tool."
---

**Summary** — Sonar Pro costs $3/1M input tokens and $15/1M output tokens, plus a per-request fee of $6–$14 per 1,000 requests depending on search context size. As of 2026, citation-token charges were dropped for Sonar and Sonar Pro; they now apply only to Sonar Deep Research. Within the Perplexity family, Sonar Pro sits at the top of the per-token cost ladder among non-Deep-Research siblings. The cost shape rewards callers who need 200k context or complex single-call research and penalizes simple FAQ-style or short-context workloads.

**Specifics:**
- Sonar Pro: **$3/1M input, $15/1M output** (Perplexity pricing docs, OpenRouter, pricepertoken, CloudZero).
- Per-request fee: **$6–$14 per 1,000 requests** based on search context size (CloudZero 2026). [Sub-detail: exact band mapping — low/medium/high search context — not published in docs; R2 Strike C]
- Citation-token charges: dropped for Sonar and Sonar Pro in 2026; apply only to Sonar Deep Research (CloudZero, Galaxy.ai).
- No prompt-caching discount mechanism documented by Perplexity; billed per tokens + per-request. [INFERRED FROM DOCS]
- No batch API discount documented by Perplexity. [UNKNOWN]

**Sibling crossover (numeric):**

| Sibling | Input | Output | Context | Per-request |
|---|---|---|---|---|
| Sonar | $1/1M | $1/1M | 127k | lower |
| Sonar Pro | $3/1M | $15/1M | 200k | $6–$14/1k |
| Sonar Reasoning Pro | $2/1M | $8/1M | — | — |
| Sonar Deep Research | $2/1M + $2/1M cite + $3/1M reason | $8/1M | — | $5/1k queries |

**Example workload (50k input / 2k output):**
- Sonar: $0.05 in + $0.002 out = ~**$0.052**
- Sonar Pro: $0.15 in + $0.03 out = ~**$0.18** (+ per-request fee)
- Sonar Pro is ~3.5x more expensive on tokens alone for this workload.

**Compared to peers (sharpened by Dealbreaker):**
- vs. perplexity/sonar: Route to Sonar for ≤127k context + simple queries. Pay for Sonar Pro only when context exceeds 127k or query complexity justifies it.
- vs. perplexity/sonar-reasoning-pro: Sonar Reasoning Pro is ~47% cheaper per output token and better for CoT tasks. Sonar Pro costs more for search-heavy single-call research outputs.
- vs. perplexity/sonar-deep-research: For >15 queries or >50 citations per research task, Deep Research's cheaper token rates + specialized pipeline become cost-competitive despite query fees.

**Known limitations on this axis:**
- Per-request fee band mapping ($6 low / $10 medium / $14 high) not published; exact cost at high search-context size is uncertain.
- Prices should be verified against Perplexity's live pricing page before budgeting; snapshot reflects 2026 documentation.

**Sources:**
- [Perplexity pricing docs](https://docs.perplexity.ai/docs/pricing)
- [pricepertoken — sonar-pro](https://pricepertoken.com)
- [CloudZero 2026 Perplexity pricing breakdown](https://www.cloudzero.com)
- [Galaxy.ai Perplexity pricing summary](https://galaxy.ai)
- [OpenRouter — perplexity/sonar-pro](https://openrouter.ai/perplexity/sonar-pro)
