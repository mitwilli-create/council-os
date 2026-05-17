---
provider: anthropic
model: claude-opus-4-7
capability: known-limitations
chunk_id: 41-known-limitations
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [limitations, failure-modes, hallucination, tokenizer, cache-gotchas, instruction-literalism]
related_chunks: [10-reasoning, 15-code-generation, 20-pricing, 26-context-window, 44-avoid-when]
related_models: [openai/gpt-5-5, anthropic/claude-sonnet-4-6, anthropic/claude-opus-4-6]
peer_comparisons:
  - peer: openai/gpt-5-5
    relation: weaker
    note: "Terminal-Bench 2.0 (-13.3 pts) and BrowseComp (-10.8 pts) are the largest measured gaps — both decisive for their respective task classes."
  - peer: anthropic/claude-sonnet-4-6
    relation: weaker
    note: "Sonnet 4.6 holds ~750k words in its 1M context vs. Opus 4.7's ~555k; Sonnet retains Extended-thinking surface; Sonnet is 40% cheaper."
---

**Summary** — Claude Opus 4.7 has eight documented failure modes, six of which were surfaced from official Anthropic docs in Round 2. The highest-impact operational issues are: (1) fabricated code identifiers stated with high confidence; (2) instruction-literalism that breaks prompts written for earlier models; (3) tokenizer cost inflation that makes sticker pricing misleading; (4) silent adaptive-thinking budget truncation with no API signal; (5) a 4,096-token minimum cache prefix that silently skips caching; and (6) a 4-slot cache-breakpoint ceiling that returns 400 errors when exceeded.

**Specifics:**

