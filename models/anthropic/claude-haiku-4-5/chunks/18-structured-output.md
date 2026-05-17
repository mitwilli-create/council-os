---
provider: anthropic
model: claude-haiku-4-5
capability: structured-output
chunk_id: 18-structured-output
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: self_research
confidence: medium
sycophancy_strikes_at_convergence: 5
egoism_strikes_at_convergence: 0
tags: [structured-output, json-mode, schema-enforcement, batch-processing]
related_chunks: [11-tool-use, 15-code-generation, 43-ideal-tasks]
related_models:
  - anthropic/claude-sonnet-4-6
peer_comparisons:
  - peer: anthropic/claude-sonnet-4-6
    relation: comparable
    note: "Both support tool-use-based JSON enforcement; Haiku preferred for high-volume structured extraction at scale due to cost advantage."
---

**Summary** — Claude Haiku 4.5 supports structured output via Anthropic's tool-use mechanism: JSON schema enforcement is achieved by defining a tool with the desired output schema and prompting the model to call it. This pattern is well-suited for high-volume batch extraction, classification, and transformation tasks where Haiku's cost advantage compounds across thousands of items.

**Specifics:**
- JSON mode: supported via tool-use schema enforcement (Anthropic standard pattern across Claude 4 family)
- Schema enforcement: tool definition enforces output shape; model outputs conform to JSON schema in tool_use blocks
- Grammar constraints: not documented as a separate feature for Haiku 4.5 in R2 profile
- Batch structured output: combine tool-use JSON schema with 50% Batch API discount for maximum cost efficiency on large extraction pipelines
- Extended thinking + structured output: supported; enables deliberate reasoning before producing structured JSON (useful for classification tasks with ambiguous categories)

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-sonnet-4-6: comparable schema enforcement; Haiku preferred for high-volume bounded extraction (triage scoring, entity extraction, classification) where throughput and cost matter more than single-pass quality ceiling
- vs. other providers: Anthropic's tool-use schema enforcement is reliable; grammar-constraint approaches (e.g., outlines/LMQL-style) not documented for Haiku 4.5

**Known limitations on this axis:**
- Native JSON mode (without tool-use wrapper) not separately documented for Haiku 4.5; test before relying on prompt-only JSON enforcement in production
- Grammar constraints or constrained decoding not confirmed as a feature

**Sources:**
- [Anthropic tool use docs](https://docs.anthropic.com/en/docs/build-with-claude/tool-use)
- [Anthropic Claude Haiku 4.5 announcement](https://www.anthropic.com/news/claude-haiku-4-5)
