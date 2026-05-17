---
provider: openai
model: gpt-5-5
capability: web-grounding
chunk_id: 12-web-grounding
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [web-grounding, browsecomp, search, citations, retrieval]
related_chunks: [11-tool-use, 17-agentic-computer-use, 40-unique-strengths]
related_models:
  - anthropic/claude-opus-4-7
  - openai/gpt-5-5-pro
peer_comparisons:
  - peer: anthropic/claude-opus-4-7
    relation: stronger
    note: "BrowseComp Pro: GPT-5.5 Pro 90.1% vs Claude Opus 4.7 79.3% — note: this is the Pro tier score, not base GPT-5.5"
---

**Summary** — GPT-5.5 can be used in workflows with built-in or external web/search tools through the Responses API. The GPT-5.5 Pro tier achieves 90.1% on BrowseComp Pro, ahead of Claude Opus 4.7 at 79.3%. Base GPT-5.5 is cited in research but the 90.1% figure is specifically GPT-5.5 Pro.

**Specifics:**
- **BrowseComp Pro:** GPT-5.5 Pro **90.1%** vs Claude Opus 4.7 **79.3%** — 10.8pp lead for the Pro tier on multi-hop web research (Dealbreaker benchmark log).
- **Base GPT-5.5 BrowseComp score:** not separately cited in the research materials; the 90.1% figure belongs to GPT-5.5 Pro.
- **Mechanism:** web/search tools are attached through the Responses API; GPT-5.5 itself is not a browser — freshness depends on whether search tools are active.
- **Parametric staleness:** without retrieval tools, the base model's knowledge has a cutoff and can be stale. Cutoff date is not documented in research materials (UNKNOWN).
- **Citation format:** search-grounded responses return citations/annotations through tool outputs; exact format depends on API surface (inferred from OpenAI Responses API pattern).

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-opus-4-7: GPT-5.5 Pro leads BrowseComp by 10.8pp (90.1% vs 79.3%). However, the base GPT-5.5 score is not cited separately — this advantage is specific to the Pro tier. For cost-sensitive web research, test base GPT-5.5 vs Claude Opus 4.7 before assuming parity with Pro.

**Known limitations on this axis:**
- The 90.1% BrowseComp number is GPT-5.5 Pro, not base GPT-5.5 — do not attribute the Pro tier result to the base model.
- Can cite irrelevant or fabricated sources if citation generation is not grounded by an active search tool.
- Freshness is tool-dependent; parametric knowledge cutoff is unknown.

**Sources:**
- Dealbreaker benchmark log (BrowseComp Pro 90.1%, Claude Opus 4.7 79.3%)
- [OpenAI platform docs — Responses API](https://platform.openai.com/docs)
