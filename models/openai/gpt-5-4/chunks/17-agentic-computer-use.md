---
provider: openai
model: gpt-5-4
capability: agentic-computer-use
chunk_id: 17-agentic-computer-use
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: medium
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [agentic, computer-use, subagent, browser, loop]
related_chunks: [11-tool-use, 10-reasoning, 41-known-limitations]
related_models: [openai/gpt-5-5, openai/gpt-5-4-mini]
peer_comparisons:
  - peer: openai/gpt-5-5
    relation: weaker
    note: "GPT-5.5 leads by 8.1 pp on MCP Atlas and 7.6 pp on Terminal-Bench 2.0 — prefer GPT-5.5 for top-end agentic accuracy"
  - peer: openai/gpt-5-4-mini
    relation: stronger
    note: "Mini is explicitly positioned for computer-use and subagents but is weaker on ambiguous multi-step orchestration; base handles more complex agent loops"
---

**Summary** — OpenAI attributes strong agentic workflow robustness to GPT-5.4, and explicitly positions GPT-5.4-mini for coding, computer use, and subagents at lower cost. The base model is the stronger orchestrator when tasks involve ambiguous transitions or complex phase management. Critical: this is documented multi-step tool persistence, not a promise of generic unrestricted browser/OS control as a base capability.

**Specifics:**
- Documented strength: "agentic workflow robustness," multi-step work persistence. ([OpenAI prompt guidance](https://developers.openai.com/api/docs/guides/prompt-guidance))
- GPT-5.4-mini is positioned for "coding, computer use, and subagents" — the base model is stronger on complex orchestration. ([OpenAI models overview](https://developers.openai.com/api/docs/models/all))
- Concrete strong task: coordinating a bounded agent loop over tools with explicit phases, retries, and a structured final answer.
- **Do not use without session-state discipline:** phase preservation + compaction are mandatory for reliable long-running agent loops (see 11-tool-use and 16-long-context).
- Full unrestricted browser/OS desktop autonomy for `gpt-5.4` as a base capability: not proven from the supplied source set.

**Compared to peers (sharpened by Dealbreaker):**
- vs. openai/gpt-5-5: weaker; 8.1 pp gap on MCP Atlas and 7.6 pp gap on Terminal-Bench 2.0. For highest-stakes agentic accuracy, GPT-5.5 is better.
- vs. openai/gpt-5-4-mini: stronger on complex orchestration; mini is cheaper for simpler, well-scoped computer-use or subagent tasks.

**Known limitations on this axis:**
- Dropped `phase` parameter causes agent replay corruption — operational discipline required.
- Long agents without compaction degrade.
- Use GPT-5.5 when agentic benchmark performance matters more than 2× cost savings.

**Sources:**
- [OpenAI prompt guidance](https://developers.openai.com/api/docs/guides/prompt-guidance)
- [OpenAI models overview](https://developers.openai.com/api/docs/models/all)
- [llm-stats.com GPT-5.5 vs GPT-5.4](https://llm-stats.com/blog/research/gpt-5-5-vs-gpt-5-4)
