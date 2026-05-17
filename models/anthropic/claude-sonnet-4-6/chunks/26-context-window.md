---
provider: anthropic
model: claude-sonnet-4-6
capability: context-window
chunk_id: 26-context-window
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 5
egoism_strikes_at_convergence: 5
tags: [context-window, tokens, output-cap, batch, word-density]
related_chunks: [16-long-context, 20-pricing, 24-batch-api]
related_models: [anthropic/claude-opus-4-7, anthropic/claude-haiku-4-5]
peer_comparisons:
  - peer: anthropic/claude-opus-4-7
    relation: different-approach
    note: "Same nominal 1M token window, but Sonnet 4.6's older tokenizer packs ~750k words vs. Opus 4.7's ~555k words. Sonnet 4.6 has the larger effective word capacity. However Opus 4.7 has 128k synchronous output cap vs. Sonnet 4.6's 64k."
  - peer: anthropic/claude-haiku-4-5
    relation: stronger
    note: "Haiku 4.5 caps at 200k tokens. Sonnet 4.6 (1M) is 5x larger. Any task exceeding 200k tokens routes to Sonnet 4.6 or Opus 4.7."
---

**Summary** — Sonnet 4.6 has a 1M token input context window and a 64k token synchronous output cap (expandable to 300k via Batch API with beta header). The tokenizer word-density advantage over Opus 4.7 (~750k vs. ~555k effective words per 1M tokens) is the structural reason to prefer Sonnet 4.6 over Opus 4.7 for text-heavy long-document tasks above ~550k words. Haiku 4.5's 200k cap makes it unsuitable for any task above that threshold.

**Specifics:**
- Input context window: **1M tokens** (~750k words, ~3.4M unicode chars). Source: [Official models overview](https://platform.claude.com/docs/en/about-claude/models/overview).
- Synchronous max output: **64k tokens**.
- Batch API max output: **300k tokens** (with `output-300k-2026-03-24` beta header). Same cap as Opus 4.7 and Opus 4.6.
- Tokenizer: Older than Opus 4.7. At 1M tokens: ~750k words for Sonnet 4.6 vs. ~555k words for Opus 4.7 — 35% more words per nominal token. Source: `_official-models-overview.md` line 37 (explicit parenthetical).
- Knowledge cutoff: reliable August 2025, training data cutoff January 2026.

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-opus-4-7: Same 1M nominal token window. Sonnet 4.6 holds ~195k more words per 1M tokens due to tokenizer difference. Above 550k words of text input: Sonnet 4.6 is the correct routing choice. Above 64k tokens synchronous output: Opus 4.7 is required (128k output cap).
- vs. anthropic/claude-haiku-4-5: Haiku 4.5 is capped at 200k tokens. For tasks 200k–1M tokens, route to Sonnet 4.6 or Opus 4.7.

**Known limitations on this axis:**
- 64k synchronous output limit means very long single-turn responses require Batch API (300k cap with beta header) or Opus 4.7 (128k synchronous).
- Deep recall quality at 600k–1M tokens is not formally benchmarked (no NIAH or RULER at full window published by Anthropic). Treat full-window coherence as unverified.

**Sources:**
- [Anthropic Official Models Overview](https://platform.claude.com/docs/en/about-claude/models/overview)
- `_official-models-overview.md` line 37
