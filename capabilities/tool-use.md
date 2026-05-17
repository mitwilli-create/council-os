---
capability: tool-use
generated: 2026-05-17
source_chunks: 11-tool-use.md (all 13 Tier 1 models)
verified_by_dealbreaker: partial (12/13 — sonar-deep-research unverified)
---

# Tool Use — Cross-Model Comparison

## Comparison Table

| Model | Function Calling | MCP Support | Parallel Calls | Agentic Loops | Key Benchmark |
|---|---|---|---|---|---|
| anthropic/claude-opus-4-7 | Yes — full, parallel, `defer_loading` cache-preserving | Yes — client + server (host implements transport) | Yes (disable via flag) | Yes — server-side tools: `web_search`, `code_execution`, `computer_use`, `bash`, `memory` | MCP-Atlas 77.3% |
| anthropic/claude-sonnet-4-6 | Yes — full, parallel, `defer_loading` | Yes — client + server | Yes | Yes — agentic coding loops; thinking budget control | MCP-Atlas 61.3% |
| anthropic/claude-haiku-4-5 | Yes — full, parallel | Yes — client + server | Yes | Yes — OSWorld 50.7%; extended thinking enables deliberate tool selection | OSWorld 50.7% |
| openai/gpt-5-5 | Yes — full, parallel, Responses API | Yes (via Responses API) | Yes | Yes — persistent agent loops; `phase` parameter for progress vs. final answer | MCP-Atlas 75.3% |
| openai/gpt-5-4 | Yes — full, parallel, batched | Unconfirmed in sources | Yes | Yes — "agentic workflow robustness" per OpenAI docs; `phase` param required | MCP-Atlas 68.1% |
| openai/gpt-5-3-chat-latest | Yes — via Responses API | No MCP-specific docs | Yes | No built-in loop; host must implement retry/state | No MCP-Atlas score |
| google/gemini-3-1-pro | Yes — native + built-in Search/Maps | Yes — MCP client | Yes | Yes — single-pass multi-source; separate bash/custom-tool endpoint | MCP-Atlas 73.9% |
| google/gemini-3-flash | Yes — parallel; Thought Signatures MANDATORY | Unverified | Yes | Yes — `thinking_level: minimal` optimized for fast agentic iteration | No MCP-Atlas score |
| xai/grok-4-3 | Yes — standard; `X_SEARCH` built-in | Undocumented | Yes | Limited — no 16-agent orchestration | No published benchmark |
| xai/grok-4-20-multi-agent | No client-side; remote MCP servers only | Yes — remote MCP server only | Yes — 4 or 16 parallel agents in one call | Yes — native 4/16-agent parallel dispatch; Responses API only | No MCP-Atlas score |
| perplexity/sonar-pro | NO — built-in search only | No | No | No | N/A |
| perplexity/sonar-deep-research | NO — internal tools, not user-extensible | No (SDR can be called via MCP; cannot call MCP) | No | No | N/A |
| perplexity/sonar-reasoning-pro | NO — built-in search only | No | No | No | N/A |

---

## Tiered Ranking

### Tier 1 — Full agentic orchestration capability

**1. Claude Opus 4.7** — Highest MCP-Atlas score (77.3%). Unique `defer_loading` mechanism preserves prefix cache when tools are dynamically discovered mid-session — no other frontier model has an equivalent. Supports the fullest server-side tool suite including `computer_use`, `bash`, and `memory`. Best choice for production multi-server agentic pipelines where reliability is the primary constraint.

**2. GPT-5.5** — MCP-Atlas 75.3%, 2pp behind Opus 4.7. Full function calling, parallel tool calls, Responses API, persistent agent loops. The `phase` parameter disambiguates intermediate progress from final answers in long agentic chains. Strong choice for OpenAI-native tool ecosystems; Chat Completions API also supported (unlike Grok 4.20 MA).

**3. Gemini 3.1 Pro** — MCP-Atlas 73.9% at roughly half Opus 4.7's input cost (~$2/MTok vs ~$5/MTok). The only model with native Google Search and Google Maps integrated at the model surface — no external orchestration needed for web retrieval. Hard operational requirement: Thought Signatures must be round-tripped in multi-turn function calling chains or the API returns a 400 error. Best cost-per-correct-call ratio among MCP-benchmarked models.

