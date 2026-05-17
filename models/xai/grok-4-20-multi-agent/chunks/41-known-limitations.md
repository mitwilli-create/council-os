---
provider: xai
model: grok-4.20-multi-agent
capability: known-limitations
chunk_id: 41-known-limitations
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [limitations, failure-modes, beta, cost-surprise, latency, migration-tax, synthesis-inconsistency]
related_chunks: [11-tool-use, 20-pricing, 21-latency-throughput, 25-knowledge-cutoff, 44-avoid-when, 51-retirement-risk]
related_models: [xai/grok-4-3, anthropic/claude-opus-4-7, openai/gpt-5-5, google/gemini-3-1-pro]
peer_comparisons:
  - peer: anthropic/claude-opus-4-7
    relation: weaker
    note: "Claude supports client-side function calling, Chat Completions API, and is in stable (non-beta) production status. All three are Grok 4.20 MA limitations."
  - peer: xai/grok-4-3
    relation: weaker
    note: "Grok 4.3 avoids all 8 documented failure modes of Grok 4.20 MA except knowledge cutoff (shared) and x_search (shared benefit)."
---

**Summary** — Grok 4.20 Multi-Agent has 8 documented failure modes surfaced by Dealbreaker verification: (1) no client-side function calling and MCP migration tax; (2) Responses API `previous_response_id` multi-turn semantics; (3) beta instability; (4) sub-agent token billing multiplier 2-16x cost surprise; (5) knowledge cutoff anomaly on tool-off queries; (6) no native audio/video vs. Gemini; (7) synthesis inconsistency on agent divergence; (8) 16-agent xhigh latency disqualifying for interactive UX.

**Specifics:**

Omission #1 — No client-side function calling:
- Any team with existing custom-tool inventories on Claude Opus 4.7, GPT-5.5, or Gemini must host those tools as remote MCP servers. Non-trivial migration tax.

Omission #2 — Responses API `previous_response_id` semantics:
- Multi-turn conversations require `previous_response_id` rather than resending full message history. Callers with Chat Completions-style conversation loops must rewrite those loops.
- `max_tokens` parameter not supported.

Omission #3 — Beta instability:
- Explicit xAI warnings of potential breaking API changes. Not appropriate for SLA-bound production traffic without tolerance or fallback.

Omission #4 — Sub-agent token billing multiplier (cardinal cost surprise):
- 2-4x effective output cost at 4-agent depth; 8-16x at 16-agent xhigh. At $6/M output base, realized cost is $48–$96/M effective output at xhigh.
- A $0.10 single-agent task costs $0.40–$1.60. Teams projecting budget from sticker price will systematically undercount.

Omission #5 — Knowledge cutoff anomaly:
- November 2024 official cutoff. Tool-off queries are ~18 months stale by mid-2026. Tool-grounded behavior masks this; model may not signal staleness automatically.

Omission #6 — No native audio/video:
- Hard categorical gap vs. Gemini 3.1 Pro (native audio, video, Live API). Any audio or video task fails on this model.

Omission #7 — Synthesis inconsistency on agent divergence:
- When sub-agents reach sharply different conclusions, leader synthesis produces either over-confident wrong consensus or unresolved hedging without clear resolution. Architectural tradeoff, not a bug.

Omission #8 — 16-agent xhigh latency disqualifying for interactive UX:
- TTFT several seconds to tens of seconds. Wall-clock dominated by slowest agent + leader synthesis. Hard disqualifier for chatbots, real-time assistants, or any interactive surface.

**Compared to peers (sharpened by Dealbreaker):**
- vs. xai/grok-4-3: Grok 4.3 avoids failure modes 1, 2, 3, 4, 7, 8 entirely. Routes to Grok 4.3 eliminate these risks.
- vs. anthropic/claude-opus-4-7: Claude avoids failure modes 1, 2, 3, 4, 8. Claude has omission #6 (no audio/video either, comparable absence).

**Known limitations on this axis:**
- This chunk IS the limitations. See related chunks for mitigation routing.

**Sources:**
- [xAI Multi-Agent docs](https://docs.x.ai/developers/model-capabilities/text/multi-agent)
- Round-2 verdict: all 8 omissions verified as addressed at convergence
