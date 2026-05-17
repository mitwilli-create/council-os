---
provider: openai
model: gpt-5-3-chat-latest
capability: avoid-when
chunk_id: 44-avoid-when
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [routing, avoid, hard-reasoning, audio, long-context, production]
related_chunks: [43-ideal-tasks, 41-known-limitations, 00-overview, 20-pricing]
related_models: [openai/gpt-5-5, openai/chat-latest, openai/gpt-realtime-2, anthropic/claude-opus-4-7]
peer_comparisons:
  - peer: openai/gpt-5-5
    relation: weaker
    note: "Route to GPT-5.5 for hard reasoning, math, code repair, production workflows — OpenAI's own recommendation."
  - peer: openai/chat-latest
    relation: weaker
    note: "Route to chat-latest when context > 128k or output > 16k."
---

**Summary** — Five explicit routing-away cases with verified alternatives. OpenAI itself does not recommend GPT-5.3 Chat for production API use.

**Specifics:**
1. **Hard reasoning, math, logic problems** → use GPT-5.5 with `reasoning.effort`. (OpenAI production recommendation; reasoning docs)
2. **Context > 128k or output > 16k needed** → use `chat-latest` (400k context / 128k output). Migrating back from GPT-5.3 Chat to chat-latest incurs 2.86× input / 2.14× output premium but restores full capacity. (chat-latest model page)
3. **Audio or real-time voice** → use `gpt-realtime-2` (bi-directional audio) or `gpt-audio-1.5`. GPT-5.3 Chat has zero audio capability. (OpenAI models overview)
4. **Long-form narrative, stylistic writing** → consider Anthropic Claude Opus 4.7 for literary fidelity; no head-to-head benchmark available but Opus 4.7 is widely selected for this task type. [UNKNOWN — route based on pilot]
5. **Complex code repair, large-repo SWE tasks** → favor GPT-5.5 or GPT-5.4-pro if published benchmarks show better fix rates; general frontier > Instant guidance from OpenAI. [UNKNOWN — no GPT-5.3 Chat SWE-bench scores]
6. **Production API workloads** → OpenAI explicitly recommends GPT-5.5 over the Instant family for production. (chat-latest docs)

**Compared to peers (sharpened by Dealbreaker):**
- All six routing-away scenarios have a named alternative with a documented rationale. No vague "use a better model" guidance.

**Known limitations on this axis:**
- Cases 4 and 5 are UNKNOWN at the model-specific benchmark level; routing guidance is based on general tier logic, not GPT-5.3 Chat-specific data.

**Sources:**
- Round-2 self-research Section 7 (Top 5 avoid-when)
- [chat-latest model page](https://developers.openai.com/api/docs/models/chat-latest)
- [Reasoning guide](https://developers.openai.com/api/docs/guides/reasoning)
- [OpenAI models overview](https://developers.openai.com/api/docs/models/all)
