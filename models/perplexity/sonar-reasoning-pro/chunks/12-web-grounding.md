---
provider: perplexity
model: sonar-reasoning-pro
capability: web-grounding
chunk_id: 12-web-grounding
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 2
egoism_strikes_at_convergence: 1
tags: [web-search, citations, perplexity-index, freshness, grounding]
related_chunks: [10-reasoning, 20-pricing, 40-unique-strengths, 43-ideal-tasks]
related_models: [perplexity/sonar-pro, perplexity/sonar-deep-research, openai/gpt-5-5, google/gemini-3-1-pro, anthropic/claude-opus-4-7]
peer_comparisons:
  - peer: google/gemini-3-1-pro
    relation: different-approach
    note: "Gemini 3.1 Pro uses Google Search index. Perplexity's index has different coverage — stronger on niche forums and blogs, potentially weaker on paywalled academic/enterprise content. Neither is universally superior."
  - peer: openai/gpt-5-5
    relation: different-approach
    note: "GPT-5.5 uses Bing/Edge search index via the web_search tool. Same structural difference: index composition differs, not the presence of grounding."
  - peer: anthropic/claude-opus-4-7
    relation: different-approach
    note: "Opus 4.7 uses an aggregated web_search tool; index composition is not publicly specified. CoT + web is now an industry baseline, not a Sonar differentiator."
---

**Summary** — Web grounding is built into every Sonar Reasoning Pro call by default. The model queries Perplexity's proprietary web index server-side, integrates retrieved documents into the `<think>` reasoning trace, and surfaces numbered citations in the final answer. This makes knowledge effectively live — events well past DeepSeek-R1's training cutoff are reachable. However, CoT + web is now an industry-converged baseline; the real differentiator is Perplexity's specific search index composition versus Google (Gemini), Bing (GPT-5.5), or Anthropic's aggregator.

**Specifics:**
- Built-in search enabled by default; queries Perplexity's web index. ([Sonar docs](https://docs.perplexity.ai/docs/sonar/models/sonar-reasoning-pro))
- Numbered citations included in responses; citation tokens billed at **$2 / 1M tokens**. ([Perplexity pricing](https://docs.perplexity.ai/docs/getting-started/pricing))
- Search parameters: `search_domain_filter` (restrict/exclude domains), `search_recency_filter` (time window), `return_images`, `return_related_questions`. ([Sonar Prompt Guide](https://docs.perplexity.ai/docs/sonar/prompt-guide))
- Search queries billed at **$5 per 1,000 queries**. ([Perplexity pricing](https://docs.perplexity.ai/docs/getting-started/pricing))
- Retrieved content is integrated into the `<think>` trace — evidence and reasoning are co-located, which is unique among web-grounded models.
- System-prompt content does not affect retrieval behavior — retrieval is driven by the user-turn query. `[FROM SONAR PROMPT GUIDE]`
- Index limitation: constrained to Perplexity's own crawl. Paywalled academic papers, proprietary databases, and niche enterprise content may not be indexed. `[INFERRED]`

**Compared to peers (sharpened by Dealbreaker):**
- vs. google/gemini-3-1-pro: Google Search is the strongest general-purpose index for breadth. Perplexity's index covers forums and niche web better in some queries, worse on academic paywalls. Neither dominates; the choice turns on the specific corpus needed.
- vs. openai/gpt-5-5: Bing/Edge index via `web_search` tool. Perplexity vs. Bing coverage differs by domain. Sonar Reasoning Pro's advantage: web evidence is reasoned over inside `<think>`, not just appended. GPT-5.5 advantage: function calling enables selective search invocation.
- vs. anthropic/claude-opus-4-7: Opus 4.7 can call `web_search` as a tool. Sonar Reasoning Pro's search is automatic (cannot be disabled per-call). For tasks where search should be suppressed, Opus 4.7 is more controllable.
- vs. perplexity/sonar-pro: Same Perplexity index. Sonar Pro issues more searches per task on average; Sonar Reasoning Pro integrates search into the CoT trace. Index quality is identical.

**Known limitations on this axis:**
- Cannot route to a private corpus, intranet, or proprietary database via search.
- No granular engine selection (Perplexity index only; no Google/Bing option).
- Search-grounded CoT can "entangle" noisy retrieved docs into the reasoning trace, producing confident but incorrect justifications.
- Citation tokens add cost that may be non-trivial on citation-heavy tasks.

**Sources:**
- [Perplexity Sonar Reasoning Pro model docs](https://docs.perplexity.ai/docs/sonar/models/sonar-reasoning-pro)
- [Perplexity pricing](https://docs.perplexity.ai/docs/getting-started/pricing)
- [Sonar Prompt Guide](https://docs.perplexity.ai/docs/sonar/prompt-guide)
