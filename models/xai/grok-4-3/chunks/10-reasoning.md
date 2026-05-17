---
provider: xai
model: grok-4-3
capability: reasoning
chunk_id: 10-reasoning
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: self_research
confidence: low
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [reasoning, chain-of-thought, extended-thinking, math, planning]
related_chunks:
  - 11-tool-use
  - 15-code-generation
  - 43-ideal-tasks
related_models:
  - xai/grok-4-20-reasoning
  - anthropic/claude-opus-4-7
peer_comparisons:
  - peer: xai/grok-4-20-reasoning
    relation: weaker
    note: "Grok 4.20 Reasoning is the dedicated reasoning-mode sibling; 4.3 supports chain-of-thought but no public thinking-level controls are documented"
  - peer: anthropic/claude-opus-4-7
    relation: different-approach
    note: "Opus 4.7 exposes thinking-budget controls; Grok 4.3's reasoning-effort API surface is undocumented in public sources"
---

**Summary** — Grok 4.3 supports chain-of-thought and extended thinking on multi-step math and planning tasks. No public documentation of thinking-level controls (reasoning_effort, thinking_budget, or equivalent) has been found for Grok 4.3 as of round 2. The dedicated reasoning sibling Grok 4.20 Reasoning should be preferred when verified step-by-step reasoning depth is the primary routing criterion.

**Specifics:**
- Chain-of-thought and extended thinking supported. (Source: [INFERRED FROM PROVIDER DOCS] — xAI does not publish per-model reasoning-control documentation)
- No public thinking-level controls (reasoning_effort / thinking_budget / step count) documented for `grok-4.3`. ([UNKNOWN — would need official confirmation])
- Suitable for multi-step math, logical planning, and structured problem decomposition. (Source: round-2-self-research.md section 2)
- GPQA-diamond benchmark score for Grok 4.3 is not publicly available per BenchLM. (Source: round-2-self-research.md section 5)

**Compared to peers (sharpened by Dealbreaker):**
- vs. xai/grok-4-20-reasoning: Grok 4.20 Reasoning is the purpose-built reasoning tier; route there for maximum reasoning depth. Grok 4.3 is the cost-optimized alternative without documented reasoning controls.
- vs. anthropic/claude-opus-4-7: Opus 4.7 exposes `thinking` block with configurable budget. Grok 4.3's equivalent (if any) is undocumented — cannot make a verified comparison on this axis.

**Known limitations on this axis:**
- Thinking-level controls absent from public docs; cannot tune reasoning depth via API.
- No public GPQA or comparable benchmark score for cross-model reasoning comparison.

**Sources:**
- round-2-self-research.md section 2 (Core capabilities — Reasoning)
- [BenchLM](https://benchlm.com) — no Grok 4.3 GPQA score available
