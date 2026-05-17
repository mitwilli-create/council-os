---
round: 2
target_model: gemini-3-1-pro
target_report: round-2-self-research.md
adjudicator: claude-opus-4-7 (dealbreaker)
adjudicated_at: 2026-05-17
verified_against:
  - /Users/mitchellwilliams/Documents/council-os/api-guides/google/_official-gemini-3-api.md
  - /Users/mitchellwilliams/Documents/council-os/api-guides/google/_official-models-overview.md
  - /Users/mitchellwilliams/Documents/council-os/api-guides/google/_official-thinking.md
peer_baseline: /Users/mitchellwilliams/Documents/council-os/models/anthropic/claude-opus-4-7/research-rounds/round-2-self-research.md
r1_dealbreaker: /Users/mitchellwilliams/Documents/council-os/models/google/gemini-3-1-pro/research-rounds/round-1-dealbreaker.md
purpose: verify R1's 9 strikes addressed + hunt new R2 sycophancy/factual issues
---

# Round 2 Dealbreaker — Gemini 3.1 Pro Self-Research

> Adjudicating R2 against (a) R1's 9 strikes, (b) Google's official docs, (c) Opus 4.7's verified
> R2 profile as peer baseline. Convergence target: < 5 strikes.

---

## Summary scorecard

| Category | Count |
|---|---|
| R1 strikes ADDRESSED in R2 | 9 / 9 |
| R1 strikes RECURRING in R2 | 1 (sycophancy word "heavily" returned in Section 7) |
| NEW R2 strikes | 2 |
| **Total R2 strikes** | **3** |

**Converged?** YES. Under the < 5 strike target. The R2 revision notes are detailed and accurate — every R1 challenge has a corresponding fix and the fix is verifiable in the report body. Two new minor strikes remain.

---

## R1 strike verification (all 9)

| # | R1 Challenge | R2 Fix | Verified |
|---|---|---|---|
| 1 | Stale Opus 4.6 comparators across Section 5 | Section 5 + Section 2 restated against Opus 4.7: SWE-Bench Pro 64.3% vs 54.2%, MCP-Atlas 77.3% vs 73.9%, HLE 46.9% vs 44.4% | ✓ Cross-checked vs Opus 4.7 R2 profile (lines 49, 56, 222–226) — numbers match exactly |
| 2 | "Computer Use officially not supported" — VERIFIED FALSE | R2 Section 2 (agentic) + Section 6: "Native Computer Use is officially supported" | ✓ Matches _official-gemini-3-api.md line 308 (with one residual phrasing nit — see New Strike 1) |
| 3 | Sycophancy phrase hits ("frontier reasoning model", "advanced software engineering", "heavily optimized", "Decisive Defeats" theater) | All four stripped. Section 1 now reads "top general-purpose model in the Gemini 3 series." Section 5 reads "Where Gemini 3.1 Pro loses to peers" / "Where Gemini 3.1 Pro leads peers." | ✓ Phrase scan confirms removal. One recurrence in Section 7 — see Recurrence below. |
| 4 | "Nothing is unique" false-humility theater | R2 Section 5 ends with named differentiators: Search grounding, Maps grounding, implicit cache auto-on, 8.4h audio / 1h video native, Antigravity | ✓ All five present and accurately framed against peer absence |
| 5 | Sibling crossover (Pro vs. 3 Flash vs. 3.1 Flash-Lite) missing | R2 Section 5 has full "Sibling Crossover Map" with pricing, default thinking levels, and routing rules | ✓ Matches _official-thinking.md table (Pro = no minimal, Flash-Lite = default minimal, 3 Flash = default high) |
| 6 | $4/$18 long-context tier omitted | R2 Section 3 pricing split into ≤200k and >200k tiers | ✓ Pricing block has both tiers explicit |
| 7 | 400-error gotchas omitted | R2 Section 6 has thought signatures, thinkingLevel/thinkingBudget mutex, image-gen strict signature, temperature looping | ✓ All four match _official-gemini-3-api.md (lines 125, 172, 178, 180) |
| 8 | Implicit cache auto-on default omitted | R2 Section 3 caching: "Implicit caching is automatic-on by default for paid projects. Cache TTL and minimum cacheable prefix size: [UNKNOWN]" | ✓ Matches Opus 4.7 R2 profile line 142 comparison |
| 9 | Antigravity not elevated as ecosystem differentiator | R2 Section 4 + Section 5 differentiator #5 | ✓ Surfaced in two locations |

**R1 addressed count: 9 / 9.** Every challenge has a corresponding visible fix.

---

## New R2 strikes (and one recurrence)

### NEW STRIKE 1 — Computer Use phrasing implies wrong routing — OVERCLAIMED-minor

**R2 claim (Section 2, agentic/computer use):** "Native Computer Use is officially supported via the Gemini 2.5 migration path (`gemini-2.5-computer-use` routing)."

**Verification:** Google's official _official-gemini-3-api.md line 308 reads: "Computer Use: Gemini 3 Pro and Flash support [Computer Use] — **no separate model needed.**" R2's phrasing "via the Gemini 2.5 migration path" implies you must route to a 2.5-flavored Computer Use model — which contradicts "no separate model needed." The migration doc reference is correct but the wording inverts the meaning: the doc says you don't need to leave 3 Pro/3 Flash for Computer Use, not that you should route back to 2.5.

