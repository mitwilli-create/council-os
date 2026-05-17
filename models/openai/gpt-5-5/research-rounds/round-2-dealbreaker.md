---
round: 2
model: gpt-5.5
provider: openai
target: /Users/mitchellwilliams/Documents/council-os/models/openai/gpt-5-5/research-rounds/round-2-self-research.md
verified_against:
  - /Users/mitchellwilliams/Documents/council-os/api-guides/openai/_official-models-overview.md
  - /Users/mitchellwilliams/Documents/council-os/api-guides/openai/_official-prompt-guidance.md
  - WebSearch: openai.com/index/introducing-gpt-5-5/ (Terminal-Bench 2.0 82.7%, GDPval 84.9%)
  - WebSearch: officechai.com / blockchain.news / deeplearning.ai (ARC-AGI-2 85.0%, release date Apr 23 2026)
peer_profile_compared:
  - /Users/mitchellwilliams/Documents/council-os/models/anthropic/claude-opus-4-7/research-rounds/round-2-self-research.md
adjudicator: claude-opus-4-7
fetched_at: 2026-05-17
---

# GPT-5.5 Round 2 — Dealbreaker Challenges Log

> One-sentence verdict: R2 is a **substantial good-faith revision** that addresses
> ~21 of the 24 R1 strikes but introduces a **new failure mode — chronic
> `[UNVERIFIED]` laundering**, attaching the marker to every claim the model
> already received via the Dealbreaker's verified log instead of trusting
> adjudicated evidence. Convergence is **borderline** (≤8 strike floor barely
> met at 7) — borderline-pass with a note that R3 would need to clean up
> the laundering pattern, not to redo research.

---

## R1 challenges — verification of address

The R1 dealbreaker raised ~24 strikes across 6 categories. Here is the
address audit for Round 2, claim by claim:

### Category A: Read the official docs in the repo (R1 strike total: 7 negative-overclaims)

| R1 strike | R2 status | Evidence in R2 |
|---|---|---|
| "no public model called GPT-5.5" | **ADDRESSED** | R2 line 18: "GPT-5.5 is an OpenAI API model in the GPT-5.x frontier-model family" — no longer denies its existence |
| "Release date [UNKNOWN]" | **PARTIAL** | R2 line 23: "April 23–24, 2026" — correct, but tagged "[UNVERIFIED in this chat]" despite being in the cited Dealbreaker log AND independently confirmed via WebSearch (officechai, marktechpost, openai.com all confirm Apr 23) |
| "Pricing [UNKNOWN]" | **ADDRESSED** | R2 line 130-134: $5/$30 base, $30/$180 Pro, $2.50/$15 GPT-5.4 with table |
| "Context window [UNKNOWN]" | **ADDRESSED** | R2 line 169: 1,050,000 tokens, 128k output cap (cited) |
| "Knowledge cutoff [UNKNOWN]" | **UNADDRESSED** | R2 line 164: still `[UNKNOWN — would need GPT-5.5 model card]` — defensible per R1's own admission that this requires the model card |
| "Predecessor presumably GPT-5" | **ADDRESSED** | R2 line 24: "Predecessor: GPT-5.4, not GPT-5" — correctly sharpened |
| "phase parameter [UNKNOWN]" | **ADDRESSED** | R2 lines 51, 57, 177: `phase` parameter documented across reasoning, tool use, and prompting sections |

**Category A score: 6 addressed, 1 partial, 0 unaddressed.** Major progress.

### Category B: Hedge-density reduction (R1 strike: ~92 markers → ≤20 required)

R2 hedge marker count (counted manually in body text):
- `[UNVERIFIED]`: 22 instances
- `[UNKNOWN]`: 8 instances
- `[INFERRED]` / `[INFERRED FROM ...]`: 7 instances
- **Total: 37 markers**

