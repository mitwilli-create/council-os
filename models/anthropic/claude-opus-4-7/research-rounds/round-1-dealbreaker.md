# Dealbreaker challenges — Round 1 — Claude Opus 4.7

## Verified claims (keep as-is)

- "Released April 16, 2026" — corroborated by Anthropic announcement, GitHub Changelog, AWS Bedrock announcement (3 independent sources cited).
- "Claude API ID `claude-opus-4-7`; AWS Bedrock `anthropic.claude-opus-4-7`; Vertex AI `claude-opus-4-7`" — corroborated by `_official-models-overview.md` (models table).
- "Pricing $5 input / $25 output per 1M tokens" — corroborated by `_official-models-overview.md` (pricing row).
- "1M-token context window" — corroborated by `_official-models-overview.md`.
- "Max output 128k synchronous, 300k via Batch API with `output-300k-2026-03-24` beta header" — corroborated by `_official-models-overview.md` (final paragraph of Latest models comparison).
- "Reliable knowledge cutoff Jan 2026, training cutoff Jan 2026" — corroborated by `_official-models-overview.md` (both columns Jan 2026 for Opus 4.7).
- "Extended thinking: No / Adaptive thinking: Yes" for Opus 4.7 — corroborated by `_official-models-overview.md`.
- "Sonnet 4.6 1M-token window ~750k words ~3.4M chars vs. Opus 4.7 1M-token window ~555k words ~2.5M chars" — corroborated by `_official-models-overview.md` (context-window row literally states the word/char breakdown).
- "Claude Sonnet 4 (`claude-sonnet-4-20250514`) and Claude Opus 4 (`claude-opus-4-20250514`) retire June 15, 2026" — corroborated by `_official-models-overview.md` warning block.
- "Prompt-caching pricing: 5m cache write 1.25× base input, 1h cache write 2× base input, cache hit/read 0.1× base input" — corroborated by `_official-prompt-caching.md` lines 281-283.
- "Cache invalidation hierarchy `tools → system → messages`; modifying tool definitions invalidates the entire cache; toggling web search/citations invalidates system + messages; `tool_choice` / `disable_parallel_tool_use` / image presence / thinking parameters invalidate messages cache" — corroborated by `_official-tool-use-caching.md` lines 62-73 (exact table).
- "`defer_loading` preserves the prefix cache; discovered tools land as `tool_reference` blocks" — corroborated by `_official-tool-use-caching.md` lines 53-59.
- "Claude Mythos Preview is invitation-only research preview for defensive cybersecurity (Project Glasswing)" — corroborated by `_official-models-overview.md` line 47 + the Axios citation.
- "Pinned-snapshot ID policy starting with 4.6 generation — dateless format is still a pinned snapshot, not an evergreen alias" — corroborated by `_official-models-overview.md` line 49.

## Specific claims (keep, verification pending)

- "Multi-step debugging benchmark: 14% improvement over Opus 4.6 with ~⅓ fewer tool errors" — testable; cited to The Next Web summary, not Anthropic's primary number — spot-check Anthropic's announcement page directly.
- "SWE-bench Verified 65.9% (Anthropic) vs. 87.6% (third-party leaderboard)" — testable; report already flags the harness gap as suspect, good; verify which harness the third-party leaderboard uses.
- "MCP-Atlas: Opus 4.7 77.3% vs. Gemini 3.1 Pro 73.9% vs. GPT-5.4 68.1%" — testable; Vellum is third-party with track record.
- "OSWorld-Verified: Opus 4.7 78.0% vs. GPT-5.4 75.0%" — testable; two independent third-party sources (MindStudio + Vellum).
- "Terminal-Bench 2.0: GPT-5.5 82.7% vs. Opus 4.7 69.4%" — testable; single-source (Spectrum AI Lab) — spot-check needed.
- "BrowseComp (Pro): GPT-5.4 89.3% vs. Opus 4.7 79.3%" — testable; Vellum source.
- "Humanity's Last Exam: Opus 4.7 46.9% vs. GPT-5.5 41.4% vs. Gemini 3.1 Pro 44.4%" — testable; Spectrum AI Lab source.
- "SWE-bench Pro: Opus 4.7 64.3% vs. GPT-5.4 57.7% vs. Gemini 3.1 Pro 54.2%" — testable; Anthropic's own announcement (self-reported, treat with appropriate skepticism).
- "DocVQA long-doc (50+ pages): leading by 5–8 points among frontier models" — testable; MindStudio source, but the "5-8 points" is a range, not a precise number — sharpen if possible.
- "TTFT ~0.85s P50; 1.64s in some third-party measurements; ~23.6s in `xhigh` mode" — testable; three sources cited (Digital Applied, BridgeBench, Artificial Analysis).
- "Tier 1 RPM/ITPM ~348k input TPM and 80k output TPM" — testable; cited to a Threads post by Boris Cherny — verify via official Anthropic rate-limits doc.
- "Tier 4 ~10M ITPM" — testable; third-party (Morph) source.
- "Tokenizer emits 1.0-1.35× more tokens for same input" — testable; cited to Anthropic announcement + Finout.

