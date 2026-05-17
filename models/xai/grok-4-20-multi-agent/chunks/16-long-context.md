---
provider: xai
model: grok-4.20-multi-agent
capability: long-context
chunk_id: 16-long-context
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: medium
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [long-context, 2m-tokens, recall, multi-agent-context, synthesis]
related_chunks: [11-tool-use, 21-latency-throughput, 25-knowledge-cutoff, 26-context-window]
related_models: [xai/grok-4-3, anthropic/claude-opus-4-7, google/gemini-3-1-pro]
peer_comparisons:
  - peer: google/gemini-3-1-pro
    relation: comparable
    note: "Gemini 3.1 Pro also offers very large context windows. Comparative recall quality at 2M tokens is [UNKNOWN] for both."
  - peer: anthropic/claude-opus-4-7
    relation: stronger
    note: "Claude Opus 4.7 context window is smaller than 2M; Grok 4.20 MA has nominally larger context capacity."
---

**Summary** — Grok 4.20 Multi-Agent has a 2M token context window with up to 2M tokens output in a single response. Recall quality at full length is [UNKNOWN]. Synthesis inconsistencies rise when many agents operate over long contexts. Tool-off queries are limited by the November 2024 knowledge cutoff, making long-context tool-off tasks ~18 months stale by mid-2026.

**Specifics:**
- Context window: 2M tokens. Corroborated by multiple sources (Oracle, llm-stats mirrors).
- Output cap: up to 2M tokens in a single response (per Puter mirror). `max_tokens` parameter not supported — output length governed differently.
- Recall quality at full 2M length: [UNKNOWN — no published ablation for this variant].
- Synthesis inconsistency increases when multiple agents operate over long contexts — architectural tradeoff.
- Tool-off long-context tasks: base knowledge limited to November 2024; use `web_search` or `x_search` for fresh information.
- Concrete example: book-length technical corpus analyzed by parallel agents, each covering different sections, then synthesized by leader.

**Compared to peers (sharpened by Dealbreaker):**
- vs. google/gemini-3-1-pro: Both offer very large context windows. Comparative long-context recall quality is [UNKNOWN].
- vs. anthropic/claude-opus-4-7: Claude Opus 4.7 has a smaller context window. Grok 4.20 MA nominally wins on capacity; whether recall quality at length is better is [UNKNOWN].
- vs. xai/grok-4-3: Grok 4.3 context window size vs. 2M for Multi-Agent is [UNKNOWN — would need to verify from Grok 4.3 profile].

**Known limitations on this axis:**
- Recall quality at 2M tokens: [UNKNOWN].
- Synthesis inconsistency at long-context + many agents is a confirmed architectural tradeoff.
- `max_tokens` not supported — output length control for very long outputs behaves differently than standard models.
- Knowledge cutoff degrades tool-off long-context tasks significantly.

**Sources:**
- [xAI Multi-Agent docs](https://docs.x.ai/developers/model-capabilities/text/multi-agent)
- Oracle and llm-stats mirrors (corroborating 2M context)
- Puter mirror (corroborating 2M output cap)
