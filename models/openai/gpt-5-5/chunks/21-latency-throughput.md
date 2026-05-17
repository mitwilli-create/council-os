---
provider: openai
model: gpt-5-5
capability: latency-throughput
chunk_id: 21-latency-throughput
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: pending
confidence: low
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [latency, throughput, ttft, tokens-per-second, performance]
related_chunks: [20-pricing, 26-context-window]
related_models:
  - openai/gpt-5-4
  - openai/gpt-5-5-pro
peer_comparisons:
  - peer: openai/gpt-5-5-pro
    relation: stronger
    note: "Base GPT-5.5 expected to be faster than Pro on hard reasoning tasks — inferred, not benchmarked"
---

**Summary** — Specific TTFT and tokens/sec figures for GPT-5.5 are not documented in Round 2 research materials. Expected behavior: large-context, tool-heavy, or high-reasoning calls will have higher latency. GPT-5.5 Pro should be slower than base GPT-5.5 on the same task types.

**Specifics:**
- **TTFT:** UNKNOWN — not present in research materials; requires provider telemetry or user benchmarking.
- **Tokens/sec:** UNKNOWN — not present in research materials.
- **Expected latency drivers:** very long prompts, large output caps, high reasoning settings, and tool-heavy loops all increase latency.
- **Batch API:** appropriate for latency-tolerant offline work; 50% discount but no SLA on completion time.

**Compared to peers (sharpened by Dealbreaker):**
- vs. openai/gpt-5-5-pro: Base GPT-5.5 is inferred to be faster than Pro; Pro should be reserved for latency-tolerant high-value work.

**Known limitations on this axis:**
- No concrete TTFT or throughput numbers available from Round 2 research; this chunk is a placeholder.
- Large prompts and output caps can cause timeouts in latency-sensitive integrations.

**Sources:**
- No primary source for latency figures; check [OpenAI Cookbook](https://github.com/openai/openai-cookbook) or provider telemetry.
