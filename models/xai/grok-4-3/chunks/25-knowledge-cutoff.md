---
provider: xai
model: grok-4-3
capability: knowledge-cutoff
chunk_id: 25-knowledge-cutoff
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: medium
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [knowledge-cutoff, freshness, training-data, conflict]
related_chunks:
  - 12-web-grounding
  - 00-overview
related_models:
  - anthropic/claude-opus-4-7
peer_comparisons:
  - peer: anthropic/claude-opus-4-7
    relation: different-approach
    note: "Opus 4.7 has a documented knowledge cutoff; Grok 4.3 has a conflicting cutoff claim between official docs (Nov 2024) and secondary sources (Dec 2025) — use Nov 2024 for routing safety"
---

**Summary** — The knowledge cutoff for Grok 4.3 is officially November 2024 per xAI documentation. A secondary source (techdevnotes via X) claims December 2025. This conflict is unresolved as of round 2 and was flagged as an unaddressed omission (Strike A) in the round-2 Dealbreaker verdict. Use November 2024 as the conservative routing assumption until xAI officially confirms otherwise. The `X_SEARCH` live tool mitigates this for post-cutoff queries.

**Specifics:**
- Official xAI docs: November 2024 knowledge cutoff (family-wide). (Source: xAI official docs)
- Secondary source: December 2025. (Source: techdevnotes via X — not corroborated by official docs)
- Conflict unsurfaced in round-2 self-research; caught by Dealbreaker as Strike A.
- Routing recommendation: use November 2024 for planning; use `X_SEARCH` for any query touching events after November 2024.

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-opus-4-7: Opus 4.7 cutoff is documented and not in conflict. Grok 4.3's conflict creates routing ambiguity — prefer Opus 4.7 for tasks where training-data recency is load-bearing and the gap between Nov 2024 and Dec 2025 matters.

**Known limitations on this axis:**
- Unresolved official vs. secondary source conflict. Cannot confirm which is correct without xAI clarification.
- Risk: if Dec 2025 is correct, using Nov 2024 for routing is unnecessarily conservative but safe. If Nov 2024 is correct, using Dec 2025 would over-rely on stale training data.

**Sources:**
- xAI official docs (November 2024)
- techdevnotes via X (December 2025 secondary claim)
- round-2-verdict.yaml Strike A (inline patch)
