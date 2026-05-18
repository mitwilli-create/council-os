---
provider: google
model: gemini-3-1-flash-lite
capability: context-window
chunk_id: 26-context-window
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [context-window, 1m-token, output-cap, token-capacity]
related_chunks: [16-long-context, 20-pricing]
related_models: [google/gemini-3-1-pro, google/gemini-3-flash]
peer_comparisons:
  - peer: google/gemini-3-1-pro
    relation: comparable
    note: "Both models share the 1M token input window with 64k output cap — no differentiation on raw token capacity."
---

**Summary** — Gemini 3.1 Flash-Lite has a 1M token context window with a 64k token output cap. These figures are verified against official Google API documentation and are shared across the Gemini 3.1 family.

**Specifics:**
- Context window: 1,000,000 tokens (1M). Source: `_official-gemini-3-api.md`.
- Output cap: 64,000 tokens (64k). Source: `_official-gemini-3-api.md line 74`.
- At $0.25/1M input tokens, loading near the full 1M token window costs $0.25 in input tokens alone — still the cheapest in the Gemini 3.1 family for long-context workloads.
- Prompt caching reduces repeated long-context costs by 90% on cache reads (auto-on for paid projects).

**Compared to peers (sharpened by Dealbreaker):**
- vs. google/gemini-3-1-pro: Equivalent 1M/64k limits. No differentiation on raw window size.
- vs. google/gemini-3-flash: Equivalent 1M/64k limits. Flash-Lite preferred for long-context workloads where cost is the primary constraint.

**Known limitations on this axis:**
- 64k output cap is a hard limit regardless of input size — tasks requiring very long generated outputs must plan accordingly.
- High-density precision recall at the extremes of the 1M window is weaker than Pro (see 16-long-context).

**Sources:**
- `_official-gemini-3-api.md` (1M context window)
- `_official-gemini-3-api.md line 74` (64k output cap)
- round-2-verdict.yaml (spot check S3.2: output cap verified)
