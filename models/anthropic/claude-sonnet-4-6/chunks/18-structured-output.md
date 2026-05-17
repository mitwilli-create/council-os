---
provider: anthropic
model: claude-sonnet-4-6
capability: structured-output
chunk_id: 18-structured-output
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 5
egoism_strikes_at_convergence: 5
tags: [json, schema-enforcement, grammar-constraints, strict-mode, structured]
related_chunks: [11-tool-use, 18-structured-output, 41-known-limitations]
related_models: [anthropic/claude-opus-4-7]
peer_comparisons:
  - peer: anthropic/claude-opus-4-7
    relation: comparable
    note: "Both support strict tool use and JSON output modes with compiled grammar constraints. Sonnet 4.6 minimum cache prefix (1,024 tokens) enables short-prompt structured-output batches to cache; Opus 4.7 minimum (4,096) cannot."
---

**Summary** — Sonnet 4.6 supports strict tool use (`strict: true`) and JSON outputs (`output_config.format`), both of which compile JSON schemas into grammar that constrains generation. Compiled grammars cache for 24 hours from last use, separate from prompt caching. The key operational details: grammar 24h expiry creates a latency hit after idle periods, and complex schemas with optional parameters or union types can fail to compile.

**Specifics:**
- Strict tool use: `strict: true` on tool definitions compiles the JSON schema into grammar that constrains generation token-by-token.
- JSON output mode: `output_config.format` similarly enforces schema constraints.
- Compiled grammar cache: **24 hours from last use**. An agent idle for >24h pays grammar-compile latency hit on the next call. Plan maintenance windows accordingly.
- Deferred tool loading (`defer_loading`) does not break grammar construction — strict mode applies to the full toolset regardless of which tools are deferred. ([Official tool-use caching docs](https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-use-with-prompt-caching))
- Concrete use case: generating structured job evaluation reports conforming to a 12-field schema across 100 batch items, with consistent field types.
- Grammar cache is separate from prompt cache — both can be active simultaneously.

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-opus-4-7: Both models share the same strict mode and grammar-constraint infrastructure. Minimum cache prefix difference creates a Sonnet 4.6 advantage on short-prompt structured-output batches: prompts 1,024–4,095 tokens can cache on Sonnet 4.6 but silently receive no-cache on Opus 4.7. For high-volume structured-output pipelines with short prompts, Sonnet 4.6 cuts per-call cost to $0.30/MTok on the cached prefix.

**Known limitations on this axis:**
- Complex schemas with optional parameters, union types, or deep nesting interact non-linearly with grammar size and can refuse to compile. Operators must implement validation loops for complex schema workloads.
- Grammar 24h expiry: silent latency hit after idle periods. No API warning — operators must track grammar compile latency to detect expiry.
- 4-breakpoint ceiling applies when combining strict mode with explicit cache breakpoints in long agent loops.

**Sources:**
- [Official tool-use caching docs](https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-use-with-prompt-caching)
- `_official-prompt-caching.md` (grammar cache 24h expiry and strict mode behavior)
