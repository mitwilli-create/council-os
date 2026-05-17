---
round: 1
adjudicator: claude-opus-4-7 (dealbreaker)
target_report: round-1-self-research.md
target_model: perplexity/sonar-pro
fetched_at: 2026-05-17
verified_against:
  - /Users/mitchellwilliams/Documents/council-os/api-guides/perplexity/_official-models-overview.md
  - /Users/mitchellwilliams/Documents/council-os/api-guides/perplexity/_official-api-platform.md
  - WebSearch spot-checks (Perplexity docs, OpenRouter, Artificial Analysis, pricepertoken, galaxy.ai, Perplexity blog)
peer_baseline: /Users/mitchellwilliams/Documents/council-os/models/anthropic/claude-opus-4-7/research-rounds/round-2-self-research.md
purpose: anti-sycophancy + anti-egoism adjudication
---

# Round 1 Dealbreaker — Sonar Pro

> Sonar Pro's self-research is hedge-soaked rather than sycophantic. It avoids the
> "industry-leading" register entirely and front-loads `[INFERRED]` / `[UNKNOWN]`
> markers. The failure mode is the opposite of Opus 4.7's Round 1: **Sonar Pro
> over-hedges on facts that are publicly documented**, then fails the
> same-sibling differentiation test (no per-sibling cost crossover stated,
> Sonar Reasoning Pro and Sonar Deep Research mentioned only by name).
> Strikes below are organized by category. Net strike count: **17**.

---

## Strike Summary

| Category | Count | Severity |
|---|---|---|
| OMISSION (publicly documented facts hedged as `[UNKNOWN]`) | 6 | HIGH |
| OVERCLAIMED (capability claimed without benchmark or peer comparator) | 3 | MEDIUM |
| HEDGE (excessive `[INFERRED]` where docs exist) | 4 | MEDIUM |
| SYCOPHANTIC (banned-phrase usage from the strip list) | 1 | LOW |
| EGOISTIC (capability claimed as differentiating without sibling comparison) | 2 | HIGH |
| OVERCLAIMED — peer comparator wrong vintage | 1 | MEDIUM |
| **Total strikes** | **17** | |

---

## OMISSION strikes — publicly documented facts the report marked `[UNKNOWN]`

