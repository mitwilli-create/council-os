---
provider: google
model: gemini-3-flash
capability: known-limitations
chunk_id: 41-known-limitations
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [limitations, failure-modes, thought-signatures, temperature, long-context-latency]
related_chunks:
  - 11-tool-use
  - 10-reasoning
  - 44-avoid-when
  - 21-latency-throughput
related_models:
  - google/gemini-3-1-pro
  - anthropic/claude-opus-4-7
peer_comparisons:
  - peer: anthropic/claude-opus-4-7
    relation: weaker
    note: "Opus 4.7 does not have a Thought Signature requirement or temperature loop risk; Flash's operational complexity is higher"
---

**Summary** — Gemini 3 Flash has four documented failure modes that are distinct from most other models in its class. The most operationally critical is the mandatory Thought Signature requirement for all function calling — omissions produce hard 400 errors. A second critical operational constraint is the temperature setting: Google strongly recommends keeping temperature at 1.0; values below 1.0 (especially 0.0) produce repetitive loops or degraded logic on reasoning tasks. Additional limitations include long-context TTFT degradation and over-refusal on PII/medical tasks.

**Specifics:**
- **Thought Signature 400 errors:** All Function Calling and Image Generation requests MUST include and round-trip Thought Signatures. Failure returns a 400 error — even at `thinking_level: minimal`. This is the most common production failure mode. (`_official-gemini-3-api.md` lines 178–180)
- **Temperature loops:** Setting temperature to 0.0 (common for "determinism") causes repetitive looping or degraded logic on complex reasoning tasks. Google requires temperature = 1.0. (`_official-gemini-3-api.md` line 172)
- **Long-context TTFT degradation:** TTFT increases significantly as the 1M context window fills. Not appropriate for real-time use cases at long contexts. (Source: round-2-self-research.md section 6)
- **Over-refusal:** Known to over-refuse on requests involving real-time PII or medical diagnosis [INFERRED — survived Dealbreaker only as a caveat]. (Source: round-2-self-research.md section 6)
- **SDK output truncation:** Default `maxOutputTokens` in many SDKs is 8,192 — silently truncates long outputs unless explicitly set to 65,536. (Source: round-2-self-research.md section 3)

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-opus-4-7: Opus 4.7 does not have Thought Signature requirements or temperature-sensitivity failure modes. Flash's operational overhead is higher for tool-calling pipelines.
- vs. google/gemini-3-1-pro: Pro shares the Thought Signature requirement and temperature constraint — Flash is not uniquely limited here relative to its sibling.

**Known limitations on this axis:**
- Over-refusal on PII/medical is inferred (not benchmark-confirmed) — treat as a watch item, not a verified hard constraint.
- Temperature loop risk may be mitigated by keeping temperature at exactly 1.0 as documented.

**Sources:**
- `_official-gemini-3-api.md` lines 172, 178–180
- round-2-self-research.md sections 3 and 6
