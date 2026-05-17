---
provider: google
model: gemini-3-flash
capability: web-grounding
chunk_id: 12-web-grounding
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: self_research
confidence: low
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [web-grounding, search, citations, freshness]
related_chunks:
  - 11-tool-use
  - 00-overview
related_models:
  - google/gemini-3-1-pro
peer_comparisons: []
---

**Summary** — Not documented in the converged round-2 profile. Gemini 3 Flash is a Google-family model and may support Google Search grounding via Gemini Extensions (Workspace, Search, YouTube are listed as first-party integrations), but specific web-grounding behavior, citation format, source-domain controls, and freshness characteristics for `gemini-3-flash-preview` are not confirmed in research round 2. Treat as unknown until verified.

**Specifics:**
- First-party integrations listed include Gemini Extensions with Search. (Source: round-2-self-research.md section 4)
- Knowledge cutoff is January 2025; grounding may extend effective freshness if supported. (Source: `_official-gemini-3-api.md` line 78)
- No benchmark or behavioral data for web-grounded search was present in the converged profile.

**Compared to peers (sharpened by Dealbreaker):**
- No verified peer comparisons for this axis in round-2 profile.

**Known limitations on this axis:**
- Web-grounding capability, citation behavior, and source controls are unconfirmed for this model version.
- Knowledge cutoff is January 2025 without grounding.

**Sources:**
- round-2-self-research.md section 4 (Integrations)
