---
provider: anthropic
model: claude-opus-4-7
capability: long-context
chunk_id: 16-long-context
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [long-context, context-window, tokenizer, retrieval, codebase-reading]
related_chunks: [26-context-window, 20-pricing, 21-latency-throughput, 41-known-limitations, 44-avoid-when]
related_models: [anthropic/claude-sonnet-4-6, google/gemini-3-1-pro, openai/gpt-5-5]
peer_comparisons:
  - peer: anthropic/claude-sonnet-4-6
    relation: weaker
    note: "Same nominal 1M-token window, but Opus 4.7's new tokenizer means the window holds ~555k words vs. Sonnet 4.6's ~750k words. Sonnet 4.6 fits more text for the same token budget."
  - peer: google/gemini-3-1-pro
    relation: different-approach
    note: "Both advertise 1M tokens; Gemini 3.1 Pro accepts audio/video streams within that window (8.4 hours audio, 1 hour video). Opus 4.7's 1M is text+image only."
---

**Summary** — Claude Opus 4.7 has a 1M-token context window with 128k token max output on the synchronous API (300k via Batch API with beta header). However, the new tokenizer makes the 1M window hold approximately 555k words — materially less text than Sonnet 4.6's 1M window (~750k words). For very-long text workloads, Sonnet 4.6 fits more content per token budget at 40% lower cost. Opus 4.7's long-context strength is reading a 100–150k token codebase in a single prompt for targeted refactoring.

**Specifics:**
- **Context window:** 1M tokens (~555k words / ~2.5M unicode chars under the new tokenizer). Source: `_official-models-overview.md` line 37.
- **Max output (sync):** 128k tokens. Source: `_official-models-overview.md` line 38.
- **Max output (Batch API with `output-300k-2026-03-24` beta header):** 300k tokens. Source: `_official-models-overview.md` line 57.
- **Tokenizer word-density comparison:** Opus 4.7 ~555k words vs. Sonnet 4.6 ~750k words at the same nominal 1M-token count. Source: `_official-models-overview.md` line 37.
- **Minimum cacheable prefix:** 4,096 tokens on Opus 4.7 — short-prompt high-volume workloads cannot benefit from caching at all. Source: `_official-prompt-caching.md` lines 650-657.
- **Ideal long-context use case:** Reading a 100–150k token codebase + recent commits in a single prompt, within the cache-friendly minimum (≥4,096 tokens prefix). `[INFERRED]` from official doc guidance.

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-sonnet-4-6: Sonnet 4.6's 1M context holds ~750k words vs. Opus 4.7's ~555k. For very-long text workloads, Sonnet 4.6 fits more content per token budget AND is 40% cheaper — AND it retains Extended-thinking. Sonnet 4.6 is the better sibling for long-text-only workloads.
- vs. google/gemini-3-1-pro: Gemini 3.1 Pro's 1M token window accepts up to 8.4 hours of audio or 1 hour of video. Opus 4.7's window is text + image only. For pure text, the two are comparable in nominal window size; for multimodal stream ingestion, Gemini is the only option.
- vs. openai/gpt-5-5: No direct long-context benchmark comparison available in round-2 verified sources.

**Known limitations on this axis:**
- Effective text capacity (~555k words) is lower than Sonnet 4.6 (~750k words) despite identical nominal window — a non-obvious regression.
- No audio or video in the 1M window — text and image only.
- 4,096-token minimum cache prefix — silent cache miss on shorter prompts with no error returned.
- Very-long context increases latency and cost meaningfully at the new tokenizer's inflation rate.

**Sources:**
- [Anthropic models overview — context window, output caps](https://platform.claude.com/docs/en/about-claude/models/overview)
- [Anthropic announcement — tokenizer change](https://www.anthropic.com/news/claude-opus-4-7)
- [Google DeepMind Gemini 3.1 Pro model card via almcorp](https://almcorp.com/blog/gemini-3-1-pro-complete-guide/)
