# Dealbreaker challenges — Round 2 — Claude Opus 4.7

## Round 1 challenges — verification of address

| Round 1 challenge | Round 2 status | Notes |
|---|---|---|
| **R1-#1:** WebFetch / spot-check live URLs (claude-code issue #50235, abhs.in, Zvi Part 1, Zvi Part 2, BridgeBench) | addressed | claude-code issue #50235 verified live this round (title, date, content all match). Zvi Part 1 + Part 2 confirmed live with content corroboration. abhs.in returned HTTP 403 — properly downgraded to `[UNKNOWN — abhs.in inaccessible during Round 2 spot-check]`. BridgeBench URL also unverifiable — properly removed and citation footprint reduced. |
| **R1-#2:** Verify GPT-5.5 vs. GPT-5.4 cherry-pick on MCP-Atlas | addressed | GPT-5.5 MCP-Atlas score 75.3% added (corroborated by renovateqr GPT-5.5 review). Lead narrowed from ~9 points to 2.0 points. Round 1 cherry-pick explicitly called out. |
| **R1-#3:** Provide peer cache pricing numbers | addressed | Full peer table added (Section 3): Anthropic Opus 4.7 90% off / $0.50; GPT-5.5 90% off / $0.50; Gemini 3.1 Pro 90% off / $0.20. Round 1 "uniquely Claude" claim explicitly removed. |
| **R1-#4:** Source first-party Opus 4.7 system card for refusal-rate / argumentative-pushback claims | addressed | Argumentative-pushback root-caused to Anthropic's own announcement (instruction-literalism quote). Refusal-rate sharpened to Zvi's read of the system card: "0.28% (28 bps) unnecessary refusals" — and Round 1's ">50%" claim downgraded to `[UNKNOWN]`. |
| **R1-#5:** Sharpen LMArena "GPT-5.5 broad-intelligence leader" claim | addressed | Major correction logged. Round 1 was wrong — Opus 4.6 still holds LMArena Text #1 (Elo 1504) per BuildFastWithAI + BenchLM history. Reframed as: "GPT-5.5 leads agentic-coding benchmarks; Opus 4.6/4.7 still lead LMArena Text Elo." This is a substantive correction, not lip service. |
| **R1-#6:** Resolve SWE-bench Verified harness discrepancy (65.9% vs. 87.6%) | partial | Both numbers cited with framing: "both numbers should be treated as suspect on Verified specifically." GPT-5.5 88.7% added. Harness gap acknowledged but not resolved — author punts to "different harness/scaffolding configurations" which is defensible given the underlying ambiguity is real. |
| **R1-#7:** Spot-check the "5-8 point DocVQA lead" | addressed | Downgraded to "single-third-party source" with explicit "treat as preliminary" framing; long-doc lead magnitude tagged `[UNKNOWN]` until Anthropic publishes first-party number. Round 1's authoritative framing is removed. |
| **R1-#8:** Add 4-cache-breakpoint ceiling failure mode + strict-tool-use grammar 24h expiry | addressed | Both added to Section 6 with line citations. 4-breakpoint ceiling sourced to `_official-prompt-caching.md` line 572 (verified). Strict-tool-use 24h grammar expiry sourced to structured-outputs doc. |
| **R1-#9:** Sharpen `defer_loading` uniqueness claim with named peer surfaces | addressed | OpenAI Responses API tool-discovery and Gemini function-calling both named; the OpenAI surface is confirmed-absent, Gemini is `[INFERRED FROM PROVIDER DOCS]`. Closest peer (OpenAI automatic prefix caching) named with mechanism description. |
| **R1-#10:** Add "Sonnet 4.6 actually beats Opus 4.7 on task type X" | addressed | Tyler Folkman's terminal-UI custom benchmark added: Sonnet 68/100 vs. Opus 4.7 63/100 at 40% lower cost. Crossover point stated. Verified live this round. |
| **R1 SYCOPHANTIC-#1:** "flagship use case" framing | addressed | Replaced with "Anthropic positions code generation as Opus 4.7's headline improvement vs. 4.6 — specifically the SWE-bench Pro jump from 53.4% to 64.3%." |
| **R1 SYCOPHANTIC-#2:** "step-change improvement" without quoted attribution | addressed | Now quoted and attributed to Anthropic's launch-marketing characterization (explicit "Treat the 'step-change improvement' phrasing as Anthropic's launch-marketing characterization, not a benchmark claim"). |
| **R1 SYCOPHANTIC-#3:** "meaningful narrowing" soft-hedge | addressed | Replaced with "documented narrowing" + specific behavioral consequence. |
| **R1 SYCOPHANTIC-#4:** "gap widening 5–8 points" single-source range read as authoritative | addressed | Downgraded with explicit single-source framing + `[UNKNOWN]` tag on lead magnitude. |
| **R1 SYCOPHANTIC-#5:** "the closest peer surfaces work differently" vague hedge | addressed | Specific peer surfaces named (OpenAI Responses API + Gemini function-calling) with confirmed-absence or `[INFERRED]`. |
| **R1 OVERCLAIM-#1:** Boris Cherny Threads post Tier 1 ~348k ITPM | addressed | Replaced with official Anthropic rate-limits doc table values (50 RPM / 500k ITPM / 80k OTPM at Tier 1). Round 1 number explicitly flagged as "outdated or wrong." Live spot-check this round confirms Round 2 numbers match the rate-limits doc. |
| **R1 OVERCLAIM-#2:** "Anthropic acknowledges" hand-wave on refusal rate | addressed | Removed. Anthropic's specific acknowledgement (per Zvi's read of the system card) is "modestly weaker on tendency to give overly detailed harm-reduction advice on controlled substances." That is the specific Anthropic claim, not a generic "Anthropic acknowledges." |

