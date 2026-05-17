---
provider: google
model: gemini-3-flash
capability: code-generation
chunk_id: 15-code-generation
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [codegen, swe-bench, coding, python, testing]
related_chunks:
  - 10-reasoning
  - 17-agentic-computer-use
  - 44-avoid-when
related_models:
  - anthropic/claude-opus-4-7
  - google/gemini-3-1-pro
peer_comparisons:
  - peer: anthropic/claude-opus-4-7
    relation: weaker
    note: "Opus 4.7 scores 87.6% on SWE-bench Verified vs Flash's ~78%; Flash is not recommended for complex codebase-wide refactoring"
  - peer: google/gemini-3-1-pro
    relation: comparable
    note: "Pro is preferred for highest-complexity coding tasks; Flash's ~78% SWE-bench is competitive for targeted code tasks at lower cost"
---

**Summary** — Gemini 3 Flash scores ~78% on SWE-bench Verified, making it competitive for targeted code generation, unit test writing, and isolated debugging tasks. It falls decisively behind Anthropic Claude Opus 4.7 (87.6%) on complex, codebase-wide refactoring. For coding tasks where the problem is well-scoped and isolated, Flash delivers near-Pro results at Flash pricing; for tasks requiring deep codebase reasoning across many files, route to Opus 4.7 or Gemini 3.1 Pro.

**Specifics:**
- SWE-bench Verified: ~78%. (Source: [BusinessAnalytics](https://businessanalytics.substack.com/p/google-achieves-78-coding-accuracy))
- Suitable for: generating unit tests for legacy modules, isolated sandbox code repair, single-file refactoring.
- Not suitable for: complex multi-file codebase refactoring requiring deep context integration.

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-opus-4-7: Opus 4.7 scores 87.6% SWE-bench Verified — a decisive 9.6-point gap. For production-grade codebase work, Opus 4.7 is the routing target. Flash's cost advantage (~6–8x cheaper) justifies using it for lower-complexity code tasks.
- vs. google/gemini-3-1-pro: Pro is preferred where coding tasks demand maximum reasoning depth. Flash is cost-appropriate for well-scoped code generation at scale.
- Note: GPT-5.5 was cited as a peer in round-2 self-research but is marked [INFERRED] — that comparison was flagged as a hedge-laundering strike in the R2 Dealbreaker and should not be treated as verified.

**Known limitations on this axis:**
- Complex codebase-wide refactoring is not a strong suit — 9.6-point gap behind Opus 4.7 on SWE-bench is material.
- GPT-5.5 peer comparison is inferred, not benchmark-confirmed (R2 Dealbreaker strike).

**Sources:**
- [BusinessAnalytics — Google 78% coding accuracy](https://businessanalytics.substack.com/p/google-achieves-78-coding-accuracy)
- round-2-self-research.md section 2 (Code Generation)
