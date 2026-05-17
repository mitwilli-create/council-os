---
provider: openai
model: gpt-5-4
capability: avoid-when
chunk_id: 44-avoid-when
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [routing, avoid-when, anti-patterns, downgrade, upgrade]
related_chunks: [43-ideal-tasks, 40-unique-strengths, 20-pricing, 41-known-limitations]
related_models: [openai/gpt-5-5, openai/gpt-5-4-mini, openai/gpt-5-4-nano]
peer_comparisons:
  - peer: openai/gpt-5-5
    relation: weaker
    note: "Use GPT-5.5 when max agentic/coding accuracy is required and cost is not the constraint"
  - peer: openai/gpt-5-4-mini
    relation: stronger
    note: "Downgrade to mini for well-scoped, high-volume, low-ambiguity tasks"
  - peer: openai/gpt-5-4-nano
    relation: stronger
    note: "Downgrade to nano for narrow classification, labels, enums, short JSON"
---

**Summary** — Avoid GPT-5.4 in five specific cases: highest-stakes agentic coding (use GPT-5.5), ultra-cheap high-volume classification (use nano), well-scoped subagent/computer-use at lower cost (use mini), frontier benchmark comparisons where current evals should decide, and long-running agents without session-state discipline (phase + compaction required).

**Specifics:**

**Top 5 task types where GPT-5.4 should NOT be used:**

1. **Highest-stakes agentic coding where benchmarked accuracy matters most** → use **GPT-5.5**. Third-party reports: Terminal-Bench 2.0 (82.7% vs 75.1%), ARC-AGI-2 (+11.7 pp), MCP Atlas (+8.1 pp). ([llm-stats.com](https://llm-stats.com/blog/research/gpt-5-5-vs-gpt-5-4))

2. **Ultra-cheap high-volume classification / labeling / short JSON** → use **GPT-5.4-nano** ($0.20/$1.25 per 1M).

3. **Well-scoped subagent or computer-use jobs at lower cost** → use **GPT-5.4-mini** ($0.75/$4.50 per 1M) when the task is explicit and ambiguity is low.

4. **Cases where only a verified frontier peer benchmark should decide** → run workload-specific evals across **GPT-5.5 / Claude Opus 4.7 / Gemini 3.1 Pro**; public evidence is insufficient to claim GPT-5.4 leads those peers.

5. **Long-running agents without session-state discipline** → if the system cannot preserve `phase` and perform compaction, GPT-5.4 is a poor operational fit regardless of its agentic strengths.

**Compared to peers (sharpened by Dealbreaker):**
- vs. openai/gpt-5-5: GPT-5.4 should yield to GPT-5.5 when top-end agentic/coding accuracy is the constraint.
- vs. openai/gpt-5-4-mini: GPT-5.4 should yield to mini when task is well-scoped, high-volume, and low-ambiguity.
- vs. openai/gpt-5-4-nano: GPT-5.4 should yield to nano for narrow classification at scale.

**Known limitations on this axis:**
- Claude Opus 4.7 and Gemini 3.1 Pro are current frontier peers but direct GPT-5.4 comparison benchmarks are not in the supplied source set; do not assume GPT-5.4 leads or trails without running evals.

**Sources:**
- [llm-stats.com GPT-5.5 vs GPT-5.4](https://llm-stats.com/blog/research/gpt-5-5-vs-gpt-5-4)
- [OpenAI models overview — sibling pricing](https://developers.openai.com/api/docs/models/all)
- [OpenAI prompt guidance — phase, compaction](https://developers.openai.com/api/docs/guides/prompt-guidance)
