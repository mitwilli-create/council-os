---
provider: xai
model: grok-4-3
capability: long-context
chunk_id: 16-long-context
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: self_research
confidence: medium
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [long-context, context-window, recall, large-document]
related_chunks:
  - 26-context-window
  - 17-agentic-computer-use
  - 44-avoid-when
related_models:
  - xai/grok-4-20-multi-agent
  - anthropic/claude-opus-4-7
  - google/gemini-3-1-pro
peer_comparisons:
  - peer: xai/grok-4-20-multi-agent
    relation: weaker
    note: "Grok 4.20 Multi-Agent supports 2M tokens; Grok 4.3 is capped at 1M — a meaningful gap for maximal-context agentic loops"
  - peer: anthropic/claude-opus-4-7
    relation: comparable
    note: "Opus 4.7 also supports 1M token context; 1M is shared context tier, not a Grok 4.3 differentiator vs. Opus"
  - peer: google/gemini-3-1-pro
    relation: comparable
    note: "Gemini 3.1 Pro also supports 1M token context; 1M is the current cross-provider standard at this capability tier"
---

**Summary** — Grok 4.3 has a 1M token context window, confirmed via Sim.ai and Vercel AI Gateway. This matches Claude Opus 4.7 and Gemini 3.1 Pro at the same tier — it is not a Grok 4.3 differentiator versus those peers. Recall quality beyond ~500k tokens is unbenchmarked in public sources. For maximal-context agentic tasks requiring 1M–2M tokens, Grok 4.20 Multi-Agent is the stronger choice within the xAI family.

**Specifics:**
- Context window: 1M tokens. (Source: Sim.ai, Vercel AI Gateway)
- Output cap: unverified. ([UNKNOWN — would need official confirmation])
- Recall quality beyond 500k tokens: unbenchmarked in public sources. ([UNKNOWN — would need a benchmark])
- Primary use case at this window: large-document summarization, codebase comprehension, whole-report analysis under 1M tokens. (Source: round-2-self-research.md section 7)

**Compared to peers (sharpened by Dealbreaker):**
- vs. xai/grok-4-20-multi-agent: 4.20 Multi-Agent doubles the window to 2M tokens. Grok 4.3's 1M is a regression vs. the sibling for extreme-length tasks.
- vs. anthropic/claude-opus-4-7: Both at 1M. Not a routing differentiator on context window alone.
- vs. google/gemini-3-1-pro: Both at 1M. Same conclusion — route on other axes (price, X data access, compute use) not window size.

**Known limitations on this axis:**
- Recall degradation pattern beyond 500k tokens is unknown — treat with caution on extremely long inputs.
- Output cap undocumented — unknown maximum response length.

**Sources:**
- [Sim.ai — context window](https://sim.ai)
- [Vercel AI Gateway — model card](https://vercel.com/docs/ai-gateway)
- round-2-self-research.md section 2 (Long context) and section 5 (Differentiation)
