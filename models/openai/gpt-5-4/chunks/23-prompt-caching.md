---
provider: openai
model: gpt-5-4
capability: prompt-caching
chunk_id: 23-prompt-caching
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: self_research
confidence: low
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [prompt-caching, cache, ttl, cost]
related_chunks: [20-pricing, 24-batch-api]
related_models: []
peer_comparisons: []
---

**Summary** — Prompt caching is likely supported at the OpenAI platform level given cached token pricing references in third-party sources, but GPT-5.4-specific first-party cache semantics (TTL, write multipliers, invalidation triggers) are not in the supplied source set. Treat as unverified until confirmed with OpenAI's caching documentation.

**Specifics:**
- Supported: likely yes, given third-party cached input pricing references (~$0.25/1M, 10% of standard) — **[UNVERIFIED first-party; corroborated by third-party sources]**. ([pricepertoken.com](https://pricepertoken.com/pricing-page/model/openai-gpt-5.4))
- Cache TTL: **[UNKNOWN — would need first-party cache docs]**.
- Cache-write multipliers: **[UNKNOWN]**.
- Cache invalidation triggers: **[UNKNOWN]**.

**Compared to peers (sharpened by Dealbreaker):**
- No comparisons available on this axis from supplied sources.

**Known limitations on this axis:**
- Do not build caching-dependent budget models without first-party confirmation of cache behavior for `gpt-5.4`.

**Sources:**
- [pricepertoken.com — cached rate reference](https://pricepertoken.com/pricing-page/model/openai-gpt-5.4)
