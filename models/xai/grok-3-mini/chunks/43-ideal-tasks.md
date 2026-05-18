---
provider: xai
model: grok-3-mini
capability: ideal-tasks
chunk_id: 43-ideal-tasks
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [routing, ideal-tasks, high-volume, cost-sensitive, math, code]
related_chunks: [00-overview, 20-pricing, 10-reasoning, 15-code-generation, 44-avoid-when]
related_models: [xai/grok-4-3, anthropic/claude-haiku-4-5]
peer_comparisons:
  - peer: anthropic/claude-haiku-4-5
    relation: comparable
    note: "Both are in the cheap-tier-reasoning segment; for AIME-class math, compare benchmarks directly before choosing."
  - peer: xai/grok-4-3
    relation: different-approach
    note: "grok-4.3 is the appropriate choice when tasks exceed grok-3-mini's context or capability ceiling."
---

**Summary** — Route to grok-3-mini for high-volume, cost-sensitive reasoning tasks that fit within 131k tokens. Primary use cases: competition math, bounded code generation, batch offline processing, and educational tooling where 95%+ math accuracy at lowest possible cost is required. This is the xAI model for throughput-at-scale workloads.

**Specifics:**
- **Task 1 — Cost-sensitive competition math or code generation:** AIME 2024 95.8% / LiveCodeBench 80.4% at $0.30/$0.50/MTok. Best cost-to-accuracy ratio in the xAI lineup for these workloads.
- **Task 2 — Short-to-medium reasoning chains within 131k tokens:** reasoning-effort=high for depth, reasoning-effort=low for speed. Covers most single-document summarization, classification, and structured extraction tasks.
- **Task 3 — Batch offline processing where price per token dominates:** no batch API discount published, but base rate is already the lowest in xAI lineup. Suitable for high-volume eval runs.
- **Task 4 — Prototyping agentic loops within tool-calling budget:** function calling and parallel tool calls supported. Prototype cheaply before escalating to grok-4.3 or grok-4.20-multi-agent.
- **Task 5 — Educational or internal tooling requiring high math accuracy at lowest cost:** 95%+ AIME accuracy at 76–85% lower cost than siblings.

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-haiku-4-5: both are cheap-tier models; benchmark comparison on math and code tasks is recommended before committing at scale, as cost and performance profiles differ.
- vs. xai/grok-4-3: grok-4.3 is the escalation path when context or capability ceiling is hit; prototype on grok-3-mini, promote to grok-4.3 if needed.

**Known limitations on this axis:**
- High-volume batch workloads cannot leverage a batch API discount (not published); cost savings come only from the base rate.
- Routing to this model for tasks exceeding 131k context will fail — use `44-avoid-when.md` to check before routing.

**Sources:**
- [artificialanalysis.ai/models/grok-3-mini-reasoning](https://artificialanalysis.ai/models/grok-3-mini-reasoning)
- [xAI pricing](https://x.ai/api)
