---
provider: anthropic
model: claude-haiku-4-5
capability: tool-use
chunk_id: 11-tool-use
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: self_research
confidence: medium
sycophancy_strikes_at_convergence: 5
egoism_strikes_at_convergence: 0
tags: [tool-use, function-calling, agentic, mcp, parallel-tools]
related_chunks: [10-reasoning, 17-agentic-computer-use, 18-structured-output]
related_models:
  - anthropic/claude-sonnet-4-6
  - anthropic/claude-opus-4-7
peer_comparisons:
  - peer: anthropic/claude-sonnet-4-6
    relation: comparable
    note: "Both support parallel tool calls and MCP; Sonnet preferred for ambiguous multi-tool orchestration where adaptive thinking helps pick the right tool sequence."
---

**Summary** — Claude Haiku 4.5 supports Anthropic's full tool-use surface: function calling, parallel tool calls, and MCP (Model Context Protocol) client/server integration. Its extended thinking capability enables structured agentic loops where tool selection requires multi-step reasoning. The cost advantage makes it the preferred tier for high-volume tool-calling workflows with predictable schemas.

**Specifics:**
- Function calling: supported via Anthropic Messages API `tools` parameter
- Parallel tool calls: supported — multiple tools invocable in a single model turn
- MCP compatibility: supported as both MCP client and host (Anthropic-standard across Claude 4 family)
- Extended thinking + tool use: combination supported; enables deliberate tool-selection reasoning before calling
- Agentic loop suitability: OSWorld 50.7% reflects real tool-use performance in multi-step computer-use scaffolds (Anthropic-published, Oct 15, 2025)
- Cost implication: at $1.00/MTok input + cached reads at $0.10/MTok, high-frequency tool-calling loops (100+ turns/session) are 3-10× cheaper than Sonnet

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-sonnet-4-6: comparable tool-use surface; Sonnet's adaptive thinking gives an edge when the correct tool sequence is ambiguous or the task requires dynamic routing between tool types mid-chain
- vs. anthropic/claude-opus-4-7: Opus is the synthesis/orchestration model; Haiku is the worker. In a two-tier agentic system, Opus plans, Haiku executes tool calls at volume.

**Known limitations on this axis:**
- No adaptive thinking means tool-routing decisions made at extended-thinking setup time cannot be revised mid-chain
- Benchmark (OSWorld) uses a specific two-tool scaffold; real-world tool-use performance may vary with tool count and schema complexity
- Specific parallel-tool-call limits (max tools per turn) not documented in R2 profile

**Sources:**
- [Anthropic Claude Haiku 4.5 announcement](https://www.anthropic.com/news/claude-haiku-4-5)
- [Anthropic tool use docs](https://docs.anthropic.com/en/docs/build-with-claude/tool-use)
