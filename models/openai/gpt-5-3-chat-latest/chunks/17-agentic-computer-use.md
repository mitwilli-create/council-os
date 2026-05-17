---
provider: openai
model: gpt-5-3-chat-latest
capability: agentic-computer-use
chunk_id: 17-agentic-computer-use
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: self_research
confidence: low
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [agentic, no-computer-use, host-managed, function-calling-agent]
related_chunks: [11-tool-use, 00-overview, 44-avoid-when]
related_models: [anthropic/claude-sonnet-4-6, openai/gpt-5-5]
peer_comparisons:
  - peer: anthropic/claude-sonnet-4-6
    relation: weaker
    note: "Claude Sonnet 4.6 has first-party computer-use capability; GPT-5.3 Chat has none — agentic loops must be fully host-managed."
---

**Summary** — GPT-5.3 Chat has NO native browser control, OS control, or computer-use capability. It can participate in host-managed agentic workflows via function calling (planner/executor patterns), but all autonomy, retry logic, and state management must be implemented by the calling orchestrator. For workflows requiring native computer use, route to Anthropic Claude Sonnet 4.6 or similar.

**Specifics:**
- Native browser/OS control: NOT AVAILABLE. [INFERRED — not in model docs]
- Host-managed agent pattern: supported via function calling + parallel tool calls. [INFERRED]
- No built-in agent loop, state management, or memory — host must implement. [INFERRED]
- Can follow tool schemas for multi-step research agent patterns when host provides the orchestration. [INFERRED]

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-sonnet-4-6: Claude has first-party computer-use tools (browser, OS). GPT-5.3 Chat requires host-side orchestration for any computer-use equivalent.
- vs. openai/gpt-5-5: GPT-5.5 also relies on host orchestration in the API; parity on this axis with GPT-5.5 — neither has built-in computer use via Chat Completions/Responses API.

**Known limitations on this axis:**
- All agentic capability is host-provided; model contributes only planning + tool-call generation.
- No retry/error recovery built in — host must detect failed tool outputs. [INFERRED]

**Sources:**
- [OpenAI Responses API + function calling](https://developers.openai.com/api/docs)
- Round-2 self-research lines 55–59
