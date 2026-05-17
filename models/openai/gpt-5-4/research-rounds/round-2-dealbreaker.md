---
round: 2
target: gpt-5-4
target_round_doc: round-2-self-research.md
adjudicator: claude-opus-4-7 (dealbreaker agent)
adjudicated_at: 2026-05-17
bias_filters_applied:
  - VERIFIED / SPECIFIC / SYCOPHANTIC / EGOISTIC / OVERCLAIMED / OMISSION / HEDGE
sources_consulted:
  - /Users/mitchellwilliams/Documents/council-os/api-guides/openai/_official-models-overview.md
  - /Users/mitchellwilliams/Documents/council-os/api-guides/openai/_official-prompt-guidance.md
  - /Users/mitchellwilliams/Documents/council-os/models/openai/gpt-5-4/research-rounds/round-1-dealbreaker.md
  - /Users/mitchellwilliams/Documents/council-os/models/openai/gpt-5-4/research-rounds/round-2-self-research.md
spot_checks_performed: 3 (predecessor GPT-5.2 mapping, positioning verbatim, phase/compaction docs)
---

# GPT-5.4 Round 2 — Dealbreaker Adjudication

> **R2 bias direction has flipped correctly.** The over-hedge of R1 has been replaced with appropriately scoped claims backed by first-party citations where available and labeled `[INFERRED]` / `[UNKNOWN]` where not. R2 also leads with where GPT-5.4 is *worse*, which is the correct anti-egoistic frame for a model that is not its family's flagship. Strike count drops sharply from 8 to under threshold.

---

## R1 STRIKE-BY-STRIKE VERIFICATION

| # | R1 Strike | R2 Status | Evidence in R2 |
|---|-----------|-----------|----------------|
| 1 | Identity hedged | **ADDRESSED** | Section 1: explicit positioning verbatim from `_official-models-overview.md`, sibling IDs enumerated, release date March 5, 2026 cited (third-party labeled), predecessor GPT-5.2 cited from prompt guidance. |
| 2 | Core capabilities all `[UNVERIFIED]` | **ADDRESSED** | Section 2: every subsection now grounded in `_official-prompt-guidance.md` with URL citations. `reasoning_effort` surface (none/low/medium/high/xhigh) named. Long-context strength documented. Tool-use persistence documented. |
| 3 | Operational pricing all `[UNVERIFIED]` | **ADDRESSED** | Section 3: $2.50/$15 per 1M with third-party sources cited; cached rate labeled `[UNVERIFIED first-party; corroborated]`; remaining unknowns honestly labeled rather than fabricated. |
| 4 | Stale peer set (Opus 4/4.1, Gemini 2.5 Pro) | **ADDRESSED** | Section 5: updated to Opus 4.7 / GPT-5.5 / Gemini 3.1 Pro; refuses to invent benchmark numbers it doesn't have. |
| 5 | Sibling crossover missing | **ADDRESSED** | Section 5: full sibling table with $ deltas, routing rules, and benchmark anchors for GPT-5.5, pro, mini, nano. |
| 6 | Generic failure modes | **ADDRESSED** | Section 6: 8 model-specific failure modes with prompt-guidance citations (mini conversation drift, "output nothing else" unreliability, dropped phase, compaction need, xhigh default, detail:auto OCR, frontend slop block, benchmark opacity). |
| 7 | Lifecycle empty | **ADDRESSED** | Section 8: release date March 5, 2026; predecessor GPT-5.2; successor GPT-5.5 (April 23, 2026); deprecation signals honestly framed. |
| 8 | `reasoning_effort` surface missed | **ADDRESSED** | Section 2 Reasoning: full enum cited with cost/latency caveat about xhigh defaults. |

**R1 strikes addressed: 8 / 8.**

Additional R1 omissions (compaction, `phase`, frontend block) also surfaced in R2 Sections 2/3/6.

---

## R2 NEW STRIKE LOG

### Strike A — HEDGE — Section 4 Integrations is still mostly `[UNKNOWN]`

