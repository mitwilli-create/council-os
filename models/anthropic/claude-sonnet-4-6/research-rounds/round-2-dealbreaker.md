# Dealbreaker challenges — Round 2 — Claude Sonnet 4.6

> Adjudicator: Claude Opus 4.7 (in-family peer). Bias filters: standard sycophancy
> dictionary plus elevated anti-meta-sycophancy hunting. Round 2 focus: verify
> all 37 R1 strikes addressed, with special attention to (a) Opus 4.7 (not 4.6)
> as comparator throughout Section 5, (b) Extended-thinking surface as #1
> in-family differentiator, (c) Tyler Folkman benchmark cited, (d) 6 documented
> failure modes added.

## R1 → R2 strike-by-strike verification

### Sycophantic (5/5 addressed)

1. **"Performance-value inflection point"** → REMOVED. R2 line 19: "Anthropic positions Sonnet 4.6 at $3 / $15 per MTok versus Opus 4.7 at $5 / $25 — 40% lower per-token cost on both input and output." Concrete numeric framing. **CLEARED.**
2. **"Near-Opus intelligence at 40% lower cost and roughly 2x the throughput"** → REMOVED. R2 line 19: drops "near-Opus," replaces with measured TTFT 1.36s / throughput 45.4 t/s from artificialanalysis.ai. **CLEARED.**
3. **"99% of Opus 4.6 coding performance"** → REWRITTEN. R2 line 91: "SWE-bench Verified score of 79.6% — a 1.2-point gap vs. Opus 4.6 (80.8%) at 40% lower cost and roughly 2x throughput." Marketing rounding gone. **CLEARED.**
4. **"Beats its own more expensive sibling at scaled tool orchestration"** → REWRITTEN. R2 line 234 (Section 5): "MCP-Atlas multi-turn tool orchestration: 77.3% vs. 61.3% (16-point gap)" — Opus 4.7 wins by 16 pts, correctly framed. **CLEARED.**
5. **Tokenizer "Sonnet more efficient" framing** → REWRITTEN. R2 line 105: "Opus 4.7 uses a new tokenizer where 1M tokens covers only ~555k words — Sonnet 4.6's older tokenizer packs 35% more words per nominal token count… This is an inherited advantage from not upgrading tokenizers, not a feature investment." Honest framing. **CLEARED.**

### Egoistic / same-family (5/5 addressed)

1. **GDPval comparator list** → CORRECTED. R2 line 265: "Sonnet 4.6 does NOT lead the full field on this benchmark — the 'leads all current peers' claim in Round 1 was based on legacy comparators." GPT-5.5 84.9% GDPval and Opus 4.7 1,753 Elo both cited. Honest downgrade. **CLEARED.**
2. **GPT-5.4 conversational preference cherry-pick** → DROPPED ENTIRELY. The 47%/29%/24% blind eval claim is not in R2. Cleanest possible resolution — author chose to drop rather than re-source. **CLEARED.**
3. **MCP-Atlas vs. legacy Opus 4.6** → REWRITTEN. R2 line 45: "MCP-Atlas score 61.3% vs. Opus 4.7 at 77.3%… Sonnet 4.6 loses by 16 points to the current Anthropic flagship." Routing rule "Route multi-turn MCP work to Opus 4.7 if budget allows" present. **CLEARED.**
4. **Cost crossover hand-wave + missing Folkman** → ADDRESSED. R2 line 251-253: Tyler Folkman 68/100 vs. Opus 4.7 63/100 cited with full URL. Concrete crossover at line 282: "Above ~5 chained tools with compounding error: Opus 4.7. UX/maintainability-weighted rubric: Sonnet 4.6 (Folkman 68/100 vs. Opus 4.7 63/100)." **CLEARED.**
5. **"Nothing structurally exclusive" missing Extended thinking** → ADDRESSED. R2 line 247: "#1 — Extended-thinking explicit-budget surface: ONLY available on Sonnet 4.6 and Haiku 4.5 among current-generation models." Citation to `_official-models-overview.md` lines 33-34 with explicit note that Opus 4.7 Extended thinking = No. **CLEARED.**

### Overclaims (6/6 addressed)

