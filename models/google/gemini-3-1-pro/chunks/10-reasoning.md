---
provider: google
model: gemini-3-1-pro
capability: reasoning
chunk_id: 10-reasoning
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 4
egoism_strikes_at_convergence: 1
tags: [reasoning, thinking, chain-of-thought, thinking-level, arc-agi]
related_chunks:
  - 16-long-context
  - 21-latency-throughput
  - 40-unique-strengths
  - 41-known-limitations
related_models:
  - anthropic/claude-opus-4-7
  - openai/gpt-5-4
peer_comparisons:
  - peer: anthropic/claude-opus-4-7
    relation: weaker
    note: "GDPval-AA Elo: 1317 vs 1633 (316-point gap). HLE: 44.4% vs 46.9%. Stronger on ARC-AGI-2 (77.1%) and GPQA Diamond (94.3%)."
  - peer: openai/gpt-5-4
    relation: stronger
    note: "GPQA Diamond: 94.3% vs GPT-5.4's 92.0%."
  - peer: openai/gpt-5-5
    relation: different-approach
    note: "ARC-AGI-2: Gemini 3.1 Pro at 77.1%; GPT-5.5 score UNKNOWN."
---

**Summary** — Gemini 3.1 Pro uses a configurable multi-tier thinking system with levels `low`, `medium`, and `high`. Higher thinking levels generate parallel reasoning chains before producing final output. It is the only Gemini 3 sibling that defaults to `high` thinking and does not support the `minimal` tier — meaning every call incurs extended reasoning overhead by design. On abstract and scientific reasoning benchmarks it leads available peers; on broad enterprise task completion it trails Anthropic's flagship by a substantial margin.

**Specifics:**
- Thinking levels: `low`, `medium`, `high`. The model defaults to `high` and does not support `minimal`. Setting `thinkingLevel` and `thinkingBudget` simultaneously throws a mutual-exclusion 400 error. (Source: profile Section 6, _official-gemini-3-api.md lines 172, 178)
- ARC-AGI-2: 77.1% — highest verified score among currently available flagship models. GPT-5.5 score is `[UNKNOWN]`. (Source: profile Section 5, Dealbreaker R2 spot check)
- GPQA Diamond: 94.3% vs GPT-5.4's 92.0%. (Source: profile Section 5)
- HLE (Humanity's Last Exam): 44.4% — trails Claude Opus 4.7's 46.9%. (Source: profile Section 5, Opus 4.7 R2 line 226)
- GDPval-AA Elo: 1317 — trails Claude Sonnet 4.6's 1633 Elo by 316 points on broad enterprise task completion. (Source: Artificial Analysis, Spectrum AI Lab)
- Example task: abstract spatial pattern recognition; multi-step conceptual linkage across scientific domains. (Source: profile Section 2)
- Struggles with extreme mathematical theorem proving without an external Python sandbox. (Source: profile Section 6)

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-opus-4-7: weaker on general enterprise task completion (316-point Elo gap on GDPval-AA); stronger on abstract reasoning (ARC-AGI-2 77.1% vs Opus's unstated score) and scientific knowledge (GPQA Diamond 94.3% vs GPT-5.4's 92.0%). (Source: profile Section 5)
- vs. openai/gpt-5-4: stronger on scientific knowledge (GPQA Diamond 94.3% vs 92.0%). (Source: profile Section 5)
- vs. openai/gpt-5-5: ARC-AGI-2 comparison inconclusive — GPT-5.5 score not publicly verified. (Source: Dealbreaker R2 verdict)

**Known limitations on this axis:**
- `thinkingLevel` and `thinkingBudget` are mutually exclusive parameters — setting both triggers a 400 error. (Source: _official-gemini-3-api.md line 172)
- High TTFT (28.8s–33.8s) is a direct consequence of parallel reasoning chain generation — problematic for latency-sensitive applications. (Source: Artificial Analysis, March 2026)
- Cannot disable thinking: `minimal` tier is not available on this model, making it unsuitable for fast conversational inference. (Source: profile Section 5)
- Mathematical theorem proving degrades without external tool support. (Source: profile Section 6)

**Sources:**
- [Artificial Analysis benchmarks (March 2026)](https://artificialanalysis.ai)
- [GPQA Diamond / ARC-AGI-2 leaderboards via Spectrum AI Lab](https://spectrum.ai)
- [Google official thinking docs](https://ai.google.dev/docs/gemini_api/thinking)
- [_official-gemini-3-api.md lines 125, 172, 178](../../../api-guides/google/_official-gemini-3-api.md)
