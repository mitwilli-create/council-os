---
provider: anthropic
model: claude-opus-4-7
capability: structured-output
chunk_id: 18-structured-output
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [json, structured-output, schema, grammar, strict-tool-use, cache]
related_chunks: [11-tool-use, 41-known-limitations, 26-context-window]
related_models: [openai/gpt-5-5, google/gemini-3-1-pro]
peer_comparisons:
  - peer: openai/gpt-5-5
    relation: comparable
    note: "Both support JSON schema enforcement with grammar compilation; no direct benchmark comparison available in round-2 verified sources for structured output quality."
  - peer: google/gemini-3-1-pro
    relation: comparable
    note: "Both support structured output / JSON mode; no direct benchmark comparison available in round-2 verified sources."
---

**Summary** — Claude Opus 4.7 supports both JSON output mode (`output_config.format`) and strict tool use (`strict: true`) as generally-available features. JSON schemas are compiled into a grammar that constrains generation token-by-token, and compiled grammars are cached for 24 hours from last use. The features can be combined in one request. Key operational hazard: complex schemas with optional parameters, union types, or large tool counts can hit grammar-complexity caps and be refused, and grammars that go unused for >24 hours incur a cold-compile latency hit on the next call.

**Specifics:**
- **JSON output mode** (`output_config.format`) and **strict tool use** (`strict: true`) are both generally available and can be combined in one request. Source: [Anthropic structured outputs](https://platform.claude.com/docs/en/build-with-claude/structured-outputs); [Strict tool use](https://platform.claude.com/docs/en/agents-and-tools/tool-use/strict-tool-use).
- **Grammar compilation:** JSON schemas are compiled into a grammar that constrains generation. Compiled grammars are cached for 24 hours from last use. Source: [Anthropic structured outputs](https://platform.claude.com/docs/en/build-with-claude/structured-outputs).
- **Grammar-complexity caps:** Complex schemas — optional parameters, union types, nested objects, large tool counts — interact non-linearly with grammar size; the API can refuse to compile some legal-but-complex schemas. Source: [Anthropic structured outputs](https://platform.claude.com/docs/en/build-with-claude/structured-outputs).
- **24-hour grammar cache cold-start:** A strict-tool-use agent idle for >24 hours pays the grammar-compile latency hit on its next call — this cache is separate from prompt caching and is not refreshed by prompt-cache hits. Source: [Anthropic structured outputs](https://platform.claude.com/docs/en/build-with-claude/structured-outputs).
- **Ideal use case:** A 6-tool agent with strict JSON output where every tool input and the final response are schema-validated.

**Compared to peers (sharpened by Dealbreaker):**
- vs. openai/gpt-5-5: Both support grammar-constrained structured output. No direct quality benchmark available in round-2 verified sources for a numeric comparison.
- vs. google/gemini-3-1-pro: Both support JSON mode / structured output. No direct benchmark comparison available.

**Known limitations on this axis:**
- **Grammar-complexity caps** can refuse to compile valid schemas — test complex schemas before relying on them in production.
- **24-hour grammar cache expiry** causes a cold-start latency hit for sparse-usage tools or nightly batch jobs — not relevant for 24/7 production agents, but important for batch workflows.
- Grammar cache is separate from prompt cache — prompt-cache hits do not refresh grammar cache.
- `automatic_cache_control` + explicit `cache_control` with different TTL returns 400 error — must align TTLs when mixing automatic and explicit caching. Source: `_official-prompt-caching.md` line 571.

**Sources:**
- [Anthropic structured outputs](https://platform.claude.com/docs/en/build-with-claude/structured-outputs)
- [Anthropic strict tool use](https://platform.claude.com/docs/en/agents-and-tools/tool-use/strict-tool-use)
