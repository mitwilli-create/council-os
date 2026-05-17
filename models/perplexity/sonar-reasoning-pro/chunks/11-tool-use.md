---
provider: perplexity
model: sonar-reasoning-pro
capability: tool-use
chunk_id: 11-tool-use
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 2
egoism_strikes_at_convergence: 1
tags: [tool-use, function-calling, no-function-calling, search-only, limitations]
related_chunks: [12-web-grounding, 17-agentic-computer-use, 44-avoid-when]
related_models: [anthropic/claude-opus-4-7, openai/gpt-5-5, google/gemini-3-1-pro]
peer_comparisons:
  - peer: openai/gpt-5-5
    relation: weaker
    note: "GPT-5.5 supports full function calling, parallel tool calls, and tool orchestration. Sonar Reasoning Pro has no function-calling interface at all. Any agentic loop must be built by the client around the model."
  - peer: anthropic/claude-opus-4-7
    relation: weaker
    note: "Opus 4.7 supports full tools API with parallel calls and MCP. Sonar Reasoning Pro has only built-in web search, no external tool invocation."
  - peer: google/gemini-3-1-pro
    relation: weaker
    note: "Gemini 3.1 Pro supports function calling, code execution, and native Google Search tool. Sonar Reasoning Pro cannot match this surface."
---

**Summary** — Sonar Reasoning Pro has no function-calling or tool-use interface. Its only "tool" is built-in web search, which runs server-side and is not caller-invocable as an explicit function call. There is no `tools`, `functions`, or `tool_choice` parameter in the Perplexity API for this model. Client-side agentic loops must implement any multi-tool orchestration externally.

**Specifics:**
- No function calling, no `tools`/`functions` parameter in the Perplexity API. ([PromptHub model card](https://www.prompthub.us/models/sonar-reasoning-pro))
- Built-in web search is the sole "tool": triggered automatically server-side, not invocable by the caller as a discrete function.
- Search behavior can be shaped by parameters: `search_domain_filter`, `search_recency_filter`, `return_images`, `return_related_questions`. ([Perplexity Sonar Prompt Guide](https://docs.perplexity.ai/docs/sonar/prompt-guide))
- Third-party wrappers (e.g., LiteLLM) must forward Perplexity-specific parameters explicitly; if stripped, search degrades. ([LiteLLM discussion #8728](https://github.com/BerriAI/litellm/discussions/8728))
- No parallel tool calls, no multi-tool orchestration, no code execution sandbox.

**Compared to peers (sharpened by Dealbreaker):**
- vs. openai/gpt-5-5: GPT-5.5 has a full `tools` interface with parallel calls and JSON schema validation. Sonar Reasoning Pro cannot be used where tool-use reliability is required.
- vs. anthropic/claude-opus-4-7: Opus 4.7 supports MCP, parallel tool calls, and schema-typed function returns. No comparison on this axis — Sonar Reasoning Pro is absent.
- vs. google/gemini-3-1-pro: Gemini 3.1 Pro supports function calling and code execution. Same gap.

**Known limitations on this axis:**
- Any pipeline requiring external API calls (databases, CRMs, file systems) via tool invocation cannot use Sonar Reasoning Pro as the calling model. Must wrap it in an orchestration layer.
- No MCP support as client or server. `[INFERRED FROM DOCS]`

**Sources:**
- [PromptHub model card — no function calling](https://www.prompthub.us/models/sonar-reasoning-pro)
- [Perplexity Sonar Prompt Guide](https://docs.perplexity.ai/docs/sonar/prompt-guide)
- [LiteLLM discussion #8728](https://github.com/BerriAI/litellm/discussions/8728)
