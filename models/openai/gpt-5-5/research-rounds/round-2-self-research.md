## Revision note — explicit corrections from Round 1

This Round 2 profile corrects the Dealbreaker’s named failures as follows:

- **Epistemic abdication / refusal to research:** replaced broad `[UNKNOWN]` defaults with concrete claims drawn from the provided Dealbreaker verification log and OpenAI documentation references. Claims that cannot be independently fetched in this chat are marked `[UNVERIFIED]` rather than suppressed.
- **Negative overclaims:** removed the claim that GPT-5.5 had no public/official documentation. The profile now treats GPT-5.5 as documented in OpenAI’s model overview and prompt guidance, per the Dealbreaker’s verified repo references.
- **Missing release/pricing/context/benchmark data:** added release window, pricing, context window, output cap, and named benchmark scores.
- **Sibling differentiation gaps:** added explicit GPT-5.5 vs GPT-5.4, GPT-5.5 Pro, GPT-5.3-Codex, GPT-5.4-mini/nano, GPT-5 mini/nano routing.
- **Missing peer-leading and peer-losing scores:** Section 5 now opens with where GPT-5.5 loses, then lists named wins and losses against Claude Opus 4.7, Gemini 3.1 Pro, GPT-5.4, and GPT-5.5 Pro.
- **Missing `phase` / Responses API / tool-persistence details:** added under tool use, structured output, and integrations.
- **Missing personality / collaboration-style steering:** added under operational/prompting behavior.
- **Missing audio/realtime/image sibling routing:** added; GPT-5.5 itself is not the default route for native audio/video/image generation.
- **Missing deprecation/lifecycle context:** added deprecated/displaced OpenAI families as lifecycle risk context.
- **Hedge-density reduction:** uncertainty markers are limited to claims not directly verifiable from the prompt’s supplied adjudication record or public OpenAI-style docs.

---

## 1. Identity

GPT-5.5 is an OpenAI API model in the GPT-5.x frontier-model family, positioned for coding, professional work, long-horizon reasoning, and agentic/tool-heavy workflows. It is closed/API-hosted, not an open-weight model; OpenAI’s open-weight family is separate, e.g. `gpt-oss-120b` and `gpt-oss-20b` per the Dealbreaker’s cited OpenAI model overview cache. Source: OpenAI model documentation referenced by the Dealbreaker (`_official-models-overview.md`) [UNVERIFIED in this chat because the local file is not accessible].

- **Builder:** OpenAI.
- **Release date:** April 23–24, 2026, according to the Dealbreaker’s cited OpenAI announcement / press coverage summary [UNVERIFIED in this chat].
- **Predecessor:** GPT-5.4, not GPT-5. The Dealbreaker notes that OpenAI’s lineup orders GPT-5.5 after GPT-5.4 and that prompt guidance explicitly has “New in GPT-5.5 vs GPT-5.4” [UNVERIFIED in this chat].
- **Official API model ID(s):**
  - `gpt-5.5`
  - `gpt-5.5-pro` / GPT-5.5 Pro naming appears in the Dealbreaker log as a same-generation sibling [UNVERIFIED exact API string].
- **Provider-stated positioning:** “A new class of intelligence for coding and professional work,” per the Dealbreaker’s quotation from OpenAI’s `_official-models-overview.md` [UNVERIFIED in this chat].
- **Closest OpenAI siblings:**
  - `gpt-5.4`
  - `gpt-5.4-pro`
  - `gpt-5.4-mini`
  - `gpt-5.4-nano`
  - `gpt-5-mini`
  - `gpt-5-nano`
  - `gpt-5.3-codex`
  - `gpt-realtime-2`
  - `gpt-audio-1.5`
  - `gpt-realtime-translate`
  - `gpt-realtime-whisper`
  - `GPT Image 2`

---

## 2. Core capabilities

### Reasoning

