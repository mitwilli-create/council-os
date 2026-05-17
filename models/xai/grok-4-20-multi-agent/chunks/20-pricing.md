---
provider: xai
model: grok-4.20-multi-agent
capability: pricing
chunk_id: 20-pricing
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [pricing, cost, sub-agent-multiplier, cost-surprise, budget]
related_chunks: [11-tool-use, 21-latency-throughput, 23-prompt-caching, 24-batch-api]
related_models: [xai/grok-4-3, xai/grok-4-20-single-agent, anthropic/claude-opus-4-7, openai/gpt-5-5]
peer_comparisons:
  - peer: xai/grok-4-3
    relation: weaker
    note: "Grok 4.3 costs $1.25/M input and $2.50/M output — 38% cheaper input, 58% cheaper output vs. Grok 4.20 MA's $2/$6. Plus Grok 4.3 has no sub-agent billing multiplier."
  - peer: xai/grok-4-20-single-agent
    relation: weaker
    note: "Same $2/$6 sticker, but single-agent variant has no multi-agent overhead. Realized cost per useful output token is always lower on single-agent for tasks not requiring parallel debate."
  - peer: anthropic/claude-opus-4-7
    relation: comparable
    note: "Comparable sticker price range, but Claude has no sub-agent billing multiplier for standard tool use."
---

**Summary** — Grok 4.20 Multi-Agent is priced at $2/M input and $6/M output. The critical cost reality is the sub-agent token billing multiplier: all sub-agent and tool tokens are billed, producing a 2-4x effective output cost multiplier at 4-agent depth and an 8-16x multiplier at 16-agent xhigh effort. A task that would cost $0.10 on a single-agent model costs $0.40–$1.60 at xhigh. Teams comparing sticker prices without accounting for this multiplier face systematic budget overruns.

**Specifics:**
- Input: $2.00 per 1M tokens (verified: OpenRouter, PricePerToken, mem0).
- Output: $6.00 per 1M tokens (verified: OpenRouter, PricePerToken, mem0).
- Sub-agent billing multiplier: 2-4x effective output cost at 4-agent low/medium effort; 8-16x at 16-agent high/xhigh effort.
- Realized example: single-agent-equivalent $0.10 query → $0.40–$1.60 at xhigh. This is the cardinal cost surprise.
- Realized output cost at xhigh: $6 base × 8-16 multiplier = $48–$96 per effective 1M output tokens.
- Prompt caching: supported (cached input ~$0.20/M range [INFERRED FROM INDUSTRY PATTERN]).
- Batch API: supported with cost discount [INFERRED FROM FAMILY DOCS].
- vs. Grok 4.3: $1.25/$2.50 sticker + no multiplier = dramatically cheaper for all non-multi-agent tasks.
- vs. Grok 4.20 single-agent: identical $2/$6 sticker, but single-agent has zero sub-agent overhead.

**Compared to peers (sharpened by Dealbreaker):**
- vs. xai/grok-4-3: Grok 4.3 is 38% cheaper on input, 58% cheaper on output, and has no sub-agent multiplier. Grok 4.20 MA costs more and introduces multiplier risk.
- vs. xai/grok-4-20-single-agent: Same sticker; Multi-Agent always costs more per useful output at equivalent task complexity due to multi-agent overhead.
- vs. anthropic/claude-opus-4-7: Comparable base pricing range, but Claude's tool-use billing does not multiply per agent depth in the same way.

**Known limitations on this axis:**
- Sub-agent multiplier is the dominant cost risk — systematically missed in sticker-price comparisons.
- Prompt caching and Batch API discount amounts are [INFERRED FROM FAMILY DOCS / INDUSTRY PATTERN] — not directly verified for this variant.
- Rate limits interact with cost at scale: [UNKNOWN precise rate limits for Multi-Agent variant].

**Sources:**
- OpenRouter, PricePerToken, mem0 (verifying $2/$6)
- xAI Multi-Agent docs (sub-agent billing mechanism)
