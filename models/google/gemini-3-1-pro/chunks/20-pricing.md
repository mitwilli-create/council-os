---
provider: google
model: gemini-3-1-pro
capability: pricing
chunk_id: 20-pricing
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 4
egoism_strikes_at_convergence: 1
tags: [pricing, cost, caching, batch, tiered-pricing, 200k-cliff]
related_chunks:
  - 16-long-context
  - 26-context-window
  - 21-latency-throughput
  - 40-unique-strengths
related_models:
  - anthropic/claude-opus-4-7
  - google/gemini-3-flash
  - google/gemini-3-1-flash-lite
peer_comparisons:
  - peer: anthropic/claude-opus-4-7
    relation: stronger
    note: "Gemini 3.1 Pro ~$2/MTok input vs Opus 4.7's ~$5/MTok input. Price-per-correct-call advantage on MCP-Atlas tasks."
  - peer: google/gemini-3-flash
    relation: weaker
    note: "Gemini 3 Flash at $0.50/$3.00 is 4× cheaper. Use Flash for medium-reasoning tasks."
  - peer: google/gemini-3-1-flash-lite
    relation: weaker
    note: "Flash-Lite at $0.25/$1.50 is 8× cheaper. Use for minimal-logic, high-volume tasks."
---

**Summary** — Gemini 3.1 Pro has a two-tier pricing structure with a hard cliff at 200k tokens: crossing that threshold doubles both input and output costs. Implicit context caching is automatic-on by default for paid projects, delivering a 90% discount on cache reads. Batch API is supported at a 50% discount. Compared to Claude Opus 4.7, Gemini 3.1 Pro is roughly 2.5× cheaper on input tokens at standard context lengths — a meaningful routing signal for cost-sensitive multi-tool pipelines.

**Specifics:**
- Standard tier (≤200k tokens): $2.00/1M input, $12.00/1M output. (Source: profile Section 3, https://ai.google.dev/pricing, Dealbreaker R2 spot check)
- Long-context tier (>200k tokens): $4.00/1M input, $18.00/1M output — double the standard rate. (Source: profile Section 3)
- Implicit caching: automatic-on default for paid projects. Cache read cost: $0.20/1M (90% discount). Minimum cacheable prefix size: `[UNKNOWN — would need a benchmark]`. (Source: profile Section 3)
- Batch API: supported. 50% cost discount over standard synchronous pricing. (Source: profile Section 3)
- Cache TTL: `[UNKNOWN]`. (Source: profile Section 3)
- Rate limits: tiered by Google Cloud/Vertex project. Defaults typically start at a strict RPM on preview. Exact defaults vary by account. `[UNKNOWN — exact defaults]`. (Source: profile Section 3)
- Sibling comparison: Flash-Lite ($0.25/$1.50) is 8× cheaper; Gemini 3 Flash ($0.50/$3.00) is 4× cheaper. Route to Pro strictly for heavy reasoning, massive multi-step tool orchestration, or long-context ingestion. (Source: profile Section 5 Sibling Crossover Map)

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-opus-4-7: roughly 2.5× cheaper on input tokens at standard context lengths (~$2/MTok vs ~$5/MTok). For MCP-Atlas tasks, Gemini delivers 73.9% accuracy at less than half the input cost of Opus 4.7. (Source: profile Section 5)
- vs. google/gemini-3-flash: Pro is 4× more expensive. Only route here when reasoning depth justifies the premium. (Source: profile Section 5)
- vs. google/gemini-3-1-flash-lite: Pro is 8× more expensive. (Source: profile Section 5)

**Known limitations on this axis:**
- The 200k token pricing cliff is steep and must be modeled explicitly in any pipeline that processes large documents at volume. Costs can double unexpectedly on inputs that drift above the threshold. (Source: profile Section 3)
- Cache TTL and minimum prefix size are unknown — operators cannot reliably model cache savings without benchmarking. (Source: profile Section 3)
- Preview-tier rate limits may be strict and account-specific. (Source: profile Section 3)

**Sources:**
- [Gemini API pricing](https://ai.google.dev/pricing)
- [Dealbreaker R2 spot check on $2/$12 and $4/$18 tiers](../research-rounds/round-2-verdict.yaml)
