---
provider: openai
model: gpt-5-4
capability: context-window
chunk_id: 26-context-window
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: self_research
confidence: medium
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [context-window, tokens, output-cap, compaction]
related_chunks: [16-long-context, 23-prompt-caching]
related_models: [openai/gpt-5-4-mini, openai/gpt-5-4-nano]
peer_comparisons:
  - peer: openai/gpt-5-4-mini
    relation: comparable
    note: "Mini confirmed 400k/128k from first-party docs; base inferred to match"
---

**Summary** — GPT-5.4 context window is 400k input / 128k output, inferred from sibling first-party model pages (GPT-5.4-mini and GPT-5.4-nano both confirmed at these limits) and Dealbreaker-verified as consistent. A first-party spec page excerpt for base `gpt-5.4` was not included in the supplied materials; treat as [INFERRED].

**Specifics:**
- **GPT-5.4 context window:** 400k input / 128k output — **[INFERRED from sibling docs and Dealbreaker verification]**. ([gpt-5.4-mini model page](https://developers.openai.com/api/docs/models/gpt-5.4-mini), [gpt-5.4-nano model page](https://developers.openai.com/api/docs/models/gpt-5.4-nano))
- **Compaction endpoint:** `/responses/compact` is documented for long-session management; the existence of this endpoint signals that raw context accumulation degrades output quality before the hard limit is hit. ([OpenAI prompt guidance](https://developers.openai.com/api/docs/guides/prompt-guidance))
- Output cap of 128k is large but sessions can degrade before hitting it — compact proactively.

**Compared to peers (sharpened by Dealbreaker):**
- vs. openai/gpt-5-4-mini: comparable window size per sibling docs.

**Known limitations on this axis:**
- The 400k/128k figure for base `gpt-5.4` is inferred, not read from a first-party `gpt-5.4` spec page in the supplied materials. Verify before making SLA commitments around context depth.

**Sources:**
- [OpenAI gpt-5.4-mini model page](https://developers.openai.com/api/docs/models/gpt-5.4-mini)
- [OpenAI gpt-5.4-nano model page](https://developers.openai.com/api/docs/models/gpt-5.4-nano)
- [OpenAI prompt guidance](https://developers.openai.com/api/docs/guides/prompt-guidance)
