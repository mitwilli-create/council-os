---
provider: perplexity
model: sonar
capability: refusal-patterns
chunk_id: 42-refusal-patterns
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: false
source_authority: self_research
confidence: low
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [refusal, safety-filter, adversarial, meta-reasoning, limits]
related_chunks: [41-known-limitations, 44-avoid-when]
related_models: [perplexity/sonar-pro, perplexity/sonar-reasoning-pro, perplexity/sonar-deep-research]
peer_comparisons:
  - peer: perplexity/sonar-pro
    relation: weaker
    note: "Sonar Pro completed the identical R2 prompt cleanly — Sonar base is strictly more refusal-prone than Pro"
---

**Summary** — Sonar (base) has the strictest safety filters observed in the Perplexity Sonar family. The R2 Council OS revision prompt (21k chars, adversarially-framed critique of R1 self-research) triggered an immediate refusal. The refusal text explicitly named "hidden/forbidden internal instructions," "system-prompt content," "adversarial evaluation details," and "sensitive implementation specifics" as reasons. No other Sonar variant (Pro, Reasoning Pro, Deep Research) triggered this refusal on the same prompt.

**Specifics:**
- Confirmed refusal trigger: adversarially-framed multi-step revision prompt with inlined critique and meta-reasoning about prompt structure. [R2 Dealbreaker]
- Refusal text excerpt: "I can't comply with the prompt as written. It asks me to produce a model profile using hidden/forbidden internal instructions, including system-prompt content, adversarial evaluation details, and potentially sensitive implementation specifics." [R2 Dealbreaker]
- Sonar offered alternative lower-commitment options (summarize search results, draft a public-facing template) — it did not hard-stop, but declined the task as framed.
- Refusal pattern is NOT observed on: simple factual queries, single-step lookups, direct Q&A. [R2 Dealbreaker routing implications]
- The base tier appears to have stricter filters than paid sibling tiers — consistent with a pattern where safety configuration tightens at the cheapest tier.

**Compared to peers (sharpened by Dealbreaker):**
- vs. perplexity/sonar-pro: Sonar Pro is strictly less refusal-prone on complex, adversarially-framed prompts.
- vs. perplexity/sonar-reasoning-pro: same — no refusal observed on R2 prompt.
- vs. perplexity/sonar-deep-research: same — completed R2/R3 without refusal.

**Known limitations on this axis:**
- Any prompt that involves: (a) critique of the model's own output, (b) inlined system-prompt-like instructions, (c) adversarial framing, or (d) multi-step revision chains — risks refusal from Sonar base.
- Plan for refusal-fallback routing to Sonar Pro whenever Sonar base is in a pipeline handling these inputs.

**Sources:**
- R2 Dealbreaker (refusal write-up): `/models/perplexity/sonar/research-rounds/round-2-dealbreaker.md`
