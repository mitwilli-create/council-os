---
capability: long-context
generated: 2026-05-17
source_chunks: 16-long-context.md + 26-context-window.md (all 13 Tier 1 models)
verified_by_dealbreaker: partial (11/13 — sonar-deep-research 16-long-context unverified by dealbreaker; grok-4-20-multi-agent 26-context-window chunk absent)
---

# Long Context — Cross-Model Comparison

## Comparison Table

| Model | Input Context | Output Cap | Tokenizer Note | Published Recall Benchmarks | Known Degradation Patterns |
|---|---|---|---|---|---|
| anthropic/claude-opus-4-7 | 1M tokens (~555k words) | 128k sync / 300k Batch API (beta) | New tokenizer — 1M tokens = ~555k words, ~35% fewer words than Sonnet 4.6 at same budget | None published by Anthropic at full 1M | Effective word capacity lower than Sonnet 4.6 despite identical nominal window; 4,096-token minimum cache prefix (silent miss below threshold) |
| anthropic/claude-sonnet-4-6 | 1M tokens (~750k words) | 64k sync / 300k Batch API (beta) | Older tokenizer — 1M tokens = ~750k words (~195k more than Opus 4.7 at same nominal budget) | None published at full 1M; community reports of recall drift at 600k+ | Deep-in-context coherence at 600k–1M unverified; 64k sync output cap (half Opus 4.7's 128k) |
| anthropic/claude-haiku-4-5 | 200k tokens | ~8k–32k (family standard; unverified for Haiku 4.5 specifically) | Standard tokenizer; no Haiku-specific note | Not benchmarked for Haiku 4.5 | Cache TTL 5 min default; 200k cap hard-blocks tasks above that threshold |
| openai/gpt-5-5 | 1,050,000 tokens | 128k | Not documented | None published; recency/repetition bias noted | Long-context recall degrades at length; figure from Dealbreaker summary, not live OpenAI spec page |
| openai/gpt-5-4 | 400k input / 128k output | 128k | Not documented | Not published | Session context bloat before hard limit — use `/responses/compact` proactively; 400k/128k inferred from siblings, not base spec page |
| openai/gpt-5-3-chat-latest | 128k | 16,384 tokens | Not documented | Not benchmarked | Smallest output cap in OpenAI Tier 1 lineup; migrating from chat-latest silently drops 272k tokens of context |
| google/gemini-3-1-pro | 1,048,576 tokens (~1M) | 64k | Not documented | NIAH: documented "high" at full 1M; no decay curve published | Pricing doubles above 200k input tokens ($2→$4 input, $12→$18 output); video frame extraction at fixed fps loses high-motion nuance |
| google/gemini-3-flash | 1,048,576 tokens (~1M) | 65,536 tokens | Not documented | NIAH: near-perfect across full 1M | SDK default `maxOutputTokens` is 8,192 — silently truncates; must be explicitly set to 65,536; TTFT increases significantly at 1M |
| xai/grok-4-3 | 1M tokens | Unknown | Not documented | None published; recall beyond 500k unbenchmarked | Output cap undocumented; recall degradation pattern beyond 500k unknown |
| xai/grok-4-20-multi-agent | 2M tokens | Up to 2M tokens per response | Not documented | None published | `max_tokens` parameter not supported; synthesis inconsistency increases with many agents over long contexts; November 2024 knowledge cutoff makes tool-off long-context tasks ~18 months stale |
| perplexity/sonar-pro | 200k tokens | Not explicitly documented (bounded by provider limits) | Not documented | None published | Recall quality for details early in long prompts may degrade; no NIAH benchmark published |
| perplexity/sonar-deep-research | 128k tokens | No hard cap documented; practical soft limit ~2,000–3,000 tokens | Not documented | None published | Silent output truncation at ~2k–3k tokens with `finish_reason: stop` (no error); prompt + planning + citation + reasoning all compete from same 128k budget |
| perplexity/sonar-reasoning-pro | 128k tokens | Not explicitly documented | Not documented | None published | `<think>` tokens (12k–23k on hard tasks) consume the same 128k budget; effective input capacity ~105k–116k on complex calls |

---

## Tiered Ranking

### Top — 1M+ context

**1. xai/grok-4-20-multi-agent — 2M tokens** — Only model in the Council OS lineup to exceed 1M. Supports up to 2M tokens output per response, enabling book-length synthesis in a single pass. Significant caveats: recall quality at 2M is unverified, `max_tokens` is not supported, and the November 2024 knowledge cutoff means tool-off tasks are ~18 months stale. Best for orchestrated parallel ingestion of book-length corpora where freshness is not required.

**2. google/gemini-3-1-pro — 1,048,576 tokens** — The strongest documented recall at full 1M ("high" NIAH), the only model accepting native audio (8.4 hrs) and video (1 hr) within the context window, and competitive pricing at ≤200k tokens ($2/MTok input). Hard cost cliff above 200k tokens. Best 1M-context choice when multimodal streams or verified long-context recall matter.

**3. google/gemini-3-flash — 1,048,576 tokens** — Same nominal 1M as Gemini 3.1 Pro with near-perfect NIAH recall at a fraction of the cost. Silent SDK truncation at 8,192 output tokens requires explicit override. Best value 1M-context routing target when Pro-tier accuracy is not required.

**4. openai/gpt-5-5 — 1,050,000 tokens** — Documented 1M+ window with 128k output cap matching Opus 4.7. No published NIAH or recall benchmarks. Figure sourced from Dealbreaker summary, not a live OpenAI spec page — treat as verified-but-unconfirmed. Strong choice within OpenAI-native toolchains when full context is needed.

**5. anthropic/claude-opus-4-7 — 1M tokens (~555k words effective)** — Nominally 1M but the new tokenizer yields only ~555k effective words — 35% less text than Sonnet 4.6 at the same token budget. Best Anthropic routing target when reasoning depth at codebase scale (100–150k tokens) is the primary requirement and output above 64k is needed.

**6. anthropic/claude-sonnet-4-6 — 1M tokens (~750k words effective)** — Counterintuitively the better Anthropic long-context model for text-heavy corpora above 550k words: older tokenizer packs 750k words vs. Opus 4.7's 555k, at 40% lower cost. 64k sync output cap is the one structural limit vs. Opus 4.7. Best Anthropic routing target for very-long document ingestion where output fits in 64k tokens.

**7. xai/grok-4-3 — 1M tokens** — Confirmed via Sim.ai and Vercel AI Gateway. No published recall benchmarks; output cap undocumented. Not a routing differentiator over Gemini or Opus on context window alone — route to Grok 4.3 for other reasons (X data access, price) not for long-context advantage.

### Mid — 200k–500k context

**8. openai/gpt-5-4 — 400k tokens** — Largest OpenAI window in the Tier 1 set below GPT-5.5. 128k output cap. Session context bloat requires explicit use of `/responses/compact` before hard limit is reached. Best within OpenAI family for large multi-document synthesis where GPT-5.5 pricing is prohibitive.

**9. perplexity/sonar-pro — 200k tokens** — Highest context window in the Perplexity family; 73k more than base Sonar (127k). Unique in combining 200k ingestion with live web retrieval in a single call. No output cap documented; no NIAH benchmark published. Best Perplexity routing target for context-heavy queries that also need fresh web data.

**10. anthropic/claude-haiku-4-5 — 200k tokens** — Hard limit at 200k; 5× smaller than the Sonnet/Opus 1M window. Primary long-context value is economic: $0.10/MTok prompt cache read makes large shared-context workflows cheapest in the Claude family. Cannot substitute for Sonnet 4.6 or Opus 4.7 on tasks exceeding 200k tokens.

### Bottom — <200k context

**11. openai/gpt-5-3-chat-latest — 128k tokens** — Smallest context window in the OpenAI Tier 1 set. Output capped at 16,384 tokens — the tightest output ceiling across all 13 models. Callers migrating from `chat-latest` (400k/128k) silently lose 272k context without adjustment. Route here only when 128k input and 16k output are sufficient.

**12. perplexity/sonar-reasoning-pro — 128k tokens** — Context is consumed by `<think>` reasoning tokens (12k–23k on hard tasks), leaving effectively 105–116k tokens for input + output. Sonar Pro at the same price offers 200k with no reasoning overhead — use Sonar Reasoning Pro only when the visible chain-of-thought is explicitly needed and corpus fits under ~105k effective tokens.

**13. perplexity/sonar-deep-research — 128k tokens** — Surprising: SDR is Perplexity's most expensive model yet has the smallest usable context. The 128k budget is shared by prompt, internal planning, citation text, reasoning, and output simultaneously. Silent truncation at ~2k–3k output tokens with `finish_reason: stop` is the highest-risk failure mode in the lineup. Not a long-context ingestion model — treat as a "retrieve and synthesize" engine only.

---

## Routing Recommendations

| Task | Best routing |
|---|---|
| Ingest audio/video stream within context | google/gemini-3-1-pro (only model with native audio/video in 1M window) |
| Largest possible single-context window | xai/grok-4-20-multi-agent (2M tokens; recall quality unverified) |
| Best verified recall at 1M tokens | google/gemini-3-1-pro (documented "high" NIAH) or google/gemini-3-flash (near-perfect NIAH, lower cost) |
| Very-long text corpus (550k–750k words), Anthropic stack | anthropic/claude-sonnet-4-6 (750k effective words at 1M tokens; cheaper than Opus 4.7) |
| Long-context with output >64k tokens (sync) | anthropic/claude-opus-4-7 (128k sync output) or openai/gpt-5-5 (128k output) |
| Long-context + live web retrieval | perplexity/sonar-pro (200k + web search in one call) |
| Long-context at lowest cost, Claude family | anthropic/claude-haiku-4-5 (200k cap, $0.10/MTok cache read) — only if task fits under 200k |
| Multi-document synthesis, OpenAI stack | openai/gpt-5-4 (400k input) — use `/responses/compact` proactively |
| Avoid for large-corpus tasks | perplexity/sonar-deep-research (128k shared budget; silent truncation; output soft-capped ~2k–3k tokens) |

---

## Notable Differentiators

### Gemini's multimodal 1M window is structurally unique
Gemini 3.1 Pro (and 3 Flash) accept up to 8.4 hours of audio or 1 hour of video natively within the 1M token context window. No other frontier model in this lineup supports this at the API level. This is not a parity feature — it is a unique architectural capability for long-form meeting transcription, recorded lecture analysis, or video corpus review.

### Grok 4.20 Multi-Agent's 2M window and 2M output are in a class of their own
The only model in Council OS Tier 1 exceeding 1M. 2M output per response is unprecedented across this model set. However, `max_tokens` is not supported, recall quality at 2M is unverified, and the November 2024 knowledge cutoff is a hard constraint for any tool-off task requiring recent information.

### Anthropic sibling crossover: Sonnet 4.6 beats Opus 4.7 for text-heavy long-context
Opus 4.7 and Sonnet 4.6 are both nominally 1M-token models, but the new Opus 4.7 tokenizer is less word-dense: 1M tokens = ~555k words on Opus 4.7 vs. ~750k words on Sonnet 4.6. For corpora above ~550k words, Sonnet 4.6 is the correct Anthropic routing target — and it is 40% cheaper. Only send to Opus 4.7 when output above 64k tokens (sync) is needed. Claude Haiku 4.5 caps at 200k and cannot compete on context depth.

### Grok 4.3 vs. Grok 4.3's output cap: unknown
Grok 4.3 has a confirmed 1M input context but the output cap is undocumented. Do not route production pipelines to Grok 4.3 for long-context tasks where max response length matters until the output cap is confirmed.

### Perplexity's context windows do not scale with price
Sonar Reasoning Pro ($8/MTok output) has a 128k context window — smaller than Sonar Pro ($8/MTok output) at 200k and much smaller than frontier peers at 1M+. Within Perplexity, higher price does not buy more context. Route to Sonar Pro over Sonar Reasoning Pro for any context-heavy task where the reasoning trace is not explicitly needed.

### Sonar Deep Research's silent truncation is the highest operational risk in the lineup
SDR silently terminates output at ~2,000–3,000 tokens with `finish_reason: stop` and no error signal. Integrators must implement detection heuristics (abrupt sentence endings, verify expected sections). This is the most dangerous failure mode across all 13 models for long-context workflows.

### Gemini 3 Flash's SDK default silently truncates outputs
SDK default `maxOutputTokens` is 8,192. Callers MUST set `maxOutputTokens: 65536` explicitly or long responses are silently truncated. This is a silent operational failure, not an obvious API error.

---

## 200-Word Summary

**Biggest context windows:** Grok 4.20 Multi-Agent at 2M tokens stands alone. Gemini 3.1 Pro, Gemini 3 Flash, GPT-5.5, Grok 4.3, Claude Opus 4.7, and Claude Sonnet 4.6 all cluster at nominally 1M tokens.

**Smallest:** GPT-5.3 Chat Latest and Sonar Reasoning Pro at 128k; Sonar Deep Research also 128k with a shared budget that leaves effectively ~105k usable. Haiku 4.5 is 200k — adequate for most tasks but hard-blocked above that.

**Most surprising insight:** Sonnet 4.6 fits more words than Opus 4.7 in the same 1M token budget (~750k words vs. ~555k) due to a tokenizer regression in Opus 4.7. For text-heavy long-context work within Anthropic's stack, the mid-tier sibling is the correct routing choice — not the flagship.

**Anthropic sibling crossover:** All three Anthropic models (Opus 4.7, Sonnet 4.6) share the 1M nominal window. Haiku 4.5 is the outlier at 200k — a 5× step down. Sonnet 4.6 is the long-context workhorse; Opus 4.7 wins only when sync output above 64k is needed.

**Gemini's unique claim:** Only model family with native audio/video ingestion within the 1M context window — 8.4 hours of audio or 1 hour of video, no preprocessing required.