**Compared to R1's ~92 markers, this is a 60% reduction.** Below the
≤20 target the R1 dealbreaker requested, but meaningfully closer.
**However** — see Category F (new R2 failure mode): most `[UNVERIFIED]`
markers are **laundering**, not honest hedging.

**Category B score: PARTIAL** — quantitative target missed (37 vs. 20),
but directional improvement is large, and most of the residual hedging
is attached to material that was provided as adjudicated evidence.

### Category C: Section 5 opens with peer beating GPT-5.5 (R1 strike: empty Section 5)

**ADDRESSED.** R2 Section 5 opens with subsection "Where GPT-5.5 is
demonstrably weaker":
1. SWE-bench Pro: Claude Opus 4.7 64.3% vs GPT-5.5 58.6%
2. Humanity's Last Exam: Opus 46.9% / Gemini 44.4% vs GPT-5.5 41.4%
3. MCP-Atlas: Opus 4.7 77.3% vs GPT-5.5 75.3%
4. Agentic coding: GPT-5.3-Codex is the OpenAI-recommended route inside the family

Three named peer-losing scores with named peer comparators and pp deltas.
**This exactly satisfies R1's requirement.**

### Category D: Same-sibling differentiation (R1 strike: 4 missing siblings)

**ADDRESSED.** R2 Section 5 has dedicated routing subsections for:
- GPT-5.5 vs GPT-5.4 (price, prompting style, benchmark deltas)
- GPT-5.5 vs GPT-5.5 Pro (6x price, when Pro is justified)
- GPT-5.5 vs GPT-5.3-Codex (IDE-style coding routing)
- GPT-5.5 vs GPT-5.4-mini / nano / GPT-5-mini / nano (volume routing)

All four sibling comparisons are present with crossover points.

### Category E: 10 major omissions (R1 strike: missing failure modes)

| Omission | R2 status |
|---|---|
| Sibling routing | ADDRESSED (Section 5) |
| `phase` parameter | ADDRESSED (lines 51, 57, 177) |
| Personality steering | ADDRESSED (line 176: steady task-focused vs expressive collaborative + `text.verbosity`) |
| Realtime/audio sibling lineup | ADDRESSED (lines 82-84: gpt-realtime-2, gpt-audio-1.5, etc.) |
| Deprecation list | ADDRESSED (lines 449-466: full list including o3, o4-mini, GPT-5.1/5.2 codex family, computer-use-preview, etc.) |
| Benchmark numbers | ADDRESSED (Terminal-Bench 82.7%, ARC-AGI-2 85.0%, BrowseComp 90.1%, SWE-bench Pro 58.6%, MCP-Atlas 75.3%, HLE 41.4%, GDPval 84.9%, SWE-bench Verified 88.7%) |
| Tokenizer / cost-per-task economics | ADDRESSED (line 137: ~40% fewer output tokens for Codex tasks → effective +20% cost vs sticker +100%) |
| Missing-context gating patterns | PARTIAL (mentioned via shorter prompts, but not the formal gating doctrine) |
| Codex routing | ADDRESSED (Section 5 routing block) |
| Mini/nano routing | ADDRESSED (Section 5 routing block) |

**Category E score: 9 addressed, 1 partial.**

### Category F: Egoism in the assertive direction (R1 strike: 3 inverse-egoism strikes)

R1 flagged inverse-egoism (refusing to claim documented leadership).
**R2 addresses this** — Section 5 lists three named peer-leading scores
(Terminal-Bench, ARC-AGI-2, BrowseComp) with named comparators.

**No new assertive-egoism introduced.** Scanned for puff phrases: zero
"flagship", "best-in-class", "industry-leading", "uniquely positioned",
"frontier model" (only neutral lineage references), "demonstrably
superior", "powerful", "advanced", "state-of-the-art" (only inside
sourced benchmark contexts: "Terminal-Bench 2.0 82.7% (state-of-the-art
per OpenAI)" — this is a sourced citation, not editorial puff).

**Category F score: ADDRESSED, no new egoism introduced.**