1. **"Adaptive thinking doesn't apply uniform overhead"** → SOFTENED. R2 line 32 reframes adaptive thinking as a feature description, not a measured behavior claim. R1's unverifiable behavioral assertion is gone. **CLEARED.**
2. **GPQA 74.1% vs. 89.9% conflict** → BOTH CITED WITH METHODOLOGY. R2 lines 30-33: "74.1% — no-extended-thinking baseline… 89.9% — adaptive thinking at max effort, averaged over 10 trials." Effort-level annotation present. **CLEARED.**
3. **Citation hallucination [INFERRED] as Sonnet failure mode** → MOVED to category risks. R2 line 346: "Category risks shared across frontier LLMs (not Sonnet 4.6-specific)… No Sonnet 4.6-specific citation hallucination study found." **CLEARED.**
4. **Batch API [INFERRED] pricing** → REMOVED. R2 line 150: "$1.50 (50% discount — documented in `_official-prompt-caching.md` line 285, stacks with cache pricing)." Source cited. **CLEARED.**
5. **"No native JSON schema validation"** → REWRITTEN. R2 line 129: "Sonnet 4.6 supports strict tool use (`strict: true`) and JSON outputs (`output_config.format`), both of which compile JSON schemas into grammar that constrains generation." Correct documentation. **CLEARED.**
6. **"Handles this well" unbenchmarked concrete example** → REWRITTEN. R2 line 35: "Quality on this type of task is not formally benchmarked; user verification recommended before relying on outputs in production architecture decisions." **CLEARED.**

### Omissions (11/11 addressed)

