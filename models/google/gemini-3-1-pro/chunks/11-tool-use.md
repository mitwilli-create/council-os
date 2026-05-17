---
provider: google
model: gemini-3-1-pro
capability: tool-use
chunk_id: 11-tool-use
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 4
egoism_strikes_at_convergence: 1
tags: [tool-use, function-calling, mcp, built-in-tools, agentic]
related_chunks:
  - 12-web-grounding
  - 17-agentic-computer-use
  - 18-structured-output
  - 40-unique-strengths
related_models:
  - anthropic/claude-opus-4-7
peer_comparisons:
  - peer: anthropic/claude-opus-4-7
    relation: weaker
    note: "MCP-Atlas: 73.9% vs 77.3%. Price-per-correct-call advantage: Gemini ~$2/MTok input vs Opus 4.7's ~$5/MTok."
---

**Summary** — Gemini 3.1 Pro supports native tool use combining built-in first-party tools (Google Search, Google Maps) and custom function calling in a single execution pass. This is a genuine differentiator: competitors require separate orchestration layers for web search, whereas Gemini integrates it directly at the model surface. The operational gotcha is strict thought signature enforcement in multi-turn chains — omitting prior thought signatures in a function call sequence throws a 400 error.

**Specifics:**
- Built-in tools: Google Search and Google Maps are integrated at the model surface, not requiring external orchestration. Both can be combined with custom function calling in a single pass. (Source: profile Section 2, https://ai.google.dev/docs/gemini_api/tools)
- Parallel tool calls: supported within a single pass. (Source: profile Section 2)
- MCP support: integrates as an MCP client for tool routing. (Source: profile Section 4)
- Alternative bash/custom-tool endpoint: a separate endpoint is available optimized for bash and custom-tool workflows. (Source: profile Section 2)
- Multi-turn thought signatures: previous thought signatures MUST be preserved in multi-turn function calling chains. Omitting them triggers a strict 400 error. (Source: profile Section 6, _official-gemini-3-api.md line 125)
- Example task: extract entities from a document, cross-reference against an external API, augment with real-time Search data — all in one execution pass. (Source: profile Section 2)
- MCP-Atlas accuracy: 73.9% — trailing Claude Opus 4.7's 77.3% but at less than half the input cost (~$2/MTok vs ~$5/MTok). (Source: profile Section 5)

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-opus-4-7: weaker on agentic orchestration accuracy (MCP-Atlas 73.9% vs 77.3%), but delivers ~3.4 points of MCP accuracy at less than half the input cost. For cost-sensitive multi-tool pipelines this is a meaningful routing signal. (Source: profile Section 5)
- vs. openai models: Gemini's native Search and Maps integration avoids the API-call overhead that OpenAI's tool-calling architecture requires for web retrieval. Different approach; not directly benchmarked. (Source: profile Section 5 differentiators)

**Known limitations on this axis:**
- Thought signature enforcement is strict: multi-turn function calling breaks with a 400 error if signatures from prior turns are dropped. This is a common integration pitfall. (Source: profile Section 6, _official-gemini-3-api.md line 125)
- `thinkingLevel` and `thinkingBudget` mutual exclusion applies to tool-use calls as well as plain generation. (Source: profile Section 6)
- Schema validation strictness: deeply nested schemas with conditional constraints can silently default to empty strings. (Source: profile Section 2 structured output)

**Sources:**
- [Gemini API tools documentation](https://ai.google.dev/docs/gemini_api/tools)
- [_official-gemini-3-api.md line 125](../../../api-guides/google/_official-gemini-3-api.md)
- [MCP-Atlas benchmark via Vellum roundup](https://vellum.ai)
