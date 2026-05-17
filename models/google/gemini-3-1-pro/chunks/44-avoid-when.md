---
provider: google
model: gemini-3-1-pro
capability: avoid-when
chunk_id: 44-avoid-when
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 4
egoism_strikes_at_convergence: 1
tags: [routing, avoid-when, anti-patterns, software-engineering, low-latency, os-control]
related_chunks:
  - 43-ideal-tasks
  - 41-known-limitations
  - 21-latency-throughput
  - 15-code-generation
related_models:
  - anthropic/claude-opus-4-7
  - google/gemini-3-flash
  - anthropic/claude-3-5-haiku
peer_comparisons:
  - peer: anthropic/claude-opus-4-7
    relation: weaker
    note: "For autonomous software engineering and enterprise orchestration, Opus 4.7 is the correct route."
  - peer: google/gemini-3-flash
    relation: weaker
    note: "For low-latency conversational agents, Flash is the correct route within the Gemini family."
  - peer: anthropic/claude-3-5-haiku
    relation: weaker
    note: "For high-speed low-latency inference, Haiku is recommended."
---

**Summary** — Five task types should not route to Gemini 3.1 Pro: high-speed conversational agents requiring instantaneous first-token response, fully autonomous software engineering and repository-wide code refactoring, specialized enterprise and legal task completion, environments requiring deep OS-level desktop manipulation, and applications that depend on low-temperature deterministic inference. Each has a named preferred alternative.

**Specifics:**
1. High-speed conversational agents requiring near-instantaneous TTFT: TTFT of 28.8–33.8s (peaking 30–40s) is incompatible with real-time chat. Route to Gemini 3 Flash or Claude 3.5 Haiku. (Source: profile Section 7)
2. Fully autonomous software engineering and repository-wide code refactoring: SWE-Bench Pro 54.2% trails Claude Opus 4.7's 64.3% frontier ceiling by 10.1 points. Route to Claude Opus 4.7. (Source: profile Section 7, Scale Labs leaderboard)
3. Specialized high-level enterprise and legal task completion: GDPval-AA Elo 1317 vs Claude Sonnet 4.6's 1633. Route to Claude Sonnet 4.6. (Source: profile Section 7, Artificial Analysis)
4. Environments requiring deep OS-level desktop manipulation: Computer Use is browser-first on this model. OS-level desktop control is limited. Route to specialized agents or Claude Opus 4.7. (Source: profile Section 7; Dealbreaker R2 recurring-strike correction: "browser-first" not "heavily optimized for browsers")
5. Applications requiring low-temperature deterministic output: adjusting temperature away from `1.0` triggers an official Google warning about looping behavior. Deterministic workflows should avoid this model. Route to a model without this temperature constraint. (Source: profile Section 7, _official-gemini-3-api.md line 180)

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-opus-4-7: Opus 4.7 is the correct route for software engineering and high-accuracy agentic orchestration. (Source: profile Section 5 and 7)
- vs. google/gemini-3-flash: Flash handles the conversational latency use case within the Gemini family at 4× lower cost. (Source: profile Section 5 Sibling Crossover Map)
- vs. anthropic/claude-3-5-haiku: Haiku handles low-latency, high-volume inference. (Source: profile Section 7)
- vs. anthropic/claude-sonnet-4-6: Sonnet 4.6 handles enterprise and legal task completion with substantially higher Elo. (Source: profile Section 7)

**Known limitations on this axis:**
- The temperature looping warning is unusual at the frontier — most models support `temperature=0.0` without instability. This is a documented Google-specific operational constraint. (Source: _official-gemini-3-api.md line 180)
- "Browser-first" is the correct characterization of Computer Use scope — not "heavily optimized for browsers." The Dealbreaker corrected this phrasing. (Source: Dealbreaker R2 recurring-strike id=1)

**Sources:**
- [Profile Section 7 — Avoid When tasks](../research-rounds/round-2-self-research.md)
- [_official-gemini-3-api.md line 180](../../../api-guides/google/_official-gemini-3-api.md)
- [Scale Labs SWE-Bench Pro](https://scale.com/leaderboard)
