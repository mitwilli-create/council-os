---
provider: anthropic
model: claude-sonnet-4-6
capability: reasoning
chunk_id: 10-reasoning
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 5
egoism_strikes_at_convergence: 5
tags: [reasoning, extended-thinking, adaptive-thinking, chain-of-thought, budget-tokens]
related_chunks: [40-unique-strengths, 41-known-limitations, 43-ideal-tasks, 44-avoid-when]
related_models: [anthropic/claude-opus-4-7, anthropic/claude-haiku-4-5, google/gemini-3-1-pro]
peer_comparisons:
  - peer: anthropic/claude-opus-4-7
    relation: different-approach
    note: "Opus 4.7 has adaptive thinking only — it dropped the explicit budget_tokens surface. Sonnet 4.6 retains BOTH Extended thinking (explicit budget_tokens) AND adaptive thinking. This is the #1 in-family routing differentiator."
  - peer: anthropic/claude-haiku-4-5
    relation: stronger
    note: "Haiku 4.5 has Extended thinking only (no adaptive). Sonnet 4.6 has both. GPQA Diamond: Sonnet 4.6 89.9% max effort vs. Haiku 4.5 [unknown]."
  - peer: google/gemini-3-1-pro
    relation: weaker
    note: "Gemini 3.1 Pro at 94.3% GPQA Diamond vs. Sonnet 4.6 at 89.9% (max effort). Graduate-level science routes to Gemini 3.1 Pro or Opus 4.7."
---

**Summary** — Claude Sonnet 4.6's most structurally important reasoning differentiator is that it retains the Extended thinking explicit-budget surface (`thinking: { type: "enabled", budget_tokens: N }`) that Opus 4.7 dropped. Sonnet 4.6 supports both Extended thinking (caller-controlled token budget) and Adaptive thinking (model self-selects reasoning depth). This makes it the only top-tier Anthropic model with explicit budget control over reasoning compute — a hard migration-routing fact for any pipeline built on `budget_tokens`. GPQA Diamond scores range from 74.1% at no-thinking baseline to 89.9% at adaptive thinking max effort; the frontier sits at ~94%.

**Specifics:**
- Extended thinking: `thinking: { type: "enabled", budget_tokens: N }` — caller specifies reasoning token budget explicitly. Retained from Sonnet 4.5; NOT available on Opus 4.7. ([Official models overview](https://platform.claude.com/docs/en/about-claude/models/overview), lines 33-34)
- Adaptive thinking: model self-selects reasoning depth based on prompt complexity. Added in Sonnet 4.6 upgrade. Layered on top of Extended thinking, not a replacement.
- GPQA Diamond baseline (no extended thinking, standard sampling): **74.1%**. Source: [morphllm.com](https://www.morphllm.com/claude-benchmarks) and multiple third-party evaluations. Means ~1 in 4 graduate-level science questions wrong at baseline.
- GPQA Diamond max effort (adaptive thinking, 10-trial average): **89.9%**. Source: [artificialanalysis.ai](https://artificialanalysis.ai/models/claude-sonnet-4-6-adaptive) and Anthropic system card.
- Both numbers are real. The 74.1% baseline and 89.9% max-effort ceiling are different effort-level measurements, not contradictory.
- Concrete strong use case: multi-step software architecture problems with N interdependent constraints — the designed use case for adaptive thinking.

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-opus-4-7: Opus 4.7 scores 94.2% GPQA Diamond ([Vellum](https://www.vellum.ai/blog/claude-opus-4-7-benchmarks-explained)) — 4 points above Sonnet 4.6 at max effort, 20 points above at baseline. However, **Opus 4.7 dropped the Extended thinking surface entirely**. Any pipeline using `budget_tokens` must route to Sonnet 4.6 or Haiku 4.5 — Opus 4.7 cannot accept explicit thinking budgets.
- vs. anthropic/claude-haiku-4-5: Haiku 4.5 has Extended thinking only; no adaptive thinking. Sonnet 4.6 covers both. For pipelines needing explicit budgets AND adaptive fallback, Sonnet 4.6 is the only option.
- vs. google/gemini-3-1-pro: Gemini 3.1 Pro at 94.3% GPQA Diamond is 4.4 points above Sonnet 4.6 max effort. For graduate-level scientific derivation requiring certainty, route to Gemini 3.1 Pro.
- vs. openai/gpt-5-5: GPT-5.5 GDPval 84.9% — knowledge-work reasoning. Sonnet 4.6 GDPval-AA Elo 1,633–1,675. GPT-5.5 leads on this benchmark.

**Known limitations on this axis:**
- At baseline (no thinking), GPQA Diamond is 74.1% — 1 in 4 graduate-level science questions wrong. Do not use baseline for precise scientific calculations.
- GPQA Diamond at max effort still leaves ~10% wrong on graduate-level questions. High-stakes science routes to Opus 4.7 (94.2%) or Gemini 3.1 Pro (94.3%).
- Post-launch quality regression (March 9 – April 7, 2026): Anthropic reduced reasoning effort from high to medium on March 4 to lower latency, causing documented quality degradation across 1,400+ frustration events. Reverted April 7. Operators should validate reasoning effort settings in deployment. ([GitHub issue #46935](https://github.com/anthropics/claude-code/issues/46935); [Anthropic April 23 postmortem](https://www.anthropic.com/engineering/april-23-postmortem))
- Concrete example output quality (architecture tasks) is not formally benchmarked; user verification recommended before relying on outputs in production architecture decisions.

**Sources:**
- [Anthropic Official Models Overview](https://platform.claude.com/docs/en/about-claude/models/overview)
- [morphllm.com — GPQA 74.1% baseline](https://www.morphllm.com/claude-benchmarks)
- [artificialanalysis.ai — GPQA 89.9% max effort](https://artificialanalysis.ai/models/claude-sonnet-4-6-adaptive)
- [Vellum — Opus 4.7 GPQA 94.2%](https://www.vellum.ai/blog/claude-opus-4-7-benchmarks-explained)
- [Anthropic April 23 Engineering Postmortem](https://www.anthropic.com/engineering/april-23-postmortem)
- [GitHub issue #46935](https://github.com/anthropics/claude-code/issues/46935)
