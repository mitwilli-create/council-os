---
provider: perplexity
model: sonar-pro
capability: tool-use
chunk_id: 11-tool-use
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: self_research
confidence: low
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 1
tags: [tool-use, function-calling, orchestration, openai-compatible]
related_chunks: [17-agentic-computer-use, 12-web-grounding, 44-avoid-when]
related_models: [anthropic/claude-4-7-opus, openai/gpt-5-5, google/gemini-3-1-pro]
peer_comparisons:
  - peer: anthropic/claude-4-7-opus
    relation: weaker
    note: "Anthropic tools expose first-class function-calling schema, parallel tool calls, and server-side agent loops. Sonar Pro has no equivalent native tool-calling schema."
  - peer: openai/gpt-5-5
    relation: weaker
    note: "OpenAI Assistants and function-calling are first-class features. Sonar Pro's tool surface is its built-in web search only."
  - peer: google/gemini-3-1-pro
    relation: weaker
    note: "Gemini 3.1 Pro exposes function calling and native extensions. Sonar Pro has no comparable first-party tool schema."
---

**Summary** — Sonar Pro's primary "tool" is its built-in web search, which fires automatically without explicit tool definitions. The model exposes an OpenAI-compatible chat API surface, so it can be embedded as a component inside external orchestration systems that do tool use, but it does not itself expose arbitrary function-calling or tool-schema semantics. There is no first-party Perplexity agent framework that runs autonomous loops with Sonar Pro as the core agent.

**Specifics:**
- Built-in web search fires automatically on every request — no explicit tool registration required.
- API surface is OpenAI-compatible (chat completions format), allowing integration into LangChain, custom orchestrators, or any OpenAI-SDK-compatible pipeline.
- No documented function/tool schema in the Perplexity API (no `tools: []` parameter for external functions). [INFERRED — based on current Sonar API docs]
- No first-party agent framework from Perplexity for multi-step autonomous loops. [UNKNOWN — would need explicit tool/agent framework docs]
- Common usage pattern: orchestrate Sonar Pro as the "web research step" inside a larger agent that handles planning, tool dispatch, and output assembly via a more capable model.

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-4-7-opus: Anthropic tools expose parallel function calls, server-side tool loops, and MCP. Sonar Pro has none of this at the API level.
- vs. openai/gpt-5-5: OpenAI Assistants provide file retrieval, code execution, and full function-calling schemas. Sonar Pro's tool surface is limited to built-in search.
- vs. google/gemini-3-1-pro: Gemini 3.1 Pro has native function calling and a first-party extension registry. Sonar Pro has neither.

**Known limitations on this axis:**
- Cannot be used as a self-contained agentic engine for tasks requiring external function calls (database queries, API writes, file edits).
- External orchestration is required for any multi-tool workflow beyond web search.

**Sources:**
- [Perplexity API reference](https://docs.perplexity.ai/api-reference/chat-completions)
- [OpenRouter — perplexity/sonar-pro](https://openrouter.ai/perplexity/sonar-pro)
