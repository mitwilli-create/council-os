---
provider: perplexity
model: sonar
capability: reasoning
chunk_id: 10-reasoning
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: false
source_authority: self_research
confidence: low
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [reasoning, chain-of-thought, problem-solving, limits]
related_chunks: [00-overview, 40-unique-strengths, 41-known-limitations, 44-avoid-when]
related_models: [perplexity/sonar-reasoning-pro, perplexity/sonar-pro]
peer_comparisons:
  - peer: perplexity/sonar-reasoning-pro
    relation: weaker
    note: "Sonar Reasoning Pro is the family member with explicit CoT; Sonar base has no thinking-effort controls"
---

**Summary** — Sonar (base) is NOT a reasoning model. It is a Search Model. There is no chain-of-thought exposure, no thinking-effort controls, and no documented reasoning-level setting. The model can answer multi-step questions by synthesizing retrieved sources, but this is search synthesis, not deliberate reasoning. For any task requiring problem decomposition or analytical CoT, route to Sonar Reasoning Pro.

**Specifics:**
- No chain-of-thought capability documented. [R1 Dealbreaker Strike 10: "Sonar is a 'Search Model' and Sonar Reasoning Pro is the family member with CoT"]
- No reasoning-effort or thinking-level controls. [self_research, [INFERRED]]
- Can synthesize multi-step answers from retrieved sources but this is retrieval-backed, not deliberate reasoning. [self_research, [INFERRED]]
- Official family positioning per Perplexity docs: Sonar = Search Model, Sonar Reasoning Pro = reasoning with CoT. [R1 Dealbreaker Strike 10, official doc]

**Compared to peers (sharpened by Dealbreaker):**
- vs. perplexity/sonar-reasoning-pro: weaker — Sonar Reasoning Pro exposes CoT at $2/$8; Sonar base has none.
- Cross-provider reasoning peers: no verified comparison available (all stale peers stripped by R1 Dealbreaker Strike 24).

**Known limitations on this axis:**
- Do not route math, proof, or analytical problems to Sonar base.
- Do not use for tasks that require reasoning traces or audit-able step-by-step logic.

**Sources:**
- R1 Dealbreaker Strike 10: `/models/perplexity/sonar/research-rounds/round-1-dealbreaker.md`
- R1 self-research Section 2: `/models/perplexity/sonar/research-rounds/round-1-self-research.md`
