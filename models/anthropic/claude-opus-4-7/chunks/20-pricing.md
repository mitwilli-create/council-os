---
provider: anthropic
model: claude-opus-4-7
capability: pricing
chunk_id: 20-pricing
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [pricing, cost, cache, batch, tokenizer-inflation, routing]
related_chunks: [21-latency-throughput, 26-context-window, 41-known-limitations, 43-ideal-tasks, 44-avoid-when]
related_models: [anthropic/claude-sonnet-4-6, anthropic/claude-haiku-4-5, openai/gpt-5-5, google/gemini-3-1-pro]
peer_comparisons:
  - peer: openai/gpt-5-5
    relation: comparable
    note: "Same sticker price ($5/$25 per MTok input/output); same 90%-off cache-read discount ($0.50/MTok cache hit). Effective cost-per-task differs by tokenizer behavior."
  - peer: google/gemini-3-1-pro
    relation: weaker
    note: "Gemini 3.1 Pro base input is $2/MTok (≤200k context), cache hit $0.20/MTok — lower absolute cost. Caching is automatic-by-default on paid projects vs. Anthropic's opt-in cache_control."
  - peer: anthropic/claude-sonnet-4-6
    relation: weaker
    note: "Sonnet 4.6 is $3/$15 — 40% cheaper input and output. For UX-weighted coding tasks, Sonnet can beat Opus on quality AND price."
  - peer: anthropic/claude-haiku-4-5
    relation: weaker
    note: "Haiku 4.5 is $1/$5 — 80% cheaper. Dominates on high-volume classification/triage tasks."
---

**Summary** — Claude Opus 4.7 is priced at $5/$25 per million tokens (input/output) on the synchronous Messages API — unchanged from Opus 4.6's sticker. However, the new tokenizer emits 1.0–1.35× more tokens for the same input, so effective dollars-per-task is materially higher than the headline implies. Prompt caching offers 90%-off cache reads — but this rate has converged across all three major providers and is no longer a differentiator. The Batch API provides 50% off and stacks with caching. For bounded and verifiable tasks, Sonnet 4.6 (40% cheaper) or Haiku 4.5 (80% cheaper) should be routed instead.

**Specifics:**

| Lane | Input | Output | 5m cache write | 1h cache write | Cache hit |
|------|-------|--------|----------------|----------------|-----------|
| Synchronous API | $5/MTok | $25/MTok | $6.25/MTok | $10/MTok | $0.50/MTok |
| Batch API (50% off, stacks with cache) | $2.50/MTok | $12.50/MTok | $3.125/MTok | $5/MTok | $0.25/MTok |

Sources: `_official-prompt-caching.md` lines 270, 279-285; [Finout pricing analysis](https://www.finout.io/blog/claude-opus-4.7-pricing-the-real-cost-story-behind-the-unchanged-price-tag); [CloudZero](https://www.cloudzero.com/blog/claude-opus-4-7-pricing/).

- **Tokenizer inflation:** 1.0–1.35× more tokens per same input vs. Opus 4.6 → real-world per-task cost increase despite unchanged sticker. Source: [Anthropic announcement](https://www.anthropic.com/news/claude-opus-4-7); [Finout pricing analysis](https://www.finout.io/blog/claude-opus-4.7-pricing-the-real-cost-story-behind-the-unchanged-price-tag).
- **Second-order tokenizer consequence:** user-side token-counting code calibrated against Opus 4.6 produces wrong counts on 4.7. Migrate token-counting libraries.
- **Cache-hit discount is industry-converged at 90% off** across Anthropic ($0.50/MTok), OpenAI GPT-5.5 ($0.50/MTok), and Google Gemini 3.1 Pro ($0.20/MTok). Not a differentiator. Source: [Cursor IDE GPT-5 API analysis](https://www.cursor-ide.com/blog/gpt-5-api); [evolink GPT-5.5 API pricing guide](https://evolink.ai/blog/gpt-5-5-api-pricing-guide-2026); [DevTk.AI Gemini 3.1 Pro pricing](https://devtk.ai/en/blog/gemini-3-1-pro-pricing-guide-2026/).
- **Anthropic-specific cache surface differences:** explicit 1-hour TTL at 2× write cost (no OpenAI equivalent); Gemini's implicit caching is automatic-by-default for paid projects (no code change needed) vs. Anthropic's `cache_control: {"type": "ephemeral"}` opt-in.
- **Batch API stacks with prompt cache:** theoretically ≥95% off vs. uncached synchronous on cache-warm runs. Source: `_official-prompt-caching.md` line 285.
- **Sibling cost delta reference:**
  - vs. Sonnet 4.6 ($3/$15): 50k input / 5k output → Opus 4.7 ≈ $0.375; Sonnet ≈ $0.225 — Sonnet saves $0.15/call (40%).
  - vs. Haiku 4.5 ($1/$5): 1,000-item triage at 5k input / 500 output → Opus 4.7 ≈ $31; Haiku ≈ $7.50 — Haiku saves ~$23.50 per 1,000 items (76%).

**Compared to peers (sharpened by Dealbreaker):**
- vs. openai/gpt-5-5: Same sticker, same 90% cache discount. Effective cost depends on tokenizer and task type.
- vs. google/gemini-3-1-pro: Gemini base input is 2.5× cheaper ($2 vs. $5/MTok). For cost-sensitive long-text workloads not requiring Opus-level code quality, Gemini 3.1 Pro is cheaper.
- vs. anthropic/claude-sonnet-4-6: 40% cheaper. For all non-SWE-bench-Pro-class tasks, Sonnet 4.6 is the routing default.
- vs. anthropic/claude-haiku-4-5: 80% cheaper. For high-volume bounded tasks, Haiku 4.5 is the routing default.

**Known limitations on this axis:**
- Sticker price is misleading — the tokenizer inflation makes effective cost-per-task higher than Opus 4.6 at the same sticker.
- Token-counting code must be recalibrated for 4.7's tokenizer.
- 4,096-token minimum cache prefix — short prompts cannot be cached; high-volume short-prompt workloads get no cache benefit on Opus 4.7.

**Sources:**
- [Anthropic prompt caching docs](https://platform.claude.com/docs/en/build-with-claude/prompt-caching)
- [Anthropic announcement — tokenizer](https://www.anthropic.com/news/claude-opus-4-7)
- [Finout pricing analysis](https://www.finout.io/blog/claude-opus-4.7-pricing-the-real-cost-story-behind-the-unchanged-price-tag)
- [CloudZero pricing guide](https://www.cloudzero.com/blog/claude-opus-4-7-pricing/)
- [Cursor IDE — GPT-5.5 cache pricing](https://www.cursor-ide.com/blog/gpt-5-api)
- [DevTk.AI — Gemini 3.1 Pro pricing](https://devtk.ai/en/blog/gemini-3-1-pro-pricing-guide-2026/)
