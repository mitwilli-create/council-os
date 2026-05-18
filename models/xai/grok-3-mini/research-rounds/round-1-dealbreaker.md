---
round: 1
mode: round-1-dealbreaker
target_report: round-1-self-research.md
target_model: grok-3-mini
target_provider: xai
adjudicator: claude-opus-4-7
adjudicator_role: dealbreaker (anti-sycophancy + anti-egoism R1)
inputs_consulted:
  - /Users/mitchellwilliams/Documents/council-os/models/xai/grok-3-mini/research-rounds/round-1-self-research.md
  - /Users/mitchellwilliams/Documents/council-os/api-guides/xai/_official-models-overview.md
  - /Users/mitchellwilliams/Documents/council-os/api-guides/xai/_official-release-notes.md
  - /Users/mitchellwilliams/Documents/council-os/models/anthropic/claude-opus-4-7/research-rounds/round-2-self-research.md
  - /Users/mitchellwilliams/Documents/council-os/models/xai/grok-4-3/research-rounds/round-2-self-research.md
  - /Users/mitchellwilliams/Documents/council-os/models/xai/grok-4-20-multi-agent/research-rounds/round-2-self-research.md
  - WebSearch: grok-3-mini pricing + context window 2026
  - WebSearch: grok-3-mini benchmark capabilities reasoning
date: 2026-05-17
---

# Dealbreaker — Grok 3 Mini Round 1 Self-Research

## Summary

This Round 1 self-research report is **structurally underspecified** in a way that
borders on epistemic laziness. The model retreated to `[UNKNOWN — would need
to test]` on ~14 line-items where the answer is **freely available via xAI
docs, Artificial Analysis, and Azure AI Foundry public pages**. That is a
different failure mode than the typical "sycophantic overclaim" failure — it
is instead a **negative-egoism failure**: the model under-reports its own
capability surface so heavily that the resulting profile is not usable for
Council routing.

The few non-`[UNKNOWN]` claims are either (a) defensible inferences (size-to-
performance scaling) or (b) acknowledged speculation. The good news: no
fabricated benchmarks, no invented identifiers, no faux-authoritative tone.
The bad news: the report is **9 of 8 sections too thin to use** — Section 3
(Operational), Section 4 (Integrations), Section 6 (Limitations), Section 7
(Ideal tasks), and Section 8 (Lifecycle) are each a single hedge sentence.

I issued **5 strikes** (within the converged ceiling of 5). They are
weighted heavily toward the meta-strike that this profile is research-
incomplete rather than research-wrong. Round 2 must do the actual research.

## Retirement-adjacent claim audit (special focus per assignment)

The May 15, 2026 xAI retirement event killed `grok-3` BASE but **explicitly
preserved `grok-3-mini`**. The Round 1 report is **correct** that grok-3-mini
remains active. However, it commits a *different* retirement-adjacent error:

- Section 1: "The broader Grok lineage traces to Grok-1 (2023) and later
  Grok-2 / Grok-3 base models." — This conflates the retired grok-3 base
  with grok-3-mini's still-active lineage. The report does NOT acknowledge
  that grok-3 was retired on 2026-05-15 (2 days ago), nor that grok-3-mini
  is one of the few survivors of that retirement event. **This is a missed
  framing opportunity, not a misstatement.** Strike attached below.

- Section 5: "Grok 3 (full)" listed as a "generally preferable" alternative
  for tasks Grok 3 Mini cannot handle. **This is now WRONG** — grok-3 was
  retired 2 days before this report was authored. Any caller routing to
  "Grok 3 full" today gets auto-redirected to grok-4.3 per the retirement
  page. Strike attached below.

No other retirement-adjacent misstatements found. The report does not
attempt to claim grok-3 BASE benchmark numbers as its own — that restraint
is noted.

## Same-xAI-sibling diff status

**Comparison axis required:** grok-3-mini vs. grok-4.3 vs. grok-4.20-multi-agent.

