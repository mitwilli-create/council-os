---
provider: openai
model: gpt-5-5
capability: structured-output
chunk_id: 18-structured-output
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: medium
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [structured-output, json-mode, schema-enforcement, grammar-constraints]
related_chunks: [11-tool-use, 15-code-generation]
related_models:
  - anthropic/claude-opus-4-7
peer_comparisons:
  - peer: anthropic/claude-opus-4-7
    relation: comparable
    note: "Both support schema-constrained JSON output; no named structured-output benchmark comparison in research materials"
---

**Summary** — GPT-5.5 supports JSON mode, schema-constrained structured outputs, tool-call schemas, and grammar/format constraints through OpenAI's structured output APIs. OpenAI's prompt guidance for GPT-5.5 covers structured outputs as a documented capability.

**Specifics:**
- **JSON mode:** supported.
- **Schema-constrained outputs:** supported via OpenAI structured outputs API (https://platform.openai.com/docs/guides/structured-outputs).
- **Tool-call schemas:** supported through Responses API function definitions.
- **Grammar/format constraints:** supported at the API level.
- **Prompting style note:** GPT-5.5 prefers shorter, outcome-first prompts; do not carry over GPT-5.4-style heavy XML schema contracts without testing.

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-opus-4-7: Both are schema-constrained JSON-capable frontier models. No named structured-output benchmark comparison is present in Round 2 materials.

**Known limitations on this axis:**
- Complex schemas can still fail if the schema is contradictory, too deeply nested, or conflicts with natural-language instructions.
- May satisfy JSON syntax while failing semantic constraints — server-side validation remains necessary.

**Sources:**
- [OpenAI: Structured Outputs](https://platform.openai.com/docs/guides/structured-outputs)
- OpenAI _official-prompt-guidance.md (Dealbreaker-cited)
