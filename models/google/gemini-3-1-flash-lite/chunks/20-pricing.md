---
provider: google
model: gemini-3-1-flash-lite
capability: pricing
chunk_id: 20-pricing
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [pricing, cost, cost-crossover, batch-discount, caching]
related_chunks: [00-overview, 40-unique-strengths, 43-ideal-tasks, 21-latency-throughput]
related_models: [google/gemini-3-1-pro, google/gemini-3-flash]
peer_comparisons:
  - peer: google/gemini-3-1-pro
    relation: stronger
    note: "Flash-Lite is 8× cheaper than Gemini 3.1 Pro at <200k token ranges ($0.25/$1.50 vs Pro's $2.00/$12.00 per 1M)."
  - peer: google/gemini-3-flash
    relation: stronger
    note: "Flash-Lite is 2× cheaper than Gemini 3 Flash ($0.25/$1.50 vs Flash's $0.50/$3.00 per 1M — reciprocal: Flash is 2× more expensive)."
  - peer: openai/gpt-5-5-mini
    relation: comparable
    note: "Cost tier is comparable — exact per-1M-token crossover is [UNKNOWN — would need pricing spot-check]. Flash-Lite preferred for Google-native grounding/multimodal tasks."
---

**Summary** — Gemini 3.1 Flash-Lite is the cheapest Gemini 3.1 tier at $0.25/1M input tokens and $1.50/1M output tokens. This positions it 2× cheaper than Gemini 3 Flash and 8× cheaper than Gemini 3.1 Pro. Audio input is $0.50/1M tokens. Prompt caching gives a 90% discount on cache reads (auto-on for paid projects), and Batch API support provides additional cost discounts for non-real-time workloads. These multipliers compound: cached, batched Flash-Lite calls are the floor of cost in the Gemini 3.1 family.

**Specifics:**
- Input: $0.25/1M tokens. Source: `_official-gemini-3-api.md line 74`.
- Output: $1.50/1M tokens. Source: `_official-gemini-3-api.md line 74`.
- Audio input: $0.50/1M tokens. Source: `_official-gemini-3-api.md line 74`.
- Prompt caching: automatic-on for paid projects; 90% discount on cache reads. Source: cross-verified vs Pro R2 line 82 + Flash R2 line 54.
- Batch API: supported; provides cost discounts for non-real-time processing. Source: round-2-self-research.md Section 3.

**Cost crossover — the critical routing signal:**
- vs. Gemini 3 Flash ($0.50/$3.00 per 1M): Flash-Lite is **2× cheaper**. Route to Flash-Lite for all tasks where `thinking_level: minimal` is adequate. Route to Flash only when `thinking_level: medium/high` is required.
- vs. Gemini 3.1 Pro ($2.00/$12.00 per 1M): Flash-Lite is **8× cheaper**. Route to Pro only for tasks that demonstrably need Pro's reasoning depth (GPQA-class, complex code synthesis, advanced math).
- vs. GPT-5.5-mini: Cost tier is **comparable** — exact crossover `[UNKNOWN — would need pricing spot-check]`. Flash-Lite preferred for Google Search grounding and native multimodal audio/video pipelines.
- Volume threshold: at >100 calls/session, the 8× savings vs Pro (or 2× vs Flash) are material enough to make explicit routing decisions. Source: round-2-verdict.yaml sibling differentiation checks.

**Known limitations on this axis:**
- Rate limits are tier-dependent and vary by Vertex AI / AI Studio project settings — no fixed documented RPM/TPM. Source: round-2-self-research.md Section 3 line 41 (corrected from R1 fabricated values).
- Knowledge cutoff: `[UNKNOWN — would need to test]`.

**Sources:**
- `_official-gemini-3-api.md line 74` (input/output/audio pricing)
- round-2-verdict.yaml (spot check H1: pricing verified; strike S3.1 corrected from $0.02/$0.08)
- round-2-verdict.yaml (cost ratios H5 + sibling_differentiation section: 8× Pro, 2× Flash confirmed internally consistent)
- round-2-verdict.yaml (new strike id=1: GPT-5.5-mini "Comparable" cost unverified — [UNKNOWN] hedge applied)