## Sycophantic phrases stripped

The report is unusually disciplined on this front. Hunt found:

- **"Anthropic's flagship use case for Opus 4.7"** (Section 2, Code generation, line 73) — "flagship" is a sycophantic framing word imported from marketing copy. Anthropic doesn't use the word "flagship" in the models-overview doc. Rewrite to: "Anthropic positions code generation as Opus 4.7's headline improvement vs. 4.6 (per the announcement page)."
- **"step-change improvement in agentic coding"** (Section 1, line 31) — this IS a direct quote from Anthropic's models-overview doc (line 17: "step-change improvement in agentic coding over Claude Opus 4.6"). It survives because it is quoted-from-source, but the report should put it in quotation marks and attribute it as Anthropic's marketing positioning, not the model's own characterization. **Action: surround with quotes + attribute.** (The current rendering uses quotes around the longer first phrase but the "step-change" itself reads as accepted-as-fact.)
- **"a meaningful narrowing"** (Section 2, Reasoning, hard limits, line 40) — "meaningful" is a soft-sycophantic hedge with no comparator quantification. Rewrite to: "a documented narrowing — callers who used `thinking: { type: 'enabled', budget_tokens: ... }` on Opus 4.6 must migrate to adaptive thinking on Opus 4.7."
- **"the gap widening 5–8 points over peers"** (Section 2, Vision, line 62) — single-source range claim cited only to MindStudio. The range "5-8 points" reads more authoritative than a single third-party blog supports. Rewrite to: "MindStudio reports a 5-8 point lead on the 50+ page PDF split; this is a single-source claim and the underlying DocVQA-LongDoc methodology should be verified."
- **"the closest peer surfaces work differently"** (Section 5, Unique-to-Claude, `defer_loading` claim, line 197) — vague hedge with no named peer. The author already tagged this [INFERRED] which is good, but "work differently" is non-specific. Rewrite to name the closest peer surface: "OpenAI's Responses API tool-discovery and Gemini's function-calling do not expose an equivalent prefix-cache-preserving deferred-tool mechanism as of training cutoff [INFERRED]."

## Egoistic claims sharpened or stripped

- **Claim:** "Anthropic's prompt-caching pricing curve (cache-hit at 0.1× base, 1-hour cache write at 2× base) is a specific shape that doesn't 1:1 match GPT-5/Gemini caching" (Section 5, Unique-to-Claude, line 196).
  - **Issue:** This is a comparative claim that asserts the shape is "different" but provides no peer pricing numbers. Reader cannot verify the claimed difference. GPT-5 and Gemini both have prompt-cache pricing curves; the question is whether Anthropic's is *cheaper for cache-warm workloads*, not whether it is "specifically shaped differently."
  - **Action:** Sharpen to: "OpenAI's prompt-caching discount on GPT-5.5 is [X]% off cached input; Google's implicit caching on Gemini 3.1 Pro is [Y]% off; Anthropic's 0.1× base input ≡ 90% off on cache reads is therefore [equal to / better than / worse than] both. Cite specifically." If the author cannot find current peer cache pricing, downgrade the claim from "uniquely Claude" to "competitive on cache pricing" and remove it from the unique-surfaces list.

