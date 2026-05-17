---
provider: openai
model: gpt-5-3-chat-latest
capability: refusal-patterns
chunk_id: 42-refusal-patterns
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: self_research
confidence: low
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [refusal, safety, over-refusal, inferred]
related_chunks: [41-known-limitations, 43-ideal-tasks]
related_models: [anthropic/claude-sonnet-4-6]
peer_comparisons:
  - peer: anthropic/claude-sonnet-4-6
    relation: comparable
    note: "Both are conservative on CSAM, explicit violence, extremism, medical/legal advice; exact threshold differences are untested. [INFERRED]"
---

**Summary** — GPT-5.3 Chat follows OpenAI's standard safety policies: conservative on CSAM, explicit violence, extremism, personal data exfiltration, and unsolicited medical/legal advice. May over-refuse borderline cases without first asking clarifying questions. Refusal patterns for this specific model snapshot are inferred from OpenAI safety policy documentation — not empirically tested. [INFERRED]

**Specifics:**
- Conservative categories: CSAM, explicit violence, extremism, personal data, medical/legal advice. [INFERRED from OpenAI safety policies]
- Over-refusal on borderline requests without clarifying questions: possible. [INFERRED]
- Model-specific refusal calibration vs. GPT-5.5 or other snapshots: not published. [UNKNOWN]

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-sonnet-4-6: Comparable conservatism on hard categories; Claude may over-refuse on edge cases at slightly different thresholds — untested. [INFERRED]

**Known limitations on this axis:**
- No empirically tested refusal-rate data for this model snapshot. All claims are inferred from policy docs.
- Verdict explicitly flags: profile NOT authoritative for refusal_patterns or safety_behavioral_specifics.

**Sources:**
- Round-2 self-research lines 112–113
- Round-2 verdict `profile_NOT_authoritative_for: refusal_patterns`