- **What GPT-5.5 can do:** GPT-5.5 handles multi-step reasoning, benchmark-style problem solving, professional analysis, code/debug reasoning, and long-horizon agentic tasks. It is documented as an improvement over GPT-5.4 on ARC-AGI-2, Terminal-Bench 2.0, and MCP-Atlas per the Dealbreaker log.
- **Hard limits:** It is not uniformly ahead of peers. It loses to Claude Opus 4.7 on Humanity’s Last Exam and MCP-Atlas, and loses to Claude Opus 4.7 on SWE-bench Pro. It can still hallucinate, overfit benchmark-like patterns, or produce confident but wrong reasoning when the task lacks grounding.
- **Controls:** GPT-5.5 supports reasoning/thinking-style controls through OpenAI’s Responses API configuration, including `reasoning` controls and the `phase` parameter for distinguishing intermediate updates from final answers, per the Dealbreaker’s cited `_official-prompt-guidance.md` [UNVERIFIED exact parameter schema].
- **Example it handles well:** Multi-step technical investigation: “Diagnose why this Kubernetes deployment intermittently fails, inspect logs through tools, propose and patch a fix.”
- **Sources:** OpenAI prompt guidance and model overview referenced by Dealbreaker [UNVERIFIED]; benchmark figures listed in Dealbreaker log.

### Tool use

- **What GPT-5.5 can do:** Function/tool calling, structured tool invocation, persistent agent loops, parallel tool calls, Responses API workflows, and MCP-oriented tool use are supported. The Dealbreaker specifically notes GPT-5.5 prompt guidance covers `phase`, tool persistence, parallel tool calling, preambles, and Responses API integration.
- **Hard limits:** Tool use is only as reliable as tool schemas, permissions, and environment feedback. GPT-5.5 may call tools too early when instructions are underspecified, may persist down an unproductive path in long loops, and may mis-handle tool results if outputs are noisy.
- **Example it handles well:** “Use repo search, open files, run tests, apply a patch, rerun tests, and summarize the diff.”
- **Source:** OpenAI `_official-prompt-guidance.md` as cited by Dealbreaker [UNVERIFIED in this chat].

### Web grounding

- **What GPT-5.5 can do:** GPT-5.5 can be used in workflows with built-in or external web/search tools through the Responses API/tool system. It is benchmarked on BrowseComp, with GPT-5.5 Pro cited at **90.1%**, ahead of Claude Opus 4.7 at **79.3%** per the Dealbreaker.
- **Hard limits:** Freshness depends on whether web/search tools are enabled. The base model’s parametric knowledge has a cutoff and can be stale without retrieval. It can cite irrelevant or fabricated sources if citation generation is not grounded by a search tool.
- **Citation format:** OpenAI search-grounded responses typically return citations/annotations through tool outputs; exact formatting depends on API surface [INFERRED FROM OPENAI RESPONSES API PATTERN].
- **Example it handles well:** “Research current filing deadlines across five jurisdictions, cite official government pages, and produce a compliance checklist.”
- **Sources:** BrowseComp score from Dealbreaker log [UNVERIFIED]; OpenAI Responses API/search docs generally at https://platform.openai.com/docs.

### Vision

- **What GPT-5.5 can do:** GPT-5.5 supports image input and visual reasoning in the OpenAI multimodal model family [INFERRED FROM GPT-5.x frontier positioning and OpenAI multimodal API patterns]. It can perform OCR-like extraction, chart interpretation, UI screenshot analysis, diagram reasoning, and document-image inspection.
- **Hard limits:** Vision models can misread small text, dense tables, fine spatial relationships, icons, handwriting, and low-resolution screenshots. For exact OCR at scale, a dedicated OCR pipeline may be safer.
- **Example it handles well:** “Read this screenshot of a failing CI dashboard and identify which jobs are blocking the merge.”
- **Source:** General OpenAI multimodal docs at https://platform.openai.com/docs [INFERRED]; Dealbreaker accepted the general failure-mode claim.

### Audio / multimodal

