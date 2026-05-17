---
provider: perplexity
model: sonar-reasoning-pro
capability: pricing
chunk_id: 20-pricing
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 2
egoism_strikes_at_convergence: 1
tags: [pricing, reasoning-tokens, search-cost, citation-tokens, cost-shape]
related_chunks: [10-reasoning, 12-web-grounding, 24-batch-api, 23-prompt-caching]
related_models: [perplexity/sonar-pro, perplexity/sonar-deep-research, anthropic/claude-opus-4-7]
peer_comparisons:
  - peer: perplexity/sonar-pro
    relation: weaker
    note: "Sonar Pro has identical $2/$8 input/output pricing without the $3/1M reasoning-token surcharge. Sonar Reasoning Pro costs more for the same token volume when CoT is emitted."
  - peer: anthropic/claude-opus-4-7
    relation: different-approach
    note: "Opus 4.7 is priced higher per token ($5/$25 per 1M) but does not add a reasoning surcharge because CoT is hidden. For short-input tasks with heavy CoT, Sonar Reasoning Pro may be cheaper; for long-context tasks, Opus 4.7 is often more economical."
---

**Summary** — Sonar Reasoning Pro uses a five-part pricing model: input tokens ($2/1M), output tokens ($8/1M), citation tokens ($2/1M), reasoning tokens ($3/1M inside `<think>`), and search queries ($5/1k). The reasoning-token surcharge is the defining cost driver: on a typical DeepSeek-R1 hard-reasoning call emitting 12k–23k reasoning tokens, the surcharge alone costs $0.036–$0.069 per call, often exceeding the combined input/output token cost. Cost modeling for this model must account for all five components.

**Specifics:**
- **Input tokens:** $2 / 1M ([Perplexity pricing](https://docs.perplexity.ai/docs/getting-started/pricing))
- **Output tokens:** $8 / 1M ([Perplexity pricing](https://docs.perplexity.ai/docs/getting-started/pricing))
- **Citation tokens:** $2 / 1M — tokens used within citations data ([Perplexity pricing](https://docs.perplexity.ai/docs/getting-started/pricing))
- **Reasoning tokens:** $3 / 1M — tokens inside `<think>...</think>` ([Perplexity pricing](https://docs.perplexity.ai/docs/getting-started/pricing))
- **Search queries:** $5 / 1,000 searches ([Perplexity pricing](https://docs.perplexity.ai/docs/getting-started/pricing))
- **Reasoning surcharge examples:**
  - 12k reasoning tokens → $0.036/call in reasoning surcharge
  - 23k reasoning tokens → $0.069/call in reasoning surcharge
  - Short input/output tokens typically cost fractions of a cent — reasoning surcharge dominates
- No batch pricing discount documented. `[INFERRED — no batch endpoint]`
- No prompt caching / cached read pricing documented. `[INFERRED]`

**Compared to peers (sharpened by Dealbreaker):**
- vs. perplexity/sonar-pro: Sonar Pro has identical $2/$8 input/output rates but no reasoning surcharge, no citation token charge (same structure), and $5/1k search. For tasks not requiring visible CoT, Sonar Pro is strictly cheaper.
- vs. anthropic/claude-opus-4-7: Opus 4.7 is $5/$25 per 1M tokens — 2.5x higher base rate — but no reasoning surcharge because CoT is hidden. For short-context heavy-reasoning tasks, Sonar Reasoning Pro can be cheaper. For long-context tasks, Opus 4.7's higher per-token rate may exceed total Sonar cost.

**Known limitations on this axis:**
- Five-component cost is non-trivial to predict before the call, especially reasoning and citation tokens.
- No batch discount available.
- No prompt caching to reduce repeated-context costs.

**Sources:**
- [Perplexity pricing page](https://docs.perplexity.ai/docs/getting-started/pricing)
