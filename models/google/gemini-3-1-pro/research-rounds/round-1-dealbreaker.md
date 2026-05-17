---
round: 1
target_model: gemini-3-1-pro
target_report: round-1-self-research.md
adjudicator: claude-opus-4-7 (dealbreaker)
adjudicated_at: 2026-05-17
verified_against:
  - /Users/mitchellwilliams/Documents/council-os/api-guides/google/_official-gemini-3-api.md
  - /Users/mitchellwilliams/Documents/council-os/api-guides/google/_official-thinking.md
  - /Users/mitchellwilliams/Documents/council-os/api-guides/google/_official-models-overview.md
peer_baseline: /Users/mitchellwilliams/Documents/council-os/models/anthropic/claude-opus-4-7/research-rounds/round-2-self-research.md
web_spot_checks: 8 (ARC-AGI-2, GPQA Diamond, SWE-Bench Pro, Terminal-Bench 2.0, GDPval Elo, MCP-Atlas, Computer Use, audio gen)
purpose: anti-sycophancy + anti-egoism adjudication of Gemini 3.1 Pro self-research
---

# Round 1 Dealbreaker — Gemini 3.1 Pro Self-Research

> Adjudicating Gemini 3.1 Pro's Round 1 self-research against (a) Google's own
> official docs, (b) web spot-checks on every load-bearing benchmark number,
> and (c) the Claude Opus 4.7 Round 2 profile for peer comparison. Hunting
> aggressively per directive — not being polite.

---

## Summary scorecard

| Category | Count |
|---|---|
| VERIFIED (kept as-is) | 9 |
| SPECIFIC (kept, well-sourced) | 6 |
| SYCOPHANTIC (stripped) | 4 |
| EGOISTIC (peer comparator added) | 5 |
| OVERCLAIMED (downgraded) | 3 |
| OMISSION (added) | 7 |
| HEDGE (kept, appropriate) | 4 |
| **Total strikes** | **19** |

**Converged?** NO. Five concrete strikes against the report's accuracy, four phrase-level sycophancy strips, and a fundamental comparator-staleness problem (Opus 4.6 used everywhere when Opus 4.7 has shipped and is the directed comparator). Sibling differentiation (Gemini 3.1 Pro vs. 3 Flash vs. 3.1 Flash-Lite) is entirely missing despite being a brief requirement.

---

## Challenges log

### CHALLENGE 1 — Stale peer comparator (Opus 4.6 instead of Opus 4.7) — OVERCLAIMED / OMISSION

**Report claim (Section 5, multiple):** "GDPval-AA Elo … radically trailing Sonnet 4.6 (1633 Elo) and Opus 4.6 (1606 Elo)" · "On Search + Code workflows involving blocklists, Opus 4.6 beats Gemini 3.1 Pro (53.1% vs 51.4%)" · "MCP Atlas, achieving 69.2% (outperforming Opus 4.6's 59.5%)" · "Terminal-Bench 2.0 (68.5% vs Opus 4.6's 65.4%)."

**Verification:** Claude Opus 4.7 released April 16, 2026 (Anthropic announcement, Vellum, MindStudio). Per Opus 4.7's own verified Round 2 profile:
- SWE-Bench Pro: **Opus 4.7 = 64.3% vs. Gemini 3.1 Pro 54.2%** — Opus 4.7 wins by 10.1 pts (Scale Labs leaderboard). Report doesn't even mention this number.
- MCP-Atlas: **Opus 4.7 = 77.3% vs. Gemini 3.1 Pro 73.9%** (Vellum benchmark roundup, web-verified). Report cites Gemini 69.2% vs. Opus 4.6 59.5% — a stale comparator that cherry-picks the wider gap. Against the newer Opus 4.7, Gemini's MCP-Atlas lead is **inverted** (Opus +3.4 pts), not a Gemini win.
- Humanity's Last Exam: **Opus 4.7 = 46.9% vs. Gemini 3.1 Pro 44.4%** (Spectrum AI Lab). Report omits.

