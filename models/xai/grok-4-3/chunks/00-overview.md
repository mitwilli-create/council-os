---
provider: xai
model: grok-4-3
capability: overview
chunk_id: 00-overview
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [identity, positioning, xai, grok, cost-optimized]
related_chunks:
  - 20-pricing
  - 40-unique-strengths
  - 12-web-grounding
  - 50-release-history
related_models:
  - xai/grok-4-20-multi-agent
  - xai/grok-4-20-non-reasoning
  - xai/grok-4-20-reasoning
peer_comparisons:
  - peer: xai/grok-4-20-multi-agent
    relation: weaker
    note: "4.20 Multi-Agent supports 2M context and multi-agent loops; 4.3 is 37.5% cheaper on input and 58.3% cheaper on output — explicit cost-vs-capability tradeoff within the xAI family"
  - peer: anthropic/claude-opus-4-7
    relation: different-approach
    note: "Grok 4.3 is cheaper and has native X live data; Opus 4.7 has computer-use and higher refusal-rate documentation"
---

**Summary** — Grok 4.3 is a multimodal large language model built by xAI, positioned as the cost-optimized general model in the Grok 4 family. It released in beta April 17, 2026 and reached full rollout May 6, 2026. Its official API model ID is `grok-4.3`. xAI's differentiation claims are native video input (mp4/mov/webm, up to 5 minutes at 1080p) and real-time X platform data access via the `X_SEARCH` tool — capabilities not present in its immediate predecessor Grok 4.20 at this price tier.

**Specifics:**
- Official API model ID: `grok-4.3`. (Source: xAI developer docs)
- Developer: xAI. Release: beta April 17, 2026; full rollout May 6, 2026. (Source: chatlyai.app, aicerts.ai)
- Predecessor: Grok 4.20, including the 16-agent Heavy/Multi-Agent variant. (Source: round-2-self-research.md section 8)
- Provider positioning: cost-optimized general model with native video input and real-time X platform data access. (Source: xAI announcement https://x.com/xai/status/1925244461875175616)
- 37.5% cheaper on input, 58.3% cheaper on output vs. Grok 4.20 Multi-Agent. (Source: VentureBeat)

**Compared to peers (sharpened by Dealbreaker):**
- vs. xai/grok-4-20-multi-agent: 4.20 Multi-Agent doubles context (2M vs 1M tokens) and runs multi-agent loops natively. 4.3 wins on price; route to 4.20 Multi-Agent for maximal-context agentic tasks.
- vs. anthropic/claude-opus-4-7: Opus 4.7 has documented computer-use and browser control; Grok 4.3 has native X live search. Neither is a clear-cut general winner — routing depends on task (see 43-ideal-tasks).

**Known limitations on this axis:**
- GPQA-diamond benchmark score for Grok 4.3 is not publicly available per BenchLM as of round 2.
- Rate limits are undocumented in public sources.

**Sources:**
- [xAI announcement](https://x.com/xai/status/1925244461875175616)
- [chatlyai.app — Grok 4.3 Beta](https://chatlyai.app/news/xai-grok-4-3-beta-video)
- [VentureBeat — pricing comparison](https://venturebeat.com)
- xAI developer docs