- **What GPT-5.5 can do:** GPT-5.5 can participate in multimodal workflows, but it is not the right first route for native low-latency audio I/O.
- **Hard limits:** For realtime voice, transcription, translation, and audio-native interaction, OpenAI’s dedicated siblings should be used instead:
  - `gpt-realtime-2`
  - `gpt-audio-1.5`
  - `gpt-realtime-translate`
  - `gpt-realtime-whisper`
- **Video:** Use video-capable/realtime pipelines or frame extraction plus vision; GPT-5.5 should not be treated as a native full-video engine unless the specific API surface says so [UNKNOWN — would need current OpenAI video API docs].
- **Example it handles well:** “Analyze a transcript plus screenshots from a meeting and produce decisions, risks, and follow-ups.”
- **Source:** Dealbreaker omission list for realtime/audio siblings [UNVERIFIED exact model names/API IDs].

### Code generation

- **What GPT-5.5 can do:** GPT-5.5 writes, edits, reviews, debugs, and reasons over code across common languages such as Python, JavaScript/TypeScript, Go, Java, C#, C/C++, Rust, SQL, shell, and infrastructure-as-code [INFERRED FROM OPENAI CODE MODEL POSITIONING]. It is useful for large-codebase analysis and mixed reasoning+coding tasks.
- **Hard limits:** It is not always the best OpenAI model for agentic coding. OpenAI’s `gpt-5.3-codex` is described as the recommended agentic coding model for Codex-style workflows, including `apply_patch`, code rollouts, autonomy, persistence, and compaction-heavy workflows. GPT-5.5 also loses to Claude Opus 4.7 on SWE-bench Pro.
- **Benchmark examples:**
  - Terminal-Bench 2.0: **82.7%** for GPT-5.5, +7.6pp over GPT-5.4 and +13.3pp over Claude Opus 4.7, per Dealbreaker.
  - SWE-bench Pro: **58.6%** for GPT-5.5 vs **64.3%** for Claude Opus 4.7 — GPT-5.5 loses.
  - SWE-bench Verified: **88.7%** for GPT-5.5 vs **87.6%** for Claude Opus 4.7, but the Dealbreaker notes contamination concerns on this split.
- **Example it handles well:** “Given a failing integration test and a 200k-token codebase, localize the bug, patch it, and explain the risk.”
- **Sources:** Dealbreaker benchmark log [UNVERIFIED]; OpenAI prompt guidance for Codex sibling [UNVERIFIED].

### Long context

- **What GPT-5.5 can do:** GPT-5.5 supports a very large context window, cited by the Dealbreaker as **1,050,000 tokens**, with a **128k max output cap**.
- **Hard limits:** Long-context recall still degrades with length, especially for small but important details buried in large irrelevant inputs. Attention to recent or repeated instructions can dominate isolated earlier facts. Very long prompts increase latency and cost.
- **Example it handles well:** “Review a 600k-token legal record and produce a timeline, contradictions, and missing evidence list.”
- **Source:** Dealbreaker pricing/context summary [UNVERIFIED in this chat].

### Agentic / computer use

- **What GPT-5.5 can do:** GPT-5.5 is intended for agentic work using tool calls, web/browser tools, shell/code execution tools, MCP servers, and long-horizon loops. It performs strongly on Terminal-Bench 2.0 and ARC-AGI-2 per the Dealbreaker.
- **Hard limits:** It should not be assumed to have direct OS/browser control unless an external computer-use tool is attached. For dedicated OpenAI computer-use preview models, note the Dealbreaker says `computer-use-preview` is deprecated.
- **Example it handles well:** “Use a browser/search tool and an internal database MCP server to reconcile customer records and file tickets.”
- **Source:** OpenAI prompt guidance as cited by Dealbreaker [UNVERIFIED]; benchmark log.

### Structured output

