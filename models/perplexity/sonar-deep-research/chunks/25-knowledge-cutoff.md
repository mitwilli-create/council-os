---
provider: perplexity
model: sonar-deep-research
capability: knowledge-cutoff
chunk_id: 25-knowledge-cutoff
last_research_round: 3
last_updated: 2026-05-17
verified_by_dealbreaker: false
source_authority: self_research
confidence: low
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [knowledge-cutoff, freshness, web-grounding, hybrid-knowledge]
related_chunks: [12-web-grounding, 25-knowledge-cutoff, 41-known-limitations]
related_models: [perplexity/sonar-pro, openai/gpt-5-5, anthropic/claude-opus-4-7]
peer_comparisons:
  - peer: anthropic/claude-opus-4-7
    relation: stronger
    note: "SDR's live web layer allows it to discuss events after the base LLM's training cutoff. Claude Opus 4.7 is static at its knowledge cutoff without a search layer."
  - peer: openai/gpt-5-5
    relation: comparable
    note: "GPT-5.5 with browsing also has a hybrid static + live web knowledge model. Both are effective for recent events."
---

**Summary** — The underlying LLM training cutoff for Sonar Deep Research is not publicly disclosed by Perplexity and must be treated as UNKNOWN. However, SDR's live web search layer effectively extends its knowledge surface to near-real-time: it can retrieve and reason about indexed web content from days or weeks ago. For recent events, SDR is significantly more capable than offline models. The caveat: the base model may misinterpret novel jargon or concepts not in its training data, and retrieval quality for very fresh or sparse topics is variable.

**Specifics:**
- Static LLM training cutoff: [UNKNOWN — not publicly disclosed by Perplexity]. No provider documentation enumerates the cutoff date.
- Live web layer freshness: empirically near-real-time for indexed content (days to weeks). Effective knowledge currency is a function of Perplexity's crawl cadence and upstream search index freshness — neither is exhaustively documented.
- Two-tier knowledge model: (1) frozen base model for concepts/patterns from training, (2) live search for recent factual claims. The two layers can conflict; model may hallucinate interpretation of retrieved documents when the topic is novel or jargon-heavy.
- High-stakes time-sensitive decisions: human verification of cited sources required regardless of SDR's ability to retrieve recent pages.
- R2 profile omitted any knowledge cutoff discussion — R3 explicitly addresses this as UNKNOWN rather than guessing.

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-opus-4-7 (no browsing): Claude is bounded by its training cutoff. SDR can discuss events post-cutoff via search. For "what happened last week" tasks, SDR wins.
- vs. openai/gpt-5-5 with browsing: Both have hybrid knowledge models. GPT-5.5's base training cutoff is also a separate question; search quality for recent events may differ by query type.

**Known limitations on this axis:**
- Cannot reconstruct the cutoff from behavioral observation alone.
- Opacity of cutoff complicates reliability assessment for domain-specific claims in rapidly evolving fields.

**Sources:**
- R3 self-research §3.6 (round-3-self-research.md)
- R2 dealbreaker verdict (s15_knowledge_cutoff_not_stated — addressed in R3)
