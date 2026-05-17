---
provider: google
model: gemini-3-1-pro
capability: latency-throughput
chunk_id: 21-latency-throughput
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 4
egoism_strikes_at_convergence: 1
tags: [latency, ttft, throughput, tokens-per-second, timeout-risk]
related_chunks:
  - 10-reasoning
  - 41-known-limitations
  - 44-avoid-when
related_models:
  - anthropic/claude-opus-4-7
  - google/gemini-3-flash
peer_comparisons:
  - peer: google/gemini-3-flash
    relation: weaker
    note: "Flash has lower TTFT by design — minimal thinking tier available. Use Flash for low-latency conversational tasks."
  - peer: anthropic/claude-opus-4-7
    relation: different-approach
    note: "No direct TTFT comparison in the converged profile. Both have elevated latency from extended thinking."
---

**Summary** — Gemini 3.1 Pro has high latency by design. Time to First Token (TTFT) averages 28.8–33.8 seconds across providers, driven by its multi-tier parallel reasoning chain generation. Output throughput is approximately 128.4 tokens/sec once generation begins. Peak-load TTFT can exceed 30–40 seconds, creating timeout risk for clients with default connection settings. This model is not suitable for real-time conversational interfaces or interactive agents requiring fast first response.

**Specifics:**
- TTFT: ~28.8–33.8 seconds (range across API providers). Source: Artificial Analysis, March 2026. (Source: profile Section 3, Dealbreaker R2 spot check replacing R1 `[UNKNOWN]`)
- Output throughput: ~128.4 tokens/sec once generation is underway. (Source: Artificial Analysis, March 2026)
- Peak-load TTFT: frequently exceeds 30–40 seconds, which triggers timeouts on clients configured with default connection wait times. (Source: profile Section 6)
- Root cause: multi-tier thinking generates parallel reasoning chains before output begins — higher thinking levels linearly increase TTFT. (Source: profile Section 2, Section 6)
- No `minimal` thinking tier available to reduce TTFT — the model always runs extended reasoning. (Source: profile Section 5)

**Compared to peers (sharpened by Dealbreaker):**
- vs. google/gemini-3-flash: Flash supports `minimal` thinking and has structurally lower TTFT. Use Flash for latency-sensitive workloads. (Source: profile Section 5 Sibling Crossover Map)
- vs. google/gemini-3-1-flash-lite: Flash-Lite defaults to minimal thinking — lowest TTFT in the Gemini 3 family. (Source: profile Section 5)
- vs. anthropic/claude-opus-4-7: no direct TTFT benchmark in the converged profile. Both models have elevated latency from extended thinking architectures.

**Known limitations on this axis:**
- Client timeout configuration is mandatory: default HTTP connection timeouts (often 30s) will frequently cut off requests before first token is received. (Source: profile Section 6)
- High TTFT makes iterative debug loops (code review, multi-step reasoning chains) slower than competitors with lower latency. (Source: profile Section 6)
- No path to reduce TTFT on this model — `minimal` thinking is not supported. (Source: profile Section 5)

**Sources:**
- [Artificial Analysis benchmark data (March 2026)](https://artificialanalysis.ai)
- [Dealbreaker R2 verdict — latency spot check](../research-rounds/round-2-verdict.yaml)