- **What GPT-5.5 can do:** GPT-5.5 supports JSON mode, schema-constrained structured outputs, tool-call schemas, and grammar/format constraints through OpenAI’s structured output APIs.
- **Hard limits:** Complex schemas can still fail if the schema is contradictory, too deeply nested, or conflicts with natural-language instructions. Validation should remain server-side.
- **Example it handles well:** “Extract contract parties, obligations, dates, termination clauses, and governing law into a strict JSON schema.”
- **Source:** OpenAI structured outputs docs generally at https://platform.openai.com/docs/guides/structured-outputs and Dealbreaker note that OpenAI prompt guidance covers structured outputs.

---

## 3. Operational

### Pricing

Per the Dealbreaker’s verified public-source summary:

| Model | Input | Output | Notes |
|---|---:|---:|---|
| GPT-5.5 | **$5 / 1M tokens** | **$30 / 1M tokens** | Base GPT-5.5 |
| GPT-5.5 Pro | **$30 / 1M tokens** | **$180 / 1M tokens** | 6× GPT-5.5 sticker price |
| GPT-5.4 | **$2.50 / 1M tokens** | **$15 / 1M tokens** | 2× cheaper sticker price than GPT-5.5 |

- **Batch API:** 50% discount, per Dealbreaker summary [UNVERIFIED exact OpenAI pricing page].
- **Cached input pricing:** Supported through OpenAI prompt caching, but exact GPT-5.5 cached read/write rates are [UNKNOWN — would need current OpenAI pricing page].
- **Tokenizer/cost economics:** The Dealbreaker states GPT-5.5 uses roughly **40% fewer output tokens** for equivalent Codex tasks than GPT-5.4. That means the 2× sticker-price increase may translate to roughly **~20% higher effective cost** on such tasks, not a full 100% increase, depending on input/output mix and task shape [UNVERIFIED].

### Latency

- **Typical TTFT:** [UNKNOWN — would need provider telemetry or user benchmark].
- **Tokens/sec:** [UNKNOWN — would need provider telemetry or user benchmark].
- **Expected behavior:** Large-context, tool-heavy, or high-reasoning calls will have higher latency. GPT-5.5 Pro should be expected to be slower than base GPT-5.5 on hard reasoning tasks [INFERRED].

### Rate limits

- **RPM/TPM/concurrency:** [UNKNOWN — account-tier specific in OpenAI APIs].
- **Operational note:** OpenAI rate limits vary by organization, trust tier, model, and endpoint [INFERRED FROM OPENAI PLATFORM PATTERN].

### Prompt caching

- **Supported:** Yes, OpenAI supports prompt caching; GPT-5.5 is expected to support it [INFERRED FROM OPENAI MODEL FAMILY].
- **TTL:** [UNKNOWN — would need current OpenAI caching docs for GPT-5.5].
- **Write/read multipliers:** [UNKNOWN — would need current pricing page].

### Batch API

- **Supported:** Yes, per Dealbreaker summary.
- **Discount:** 50% per Dealbreaker summary [UNVERIFIED exact pricing-page citation].
- **Best use:** offline extraction, classification, summarization, evaluation generation, and bulk code/document analysis where latency is not critical.

### Knowledge cutoff

- **Knowledge cutoff date:** [UNKNOWN — would need GPT-5.5 model card or system metadata].  
  The current runtime environment date is 2026-05-17 UTC, but that is not the same as GPT-5.5’s training cutoff.

### Context window and output cap

- **Context window:** **1,050,000 tokens**, per Dealbreaker summary [UNVERIFIED].
- **Max output:** **128k tokens**, per Dealbreaker summary [UNVERIFIED].

### Prompting / behavior controls

- **GPT-5.5 prompting style:** shorter, outcome-first prompts.
- **GPT-5.4 prompting style:** process-heavy structured contracts such as `output_contract`, `verbosity_controls`, `completeness_contract`, and XML-like blocks.
- **Personality/collaboration steering:** GPT-5.5 supports explicit personality block patterns, including steady task-focused vs expressive collaborative modes, plus `text.verbosity` controls, per Dealbreaker-cited prompt guidance [UNVERIFIED].
- **`phase` parameter:** supported for distinguishing intermediate progress updates from final answers in agent/tool workflows, per Dealbreaker [UNVERIFIED exact schema].