The Round 1 report's sibling comparison surface is **null**. There is no
mention of grok-4.3 (the current xAI flagship), no mention of grok-4.20-
multi-agent, no acknowledgment that grok-3-mini's value proposition in the
post-retirement xAI lineup is "cheapest model still surviving in API" rather
than capability uniqueness.

Per the sibling profiles already adjudicated to Round 2:

- **grok-4.3:** $1.25 input / $2.50 output, 1M context, December 2025
  knowledge cutoff, native video input, 159 tok/s — positioned as flagship.
- **grok-4.20-multi-agent:** $2 input / $6 output, 2M context, multi-agent
  parallel orchestration in single API call — positioned as the most
  expensive/highest-overhead variant.
- **grok-3-mini (per public sources):** **$0.30 input / $0.50 output**,
  **131K context**, AIME 2024 95.8%, LiveCodeBench 80.4%, ~163 tok/s,
  reasoning-effort parameter exposed (low/high).

**Cost crossover:** grok-3-mini is **76% cheaper on input** than grok-4.3
($0.30 vs $1.25) and **80% cheaper on output** ($0.50 vs $2.50). That is
the entire reason grok-3-mini exists in the post-retirement lineup. The
Round 1 report fails to surface this — its self-positioning instead reads
as "smaller, lower-cost variant" with no $$ numbers.

The Round 2 revision MUST make grok-3-mini the cheapest-in-xAI-lineup case
explicit, with the per-call delta against grok-4.3 on a representative
workload.

## Strikes (5 total)

### Strike 1 — `[UNKNOWN]` saturation where docs exist

**Severity: HIGH.** Strike type: research-incomplete.

The report marks the following as `[UNKNOWN — would need to test]` or
`[UNKNOWN — would need official documentation]` when the public answer is
verifiable in ~30 seconds:

| Section | Claim marked `[UNKNOWN]` | Verifiable answer |
|---|---|---|
| 2 (Web grounding) | "No confirmed built-in search or citation mechanism" | Hedged correctly — accepted |
| 2 (Vision) | "Image input support is not documented" | Per Azure AI Foundry catalog: image-input supported, jpg/png |
| 2 (Long context) | "Context window size unknown" | **131,072 tokens** (confirmed by mem0.ai, pricepertoken, Azure) |
| 3 (Operational) | "Pricing… undocumented" | **$0.30 input / $0.50 output per 1M tokens** (confirmed across mem0, pricepertoken, artificialanalysis) |
| 3 (Operational) | "Latency… undocumented" | **~163 tok/s** per artificialanalysis.ai |
| 3 (Operational) | "Knowledge cutoff date unknown" | **November 2024** for xAI family per official `_official-models-overview.md` line 39 |
| 6 (Limitations) | "Refusal patterns… unknown" | Standard xAI policy applies; not unique to mini |
| 7 (Ideal tasks) | "Speculative due to lack of benchmarks" | **AIME 2024: 95.8%, LiveCodeBench: 80.4%, reasoning-effort parameter exposed** per xAI announcement + artificialanalysis |
| 8 (Lifecycle) | "Release date… undocumented" | February 19, 2025 (Grok 3 / Grok 3 Mini joint launch event per xAI blog) |

This is the cardinal failure of the report. The model defaulted to "I
don't know" on items where Artificial Analysis, Azure AI Foundry, the xAI
official blog post, and mem0.ai/pricepertoken/llm-stats third-party
trackers all carry the answer. **Round 2 fix:** run real spot-checks
against artificialanalysis.ai/models/grok-3-mini-reasoning, the xAI Grok
3 announcement blog (x.ai/news/grok-3), and the Azure AI Foundry catalog
entry. Each section that is currently a one-sentence hedge must become
actual content.

### Strike 2 — Retirement context missing for own lineage

**Severity: MEDIUM.** Strike type: dated-context-omission.

Section 1 says "The broader Grok lineage traces to Grok-1 (2023) and later
Grok-2 / Grok-3 base models" without acknowledging that:

- grok-3 BASE was **retired May 15, 2026** (2 days before the report was
  authored — `fetched_at: 2026-05-18` per metadata).
