---
provider: google
model: gemini-3-1-pro
capability: agentic-computer-use
chunk_id: 17-agentic-computer-use
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: medium
sycophancy_strikes_at_convergence: 4
egoism_strikes_at_convergence: 1
tags: [computer-use, agentic, browser-automation, os-control, web-navigation]
related_chunks:
  - 11-tool-use
  - 40-unique-strengths
  - 41-known-limitations
  - 44-avoid-when
related_models:
  - anthropic/claude-opus-4-7
  - google/gemini-3-flash
peer_comparisons:
  - peer: anthropic/claude-opus-4-7
    relation: weaker
    note: "OS-level desktop manipulation: browser-first vs Opus 4.7's broader agentic scaffolding. MCP-Atlas: 73.9% vs 77.3%."
  - peer: google/gemini-3-flash
    relation: comparable
    note: "Gemini 3 Flash also supports Computer Use per official docs. No head-to-head CU benchmark between siblings."
---

**Summary** — Gemini 3.1 Pro supports native Computer Use directly — no separate model or routing is required per Google's official documentation. The implementation is browser-first: it handles autonomous web navigation, form filling, and browser-based workflows well, but OS-level desktop manipulation is documented as limited compared to specialized agents. This is a post-R1 correction: R1 incorrectly stated Computer Use was not officially supported; R2 confirms it is.

**Specifics:**
- Native Computer Use: officially supported directly on Gemini 3.1 Pro per Google's official documentation. No separate `gemini-2.5-computer-use` routing or separate model is needed. (Source: _official-gemini-3-api.md line 308: "Gemini 3 Pro and Flash support Computer Use — no separate model needed." Dealbreaker R2 new-strike id=1 correction)
- Implementation: browser-first. Optimized for web form navigation, page interaction, and browser-based workflows. (Source: profile Section 2)
- OS-level desktop manipulation: documented as limited compared to specialized computer-use agents. (Source: profile Section 2, Section 7)
- Gemini 3 Flash also supports Computer Use — CU is not exclusive to 3.1 Pro within the Gemini 3 family. (Source: profile Section 5 Sibling Crossover Map)
- Example task: autonomous web-form navigation and entry mapping. (Source: profile Section 2)

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-opus-4-7: weaker on agentic orchestration (MCP-Atlas 73.9% vs 77.3%). Opus 4.7 has broader agentic scaffolding capabilities. For deep OS-level automation, Opus 4.7 or specialized agents are preferred. (Source: profile Section 5)
- vs. google/gemini-3-flash: both support Computer Use. Flash is cheaper — for browser-level CU tasks at scale, Flash may be preferred on cost grounds. (Source: profile Section 5 Sibling Crossover Map)

**Known limitations on this axis:**
- Browser-first architecture: OS-level desktop manipulation is limited. Do not route here for native desktop app automation. (Source: profile Section 2, Section 7)
- The R1 profile incorrectly stated CU was not supported. This was corrected in R2 via the Dealbreaker process — routing documentation in older configs may still reflect the incorrect R1 position. (Source: Dealbreaker R2 verdict new-strike id=1)
- Avoid phrasing as "heavily optimized for browsers" — the correct characterization is "browser-first." (Source: Dealbreaker R2 recurring-strike id=1)

**Sources:**
- [Google official Gemini 3 migration documentation](https://ai.google.dev/docs/gemini_api/migration)
- [_official-gemini-3-api.md line 308](../../../api-guides/google/_official-gemini-3-api.md)
- [Dealbreaker R2 verdict](../research-rounds/round-2-verdict.yaml)
