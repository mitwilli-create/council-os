---
provider: google
model: gemini-3-1-flash-lite
capability: known-limitations
chunk_id: 41-known-limitations
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [limitations, failure-modes, 400-errors, refusal, degradation]
related_chunks: [10-reasoning, 17-agentic-computer-use, 44-avoid-when]
related_models: [google/gemini-3-1-pro, google/gemini-3-flash]
peer_comparisons:
  - peer: google/gemini-3-1-pro
    relation: weaker
    note: "GPQA-Diamond 86.9% vs Pro 94.3% — 7.4-point gap on complex reasoning benchmarks."
---

**Summary** — Gemini 3.1 Flash-Lite's known limitations fall into three categories: (1) reasoning depth — measurably weaker than Pro on complex tasks; (2) API operational gotchas — three specific 400-error patterns that require defensive coding; (3) refusal patterns — over-refuses on sensitive public figures and speculative legal advice. No Computer Use capability.

**Specifics:**
- **Reasoning depth:** GPQA-Diamond 86.9% vs Gemini 3.1 Pro 94.3% — a real 7.4-point gap. Complex mathematical reasoning degrades when `thinking_level: minimal` is held fixed. Source: Google Blog + round-2-verdict.yaml H2.
- **API 400-error gotchas (from official docs):**
  - `thought_signature` mismatch: can surface in extended sessions with thinking enabled. Source: `_official-gemini-3-api.md line 125`.
  - `thinkingLevel` + `thinkingBudget` mutual exclusion: passing both parameters triggers a 400. Source: `_official-gemini-3-api.md line 172`.
  - Temperature looping: certain temperature values combined with thinking modes cause looping errors. Source: `_official-gemini-3-api.md lines 178, 180`.
- **Refusal patterns:** Over-refuses on queries involving sensitive public figures or speculative legal advice. Source: round-2-self-research.md Section 6 (narrowed from R1 overclaim of "medical/legal"; see verdict S6.1).
- **No Computer Use:** Native OS-level browser/desktop control is exclusive to Gemini 3 Pro and Flash. Source: `_official-gemini-3-api.md line 308`.
- **No advanced code sandbox:** Code-sandbox execution environment is Pro-tier exclusive. Source: round-2-self-research.md Section 6 line 78.
- **SWE-bench unknown:** Lower than Pro directionally; exact score `[UNKNOWN]`. Source: round-2-self-research.md Section 2 line 29.

**Known limitations on this axis:**
- The R1 overclaim of "high hallucination in long-context" was struck and removed — not a documented limitation. Source: round-2-verdict.yaml strike S6.2.
- Rate limits are tier-dependent and not fixed — cannot provide hard RPM/TPM figures. Source: verdict S3.4.

**Sources:**
- `_official-gemini-3-api.md lines 125, 172, 178, 180` (400-error gotchas)
- `_official-gemini-3-api.md line 308` (Computer Use exclusion)
- Google Blog Announcement (GPQA 86.9%)
- round-2-verdict.yaml (strikes S2.1, S2.4, S6.1, S6.2, S6.3 — all corrected in R2)
