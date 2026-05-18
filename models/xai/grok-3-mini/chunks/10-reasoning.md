---
provider: xai
model: grok-3-mini
capability: reasoning
chunk_id: 10-reasoning
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [reasoning, chain-of-thought, thinking, effort-control, math]
related_chunks: [00-overview, 15-code-generation, 40-unique-strengths, 43-ideal-tasks]
related_models: [xai/grok-4-3, anthropic/claude-opus-4-7, openai/gpt-5-5]
peer_comparisons:
  - peer: anthropic/claude-opus-4-7
    relation: weaker
    note: "Opus 4.7 leads GPQA-diamond and hard multi-hop; Grok 3 Mini trails by an unquantified margin on frontier agentic benchmarks."
  - peer: openai/gpt-5-5
    relation: weaker
    note: "GPT-5.5 leads complex multi-hop reasoning; Grok 3 Mini targets cost-sensitive single-task reasoning within 131k tokens."
  - peer: xai/grok-4-3
    relation: weaker
    note: "grok-4.3 is the flagship general reasoner; grok-3-mini is cheaper and sufficient for bounded reasoning tasks."
---

**Summary** — Grok 3 Mini is a capable reasoning model with an exposed `reasoning-effort` parameter (low/high) that lets callers trade latency and cost for depth of chain-of-thought. It achieves AIME 2024 95.8%, placing it among the top compact reasoning models as of mid-2026. It is strongest on bounded, well-structured reasoning tasks (competition math, code reasoning) within its 131k-token window.

**Specifics:**
- **`reasoning-effort` parameter:** low/high effort levels exposed via the `grok-3-mini-reasoning` API variant. Low effort reduces latency and output tokens; high effort maximizes chain-of-thought depth. Source: xAI API reference docs.
- **AIME 2024:** 95.8% reported. Source: artificialanalysis.ai/models/grok-3-mini-reasoning (2026-05-17 snapshot).
- **Hard limits:** multi-hop tasks requiring >131k tokens fail at context boundary; very recent knowledge (post-November 2024) is outside training data.
- **Chain-of-thought:** supported natively; internal reasoning tokens are generated before the visible response in reasoning mode.

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-opus-4-7: Opus 4.7 leads GPQA-diamond and frontier multi-hop reasoning; the gap margin on those benchmarks is unquantified in public leaderboards as of 2026-05-17. For AIME-class competition math, grok-3-mini is competitive at 76–85% lower cost.
- vs. openai/gpt-5-5: GPT-5.5 leads complex agentic reasoning; grok-3-mini is positioned for simpler single-pass reasoning at lower cost, not for frontier agentic pipelines.
- vs. xai/grok-4-3: grok-4.3 has larger context and higher capability ceiling; for reasoning tasks that fit 131k tokens, grok-3-mini costs 76% less on input.

**Known limitations on this axis:**
- Trails current frontier (Claude Opus 4.7, GPT-5.5) on GPQA-diamond and hard multi-hop reasoning by an unquantified margin.
- No extended-thinking budget control (unlike Anthropic's explicit token-budget surface); effort is coarse (low/high only).
- Context degradation above ~100k tokens expected on long reasoning chains.

**Sources:**
- [artificialanalysis.ai/models/grok-3-mini-reasoning](https://artificialanalysis.ai/models/grok-3-mini-reasoning)
- [xAI API reference](https://docs.x.ai/api)
