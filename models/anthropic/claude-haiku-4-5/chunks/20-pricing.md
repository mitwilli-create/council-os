---
provider: anthropic
model: claude-haiku-4-5
capability: pricing
chunk_id: 20-pricing
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 5
egoism_strikes_at_convergence: 0
tags: [pricing, cost, batch-api, prompt-caching, cost-crossover]
related_chunks: [21-latency-throughput, 26-context-window, 43-ideal-tasks, 44-avoid-when]
related_models:
  - anthropic/claude-sonnet-4-6
  - anthropic/claude-opus-4-7
peer_comparisons:
  - peer: anthropic/claude-sonnet-4-6
    relation: stronger
    note: "Haiku 4.5 is ~3× cheaper than Sonnet 4.6 on base tokens; with cache + batch, effective cost gap widens to ~10×. Cost crossover: choose Sonnet when adaptive thinking, single-pass ambiguous tasks, or client-facing quality premium justifies the price."
  - peer: anthropic/claude-opus-4-7
    relation: stronger
    note: "Haiku 4.5 is the lowest-cost tier; Opus is the highest. Choose Opus only for orchestration, synthesis, and final-judgment tasks where quality ceiling matters more than cost."
---

**Summary** — Claude Haiku 4.5 is the lowest-cost model in the Claude 4 family. At $1.00/MTok input and $5.00/MTok output, it is priced at approximately one-third of Sonnet 4.6. Paired with prompt cache reads at $0.10/MTok (90% off) and the 50% Batch API discount, effective cost for cached batch workflows is roughly 10× cheaper than Sonnet at base rates. The cost crossover point: choose Haiku for high-volume bounded tasks with predictable schemas; choose Sonnet when adaptive thinking or client-facing quality justifies the premium.

**Specifics:**
- Input: $1.00 / MTok (web-verified, platform.claude.com)
- Output: $5.00 / MTok (web-verified, platform.claude.com)
- Prompt cache read: $0.10 / MTok — 90% discount off base input rate (5-min TTL blocks)
- Prompt cache write: $1.25 / MTok (5-min TTL), $2.00 / MTok (1-hr TTL)
- Batch API discount: 50% off all tokens
- Effective cached batch cost: ~$0.05/MTok on cache-hit input tokens (~$0.001 per 1,000 input tokens at base; note: R2 stated $0.30/1k — this was the Dealbreaker N3 unit error; correct figure is ~$0.001/1k for base input, or $0.05 per MTok on cache reads in batch mode)
- Throughput multiplier: 10× more items vs. Sonnet on fixed budgets in batch + cache scenarios

**Cost crossover — when to choose Haiku vs. Sonnet vs. Opus:**

| Task type | Choose |
|-----------|--------|
| High-volume batch eval (100+ items, bounded schema) | Haiku 4.5 |
| Cached agentic loop (16K+ shared context, many turns) | Haiku 4.5 |
| Computer-use orchestration (OSWorld-class tasks) | Haiku 4.5 |
| Ambiguous single-pass task, adaptive reasoning needed | Sonnet 4.6 |
| Client-facing response, quality premium justified | Sonnet 4.6 |
| Synthesis, orchestration, final judgment | Opus 4.7 |

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-sonnet-4-6: ~3× cheaper at base; ~10× cheaper in cached batch workflows. Cost advantage compounds on long agentic sessions.
- vs. anthropic/claude-opus-4-7: Haiku is the budget tier; Opus is the ceiling tier. Avoid Opus for worker tasks.

**Known limitations on this axis:**
- Cache write costs ($1.25–$2.00/MTok) are higher than base input — cache is only economical with sufficient reuse (typically 3+ cache hits per write)
- Batch API has async SLA (not real-time); not suitable for latency-sensitive pipelines
- R2 profile contained a unit error on per-1k cost (N3 Dealbreaker strike); figures above are corrected

**Sources:**
- [Anthropic pricing page](https://www.anthropic.com/pricing)
- [Anthropic Claude Haiku 4.5 announcement](https://www.anthropic.com/news/claude-haiku-4-5)
- [platform.claude.com](https://platform.claude.com)
