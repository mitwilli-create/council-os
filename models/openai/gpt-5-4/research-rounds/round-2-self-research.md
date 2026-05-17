# GPT-5.4 — revised internal profile

> **Revision note / explicit Dealbreaker corrections:** This revision directly addresses **Strike 1 (Identity)**, **Strike 2 (Core capabilities)**, **Strike 3 (Operational/pricing/context)**, **Strike 4 (stale peer set)**, **Strike 5 (missing sibling crossover)**, **Strike 6 (generic instead of model-specific failure modes)**, **Strike 7 (empty lifecycle)**, **Strike 8 (missed `reasoning_effort`)**, plus the three additional omissions: **compaction**, **`phase` preservation**, and the **frontend anti-slop prompt block**. Where evidence is first-party, this revision cites it. Where a claim comes from third-party benchmark aggregation or press coverage, it is cited and not overstated. Where no reliable public benchmark is available, it is marked `[UNKNOWN — would need a benchmark]`.

## 1. Identity

- **What GPT-5.4 is:** GPT-5.4 is an OpenAI model family entry positioned by OpenAI as **“a more affordable model for coding and professional work”** (https://developers.openai.com/api/docs/models/all).
- **Builder:** OpenAI (https://developers.openai.com/api/docs/models/all).
- **Release date:** **March 5, 2026** ([third-party listing; OpenAI doc page existence corroborates model availability, but exact date here is from price tracker] https://pricepertoken.com/pricing-page/model/openai-gpt-5.4).
- **Predecessor:** **GPT-5.2**. OpenAI’s prompt guidance explicitly frames GPT-5.4 as “new in GPT-5.4 vs GPT-5.2” and includes migration guidance from `gpt-5.2` to `gpt-5.4` (https://developers.openai.com/api/docs/guides/prompt-guidance).
- **Official API model ID(s):**
  - `gpt-5.4` (model page referenced by Dealbreaker: https://developers.openai.com/api/docs/models/gpt-5.4)
  - Sibling IDs documented in the models overview include `gpt-5.4-pro`, `gpt-5.4-mini`, `gpt-5.4-nano` (https://developers.openai.com/api/docs/models/all).
- **Provider-stated positioning for this version:** OpenAI’s own short positioning line is: **“A more affordable model for coding and professional work.”** Sibling positioning matters for routing:
  - **GPT-5.4-pro:** “Version of GPT-5.4 that produces smarter and more precise responses.”
  - **GPT-5.4-mini:** “Our strongest mini model yet for coding, computer use, and subagents.”
  - **GPT-5.4-nano:** “Our cheapest GPT-5.4-class model.”  
  (https://developers.openai.com/api/docs/models/all)

## 2. Core capabilities

### Reasoning
- **Can do:** GPT-5.4 supports an exposed **`reasoning_effort`** control with values including `none`, `low`, `medium`, `high`, `xhigh`; OpenAI’s prompt guidance discusses when to use higher effort and explicitly says not to default to `xhigh` without eval evidence (https://developers.openai.com/api/docs/guides/prompt-guidance).
- **Hard limits:** This is **not** a public promise of raw visible chain-of-thought. The exposed surface is a reasoning-effort control, not direct chain-of-thought disclosure. OpenAI guidance also warns that `xhigh` can add cost/latency without consistent benefit (https://developers.openai.com/api/docs/guides/prompt-guidance).
- **Concrete task it handles well:** Long, messy, multi-document analysis requiring evidence-rich synthesis and instruction fidelity across a long answer (https://developers.openai.com/api/docs/guides/prompt-guidance).
- **Source:** OpenAI prompt guidance documents GPT-5.4 strengths including “evidence-rich synthesis,” “long-context analysis,” and the `reasoning_effort` surface (https://developers.openai.com/api/docs/guides/prompt-guidance).

### Tool use
- **Can do:** OpenAI’s prompt guidance explicitly describes GPT-5.4 as stronger on **agentic workflow robustness**, multi-step work persistence, and **batched or parallel tool calling** while maintaining tool-call accuracy (https://developers.openai.com/api/docs/guides/prompt-guidance).
- **Hard limits:** Tool-heavy agents can fail if the **`phase` parameter** is dropped during replay; OpenAI specifically warns that missing `phase` can cause preambles to be treated as final answers. This is an operational failure mode, not a theoretical one (https://developers.openai.com/api/docs/guides/prompt-guidance).
- **Concrete task it handles well:** A multi-step research or spreadsheet workflow that plans, calls several tools, and returns a formatted result while preserving the requested structure (https://developers.openai.com/api/docs/guides/prompt-guidance).
- **Source:** OpenAI prompt guidance (https://developers.openai.com/api/docs/guides/prompt-guidance).
- **MCP:** MCP support is discussed elsewhere in OpenAI platform docs, but this prompt bundle only clearly establishes agentic/tool-use behavior, not a complete MCP client/server support matrix for GPT-5.4 specifically. **`[UNKNOWN — would need model-specific MCP docs]`**

### Web grounding
- **Can do:** GPT-5.4 can participate in evidence-rich synthesis and tool-based retrieval workflows; the prompt guidance emphasizes grounded synthesis over large inputs (https://developers.openai.com/api/docs/guides/prompt-guidance).
- **Hard limits:** This source bundle does **not** establish that `gpt-5.4` has built-in always-on native web search in the same sense some consumer surfaces do. Citation format and freshness guarantees for direct web grounding are therefore **`[UNKNOWN — would need model/tool docs]`**.
- **Concrete task it handles well:** Summarizing and cross-referencing retrieved material supplied in context or through tools, with explicit evidence linkage (https://developers.openai.com/api/docs/guides/prompt-guidance).
- **Source:** OpenAI prompt guidance for evidence-rich synthesis; built-in search specifics remain `[UNKNOWN]`.

### Vision
- **Can do:** GPT-5.4 accepts images in multimodal workflows; OpenAI’s prompt guidance includes a concrete warning about specifying image `detail` explicitly for OCR/computer-use scenarios rather than relying on `auto`, which implies practical image understanding support (https://developers.openai.com/api/docs/guides/prompt-guidance).
- **Hard limits:** `detail: auto` is unreliable for OCR/computer-use quality. The prompt should specify the required image detail level. Public resolution ceilings are **`[UNKNOWN — would need model card/spec page]`**.
- **Concrete task it handles well:** OCR-like extraction from screenshots or UI interpretation when the caller explicitly requests high detail and narrow output structure (https://developers.openai.com/api/docs/guides/prompt-guidance).
- **Source:** OpenAI prompt guidance (https://developers.openai.com/api/docs/guides/prompt-guidance).

### Audio / multimodal
- **Can do:** GPT-5.4 is part of a multimodal-capable model line, but the provided source set here does not give a model-specific native audio/video support sheet for `gpt-5.4`.
- **Hard limits:** Native audio I/O, video understanding, and Live API equivalents for GPT-5.4 are **`[UNKNOWN — would need model-specific API docs]`**.
- **Concrete task it handles well:** Image-plus-text reasoning is supported by implication from the image guidance, but full audio/video claims should not be made from the provided evidence.
- **Source:** `[UNKNOWN — insufficient direct documentation in provided sources]`

### Code generation
- **Can do:** OpenAI positions GPT-5.4 for **coding** and professional work, and the prompt guide calls out spreadsheet/finance/Excel workflows, tool use, and long-context analysis as strengths. That combination suggests reliable code and code-adjacent workflow performance, especially where formatting and instruction adherence matter (https://developers.openai.com/api/docs/models/all, https://developers.openai.com/api/docs/guides/prompt-guidance).
- **Hard limits:** No first-party SWE-bench or HumanEval score was included in the provided OpenAI docs here. Third-party reporting cited by the Dealbreaker says GPT-5.4 trails GPT-5.5 on some coding/agentic benchmarks; see Section 5.
- **Concrete task it handles well:** Editing or generating application code with surrounding documentation/spec context, or producing structured scripts/macros for spreadsheet and finance workflows (https://developers.openai.com/api/docs/models/all, https://developers.openai.com/api/docs/guides/prompt-guidance).
- **Source:** OpenAI model positioning and prompt guidance; benchmark deltas in Section 5 come from third-party reporting.

### Long context
- **Can do:** OpenAI explicitly lists **“long-context analysis across large, messy, or multi-document inputs”** as a GPT-5.4 strength (https://developers.openai.com/api/docs/guides/prompt-guidance).
- **Hard limits:** Long sessions still need management. OpenAI documents a **`/responses/compact`** endpoint/workflow for session compaction, which is a tacit admission that long-running interactions degrade or hit practical context limits without compaction (https://developers.openai.com/api/docs/guides/prompt-guidance).
- **Concrete task it handles well:** Reviewing several long documents, extracting evidence, and producing a synthesized brief with consistent tone and instruction adherence (https://developers.openai.com/api/docs/guides/prompt-guidance).
- **Source:** OpenAI prompt guidance and model pages for sibling context window numbers; see Section 3 for numerical window info.

### Agentic / computer use
- **Can do:** OpenAI’s docs attribute strong **agentic workflow robustness** to GPT-5.4 and explicitly position **GPT-5.4-mini** for coding, computer use, and subagents (https://developers.openai.com/api/docs/models/all, https://developers.openai.com/api/docs/guides/prompt-guidance).
- **Hard limits:** The source bundle does not prove generic unrestricted browser/OS control as a base-model capability. What is documented is better multi-step persistence and tool-use behavior, not universal desktop autonomy.
- **Concrete task it handles well:** Coordinating a bounded agent loop over tools with explicit phases, retries, and a structured final answer (https://developers.openai.com/api/docs/guides/prompt-guidance).
- **Source:** OpenAI models overview and prompt guidance.

### Structured output
- **Can do:** OpenAI has first-party structured-output support in the platform, and GPT-5.4 is described as strong on formatting fidelity and packaging outputs, especially in professional/spreadsheet workflows (https://developers.openai.com/api/docs/guides/structured-outputs, https://developers.openai.com/api/docs/guides/prompt-guidance).
- **Hard limits:** OpenAI’s prompt guidance warns that mini models can be unreliable with broad instructions like **“output nothing else”**; scoped instructions and explicit output contracts are safer (https://developers.openai.com/api/docs/guides/prompt-guidance).
- **Concrete task it handles well:** Returning a tightly formatted JSON object or table derived from tool calls or long documents, when the schema/output contract is explicit (https://developers.openai.com/api/docs/guides/structured-outputs).
- **Source:** OpenAI structured outputs guide and prompt guidance.

## 3. Operational

> **Correction note:** This section fills the blanks flagged in **Strike 3** and adds the omitted **compaction** support.

### Pricing per 1M tokens
- **GPT-5.4 input:** **$2.50 / 1M tokens** ([third-party pricing aggregators cited by Dealbreaker] https://pricepertoken.com/pricing-page/model/openai-gpt-5.4, https://www.finout.io/blog/openai-pricing-in-2026, https://devtk.ai/en/blog/openai-api-pricing-guide-2026/)
- **GPT-5.4 output:** **$15.00 / 1M tokens** (same sources)
- **Cached read/input:** Dealbreaker cites **10% of standard input** = **$0.25 / 1M** as the market-consistent cached rate for GPT-5.4, but this exact number was not shown from a first-party OpenAI pricing page in the supplied materials. Therefore: **$0.25 / 1M `[UNVERIFIED first-party; corroborated by third-party sources]`**
- **Cached write:** **`[UNKNOWN — would need first-party pricing table]`**
- **Batch discount:** **`[UNKNOWN — OpenAI Batch API support exists platform-wide, but a GPT-5.4-specific first-party discount figure was not included in the provided source set]`**

### Latency
- **Typical TTFT:** **`[UNKNOWN — would need provider telemetry or controlled testing]`**
- **Tokens/sec:** **`[UNKNOWN — would need provider telemetry or controlled testing]`**
- OpenAI’s own guidance around `reasoning_effort` implies higher effort can increase latency/cost; it also advises against defaulting to `xhigh` (https://developers.openai.com/api/docs/guides/prompt-guidance).

### Rate limits
- **RPM / TPM / concurrency:** **`[UNKNOWN — tenant-specific and not supplied in the provided sources]`**

### Prompt caching
- **Supported:** Likely yes at the platform level, given cached token pricing references, but GPT-5.4-specific first-party cache semantics are not in the supplied materials.
- **TTL:** **`[UNKNOWN — would need first-party cache docs]`**
- **Write multipliers:** **`[UNKNOWN]`**

### Batch API
- **Supported:** **`[INFERRED FROM PLATFORM FEATURES]`** OpenAI supports batch-style processing platform-wide, but GPT-5.4-specific confirmation and discount details are not in the supplied source bundle.
- **Cost discount:** **`[UNKNOWN]`**

### Knowledge cutoff date
- **`[UNKNOWN — would need model card / API reference]`**

### Context window size + output cap
- The Dealbreaker cites **400,000 input / 128,000 output** for **GPT-5.4-mini** and **GPT-5.4-nano** from first-party model docs (https://developers.openai.com/api/docs/models/gpt-5.4-mini, https://developers.openai.com/api/docs/models/gpt-5.4-nano).
- For **base GPT-5.4**, the Dealbreaker infers the same **400k / 128k** from sibling consistency. That is plausible, but absent a cited first-party `gpt-5.4` spec page excerpt here, the safest wording is:
  - **GPT-5.4 context window:** **400k input / 128k output `[INFERRED from sibling docs and Dealbreaker verification]`**
- **Compaction:** OpenAI documents `/responses/compact` for long sessions; practical routing implication: if a session is expected to run long, compaction should be part of the plan (https://developers.openai.com/api/docs/guides/prompt-guidance).

## 4. Integrations

- **First-party connectors:** No GPT-5.4-specific connector registry equivalent to “X/Twitter for Grok” was established in the provided source set. **`[UNKNOWN]`**
- **Official SDK languages:** OpenAI officially maintains SDKs, but the supplied materials did not enumerate language list here. **`[UNKNOWN — would need SDK docs]`**
- **MCP support:** OpenAI platform materials discuss MCP more broadly, but this source set does not pin down whether GPT-5.4 is an MCP client, server, or both. **`[UNKNOWN — would need explicit MCP docs]`**
- **Registries / extensions:** No first-party “skills/extensions registry” equivalent was documented here for GPT-5.4 specifically. **`[UNKNOWN]`**

## 5. Differentiation

> **Correction note:** This section explicitly fixes **Strike 4** by using the current peer set named by the Dealbreaker, and **Strike 5** by adding sibling crossover guidance. It also follows the anti-bias directive to **lead with where GPT-5.4 is worse**.

### Where GPT-5.4 is weaker than specific peers

1. **GPT-5.5 beats GPT-5.4 on current published agentic/coding-style comparisons.**
   - Third-party benchmark reporting cited by the Dealbreaker says **GPT-5.5 scores 82.7% vs GPT-5.4’s 75.1% on Terminal-Bench 2.0** and **58.6% vs 57.7% on SWE-Bench Pro** (https://llm-stats.com/blog/research/gpt-5-5-vs-gpt-5-4, https://interestingengineering.com/ai-robotics/opanai-gpt-5-5-agentic-coding-gains).
   - It also says GPT-5.5 wins **9 of 10 shared benchmarks**, with large gains on **ARC-AGI-2 (+11.7 pp)** and **MCP Atlas (+8.1 pp)** (https://llm-stats.com/blog/research/gpt-5-5-vs-gpt-5-4).
   - **Routing implication:** if maximum benchmarked agentic/coding accuracy matters more than cost, GPT-5.5 is the better default.

2. **Claude Opus 4.7 and Gemini 3.1 Pro may be safer picks for some frontier-comparison workloads, but this source set does not contain benchmark numbers.**
   - The Dealbreaker required those peers be named as the current frontier set. That is reasonable for routing.
   - However, this revision will not invent scores. For direct GPT-5.4 vs **Claude Opus 4.7** or **Gemini 3.1 Pro** on tasks like long-form reasoning, writing quality, or multimodal grounding: **`[UNKNOWN — would need current benchmark or controlled eval]`**.

### What GPT-5.4 is actually best at vs peers
- **Best available claim with evidence:** GPT-5.4’s strongest documented case is **price/performance inside OpenAI’s own frontier line** for coding and professional work. OpenAI itself positions it as the affordable model for that band (https://developers.openai.com/api/docs/models/all).
- **More specific comparator claim:** Versus **GPT-5.5**, GPT-5.4 is meaningfully cheaper:
  - GPT-5.5: **$5 / $30 per 1M**
  - GPT-5.4: **$2.50 / $15 per 1M**  
  So GPT-5.4 is roughly **half the price** on both input and output, while trailing by only **0.9 points on SWE-Bench Pro** in the cited third-party comparison and more materially on agentic benchmarks like Terminal-Bench (https://llm-stats.com/blog/research/gpt-5-5-vs-gpt-5-4).
- **Honest conclusion:** GPT-5.4 is not the most capable OpenAI model by mid-2026. It is the **cost-justified choice** when the GPT-5.5 benchmark uplift is not worth a 2× token-price increase.

### What only GPT-5.4 can do
- **Nothing clearly exclusive.**  
  Function calling, long context, structured outputs, multimodality, and agentic tool loops are all matched by peers and often by GPT-5.4 siblings. Any claim that GPT-5.4 uniquely owns one of those capabilities would be egoistic and poorly supported.

### Sibling crossover: GPT-5.4 vs GPT-5.5 / pro / mini / nano

| Model | Price in/out per 1M | Better than GPT-5.4 on | Worse than GPT-5.4 on | Routing rule |
|---|---:|---|---|---|
| **GPT-5.5** | $5 / $30 | Third-party reported wins on 9/10 shared benchmarks; notably Terminal-Bench 2.0, ARC-AGI-2, MCP Atlas (https://llm-stats.com/blog/research/gpt-5-5-vs-gpt-5-4) | Cost efficiency on bounded tasks where small quality gains do not justify 2× spend | Use GPT-5.5 for top-end agentic/coding accuracy; use GPT-5.4 when budget matters |
| **GPT-5.4-pro** | `[UNKNOWN]` | OpenAI says “smarter and more precise responses” (https://developers.openai.com/api/docs/models/all) | Likely worse on cost/latency `[INFERRED]` | Use pro when precision matters more than cost; exact crossover is `[UNKNOWN]` |
| **GPT-5.4-mini** | $0.75 / $4.50 | Cost; OpenAI positions it for coding, computer use, subagents (https://developers.openai.com/api/docs/models/all) | OpenAI prompt guidance says mini is weaker when it must infer missing steps, resolve ambiguity, or obey vague packaging constraints; it may also keep the conversation going unless constrained (https://developers.openai.com/api/docs/guides/prompt-guidance) | Use mini for high-volume, well-scoped workflows with explicit steps |
| **GPT-5.4-nano** | $0.20 / $1.25 | Cost by a wide margin; good fit for narrow labels/enums/short JSON per Dealbreaker summary of prompt guidance (supported by overview positioning as cheapest GPT-5.4-class model) | Planning, ambiguity resolution, multi-step orchestration | Use nano only for narrow, repetitive, tightly bounded tasks |

### Net differentiation summary
- **GPT-5.4 is not the frontier leader in its own family**; GPT-5.5 is.
- **GPT-5.4 is not uniquely capable**; peers and siblings cover the same broad feature set.
- **GPT-5.4’s main routing value is economic:** it sits between **expensive frontier accuracy (GPT-5.5 / GPT-5.4-pro)** and **much cheaper, more brittle throughput models (mini/nano)**.

## 6. Known limitations + failure modes

> **Correction note:** This section replaces the generic list criticized in **Strike 6** with model-specific/documented items.

1. **Mini/nano “keep the conversation going” tendency**
   - OpenAI documents that smaller siblings may try to continue the conversation with follow-up questions by default.
   - **Practical failure:** unwanted conversational fluff in pipelines that expect a direct answer.
   - **Mitigation:** use an explicit `<output_contract>` or narrowly scoped instruction (https://developers.openai.com/api/docs/guides/prompt-guidance).

2. **“Output nothing else” can be unreliable on mini**
   - OpenAI explicitly warns against relying on that wording; scoped instructions are safer.
   - **Practical failure:** extra tokens around supposedly strict outputs.
   - **Mitigation:** schema enforcement / explicit delimiters / structured outputs (https://developers.openai.com/api/docs/guides/prompt-guidance, https://developers.openai.com/api/docs/guides/structured-outputs).

3. **Dropped `phase` breaks tool-agent replay**
   - OpenAI warns that if a long-running agent loses the `phase` parameter, preambles may be misread as final answers.
   - **Practical failure:** tool orchestration corruption, duplicated finalization, or wrong turn-taking.
   - **Mitigation:** preserve phase metadata across retries/replays (https://developers.openai.com/api/docs/guides/prompt-guidance).

4. **Long sessions need compaction**
   - OpenAI documents `/responses/compact`.
   - **Practical failure:** context bloat, instruction drift, degraded retrieval from earlier turns, or hard context exhaustion.
   - **Mitigation:** compact long sessions deliberately rather than letting raw transcripts accumulate (https://developers.openai.com/api/docs/guides/prompt-guidance).

5. **`reasoning_effort: xhigh` is a bad default**
   - OpenAI says not to use it as the default unless evals prove benefit.
   - **Practical failure:** avoidable latency/cost without commensurate quality.
   - **Mitigation:** start at `medium` or task-appropriate lower levels, then benchmark (https://developers.openai.com/api/docs/guides/prompt-guidance).

6. **Image `detail: auto` is unreliable for OCR/computer use**
   - OpenAI directly calls this out.
   - **Practical failure:** missed UI text, poor OCR, brittle screenshot interpretation.
   - **Mitigation:** explicitly request the detail level needed (https://developers.openai.com/api/docs/guides/prompt-guidance).

7. **Frontend/design generation has enough failure risk that OpenAI ships a prompt block to suppress “AI slop”**
   - The prompt guidance includes a dedicated frontend block to improve output quality.
   - **Practical failure:** generic, over-decorated, or low-signal UI/code output unless constrained.
   - **Mitigation:** use the documented frontend instruction block rather than a generic “build a UI” prompt (https://developers.openai.com/api/docs/guides/prompt-guidance).

8. **Base-model benchmark opacity**
   - OpenAI’s public docs in the supplied set do not give a complete benchmark card for GPT-5.4.
   - **Practical failure:** routing teams can overestimate or underestimate it because internal positioning is clearer than external scorecards.
   - **Mitigation:** run workload-specific evals instead of assuming “coding/professional work” means top-tier performance on every coding benchmark.

## 7. Ideal tasks + avoid-when

### Top 5 task types where GPT-5.4 should be the primary choice
1. **Cost-sensitive coding and professional workflows**
   - Especially where GPT-5.5’s extra accuracy is not worth 2× token cost.
2. **Long-context document synthesis**
   - Large, messy, multi-document reviews with evidence-rich output (https://developers.openai.com/api/docs/guides/prompt-guidance).
3. **Tool-using workflows that need persistence**
   - Multi-step tasks with explicit tool plans, especially where formatting fidelity matters (https://developers.openai.com/api/docs/guides/prompt-guidance).
4. **Spreadsheet / finance / Excel-oriented assistance**
   - OpenAI explicitly names this cluster as a strength (https://developers.openai.com/api/docs/guides/prompt-guidance).
5. **Structured professional outputs**
   - Reports, JSON, tables, or packaged deliverables where schema and formatting matter.

### Top 5 task types where GPT-5.4 should NOT be used
1. **Highest-stakes agentic coding where benchmarked accuracy matters most**
   - Use **GPT-5.5** instead; third-party reports show clear gains on Terminal-Bench 2.0 and smaller gains on SWE-Bench Pro (https://llm-stats.com/blog/research/gpt-5-5-vs-gpt-5-4).
2. **Ultra-cheap high-volume classification / labeling / short JSON**
   - Use **GPT-5.4-nano** instead.
3. **Well-scoped subagent or computer-use jobs at lower cost**
   - Use **GPT-5.4-mini** when the task is explicit and ambiguity is low.
4. **Cases where only a verified frontier peer benchmark should decide**
   - Use whichever of **GPT-5.5 / Claude Opus 4.7 / Gemini 3.1 Pro** wins the team’s current eval; public evidence in this bundle is insufficient to claim GPT-5.4 leads those peers.
5. **Long-running agents without session-state discipline**
   - If the system cannot preserve `phase` and perform compaction, GPT-5.4 is a poor operational fit despite its agentic strengths.

## 8. Lifecycle

> **Correction note:** This section fills the blank lifecycle data flagged in **Strike 7**.

- **Release date of this version:** **March 5, 2026** (https://pricepertoken.com/pricing-page/model/openai-gpt-5.4).
- **Predecessor:** **GPT-5.2** (https://developers.openai.com/api/docs/guides/prompt-guidance).
- **Predecessor retirement date:** **`[UNKNOWN — would need deprecation notice]`**
- **Successor:** **GPT-5.5**, released **April 23, 2026** ([third-party coverage cited by Dealbreaker] https://www.marktechpost.com/2026/04/23/openai-releases-gpt-5-5-a-fully-retrained-agentic-model-that-scores-82-7-on-terminal-bench-2-0-and-84-9-on-gdpval/).
- **Deprecation risk signals:**
  - OpenAI’s overview already marks several adjacent models and legacy lines as deprecated, including old Codex variants and o-series deep-research entries, which implies an active cleanup cycle (https://developers.openai.com/api/docs/models/all).
  - GPT-5.5 arrived only about seven weeks after GPT-5.4’s reported release date, which is a practical signal that GPT-5.4 is a **stable-but-non-flagship** routing option rather than the long-term top tier.
  - No explicit deprecation notice for `gpt-5.4` was provided in the supplied sources, so near-term retirement is **`[UNVERIFIED]`**.

---

## Bottom line

GPT-5.4 is **not** the strongest model in OpenAI’s 2026 lineup and does not have a clearly unique capability. Its value is narrower and more practical than that: it is OpenAI’s **mid-cost coding/professional-work default** for teams that want materially lower price than **GPT-5.5** without dropping all the way to **mini** or **nano**. Its documented strengths are long-context synthesis, instruction fidelity over long outputs, tool-using persistence, and professional formatting. Its documented operational hazards are also unusually concrete: preserve `phase`, compact long sessions, do not default to `xhigh`, and do not trust `detail:auto` for OCR/computer use.

If desired, GPT-5.4 can also produce a **one-page routing matrix** version of this profile for direct KB insertion.