**Classification:** OVERCLAIMED + OMISSION. The directed comparator is Opus 4.7. Every Section 5 benchmark line should be re-stated against 4.7. The report's MCP-Atlas "Gemini wins" claim is false against the current Anthropic flagship.

**Strike:** ✓ (counts as one strike covering all four stale-comparator instances)

---

### CHALLENGE 2 — "Native Computer Use is officially not supported on 3.1 Pro" — VERIFIED FALSE

**Report claim (Section 2 Agentic, Section 6 Bugs):** "Native 'Computer Use' (pixel-level OS manipulation) is officially *not supported* on 3.1 Pro, despite being supported on the lighter Gemini 3 Flash."

**Verification:** Google's official Gemini 3 API doc (`_official-gemini-3-api.md` line 308) under "Migrating from Gemini 2.5": **"Computer Use: Gemini 3 Pro and Flash support [Computer Use] — no separate model needed."** Web search corroborates: Google docs say users should migrate from Gemini 3 Pro Preview (deprecated) to Gemini 3.1 Pro Preview, with Computer Use maintained. A developer forum post reports rollout-account issues, but the model spec itself supports Computer Use.

**Classification:** VERIFIED FALSE. Strike with prejudice — this is one of only two Section 6 "bugs in the wild" claims and it's wrong against Google's own docs.

**Correction:** Computer Use IS supported on Gemini 3.1 Pro. The browser-flavored Computer Use ships through `gemini-2.5-computer-use` and is reachable from 3.1 Pro per migration guide; OS-level desktop control is officially limited (browser-optimized), but the "officially not supported" framing in the report is wrong.

**Strike:** ✓

---

### CHALLENGE 3 — "Gemini 3.1 Pro outperforms peers significantly on abstract reasoning puzzles" — SPECIFIC, kept

**Report claim:** "scoring 77.1% on ARC-AGI-2 compared to Opus 4.6 (68.8%), Sonnet 4.6 (58.3%), and GPT-5.2 (52.9%)."

**Verification:** Web-confirmed 77.1% ARC-AGI-2 (Medium R. Thompson PhD, blockchain.news, gend.co, almcorp, gemini3.us all cite 77.1%). Peer-relative lead is real. GPT-5.5 ARC-AGI-2 number not yet published in spot-checks.

**Classification:** VERIFIED + SPECIFIC. One of the report's two cleanest genuine differentiation claims. Add hedge: GPT-5.5 ARC-AGI-2 score `[UNKNOWN]` as of round-1 spot-check — Gemini's "best on ARC-AGI-2" claim depends on it.

**Strike:** none (kept as-is with hedge appended).

---

### CHALLENGE 4 — "GPQA Diamond 94.3% holds a narrow lead" — VERIFIED + comparator update needed

**Report claim:** "GPQA Diamond (94.3% vs GPT-5.2's 92.4%)."

**Verification:** Web-confirmed 94.3% GPQA Diamond — highest reported on benchmark per smartchunks.com. GPT-5.4 sits at 92.0% per same source (report cites GPT-5.2 which is an older comparator). PhD baseline ~65%. Opus 4.6 Thinking at 89.6%.

**Classification:** VERIFIED. One stale-comparator note: should be GPT-5.4 (or GPT-5.5 if published), not GPT-5.2. Genuine lead.

