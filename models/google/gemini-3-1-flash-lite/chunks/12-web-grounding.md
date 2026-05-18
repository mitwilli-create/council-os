---
provider: google
model: gemini-3-1-flash-lite
capability: web-grounding
chunk_id: 12-web-grounding
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: self_research
confidence: medium
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [web-grounding, google-search, citations, freshness, grounding]
related_chunks: [00-overview, 40-unique-strengths, 43-ideal-tasks]
related_models: [google/gemini-3-1-pro, google/gemini-3-flash]
peer_comparisons:
  - peer: openai/gpt-5-5-mini
    relation: stronger
    note: "Flash-Lite's native Google Search grounding is a differentiating capability vs GPT-5.5-mini for tasks requiring fresh, cited web data."
---

**Summary** — Gemini 3.1 Flash-Lite includes built-in Google Search grounding, returning citations in standard `[1]` format. This is an inherited capability from the broader Gemini 3.1 family and is a meaningful differentiator against non-Google models for tasks requiring real-time factual grounding. Confidence is medium because this claim is inferred from provider docs rather than directly documented for Flash-Lite specifically.

**Specifics:**
- Built-in Google Search grounding supported; citations returned in standard `[1]` reference format. Source: `[INFERRED FROM PROVIDER DOCS]`.
- Web grounding is shared architecture across Gemini 3.1 family (Pro, Flash, Flash-Lite).
- Example ideal task: Fact-checking news summaries against current events.
- Native Google Search grounding and Maps grounding are named differentiators vs GPT-5.5-mini, where the latter lacks native search-backed grounding at comparable cost.

**Compared to peers (sharpened by Dealbreaker):**
- vs. openai/gpt-5-5-mini: Flash-Lite is preferred when tasks require live search grounding; GPT-5.5-mini does not have equivalent native Google Search integration at this cost tier.
- vs. google/gemini-3-1-pro: No differentiation on grounding capability — Pro and Flash-Lite share the same Google Search grounding mechanism.

**Known limitations on this axis:**
- Source domain controls and freshness windows are not documented in detail for Flash-Lite specifically — treat as equivalent to Gemini 3.1 family defaults.
- This claim carries `confidence: medium` because it is inferred from provider docs rather than a direct Flash-Lite-specific confirmation.

**Sources:**
- round-2-self-research.md Section 2, web grounding entry (`[INFERRED FROM PROVIDER DOCS]`)
- round-2-verdict.yaml (no strike issued against grounding claim — accepted as inferred)
