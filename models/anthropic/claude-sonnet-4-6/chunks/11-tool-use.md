---
provider: anthropic
model: claude-sonnet-4-6
capability: tool-use
chunk_id: 11-tool-use
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 5
egoism_strikes_at_convergence: 5
tags: [tool-use, function-calling, mcp, agentic-loops, parallel-tools]
related_chunks: [12-web-grounding, 17-agentic-computer-use, 18-structured-output, 41-known-limitations]
related_models: [anthropic/claude-opus-4-7, anthropic/claude-haiku-4-5]
peer_comparisons:
  - peer: anthropic/claude-opus-4-7
    relation: weaker
    note: "MCP-Atlas multi-turn tool orchestration: Sonnet 4.6 61.3% vs. Opus 4.7 77.3% — 16-point gap. Route multi-turn MCP work to Opus 4.7 when budget allows."
---

**Summary** — Claude Sonnet 4.6 supports the full Anthropic tool-use surface: parallel and sequential function calling, MCP client and server support, agentic loops with interleaved thinking and tool calls, and deferred tool loading that preserves the prompt cache. The key operational advantage over Opus 4.7 is not quality — Opus 4.7 leads by 16 points on MCP-Atlas — but the combination of tool-use with Sonnet 4.6's lower cost and explicit thinking budget control, which Opus 4.7 dropped.

**Specifics:**
- Full parallel function calling: multiple tools invoked simultaneously in a single turn.
- Sequential function calling: iterative agentic loops where each tool result informs the next call.
- MCP client support: Sonnet 4.6 can call MCP servers as tool endpoints.
- MCP server support: Sonnet 4.6 can act as an MCP server.
- Deferred tool loading via `defer_loading` on tool definitions: dynamically discovered tools do NOT invalidate the cached prompt prefix. Cache-preserving tool discovery is a documented operational advantage for long-running agents. ([Official tool-use caching docs](https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-use-with-prompt-caching))
- MCP-Atlas score: **61.3%** ([nxcode.io](https://www.nxcode.io/resources/news/claude-sonnet-4-6-complete-guide-benchmarks-pricing-2026)).
- Concrete strong use case: an agentic coding loop where Sonnet 4.6 calls a bash tool, reads output, updates a file via text editor tool, calls tests, and iterates — all in a single extended context session with prompt cache preserved.
- Does not provide native server-side tool execution — code execution, bash, web search are operator-configured client tools, not built-in cloud capabilities.

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-opus-4-7: Opus 4.7 MCP-Atlas 77.3% vs. Sonnet 4.6 61.3% — 16-point gap on multi-turn MCP orchestration. For high-stakes multi-server agentic pipelines, Opus 4.7 is the routing choice when budget allows. ([Vellum](https://www.vellum.ai/blog/claude-opus-4-7-benchmarks-explained))

**Known limitations on this axis:**
- MCP-Atlas 61.3% means ~39% of complex multi-turn MCP orchestration tasks fail or degrade. High-stakes multi-server orchestration should route to Opus 4.7.
- Haiku 4.5 MCP-Atlas score not published; routing guidance between Sonnet 4.6 and Haiku 4.5 on tool use is based on general quality tier, not a direct MCP benchmark comparison.
- 4-breakpoint ceiling: the API returns a 400 error if 5 or more explicit `cache_control` breakpoints exist (automatic caching consumes one slot). Long agent loops with many explicit breakpoints must stay under 4 total. ([Official prompt caching docs](https://platform.claude.com/docs/en/build-with-claude/prompt-caching), line 572)
- Enabling `web_search_tool` invalidates system and messages prompt caches — operators managing prompt cache for long agentic sessions must account for this when toggling search on/off.

**Sources:**
- [Official tool-use caching docs](https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-use-with-prompt-caching)
- [nxcode.io — MCP-Atlas Sonnet 4.6 61.3%](https://www.nxcode.io/resources/news/claude-sonnet-4-6-complete-guide-benchmarks-pricing-2026)
- [Vellum — Opus 4.7 MCP-Atlas 77.3%](https://www.vellum.ai/blog/claude-opus-4-7-benchmarks-explained)