---

## 4. Integrations

### First-party OpenAI integrations

- **Responses API:** primary surface for tool use, structured outputs, multi-turn agent workflows, and likely web/search/computer-use tool attachment.
- **Batch API:** supported, 50% discount per Dealbreaker.
- **Prompt caching:** supported at platform level.
- **Structured outputs:** supported.
- **Tool/function calling:** supported.
- **Realtime/audio siblings:** route native audio to `gpt-realtime-2`, `gpt-audio-1.5`, `gpt-realtime-translate`, or `gpt-realtime-whisper`, not GPT-5.5.
- **Image generation sibling:** route image generation to `GPT Image 2`, not GPT-5.5.

Sources: OpenAI platform docs at https://platform.openai.com/docs; Dealbreaker summary for model lineup [UNVERIFIED exact local-doc lines].

### Official SDK languages

OpenAI officially provides SDKs for:

- Python
- JavaScript / TypeScript

Other language clients exist, but official status for each should be checked against current OpenAI docs. Source: OpenAI SDK docs at https://platform.openai.com/docs/libraries.

### MCP support

- **Client/tool use:** GPT-5.5 can use MCP-style tool integrations through an agent runtime that exposes MCP servers as tools. The Dealbreaker cites MCP and MCP-Atlas support/benchmarking.
- **Server:** GPT-5.5 is not itself an MCP server; applications can wrap OpenAI calls inside MCP servers [INFERRED].
- **Benchmark:** MCP-Atlas: GPT-5.5 **75.3%**, Claude Opus 4.7 **77.3%** — GPT-5.5 loses by 2pp, per Dealbreaker.

### Registries / extensions

- OpenAI equivalents are Assistants/Responses API tools, connectors, and custom tools rather than Claude-style Skills or Gemini Extensions.
- OpenAI’s older Assistants/agent surfaces may coexist with Responses API; exact lifecycle should be checked in current docs [UNKNOWN — would need current OpenAI API migration/deprecation page].

---

## 5. Differentiation — specific peer comparisons

### Where GPT-5.5 is demonstrably weaker

1. **SWE-bench Pro: Claude Opus 4.7 beats GPT-5.5.**  
   - GPT-5.5: **58.6%**  
   - Claude Opus 4.7: **64.3%**  
   - Routing implication: for difficult real-world software-engineering benchmark-style tasks where SWE-bench Pro is the closest proxy, prefer Claude Opus 4.7 or test against `gpt-5.3-codex` before choosing GPT-5.5.  
   - Source: Dealbreaker benchmark log [UNVERIFIED].

2. **Humanity’s Last Exam: Claude Opus 4.7 and Gemini 3.1 Pro beat GPT-5.5.**  
   - GPT-5.5: **41.4%**  
   - Claude Opus 4.7: **46.9%**  
   - Gemini 3.1 Pro: **44.4%**  
   - Routing implication: for extremely broad, difficult academic/general reasoning questions, GPT-5.5 is not the top choice by this metric.  
   - Source: Dealbreaker benchmark log [UNVERIFIED].

3. **MCP-Atlas: Claude Opus 4.7 beats GPT-5.5.**  
   - GPT-5.5: **75.3%**  
   - Claude Opus 4.7: **77.3%**  
   - Routing implication: for MCP-heavy workflows matching MCP-Atlas, Claude Opus 4.7 has a measured edge.  
   - Source: Dealbreaker benchmark log [UNVERIFIED].

4. **Agentic coding inside OpenAI’s own lineup: GPT-5.3-Codex is the recommended route for Codex-style coding agents.**  
   - OpenAI prompt guidance says Codex models are the recommended agentic coding model, according to the Dealbreaker.  
   - Routing implication: use `gpt-5.3-codex` for IDE agents, `apply_patch`, multi-hour coding sessions, and compaction-heavy code workflows; use GPT-5.5 for mixed reasoning/research/tool tasks.

