---
provider: google
model: gemini-3-flash
capability: long-context
chunk_id: 16-long-context
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [long-context, 1m-tokens, needle-in-haystack, retrieval, context-window]
related_chunks:
  - 26-context-window
  - 13-vision
  - 43-ideal-tasks
related_models:
  - google/gemini-3-1-pro
  - anthropic/claude-opus-4-7
peer_comparisons:
  - peer: google/gemini-3-1-pro
    relation: comparable
    note: "Both support 1M token input; Flash is significantly cheaper for long-context use cases"
---

**Summary** — Gemini 3 Flash supports a 1,048,576-token (1M) input window with near-perfect needle-in-a-haystack recall. This enables RAG-less whole-document or whole-codebase search at a price point far below competing long-context models. Output is capped at 65,536 tokens; callers must explicitly set `maxOutputTokens` as SDKs may default to 8,192.

**Specifics:**
- Input context window: 1,048,576 tokens. (Source: `_official-gemini-3-api.md` line 78)
- Output cap: 65,536 tokens. SDK default is often 8,192; callers must set `maxOutputTokens` explicitly to access the full output range. (Source: `_official-gemini-3-api.md` line 78)
- Near-perfect needle-in-a-haystack recall across the full 1M context. (Source: round-2-self-research.md section 2)
- Multimodal ingestion supported at long context: can summarize a full day of video meetings within the 1M window.

**Compared to peers (sharpened by Dealbreaker):**
- vs. google/gemini-3-1-pro: Both share the 1M token window. Flash's dramatically lower cost (~4–8x) makes it the economically preferred routing target for long-context tasks where Pro-tier accuracy is not required.
- vs. anthropic/claude-opus-4-7: Opus 4.7 has a 200K context window; for tasks requiring whole-codebase or whole-archive ingestion beyond 200K tokens, Flash is the only viable option of the two.

**Known limitations on this axis:**
- TTFT increases significantly as the context window fills — latency at 1M tokens is materially higher than at shorter contexts.
- SDK default `maxOutputTokens` of 8,192 will silently truncate responses if not overridden; callers must set `maxOutputTokens: 65536` explicitly.

**Sources:**
- `_official-gemini-3-api.md` line 78
- round-2-self-research.md section 2 (Long Context)
