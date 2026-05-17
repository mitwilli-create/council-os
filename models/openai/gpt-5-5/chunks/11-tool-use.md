---
provider: openai
model: gpt-5-5
capability: tool-use
chunk_id: 11-tool-use
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: medium
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [tool-use, function-calling, responses-api, parallel-tools, mcp, phase]
related_chunks: [17-agentic-computer-use, 18-structured-output, 32-mcp-support, 10-reasoning]
related_models:
  - anthropic/claude-opus-4-7
  - openai/gpt-5-3-codex
peer_comparisons:
  - peer: anthropic/claude-opus-4-7
    relation: weaker
    note: "MCP-Atlas: GPT-5.5 75.3% vs Claude Opus 4.7 77.3% — 2pp deficit on MCP-heavy workflows"
  - peer: openai/gpt-5-3-codex
    relation: different-approach
    note: "Codex is the OpenAI-recommended agentic coding tool route; GPT-5.5 is for mixed research/tools/code workflows"
---

**Summary** — GPT-5.5 supports function/tool calling, structured tool invocation, persistent agent loops, parallel tool calls, and Responses API workflows including MCP-oriented tool use. OpenAI's prompt guidance for GPT-5.5 explicitly covers the `phase` parameter, tool persistence, parallel tool calling, preambles, and Responses API integration.

**Specifics:**
- **Tool calling modes:** function calling, parallel tool calls, persistent agent loops — all supported via Responses API (OpenAI _official-prompt-guidance.md, cited by Dealbreaker).
- **`phase` parameter:** distinguishes intermediate agent progress updates from final answers; important for tool-heavy multi-step workflows (Dealbreaker-cited prompt guidance).
- **MCP-Atlas benchmark:** GPT-5.5 **75.3%** vs Claude Opus 4.7 **77.3%** — GPT-5.5 loses by 2pp on MCP-heavy workflow benchmarks (Dealbreaker benchmark log).
- **Responses API:** primary surface for tool use, multi-turn workflows, and web/search/computer-use tool attachment.
- **Parallel tool calls:** supported; multiple tools can fire simultaneously within a single response cycle.
- **Personality/verbosity controls:** supported alongside tool workflows; `text.verbosity` and steady/expressive collaboration modes can be set (Dealbreaker-cited prompt guidance).

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-opus-4-7: Claude Opus 4.7 leads on MCP-Atlas (77.3% vs 75.3%); prefer Claude for MCP-heavy production workflows where that 2pp matters.
- vs. openai/gpt-5-3-codex: Codex is OpenAI's recommended model for IDE-style coding agents, apply_patch, compaction-heavy sessions. GPT-5.5 is preferred when tool use is one component of a broader research/document/code workflow.

**Known limitations on this axis:**
- Tool use is only as reliable as tool schemas and environment feedback; GPT-5.5 may call tools prematurely when instructions are underspecified.
- Can persist down an unproductive plan in long loops if environment returns ambiguous results.
- May mis-handle tool results if outputs are noisy or the tool schema is inconsistent.
- `phase` parameter exact schema is cited from Dealbreaker-referenced prompt guidance, not directly confirmed from an open URL.

**Sources:**
- OpenAI _official-prompt-guidance.md (Dealbreaker-cited; local file)
- [OpenAI platform docs](https://platform.openai.com/docs)
- Dealbreaker benchmark log (MCP-Atlas score)
