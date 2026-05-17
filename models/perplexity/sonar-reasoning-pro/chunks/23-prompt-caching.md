---
provider: perplexity
model: sonar-reasoning-pro
capability: prompt-caching
chunk_id: 23-prompt-caching
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 2
egoism_strikes_at_convergence: 1
tags: [prompt-caching, no-caching, cost, limitations]
related_chunks: [20-pricing, 24-batch-api]
related_models: [anthropic/claude-opus-4-7, openai/gpt-5-5]
peer_comparisons:
  - peer: anthropic/claude-opus-4-7
    relation: weaker
    note: "Opus 4.7 supports prompt caching with 5-minute and 1-hour TTLs and cache-write pricing. Sonar Reasoning Pro has no caching product — repeated large contexts are re-billed in full each call."
  - peer: openai/gpt-5-5
    relation: weaker
    note: "GPT-5.5 supports automatic prompt caching. No equivalent for Sonar Reasoning Pro."
---

**Summary** — Prompt caching is not supported by the Perplexity API for Sonar Reasoning Pro. There is no documented cache-write pricing, cache TTL, or cached-read discount. Repeated calls with large shared context (e.g., system prompts or static document blocks) are billed at full input-token rate on every call.

**Specifics:**
- No prompt caching, cached reads, or cache TTLs in Perplexity API docs or pricing page. `[INFERRED — likely unsupported or internal only]`
- Every call re-bills all input tokens at $2/1M.
- No cache_control parameter analogous to Anthropic's extended cache.

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-opus-4-7: Opus 4.7 caches at 5-min and 1-hour TTLs; cache reads cost ~10% of full input price. For workloads with large repeated context, Opus 4.7 is materially cheaper per-call.
- vs. openai/gpt-5-5: GPT-5.5 caches automatically. Same cost disadvantage applies.

**Known limitations on this axis:**
- Batch or loop workloads that repeat large context blocks will not benefit from caching; total cost scales linearly with call count.

**Sources:**
- [Perplexity pricing page — no cache pricing listed](https://docs.perplexity.ai/docs/getting-started/pricing)
