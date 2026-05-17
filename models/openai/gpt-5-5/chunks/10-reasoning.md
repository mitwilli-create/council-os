---
provider: openai
model: gpt-5-5
capability: reasoning
chunk_id: 10-reasoning
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [reasoning, arc-agi, chain-of-thought, thinking-controls, abstraction]
related_chunks: [15-code-generation, 17-agentic-computer-use, 40-unique-strengths, 41-known-limitations]
related_models:
  - anthropic/claude-opus-4-7
  - google/gemini-3-1-pro
  - openai/gpt-5-4
peer_comparisons:
  - peer: anthropic/claude-opus-4-7
    relation: stronger
    note: "ARC-AGI-2: GPT-5.5 85.0% vs Claude Opus 4.7 75.8% — GPT-5.5 leads on abstraction/puzzle reasoning"
  - peer: anthropic/claude-opus-4-7
    relation: weaker
    note: "Humanity's Last Exam: GPT-5.5 41.4% vs Claude Opus 4.7 46.9% — GPT-5.5 loses on broadest academic reasoning"
  - peer: google/gemini-3-1-pro
    relation: stronger
    note: "ARC-AGI-2: GPT-5.5 85.0% vs Gemini 3.1 Pro 77.1%"
  - peer: google/gemini-3-1-pro
    relation: weaker
    note: "Humanity's Last Exam: GPT-5.5 41.4% vs Gemini 3.1 Pro 44.4%"
---

**Summary** — GPT-5.5 handles multi-step reasoning, benchmark-style problem solving, professional analysis, code/debug reasoning, and long-horizon agentic tasks. It is documented as an improvement over GPT-5.4 on ARC-AGI-2 and Terminal-Bench 2.0. However, it is not uniformly ahead of cross-provider peers: it loses to Claude Opus 4.7 on Humanity's Last Exam and MCP-Atlas.

**Specifics:**
- **ARC-AGI-2:** GPT-5.5 **85.0%**, confirmed by WebSearch (officechai.com/ai/gpt-5-5-tops-arc-agi-2, llm-stats.com). Delta vs GPT-5.4: +11.7pp. Displaces Gemini 3.1 Pro (77.1%) and Claude Opus 4.7 (75.8%) on this benchmark.
- **Humanity's Last Exam:** GPT-5.5 **41.4%** vs Claude Opus 4.7 **46.9%** vs Gemini 3.1 Pro **44.4%** — GPT-5.5 is last among these three on the broadest academic reasoning benchmark.
- **Reasoning/thinking controls:** OpenAI Responses API supports reasoning/thinking-style configuration; the `phase` parameter separates intermediate progress updates from final answers in agent/tool workflows (OpenAI _official-prompt-guidance.md, cited by Dealbreaker).
- **Prompting style:** GPT-5.5 prefers shorter, outcome-first prompts. GPT-5.4-style process-heavy XML contracts (output_contract, verbosity_controls) are suboptimal for GPT-5.5.
- **Hallucination risk:** Can still produce confident but wrong reasoning when the task lacks grounding; does not self-correct without verification tooling.

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-opus-4-7: GPT-5.5 wins on ARC-AGI-2 (85.0% vs 75.8%); loses on Humanity's Last Exam (41.4% vs 46.9%) and MCP-Atlas (75.3% vs 77.3%). Route to Claude Opus 4.7 for hardest-knowledge academic/broad reasoning.
- vs. google/gemini-3-1-pro: GPT-5.5 wins ARC-AGI-2 (85.0% vs 77.1%); loses Humanity's Last Exam (41.4% vs 44.4%). Route to Gemini 3.1 Pro for broad academic exam tasks where HLE is the proxy.
- vs. openai/gpt-5-4: GPT-5.5 is uniformly stronger on agentic reasoning benchmarks; GPT-5.4 prompting style is a migration cost.

**Known limitations on this axis:**
- HLE is GPT-5.5's weakest peer-compared benchmark — it is third of three named frontier peers.
- `phase` parameter exact schema is unverified (cited from Dealbreaker-referenced prompt guidance, not directly confirmed).
- Can overfit to benchmark-like patterns; real-world novel reasoning tasks may differ.

**Sources:**
- [officechai.com: GPT-5.5 tops ARC-AGI-2](https://officechai.com/ai/gpt-5-5-tops-arc-agi-2)
- [OpenAI: Introducing GPT-5.5](https://openai.com/index/introducing-gpt-5-5)
- [OpenAI platform docs](https://platform.openai.com/docs)