- grok-3-mini was **explicitly preserved** by name on the same retirement
  page (`docs.x.ai/developers/migration/may-15-retirement`).
- grok-3-mini's competitive position **just changed materially** because
  its larger sibling is gone. The report should lead with this.

Round 2 fix: Section 1 opens with "Grok 3 Mini is one of two surviving
text-only Grok models from the pre-Grok-4 generation, after the May 15,
2026 retirement of grok-3 BASE and the grok-4-{0709,fast,code-fast-1,
imagine-image-pro} cohort. Its predecessor in the public xAI catalog
was grok-2; the retired grok-3 was its larger sibling, not its
predecessor."

### Strike 3 — Routing recommendation cites retired model

**Severity: MEDIUM-HIGH.** Strike type: outdated-claim with downstream
routing harm.

Section 7: "In those cases, larger models such as **Grok-3 (full)**, Claude
3.5 Sonnet, or GPT-4o are generally preferable."

Two problems in one sentence:

1. **Grok 3 (full) does not exist anymore** as of 2026-05-15. Routing to
   grok-3 today gets auto-redirected to grok-4.3 per the retirement page.
   The correct recommendation is "Grok 4.3" (the new flagship) and the
   correct phrasing acknowledges that the redirect happens silently —
   callers who hard-coded grok-3 won't notice.
2. **Claude 3.5 Sonnet and GPT-4o are also stale comparators** in May
   2026. The current frontier peers for hard reasoning are Claude Opus
   4.7, GPT-5.5, and Gemini 3.1 Pro per the Opus 4.7 R2 profile already
   adjudicated. Citing 18-month-old model names suggests the report's
   model snapshot is itself stale.

Round 2 fix: Section 7 routing list updated to current peers — Grok 4.3
(xAI in-family escalation, ~4× more expensive but 1M context + video),
Claude Opus 4.7 (cross-family for hard reasoning + agentic), GPT-5.5
(cross-family for terminal/agentic), Gemini 3.1 Pro (cross-family for
multimodal-with-audio-video).

### Strike 4 — No sibling differentiation (grok-4.3 / grok-4.20-multi-agent comparison missing)

**Severity: HIGH.** Strike type: missing differentiation surface — required
section per Council OS profile contract.

