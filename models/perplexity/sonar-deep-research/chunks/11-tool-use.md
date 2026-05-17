---
provider: perplexity
model: sonar-deep-research
capability: tool-use
chunk_id: 11-tool-use
last_research_round: 3
last_updated: 2026-05-17
verified_by_dealbreaker: false
source_authority: self_research
confidence: medium
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [tool-use, function-calling, no-function-calling, internal-agent, routing]
related_chunks: [17-agentic-computer-use, 32-mcp-support, 41-known-limitations, 44-avoid-when]
related_models: [openai/gpt-5-5, anthropic/claude-opus-4-7, perplexity/sonar-pro]
peer_comparisons:
  - peer: openai/gpt-5-5
    relation: weaker
    note: "GPT-5.5 supports arbitrary user-defined function calling via JSON schema. SDR has no equivalent — internal tool use is Perplexity-controlled and not extensible."
  - peer: anthropic/claude-opus-4-7
    relation: weaker
    note: "Claude Opus 4.7 with MCP supports arbitrary external tools and private data sources. SDR cannot call user-defined APIs at all."
---

**Summary** — Sonar Deep Research does NOT support general-purpose function calling or MCP as first-class API features. It is a text-in, text-out model from the external developer's perspective. Internally, Perplexity's orchestration layer calls web search, fetch, summarize, and cluster as fixed-function tools — but these are invisible to the caller and cannot be extended or overridden. For workflows requiring custom API calls, private database queries, or side effects in external systems, route to GPT-5.5 with functions or Claude Opus 4.7 with MCP.

**Specifics:**
- No user-facing function calling interface: Perplexity's API for Sonar Deep Research does not accept a `tools` or `functions` parameter. [INFERRED from PromptHub model cards and Perplexity API docs]
- MCP: SDR does not run an MCP client in its inference loop. It cannot discover or invoke tools exposed via MCP endpoints. [INFERRED]
- Internal "tools": search, URL fetch, parse, cluster, summarize — all Perplexity-managed, not callable by users.
- Structured metadata for citations is returned in the response object but is not a general function-calling surface.
- Perplexity does expose MCP server functionality allowing external MCP clients (e.g., Claude-based agents) to call SDR as a research tool — but this is SDR acting as a called service, not as a caller. (See 32-mcp-support.)
- Concrete routing signal: "Monitor crypto prices and place trades when thresholds are met" — wrong abstraction entirely; lacks tool calling, real-time streaming, deterministic subroutines.

**Compared to peers (sharpened by Dealbreaker):**
- vs. openai/gpt-5-5: GPT-5.5 offers full function calling with JSON schema. Use GPT-5.5 for any task requiring user-defined tool invocation.
- vs. anthropic/claude-opus-4-7: Claude + MCP can call custom APIs, databases, and browser. Use Claude for workflows integrating private enterprise tools.
- vs. perplexity/sonar-pro: Sonar Pro also lacks general function calling but is cheaper and faster for the text-only use cases SDR covers.

**Known limitations on this axis:**
- Cannot query private databases, call proprietary APIs, or execute code in user-controlled environments.
- Cannot be configured to "use MCP tools" the way Claude can.

**Sources:**
- R3 self-research §2.2 (round-3-self-research.md)
- PromptHub model card (cited in §2.2)