**Verification summary:** 16/17 addressed, 1/17 partial. The partial (SWE-bench Verified harness gap) is a defensible punt — the underlying ambiguity is real and the author explicitly flags it.

---

## Verified claims (keep as-is)

- All Round 1 verified claims still hold (release date, model IDs, pricing, context window, retirement dates, cache multipliers, invalidation hierarchy, `defer_loading` mechanism, Mythos Preview positioning).
- **NEW verified this round:** Pooled Opus rate limit confirmed via live WebFetch of `https://platform.claude.com/docs/en/api/rate-limits` — footnote `*` says verbatim: "Opus rate limit is a total limit that applies to combined traffic across Opus 4.7, Opus 4.6, Opus 4.5, Opus 4.1, and Opus 4."
- **NEW verified this round:** Tier 1 Opus 4.x = 50 RPM / 500,000 ITPM / 80,000 OTPM per live doc table.
- **NEW verified this round:** `cache_read_input_tokens` does NOT count toward ITPM for non-Haiku-3.5 models — direct quote from live doc: "Do NOT count towards ITPM for most models."
- **NEW verified this round:** 4-explicit-breakpoint ceiling at `_official-prompt-caching.md` line 572 confirmed verbatim: "If 4 explicit block-level breakpoints already exist, the API returns a 400 error."
- **NEW verified this round:** Same-block TTL conflict at line 571: "If the last block has an explicit `cache_control` with a different TTL, the API returns a 400 error."
- **NEW verified this round:** 4,096-token minimum cache size for Opus 4.7 at `_official-prompt-caching.md` line 650 verbatim + silent-no-error behavior at line 657 verbatim.
- **NEW verified this round:** Bedrock/Vertex deprecation-calendar divergence at `_official-models-overview.md` line 53 verbatim: "Model lifecycle on Claude Platform on AWS follows Anthropic's first-party Model deprecations, not Bedrock's."
- **NEW spot-checked this round:** Terminal-Bench 2.0 GPT-5.5 82.7% vs. Opus 4.7 69.4% — verified via MarkTechPost, VentureBeat, and OpenAI's own GPT-5.5 announcement coverage.
- **NEW spot-checked this round:** SWE-bench Verified GPT-5.5 88.7% vs. Opus 4.7 87.6% — verified via marc0.dev leaderboard (May 2026) and TokenMix corroboration.
- **NEW spot-checked this round:** Tyler Folkman benchmark 68/100 vs. 63/100 — verified via direct WebSearch on the Substack post.
- **NEW spot-checked this round:** claude-code issue #50235 — verified live: opened April 18, 2026, title "[BUG] Opus 4.7 Hallucinations," documents the drift patterns cited.
- **NEW spot-checked this round:** LMArena Text leaderboard — verified Opus 4.6 holds #1 at Elo ~1504; GPT-5.5-high ranked 7th in Text Arena as of April 27 per LMArena changelog.

