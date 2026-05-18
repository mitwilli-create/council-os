---
provider: perplexity
model: sonar
capability: tool-use
chunk_id: 11-tool-use
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: false
source_authority: self_research
confidence: low
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [tool-use, function-calling, search, retrieval]
related_chunks: [12-web-grounding, 17-agentic-computer-use, 44-avoid-when]
related_models: [perplexity/sonar-pro]
peer_comparisons:
  - peer: perplexity/sonar-pro
    relation: comparable
    note: "Both Sonar variants are search-only; neither exposes traditional function calling per sibling Sonar Pro's converged report"
---

**Summary** — Sonar (base) does not expose traditional function calling. Its "tool use" is web retrieval built into the product loop — search is implicit, not an API-callable tool. No function calling, no parallel tool calls, and no MCP client interface are documented for Sonar base. The search-first design means Sonar behaves as a tool consumer (search is its implicit tool) rather than a tool orchestrator.

**Specifics:**
- No function calling confirmed. [R1 Dealbreaker Strike 7: "Sonar does not expose function calling in the same way as Anthropic/OpenAI/Google; this is documentable as a limit, not a [UNKNOWN]"]
- Web retrieval/search is the built-in "tool" — it is implicit in every response, not callable by an orchestrator. [self_research, [INFERRED]]
- No parallel tool calls documented. [self_research, [UNKNOWN]]
- No MCP client support confirmed. [self_research, [UNKNOWN]]

**Compared to peers (sharpened by Dealbreaker):**
- vs. perplexity/sonar-pro: comparable — neither exposes function calling; both are search-synthesis models.
- Cross-provider peers: no verified comparison available.

**Known limitations on this axis:**
- Cannot be used as a function-calling agent in an orchestration pipeline.
- Do not route tasks that require calling external APIs or executing tools via LLM function-call syntax.

**Sources:**
- R1 Dealbreaker Strike 7: `/models/perplexity/sonar/research-rounds/round-1-dealbreaker.md`
- R1 self-research Section 2: `/models/perplexity/sonar/research-rounds/round-1-self-research.md`
