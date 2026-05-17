---
provider: google
model: gemini-3-flash
capability: latency-throughput
chunk_id: 21-latency-throughput
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: self_research
confidence: medium
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [latency, throughput, ttft, thinking-level, speed]
related_chunks:
  - 20-pricing
  - 10-reasoning
  - 40-unique-strengths
  - 26-context-window
related_models:
  - google/gemini-3-1-pro
  - google/gemini-3-1-flash-lite
  - google/gemini-3-1-flash-live
peer_comparisons:
  - peer: google/gemini-3-1-pro
    relation: stronger
    note: "Flash is optimized for lower TTFT vs Pro; Pro trades speed for deeper reasoning accuracy"
  - peer: google/gemini-3-1-flash-live
    relation: different-approach
    note: "Flash Live targets sub-400ms bidirectional audio; Flash targets batch/interactive latency, not real-time streaming"
---

**Summary** — Gemini 3 Flash is optimized for low Time-to-First-Token (TTFT) relative to Pro-tier models. Latency is sensitive to the `thinking_level` parameter — `minimal` delivers the fastest TTFT for agentic loops; `high` adds reasoning depth at the cost of first-token delay. Long-context use significantly increases TTFT as the window fills toward 1M tokens. Specific p50/p99 latency figures and tokens/sec are not available in the converged round-2 profile.

**Specifics:**
- Optimized for low TTFT as a Flash-tier model. (Source: round-2-self-research.md section 3)
- TTFT is sensitive to `thinking_level`: `minimal` = fastest; `high` = slowest but deepest reasoning. (Source: round-2-self-research.md section 2)
- TTFT increases significantly as the 1M token context window fills. (Source: round-2-self-research.md section 6)
- For sub-400ms real-time bidirectional audio, route to `gemini-3.1-flash-live` — not this model. (Source: round-2-self-research.md section 5)
- p50/p99 latency and tokens/sec are not documented in the round-2 profile.

**Compared to peers (sharpened by Dealbreaker):**
- vs. google/gemini-3-1-pro: Flash is faster at equivalent task complexity due to model size. Pro trades speed for deeper reasoning on hardest tasks.
- vs. google/gemini-3-1-flash-lite: Flash-Lite may be marginally faster for ultra-simple tasks; Flash's `thinking_level: minimal` closes the gap for agentic loop use cases.
- vs. google/gemini-3-1-flash-live: Flash Live is purpose-built for real-time audio (<400ms); Flash is not appropriate for that latency class.

**Known limitations on this axis:**
- No p50/p99 benchmark data available in converged profile — latency claims are qualitative, not measured.
- Long-context degradation: TTFT at 1M tokens is materially higher than at short contexts.

**Sources:**
- round-2-self-research.md sections 2, 3, and 6
