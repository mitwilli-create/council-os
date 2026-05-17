---
provider: openai
model: gpt-5-3-chat-latest
capability: sdks-apis
chunk_id: 31-sdks-apis
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [sdk, responses-api, python, typescript, assistants-deprecated]
related_chunks: [00-overview, 11-tool-use, 32-mcp-support, 18-structured-output]
related_models: [anthropic/claude-sonnet-4-6]
peer_comparisons:
  - peer: anthropic/claude-sonnet-4-6
    relation: different-approach
    note: "Anthropic uses the Messages API; OpenAI uses the Responses API (Chat Completions successor). Different surface, comparable capability for tool calling."
---

**Summary** — GPT-5.3 Chat is accessed via the OpenAI Responses API (the successor to Chat Completions). Official SDKs are available for JavaScript/TypeScript and Python; additional languages are community-supported. The legacy Assistants API is being phased out in favor of the Responses API per OpenAI guidance.

**Specifics:**
- Primary API surface: Responses API (Chat Completions successor). (https://developers.openai.com/api/docs)
- Official SDKs: JavaScript/TypeScript, Python. Additional languages (Java, .NET, etc.) community-supported. (https://developers.openai.com/api/docs)
- Legacy Assistants API: being phased out — do not build new integrations on it. (https://developers.openai.com/api/docs; Round-2 self-research)
- Function calling and structured output available via Responses API. (same)
- Model parameter: pass `model="gpt-5.3-chat-latest"` explicitly to avoid fall-back to `gpt-5`. (See 00-overview — model-slot fall-back note)

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-sonnet-4-6: Anthropic uses the Messages API; OpenAI uses Responses API. Different surface but parallel capability for tool calling, structured output, and vision. SDK ergonomics differ.

**Known limitations on this axis:**
- Model-slot fall-back: if `model` param is not explicitly set, may resolve to `gpt-5` via the lib chain. Pin explicitly.
- Assistants API migration burden for teams still on it.

**Sources:**
- [OpenAI API docs](https://developers.openai.com/api/docs)
- Round-2 self-research lines 84–89
