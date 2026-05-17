---
provider: xai
model: grok-4-3
capability: latency-throughput
chunk_id: 21-latency-throughput
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: self_research
confidence: low
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [latency, throughput, tokens-per-second, ttft]
related_chunks:
  - 20-pricing
  - 22-rate-limits
related_models:
  - anthropic/claude-opus-4-7
peer_comparisons:
  - peer: anthropic/claude-opus-4-7
    relation: different-approach
    note: "Opus 4.7 TTFT and throughput are unverified for cross-model comparison — both figures are provider-claimed, not independently benchmarked"
---

**Summary** — Grok 4.3 is reported to output at 159 tokens/second on high-speed output per Apiyi benchmarks. Time-to-first-token (TTFT) is unverified in public sources as of round 2. p50/p99 latency distributions are not publicly available. This is one data point from a single source and should be treated as directional rather than definitive.

**Specifics:**
- Output throughput: 159 tokens/sec reported. (Source: Apiyi benchmark — corrected from prior unverified claims; Strike 12 resolved)
- TTFT: unverified. ([UNKNOWN — would need official confirmation or independent benchmark])
- p50/p99 latency: not published. ([UNKNOWN])

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-opus-4-7: No verified cross-model throughput comparison available. Both figures lack independent third-party benchmarking at this resolution.

**Known limitations on this axis:**
- Single-source throughput claim (Apiyi); not confirmed by xAI official docs.
- TTFT critical for interactive use cases — unknown means cannot confirm streaming responsiveness vs. peers.

**Sources:**
- Apiyi benchmark (159 tokens/sec)
- round-2-self-research.md section 3 (Operational — Latency)