- **Claim:** "MCP-Atlas multi-turn tool-calling: 77.3% vs. Gemini 3.1 Pro 73.9% vs. GPT-5.4 68.1% — Opus 4.7 leads" (Section 5 best-of-frontier, line 188).
  - **Issue:** Comparison excludes **GPT-5.5**, the newest GPT model the author names elsewhere. Cherry-picking GPT-5.4 instead of GPT-5.5 in this comparison reads egoistic when GPT-5.5 is named as winning Terminal-Bench and BrowseComp. Either GPT-5.5 has no MCP-Atlas score yet, or the author chose the older sibling because it loses.
  - **Action:** Required clarification: cite GPT-5.5's MCP-Atlas score OR explicitly note "GPT-5.5 has not been benchmarked on MCP-Atlas as of [date]" before claiming Opus 4.7 leads.

- **Claim:** "Refactoring across a multi-file repo with an external test suite to verify against (the 'verifies its own outputs before reporting back' use case Anthropic explicitly calls out)" (Section 2 Code generation concrete task, line 76).
  - **Issue:** GPT-5.5 and Gemini 3.1 Pro both also do multi-file refactoring with test verification — this is not a unique Opus 4.7 capability. Framing it as a "concrete task it handles well" is fine, but "Anthropic explicitly calls out" reads as borrowing Anthropic's marketing voice.
  - **Action:** Sharpen to: "On SWE-bench Pro (the harder coding split) Opus 4.7 leads at 64.3%, ahead of GPT-5.4 at 57.7%. Note: GPT-5.5's SWE-bench Pro score is missing from this comparison and should be added before declaring Opus 4.7 the multi-file refactoring leader."

## Overclaims requiring evidence

