---
provider: anthropic
model: claude-opus-4-7
capability: tool-use
chunk_id: 11-tool-use
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [tool-use, function-calling, mcp, parallel-tools, cache-invalidation]
related_chunks: [12-web-grounding, 17-agentic-computer-use, 18-structured-output, 26-context-window, 40-unique-strengths, 41-known-limitations]
related_models: [openai/gpt-5-5, google/gemini-3-1-pro, anthropic/claude-sonnet-4-6]
peer_comparisons:
  - peer: openai/gpt-5-5
    relation: stronger
    note: "MCP-Atlas multi-turn tool-calling: Opus 4.7 77.3% vs. GPT-5.5 75.3% — 2.0-point lead (narrowed from the ~9-point GPT-5.4-only comparison)."
  - peer: google/gemini-3-1-pro
    relation: stronger
    note: "MCP-Atlas: Opus 4.7 77.3% vs. Gemini 3.1 Pro 73.9%."
  - peer: openai/gpt-4-turbo
    relation: stronger
    note: "MCP-Atlas: Opus 4.7 77.3% vs. GPT-5.4 68.1%."
---

**Summary** — Claude Opus 4.7 supports native function calling, parallel tool use, MCP toolsets, and a full suite of server-side tools (`web_search`, `web_fetch`, `code_execution`, `computer_use`, `text_editor`, `bash`, `memory`). On MCP-Atlas multi-turn tool-calling, Opus 4.7 scores 77.3% — leading GPT-5.5 (75.3%) by 2.0 points and Gemini 3.1 Pro (73.9%) by 3.4 points. A key differentiator is `defer_loading`, which lets newly-discovered tools be added as `tool_reference` blocks in message history rather than invalidating the prefix cache.

**Specifics:**
- **Server-side tools available:** `web_search`, `web_fetch`, `code_execution`, `computer_use`, `text_editor`, `bash`, `memory`. Source: `_official-tool-use-caching.md` lines 53-59.
- **`defer_loading` preserves prefix cache** when new tools are discovered through tool-search — discovered definitions land as `tool_reference` blocks in message history rather than at the prefix. Source: `_official-tool-use-caching.md` lines 53-59.
- **MCP-Atlas score:** Opus 4.7 77.3% vs. GPT-5.5 75.3% vs. Gemini 3.1 Pro 73.9% vs. GPT-5.4 68.1%. Sources: [Vellum benchmark roundup](https://www.vellum.ai/blog/claude-opus-4-7-benchmarks-explained); [renovateqr GPT-5.5 review](https://renovateqr.com/blog/gpt-5-5-review-benchmarks-2026); [BuildFastWithAI GPT-5.5 review](https://www.buildfastwithai.com/blogs/gpt-5-5-review-2026).
- **Parallel tool use** is supported natively; can be disabled via `disable_parallel_tool_use` flag (toggling that flag invalidates the messages cache).
- **Strict tool use** compiles a grammar from the full toolset and is subject to grammar-complexity caps that can refuse to compile some legal schemas. Source: [Anthropic structured outputs](https://platform.claude.com/docs/en/build-with-claude/structured-outputs).

**Compared to peers (sharpened by Dealbreaker):**
- vs. openai/gpt-5-5: Opus 4.7 leads MCP-Atlas by 2.0 points (77.3% vs. 75.3%). Note: Round 1 implied a ~9-point lead by comparing to GPT-5.4 only — Dealbreaker required adding GPT-5.5's score, which narrows the gap to 2.0 points.
- vs. google/gemini-3-1-pro: Opus 4.7 leads by 3.4 points on MCP-Atlas. Gemini's function-calling does not expose an equivalent prefix-cache-preserving `defer_loading` mechanism `[INFERRED FROM PROVIDER DOCS — absence confirmed in verified Gemini sources]`.
- vs. openai/gpt-5-5 on `defer_loading`: OpenAI's Responses API tool-discovery and automatic prefix caching do not expose an equivalent deferred-tool mechanism as of round-2 research — confirmed by absence in [OpenAI Responses API docs](https://developers.openai.com/api/docs/guides/latest-model).

**Known limitations on this axis:**
- **Cache invalidation:** Modifying any tool definition invalidates the entire cache (tools → system → messages). Toggling web search or citations invalidates system and messages caches. Changing `tool_choice`, `disable_parallel_tool_use`, image presence, or thinking parameters invalidates the messages cache. Source: `_official-tool-use-caching.md` lines 62-73.
- **MCP-client distinction:** Opus 4.7 is the model, not itself an MCP client. The host (Claude Code, Claude Desktop, third-party agents) implements MCP transport. "Opus 4.7 supports MCP" is true only when the host implements MCP-client semantics.
- **4-cache-breakpoint ceiling:** The API allows up to 4 explicit `cache_control` breakpoints per request. Automatic caching consumes one slot. Adding a 5th returns a 400 error. Source: `_official-prompt-caching.md` line 572.
- **Grammar-complexity caps:** Large tool counts with complex schemas (optional params, union types, nested objects) can hit API complexity limits and be refused. Source: [Anthropic structured outputs](https://platform.claude.com/docs/en/build-with-claude/structured-outputs).

**Sources:**
- [Vellum benchmark roundup — MCP-Atlas](https://www.vellum.ai/blog/claude-opus-4-7-benchmarks-explained)
- [renovateqr — GPT-5.5 MCP-Atlas score](https://renovateqr.com/blog/gpt-5-5-review-benchmarks-2026)
- [BuildFastWithAI — GPT-5.5 review](https://www.buildfastwithai.com/blogs/gpt-5-5-review-2026)
- [Anthropic structured outputs](https://platform.claude.com/docs/en/build-with-claude/structured-outputs)
- [OpenAI Responses API docs](https://developers.openai.com/api/docs/guides/latest-model)
