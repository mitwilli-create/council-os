---
provider: google
model: gemini-3-1-flash-lite
capability: code-generation
chunk_id: 15-code-generation
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: self_research
confidence: medium
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [code-generation, boilerplate, unit-tests, refactoring, swe-bench]
related_chunks: [10-reasoning, 41-known-limitations, 44-avoid-when]
related_models: [google/gemini-3-1-pro, google/gemini-3-flash]
peer_comparisons:
  - peer: google/gemini-3-1-pro
    relation: weaker
    note: "SWE-bench performance is lower than Gemini 3.1 Pro; use Pro for complex code synthesis and debugging."
---

**Summary** — Gemini 3.1 Flash-Lite handles standard code generation tasks well — boilerplate, unit tests, minor refactoring. Its SWE-bench score is lower than Gemini 3.1 Pro (exact score unknown, marked [UNKNOWN] in the profile), and it does not have access to the advanced code-sandbox execution environment available in the Pro tier. Confidence is medium because no specific SWE-bench number was sourced for Flash-Lite.

**Specifics:**
- Capable of standard boilerplate code generation, unit test writing, and minor refactoring tasks.
- SWE-bench score: `[UNKNOWN — would need a benchmark]`. Known directional fact: lower than Gemini 3.1 Pro. Source: round-2-self-research.md Section 2 line 29.
- Does NOT support the advanced code-sandbox execution environment available in the Pro tier. Source: round-2-self-research.md Section 6 line 78.
- Languages supported: shares the Gemini 3.1 family's broad language support (Python, JavaScript/TypeScript, Go, Java, etc.) — no Flash-Lite-specific restrictions documented.

**Compared to peers (sharpened by Dealbreaker):**
- vs. google/gemini-3-1-pro: Pro preferred for sophisticated code synthesis, architecture-level code decisions, and complex SWE-bench-class bug fixing. Flash-Lite is the cost-effective option for high-volume boilerplate and unit test generation.
- vs. anthropic/claude-3-5-sonnet: Claude preferred for high-precision instruction-following in code; Flash-Lite wins on cost for volume code tasks with simple specs.

**Known limitations on this axis:**
- No code-sandbox execution (sandboxed code running) — Pro-tier exclusive feature.
- Complex mathematical algorithms and multi-step code logic degrade at `thinking_level: minimal`; upgrading thinking level partially recovers quality.
- SWE-bench score unverified — directional claim only.

**Sources:**
- round-2-self-research.md Section 2, code generation entry
- round-2-verdict.yaml (strike S2.3: SWE-bench unsourced — correctly hedged with `[UNKNOWN]`)
