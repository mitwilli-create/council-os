---
provider: xai
model: grok-4.20-multi-agent
capability: retirement-risk
chunk_id: 51-retirement-risk
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: medium
sycophancy_strikes_at_convergence: 1
egoism_strikes_at_convergence: 0
tags: [lifecycle, deprecation, beta, breaking-changes, retirement, aliases]
related_chunks: [00-overview, 41-known-limitations]
related_models: [xai/grok-4-3, xai/grok-4-20-single-agent]
peer_comparisons:
  - peer: xai/grok-4-3
    relation: weaker
    note: "Grok 4.3 is not in beta; lower deprecation risk for production use."
  - peer: anthropic/claude-opus-4-7
    relation: weaker
    note: "Claude Opus 4.7 is a stable production model with documented deprecation timelines; Grok 4.20 MA has beta-status breaking-change risk."
---

**Summary** — Grok 4.20 Multi-Agent carries elevated deprecation risk compared to stable peers due to its explicit beta status and documented potential for breaking API changes. Legacy Grok 4 family models (grok-4, grok-4-fast, grok-4-1-fast, grok-code-fast-1, grok-imagine-image-pro) were retired May 15, 2026. No successor to Grok 4.20 Multi-Agent has been announced as of May 17, 2026.

**Specifics:**
- Model ID: `grok-4.20-multi-agent-0309` with aliases. Aliases may change without notice — monitor xAI migration guides.
- Beta status: xAI documents explicit potential for breaking API changes. Not appropriate for SLA-bound production without fallback.
- Predecessor retirements (May 15, 2026): `grok-4`, `grok-4-fast`, `grok-4-1-fast`, `grok-code-fast-1`, `grok-imagine-image-pro` — confirming xAI does retire models from this family.
- Successor: none announced as of May 17, 2026 [UNKNOWN].
- Deprecation signals to monitor: xAI release announcements, alias migration guides, Breaking Changes notices in xAI docs.

**Compared to peers (sharpened by Dealbreaker):**
- vs. xai/grok-4-3: Grok 4.3 is not in beta; lower deprecation risk. Prefer Grok 4.3 for production stability.
- vs. anthropic/claude-opus-4-7: Claude Opus 4.7 has documented, advance-notice deprecation timelines. Grok 4.20 MA beta-status breaking changes can occur without the same lead time.

**Known limitations on this axis:**
- Beta breaking-change risk is unquantified — xAI does not publish change-freeze windows or migration lead times for beta models.
- Family precedent (May 15, 2026 retirements) confirms xAI will retire models; timeline for Grok 4.20 MA is unknown.

**Sources:**
- xAI official models overview (retirement list, internal reference `_official-models-overview.md`)
- [xAI Multi-Agent docs](https://docs.x.ai/developers/model-capabilities/text/multi-agent)
