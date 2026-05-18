---
provider: xai
model: grok-4-x-search
capability: substrate
chunk_id: 01-substrate
last_research_round: 0
last_updated: 2026-05-18
verified_by_dealbreaker: true
source_authority: official_doc
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [substrate, agent-tools-api, x-search, web-search]
related_chunks: [00-overview, 11-tool-use, 30-connectors]
related_models: [xai:grok-4-3, xai:grok-4-20-multi-agent, xai:grok-4-1-fast-reasoning]
peer_comparisons:
  - peer: xai/grok-4-3
    relation: different-approach
    note: "grok-4-x-search FORCES web+x_search tools at every call; grok-4-3 supports tools optionally"
  - peer: xai/grok-4-20-multi-agent
    relation: different-approach
    note: "grok-4-x-search is single-pass forced tool use; multi-agent is parallel 4-16 agent debate"
---

# xai:grok-4-x-search — Substrate Documentation

**Summary** — The `xai:grok-4-x-search` slot in `lib/council.mjs` uses the xAI Responses API
endpoint (`/v1/responses`, NOT `/v1/chat/completions`) with forced tool use (`web_search` +
`x_search` tools always attached). The underlying model substrate has changed over time and
must be kept in sync with xAI's current agent-tools-API documentation.

**Specifics:**
- **Current substrate (as of 2026-05-18):** `grok-4-1-fast-reasoning` (2M token context window)
  - Described by xAI as "best agentic tool calling model"
  - Sources: [Grok 4.1 Fast announcement](https://x.ai/news/grok-4-1-fast),
    [docs.x.ai/developers/models/grok-4-1-fast-reasoning](https://docs.x.ai/developers/models/grok-4-1-fast-reasoning)
- **Retired substrate (as of 2026-05-15):** `grok-4-fast-reasoning`
  - Old API calls silently redirect to grok-4.3 pricing tier (no error, just different price/perf)
  - Source: [docs.x.ai migration notice](https://docs.x.ai/developers/migration/may-15-retirement)
- **API surface:** xAI Responses API with `tools: [{ type: 'web_search' }, { type: 'x_search' }]`
- **Output:** `output_text` (legacy) or `output[].content[].text` (new structure). Both supported by
  the council.mjs extraction helper.
- **Citations:** Returned in `j.citations` array; contain post URLs from X and web URLs from
  web_search, mixed.

**Compared to peers (sharpened by Dealbreaker):**
- vs. `xai/grok-4-3`: grok-4-x-search forces tools at every call; grok-4-3 supports tools optionally and is the right choice when raw weights (no tools) are wanted. For pure X retrieval where the model should not synthesize, grok-4-3 + x_search beats this slot.
- vs. `xai/grok-4-20-multi-agent`: Single-pass forced tool use vs parallel 4-16 agent debate. Multi-agent is correct when the task requires divergent perspectives synthesis; grok-4-x-search is correct for single-pass web+X retrieval.

**Known limitations on this axis:**
- The hardcoded model string in `lib/council.mjs` L250 had been stale (`grok-4-fast-reasoning`,
  retired May 15) until the dealbreaker-v2 (2026-05-18) flagged it for update. Always cross-reference
  the current model string against `docs.x.ai/developers/models/` when this chunk is read.
- The substrate is a fast-reasoning model, NOT grok-4.3 weights. For high-reasoning tasks without
  web grounding, route to grok-4-3 instead.

**When to use vs alternatives:**

| Task | Use |
|---|---|
| Real-time X discourse (single-pass) | `xai:grok-4-3` |
| Forced web+X corroboration (tool-pairing) | `xai:grok-4-x-search` |
| Parallel multi-perspective X synthesis | `xai:grok-4-20-multi-agent` |
| Heavy reasoning without grounding | `xai:grok-4-3` |

**Sources:**
- [xAI Grok 4.1 Fast announcement](https://x.ai/news/grok-4-1-fast)
- [docs.x.ai/developers/models/grok-4-1-fast-reasoning](https://docs.x.ai/developers/models/grok-4-1-fast-reasoning)
- Verification supplement W8 (`~/.claude/agents/runs/adversarial-20260517-202452/verification-supplement.md`)
- Dealbreaker v2 SHIP-READY edit D1 (council.mjs L250 update)