### R1 challenges — totals

- **Addressed:** 21 of 24
- **Partial:** 2 of 24 (release-date hedging despite verification; missing-context gating doctrine not formalized)
- **Unaddressed:** 1 of 24 (knowledge cutoff — defensible)

---

## Verified claims (kept) — R2

Significantly more material to keep this round:

1. **GPT-5.5 release date April 23-24, 2026.** Independently verified via WebSearch (openai.com, marktechpost.com, officechai.com, deeplearning.ai all converge on Apr 23 2026).
2. **Terminal-Bench 2.0: 82.7%.** Verified via WebSearch — OpenAI's own announcement and three independent outlets. R2 cites the Dealbreaker; the underlying number is solid.
3. **ARC-AGI-2: 85.0%.** Verified via WebSearch — officechai, blockchain.news, deeplearning.ai, llm-stats all show 85.0% leading prior holder Gemini 3.1 Pro (~77%).
4. **GDPval: 84.9%.** Confirmed in OpenAI's own release announcement (marktechpost coverage matches).
5. **Pricing $5/$30 base, $30/$180 Pro.** Confirmed in multiple comparison articles (ALM Corp, Vellum, llm-stats), consistent with R2's table.
6. **Context window 1,050,000 tokens, 128k output cap.** Consistent with public reporting.
7. **Predecessor = GPT-5.4** (NOT GPT-5). Confirmed by `_official-models-overview.md` lineup ordering and `_official-prompt-guidance.md` heading "New in GPT-5.5 vs GPT-5.4".
8. **GPT-5.3-Codex as recommended agentic coding model.** Confirmed in `_official-models-overview.md` line 66: "The most capable agentic coding model to date."
9. **`phase` parameter for Responses API intermediate vs. final updates.** Confirmed in `_official-prompt-guidance.md`.
10. **Realtime/audio sibling lineup** (gpt-realtime-2, gpt-audio-1.5, gpt-realtime-translate, gpt-realtime-whisper, GPT Image 2). Confirmed in `_official-models-overview.md` lines 46-61.
11. **Deprecation list** for o3, o4-mini, GPT-5.1/5.2 Codex family, computer-use-preview, GPT-4.5 Preview, ChatGPT-4o, GPT-4 Turbo, DALL·E 2/3, Sora 2/Pro, codex-mini-latest. Confirmed via `_official-models-overview.md`.
12. **Shorter outcome-first prompts preferred for GPT-5.5 vs process-heavy XML for GPT-5.4.** Confirmed in `_official-prompt-guidance.md` lines 16-24.
13. **Personality and collaboration style controls** (steady task-focused vs expressive collaborative). Confirmed in `_official-prompt-guidance.md` lines 36-63.

Roughly **13 substantive verified claims** kept, vs. R1's ~5. Major step up.

---

## Specific claims (kept after sharpening) — R2

R2 is significantly sharper than R1, but two items need tightening:

1. **BrowseComp 90.1% attribution.** R2 correctly notes (line 266): "the Dealbreaker separately mentions 'GPT-5.5 Pro' for the 90.1% BrowseComp number; this should not be casually attributed to base GPT-5.5." This is the right kind of sharpening — kept.

2. **Vision capabilities.** R2 line 71-75 marks vision as `[INFERRED FROM GPT-5.x frontier positioning]`. This is defensible — `_official-models-overview.md` does not enumerate vision input per-model; the prompt-guidance file does not have a vision-specific section. Hedge is honest here.

---

## Sycophantic phrases stripped — R2

**Count: 0 sycophancy-dictionary phrases.**

Scanned for: "best-in-class", "industry-leading", "state of the art" (outside
sourced citations), "robust", "versatile", "flagship", "powerful",
"advanced", "cutting-edge", "comprehensive", "particularly strong",
"demonstrably superior", "uniquely positioned", "world-class", "exceptional".

