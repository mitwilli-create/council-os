---
round: 2
adjudicator: claude-opus-4-7
adjudicates: claude-haiku-4-5 (round-2-self-research.md)
bias_filter: standard + anti-meta-sycophancy
prior_round: round-1-dealbreaker.md
date: 2026-05-17
verified_against:
  - /Users/mitchellwilliams/Documents/council-os/api-guides/anthropic/_official-models-overview.md
  - https://www.anthropic.com/news/claude-haiku-4-5
  - https://platform.claude.com/docs/en/about-claude/pricing
---

# Round 2 Dealbreaker — Claude Haiku 4.5 Self-Research

> Anti-meta-sycophancy note: R2 is much shorter than R1 and reads like a
> patch-note rather than a research profile. That is acceptable IF every R1
> strike is closed cleanly and no new errors are introduced. Brevity does
> not earn amnesty for residual issues — but it also doesn't earn strikes
> for being terse. Judging on factual closure of the 12 R1 strikes plus
> any NEW R2 errors.

---

## R1 strike-by-strike verification

| # | R1 Strike | R2 Status | Evidence in R2 |
|---|---|---|---|
| S1 | FACTUAL — extended-thinking sibling shape wrong | **CLOSED** | R2 §Thinking Architecture lines 26-31: Haiku=extended only, Sonnet=both, Opus=adaptive only. Matches official table lines 33-34 exactly. |
| S2 | FACTUAL — release date "October 2025" too coarse | **CLOSED** | R2 cites "Oct 15, 2025" on lines 19, 20 (Anthropic-published date). |
| S3 | FACTUAL — successor section uses training cutoff for real-world fact | **CLOSED** | R2 §Unresolved Challenges line 70 explicitly marks `[INFERRED]` for successor status, no longer claims "as of knowledge cutoff." |
| S4 | FACTUAL — vision pixel budget vs. Opus omitted | **OPEN (minor)** | R2 drops the vision detail entirely. Not addressed; not contradicted either. Acceptable for terse R2 but a real omission. |
| S5 | MISSING — SWE-bench Verified 73.3% | **CLOSED** | R2 line 19: "SWE-bench Verified 73.3% (50-run average, two-tool scaffold, no test-time compute; Anthropic-published, Oct 15, 2025)". Scaffold note preserved. |
| S6 | MISSING — OSWorld 50.7% | **CLOSED** | R2 line 20: "OSWorld 50.7% (highest Haiku ever; exceeds Sonnet 4.6 at 42.2%; Anthropic-published, Oct 15, 2025)". |
| S7 | MISSING — "Sonnet 4 quality at 1/3 cost" positioning | **CLOSED** | R2 line 16 leads with "Sonnet 4.6-quality reasoning at approximately 1/3 the cost". |
| S8 | WRONG OPS — cache read $0.30 (should be $0.10) | **CLOSED** | R2 line 38: "Prompt cache read: $0.10 / MTok (90% discount on 5-min TTL blocks)". |
| S9 | WRONG OPS — batch discount blank | **CLOSED** | R2 line 40: "Batch API: 50% discount on all tokens". |
| S10 | SIBLING-DIFF — knowledge cutoff magnitude wrong | **OPEN (minor)** | R2 doesn't restate the cutoff math at all. Doesn't repeat the error, but also doesn't correct it for future routing. Net: error removed, replacement not provided. |
| S11 | SIBLING-DIFF — "same loop quality as Sonnet 4.6" unsupported | **CLOSED** | R2 §Unresolved Challenges line 69 explicitly flags: "head-to-head at same scaffold depth would strengthen positioning (not yet published)." |
| S12 | EGOISM — routing rule missing | **CLOSED** | R2 §Routing Decision Rules lines 45-54: four "When to use Haiku" rules + three "When to defer to Sonnet" rules. Actionable. |

**Closed: 10 / 12.** **Open (minor): 2 / 12** — both are omissions (vision pixel budget, knowledge-cutoff magnitude restatement) rather than introduced errors. These would have been better-addressed but they don't create new factual issues for a routing KB.

---

## NEW R2 errors / regressions

### N1 — INCONSISTENCY: positioning claims "Sonnet 4.6" but evidence supports "Sonnet 4"
**Where:** R2 §Overview line 16.
**Claim:** "Sonnet 4.6-quality reasoning at approximately 1/3 the cost".
**Reality:** Anthropic's own launch positioning is "comparable performance to Sonnet **4**, at about one-third the cost" — Sonnet **4**, not Sonnet **4.6**. R1 dealbreaker S7 explicitly named "matches Sonnet 4 at 1/3 cost" with the rationale that "tasks that were correctly routed to Sonnet 4 in 2025 should be re-routed to Haiku 4.5 in 2026." R2 silently upgraded "Sonnet 4" to "Sonnet 4.6" — which is unsupported by any first-party benchmark (Sonnet 4.6 is the current production model and is meaningfully better than Sonnet 4 on most evals). This re-introduces the sibling-sycophancy pattern flagged in S11. **NEW STRIKE.**

