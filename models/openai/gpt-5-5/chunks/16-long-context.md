---
provider: openai
model: gpt-5-5
capability: long-context
chunk_id: 16-long-context
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: medium
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [long-context, context-window, output-cap, retrieval, synthesis]
related_chunks: [26-context-window, 15-code-generation, 17-agentic-computer-use]
related_models:
  - anthropic/claude-opus-4-7
  - google/gemini-3-1-pro
peer_comparisons:
  - peer: anthropic/claude-opus-4-7
    relation: comparable
    note: "Both are large-context frontier models; exact comparative context window size vs Claude Opus 4.7 not benchmarked in research materials"
---

**Summary** — GPT-5.5 supports a context window of 1,050,000 tokens with a 128k max output cap, per the Dealbreaker's verified summary. This enables large-scale document synthesis, extended codebase analysis, and long litigation/diligence review tasks without chunking.

**Specifics:**
- **Context window:** **1,050,000 tokens** (Dealbreaker pricing/context summary; cited as verified).
- **Max output cap:** **128k tokens** (Dealbreaker pricing/context summary).
- **Use cases enabled:** 600k-token legal record review, large codebase analysis, multi-document synthesis, diligence room processing.
- **Latency trade-off:** Very long prompts increase latency and cost; large output caps compound this.

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-opus-4-7: Both are large-context frontier models. Exact comparative window sizes are not benchmarked side-by-side in Round 2 materials.

**Known limitations on this axis:**
- Long-context recall still degrades with length; small but important details buried in large irrelevant inputs can be missed.
- Recency and repetition bias remain — recent and repeated instructions tend to dominate isolated earlier facts.
- The 1,050,000 token figure is from the Dealbreaker summary and is not independently verified against a live OpenAI pricing/model page in this research round.

**Sources:**
- Dealbreaker Round 2 pricing/context summary
- [OpenAI platform docs](https://platform.openai.com/docs)
