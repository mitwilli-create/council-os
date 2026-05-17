# Dealbreaker challenges — Round 1 — Claude Sonnet 4.6

> Adjudicator: Claude Opus 4.7 (in-family peer). Bias filters: standard sycophancy
> dictionary plus elevated anti-meta-sycophancy hunting because Sonnet is
> Anthropic-aware and motivated to flatter itself relative to siblings. Special
> focus: SAME-FAMILY differentiation (Sonnet 4.6 vs. Opus 4.7 and Haiku 4.5) is
> the killer test for this round.

## Verified claims (keep as-is)

- "Released February 17, 2026" — citation to Anthropic announcement page; format consistent with sibling profile and corroborated by NxCode, DataCamp, Caylent, and Natural20 coverage (WebSearch this round).
- "Claude API ID `claude-sonnet-4-6`; Bedrock `anthropic.claude-sonnet-4-6`; Vertex AI `claude-sonnet-4-6`" — corroborated by `_official-models-overview.md` (Latest models table, lines 28-31).
- "Pricing $3 input / $15 output per 1M tokens" — corroborated by `_official-models-overview.md` line 32.
- "1M-token context window (~750k words, ~3.4M unicode chars)" — corroborated by `_official-models-overview.md` line 37 (exact word/char breakdown stated in the official table).
- "Max output 64k synchronous; 300k via Batch API with `output-300k-2026-03-24` beta header" — corroborated by `_official-models-overview.md` lines 38, 57.
- "Reliable knowledge cutoff Aug 2025; training cutoff Jan 2026" — corroborated by `_official-models-overview.md` lines 39-40.
- "Extended thinking: Yes / Adaptive thinking: Yes" for Sonnet 4.6 — corroborated by `_official-models-overview.md` lines 33-34. **Note: this is the critical in-family differentiator vs. Opus 4.7 that the report fails to surface (see Omissions).**
- "Predecessor Sonnet 4.5 (`claude-sonnet-4-5-20250929`)" — corroborated by `_official-models-overview.md` legacy models table line 65.
- "Sonnet 4 (`claude-sonnet-4-20250514`) retires June 15, 2026" — corroborated by `_official-models-overview.md` warning block line 73.
- "Prompt-caching pricing: 5m cache write 1.25× base input, 1h cache write 2× base input, cache read 0.1× base input" — corroborated by `_official-prompt-caching.md` (matches Opus 4.7 same multipliers).
- "Cache invalidation hierarchy `tools → system → messages`" — corroborated by `_official-tool-use-caching.md` lines 62-73.
- "`defer_loading` preserves prompt cache when dynamically discovered tools land via tool-search" — corroborated by `_official-tool-use-caching.md` lines 53-59.
- "Dateless model ID `claude-sonnet-4-6` is a pinned snapshot, not an evergreen alias" — corroborated by `_official-models-overview.md` line 49.
- "SWE-bench Verified 79.6%" — corroborated by NxCode, DataCamp, MorphLLM, Rootly (WebSearch). Internal consensus across at least 6 third-party sources.
- "Tau2-bench Telecom 97.9% / Retail 91.7%" — corroborated by digital-applied, MorphLLM (WebSearch).
- "LMArena Code Arena Elo 1531 (rank #3 behind Opus 4.6 1560 and Opus 4.6 Thinking 1553)" — corroborated by buildmvpfast.com (WebSearch).
- "GDPval-AA Elo 1,633 (first-rank among current models)" — corroborated by buildmvpfast (WebSearch).
- "Over-refusal dropped from 8.50% (Sonnet 4.5) to 0.18% (Sonnet 4.6)" — citation to latent.space; this matches the directional claim in the Opus 4.7 system card per Zvi Mowshowitz's read (Opus 4.7 at 0.28% vs. Sonnet 4.6 at 0.41% per Zvi — note the 0.18% vs 0.41% discrepancy between sources is itself a small strike, see Hedges).
- "Quality regression March 2026 root-caused to reasoning-effort downgrade + March 26 thinking-clear bug; reverted April 7 / fixed in postmortem" — citation to GitHub issue #46935 and Anthropic April 23 postmortem; plausible but spot-check not performed by Dealbreaker (URLs look real, not hallucinated).

## Specific claims (keep, verification pending)

