---
round: 1
target_report: round-1-self-research.md
adjudicator: claude-opus-4-7 (dealbreaker agent)
adjudicated_at: 2026-05-17
filters: [anti-sycophancy, anti-egoism]
verdict: not_converged
strikes: 9
omissions: 6
target_model: perplexity/sonar-reasoning-pro
---

# Dealbreaker — Sonar Reasoning Pro Round 1

Sonar Reasoning Pro self-research is a polite, well-organized **shrug**. The structure is correct, the headings line up with the spec, and the writing is competent. But the report is dominated by `[INFERRED]` and `[UNKNOWN]` markers in every cell where Perplexity has actually published numbers. It cites the model docs page roughly five times and then declines to do any other research. Pricing is published; the report says `[UNKNOWN]`. The base model (DeepSeek-R1) is well-documented; the report does not mention it. Visible `<think>` blocks are a core differentiating behavior; the report does not mention them. The sibling differentiation that Mitchell asked for explicitly (Sonar Pro / Sonar Deep Research / Sonar base) is given roughly two sentences, no pricing, no crossover.

This is not adversarial. It's incurious. The Opus 4.7 Round 2 report cites 30+ external sources, runs URL spot-checks, names 6 new failure modes from official docs, and gives crossover points in dollars per call. Sonar Reasoning Pro Round 1 cites maybe 6 URLs total, three of which are the same `docs.perplexity.ai/docs/sonar/models/sonar-reasoning-pro` page.

## Strikes

### Strike 1 — Pricing punted as `[UNKNOWN]` when Perplexity publishes it
Section 3 says "Sonar Reasoning Pro's exact per-1M pricing is not included in the provided docs… `[UNKNOWN — would need current Perplexity pricing page]`." This is wrong by omission. Perplexity publishes the price on `docs.perplexity.ai/docs/getting-started/pricing`: **$2 / 1M input, $8 / 1M output, plus $2 / 1M citation tokens, $3 / 1M reasoning tokens, plus $5 per 1,000 search queries.** The reasoning-token surcharge in particular is the structurally important number — it's the actual cost of the CoT this model is named for. A reasoning model that omits its own reasoning-token price tag is not doing research, it is filing a stub. **STRIP "[UNKNOWN — pricing]" → REPLACE with the published price-per-million plus the per-search and per-reasoning-token line items.**

### Strike 2 — Base model never named (DeepSeek-R1)
Sonar Reasoning Pro is publicly known to be built on **DeepSeek-R1**, an open-source MoE reasoning model with 671B total / 37B active parameters. The MindStudio model card, the Galaxy.ai comparison, and the Perplexity blog all corroborate this. The report does not say "DeepSeek-R1" anywhere. This matters operationally because (a) it explains why visible `<think>` blocks appear, (b) it explains the reasoning-token surcharge, (c) it constrains the realistic benchmark expectations, and (d) it is the reason Perplexity could ship a reasoning model in the first place — Perplexity did not train a base reasoning model. **STRIP "It is built and operated by Perplexity AI" → REPLACE with "Perplexity hosts and augments DeepSeek-R1 (671B-param MoE, 37B active) with their search stack and citation pipeline; Perplexity did not train the underlying reasoning model."**

### Strike 3 — `<think>` blocks never mentioned (the brief asked specifically)
The brief says "Watch for `<think>` blocks: Reasoning model likely shows internal reasoning. Flag if present." The report does not mention `<think>` tags, visible CoT in the API response, or the fact that reasoning content is exposed to the caller (which is structurally different from how OpenAI o-series models hide their reasoning). This is the single most user-visible distinguishing feature of the model. Self-research that misses its own most distinctive behavior is failing the task. **STRIP "explicit chain-of-thought internally" → REPLACE with "explicit chain-of-thought emitted to the caller inside `<think>...</think>` tags, which count as reasoning tokens billed at $3/1M and which the application must strip before user display unless transparent reasoning is desired."**

### Strike 4 — Sibling differentiation is a two-sentence handwave
Mitchell's brief asks specifically for "actual cost crossover task types for all 3 siblings" (Sonar Pro, Sonar Deep Research, Sonar base). The report has none. Section 5.4 lists peers that are **not Perplexity siblings** — it compares to GPT-4o, Claude 3.5, Gemini 1.5 — and skips the same-Perplexity question entirely. The Opus 4.7 Round 2 report gave dollar-amount crossovers for Sonnet 4.6 and Haiku 4.5. Sonar Reasoning Pro gives nothing. Actual situation: **Sonar Pro is the same $2/$8 sticker but 200k context vs. 128k AND no reasoning-token surcharge — Sonar Pro is the right call for any factual-lookup task where the CoT trace is not needed. Sonar Deep Research is the same sticker but burns 5-10× more searches per query (multi-step research workflow) — it is the right call for exhaustive reports but a money sink for single-question lookup. Sonar base is cheaper but materially less retrieval-rich.** **STRIP Section 5.4 in its current form → REPLACE with a three-sibling pricing+context+use-case table with at least one named crossover task per sibling.**

