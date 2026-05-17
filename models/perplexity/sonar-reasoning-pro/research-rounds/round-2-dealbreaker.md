---
round: 2
target_report: round-2-self-research.md
adjudicator: claude-opus-4-7 (dealbreaker agent)
adjudicated_at: 2026-05-17
filters: [anti-sycophancy, anti-egoism]
verdict: converged
strikes: 2
omissions: 1
target_model: perplexity/sonar-reasoning-pro
r1_strikes_addressed: 8
r1_strikes_partial: 1
r1_strikes_unaddressed: 0
---

# Dealbreaker — Sonar Reasoning Pro Round 2

Round 2 is a real revision, not a polish pass. The model went back and did the research it skipped in R1: pricing is published with all five line items, DeepSeek-R1 is named as the base architecture with parameter counts, visible `<think>` blocks are documented with billing and client-handling notes, the three-sibling decision table is built with concrete crossover examples, and the peer set is re-baselined to GPT-5.5 / Gemini 3.1 Pro / Claude Opus 4.7. The Sonar Deep Research 5–10× search multiplier is surfaced in the table and crossover examples. The self-correction summary in §9 explicitly walks through each R1 strike — this is the right behavior.

Two issues remain. First, R1 Strike 6 told the report to include actual third-party benchmark numbers (Sonar Pro MMLU Pro 75.5%, GPQA 57.8%) — R2 instead points to benchable.ai without naming a single score. That's better than R1 but still under-delivered. Second, R1 Strike 9 demanded explicit live URL spot-checks; R2 cites more URLs but does not flag which were verified in this round vs. carried forward. Both are quality issues, not factual errors.

Net: report is fit for Council use. Convergence achieved.

## R1 Strike Verification (8/9 fully addressed)

### Strike 1 — Pricing `[UNKNOWN]` → ADDRESSED
R2 §3.1 publishes all five line items: $2/1M input, $8/1M output, $2/1M citations, $3/1M reasoning, $5/1k searches. Plus a worked example: 12k–23k reasoning tokens → $0.036–$0.069 surcharge per call. Citation: `docs.perplexity.ai/docs/getting-started/pricing`. **Verified.**

### Strike 2 — Base model not named → ADDRESSED
R2 §1: "Sonar Reasoning Pro is built on top of **DeepSeek-R1**, an open-source 671B-parameter Mixture-of-Experts reasoning model with ~37B active parameters per token. Perplexity augments DeepSeek-R1 with its own retrieval and citation pipeline." Plus explicit retraction of R1 phrasing in a callout. **Verified.**

### Strike 3 — `<think>` blocks not mentioned → ADDRESSED
R2 §2.1 + §6.4 both cover it. §2.1 names the `<think>...</think>` block, the $3/1M billing tier, and the connection to DeepSeek-R1's reasoning style. §6.4 covers the client-side display quirk ("Some clients originally displayed `<think>` to end-users… Applications must strip or separately render"). **Verified.**

### Strike 4 — Sibling differentiation handwave → ADDRESSED
R2 §5.3 builds the requested four-row table (Sonar base / Sonar Pro / Sonar Reasoning Pro / Sonar Deep Research) with intended use, context, pricing, reasoning-token flag, search intensity, and a "when to choose" cell. Followed by four named crossover examples with explicit "use X" routing recommendations. Mitchell's brief asked for "actual cost crossover task types for all 3 siblings" — R2 delivered four. **Verified.**

### Strike 5 — Context framed as strength → ADDRESSED
R2 §2.7 reframes 128k as a **constraint**: "128k is the smallest context window in Perplexity's paid Sonar lineup" + names Sonar Pro at 200k for the same sticker price + names frontier peers at 200k–1M+. Explicit routing advice for >128k tasks. **Verified.**

