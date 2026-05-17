---
provider: anthropic
model: claude-opus-4-7
capability: web-grounding
chunk_id: 12-web-grounding
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [web-search, citations, browsecomp, freshness, cache-invalidation]
related_chunks: [11-tool-use, 17-agentic-computer-use, 41-known-limitations, 44-avoid-when]
related_models: [openai/gpt-5-5, google/gemini-3-1-pro]
peer_comparisons:
  - peer: openai/gpt-5-5
    relation: weaker
    note: "BrowseComp multi-page web research: GPT-5.5 Pro 90.1% vs. Opus 4.7 79.3% — 10.8-point gap. Route deep web research to GPT-5 family."
  - peer: google/gemini-3-1-pro
    relation: comparable
    note: "Both support server-side web grounding with inline citations; no direct BrowseComp score published for Gemini 3.1 Pro as of round-2 research."
---

**Summary** — Claude Opus 4.7 supports server-side `web_search` and `web_fetch` tools that return content with inline citations, with freshness determined at fetch time rather than training time. However, on BrowseComp (the standard multi-page web research benchmark), GPT-5.5 Pro leads Opus 4.7 by 10.8 points (90.1% vs. 79.3%). Single-target citation lookup (fetch one URL and summarize) is the stronger use case for Opus 4.7 on this axis; deep multi-hop web research should route to GPT-5.5.

**Specifics:**
- **Server-side `web_search` and `web_fetch`** tools return content with inline citations. Freshness is determined at fetch time, not training time. Source: `_official-tool-use-caching.md` per-tool interaction table.
- **BrowseComp score:** GPT-5.5 Pro 90.1% vs. Opus 4.7 79.3% — 10.8-point gap. Sources: [BuildFastWithAI GPT-5.5 review](https://www.buildfastwithai.com/blogs/gpt-5-5-review-2026); [Vellum benchmark roundup](https://www.vellum.ai/blog/claude-opus-4-7-benchmarks-explained).
- **Single-target URL fetch** — the model's stronger sub-task on this axis. `[INFERRED]` since BrowseComp measures multi-hop search rather than single-URL fetch.
- **Knowledge cutoff:** January 2026 — `web_search` compensates for post-cutoff freshness.

**Compared to peers (sharpened by Dealbreaker):**
- vs. openai/gpt-5-5: GPT-5.5 Pro leads BrowseComp by 10.8 points. Route multi-page deep web research / browse synthesis tasks to GPT-5.5, not Opus 4.7.
- vs. google/gemini-3-1-pro: Both support web grounding with citations. No Gemini 3.1 Pro BrowseComp score was available in round-2 verified sources for a direct numeric comparison.

**Known limitations on this axis:**
- **Toggling `web_search` invalidates both system and messages caches** — a non-trivial cost penalty in long sessions. Source: `_official-tool-use-caching.md` lines 62-73.
- **BrowseComp gap is large (10.8 points)** — Opus 4.7 should not be the primary choice for multi-hop web research tasks.
- **Citation accuracy on deeply nested multi-hop chains is unverified** — BrowseComp is the only benchmark available and Opus 4.7 trails meaningfully on it.

**Sources:**
- [BuildFastWithAI — GPT-5.5 review / BrowseComp](https://www.buildfastwithai.com/blogs/gpt-5-5-review-2026)
- [Vellum benchmark roundup](https://www.vellum.ai/blog/claude-opus-4-7-benchmarks-explained)