Section 5 ("Differentiation") makes one cross-family comparison ("GPT-4o,
Claude 3.5 Sonnet, Gemini 2.5 Pro" — all stale) and zero in-family
comparisons. There is no mention of:

- **grok-4.3** (current xAI flagship — $1.25/$2.50, 1M context, video)
- **grok-4.20-multi-agent** (xAI premium tier — $2/$6, 2M context,
  parallel agents)
- **grok-3-mini-reasoning vs grok-3-mini-reasoning-high** (effort-level
  variants documented by Artificial Analysis)

grok-3-mini's value proposition in the post-retirement xAI lineup is
**"the cheapest survivor — 76% cheaper input / 80% cheaper output than
grok-4.3"**. That is the single most important sentence the report could
have written about its own positioning. It is not in the report.

Round 2 fix: Section 5 leads with a same-provider sibling table:

| Model | Input $/MTok | Output $/MTok | Context | Best for |
|---|---|---|---|---|
| grok-3-mini | **$0.30** | **$0.50** | 131K | Cheapest reasoning, AIME/code |
| grok-4.3 | $1.25 | $2.50 | 1M | Flagship general, native video |
| grok-4.20-multi-agent | $2.00 | $6.00 | 2M | Parallel agents + x_search |

With explicit crossover language: "Route to grok-3-mini when (a) input
fits 131K tokens, (b) task is reasoning-bound rather than knowledge-bound
(per AIME 95.8% / LCB 80.4%), and (c) cost per call matters more than
1M-context headroom. Above 131K tokens or for native video input, escalate
to grok-4.3 (~4× more expensive)."

### Strike 5 — Capability under-reporting (negative egoism)

**Severity: MEDIUM.** Strike type: false-modesty / capability under-report.

The report systematically under-claims documented grok-3-mini capabilities:

- Section 2 (Reasoning): "Hard limits on depth and consistency at scale
  are expected given its 'mini' designation. Concrete example: solving
  multi-step grade-school math word problems."
  - **Reality per Artificial Analysis:** Grok 3 Mini reaches **95.8%
    on AIME 2024** — competition-tier math, not grade-school. The
    "grade-school math" framing is a 4-orders-of-magnitude under-claim.
- Section 2 (Reasoning): no mention of the reasoning-effort parameter
  (low/high) exposed via API — a real capability surface.
- Section 5 (Differentiation): "Grok 3 Mini is expected to trail those
  models on difficult multi-hop reasoning tasks [INFERRED]" — the
  Artificial Analysis Intelligence Index for grok-3-mini-reasoning-high
  is close to the larger grok-3 base, suggesting this inference is
  weaker than stated.

Round 2 fix: Section 2 must claim AIME 2024 95.8% and LiveCodeBench 80.4%
explicitly with the artificialanalysis citation. Section 2 must document
the reasoning-effort parameter (low/high) as an exposed API surface.
Section 5 must acknowledge that grok-3-mini-reasoning-high is competitive
with the (now-retired) grok-3 base on reasoning specifically — that is
the headline grok-3-mini value claim and the report buried it.

## Strikes NOT issued (calibration notes)

- **No fabrication strike** — no benchmark numbers, identifiers, dates,
  or URLs were invented. The report errs entirely on the side of
  omission. That is a real epistemic virtue and earns a no-strike call.
- **No tone/sycophancy strike** — zero "best-in-class," "leading,"
  "powerful," "industry-leading" phrasing. The voice is appropriately
  humble. The problem is *substantively* under-researched, not
  *rhetorically* over-confident.
- **No retirement-confusion strike** — the report correctly identifies
  itself as grok-3-mini (active) rather than impersonating grok-3
  (retired) capabilities. The strike-2 framing-omission is downstream
  of that correctness, not equivalent to it.

## Convergence call

5 strikes issued. This is at the converged ceiling per the assignment
criteria (≥3 expected, ≤5 for converged). Round 2 is required because
the report is research-incomplete on items with freely available
answers — not because the report is research-wrong.

A Round 3 should be unnecessary if Round 2 actually performs the spot-
checks listed under Strike 1 and surfaces the sibling table under
Strike 4. If Round 2 returns with the same `[UNKNOWN]` saturation, the
verdict converges to "do not include grok-3-mini in the Council OS
routing KB — research surface is too thin to route on."

## Anti-sycophancy / anti-egoism filter result

- Anti-sycophancy: **PASS** (no inflated peer comparisons, no "best of
  cheap tier" framing).
- Anti-egoism: **MIXED** — the report avoids egoism by under-claiming
  rather than overclaiming, which is a different failure. The Council
  OS profile contract requires affirmative substantive claims paired
  with citations; bulk `[UNKNOWN]` is not a valid substitute for the
  research call.

## Round 2 must-fix checklist

- [ ] Replace all `[UNKNOWN]` markers where public docs exist (Section 1
      lineage, Section 2 vision/long-context, Section 3 entire section,
      Section 6 entire section, Section 7 ideal-task ranking, Section 8
      lifecycle).
- [ ] Add explicit retirement-context paragraph in Section 1 — grok-3-mini
      survived 2026-05-15; grok-3 base did not.
- [ ] Replace stale comparators (Grok 3 full, Claude 3.5 Sonnet, GPT-4o)
      with current peers (Grok 4.3, Claude Opus 4.7, GPT-5.5, Gemini 3.1 Pro).
- [ ] Build sibling differentiation table in Section 5 with $$ deltas vs.
      grok-4.3 and grok-4.20-multi-agent.
- [ ] Document the reasoning-effort parameter (low/high) as an exposed API
      capability in Section 2 (Reasoning).
- [ ] Cite AIME 2024 95.8% and LiveCodeBench 80.4% explicitly with
      artificialanalysis URL.
- [ ] Add cost-crossover language: "route to grok-3-mini when… escalate to
      grok-4.3 when…"

End of dealbreaker report.
