---
provider: anthropic
model: claude-sonnet-4-6
capability: pricing
chunk_id: 20-pricing
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 5
egoism_strikes_at_convergence: 5
tags: [pricing, cost, tokens, cache, batch]
related_chunks: [21-latency-throughput, 23-prompt-caching, 24-batch-api, 43-ideal-tasks]
related_models: [anthropic/claude-opus-4-7, anthropic/claude-haiku-4-5]
peer_comparisons:
  - peer: anthropic/claude-opus-4-7
    relation: stronger
    note: "Sonnet 4.6 is 40% cheaper on both input ($3 vs. $5) and output ($15 vs. $25) per MTok. 40% cost reduction is the primary reason to route to Sonnet 4.6 over Opus 4.7 when benchmark gap is acceptable."
  - peer: anthropic/claude-haiku-4-5
    relation: weaker
    note: "Haiku 4.5 is 3x cheaper on both input ($1) and output ($5) per MTok. For high-volume triage under 200k context, Haiku 4.5 saves 67% of inference cost."
---

**Summary** — Sonnet 4.6 sits at $3.00/$15.00 per MTok (input/output) — 40% cheaper than Opus 4.7 ($5/$25) and 3x more expensive than Haiku 4.5 ($1/$5). Prompt caching reduces effective input cost to $0.30/MTok on cache hits. Batch API applies a 50% discount. The minimum cacheable prefix of 1,024 tokens (vs. Opus 4.7's 4,096) is a cost advantage for short-prompt high-volume workloads.

**Specifics:**

| Token type | Price |
|---|---|
| Input (base) | $3.00/MTok |
| Output | $15.00/MTok |
| Cache write (5-min TTL) | $3.75/MTok (1.25x base) |
| Cache write (1-hour TTL) | $6.00/MTok (2x base) |
| Cache read (hit) | $0.30/MTok (0.10x base) |
| Batch API input | $1.50/MTok (50% off) |
| Batch API output | $7.50/MTok (50% off) |

Source: [Official prompt caching pricing table](https://platform.claude.com/docs/en/build-with-claude/prompt-caching) and `_official-prompt-caching.md` line 285.

- Batch API discount stacks with prompt caching discounts.
- Cache read tokens (`cache_read_input_tokens`) do NOT count toward ITPM rate limits for most Claude models — cache-warm workloads sustain dramatically higher effective throughput than nominal ITPM limits suggest. Source: official rate-limits documentation.
- Minimum cacheable prefix: **1,024 tokens** (vs. 4,096 for Opus 4.7 and Haiku 4.5). Short-prompt workloads 1,024–4,095 tokens can only cache on Sonnet 4.6 among current Anthropic models. Source: `_official-prompt-caching.md` line 650.

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-opus-4-7: 40% lower input ($3 vs. $5) and output ($15 vs. $25). At cache-read price: $0.30/MTok vs. $0.50/MTok. For workloads where 8-point SWE-bench gap and 4-point GPQA gap are acceptable, Sonnet 4.6 saves 40% on both legs.
- vs. anthropic/claude-haiku-4-5: Haiku 4.5 is 3x cheaper ($1/$5). For high-volume classification under 200k context where Haiku 4.5's 6-point lower SWE-bench is acceptable, Haiku saves 67%.

**Known limitations on this axis:**
- Output at $15/MTok is expensive for long-form generation. Adaptive thinking increases per-call compute cost compared to base inference — monitor output token counts on thinking-heavy workloads.
- 1-hour cache write (2x base) is significantly more expensive than 5-min write (1.25x base). Use 1-hour TTL only when the workload genuinely needs longer cache retention.
- Prompts under 1,024 tokens silently receive no caching — check `cache_creation_input_tokens` in the response to verify cache fired.

**Sources:**
- [Official prompt caching pricing](https://platform.claude.com/docs/en/build-with-claude/prompt-caching)
- `_official-prompt-caching.md` lines 285, 650
