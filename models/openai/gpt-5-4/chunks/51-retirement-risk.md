---
provider: openai
model: gpt-5-4
capability: retirement-risk
chunk_id: 51-retirement-risk
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: medium
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [lifecycle, deprecation, retirement, risk]
related_chunks: [50-release-history, 00-overview]
related_models: [openai/gpt-5-5]
peer_comparisons: []
---

**Summary** — GPT-5.4 carries moderate deprecation risk. OpenAI has an active cleanup cycle on legacy models, GPT-5.5 succeeded it only 7 weeks after launch, and the flagship slot belongs to GPT-5.5. No explicit deprecation notice for `gpt-5.4` exists in the supplied sources, but the rapid succession cadence makes it a stable-but-non-flagship choice rather than a long-lived anchor.

**Specifics:**
- **No explicit deprecation notice** for `gpt-5.4` in the supplied source set: near-term retirement is **[UNVERIFIED]**.
- **Rapid successor cadence:** GPT-5.5 arrived ~7 weeks after GPT-5.4 — suggests an intermediate release rather than a long-lifecycle anchor. ([marktechpost.com](https://www.marktechpost.com/2026/04/23/openai-releases-gpt-5-5-a-fully-retrained-agentic-model-that-scores-82-7-on-terminal-bench-2-0-and-84-9-on-gdpval/))
- **Active deprecation cleanup signal:** OpenAI's models overview already marks several adjacent models (legacy Codex variants, old o-series) as deprecated, implying an ongoing cleanup cycle. ([OpenAI models overview](https://developers.openai.com/api/docs/models/all))
- **Replacement path:** GPT-5.5 (`gpt-5.5`) for capability upgrade; GPT-5.4-mini for cost-driven downgrade.

**Compared to peers (sharpened by Dealbreaker):**
- No direct peer comparison applicable on this axis.

**Known limitations on this axis:**
- Systems built on `gpt-5.4` should monitor OpenAI deprecation notices; the 7-week GPT-5.5 succession is a meaningful signal to plan migration paths.

**Sources:**
- [OpenAI models overview](https://developers.openai.com/api/docs/models/all)
- [marktechpost.com GPT-5.5 release](https://www.marktechpost.com/2026/04/23/openai-releases-gpt-5-5-a-fully-retrained-agentic-model-that-scores-82-7-on-terminal-bench-2-0-and-84-9-on-gdpval/)
