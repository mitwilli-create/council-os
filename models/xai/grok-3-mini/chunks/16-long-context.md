---
provider: xai
model: grok-3-mini
capability: long-context
chunk_id: 16-long-context
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: medium
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [context-window, long-context, recall, needle-in-haystack]
related_chunks: [00-overview, 26-context-window, 41-known-limitations]
related_models: [xai/grok-4-3, xai/grok-4-20-multi-agent, anthropic/claude-opus-4-7]
peer_comparisons:
  - peer: xai/grok-4-3
    relation: weaker
    note: "grok-4.3 has 1M-token context vs. grok-3-mini's 131k — 7.6x larger window for repo-scale or book-length tasks."
  - peer: xai/grok-4-20-multi-agent
    relation: weaker
    note: "grok-4.20-multi-agent has 2M-token context — 15x larger."
  - peer: anthropic/claude-opus-4-7
    relation: comparable
    note: "Both have 200k-class context (Opus 4.7 is 200k); grok-3-mini at 131k is somewhat smaller but in the same order of magnitude."
---

**Summary** — Grok 3 Mini has a 131,072-token context window. In-context recall quality remains high up to approximately 100k tokens on synthetic needle-in-haystack tests; degradation is expected above that threshold. This is the primary architectural constraint for tasks involving long documents, large codebases, or extended conversation histories.

**Specifics:**
- **Context window:** 131,072 tokens. Source: mem0.ai and pricepertoken trackers; confirmed on Azure AI Foundry.
- **Output cap:** not separately published as of 2026-05-17.
- **Recall quality:** high up to ~100k tokens on synthetic needle-in-haystack tests; expected degradation above that threshold. Source: mem0.ai trackers.
- **Practical ceiling:** treat ~100k tokens as the effective reliable window for retrieval-sensitive tasks.

**Compared to peers (sharpened by Dealbreaker):**
- vs. xai/grok-4-3: 1M context is 7.6x larger. For tasks exceeding 131k tokens (long documents, large repos, extended agent histories), escalate to grok-4.3.
- vs. xai/grok-4-20-multi-agent: 2M context is 15x larger. For multi-agent coordination requiring very long shared context, escalate to grok-4.20-multi-agent.
- vs. anthropic/claude-opus-4-7: Opus 4.7 has 200k context — meaningfully larger than grok-3-mini's 131k. For tasks between 131k and 200k tokens, Opus 4.7 or grok-4.3 are required.

**Known limitations on this axis:**
- Hard cutoff at 131k — no graceful degradation beyond; requests exceeding the limit fail.
- Citation hallucination risk increases as context approaches 131k (known Grok family risk).
- Output cap not published — test for long-form generation tasks.

**Sources:**
- [mem0.ai pricepertoken trackers](https://pricepertoken.com)
- [Azure AI Foundry catalog](https://ai.azure.com/explore/models)
