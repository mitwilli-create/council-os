---
provider: perplexity
model: sonar
capability: overview
chunk_id: 00-overview
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: false
source_authority: self_research
confidence: low
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [identity, positioning, family, perplexity, sonar]
related_chunks: [20-pricing, 40-unique-strengths, 41-known-limitations, 44-avoid-when, 50-release-history]
related_models: [perplexity/sonar-pro, perplexity/sonar-reasoning-pro, perplexity/sonar-deep-research]
peer_comparisons:
  - peer: perplexity/sonar-pro
    relation: weaker
    note: "Sonar Pro is $3/$15 (vs $1/$1), 200k context (vs 127k), 2x search results, deeper retrieval — the upgrade path when one-step lookup is insufficient"
  - peer: perplexity/sonar-reasoning-pro
    relation: different-approach
    note: "Sonar Reasoning Pro adds chain-of-thought at $2/$8; Sonar base has no CoT and should not be used for problem-solving tasks"
  - peer: perplexity/sonar-deep-research
    relation: weaker
    note: "Sonar Deep Research is the async multi-pass tier (5-10x cost); use when single-pass retrieval is insufficient"
---

**Summary** — Sonar (base) is Perplexity's cheapest search-grounded model, released January 27, 2025. It is not a general-purpose frontier LLM — it is a "Search Model" explicitly positioned for quick factual queries, topic summaries, product comparisons, and current events. Its defining advantage is price: $1/$1 per 1M tokens input/output, making it the cost floor of the Perplexity Sonar family. NOTE: R2 research was abandoned — Sonar refused the revision prompt as adversarial. All claims below are sourced from R1 self-research + R1 Dealbreaker adjudication. Confidence is low on specifics not verified by official docs.

**Specifics:**
- Official model ID: `sonar` (documented in Perplexity's official models overview; marked [UNKNOWN] by R1 self-research but resolved by R1 Dealbreaker). [R1 Dealbreaker Strike 2]
- Builder: Perplexity AI. Release date: January 27, 2025. [R1 Dealbreaker Strike 1 — web-verified during adjudication]
- Predecessor: Perplexity's earlier answer/search product (no model-named predecessor). [low confidence, self_research]
- Provider positioning (from official docs, per R1 Dealbreaker Strike 4): "lightweight, cost-effective models designed to retrieve and synthesize information efficiently. Excel at quick factual queries, topic summaries, product comparisons, and current events."
- Family position: Sonar is the cheapest of four Sonar variants. Sonar Pro ($3/$15) is the next tier. Sonar Reasoning Pro adds CoT. Sonar Deep Research is the async multi-pass tier.
- This is the COST-FLOOR model in the Perplexity Sonar lineup — its uniqueness is price, not capability.

**Compared to peers (sharpened by Dealbreaker):**
- vs. perplexity/sonar-pro: Sonar base is weaker on retrieval depth (1x vs 2x search results), context window (127k vs 200k), and handles only single-pass tasks. Wins on cost ($1/$1 vs $3/$15).
- vs. perplexity/sonar-reasoning-pro: Sonar base has no CoT. Route to Sonar Reasoning Pro for any problem-solving or analytical task.
- vs. perplexity/sonar-deep-research: Sonar base is single-pass only. Deep Research is the async multi-pass tier for synthesis across many sources.
- Cross-provider peers: stale comparisons in R1 (GPT-4.1, Claude 4 Sonnet, Gemini 2.5 Pro) were all stripped by R1 Dealbreaker Strike 24. No updated cross-provider comparison available.

**Known limitations on this axis:**
- R2 research was abandoned due to model refusal. Profile is sourced from R1 self-research (149 lines, 27 [UNKNOWN] markers, 18 [INFERRED] markers). Treat all claims as low-confidence until R3 is completed against official docs.
- Official Perplexity docs exist (api-guides/perplexity/_official-models-overview.md) but were not consulted by the model during R1 self-research — a credibility signal per R1 Dealbreaker executive verdict.

**Sources:**
- R1 self-research: `/models/perplexity/sonar/research-rounds/round-1-self-research.md`
- R1 Dealbreaker: `/models/perplexity/sonar/research-rounds/round-1-dealbreaker.md`
- R2 Dealbreaker (refusal): `/models/perplexity/sonar/research-rounds/round-2-dealbreaker.md`
