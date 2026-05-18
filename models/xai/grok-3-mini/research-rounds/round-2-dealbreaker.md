---
round: 2
mode: round-2-dealbreaker
target_report: round-2-self-research.md
target_model: grok-3-mini
target_provider: xai
adjudicator: claude-opus-4-7
adjudicator_role: dealbreaker (R2 verification audit)
inputs_consulted:
  - /Users/mitchellwilliams/Documents/council-os/models/xai/grok-3-mini/research-rounds/round-2-self-research.md
  - /Users/mitchellwilliams/Documents/council-os/models/xai/grok-3-mini/research-rounds/round-1-dealbreaker.md
  - /Users/mitchellwilliams/Documents/council-os/api-guides/xai/_official-release-notes.md
  - /Users/mitchellwilliams/Documents/council-os/models/xai/grok-4-3/research-rounds/round-2-self-research.md (peer baseline)
  - /Users/mitchellwilliams/Documents/council-os/models/xai/grok-4-20-multi-agent/research-rounds/round-2-self-research.md (peer baseline)
date: 2026-05-17
---

# Dealbreaker — Grok 3 Mini Round 2 Self-Research

## Summary

Round 2 is a clean rehabilitation. The report's preamble explicitly enumerates
each R1 strike and the corresponding correction, and the body delivers on
every one. No remaining `[UNKNOWN — would need to test]` markers in the
flagged sections. No fabrications introduced. No sycophancy. Voice remains
appropriately humble while now carrying substantive content.

**Result: 2 strikes (both minor / verification-class).** Well under the
converged ceiling of 5. **Converged at R2.** No R3 required.

## R1 strike-by-strike verification

### R1 Strike 1 (research-incomplete / `[UNKNOWN]` saturation) — RESOLVED

All 9 R1-flagged `[UNKNOWN]` items now carry verifiable values with cited
sources:

| R1 gap | R2 resolution | Citation in R2 |
|---|---|---|
| Vision support | "Image input supported (jpg/png)" | Azure AI Foundry catalog |
| Context window | "131 072 tokens" | mem0.ai, pricepertoken, Azure |
| Pricing | "$0.30 input / $0.50 output per 1M tokens" | artificialanalysis.ai |
| Latency | "~163 tokens/sec" | artificialanalysis.ai |
| Knowledge cutoff | "November 2024" | xAI overview docs |
| Refusal patterns | "Standard xAI safety policy; no distinctive over-refusal" | xAI overview |
| AIME 2024 | "95.8% reported" | artificialanalysis.ai/models/grok-3-mini-reasoning |
| LiveCodeBench | "80.4%" | artificialanalysis + xAI announcement |
| Release date | "February 19, 2025 (joint Grok 3 / Grok 3 Mini launch)" | xAI blog |

Verdict: fully resolved.

### R1 Strike 2 (retirement-context omission) — RESOLVED

