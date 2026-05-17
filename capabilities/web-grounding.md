---
capability: web-grounding
last_updated: 2026-05-17
models_covered: 13
research_round: 2
verified_by_dealbreaker: true
tags: [web-search, citations, freshness, browsecomp, x-search, google-search, perplexity-index]
---

# Web Grounding — Cross-Model Comparison

Web grounding is the single capability with the widest spread across Tier 1 models: some have it on-by-default and purpose-built; others have zero native support. This document maps where every model falls and gives concrete routing recommendations.

---

## Comparison Table

| Model | Built-in search? | Mechanism | Citation behavior | Freshness | Source quality / domain |
|---|---|---|---|---|---|
| **perplexity/sonar-deep-research** | Yes — always on | Perplexity index, multi-stage fan-out (dozens of searches, hundreds of sources) | Inline numbered citations + machine-readable citation map; citation tokens billed at $2/M | Near-real-time (days–weeks lag) | Niche forums/blogs strong; paywalled academic weak; ~37% citation error rate found in Sonar Pro (analogous risk here) |
| **perplexity/sonar-reasoning-pro** | Yes — always on | Perplexity index; results integrated into `<think>` CoT trace | Numbered citations in answer; evidence co-located with reasoning chain | Near-real-time | Same index as Sonar Pro; unique that search evidence is embedded in reasoning, not just appended |
| **perplexity/sonar-pro** | Yes — always on | Perplexity index | Cited URLs + titles per answer; source control via allow/block lists | Near-real-time | Domain allow/block, custom corpora available; $6–$14/1k requests search fee; citation-token charges dropped (as of 2026) |
| **google/gemini-3-1-pro** | Yes — native | Google Search + Google Maps grounding; activates at inference time, zero caller orchestration | Inline citations; Maps results integrated into context stream | Near-real-time (Google index latency; breaking news may lag hours) | Broadest general-web coverage; Maps grounding unique across all frontier models; no confirmed domain-filter control |
| **openai/gpt-5-5** | Partial — tool-based | Web/search tools via Responses API; GPT-5.5 Pro tier: 90.1% BrowseComp (strongest benchmark score) | Citations via tool output; exact format API-surface-dependent | Tool-dependent; base cutoff unknown | Strongest on multi-hop web research synthesis by benchmark; base GPT-5.5 score not separately published (90.1% is Pro tier) |
| **xai/grok-4-20-multi-agent** | Yes — built-in | `web_search` (general) + `x_search` (X/Twitter real-time); parallel dispatch across 4–16 agents | Cited responses from both tools simultaneously | Real-time for X; general web search freshness unspecified | X/Twitter is primary unique corpus — no cross-family peer has first-party X retrieval; parallel multi-agent amplifies coverage |
| **xai/grok-4-3** | Yes — built-in | `X_SEARCH` (first-party X/Twitter) + general xAI search | Post-level X attribution via X URLs | X: real-time; static training: Nov 2024 (use X_SEARCH for post-cutoff verification) | Sole cross-provider model with native X retrieval; social signal corpus unavailable from any competitor |
| **anthropic/claude-opus-4-7** | No — operator tool | `web_search` + `web_fetch` tools; operator must include in tools array | Inline citations when search tool active | Fetch-time freshness; training cutoff Jan 2026 | BrowseComp 79.3% (vs. GPT-5.5 Pro 90.1% — 10.8pp gap); enabling search busts system + messages prompt cache |
| **anthropic/claude-sonnet-4-6** | No — operator tool | `web_search_tool`; must be explicitly enabled by API caller | Cited results inline when enabled | Bounded by operator search trigger; training cutoff Aug 2025 | Same architecture as Opus; enabling search breaks prompt cache |
| **anthropic/claude-haiku-4-5** | No — operator tool | Standard tool-use pattern; no Haiku-specific grounding confirmed | Not documented | Training cutoff Feb 2025 (inferred); external tool required for freshness | Lowest confidence — no R2 grounding benchmark; treat as unknown until tested |
| **google/gemini-3-flash** | Possible — unconfirmed | Gemini Extensions (Search listed as integration) | Not confirmed | Training cutoff Jan 2025; extension may extend | R2 profile does not confirm grounding behavior for `gemini-3-flash-preview`; test before relying on |
| **openai/gpt-5-4** | Unknown | Not documented | Unknown | Training cutoff unknown | Insufficient first-party data; do not assume always-on search |
| **openai/gpt-5-3-chat-latest** | No | No built-in search; caller must supply fetch/search tools via function calling | No built-in attribution | Training cutoff Aug 31, 2025; hallucination risk on post-cutoff queries without tools | High hallucination risk on post-cutoff facts without tooling; Gemini 3.1 Pro structurally superior for live-web workflows |

