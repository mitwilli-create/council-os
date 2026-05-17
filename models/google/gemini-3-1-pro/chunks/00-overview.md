---
provider: google
model: gemini-3-1-pro
capability: overview
chunk_id: 00-overview
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 4
egoism_strikes_at_convergence: 1
tags: [identity, positioning, release, api-id, family]
related_chunks:
  - 20-pricing
  - 40-unique-strengths
  - 41-known-limitations
related_models:
  - google/gemini-3-flash
  - google/gemini-3-1-flash-lite
  - anthropic/claude-opus-4-7
peer_comparisons:
  - peer: anthropic/claude-opus-4-7
    relation: weaker
    note: "Trails on SWE-Bench Pro (54.2% vs 64.3%), MCP-Atlas (73.9% vs 77.3%), HLE (44.4% vs 46.9%), and GDPval-AA Elo (1317 vs 1633). Leads on ARC-AGI-2 (77.1%) and GPQA Diamond (94.3%)."
  - peer: google/gemini-3-flash
    relation: stronger
    note: "Higher reasoning ceiling; defaults to high thinking; does not support minimal thinking tier."
  - peer: google/gemini-3-1-flash-lite
    relation: stronger
    note: "8× more expensive but significantly higher reasoning capability; minimal thinking tier not available."
---

**Summary** — Gemini 3.1 Pro is Google DeepMind's top general-purpose model in the Gemini 3 series, released February 19, 2026. It targets deep reasoning, long-context retrieval, and multi-step tool orchestration. It occupies the premium tier in the Gemini 3 family and is the only sibling that defaults to `high` thinking and does not support `minimal` thinking mode at all.

**Specifics:**
- Official API model ID: `gemini-3.1-pro-preview`. The `-preview` suffix signals a forthcoming stable GA version. `[INFERRED]` (Source: profile Section 8)
- Predecessor: Gemini 3 Pro, officially shut down March 9, 2026 — rapid succession cycle (< 3 weeks between deprecation and new release). (Source: profile Section 8)
- Positioning: Google positions this model strictly for heavy abstract reasoning, long-context ingestion, and multi-step tool orchestration — not as a general-purpose chat model. Roughly 80% of standard tasks should route to cheaper Gemini siblings. (Source: profile Section 5)
- Multimodal by default: natively handles text, image, audio (up to 8.4 hours), and video (up to 1 hour) within a 1M token context window. (Source: profile Section 2)
- Integrations: Vertex AI, Google AI Studio, Google Antigravity (first-party agentic IDE), native Google Search, native Google Maps. (Source: profile Section 4)

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-opus-4-7: weaker on software engineering (SWE-Bench Pro: 54.2% vs 64.3%), agentic orchestration (MCP-Atlas: 73.9% vs 77.3%), general intelligence (HLE: 44.4% vs 46.9%), and enterprise task work (GDPval-AA Elo: 1317 vs 1633). Leads narrowly on abstract reasoning (ARC-AGI-2: 77.1%) and scientific knowledge (GPQA Diamond: 94.3% vs GPT-5.4's 92.0%). (Source: profile Section 5, Dealbreaker R2 spot checks)
- vs. google/gemini-3-flash: stronger reasoning ceiling; this model is the only Gemini 3 sibling with `high` thinking as default and no `minimal` thinking support. (Source: profile Section 5 Sibling Crossover Map)
- vs. google/gemini-3-1-flash-lite: 8× more expensive at standard context lengths ($2/$12 vs $0.25/$1.50 per 1M tokens); routes here only when Flash-Lite's minimal logic is insufficient. (Source: profile Section 5)

**Known limitations on this axis:**
- The `-preview` model ID string will likely require a routing string update when the stable GA version ships. `[INFERRED]` (Source: profile Section 8)
- 0→3.1 generation cycle compressed Gemini 3 Pro's production window to under 3 weeks — high deprecation velocity signals further rapid iteration ahead. (Source: profile Section 8)

**Sources:**
- [Gemini 3.1 Pro release notes](https://deepmind.google)
- [Artificial Analysis benchmarks (March 2026)](https://artificialanalysis.ai)
- [Scale Labs SWE-Bench leaderboard](https://scale.com/leaderboard)
