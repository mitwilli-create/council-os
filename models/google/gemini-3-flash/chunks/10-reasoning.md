---
provider: google
model: gemini-3-flash
capability: reasoning
chunk_id: 10-reasoning
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [reasoning, chain-of-thought, thinking-level, gpqa, benchmarks]
related_chunks:
  - 11-tool-use
  - 17-agentic-computer-use
  - 40-unique-strengths
  - 41-known-limitations
related_models:
  - google/gemini-3-1-pro
  - anthropic/claude-opus-4-7
peer_comparisons:
  - peer: google/gemini-3-1-pro
    relation: weaker
    note: "Pro exceeds 92% GPQA-Diamond vs Flash's ~90.4%; Pro is preferred for FrontierMath and ARC-AGI-2 tasks"
  - peer: anthropic/claude-opus-4-7
    relation: weaker
    note: "Opus 4.7 beats Flash on complex reasoning-intensive coding (SWE-bench 87.6% vs 78%)"
---

**Summary** — Gemini 3 Flash supports native chain-of-thought reasoning via a `thinking_level` parameter with four discrete levels: `minimal`, `low`, `medium`, and `high`. Its granular 4-stage ladder is a differentiated capability within the Flash-tier — Gemini 3.1 Flash-Lite defaults to `minimal` only, while Gemini 3 Flash uniquely exposes all four levels including `minimal` for speed-constrained agentic loops. Benchmark performance is strong (~90.4% GPQA-Diamond) but falls short of Gemini 3.1 Pro on the hardest reasoning bands.

**Specifics:**
- `thinking_level` parameter supports: `minimal`, `low`, `medium`, `high`. (`_official-thinking.md` lines 77–84)
- Gemini 3 Flash uniquely supports `thinking_level: minimal`; Gemini 3.1 Pro does NOT support the `minimal` level. (`_official-thinking.md` lines 77–84)
- GPQA-Diamond benchmark: ~90.4%. (Source: [Vellum Benchmarks](https://www.vellum.ai/blog/google-gemini-3-benchmarks))
- Outperformed by Gemini 3.1 Pro on FrontierMath and ARC-AGI-2 [INFERRED — not benchmark-confirmed in research round 2].

**Compared to peers (sharpened by Dealbreaker):**
- vs. google/gemini-3-1-pro: Pro exceeds 92% GPQA-Diamond; route to Pro for tasks where accuracy on hard math or science is non-negotiable. Flash is the preferred routing target when `thinking_level: minimal` is needed for speed.
- vs. anthropic/claude-opus-4-7: Opus 4.7 outperforms Flash on complex, codebase-wide reasoning tasks (SWE-bench Verified 87.6% vs. Flash's 78%).

**Known limitations on this axis:**
- The `minimal` thinking level uniqueness claim has a precision nit (R2 strike): Gemini 3.1 Flash-Lite also defaults to minimal thinking, making Flash not strictly unique — it is unique in supporting the full 4-stage ladder including `minimal` as a selectable option.
- Temperature MUST be set to 1.0; values below 1.0 (especially 0.0) cause repetitive looping or degraded logic on reasoning tasks. (`_official-gemini-3-api.md` line 172)
- Hard reasoning ceiling: FrontierMath and ARC-AGI-2 performance lags behind Gemini 3.1 Pro [INFERRED].

**Sources:**
- [Vellum Benchmarks — Google Gemini 3](https://www.vellum.ai/blog/google-gemini-3-benchmarks)
- [Google Blog](https://blog.google/products-and-platforms/products/gemini/gemini-3-flash/)
- `_official-thinking.md`
- `_official-gemini-3-api.md`
