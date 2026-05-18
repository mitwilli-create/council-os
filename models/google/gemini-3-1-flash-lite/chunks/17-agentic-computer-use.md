---
provider: google
model: gemini-3-1-flash-lite
capability: agentic-computer-use
chunk_id: 17-agentic-computer-use
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [agentic, computer-use, browser-control, orchestration, loops]
related_chunks: [11-tool-use, 41-known-limitations, 44-avoid-when]
related_models: [google/gemini-3-1-pro, google/gemini-3-flash]
peer_comparisons:
  - peer: google/gemini-3-1-pro
    relation: weaker
    note: "Computer Use (native OS-level browser control) is exclusive to Gemini 3 Pro and Flash — Flash-Lite explicitly excluded."
  - peer: google/gemini-3-flash
    relation: weaker
    note: "Gemini 3 Flash supports Computer Use; Flash-Lite does not."
---

**Summary** — Gemini 3.1 Flash-Lite supports agentic loops and tool orchestration via its function-calling and MCP support, but does NOT have native OS-level Computer Use (browser control). Computer Use is a capability exclusive to Gemini 3 Pro and Gemini 3 Flash — Flash-Lite is explicitly excluded. This is a verified, load-bearing differentiation confirmed at Dealbreaker.

**Specifics:**
- Agentic loops and tool orchestration: supported (via function calling + MCP). Source: round-2-self-research.md Section 2 line 32.
- Native OS-level browser control (Computer Use): NOT supported for Flash-Lite. Source: `_official-gemini-3-api.md line 308` — "Gemini 3 Pro and Flash support Computer Use"; Flash-Lite correctly excluded.
- Supports standard API-provided tool sets for agent workflows; does not have access to a sandboxed browser/OS environment.

**Compared to peers (sharpened by Dealbreaker):**
- vs. google/gemini-3-1-pro: Pro supports Computer Use (browser + OS control); Flash-Lite does not. Route to Pro or Flash for any agentic task requiring direct web browser or desktop app interaction.
- vs. google/gemini-3-flash: Flash also supports Computer Use; Flash-Lite does not. Flash is the minimum-tier Gemini model for Computer Use agentic tasks.
- vs. anthropic/claude-sonnet: Claude Sonnet supports Computer Use via Anthropic's computer_use tool; Flash-Lite does not.

**Known limitations on this axis:**
- `thought_signature` mismatch errors can surface in extended agentic sessions with thinking enabled. Source: `_official-gemini-3-api.md line 125`.
- Complex multi-step agentic reasoning is constrained by `thinking_level: minimal` default — upgrade thinking level for agentic workflows requiring deeper inter-step reasoning.

**Sources:**
- `_official-gemini-3-api.md line 308` (Computer Use: Pro + Flash only; Flash-Lite excluded)
- round-2-self-research.md Section 2 line 32 (agentic loops supported, Computer Use not)
- round-2-verdict.yaml (spot check: "Computer Use correctly NOT claimed for Flash-Lite" — passed)