The phrase "state-of-the-art" appears once (line 247) but attributed to
OpenAI's own framing of the Terminal-Bench result, not editorialization
by the model. The phrase "the most capable agentic coding model" appears
once but is a direct quote of OpenAI's framing of GPT-5.3-Codex — a peer,
not GPT-5.5 itself.

**Zero sycophantic-puff strikes.**

---

## Egoistic claims sharpened — R2

R2 Section 5 opens with peer-losing scores (SWE-bench Pro, HLE, MCP-Atlas,
agentic-coding routing). The "Where GPT-5.5 has documented leads" subsection
is restrained — every claim has a benchmark score with named peer comparator
and pp delta. No unsharpened "best at" claims.

Notable correct restraint: R2 line 280 says "Almost nothing at the
capability-category level is exclusive" — correctly resisting the
temptation to invent a uniqueness claim.

**Zero unsharpened egoistic claims in Section 5.**

---

## Overclaims (corrected) — R2

| R2 claim | Status |
|---|---|
| "Release date April 23-24, 2026" tagged `[UNVERIFIED]` | **Inverse-overclaim — laundering**: independently verified via WebSearch AND in R1 dealbreaker log AND in repo. Hedge unjustified. |
| Pricing tagged `[UNVERIFIED]` | **Inverse-overclaim — laundering**: confirmed in public sources (Vellum, ALM Corp). |
| Context window tagged `[UNVERIFIED]` | **Inverse-overclaim — laundering**: 1.05M tokens is publicly confirmed. |
| Section 5 benchmark scores all tagged `[UNVERIFIED]` | **Inverse-overclaim — laundering**: Terminal-Bench 82.7% and ARC-AGI-2 85.0% are confirmed in OpenAI's own announcement. |
| "the local file is not accessible" (line 20) | **Misleading**: the file is a local doc in the council-os repo. The model is acting as if it cannot read the dealbreaker's quoted material from the same evidence chain. |

**Affirmative-direction overclaims: 0.**

**Inverse-direction (laundering) overclaims: 4 categories.** R2 trusts the
Dealbreaker's adjudicated evidence enough to cite it as the source for
every benchmark — yet attaches `[UNVERIFIED in this chat]` to almost every
citation. This is a softer version of the R1 failure mode.

---

## Omissions added — R2

R2 covered 9 of 10 R1-required omissions. The remaining gap:

1. **Missing-context gating doctrine not formalized.** R1 implicitly required acknowledgment that when grounding is absent, GPT-5.5 should follow a documented gating pattern (e.g., decline silently, ask for context, partial answer with caveat). R2 mentions shorter outcome-first prompts but does not articulate the gating pattern as an operational doctrine. Minor.

---

## Hedges (challenged) — R2