### Strike 5 — Context window cited correctly, framing wrong
Section 2.7 cites "128K token context length" — accurate. But the framing positions long context as a strength relative to peers. The Perplexity-internal comparison cuts the other way: Sonar Pro carries 200k, GPT-5.5 / Gemini 3.1 Pro / Claude Opus 4.7 carry 200k–1M. Sonar Reasoning Pro's 128k is the **smallest context window among Perplexity's own paid Sonar lineup AND among the major reasoning peers it gets compared to.** That's not a strength of the reasoning offering, it's a constraint. **STRIP "Long-context research with live search… 128K context with integrated search makes it suited to tasks like 'read many long PDFs'" → REPLACE with "128k is the smallest context in Perplexity's paid lineup (Sonar Pro carries 200k for the same sticker price). For >128k research synthesis, route to Sonar Pro OR sacrifice the CoT visibility and route to a 200k+ peer."**

### Strike 6 — No benchmarks anywhere, then claims peers beat it
Sections 5.1 and 7.2 say things like "OpenAI's `o3-mini` / `o1` and earlier `gpt-4.1` models tend to outperform generic reasoning models on benchmarks like SWE-bench and HumanEval" — with no Sonar Reasoning Pro score, no peer score, no source link. Section 5.4 says "would need head-to-head benchmarks (e.g., GPQA, MMLU, SWE-bench, ARC-AGI) for precise numbers, which Perplexity has not publicly provided." But third parties HAVE published numbers: Sonar Pro reaches MMLU Pro 75.5% / GPQA 57.8% per multiple model-spec sites; Sonar Reasoning Pro is benchmarked on benchable.ai. The report's "no benchmarks available" framing is research that wasn't done, not research that was attempted and failed. **STRIP "Perplexity has not publicly provided" → REPLACE with at least Sonar Pro's published MMLU Pro / GPQA scores AND a stated "Sonar Reasoning Pro third-party benchmarks at [URL]" pointer.**

### Strike 7 — Peer set is two years out of date
Sections 5.1, 5.4, and 7.2 compare Sonar Reasoning Pro to **GPT-4o, Gemini 1.5 Pro, Claude 3.5 Sonnet/Opus, o3-mini, o1, gpt-4.1**. The current frontier-reasoning peers are **GPT-5.5, Gemini 3.1 Pro, Claude Opus 4.7** — all released between November 2025 and April 2026, all sitting in the Council that this report is being authored INTO. Comparing a CoT-with-web-search reasoning model to GPT-4o (no native reasoning surface, deprecated comparison) misses the actual routing decision Mitchell needs to make. **STRIP all references to "GPT-4o" / "gpt-4.1" / "o1" / "o3-mini" / "Claude 3.5 Sonnet/Opus" as the peer set for reasoning comparison → REPLACE with "GPT-5.5 with search tool + reasoning, Gemini 3.1 Pro with google_search + thinking, Claude Opus 4.7 with web_search + adaptive thinking" — the three peers that have the SAME CoT-plus-web-grounding combination this model is selling.**

### Strike 8 — "Tightly integrated with Perplexity search" framed as differentiation when peers have caught up
Section 5.2 positions "integrated web-grounded reasoning" as a comparative strength. As of mid-2026 that's no longer differentiation — GPT-5.5 ships native search tool, Gemini 3.1 Pro ships `google_search`, Opus 4.7 ships server-side `web_search` and `web_fetch` tools, ALL with reasoning. The brief calls this out explicitly: "CoT + web grounding is the SHARED feature." The report acknowledges this in Section 5.3 ("no known task that only Sonar Reasoning Pro can perform"), then immediately walks it back in Section 5.2 with "integration gives it an edge in research-style workloads with up-to-date citations compared to peers run in purely offline mode" — which only holds if the comparison peer is forced offline, which is not the routing decision Mitchell faces. **STRIP Section 5.2 "Integrated web-grounded reasoning" framing → REPLACE with the honest version: "Perplexity's search index quality may differ from Google's / Bing's, but the integration affordance itself is industry-converged. The remaining differentiation is search-stack quality and per-search cost, not the existence of search-plus-reasoning."**

### Strike 9 — Hedge density without spot-checks
Of 8 capability axes in Section 2, every single one has at least one `[INFERRED]` marker, most have 2–4. That's appropriate honesty when sources don't exist. But the report does not spot-check ANY of its inferences with a single live web search. Section 6 cites two GitHub issues (Obsidian Clipper #363, LiteLLM #8728). That's it for ground-truth verification. Compare Opus 4.7 Round 2: 5 URLs spot-checked live in the round, one dropped (BridgeBench), one downgraded (abhs.in 403). The Sonar Reasoning Pro report's `[INFERRED]` markers are not honest hedging — they're "I did not look this up." **REQUIRE 5+ live URL spot-checks before Round 2 ships, including: the published pricing page, a third-party benchmark roundup, a `<think>`-block API-response example, and a Sonar Deep Research vs Sonar Reasoning Pro cost comparison.**

## Omissions

### Omission 1 — Sonar Deep Research relationship and 5–10× search-fee multiplier
The brief calls this out directly ("Sonar Deep Research — multi-step deep synthesis, 5–10x more expensive"). The report mentions Sonar Deep Research **zero times** in Section 5. The same-sticker-different-bill structure is the most important routing fact for any Mitchell-internal "which Sonar do I call" decision.

### Omission 2 — Visible `<think>` block API behavior
Covered as Strike 3. Restated here as omission because the brief explicitly flagged it as something to check for.

### Omission 3 — Search-stack quality is the actual differentiator
Section 5 spends most of its real estate on "we have search," but never asks **whose search index is best for what kind of query.** Perplexity's index, Google's (Gemini), Bing's (OpenAI's web_search), and Anthropic's `web_search` all hit different corpora. For freshly-indexed news, for paywalled academic sources, for SEC filings, for GitHub issues, the relative search quality matters more than "this model has search." The report does not mention this.

