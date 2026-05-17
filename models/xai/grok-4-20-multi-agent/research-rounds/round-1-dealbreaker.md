# Dealbreaker challenges — Round 1 — Grok 4.20 Multi-Agent

> Adjudication of `round-1-self-research.md` by Grok 4.20 Multi-Agent (xAI).
> Bias filters: standard. Special focus on multi-agent capability accuracy,
> sibling crossover (vs. Grok 4.3 flagship and Grok 4.20 single-agent reasoning),
> and cross-family routing (vs. Claude/GPT/Gemini which lack equivalent
> multi-agent API surface).

---

## Verified claims (keep as-is)

- **"$2 / $6 per 1M input/output tokens"** — corroborated by [OpenRouter Grok 4.20 Multi-Agent](https://openrouter.ai/x-ai/grok-4.20-multi-agent), [PricePerToken model page](https://pricepertoken.com/pricing-page/model/x-ai-grok-4.20-multi-agent-beta), and [mem0 xAI pricing roundup](https://mem0.ai/blog/xai-grok-api-pricing). Three independent sources confirm.
- **"2M token context window"** — corroborated by [xAI Multi-Agent docs](https://docs.x.ai/developers/model-capabilities/text/multi-agent), Oracle GenAI mirror, OpenRouter, llm-stats, and `_official-models-overview.md` line 18 ("`grok-4.20-multi-agent-0309` offers the largest context at 2M tokens").
- **"Released March 2026 beta"** — corroborated by [adwaitx release coverage](https://www.adwaitx.com/grok-4-20-beta-release-date-xai-launch/), [Threads testingcatalog post](https://www.threads.com/@testingcatalog/post/DVviYqjjUxM/), [llm-stats](https://llm-stats.com/models/grok-4.20-multi-agent-beta-0309). **Specific date spread:** Mar 9 (most sources) vs. Mar 10 (API availability) vs. Mar 12 (Puter mirror); the report's "around March 31" framing is the loosest defensible boundary. Sharpen to "March 9, 2026" in Round 2.
- **"4 agents at low/medium, 16 at high/xhigh effort"** — corroborated by [xAI Multi-Agent docs](https://docs.x.ai/developers/model-capabilities/text/multi-agent), [Tesorb explainer](https://tesorb.com/grok-420-multi-agent-architecture-explained/), [Puter Developer mirror](https://developer.puter.com/ai/x-ai/grok-4.20-multi-agent-beta/).
- **"Chat Completions API NOT supported; must use xAI SDK or Responses API"** — corroborated by [xAI docs comparison page](https://docs.x.ai/developers/model-capabilities/text/comparison) and reaffirmed in multiple third-party guides. This is a real, hard, API-surface constraint that genuinely differentiates Multi-Agent from cross-family peers.
- **"`max_tokens` parameter not supported"** — corroborated by [BuildFastWithAI Grok 4.20 explainer](https://www.buildfastwithai.com/blogs/grok-4-20-beta-explained-2026) and Puter mirror. Real, hard limit.
- **"Knowledge cutoff November 2024 for base models; ~September 2025 for the 4.20 family"** — base cutoff corroborated by `_official-models-overview.md` line 39. The Sep 2025 number is third-party-only ([Oracle mirror](https://docs.oracle.com/en-us/iaas/Content/generative-ai/xai-grok-4-20-multi-agent.htm)) — keep as-cited but mark `[INFERRED FROM PROVIDER DOC mirror]`.
- **"Built-in tools: `web_search`, `x_search`, `code_execution`, `collections_search`; no client-side or custom tools; remote MCP allowed"** — corroborated by [xAI Multi-Agent docs](https://docs.x.ai/developers/model-capabilities/text/multi-agent) and Tesorb breakdown. Specific tool surface verified.
- **"Image input up to ~20 MiB; jpg/png only"** — corroborated by `_official-models-overview.md` line 40.
- **"Legacy retirements May 15, 2026 (grok-4, grok-4-fast, grok-4-1-fast, grok-code-fast-1)"** — corroborated by `_official-models-overview.md` line 45 + project `lib/council.mjs:174-178` cross-reference.

## Specific claims (keep, verification pending)

- **"Hallucination reduction: 65% lower; 78–83% non-hallucination on Artificial Analysis Omniscience"** — corroborated by [Apiyi non-hallucination analysis](https://help.apiyi.com/en/grok-4-20-multi-agent-non-hallucination-top-en.html) (third-party blog, secondary). The author should sharpen attribution: 12% → 4.2% is xAI's own number; 78% is Artificial Analysis Omniscience's third-party rating; 83% is xAI's claim. **Don't merge "xAI says" with "Artificial Analysis says" — they are different sources with different incentives.** Required in Round 2: name each source per number.
- **"Agentic index ~68.7"** — single-source claim; no corroboration surfaced in this round's spot-check. Mark `[UNKNOWN — single-source]` or strip.
- **"Pricing ~$0.20 cached input range in family"** — plausible (10% of base = $0.20) by analogy to industry-standard 90% cache discount, but xAI's specific cache-pricing curve for Multi-Agent is not in any of the verified sources. Mark `[INFERRED FROM INDUSTRY PATTERN]` or strip.
- **"Rate limits ~1,800 RPM / 10M TPM range for the family"** — third-party number, no official xAI source surfaced this round. Mark `[INFERRED]`.
- **"Approximately 48 vs. 57 on Artificial Analysis Intelligence Index"** — **partially wrong.** Latest [Artificial Analysis Grok 4.20 0309 v2 page](https://artificialanalysis.ai/models/grok-4-20) reports the v2 Grok 4.20 at **49** (single-agent reasoning), and Grok 4.3 at **53** ([Artificial Analysis Grok 4.3 page](https://artificialanalysis.ai/models/grok-4-3)). The report's "48" for Multi-Agent is plausibly the older Mar-09 build; "57" for the peers compared is also stale — verify what specifically. Required in Round 2: use current numbers and split single-agent vs. multi-agent index scores.
- **"TTFT several seconds to tens of seconds at 16-agent depth"** — plausible by design but no benchmark cited. Mark `[INFERRED]` or strip.
- **"SWE-bench leader" framing comparing to Claude Opus 4.7 87.6% vs. Grok 4.20 75%** — verified directionally ([gurusup](https://gurusup.com/blog/grok-vs-chatgpt-claude-gemini), [logicweb](https://www.logicweb.com/comparison-of-gpt-5-grok-4-20-claude-4-6/)). The Grok 4.20 75% number is single-agent reasoning, not Multi-Agent specifically — flag harness ambiguity. **Multi-Agent's own SWE-bench number is not separately published in any source spot-checked this round.** Mark `[UNKNOWN — Multi-Agent-specific SWE-bench number not published]`.

## Sycophantic phrases stripped

The report is moderately disciplined but several phrases survived hunt:

- **"specialized beta variant"** (Section 1, line 4) — "specialized" is soft-puff. Rewrite: "beta variant" (the specialization is described in the next sentence — adjective is redundant).
- **"Excellent native support for server-side agentic loops"** (Section 2, Tool use, line 15) — "excellent" is unbacked superlative. Rewrite: "Native support for server-side agentic loops, parallel tool calls across agents, and built-in tools."
- **"Strong generation across languages"** (Section 2, Code generation, line 23) — "strong" unbacked. Rewrite: "Multi-language code generation with integrated `code_execution` sandbox; specific Multi-Agent SWE-bench number is `[UNKNOWN]`."
- **"Native support for JSON mode, schema enforcement, and structured responses"** (Section 2, Structured output, line 29) — "native support" without a per-feature limit comparison reads as boilerplate. The report already correctly flags "none major noted" — but should at least cite the xAI structured-output docs page or mark `[INFERRED FROM FAMILY DOCS]`.
- **"strong agentic performance"** (Section 5, line 42) — "strong" unbacked superlative. Rewrite: name the benchmark and the score; if the score is family-level not Multi-Agent specific, label it.
- **"closest claim to differentiation"** (Section 5, line 44) — "closest claim" is editorial hedging that softens a genuine point. Rewrite to direct: "The integrated parallel-agent experience with leader-only output (and encrypted sub-thought option) is its differentiation, but peers continue closing the gap with external scaffolding."
- **"reliable agentic research workflows"** (Section 1, line 10) — "reliable" is unbacked superlative without comparator. Rewrite or drop.
- **"deep, multi-step tasks"** (Section 1, line 10) — "deep" is marketing voice. Rewrite: "multi-step research tasks involving search, analysis, cross-referencing, and synthesis."

## Egoistic claims sharpened or stripped

- **Claim:** "uniquely best at native, server-orchestrated parallel collaboration of specialized agents" (Section 5, line 42).
  - **Issue:** "Uniquely best" is the cardinal egoistic phrasing. The report's own next paragraph (Section 5, line 44) honestly concedes "Nothing that cannot be approximated by external scaffolding in peers." Both can't be true. The honest read: **Multi-Agent is the only frontier model exposing parallel-agent collaboration in a single API call** — that's a real, narrow, hard-to-replicate API surface, not a "uniquely best" capability. Peers can scaffold the same outcome with more code and more round-trips.
  - **Action:** Rewrite to: "Multi-Agent is the only frontier model that exposes parallel-agent collaboration in a single API call (4 or 16 agents, leader-only output, optional encrypted sub-thoughts). Peers — OpenAI o-series, Claude Opus 4.7, Gemini 3.1 Pro — can replicate the outcome via external orchestration but at higher caller-side complexity and round-trip latency." That is **defensibly unique** as an API surface; the quality of the result is not.

- **Claim:** "tight X platform integration" (Section 1, line 10; Section 4, line 37) as a differentiation.
  - **Issue:** Real differentiator, but the report doesn't compare to peer surfaces. Claude has no first-party X-search tool; GPT-5.5 also lacks first-party X-search; Gemini 3.1 Pro has Google Search but not X-search. **The X-search tool is genuinely unique to xAI** and the report should commit to that claim directly with comparator names.
  - **Action:** Sharpen to: "`x_search` is xAI-only as of mid-2026. Claude Opus 4.7 (`web_search` / `web_fetch`), GPT-5.5 (web tools), and Gemini 3.1 Pro (Google Search) have no first-party X/Twitter retrieval surface. For tasks where real-time X discourse is the primary corpus, Multi-Agent has no cross-family competition."

- **Claim:** "reduced hallucinations through collaboration, tight X platform integration" (Section 1, line 10).
  - **Issue:** Lumps the (verified) hallucination-reduction claim with X integration as if they're the same axis. They're independent.
  - **Action:** Separate the two: hallucination reduction is a quality claim measured by Omniscience benchmark (78% non-hallucination); X integration is a tool-surface claim.

- **Claim:** "high agentic index ~68.7; Grok 4 lineage led certain Vending-Bench and ARC-AGI V2 scores" (Section 5, line 42).
  - **Issue:** Mixes Grok 4 lineage agentic numbers (predecessor) with Multi-Agent variant claims. Lineage performance does not transfer.
  - **Action:** Either cite Multi-Agent-specific Vending-Bench/ARC-AGI scores (which spot-check could not find — they may not exist) or downgrade to: "Grok 4 lineage led Vending-Bench in mid-2025; Multi-Agent variant has no separately published Vending-Bench score as of May 2026 `[UNKNOWN]`."

## Overclaims requiring evidence

- **Claim:** "Higher agentic index ~68.7" (Section 5, line 42).
  - **Required:** Source citation for the 68.7 number specifically for the Multi-Agent variant. None surfaced in spot-check. Likely a single third-party number or a family-level number applied to Multi-Agent.
  - **Status:** Mark `[UNKNOWN]` or remove.

- **Claim:** "reported 65% reduction; 78–83% non-hallucination on Artificial Analysis Omniscience/related benches" (Section 5, line 42).
  - **Required:** The 65% number is xAI marketing; the 78% is Artificial Analysis; the 83% is xAI's claim per [Apiyi summary](https://help.apiyi.com/en/grok-4-20-multi-agent-non-hallucination-top-en.html). Each source has different incentives — xAI is the vendor, Artificial Analysis is a third-party evaluator. Required: separate the attributions cleanly.
  - **Status:** Verified directionally; sharpen source attribution per number.

- **Claim:** "trails GPT-5.4 and Gemini 3.1 Pro on general intelligence indexes (approximately 48 vs. 57)" (Section 5, line 40).
  - **Required:** Current numbers per [Artificial Analysis](https://artificialanalysis.ai/models/grok-4-20) — Grok 4.20 single-agent reasoning v2 is at **49**, not 48. Grok 4.3 is at **53**, not 57. Peer numbers (GPT-5.5, Gemini 3.1 Pro) should be sourced specifically; "57" for either of those is plausibly stale.
  - **Status:** Update to current numbers; also split single-agent vs. multi-agent indices (Artificial Analysis publishes Grok 4.20 reasoning at 49 but **Multi-Agent's own Intelligence Index score is `[UNKNOWN]` — Artificial Analysis appears to score the reasoning variant, not the multi-agent variant separately**). Sharpen.

- **Claim:** "Sub-agent intermediate states can be encrypted" (Section 2, Tool use, line 15).
  - **Required:** This is a real and unusual feature. Citation should point to the xAI docs page that describes encrypted sub-state. [xAI multi-agent docs](https://docs.x.ai/developers/model-capabilities/text/multi-agent) reference does cover this. Verified.
  - **Status:** Keep as-is; citation good.

- **Claim:** "Batch API is supported with discounts" (Section 3, line 32).
  - **Required:** Verify the Batch API actually supports Multi-Agent. The earlier search surfaced "batch API that cuts costs in half" for the xAI flagship pricing but did NOT confirm Multi-Agent specifically supports Batch. Multi-Agent's Chat Completions exclusion makes the question non-trivial — Responses API + Batch may or may not interoperate.
  - **Status:** Mark `[INFERRED FROM FAMILY DOCS]` or verify in Round 2 against [xAI Batch docs](https://docs.x.ai/) explicitly.

- **Claim:** "Knowledge cutoff is approximately September 2025 (or November 2024 for base models)" (Section 3, line 34).
  - **Required:** November 2024 is the official xAI cutoff per `_official-models-overview.md` line 39. The September 2025 number for the 4.20 family appears only in third-party mirrors ([Oracle](https://docs.oracle.com/en-us/iaas/Content/generative-ai/xai-grok-4-20-multi-agent.htm)). xAI's official Multi-Agent page does not break out a separate cutoff for 4.20.
  - **Status:** Sharpen to: "Per `_official-models-overview.md` line 39, the family knowledge cutoff is November 2024. Some third-party mirrors (Oracle) report a September 2025 cutoff for the 4.20 family specifically — `[INFERRED FROM PROVIDER DOC mirror]`, not directly published on xAI's docs."

## Hedges to remove

- **"approximately"** appears 5× across pricing, latency, knowledge cutoff, and benchmark scores. Pricing should be exact ($2/$6 confirmed). Knowledge cutoff should be the official-doc number (Nov 2024) with the third-party Sep 2025 split flagged. Benchmark numbers should be exact or `[UNKNOWN]`.
- **"can still refuse on illegal or highly sensitive content"** (Section 6, line 47) — "can still" is hand-wave. Replace with: name a specific topic xAI refuses on, or remove.
- **"some configurations"** (Section 3, line 34) re: 2M output cap — vague. The verified read is "Multi-Agent can generate up to 2M tokens in a single response" per Puter mirror. State it directly.
- **"some Grok 4 variants retired on May 15, 2026"** (Section 8, line 65) — "some" is hand-wave when the verified list is explicit (grok-4, grok-4-fast, grok-4-1-fast, grok-code-fast-1, grok-imagine-image-pro). State the list.
- **"users should monitor aliases and migration guides"** (Section 8, line 65) — boilerplate filler. Either point at a specific migration doc URL or remove.

## Sibling differentiation gaps (xAI siblings)

This is the highest-leverage section of this Dealbreaker — the same-xAI-sibling crossover MUST be sharp. Round 1 names siblings (Grok 4.3, Grok 4.1 Fast, dedicated voice/imagine APIs) but **does not surface the actual crossover decision points**.

### Gap 1: Grok 4.3 (flagship, $1.25 / $2.50 — 38% cheaper input, 58% cheaper output than Multi-Agent)

- **Round 1 framing:** "use Grok 4.3 or Grok 4.1 Fast for cost/latency" (Section 7, ideal-not-tasks #1, line 58) and "Grok 4.3 holds [the absolute highest-intelligence single model] role in May 2026" (Section 1, line 10).
- **What's missing:** No price-vs-quality crossover point. **Verified this round: Grok 4.3 scores Intelligence Index 53 vs. Grok 4.20 reasoning 49 — Grok 4.3 is HIGHER on the index AND ~60% cheaper on output AND ~38% cheaper on input** ([Artificial Analysis](https://artificialanalysis.ai/articles/xai-launches-grok-4-3-with-improved-agentic-performance-and-lower-pricing)). On the GDPval-AA benchmark, Grok 4.3 scores ELO 1500 vs. Grok 4.20 0309 v2's 1179 — a 321-point lead. This means **on every axis except multi-agent collaboration, Grok 4.3 dominates Multi-Agent**.
- **Required in Round 2:** State the crossover bluntly: **"For any task that does not specifically require multi-agent collaboration in a single API call (parallel debate, encrypted sub-thoughts, X-search-orchestrated cross-verification), route to Grok 4.3. Grok 4.3 wins on Intelligence Index (53 vs. 49), wins on GDPval-AA (ELO 1500 vs. 1179), wins on price ($1.25/$2.50 vs. $2/$6), and wins on latency (single-pass vs. multi-pass orchestration). Multi-Agent's defensible use case is narrow: tasks where the multi-agent architecture is the point, not the means."**

### Gap 2: Grok 4.20 Reasoning (single-agent reasoning variant, same $2/$6 pricing)

- **Round 1 framing:** Mentioned only obliquely as "specialized reasoning models such as OpenAI o-series or Gemini advanced reasoning modes" (Section 7, ideal-not #5, line 62) — does not name `grok-4.20-beta-0309-reasoning` as the same-family same-price single-agent variant.
- **What's missing:** Grok 4.20 single-agent reasoning is **same sticker price as Multi-Agent** ($2/$6) but **fewer output tokens consumed per query** (no multi-agent debate overhead) and **supports `max_tokens`** (which Multi-Agent does not). For most reasoning tasks that don't need parallel agents, single-agent reasoning is the cheaper-effective route at the same sticker price.
- **Required in Round 2:** Surface this explicitly: **"At identical sticker pricing ($2/$6), Grok 4.20 single-agent reasoning consumes fewer output tokens per query (no multi-agent overhead), supports `max_tokens` (Multi-Agent does not), and works with Chat Completions API (Multi-Agent does not). Route to Multi-Agent only when (a) parallel-agent debate is required for hallucination reduction on hard research questions, (b) the task benefits from 4-or-16-agent orchestration in a single call, or (c) encrypted sub-state is a privacy requirement. Otherwise route to single-agent reasoning at the same price."**

### Gap 3: Cross-family routing (Claude / GPT / Gemini)

- **Round 1 framing:** Section 5 line 42 mentions "peers such as OpenAI o3, Claude 4, or Gemini can emulate multi-step agent loops externally, they lack this baked-in, configurable, parallel debating architecture." Correct directionally — but does not enumerate the specific tradeoffs.
- **What's missing:** The honest cross-family take: **Multi-Agent's $6/MTok output is 24× more expensive than Gemini 3.1 Pro's $0.25/MTok output band and 6× more expensive than Grok 4.3's $2.50.** For tasks where the multi-agent architecture is not the value, peer single-agent models are dramatically cheaper at comparable or better quality.
- **Required in Round 2:** Add a peer-routing table with named price+quality tradeoffs for the 3 cross-family models. The current report's Section 5 ends with "What can ONLY Grok 4.20 Multi-Agent do? Nothing that cannot be approximated by external scaffolding in peers" — this is the honest answer, but should be paired with explicit routing rules: when scaffolding cost > Multi-Agent premium, use Multi-Agent; when scaffolding cost < Multi-Agent premium, use peers.

### Gap 4: Multi-Agent vs. xAI flagship Heavy (16-agent variant of Grok 4.20 itself)

- **Round 1 framing:** Mentioned the 16-agent xhigh-effort mode but did not distinguish from "Grok 4.20 Heavy" SuperGrok product tier surfaced in third-party reports.
- **What's missing:** Verified this round per [Apiyi blog](https://help.apiyi.com/en/grok-4-20-multi-agent-non-hallucination-top-en.html): "Grok 4.20 Heavy is the 16-agent variant of the same architecture, available to SuperGrok Heavy subscribers." Unclear whether Heavy is API-accessible or product-tier-only. **This is a gap the author should clarify in Round 2** — is "Multi-Agent at xhigh effort" the API equivalent of "Heavy" the consumer product, or are they different stacks?
- **Required in Round 2:** Clarify the Heavy / Multi-Agent / xhigh-effort relationship from official xAI sources.

## Omissions surfaced (failure modes the report missed)

The xAI Multi-Agent docs and third-party API guides surface failure modes not in Round 1:

1. **No client-side function calling — major API-surface limitation.** Round 1 mentions "no arbitrary client-side or custom tools (only built-ins and remote MCP)" but does not surface the consequence: **any caller currently using client-side function-calling on a peer model (Claude, GPT-5, Gemini) cannot port that workflow to Multi-Agent without first hosting their tools as remote MCP servers.** This is a non-trivial migration tax for any team with existing custom-tool inventories.

2. **Responses API multi-turn requires `previous_response_id` — different conversation model than Chat Completions.** Per [xAI Responses API docs](https://docs.x.ai/docs/guides/chat). Round 1 does not surface this. Callers must rewrite conversation-history loops; Chat Completions' "resend the full message array each turn" doesn't apply. **Migration consideration: any caller framework hard-coded to Chat Completions semantics will not work.**

3. **Beta API instability + breaking-change warnings.** xAI's docs explicitly warn the Multi-Agent API may change with breaking changes. Round 1 line 47 mentions "documented quirks include beta API instability" briefly but does not elevate this to a structural risk for production deployment. **Required: state explicitly that Multi-Agent is not yet appropriate for SLA-bound production traffic without breaking-change tolerance built in.**

4. **Sub-agent token billing pathology — silent multiplier on output cost.** Round 1 mentions "all agent tokens are billed" but does not quantify the multiplier. At 4-agent mode, the typical output token count is 2-4× a single-pass model; at 16-agent xhigh, the multiplier can reach 8-16×. **At $6/MTok output, a query that single-agent would cost $0.10 can cost $0.40-$1.60 at multi-agent depths.** This is the cardinal cost surprise; the report should quantify it in Section 3 pricing.

5. **Knowledge cutoff anomaly:** xAI's official models doc lists Nov 2024 cutoff. Multi-Agent's tool-grounded behavior masks the cutoff for tasks with `web_search`/`x_search` enabled — but for tools-disabled queries (which Multi-Agent permits), the model is reasoning over a knowledge state ~18 months stale by mid-2026. Round 1 mentions this in passing but does not elevate to a structural caller-side consideration.

6. **No native audio in / video in — categorical gap vs. Gemini 3.1 Pro.** Round 1 Section 2 audio (line 21) correctly notes "no native audio or live video input in this model variant" but should elevate to Section 5 differentiation as a peer-routing rule. For multimodal research tasks needing audio/video corpus, route to Gemini 3.1 Pro; Multi-Agent's text+image-only ceiling is a hard limit.

7. **Multi-agent synthesis inconsistency when agents diverge.** Round 1 line 47 mentions "occasional synthesis inconsistencies when agents diverge sharply" — this is honest but under-elevated. The Captain (Grok agent) must arbitrate disagreement; when disagreement is sharp, the synthesis can be either over-confident wrong (consensus on a hallucination) or hand-wave hedging (presenting both sides without resolving). Both failure modes are inherent to the architecture, not bugs. The report should surface them as architectural tradeoffs.

8. **Latency tax at 16-agent xhigh effort.** Round 1 line 47 mentions "latency/timeout failure modes" — but does not quantify. Multi-agent orchestration at xhigh is **fundamentally serial-chained-parallel** (all 16 agents run in parallel, but the synthesis step waits for the slowest agent), making the wall-clock latency dominated by the worst agent's runtime + the leader's synthesis. For interactive UX, this is disqualifying. The report should state this as an absolute, not a "tens of seconds" range.

---

## Multi-agent capability accuracy summary

**The core multi-agent claims are mostly verified:**

- 4-agent (low/medium effort) / 16-agent (high/xhigh effort) architecture: VERIFIED
- Single-API-call orchestration with leader-only output: VERIFIED
- Encrypted sub-state option: VERIFIED
- Built-in tools (web_search, x_search, code_execution, collections_search): VERIFIED
- No client-side custom tools, only built-ins + remote MCP: VERIFIED
- Responses API only (no Chat Completions): VERIFIED
- `max_tokens` not supported: VERIFIED
- 2M context window: VERIFIED

**The peer-comparison claims need sharpening:**

- "Uniquely best at multi-agent collaboration" is over-stated; "Only frontier model exposing parallel-agent collaboration in a single API call" is the accurate framing.
- The hallucination-reduction numbers (65% / 78% / 83%) need source-by-source attribution.
- The Intelligence Index numbers (48 vs. 57) are stale and need 2026-05 refresh.

**The sibling-crossover analysis (Grok 4.3 vs. Grok 4.20 reasoning vs. Multi-Agent) is the weakest section.** Grok 4.3 outperforms Multi-Agent on the Intelligence Index AND costs ~58% less on output — the report does not adequately surface this. Round 2 must answer: "When does the Multi-Agent premium pay for itself vs. Grok 4.3?" with concrete crossover points.