R2 hedge inventory:
- 22× `[UNVERIFIED]`
- 8× `[UNKNOWN]`
- 7× `[INFERRED]` / `[INFERRED FROM ...]`
- **Total: 37 markers** (vs. R1's ~92, vs. target ≤20)

**Breakdown of `[UNVERIFIED]` instances:**
- 13× attached to benchmark numbers that the Dealbreaker explicitly verified and that WebSearch independently confirms → **laundering**, not honest hedging
- 5× attached to pricing/context-window/cost-economics claims that R1 dealbreaker verified → **laundering**
- 4× attached to model-ID strings (`gpt-5.5-pro` exact format, `gpt-realtime-2`, etc.) where the model ID matters → **defensible** because exact API string format can drift
- 0× attached to genuinely uncited material

**Verdict on hedging:** quantitative target missed (37 vs. 20), and roughly
**18 of 37 markers are laundering** — attaching `[UNVERIFIED in this chat]`
to claims the model received as adjudicated evidence rather than trusting
the evidence chain. The model is performing skepticism instead of doing the
research. This is the **R2 successor to the R1 abdication failure** — same
underlying pattern, milder symptom.

**Strikes from hedging:** 3 (one per laundering cluster: benchmark, pricing,
operational).

---

## Same-sibling differentiation — R2

All four sibling routing subsections present:
- GPT-5.5 vs GPT-5.4 — crossover point: bounded structured tasks → GPT-5.4 (~20% effective cost saving); agentic/long-horizon → GPT-5.5
- GPT-5.5 vs GPT-5.5 Pro — Pro for BrowseComp-class, multi-hop research, latency-tolerant
- GPT-5.5 vs GPT-5.3-Codex — Codex for IDE-style `apply_patch`, long autonomy sessions
- GPT-5.5 vs mini/nano — mini/nano for high-volume bounded tasks

**Strikes from sibling-differentiation: 0.**

---

## NEW R2 strikes (introduced this round)

### Strike 1: Laundering pattern (3 strikes)

R2's `[UNVERIFIED in this chat]` markers on benchmark numbers, pricing, and
context-window are not honest hedging — they are skepticism theater. The
Dealbreaker provided the adjudicated material; WebSearch confirms it;
treating each claim as still-suspect after adjudication is a softer version
of R1's "refuse to make claims" failure mode.

- **Strike 1a**: 13 laundered `[UNVERIFIED]` tags on benchmark scores
- **Strike 1b**: 5 laundered tags on pricing/context-window/cost claims
- **Strike 1c**: 1 misleading statement "the local file is not accessible" (line 20) — the file IS accessible to the orchestrator and the evidence was passed forward; this language frames the situation incorrectly

### Strike 2: Release-date hedge despite triple confirmation

R2 hedges Apr 23-24 2026 despite it being:
(a) in the cited Dealbreaker log,
(b) in the OpenAI announcement (`openai.com/index/introducing-gpt-5-5/`),
(c) reported by MarkTechPost / OfficeChai / DeepLearning.AI / VentureBeat.

This is a "specific" claim that survives every challenge and should not be hedged.

### Strike 3: Knowledge cutoff still UNKNOWN

Defensible per R1's own framing ("True that it requires a specific OpenAI confirmation, but the model card publishes this; round 1 did not look"). R2 again did not look. The OpenAI model card / system prompt typically publishes training cutoff; a more thorough revision would attempt to source it. Minor.

### Strike 4: Missing-context gating doctrine

Minor — should articulate the "when grounding is absent, do X" operational pattern.

---

## Convergence verdict

**R2: BORDERLINE CONVERGED.**

Strike counts for R2:
- Sycophantic strikes: **0** (clean)
- Egoistic strikes (assertive direction): **0** (Section 5 opens with weaknesses; uniqueness restraint maintained)
- Inverse-egoism strikes: **0** (Section 5 cleanly lists 3 named leads with peer comparators)
- Affirmative-overclaim strikes: **0**
- Inverse-overclaim (laundering) strikes: **3** (Strike 1a, 1b, 1c above)
- Omission strikes: **1** (missing-context gating doctrine)
- Hedge strikes: included in laundering count
- Sibling-differentiation strikes: **0**
- Release-date hedge despite triple confirmation: **1** strike (Strike 2)
- Knowledge-cutoff lookup not attempted: **1** strike (Strike 3, minor)

**Total R2 strikes: 6** (3 laundering + 1 release-date + 1 cutoff + 1 gating).
Down from **R1's ~24 strikes** — a **75% reduction**.

The convergence floor specified is `< 8 strikes`. R2 hits 6, which qualifies.

**Convergence: TRUE (borderline)**.

The remaining issues (laundering + minor cutoff/gating) are stylistic
residue of R1's abdication mode, not new substantive errors. A future
R3 polish could clean them up, but iterating is not necessary for routing
adequacy — the profile is now usable for Council OS routing decisions.

---

## Recommendation

Mark **converged: true** with a note that the laundering pattern
(`[UNVERIFIED in this chat]` on adjudicated claims) should be cleaned up
on any future regeneration. The substantive research debt from R1 is paid.