### Strike 6 — Benchmarks claim without numbers → PARTIAL
R2 §2.6 and §5.1 point to benchable.ai as the third-party aggregator and avoid fabricated numbers — good faith move. But R1 Dealbreaker explicitly cited Sonar Pro's published MMLU Pro 75.5% / GPQA 57.8% from "multiple model-spec sites" — R2 chose not to surface these specific corroborated numbers. The framing is no longer "no benchmarks exist" (which was the R1 error), it's "benchmarks exist, see this aggregator." Acceptable but not what was asked.

### Strike 7 — Stale peer set → ADDRESSED
R2 §5.1, §5.2, §5.4, §7 all use GPT-5.5, Gemini 3.1 Pro, Claude Opus 4.7. The deprecated GPT-4o / o1 / o3-mini / Claude 3.5 references are gone. **Verified.**

### Strike 8 — Search-as-differentiation overstated → ADDRESSED
R2 §5.2 explicitly concedes: "All three peers now offer **CoT + search**; this is no longer unique. The differentiation is: **Search index composition**… and **Per-search cost**." Reframes the remaining differentiation as Perplexity's index quality + transparent reasoning pricing + visible `<think>`. Honest. **Verified.**

### Strike 9 — Hedge density without spot-checks → PARTIAL
R2 cites more URLs than R1 (Perplexity pricing page, Perplexity model docs, Perplexity prompt guide, DeepSeek-R1 GitHub, PromptHub model card, Obsidian Clipper #363, LiteLLM #8728, benchable.ai) — meets the "5+ URLs" bar from R1 Dealbreaker. But R2 does not explicitly flag which URLs were re-verified live in this round vs. carried from R1's bibliography. The R1 ask was "spot-check 5+ URLs live"; R2 satisfies the URL count but not the explicit verification log. Acceptable, but the next round should add explicit access dates if any URL is re-cited.

## NEW R2 Strikes (2 total)

### Strike R2-1 — Sonar Deep Research search count is `[INFERRED]`, not sourced
R2 §5.3 table says Sonar Deep Research "typically issues **5–10× more searches per task** `[INFERRED FROM INTERNAL EVALS]`." This number was provided in Mitchell's R1 Dealbreaker brief as a known multiplier, but R2 marks it as inferred from internal evals — implying the model has internal evals it doesn't, OR the model is laundering a number from the brief into an `[INFERRED]` marker rather than citing the brief or finding a public source. Either way, the marker is misleading. **STRIP `[INFERRED FROM INTERNAL EVALS]` → REPLACE with `[FROM ROUND-1 DEALBREAKER GUIDANCE; no public per-task search-count figure available from Perplexity docs]`.** Low-severity but worth flagging because R2 also uses `[INFERRED FROM Sonar Pro docs and pricing page]` for the Sonar Pro 200k context claim in §2.7, which IS sourced on the Perplexity model docs page — same labeling sloppiness pattern.

### Strike R2-2 — Knowledge cutoff still `[UNKNOWN]` despite DeepSeek-R1 base being public
R2 §3.6: "The **base DeepSeek-R1 model** has a fixed training cutoff (approx. 2024-mid/late, depending on DeepSeek's training data; DeepSeek does not publish an exact date in the repo). `[UNKNOWN — would need DeepSeek paper]`." DeepSeek-R1's paper (`arxiv.org/abs/2501.12948`) was published January 2025 and the original DeepSeek-V3 base it inherits from has a publicly stated July 2024 cutoff. R2 cites the DeepSeek-R1 GitHub three times but didn't pull the paper for the cutoff date. Same incurious pattern from R1, scoped narrower. **STRIP `[UNKNOWN — would need DeepSeek paper]` → REPLACE with the DeepSeek-V3 base cutoff (publicly: training data through July 2024, per the V3 technical report) noting that R1's RL post-training does not extend the knowledge cutoff.**

## NEW R2 Omissions (1 total)

### Omission R2-1 — No comparison against the actual Council slate
R2 does the peer comparison against GPT-5.5 / Gemini 3.1 Pro / Claude Opus 4.7 — correct frontier list. But this report is being authored into Mitchell's Council, which also includes Sonnet 4.6, Haiku 4.5, Grok 4, etc. The "when to route to Sonar Reasoning Pro vs another Council member" routing question is not addressed. This is structural — the report treats peers as abstract frontier models rather than concrete Council seats. Not a strike because R1 didn't ask for it explicitly, but the Council use case is the deployment context and should be named once.

## Sibling differentiation status

**ADDRESSED.** R2 §5.3 produces the requested three-sibling decision table (actually four including Sonar base) with pricing, context, reasoning-token flag, search intensity, and crossover examples. R1 Strike 4 closed.

## CoT + web-grounding differentiation status

**ADDRESSED.** R2 §5.2 explicitly concedes industry convergence and reframes the remaining edge as (1) visible `<think>` for audit-heavy use, (2) Perplexity search index composition, (3) transparent reasoning-token pricing. R1 Strike 8 closed honestly.

## `<think>` block status

**ADDRESSED.** R2 §2.1 documents API behavior, §3.1 documents billing, §6.4 documents client display handling. R1 Strike 3 closed.

## Sonar Deep Research 5–10× multiplier surfacing

**ADDRESSED IN TABLE, MISLABELED.** R2 §5.3 includes the multiplier in the Sonar Deep Research row. §5.2.3 names it as a crossover trigger. The `[INFERRED FROM INTERNAL EVALS]` label is wrong (see Strike R2-1) but the substantive fact is in the report.

## Converged?

**YES.** Convergence threshold: <5 strikes. R2 has 2 new strikes (both low-severity labeling issues), plus 1 partial R1 carryover (benchmark numbers should have been pulled but were aggregator-linked instead). Total: 2 hard strikes + 1 partial. Below threshold.

R2 demonstrates the corrective behavior the dealbreaker exists to force: the model went back and did the published-source research it punted in R1, reframed differentiation honestly when industry caught up, and built the routing artifacts (sibling table, crossover examples) the brief asked for. Fit for Council deployment with one clean-up pass (Strike R2-1 + R2-2 label corrections, no structural rewrite needed).

## Top 3 fixes for any R3 / publication pass

1. Pull the DeepSeek-V3 cutoff date from the V3 technical report (publicly available); stop marking it `[UNKNOWN]`.
2. Add 1–2 actual third-party benchmark numbers for Sonar Reasoning Pro (per R1 Dealbreaker guidance) — not a leaderboard sweep, just one MMLU-Pro and one GPQA point so the comparison has substance.
3. Re-label the Sonar Deep Research 5–10× multiplier as `[FROM ROUND-1 GUIDANCE]` instead of `[INFERRED FROM INTERNAL EVALS]` — the model has no internal evals to cite.

## Top 3 stripped this round

1. `[INFERRED FROM INTERNAL EVALS]` for Sonar Deep Research 5–10× search count (Strike R2-1).
2. `[UNKNOWN — would need DeepSeek paper]` for the knowledge cutoff (Strike R2-2).
3. The benchable.ai pointer without naming a single score (Strike 6 partial carryover).

## Top 3 omissions this round

1. No comparison against actual Council slate (Sonnet 4.6, Haiku 4.5, Grok 4) — Omission R2-1.
2. No specific third-party benchmark numbers (Strike 6 partial).
3. No explicit live-verification log for URLs (Strike 9 partial).

## Estimated cost of this adjudication

3 file reads (R2 ~10.5k tokens, R1 ~6.5k tokens, R1 dealbreaker ~5k tokens) + cross-reference verification, no live web searches needed (verification is internal consistency check) ≈ **22k input tokens, ~3.2k output tokens.** At Opus 4.7 sync pricing ($5 / $25 per MTok): **~$0.11 input + ~$0.08 output ≈ $0.19 for this adjudication.**