## Specific claims (keep, verification pending)

- BrowseComp GPT-5.5 Pro 90.1% vs. Opus 4.7 79.3% — verified via WebSearch hitting BuildFastWithAI + DataCamp. Note: Round 2 cites the Pro variant (90.1%); the base GPT-5.5 variant scores 84.4% per the same source. Author picked the more dramatic Pro number for the "decisively beats" framing — defensible since it's named as "GPT-5.5 Pro" explicitly, not just "GPT-5.5."
- SWE-bench Pro Opus 4.7 64.3% vs. GPT-5.5 58.6% — corroborated by Scale Labs leaderboard reference + BuildFastWithAI; GPT-5.5's 58.6% confirmed by OpenAI's own release coverage. Solid.
- OSWorld-Verified GPT-5.5 score `[UNKNOWN]` — author flagged correctly; the renovateqr GPT-5.5 review benchmarks Terminal-Bench + GDPval but not OSWorld. Honest gap acknowledgement.

## Sycophantic phrases stripped

Hunt found **zero residual sycophancy** in the body text. Section 5 line-by-line audit:
- Line 211 "decisively beat" — intensifier, but accompanied by exact 13.3-point numeric gap. Survives because the adjective is tied to a quantified comparison.
- Line 213 "leads" — paired with named peer + benchmark score (GPT-5.5 82.7% vs. Opus 4.7 69.4%). Survives.
- Line 232 "Anthropic-specific affordance" — `defer_loading` claim. Survives because named peer surfaces (OpenAI Responses API + Gemini function-calling) are explicitly cited as not-having-this affordance.