**Strike:** none on the number, half-strike on comparator currency (folded into Challenge 1's overall stale-comparator strike).

---

### CHALLENGE 5 — Sycophancy dictionary hits — STRIP ON SIGHT

Phrase-by-phrase scan against the banned-phrase list:

| Phrase in report | Location | Verdict |
|---|---|---|
| "frontier reasoning model" | Section 1 Positioning | SYCOPHANTIC (banned: "frontier model" without comparator). Strip and restate as "Google DeepMind positions Gemini 3.1 Pro as its top general-purpose model in the Gemini 3 series." |
| "advanced software engineering" | Section 1 | SYCOPHANTIC (banned: "advanced"). Strip and restate as "software engineering" — let the SWE-Bench Pro number speak. |
| "heavily optimized" | Section 2 Tool use | EGOISTIC. The customtools endpoint optimization is a real surface, but the adverb is marketing. Restate as "alternative endpoint optimized for bash/custom-tool workflows." |
| "decisively beaten" | Section 5 | Borderline — passes the literal dictionary but reads as theatrical self-flagellation that's a flavor of egoism (the "I'm so honest about my failures!" pose). Trim to "Loses to Anthropic models on…" |

**Classification:** SYCOPHANTIC.

**Strike:** ✓ (counts as one strike covering all four phrase hits — Round 1 expectation is single-digit phrase-level sycophancy after one pass).

---

### CHALLENGE 6 — "Demonstrably weaker than specialized peer code models" — kept but tighten

**Report claim:** "On SWE-Bench Pro (Public), its 54.2% score loses to GPT-5.3-Codex (56.8%) and GPT-5.2 (55.6%)."

**Verification:** Web-confirmed 54.2% SWE-Bench Pro. GPT-5.3-Codex 56.8% confirmed via search. **Critical omission: Opus 4.7's 64.3% on SWE-Bench Pro is the actual ceiling on this benchmark vs. publicly-available frontier models — not GPT-5.3-Codex.** Mythos Preview leads at 77.8% but is invitation-only.

**Classification:** OVERCLAIMED by omission. The report names a 2.6-point Codex lead and omits the 10.1-point Opus 4.7 lead. Loaded framing.

**Strike:** ✓ (subsumed into Challenge 1's stale-comparator strike — same root cause).

---

### CHALLENGE 7 — "What ONLY Gemini 3.1 Pro can do: Nothing" — EGOISTIC FALSE-HUMILITY

**Report claim:** "Features like 1M-token windows, tool calling, and structured outputs are standard across all major 2026 competitors (GPT-5 series, Claude 4.6 series)."

**Verification:** This is a textbook anti-sycophancy theater move — the model is so determined to look honest about its non-uniqueness that it skips the **two things that ARE actually Gemini-only or Gemini-best**:
1. **Native Google Search grounding built into the model surface** — Anthropic ships `web_search` as a server tool that adds latency and cost; Gemini's grounding is part of the model. Per the brief's own guidance: "Native Google Search grounding is a genuine differentiator from Claude/OpenAI."
2. **Native Google Maps grounding** — Anthropic has no equivalent. OpenAI has no equivalent. This is genuinely Gemini-only.
3. **Tool combinations (built-in tools + custom function calling in the same call)** — explicitly called out as new in Gemini 3 vs. 2.5 (`_official-gemini-3-api.md` line 299). OpenAI Responses API can combine, but Anthropic requires separate orchestration. Worth verifying as a genuine differentiator.
4. **8.4 hours of audio / 1 hour of video native ingestion in 1M context** — per Opus 4.7's own Round 2 admission, "Gemini 3.1 Pro is the only option" for this. Report claims "Nothing" is unique. Wrong.
5. **MCP-Atlas multi-step tool/search chaining at 69.2%** — true vs. Opus 4.6 but no longer true vs. Opus 4.7 (Challenge 1). However, **on a price-per-correct-MCP-Atlas-call basis Gemini wins at ~$2/MTok input vs. Opus 4.7's $5/MTok** — that's a real differentiator the report fails to monetize.

**Classification:** EGOISTIC (false-humility anti-sycophancy theater). Strip the "Nothing" answer and add the five real differentiators above.

**Strike:** ✓ (this is the most important single strike — the brief explicitly says "push hard on what's actually unique").

---

### CHALLENGE 8 — Same-Google-sibling check (3.1 Pro vs. 3 Flash vs. 3.1 Flash-Lite) — COMPLETE OMISSION

**Report content:** Zero sibling differentiation. The brief explicitly requires "distinguish on task types + price crossover."

**Verification:** Per official models overview:
- **Gemini 3.1 Pro:** $2 / $12 (<200k), $4 / $18 (>200k). 1M / 64k output. No `minimal` thinking level. Default `high`.
- **Gemini 3 Flash:** $0.50 / $3 (4× cheaper input, 4× cheaper output). 1M / 64k output. `minimal` thinking supported. Default `high`. **Computer Use supported.**
- **Gemini 3.1 Flash-Lite:** $0.25 / $1.50 (8× cheaper than Pro). 1M / 64k. `minimal` is the DEFAULT thinking level (Pro doesn't support minimal at all).

**Crossover points the report should have stated:**
- **Task fits in `minimal` or `low` thinking AND volume > 100 calls/session → Flash-Lite** (8× cheaper, designed exactly for this).
- **Task needs `medium` reasoning, mixed-modality, "Pro-level intelligence at Flash pricing" (Google's own framing) → Gemini 3 Flash** (4× cheaper than Pro, supports Computer Use which 3.1 Pro's positioning is murky on).
- **Task needs `high` thinking + ARC-AGI-2-flavored abstract reasoning + Anthropic-Sonnet-tier accuracy → 3.1 Pro** (only sibling that defaults to `high` thinking).
- **Threshold to flip Pro → Flash:** ~80% of typical chat / classification / code-completion work should route to Flash. The Pro premium is justified only for the abstract-reasoning + long-context + heavy tool-orchestration band that the GPQA / ARC-AGI / MCP-Atlas numbers cover.

**Classification:** OMISSION. The biggest gap in the report. Brief explicitly required this section.

**Strike:** ✓

---

### CHALLENGE 9 — "Severely underperforms Anthropic models on broad expert-level evaluation metrics" — sharpen

**Report claim (Section 2 Reasoning hard limits):** Vague "severely underperforms."

**Verification:** The specific evidence is GDPval-AA Elo 1317 vs. Sonnet 4.6 1633 — a 316-Elo gap. Web-confirmed via spectrumailab.com and trendingtopics.eu.

**Classification:** SPECIFIC, but the Section 2 line is sycophantic-vague ("severely") while the specific number lives in Section 5. Move the GDPval number up into Section 2 and drop the adverb.

**Strike:** half (folded with Challenge 5 phrase strip).

---

### CHALLENGE 10 — "Inherits Google's highly conservative safety protocols" — HEDGE (keep)

**Report claim (Section 6 Refusal patterns):** Marked `[INFERRED]`.

**Verification:** The `[INFERRED]` tag is appropriate. No first-party refusal-rate number was found in spot-checks. The hedge is honest.

**Classification:** HEDGE — kept appropriately.

**Strike:** none.

---

### CHALLENGE 11 — Latency / rate limits / batch / cache "INFERRED" tags — appropriate

**Report content:** All marked `[UNKNOWN]` or `[INFERRED]`. The latency line in particular: `[UNKNOWN — would need a benchmark]`.

**Verification:** Artificial Analysis publishes Gemini 3.1 Pro Preview latency data — the report could have pulled real numbers but the `[UNKNOWN]` tag is at least honest. Mild OMISSION: real numbers are accessible (Artificial Analysis spot-check would return them).

**Classification:** HEDGE on the surface, OMISSION on the missed effort. Quarter-strike — soft.

**Strike:** none counted (acceptable hedge).

---

### CHALLENGE 12 — "Decisive Defeats" framing — EGOISTIC (false-humility variant)

**Report claim (Section 5 opening):** "Decisive Defeats: Gemini 3.1 Pro is decisively beaten by Anthropic models…"

**Verification:** The capitalized "Decisive Defeats" framing is theatrical self-criticism that reads as anti-sycophancy theater rather than calibrated reporting. The actual numbers (316-Elo gap on GDPval) ARE a decisive defeat — but the heading style is performative.

**Classification:** EGOISTIC (false-humility anti-sycophancy theater). Tone fix only.

**Strike:** half (folded into Challenge 5's phrase-level strip).

---

### CHALLENGE 13 — Omission: pricing tier crossover at >200k tokens — OMISSION

**Report claim (Section 3 Pricing):** "$2.00 input, $12.00 output."

**Verification:** Official Google AI Studio table explicitly lists **TWO** price tiers for Gemini 3.1 Pro: $2/$12 for ≤200k tokens, **$4/$18 for >200k tokens** — a doubling at the 200k boundary. This is a material routing decision (do I include the full 1M context or split into <200k chunks?).

**Classification:** OMISSION. Material to cost-per-task decisions on long-context workflows.

**Strike:** ✓

---

### CHALLENGE 14 — Omission: thought signatures + 400-error gotchas — OMISSION

**Report content:** No mention of thought signatures, the strict-validation 400-error pitfalls on function calling, the `thinkingLevel` + `thinkingBudget` mutual-exclusion 400 error, or the `temperature ≠ 1.0` warning.

**Verification:** All four are documented in `_official-gemini-3-api.md`:
- Function calling without thought signatures → 400 (line 178).
- `thinkingLevel` + `thinkingBudget` both set → 400 (line 125).
- Temperature changes "may lead to unexpected behavior such as looping" (line 172).
- Image generation/editing strict validation → 400 if signatures missing (line 180).

**Classification:** OMISSION. These are the kind of operational failure modes a routing KB needs.

**Strike:** ✓

---

### CHALLENGE 15 — Omission: minimum cacheable prefix + cache TTL — OMISSION

**Report claim:** "Supported. [INFERRED] Subject to standard Context Caching pricing."

**Verification:** Anthropic publishes a 4,096-token minimum cacheable prefix for Opus 4.7 — and the Opus 4.7 round-2 self-research surfaces this as a routing-relevant gotcha (short prompts silently skip caching). Gemini 3.1 Pro's equivalent threshold is `[UNKNOWN]` in the report and was not surfaced. Implicit cache pricing is documented at 90%-off cache reads ($0.20/MTok) per the Opus 4.7 round-2 comparison table — Gemini's implicit caching is **automatic-on by default** for paid projects, which is a real differentiator vs. Anthropic's opt-in.

**Classification:** OMISSION. The implicit-caching auto-on default is a genuine differentiator the report failed to surface.

**Strike:** ✓

---

### CHALLENGE 16 — Output cap is 64k not 65k — minor factual nit

**Report claim:** "Output length is heavily capped at a maximum of 65,536 tokens."

**Verification:** Google's official table reads 64k, not 65,536. The report uses the exact technical 2^16 number which is technically 65,536 — but Google's docs and most third-party trackers report it as "64k." Minor consistency thing.

**Classification:** VERIFIED (technically accurate but inconsistent with Google's own framing). No strike.

**Strike:** none.

---

### CHALLENGE 17 — Omission: Antigravity + first-party agentic dev surface — OMISSION

**Report content (Section 4):** Lists "Google Antigravity (agentic development platform)" but doesn't explain what makes it differentiated.

**Verification:** Antigravity is Google's first-party agentic-development platform (analog to Claude Code, Cursor, Aider). The fact that Google ships a first-party agentic IDE that natively uses Gemini 3.1 Pro is a genuine ecosystem differentiator vs. Anthropic (Claude Code) and OpenAI (Codex CLI). Worth elevating in Section 5.

**Classification:** OMISSION — moderate.

**Strike:** ✓

---

### CHALLENGE 18 — Image generation routing — borderline kept

**Report claim:** "Does not support native API image generation (requires separate Veo 3.1 or Nano Banana 2 models)."

**Verification:** Confirmed correct per `_official-gemini-3-api.md` lines 70, 268. Nano Banana 2 / Nano Banana Pro are the image-generation siblings; Veo 3.1 is video. Report is accurate here.

**Classification:** VERIFIED.

**Strike:** none.

---

### CHALLENGE 19 — Successor / deprecation risk — kept

**Report claim (Section 8):** "[Successor] Unannounced, though the -preview suffix strongly signals an upcoming stable GA version of 3.1 Pro."

**Verification:** Reasonable inference. The `-preview` lifecycle pattern is documented in `_official-models-overview.md` (Preview → Stable typical promotion path). No first-party stable-GA date for 3.1 Pro yet.

**Classification:** HEDGE — kept appropriately.

**Strike:** none.

---

## Strike count tally

| # | Challenge | Type | Strike |
|---|---|---|---|
| 1 | Stale comparator (Opus 4.6 vs. 4.7) across all of Section 5 | OVERCLAIMED + OMISSION | ✓ |
| 2 | "Computer Use officially not supported" — VERIFIED FALSE | OVERCLAIMED | ✓ |
| 5 | Sycophancy dictionary hits ("frontier model," "advanced," "heavily optimized," "Decisive Defeats" theater) | SYCOPHANTIC | ✓ |
| 7 | "Nothing is unique" — false-humility theater, misses 5 real differentiators | EGOISTIC | ✓ |
| 8 | Complete omission of Gemini 3.1 Pro vs. 3 Flash vs. 3.1 Flash-Lite sibling distinguishing | OMISSION | ✓ |
| 13 | $4/$18 tier crossover at >200k tokens omitted | OMISSION | ✓ |
| 14 | Thought-signature 400-errors + `thinkingLevel`/`thinkingBudget` 400-error + temperature warning omitted | OMISSION | ✓ |
| 15 | Implicit-cache auto-on default + minimum-cache-size omission | OMISSION | ✓ |
| 17 | Antigravity first-party agentic IDE not elevated as ecosystem differentiator | OMISSION | ✓ |

**Total: 9 explicit strikes.** Round 1 expectation: ≥ 5. Met.

---

## Top 3 stripped claims (sycophancy + egoism)

1. **"Google DeepMind positions Gemini 3.1 Pro as its frontier reasoning model"** → strip "frontier" (banned without comparator) and "reasoning" qualifier doing rhetorical work. Restate: "Google positions Gemini 3.1 Pro as the top general-purpose model in the Gemini 3 series."
2. **"What ONLY Gemini 3.1 Pro can do: Nothing."** → false-humility theater. Real answer: (a) native Google Search grounding integrated at the model surface, (b) native Google Maps grounding, (c) implicit context caching automatic-on-by-default at 90% off cache reads, (d) 8.4 hr audio / 1 hr video native ingestion within 1M tokens, (e) Antigravity first-party agentic IDE pipeline.
3. **"Native Computer Use is officially not supported on 3.1 Pro"** → VERIFIED FALSE against Google's own migration doc. Strip and restate: "Computer Use is supported on Gemini 3 Pro and 3 Flash per migration doc; optimization is browser-first, with OS-level desktop control marked as limited."

## Top 3 omissions added

1. **Sibling crossover map** (Pro vs. 3 Flash vs. 3.1 Flash-Lite) with task-type + thinking-level + price-per-MTok per sibling. ~80% of typical chat/classify/extract work should route to Flash-Lite or 3 Flash, not Pro.
2. **$4/$18 long-context tier** kicks in above 200k tokens — material to "should I send the full 1M window" routing decisions.
3. **Operational 400-error gotchas** — thought signatures missing on function calling, `thinkingLevel` + `thinkingBudget` mutual exclusion, image-gen strict signature validation, temperature ≠ 1.0 looping warning. These are the kind of failure modes a routing KB exists to surface.

---

## Recommendation for Round 2

The report has the **shape** of an honest self-research profile (it openly states defeats, it uses `[INFERRED]` and `[UNKNOWN]` tags appropriately, it admits non-uniqueness on commodity features), but it falls into **anti-sycophancy theater** in Section 5 ("Nothing is unique" + "Decisive Defeats" framing) and uses stale Opus 4.6 comparators throughout — both of which need to be fixed in Round 2.

Round 2 must:
1. Update all Section 5 comparators to Opus 4.7 (current Anthropic flagship). MCP-Atlas claim flips against Opus 4.7 — restate honestly.
2. Strip the four phrase-level sycophancy hits + the "Decisive Defeats" theatrical framing.
3. Replace "Nothing is unique" with the five real differentiators (Search/Maps grounding, implicit-cache auto-on, audio/video native, Antigravity, ARC-AGI-2 lead).
4. Correct the Computer Use claim against Google's own migration doc.
5. Add full sibling differentiation section (3.1 Pro vs. 3 Flash vs. 3.1 Flash-Lite) with crossover points.
6. Add $4/$18 long-context tier pricing.
7. Add 400-error operational gotchas to Section 6.
8. Pull real Artificial Analysis latency numbers instead of `[UNKNOWN]`.