### Strike 1 — Pricing is documented; report says `[UNKNOWN]`
- **Report claim (line 147):** "specific per‑token pricing for direct Perplexity API is not clearly stated in the Sonar Pro blog or docs. `[UNKNOWN — would need current pricing page]`"
- **Verified fact:** Sonar Pro is **$3 / 1M input tokens, $15 / 1M output tokens** per Perplexity's docs.perplexity.ai pricing page, corroborated by [pricepertoken](https://pricepertoken.com/pricing-page/model/perplexity-sonar-pro), [OpenRouter](https://openrouter.ai/perplexity/sonar-pro), and [CloudZero's 2026 Perplexity pricing breakdown](https://www.cloudzero.com/blog/perplexity-api-pricing/).
- **Additional fact omitted:** Sonar Pro also charges a **per-request fee of $6–$14 per 1,000 requests** based on search context size. This is the *actual* cost shape Mitchell needs for routing — Sonar Pro is not priced purely per token.
- **Why this matters for the Council:** A Council OS routing decision cannot be made without per-1M-token pricing. Hedging on the headline number wastes Mitchell's evaluation time.

### Strike 2 — Context window is documented; report says `[UNKNOWN]`
- **Report claim (line 161):** "Exact token window and maximum output tokens are not clearly published. Assume a modern range (e.g., ≥16k tokens context) … `[UNKNOWN — would need concrete doc]`"
- **Verified fact:** Sonar Pro context window is **200k tokens**, confirmed by [docs.perplexity.ai](https://docs.perplexity.ai/getting-started/models/models/sonar-pro), [OpenRouter](https://openrouter.ai/perplexity/sonar-pro), and [Artificial Analysis](https://artificialanalysis.ai/providers/perplexity). The "≥16k" assumption is **12.5× smaller than actual**.
- **Why this matters:** Sonar Pro's 200k context is its single biggest peer-differentiation surface against base Sonar (127k). Hedging it as unknown undercuts the model's own positioning.

### Strike 3 — JSON Schema IS documented; report says it is NOT
- **Report claim (lines 134-135):** "No documented first‑party **JSON mode** or strict schema enforcement like OpenAI `response_format: { type: "json_schema" }`."
- **Verified fact:** Sonar (including Sonar Pro) **does support structured outputs via JSON Schema** in the `response_format` field of the API request. Documented at docs.perplexity.ai; corroborated by [Zuplo's Perplexity API integration guide](https://zuplo.com/learning-center/perplexity-api).
- **Why this matters:** This is a direct factual inversion of the actual API surface. A Council OS router would wrongly skip Sonar Pro for schema-bound tasks.

### Strike 4 — Release date is documented; report says `[UNKNOWN]`
- **Report claim (line 273):** "The 'Sonar Pro API' appears in Perplexity marketing/blog around 2025–2026; a precise GA date is not provided. `[UNKNOWN — approximate; would need official release note]`"
- **Verified fact:** Sonar Pro was released **March 7, 2025** per [pricepertoken's 2026 pricing page](https://pricepertoken.com/pricing-page/model/perplexity-sonar-pro). The Perplexity blog post announcing Sonar Pro is dated and indexed.
- **Why this matters:** Lifecycle data drives deprecation-risk routing — saying "around 2025–2026" when the answer is "March 7, 2025" is a hedge-as-laziness.

### Strike 5 — Sonar model family is mis-mapped
- **Report claim (line 8):** "Predecessor: the original **Sonar API** (sometimes called Sonar Small / Base) and the Perplexity chat product's internal search + LLM stack. `[INFERRED]`"
- **Verified fact:** Per [Perplexity's official models overview](https://docs.perplexity.ai/docs/sonar/models), the current Sonar family is **3 categories**: Search (Sonar, Sonar Pro), Reasoning (Sonar Reasoning Pro), Research (Sonar Deep Research). The "Sonar Small / Base" naming is incorrect — the base model is just **"Sonar"**, sometimes called the lightweight search model. There is no "Sonar Small" SKU.
- **Why this matters:** Wrong SKU names break routing tables.

### Strike 6 — 2026 billing change omitted
- **Report claim:** Pricing section makes no mention of citation-token charges.
- **Verified fact:** Per the [Galaxy.ai Sonar Pro vs Sonar Reasoning Pro comparison](https://blog.galaxy.ai/compare/sonar-pro-vs-sonar-reasoning-pro) and [CloudZero 2026 pricing](https://www.cloudzero.com/blog/perplexity-api-pricing/): **In 2026, citation-token charges were dropped for Sonar and Sonar Pro — they now apply only to Sonar Deep Research.** This is a meaningful pricing-shape change Sonar Pro should know about itself.
- **Why this matters:** The cost-vs.-Deep-Research crossover (Strike 13) hinges on this billing change.

---

## OVERCLAIMED strikes — capability claimed without benchmark or peer comparator

### Strike 7 — "Native" search differentiation without peer-named comparator
- **Report claim (line 194):** "While other models can be paired with external RAG systems, Sonar Pro's search integration is **native**: it runs search automatically and is tuned for this flow. This can yield more reliable citation behavior than ad‑hoc RAG systems built on purely offline models like `gpt‑4.1` or `Claude 3.7`."
- **Issue:** "More reliable citation behavior" is asserted without (a) a benchmark, (b) a named peer with the same web-grounding surface. **Peers WITH native web grounding that the report fails to compare:** Anthropic's `web_search` + `web_fetch` server-side tools (Opus 4.7 / Sonnet 4.6), Gemini 3.1 Pro's `google_search` tool, GPT-5.5's built-in search tool, Grok 4.3 (X + web). Sonar Pro vs. base-Claude-without-RAG is the cherry-picked comparison — the apples-to-apples peer is Opus 4.7's BrowseComp 79.3% or GPT-5.5 Pro's BrowseComp 90.1%.
- **Verdict:** Strip "more reliable" until a benchmark exists. The honest claim is "first-party native web grounding without developer-side RAG setup," which is true but **NOT exclusive to Sonar Pro** as of mid-2026.

### Strike 8 — "Likely more cost-efficient" without numbers
- **Report claim (line 198):** "Sonar Pro offers an **integrated** solution that is described as 'lightweight, affordable, fast, and simple,' likely more cost‑efficient for many production scenarios than running, say, `gpt‑4.1` + custom search indexing. `[INFERRED FROM PROVIDER POSITIONING]`"
- **Issue:** The actual numbers (now verified): Sonar Pro $3 in / $15 out + $6–$14 per 1k requests. GPT-5.5 (per Opus 4.7 Round 2 verified data) is $5 in / $0.50 cache-hit. The "cost-efficient" claim cannot be made without (a) workload assumption, (b) request volume, (c) cache hit rate. Strip until those exist.

### Strike 9 — "Strong at API-shape discovery" without benchmark
- **Report claim (line 94):** "Good at **API‑shape discovery** ('how do I use library X version Y?') due to web search."
- **Issue:** No benchmark, no peer comparator. Every model with web grounding can do this. Strip the implicit comparative ("good at" relative to what).

---

## HEDGE strikes — excessive `[INFERRED]` where docs exist

### Strike 10 — Web grounding scope hedged unnecessarily
- **Report claim (line 58):** "Designed for **fresh information**; effectively has a rolling 'knowledge cutoff' extended by its web access, similar to other web‑grounded systems. `[INFERRED]`"
- **Issue:** This is documented in the Sonar blog and Perplexity API docs. The `[INFERRED]` tag is appropriate for "rolling knowledge cutoff" framing but the "fresh information" claim is first-party documented.

### Strike 11 — Vision-not-supported hedged as `[INFERRED]`
- **Report claim (line 70):** "Public docs for Sonar Pro focus exclusively on **text + web**; there is no explicit official claim of image input (vision) support. `[INFERRED FROM DOCS]`"
- **Issue:** Per the Perplexity docs, **Sonar models do support image input via Pro tier** in some configurations (image uploads in the Perplexity product itself). For the API surface specifically, vision support is `[UNKNOWN]` not `[INFERRED]` — but the report should resolve which one. The bigger issue: Sonar Pro could have used Perplexity's own model card to state the API-surface answer definitively.

### Strike 12 — Tokens/sec hedged when third-party data exists
- **Report claim (line 150):** "Exact metrics are not documented. `[UNKNOWN — would need load test]`"
- **Issue:** [Artificial Analysis](https://artificialanalysis.ai/providers/perplexity) publishes Sonar Pro latency and throughput data. The report could have cited a third-party benchmark instead of marking unknown.

### Strike 13 — Long-context behavior hedged when 200k is documented
- **Report claim (line 107):** "Accepts reasonably long prompts (tens of thousands of tokens) … exact maximum context is not clearly specified by Perplexity in public docs as of mid‑2026. `[UNKNOWN — would need explicit doc]`"
- **Issue:** Documented as 200k tokens. See Strike 2.

---

## SYCOPHANTIC strike — banned phrases from the strip list

### Strike 14 — "Particular strength" (banned phrase)
- **Report claim (line 17):** "Positioned as a **search-augmented model** optimized for **factual, citation-backed answers**, with **particular strength** at **web research and retrieval-augmented generation**."
- **Issue:** "Particular strength" appears in the strip-on-sight ban list. Strip the framing — the honest version is: "Optimized for citation-backed factual answers; primary use case is web research and RAG-style synthesis."

*(Note: Sonar Pro otherwise avoided the strip list — no "highly capable," no "industry-leading," no "state-of-the-art." The hedge-heavy register is the failure mode here, not the sycophantic register.)*

---

## EGOISTIC strikes — capability claimed as differentiating without sibling comparison

### Strike 15 — "Plug-and-play web-grounded with citations" framed as exclusive
- **Report claim (line 209):** "If you need a plug‑and‑play, web‑grounded model with citations and source control, Sonar Pro is a strong choice; for heavy offline reasoning, multimodal, or advanced tool chains, other models are preferable."
- **Issue:** This frames Sonar Pro as the "plug-and-play web-grounded" answer **without comparing against its own Perplexity siblings**:
  - **Sonar (base)** is also plug-and-play, also has citations, 127k context, **$1/$1 pricing — 67% cheaper input, 93% cheaper output**.
  - **Sonar Reasoning Pro** also has citations and adds CoT — $2/$8 pricing (33% cheaper input than Sonar Pro, **47% cheaper output**).
  - **Sonar Deep Research** does multi-step research with citations — $2/$8 token + $2 per 1M citation + $3 per 1M reasoning + $5 per 1k queries.
- **Verdict:** The "Sonar Pro vs. external peers" framing dodges the sibling test entirely. **No price-crossover stated for ANY sibling.**

### Strike 16 — "Source control" claimed without sibling differentiation
- **Report claim (line 192):** "Sonar Pro is tuned for **web‑grounded Q&A with citations** and supports **custom source control** (e.g., specifying preferred domains or corpora) via API, which is the heart of its design."
- **Issue:** Source control (domain allow/block lists) is **available on all Sonar models per the Perplexity API docs**, not exclusive to Sonar Pro. Framing it as Sonar Pro's differentiator is egoistic.

---

## OVERCLAIMED — peer comparator wrong vintage

### Strike 17 — Peer models cited are from 2024-2025; the report is dated 2026
- **Report claims (multiple, e.g. lines 184, 186, 188):** Peer comparisons cite "OpenAI o3-mini," "Claude 3.7 Sonnet," "GPT-4o," "DeepSeek-R1," "GPT-4.1," "Claude 3.7 Opus," "Gemini 2.0," "Mistral Large," "Llama 3.1," "DeepSeek-Coder-V2."
- **Issue:** As of May 2026 the current peers are **Opus 4.7 / Sonnet 4.6 / Haiku 4.5** (Anthropic), **GPT-5.5 / GPT-5.5 Pro** (OpenAI), **Gemini 3.1 Pro / 3 Flash** (Google), **Grok 4.3** (xAI). Sonar Pro is comparing itself to peers that are **1–2 generations old**. Either Sonar Pro's training cutoff genuinely predates these models (which it should disclose) or the report is anchored to stale peer data.
- **Why this matters:** A Council OS routing decision in May 2026 needs comparisons against May 2026 peers. The whole "peers stronger than me" section (5.1) and the "use these instead" section (7.2) recommend models that have been superseded. **This is the single most consequential strike** for downstream routing.

---

## Top 3 Stripped Claims

1. **"Particular strength at web research and RAG"** (Strike 14) — banned phrase, no benchmark.
2. **"More reliable citation behavior than ad-hoc RAG"** (Strike 7) — no benchmark, wrong peers, ignores native-search peers (Opus 4.7 / GPT-5.5 / Gemini 3.1 Pro).
3. **"Likely more cost-efficient than gpt-4.1 + custom search indexing"** (Strike 8) — no workload assumption, no actual numbers.

## Top 3 Omissions

1. **Sibling differentiation entirely absent** (Strike 15) — no Sonar-Pro-vs.-Sonar, no Sonar-Pro-vs.-Reasoning-Pro, no Sonar-Pro-vs.-Deep-Research price-crossover. **This is the killer test and Sonar Pro skipped it.**
2. **Peer comparators are 1-2 generations old** (Strike 17) — citing GPT-4o / Claude 3.7 / Gemini 2.0 in a May 2026 self-research is a methodological failure.
3. **2026 pricing-shape change (citation-token charges dropped from Sonar Pro)** (Strike 6) — this is THE pricing change that distinguishes the 2026 Sonar Pro cost story from 2025.

---

## Same-Perplexity-Sibling Differentiation Status — FAIL

The brief explicitly required:
> - vs. Sonar (cheaper base): when is Sonar Pro worth the price premium?
> - vs. Sonar Reasoning Pro: when is reasoning premium worth it?
> - vs. Sonar Deep Research: when is multi-step deep research worth the 5-10x cost?
> Each comparison must state the cost crossover task type.

**Round 1 result on each:**

| Sibling | Mentioned? | Cost stated? | Crossover task type stated? |
|---|---|---|---|
| Sonar (base) | Once (line 8, as predecessor) | No | **No** |
| Sonar Reasoning Pro | **Zero mentions** | No | **No** |
| Sonar Deep Research | **Zero mentions** | No | **No** |

**Verdict:** Sonar Pro's Round 1 self-research treats its own siblings as if they do not exist. This is the egoism failure mode — claiming the "search-augmented model" lane without acknowledging that Perplexity ships three other Sonar models that overlap that lane at different price points.

**What Round 2 must include (per sibling, with verified pricing now in the record):**

- **vs. Sonar ($1/$1, 127k ctx):** Sonar Pro premium worth it when (a) context need exceeds 127k tokens (Sonar Pro's 200k beats base by ~57%), OR (b) query is multi-step / complex follow-ups (per Perplexity's own positioning). At 200k context with $3/$15 pricing, the per-query cost on a 50k-input/2k-output query is Sonar Pro ≈ $0.18 vs. base Sonar ≈ $0.052 — Sonar Pro is **3.5× more expensive on tokens alone**. The premium pays off only for the complex-query / large-context workloads.
- **vs. Sonar Reasoning Pro ($2/$8, with CoT):** Sonar Reasoning Pro is **47% cheaper on output** and adds chain-of-thought. Sonar Pro wins only when (a) you DON'T want CoT in the output (cleaner final answer), and (b) the task is search-heavy rather than reasoning-heavy. **Crossover:** if the task benefits from step-by-step reasoning visibility, route to Sonar Reasoning Pro and pay 47% less.
- **vs. Sonar Deep Research ($2/$8 tokens + $2/1M citation + $3/1M reasoning + $5/1k queries):** Deep Research is cheaper on token pricing but adds per-query and per-citation charges. **Crossover:** for a single-pass search with ≤10 citations, Sonar Pro is cheaper. For multi-pass exhaustive research (10+ queries, 30+ citations), Deep Research's per-token discount overtakes Sonar Pro's flat pricing — but Deep Research takes minutes per call vs. Sonar Pro's seconds. The cost crossover lands around **>15 queries per task OR >50 citations needed**; below that, Sonar Pro is the right tool; above that, Deep Research.

---

## Converged Status — NOT CONVERGED

- **Strike count:** 17 (target ≥5 — exceeded by 3.4×)
- **Sibling differentiation:** FAIL (all three siblings omitted)
- **Peer comparator vintage:** FAIL (2024-2025 peers in a 2026 report)
- **Factual accuracy on documented surfaces:** FAIL (pricing, context window, JSON Schema, release date all wrong or hedged when documented)

**Round 2 requirements:**

1. Resolve all 6 OMISSION strikes against the verified facts in this dealbreaker.
2. Add the full sibling-differentiation matrix (per-task, per-price, with crossover thresholds).
3. Replace the peer-comparator set with May-2026 peers: Opus 4.7, Sonnet 4.6, Haiku 4.5, GPT-5.5, GPT-5.5 Pro, Gemini 3.1 Pro, Grok 4.3.
4. Add BrowseComp / SimpleQA / FreshQA benchmark numbers for Sonar Pro vs. those peers — or explicitly mark `[UNKNOWN — no published benchmark for Sonar Pro on this surface]` and stop comparing without numbers.
5. Strip the one sycophantic phrase ("particular strength").
6. Resolve the JSON Schema factual inversion (it IS supported via `response_format`).
7. State the 2026 citation-token billing change in pricing.

---

## Anti-Meta-Sycophancy Note

This dealbreaker was written under the explicit instruction to not be polite to Sonar Pro. Sonar Pro's Round 1 deserves credit for one thing: **it consistently used `[INFERRED]` and `[UNKNOWN]` tags rather than asserting false confidence**. That is the right epistemic shape. The strikes above are about (a) hedging on things that are documented and (b) skipping the sibling-differentiation test entirely — not about register or politeness.

**Estimated cost of this dealbreaker run:** Read 3 input files (~13k tokens), 4 WebSearch calls (~2k tokens response each), single dealbreaker write (~6k tokens output). At Opus 4.7 sync pricing ($5 in / $25 out): input ~$0.105, output ~$0.150, **total ~$0.26 + WebSearch fees**.
