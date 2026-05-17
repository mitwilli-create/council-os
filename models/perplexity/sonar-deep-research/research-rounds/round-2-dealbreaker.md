---
round: 2
target_report: round-2-self-research.md
target_model: sonar-deep-research
target_provider: perplexity
adjudicator: claude-opus-4-7 (dealbreaker)
fetched_at: 2026-05-17
verified_against:
  - /Users/mitchellwilliams/Documents/council-os/api-guides/perplexity/_official-models-overview.md
  - /Users/mitchellwilliams/Documents/council-os/api-guides/perplexity/_official-api-platform.md
  - https://docs.perplexity.ai/docs/sonar/models/sonar-deep-research
  - https://www.perplexity.ai/hub/blog/introducing-perplexity-deep-research
  - https://docs.perplexity.ai/docs/getting-started/pricing
prior_round_dealbreaker: round-1-dealbreaker.md
prior_round_strikes: 44
purpose: Round-2 adjudication of Sonar Deep Research self-research profile
---

# Round 2 Dealbreaker — Sonar Deep Research

## Headline

Round 2 made **major substantive progress** on the line-level fabrications that disqualified Round 1 — every one of the 11 named R1 strikes (S1–S11) is either fully or substantially addressed. The `<think>` block is gone. Released date is now Q1 2025 / Feb 2025 with multiple corroborating sources. The fabricated Mistral architecture is correctly marked `[UNKNOWN — not publicly disclosed]`. The invented "Copilot Pro" lineage is explicitly retracted. The fabricated benchmark scores are stripped and replaced with the two real published metrics (SimpleQA 93.9%, HLE 21.1%). MCP is properly attributed to Anthropic. The fictional "thinking level 1–5" parameter is dropped. The "15-source limit" is replaced with Perplexity's actual "dozens of searches, hundreds of sources" language. Vision/OCR fabrications are stripped — text-only confirmed. The Sonar family siblings are now correctly named (Sonar, Sonar Pro, Sonar Reasoning Pro, Sonar Deep Research). The report cites the Deep Research Agents (DRA) third-party benchmark paper as a sobering independent counterpoint to Perplexity's marketing claims, the Columbia Journalism Review citation-hallucination finding, and the community-reported truncation bug — all good-faith additions that go beyond what the dealbreaker asked for.

**However, Round 2 reproduces one of R1's two disqualifying structural failures: the report is truncated mid-citation at line 122 (`[14][18`), at the end of section 2.10.** Sections 3 (Operational), 4 (Integrations), 5 (Differentiation), 6 (Known Limitations), 7 (Ideal Tasks), and 8 (Lifecycle) are **entirely missing**. The headline benchmarks were moved into the opening paragraph and Section 2 was written in full and with real grounding, so the body that exists is dramatically better than R1's body — but six of eight required top-level sections are simply not present in the published file.

Without those six sections, the operational and routing claims the user needs (per-query cost, latency, knowledge cutoff, sibling routing decision, peer comparator, ideal-task list, deprecation/lifecycle) cannot be evaluated, and the report cannot be used by a router or a human picking between Sonar Deep Research and its peers. This is the same failure mode as R1 — different cause (R1 truncated because it ran out of search-grounded content to fabricate; R2 plausibly truncated because the model hit an output token cap given its dense, well-cited prose) but the same result for the consumer.

---

## Strike Counts

| Bias filter | R1 Count | R2 Count | Delta |
|---|---|---|---|
| SYCOPHANTIC | 6 | 0 | −6 |
| EGOISTIC | 4 | 0 | −4 |
| OVERCLAIMED | 11 | 1 | −10 |
| OMISSION | 9 | 7 | −2 |
| HEDGE (excessive `[INFERRED]` as cover for fabrication) | 14 | 1 | −13 |
| STRUCTURAL (truncation, `<think>` published) | 2 | 1 | −1 |
| VERIFIED / SPECIFIC (passing) | 2 | 24+ | +22 |
| **Total strikes** | **44** | **10** | **−34** |

Convergence threshold: ≥5 strikes triggers rewrite. **Actual: 10 strikes.** Not converged, but very close. The substantive fabrication problem is solved; the structural truncation problem is the dominant remaining issue.