---

## Tiered Ranking

### Tier S — Purpose-built, always-on grounding (no caller config required)

**Perplexity Sonar family (all 3 variants)** — web grounding is the product, not a feature. Every call queries the index by default. No RAG pipeline, no embedding infrastructure, no operator flag. Citation URL output is baked in. The only frontier models where you can call the API and assume grounding happens without writing a single line of tool orchestration.

- **sonar-deep-research**: maximum depth (dozens of searches, hundreds of sources per query). Use when thoroughness matters more than latency or cost. Known citation reliability risk (~37% Sonar Pro error rate in CJR study; SDR uses same stack).
- **sonar-reasoning-pro**: unique property — web evidence is embedded inside the `<think>` CoT trace, co-located with reasoning. Best when you need grounded reasoning, not just grounded answers.
- **sonar-pro**: best speed/depth/cost balance for citation-backed factual lookups. Domain allow/block and custom corpora via API params.

### Tier A — Native grounding, architectural advantage, zero orchestration overhead

**google/gemini-3-1-pro** — closest non-Perplexity peer. Google Search grounding activates at inference time without a separate tool-call round-trip. This eliminates latency and schema overhead that tool-based models incur. **Only model with native Google Maps grounding** — geographic/spatial tasks have no equivalent across the 13 models. Known limitation: source-mapping hallucination when grounded retrieval conflicts with training weights.

### Tier B — Unique corpus, real-time social signal

**xai/grok-4-3 / grok-4-20-multi-agent** — the X/Twitter differentiator is real and exclusive. No other Tier 1 model (Claude, GPT, Gemini, Perplexity) has first-party X retrieval. For tasks where X discourse, trending topics, or live social signals are the primary corpus, Grok is the only option. Grok 4.20 Multi-Agent adds parallel `web_search` + `x_search` across multiple agents in one call. Limitation: base training cutoff is Nov 2024 (~18 months stale by mid-2026) — always use X_SEARCH for post-cutoff verification.

### Tier C — Benchmark-strong, tool-orchestration required

**openai/gpt-5-5 (Pro)** — strongest published grounding benchmark (BrowseComp Pro: 90.1%). However: this is the Pro tier score, not base GPT-5.5; web search comes through the Responses API (tool, not native); and no always-on option exists for standard API callers. The benchmark lead is real and meaningful for deep multi-hop web research, but the caller pays orchestration complexity and the Pro tier premium.

### Tier D — Tool-based, caller-configured, cache penalty

**Anthropic family (Opus 4.7, Sonnet 4.6, Haiku 4.5)** — web grounding is available but structurally weaker position: operator must include tool in the tools array, enabling it breaks the system prompt and messages prompt cache (non-trivial cost in long sessions), and BrowseComp shows a 10.8pp gap vs. GPT-5.5 Pro for Opus. Sonnet and Haiku have even less documentation. Use for single-URL fetch tasks; route multi-hop deep web research elsewhere.

### Tier E — No grounding or unconfirmed

**openai/gpt-5-3-chat-latest** — confirmed no built-in search; caller must supply tools; high hallucination risk on post-Aug-2025 facts without tooling.

**openai/gpt-5-4** — unknown; no first-party documentation in research materials.

**google/gemini-3-flash** — search may be available via Gemini Extensions but is unconfirmed for this specific model version; treat as unknown until tested.

---

## Routing Recommendations