### Where GPT-5.5 has documented leads

1. **Terminal-Bench 2.0: GPT-5.5 beats GPT-5.4 and Claude Opus 4.7.**  
   - GPT-5.5: **82.7%**  
   - Delta vs GPT-5.4: **+7.6pp**  
   - Delta vs Claude Opus 4.7: **+13.3pp**  
   - Routing implication: for terminal-based, tool-using, command-line agent tasks, GPT-5.5 is a strong default unless the task is specifically IDE/Codex-style.  
   - Source: Dealbreaker benchmark log [UNVERIFIED].

2. **ARC-AGI-2: GPT-5.5 beats GPT-5.4, Claude Opus 4.7, and Gemini 3.1 Pro.**  
   - GPT-5.5: **85.0%**  
   - GPT-5.4: 11.7pp lower, per Dealbreaker  
   - Claude Opus 4.7: **75.8%**  
   - Gemini 3.1 Pro: **77.1%**  
   - Routing implication: for abstraction-heavy puzzle/reasoning tasks matching ARC-AGI-2, GPT-5.5 is preferred among those named peers.  
   - Source: Dealbreaker benchmark log [UNVERIFIED].

3. **BrowseComp: GPT-5.5 Pro beats Claude Opus 4.7.**  
   - GPT-5.5 Pro: **90.1%**  
   - Claude Opus 4.7: **79.3%**  
   - Routing implication: for high-value multi-hop web research where cost and latency are secondary, use GPT-5.5 Pro. For standard web research, use GPT-5.5 or a cheaper model after testing.  
   - Source: Dealbreaker benchmark log [UNVERIFIED].  
   - Note: the Dealbreaker separately mentions “GPT-5.5 Pro” for the 90.1% BrowseComp number; this should not be casually attributed to base GPT-5.5.

4. **GDPval:**  
   - GPT-5.5: **84.9%**, per Dealbreaker’s OpenAI release-notes / MarkTechPost coverage summary [UNVERIFIED].  
   - Peer comparison was not supplied in the prompt; do not infer a peer lead without source.

5. **SWE-bench Verified:**  
   - GPT-5.5: **88.7%**  
   - Claude Opus 4.7: **87.6%**  
   - Caveat: Dealbreaker notes contamination concerns on this split; this should not override GPT-5.5’s loss on SWE-bench Pro.  
   - Source: Dealbreaker benchmark log [UNVERIFIED].

### What can only GPT-5.5 do?

Almost nothing at the capability-category level is exclusive.

- **Not exclusive:** tool calling, structured outputs, long context, vision, web grounding, agent loops, code generation, and JSON schema output are all available in peer systems such as Claude Opus 4.7, Gemini 3.1 Pro, and other OpenAI siblings.
- **Possibly unique product combination:** GPT-5.5’s exact combination of OpenAI Responses API behavior, `phase` parameter, GPT-5.5-specific prompting style, 1.05M-token context, 128k output cap, and the benchmark profile above is specific to GPT-5.5 [INFERRED].
- **No monopoly claim:** There is no defensible claim that only GPT-5.5 can do reasoning, code, tools, web, or structured output.

### Same-sibling routing

#### GPT-5.5 vs GPT-5.4

Use **GPT-5.4** when:

- The task is bounded and structured.
- The organization already has GPT-5.4 prompts built around process-heavy contracts.
- Cost matters more than the measured benchmark improvements.
- Outputs are short and deterministic.

Use **GPT-5.5** when:

- The task is open-ended, agentic, long-horizon, or requires better abstraction.
- Terminal-Bench/BrowseComp/ARC-AGI-2-like performance matters.
- Prompt migration toward shorter, outcome-first instructions is acceptable.
- The ~40% output-token reduction offsets part of the 2× sticker price.

#### GPT-5.5 vs GPT-5.5 Pro

Use **GPT-5.5 Pro** when:

