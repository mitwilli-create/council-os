---
provider: perplexity
model: sonar
capability: ideal-tasks
chunk_id: 43-ideal-tasks
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: false
source_authority: self_research
confidence: low
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [routing, ideal-tasks, search, factual-lookup, cost-floor]
related_chunks: [00-overview, 40-unique-strengths, 44-avoid-when, 12-web-grounding, 20-pricing]
related_models: [perplexity/sonar-pro]
peer_comparisons:
  - peer: perplexity/sonar-pro
    relation: comparable
    note: "Both handle simple search tasks; use Sonar base when cost is the binding constraint and shallow retrieval is acceptable"
---

**Summary** — Route to Sonar (base) for simple, one-step search-and-summarize tasks where cost is the primary constraint and shallow retrieval (1x search results, 127k context) is sufficient. It is the right choice for high-volume, short factual queries where the per-request fee economics work out favorably. Do not use for anything beyond single-pass, single-question lookup.

**Specifics:**
- Simple one-step search + summarization — Sonar's primary use case. [self_research, R1 self-research Section 7, R2 Dealbreaker routing implications]
- Factual lookups with citation — e.g., "What is the current API pricing for X?" [self_research]
- Current-events research where recency matters and depth is secondary. [self_research]
- Product/docs lookups where a single retrieved answer suffices. [self_research]
- Comparative shopping or software/vendor comparisons at simple one-pass level. [self_research]
- Fact-checking a claim against current public sources — single pass. [self_research]
- Cost-floor research workflows where $1/$1 token pricing + per-request fee math beats Sonar Pro. [R1 Dealbreaker Strike 26, R2 Dealbreaker routing]
- High-volume short queries where cost per query dominates the routing decision. [R2 Dealbreaker routing implications]

**Compared to peers (sharpened by Dealbreaker):**
- vs. perplexity/sonar-pro: identical task types — use Sonar base when (a) single-pass, (b) 127k context sufficient, (c) shallow retrieval acceptable, AND (d) per-request fee math favors base.

**Known limitations on this axis:**
- These ideal tasks are all also handled by Sonar Pro, which has deeper retrieval. Sonar base's ideal-task set is fully subsumed by Pro's capabilities.
- The only justification for routing to Sonar base over Sonar Pro is cost.

**Sources:**
- R1 self-research Section 7: `/models/perplexity/sonar/research-rounds/round-1-self-research.md`
- R2 Dealbreaker routing implications: `/models/perplexity/sonar/research-rounds/round-2-dealbreaker.md`
- R1 Dealbreaker Strike 26: `/models/perplexity/sonar/research-rounds/round-1-dealbreaker.md`
