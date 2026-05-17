---
provider: anthropic
model: claude-opus-4-7
capability: context-window
chunk_id: 26-context-window
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [context-window, output-cap, tokenizer, batch-api, long-context]
related_chunks: [16-long-context, 20-pricing, 21-latency-throughput, 41-known-limitations]
related_models: [anthropic/claude-sonnet-4-6, google/gemini-3-1-pro, openai/gpt-5-5]
peer_comparisons:
  - peer: anthropic/claude-sonnet-4-6
    relation: weaker
    note: "Same nominal 1M-token context, but Opus 4.7's tokenizer yields ~555k words vs. Sonnet 4.6's ~750k words for identical token budgets. Sonnet 4.6 holds more text."
  - peer: google/gemini-3-1-pro
    relation: comparable
    note: "Both advertise 1M tokens. Gemini 3.1 Pro's 1M window accepts audio/video streams; Opus 4.7's is text + image only."
---

**Summary** — Claude Opus 4.7 has a 1M-token context window with 128k token max output on the synchronous Messages API. Using the Batch API with the `output-300k-2026-03-24` beta header, max output extends to 300k tokens. The new tokenizer makes the 1M window hold approximately 555k words — materially less text than Sonnet 4.6's 1M window (~750k words). The minimum cacheable prefix is 4,096 tokens, which is 4× the Sonnet 4.6 minimum.

**Specifics:**
- **Input context window:** 1M tokens. Source: `_official-models-overview.md` line 37.
- **Effective word capacity:** ~555k words / ~2.5M unicode chars (new tokenizer). Source: `_official-models-overview.md` line 37.
- **Max output (synchronous):** 128k tokens. Source: `_official-models-overview.md` line 38.
- **Max output (Batch API, beta):** 300k tokens using `output-300k-2026-03-24` beta header. Opus 4.7, Opus 4.6, and Sonnet 4.6 all support this. Source: `_official-models-overview.md` line 57.
- **Minimum cacheable prefix:** 4,096 tokens on Opus 4.7 — 4× the Sonnet 4.6 minimum (1,024 tokens) and 2× the deprecated Haiku 3.5 minimum (2,048 tokens). Prompts shorter than 4,096 tokens are processed without caching; no error is returned; `cache_creation_input_tokens` and `cache_read_input_tokens` will both be 0 in the usage response. Source: `_official-prompt-caching.md` lines 650-657.

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-sonnet-4-6: Sonnet 4.6 holds ~750k words in the same nominal 1M token window vs. Opus 4.7's ~555k. For long-text workloads where fitting more content matters, Sonnet 4.6 is materially better — and cheaper.
- vs. google/gemini-3-1-pro: Same nominal 1M-token limit. Gemini's 1M window accepts up to 8.4 hours of audio or 1 hour of video, which Opus 4.7 cannot. For text-only long-context, both are broadly comparable in nominal capacity.
- vs. openai/gpt-5-5: No direct context-window word-density comparison available in round-2 verified sources.

**Known limitations on this axis:**
- Effective text capacity (~555k words) is less than Sonnet 4.6 (~750k words) despite identical nominal window — a non-obvious regression from the tokenizer change.
- 4,096-token minimum cache prefix is large — short prompts get no cache benefit even when marked with `cache_control`.
- No audio or video within the context window — text + image only.
- 300k output requires Batch API + beta header — not available on the standard synchronous API.

**Sources:**
- [Anthropic models overview — context window, output caps](https://platform.claude.com/docs/en/about-claude/models/overview)
- [Anthropic prompt caching docs — minimum prefix sizes](https://platform.claude.com/docs/en/build-with-claude/prompt-caching)
