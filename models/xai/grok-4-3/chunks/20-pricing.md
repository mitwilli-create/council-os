---
provider: xai
model: grok-4-3
capability: pricing
chunk_id: 20-pricing
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [pricing, cost, cached-read, batch, cost-optimized]
related_chunks:
  - 21-latency-throughput
  - 24-batch-api
  - 23-prompt-caching
  - 40-unique-strengths
related_models:
  - xai/grok-4-20-multi-agent
  - anthropic/claude-opus-4-7
peer_comparisons:
  - peer: xai/grok-4-20-multi-agent
    relation: stronger
    note: "Grok 4.3 is 37.5% cheaper on input and 58.3% cheaper on output than Grok 4.20 Multi-Agent — the explicit cost-vs-capability tradeoff within the xAI family"
  - peer: anthropic/claude-opus-4-7
    relation: stronger
    note: "Grok 4.3 input ($1.25/1M) is substantially cheaper than Opus 4.7 ($15/1M); Grok 4.3 output ($2.50/1M) vs. Opus 4.7 ($75/1M) — 60x cheaper output at comparable context window"
---

**Summary** — Grok 4.3 is priced at $1.25/1M tokens input and $2.50/1M tokens output. Cached reads are $0.20/1M tokens — a significant discount for repeated context. This makes Grok 4.3 the most cost-efficient option in the xAI family for single-agent, general-purpose tasks. The 37.5%/58.3% discount vs. Grok 4.20 Multi-Agent reflects a deliberate cost-tier separation within the xAI lineup. The cache-write multiplier is not specified in public sources.

**Specifics:**
- Input: $1.25 per 1M tokens. (Source: xAI official docs — corrected from prior $3.00 R1 error; Strike 1 resolved)
- Output: $2.50 per 1M tokens. (Source: xAI official docs — corrected from prior $9.00 R1 error)
- Cached read: $0.20 per 1M tokens. (Source: xAI official docs)
- Cache-write multiplier: not specified. ([UNKNOWN — would need official confirmation])
- Batch API: supported; discount not quantified. (Source: round-2-self-research.md section 3)
- 37.5% cheaper input vs. Grok 4.20 Multi-Agent. (Source: VentureBeat)
- 58.3% cheaper output vs. Grok 4.20 Multi-Agent. (Source: VentureBeat)
- TTS pricing — two tiers (Strike B inline patch):
  - Standalone simple tier (5 voices): $4.20/1M characters
  - Model-card baseline tier: $15.00/1M characters
  - Use $15/1M for conservative cost estimation; $4.20 only if routing to standalone-TTS endpoint explicitly.

**Compared to peers (sharpened by Dealbreaker):**
- vs. xai/grok-4-20-multi-agent: Grok 4.3 is the budget tier in the xAI family. Trade: 1M vs. 2M context, no multi-agent native loops, but 37–58% lower cost.
- vs. anthropic/claude-opus-4-7: Grok 4.3 is dramatically cheaper on both input and output. Route to Opus 4.7 only when verified computer-use or Anthropic-specific capabilities are required.

**Known limitations on this axis:**
- Batch discount percentage not publicly quantified — cannot estimate savings vs. synchronous pricing.
- Cache-write multiplier unknown — cannot calculate full caching cost for high-write workflows.
- TTS pricing tier confusion risk: $4.20 vs. $15 — always disambiguate the tier before cost modeling.

**Sources:**
- xAI official docs (pricing page)
- [VentureBeat — sibling price comparison](https://venturebeat.com)
- round-2-self-research.md section 3 (Operational)
- round-2-verdict.yaml Strike B (TTS pricing patch)
