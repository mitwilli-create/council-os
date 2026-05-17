---
provider: openai
model: gpt-5-4
capability: latency-throughput
chunk_id: 21-latency-throughput
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: pending
confidence: low
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [latency, throughput, ttft, tokens-per-second]
related_chunks: [10-reasoning, 20-pricing]
related_models: []
peer_comparisons: []
---

**Summary** — Not documented for this version. TTFT and tokens/sec are unknown from the supplied source set. The only latency-relevant signal from OpenAI docs is that `reasoning_effort: xhigh` increases cost and latency without consistent benefit — avoid as default. Test before relying on latency characteristics.

**Specifics:**
- Typical TTFT: **[UNKNOWN — would need provider telemetry or controlled testing]**.
- Tokens/sec: **[UNKNOWN — would need provider telemetry or controlled testing]**.
- Indirect signal: OpenAI prompt guidance warns that higher `reasoning_effort` levels add latency/cost without consistent benefit; `xhigh` is explicitly flagged as a default anti-pattern. ([OpenAI prompt guidance](https://developers.openai.com/api/docs/guides/prompt-guidance))

**Compared to peers (sharpened by Dealbreaker):**
- No latency benchmark comparisons available in the supplied source set.

**Known limitations on this axis:**
- Do not assume latency parity with mini/nano siblings; throughput at scale has not been confirmed.

**Sources:**
- [OpenAI prompt guidance — reasoning_effort latency warning](https://developers.openai.com/api/docs/guides/prompt-guidance)