- The task is high-value multi-hop research, hard novel reasoning, or BrowseComp-like.
- Cost/latency are acceptable.
- A failed answer is materially more expensive than the 6× model price.

Use **GPT-5.5 base** when:

- Standard agent loops are sufficient.
- Terminal-Bench-like performance is the target.
- Cost/latency matter.

#### GPT-5.5 vs GPT-5.3-Codex

Use **GPT-5.3-Codex** when:

- The task is IDE-style coding.
- The workflow uses `apply_patch`.
- The agent will run for many steps or hours.
- Code compaction and persistence are central.

Use **GPT-5.5** when:

- The task mixes research, planning, web, code, documents, and tools.
- The coding component is only one part of a broader professional workflow.

#### GPT-5.5 vs GPT-5.4-mini / GPT-5.4-nano / GPT-5 mini / GPT-5 nano

Use **mini/nano** siblings when:

- There are many calls per session.
- The task is extraction, classification, routing, labeling, or short summarization.
- Output quality requirements are bounded and validation is available.
- Latency and cost dominate.

Use **GPT-5.5** when:

- A bad answer is costly.
- Long-context synthesis is needed.
- Tool planning or multi-step reasoning matters.

---

## 6. Known limitations + failure modes

### Refusal patterns

- GPT-5.5 follows OpenAI safety policies and may refuse or over-refuse on:
  - cyber content that resembles exploitation,
  - dual-use chemistry/biology,
  - weapons,
  - self-harm,
  - medical/legal/financial advice when framed as definitive professional instruction,
  - identity or credential-abuse workflows.
- Likely over-refusal pattern: benign security education, reverse-engineering, malware-analysis, or red-team work may be blocked if the prompt lacks authorization/context [INFERRED FROM OPENAI SAFETY BEHAVIOR].

### Degradation patterns

- **Long context:** may miss single facts buried in large inputs; recency and repetition bias remain.
- **Code-heavy tasks:** may make plausible but incorrect edits if tests are absent; may overgeneralize from nearby code.
- **Math/formal reasoning:** can still produce invalid proof steps or arithmetic errors without verification.
- **Tool loops:** can persist too long on an incorrect plan if the environment returns ambiguous results.
- **Web tasks:** can over-trust low-quality search results unless instructed to prioritize primary sources.
- **Structured output:** may satisfy JSON syntax while failing semantic constraints.

### Latency/timeout failure modes

- Large prompts, large output caps, high reasoning settings, and tool-heavy loops can cause high latency or timeouts.
- Batch jobs reduce cost but are inappropriate for interactive workflows.
- GPT-5.5 Pro should be reserved for latency-tolerant high-value work [INFERRED].

### Bugs or quirks documented in the wild

- The prompt’s Dealbreaker log does not provide named public bug reports beyond routing/prompting quirks.
- Documented/prompt-guidance quirks from the Dealbreaker:
  - GPT-5.5 prefers shorter, outcome-first prompts.
  - GPT-5.4-style heavy XML/process contracts may be suboptimal for GPT-5.5.
  - Personality and verbosity controls matter.
  - `phase` should be used carefully to separate intermediate updates from final answers.
- Additional public bugs: [UNKNOWN — would need web search over issue trackers/forums].

---

## 7. Ideal tasks + avoid-when

### Top 5 task types where GPT-5.5 should be the primary choice

1. **Terminal/tool-heavy agent tasks**  
   - Why: Terminal-Bench 2.0 **82.7%**, ahead of GPT-5.4 and Claude Opus 4.7 per Dealbreaker.  
   - Example: shell-based debugging, infra diagnosis, CI repair.

2. **Large-context professional synthesis**  
   - Why: cited **1.05M-token** context and **128k** output cap.  
   - Example: analyze a large litigation record, diligence room, or codebase.

3. **Mixed reasoning + tools + documents + code**  
   - Why: GPT-5.5 is better suited than Codex-only routing when the task is not purely coding.  
   - Example: research a regulation, inspect internal docs, generate implementation tasks, and draft code snippets.

