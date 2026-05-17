---
provider: perplexity
model: sonar-pro
capability: agentic-computer-use
chunk_id: 17-agentic-computer-use
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: self_research
confidence: low
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 1
tags: [agentic, computer-use, orchestration, no-agent-loop]
related_chunks: [11-tool-use, 44-avoid-when, 41-known-limitations]
related_models: [anthropic/claude-4-7-opus, openai/gpt-5-5, google/gemini-3-1-pro, xai/grok-4-3]
peer_comparisons:
  - peer: anthropic/claude-4-7-opus
    relation: weaker
    note: "Anthropic tools expose server-side agent loops and computer-use capabilities. Sonar Pro has no equivalent first-party agentic framework."
  - peer: openai/gpt-5-5
    relation: weaker
    note: "OpenAI Assistants provide first-class autonomous multi-step workflows. Sonar Pro requires external orchestration for any agent-loop behavior."
  - peer: google/gemini-3-1-pro
    relation: weaker
    note: "Gemini 3.1 Pro has native extensions for autonomous workflows. Sonar Pro has no equivalent."
---

**Summary** — Sonar Pro has no built-in OS or browser control beyond its own web search, and no first-party agent-loop framework. It can be embedded as the "web research step" inside an external agent system that handles planning, tool dispatch, and execution, but it cannot serve as the core autonomous agent engine by itself. Tasks requiring multi-step browsing, form filling, UI automation, or tool-chaining must be orchestrated externally.

**Specifics:**
- No computer-use API (no OS control, no browser automation, no pixel-level interaction).
- No first-party agent loop comparable to Anthropic tools with server-side loops, OpenAI Assistants, or Gemini extensions with autonomous workflows.
- Valid use pattern: external orchestrator (e.g., LangChain, custom agent) calls Sonar Pro as a "web research step" while another model handles planning and tool execution.
- [INFERRED FROM API DOCS — no official agent framework described]

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-4-7-opus: Claude 4.7 Opus + Anthropic tools provide server-side loops, computer use API, and MCP. Sonar Pro provides none of this.
- vs. openai/gpt-5-5: OpenAI Assistants enable file retrieval, code execution, and function-calling in autonomous loops. Route multi-tool agent tasks there.
- vs. google/gemini-3-1-pro: Gemini 3.1 Pro with extensions supports autonomous multi-tool workflows. Sonar Pro does not.
- vs. xai/grok-4-3: Grok 4.3 is integrated into X/Twitter-native agent workflows. Sonar Pro has no equivalent platform integration.

**Known limitations on this axis:**
- Cannot initiate or manage multi-step autonomous tool execution without external orchestration.
- Web search is the only "tool" the model controls directly — all other agentic capability must come from the caller.

**Sources:**
- Perplexity API docs — text chat with search augmentation; no agent framework described. [INFERRED FROM DOCS]