- **Claim:** "Higher hallucination rate on code identifiers — multiple developer reports of fabricated commit hashes stated with high confidence" (Section 2 Code generation hard limits, line 75).
  - **Required:** Two independent sources cited (Abhishek Gautam blog + claude-code GitHub issue #50235). Verify the GitHub issue is real and not a hallucinated citation by the author. Spot-check `https://github.com/anthropics/claude-code/issues/50235` exists.
  - **Status:** Citations look plausible but were not verified by Dealbreaker (no live WebFetch performed). Required in next round: WebFetch the GitHub issue URL to confirm it is a real issue (or downgrade to [INFERRED] if 404).

- **Claim:** "Cache hits and refreshes do not count against ITPM" (Section 3 Rate limits, line 126).
  - **Required:** Citation given (`_official-prompt-caching.md`), but I did not see this specific assertion in my read of the caching doc. Verify by direct search.
  - **Status:** Spot-check in next round. If unverified, mark [INFERRED FROM PROVIDER DOCS] or remove.

- **Claim:** "Boris Cherny on Threads — Tier 1 ~348k input TPM and 80k output TPM" (Section 3 Rate limits, line 124).
  - **Required:** Threads post by a named Anthropic employee is a soft source. Rate-limit numbers should come from the official `/docs/en/api/rate-limits` page. Cross-reference.
  - **Status:** Acceptable as a public-statement source, but mark "subject to confirmation against the official rate-limits doc" in next round.

- **Claim:** "Multiple developer reports of Opus 4.7 disagreeing with clear instructions, adding caveats, and executing a modified version of the ask; correction triggers re-argument" (Section 6, line 216).
  - **Required:** Two sources cited (Abhishek Gautam + Zvi Mowshowitz). Both are individual-blog third-party sources. Anthropic's own model card / system card should be checked for an Anthropic-acknowledged version of this failure mode.
  - **Status:** Keep the claim but add: "Anthropic's Opus 4.7 system card [should be referenced] for first-party acknowledgement of argumentative-pushback behavior, if any."

- **Claim:** "Anthropic acknowledges; treated as 'not an issue in practice' by some reviewers" (Section 6, refusal-rate claim, line 219).
  - **Required:** No specific citation for "Anthropic acknowledges" or "some reviewers" — both are hand-wave attributions. The Zvi citation is plausible but the precise wording is not pinned.
  - **Status:** Either cite the specific Anthropic source (system card section, blog paragraph) or remove the "Anthropic acknowledges" framing and downgrade to "third-party reviewers report..."

- **Claim:** "BridgeBench" (cited multiple times in Section 3 Latency, lines 117-118).
  - **Required:** I have not heard of BridgeBench. Could be a real benchmark, could be a hallucinated source. Verify URL `https://www.bridgebench.ai/speedbench/claude-opus-4-7` exists in next round.
  - **Status:** Spot-check required. If BridgeBench is not a real published benchmark, the latency numbers attributed to it must be removed or re-sourced.

## Omissions to add

- **Documented failure mode not surfaced:** Adaptive-thinking budget exhaustion silently truncates the model's reasoning when the implicit budget is hit, which can produce confident-but-incomplete answers on complex tasks. The official models-overview table marks Opus 4.7 as "Extended thinking: No," but the report does not explain what UX failure mode this produces for callers who previously got predictable extended-thinking behavior. Section 6 mentions the loss of the surface but not the user-visible consequence (silent reasoning truncation).
- **Documented failure mode not surfaced:** The official models-overview doc notes that Opus 4.7 uses a "new tokenizer." This is mentioned for cost inflation (1.0-1.35× more tokens) but the **second-order consequence** is omitted: any user-side token-counting code that worked against Opus 4.6's tokenizer will produce wrong counts on 4.7. Migration plans must update token-counting libraries.
- **Documented failure mode not surfaced:** The "automatic caching" feature (`_official-prompt-caching.md` lines 298-573) consumes one of the four available cache-breakpoint slots. The report does not warn callers that mixing automatic + explicit breakpoints can hit the 4-slot ceiling and start returning 400 errors. Source: `_official-prompt-caching.md` line 572 ("If 4 explicit block-level breakpoints already exist, the API returns a 400 error").
- **Documented failure mode not surfaced:** Strict tool use grammar caching is *separate* from prompt caching — grammars cache for 24 hours from last use. Section 2 mentions the 24-hour grammar cache but does NOT note the corollary: a strict-tool-use agent that goes idle for >24h pays the grammar-compile cost (and latency) on the next call. Source: `_official-prompt-caching.md` / structured-outputs doc.
- **Documented failure mode not surfaced:** The 1M-token context window minimum-cache-size is not addressed. Anthropic enforces a minimum cacheable prefix size (referenced at `_official-prompt-caching.md` line 657 — "Shorter prompts cannot be cached, even if marked with `cache_control`"). The report enumerates pricing for cache writes but does not warn that small prompts are silently uncached.
- **Documented failure mode not surfaced:** Bedrock and Vertex AI lifecycle does NOT follow Anthropic's first-party deprecation calendar — only Claude Platform on AWS does. The report (line 164) correctly notes the AWS-Platform quirk but does not warn that Bedrock-direct callers and Vertex-direct callers can be deprecated on a different schedule than first-party Anthropic API callers. This is a non-trivial migration-planning gap for enterprise deployments.

## Hedges to sharpen

- **Hedge:** "Multiple third-party roundups in April–May 2026 call GPT-5.5 the broad-intelligence leader" (Section 5, line 182).
  - **Sharpen to:** "On LMArena's [specific benchmark] as of [date], GPT-5.5 is rated higher than Opus 4.7 by [N] Elo points." Without a specific source and number, "multiple roundups" is unfalsifiable.

- **Hedge:** "Anthropic acknowledges; treated as 'not an issue in practice' by some reviewers" (Section 6, line 219).
  - **Sharpen to:** Name the specific Anthropic acknowledgement (system card page X, blog paragraph Y) and the specific reviewer.

- **Hedge:** "Latency in adaptive-reasoning max mode: ~23.6s TTFT for `xhigh` effort runs — not suitable for interactive UX without careful streaming" (Section 6, line 221).
  - **Sharpen to:** Specify what "careful streaming" means — does streaming reduce perceived latency to first useful token, or just to first non-thinking token? `xhigh` adaptive-thinking outputs are not visible during the thinking phase, so streaming does not help during reasoning.

- **Hedge:** "[INFERRED FROM PROVIDER DOCS] common-knowledge of Gemini/GPT-5 multimodal surfaces" (Section 2 Audio/multimodal, line 70).
  - **Sharpen to:** Cite specific Google and OpenAI doc pages confirming Gemini 3.1 Pro accepts audio/video natively and GPT-5.5 accepts audio/video natively. "Common knowledge" is not a citation.

- **Hedge:** "Anthropic doesn't restate 'MCP client' status in the Opus 4.7 launch page; this is an ecosystem-level rather than model-level claim" (Section 4, line 166).
  - **Sharpen to:** Decide whether Opus 4.7 is an MCP client at the model level or whether MCP-client behavior is implemented by the host (Claude Code, Claude Desktop, third-party apps). The distinction matters for routing decisions. Currently reads as a punt.

## Same-provider sibling differentiation

- **vs. claude-sonnet-4-6:** **Adequately distinguishes.** The report explicitly addresses Sonnet 4.6 in Section 5 (same-provider siblings section) with concrete numbers: 40% cheaper, same 1M context but holds more text per token, Extended-thinking surface preserved, best-combination-of-speed-and-intelligence positioning. Concrete routing rule given ("pick Sonnet 4.6 when… well-scoped, 64k output cap, larger effective context for long-document work"). Strong differentiation.
- **vs. claude-haiku-4-5:** **Adequately distinguishes.** 80% cheaper, fastest comparative latency, 200k context, 64k output, Extended thinking still supported. Routing rule: "bounded tasks, high volume, per-call cost dominates."
- **Remaining gap on siblings:** The report does not explicitly address **when Sonnet 4.6 beats Opus 4.7 on a task type**. The routing rules are framed as "when Sonnet is good enough" rather than "when Sonnet is actually better." Required clarification in next round: are there any task types where Sonnet 4.6 outperforms Opus 4.7 on a benchmark? (Example to investigate: Sonnet 4.6's Extended-thinking surface might let it outperform Opus 4.7 on tasks that explicitly need budgeted long-form reasoning.)
- **Missing sibling consideration:** The pinned-snapshot warning ("dateless format is still a pinned snapshot") applies to all 4.6+ models, not uniquely Opus 4.7. Not a strike, but a note: positioning this as a Section-1 callout for Opus 4.7 specifically obscures that it's a family-wide policy change.

## Remaining challenges for next round

1. **WebFetch / spot-check the live URLs in Section 2 and Section 6 citations** — specifically `claude-code` issue #50235, the Abhishek Gautam blog (`abhs.in`), Zvi Mowshowitz Part 1 and Part 2, BridgeBench. If any 404 or do not contain the claimed content, the claim must be downgraded.
2. **Verify the GPT-5.5 vs. GPT-5.4 cherry-pick on MCP-Atlas** — find GPT-5.5's MCP-Atlas score or explicitly note GPT-5.5 has not been measured on MCP-Atlas before claiming Opus 4.7 leads on that benchmark.
3. **Provide peer cache pricing numbers** — to support or retract the claim that Anthropic's caching curve is uniquely advantageous, cite GPT-5.5 cache pricing and Gemini 3.1 Pro implicit-caching pricing for the comparison.
4. **Source Anthropic's first-party Opus 4.7 system card** for the refusal-rate / over-refusal / argumentative-pushback claims currently sourced only to third parties. Anthropic's transparency hub publishes model cards.
5. **Sharpen the LMArena "GPT-5.5 broad-intelligence leader" claim** with a specific benchmark and Elo gap, or remove.
6. **Resolve the SWE-bench Verified harness discrepancy** (65.9% vs. 87.6%) — which harness Anthropic ran vs. which the public leaderboard runs. If unresolvable, present both numbers with explicit "different harnesses" framing and refuse to declare a winner on Verified specifically.
7. **Spot-check the "5-8 point DocVQA lead"** — find Anthropic's first-party DocVQA-LongDoc score or downgrade to a single-third-party-source claim with appropriate uncertainty.
8. **Add the 4-cache-breakpoint ceiling failure mode** and the **strict-tool-use grammar 24-hour expiry latency hit** to Section 6.
9. **Sharpen the `defer_loading` uniqueness claim** with named peer surfaces (OpenAI Responses API tool-discovery, Gemini function-calling) and what they do differently, with citations.
10. **Add a "Sonnet 4.6 actually beats Opus 4.7 on task type X" entry** to the same-provider sibling section, or affirmatively state that no such task exists in published benchmarks.
