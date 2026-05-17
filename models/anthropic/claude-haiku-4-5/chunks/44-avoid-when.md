---
provider: anthropic
model: claude-haiku-4-5
capability: avoid-when
chunk_id: 44-avoid-when
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 5
egoism_strikes_at_convergence: 0
tags: [routing, avoid-when, adaptive-thinking, quality-ceiling, client-facing]
related_chunks: [43-ideal-tasks, 41-known-limitations, 10-reasoning]
related_models:
  - anthropic/claude-sonnet-4-6
  - anthropic/claude-opus-4-7
peer_comparisons:
  - peer: anthropic/claude-sonnet-4-6
    relation: weaker
    note: "Route to Sonnet 4.6 for adaptive-thinking tasks, single-pass ambiguous reasoning, and client-facing quality-premium scenarios."
  - peer: anthropic/claude-opus-4-7
    relation: weaker
    note: "Route to Opus 4.7 for orchestration, synthesis, final judgment, and multi-model council adjudication."
---

**Summary** — Avoid Claude Haiku 4.5 when the task requires adaptive thinking (dynamic compute reallocation mid-chain), single-pass precision on ambiguous or under-specified problems, client-facing outputs where quality premium justifies Sonnet pricing, unattended high-stakes computer-use automation, or orchestration/synthesis requiring Opus-level judgment. In each case, the recommended alternative and why is listed below.

**Specifics — when to route elsewhere:**

1. **Adaptive thinking required** → Route to **Sonnet 4.6**.
   Haiku cannot dynamically reallocate compute mid-chain. Tasks with ambiguous reasoning depth (nuanced heuristics, open-ended analysis, multi-step chain where optimal depth is unknown) need Sonnet's adaptive thinking.

2. **Single-pass precision on ambiguous tasks** → Route to **Sonnet 4.6**.
   Under-specified problems where the model must judge scope, context, and depth in real-time benefit from Sonnet's adaptive compute. Haiku's fixed extended-thinking budget may under- or over-compute.

3. **Client-facing outputs where quality premium is justified** → Route to **Sonnet 4.6**.
   When a human will read the output directly and quality variance is costly (customer emails, external reports, user-facing summaries), Sonnet's quality ceiling is worth the price delta.

4. **Unattended high-stakes computer-use automation** → Add human-in-the-loop or route to **Sonnet 4.6**.
   OSWorld 50.7% means ~49% of actions fail on the benchmark. Unattended production automation with real-world consequences requires checkpointing, supervision, or a higher-performing model.

5. **Orchestration, synthesis, final judgment** → Route to **Opus 4.7**.
   Multi-model council adjudication, strategic synthesis across long research threads, and high-stakes final decisions belong at the Opus tier.

6. **Low-volume, one-off tasks where cost is not the constraint** → Route to **Sonnet 4.6**.
   Cache economics only pay off at volume. A single complex task has no cache ROI; Sonnet's quality advantage is unambiguous.

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-sonnet-4-6: choose Sonnet for the six scenarios above; Haiku otherwise
- vs. anthropic/claude-opus-4-7: choose Opus for orchestration and synthesis; Haiku for execution

**Known limitations on this axis:**
- The boundary between "bounded" and "ambiguous" tasks is a judgment call; when uncertain, default to Sonnet and optimize down to Haiku after validation

**Sources:**
- [Anthropic Claude Haiku 4.5 announcement](https://www.anthropic.com/news/claude-haiku-4-5)
- Round-2 self-research profile routing decision rules
