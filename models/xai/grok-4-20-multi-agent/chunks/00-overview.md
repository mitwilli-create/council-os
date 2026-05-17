---
provider: xai
model: grok-4.20-multi-agent
capability: overview
chunk_id: 00-overview
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 8
egoism_strikes_at_convergence: 4
tags: [identity, positioning, release, api-id, multi-agent]
related_chunks: [11-tool-use, 40-unique-strengths, 50-release-history, 51-retirement-risk]
related_models: [xai/grok-4-3, xai/grok-4-20-single-agent, xai/grok-4-heavy]
peer_comparisons:
  - peer: xai/grok-4-3
    relation: weaker
    note: "Grok 4.3 leads on Intelligence Index (53 vs 49), pricing, latency. Grok 4.20 MA's only advantage is the parallel-agent API surface."
  - peer: openai/gpt-5-5
    relation: different-approach
    note: "GPT-5.5 uses external orchestration for multi-agent; Grok 4.20 MA exposes it in a single API call."
  - peer: anthropic/claude-opus-4-7
    relation: different-approach
    note: "Claude Opus 4.7 can replicate outcomes via scaffolding but lacks native parallel-agent-in-one-call API."
---

**Summary** — Grok 4.20 Multi-Agent is a beta variant built by xAI, released March 9, 2026. It exposes parallel collaboration among 4 agents (low/medium effort) or 16 agents (high/xhigh effort) within a single API call, with a leader agent producing the sole final output and optional encrypted sub-agent intermediate states. It is the only frontier model as of mid-2026 that packages this parallel-agent topology in one API call rather than requiring caller-side orchestration.

**Specifics:**
- Official API model ID: `grok-4.20-multi-agent-0309` (and aliases). Monitor xAI migration guides for alias changes given beta status.
- Released March 9, 2026. Predecessor: Grok 4 family. No announced successor as of May 17, 2026.
- Positioned by xAI for multi-step research involving search, analysis, cross-referencing, and synthesis.
- 4-agent topology at low/medium effort; 16-agent topology at high/xhigh effort. Leader agent produces sole final output.
- Sub-agent encrypted intermediate states are optionally available.
- Beta status: documented potential for breaking API changes; not appropriate for SLA-bound production traffic without tolerance built in.

**Compared to peers (sharpened by Dealbreaker):**
- vs. xai/grok-4-3: Grok 4.3 outperforms on every axis except the narrow multi-agent API surface — Intelligence Index 53 vs 49, GDPval-AA ELO 1500 vs 1179, 38% cheaper input, 58% cheaper output, substantially lower latency. Route to Grok 4.3 for any task not requiring parallel-agent collaboration in one call.
- vs. xai/grok-4-20-single-agent: Same $2/$6 sticker price; single-agent variant consumes fewer tokens (no multi-agent overhead), supports `max_tokens`, and works with Chat Completions API. Route to single-agent unless parallel-agent debate is explicitly needed.
- vs. openai/gpt-5-5, anthropic/claude-opus-4-7, google/gemini-3-1-pro: All can approximate multi-agent outcomes via external scaffolding but at higher caller complexity and round-trip latency. None expose a native parallel-agent-in-one-call API surface.

**Known limitations on this axis:**
- Beta API instability: explicit breaking-change warnings in xAI docs; not appropriate for SLA-bound production without fallback.
- Niche is narrow: for any task not specifically requiring parallel-agent collaboration or X-search orchestration, Grok 4.3 is the better xAI choice.

**Sources:**
- [xAI Multi-Agent docs](https://docs.x.ai/developers/model-capabilities/text/multi-agent)
- [xAI model overview](https://docs.x.ai/developers/models/grok-4.20-multi-agent-0309)
