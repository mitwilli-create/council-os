---
provider: google
model: gemini-3-flash
capability: overview
chunk_id: 00-overview
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [identity, positioning, google, flash, overview]
related_chunks:
  - 20-pricing
  - 40-unique-strengths
  - 21-latency-throughput
related_models:
  - google/gemini-3-1-pro
  - google/gemini-3-1-flash-lite
  - google/gemini-3-1-flash-live
peer_comparisons:
  - peer: google/gemini-3-1-pro
    relation: weaker
    note: "Pro outperforms Flash on GPQA (>92% vs 90.4%) and hardest reasoning bands; Flash is ~4–8x cheaper depending on context length"
  - peer: google/gemini-3-1-flash-lite
    relation: stronger
    note: "Flash-Lite is 50% cheaper but defaults to minimal thinking; Flash supports full 4-stage thinking_level ladder"
---

**Summary** — Gemini 3 Flash (`gemini-3-flash-preview`) is Google's flagship efficiency model for the Gemini 3 series, released December 17, 2025. Its official positioning is "Pro-level intelligence at the speed and pricing of Flash" — meaning it targets workloads that previously required Gemini 3.1 Pro quality but cannot absorb Pro-tier cost. It succeeds Gemini 2.5 Flash and sits between Flash-Lite (50% cheaper, minimal reasoning) and Gemini 3.1 Pro (4–8x more expensive, highest accuracy) in the Google model lineup.

**Specifics:**
- Official API model ID: `gemini-3-flash-preview`. (Source: `_official-gemini-3-api.md`)
- Developer: Google. Release date: December 17, 2025. (Source: [Simon Willison](https://simonwillison.net/2025/Dec/17/gemini-3-flash/))
- Predecessor: Gemini 2.5 Flash. (`_official-models-overview.md` line 26)
- Provider positioning: "Pro-level intelligence at the speed and pricing of Flash" and "Frontier-class performance at a fraction of typical costs." (`_official-gemini-3-api.md` line 67)
- Gemini 3 Pro (Preview) was deprecated and shut down March 9, 2026; replaced by Gemini 3.1 Pro family. (`_official-models-overview.md` line 14)

**Compared to peers (sharpened by Dealbreaker):**
- vs. google/gemini-3-1-pro: Flash is 4x cheaper at contexts <200k, 6–8x cheaper at >200k. Pro is the choice for GPQA >92% or ARC-AGI-2 tasks; Flash wins on vision (MMMU-Pro) and any task needing `thinking_level: minimal`.
- vs. google/gemini-3-1-flash-lite: Flash-Lite costs 50% less ($0.25/$1.50 per 1M tokens vs. Flash's $0.50/$3.00) but defaults to minimal thinking only. Flash is the routing target when 4-stage `thinking_level` control matters.
- vs. google/gemini-3-1-flash-live: Flash Live handles real-time bidirectional audio (<400ms). Gemini 3 Flash is a text/multimodal batch and interactive model only.

**Known limitations on this axis:**
- Sibling Gemini 3 Pro (Preview) was deprecated March 9, 2026; Gemini 3 Flash itself carries low deprecation risk as the current flagship efficiency model.
- MCP support status is unverified as of research round 2.

**Sources:**
- [Simon Willison — Gemini 3 Flash release note](https://simonwillison.net/2025/Dec/17/gemini-3-flash/)
- [Google Blog](https://blog.google/products-and-platforms/products/gemini/gemini-3-flash/)
- `_official-gemini-3-api.md`
- `_official-models-overview.md`
