---
provider: google
model: gemini-3-flash
capability: context-window
chunk_id: 26-context-window
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [context-window, 1m-tokens, output-cap, max-output-tokens, long-context]
related_chunks:
  - 16-long-context
  - 20-pricing
  - 21-latency-throughput
related_models:
  - google/gemini-3-1-pro
  - anthropic/claude-opus-4-7
peer_comparisons:
  - peer: anthropic/claude-opus-4-7
    relation: stronger
    note: "Flash supports 1M token input vs Opus 4.7's 200K — 5x larger context for whole-archive or whole-codebase ingestion tasks"
  - peer: google/gemini-3-1-pro
    relation: comparable
    note: "Both support 1M token input context; Flash is significantly cheaper per token at this context length"
---

**Summary** — Gemini 3 Flash has a 1,048,576-token (1M) input context window and a 65,536-token output cap. The output cap is a critical operational detail: SDK defaults often set `maxOutputTokens` to 8,192, which silently truncates long responses. Callers must explicitly set `maxOutputTokens: 65536` to access the full output range. The 1M input window enables whole-document and whole-codebase ingestion without a retrieval layer.

**Specifics:**
- Input context: 1,048,576 tokens (1M). (Source: `_official-gemini-3-api.md` line 78)
- Output cap: 65,536 tokens. (Source: `_official-gemini-3-api.md` line 78)
- SDK default `maxOutputTokens` is often 8,192 — callers MUST override to 65,536 for long outputs. (Source: round-2-self-research.md section 3)
- Knowledge cutoff: January 2025. (Source: `_official-gemini-3-api.md`)

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-opus-4-7: Flash's 1M input is 5x larger than Opus 4.7's 200K limit. For tasks requiring ingestion of entire codebases, document archives, or long video transcripts, Flash is the only viable option of the two.
- vs. google/gemini-3-1-pro: Both share the 1M context window at the same input limit. Flash is significantly cheaper per token at long contexts (6–8x cheaper above 200k tokens).

**Known limitations on this axis:**
- TTFT degradation at 1M tokens is significant — long-context use trades speed for capacity.
- Output is hard-capped at 65,536 tokens regardless of input length; callers cannot generate more than that per request.
- SDK default truncation at 8,192 output tokens is a silent failure mode that requires explicit override.

**Sources:**
- `_official-gemini-3-api.md` line 78
- round-2-self-research.md section 3
