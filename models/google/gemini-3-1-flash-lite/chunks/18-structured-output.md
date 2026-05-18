---
provider: google
model: gemini-3-1-flash-lite
capability: structured-output
chunk_id: 18-structured-output
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [structured-output, json-mode, schema-enforcement, extraction, batch]
related_chunks: [11-tool-use, 43-ideal-tasks, 40-unique-strengths]
related_models: [google/gemini-3-1-pro, google/gemini-3-flash]
peer_comparisons:
  - peer: google/gemini-3-1-pro
    relation: comparable
    note: "Equivalent JSON mode + schema enforcement; Flash-Lite wins on cost for high-volume extraction jobs."
---

**Summary** — Gemini 3.1 Flash-Lite supports strict JSON mode and schema enforcement. This, combined with its cost advantage and parallel tool call support, makes it purpose-built for high-volume structured extraction pipelines — the canonical use case where paying 8× more for Pro provides no marginal accuracy benefit over well-specified JSON schemas.

**Specifics:**
- Strict JSON mode supported. Source: round-2-self-research.md Section 2 line 33.
- Schema enforcement supported (grammar constraints on output format).
- Example ideal task: High-volume JSON extraction from unstructured text (e.g., extracting structured fields from thousands of invoices, log entries, or support tickets).
- At $0.25/$1.50 per 1M tokens, Flash-Lite is the cost-efficient default for any pipeline where output format is fully specified by a schema.

**Compared to peers (sharpened by Dealbreaker):**
- vs. google/gemini-3-1-pro: Equivalent JSON/schema capability at 8× lower cost; Pro adds no value for structured extraction when the schema is well-defined.
- vs. google/gemini-3-flash: Equivalent capability at 2× lower cost; Flash-Lite is the preferred default for structured extraction.
- vs. openai/gpt-5-5-mini: Comparable structured output capability; Flash-Lite preferred when Google Search grounding or multimodal inputs are part of the extraction pipeline.

**Known limitations on this axis:**
- No documented limitations specific to JSON/schema enforcement for Flash-Lite; capability is shared architecture.
- For tasks where schema compliance requires complex reasoning to determine field values (not just extraction), `thinking_level: minimal` may reduce accuracy — upgrade to `low` or `medium` for schema-with-inference tasks.

**Sources:**
- round-2-self-research.md Section 2 line 33 (JSON mode + schema enforcement)
- round-2-verdict.yaml (convergence confirmed; no strikes on structured output)