### Tier 2 — Solid tool use with constraints

**4. Grok 4.20 Multi-Agent** — Uniquely exposes native parallel-agent dispatch (4 or 16 agents) in a single `/v1/responses` API call. No other model in this set does this. However: Responses API only (Chat Completions unsupported), no client-side function calling (remote MCP servers required), and a 2-16x token billing multiplier at high effort that systematically surprises teams comparing to sticker price. Use only when parallel-agent research synthesis at scale is the actual requirement.

**5. GPT-5.4** — MCP-Atlas 68.1%. Strong "agentic workflow robustness" per OpenAI docs; parallel and batched tool calls. Primary risk: `phase` parameter must survive retries and replays or preambles corrupt the output. MCP support unconfirmed in available sources.

**6. Claude Sonnet 4.6** — MCP-Atlas 61.3%. Full Anthropic tool surface including `defer_loading`. Preferred over Opus 4.7 when cost matters and the task tolerates the 16pp accuracy gap on multi-turn MCP orchestration. Has explicit thinking budget control that Opus 4.7 dropped.

**7. Claude Haiku 4.5** — OSWorld 50.7%. Full tool surface; 3-10x cheaper than Sonnet for high-frequency tool-calling loops. The cost-optimal choice for two-tier architectures where Opus/Sonnet orchestrates and Haiku executes at volume.

**8. Grok 4.3** — Standard function calling, parallel tool calls, native `X_SEARCH` for real-time X/Twitter data. MCP support undocumented. Use for single-agent tool orchestration where real-time X data is a requirement; route multi-agent tasks to Grok 4.20 MA.

**9. GPT-5.3 Chat** — Parallel function calls via Responses API; no built-in agent loop. Host must implement all retry and state management. Adequate for simple parallel tool use at lower cost than GPT-5.5.

**10. Gemini 3 Flash** — Parallel function calling with `thinking_level: minimal` for fast agentic loops. Thought Signature requirement identical to Gemini 3.1 Pro — the 400 error is the most common production failure mode. MCP compatibility unverified.

### Tier 3 — No external tool calling

**11-13. Perplexity (Sonar Pro, Sonar Deep Research, Sonar Reasoning Pro)** — All three have no function-calling interface. No `tools`, `functions`, or `tool_choice` API parameter. Built-in web search fires server-side automatically but cannot be controlled as an explicit function call and cannot be replaced or extended. Cannot query private databases, call proprietary APIs, or participate in MCP ecosystems as callers. Correct usage pattern: embed as the "web research step" inside an external orchestration layer built on a capable model.

---

## Routing Recommendations

| Use case | Recommended model | Reason |
|---|---|---|
| Multi-server MCP production pipeline | Claude Opus 4.7 | Highest MCP-Atlas (77.3%); `defer_loading` avoids cache churn |
| Cost-sensitive multi-tool pipeline | Gemini 3.1 Pro | MCP-Atlas 73.9% at ~$2/MTok vs Opus 4.7's ~$5/MTok |
| High-volume tool-call worker tier | Claude Haiku 4.5 | 3-10x cheaper than Sonnet; full tool surface |
| OpenAI-native tool ecosystem | GPT-5.5 | Full Chat Completions + Responses API; strong MCP-Atlas (75.3%) |
| Native parallel-agent research synthesis | Grok 4.20 Multi-Agent | Only model with 4/16-agent parallel dispatch in one API call |
| Real-time X/Twitter data in tool chain | Grok 4.3 | Native `X_SEARCH`; lower cost than Grok 4.20 MA |
| Web research step inside larger agent | Perplexity Sonar Pro | Built-in search; OpenAI-compatible for easy orchestration embedding |
| Tasks needing custom API calls | Do NOT use any Perplexity model | No function-calling surface at all |

---

## Notable Differentiators

