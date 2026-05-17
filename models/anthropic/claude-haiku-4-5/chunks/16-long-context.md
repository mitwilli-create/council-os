---
provider: anthropic
model: claude-haiku-4-5
capability: long-context
chunk_id: 16-long-context
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: self_research
confidence: medium
sycophancy_strikes_at_convergence: 5
egoism_strikes_at_convergence: 0
tags: [long-context, context-window, retrieval, prompt-caching, rag]
related_chunks: [26-context-window, 20-pricing, 23-prompt-caching]
related_models:
  - anthropic/claude-sonnet-4-6
peer_comparisons:
  - peer: anthropic/claude-sonnet-4-6
    relation: comparable
    note: "Assumed equivalent context window; Haiku's prompt-cache pricing advantage ($0.10/MTok read vs Sonnet's higher rate) makes it more economical for large static context loops."
---

**Summary** — Claude Haiku 4.5 supports long-context inference with prompt caching providing the primary economic lever for large-context workflows. Cached context blocks (16K+ tokens) read at $0.10/MTok — 90% off the base input rate — making Haiku the most cost-effective model in the Claude 4 family for workflows that repeat large static context blocks across many turns or items.

**Specifics:**
- Context window: see chunk 26-context-window (not separately benchmarked in R2 profile)
- Prompt cache read: $0.10/MTok (90% discount on 5-min TTL blocks; web-verified, platform.claude.com)
- Prompt cache write: $1.25/MTok (5-min TTL), $2.00/MTok (1-hr TTL)
- Cache ROI is highest at Haiku pricing: 16K+ static blocks (system prompts, corpus context, shared tool schemas) amortize write cost across multiple requests
- In-context recall quality at length: not independently benchmarked in R2 profile

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-sonnet-4-6: Haiku's $0.10 cache read rate vs. Sonnet's higher rate makes Haiku 3× cheaper for workflows with large shared context; retrieval quality at length assumed comparable but not benchmarked head-to-head

**Known limitations on this axis:**
- Cache TTL is 5 minutes by default; workflows with gaps longer than TTL forfeit cache hits
- 1-hr TTL write cost ($2.00/MTok) is more expensive than base input — only economical with very high reuse rates
- In-context recall degradation at extreme lengths not benchmarked for Haiku 4.5 specifically

**Sources:**
- [Anthropic Claude Haiku 4.5 announcement](https://www.anthropic.com/news/claude-haiku-4-5)
- [Anthropic prompt caching docs](https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching)
- [Anthropic pricing page](https://www.anthropic.com/pricing)
