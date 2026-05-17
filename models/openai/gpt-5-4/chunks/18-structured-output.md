---
provider: openai
model: gpt-5-4
capability: structured-output
chunk_id: 18-structured-output
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [structured-output, json, schema, formatting, output-contract]
related_chunks: [11-tool-use, 15-code-generation, 41-known-limitations]
related_models: [openai/gpt-5-4-mini, openai/gpt-5-4-nano]
peer_comparisons:
  - peer: openai/gpt-5-4-mini
    relation: stronger
    note: "Mini is unreliable with broad 'output nothing else' instructions; base model handles vague packaging constraints better"
  - peer: openai/gpt-5-4-nano
    relation: stronger
    note: "Nano is suitable only for narrow labels/enums/short JSON; base model handles complex schemas"
---

**Summary** — GPT-5.4 has strong formatting fidelity and first-party structured output support from OpenAI. The documented failure mode is on smaller siblings (mini/nano): "output nothing else" is unreliable — OpenAI explicitly warns against it. The mitigation for all GPT-5.4-family calls is explicit schema enforcement, delimiters, or structured outputs API rather than relying on natural-language output constraints.

**Specifics:**
- First-party structured-output support exists at the OpenAI platform level. ([OpenAI structured outputs guide](https://developers.openai.com/api/docs/guides/structured-outputs))
- GPT-5.4 is described as strong on "formatting fidelity and packaging outputs, especially in professional/spreadsheet workflows." ([OpenAI prompt guidance](https://developers.openai.com/api/docs/guides/prompt-guidance))
- **"Output nothing else" is unreliable on mini.** OpenAI explicitly warns against relying on that wording; scoped instructions and explicit output contracts are safer. ([OpenAI prompt guidance](https://developers.openai.com/api/docs/guides/prompt-guidance))
- Concrete strong task: returning a tightly formatted JSON object or table derived from tool calls or long documents, when the schema/output contract is explicit.

**Compared to peers (sharpened by Dealbreaker):**
- vs. openai/gpt-5-4-mini: stronger; mini fails to honor vague "output nothing else" constraints — base model is more reliable with complex output requirements.
- vs. openai/gpt-5-4-nano: much stronger; nano is suitable only for narrow, repetitive, well-bounded tasks (labels, short JSON).

**Known limitations on this axis:**
- Natural-language output constraints ("output nothing else," "return only JSON") are not safe to rely on without structured outputs enforcement — use the API's schema enforcement instead.
- Mini and nano siblings are more brittle on this axis; route to base or use explicit schema enforcement.

**Sources:**
- [OpenAI structured outputs guide](https://developers.openai.com/api/docs/guides/structured-outputs)
- [OpenAI prompt guidance](https://developers.openai.com/api/docs/guides/prompt-guidance)
