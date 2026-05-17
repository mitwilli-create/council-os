---
provider: perplexity
model: sonar-pro
capability: context-window
chunk_id: 26-context-window
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 1
tags: [context-window, 200k, output-cap, token-capacity]
related_chunks: [16-long-context, 20-pricing]
related_models: [perplexity/sonar, anthropic/claude-4-7-opus, openai/gpt-5-5]
peer_comparisons:
  - peer: perplexity/sonar
    relation: stronger
    note: "Sonar Pro: 200k context. Sonar: 127k context. Sonar Pro is the correct routing when input exceeds 127k tokens."
  - peer: anthropic/claude-4-7-opus
    relation: comparable
    note: "Claude 4.7 Opus also supports large context windows. Specific comparison of recall quality at length is not benchmarked between them."
---

**Summary** — Sonar Pro has a 200k token context window, confirmed by Perplexity docs, OpenRouter, and Artificial Analysis. This is 73k tokens larger than base Sonar's 127k, making it the correct within-family routing when prompts exceed that threshold. Output cap is not explicitly documented; it is bounded by provider limits within the overall 200k window.

**Specifics:**
- Context window: **200k tokens** (Perplexity Sonar docs, OpenRouter, Artificial Analysis). This is a hard, verified number — not hedged.
- Base Sonar context: 127k tokens. The 200k vs 127k delta is the primary quantitative differentiator within the Sonar family.
- Output cap: not explicitly fixed in Perplexity API docs; bounded by provider limits within the 200k window. Typical responses are bounded to several thousand tokens. [INFERRED — R2 Strike A]
- Knowledge cutoff for parametric knowledge: not publicly disclosed by Perplexity. Practical knowledge is rolling via web search. [UNKNOWN — base training cutoff not disclosed]

**Compared to peers (sharpened by Dealbreaker):**
- vs. perplexity/sonar: Route to Sonar Pro when input tokens exceed 127k. Below that threshold, Sonar is ~3.5x cheaper on tokens.
- vs. anthropic/claude-4-7-opus: Both support large context. Claude 4.7 Opus is preferred for offline long-context reasoning-heavy tasks; Sonar Pro adds web retrieval on top.

**Known limitations on this axis:**
- Output cap is inferred, not specified; production callers should test for their workload.
- Long-context recall quality is not benchmarked for Sonar Pro. [UNKNOWN]

**Sources:**
- [Perplexity Sonar docs](https://docs.perplexity.ai/docs/sonar/models)
- [OpenRouter — perplexity/sonar-pro](https://openrouter.ai/perplexity/sonar-pro)
- [Artificial Analysis model benchmarks](https://artificialanalysis.ai)
