---
provider: xai
model: grok-4-3
capability: structured-output
chunk_id: 18-structured-output
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: self_research
confidence: medium
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [structured-output, json-mode, schema, grammar]
related_chunks:
  - 11-tool-use
  - 10-reasoning
related_models:
  - anthropic/claude-opus-4-7
peer_comparisons:
  - peer: anthropic/claude-opus-4-7
    relation: comparable
    note: "Both support JSON mode and schema enforcement; grammar constraints undocumented for Grok 4.3 as they are for Opus 4.7 at this level of detail"
---

**Summary** — Grok 4.3 supports JSON mode and schema enforcement for structured API responses per xAI developer docs. Grammar constraints (GBNF or equivalent) are not documented in public sources. This is standard structured-output capability, on par with peers at the same capability tier.

**Specifics:**
- JSON mode: supported. (Source: xAI developer docs)
- Schema enforcement: supported. (Source: xAI developer docs)
- Grammar constraints (GBNF, CFG, or similar): undocumented. ([UNKNOWN — would need official confirmation])
- Primary use case: API response formatting, pipeline data extraction, structured report generation. (Source: round-2-self-research.md section 2)

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-opus-4-7: Comparable — both support JSON mode and schema enforcement. Neither has publicly documented grammar constraint API.

**Known limitations on this axis:**
- Grammar constraints undocumented; complex constrained generation patterns may require prompting-level workarounds.

**Sources:**
- xAI developer docs (structured output)
- round-2-self-research.md section 2 (Structured output)