1. **Extended thinking surface as #1 in-family differentiator** → ADDED. R2 line 247, Section 5 differentiator #1, top entry. Also surfaces in Section 7 as Top Task #1 (line 356). **CLEARED.**
2. **Tyler Folkman benchmark** → ADDED. R2 line 251-253 (Section 5 differentiator #2), also Section 2 Code Generation line 91, also routing matrix line 287. Substack URL cited. **CLEARED.**
3. **750k vs. 555k word coverage elevated** → ADDED. R2 line 259: "Word-dense 1M token window: ~750k words vs. Opus 4.7's ~555k words" — Section 5 differentiator #4. Routing rule in matrix line 283. **CLEARED.**
4. **Haiku 4.5 SWE-bench 73.3%** → ADDED. R2 line 95: "Haiku 4.5 at 73.3% SWE-bench Verified is only 6.3 points behind Sonnet 4.6 at 1/3 the cost." Routing rule in Section 7 line 374. **CLEARED.**
5. **Min cache prefix 1,024 vs. 4,096 tokens** → ADDED. R2 line 169: "Minimum cacheable prefix size: 1,024 tokens for Sonnet 4.6 (vs. 4,096 tokens for Opus 4.7, Opus 4.6, and Claude Mythos Preview)." Section 5 differentiator #3. Section 7 Top Task #4. **CLEARED.**
6. **4-breakpoint ceiling 400 error** → ADDED. R2 line 171 and line 339: "API returns a 400 error if 5 or more explicit `cache_control` breakpoints exist." Source line 572 cited. **CLEARED.**
7. **Strict-tool-use grammar 24h expiry** → ADDED. R2 line 129 and line 332: "Compiled JSON-schema grammars cache for 24 hours from last use, separate from prompt caching. A strict-tool-use agent that goes idle for >24h pays the grammar-compile latency hit." **CLEARED.**
8. **Bedrock/Vertex deprecation calendar divergence** → ADDED. R2 line 202 and line 342: "Bedrock-direct and Vertex-direct callers may be deprecated on different schedules — do not assume parity with the first-party timeline. Source: `_official-models-overview.md` line 53." **CLEARED.**
9. **Cache hits do not count against ITPM** → ADDED. R2 line 163: "For most Claude models, only uncached input tokens count toward ITPM rate limits. `cache_read_input_tokens` (tokens read from cache) do NOT count toward ITPM. This means cache-warm workloads can sustain dramatically higher effective throughput." **CLEARED.**
10. **Pooled Sonnet 4.x rate-limit tier numbers** → ADDED. R2 line 161: "Tier 1 (after $5 cumulative spend): 50 RPM / 30,000 ITPM… Tier 2 ($200 cumulative): 2,000 RPM / 800,000 ITPM. Tier 4 ($400 cumulative): 4,000 RPM / 2,000,000 ITPM / 800,000 OTPM." Sources cited. **CLEARED.**
11. **Claude Mythos Preview / Project Glasswing** → ADDED. R2 line 218: "Claude Mythos Preview (Project Glasswing) is a separate research preview model for defensive cybersecurity workflows, offered invitation-only with no self-serve signup. For cybersecurity-specific tasks, Mythos is the categorical routing alternative above all current-generation models including Sonnet 4.6." Source line 47 cited. **CLEARED.**

### Hedges (5/5 sharpened)

1. **artificialanalysis.ai TTFT fetched** → DONE. R2 line 19 and line 157: "TTFT 1.36s (below-average for price tier, median 1.60s), throughput 45.4 tokens/sec (below-average, median 56.3 t/s). Fastest provider: Google at 1.01s TTFT / Azure at 48.7 t/s throughput." Named provider configurations cited. **CLEARED.**
2. **"600k recall drift" community reports** → DOWNGRADED. R2 line 324: "Deep in-context coherence at 600k–1M tokens has not been formally published by Anthropic [UNKNOWN — would need a RULER or NIAH benchmark at full window length]. Community reports of recall drift exist but no named study is citeable; this claim is not asserted as a documented Sonnet 4.6 failure mode." Honest. **CLEARED.**
3. **Over-refusal 0.18% vs. 0.41% conflict** → BOTH CITED. R2 lines 309-311: "0.18% on higher-difficulty benign requests (latent.space, citing Anthropic system card); 0.41% on straightforward benign requests (Anthropic transparency documentation, cited by Caylent). Likely cause: different benchmark splits." Resolved. **CLEARED.**
4. **Nested-schema malformed JSON [INFERRED]** → SHARPENED. R2 line 132: "Complex schemas with optional parameters, union types, or deep nesting interact non-linearly with grammar size and can refuse to compile. Operators must implement validation loops for complex schema workloads." Specific failure modes named, [INFERRED] tag removed. **CLEARED.**
5. **Sonnet 4.5 differentiator framing** → REWRITTEN. R2 line 15: "Two upgrades from Sonnet 4.5: (a) 1M context window vs. 200k — the larger operational change for most callers, and (b) adaptive thinking added on top of the retained Extended-thinking surface. The context-window upgrade is the bigger shift for most real-world routing decisions; adaptive thinking is the bigger per-call compute-cost change." Verbatim match to R1 dealbreaker action. **CLEARED.**

### Sibling differentiation gaps (5/5 addressed)

1. **Same-family routing matrix** → ADDED. R2 lines 279-291 (Section 5 subsection "Same-Family Routing Matrix"). Includes 11 task types with Sonnet 4.6 / Opus 4.7 / Haiku 4.5 numbers AND specific routing rules. Matches and exceeds the R1 dealbreaker template — adds rows for sync long output, knowledge recency, agentic customer ops, science. **CLEARED.**
2. **Opus 4.6 → Opus 4.7 comparators throughout** → DONE. R2 Section 5 uses Opus 4.7 numbers exclusively: SWE-V 87.6%, SWE-Pro 64.3%, GPQA 94.2%, MCP-Atlas 77.3%, GDPval 1,753 Elo. **CLEARED.**
3. **No specific Sonnet-wins-vs-Opus-4.7 task** → ADDED. R2 line 251-253: Tyler Folkman benchmark is the decisive win. Plus three other Sonnet wins on Opus 4.7: Extended thinking surface, min-cache-prefix, word-dense context. **CLEARED.**
4. **Haiku crossover specificity** → ADDED. R2 line 267-269: "Tau2 Telecom 97.9% vs. Haiku 4.5 83.0% — a 15-point gap. Tau2 Retail 91.7% vs. Haiku 4.5 83.2% — an 8-point gap. For real-world agentic customer-service and operations tasks, the routing decision: if error cost per task exceeds 15× Haiku 4.5's per-call price savings, route to Sonnet 4.6." Concrete crossover rule. **CLEARED.**
5. **Migration paths from Opus 4.6** → ADDED. R2 lines 294-298 (Section 5 subsection "Migration paths from Opus 4.6"). All three paths enumerated with specific trade-offs. **CLEARED.**

---

## NEW R2 strikes

### NEW1 — LMArena Elo number drift (minor)

**Claim:** R2 line 93 says "LMArena Code Arena (April 2026): Sonnet 4.6 Elo 1,523, placing third after Opus models."

**Issue:** R1 cited 1,531 Elo (and R1 dealbreaker corroborated 1,531 via WebSearch). R2 changed it to 1,523 without explanation. An 8-Elo-point drift between rounds either means (a) the leaderboard refreshed and the number genuinely changed, or (b) it's a typo. The R2 author should note the date of the snapshot.

**Action (cosmetic):** Either annotate "(snapshot April 2026)" or revert to 1,531 if the change was unintentional. Not a blocking issue.

**Status:** 1 strike, cosmetic. Does not affect routing decisions.

### NEW2 — SWE-bench Pro Sonnet 4.6 score still [UNKNOWN]

**Claim:** R2 routing matrix line 290 (and Section 5 line 232): "SWE-bench Pro: 64.3% vs. no published Sonnet 4.6 score ([UNKNOWN])."

**Issue:** This is honest. The R2 author flags the gap. But SWE-bench Pro is the harder split that matters for the "when does Opus 4.7 beat Sonnet 4.6 decisively" routing decision. The R2 author could have run a WebSearch this round to attempt to source the Sonnet 4.6 SWE-bench Pro number — if it exists, even from a third-party source. If after a search it still doesn't exist, leaving [UNKNOWN] is fine.

**Action (minor):** Document in next round whether a WebSearch was attempted and what surfaced. If a third-party Sonnet 4.6 SWE-bench Pro number exists, cite it.

**Status:** 1 strike, minor. Does not break convergence.

### NEW3 — Section 2 Tool Use comparator still uses Vellum-only source

**Claim:** R2 line 49: "MCP-Atlas Sonnet 4.6 61.3% — [nxcode.io]… Opus 4.7 MCP-Atlas 77.3% — [Vellum]."

**Issue:** The two numbers come from two different sources. The 16-point gap is real if both sources used the same benchmark methodology, but it's possible nxcode and Vellum measured slightly differently. The R2 author should ideally find a single source that reports both Sonnet 4.6 and Opus 4.7 MCP-Atlas numbers to confirm methodology parity.

**Action (minor):** Sanity-check by finding a single-source comparison if one exists. If not, add a hedge: "(numbers from different sources; methodology parity not independently verified)."

**Status:** 1 strike, minor methodology hedge missing. The 16-point gap is large enough that even moderate methodology drift doesn't flip the routing decision.

### NEW4 — GitHub issue #46935 spot-check not performed

**Claim:** R2 line 320 cites GitHub issue #46935 and Anthropic April 23 postmortem as the sources for the quality regression. R1 dealbreaker noted "URLs look real, not hallucinated" but flagged spot-check pending.

**Issue:** R2 carries forward the same citations without indicating whether the author actually opened the URLs to verify. This is a low-probability concern (the citations were corroborated by independent sources in R1 WebSearch), but it remains pending.

**Action (cosmetic):** In future rounds, note "URLs verified via WebFetch on [date]" or similar.

**Status:** 1 strike, cosmetic. Does not affect routing decisions.

---

## Total NEW R2 strikes: 4 (all cosmetic or minor methodology hedges)

NEW1: LMArena Elo drift 1531→1523 (cosmetic).
NEW2: SWE-bench Pro Sonnet score [UNKNOWN] without documented search attempt (minor).
NEW3: MCP-Atlas comparison uses two sources, methodology parity unverified (minor).
NEW4: GitHub issue #46935 URLs not explicitly spot-checked in R2 (cosmetic).

None of these would change a routing decision. All four are honest-research hygiene rather than substantive errors.

---

## Convergence assessment

**R1 strikes:** 37 (5 sycophantic + 5 egoistic + 6 overclaim + 11 omission + 5 hedge + 5 sibling-gap).
**R1 strikes addressed in R2:** 37 of 37 (100%).
**NEW R2 strikes:** 4 (all cosmetic/minor).
**Net R2 strike count:** 4.

Convergence threshold: <8 strikes ideal given R1's 37. R2 is at 4. **CONVERGED.**

The R2 author executed the R1 dealbreaker requirements with discipline:
- Replaced all Opus 4.6 comparators with Opus 4.7 throughout Section 5.
- Dropped the GPT-5.4 conversational-preference cherry-pick entirely rather than weakly defending it.
- Added Extended thinking surface as Section 5 differentiator #1 AND Section 7 Top Task #1.
- Added Tyler Folkman benchmark with full Substack citation.
- Added the full same-family routing matrix (11 rows) with concrete routing rules.
- Added all 6 documented failure modes from the official docs.
- Sharpened all 5 hedges with named sources or honest [UNKNOWN] tags.
- Fetched artificialanalysis.ai TTFT/throughput numbers as required.
- Removed [INFERRED] tags from claims that turned out to be documented.
- Fixed the JSON schema validation overclaim (strict tool use + JSON outputs both documented).

**Verdict: CONVERGED. No Round 3 needed.**

The R2 profile is publication-ready for council consumption. Routing decisions made off this profile will be sound. The 4 NEW R2 strikes are all hygiene-grade — they should be noted but do not warrant another full research round.

---

## Audit appendix

- Inputs read: round-1-self-research.md (325 lines), round-1-dealbreaker.md (200 lines), round-2-self-research.md (413 lines).
- Anthropic docs cross-referenced (per claim verification): `_official-models-overview.md` lines 28-31, 33-34, 37, 39-40, 47, 49, 53, 57, 65, 73; `_official-prompt-caching.md` lines 285, 572, 576, 650; `_official-tool-use-caching.md` lines 53-59, 62-73.
- Sibling profile cross-referenced: Opus 4.7 Round 2 self-research (for SWE-V 87.6%, SWE-Pro 64.3%, GPQA 94.2%, MCP-Atlas 77.3%, GDPval 1,753 Elo, min cache prefix 4096, sync max output 128k, Jan 2026 cutoff).
- External sources cited in R2 verified to exist by URL pattern (full WebFetch verification not performed this round; URLs use Anthropic-namespace and well-known third-party-eval-site patterns).
- Bias filters applied: standard sycophancy dictionary; elevated anti-meta-sycophancy hunt for Anthropic-aware self-flattery; in-family bias hunt (legacy-sibling cherry-pick patterns); deference bias hunt (Sonnet being too humble vs. Opus 4.7); cost-tier framing hunt.
