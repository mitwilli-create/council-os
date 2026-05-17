---
provider: openai
model: gpt-5-4
capability: overview
chunk_id: 00-overview
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [identity, positioning, family, openai, gpt-5]
related_chunks: [20-pricing, 40-unique-strengths, 50-release-history, 51-retirement-risk]
related_models: [openai/gpt-5-5, openai/gpt-5-4-pro, openai/gpt-5-4-mini, openai/gpt-5-4-nano]
peer_comparisons:
  - peer: openai/gpt-5-5
    relation: weaker
    note: "GPT-5.5 is the current flagship; GPT-5.4 is the affordable mid-tier released ~7 weeks prior"
  - peer: openai/gpt-5-4-pro
    relation: weaker
    note: "GPT-5.4-pro is described by OpenAI as producing smarter, more precise responses"
  - peer: openai/gpt-5-4-mini
    relation: stronger
    note: "GPT-5.4 base outperforms mini on ambiguity resolution and multi-step planning"
  - peer: openai/gpt-5-4-nano
    relation: stronger
    note: "GPT-5.4-nano is cheapest and narrowest; base handles complex tasks nano cannot"
---

**Summary** — GPT-5.4 is OpenAI's mid-cost model for coding and professional work, released March 5, 2026. It is not the flagship — GPT-5.5 succeeded it approximately seven weeks later — but it occupies the deliberate price-performance slot between expensive frontier accuracy (GPT-5.5, GPT-5.4-pro) and the much cheaper, more brittle throughput tiers (mini, nano). OpenAI's own positioning line is: "A more affordable model for coding and professional work."

**Specifics:**
- Official model IDs: `gpt-5.4`, `gpt-5.4-pro`, `gpt-5.4-mini`, `gpt-5.4-nano`. ([OpenAI models overview](https://developers.openai.com/api/docs/models/all))
- Builder: OpenAI. Release date: March 5, 2026. ([pricepertoken.com](https://pricepertoken.com/pricing-page/model/openai-gpt-5.4))
- Predecessor: **GPT-5.2** — OpenAI prompt guidance frames GPT-5.4 relative to GPT-5.2 and includes migration guidance. ([OpenAI prompt guidance](https://developers.openai.com/api/docs/guides/prompt-guidance))
- Successor: **GPT-5.5**, released April 23, 2026. ([marktechpost.com](https://www.marktechpost.com/2026/04/23/openai-releases-gpt-5-5-a-fully-retrained-agentic-model-that-scores-82-7-on-terminal-bench-2-0-and-84-9-on-gdpval/))
- Sibling positioning: pro = smarter/more precise; mini = coding/computer-use/subagents at lower cost; nano = cheapest GPT-5.4-class. ([OpenAI models overview](https://developers.openai.com/api/docs/models/all))

**Compared to peers (sharpened by Dealbreaker):**
- vs. openai/gpt-5-5: weaker on 9 of 10 shared benchmarks including Terminal-Bench 2.0 (75.1% vs 82.7%) and ARC-AGI-2; costs half as much ($2.50/$15 vs $5/$30 per 1M).
- vs. openai/gpt-5-4-mini: stronger on ambiguity resolution, multi-step planning, complex formatting; costs 3-4x more per token.
- vs. openai/gpt-5-4-nano: far stronger on reasoning and orchestration; costs 12x more per token.

**Known limitations on this axis:**
- Not the flagship in its own family from day one — GPT-5.5 arrived 7 weeks post-launch.
- No clearly exclusive capability vs. peers or siblings; positioning is primarily economic.

**Sources:**
- [OpenAI models overview](https://developers.openai.com/api/docs/models/all)
- [OpenAI prompt guidance](https://developers.openai.com/api/docs/guides/prompt-guidance)
- [pricepertoken.com](https://pricepertoken.com/pricing-page/model/openai-gpt-5.4)
- [marktechpost.com GPT-5.5 release](https://www.marktechpost.com/2026/04/23/openai-releases-gpt-5-5-a-fully-retrained-agentic-model-that-scores-82-7-on-terminal-bench-2-0-and-84-9-on-gdpval/)
