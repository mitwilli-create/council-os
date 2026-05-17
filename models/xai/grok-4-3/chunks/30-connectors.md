---
provider: xai
model: grok-4-3
capability: connectors
chunk_id: 30-connectors
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [connectors, x-twitter, x-search, first-party, real-time]
related_chunks:
  - 12-web-grounding
  - 11-tool-use
  - 31-sdks-apis
related_models:
  - anthropic/claude-opus-4-7
  - google/gemini-3-1-pro
peer_comparisons:
  - peer: anthropic/claude-opus-4-7
    relation: stronger
    note: "Anthropic has no native X/Twitter connector; Grok 4.3's X_SEARCH is a unique first-party connector with no Claude equivalent"
  - peer: google/gemini-3-1-pro
    relation: different-approach
    note: "Gemini's first-party connectors are Google Workspace, Search, and YouTube. Grok 4.3's first-party connector is X — different ecosystems, not overlapping"
---

**Summary** — Grok 4.3's defining first-party connector is native X (Twitter) public timeline access via the `X_SEARCH` tool. This is a built-in integration with the xAI / X platform ecosystem, providing real-time posts, conversations, trending topics, and engagement signals. No other current cross-provider model (Claude, GPT-5.5, Gemini) offers an equivalent native X connector. Grok Imagine (image generation) is a related xAI capability in the ecosystem but not a `grok-4.3` base model connector per public docs.

**Specifics:**
- `X_SEARCH` tool: native, first-party, real-time X public timeline access. (Source: xAI announcement https://x.com/xai/status/1925244461875175616)
- Data types accessible: posts, conversations, trending topics, engagement metrics (likes, reposts, views where public).
- No API credential configuration required from the caller — first-party, always-on.
- Grok Imagine (image generation) is a related xAI product, separate from `grok-4.3` base model. (Source: round-2-self-research.md section 6 — referenced in Strike 17 resolution)
- MCP client/server support: undocumented. (Source: round-2-self-research.md section 4)

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-opus-4-7: No Claude-native X connector exists. For X data, Grok 4.3 is the sole cross-provider choice with first-party access.
- vs. google/gemini-3-1-pro: Gemini's first-party connectors cover Google properties (Search, Workspace, YouTube); Grok 4.3 covers X. These target different data ecosystems — selection is source-driven.

**Known limitations on this axis:**
- Private X accounts not accessible (public timeline only).
- Rate limits on `X_SEARCH` tool calls are undocumented.
- MCP integration for third-party tools is unconfirmed.

**Sources:**
- [xAI announcement](https://x.com/xai/status/1925244461875175616)
- round-2-self-research.md section 4 (Integrations)
