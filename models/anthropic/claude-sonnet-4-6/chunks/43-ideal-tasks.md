---
provider: anthropic
model: claude-sonnet-4-6
capability: ideal-tasks
chunk_id: 43-ideal-tasks
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 5
egoism_strikes_at_convergence: 5
tags: [routing, ideal-use-cases, when-to-use, task-selection]
related_chunks: [40-unique-strengths, 44-avoid-when, 10-reasoning, 15-code-generation]
related_models: [anthropic/claude-opus-4-7, anthropic/claude-haiku-4-5]
peer_comparisons:
  - peer: anthropic/claude-opus-4-7
    relation: different-approach
    note: "Sonnet 4.6 is the correct choice over Opus 4.7 when: explicit budget_tokens control is needed, UX-weighted coding matters, prompt is 1,024–4,095 tokens (short-prompt caching), or text input exceeds ~550k words."
---

**Summary** — Five routing scenarios where Sonnet 4.6 should be the primary choice: explicit thinking-budget control, agentic coding where UX quality or cost matters, long-document analysis in the 550k–750k word range, short-prompt high-volume caching workloads, and office/knowledge-work at the mid-tier price point. Each scenario has a hard structural reason — not a vague "good balance" claim.

**Specifics:**

**Task 1 — Pipelines requiring explicit thinking-budget control (`budget_tokens`):**
Sonnet 4.6 is the only top-tier Anthropic model that retains the Extended thinking surface. Opus 4.7 supports adaptive thinking only. Any workload built around `thinking: { type: "enabled", budget_tokens: N }` on Opus 4.6 MUST route to Sonnet 4.6 to preserve that interface without re-architecture. This is a hard migration constraint, not a preference.

**Task 2 — Agentic coding where UX quality or cost matters:**
79.6% SWE-bench Verified at $3/$15 per MTok. Tyler Folkman 7-category UX-weighted rubric: Sonnet 4.6 68/100 vs. Opus 4.7's 63/100. When the coding rubric weights maintainability and UX alongside correctness, Sonnet 4.6 beats the more expensive flagship by 5 points at 40% lower cost. Source: [Tyler Folkman, Substack](https://tylerfolkman.substack.com/p/i-tested-opus-47-against-sonnet-46).

**Task 3 — Long-document analysis (550k–750k word range):**
Sonnet 4.6's 1M token window holds ~750k words (older tokenizer); Opus 4.7's 1M window holds only ~555k words (new tokenizer). For text-heavy corpora above 550k words: Sonnet 4.6 is the only current Anthropic model that can fit the full input at any cost.

**Task 4 — Short-prompt high-volume caching workloads (1,024–4,095 tokens):**
Minimum cacheable prefix: 1,024 tokens for Sonnet 4.6 vs. 4,096 for Opus 4.7 and Haiku 4.5. Workloads with prompts in the 1,024–4,095 token range can use prompt caching on Sonnet 4.6 only — reducing effective input cost to $0.30/MTok on cache hits. Source: `_official-prompt-caching.md` line 650.

**Task 5 — Office and knowledge-work at the Sonnet price tier:**
GDPval-AA Elo 1,633–1,675 — the leading knowledge-work option at the $3/$15 price point. No cheaper Anthropic model (Haiku 4.5) reaches comparable GDPval performance. Content creation, writing assistance, document drafting, structured business reporting: route to Sonnet 4.6 at mid-tier cost.

**Bonus — Agentic customer operations where Tau-bench matters:**
Sonnet 4.6 Tau2 Telecom 97.9% vs. Haiku 4.5 83.0% (15-point gap). If error cost per agentic task exceeds 15× Haiku 4.5's per-call price savings, route to Sonnet 4.6.

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-opus-4-7: Sonnet 4.6 wins on Tasks 1, 2 (UX rubric), 3 (word capacity above 550k), and 4 (short-prompt caching). Opus 4.7 wins on raw SWE-bench correctness, GPQA, MCP-Atlas, and synchronous long output.
- vs. anthropic/claude-haiku-4-5: Sonnet 4.6 wins on Tasks 2, 3, 4 (for prompts 1,024–4,095 vs. Haiku's 4,096 minimum), and 5. Haiku 4.5 wins on cost and latency.

**Known limitations on this axis:**
- Task 3 (long-document analysis) assumes text input; image-heavy documents consume tokens differently and the word-density advantage may not apply.
- Task 5 (knowledge-work) GDPval score is Elo-based and subject to leaderboard drift — verify against updated benchmarks before routing decisions.

**Sources:**
- [Anthropic Official Models Overview](https://platform.claude.com/docs/en/about-claude/models/overview)
- [Tyler Folkman, Substack](https://tylerfolkman.substack.com/p/i-tested-opus-47-against-sonnet-46)
- `_official-prompt-caching.md` line 650
- `_official-models-overview.md` lines 33-34, 37
