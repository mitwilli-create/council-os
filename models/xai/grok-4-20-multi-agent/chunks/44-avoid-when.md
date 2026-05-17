---
provider: xai
model: grok-4.20-multi-agent
capability: avoid-when
chunk_id: 44-avoid-when
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [routing, avoid-when, grok-4-3, claude-opus-4-7, gemini, interactive-ux, sla, migration-tax]
related_chunks: [43-ideal-tasks, 40-unique-strengths, 41-known-limitations, 21-latency-throughput, 20-pricing]
related_models: [xai/grok-4-3, xai/grok-4-20-single-agent, anthropic/claude-opus-4-7, google/gemini-3-1-pro, openai/gpt-5-5]
peer_comparisons:
  - peer: xai/grok-4-3
    relation: weaker
    note: "Grok 4.3 is the default xAI routing choice for tasks outside the 5 ideal-task types."
  - peer: anthropic/claude-opus-4-7
    relation: weaker
    note: "For client-side function calling workflows and SLA-bound production, Claude Opus 4.7 is the preferred route."
  - peer: google/gemini-3-1-pro
    relation: weaker
    note: "For audio/video input tasks, route to Gemini 3.1 Pro without exception."
---

**Summary** — Grok 4.20 Multi-Agent should NOT be used for five task categories. Each has an explicit peer redirect. The hardest routing rules are: (1) any task not requiring parallel-agent collaboration → Grok 4.3; (4) workflows with existing client-side function calling → Claude Opus 4.7 or GPT-5.5; (5) SLA-bound production → any stable peer.

**Specifics:**

Avoid #1 — Any task not specifically requiring parallel-agent collaboration or X-search orchestration:
- Route to: xai/grok-4-3
- Reason: Grok 4.3 has higher Intelligence Index (53 vs 49), GDPval-AA ELO (1500 vs 1179), 38% cheaper input, 58% cheaper output, substantially lower latency, no sub-agent billing multiplier.

Avoid #2 — Standard reasoning or code tasks without parallel debate:
- Route to: xai/grok-4-20-single-agent (same $2/$6 sticker, lower token consumption, supports `max_tokens` and Chat Completions API)
- Or: xai/grok-4-3 (preferred for most cases, also cheaper)
- Reason: Grok 4.20 MA's multi-agent overhead adds cost without benefit for single-threaded reasoning.

Avoid #3 — Any task needing native audio or video input:
- Route to: google/gemini-3-1-pro
- Reason: Hard capability absence. Grok 4.20 MA has no audio or video input. Tasks will fail.

Avoid #4 — Workflows with existing client-side function-calling inventories:
- Route to: anthropic/claude-opus-4-7 or openai/gpt-5-5
- Reason: Grok 4.20 MA has no client-side function calling. Migration to remote MCP hosting is non-trivial. Avoid unless migration budget is committed.

Avoid #5 — SLA-bound production deployments:
- Route to: xai/grok-4-3 or anthropic/claude-opus-4-7 (stable, non-beta)
- Reason: Grok 4.20 MA is in explicit beta with documented potential for breaking API changes. Not appropriate for SLA-bound production without fallback tolerance.

Additional hard routing rules (from latency):
- Interactive UX (chatbots, real-time assistants): disqualified at 16-agent xhigh. TTFT tens of seconds.
- Any latency-sensitive surface: route to Grok 4.3 or Claude Opus 4.7.

**Compared to peers (sharpened by Dealbreaker):**
- vs. xai/grok-4-3: Grok 4.3 is the default fallback for avoid cases #1 and #2.
- vs. google/gemini-3-1-pro: Mandatory route for avoid case #3 (audio/video).
- vs. anthropic/claude-opus-4-7: Preferred route for avoid cases #4 and #5 (stable API, client-side tools).

**Known limitations on this axis:**
- These avoid rules are hard — not judgment calls. Each reflects a documented capability absence or beta risk.

**Sources:**
- [xAI Multi-Agent docs](https://docs.x.ai/developers/model-capabilities/text/multi-agent)
- Dealbreaker round-2 verdict (ideal/avoid rewrite with explicit sibling crossover, Gaps 1–4)
