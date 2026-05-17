---
provider: openai
model: gpt-5-4
capability: changelog-since-prior
chunk_id: 52-changelog-since-prior
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: medium
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [changelog, migration, predecessor, gpt-5-2]
related_chunks: [50-release-history, 51-retirement-risk]
related_models: []
peer_comparisons: []
---

**Summary** — GPT-5.4 changed from its predecessor GPT-5.2 in ways OpenAI documents explicitly via migration guidance and "new in GPT-5.4 vs GPT-5.2" framing. The specific delta includes improvements to agentic workflow robustness, multi-step persistence, and professional-work quality. No complete changelog was included in the supplied source set — the migration framing is the strongest available signal.

**Specifics:**
- **Predecessor:** GPT-5.2. OpenAI prompt guidance explicitly frames upgrades relative to GPT-5.2 and includes migration guidance from `gpt-5.2` to `gpt-5.4`. ([OpenAI prompt guidance](https://developers.openai.com/api/docs/guides/prompt-guidance))
- **Documented improvements vs GPT-5.2:** Agentic workflow robustness, multi-step work persistence, batched/parallel tool call accuracy, professional formatting fidelity. (inferred from the "new in GPT-5.4" framing in prompt guidance; exact diff not published in supplied sources)
- **New operational parameters introduced:** `reasoning_effort` (values: none/low/medium/high/xhigh) and `/responses/compact` endpoint are both described in the GPT-5.4 prompt guidance, implying these are part of the GPT-5.4 surface. ([OpenAI prompt guidance](https://developers.openai.com/api/docs/guides/prompt-guidance))
- **GPT-5.2 retirement date:** **[UNKNOWN — would need deprecation notice]**.

**Compared to peers (sharpened by Dealbreaker):**
- No cross-provider changelog comparisons applicable.

**Known limitations on this axis:**
- A complete, itemized GPT-5.2 → GPT-5.4 changelog was not included in the supplied source set; the delta above is inferred from "new in GPT-5.4" framing.

**Sources:**
- [OpenAI prompt guidance](https://developers.openai.com/api/docs/guides/prompt-guidance)
