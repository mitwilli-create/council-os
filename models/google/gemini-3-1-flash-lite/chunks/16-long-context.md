---
provider: google
model: gemini-3-1-flash-lite
capability: long-context
chunk_id: 16-long-context
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [long-context, context-window, needle-in-haystack, recall, 1m-token]
related_chunks: [26-context-window, 41-known-limitations, 44-avoid-when]
related_models: [google/gemini-3-1-pro, google/gemini-3-flash]
peer_comparisons:
  - peer: google/gemini-3-1-pro
    relation: weaker
    note: "High-density needle-in-a-haystack retrieval is generally more robust in Pro; use Pro for precision recall tasks in very long documents."
---

**Summary** — Gemini 3.1 Flash-Lite has a 1M token context window with a 64k output cap. Recall quality is competitive across the context window, though high-density "needle-in-a-haystack" retrieval is generally more robust in Gemini 3.1 Pro. The prior R1 overclaim that Flash-Lite had high hallucination rates in long-context was struck and removed — the R2 profile carries a properly hedged, bounded claim.

**Specifics:**
- Context window: 1M tokens. Source: `_official-gemini-3-api.md`.
- Output cap: 64k tokens. Source: `_official-gemini-3-api.md line 74`.
- Recall quality is competitive across the context window; high-density needle-in-a-haystack retrieval is "generally more robust in Pro models" (hedged directional claim). Source: round-2-self-research.md Section 2 line 30.
- Prior R1 overclaim ("high hallucination in long context") was struck and removed at Dealbreaker; replaced with the bounded hedged claim above. Source: round-2-verdict.yaml strike S2.4 + S6.2.

**Compared to peers (sharpened by Dealbreaker):**
- vs. google/gemini-3-1-pro: Pro is preferred for precision retrieval tasks in documents requiring exact needle-in-a-haystack recall. For bulk summarization or extraction tasks where approximate recall is acceptable, Flash-Lite's 8× cost savings at 1M token scale are material.
- vs. google/gemini-3-flash: Both share 1M token window; Flash-Lite is preferred for cost-sensitive long-context summarization; Flash for tasks needing higher reasoning depth over long docs.

**Known limitations on this axis:**
- High-density precision recall at the extremes of the 1M token window is weaker than Pro — avoid Flash-Lite for "find the exact clause in a 1M token legal corpus" style queries.
- 64k output cap applies regardless of input length.

**Sources:**
- `_official-gemini-3-api.md` (1M context window, 64k output cap)
- round-2-self-research.md Section 2 line 30 (hedged recall claim)
- round-2-verdict.yaml (strikes S2.4 + S6.2: overclaims struck and corrected)
