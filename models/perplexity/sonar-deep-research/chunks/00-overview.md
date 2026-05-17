---
provider: perplexity
model: sonar-deep-research
capability: overview
chunk_id: 00-overview
last_research_round: 3
last_updated: 2026-05-17
verified_by_dealbreaker: false
source_authority: self_research
confidence: medium
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [identity, positioning, api-id, sonar-family, release]
related_chunks: [10-reasoning, 20-pricing, 43-ideal-tasks, 44-avoid-when, 50-release-history]
related_models: [perplexity/sonar-pro, perplexity/sonar-reasoning-pro, perplexity/sonar]
peer_comparisons:
  - peer: openai/gpt-5-5
    relation: different-approach
    note: "GPT-5.5 is a general frontier model with optional browsing; Sonar Deep Research is a purpose-built research pipeline. GPT-5.5 is better for code, tool use, and structured output."
  - peer: google/gemini-3-1-pro
    relation: different-approach
    note: "Gemini 3.1 Pro is multimodal and integrates into Google Cloud. Sonar Deep Research is text-only but more aggressively search-fan-out focused."
---

**Summary** — Sonar Deep Research is Perplexity's highest-tier, text-only, web-grounded research agent. It is not a bare language model exposed as a chat API but an agentic pipeline that wraps an undisclosed LLM in multi-stage web search, retrieval, and synthesis logic. Official API model ID: `sonar-deep-research`. Released Q1 2025 (February most commonly cited for API access). Sits above Sonar, Sonar Pro, and Sonar Reasoning Pro in the family hierarchy and is explicitly not the default recommendation for conversational, coding, or bulk-processing tasks.

**Specifics:**
- Official model ID: `sonar-deep-research` (used at the Perplexity API boundary; third-party proxies may relabel it). [INFERRED from aggregator model cards]
- Release window: Q1 2025; February 2025 most commonly cited for programmatic access; some platforms cite January 2025 preview, March 2025 GA. Profile uses Q1 2025 conservatively. [INFERRED from multiple external model cards]
- Architecture: not publicly disclosed. Perplexity has acknowledged using Llama- and DeepSeek-R1-related families in other Sonar variants; specific backbone for SDR is unknown. [UNKNOWN — not publicly disclosed]
- Predecessors: no named predecessor for this specific deep-research tier. Earlier `sonar-reasoning` model deprecated December 2025 in favor of `sonar-reasoning-pro`; unrelated to SDR. Fabricated "Copilot Pro" and "Pro Research" lineages from R1 profile explicitly retracted. [INFERRED]
- Positioning: premium escalation target within Perplexity's own lineup; designed for users who explicitly want exhaustive multi-source web synthesis and accept high latency and cost. Not the default for everyday queries.
- Higher-level "Deep Research" features in Perplexity's consumer/enterprise interfaces call the same `sonar-deep-research` backend — they are not separate model identifiers.

**Compared to peers (sharpened by Dealbreaker):**
- vs. openai/gpt-5-5: GPT-5.5 leads on code (Terminal-Bench 82.7%, SWE-Bench Pro 58.6% vs. no SDR scores), tool use, structured output, and computer control. SDR's edge is turnkey Perplexity-native deep research UI and citation metadata.
- vs. google/gemini-3-1-pro: Gemini supports multimodal input (images, audio, video). SDR is text-only. Both offer "deep research" modes; SDR integrates more tightly into Perplexity consumer products.
- vs. perplexity/sonar-pro: SDR has 5–10× higher per-query cost, higher latency (20–60+ s vs. seconds), and aggressive search fan-out (hundreds of sources vs. moderate). Sonar Pro covers 90%+ of Perplexity use cases.

**Known limitations on this axis:**
- Release date has multiple conflicting external sources; Q1 2025 is the conservative synthesis.
- Architecture is a complete black box; routing must treat SDR as a behavioral unit, not an architectural one.
- No formal versioning published by Perplexity — behavior changes are not announced or tagged.

**Sources:**
- R3 self-research §§1.1–1.6 (round-3-self-research.md)
- R2 dealbreaker verdict (round-2-verdict.yaml)
