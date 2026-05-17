---
provider: xai
model: grok-4.20-multi-agent
capability: tool-use
chunk_id: 11-tool-use
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 1
egoism_strikes_at_convergence: 0
tags: [tool-use, multi-agent, parallel-agents, responses-api, mcp, sub-agent-billing]
related_chunks: [00-overview, 12-web-grounding, 20-pricing, 21-latency-throughput, 31-sdks-apis, 32-mcp-support]
related_models: [xai/grok-4-3, anthropic/claude-opus-4-7, openai/gpt-5-5, google/gemini-3-1-pro]
peer_comparisons:
  - peer: anthropic/claude-opus-4-7
    relation: weaker
    note: "Claude Opus 4.7 supports client-side function calling; Grok 4.20 MA does not. Existing custom-tool inventories on Claude require migration to remote MCP servers — non-trivial migration tax."
  - peer: openai/gpt-5-5
    relation: weaker
    note: "GPT-5.5 supports Chat Completions API and client-side function calling; Grok 4.20 MA uses Responses API only with no client tools."
  - peer: google/gemini-3-1-pro
    relation: different-approach
    note: "Gemini 3.1 Pro supports client-side function calling and a broader tool surface; Grok 4.20 MA's advantage is native parallel-agent tool dispatch in one call."
---

**Summary** — Grok 4.20 Multi-Agent is the only frontier model that exposes parallel-agent tool dispatch (4 or 16 agents) in a single API call via the Responses API (`/v1/responses` — NOT Chat Completions `/v1/chat/completions`). Built-in tools include `web_search`, `x_search`, `code_execution`, and `collections_search`. Remote MCP servers are supported; client-side/custom function calling is not. Sub-agent token costs create a 2-16x output billing multiplier that is the primary cost surprise for teams migrating from single-agent models.

**Specifics:**
- API surface: Responses API only (`/v1/responses`). Chat Completions API is not supported for Multi-Agent — this is a hard constraint.
- Agent topology: 4 agents at low/medium effort; 16 agents at high/xhigh effort. Leader agent produces sole final output.
- Built-in tools (server-side, no client config required): `web_search`, `x_search`, `code_execution`, `collections_search`.
- Remote MCP servers: supported. Client-side function calling: not supported.
- Sub-agent token billing multiplier: all sub-agent and tool tokens are billed. Effective multiplier is 2-4x at 4-agent depth and 8-16x at 16-agent xhigh effort. A single-agent-equivalent $0.10 query costs $0.40–$1.60 at xhigh. This is the cardinal cost surprise — teams comparing against $2/$6 sticker without accounting for multiplier will face significant budget overruns.
- Multi-turn conversations require `previous_response_id` rather than resending full message history (Responses API semantics). Teams with Chat Completions-style conversation-history loops must rewrite those loops.
- `max_tokens` parameter is not supported. Output length is controlled differently.
- Sub-agent intermediate states can be encrypted (optional — privacy-sensitive workflow use case).
- Parallel tool calls across agents: 4 agents can simultaneously call `web_search`, `x_search`, `code_execution`, and `collections_search` in one API call.
- No client-side function calling: any team with existing custom-tool inventories on Claude Opus 4.7, GPT-5.5, or Gemini 3.1 Pro must host those tools as remote MCP servers to use Grok 4.20 MA — non-trivial migration tax.

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-opus-4-7: Claude supports client-side function calling with no MCP hosting requirement. Migrating existing Claude tool inventories to Grok 4.20 MA requires remote MCP hosting. For teams with established tool inventories, Claude Opus 4.7 is the lower-friction choice.
- vs. openai/gpt-5-5: GPT-5.5 supports Chat Completions API and client-side tools. Grok 4.20 MA's Responses-API-only requirement and no-client-tools constraint are net regressions for most existing GPT integrations.
- vs. google/gemini-3-1-pro: Gemini supports client-side function calling and a broader tool surface including native audio/video. Grok 4.20 MA's advantage is native 4/16-agent parallel dispatch in one call — but Gemini can approximate this with external orchestration.
- vs. xai/grok-4-3: Grok 4.3 supports standard tool use with lower cost and latency. Route to Grok 4.3 for any tool-use task not requiring parallel-agent dispatch.

**Known limitations on this axis:**
- No client-side function calling: MCP migration tax for any team with existing custom-tool inventories.
- Responses API only: `previous_response_id` multi-turn semantics require caller rewrite from Chat Completions patterns.
- `max_tokens` not supported.
- Sub-agent token billing multiplier (2-16x) makes cost projections based on sticker price alone systematically incorrect.
- Beta API instability: breaking changes possible; monitor xAI migration guides.

**Sources:**
- [xAI Multi-Agent docs](https://docs.x.ai/developers/model-capabilities/text/multi-agent)
- [xAI chat API guide](https://docs.x.ai/docs/guides/chat)