**Quote:** Section 4 lists four bullets, three of which are `[UNKNOWN]` (first-party connectors, MCP support, registries) and one labeled `[UNKNOWN — would need SDK docs]` for SDK languages.

**Bias filter:** HEDGE — OpenAI maintains Python + Node SDKs as a baseline that is verifiable in seconds, and MCP support is referenced in `_official-prompt-guidance.md` indirectly (the MCP Atlas benchmark is cited in R2 itself in Section 5). R2 correctly avoids fabrication but under-commits to checkable facts.

**Severity:** Minor — R2 is correctly conservative here, and the user explicitly accepted that Integrations is the thinnest section in OpenAI's docs.

**Verdict:** NOTED (not a stripping offense). R3 if it happens should commit to SDK languages and MCP-via-tooling baseline.

---

### Strike B — SPECIFIC (positive flag, not a strike) — pricing source attribution

**Observation:** R2 honestly labels the $0.25/1M cached input as "`[UNVERIFIED first-party; corroborated by third-party sources]`" — this is exactly the right calibration. Not a strike.

**Verdict:** NO STRIKE. Cited as evidence the bias direction has corrected.

---

### Strike C — OMISSION (minor) — Section 1 release date sourcing

**Quote:** "**March 5, 2026** ([third-party listing; OpenAI doc page existence corroborates model availability, but exact date here is from price tracker] https://pricepertoken.com/pricing-page/model/openai-gpt-5.4)."

**Bias filter:** OMISSION (mild) — R2 leans on a single third-party tracker for the exact release date when OpenAI's own model page exists. R2 correctly flags the sourcing but does not consult the OpenAI doc page directly for a release date stamp.

**Severity:** Minor — the date is corroborated elsewhere in the council corpus and the labeling is honest about the uncertainty.

**Verdict:** NOTED, not stripped. Honest hedge is acceptable here.

---

## SPOT-CHECK RESULTS

1. **Predecessor = GPT-5.2.** `_official-prompt-guidance.md` line 255: "New in GPT-5.4 vs GPT-5.2"; line 693 migration table maps `gpt-5.2 → gpt-5.4`. **VERIFIED.**
2. **Positioning "more affordable model for coding and professional work."** `_official-models-overview.md` line 20 verbatim. **VERIFIED.**
3. **`phase` parameter + compaction.** Prompt guidance lines 614-626 cover `phase` exactly as R2 describes; lines 626 and 958-963 cover compaction via `/responses/compact`. **VERIFIED.**

All three spot-checks pass. No fabrication detected.

---

## NEW SYCOPHANCY / EGOISM SCAN

**None found.** R2 leads with "GPT-5.4 is not the frontier leader in its own family" and "GPT-5.4 is not uniquely capable." The Bottom Line correctly positions it as a mid-cost routing choice, not a flagship. The peer comparison section names GPT-5.5 as the better default for top-end accuracy and refuses to invent comparison scores against Opus 4.7 / Gemini 3.1 Pro.

---

## CONVERGENCE STATUS

**CONVERGED.**

- R1 strikes addressed: **8 / 8**
- New R2 substantive strikes: **1 minor (Strike A — Integrations under-commits)**
- New R2 noted-only items: 2 (sourcing-honesty observations)
- **Effective strike count: 1**, well under the < 5 convergence threshold

R2 successfully fixed the inverse failure (excessive hedging) without swinging to overclaim. The remaining `[UNKNOWN]` and `[INFERRED]` tags are appropriate where first-party data genuinely was not in the source set.

---

## SOURCES CONSULTED

- [OpenAI models overview](https://developers.openai.com/api/docs/models/all) (via `_official-models-overview.md`)
- [OpenAI prompt guidance](https://developers.openai.com/api/docs/guides/prompt-guidance) (via `_official-prompt-guidance.md`)
- R1 dealbreaker: `/Users/mitchellwilliams/Documents/council-os/models/openai/gpt-5-4/research-rounds/round-1-dealbreaker.md`
- R2 self-research: `/Users/mitchellwilliams/Documents/council-os/models/openai/gpt-5-4/research-rounds/round-2-self-research.md`
