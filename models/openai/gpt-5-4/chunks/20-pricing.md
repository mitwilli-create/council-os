---
provider: openai
model: gpt-5-4
capability: pricing
chunk_id: 20-pricing
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [pricing, cost, tokens, routing, budget]
related_chunks: [00-overview, 40-unique-strengths, 44-avoid-when]
related_models: [openai/gpt-5-5, openai/gpt-5-4-mini, openai/gpt-5-4-nano]
peer_comparisons:
  - peer: openai/gpt-5-5
    relation: stronger
    note: "GPT-5.4 is ~half the price of GPT-5.5 ($2.50/$15 vs $5/$30 per 1M tokens) — the primary economic justification for choosing GPT-5.4"
  - peer: openai/gpt-5-4-mini
    relation: weaker
    note: "Mini is $0.75/$4.50 — 3-4x cheaper than base; use mini when task is well-scoped and explicit"
  - peer: openai/gpt-5-4-nano
    relation: weaker
    note: "Nano is $0.20/$1.25 — 12x cheaper than base; use nano only for narrow labels/enums/short JSON"
---

**Summary** — GPT-5.4 is priced at $2.50 input / $15.00 output per 1M tokens — exactly half the cost of GPT-5.5 ($5/$30). This price gap is the primary routing argument for GPT-5.4: it delivers competitive coding and professional-work quality at materially lower cost when the GPT-5.5 benchmark uplift is not worth the 2× price. The sibling family spans from $0.20 nano to $5 GPT-5.5, making GPT-5.4 the mid-tier bridge.

**Specifics:**
- **GPT-5.4 input:** $2.50 / 1M tokens. ([pricepertoken.com](https://pricepertoken.com/pricing-page/model/openai-gpt-5.4), [finout.io](https://www.finout.io/blog/openai-pricing-in-2026), [devtk.ai](https://devtk.ai/en/blog/openai-api-pricing-guide-2026/))
- **GPT-5.4 output:** $15.00 / 1M tokens. (same sources)
- **GPT-5.4-mini:** $0.75 input / $4.50 output per 1M tokens. ([OpenAI models overview](https://developers.openai.com/api/docs/models/all))
- **GPT-5.4-nano:** $0.20 input / $1.25 output per 1M tokens. ([OpenAI models overview](https://developers.openai.com/api/docs/models/all))
- **GPT-5.5 (comparator):** $5.00 input / $30.00 output per 1M tokens. ([llm-stats.com](https://llm-stats.com/blog/research/gpt-5-5-vs-gpt-5-4))
- **Cached input:** ~$0.25 / 1M (10% of standard input) — corroborated by third-party sources; **[UNVERIFIED first-party]**.
- **Cached write:** **[UNKNOWN — would need first-party pricing table]**.
- **Batch discount:** **[UNKNOWN — OpenAI Batch API exists platform-wide; GPT-5.4-specific discount not in supplied sources]**.

**Routing rule by price tier:**

| Model | Input $/1M | Output $/1M | Route when |
|---|---|---|---|
| GPT-5.4-nano | $0.20 | $1.25 | Narrow labels, enums, short JSON |
| GPT-5.4-mini | $0.75 | $4.50 | Well-scoped subagents, computer use, high volume |
| GPT-5.4 (base) | $2.50 | $15.00 | Coding/professional work where GPT-5.5 uplift not justified |
| GPT-5.5 | $5.00 | $30.00 | Max agentic/coding accuracy, budget available |

**Compared to peers (sharpened by Dealbreaker):**
- vs. openai/gpt-5-5: GPT-5.4 is ~50% cheaper on both input and output; GPT-5.5 leads on 9/10 benchmarks. The 0.9 pp SWE-Bench Pro gap does not justify 2× spend for most workloads — Terminal-Bench gap (7.6 pp) might.
- vs. openai/gpt-5-4-mini: mini is 3-4x cheaper; base is worth the premium when ambiguity resolution, complex formatting, or multi-step orchestration is required.
- vs. openai/gpt-5-4-nano: nano is 12x cheaper; base is required for any task beyond narrow classification.

**Known limitations on this axis:**
- Cached pricing is unverified from first-party OpenAI docs in the supplied set.
- Batch discount details are unknown; verify before budgeting batch pipelines.

**Sources:**
- [pricepertoken.com](https://pricepertoken.com/pricing-page/model/openai-gpt-5.4)
- [finout.io OpenAI pricing 2026](https://www.finout.io/blog/openai-pricing-in-2026)
- [devtk.ai OpenAI API pricing guide 2026](https://devtk.ai/en/blog/openai-api-pricing-guide-2026/)
- [llm-stats.com GPT-5.5 vs GPT-5.4](https://llm-stats.com/blog/research/gpt-5-5-vs-gpt-5-4)
- [OpenAI models overview](https://developers.openai.com/api/docs/models/all)
