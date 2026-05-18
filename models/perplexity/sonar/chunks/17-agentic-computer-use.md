---
provider: perplexity
model: sonar
capability: agentic-computer-use
chunk_id: 17-agentic-computer-use
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: false
source_authority: self_research
confidence: low
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [agentic, computer-use, browser, autonomous]
related_chunks: [11-tool-use, 44-avoid-when]
related_models: []
peer_comparisons: []
---

**Summary** — Sonar (base) is not an agentic model. It is oriented toward single-turn answer generation with web retrieval. No browser automation, OS control, or autonomous agentic loop capability is documented. R1 Dealbreaker Strike 15 confirmed this is documentable as a hard limit, not an unknown.

**Specifics:**
- No browser automation or computer-use capability. [R1 Dealbreaker Strike 15: "Sonar is documented as a search-only model with no agentic loop"]
- No autonomous multi-step agentic loop. [self_research, confirmed by R1 Dealbreaker]
- Search-backed answer generation is the full scope of the model's autonomy. [official positioning]

**Compared to peers (sharpened by Dealbreaker):**
- No agentic peer comparison applicable — Sonar base has no agentic capability.

**Known limitations on this axis:**
- Do not route autonomous browser/OS control tasks to Sonar.
- Use a model with explicit computer-use support for agentic workflows.

**Sources:**
- R1 Dealbreaker Strike 15: `/models/perplexity/sonar/research-rounds/round-1-dealbreaker.md`
