---
provider: openai
model: gpt-5-5
capability: pricing
chunk_id: 20-pricing
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: medium
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [pricing, cost, batch-api, token-efficiency, budget]
related_chunks: [21-latency-throughput, 26-context-window, 43-ideal-tasks, 44-avoid-when]
related_models:
  - openai/gpt-5-4
  - openai/gpt-5-5-pro
peer_comparisons:
  - peer: openai/gpt-5-4
    relation: different-approach
    note: "GPT-5.5 is 2× the sticker price of GPT-5.4 ($5 vs $2.50/1M input); ~40% output-token reduction partially offsets to ~20% effective cost premium on Codex-class tasks"
  - peer: openai/gpt-5-5-pro
    relation: weaker
    note: "GPT-5.5 Pro is 6× base GPT-5.5 sticker price ($30/$180 vs $5/$30 per 1M tokens)"
---

**Summary** — GPT-5.5 costs $5/1M input and $30/1M output tokens. GPT-5.5 Pro is 6× higher at $30/$180. GPT-5.5 is 2× the sticker price of GPT-5.4, but generates ~40% fewer output tokens on equivalent Codex-class tasks, reducing the effective premium to approximately 20% on those workloads. Batch API gives a 50% discount.

**Specifics:**
- **GPT-5.5:** $5/1M input, $30/1M output (Dealbreaker verified pricing summary).
- **GPT-5.5 Pro:** $30/1M input, $180/1M output (6× base GPT-5.5 sticker).
- **GPT-5.4 (comparison):** $2.50/1M input, $15/1M output (2× cheaper sticker than GPT-5.5).
- **Batch API:** 50% discount (Dealbreaker summary; exact OpenAI pricing page citation not independently confirmed in this chat).
- **Output efficiency:** ~40% fewer output tokens for equivalent Codex tasks vs GPT-5.4. A 2× sticker increase combined with 40% output reduction yields approximately **~20% higher effective cost** on output-heavy Codex workflows (Dealbreaker pricing analysis).
- **Cached input pricing:** OpenAI prompt caching is supported; exact cached read/write rates for GPT-5.5 are unknown — check current OpenAI pricing page.

**Compared to peers (sharpened by Dealbreaker):**
- vs. openai/gpt-5-4: GPT-5.5 is 2× sticker but ~20% effective premium on Codex tasks due to output efficiency. Worth it when Terminal-Bench/ARC-AGI-2 benchmark parity matters.
- vs. openai/gpt-5-5-pro: Pro is 6× base price; only justify for high-value multi-hop research (BrowseComp Pro) or tasks where a wrong answer is materially more expensive than the model cost.

**Known limitations on this axis:**
- Cached read/write multipliers for GPT-5.5 are not in research materials; check current pricing page before building budget models.
- 50% batch discount is from Dealbreaker summary, not directly confirmed against a live pricing page in this round.

**Sources:**
- Dealbreaker Round 2 pricing/context summary
- [OpenAI pricing page](https://platform.openai.com/docs/pricing)