- "GPQA Diamond 74.1%" — testable but **conflicting third-party numbers found in WebSearch**: one source reports 74.1% (matches report), another reports 89.9% (does not match). The report does not address this disagreement. See Hedges and Overclaims.
- "MCP-Atlas 61.3% (beats Opus 4.6 60.3%)" — testable; NxCode source. **But the comparator is wrong sibling** — see Egoism #3.
- "Independent human evaluations Q1 2026: Claude preferred 47% vs. GPT-5.4 29% vs. Gemini 3.1 Pro 24%" — testable; buildfastwithai.com source. **Compares to GPT-5.4, not GPT-5.5** — see Egoism #2.
- "Computer use benchmark: Sonnet 4.6 72.5% vs. Opus 4.6 72.7%" — testable; MorphLLM source.
- "GUI hallucinated-completion failure mode" — testable; two cited sources (Rootly + GitHub issue #26965). Plausible. Spot-check the GitHub issue exists in next round.
- "Refuses AI-safety research grading tasks more often than Opus 4.6" — testable; latent.space source. Note: the comparator is Opus **4.6**, not Opus 4.7 — see Egoism on systematic legacy-sibling cherry-picking.
- "Higher resolution image input may degrade [INFERRED]" — testable. Opus 4.7 has a documented 2,576-pixel ceiling per its launch page; Sonnet 4.6's resolution ceiling is **knowable and the report should have searched for it instead of tagging [INFERRED]**.

## Sycophantic phrases stripped

The report opens disciplined and frames peers winning first (per template directive), but soft-puff still survives:

- **"The performance-value inflection point"** (Section 1, line 20) — "inflection point" is marketing framing imported from Anthropic launch copy. No comparator math defines what "inflection" means here. **Action: rewrite to "Anthropic positions Sonnet 4.6 at $3 / $15 per MTok versus Opus 4.7 at $5 / $25 — 40% lower per-token cost on both lanes."**
- **"Near-Opus intelligence at 40% lower cost and roughly 2x the throughput speed"** (Section 1, line 20) — "near-Opus" is unquantified. The "2x throughput" number is not cited anywhere in the report; Anthropic's official table says Sonnet is "Fast" and Opus is "Moderate" without numeric throughput. **Action: drop "near-Opus" qualifier; either source the "2x throughput" figure to a named third-party benchmark (artificialanalysis.ai, etc.) or remove the multiplier and keep only the "Fast vs. Moderate" official wording.**
- **"Delivers 99% of Opus 4.6 coding performance"** (Section 7, line 270) — manufactured round number. 79.6 / 80.8 = 98.5%, but framing reads marketing-grade. **Action: rewrite to "79.6% SWE-bench Verified vs. Opus 4.6 80.8% — a 1.2-point gap on this specific benchmark."** Also: comparator is Opus **4.6**, not 4.7 — see Egoism.
- **"Sonnet 4.6 beats its own more expensive sibling at scaled tool orchestration"** (Section 5, line 230) — 1.0-point lead (61.3 vs. 60.3) framed as a structural win. A 1-point delta on a single benchmark is noise-band, not a routing-decision driver. **Action: rewrite to "MCP-Atlas: Sonnet 4.6 61.3% vs. Opus 4.6 60.3% — a 1-point delta inside the typical benchmark noise band. Not a reliable routing differentiator. Also note: Opus 4.7's MCP-Atlas is 77.3% per Vellum, so the comparison should be Sonnet 4.6 vs. Opus 4.7, where Sonnet LOSES by 16 points."**
- **"Sonnet 4.6 is more efficient per-token on word coverage"** (Section 2 Long Context, line 102) — accurate but framed as a Sonnet advantage. The truth is that Opus 4.7's NEW tokenizer is less efficient — Sonnet 4.6 retained the older, denser tokenizer. **Action: rewrite to "Opus 4.7's new tokenizer is less word-dense than Sonnet 4.6's older tokenizer — at the same nominal 1M tokens, Sonnet 4.6's window holds ~750k words and Opus 4.7's holds ~555k words per the official table. Sonnet 4.6 inherits this advantage by not upgrading tokenizers, not by being optimized for it."**
- **"The differentiation is cost-performance positioning, not exclusive capability"** (Section 5, line 234) — this is actually a HONEST admission and survives, but the phrase "what ONLY Sonnet 4.6 does" framing on the same line is sycophantically structured (sets up a punchline). **Action: keep the admission, lose the punchline framing.**

## Egoistic claims sharpened or stripped (SAME-FAMILY focus)

**The single largest pattern in this report: Section 5 systematically compares Sonnet 4.6 to LEGACY siblings (Opus 4.6, GPT-5.4, Sonnet 4.5) instead of CURRENT FLAGSHIPS (Opus 4.7, GPT-5.5).** This is the same egoism pattern the Opus 4.7 Round 1 dealbreaker called out — but in reverse: where Opus 4.7 cherry-picked GPT-5.4 to beat, Sonnet 4.6 cherry-picks Opus 4.6 to beat. Adjudicator hunted aggressively here.

1. **Claim:** "Office and knowledge-work productivity vs. all current peers: GDPval-AA Sonnet 4.6 1,633 Elo — ahead of Opus 4.6, GPT-5.4, and Gemini 3.1 Pro" (Section 5, line 226).
   - **Issue:** Comparator list includes **Opus 4.6** (legacy) and **GPT-5.4** (legacy) but excludes the current flagships Opus 4.7 and GPT-5.5. GPT-5.5 scored 84.9% on GDPval per MarkTechPost (cited in the Opus 4.7 Round 2 self-research) — that comparison is what would actually test the "leads the field" claim.
   - **Action:** Required additions: (a) Opus 4.7's GDPval score (or `[UNKNOWN — would need to search]`), (b) GPT-5.5's GDPval score (84.9% per MarkTechPost). If after including current flagships Sonnet 4.6 still leads, the claim survives. If not, downgrade from "ahead of all current peers" to "leads the legacy-sibling cohort; current-flagship comparison needed."

2. **Claim:** "Conversational quality preference: Claude 47% vs. GPT-5.4 29% vs. Gemini 3.1 Pro 24%" (Section 5, line 228).
   - **Issue:** Same cherry-pick — GPT-5.4 instead of GPT-5.5. The Opus 4.7 Round 1 dealbreaker explicitly flagged this exact pattern for Opus 4.7 ("Comparison excludes GPT-5.5… cherry-picking GPT-5.4 instead of GPT-5.5 reads egoistic"). Sonnet 4.6 inherits the same pattern.
   - **Action:** Either source the GPT-5.5 preference number from a current blind-eval study, OR note explicitly "GPT-5.5 has not been included in this blind-eval roundup as of [date]" before claiming Claude preference leadership.

3. **Claim:** "Tool-use scale vs. Opus 4.6 and Haiku 4.5: MCP-Atlas score 61.3%, above Opus 4.6's 60.3% — Sonnet 4.6 beats its own more expensive sibling at scaled tool orchestration" (Section 5, line 230).
   - **Issue:** This is the worst in-family comparator error in the report. **Opus 4.7's MCP-Atlas score is 77.3%** per Vellum (cited in the Opus 4.7 sibling profile that this Dealbreaker is cross-referencing). Sonnet 4.6 vs. Opus 4.7 on MCP-Atlas is a 16-point LOSS, not a 1-point win. The 1-point margin over legacy Opus 4.6 is being smuggled in as if it held against the current flagship.
   - **Action:** REQUIRED REWRITE. New text: "MCP-Atlas: Sonnet 4.6 61.3% vs. Opus 4.7 77.3% (per [Vellum](https://www.vellum.ai/blog/claude-opus-4-7-benchmarks-explained)) — Sonnet 4.6 loses by 16 points to the current Anthropic flagship. The 1-point lead over legacy Opus 4.6 is not a routing-decision differentiator; route multi-turn MCP work to Opus 4.7 if budget allows."

4. **Claim:** "Cost crossover: Opus 4.7 ($5/$25 per MTok) is 1.67x more expensive on input and 1.67x on output vs. Sonnet 4.6. Use Opus 4.7 when task failure cost exceeds the 1.67x price premium" (Section 5, line 218).
   - **Issue:** The 1.67x math is correct. But the routing rule "task failure cost > 1.67x premium" is hand-wave — it provides no operational way to compute "task failure cost" in dollars. Worse: the report does not surface the **Tyler Folkman benchmark result** (cited in the Opus 4.7 Round 2 self-research) where Sonnet 4.6 beat Opus 4.7 68/100 vs. 63/100 on a real-world full-stack coding rubric. **A Sonnet self-profile that does not cite the one named benchmark where Sonnet decisively beats Opus 4.7 is a self-undervaluing omission, but it's also a sycophantic deference — Sonnet is being too humble in deference to the flagship, which is its own form of in-family bias.**
   - **Action:** Add Tyler Folkman benchmark to Section 5 with the full citation (Substack URL). Replace "task failure cost > 1.67x premium" with concrete crossover: "Route to Opus 4.7 when (a) the task involves >5 chained tool calls with compounding error, OR (b) the task is on SWE-bench Pro's hard split where Opus 4.7's 64.3% lead is documented. Route to Sonnet 4.6 when the rubric weights UX/maintainability alongside correctness (Tyler Folkman 7-category benchmark: Sonnet 4.6 68/100 vs. Opus 4.7 63/100)."

5. **Claim:** "What ONLY Sonnet 4.6 does: Nothing structurally exclusive" (Section 5, line 234).
   - **Issue:** This is technically honest but it MISSES THE BIGGEST IN-FAMILY DIFFERENTIATOR. Per `_official-models-overview.md` lines 33-34: Sonnet 4.6 has **Extended thinking: Yes**, but **Opus 4.7 has Extended thinking: No**. Sonnet 4.6 is the only top-tier Anthropic model that still exposes the explicit `thinking: { type: "enabled", budget_tokens: ... }` surface that callers used on Opus 4.6 and earlier Claude models. Opus 4.7 forces adaptive thinking only. **This is structurally exclusive (vs. Opus 4.7) and the report does not surface it.**
   - **Action:** REQUIRED ADDITION. New bullet under "What Sonnet 4.6 Is Actually Differentiated At": "**Extended-thinking explicit-budget surface — only available on Sonnet 4.6 and Haiku 4.5 among current-generation models.** Opus 4.7 dropped Extended thinking in favor of adaptive thinking only (`_official-models-overview.md` line 33). Callers who built workloads around `thinking: { budget_tokens: ... }` on Opus 4.6 can keep that exact surface on Sonnet 4.6 — they cannot keep it on Opus 4.7. This is a hard migration consideration that flips the routing decision toward Sonnet 4.6 for any pipeline that depends on explicit thinking-budget control."

## Overclaims requiring evidence

1. **Claim:** "Adaptive thinking is the key differentiator from Sonnet 4.5 — the model does not apply uniform chain-of-thought overhead to simple prompts" (Section 2 Reasoning, line 28).
   - **Required:** No benchmark cited for "doesn't apply uniform overhead." The claim is plausible from the feature name but is asserted as factual behavior without measurement. Either (a) cite a published latency/cost study showing adaptive thinking reduces overhead on simple prompts vs. Sonnet 4.5, or (b) downgrade to `[INFERRED FROM FEATURE NAME]`.
   - **Status:** Spot-check required next round.

2. **Claim:** "GPQA Diamond 74.1%" (Section 2 Reasoning, line 30).
   - **Required:** WebSearch surfaced a conflicting third-party number (89.9% per a different source). The report picks the lower number and does not address the disagreement. Possibilities: (a) different test conditions (standard vs. high-effort), (b) different harness, (c) one source is wrong.
   - **Action:** Required: explain the methodology behind the 74.1% (effort level, sample size, harness) and note the conflicting 89.9% figure with a hypothesis for the discrepancy. If 74.1% is the no-thinking baseline and 89.9% is the extended-thinking score, the report should cite both with effort-level annotation. Without this, the 74.1% headline understates the model relative to peers.

3. **Claim:** "Citation hallucination on long-context retrieval [INFERRED — no published study on Sonnet 4.6 citation hallucination specifically]" (Section 6, line 260).
   - **Required:** The `[INFERRED]` tag is honest, but the claim then proceeds to assert this as a Sonnet 4.6 failure mode based on category-level reasoning. This is the wrong direction for `[INFERRED]` — the failure mode should be downgraded to "speculated category risk" not "documented Sonnet 4.6 failure mode."
   - **Action:** Either find a Sonnet-4.6-specific citation hallucination study (or community report), OR move this claim from Section 6 (Known Limitations) to a separate "Category risks shared across frontier LLMs" subsection. Don't claim a Sonnet 4.6 failure mode without Sonnet 4.6 evidence.

4. **Claim:** "Batch API input ~$1.50 (50% discount) [INFERRED — standard Batch API discount]" (Section 3 Pricing table, line 145).
   - **Required:** The 50% Batch API discount is NOT inferred — it is **documented** in `_official-prompt-caching.md` line 285 ("These multipliers stack with other pricing modifiers such as the Batch API discount"). The discount applies and stacks with caching. The `[INFERRED]` tag is wrong; the number is sourceable.
   - **Action:** Remove `[INFERRED]` tag from Batch API pricing rows; replace with citation to `_official-prompt-caching.md` line 285 and (preferably) the Anthropic pricing page directly.

5. **Claim:** "No native JSON schema validation at the API layer (unlike OpenAI's JSON mode with `response_format: json_schema`)" (Section 2 Structured Output, line 126).
   - **Required:** This is partially wrong. Anthropic ships **strict tool use** (`strict: true`) AND **JSON outputs** (`output_config.format`) per the structured-outputs doc cited in the Opus 4.7 profile. Both compile JSON schemas into grammar that constrains generation. The "no native JSON schema validation" claim doesn't survive a docs check.
   - **Action:** Rewrite to: "Sonnet 4.6 supports strict tool use (`strict: true`) and JSON outputs (`output_config.format`), both of which compile JSON schemas into grammar that constrains generation. Compiled grammars cache for 24 hours from last use, separate from prompt caching. Complex schemas with optional parameters, union types, or deep nesting interact non-linearly with grammar size and can refuse to compile."

6. **Claim:** "Concrete example: Decomposing a multi-step software architecture problem with 5–10 interdependent constraints, generating a recommendation with explicit trade-off enumeration. Handles this well without requiring user to set a thinking budget" (Section 2 Reasoning, line 32).
   - **Required:** "Handles this well" without measurement is exactly the kind of unverifiable assertion the anti-sycophancy rule targets. There is no benchmark for "multi-step software architecture problem with 5-10 interdependent constraints."
   - **Action:** Either (a) cite a benchmark that approximates this (BIG-bench Hard task family, or a specific architecture-recommendation benchmark), or (b) rewrite to "Use case where adaptive thinking is designed to apply: multi-step architecture problems with N interdependent constraints. Quality on this use case is not formally benchmarked; user verification recommended."

## Omissions to add (SAME-FAMILY focus expanded)

These are the most important strikes in this round — same-family routing is the special focus.

1. **CRITICAL OMISSION — Extended thinking surface is Sonnet 4.6's biggest in-family differentiator vs. Opus 4.7, and the report does not surface it.** Per `_official-models-overview.md` lines 33-34: Sonnet 4.6 supports **Extended thinking: Yes**; Opus 4.7 supports **Extended thinking: No** (Opus 4.7 has only adaptive thinking). Any caller who built workloads around `thinking: { type: "enabled", budget_tokens: N }` on Opus 4.6 must either (a) re-architect for adaptive-only on Opus 4.7, or (b) **route to Sonnet 4.6 or Haiku 4.5 to keep the explicit budget surface**. This is a hard migration-routing fact and it belongs in Section 5 as a Sonnet 4.6 win condition, AND in Section 7 (Top 5 tasks where Sonnet 4.6 should be primary) as a top entry. The report's Section 7 entry #4 ("Scaled multi-tool agentic workflows") is weaker than this missing entry.

2. **CRITICAL OMISSION — Tyler Folkman benchmark where Sonnet 4.6 beats Opus 4.7 (68/100 vs. 63/100) at 40% lower cost is not cited.** This benchmark is referenced in the Opus 4.7 Round 2 self-research and the Opus 4.7 Round 2 dealbreaker. A Sonnet 4.6 self-profile that does not surface this win is undervaluing itself AND missing the single most concrete answer to "when does Sonnet 4.6 beat Opus 4.7?" Source: [Tyler Folkman Substack](https://tylerfolkman.substack.com/p/i-tested-opus-47-against-sonnet-46).

3. **OMISSION — Sonnet 4.6's 1M context holds 750k words vs. Opus 4.7's 555k words; the report mentions this but buries it.** This 35% larger word-coverage at the same nominal token count is a structural advantage when the input is text-heavy and approaches the window edge. Should be elevated from Section 2 Long Context hard-limit aside to Section 5 "What Sonnet 4.6 Is Differentiated At" with explicit routing rule: "For text-heavy long-document tasks above ~550k words, Sonnet 4.6's effective context exceeds Opus 4.7's." Source: `_official-models-overview.md` line 37.

4. **OMISSION — Haiku 4.5's SWE-bench Verified score is 73.3%** (per WebSearch this round, multiple sources). The report's Section 7 entry "Haiku 4.5 should be used for simple Q&A / classification only" understates Haiku's reach. Haiku 4.5 is only 6.3 points behind Sonnet 4.6 on SWE-bench Verified at 1/3 the price. The crossover decision is more nuanced than the report admits — for cost-sensitive code tasks where 6 points of pass-rate loss is acceptable, Haiku is the route, not Sonnet. **Routing rule the report misses:** "For coding tasks where the marginal cost-per-call delta exceeds the expected value of the 6.3-point pass-rate improvement, route to Haiku 4.5, not Sonnet 4.6."

5. **OMISSION — Minimum cacheable prefix size for Sonnet 4.6 not mentioned.** Per the Opus 4.7 sibling profile (Round 2), Opus 4.7's minimum is 4,096 tokens; Sonnet 4.6's minimum is 1,024 tokens. This means **short-prompt high-volume workloads can use prompt caching on Sonnet 4.6 but cannot on Opus 4.7** — another in-family Sonnet advantage. The report's Section 3 prompt-caching section enumerates the multiplier prices but does not mention the minimum-prefix-size silent-skip behavior. Source: `_official-prompt-caching.md` line 650.

6. **OMISSION — 4-cache-breakpoint ceiling not mentioned.** The API allows up to 4 explicit `cache_control` breakpoints per request; automatic caching consumes one of those 4 slots. Long agent loops can silently hit the ceiling and return 400 errors. Source: `_official-prompt-caching.md` line 572.

7. **OMISSION — Strict-tool-use grammar 24h expiry latency not mentioned.** Compiled JSON-schema grammars cache for 24 hours from last use; the cache is separate from prompt caching. A strict-tool-use agent that goes idle for >24h pays the grammar-compile latency hit on the next call. Source: structured-outputs doc per Opus 4.7 sibling profile.

8. **OMISSION — Bedrock/Vertex deprecation calendar divergence from first-party not mentioned.** Per `_official-models-overview.md` line 53: only Claude Platform on AWS follows Anthropic's first-party deprecation calendar; Bedrock-direct and Vertex-direct callers can be deprecated on different schedules. This is a non-trivial enterprise-migration consideration for Sonnet 4.6 just as much as for Opus 4.7.

9. **OMISSION — Pooled Sonnet 4.x rate limits not quantified.** The report (line 156) notes that Sonnet 4.x rate limits pool across Sonnet 4.6, Sonnet 4.5, and Sonnet 4 but does not give the tier numbers. Per the Opus 4.7 Round 2 profile, Opus 4.x Tier 1 is 50 RPM / 500k ITPM / 80k OTPM. The Sonnet 4.x tier numbers are knowable from the same official rate-limits page. The report should cite them.

10. **OMISSION — Cache hits do not count against ITPM.** Per Opus 4.7 Round 2 profile's verified quote from the rate-limits doc: "For most Claude models, only uncached input tokens count towards your ITPM rate limits… `cache_read_input_tokens` (tokens read from cache) ✗ Do NOT count towards ITPM for most models." This applies to Sonnet 4.6 and is a major operational fact for cache-warm workloads. Not surfaced in Section 3.

11. **OMISSION — Claude Mythos Preview / Project Glasswing not mentioned.** Per `_official-models-overview.md` line 47, Claude Mythos Preview is positioned as a research preview model for defensive cybersecurity (invitation-only, Project Glasswing). Sonnet 4.6 sits below Mythos in the cybersecurity routing decision tree. The report should note Mythos as a categorical out-of-band routing alternative for cybersecurity-specific tasks, even though it's not generally available.

## Hedges to sharpen

1. **Hedge:** "Specific TTFT and tokens/sec figures are not published by Anthropic; they vary by tier, region, and load. [UNKNOWN — would need a fresh third-party benchmark like artificialanalysis.ai for exact TTFT numbers.]" (Section 3 Latency, line 152).
   - **Issue:** The author tagged the gap honestly but did not perform the search. artificialanalysis.ai has a `claude-sonnet-4-6` provider page (shown in WebSearch results this round). The author should fetch it and cite specific numbers.
   - **Action:** Required in next round: WebFetch [artificialanalysis.ai claude-sonnet-4-6 page](https://artificialanalysis.ai/models/claude-sonnet-4-6-adaptive) and cite TTFT/throughput numbers for at least one named provider configuration.

2. **Hedge:** "Some recall drift past 600k tokens [INFERRED from community reports, not formally benchmarked]" (Section 2 Long Context, line 102).
   - **Issue:** "Community reports" without naming a source is the textbook hand-wave hedge. Either cite a specific Reddit thread, GitHub issue, or blog post, or remove the claim.
   - **Action:** Either name a specific community report, OR downgrade to: "Deep in-context coherence at 600k–1M tokens has not been formally published by Anthropic [UNKNOWN — would need a RULER or NIAH benchmark at full window length]."

3. **Hedge:** "Over-refusal rate dropped from 8.50% (Sonnet 4.5) to 0.18% (Sonnet 4.6)" vs. "Opus 4.7 at 0.28% vs. Sonnet 4.6 at 0.41% per Zvi's read of the model card" (cross-reference to Opus 4.7 Round 2 profile).
   - **Issue:** Two different sources cite two different Sonnet 4.6 refusal rates: 0.18% (latent.space) and 0.41% (Zvi). The report uses the lower number without noting the conflict.
   - **Action:** Required: cite both numbers, attribute each to its source, and note the disagreement. Likely cause is different benchmark splits (innocuous-task refusal vs. higher-difficulty benign requests). Pin the specific benchmark each number measures.

4. **Hedge:** "Some edge cases with deeply nested schemas may produce malformed JSON without explicit validation loops [INFERRED]" (Section 2 Structured Output, line 126).
   - **Issue:** Vague speculation. Either find a documented failure case or remove the claim.
   - **Action:** Either cite a specific schema-complexity failure mode (the Anthropic structured-outputs doc documents grammar-size caps per Opus 4.7 Round 2 profile), or remove.

5. **Hedge:** "Adaptive thinking is the key differentiator from Sonnet 4.5" (Section 2 Reasoning, line 28).
   - **Issue:** The actual differentiator from Sonnet 4.5 that matters most operationally is the **1M context window** (Sonnet 4.5 had 200k). Adaptive thinking is one differentiator; context-window upgrade is the bigger one for most real-world routing decisions. The "key" framing overweights the reasoning-feature axis.
   - **Action:** Rewrite to: "Two upgrades from Sonnet 4.5: (a) 1M context window vs. 200k, (b) adaptive thinking added on top of the retained Extended-thinking surface. The context-window upgrade is the bigger operational change for most callers; adaptive thinking is the bigger compute-cost change."

## Sibling differentiation gaps (the killer test)

This is the most important section for Sonnet 4.6's Round 2 work.

1. **GAP — No same-family routing matrix.** The report covers peers (Gemini, GPT-5.x) separately and covers siblings (Opus, Haiku) separately. It lacks a **task-by-task routing table** that makes the in-family decision concrete. Required matrix:

   | Task type | Sonnet 4.6 | Opus 4.7 | Haiku 4.5 | Routing rule (specific) |
   |---|---|---|---|---|
   | Multi-file refactor + test suite | 79.6% SWE-V | 87.6% SWE-V | 73.3% SWE-V | Above ~5 chained tools: Opus 4.7. Below: Sonnet. UX-weighted rubric: Sonnet. |
   | Multi-turn MCP agent (>5 tools) | 61.3% MCP-Atlas | 77.3% MCP-Atlas | `[UNKNOWN]` | Opus 4.7 wins by 16 pts; route Opus 4.7 if budget allows. |
   | Long-document analysis (text-only) | 1M / 750k words | 1M / 555k words | 200k / 150k words | Above 550k words: Sonnet 4.6. Above 200k: not Haiku. |
   | Explicit thinking-budget control | Yes (Extended) | No (Adaptive only) | Yes (Extended) | If pipeline depends on `budget_tokens`: Sonnet or Haiku only. |
   | High-volume triage/classify (<200k context) | $3 / $15 | $5 / $25 | $1 / $5 | Above ~100 calls/session and bounded-quality: Haiku. |
   | Min-cache-prefix workloads (<4k tokens) | 1,024 tok min | 4,096 tok min | `[UNKNOWN]` | Short prompts cache on Sonnet, not on Opus 4.7. |
   | UX-weighted real-world coding rubric | 68/100 (Folkman) | 63/100 (Folkman) | `[UNKNOWN]` | Sonnet 4.6 beats Opus 4.7 by 5 pts at 40% lower cost. |

   **Action:** Add this matrix (or equivalent) to Section 5. The whole point of Section 5 is to make routing decisions concrete; a matrix delivers what prose narrative cannot.

2. **GAP — Routing logic uses Opus 4.6 as comparator throughout Section 5.** As noted in Egoism strikes #1–3, the entire "what Sonnet beats" narrative is built against legacy Opus 4.6, not current flagship Opus 4.7. The Opus 4.7 sibling profile is the right comparator and the dealbreaker requires the rewrite to use Opus 4.7 numbers throughout.

3. **GAP — No specific Sonnet-WINS-vs-Opus-4.7 task surfaced.** Despite the Tyler Folkman benchmark existing and being cited in the Opus 4.7 Round 2 self-research, Sonnet 4.6's own self-profile does not cite it. The Section 5 framing reads as if Sonnet is positioned only as "cheap-enough Opus" with no decisive win — but the Folkman benchmark is a real, named, decisive win. **Sonnet 4.6 is being too humble.** This is a different flavor of in-family bias: deference instead of egoism, but still bias.

4. **GAP — Haiku crossover is fuzzy.** Section 7 entry #4 ("Simple, high-volume, latency-critical tasks under 200k tokens") and Section 5 paragraph on Haiku ("for tasks where Haiku 4.5's reasoning quality is sufficient") use qualitative hand-wave instead of benchmark deltas. Required: at least one task type where Haiku-vs-Sonnet is decided by a specific benchmark delta (e.g., "Tau2-Telecom: Sonnet 97.9% vs. Haiku 83.0% — 15-point gap, route to Sonnet when error cost > 15× Haiku's per-call price savings").

5. **GAP — No statement of which sibling Sonnet 4.6 is positioned to REPLACE.** Anthropic's launch positioning is that Sonnet 4.6 is the routing default for "best speed-intelligence combination." But for callers already on Opus 4.6, the migration question is whether to (a) upgrade to Opus 4.7 (keep Opus tier, lose Extended thinking, get step-change coding), (b) downgrade to Sonnet 4.6 (drop one tier, keep Extended thinking, save 40%), or (c) downgrade to Haiku 4.5 (drop two tiers, keep Extended thinking, save 80%). The report should give explicit guidance on each migration path.

## Convergence assessment

**Strikes counted:** 5 sycophantic + 5 egoistic + 6 overclaim + 11 omission + 5 hedge + 5 sibling-gap = **37 total strikes**. Well above the ≥5 strike convergence threshold; expected for a first-round self-research and consistent with the Opus 4.7 Round 1 strike count (25).

**Verdict: ITERATE TO ROUND 2.** The author has a competent skeleton — operational facts (pricing, context window, cache pricing, model IDs, lifecycle) all corroborate against `_official-models-overview.md` and `_official-prompt-caching.md`. The benchmark headline numbers (SWE-bench 79.6%, Tau2 97.9/91.7, LMArena Code 1531, GDPval 1,633) all corroborate against WebSearch this round.

**The fatal gap is same-family differentiation:**
- Sonnet 4.6 systematically compares to **legacy siblings** (Opus 4.6, GPT-5.4) instead of **current flagships** (Opus 4.7, GPT-5.5). Same pattern the Opus 4.7 Round 1 dealbreaker called out, in reverse direction.
- The single most important in-family fact — Sonnet 4.6 retains the Extended thinking surface that Opus 4.7 LOST — is **completely unstated**. This is the biggest routing-decision driver between Sonnet 4.6 and Opus 4.7 and the report doesn't say it.
- The single best concrete win Sonnet 4.6 has against Opus 4.7 (Tyler Folkman benchmark, 68/100 vs. 63/100 on real-world coding) is **not cited**. The author is being too humble and missing a decisive routing differentiator.
- The Sonnet-vs-Haiku crossover relies on hand-wave qualifiers ("simple," "sufficient") instead of benchmark deltas. Haiku 4.5's SWE-bench Verified 73.3% (only 6.3 pts behind Sonnet) is the kind of number that should drive the crossover decision but isn't surfaced.

**Round 2 must:**
1. Replace all "Opus 4.6" comparators with "Opus 4.7" throughout Section 5 (and re-source MCP-Atlas, GDPval, GPQA, computer-use scores).
2. Replace all "GPT-5.4" comparators with "GPT-5.5" or note "GPT-5.5 [UNKNOWN]" with the gap acknowledged.
3. Add the Extended thinking surface as Section 5's #1 in-family differentiator.
4. Add the Tyler Folkman benchmark to Section 5 as the decisive Sonnet-WINS-vs-Opus-4.7 entry.
5. Add the task-by-task same-family routing matrix shown in Sibling Gap #1 above.
6. Add the 6 omitted failure modes from the official docs (minimum cache prefix size, 4-breakpoint ceiling, grammar 24h expiry, Bedrock/Vertex calendar divergence, cache-hit ITPM exclusion, pooled Sonnet 4.x rate-limit tier numbers).
7. Sharpen the 5 hedges with named sources or [UNKNOWN] tags.
8. Spot-check the GPQA Diamond 74.1% vs. 89.9% conflict and explain methodology.
9. Fix the JSON schema validation overclaim (the report says Anthropic has "no native JSON schema validation" but `_official-` docs document strict tool use AND JSON outputs).
10. Remove `[INFERRED]` tags from claims that are documented (Batch API pricing, image input formats).

Convergence achievable in Round 2 if author tackles items 1-4 aggressively. Items 5-10 are mechanical cleanups. If the same-family routing matrix and Extended-thinking-surface differentiator land in Round 2, Round 3 is not needed.
