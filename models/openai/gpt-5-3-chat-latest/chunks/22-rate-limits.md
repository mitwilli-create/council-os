---
provider: openai
model: gpt-5-3-chat-latest
capability: rate-limits
chunk_id: 22-rate-limits
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: self_research
confidence: low
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [rate-limits, account-dependent, unknown]
related_chunks: [21-latency-throughput, 24-batch-api]
related_models: []
peer_comparisons: []
---

**Summary** — Rate limits for GPT-5.3 Chat (RPM, TPM, concurrent requests) are NOT model-specific in public documentation — they vary by account plan and are not published per-model. Callers should check their OpenAI account usage dashboard for applicable limits.

**Specifics:**
- RPM (requests per minute): account/plan-dependent. [UNKNOWN — not model-specific in public docs]
- TPM (tokens per minute): account/plan-dependent. [UNKNOWN]
- Concurrent requests: account/plan-dependent. [UNKNOWN]
- Source: OpenAI does not publish per-model rate limits publicly. (Round-2 self-research line 71)

**Compared to peers (sharpened by Dealbreaker):**
- Not applicable — rate limits are account-tier, not model-tier for this provider.

**Known limitations on this axis:**
- No public per-model data; must check OpenAI account dashboard for actual limits. [UNKNOWN]

**Sources:**
- Round-2 self-research line 71
- [OpenAI API docs](https://developers.openai.com/api/docs)
