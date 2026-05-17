---
provider: perplexity
model: sonar-deep-research
capability: long-context
chunk_id: 16-long-context
last_research_round: 3
last_updated: 2026-05-17
verified_by_dealbreaker: false
source_authority: self_research
confidence: medium
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [context-window, long-context, truncation, 128k, output-cap]
related_chunks: [26-context-window, 41-known-limitations, 43-ideal-tasks, 20-pricing]
related_models: [perplexity/sonar-pro, openai/gpt-5-5, anthropic/claude-opus-4-7]
peer_comparisons:
  - peer: perplexity/sonar-pro
    relation: weaker
    note: "Sonar Pro has ~200k context window vs. SDR's 128k. For pure document Q&A without web search, Sonar Pro is the better, cheaper choice."
  - peer: anthropic/claude-opus-4-7
    relation: weaker
    note: "Claude Opus 4.7 has a 200k context window and is tuned for long-document forensic review."
---

**Summary** — Sonar Deep Research has a documented 128,000-token context window — smaller than Sonar Pro's ~200k. Within this window the pipeline must juggle user prompt, internal reasoning, and retrieved citation content simultaneously. Community reports describe silent truncation of outputs around 2,000–3,000 tokens, flagged with `finish_reason: stop` rather than an explicit error. The model is best treated as a "retrieve and synthesize" engine, not a "digest this entire document" engine; for large monolithic text ingestion, Sonar Pro or a high-context non-research model is more appropriate.

**Specifics:**
- Context window: 128,000 tokens (documented by Perplexity). [INFERRED from Perplexity API docs / aggregator listings]
- Sonar Pro context window: ~200k tokens. SDR is smaller despite higher cost.
- Internal context competition: prompt + planning tokens + citation text + reasoning + output all consume from the 128k budget. Long queries with aggressive search can consume most of the window in retrieval context.
- Silent truncation: community-documented ~2,000–3,000 token output cut-offs with `finish_reason: stop` and no error indicator. Mitigation: heuristic checks on abrupt sentence endings, verify expected sections present. [INFERRED from community reports]
- Output cap: no documented hard cap per Perplexity; practical soft limits from orchestrator heuristics. Outputs in the low thousands of tokens are common for complex runs.
- Long multi-turn drift: orchestrator's summarization of earlier context segments can drop detail from early conversation turns; important constraints should be restated per-call.

**Compared to peers (sharpened by Dealbreaker):**
- vs. perplexity/sonar-pro: Sonar Pro's ~200k window + lower cost makes it better for pure document Q&A on user-supplied content.
- vs. anthropic/claude-opus-4-7: Claude Opus 4.7 (200k window) tuned for long-document review without the search overhead.
- vs. openai/gpt-5-5: GPT-5.5 context window [INFERRED — would need verification]; SDR's window is consumed partly by its own retrieval infrastructure.

**Known limitations on this axis:**
- Silent truncation without error signal is the most dangerous failure mode — integrators must implement detection heuristics.
- Very long monolithic prompts (full books, entire codebases) compete with retrieval budget; forced aggressive summarization results.
- Multi-turn research projects lose early constraint fidelity.

**Sources:**
- R3 self-research §§2.7, 3.7 (round-3-self-research.md)
- Community truncation reports (cited in §2.7: "2230 tokens with finish_reason stop")