| Task | Route to | Reason |
|---|---|---|
| Deep multi-source research report (10+ sources) | perplexity/sonar-deep-research | Maximum search fan-out; rich citation map; built for this |
| Fast factual Q&A with citations | perplexity/sonar-pro | Zero-config, always-on, citation-included; lowest latency among Perplexity tier |
| Grounded reasoning where chain of thought matters | perplexity/sonar-reasoning-pro | Only model that embeds search evidence inside `<think>` trace |
| Real-time news / current events (general web) | google/gemini-3-1-pro | Native Google Search at inference, no orchestration; broadest coverage |
| Geographic / location-based research | google/gemini-3-1-pro | Only model with native Google Maps grounding |
| X/Twitter discourse, social trends, live engagement data | xai/grok-4-3 or grok-4-20-multi-agent | Sole cross-provider models with first-party X retrieval |
| Multi-hop deep web research, maximum benchmark performance | openai/gpt-5-5 Pro | BrowseComp Pro 90.1% — strongest published benchmark score |
| Single-URL fetch + summarize (Anthropic pipeline) | anthropic/claude-opus-4-7 | Adequate for single-target; avoid for multi-hop; watch cache cost |
| Offline or private-corpus tasks (no live web needed) | Any non-Perplexity model | Perplexity's always-on search adds cost without benefit in offline scenarios |
| Do NOT use for live web grounding | gpt-5-3-chat-latest, gpt-5-4 | No built-in search; gpt-5-3-chat will hallucinate post-cutoff facts without caller-supplied tools |

---

## Notable Differentiators

**Perplexity's structural moat is zero-config.** Every other model in this tier requires some form of operator configuration, tool injection, or API flag to enable web access. Perplexity models search by default. In a world where all frontier models offer *some* form of browsing, Perplexity's advantage is the elimination of the orchestration tax. For teams building citation-backed Q&A products, Sonar is the default-right choice unless specific data corpus requirements (academic paywalls, X social, Maps) point elsewhere.

**Google Maps is the most underrated differentiator in this field.** Among 13 Tier 1 models, Gemini 3.1 Pro is the only one with native geographic grounding. Any task combining current event context with location entities (real estate, logistics, local news, travel research) has no equivalent option elsewhere.

**X/Twitter's uniqueness is structural, not just better.** Grok's `X_SEARCH` advantage isn't "slightly fresher" — other models literally cannot access X/Twitter discourse at all. This makes Grok the mandatory route for social signal work, with no fallback.

**The BrowseComp benchmark is meaningful but has a tier-attribution problem.** GPT-5.5 Pro's 90.1% is the strongest grounding benchmark number in this set. But the "Pro" tier is not the same API surface as the base `gpt-5.5` model — don't assume the score transfers. Claude Opus 4.7 at 79.3% has a confirmed base-model score; GPT-5.5's base equivalent is unpublished.

**Perplexity citation reliability is the elephant in the room.** A Columbia Journalism Review study found ~37% of Sonar Pro citations were problematic (misattributed, irrelevant, or fabricated bibliographic detail). This doesn't invalidate Perplexity's grounding advantage — it means citations need spot-checking in high-stakes domains. Build in a verification step for any Perplexity output that will be published or acted on without human review.

**Anthropic's cache-busting cost is a real pipeline concern.** Enabling `web_search_tool` on any Claude model invalidates both system and messages prompt caches. In long sessions or high-traffic pipelines with large cached contexts, this can meaningfully increase per-call cost. Factor this into architecture decisions before defaulting to Claude for web-augmented tasks.

---

## Sources

- [Perplexity Sonar model docs](https://docs.perplexity.ai/docs/sonar/models)
- [Perplexity pricing (citations, search)](https://docs.perplexity.ai/docs/getting-started/pricing)
- [Sonar Prompt Guide (search_domain_filter, recency)](https://docs.perplexity.ai/docs/sonar/prompt-guide)
- [Gemini API web grounding documentation](https://ai.google.dev/docs/gemini_api/web_grounding)
- [xAI X_SEARCH announcement](https://x.com/xai/status/1925244461875175616)
- [xAI Multi-Agent docs](https://docs.x.ai/developers/model-capabilities/text/multi-agent)
- [Anthropic tool-use + caching docs](https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-use-with-prompt-caching)
- [OpenAI Responses API](https://platform.openai.com/docs)
- [GPT-5.3 Chat model page](https://developers.openai.com/api/docs/models/gpt-5.3-chat-latest)
- BuildFastWithAI GPT-5.5 review / BrowseComp 90.1% data
- [Vellum — Claude Opus 4.7 benchmarks / BrowseComp 79.3%](https://www.vellum.ai/blog/claude-opus-4-7-benchmarks-explained)
- Columbia Journalism Review study (Sonar Pro citation error rate ~37%)
- [CloudZero 2026 Perplexity pricing breakdown](https://www.cloudzero.com)
- council-os model chunks: 13x `12-web-grounding.md` (research round 2, dealbreaker-verified)
