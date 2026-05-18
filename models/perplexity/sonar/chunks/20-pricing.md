---
provider: perplexity
model: sonar
capability: pricing
chunk_id: 20-pricing
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: false
source_authority: self_research
confidence: low
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [pricing, cost, tokens, per-request-fee, economics]
related_chunks: [00-overview, 24-batch-api, 23-prompt-caching, 43-ideal-tasks, 44-avoid-when]
related_models: [perplexity/sonar-pro, perplexity/sonar-reasoning-pro, perplexity/sonar-deep-research]
peer_comparisons:
  - peer: perplexity/sonar-pro
    relation: stronger
    note: "Sonar base is $1/$1 vs Sonar Pro $3/$15 — Sonar base wins on cost when single-pass retrieval is sufficient and context fits in 127k"
  - peer: perplexity/sonar-reasoning-pro
    relation: stronger
    note: "Sonar base is $1 input vs Sonar Reasoning Pro $2 input — half the input cost when CoT is not needed"
---

**Summary** — Sonar (base) is the **cost floor** of the Perplexity Sonar family at $1.00 input / $1.00 output per 1M tokens. This is also the cost floor for Perplexity as a whole. CRITICAL: Sonar also charges per-request fees ($5 per 1,000 low-context requests, $12 per 1,000 high-context requests) ON TOP of token pricing — a cost structure that can make Sonar more expensive than Sonar Pro at sufficient volume. Always calculate total cost (token + per-request) before choosing Sonar base over Sonar Pro.

**Specifics:**
- Input: $1.00 / 1M tokens. [R1 Dealbreaker Strike 11, web-verified during adjudication]
- Output: $1.00 / 1M tokens. [R1 Dealbreaker Strike 11, web-verified during adjudication]
- Per-request fee (low-context): $5.00 per 1,000 requests. [R1 Dealbreaker Strike 17, web-verified during adjudication]
- Per-request fee (high-context): $12.00 per 1,000 requests. [R1 Dealbreaker Strike 17, web-verified during adjudication]
- Prompt caching pricing: [UNKNOWN]. [R1 Dealbreaker Strike 21]
- Batch API pricing: not available (Sonar does not expose a batch API). [R1 Dealbreaker Strike 20]
- Sonar Pro for comparison: $3.00 input / $15.00 output per 1M tokens. [R1 Dealbreaker, web-verified]

**Price-performance crossover (R1 Dealbreaker Strike 26 analysis):**
Sonar base beats Sonar Pro when ALL of:
- (a) Answer fits within Sonar's 127k context window
- (b) Task is single-pass / single-question / no follow-ups needed
- (c) Shallow retrieval (1x search results) is acceptable
- (d) Volume × per-request-fee math does not push Sonar total cost past Sonar Pro's flat rate

At high query volume, per-request fees ($5–12/1k) can flip the economics — Sonar Pro may be cheaper per useful result.

**Compared to peers (sharpened by Dealbreaker):**
- vs. perplexity/sonar-pro: cheaper on token pricing ($1/$1 vs $3/$15) but per-request fees narrow the advantage at volume.
- vs. perplexity/sonar-reasoning-pro: cheaper on input ($1 vs $2) when CoT is not needed.

**Known limitations on this axis:**
- Per-request fees are unusual and easy to overlook. Always include them in cost models.
- No batch API means no batch discount path for Sonar base.
- Cache pricing details unknown.

**Sources:**
- R1 Dealbreaker Strikes 11, 17, 20, 21, 26: `/models/perplexity/sonar/research-rounds/round-1-dealbreaker.md`
