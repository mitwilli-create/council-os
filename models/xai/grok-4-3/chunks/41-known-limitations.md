---
provider: xai
model: grok-4-3
capability: known-limitations
chunk_id: 41-known-limitations
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: medium
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [limitations, failure-modes, context-degradation, knowledge-cutoff, rate-limits]
related_chunks:
  - 44-avoid-when
  - 25-knowledge-cutoff
  - 22-rate-limits
  - 17-agentic-computer-use
related_models:
  - xai/grok-4-20-multi-agent
  - anthropic/claude-opus-4-7
peer_comparisons:
  - peer: anthropic/claude-opus-4-7
    relation: weaker
    note: "Opus 4.7 has documented refusal patterns (known behavior); Grok 4.3 refusal rates are undocumented — cannot predict refusal behavior reliably"
---

**Summary** — Grok 4.3's key limitations fall into three clusters: (1) unknown operational parameters (rate limits, output cap, cache-write multiplier, refusal rates — all undocumented), (2) context quality at extreme length (recall beyond ~500k tokens unbenchmarked), and (3) the knowledge-cutoff conflict (Nov 2024 official vs. Dec 2025 secondary source, unresolved). No computer-use capability and no multi-agent native loops further constrain agentic routing.

**Specifics:**
- Rate limits: undocumented. ([UNKNOWN — would need official confirmation])
- Output cap: undocumented. ([UNKNOWN])
- Cache-write multiplier: undocumented. ([UNKNOWN])
- Refusal patterns: not published with specific rates. (Source: round-2-self-research.md section 6 — removed Strike 8 claim, now honestly [UNKNOWN])
- Long-context recall quality beyond ~500k tokens: unbenchmarked. (Source: round-2-self-research.md section 6)
- Knowledge cutoff conflict (Nov 2024 official vs. Dec 2025 secondary) — unresolved. (Source: round-2-verdict.yaml Strike A)
- No native browser/OS control. (Source: round-2-self-research.md section 2)
- No multi-agent native orchestration. (Source: round-2-self-research.md section 2)
- Video input capped at 5 minutes. (Source: chatlyai.app)
- GPQA-diamond score unavailable — cannot benchmark reasoning quality cross-model. (Source: BenchLM)

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-opus-4-7: Opus 4.7 documents refusal patterns and has native computer-use. Grok 4.3 lacks both. For safety-critical or computer-use tasks, Opus 4.7 is the more predictable choice.
- vs. xai/grok-4-20-multi-agent: Grok 4.3's 1M context (vs. 2M) and no multi-agent loops are genuine downgrades vs. the sibling for high-complexity agentic tasks.

**Known limitations on this axis:**
- Many limitations are "unknown" rather than "confirmed bad" — absence of documentation is itself the limitation.
- No widespread bug reports found, but absence of bug reports ≠ absence of bugs.

**Sources:**
- round-2-self-research.md section 6 (Known limitations)
- round-2-verdict.yaml Strike A (cutoff conflict)
- [BenchLM](https://benchlm.com) — no GPQA score for Grok 4.3