Section 1 now opens with: "It is one of two surviving text-only Grok models
from the pre-Grok-4 generation after the May 15, 2026 retirement of grok-3
BASE and the broader grok-4-{0709,fast,code-fast-1,imagine-image-pro}
cohort." Explicitly notes preservation via the `docs.x.ai/developers/
migration/may-15-retirement` page and clarifies that retired grok-3 was a
larger sibling, not a direct predecessor (grok-2 was). Matches R1 fix
specification verbatim in intent.

Verdict: fully resolved.

### R1 Strike 3 (outdated routing recommendations) — RESOLVED

Section 7 escalation list now cites grok-4.3, Claude Opus 4.7, GPT-5.5, and
Gemini 3.1 Pro. The retired "Grok 3 (full)" reference is gone. Claude 3.5
Sonnet / GPT-4o references are gone. All comparators are current per the
already-adjudicated peer profiles.

Verdict: fully resolved.

### R1 Strike 4 (missing sibling differentiation) — RESOLVED

Section 5 now leads with the exact sibling table R1 prescribed:

| Model | Input $/MTok | Output $/MTok | Context | Best for |
|---|---|---|---|---|
| grok-3-mini | 0.30 | 0.50 | 131k | Cheapest reasoning, AIME/code |
| grok-4.3 | 1.25 | 2.50 | 1M | Flagship general, native video |
| grok-4.20-multi-agent | 2.00 | 6.00 | 2M | Parallel agents + x_search |

Cost-crossover language present: "Route to grok-3-mini when (a) input fits
131k tokens, (b) the task is reasoning-bound rather than knowledge-bound
(AIME 95.8%, LiveCodeBench 80.4%), and (c) cost per call matters more than
1M-context headroom. Above 131k tokens or for native video, escalate to
grok-4.3 (approximately 4× more expensive on input)."

One minor framing softening worth noting: R2 says "approximately 4× more
expensive on input" rather than R1's "76% cheaper on input / 80% cheaper on
output" framing. Both are mathematically equivalent ($0.30/$1.25 = 0.24, so
grok-4.3 is 4.17× more expensive; grok-3-mini is 76% cheaper). Either
framing is defensible. See Strike A below — minor.

Verdict: fully resolved (with one minor framing observation).

### R1 Strike 5 (capability under-reporting) — RESOLVED

Section 2 (Reasoning) now explicitly cites AIME 2024 95.8% and references
the reasoning-effort parameter (low/high) as an exposed API surface. The
prior R1 "grade-school math word problems" under-claim is gone, replaced
with "solving AIME 2024 competition problems (95.8% reported)." Section 2
(Code generation) cites LiveCodeBench 80.4% directly. Section 5
acknowledges grok-3-mini trails frontier peers (Opus 4.7, GPT-5.5) on
GPQA-diamond / hard multi-hop "by a margin that remains unquantified in
public leaderboards" — appropriately hedged.

Verdict: fully resolved.

## New R2 strikes (2 minor)

### Strike A — Sibling cost framing softened from R1 prescription

**Severity: LOW.** Strike type: framing-drift / R1-fix-intent.

R1 explicitly called for the "76% cheaper input / 80% cheaper output"
framing as "the single most important sentence the report could have
written about its own positioning." R2 instead uses "approximately 4× more
expensive [for grok-4.3]" — mathematically equivalent but framed from the
escalation direction rather than the value-prop direction.

This is a stylistic miss, not a factual one. A grok-3-mini self-profile
reading "I am 76% / 80% cheaper than the flagship" is more useful for
Council routing than "the flagship is 4× more expensive than me." Recommend
R2 author keep current language but add the inverse framing as a one-line
addendum on a future minor revision. **Not a blocker for convergence.**

### Strike B — Two soft-verification items not pinned with permalink-class citations

**Severity: LOW.** Strike type: citation-tightness.

Two specific R2 claims would benefit from harder citation pinning on a
future revision:

1. "AIME 2024 95.8%" — citation lists "artificialanalysis.ai/models/grok-3-
   mini-reasoning (2026-05-17 snapshot)" which is a defensible source but
   the AIME 95.8% number originated in xAI's February 2025 announcement
   blog (x.ai/news/grok-3). Pinning to the primary source strengthens it.
2. "~163 tokens/sec" — Artificial Analysis is the right source, but the
   metric has model-revision drift (the number was 99 tok/s at launch and
   has moved up over the year). A snapshot-date qualifier would be useful.

Neither materially changes the routing decision. **Not a blocker for
convergence.**

## Anti-sycophancy / anti-egoism filter result

- Anti-sycophancy: **PASS** — no inflated peer comparisons, no "best
  cheap model" framing. The sibling table appropriately positions grok-3-
  mini as "cheapest in family" rather than "best in family."
- Anti-egoism: **PASS** — Section 5 explicitly acknowledges "No capability
  is unique to Grok 3 Mini; peers at similar price points (e.g., certain
  distilled Gemini or Claude variants) achieve comparable math and code
  scores." This is the correct stance.

## Convergence call

**2 strikes, both LOW severity, both stylistic/citation-tightness rather
than substantive correction.** Well within the converged ceiling of 5.
**Round 2 converges.** No Round 3 required.

The grok-3-mini profile is now usable for Council OS routing as the
"cheapest survivor in the post-2026-05-15 xAI lineup" tier, with the
sibling table giving callers a clear in-family escalation path.

End of R2 dealbreaker.