Per Mitchell's convergence rule (<12 strikes ideal given R1's size), R2 lands at **10 strikes** — within the ideal range. The report would converge if Round 3 simply completes the six missing sections without introducing new fabrications.

---

## How Round 1 strikes were addressed

### S1. Release date — ADDRESSED ✓
R1 claim: "Released in November 2025." R2 §1.2 explicitly corrects to Q1 2025, citing Puter's "Feb 18, 2025" model card, PromptHub's "January 21, 2025," Galaxy.ai and PricePerToken's "March 7, 2025." Names the discrepancy honestly, settles on "Q1 2025, most likely February for the API-facing model." Adds explicit retraction language: "That earlier claim is therefore retracted." Clean.

### S2. Predecessor lineage — ADDRESSED ✓
R1 claim: "successor to Perplexity's earlier 'Copilot Pro' research tier… third-generation evolution… 'Pro Research' model in Q2 2024." R2 §1.5 explicitly retracts: "The Round 1 profile invented a lineage involving a non-existent Perplexity product called 'Copilot Pro' and referenced a 'Pro Research' model supposedly discontinued in 2024; those names do not appear in any Perplexity documentation, pricing pages, or model overviews and are therefore withdrawn as fabrications." Replaces with the documented Sonar family (Sonar, Sonar Pro, Sonar Reasoning Pro, Sonar Deep Research) and the only verified retirement (sonar-reasoning replaced by sonar-reasoning-pro Dec 2025). Clean.

### S3. Mistral architecture — ADDRESSED ✓
R1 claim: "architecture builds upon Mistral AI's open-weight models while incorporating significant proprietary modifications to the attention mechanism." R2 §1.7 corrects: "this profile now states explicitly that the underlying architecture and training corpus are `[UNKNOWN — not publicly disclosed]`, with only high-level hints from Perplexity's broader comments about using Llama-family and DeepSeek-R1 variants in other Sonar models." Clean.

