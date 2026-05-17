---
provider: perplexity
model: sonar-deep-research
capability: latency-throughput
chunk_id: 21-latency-throughput
last_research_round: 3
last_updated: 2026-05-17
verified_by_dealbreaker: false
source_authority: self_research
confidence: low
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [latency, throughput, timeout, slow, async, routing]
related_chunks: [22-rate-limits, 41-known-limitations, 43-ideal-tasks, 44-avoid-when]
related_models: [perplexity/sonar-pro, perplexity/sonar, openai/gpt-5-5]
peer_comparisons:
  - peer: perplexity/sonar-pro
    relation: weaker
    note: "Sonar Pro responds in seconds. SDR takes 20–60+ seconds per query. Not a real-time model."
  - peer: perplexity/sonar
    relation: weaker
    note: "Sonar is the lowest-latency Perplexity offering. SDR is at the opposite end of the spectrum."
---

**Summary** — Sonar Deep Research is a slow, asynchronous research pipeline. Typical end-to-end latency is 20–60+ seconds for moderate complexity; very complex queries can take several minutes. No formal latency benchmark is published by Perplexity. This latency profile makes SDR incompatible with interactive chat, real-time agents, coding autocomplete, or customer support bots. It is designed for "fire and forget" research tasks where users read a report after a delay.

**Specifics:**
- Typical latency range: 20–60 seconds for moderate queries; 1–3+ minutes for complex multi-angle research tasks. [INFERRED — not formally benchmarked; from anecdotal user reports, DRA paper findings, and pipeline architecture reasoning]
- No formal latency benchmark published by Perplexity for SDR. Confidence level is low as a result.
- Sources of latency: web search fan-out (dozens of searches), URL fetching and parsing, internal reasoning steps, synthesis. Each adds sequential latency.
- Timeout considerations: integrators must set generous timeouts (120+ seconds recommended for complex queries). Systems with hard sub-10-second timeouts will routinely abort SDR runs.
- Partial/stalled responses: if upstream search APIs are rate-limited, unresponsive, or behind CAPTCHAs, the pipeline may silently reduce search depth rather than surface an error — degrading answer quality without visible signal.
- Daily throughput ceiling: at 5 RPM, theoretical max is ~7,200 queries/day assuming perfect utilization. Actual throughput lower due to per-query duration consuming capacity. See 22-rate-limits.

**Compared to peers (sharpened by Dealbreaker):**
- vs. perplexity/sonar: Sonar is seconds; SDR is 10–100× slower. Never route latency-sensitive traffic to SDR.
- vs. perplexity/sonar-pro: Sonar Pro responds in low-to-moderate seconds. SDR is reserved for when minutes of latency are acceptable.
- vs. openai/gpt-5-5 with browsing: GPT-5.5 browsing also has elevated latency vs. non-browsing inference; comparable order of magnitude to SDR, though no direct head-to-head latency data available. [INFERRED]

**Known limitations on this axis:**
- No formal provider-published latency figures — confidence low.
- Latency is variable and not controllable per-query.
- Silent quality degradation when upstream sources stall is difficult to detect.

**Sources:**
- R3 self-research §§3.2, 6.3 (round-3-self-research.md)
- DRA benchmark paper (indirectly cited in §3.2)
