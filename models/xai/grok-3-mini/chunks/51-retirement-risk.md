---
provider: xai
model: grok-3-mini
capability: retirement-risk
chunk_id: 51-retirement-risk
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: medium
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [lifecycle, retirement, deprecation, survivorship]
related_chunks: [00-overview, 50-release-history]
related_models: [xai/grok-4-3, xai/grok-4-20-multi-agent]
peer_comparisons:
  - peer: xai/grok-4-3
    relation: different-approach
    note: "grok-4.3 is the likely successor path if grok-3-mini is eventually retired; no timeline published."
---

**Summary** — Grok 3 Mini survived the May 15, 2026 xAI retirement wave that retired grok-3 base and several grok-4 variants. No deprecation signals have been published for grok-3-mini as of 2026-05-17. xAI has positioned it as the permanent low-cost tier in the post-retirement lineup. However, the May 2026 retirement wave demonstrates that xAI will retire models without extended advance notice.

**Specifics:**
- **Survival status:** explicitly preserved on the May 15, 2026 retirement migration page (`docs.x.ai/developers/migration/may-15-retirement`). One of two surviving text-only Grok models.
- **Deprecation signals:** none published as of 2026-05-17.
- **Positioning:** described by xAI as the permanent cheap-tier option in the post-retirement lineup — implicit commitment to continued availability.
- **Predecessor retirement precedent:** grok-3 BASE was retired on May 15, 2026. The Grok family has experienced multiple retirement events since launch. Monitor `docs.x.ai/developers/migration/` for future announcements.
- **Successor:** none announced. grok-4.3 is the next-tier model, not a direct replacement.

**Compared to peers (sharpened by Dealbreaker):**
- vs. xai/grok-4-3: grok-4.3 is the likely escalation and eventual replacement path if grok-3-mini is retired; its higher cost reflects its higher capability tier.

**Known limitations on this axis:**
- xAI retirement decisions have historically been announced without multi-month lead time. No SLA on model availability has been published.
- Callers should use the pinned `grok-3-mini` model ID (not an evergreen alias) and monitor the xAI migration page for deprecation notices.

**Sources:**
- [xAI migration/may-15-retirement](https://docs.x.ai/developers/migration/may-15-retirement)
- [xAI model overview — May 2026](https://docs.x.ai/docs)
