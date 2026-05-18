---
round: 1
mode: claim-adjudication
adjudicator: dealbreaker (claude-opus-4-7)
target_report: round-1-self-research.md
target_model: perplexity-sonar
target_provider: perplexity
fetched_at: 2026-05-17
peer_reports_consulted:
  - claude-opus-4-7/round-2-self-research.md (Opus 4.7, Council OS standard)
  - sonar-pro/round-2-self-research.md (sibling, already converged)
  - sonar-reasoning-pro/round-2-self-research.md (sibling, already converged)
  - sonar-deep-research/round-2-self-research.md (sibling, already converged)
official_docs_consulted:
  - api-guides/perplexity/_official-models-overview.md
external_evidence:
  - WebSearch: Sonar base pricing $1/$1 + per-request fees ($5/1k low-context, $12/1k high-context); 127k context; released Jan 27 2025; vision supported
  - WebSearch: Sonar Pro $3/$15, 200k context, 2× search results, deeper retrieval
bias_filters: standard
convergence_target: ">=3 strikes"
---

# Sonar (base) — Round 1 Dealbreaker

## Executive verdict

**29 strikes. Report is not converged.** This is not a research artifact — it is a 149-line acknowledgement that the author did not perform research. Sonar's own report contains **27 `[UNKNOWN]` markers and 18 `[INFERRED]` markers** with zero first-party citations, despite Sonar being a search-grounded model whose entire value proposition is retrieving and citing primary sources. The report fails the basic task: it cites a Perplexity model called "Sonar" without consulting Perplexity's own docs at `api-guides/perplexity/_official-models-overview.md` which sits in the same repository as the report itself.

Sonar's self-research **disqualifies itself by failing the very capability the model is sold on**: web-grounded answer-with-citations. A model that cannot research itself when prompted to research itself cannot be trusted to do single-pass research for the Council. This is the killer finding of the round.

The 3 same-Perplexity siblings (Sonar Pro, Sonar Reasoning Pro, Sonar Deep Research) have already converged in 2 rounds with real citations. Sonar produced nothing comparable. The differentiation question — "when does $1/$1 Sonar beat $3/$15 Sonar Pro?" — is never answered because Sonar never even attempted to look up Sonar Pro's price.

---

## Strike-by-strike

### Section 1: Identity (5 strikes)

**Strike 1 — Release date `[UNKNOWN]` is unacceptable.** Sonar was released **January 27, 2025** per Perplexity's own announcements and corroborated by multiple third-party trackers (WebSearch this round). The author marks this `[UNKNOWN — would need a product announcement or release notes]` — but the announcement exists, is indexed, and is one search away. **A search-grounded model claiming not to know its own release date when its job is web search is the failure mode that disqualifies the model.**

**Strike 2 — Official API model ID `[UNKNOWN]`.** The model ID is literally `sonar`. This is documented at `api-guides/perplexity/_official-models-overview.md` (read this round — sits in the same repo as the report). Marking it `[UNKNOWN]` while the official-doc snapshot is in the repo is **negligence, not honest uncertainty.**

**Strike 3 — Predecessor `[UNKNOWN]`.** Sonar is Perplexity's first-generation Sonar release; the predecessor was Perplexity's own answer/search product (no model-named predecessor). The author hedges but never resolves.

**Strike 4 — Provider positioning marked `[INFERRED]` when it is documented.** Perplexity's `_official-models-overview.md` at line 14-19 explicitly categorizes Sonar as a "Search Model" — "lightweight, cost-effective models designed to retrieve and synthesize information efficiently. Excel at quick factual queries, topic summaries, product comparisons, and current events." This is a direct quote, not an inference.

**Strike 5 — The single citation in Section 1 is wrong.** The author cites `https://community.openai.com/t/what-exactly-does-a-system-msg-do/459409` and admits it is "only an indirect mention of system messages, not a Sonar spec." Citing an OpenAI community thread about system messages as a source on Sonar's identity is a citation-padding anti-pattern. **Strip.**

### Section 2: Core capabilities (10 strikes)

**Strike 6 — Vision marked `[UNKNOWN]` when Perplexity docs confirm vision support.** WebSearch this round confirmed both Sonar and Sonar Pro support vision. The author marks all of `[UNKNOWN]`.

**Strike 7 — Tool use marked `[UNKNOWN]` for function calling.** Sonar does not expose function calling in the same way as Anthropic/OpenAI/Google; this is documentable as a limit, not a `[UNKNOWN]`. The honest answer is "no function calling — search-only" per sibling Sonar Pro's converged report.

**Strike 8 — Code generation marked `[UNKNOWN]` with hand-wave.** Sonar can produce code in answers but is not a coding-specialized model; this is documentable, not unknown. Author admits "no verified SWE-bench-class score" without searching for one.

