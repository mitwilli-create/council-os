---
provider: anthropic
model: claude-sonnet-4-6
capability: web-grounding
chunk_id: 12-web-grounding
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: medium
sycophancy_strikes_at_convergence: 5
egoism_strikes_at_convergence: 5
tags: [web-search, grounding, citations, freshness, operator-tool]
related_chunks: [11-tool-use, 25-knowledge-cutoff]
related_models: [google/gemini-3-1-pro, openai/gpt-5-5]
peer_comparisons:
  - peer: google/gemini-3-1-pro
    relation: weaker
    note: "Gemini 3.1 Pro has integrated Google Search as a native built-in. Sonnet 4.6 web search requires explicit operator configuration; no native real-time grounding equivalent."
  - peer: openai/gpt-5-5
    relation: different-approach
    note: "GPT-5.5 web search availability and integration differs by deployment surface. Sonnet 4.6 uses operator-configured web_search_tool."
---

**Summary** — Web search on Sonnet 4.6 is an operator-configured tool (`web_search_tool`), not a native built-in. When enabled by the API caller, the model returns cited search results inline. This is a fundamentally different architecture from Gemini 3.1 Pro's native integrated Google Search grounding. No search is default-on.

**Specifics:**
- `web_search_tool` must be explicitly enabled by the API caller in the tools array. Not available by default.
- When enabled, returns cited results inline — sources are attributed within the response.
- Enabling web search invalidates the system prompt and messages prompt cache. ([Official tool-use caching docs](https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-use-with-prompt-caching))
- Freshness is bounded by when the operator triggers a search — no continuous grounding.
- Concrete use case: a research assistant app that enables `web_search_tool` to let Sonnet 4.6 pull current pricing data and cite sources inline.

**Compared to peers (sharpened by Dealbreaker):**
- vs. google/gemini-3-1-pro: Gemini 3.1 Pro has integrated Google Search as a native capability with no operator configuration required. For applications where real-time grounding is core (news, live pricing, current events), Gemini 3.1 Pro is structurally better suited.
- vs. openai/gpt-5-5: GPT-5.5 web grounding architecture differs by deployment context. Both are configurable tools rather than always-on; direct benchmark comparison not available.

**Known limitations on this axis:**
- Not default-on — operators who forget to enable `web_search_tool` get no web access.
- Enabling search breaks prompt cache on system and messages, adding cost and latency for cache-dependent pipelines.
- Knowledge cutoff August 2025 applies to all non-search responses. For Q4 2025 – Q1 2026 events without search enabled, Sonnet 4.6 has no knowledge.

**Sources:**
- [Official tool-use caching docs](https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-use-with-prompt-caching)
- [Anthropic Official Models Overview](https://platform.claude.com/docs/en/about-claude/models/overview)
