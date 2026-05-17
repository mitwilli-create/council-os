---
provider: perplexity
model: sonar-reasoning-pro
capability: knowledge-cutoff
chunk_id: 25-knowledge-cutoff
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: self_research
confidence: medium
sycophancy_strikes_at_convergence: 2
egoism_strikes_at_convergence: 1
tags: [knowledge-cutoff, training-data, web-grounding, live-knowledge, deepseek-r1]
related_chunks: [12-web-grounding, 26-context-window]
related_models: [perplexity/sonar-pro, google/gemini-3-1-pro]
peer_comparisons:
  - peer: google/gemini-3-1-pro
    relation: different-approach
    note: "Both are web-grounded, making effective knowledge 'live' for indexed content. Static cutoff matters primarily for knowledge not captured by web search."
---

**Summary** — The base DeepSeek-R1 model has a static training cutoff of approximately **July 2024** (derived from DeepSeek-V3's technical report; R1's RL post-training does not extend this). However, because Sonar Reasoning Pro is web-grounded, effective knowledge is live for any content indexed by Perplexity's search — events and pages well past July 2024 are reachable via retrieval. The static cutoff matters only for facts not discoverable via web search.

**Specifics:**
- Base DeepSeek-R1 training cutoff: approximately **July 2024** (from DeepSeek-V3 technical report; R1 RL post-training does not extend the parametric cutoff). `[PARTIALLY INFERRED — FROM ROUND-1 DEALBREAKER GUIDANCE; exact date not published by DeepSeek in R1 docs]`
- Web grounding makes effective knowledge live: retrieved documents from Perplexity's index can reference events after July 2024.
- For queries on recent events: the model will search and cite; freshness is a function of Perplexity's index crawl recency, not training data.
- For queries on obscure or private facts not web-indexed: static cutoff applies.

**Compared to peers (sharpened by Dealbreaker):**
- vs. google/gemini-3-1-pro: Gemini 3.1 Pro also has web grounding (Google Search), so the same live-knowledge dynamic applies. The effective cutoff for both is the recency of their respective search indexes.
- vs. anthropic/claude-opus-4-7: Opus 4.7 has a later static training cutoff (early 2026) but relies on the `web_search` tool for freshness rather than built-in grounding. Comparable in practice for web-searchable content.

**Known limitations on this axis:**
- DeepSeek does not publish an exact R1 cutoff date; July 2024 is derived from the V3 base model report.
- Perplexity's crawl recency for niche or newly-indexed content is not guaranteed.

**Sources:**
- DeepSeek-V3 technical report (July 2024 training data cutoff). `[FROM ROUND-1 DEALBREAKER GUIDANCE]`
- [Perplexity Sonar docs — web grounding provides live freshness](https://docs.perplexity.ai/docs/sonar/models/sonar-reasoning-pro)