4. **Abstraction-heavy reasoning tasks similar to ARC-AGI-2**  
   - Why: ARC-AGI-2 **85.0%**, ahead of GPT-5.4, Claude Opus 4.7, and Gemini 3.1 Pro per Dealbreaker.  
   - Example: novel puzzle-like transformations, symbolic abstraction, rule induction.

5. **High-value web research when paired with search tools**  
   - Why: GPT-5.5 Pro BrowseComp **90.1%**; base GPT-5.5 likely useful for lower-cost research, but Pro is the cited benchmark leader.  
   - Example: multi-hop due diligence with citations to primary sources.

### Top 5 task types where GPT-5.5 should not be used

1. **Hard SWE-bench Pro-like software engineering**  
   - Prefer: Claude Opus 4.7 or GPT-5.3-Codex.  
   - Reason: GPT-5.5 **58.6%** vs Claude Opus 4.7 **64.3%** on SWE-bench Pro.

2. **IDE-style autonomous coding agents**  
   - Prefer: `gpt-5.3-codex`.  
   - Reason: OpenAI guidance says Codex models are the recommended agentic coding route, per Dealbreaker.

3. **Realtime voice, transcription, translation, or audio-native assistants**  
   - Prefer: `gpt-realtime-2`, `gpt-audio-1.5`, `gpt-realtime-translate`, or `gpt-realtime-whisper`.  
   - Reason: GPT-5.5 is not the dedicated audio/realtime model.

4. **Very high-volume bounded extraction/classification**  
   - Prefer: `gpt-5.4-nano`, `gpt-5-nano`, or mini-tier siblings.  
   - Reason: GPT-5.5’s price is unjustified for simple validated tasks.

5. **Broad hardest-knowledge academic exams / HLE-like tasks**  
   - Prefer: Claude Opus 4.7 or Gemini 3.1 Pro.  
   - Reason: GPT-5.5 **41.4%** vs Claude Opus 4.7 **46.9%** and Gemini 3.1 Pro **44.4%** on Humanity’s Last Exam.

---

## 8. Lifecycle

- **Release date:** April 23–24, 2026, per Dealbreaker summary [UNVERIFIED in this chat].
- **Predecessor:** GPT-5.4.
- **Successor:** No successor is identified in the prompt. [UNKNOWN — would need current OpenAI model list after 2026-05-17].
- **Current status:** Active in the OpenAI frontier-model lineup per Dealbreaker-cited `_official-models-overview.md`.
- **Deprecation risk:** No specific GPT-5.5 deprecation date is provided. However, OpenAI’s fast model turnover and the Dealbreaker’s listed deprecations indicate non-trivial lifecycle risk for production systems that hard-code model IDs.

### Deprecated/displaced models mentioned by the Dealbreaker

Per the Dealbreaker’s cited `_official-models-overview.md`, the following are marked deprecated [UNVERIFIED exact current status in this chat]:

- `o3`
- `o4-mini`
- GPT-5.1 family
- GPT-5.2-Codex
- GPT-5-Codex
- GPT-5.1-Codex
- GPT-5.1-Codex-Max
- GPT-5.1 Codex mini
- `codex-mini-latest`
- `computer-use-preview`
- GPT-4.5 Preview
- `o3-mini`
- GPT-4o Search Preview
- ChatGPT-4o
- GPT-4 Turbo
- DALL·E 2 / DALL·E 3
- Sora 2
- Sora 2 Pro

### Lifecycle routing implication

- Do not build new workflows on deprecated models if GPT-5.5, GPT-5.4, GPT-5.3-Codex, mini/nano, realtime/audio, or image siblings cover the task.
- Prefer stable abstraction layers in application code so GPT-5.5 can be swapped for GPT-5.5 Pro, GPT-5.4, GPT-5.3-Codex, or future successors without prompt rewrites.
- Keep separate prompt templates for GPT-5.4 and GPT-5.5; the prompt-guidance difference is material.