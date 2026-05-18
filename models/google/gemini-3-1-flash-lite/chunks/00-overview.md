---
provider: google
model: gemini-3-1-flash-lite
capability: overview
chunk_id: 00-overview
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [overview, identity, positioning, multimodal, gemini]
related_chunks: [20-pricing, 40-unique-strengths, 43-ideal-tasks, 44-avoid-when]
related_models: [google/gemini-3-1-pro, google/gemini-3-flash]
peer_comparisons:
  - peer: google/gemini-3-1-pro
    relation: weaker
    note: "Flash-Lite is the cost-floor entry tier; Pro is 8× more expensive and reaches deeper reasoning."
  - peer: google/gemini-3-flash
    relation: weaker
    note: "Flash-Lite is 2× cheaper than Gemini 3 Flash; defaults to minimal thinking vs Flash's broader thinking-level range."
---

**Summary** — Gemini 3.1 Flash-Lite is Google's most cost-optimized, low-latency multimodal model in the Gemini 3.1 family, positioned as the entry-level tier designed for high-throughput, latency-sensitive, cost-sensitive workloads. It is not a stripped-down model; it shares the same multimodal ingestion architecture as Pro and Flash siblings, but defaults to `thinking_level: minimal` to deliver the lowest possible per-token cost and latency.

**Specifics:**
- Official API model IDs: `gemini-3.1-flash-lite` (stable), `gemini-3.1-flash-lite-preview` (preview). Source: `_official-gemini-3-api.md`.
- Released in preview March 3, 2026. Source: Google Blog Announcement + AIMLAPI.
- Predecessor: Gemini 2.5 Flash-Lite (deprecated). Source: `_official-models-overview.md line 35`.
- Built by Google. Available via Vertex AI and Google AI Studio.
- Provider positioning: entry-level tier of Gemini 3.1 family — cost-per-token and speed over deep reasoning capacity.

**Compared to peers (sharpened by Dealbreaker):**
- vs. google/gemini-3-1-pro: 8× cheaper at <200k token ranges; route to Pro for complex multi-step reasoning, high-accuracy code synthesis, or high `thinking_level` tasks.
- vs. google/gemini-3-flash: 2× cheaper; Flash-Lite is the floor for simple extraction; Flash handles `thinking_level: medium/high` tasks.
- vs. openai/gpt-5-5-mini: Comparable cost tier (exact crossover unverified — see 20-pricing); Flash-Lite preferred when native Google Search/Maps grounding or multi-modal audio/video ingestion required.

**Known limitations on this axis:**
- Deprecation risk is low — Flash-Lite is the foundational cost-sensitive tier with no announced successor.
- GPQA-Diamond benchmark: 86.9% vs Pro's 94.3% — a real capability gap on complex reasoning tasks.

**Sources:**
- `_official-gemini-3-api.md` (API IDs, context window, pricing)
- `_official-models-overview.md` (predecessor, family positioning)
- Google Blog Announcement (release date)
- round-2-self-research.md + round-2-verdict.yaml (dealbreaker convergence, 13/13 spot checks passed)
