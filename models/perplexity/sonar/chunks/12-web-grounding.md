---
provider: perplexity
model: sonar
capability: web-grounding
chunk_id: 12-web-grounding
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: false
source_authority: self_research
confidence: medium
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [web-grounding, search, citations, retrieval, freshness]
related_chunks: [00-overview, 40-unique-strengths, 43-ideal-tasks, 41-known-limitations]
related_models: [perplexity/sonar-pro, perplexity/sonar-deep-research]
peer_comparisons:
  - peer: perplexity/sonar-pro
    relation: weaker
    note: "Sonar Pro retrieves 2x more search results per query — meaningfully deeper retrieval for the same search task"
  - peer: perplexity/sonar-deep-research
    relation: weaker
    note: "Sonar Deep Research is async multi-pass; Sonar base is single-pass — fewer sources, less synthesis depth"
---

**Summary** — Web grounding is Sonar's core capability and the reason it exists. Every response is backed by live web retrieval and cited sources. This is the defining product pattern for the Perplexity Sonar family. Sonar base performs single-pass retrieval with 1x search results per query — adequate for simple factual lookups but shallower than Sonar Pro (2x results) or Sonar Deep Research (multi-pass). Freshness is retrieval-dependent rather than cutoff-dependent.

**Specifics:**
- Built-in web retrieval with citation is the core product behavior. [self_research, official positioning: "retrieve and synthesize information efficiently"]
- Single-pass retrieval: 1x search results per query (vs. Sonar Pro's 2x). [R1 Dealbreaker Strike 26 — price/performance crossover analysis]
- Freshness is governed by retrieval currency, not a fixed training cutoff. [self_research, [INFERRED]]
- Can miss niche, paywalled, or rapidly-changing information. [self_research, [INFERRED]]
- Per-request fees apply: $5/1,000 low-context requests, $12/1,000 high-context requests — in addition to token pricing. [R1 Dealbreaker Strike 17, web-verified during adjudication]

**Compared to peers (sharpened by Dealbreaker):**
- vs. perplexity/sonar-pro: weaker retrieval depth (1x vs 2x results); same citation behavior; Sonar Pro also has 200k context vs Sonar's 127k.
- vs. perplexity/sonar-deep-research: significantly weaker — Deep Research is the multi-pass async tier for thorough synthesis.
- Cross-provider peers: stale comparisons stripped. No current-gen cross-provider web-grounding comparison verified.

**Known limitations on this axis:**
- Retrieval timeout / source instability can degrade responses when web sources are slow or unavailable. [self_research, [INFERRED]]
- Citation drift documented in the wild (cites a URL whose content does not support the claim). [R1 Dealbreaker Strike 28]
- Hallucination on niche queries is a known failure mode. [R1 Dealbreaker Strike 28]
- Per-request fees make Sonar expensive at high volume for short queries — calculate total cost (token + per-request) before choosing over Sonar Pro.

**Sources:**
- R1 Dealbreaker: `/models/perplexity/sonar/research-rounds/round-1-dealbreaker.md`
- R1 self-research: `/models/perplexity/sonar/research-rounds/round-1-self-research.md`
