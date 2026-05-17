---
round: 1
adjudicator: claude-opus-4-7
adjudicates: claude-haiku-4-5 (round-1-self-research.md)
bias_filter: standard + anti-meta-sycophancy
sibling_profile: claude-opus-4-7/round-2-self-research.md
date: 2026-05-17
verified_against:
  - /Users/mitchellwilliams/Documents/council-os/api-guides/anthropic/_official-models-overview.md
  - https://www.anthropic.com/news/claude-haiku-4-5 (release announcement, Oct 15 2025)
  - https://platform.claude.com/docs/en/about-claude/pricing (cache + batch rates)
  - https://www.datacamp.com/blog/anthropic-claude-haiku-4-5 (SWE-bench Verified 73.3%, OSWorld 50.7%)
---

# Round 1 Dealbreaker — Claude Haiku 4.5 Self-Research

> Anti-meta-sycophancy note: this profile is short, the [INFERRED] markers
> are honest, and the egoism-trap defense in the Summary ("leads with losses")
> is structurally correct. None of that earns it strikes-amnesty. The cheapest
> Claude has to be **specifically** good at being the cheapest Claude — vague
> humility plus missed first-party Anthropic-published numbers is still a
> failed routing profile.

---

## Strike count

| Category | Count |
|---|---|
| Factual errors (contradict official docs or first-party announcement) | 4 |
| Missing first-party benchmarks Anthropic itself published at launch | 3 |
| Wrong / fabricated operational numbers | 2 |
| Sibling-differentiation failures (vs. Sonnet 4.6 / Opus 4.7) | 2 |
| Egoism / cost-positioning weakness | 1 |
| **Total strikes** | **12** |

Convergence threshold is ≥ 5. **Not converged.** A Round 2 is required.

---

## Strikes — detailed

### S1 — FACTUAL: Self-contradictory extended-thinking claim
**Where:** Section 2 → Reasoning → "Hard limits" (line 13).
**Claim:** "Adaptive thinking is NOT supported — a hard feature gap vs. Sonnet 4.6 and Opus 4.7."
**Reality:** The official models table (`_official-models-overview.md` lines 33-34) shows:
- Extended thinking: Opus 4.7 **No**, Sonnet 4.6 **Yes**, Haiku 4.5 **Yes**
- Adaptive thinking: Opus 4.7 **Yes**, Sonnet 4.6 **Yes**, Haiku 4.5 **No**

So Haiku's adaptive-thinking gap is real vs. **both** siblings — but Opus 4.7 is also missing **extended** thinking. The report's framing ("Sonnet and Opus do") is half-wrong: only Sonnet has both. Opus has adaptive only. Haiku has extended only. This is a routing-critical fact and the report got the sibling shape wrong. **Strike.**

