---
provider: perplexity
model: sonar
capability: avoid-when
chunk_id: 44-avoid-when
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: false
source_authority: self_research
confidence: low
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [routing, avoid-when, safety-filter, refusal, limits]
related_chunks: [41-known-limitations, 42-refusal-patterns, 43-ideal-tasks, 20-pricing]
related_models: [perplexity/sonar-pro, perplexity/sonar-reasoning-pro, perplexity/sonar-deep-research]
peer_comparisons:
  - peer: perplexity/sonar-pro
    relation: weaker
    note: "Route to Sonar Pro whenever the task is more than single-pass, adversarially framed, or requires meta-reasoning"
---

**Summary** — Avoid Sonar (base) for: complex multi-step revision tasks, meta-reasoning about prompts, adversarially-framed inputs, hard math/proof reasoning, complex code-agent workflows, very large-context synthesis, and autonomous browser/OS control. The safety-filter refusal pattern (R2) makes Sonar base unsuitable for any Council OS workflow involving critique, revision, or adversarial framing. Route those tasks to Sonar Pro or higher tiers.

**Avoid Sonar base when:**

1. **Complex multi-step revision tasks** — Sonar base WILL REFUSE. Confirmed R2 finding. Route to Sonar Pro. [R2 Dealbreaker]

2. **Meta-reasoning about prompt structure or system instructions** — triggers safety-filter refusal. [R2 Dealbreaker]

3. **Adversarially-framed inputs** — red-team, dealbreaker, sycophancy-strip, critique — all risk refusal. Route to Sonar Pro or higher. [R2 Dealbreaker]

4. **Long-context revision with inlined instructions (>15k chars)** — refusal trigger observed at this size in R2. [R2 Dealbreaker]

5. **Hard math, proof, or analytical reasoning** — Sonar base is a Search Model with no CoT. Route to Sonar Reasoning Pro or a reasoning-specialist. [R1 self-research; R1 Dealbreaker Strike 10]

6. **Complex code-agent workflows** — Sonar is not a coding model and has no function calling. Route to a code-specialized model. [R1 self-research; R1 Dealbreaker Strike 8]

7. **Very large-context synthesis across many long files** — 127k context window. Route to Sonar Pro (200k) or Gemini-class long-context models. [R1 Dealbreaker Strike 9]

8. **Autonomous browser or OS control** — Sonar has no agentic capability. [R1 Dealbreaker Strike 15]

9. **Tasks requiring source quality over recency** — Sonar's retrieval is single-pass and shallow; hallucination and citation drift are documented. Use a stronger model with curated documents. [R1 Dealbreaker Strike 28]

10. **High-volume short-query workflows where per-request fee math makes Sonar more expensive than Sonar Pro** — always calculate total cost (tokens + per-request fees) before routing. [R1 Dealbreaker Strike 17, 26]

**Compared to peers (sharpened by Dealbreaker):**
- vs. perplexity/sonar-pro: route here for any multi-step, adversarial, or long-context task. Sonar Pro handles all Sonar base tasks plus these.
- vs. perplexity/sonar-reasoning-pro: route here when the task needs analytical CoT.
- vs. perplexity/sonar-deep-research: route here when multi-pass synthesis is needed.

**Known limitations on this axis:**
- The avoid-when list is broader than the ideal-tasks list for this model. Sonar base has a narrow safe operating range.

**Sources:**
- R2 Dealbreaker (safety-filter refusal): `/models/perplexity/sonar/research-rounds/round-2-dealbreaker.md`
- R1 Dealbreaker Strikes 8, 9, 10, 15, 17, 26, 28: `/models/perplexity/sonar/research-rounds/round-1-dealbreaker.md`
- R1 self-research Section 7: `/models/perplexity/sonar/research-rounds/round-1-self-research.md`