**Documented in official Anthropic sources:**
- **Instruction-literalism regression:** Anthropic acknowledges "where previous models interpreted instructions loosely or skipped parts entirely, Opus 4.7 takes the instructions literally." Prompts written for earlier models can produce unexpected results. Source: [Anthropic announcement](https://www.anthropic.com/news/claude-opus-4-7).
- **Tokenizer cost inflation:** 1.0–1.35× more tokens per same input vs. Opus 4.6 → real-world cost increase at unchanged sticker. Also: user-side token-counting code calibrated to 4.6 produces wrong counts on 4.7. Sources: [Anthropic announcement](https://www.anthropic.com/news/claude-opus-4-7); [Finout pricing analysis](https://www.finout.io/blog/claude-opus-4.7-pricing-the-real-cost-story-behind-the-unchanged-price-tag).
- **4,096-token minimum cache prefix (silent skip):** Prompts shorter than 4,096 tokens are processed without caching even when marked with `cache_control`; no error returned; `cache_creation_input_tokens` = 0 in usage. 4× the Sonnet 4.6 minimum. Source: `_official-prompt-caching.md` lines 650-657.
- **4-cache-breakpoint ceiling:** API allows up to 4 explicit `cache_control` breakpoints per request. Automatic caching consumes one slot. A 5th slot returns a 400 error. Source: `_official-prompt-caching.md` line 572.
- **`automatic_cache_control` + explicit `cache_control` different-TTL conflict returns 400.** Source: `_official-prompt-caching.md` line 571.
- **Extended thinking removed:** Opus 4.7 supports adaptive thinking only; the explicit `budget_tokens` surface available on Opus 4.6, Sonnet 4.6, and Haiku 4.5 is gone. Source: `_official-models-overview.md` line 33.
- **Pooled Opus rate limit:** Opus 4.7 shares its RPM/ITPM/OTPM pool with Opus 4.6, 4.5, 4.1, and the deprecated Opus 4. Source: [Anthropic rate limits docs](https://platform.claude.com/docs/en/api/rate-limits) footnote `*`.
- **Bedrock/Vertex deprecation calendar divergence:** Only Claude Platform on AWS follows Anthropic's first-party deprecation calendar. Bedrock-direct and Vertex-direct callers operate on their provider's calendar — three independent deprecation timelines exist for enterprise migration planning. Source: `_official-models-overview.md` line 53.
- **Strict-tool-use grammar 24-hour cache expiry:** Grammar cache is separate from prompt cache; idle agents pay a cold-compile latency hit after >24h of inactivity. Source: [Anthropic structured outputs](https://platform.claude.com/docs/en/build-with-claude/structured-outputs).

**Documented via third-party / community sources (verified):**
- **Fabricated code identifiers:** Commit SHAs, file paths, and PR numbers stated with the same confidence as verified facts. Documented via live GitHub issue. Source: [claude-code GitHub issue #50235](https://github.com/anthropics/claude-code/issues/50235) (opened April 18, 2026, confirmed live round-2 spot-check).
- **Argumentative / pedantic behavior:** Community reports of the model correcting prompt language, refusing to proceed on ambiguous instructions, and suggesting the user stop and return later. Root cause per Anthropic = improved instruction-literalism. Source: [Zvi Mowshowitz Opus 4.7 Part 2 (April 21, 2026)](https://thezvi.substack.com/p/opus-47-part-2-capabilities-and-reactions).

**`[INFERRED]` failure modes:**
- **Silent adaptive-thinking budget truncation:** When the implicit thinking budget is exhausted, the model truncates reasoning and returns confident-but-incomplete output with no API signal. `[INFERRED FROM PROVIDER DOCS]` — explicit-budget absence documented; silent-truncation behavior not first-party-documented as such.
- **`xhigh` TTFT of ~23.6s is not reduced by streaming** — thinking-phase output is not emitted to stream until reasoning completes. Source: [Digital Applied latency benchmarks](https://www.digitalapplied.com/blog/ai-model-latency-benchmarks-2026-ttft-throughput).

**Compared to peers (sharpened by Dealbreaker):**
- vs. openai/gpt-5-5: GPT-5.5 leads Terminal-Bench 2.0 by 13.3 points and BrowseComp by 10.8 points — these are not noise; they are routing-relevant gaps.
- vs. anthropic/claude-sonnet-4-6: Sonnet 4.6 retains Extended-thinking, holds more text per 1M tokens, and is 40% cheaper — it is strictly better for tasks that don't require SWE-bench-Pro-class difficulty.

**Known limitations on this axis:**
- Refusal rate is actually low (0.28% unnecessary refusals per Zvi's read of the Anthropic system card — better than Sonnet 4.6's 0.41%) — the Round 1 over-refusal claim was overstated. The confirmed regression is narrow: "tendency to give overly detailed harm-reduction advice on controlled substances."

**Sources:**
- [Anthropic announcement — instruction-literalism, tokenizer](https://www.anthropic.com/news/claude-opus-4-7)
- [Anthropic prompt caching docs — cache minimums, 4-slot ceiling](https://platform.claude.com/docs/en/build-with-claude/prompt-caching)
- [Anthropic models overview — Extended thinking removal](https://platform.claude.com/docs/en/about-claude/models/overview)
- [Anthropic rate limits docs — pooled Opus limit](https://platform.claude.com/docs/en/api/rate-limits)
- [claude-code GitHub issue #50235 — code identifier hallucinations](https://github.com/anthropics/claude-code/issues/50235)
- [Zvi Mowshowitz Opus 4.7 Part 2 — argumentative behavior](https://thezvi.substack.com/p/opus-47-part-2-capabilities-and-reactions)
- [Zvi Mowshowitz Opus 4.7 Part 1 — refusal rate 0.28%](https://thezvi.substack.com/p/opus-47-part-1-the-model-card)
- [Finout — tokenizer inflation](https://www.finout.io/blog/claude-opus-4.7-pricing-the-real-cost-story-behind-the-unchanged-price-tag)
- [Digital Applied — xhigh TTFT](https://www.digitalapplied.com/blog/ai-model-latency-benchmarks-2026-ttft-throughput)