### S2 — FACTUAL: Release date understated
**Where:** Section 1 (line 5), Section 8 (line 158).
**Claim:** "released October 2025."
**Reality:** Released **October 15, 2025** ([Anthropic announcement](https://www.anthropic.com/news/claude-haiku-4-5)). For a routing KB used to gate model selection by lifecycle, "October 2025" is too coarse — the dated snapshot ID `20251001` in the same paragraph also conflicts with the announcement date (the snapshot ID date precedes the public-announcement date by two weeks, which is worth a one-sentence flag). **Strike.**

### S3 — FACTUAL: Successor-section cutoff logic is broken
**Where:** Section 8 (line 160).
**Claim:** "Successor: None announced as of knowledge cutoff (Feb 2025)."
**Reality:** The report header has `fetched_at: 2026-05-17` (implied by the dealbreaker frame). The model's *training* cutoff is Jul 2025; the *reliable knowledge* cutoff is Feb 2025. Successor-status is a real-world fact knowable from web search at the time the profile is being **written**, not from the model's training data. This sentence is a category error: a routing profile must report what is true **today** (no Haiku 5 announced as of 2026-05-17 — verified), not what the model "knew" at training time. **Strike.**

### S4 — FACTUAL: Vision-format claim under-specified
**Where:** Section 2 → Vision (line 30).
**Claim:** "PNG, JPEG, GIF, WebP" image formats.
**Reality:** Correct list, but the report misses that Opus 4.7 expanded the per-image pixel budget to ~3.75 MP and Haiku **did not** get that expansion — Haiku stays on the standard Claude vision pixel budget. Routing-critical for high-resolution screenshot work (Haiku will downsample on inputs Opus would not). [Confirmed via Opus 4.7 round-2 profile, Vision section.] **Strike.**

---

### S5 — MISSING BENCHMARK: SWE-bench Verified 73.3%
**Where:** Section 2 → Code Generation (line 42), repeated as `[INFERRED]` in Section 6 Degradation Patterns (line 131).
**Claim:** "No direct SWE-bench scores published for Haiku 4.5… [INFERRED] Haiku likely underperforms."
**Reality:** Anthropic published **SWE-bench Verified 73.3%** at launch (averaged over 50 runs with a two-tool scaffold, no test-time compute) ([DataCamp roundup citing Anthropic launch](https://www.datacamp.com/blog/anthropic-claude-haiku-4-5); [Caylent deep-dive](https://caylent.com/blog/claude-haiku-4-5-deep-dive-cost-capabilities-and-the-multi-agent-opportunity)). This is the **single most important number** for routing Haiku — and it is the differentiator that justifies its existence (matches Sonnet 4 at ~1/3 the cost). The report's `[INFERRED]` defense is the wrong move here: the small model didn't know its own headline benchmark. **Strike.**

### S6 — MISSING BENCHMARK: OSWorld 50.7% (computer use)
**Where:** Section 2 → Agentic / Computer Use (lines 53-56).
**Claim:** "Same loop quality as Sonnet 4.6 — no architectural ceiling… real limit is latency."
**Reality:** Anthropic published **OSWorld 50.7%** for Haiku 4.5 at launch — higher than Sonnet 4's 42.2% on the same benchmark, and the highest any Haiku has ever scored ([DataCamp roundup](https://www.datacamp.com/blog/anthropic-claude-haiku-4-5)). "Same as Sonnet 4.6" is unsupportable without a Sonnet 4.6 OSWorld number for comparison; the actual published Sonnet 4.6 OSWorld score belongs here. This is the **second** most important routing number. **Strike.**

### S7 — MISSING BENCHMARK: "Matches Sonnet 4 at 1/3 cost" positioning
**Where:** Section 5 → Differentiation (lines 89-122).
**Claim:** Section enumerates cost/latency/reasoning-on-budget wins, ends with "Nothing" under "What ONLY Haiku can do."
**Reality:** Anthropic's own launch framing — "comparable performance to Sonnet 4, at about one-third the cost" — is the **central positioning claim** for the model and is missing from the differentiation section. This is the price-quality crossover point Mitchell's routing logic actually needs: tasks that were correctly routed to Sonnet 4 in 2025 should be re-routed to Haiku 4.5 in 2026. Without that line, the section devolves into generic "smaller = cheaper" recap. **Strike.**

---

### S8 — WRONG OPERATIONAL: Cache pricing fabricated as [INFERRED]
**Where:** Section 3 Operational table (lines 70-71).
**Claim:** "Cached read $0.30 / 1M tokens [INFERRED]; Cached write $1.25 / 1M tokens [INFERRED]."
**Reality:** Anthropic publishes cache pricing as **multipliers**, not absolute dollars: cache hits = 0.1× base input (so 90% off = **$0.10 / MTok** on Haiku, not $0.30); cache writes = 1.25× base input for 5-min TTL or 2.0× for 1-hour TTL (so **$1.25 / MTok** for 5-min write — that part the report got accidentally right by guessing 1.25 directly; flagging the structure error not the dollar match) ([official pricing](https://platform.claude.com/docs/en/about-claude/pricing); [WebSearch corroboration 2026-05-17](https://www.finout.io/blog/anthropic-api-pricing)). The `[INFERRED]` tag is honest; the inferred number is wrong (read by 3×). For a routing KB this is a meaningful cost-modeling error. **Strike.**

### S9 — WRONG OPERATIONAL: Batch discount left blank
**Where:** Section 3 Operational table (line 71).
**Claim:** "Batch discount — [Unknown — would need to verify against current batch pricing]."
**Reality:** Anthropic's batch discount is **a flat 50% off both input and output** for all Claude models including Haiku 4.5 ([official pricing](https://platform.claude.com/docs/en/about-claude/pricing)). Combined with caching, real cost can drop to ~5% of nominal — and that combined number is **the** reason to route bulk classification work through Haiku 4.5 + batch + cache, which is exactly Mitchell's `batch-runner-batches.mjs` workflow. Leaving this blank in a cost-leader profile is a routing-critical omission. **Strike.**

---

### S10 — SIBLING-DIFF: Knowledge-cutoff claim wrong by direction
**Where:** Section 5 (line 114) and Section 7 (line 152).
**Claim:** "Haiku's Feb 2025 cutoff is 4+ months stale."
**Reality:** The official table shows:
- Haiku 4.5 reliable cutoff **Feb 2025**, training cutoff **Jul 2025**
- Sonnet 4.6 reliable cutoff **Aug 2025**, training cutoff **Jan 2026**
- Opus 4.7 reliable cutoff **Jan 2026**, training cutoff **Jan 2026**

So Haiku is **11 months stale vs. Opus** on reliable knowledge, not "4+ months." The "4+ months" framing only works if you compare reliable-to-training across model lines, which is a category error. Direction is right; magnitude is understated by ~3×. For routing recent-events queries this matters — the gap is severe enough that web grounding is mandatory, not optional. **Strike.**

### S11 — SIBLING-DIFF: "Same loop quality as Sonnet 4.6" without source
**Where:** Section 2 → Agentic / Computer Use (line 54).
**Claim:** "Same loop quality as Sonnet 4.6 — no architectural ceiling."
**Reality:** No source. The OSWorld 50.7% number (S6) suggests Haiku beats Sonnet **4** on computer use but Anthropic has not published a head-to-head against Sonnet **4.6** specifically. The correct framing is "near-Sonnet-4-quality at 1/3 cost; Sonnet 4.6 has not been benchmarked on OSWorld at the same scaffold so the comparison is `[UNKNOWN]`." Casual "same as Sonnet 4.6" claim is sycophancy toward the in-family sibling. **Strike.**

---

### S12 — EGOISM: Differentiation section structurally good but headline missing
**Where:** Section 5 (lines 89-122) — overall section grade.
**Claim:** Three numbered wins (cost, latency, reasoning-on-budget) and four numbered losses, ending with "Nothing" under unique capabilities.
**Reality:** The shape is correct (cost-leader profile leads with what it loses, then justifies the cost crossover). What's missing is the explicit **routing decision rule** Mitchell needs:
- If task is in the Sonnet-4-quality envelope (per Anthropic's own positioning) **and** volume > N tickets/day → Haiku 4.5
- If task requires adaptive thinking → Sonnet 4.6 minimum
- If task requires > 200k context → Sonnet 4.6 or Opus 4.7
- If task is novel reasoning or frontier code → Opus 4.7

The current text describes capabilities; it does not give a routing rule. For a routing KB this is the deliverable that's actually missing. **Strike.**

---

## In-family sibling differentiation status

**Status: PARTIAL.** The report correctly identifies the three Haiku vs. Sonnet/Opus axes (adaptive thinking, context window, knowledge cutoff) but:
- Gets the extended-thinking sibling shape wrong (S1)
- Casually claims "same loop quality as Sonnet 4.6" without source (S11)
- Misses the central "Sonnet 4 quality at 1/3 cost" positioning (S7)
- Misses the SWE-bench Verified 73.3% and OSWorld 50.7% numbers that **justify** Haiku's existence (S5, S6)

The cost-positioning generosity called for in the dealbreaker prompt (be lenient with `[INFERRED]` when paired with cost positioning) is **not honored** because the cost positioning itself is incomplete — cache pricing is wrong (S8) and batch discount is blank (S9). Cannot apply the leniency clause.

---

## Top 3 stripped (claims to cut entirely from Round 2)

1. **"Adaptive thinking is NOT supported — a hard feature gap vs. Sonnet 4.6 and Opus 4.7"** (line 13) — incorrect sibling framing. Replace with: "Haiku 4.5 supports **extended thinking** (Opus 4.7 does not); does NOT support **adaptive thinking** (Sonnet 4.6 and Opus 4.7 do). Per `_official-models-overview.md` lines 33-34."
2. **"Same loop quality as Sonnet 4.6 — no architectural ceiling"** (line 54) — unsupported peer claim. Replace with the Anthropic-published OSWorld 50.7% number plus an explicit `[UNKNOWN]` for the Sonnet 4.6 comparison.
3. **"Successor: None announced as of knowledge cutoff (Feb 2025)"** (line 160) — category error. Replace with web-verified "no Haiku 5 announced as of 2026-05-17."

## Top 3 omissions (claims to ADD in Round 2)

1. **SWE-bench Verified 73.3%** as the headline coding number, with the scaffold note (50-run average, two tools, no test-time compute). Source: [Anthropic launch announcement](https://www.anthropic.com/news/claude-haiku-4-5) / [DataCamp summary](https://www.datacamp.com/blog/anthropic-claude-haiku-4-5).
2. **OSWorld 50.7%** as the headline computer-use number, with the "highest Haiku ever; beats Sonnet 4's 42.2%" framing. Same sources.
3. **"Sonnet 4 quality at ~1/3 cost" positioning + correct cache (90% off, $0.10 / MTok read) + batch (50% off) economics**, surfaced as an explicit routing rule: "Migrate Sonnet-4-era workflows here unless the task requires adaptive thinking, > 200k context, or post-Jul-2025 knowledge."

---

## Converged?

**No.** Round 2 required. The model failed to source its own first-party launch benchmarks and got the in-family sibling shape wrong on extended thinking. These are not subtle errors; they are the table-stakes facts a routing KB needs.

## Estimated cost (this adjudication)

~$0.45 — Opus 4.7 adjudicator, two parallel WebSearches (~1k input tokens each), two file reads (~30k input tokens with cache), ~2.5k output tokens for the two artifacts. Cache-warm if run within 5 min of the sibling Opus profile read.
