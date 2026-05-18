---
provider: perplexity
model: sonar
capability: long-context
chunk_id: 16-long-context
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: false
source_authority: self_research
confidence: low
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [context-window, long-context, recall, tokens]
related_chunks: [26-context-window, 00-overview]
related_models: [perplexity/sonar-pro]
peer_comparisons:
  - peer: perplexity/sonar-pro
    relation: weaker
    note: "Sonar Pro has 200k context; Sonar base has 127k — 57% smaller, a meaningful constraint on long-document tasks"
---

**Summary** — Sonar (base) has a 127,072-token context window, confirmed by web-search evidence during R1 Dealbreaker adjudication. This was entirely missed in R1 self-research (Strike 9). Long-context recall quality at that window size is not documented. For tasks exceeding 127k tokens, route to Sonar Pro (200k) or Gemini-class models.

**Specifics:**
- Context window: **127,072 tokens**. [R1 Dealbreaker Strike 9, web-verified during adjudication]
- Sonar Pro context window: 200k tokens — 57% larger. [R1 Dealbreaker, web-verified]
- Output cap: [UNKNOWN]. [self_research]
- In-context recall quality at length: [UNKNOWN]. [self_research]

**Compared to peers (sharpened by Dealbreaker):**
- vs. perplexity/sonar-pro: weaker — 127k vs 200k context; route to Pro for long-document tasks.

**Known limitations on this axis:**
- 127k context means tasks with very large document sets must be routed elsewhere.
- Long-context recall quality is undocumented — do not assume SOTA recall at depth.

**Sources:**
- R1 Dealbreaker Strike 9: `/models/perplexity/sonar/research-rounds/round-1-dealbreaker.md`
