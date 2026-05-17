---
provider: anthropic
model: claude-haiku-4-5
capability: context-window
chunk_id: 26-context-window
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: self_research
confidence: medium
sycophancy_strikes_at_convergence: 5
egoism_strikes_at_convergence: 0
tags: [context-window, token-capacity, output-cap, long-context]
related_chunks: [16-long-context, 20-pricing, 23-prompt-caching]
related_models:
  - anthropic/claude-sonnet-4-6
peer_comparisons:
  - peer: anthropic/claude-sonnet-4-6
    relation: comparable
    note: "Assumed equivalent 200K context window per Claude 4 family standard; verify via official docs."
---

**Summary** — Claude Haiku 4.5 shares the Claude 4 family's large context window, typically 200K tokens across the family. The R2 self-research profile does not independently confirm the input/output token split or output cap for Haiku 4.5 specifically. Given that prompt caching economics are a primary Haiku strength, large context support is a prerequisite that can be assumed from family membership.

**Specifics:**
- Context window: 200K tokens (Claude 4 family standard; not independently verified for Haiku 4.5 in R2 — confirm via official docs)
- Output cap: not independently verified in R2 profile; Claude 4 family typically caps output at 8K–32K tokens depending on model and API configuration
- Input/output split: no documented restrictions beyond the context window total; standard API behavior
- Prompt caching applies to blocks within the context window; cache blocks must be at the start of the input for maximum hit rate

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-sonnet-4-6: assumed equivalent context window; no evidence of Haiku-specific reduction

**Known limitations on this axis:**
- Context window capacity not independently benchmarked for Haiku 4.5 in R2
- Retrieval quality at extreme lengths (>100K tokens) not benchmarked for Haiku 4.5 specifically

**Sources:**
- [Anthropic models overview](https://docs.anthropic.com/en/docs/models-overview)
- [Anthropic Claude Haiku 4.5 announcement](https://www.anthropic.com/news/claude-haiku-4-5)