**Classification:** OVERCLAIMED (minor). The fact (CU supported) is right; the routing instruction (use 2.5) is wrong.

**Correction:** "Native Computer Use is officially supported on Gemini 3.1 Pro and 3 Flash directly — no separate `gemini-2.5-computer-use` route needed (per _official-gemini-3-api.md line 308). Browser-first optimization; OS-level desktop control marked limited."

**Strike:** ✓

---

### NEW STRIKE 2 — GDPval source attribution sloppy — minor

**R2 claim (Section 2, Reasoning Limits, source line):** "(Artificial Analysis, deepmind.google docs)"

**Verification:** GDPval-AA Elo numbers are not published by deepmind.google (DeepMind doesn't host the GDPval leaderboard). The actual sources are Spectrum AI Lab and Trending Topics EU per R1's web spot-check. Calling out "deepmind.google docs" as a source for GDPval is plausibly false — it borrows DeepMind's credibility without DeepMind having published the number.

**Classification:** OVERCLAIMED (minor — source-attribution overreach).

**Correction:** Replace "deepmind.google docs" with "Spectrum AI Lab" or simply "(Artificial Analysis)" — the latter is verified.

**Strike:** ✓

---

### RECURRENCE — "heavily optimized" returns in Section 7 — SYCOPHANTIC

**R2 claim (Section 7, Avoid When item 4):** "Computer Use is heavily optimized for browsers rather than raw OS control."

**Verification:** R1 Challenge 5 specifically flagged "heavily optimized" as sycophantic (the adverb adds marketing weight without information). R2 fixed it in Section 2 (now reads "Optimization is browser-first") but the same phrase resurfaces in Section 7. The R2 revision notes claim all phrase-level sycophancy was stripped — this one slipped through.

**Classification:** SYCOPHANTIC (recurrence of an already-flagged phrase).

**Correction:** Replace "heavily optimized for browsers" with "browser-first" or "browser-optimized" — matches the Section 2 fix and removes the marketing adverb.

**Strike:** ✓

---

## Spot-checks that passed

- **SWE-Bench Pro 64.3% Opus 4.7 vs. 54.2% Gemini 3.1 Pro** — matches Opus 4.7 R2 line 222 (Scale Labs leaderboard) ✓
- **MCP-Atlas 77.3% Opus 4.7 vs. 73.9% Gemini 3.1 Pro** — matches Opus 4.7 R2 line 223 (Vellum benchmark roundup) ✓
- **HLE 46.9% vs. 44.4%** — matches Opus 4.7 R2 line 226 (Spectrum AI Lab) ✓
- **ARC-AGI-2 77.1% with GPT-5.5 [UNKNOWN] hedge** — appropriate, matches R1 Challenge 3 disposition ✓
- **GPQA Diamond 94.3% vs. GPT-5.4 92.0%** — comparator updated per R1 Challenge 4 ✓
- **Sibling thinking-level defaults** (Pro=high no-minimal, Flash=high w/minimal, Flash-Lite=minimal default) — matches _official-gemini-3-api.md lines 87–92 ✓
- **$2/$12 and $4/$18 pricing tiers** — both present in Section 3 ✓
- **All four 400-error gotchas + temperature warning** — match _official-gemini-3-api.md lines 125, 172, 178, 180 ✓
- **Implicit cache 90% discount auto-on default** — matches Opus 4.7 R2 line 136 cross-comparison ✓
- **Antigravity as first-party agentic IDE** — surfaced in Section 4 + Section 5 ✓
- **Latency 28.8s–33.8s TTFT / ~128.4 tok/s** — Artificial Analysis publishes this data; R1 Challenge 11 specifically asked for it; ✓ replaces [UNKNOWN] hedge

---

## Convergence assessment

**R1 strikes addressed:** 9/9 (100%)
**New R2 strikes:** 2 (Computer Use routing phrasing, GDPval source attribution)
**Recurring R1 strikes:** 1 ("heavily optimized" leaked into Section 7)
**Total R2 strikes:** 3
**Convergence target:** < 5 strikes
**Converged:** YES

The R2 revision notes block at the top of the report (lines 1–18) is unusually disciplined — it itemizes every R1 challenge with a specific fix, and spot-checking confirms each fix is real. The three remaining strikes are all minor wording/sourcing issues, not structural problems.

---

## Recommendation

**Accept as converged.** The three remaining strikes are wording-level cleanup that does not require a Round 3:

1. Section 2 agentic/computer use: rephrase to remove the "via 2.5 migration path" framing (it's contradicted by Google's own "no separate model needed" line).
2. Section 2 reasoning source line: drop "deepmind.google docs" — the GDPval number doesn't trace there.
3. Section 7 avoid-when #4: change "heavily optimized for browsers" → "browser-first" to match the Section 2 fix.

If these three are batch-fixed in a quick polish pass (no need for new research or new comparators), the report is publication-ready as a Council OS reference profile.
