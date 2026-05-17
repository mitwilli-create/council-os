---
provider: anthropic
model: claude-sonnet-4-6
capability: unique-strengths
chunk_id: 40-unique-strengths
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 5
egoism_strikes_at_convergence: 5
tags: [strengths, differentiators, routing, extended-thinking, ux-coding]
related_chunks: [10-reasoning, 15-code-generation, 16-long-context, 20-pricing, 43-ideal-tasks]
related_models: [anthropic/claude-opus-4-7, anthropic/claude-haiku-4-5]
peer_comparisons:
  - peer: anthropic/claude-opus-4-7
    relation: different-approach
    note: "Sonnet 4.6 uniquely retains Extended thinking explicit-budget surface that Opus 4.7 dropped. Also wins on UX-weighted coding rubric (68/100 vs. 63/100) at 40% lower cost."
  - peer: anthropic/claude-haiku-4-5
    relation: stronger
    note: "Sonnet 4.6 has adaptive thinking (Haiku does not), 1M token window (Haiku caps at 200k), and higher Tau-bench agentic scores (97.9% vs. 83.0% Telecom)."
---

**Summary** — Sonnet 4.6 has six documented strengths relative to its peers. The single most structurally unique capability is the retention of the Extended thinking explicit-budget surface (`budget_tokens`) — which Opus 4.7 dropped entirely. Combined with 40% lower cost than Opus 4.7, a word-density advantage in the 1M token window, the only short-prompt caching capability among current Anthropic models (1,024-token minimum vs. 4,096), and a win on UX-weighted coding rubric against Opus 4.7, Sonnet 4.6 is positioned as the correct mid-tier choice for a specific set of pipelines.

**Specifics:**

**Strength 1 — Extended thinking explicit-budget surface (structural exclusivity vs. Opus 4.7):**
Sonnet 4.6 supports `thinking: { type: "enabled", budget_tokens: N }` — caller-controlled reasoning token budget. Opus 4.7 supports adaptive thinking only; it cannot accept explicit `budget_tokens`. Haiku 4.5 has Extended thinking but not adaptive thinking. Sonnet 4.6 is the ONLY current Anthropic model with both surfaces. Any pipeline built on `budget_tokens` on Opus 4.6 must route to Sonnet 4.6, not Opus 4.7. Source: `_official-models-overview.md` lines 33-34.

**Strength 2 — UX-weighted real-world coding rubric (win over Opus 4.7 at 40% lower cost):**
Tyler Folkman 7-category custom benchmark: Sonnet 4.6 **68/100** vs. Opus 4.7 **63/100** — a 5-point win. Opus 4.7 had specific failure modes (no vim keys, broken ANSI sequences); Sonnet 4.6 produced clean, maintainable output. When the coding rubric weights UX quality and maintainability alongside correctness, Sonnet 4.6 beats the flagship at 40% lower cost. Source: [Tyler Folkman, Substack](https://tylerfolkman.substack.com/p/i-tested-opus-47-against-sonnet-46).

**Strength 3 — Short-prompt caching exclusivity (1,024-token minimum vs. 4,096 for Opus 4.7 and Haiku 4.5):**
Prompts 1,024–4,095 tokens can cache on Sonnet 4.6 but receive silent no-cache on Opus 4.7 and Haiku 4.5. For high-volume short-prompt workloads in this range, Sonnet 4.6 achieves $0.30/MTok effective input cost on cache hits while the other two models pay full price. Source: `_official-prompt-caching.md` line 650.

**Strength 4 — Word-dense 1M token window (~750k words vs. Opus 4.7's ~555k words):**
Sonnet 4.6's older tokenizer packs 35% more words per nominal token than Opus 4.7's new tokenizer. At equal 1M token budget: Sonnet 4.6 holds ~750k words, Opus 4.7 holds ~555k words — ~195k word advantage. Above 550k words of text input, Sonnet 4.6 is the only Anthropic model that can fit the full input. Source: `_official-models-overview.md` line 37.

**Strength 5 — Office and knowledge-work at the $3/$15 price tier:**
GDPval-AA Elo 1,633–1,675 — the leading knowledge-work option at the Sonnet price tier. No cheaper model has comparable GDPval performance. For content creation, writing assistance, document drafting, and structured business reporting at mid-tier cost, Sonnet 4.6 is the Anthropic routing choice.

**Strength 6 — Agentic customer ops (Tau-bench) over Haiku 4.5:**
Tau2 Telecom: Sonnet 4.6 **97.9%** vs. Haiku 4.5 **83.0%** — 15-point gap. Tau2 Retail: Sonnet 4.6 **91.7%** vs. Haiku 4.5 **83.2%** — 8-point gap. If error cost per agentic task exceeds 15× Haiku 4.5's per-call price savings, route to Sonnet 4.6.

**What ONLY Sonnet 4.6 does (structural exclusivity):**
- Extended thinking explicit-budget surface — not in Opus 4.7.
- Adaptive thinking — not in Haiku 4.5.
- 1M token window at $3/$15 price point — Haiku caps at 200k; Opus 4.7 is $5/$25.
- Short-prompt caching (1,024-token minimum) — Opus 4.7 and Haiku 4.5 require 4,096-token minimum.

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-opus-4-7: Sonnet 4.6 uniquely offers explicit `budget_tokens` surface, short-prompt caching, and word-dense 1M context at 40% lower cost. Loses to Opus 4.7 on raw SWE-bench (8pt), GPQA (4pt at max effort), and MCP-Atlas (16pt).
- vs. anthropic/claude-haiku-4-5: Sonnet 4.6 covers both Extended and adaptive thinking, 5x larger context window, and 15-pt lead on Tau-bench agentic tasks. Haiku 4.5 is 3x cheaper and fastest-class.

**Known limitations on this axis:**
- All strengths are relative to specific rubrics and workload types. None represent global dominance over all frontier models — Gemini 3.1 Pro and GPT-5.5 lead on their respective axes (scientific reasoning, audio/video).

**Sources:**
- `_official-models-overview.md` lines 33-34, 37
- [Tyler Folkman, Substack](https://tylerfolkman.substack.com/p/i-tested-opus-47-against-sonnet-46)
- `_official-prompt-caching.md` line 650
