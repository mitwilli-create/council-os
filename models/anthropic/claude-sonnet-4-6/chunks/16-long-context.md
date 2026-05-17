---
provider: anthropic
model: claude-sonnet-4-6
capability: long-context
chunk_id: 16-long-context
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: medium
sycophancy_strikes_at_convergence: 5
egoism_strikes_at_convergence: 5
tags: [long-context, context-window, tokenizer, word-density, recall]
related_chunks: [26-context-window, 24-batch-api, 41-known-limitations]
related_models: [anthropic/claude-opus-4-7, anthropic/claude-haiku-4-5]
peer_comparisons:
  - peer: anthropic/claude-opus-4-7
    relation: stronger
    note: "Sonnet 4.6's older tokenizer packs ~750k words into 1M tokens vs. Opus 4.7's ~555k words in 1M tokens. For text-heavy corpora above ~550k words, Sonnet 4.6's effective context exceeds Opus 4.7's at the same nominal token budget."
  - peer: anthropic/claude-haiku-4-5
    relation: stronger
    note: "Haiku 4.5 is capped at 200k tokens. For tasks exceeding 200k tokens, Haiku 4.5 cannot substitute for Sonnet 4.6."
---

**Summary** — Sonnet 4.6 has a 1M token context window (~750k words, ~3.4M unicode characters). Its inherited older tokenizer provides a word-density advantage over Opus 4.7: at the same 1M nominal token count, Sonnet 4.6 holds approximately 195k more words than Opus 4.7 (~555k words). This makes Sonnet 4.6 the only current Anthropic model that can handle text-heavy corpora between 550k and 750k words. The deep-in-context recall quality at 600k–1M tokens has not been formally published by Anthropic.

**Specifics:**
- Context window: **1M tokens** (~750k words, ~3.4M unicode chars). Upgraded from 200k in Sonnet 4.5 — the larger of the two Sonnet 4.6 upgrades in operational terms.
- Synchronous max output: **64k tokens**.
- Batch API max output: **300k tokens** (with `output-300k-2026-03-24` beta header). ([Official models overview](https://platform.claude.com/docs/en/about-claude/models/overview))
- Tokenizer word-coverage advantage: Opus 4.7 uses a new tokenizer where 1M tokens covers ~555k words. Sonnet 4.6's older tokenizer covers ~750k words — 35% more words per nominal token, or ~195k more words at equal token budget. Source: `_official-models-overview.md` line 37 (explicit parenthetical).
- Concrete use case: analyzing a full codebase (50+ files), maintaining coherent state across 800k+ tokens of conversation history, and producing a consistent architectural recommendation.

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-opus-4-7: Sonnet 4.6 effective word capacity exceeds Opus 4.7's at the same 1M token budget due to tokenizer differences (~750k vs. ~555k words). This is an inherited advantage, not a feature investment — but it is operationally real. Above 550k words of text input, Sonnet 4.6 is the correct Anthropic routing choice.
- vs. anthropic/claude-haiku-4-5: Haiku 4.5 caps at 200k tokens. Any task exceeding 200k tokens cannot use Haiku 4.5.

**Known limitations on this axis:**
- Deep in-context coherence at 600k–1M tokens has not been formally published by Anthropic (no RULER or NIAH benchmark at full window length). Community reports of recall drift exist but no named study is citeable. This is an unverified risk, not a confirmed failure mode.
- Sonnet 4.6 synchronous max output is 64k tokens — half of Opus 4.7's 128k limit. Tasks requiring single-turn outputs above 64k tokens must route to Opus 4.7 in synchronous mode, or use Sonnet 4.6 Batch API (300k output cap).

**Sources:**
- [Anthropic Official Models Overview](https://platform.claude.com/docs/en/about-claude/models/overview)
- `_official-models-overview.md` line 37 (tokenizer word-coverage parenthetical)
