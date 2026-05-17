---
provider: openai
model: gpt-5-5
capability: context-window
chunk_id: 26-context-window
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: medium
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [context-window, output-cap, long-context, token-capacity]
related_chunks: [16-long-context, 20-pricing, 21-latency-throughput]
related_models:
  - anthropic/claude-opus-4-7
  - google/gemini-3-1-pro
peer_comparisons:
  - peer: anthropic/claude-opus-4-7
    relation: comparable
    note: "Both are large-context frontier models; comparative context window size not benchmarked in research materials"
---

**Summary** — GPT-5.5 has a context window of 1,050,000 tokens and a max output cap of 128,000 tokens, per the Dealbreaker's verified summary. These figures are not independently confirmed against a live OpenAI model card in this research round.

**Specifics:**
- **Context window:** **1,050,000 tokens** (Dealbreaker pricing/context summary).
- **Max output cap:** **128,000 tokens** (Dealbreaker pricing/context summary).
- **Input/output split:** the 1.05M figure is the total context capacity; max output is separately capped at 128k.

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-opus-4-7: Both are large-context frontier models. Comparative sizes not benchmarked in Round 2 materials; check current model cards for exact figures.

**Known limitations on this axis:**
- Figures are from Dealbreaker summary, not directly confirmed against a live OpenAI pricing or model spec page in this round.
- Very large output caps increase latency and cost; use only when needed.

**Sources:**
- Dealbreaker Round 2 pricing/context summary
- [OpenAI platform docs](https://platform.openai.com/docs)
