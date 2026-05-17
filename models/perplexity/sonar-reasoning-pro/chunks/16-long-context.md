---
provider: perplexity
model: sonar-reasoning-pro
capability: long-context
chunk_id: 16-long-context
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 2
egoism_strikes_at_convergence: 1
tags: [context-window, 128k, constraint, long-context, sonar-pro-comparison]
related_chunks: [26-context-window, 10-reasoning, 44-avoid-when]
related_models: [perplexity/sonar-pro, anthropic/claude-opus-4-7, openai/gpt-5-5, google/gemini-3-1-pro]
peer_comparisons:
  - peer: perplexity/sonar-pro
    relation: weaker
    note: "Sonar Pro offers 200k context at the same $2/$8 per-1M-token price with no reasoning surcharge. Sonar Reasoning Pro's 128k is smaller and more expensive for same-context tasks."
  - peer: anthropic/claude-opus-4-7
    relation: weaker
    note: "Opus 4.7 offers 200k+ context. For tasks requiring >128k, route to Opus 4.7 or Sonar Pro."
  - peer: google/gemini-3-1-pro
    relation: weaker
    note: "Gemini 3.1 Pro offers up to 1M token context. Sonar Reasoning Pro's 128k is minimal by comparison."
  - peer: openai/gpt-5-5
    relation: weaker
    note: "GPT-5.5 offers 200k+ context. Same routing: 128k on Sonar Reasoning Pro limits large-corpus tasks."
---

**Summary** — Sonar Reasoning Pro's 128k token context is the smallest context window in Perplexity's paid Sonar lineup. Sonar Pro, at the same token price, provides 200k tokens with no reasoning surcharge. All three major frontier competitors (GPT-5.5, Gemini 3.1 Pro, Claude Opus 4.7) offer 200k–1M+ context. Long context is a constraint on Sonar Reasoning Pro, not a strength. On heavy-reasoning calls, `<think>` tokens further consume the 128k budget, reducing effective document capacity.

**Specifics:**
- **128k total context** (input + retrieved material + `<think>` + answer). ([Sonar Reasoning Pro docs](https://docs.perplexity.ai/docs/sonar/models/sonar-reasoning-pro))
- No explicit hard output cap published; in practice, output must fit within the 128k total alongside reasoning tokens.
- `<think>` blocks (12k–23k tokens on hard tasks) consume context from the same 128k budget as input documents.
- For >128k context tasks: route to **Sonar Pro** (200k, same price, no reasoning surcharge) or a 200k+ frontier peer.

**Compared to peers (sharpened by Dealbreaker):**
- vs. perplexity/sonar-pro: Sonar Pro = 200k context, same $2/$8 pricing, no reasoning surcharge. For any task where context >128k or CoT trace is not needed, Sonar Pro strictly dominates.
- vs. anthropic/claude-opus-4-7: Opus 4.7 at 200k+ context and higher reasoning accuracy. Use Opus 4.7 when the corpus exceeds 128k.
- vs. google/gemini-3-1-pro: Gemini 3.1 Pro at up to 1M tokens. No comparison for large-corpus tasks — route to Gemini.
- vs. openai/gpt-5-5: GPT-5.5 at 200k+. Same routing guidance.

**Known limitations on this axis:**
- Attention and retrieval quality degrade as context approaches 128k; `<think>` competes with input for headroom.
- No sliding window, no longer-context variant documented. `[INFERRED]`

**Sources:**
- [Perplexity Sonar Reasoning Pro model docs](https://docs.perplexity.ai/docs/sonar/models/sonar-reasoning-pro)
- Peer context sizes from official provider documentation. `[INFERRED FROM PROVIDER DOCS]`
