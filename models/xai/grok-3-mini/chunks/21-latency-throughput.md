---
provider: xai
model: grok-3-mini
capability: latency-throughput
chunk_id: 21-latency-throughput
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: self_research
confidence: medium
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [latency, throughput, tokens-per-second, ttft]
related_chunks: [00-overview, 20-pricing, 22-rate-limits]
related_models: [xai/grok-4-3, anthropic/claude-opus-4-7]
peer_comparisons:
  - peer: xai/grok-4-3
    relation: comparable
    note: "grok-4.3 is reported at ~159 tok/s vs. grok-3-mini ~163 tok/s — marginally faster throughput for grok-3-mini. Difference is within measurement noise."
  - peer: anthropic/claude-opus-4-7
    relation: different-approach
    note: "Opus 4.7 throughput not directly comparable; different tokenizer and output characteristics make token/sec comparisons approximate."
---

**Summary** — Grok 3 Mini achieves approximately 163 tokens/second on artificialanalysis.ai benchmarks, making it among the faster Grok-family models by raw throughput. TTFT (time-to-first-token) is not separately published. Latency spikes on very large parallel tool calls are possible but not quantified.

**Specifics:**
- **Throughput:** ~163 tokens/sec. Source: artificialanalysis.ai (2026-05-17 snapshot). Citation-tightness note: this is a single-source snapshot figure; verify before SLA commitments.
- **TTFT:** not separately reported in public benchmarks.
- **Latency on parallel tool calls:** possible spikes not quantified publicly.
- **Rate limits:** not publicly detailed beyond standard xAI tiers (see `22-rate-limits.md`).

**Compared to peers (sharpened by Dealbreaker):**
- vs. xai/grok-4-3: grok-4.3 reported at ~159 tok/s — grok-3-mini is marginally faster, within measurement noise. For throughput-critical pipelines, grok-4.3 is not faster despite its higher cost.
- vs. anthropic/claude-opus-4-7: direct throughput comparison is approximate due to different tokenizers; Opus 4.7 throughput benchmarks should be checked on artificialanalysis.ai independently.

**Known limitations on this axis:**
- TTFT not published — unknown for streaming-sensitive applications.
- Single-source throughput figure; treat as approximate rather than guaranteed SLA.

**Sources:**
- [artificialanalysis.ai/models/grok-3-mini-reasoning](https://artificialanalysis.ai/models/grok-3-mini-reasoning)
