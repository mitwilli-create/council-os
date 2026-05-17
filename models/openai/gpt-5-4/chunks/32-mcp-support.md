---
provider: openai
model: gpt-5-4
capability: mcp-support
chunk_id: 32-mcp-support
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: pending
confidence: low
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [mcp, model-context-protocol, client, server]
related_chunks: [11-tool-use, 31-sdks-apis]
related_models: []
peer_comparisons:
  - peer: openai/gpt-5-5
    relation: weaker
    note: "GPT-5.5 leads on MCP Atlas by 8.1 pp per third-party reporting; implies stronger MCP task performance but does not confirm native MCP client/server support differences"
---

**Summary** — Not documented for this version with specificity. OpenAI platform materials discuss MCP more broadly, but the supplied source set does not pin down whether `gpt-5.4` is an MCP client, an MCP server, or both. Third-party benchmarks (MCP Atlas) show GPT-5.5 leading GPT-5.4 by 8.1 pp, which implies GPT-5.4 handles MCP-style workflows but underperforms GPT-5.5 on them. Test before relying on.

**Specifics:**
- MCP client/server support for `gpt-5.4` specifically: **[UNKNOWN — would need explicit MCP docs]**.
- MCP Atlas benchmark: GPT-5.4 trails GPT-5.5 by 8.1 pp. ([llm-stats.com](https://llm-stats.com/blog/research/gpt-5-5-vs-gpt-5-4))

**Compared to peers (sharpened by Dealbreaker):**
- vs. openai/gpt-5-5: weaker on MCP Atlas by 8.1 pp; if MCP task performance is critical, GPT-5.5 is the better choice.

**Known limitations on this axis:**
- Do not assume native MCP client/server capability without consulting OpenAI's MCP documentation directly.

**Sources:**
- [llm-stats.com GPT-5.5 vs GPT-5.4](https://llm-stats.com/blog/research/gpt-5-5-vs-gpt-5-4)
