---
provider: perplexity
model: sonar-deep-research
capability: web-grounding
chunk_id: 12-web-grounding
last_research_round: 3
last_updated: 2026-05-17
verified_by_dealbreaker: false
source_authority: self_research
confidence: medium
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [web-grounding, citations, citation-reliability, freshness, search-fan-out]
related_chunks: [10-reasoning, 20-pricing, 41-known-limitations, 43-ideal-tasks]
related_models: [perplexity/sonar-pro, openai/gpt-5-5, google/gemini-3-1-pro]
peer_comparisons:
  - peer: perplexity/sonar-pro
    relation: stronger
    note: "SDR issues dozens of searches vs. Sonar Pro's moderate multi-search; SDR synthesizes hundreds of sources vs. Sonar Pro's lighter coverage. Cost is 5–10× higher as a result."
  - peer: openai/gpt-5-5
    relation: comparable
    note: "GPT-5.5 browsing uses multiple search providers; citation metadata format differs. GPT-5.5 leads on code-heavy research; SDR has richer citation UI in Perplexity's own products."
---

**Summary** — Web grounding is the core differentiator of Sonar Deep Research. Each query triggers an internal multi-stage pipeline: planning → dozens of web searches → hundreds of source retrievals → filter, cluster, synthesize → long-form output with inline citations and machine-readable citation metadata. Citation tokens are billed separately at $2/M. However, citation reliability is a known vulnerability: a Columbia Journalism Review study of Sonar Pro found ~37% of citations problematic. SDR uses the same search-and-citation stack, making analogous failure classes plausible — but SDR-specific citation error rates have not been measured independently.

**Specifics:**
- Search fan-out: "dozens of searches" and "hundreds of sources" per complex query (Perplexity-stated). [INFERRED from Perplexity marketing]
- Citation format: inline identifiers in natural language output + separate machine-readable map of {citation ID → URL, title, snippet}.
- Billing: citation tokens (text extracted from retrieved pages passed as context) billed at $2/M — distinct from input ($2/M), output ($8/M), and reasoning ($3/M) tokens. See 20-pricing.
- CJR citation accuracy study: ~37% of Sonar Pro citations problematic (misattributed, irrelevant, or fabricated bibliographic detail). SDR uses same retrieval stack → plausibly similar failure classes, but not the same quantitative rate. This is an [INFERRED] vulnerability pattern, not a confirmed SDR measurement.
- R2 profile incorrectly asserted SDR "inherits" the 37% rate directly; this revision weakens that claim to analogous failure classes only.
- Freshness: effectively near-real-time for indexed web content (days to weeks old); underlying LLM has older static training cutoff. Combination allows more recent event coverage than offline models.
- Search depth control: Perplexity does not expose user-facing parameters to cap search budget per query.

**Compared to peers (sharpened by Dealbreaker):**
- vs. perplexity/sonar-pro: SDR is the "depth" option; Sonar Pro covers the "speed + moderate depth" tier. 5–10× cost premium must be justified by breadth requirement.
- vs. openai/gpt-5-5: Both offer web-grounded synthesis; GPT-5.5 leads on code-related research tasks. Citation metadata format and UI integration differ — SDR's is tuned for Perplexity's consumer UI.
- vs. xai/grok-4-3: Grok led on falsification-focused structural reasoning (DRA: ~46.9% vs. SDR stack's ~32.7%). For adversarial fact-checking tasks, Grok is a stronger choice.

**Known limitations on this axis:**
- Citation reliability is not guaranteed; must be spot-checked in high-stakes domains.
- No user control over search depth or budget within a single query.
- If retrieved sources are sparse, contested, or biased, SDR may over-weight low-quality content without surfacing the quality signal.
- Internal summarization of older context can cause detail loss in long multi-turn sessions.

**Sources:**
- R3 self-research §2.3 (round-3-self-research.md)
- Columbia Journalism Review study (cited in §2.3)
- DRA benchmark paper (cited in §2.1)
