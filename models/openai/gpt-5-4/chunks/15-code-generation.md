---
provider: openai
model: gpt-5-4
capability: code-generation
chunk_id: 15-code-generation
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: medium
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [code, coding, swe-bench, professional-work, frontend]
related_chunks: [10-reasoning, 11-tool-use, 18-structured-output, 41-known-limitations]
related_models: [openai/gpt-5-5, openai/gpt-5-4-mini]
peer_comparisons:
  - peer: openai/gpt-5-5
    relation: weaker
    note: "GPT-5.5 scores 58.6% vs GPT-5.4's 57.7% on SWE-Bench Pro — small but real gap; Terminal-Bench 2.0 gap is larger (82.7% vs 75.1%)"
  - peer: openai/gpt-5-4-mini
    relation: stronger
    note: "Mini is positioned for coding tasks but weaker on ambiguous multi-step code workflows; base is safer default"
---

**Summary** — OpenAI positions GPT-5.4 explicitly for coding and professional work. Third-party benchmarks show it trails GPT-5.5 on SWE-Bench Pro (57.7% vs 58.6%) and more significantly on Terminal-Bench 2.0 (75.1% vs 82.7%). A notable operational fact: OpenAI ships a dedicated frontend anti-slop prompt block because GPT-5.4 (and siblings) can produce generic over-decorated UI output without it — the mitigation is using that documented prompt block.

**Specifics:**
- Official positioning: "A more affordable model for coding and professional work." ([OpenAI models overview](https://developers.openai.com/api/docs/models/all))
- SWE-Bench Pro: **57.7%** (GPT-5.4) vs **58.6%** (GPT-5.5) — small gap. ([llm-stats.com](https://llm-stats.com/blog/research/gpt-5-5-vs-gpt-5-4), [interestingengineering.com](https://interestingengineering.com/ai-robotics/opanai-gpt-5-5-agentic-coding-gains))
- Terminal-Bench 2.0: **75.1%** (GPT-5.4) vs **82.7%** (GPT-5.5) — larger gap; use GPT-5.5 for agentic terminal/coding workflows where this delta matters. ([llm-stats.com](https://llm-stats.com/blog/research/gpt-5-5-vs-gpt-5-4))
- Spreadsheet/finance/Excel-oriented workflows are called out explicitly as a strength. ([OpenAI prompt guidance](https://developers.openai.com/api/docs/guides/prompt-guidance))
- **Frontend anti-slop prompt block:** OpenAI ships a dedicated frontend instruction block. Using a generic "build a UI" prompt produces low-signal, over-decorated output — the documented mitigation is using that block. ([OpenAI prompt guidance](https://developers.openai.com/api/docs/guides/prompt-guidance))
- No first-party HumanEval or SWE-bench number from OpenAI's own model card in the supplied source set; third-party numbers above should be treated as indicative.

**Compared to peers (sharpened by Dealbreaker):**
- vs. openai/gpt-5-5: weaker; small gap on SWE-Bench Pro (0.9 pp), larger gap on Terminal-Bench 2.0 (7.6 pp). For cost-insensitive agentic coding, GPT-5.5 is the better call.
- vs. openai/gpt-5-4-mini: stronger; mini is cheaper and positioned for coding but degrades faster on ambiguous or multi-step code workflows.

**Known limitations on this axis:**
- Frontend code output can be generic/slop without the documented prompt block — this is an unusually concrete failure mode for a frontier model.
- No official first-party benchmark card from OpenAI in the supplied sources; rely on workload-specific evals rather than assuming top-tier performance.

**Sources:**
- [OpenAI models overview](https://developers.openai.com/api/docs/models/all)
- [OpenAI prompt guidance](https://developers.openai.com/api/docs/guides/prompt-guidance)
- [llm-stats.com GPT-5.5 vs GPT-5.4](https://llm-stats.com/blog/research/gpt-5-5-vs-gpt-5-4)
- [interestingengineering.com](https://interestingengineering.com/ai-robotics/opanai-gpt-5-5-agentic-coding-gains)
