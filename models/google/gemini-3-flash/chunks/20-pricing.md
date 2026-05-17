---
provider: google
model: gemini-3-flash
capability: pricing
chunk_id: 20-pricing
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [pricing, cost, batch-api, prompt-caching, value-per-dollar]
related_chunks:
  - 21-latency-throughput
  - 40-unique-strengths
  - 26-context-window
related_models:
  - google/gemini-3-1-pro
  - google/gemini-3-1-flash-lite
peer_comparisons:
  - peer: google/gemini-3-1-pro
    relation: stronger
    note: "Flash is ~4x cheaper input/output at contexts <200k; 8x/6x cheaper at contexts >200k — same output quality on vision and thinking_level:minimal tasks"
  - peer: google/gemini-3-1-flash-lite
    relation: weaker
    note: "Flash-Lite costs 50% less ($0.25/$1.50 per 1M tokens); Flash is justified when 4-stage thinking_level or MMMU-Pro vision quality is required"
---

**Summary** — Gemini 3 Flash is priced at $0.50/1M input tokens and $3.00/1M output tokens — positioning it as a Pro-quality model at a Flash-tier price. Against its primary sibling Gemini 3.1 Pro, Flash is 4x cheaper at short contexts and 6–8x cheaper at contexts above 200k. Batch API delivers an additional 50% cost reduction; prompt caching is supported with an estimated ~90% discount on cached reads. This cost structure is the central argument for Flash: it delivers ~90.4% GPQA and top-tier vision at a fraction of Pro cost.

**Specifics:**
- Input: $0.50/1M tokens. Output: $3.00/1M tokens. (Source: `_official-gemini-3-api.md` line 78)
- Batch API supported: 50% cost discount. (Source: round-2-self-research.md section 3)
- Prompt caching supported. Estimated cached read price: ~$0.05/1M (~90% discount on input) [INFERRED — per peer standards, not officially confirmed]. (Source: round-2-self-research.md section 3)
- vs. Gemini 3.1 Pro: Pro is 4x more expensive for input/output at contexts <200k; 8x/6x more expensive at contexts >200k. (Source: round-2-self-research.md section 5)
- vs. Gemini 3.1 Flash-Lite: Flash-Lite costs $0.25/$1.50 per 1M tokens — 50% less than Flash. (Source: round-2-self-research.md section 5)
- Crossover rule: Route to Pro only when GPQA >92% or ARC-AGI-2 precision is required. Stay on Flash for vision (MMMU-Pro) and `thinking_level: minimal` speed tasks.
- Crossover rule: Route to Flash-Lite for high-throughput simple classification or extraction where 4-stage thinking control is not needed.

**Compared to peers (sharpened by Dealbreaker):**
- vs. google/gemini-3-1-pro: The cost differential is the defining routing signal. Flash delivers ~90.4% GPQA and the best MMMU-Pro score in the Google family at 4–8x lower cost. The only reason to pay for Pro is when the hardest reasoning bands (>92% GPQA, FrontierMath, ARC-AGI-2) are required.
- vs. google/gemini-3-1-flash-lite: Flash-Lite is the lower-cost option for simple tasks; Flash is justified when reasoning depth or vision quality steps up to warrant the 2x price premium over Flash-Lite.

**Known limitations on this axis:**
- Prompt caching discount rate is inferred (~90%), not officially documented for this model version.
- Batch API pricing and SLA are confirmed as supported but SLA specifics are not detailed in the profile.

**Sources:**
- `_official-gemini-3-api.md` line 78
- round-2-self-research.md sections 3 and 5
