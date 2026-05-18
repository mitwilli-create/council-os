---
provider: perplexity
model: sonar
capability: code-generation
chunk_id: 15-code-generation
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: false
source_authority: self_research
confidence: low
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [code-generation, coding, programming]
related_chunks: [44-avoid-when]
related_models: []
peer_comparisons: []
---

**Summary** — Sonar (base) can produce code in its answers but is not a coding-specialized model. No benchmark-backed code quality score (SWE-bench or similar) was found in R1 self-research. The R1 Dealbreaker notes this is documentable as a capability-not-strength, not unknown. Do not route complex code-agent workflows or multi-step programming tasks here.

**Specifics:**
- Can explain code and generate snippets in responses. [self_research, [INFERRED]]
- No SWE-bench-class score or execution sandbox. [R1 Dealbreaker Strike 8]
- No coding specialization — this is a Search Model, not a code model. [R1 Dealbreaker Strike 8]

**Compared to peers (sharpened by Dealbreaker):**
- Cross-provider coding peers: no verified comparison. Stale R1 comparisons (GPT-4.1) stripped.

**Known limitations on this axis:**
- Not suitable for complex code-agent workflows or agentic programming tasks.
- No execution sandbox confirmed — cannot verify code output at runtime.

**Sources:**
- R1 Dealbreaker Strike 8: `/models/perplexity/sonar/research-rounds/round-1-dealbreaker.md`
