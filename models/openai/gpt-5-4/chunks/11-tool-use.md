---
provider: openai
model: gpt-5-4
capability: tool-use
chunk_id: 11-tool-use
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [tool-use, agentic, parallel-tools, phase, function-calling]
related_chunks: [10-reasoning, 17-agentic-computer-use, 18-structured-output, 41-known-limitations]
related_models: [openai/gpt-5-5, openai/gpt-5-4-mini]
peer_comparisons:
  - peer: openai/gpt-5-5
    relation: weaker
    note: "GPT-5.5 leads on MCP Atlas benchmark by 8.1 pp and Terminal-Bench 2.0 by 7.6 pp"
  - peer: openai/gpt-5-4-mini
    relation: stronger
    note: "Mini is positioned for subagents and computer use but degrades faster on multi-step orchestration with ambiguous transitions"
---

**Summary** — GPT-5.4 is documented by OpenAI as stronger on agentic workflow robustness, multi-step work persistence, and batched or parallel tool calling while maintaining tool-call accuracy. The critical operational hazard on this axis is the `phase` parameter: if it is dropped during agent replay, preambles can be misread as final answers, corrupting the workflow.

**Specifics:**
- Documented strength: "agentic workflow robustness," multi-step work persistence, batched/parallel tool calls. ([OpenAI prompt guidance](https://developers.openai.com/api/docs/guides/prompt-guidance))
- **`phase` parameter must be preserved across retries/replays.** Dropping it causes preambles to be treated as final answers — this is an operational failure mode named explicitly in OpenAI docs, not theoretical. ([OpenAI prompt guidance](https://developers.openai.com/api/docs/guides/prompt-guidance))
- Concrete strong task: multi-step research or spreadsheet workflow that plans, calls several tools, and returns formatted output while preserving structure. ([OpenAI prompt guidance](https://developers.openai.com/api/docs/guides/prompt-guidance))
- MCP client/server support matrix for `gpt-5.4` specifically is **[UNKNOWN — would need explicit MCP docs]**.

**Compared to peers (sharpened by Dealbreaker):**
- vs. openai/gpt-5-5: weaker; GPT-5.5 scores 82.7% vs 75.1% on Terminal-Bench 2.0 and leads by 8.1 pp on MCP Atlas. Use GPT-5.5 for top-end agentic accuracy.
- vs. openai/gpt-5-4-mini: stronger; mini is cheaper and positioned for subagents, but OpenAI prompt guidance says mini degrades when it must infer missing steps — GPT-5.4 base handles more complex orchestration.

**Known limitations on this axis:**
- Dropped `phase` is a live documented failure mode; every agentic system using GPT-5.4 must preserve phase metadata.
- MCP support specifics for this model version are not confirmed in supplied sources.

**Sources:**
- [OpenAI prompt guidance](https://developers.openai.com/api/docs/guides/prompt-guidance)
- [OpenAI models overview — mini positioning](https://developers.openai.com/api/docs/models/all)
- [llm-stats.com GPT-5.5 vs GPT-5.4](https://llm-stats.com/blog/research/gpt-5-5-vs-gpt-5-4)