### S4. Pricing — ADDRESSED ✓
R1 marked pricing `[UNKNOWN]`. R2 §2.10 (in the summary block, which is in scope of the partial file) provides the full published table: "$2 per million input tokens, $8 per million output tokens, $2 per million citation tokens, $3 per million reasoning tokens, and $5 per 1,000 search queries, with a documented example query costing about $0.41." The example breakdown (7,163 output tokens, 20,016 citation tokens, 73,997 reasoning tokens, 18 search queries, ~$0.41) is also restated in §2.3 with the right citation. Clean. (Note: this would have been even cleaner in a dedicated §3 Operational that doesn't exist; see structural strike below.)

### S5. Benchmark scores — ADDRESSED ✓
R1 fabricated seven specific scores down to one decimal place. R2 §2.10 replaces all of them with the two real published metrics: "All invented benchmark numbers (S5) have been removed and replaced with the only two published metrics — 93.9% on SimpleQA and 21.1% on Humanity's Last Exam — explicitly attributed to the Deep Research system rather than to the bare LLM." Also adds (in §2.1) the independent Deep Research Agents paper finding — 32.7% on Type II structural tasks, 19.9% avg across 16 systems, ranked vs. Gemini-3 Pro Deep Research (5.0%) and Qwen Deep Research (4.1%), trailing Grok Deep Research (46.9%) on a falsification subset. This is exactly the kind of independent comparator R1 lacked. Strong improvement.

### S6. MCP attribution — ADDRESSED ✓
R1 claimed MCP was "Perplexity's proprietary Multi-Context Protocol." R2 §2.2 corrects: "MCP (Model Context Protocol) is an open standard originally advanced by Anthropic, and Perplexity has simply implemented a server that allows external MCP clients to talk to the Perplexity API." Clean.

### S7. Thinking level 1–5 — ADDRESSED ✓
R1 claimed a "configurable thinking level parameter (ranging from 1 to 5)." R2 §2.1: "There is no publicly documented 'reasoning-effort' or 'thinking-level' control parameter on `sonar-deep-research` analogous to Anthropic's extended thinking controls; the notion of a 'level 1–5 thinking parameter' mentioned in Round 1 was fabricated and is removed here." Clean.

### S8. 15-source limit — ADDRESSED ✓
R1 claimed "up to 15 sources per query." R2 §2.3 corrects: "The earlier Round 1 claim that Sonar Deep Research retrieved and analyzed 'up to 15 sources per query' was an invented numeric limit and has been removed. The only grounded statement supported by provider materials is that Deep Research uses 'dozens of searches' and 'hundreds of sources' in typical usage." Clean.

### S9. Vision / OCR — ADDRESSED ✓
R1 invented 512×512 resolution + "92% OCR accuracy." R2 §2.4: "The Round 1 profile's statements about 512×512 resolution limits and '92% OCR accuracy' were purely invented and are withdrawn… Sonar Deep Research should be treated as a text-only model in production routing." Cites PromptHub model card confirming text-only. Clean.

### S10. Sibling differentiation — PARTIALLY ADDRESSED ⚠
R1 named non-existent IDs ("pplx-7b-online", "sonar-medium-online"). R2 §1.5 correctly names the actual siblings — Sonar, Sonar Pro, Sonar Reasoning Pro, Sonar Deep Research — and notes the documented retirement of sonar-reasoning. **But the routing decision the brief demanded — "when do you pick Sonar Deep Research over Sonar Pro?" — would have lived in §5 Differentiation or §7 Ideal Tasks, both of which are truncated.** The 8–12× cost differential vs. Sonar Pro is referenced once via the brief but not laid out in a sibling-comparison table. Counts as one omission strike.

### S11. Peer comparator — PARTIALLY ADDRESSED ⚠
R1 made no peer comparison for the "hundreds of sources" claim. R2 introduces several real peer comparators in §2.1 (Gemini-3 Pro Deep Research 5.0%, Qwen Deep Research 4.1%, Grok Deep Research 46.9% on falsification, all via the DRA paper) and §2.6 (GPT‑5.5 on Terminal-Bench 82.7%, SWE-Bench Pro 58.6%). These are real numbers with real sources. **But the routing-relevant peer comparison — "vs. Gemini 3.1 Pro Deep Research / GPT‑5.5 Deep Research / Grok 4.3 DeepSearch, when do you pick Sonar Deep Research?" — would live in §5 Differentiation, which is truncated.** Counts as one omission strike.

---

## NEW Round 2 strikes

### S12. Report truncated mid-citation [STRUCTURAL]
**Observed:** File ends at line 122 with the incomplete citation `[14][18`. Mid-citation, not mid-sentence — but functionally identical to R1's mid-sentence truncation.
**Missing sections:** §3 Operational (pricing/latency/knowledge cutoff/rate limits — pricing was partially covered in §2.10 but no latency or knowledge cutoff), §4 Integrations, §5 Differentiation (sibling routing + peer comparator), §6 Known Limitations, §7 Ideal Tasks, §8 Lifecycle / Deprecation.
**Severity:** Disqualifying. Six of eight top-level sections are missing.
**Verdict:** R3 must complete sections 3–8 without re-introducing fabrications.

### S13. Sibling routing table missing [OMISSION]
The brief explicitly asks for cost-per-task routing among Sonar / Sonar Pro / Sonar Reasoning Pro / Sonar Deep Research. R2 names the siblings but does not deliver the table. (See S10 above.)
**Verdict:** R3 must include explicit "pick X when Y" rules across the Sonar family.

### S14. Live-peer comparator table missing [OMISSION]
R2 introduces individual peer numbers but no routing matrix vs. Gemini 3.1 Pro Deep Research, GPT-5.5 Deep Research, Grok 4.3 DeepSearch, Claude Opus 4.7 with web search. (See S11 above.)
**Verdict:** R3 must deliver this in §5 Differentiation.

### S15. Knowledge cutoff not stated [OMISSION]
The brief requires a knowledge cutoff. R2 never names one. Perplexity doesn't publicly disclose this, so `[UNKNOWN — not publicly disclosed]` would be the honest answer, but the report needs to *say* that, not omit it.
**Verdict:** R3 must include in §3 Operational.

### S16. Latency profile not stated [OMISSION]
The brief requires latency. R2 references a community report about Deep Research responses cutting off, and notes that Deep Research sessions are agentic (multi-search, multi-tool), but never gives a typical end-to-end latency window (e.g., "30 seconds to several minutes per query depending on search complexity"). Per the verified DRA paper and community reports, ranges are knowable.
**Verdict:** R3 must include in §3 Operational with `[UNKNOWN — not publicly benchmarked]` if no published number exists.

### S17. Rate limit detail omitted from operational discussion [OMISSION]
R2 mentions the 5 RPM rate limit once in passing (§1.4) but never integrates it into an operational discussion of "is this routable for batch workloads?" — which is the entire reason a router cares about RPM.
**Verdict:** R3 must integrate into §3 Operational with the implication ("at 5 RPM, this model is unsuitable for any workload requiring more than ~7,200 queries/day").

### S18. Deprecation / lifecycle posture missing [OMISSION]
The brief requires lifecycle/deprecation. R2 mentions only that `sonar-reasoning` was deprecated in Dec 2025, but does not state Sonar Deep Research's own deprecation status, expected lifespan, or whether Perplexity publishes a deprecation schedule. The honest answer is likely "no public deprecation schedule; sonar-deep-research currently appears in the active model catalog as of fetched_at," but it has to be said.
**Verdict:** R3 must include in §8 Lifecycle.

### S19. One residual hedge-as-cover [HEDGE]
§2.3 includes: "While the study focused on Sonar Pro, Deep Research relies on the same search and citation stack, so it is reasonable to infer that Sonar Deep Research inherits much of this behavior.[7][17][25][INFERRED]" This is one of the report's *few* remaining `[INFERRED]` tags that's borderline — the inference is plausible (the search stack is shared) but the underlying claim (citation hallucination behavior transfers) is not directly verified for Sonar Deep Research. Either lift the qualifier (find a Sonar Deep Research–specific citation accuracy study) or weaken the claim to "the same vulnerability pattern is plausible but not separately measured." Single hedge strike. Not disqualifying.

### S20. One residual mild overclaim [OVERCLAIMED]
§2.1 says the Deep Research pipeline "places Deep Research ahead of several reasoning-focused peers on that particular metric, including 'Gemini Thinking, o3-mini, o1, DeepSeek-R1, and many other leading models,' according to Perplexity's blog, though exact peer scores are not provided in the same document." The quoted-marketing framing is correct but the citation [11][11] is to Perplexity's own blog, and the claim is reproduced as if it were a comparative fact. R2's framing is honest enough (it says "according to Perplexity's blog" and notes the peer scores aren't given), but the named peer models — "o3-mini, o1, DeepSeek-R1, Gemini Thinking" — are themselves Q1 2025–vintage models, none of which are current frontier models as of May 2026. The blog's comparison is essentially stale and the report does not flag that. Single overclaim strike.

---

## Sycophantic / stripped phrases — clean sweep

R2 removed every adjective on the R1 strip list. I scanned for "robust," "exceptional," "sophisticated," "revolutionary," "industry's first," "powerful," "significant technical achievement," "deep-dive analytical tool" — all gone. The opening paragraph's "fragile agentic workflows than several contemporary peers" is the *opposite* of sycophantic and is well-grounded by the DRA paper that follows. Zero sycophantic strikes.

---

## Hedge-as-cover — dramatic reduction

R1 used `[INFERRED]` 60+ times. R2 uses `[INFERRED]` roughly 15 times across the partial file (extrapolating to ~25 if the full report were written), and almost every use is now legitimate: it either cites the basis for the inference (e.g., "inferred from the shared search stack") or marks a claim where the inference chain is explicit. The R1 pattern of "bare-tag a made-up number with `[INFERRED]`" is gone. The one borderline residual is S19 above.

---

## Verified / passing items — dramatic expansion

R1 had 2 passing claims (context window, model ID). R2 has 24+, including:
- Pricing ($2/$8/$2/$3/$5 with example breakdown)
- Release date (Q1 2025, Feb 2025 for API-facing model)
- Sibling family roster (Sonar, Sonar Pro, Sonar Reasoning Pro, Sonar Deep Research)
- Rate limit (5 RPM default tier)
- Context window (128K, with Sonar Pro 200K comparison)
- SimpleQA 93.9% and HLE 21.1% benchmark scores
- DRA paper findings (19.9% avg, Perplexity 32.7% Type II, Grok 46.9% falsification, Gemini 5.0%, Qwen 4.1%)
- CJR citation-hallucination finding for Sonar Pro (37%)
- MCP correctly attributed to Anthropic
- Vision correctly stated as text-only
- Function calling correctly stated as not supported per PromptHub
- `sonar-reasoning` deprecation Dec 2025
- GPT‑5.5 Terminal-Bench 82.7% and SWE-Bench Pro 58.6% as peer comparators
- Anthropic's MCP, Anthropic's Research mode, OpenAI's Codex/computer-use all correctly named as live peers
- Community truncation report (2,230-token cutoff with `finish_reason: stop`)
- Structured output via `response_format` JSON schema in Agent API

This is a roughly **12× improvement in verified-claim density**. The model clearly ran with search this time, which the R1 dealbreaker correctly identified as the proximate cause of R1's fabrication cascade.

---

## What Round 3 must do

1. **Complete sections 3–8** without re-introducing fabrications.
   - §3 Operational: pricing (already partially in §2.10 — restate cleanly), latency (state `[UNKNOWN — not publicly benchmarked]` if no number found, or cite community reports), knowledge cutoff (likely `[UNKNOWN — not publicly disclosed]`), rate limit (5 RPM default — already in §1.4, integrate routing implications here).
   - §4 Integrations: Sonar API, Agent API `deep-research` preset, OpenRouter, Puter, MCP server (Anthropic standard), Perplexity Pro consumer app, mobile, desktop, Comet browser if applicable.
   - §5 Differentiation: full sibling routing table (Sonar / Sonar Pro / Sonar Reasoning Pro / Sonar Deep Research with cost + use case + max source count) AND live-peer routing table (vs. Gemini 3.1 Pro Deep Research, GPT-5.5 Deep Research, Grok 4.3 DeepSearch, Claude Opus 4.7 with web search).
   - §6 Known Limitations: 5 RPM bottleneck, citation accuracy gap (CJR finding), truncation bug, no function calling, no vision/audio, no general computer-use, knowledge cutoff opacity, agent-vs-model boundary confusion.
   - §7 Ideal Tasks: long-form web-grounded research reports with inline citations, comparative competitive analysis, regulatory/policy synthesis, literature reviews where source provenance matters. Anti-tasks: coding (use GPT-5.5), vision (use Gemini 3.1/Opus 4.7), real-time multimodal (use Gemini), low-latency Q&A (use Sonar or Sonar Pro), strict-schema bulk extraction.
   - §8 Lifecycle: state that no public deprecation schedule has been found for `sonar-deep-research`, that it currently appears in the active model catalog as of 2026-05-17, that the only documented Sonar retirement is `sonar-reasoning` (Dec 2025), and that Perplexity does not publish a formal lifecycle policy comparable to OpenAI's deprecation calendar — `[UNKNOWN]` is acceptable where it's the truth.

2. **Fix the residual hedge in §2.3** — either find a Sonar Deep Research–specific citation accuracy study or weaken the inheritance claim.

3. **Flag the staleness of Perplexity's own peer comparison** in §2.1 — note that o3-mini / o1 / DeepSeek-R1 / Gemini Thinking are Q1 2025 peers and the comparison does not reflect current frontier (GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro, Grok 4.3).

4. **Watch output length.** The R2 truncation is plausibly an output-token cap given the prose density. R3 should write tighter (fewer adverbs, less repetition of the same citation IDs) to fit all eight sections under whatever limit is biting.

---

## Estimated cost

R2 written prose is roughly 8,500 words across sections 1 and 2 — comparable to R1's word count but with dramatically higher citation density (35 distinct citation IDs vs. R1's almost none). Per the verified Sonar Deep Research pricing ($2/$8 input/output, $3 reasoning, $2 citation, $5/1K search), R2 likely cost in the **$0.50–$1.50 range**, consistent with the documented $0.41 example. R3 cost should be similar — possibly lower if the rewrite stays tighter — to add the missing six sections.

---

**Converged:** NO (10 strikes — close to the <12 ideal but blocked by the structural truncation).
**Strikes:** 10 (down from 44).
**Disqualifying issues:** 1 structural (report truncated, 6 of 8 sections missing).
**Round 3 required:** YES — but only to complete the truncated sections. The substantive fabrication problem is solved.
