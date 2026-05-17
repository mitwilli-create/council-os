---
provider: openai
model: gpt-5-3-chat-latest
capability: prompt-caching
chunk_id: 23-prompt-caching
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: self_research
confidence: medium
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [prompt-caching, cache-reads, ttl, inferred]
related_chunks: [20-pricing, 24-batch-api]
related_models: [anthropic/claude-sonnet-4-6]
peer_comparisons:
  - peer: anthropic/claude-sonnet-4-6
    relation: different-approach
    note: "Anthropic uses explicit cache_control breakpoints; OpenAI caching is automatic for prompts over a threshold, no explicit markup."
---

**Summary** — Prompt caching is supported on OpenAI's platform with an approximately 90% discount on cached reads ($0.175/M vs. $1.75/M uncached input). OpenAI's platform historically caches prompts over ~1,000 tokens automatically with a ~1-hour TTL. The exact TTL and write-multiplier for this specific model are not stated on the model page. [INFERRED from platform-wide OpenAI caching docs]

**Specifics:**
- Cached input price: $0.175/M tokens (~90% discount). (https://developers.openai.com/api/docs/models/gpt-5.3-chat-latest; Dealbreaker-verified)
- Cache triggering: automatic for prompts > ~1,000 tokens (platform-wide convention). [INFERRED]
- TTL: ~1 hour (platform-wide historical doc). Exact TTL for gpt-5.3-chat-latest not explicitly stated. [INFERRED — confirm per account]
- Cache write multiplier: not explicitly stated on the model page. [UNKNOWN]
- No explicit `cache_control` markup required; caching is automatic (unlike Anthropic). [INFERRED]

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-sonnet-4-6: Anthropic requires explicit `cache_control` breakpoints; OpenAI caches automatically. Different ergonomics; similar economic intent.

**Known limitations on this axis:**
- TTL and write-cost multiplier not confirmed for this model snapshot. Treat as inferred from platform defaults.
- Cache invalidation behavior on prompt modification not documented per-model. [UNKNOWN]

**Sources:**
- [GPT-5.3 Chat model page — pricing](https://developers.openai.com/api/docs/models/gpt-5.3-chat-latest)
- Round-2 self-research lines 72–75
