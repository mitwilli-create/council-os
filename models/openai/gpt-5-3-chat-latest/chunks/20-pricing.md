---
provider: openai
model: gpt-5-3-chat-latest
capability: pricing
chunk_id: 20-pricing
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [pricing, cost, instant-tier, cost-crossover, not-production-recommended]
related_chunks: [00-overview, 23-prompt-caching, 24-batch-api, 43-ideal-tasks, 44-avoid-when]
related_models: [openai/gpt-5-5, openai/chat-latest, openai/gpt-5-4-mini]
peer_comparisons:
  - peer: openai/gpt-5-5
    relation: stronger
    note: "GPT-5.3 Chat is ~65% cheaper on input, ~53% cheaper on output vs GPT-5.5. GPT-5.5 is the production recommendation."
  - peer: openai/chat-latest
    relation: stronger
    note: "GPT-5.3 Chat is ~2.86x cheaper on input, ~2.14x cheaper on output vs chat-latest, at the cost of smaller context/output caps."
---

**Summary** — GPT-5.3 Chat pricing: $1.75/M input tokens, $14.00/M output tokens, $0.175/M cached input tokens. This is the Instant-tier price point — meaningfully cheaper than GPT-5.5 and chat-latest, with smaller context and output caps as the trade-off. OpenAI does NOT recommend this model for production API use despite the lower price; that recommendation points to GPT-5.5.

**Specifics:**
- Input: $1.75 per 1M tokens. (https://developers.openai.com/api/docs/models/gpt-5.3-chat-latest; Dealbreaker-verified)
- Output: $14.00 per 1M tokens. (same)
- Cached input reads: $0.175 per 1M tokens (~90% discount vs. uncached input). (same)
- vs. GPT-5.5: $5.00/M input ($30.00/M output) → GPT-5.3 Chat saves 65% on input, 53% on output. (Dealbreaker math: ($5−$1.75)/$5 = 65%; ($30−$14)/$30 = 53.3%)
- vs. chat-latest: $5.00/M input ($30.00/M output) → GPT-5.3 Chat is 2.86× cheaper input, 2.14× cheaper output. ($5/$1.75 = 2.857; $30/$14 = 2.143 — Dealbreaker-verified)
- vs. GPT-5.4-mini / GPT-5 mini/nano: smaller/cheaper models exist if even lower cost suffices; exact pricing depends on those model docs. [INFERRED]
- Batch API discount available but exact discount rate not stated on model page. [INFERRED — see 24-batch-api]

**Compared to peers (sharpened by Dealbreaker):**
- vs. openai/gpt-5-5: Cost advantage is real and verified, but GPT-5.5 is OpenAI's production recommendation. For cost-sensitive tasks within 128k/16k limits and no hard reasoning needs, GPT-5.3 Chat is the right economic choice.
- vs. openai/chat-latest: Choose GPT-5.3 Chat when 128k context and 16k output are sufficient. Migrating from chat-latest risks silent 272k context loss.

**Known limitations on this axis:**
- Output costs ($14/M) are non-trivial for high-volume, long-response workloads — model may not be cheapest for output-heavy pipelines. Compare vs. GPT-5.4-mini or GPT-5 nano if output volume is high. [INFERRED]
- Batch discount rate unconfirmed for this model. [INFERRED]

**Sources:**
- [GPT-5.3 Chat model page — pricing](https://developers.openai.com/api/docs/models/gpt-5.3-chat-latest)
- [chat-latest model page — pricing](https://developers.openai.com/api/docs/models/chat-latest)
- Round-2 verdict operational_facts + sibling_differentiation
