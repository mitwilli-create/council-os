## 1. Identity

- **What GPT-5.4 is:** GPT-5.4 is, at minimum, an OpenAI language model identifier asserted by the calling environment in the system message. Beyond that, GPT-5.4’s public product definition is **not established from the materials available here**. There is no reliable basis in this response to claim a full launch note, model card, or benchmark card specifically for “GPT-5.4.” **[UNVERIFIED]**
- **Builder:** OpenAI. (https://openai.com/)
- **Release date:** **[UNVERIFIED]**. No primary-source release note specific to GPT-5.4 is available in this response.
- **Predecessor:** Presumably an earlier GPT-5.x or GPT-4.x family model, but that is **[INFERRED]** from naming only.
- **Official API model ID(s):** The only model ID directly evidenced here is `gpt-5.4` from the system message. Whether that is a public API ID, internal alias, snapshot, or router label is **[UNVERIFIED]**.
- **Provider positioning:** OpenAI’s general positioning for current flagship models emphasizes reasoning, tool use, multimodality, and agent support via the API platform and Responses API, but any claim that this is the stated positioning for **GPT-5.4 specifically** is **[INFERRED FROM PROVIDER PLATFORM DOCS]** (https://platform.openai.com/docs, https://platform.openai.com/docs/guides/reasoning, https://platform.openai.com/docs/guides/tools).

## 2. Core capabilities

### Reasoning
- **What it can do:** GPT-5.4 can likely handle multi-step analysis, planning, synthesis, and instruction following at a level expected of OpenAI’s contemporary general-purpose models. **[INFERRED FROM MODEL FAMILY + PLATFORM DOCS]**
- **Hard limits:** No verified public documentation here confirms whether GPT-5.4 exposes explicit “reasoning effort,” “thinking level,” or visible chain-of-thought controls. OpenAI generally does **not** expose raw hidden chain-of-thought; users typically get answers, not internal reasoning traces. **[INFERRED FROM PROVIDER PRACTICE]**
- **Concrete example task:** Drafting a migration plan from a monolith to services with phased risks, rollback points, and dependency mapping. **[INFERRED]**
- **Source:** OpenAI reasoning/tooling docs for the platform in general, not GPT-5.4 specifically (https://platform.openai.com/docs/guides/reasoning) **[INFERRED]**.

### Tool use
- **What it can do:** If GPT-5.4 is available through the modern OpenAI API stack, it likely supports tool/function calling and multi-step tool orchestration through the Responses API. **[INFERRED FROM PROVIDER DOCS]**
- **Hard limits:** Whether GPT-5.4 supports **parallel** tool calls, native MCP client behavior, or durable autonomous loops is **[UNVERIFIED]** model-by-model. Tool use quality also depends heavily on the host application, not just the model.
- **Concrete example task:** Taking a natural-language request like “find the customer’s last 3 invoices and summarize anomalies” and routing it through internal billing/search functions. **[INFERRED]**
- **Source:** OpenAI tools/function-calling docs (https://platform.openai.com/docs/guides/function-calling, https://platform.openai.com/docs/guides/tools).

### Web grounding
- **What it can do:** OpenAI offers web/search-style grounding in some products and API patterns, but whether GPT-5.4 has **built-in** web search as a first-class native capability is **[UNVERIFIED]**.
- **Hard limits:** Without explicit retrieval/search tooling, GPT-5.4 should be assumed to rely on its parametric knowledge and provided context. Citation reliability is weak unless the system supplies sources or a retrieval tool.
- **Concrete example task:** Summarizing a supplied set of URLs or retrieved documents with inline source references. **[INFERRED]**
- **Source:** General OpenAI platform docs; GPT-5.4-specific search behavior **[UNKNOWN — would need provider docs or direct API test]**.

### Vision
- **What it can do:** OpenAI supports image input on multimodal models in the API. GPT-5.4 likely accepts images if it is a multimodal member of that stack. **[INFERRED FROM PROVIDER DOCS]**
- **Hard limits:** Exact max resolution, image count limits, chart-reading reliability, and OCR error rates for GPT-5.4 are **[UNVERIFIED]**.
- **Concrete example task:** Extracting fields from a photographed receipt or describing the layout of a dashboard screenshot. **[INFERRED]**
- **Source:** OpenAI vision guides (https://platform.openai.com/docs/guides/vision).

### Audio / multimodal
- **What it can do:** OpenAI supports audio and realtime/live interactions in its platform. GPT-5.4 may participate in those workflows if mapped to a realtime-capable endpoint, but that is **[UNVERIFIED]**.
- **Hard limits:** Native speech in/out, streaming voice latency, and video understanding support are not established for GPT-5.4 specifically here.
- **Concrete example task:** Voice assistant turn-taking with transcription + spoken response, if paired with OpenAI’s realtime/audio stack. **[INFERRED]**
- **Source:** OpenAI audio/realtime docs (https://platform.openai.com/docs/guides/realtime, https://platform.openai.com/docs/guides/audio).

### Code generation
- **What it can do:** GPT-5.4 likely writes, explains, edits, and translates code across common languages. That is standard for OpenAI frontier models. **[INFERRED]**
- **Hard limits:** No verified GPT-5.4 score is available here for SWE-bench, HumanEval, MBPP, LiveCodeBench, or similar. Any claim of superiority on repository-scale software tasks would be speculation.
- **Concrete example task:** Writing a typed REST endpoint with tests in Python/FastAPI or TypeScript/Express. **[INFERRED]**
- **Source:** No GPT-5.4-specific benchmark card available here. **[UNKNOWN — would need benchmark]**

### Long context
- **What it can do:** GPT-5.4 can clearly process at least the fairly long prompt in this conversation; beyond that, its exact context window is **[UNVERIFIED]**.
- **Hard limits:** No verified token window or output cap is available here. In-context recall quality at long lengths generally degrades on all current models; GPT-5.4 should not be assumed exempt. **[INFERRED]**
- **Concrete example task:** Comparing several long policy documents for contradictions, if they fit within the actual context window. **[INFERRED]**
- **Source:** No GPT-5.4-specific context spec available here. **[UNKNOWN — would need docs]**

### Agentic / computer use
- **What it can do:** OpenAI has documented agentic tool patterns and computer-use style workflows in its platform ecosystem, but whether GPT-5.4 itself has first-party browser/OS control is **[UNVERIFIED]**.
- **Hard limits:** Reliable autonomous operation still typically requires external scaffolding: planner, evaluator, tool budget, retries, and guardrails. GPT-5.4 alone should not be treated as a fully autonomous agent.
- **Concrete example task:** Filing a support case via scripted browser/API tools in a supervised loop. **[INFERRED]**
- **Source:** OpenAI agent/tool docs in general (https://platform.openai.com/docs/guides/tools). GPT-5.4-specific support **[UNKNOWN]**.

### Structured output
- **What it can do:** OpenAI supports structured outputs / JSON-schema-constrained responses in its API. GPT-5.4 likely benefits from that if it is on the current stack. **[INFERRED FROM PROVIDER DOCS]**
- **Hard limits:** Exact schema adherence rate, grammar support, and failure rate under very large nested schemas are **[UNVERIFIED]**.
- **Concrete example task:** Returning a support-triage object with fixed enum fields and validated nested arrays.
- **Source:** OpenAI structured outputs docs (https://platform.openai.com/docs/guides/structured-outputs).

## 3. Operational

- **Pricing per 1M tokens:** **[UNVERIFIED]** for GPT-5.4 specifically. OpenAI pricing is model-specific and may differ across standard, cached, and batch modes; the authoritative source is the pricing page (https://openai.com/api/pricing/).
- **Input / output / cached read-write / batch discount:** **[UNVERIFIED]**.
- **Latency: TTFT / tokens-sec:** **[UNKNOWN — would need provider telemetry or direct benchmarking]**. Latency depends on model tier, load, response length, tool use, and region.
- **Rate limits (RPM, TPM, concurrency):** Account-tier dependent; see limits page/settings rather than assuming a universal number. **[INFERRED FROM PROVIDER PRACTICE]**
- **Prompt caching:** OpenAI supports prompt caching in parts of the platform, but whether GPT-5.4 supports it and with what TTL/write multipliers is **[UNVERIFIED]**.
- **Batch API:** OpenAI offers batch processing in the API platform; whether GPT-5.4 is included and at what discount is **[UNVERIFIED]**.
- **Knowledge cutoff date:** **Unknown.** Any specific cutoff claim for GPT-5.4 would be fabricated here. If GPT-5.4 has web/retrieval tools, “cutoff” matters less operationally, but that does not eliminate hallucination risk. **[INFERRED]**
- **Context window size + output cap:** **[UNVERIFIED]**.

## 4. Integrations

- **First-party connectors:** None can be asserted for GPT-5.4 specifically from available evidence. OpenAI’s platform integrates with its own APIs/SDKs; first-party app connectors comparable to “Vertex” or “Gemini extensions” are **not established here**.
- **Official SDK languages:** OpenAI officially maintains SDKs including Python and JavaScript/TypeScript; other language support may exist via community or additional repos. See platform docs/repos for current status (https://platform.openai.com/docs/libraries, https://github.com/openai).
- **MCP support:** Whether GPT-5.4 is an MCP client/server participant natively is **[UNVERIFIED]**. If a host application bridges MCP tools into OpenAI tool calls, GPT-5.4 can still use them indirectly. **[INFERRED]**
- **Registries / assistants / extensions:** OpenAI has evolved its platform from older Assistants-era abstractions toward newer Responses/tooling flows, but GPT-5.4-specific registry support is **[UNVERIFIED]**.

## 5. Differentiation — what it is worse at first

### Where a peer is the safer choice

1. **Ultra-long-context retrieval:**  
   **Gemini 2.5 Pro** is the safer choice when the job genuinely requires very large context windows, because Google publicly advertises 1M-token-class context on parts of the Gemini line. GPT-5.4’s context window is not established here, so for “read an entire codebase / contract corpus in one shot,” Gemini has the clearer documented spec. (Google model docs would be the relevant source; GPT-5.4 side remains **[UNVERIFIED]**.)

2. **Anthropic-style long-form constitutional writing / careful document editing:**  
   **Claude Opus 4 / 4.1** is often the safer bet when the task is long, nuanced prose transformation over large provided context, because Anthropic has a strong public reputation and many user reports in that niche. For GPT-5.4, claiming superiority here without side-by-side evals would be bluffing. **[UNKNOWN — would need benchmark]**

3. **Open-ended, high-difficulty coding agent tasks:**  
   If the task is repository-scale autonomous debugging, models such as **Claude Opus 4.1**, **o3**, or a specialized coding model may outperform GPT-5.4 depending on the scaffold. GPT-5.4 should not be presumed best on SWE-bench-class work without a benchmark card. **[UNKNOWN — would need benchmark]**

4. **Explicitly documented tool-agent benchmarks:**  
   If a peer publishes stronger results on Tau-bench, SWE-bench Verified, or internal agentic evals and GPT-5.4 does not publish comparable numbers, the peer should get the nod for procurement-grade comparisons. Missing evidence is a weakness.

### What GPT-5.4 is actually best at vs. peers
- **Nothing can be claimed as uniquely best from the evidence available here.** That is the honest answer.
- GPT-5.4 may be a strong general-purpose OpenAI model for mixed reasoning + writing + tool calling inside OpenAI’s stack, but “best” against specific peers such as **Claude Opus 4.1**, **Gemini 2.5 Pro**, **Grok 4**, **DeepSeek-R1**, or **o3** would require benchmark evidence that is not available in this response. **[UNKNOWN — would need benchmark]**

### What only GPT-5.4 can do
- **Probably nothing exclusive in capability class.**  
  Tool use, code generation, image understanding, structured outputs, and agent scaffolding are all offered by peer frontier models too.
- The only candidate exclusive feature would be **tight fit with OpenAI’s own latest API semantics, safety tuning, and routing ecosystem**, but that is an ecosystem advantage, not a capability that “only GPT-5.4” can perform. **[INFERRED]**

### Where GPT-5.4 may be weaker than specific peers
- **Weaker than Gemini 2.5 Pro** for workloads that require publicly documented million-token-scale context, unless GPT-5.4 publishes an equivalent context spec. **[DOCUMENTATION GAP / INFERRED]**
- **Potentially weaker than Claude Opus 4.1** on long-form editing and codebase-level refactoring if user reports and public evals continue to favor Claude there. **[UNKNOWN — would need benchmark]**
- **Potentially weaker than o3** on hard tool-heavy reasoning or deliberate multi-step planning if o3’s published reasoning evals remain stronger. **[UNKNOWN — would need benchmark]**
- **Potentially weaker than specialized realtime/audio models** for low-latency voice interaction if GPT-5.4 is not itself a realtime-native endpoint. **[INFERRED]**

## 6. Known limitations + failure modes

- **Over-refusal / safety conservatism:** Like other OpenAI models, GPT-5.4 likely refuses or hedges on disallowed or borderline-risk content. It may also over-refuse ambiguous benign requests in sensitive domains such as bio, cyber, self-harm-adjacent language, legal, or medical advice. **[INFERRED FROM PROVIDER SAFETY PRACTICE]**
- **Citation hallucination risk:** If asked for sources without retrieval, GPT-5.4 may produce plausible-looking but incorrect citations. This is a general LLM failure mode and should be assumed unless citations are tool-grounded. **[INFERRED]**
- **Long-context degradation:** Even if the context window is large, recall precision, instruction persistence, and source attribution typically degrade with prompt length. GPT-5.4 should not be assumed immune. **[INFERRED]**
- **Code-confidence mismatch:** It may write code that looks clean and idiomatic while containing subtle dependency, version, or edge-case errors.
- **Math / formal reasoning brittleness:** Without external verification or tool use, it may produce confident but wrong derivations.
- **Latency spikes with tool chains:** Multi-tool or long-output workflows can stall, time out, or produce partial outputs depending on the host system. **[INFERRED]**
- **Spec opacity as an operational failure mode:** A major practical limitation is the lack of a clearly cited public spec sheet in this profile. Unknown context length, unknown rates, unknown pricing, and unknown benchmark scores make deployment planning harder than with better-documented peers.

## 7. Ideal tasks + avoid-when

### Top 5 task types where GPT-5.4 should be the primary choice
These are conditional, not bragging claims.

1. **General-purpose assistant work inside OpenAI’s API stack**  
   Especially when the team already uses OpenAI tooling, SDKs, and safety defaults. **[INFERRED]**

2. **Structured-output workflows**  
   Extracting fields, classification, routing, and schema-constrained responses, assuming GPT-5.4 supports OpenAI structured outputs as expected. (https://platform.openai.com/docs/guides/structured-outputs)

3. **Mixed text + image tasks**  
   OCR-adjacent extraction, screenshot explanation, and document/image QA, if multimodal support is enabled. (https://platform.openai.com/docs/guides/vision) **[INFERRED FOR GPT-5.4]**

4. **Tool-mediated enterprise assistants**  
   CRM lookup, billing lookup, knowledge-base retrieval, workflow orchestration. The value is less “raw genius” and more compliance with the host system’s tools.

5. **Drafting and transformation tasks**  
   Summaries, rewrites, policy comparisons, support responses, internal docs, and product copy—provided a human reviews high-stakes outputs.

### Top 5 task types where GPT-5.4 should NOT be used
1. **Need guaranteed million-token-class context today**  
   Use **Gemini 2.5 Pro** if the published context spec is the deciding requirement.

2. **Repository-scale coding agent with benchmark-backed preference for a peer**  
   Use **Claude Opus 4.1** or another coding-specialist model where internal evals show higher pass rates.

3. **Fully autonomous computer-use without guardrails**  
   Use a purpose-built agent stack, not GPT-5.4 alone.

4. **High-stakes factual citation without retrieval**  
   Use a retrieval-grounded setup or a search-native pipeline. Do not rely on parametric memory.

5. **Hard quantitative reasoning without verification**  
   Use external solvers, code execution, or a model your own evals show to be stronger on math/reasoning, possibly **o3** if your tests confirm it.

## 8. Lifecycle

- **Release date of this version:** **[UNVERIFIED]**
- **Predecessor:** **[UNVERIFIED]**; likely a prior GPT-family release by naming convention only. **[INFERRED]**
- **Retirement date of predecessor:** **[UNVERIFIED]**
- **Successor:** **[UNVERIFIED]**
- **Deprecation risk signals:**
  - If `gpt-5.4` is only an alias/router name rather than a pinned snapshot, it may change behavior over time without a new public model ID. **[INFERRED]**
  - If OpenAI is emphasizing Responses API and newer tool abstractions, older compatibility surfaces may be deprioritized. **[INFERRED FROM PLATFORM EVOLUTION]**
  - Lack of a public model card / benchmark card is itself a risk signal for teams that need stable procurement documentation.

---

## Bottom line

GPT-5.4 may be a current OpenAI model label, but on the evidence available here, **its public spec is too opaque to make strong “best model” claims**. The honest profile is not “frontier, industry-leading, uniquely strong.” The honest profile is:

- OpenAI-built: **yes**
- Likely capable across reasoning, coding, tools, multimodal input: **yes, by inference**
- Publicly documented release details, pricing, limits, benchmarks, and unique advantages: **not established here**
- Safe procurement posture: **treat GPT-5.4 as a potentially strong general-purpose OpenAI model, but require direct evals before routing high-stakes or cost-sensitive workloads to it**

If needed, GPT-5.4 should be compared directly against **Claude Opus 4.1**, **Gemini 2.5 Pro**, **o3**, and any in-house incumbent on:
- long-context retrieval
- repo-scale coding
- tool success rate
- schema adherence
- latency/cost
- refusal/over-refusal rate

Anything stronger than that would be marketing, not profiling.