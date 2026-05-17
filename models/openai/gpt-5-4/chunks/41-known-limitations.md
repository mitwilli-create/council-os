---
provider: openai
model: gpt-5-4
capability: known-limitations
chunk_id: 41-known-limitations
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [limitations, failure-modes, gotchas, operational]
related_chunks: [11-tool-use, 16-long-context, 10-reasoning, 13-vision, 18-structured-output, 15-code-generation]
related_models: [openai/gpt-5-4-mini, openai/gpt-5-4-nano]
peer_comparisons: []
---

**Summary** — GPT-5.4 has eight model-specific, first-party-documented failure modes — an unusually concrete set that came directly from OpenAI's prompt guidance. These are not generic LLM risks; they are specific to the GPT-5.4 family and confirmed operational hazards. Every system using GPT-5.4 should review this list before deployment.

**Specifics:**

1. **Mini/nano "keep the conversation going" tendency.** Smaller siblings try to continue with follow-up questions by default. Mitigation: explicit `<output_contract>` or narrowly scoped instruction. ([OpenAI prompt guidance](https://developers.openai.com/api/docs/guides/prompt-guidance))

2. **"Output nothing else" is unreliable on mini.** OpenAI explicitly warns against this wording; use schema enforcement / structured outputs / explicit delimiters instead. ([OpenAI prompt guidance](https://developers.openai.com/api/docs/guides/prompt-guidance), [OpenAI structured outputs guide](https://developers.openai.com/api/docs/guides/structured-outputs))

3. **Dropped `phase` breaks tool-agent replay.** If a long-running agent loses the `phase` parameter, preambles are misread as final answers. Mitigation: preserve phase metadata across retries/replays. ([OpenAI prompt guidance](https://developers.openai.com/api/docs/guides/prompt-guidance))

4. **Long sessions need compaction.** Without `/responses/compact`, context bloat leads to instruction drift, degraded retrieval, and eventual hard context exhaustion. ([OpenAI prompt guidance](https://developers.openai.com/api/docs/guides/prompt-guidance))

5. **`reasoning_effort: xhigh` is a bad default.** Adds cost and latency without consistent quality benefit. Start at `medium`; benchmark before raising. ([OpenAI prompt guidance](https://developers.openai.com/api/docs/guides/prompt-guidance))

6. **Image `detail: auto` is unreliable for OCR/computer use.** Specify the required detail level explicitly in the prompt. ([OpenAI prompt guidance](https://developers.openai.com/api/docs/guides/prompt-guidance))

7. **Frontend code generation has a documented "AI slop" risk.** OpenAI ships a dedicated frontend instruction block to counter it. Generic "build a UI" prompts produce over-decorated, low-signal output. ([OpenAI prompt guidance](https://developers.openai.com/api/docs/guides/prompt-guidance))

8. **Benchmark opacity.** OpenAI's public docs in the supplied set do not include a complete benchmark card for base GPT-5.4. Routing teams may over- or under-estimate it. Mitigation: run workload-specific evals.

**Compared to peers (sharpened by Dealbreaker):**
- These are model-specific hazards, not generic LLM limitations; no direct peer comparison applicable.

**Known limitations on this axis:**
- Items 1 and 2 above apply most strongly to mini and nano siblings; base `gpt-5.4` is more robust but shares the same instruction-fidelity architecture.

**Sources:**
- [OpenAI prompt guidance](https://developers.openai.com/api/docs/guides/prompt-guidance)
- [OpenAI structured outputs guide](https://developers.openai.com/api/docs/guides/structured-outputs)
