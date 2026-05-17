---
provider: perplexity
model: sonar-deep-research
capability: mcp-support
chunk_id: 32-mcp-support
last_research_round: 3
last_updated: 2026-05-17
verified_by_dealbreaker: false
source_authority: self_research
confidence: medium
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 1
tags: [mcp, integrations, server-role, no-client-role, anthropic-standard]
related_chunks: [11-tool-use, 17-agentic-computer-use, 31-sdks-apis, 41-known-limitations]
related_models: [anthropic/claude-opus-4-7, openai/gpt-5-5]
peer_comparisons:
  - peer: anthropic/claude-opus-4-7
    relation: weaker
    note: "Claude Opus 4.7 runs as an MCP client, discovering and calling tools from any MCP server. SDR is only an MCP server — it is called by MCP clients, not the other way around."
---

**Summary** — Sonar Deep Research does not act as an MCP client. It cannot discover or invoke user-defined MCP tools in its inference loop. Perplexity has implemented MCP server functionality, allowing external MCP clients (e.g., a Claude-based agent) to call SDR as a research tool in a broader workflow. The R1 profile incorrectly described MCP as "Perplexity-proprietary" — MCP is an Anthropic open standard, correctly attributed in R2 and confirmed in R3.

**Specifics:**
- SDR as MCP server: Perplexity exposes SDR behind an MCP server interface, enabling external MCP clients to invoke it as one tool among many in an agent pipeline. [INFERRED from R3 §4.3]
- SDR as MCP client: not supported. SDR's inference loop does not discover or call arbitrary tools via MCP endpoints. Its internal tool use (search, fetch, cluster) is Perplexity-controlled and non-extensible.
- Practical pattern: a Claude Opus 4.7 agent can call SDR via Perplexity's MCP server for heavy web-grounded research while using its own MCP-integrated tools for other subtasks. SDR serves as a called research service, not a tool-calling orchestrator.
- MCP attribution: Model Context Protocol is an Anthropic-developed open standard. The R1 fabrication of it as "Perplexity-proprietary" was corrected in R2 and confirmed retracted in R3.

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-opus-4-7: Claude is the MCP client in this pairing; SDR is the MCP server. They are complementary, not equivalent.
- vs. openai/gpt-5-5: GPT-5.5 uses OpenAI's own function-calling interface rather than MCP. MCP integration varies by context.

**Known limitations on this axis:**
- Cannot be configured to call user-defined APIs via MCP inside its own inference.
- Integrators must build the MCP client side separately (e.g., via Claude) and point it at Perplexity's MCP server.

**Sources:**
- R3 self-research §4.3 (round-3-self-research.md)
- R2 dealbreaker verdict (s6_mcp_proprietary — addressed)