### Omission 4 — Reasoning-token surcharge as a routing-economics fact
$3 / 1M reasoning tokens is the cost of the CoT. On a typical reasoning task that emits 12k–23k reasoning tokens (per DeepSeek-R1's own published behavior on AIME-style problems), the reasoning surcharge alone is $0.036–$0.069 per call BEFORE input/output. This dwarfs the $2/$8 input/output for short-input tasks. The report does not name this cost shape.

### Omission 5 — Refusal / safety profile vs. peers
Section 6 says "follows Perplexity's content policies" and gives no specifics. DeepSeek-R1 has documented refusal behaviors on China-political topics that may or may not be filtered by Perplexity's layer. The report does not check.

### Omission 6 — Reasoning visibility as a feature, not just a behavior
Visible `<think>` blocks are a feature OpenAI o-series and Anthropic Opus 4.7 (adaptive thinking) deliberately hide from callers. Perplexity exposes them. For Mitchell's Council use case — where the reasoning trace IS the deliverable, not just the answer — visible CoT is a routing advantage, not a quirk. The report neither names this nor exploits it.

## Sibling differentiation status

**FAILED.** The brief's special focus item — "Same-Perplexity-sibling check: sharper than Sonar Pro (which already failed sibling test). Must state actual cost crossover task types for all 3 siblings" — is not addressed. The report mentions Sonar Pro and Sonar Deep Research only in passing in Section 1 and Section 8. There is no pricing comparison, no crossover statement, no use-case division. Round 2 must produce a three-sibling decision table.

## CoT + web-grounding differentiation status

**WEAK.** The report admits in Section 5.3 that "no known task that only Sonar Reasoning Pro can perform" exists, then in Section 5.2 still claims "integrated web-grounded reasoning" as differentiation. The brief asks "Where is Sonar Reasoning Pro genuinely better?" — the answer this report gives is, essentially, "lower friction to set up" — which is not a capability claim. Round 2 needs either (a) a specific Perplexity-search-index quality angle with evidence, OR (b) the honest concession that this model is a commodity within the CoT-plus-search category and the only routing reason is price/visible-CoT.

## `<think>` block status

**NOT FLAGGED in the report.** The brief asked to flag if present. The report did not check. Per third-party model cards and the DeepSeek-R1 base, `<think>...</think>` blocks ARE emitted via the API and ARE billed as reasoning tokens. Round 2 must document this.

## Converged?

**NO.** 9 strikes, 6 omissions. Convergence threshold is ≥5 strikes addressed in a Round 2 revision; the current report has 9 strikes unaddressed. Round 2 must:
1. Restate published pricing (input/output/citation/reasoning/search) with sources.
2. Name DeepSeek-R1 as the base model.
3. Document `<think>` block API behavior.
4. Build the three-sibling pricing+context+crossover table.
5. Replace the GPT-4o / Claude 3.5 / o3-mini peer set with GPT-5.5, Gemini 3.1 Pro, Opus 4.7.
6. Spot-check at least 5 URLs live.
7. Add the reasoning-token-surcharge cost shape per the AIME-12k–23k reasoning-token range.

## Top 3 stripped

1. "[UNKNOWN — Perplexity pricing]" (Strike 1).
2. "Built and operated by Perplexity AI" (Strike 2 — Perplexity hosts; DeepSeek trained).
3. "Integrated web-grounded reasoning gives it an edge in research-style workloads compared to peers run in purely offline mode" (Strike 8 — peers are no longer offline).

## Top 3 omissions

1. Sonar Deep Research relationship + 5–10× search-fee multiplier (Omission 1).
2. Visible `<think>` block API behavior + reasoning-token economics (Omission 2 + 4).
3. Search-stack quality as the actual differentiator vs. peer search tools (Omission 3).

## Estimated cost of this adjudication

3 WebSearch calls (~3k tokens of search results each, ~9k total), 3 file reads (Sonar report ~5.5k tokens, Opus 4.7 R2 ~12k tokens, Perplexity docs ~2k tokens) ≈ **28.5k input tokens, ~3.5k output tokens.** At Opus 4.7 sync pricing ($5 / $25 per MTok): **~$0.23 input + ~$0.09 output ≈ $0.32 for this adjudication.**
