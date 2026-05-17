---
provider: perplexity
model: sonar-reasoning-pro
capability: latency-throughput
chunk_id: 21-latency-throughput
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: self_research
confidence: low
sycophancy_strikes_at_convergence: 2
egoism_strikes_at_convergence: 1
tags: [latency, throughput, ttft, think-blocks, timeout-risk]
related_chunks: [10-reasoning, 22-rate-limits]
related_models: [perplexity/sonar-pro]
peer_comparisons:
  - peer: perplexity/sonar-pro
    relation: weaker
    note: "Sonar Pro lacks reasoning overhead. End-to-end latency on the same input will be lower with Sonar Pro due to no <think> generation."
---

**Summary** — No official TTFT or tokens/second numbers are published for Sonar Reasoning Pro. Qualitatively, DeepSeek-R1's large `<think>` traces mean end-to-end latency is higher than non-reasoning siblings on complex tasks. Long reasoning outputs can cause client timeouts in wrappers tuned for fast models, and integrators must increase their timeout budgets accordingly.

**Specifics:**
- No published TTFT / p50 / p99 latency figures. `[UNKNOWN — would need direct measurement]`
- Large `<think>` blocks (12k–23k tokens on hard tasks) require generation time before any final answer token is emitted, increasing perceived latency.
- LiteLLM integrations with default timeouts may time out on heavy reasoning calls. `[INFERRED FROM USER REPORTS]` ([LiteLLM discussion #8728](https://github.com/BerriAI/litellm/discussions/8728))
- Rate limits: not stated in public docs; account-dependent. `[UNKNOWN]`

**Compared to peers (sharpened by Dealbreaker):**
- vs. perplexity/sonar-pro: Sonar Pro has no CoT overhead, so same-input end-to-end latency is lower. For latency-sensitive applications, Sonar Pro is preferable if CoT is not needed.

**Known limitations on this axis:**
- No hard numbers; confidence is low. Measure in target environment before committing to latency SLAs.
- Client timeout configurations must be raised beyond defaults for reasoning-heavy calls.

**Sources:**
- [LiteLLM discussion #8728 — timeout notes](https://github.com/BerriAI/litellm/discussions/8728)
- No official Perplexity latency benchmarks found. `[INFERRED]`
