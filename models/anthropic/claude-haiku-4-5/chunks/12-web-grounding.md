---
provider: anthropic
model: claude-haiku-4-5
capability: web-grounding
chunk_id: 12-web-grounding
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: pending
confidence: low
sycophancy_strikes_at_convergence: 5
egoism_strikes_at_convergence: 0
tags: [web-search, grounding, citations, freshness]
related_chunks: [00-overview, 25-knowledge-cutoff]
related_models:
  - anthropic/claude-sonnet-4-6
peer_comparisons: []
---

**Summary** — Not documented for this version. The R2 self-research profile does not address built-in web search, citation behavior, or source domain controls for Haiku 4.5. Web grounding for Claude models is generally delivered via tool use (search tools passed to the model) rather than native built-in search. Unknown if any Haiku-specific grounding capabilities exist beyond standard tool-use patterns. Test before relying on.

**Specifics:**
- Native built-in search: not documented in R2 profile; assumed absent unless confirmed via official docs
- Citation behavior: not documented for Haiku 4.5 specifically
- Freshness: knowledge cutoff February 2025 [INFERRED]; real-time grounding requires external search tool integration
- Standard pattern: pass a `web_search` tool definition in the `tools` array; Haiku calls it like any other function

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-sonnet-4-6: same architecture; grounding capability is tool-dependent for both, not native

**Known limitations on this axis:**
- Knowledge cutoff limits factual freshness without external search tooling
- No dedicated grounding benchmark cited in R2 profile

**Sources:**
- [Anthropic Claude Haiku 4.5 announcement](https://www.anthropic.com/news/claude-haiku-4-5)