**Strike 9 — Long context `[UNKNOWN]`.** **Sonar has a 127,072-token context window** — documented in pricepertoken's tracker, in Perplexity's pricing page, and in the sibling Sonar Pro report which converged on 200k for Pro and explicitly noted Sonar's 127k as the differentiator. Author missed this entirely.

**Strike 10 — Reasoning capability mis-stated.** Author writes "It is not reliably described as a dedicated 'reasoning model' with exposed chain-of-thought." This is correct but mis-framed. The correct framing per `_official-models-overview.md` is: Sonar is a "Search Model" and **Sonar Reasoning Pro is the family member with CoT**. The author never makes this contrast — which is the entire differentiation question for routing.

**Strike 11 — Pricing `[UNKNOWN]`.** **Sonar is $1.00 input / $1.00 output per 1M tokens** + per-request fees ($5/1k low-context, $12/1k high-context). Confirmed by WebSearch this round. The author marks `[UNKNOWN]` despite this being trivially searchable.

**Strike 12 — Knowledge cutoff hand-wave.** Author writes "For a search-grounded system, a single static cutoff is less meaningful." Partially true but incomplete — the underlying model still has a training cutoff that determines what it can reason about without retrieval. The honest answer is to look up Perplexity's base model and report that cutoff. Author did not.

**Strike 13 — Vision example dishonestly invented.** "OCR a screenshot of a settings page" is listed as the example task for vision — without confirming Sonar even supports vision. (It does, per WebSearch — but the author was guessing.)

**Strike 14 — Audio/multimodal example dishonestly invented.** Same pattern — "Interpret a short voice memo or video clip" is listed without confirming the modality is supported.

**Strike 15 — Agentic / computer use marked `[UNKNOWN]` with no attempt.** Sonar is documented as a search-only model with no agentic loop; this is documentable, not unknown.

### Section 3: Operational (6 strikes)

**Strike 16 — All 7 operational fields `[UNKNOWN]`.** Pricing, latency, rate limits, prompt caching, batch API, context window, output cap — every single one marked `[UNKNOWN]`. This is the section that determines whether a model can be routed to in production. Sonar's author abdicated the entire section.

**Strike 17 — Per-request fees omitted entirely.** Sonar has a fee structure unusual among major LLM APIs: **$5 per 1,000 low-context requests and $12 per 1,000 high-context requests** in addition to token pricing. This materially affects routing economics for high-volume / short-prompt workloads — and is the kind of cost surface a researcher should surface in Section 3. Author did not.

**Strike 18 — No rate limit table.** Perplexity publishes rate limits per tier; the author did not look.

**Strike 19 — No latency benchmarks.** Sonar is positioned for fast factual lookups; latency is a primary routing consideration. The author wrote nothing.

**Strike 20 — No batch API note.** Sonar does not currently expose a batch API (vs. Anthropic/OpenAI/Google). This is an operational gap worth documenting, not an `[UNKNOWN]`.

**Strike 21 — Cache pricing omitted.** Perplexity's prompt caching surface is documented; the author did not look.

### Section 4: Integrations (1 strike)

**Strike 22 — All 4 integration fields `[UNKNOWN]`.** First-party connectors, SDK languages, MCP support, registries — all `[UNKNOWN]`. Perplexity ships an OpenAPI-compatible API; SDKs and registries are documented. Author did not search.

### Section 5: Differentiation — the section the rubric says determines the score (5 strikes)

**Strike 23 — Same-family differentiation entirely missing.** The Dealbreaker prompt explicitly requested differentiation vs. Sonar Pro ($3/$15, 200k context), vs. Sonar Reasoning Pro ($2/$8 + CoT), vs. Sonar Deep Research (5–10× cost, multi-pass). The author wrote nothing about any of these siblings. The only family member named is "Perplexity-style assistants" generically. **This is the section that determines the routing decision Mitchell needs — and Sonar gave him nothing.**

**Strike 24 — Cross-provider differentiation is generic.** Author compares Sonar to GPT-4.1 (a legacy model), Claude 4 Sonnet (also pre-4.6), and Gemini 2.5 Pro (pre-3.1). **Every named peer is at least 1 generation stale.** Mitchell's Council is on Opus 4.7, GPT-5.5, Gemini 3.1 Pro — none of which appear in Sonar's report. Strip all stale-peer comparisons.