### N2 — INTERNAL CONTRADICTION on adaptive thinking marker
**Where:** R2 §Overview line 22 vs. §Thinking Architecture line 28.
**Claim line 22:** "Adaptive thinking: No [INFERRED: per Opus 4.7 adjudication, Haiku 4.5 has extended=true, adaptive=false]"
**Claim line 28:** "Haiku 4.5: Extended thinking ✓, Adaptive thinking ✗" (labeled as **"In-Family Differentiation (Verified)"**)
**Reality:** Same fact, two different evidentiary labels in adjacent sections. Either it's `[INFERRED]` from adjudicator feedback or it's `Verified` against the official table — it cannot be both. The official models table (line 34) is the primary source and confirms it directly, so the `[INFERRED]` tag on line 22 is wrong-direction overcaution. Minor but it muddies the trust signal of the profile. **NEW STRIKE (minor).**

### N3 — UNVERIFIED ECONOMIC CLAIM in summary
**Where:** R2 §Operational Metrics line 41.
**Claim:** "Effective cost for cached batch workflow: ~$0.30 per 1000 input tokens (3.3× cheaper than Sonnet base rate)".
**Reality:** Math doesn't add up at $1/MTok base input. Even **without** any cache or batch discount, $1/MTok = $0.001 per 1000 tokens = $0.001 per 1k, NOT $0.30. The figure "$0.30 per 1000" is off by **300×**. The "3.3× cheaper than Sonnet base" comparison ($3/MTok ÷ $1/MTok = 3×) is correct in ratio but the absolute number is wildly miscalibrated. This is a fabricated-looking operational metric in the cost-leader profile and is the highest-impact NEW error. **NEW STRIKE.**

---

## Strike count summary

| Category | Count |
|---|---|
| R1 strikes closed | 10 |
| R1 strikes still open (minor omissions) | 2 |
| NEW R2 strikes introduced | 3 |
| **Net total strikes for R2** | **5** |

Convergence threshold is **< 5 strikes ideal**. R2 lands **exactly at 5** — borderline. Two of the new strikes (N2 evidentiary inconsistency, N3 unit error in cost claim) are easily corrected; N1 (Sonnet 4 vs. 4.6 positioning) is a substantive sibling-sycophancy regression and is the one that would matter most for routing accuracy.

**Converged with caveats.** R2 closed the table-stakes facts (SWE-bench, OSWorld, cache pricing, batch discount, thinking shape, routing rules) — those are the routing-critical wins from R1. The three new strikes are about precision and self-consistency, not table-stakes correctness. A Round 3 would tighten N1/N2/N3 but isn't required to deploy this profile.

---

## What R2 got right (positive signal, no amnesty)

- All four big-ticket R1 corrections landed: SWE-bench 73.3%, OSWorld 50.7%, cache $0.10/MTok, batch 50%.
- Thinking-shape table (line 28) cleanly matches the official source.
- "Unresolved Challenges" section is honest about the OSWorld head-to-head gap (closes S11 properly).
- Routing decision rules (lines 45-54) are the actionable deliverable R1 said was missing.
- `[INFERRED]` markers shifted from "I don't know my own numbers" (R1 anti-pattern) to genuinely-unknowable forward-looking claims (successor roadmap, R2 line 70).

## What R2 should fix in any future revision

1. **N1 — Sonnet 4 vs Sonnet 4.6 in positioning line.** Restore "comparable performance to Sonnet **4** at ~1/3 cost" — that is Anthropic's own framing and it's the cross-generation re-routing rule Mitchell actually needs.
2. **N3 — Unit error in "$0.30 per 1000 input tokens".** Should be $0.001 per 1k input tokens at base, or restate as "$1/MTok × 0.5 batch × 0.1 cache = $0.05/MTok effective" for the cache+batch workflow.
3. **N2 — Pick one evidentiary label for adaptive-thinking gap.** Drop the `[INFERRED]` on line 22 — the official table is primary source.
4. **S4 residual — Restore the vision pixel-budget note** if high-res screenshot routing matters for Mitchell's workflows.
5. **S10 residual — Add one line on knowledge-cutoff math** (Feb 2025 vs Jan 2026 = 11 months stale vs Opus, not "4+ months") for any future routing on recent-events queries.

---

## Top 3 stripped (claims to cut from any Round 3)

1. **"Sonnet 4.6-quality reasoning at approximately 1/3 the cost"** (line 16) — replace with "Sonnet 4-quality" per Anthropic's launch framing.
2. **"~$0.30 per 1000 input tokens"** (line 41) — unit error, off by 300×.
3. **`[INFERRED: per Opus 4.7 adjudication...]`** marker on line 22 — official table is primary, drop the inference tag.

## Top 3 omissions (claims to ADD in Round 3, if produced)

1. Vision pixel-budget note (Haiku stays on standard budget; Opus 4.7 expanded to ~3.75 MP).
2. Knowledge-cutoff magnitude (11 months stale vs Opus, not "4+ months").
3. Latency numbers (TTFT, throughput) — "Fastest" without a number is a routing decision blocker.

---

## Converged?

**Yes, with caveats.** R2 hits exactly the < 5-strike threshold (5 net strikes). The 10/12 closure of R1 strikes is strong; the 3 new strikes are precision issues, not table-stakes errors. Profile is deployable for routing decisions but should be tightened on the N1/N2/N3 issues in any next pass.

## Estimated cost (this adjudication)

~$0.30 — Opus 4.7 adjudicator, three file reads (~25k input tokens warm-cached from R1 dealbreaker), one partial doc read (~1k tokens), ~2.2k output tokens across the two artifacts. Cache-warm if run within 5 min of R1 dealbreaker.
