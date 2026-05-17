---
provider: xai
model: grok-4-3
capability: code-generation
chunk_id: 15-code-generation
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: self_research
confidence: low
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [code-generation, coding, swe-bench, repair, sandbox]
related_chunks:
  - 10-reasoning
  - 17-agentic-computer-use
related_models:
  - anthropic/claude-opus-4-7
  - openai/gpt-5-5
peer_comparisons:
  - peer: anthropic/claude-opus-4-7
    relation: weaker
    note: "Opus 4.7 has a verified SWE-bench score (87.6%); Grok 4.3 has no public SWE-bench or equivalent score — cannot confirm gap direction or magnitude"
  - peer: openai/gpt-5-5
    relation: different-approach
    note: "GPT-5.5 coding benchmark scores are public; Grok 4.3 equivalent is unverified — routing decision on coding quality requires empirical testing"
---

**Summary** — Grok 4.3 shows strong performance on coding benchmarks per BenchLM summary referenced in round-2 research, but no specific SWE-bench score (or equivalent) is publicly available for `grok-4.3`. Execution sandbox is not exposed via the API. The model is capable on SWE-bench-style tasks but cannot be benchmarked against peers on a verified numeric basis as of round 2.

**Specifics:**
- Strong coding benchmark performance claimed. (Source: BenchLM summary — qualitative description, no numeric score)
- No public SWE-bench score for `grok-4.3`. ([UNKNOWN — would need a benchmark])
- Execution sandbox not exposed via API; code must be run externally. (Source: round-2-self-research.md section 2)
- Supported languages: not enumerated in public docs — standard broad coverage assumed. ([INFERRED FROM PROVIDER DOCS])

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-opus-4-7: Opus 4.7 SWE-bench verified at 87.6%. Grok 4.3 score unavailable — do not assume parity or gap without a benchmark.
- vs. openai/gpt-5-5: Same situation — GPT-5.5 coding scores are public; Grok 4.3's are not. Prefer empirical side-by-side testing.

**Known limitations on this axis:**
- No execution sandbox in API.
- No verified numeric coding benchmark.
- Language-coverage list is undocumented.

**Sources:**
- [BenchLM summary](https://benchlm.com) — qualitative only
- round-2-self-research.md section 2 (Code generation)
