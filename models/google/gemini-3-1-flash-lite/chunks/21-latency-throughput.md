---
provider: google
model: gemini-3-1-flash-lite
capability: latency-throughput
chunk_id: 21-latency-throughput
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: self_research
confidence: low
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [latency, throughput, ttft, tokens-per-second, benchmarks]
related_chunks: [20-pricing, 43-ideal-tasks, 21-latency-throughput]
related_models: [google/gemini-3-1-pro, google/gemini-3-flash]
peer_comparisons:
  - peer: google/gemini-3-1-pro
    relation: stronger
    note: "Flash-Lite is designed for lower latency than Pro; directional only — no verified TTFT numbers."
---

**Summary** — Gemini 3.1 Flash-Lite is positioned by Google as a low-latency model optimized for latency-sensitive, high-throughput workloads. However, verified TTFT (time to first token) and tokens/second figures from Artificial Analysis or equivalent benchmarks are `[UNKNOWN]` — the prior R1 overclaim of specific latency figures was struck at Dealbreaker and replaced with a proper hedge. Confidence is low on this axis until external benchmark data is sourced.

**Specifics:**
- Designed for low-latency, high-throughput use cases (provider positioning). Source: round-2-self-research.md Section 1.
- Verified TTFT / tokens-per-second: `[UNKNOWN — would need a benchmark from Artificial Analysis or equivalent]`. Source: round-2-self-research.md Section 3 line 40 (corrected at R1 Dealbreaker, strike H8).
- Rate limits: tier-dependent; varies by Vertex AI / AI Studio project settings. No fixed documented RPM/TPM. Source: round-2-self-research.md Section 3 line 41 (corrected from fabricated R1 values, strike S3.4).
- `thinking_level: minimal` default is the structural mechanism delivering the lowest latency in the Gemini 3.1 family — no extended reasoning cycles by default.

**Compared to peers (sharpened by Dealbreaker):**
- vs. google/gemini-3-1-pro: Flash-Lite is expected to be faster (lower TTFT, higher throughput) given `thinking_level: minimal` default vs Pro's extended reasoning. No verified numbers — directional only.
- vs. google/gemini-3-flash: Flash-Lite expected to be faster for same reason. Directional only.

**Known limitations on this axis:**
- No verified TTFT or tokens/sec figures exist in the Council OS corpus for this model as of Round 2.
- Until Artificial Analysis or equivalent publishes Flash-Lite-specific data, latency routing decisions should rely on the provider's directional positioning, not hard numbers.

**Sources:**
- round-2-self-research.md Section 3 lines 40-41
- round-2-verdict.yaml (strike H8: latency overclaim corrected to `[UNKNOWN]`)
- round-2-verdict.yaml (strike S3.4: fabricated RPM/TPM corrected)