### Grok 4.20 Multi-Agent: parallel-agent collaboration in one API call
This is architecturally unique. At `high` effort the model runs 4 sub-agents simultaneously; at `xhigh` it runs 16. Each sub-agent can call `web_search`, `x_search`, `code_execution`, and `collections_search` in parallel. The leader agent produces the sole final output. No other model in this set — not Claude, not GPT-5.5, not Gemini — exposes this natively via a single API call. The migration cost is significant: Responses API only, remote MCP servers required (no client-side functions), 2-16x token billing multiplier.

### Perplexity: zero function-calling surface
All three Perplexity models (Sonar Pro, Sonar Deep Research, Sonar Reasoning Pro) share a structural limitation: no `tools` parameter exists in their API. They are not agentic callers. Sonar Deep Research is notable in that Perplexity does expose it as an MCP *server* (so Claude can call SDR as a tool), but SDR itself cannot call MCP tools. The mental model: Perplexity models are research endpoints, not orchestrators.

### Anthropic's `defer_loading`: cache-preserving tool discovery
When an agentic system discovers new tools at runtime (e.g., via tool search), adding those tool definitions to the API call would normally invalidate the entire prompt cache (tools → system → messages). Anthropic's `defer_loading` flag places newly-discovered tool definitions as `tool_reference` blocks in message history rather than at the cache prefix — preserving the cached prompt. No other provider has a documented equivalent. For long-running agents with large cached context, this can eliminate significant per-turn latency and cost.

### Gemini 3.1 Pro: native search + function calling in one pass
Every other model in this set requires separate orchestration to combine real-time web search with custom function calls. Gemini 3.1 Pro integrates Google Search and Google Maps at the model surface — both can be combined with user-defined functions in a single execution pass. This simplifies agentic architectures that need real-time data augmentation alongside private API calls.

### Gemini Thought Signature requirement: the 400-error trap
Both Gemini 3.1 Pro and Gemini 3 Flash require Thought Signatures to be round-tripped in all Function Calling and Image Generation requests. Any middleware or wrapper that strips API response metadata (common in LangChain-style abstractions) will silently break multi-turn function calling with a cryptic 400 error. This is the single most common production failure mode for teams migrating to Gemini.

---

## Sources

- [Vellum — MCP-Atlas benchmark roundup (Opus 4.7, Gemini 3.1 Pro)](https://www.vellum.ai/blog/claude-opus-4-7-benchmarks-explained)
- [nxcode.io — Sonnet 4.6 MCP-Atlas 61.3%](https://www.nxcode.io/resources/news/claude-sonnet-4-6-complete-guide-benchmarks-pricing-2026)
- [renovateqr — GPT-5.5 MCP-Atlas 75.3%](https://renovateqr.com/blog/gpt-5-5-review-benchmarks-2026)
- [BuildFastWithAI — GPT-5.5 review](https://www.buildfastwithai.com/blogs/gpt-5-5-review-2026)
- [Anthropic tool-use caching docs](https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-use-with-prompt-caching)
- [Anthropic structured outputs](https://platform.claude.com/docs/en/build-with-claude/structured-outputs)
- [Gemini API tools documentation](https://ai.google.dev/docs/gemini_api/tools)
- [xAI Multi-Agent docs](https://docs.x.ai/developers/model-capabilities/text/multi-agent)
- [xAI chat API guide](https://docs.x.ai/docs/guides/chat)
- [OpenAI Responses API docs](https://developers.openai.com/api/docs/guides/latest-model)
- [OpenAI prompt guidance](https://developers.openai.com/api/docs/guides/prompt-guidance)
- [PromptHub — Sonar Reasoning Pro (no function calling)](https://www.prompthub.us/models/sonar-reasoning-pro)
- [Perplexity Sonar Prompt Guide](https://docs.perplexity.ai/docs/sonar/prompt-guide)
- [Perplexity API reference](https://docs.perplexity.ai/api-reference/chat-completions)
- [Anthropic Claude Haiku 4.5 announcement](https://www.anthropic.com/news/claude-haiku-4-5)
- [xAI X_SEARCH announcement](https://x.com/xai/status/1925244461875175616)
- council-os chunk files: models/*/chunks/11-tool-use.md (all 13 Tier 1 models, research rounds 2-3)