**Strike 25 — "What it is uniquely best at: Likely nothing in an absolute sense."** This is the right conclusion structurally (Sonar's value is cost, not capability) but reached by hand-wave, not analysis. The honest version: "Sonar is the cheapest search-grounded production model from Perplexity at $1/$1 + per-request fees. Its uniqueness is its **price floor**, not its capabilities." That framing would survive — the author's hand-wave does not.

**Strike 26 — No price-performance crossover points.** Per the Council OS routing rubric, differentiation requires answering: "At what task volume / prompt size does Sonar beat Sonar Pro?" Author never even attempts this. The answer (inferable from pricing alone): Sonar beats Sonar Pro when (a) the answer fits in 127k context, (b) the task is single-pass / single-question / no follow-ups, (c) the user accepts shallower retrieval (Sonar Pro has 2× search results), AND (d) the volume × per-request-fee math doesn't push Sonar past Sonar Pro's flat-rate economics.

**Strike 27 — No example task where Sonar is preferred over a sibling.** The closest the author gets is "fact-checking a claim against current public sources" — but this is also Sonar Pro's wheelhouse, and Sonar Pro retrieves 2× more sources. Author never narrows.

### Section 6-8: Limitations, Ideal tasks, Lifecycle (2 strikes)

**Strike 28 — Limitations section has zero verified failure modes.** Author lists generic "likely degrades on deep reasoning / large context / non-web multimodal" — all `[INFERRED]`. Sonar has documented failure modes: hallucination on niche queries, retrieval timeouts under load, citation drift (cites a URL whose content does not support the claim). Author did not surface any.

**Strike 29 — Lifecycle entirely `[UNKNOWN]`.** Release date is Jan 27 2025 (above). No successor announced (verifiable). Deprecation risk: low for the near-term (Perplexity's revenue model depends on Sonar). Author wrote `[UNKNOWN]` × 4.

---

## Top 3 stripped claims

1. **"Likely nothing in an absolute sense" (Section 5 uniqueness).** Replace with: "Sonar is uniquely the cheapest search-grounded model in Perplexity's lineup ($1/$1 + per-request fees), and is uniquely positioned for single-pass cost-bounded factual lookup. The trade is shallower retrieval (1× search vs. Sonar Pro's 2×) and a smaller 127k context window vs. Sonar Pro's 200k."

2. **All cross-provider peer comparisons in Section 5 (GPT-4.1, Claude 4 Sonnet, Gemini 2.5 Pro).** Every named peer is 1+ generation stale. Strip until refreshed against the Council's current peer roster (Opus 4.7, GPT-5.5, Gemini 3.1 Pro, sibling Sonar variants).

3. **The OpenAI community thread citation in Section 1.** Author admits it does not support the claim. Citation-padding anti-pattern. Strip.

---

## Same-family differentiation — what Round 2 MUST resolve

Per the Dealbreaker prompt's killer test:

| Comparator | When does Sonar beat it? | Round 1 answered? |
|---|---|---|
| **Sonar Pro** ($3/$15, 200k context, 2× search results) | When (a) answer fits in 127k, (b) single-pass, (c) shallow retrieval is acceptable, AND (d) volume × per-request fees < Sonar Pro flat rate | **No — never named Sonar Pro** |
| **Sonar Reasoning Pro** ($2/$8 + CoT) | When the task is **factual lookup**, not problem-solving; when CoT trace is not needed; when 2× input cost ($1 vs $2) matters at volume | **No — never named Sonar Reasoning Pro** |
| **Sonar Deep Research** (5–10× cost, multi-pass) | When single-pass is sufficient; when budget caps below Deep Research's per-task floor; when latency matters (Deep Research is async-heavy) | **No — never named Sonar Deep Research** |

---

## Sibling diff status

Already-converged Perplexity siblings (Sonar Pro R2, Sonar Reasoning Pro R2, Sonar Deep Research R3) all have **documented pricing, context windows, capabilities, and at least 1 named peer comparison with benchmark numbers**. Sonar R1 has **none of these**. Sonar's report is **not at the convergence bar** the siblings cleared.

---

## Cost

- 4 file reads (Sonar R1, official-models-overview, Opus 4.7 R2, sibling directory listing)
- 2 WebSearch calls (Sonar pricing + Sonar vs Sonar Pro)
- Total: under $0.05 estimated (Opus 4.7 adjudication, light search)

---

## Recommendation for Mitchell

**Do not route research tasks to Sonar based on this Round 1.** The model's self-research failure is a credibility signal: a search-grounded model that cannot research itself when explicitly prompted to do so will produce comparably empty research on adversarial routing decisions.

**Round 2 MUST:**
1. Resolve every `[UNKNOWN]` in Sections 1, 2, 3, 4, 8 against Perplexity's own docs (`api-guides/perplexity/_official-models-overview.md`) and primary sources.
2. Replace every stale cross-provider comparison (GPT-4.1, Claude 4 Sonnet, Gemini 2.5 Pro) with current peers (Opus 4.7, GPT-5.5, Gemini 3.1 Pro, sibling Sonar variants).
3. **Answer the three same-family differentiation questions** explicitly with price-performance crossover points.
4. Surface the per-request fee structure ($5/1k low-context, $12/1k high-context) and its routing implications.

Until Round 2 lands at the same bar as the siblings, **Sonar's KB entry should explicitly warn against routing high-stakes research to it**.
