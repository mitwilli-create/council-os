---
provider: anthropic
model: claude-sonnet-4-6
capability: overview
chunk_id: 00-overview
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 5
egoism_strikes_at_convergence: 5
tags: [identity, positioning, family, api-id, release]
related_chunks: [20-pricing, 26-context-window, 40-unique-strengths, 44-avoid-when]
related_models: [anthropic/claude-opus-4-7, anthropic/claude-haiku-4-5, anthropic/claude-sonnet-4-5]
peer_comparisons:
  - peer: anthropic/claude-opus-4-7
    relation: weaker
    note: "Opus 4.7 is the Anthropic flagship; Sonnet 4.6 is mid-tier — 40% cheaper on both input and output, slower, lower ceiling on most benchmarks."
  - peer: anthropic/claude-haiku-4-5
    relation: stronger
    note: "Sonnet 4.6 has higher quality ceiling across reasoning, coding, and long-context; Haiku 4.5 is 3x cheaper and fastest-class."
---

**Summary** — Claude Sonnet 4.6 is Anthropic's mid-tier model in the Claude 4.x family, released February 17, 2026. Anthropic officially positions it as "the best combination of speed and intelligence." It sits between Opus 4.7 (flagship, $5/$25 per MTok) and Haiku 4.5 (entry, $1/$5 per MTok) at $3/$15 per MTok — 40% cheaper than Opus 4.7 on both input and output. Its two headline upgrades over predecessor Sonnet 4.5 are a 1M token context window (up from 200k) and adaptive thinking layered on top of the retained Extended thinking surface.

**Specifics:**
- Official API model ID: `claude-sonnet-4-6` (dateless pinned snapshot; no dated suffix needed). Bedrock: `anthropic.claude-sonnet-4-6`. Vertex AI: `claude-sonnet-4-6`. ([Official models overview](https://platform.claude.com/docs/en/about-claude/models/overview))
- Released February 17, 2026. Predecessor: `claude-sonnet-4-5-20250929`.
- Official latency class: "Fast" (vs. Opus 4.7 "Moderate", Haiku 4.5 "Fastest").
- Pricing: $3.00 input / $15.00 output per MTok. Cache read: $0.30/MTok. Batch: $1.50/$7.50 per MTok.
- Two major upgrades from Sonnet 4.5: (1) 1M token context window vs. 200k — the larger change for most routing decisions; (2) adaptive thinking added on top of retained Extended thinking.

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-opus-4-7: Sonnet 4.6 is 40% cheaper on both input/output and faster, but loses by 8 points on SWE-bench Verified (79.6% vs. 87.6%), 4 points on GPQA Diamond at max effort (89.9% vs. 94.2%), and 16 points on MCP-Atlas tool orchestration (61.3% vs. 77.3%). Opus 4.7 also supports synchronous output up to 128k tokens vs. Sonnet 4.6's 64k.
- vs. anthropic/claude-haiku-4-5: Sonnet 4.6 is 3x more expensive but provides a 1M token window (vs. Haiku 4.5's 200k cap), higher coding ceiling (79.6% vs. 73.3% SWE-bench Verified), and adaptive thinking (Haiku 4.5 has Extended thinking but not adaptive).

**Known limitations on this axis:**
- Not the most capable Anthropic model; graduate-level science and top-tier agentic coding route to Opus 4.7.
- Not the cheapest or fastest; high-volume triage tasks under 200k tokens route to Haiku 4.5.
- Reliable knowledge cutoff August 2025 — 5 months behind Opus 4.7's January 2026 cutoff.

**Sources:**
- [Anthropic Official Models Overview](https://platform.claude.com/docs/en/about-claude/models/overview)
- [Anthropic Claude Sonnet 4.6 Announcement](https://www.anthropic.com/news/claude-sonnet-4-6)
- [artificialanalysis.ai — Sonnet 4.6 latency/throughput](https://artificialanalysis.ai/models/claude-sonnet-4-6-adaptive)