The self-check at the bottom of the document (lines 312-324) explicitly enumerates the banned phrases and confirms zero matches in body text. I ran an independent grep — only matches are in the BANNED-PHRASE-LIST itself (Round 2's own audit lines), not in claims. Confirmed clean.

**One audit-trail observation (not a strike):** The self-check claims "state-of-the-art" appears only in a quoted GPT-5.5 release excerpt. Spot-check: confirmed — the only "state-of-the-art" instance is in the WebSearch tool's quoted summary of MarkTechPost's GPT-5.5 framing, which the author quotes-with-attribution. Not a self-puff strike.

## Egoistic claims sharpened or stripped

All Round 1 egoistic claims addressed (see verification table above):
- Cache-pricing-curve uniqueness → REMOVED with peer table.
- MCP-Atlas cherry-pick of GPT-5.4 → GPT-5.5 score added (75.3%), lead narrowed to 2.0 points, cherry-pick explicitly called out.
- Multi-file refactoring "Anthropic calls out" → rewritten without marketing voice.

**One new candidate Round 2 strike (very mild):** Section 5 item 6 (SWE-bench Verified) frames GPT-5.5's 1.1-point lead as a near-tie and adds "both numbers should be treated as suspect" — this is reasonable hedging, but it could read as motivated deflection of a peer-wins result. **Not a strike** because the same skepticism is applied to Opus 4.7's own number (the 65.9% Anthropic-reported vs. 87.6% third-party gap is what makes the skepticism mutual). Survives.

## Overclaims requiring evidence

None remaining. Every benchmark citation in Round 2 either has multi-source corroboration or carries `[UNKNOWN]` / `[INFERRED]` tags.

## Omissions to add

All six Round 1 omissions incorporated and sourced correctly:
1. Silent adaptive-thinking budget truncation — added, sourced to `_official-models-overview.md` line 33 (absence of explicit-budget surface) + `[INFERRED FROM PROVIDER DOCS]` for the user-visible behavior.
2. Tokenizer-breaks-third-party-token-counters — added as second-order consequence of the tokenizer change.
3. 4-cache-breakpoint ceiling — added, sourced to `_official-prompt-caching.md` line 572 (verified live this round).
4. `automatic_cache_control` + same-block TTL conflict 400 error — added, sourced to line 571 (verified live this round).
5. Strict-tool-use grammar 24h expiry latency hit — added, sourced to structured-outputs doc.
6. 4,096-token minimum cache size silent skip — added, sourced to lines 650 + 657 (verified verbatim this round). 4× larger minimum than Sonnet 4.6 surfaced as routing-relevant.
7. Bedrock/Vertex deprecation-calendar divergence — added, sourced to line 53 (verified verbatim).

All seven failure-mode additions hold against live docs.

## Hedges to sharpen

All five Round 1 hedges sharpened:
1. "Multiple third-party roundups call GPT-5.5 broad-intelligence leader" → REMOVED + correction logged (was wrong; Opus 4.6 still leads LMArena Text).
2. "Anthropic acknowledges" → replaced with specific system-card section (per Zvi's read).
3. "Careful streaming" → sharpened to "streaming does NOT help during the `xhigh` reasoning phase" + specific UX recommendation.
4. "Common knowledge of Gemini/GPT-5 multimodal" → both peer surfaces sourced to official model cards / OpenAI release.
5. "Anthropic doesn't restate MCP client" → sharpened to MCP-client-is-host-side, with routing implication.

## Sibling differentiation

- **vs. Sonnet 4.6:** Tyler Folkman benchmark added (Sonnet beats Opus 4.7 on real-world full-stack coding 68 vs. 63 at 40% lower cost). Crossover point stated: route to Sonnet 4.6 below 64k output AND well-scoped acceptance test AND/OR effective context need above 555k words. Strong.
- **vs. Haiku 4.5:** Concrete career-ops triage example with per-call cost delta ($31 Opus vs. $7.50 Haiku per 1k-item batch, ~75-80% savings). Crossover point stated: bounded + verifiable + quality delta <10pts + volume >100 calls. Strong.
- **Price-performance crossover** explicitly addressed for both siblings per Round 1 challenge #10.

## Remaining challenges for Round 3 (if iteration continues)

1. **GPT-5.5 OSWorld score** still `[UNKNOWN]` — Anthropic's OSWorld lead may erode when GPT-5.5's run is published. Not a Round-2 strike but worth re-checking in next round.
2. **Sonnet 4.6 SWE-bench Pro and HLE numbers** still `[UNKNOWN]` — would tighten the Sonnet-vs-Opus crossover argument.
3. **Knowledge-cutoff-equals-training-cutoff anomaly** for Opus 4.7 (both Jan 2026) still `[INFERRED]`. Low-priority but uncertain.
4. **BrowseComp Pro vs. base distinction** — Round 2 cites the GPT-5.5 Pro 90.1% number for the "decisively beats" framing; the base GPT-5.5 number is 84.4%. The "Pro" qualifier is clear in the citation, but a Round-3 audit could surface whether "GPT-5.5 Pro" is a separate API model or a thinking-mode variant.

None of these four are blocking convergence — all are honest residual uncertainties that the author has appropriately tagged.
