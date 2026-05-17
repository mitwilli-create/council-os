---
provider: xai
model: grok-4.20-multi-agent
capability: knowledge-cutoff
chunk_id: 25-knowledge-cutoff
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: medium
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [knowledge-cutoff, freshness, staleness, tool-grounded, november-2024]
related_chunks: [12-web-grounding, 16-long-context, 41-known-limitations]
related_models: [xai/grok-4-3, anthropic/claude-opus-4-7, google/gemini-3-1-pro]
peer_comparisons:
  - peer: google/gemini-3-1-pro
    relation: weaker
    note: "Gemini 3.1 Pro has a more recent knowledge cutoff. Tool-off queries on Grok 4.20 MA are ~18 months stale by mid-2026."
  - peer: anthropic/claude-opus-4-7
    relation: comparable
    note: "Claude Opus 4.7 knowledge cutoff comparison is [UNKNOWN], but both rely on grounding tools for freshness."
---

**Summary** — Grok 4.20 Multi-Agent has a base training knowledge cutoff of November 2024 per official xAI docs. Tool-off queries are therefore approximately 18 months stale by mid-2026. Tool-grounded behavior (`web_search`, `x_search`) masks this cutoff in practice, but any query running without tool invocation draws on stale base knowledge. Some third-party provider mirrors report a ~September 2025 cutoff for the Grok 4.20 family — this discrepancy is unresolved.

**Specifics:**
- Official xAI docs: November 2024 cutoff.
- Third-party mirrors (some): ~September 2025 for Grok 4.20 family [INFERRED FROM PROVIDER DOC MIRROR — unresolved discrepancy].
- Tool-off staleness by mid-2026: ~18 months (official cutoff) or ~9 months (mirror cutoff). Both require tool grounding for fresh queries.
- Tool-grounded queries via `web_search` and `x_search` bypass the cutoff for retrievable facts.
- Failure mode: knowledge cutoff anomaly — tasks where tools are disabled or unavailable silently return stale results without warning.

**Compared to peers (sharpened by Dealbreaker):**
- vs. google/gemini-3-1-pro: Gemini's cutoff is more recent. For tool-off knowledge tasks, Gemini is less stale.
- vs. anthropic/claude-opus-4-7: Both rely on grounding tools for freshness. Direct cutoff comparison is [UNKNOWN].

**Known limitations on this axis:**
- November 2024 official cutoff is ~18 months stale by mid-2026 for tool-off queries.
- Cutoff anomaly is a documented failure mode: models may not signal staleness — callers must enforce tool usage for fresh data.
- Provider mirror discrepancy (November 2024 vs. September 2025) is unresolved.

**Sources:**
- xAI official models overview (internal reference `_official-models-overview.md` line 39)
