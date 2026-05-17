---
provider: openai
model: gpt-5-4
capability: sdks-apis
chunk_id: 31-sdks-apis
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: pending
confidence: low
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [sdk, api, responses-api, chat-completions]
related_chunks: [30-connectors, 32-mcp-support]
related_models: []
peer_comparisons: []
---

**Summary** — Not documented for this version with specificity. OpenAI officially maintains SDKs but the supplied materials did not enumerate language lists or confirm whether `gpt-5.4` uses the Chat Completions API, the newer Responses API, or both. The model page existence at `developers.openai.com/api/docs/models/gpt-5.4` confirms API availability. Test before relying on.

**Specifics:**
- Official SDK languages: **[UNKNOWN — would need SDK docs]**.
- API surface (Chat Completions vs Responses vs other): **[UNKNOWN — model page exists, surface not specified in supplied sources]**.
- Model page confirmed: [https://developers.openai.com/api/docs/models/gpt-5.4](https://developers.openai.com/api/docs/models/gpt-5.4).

**Compared to peers (sharpened by Dealbreaker):**
- No comparisons available.

**Known limitations on this axis:**
- Confirm API surface (Chat Completions vs Responses API) before building integrations, as OpenAI has been migrating features across surfaces.

**Sources:**
- [OpenAI model page](https://developers.openai.com/api/docs/models/gpt-5.4)
