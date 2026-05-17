---
provider: xai
model: grok-4.20-multi-agent
capability: connectors
chunk_id: 30-connectors
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 1
tags: [x-search, x-twitter, first-party, connectors, unique-differentiator]
related_chunks: [12-web-grounding, 11-tool-use, 40-unique-strengths]
related_models: [anthropic/claude-opus-4-7, openai/gpt-5-5, google/gemini-3-1-pro, xai/grok-4-3]
peer_comparisons:
  - peer: anthropic/claude-opus-4-7
    relation: stronger
    note: "Claude Opus 4.7 has no first-party X/Twitter retrieval surface as of mid-2026."
  - peer: openai/gpt-5-5
    relation: stronger
    note: "GPT-5.5 has no first-party X/Twitter retrieval surface as of mid-2026."
  - peer: google/gemini-3-1-pro
    relation: stronger
    note: "Gemini 3.1 Pro uses Google Search grounding but has no X/Twitter retrieval surface."
  - peer: xai/grok-4-3
    relation: comparable
    note: "Grok 4.3 also has x_search. Multi-Agent's advantage is parallel dispatch across agents."
---

**Summary** — Grok 4.20 Multi-Agent's primary first-party connector is `x_search` — real-time retrieval from X/Twitter. This is xAI-exclusive as of mid-2026; Claude Opus 4.7, GPT-5.5, and Gemini 3.1 Pro have no first-party X retrieval surface. For tasks where real-time X discourse is the primary corpus, Grok 4.20 Multi-Agent has no cross-family peer.

**Specifics:**
- `x_search`: first-party, real-time X/Twitter retrieval. Built into the model's tool surface without external API setup.
- `web_search`: general web retrieval.
- Both tools available as server-side built-ins — no client-side configuration required.
- Skill registries/extensions: [UNKNOWN — would need to test].
- xAI SDK: Python and standard languages via Responses API.

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-opus-4-7: No first-party X surface. For X-discourse tasks, Grok 4.20 MA is the only option.
- vs. openai/gpt-5-5: No first-party X surface. Same gap.
- vs. google/gemini-3-1-pro: Google Search present but no X surface. Same gap.
- vs. xai/grok-4-3: Both have `x_search`. Grok 4.20 MA advantage is parallel multi-agent X queries in one call.

**Known limitations on this axis:**
- `x_search` quality is tool-dependent — how xAI resolves relevance, freshness, and coverage within X is not publicly documented in detail.
- Skill registries/extensions: [UNKNOWN].

**Sources:**
- [xAI Multi-Agent docs](https://docs.x.ai/developers/model-capabilities/text/multi-agent)
