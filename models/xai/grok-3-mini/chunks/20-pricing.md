---
provider: xai
model: grok-3-mini
capability: pricing
chunk_id: 20-pricing
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [pricing, cost, tokens, budget]
related_chunks: [00-overview, 24-batch-api, 23-prompt-caching, 43-ideal-tasks]
related_models: [xai/grok-4-3, xai/grok-4-20-multi-agent]
peer_comparisons:
  - peer: xai/grok-4-3
    relation: stronger
    note: "grok-3-mini is 76% cheaper on input ($0.30 vs. $1.25/MTok) and 80% cheaper on output ($0.50 vs. $2.50/MTok). This is grok-3-mini's primary value proposition."
  - peer: xai/grok-4-20-multi-agent
    relation: stronger
    note: "grok-3-mini is 85% cheaper on input ($0.30 vs. $2.00/MTok) and 92% cheaper on output ($0.50 vs. $6.00/MTok)."
---

**Summary** — Grok 3 Mini is priced at $0.30/MTok input and $0.50/MTok output, making it the cheapest surviving Grok model after the May 15, 2026 retirement wave. It is 76% cheaper on input than grok-4.3 and 85% cheaper on input than grok-4.20-multi-agent. No cached-read, cached-write, or batch pricing has been published as of 2026-05-17.

**Specifics:**
- **Input price:** $0.30 per 1M tokens. Source: xAI pricing page; confirmed by pricepertoken.com.
- **Output price:** $0.50 per 1M tokens.
- **Cached-read pricing:** not documented as of 2026-05-17.
- **Batch API pricing:** not documented as of 2026-05-17.
- **Comparison table:**

| Model | Input $/MTok | Output $/MTok | grok-3-mini savings (input) |
|---|---|---|---|
| grok-3-mini | **$0.30** | **$0.50** | — |
| grok-4.3 | $1.25 | $2.50 | 76% cheaper |
| grok-4.20-multi-agent | $2.00 | $6.00 | 85% cheaper |

**Compared to peers (sharpened by Dealbreaker):**
- vs. xai/grok-4-3: 76% input savings, 80% output savings. This gap is grok-3-mini's primary value proposition for cost-sensitive pipelines.
- vs. xai/grok-4-20-multi-agent: 85% input savings, 92% output savings. The cost difference more than compensates for the missing parallel-agent and x_search features in most single-task workloads.

**Known limitations on this axis:**
- No prompt caching or batch discount published — cost per high-volume inference run is not reducible via standard caching paths.
- Pricing subject to change; verify at [x.ai/api](https://x.ai/api) before budgeting for production use.

**Sources:**
- [xAI pricing](https://x.ai/api)
- [pricepertoken.com](https://pricepertoken.com)
- [mem0.ai trackers](https://mem0.ai)
