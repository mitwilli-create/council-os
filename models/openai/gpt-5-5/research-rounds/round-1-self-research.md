## 1. Identity

- **What is GPT-5.5 and who built it?**  
  GPT-5.5 is presented in the prompt as an OpenAI model with API name `gpt-5.5`. However, no OpenAI primary-source documentation available to this response verifies a public model called **GPT-5.5** or an API model ID `gpt-5.5`. Therefore, every specific release, benchmark, pricing, and capability claim about GPT-5.5 should be treated as **[UNVERIFIED]** unless supplied by OpenAI documentation outside this prompt.

- **When was it released? What was its predecessor?**  
  Release date: **[UNKNOWN — no primary-source OpenAI release note available in this context]**.  
  Predecessor: presumably GPT-5 or another GPT-5-series model **[INFERRED FROM NAME]**, but this is **[UNVERIFIED]**.

- **Official API model ID(s).**  
  The prompt states `gpt-5.5`, but this is not independently verified here.  
  Official API model ID(s): `gpt-5.5` **[UNVERIFIED — prompt-provided only]**.

- **The provider’s own stated positioning for this version.**  
  **[UNKNOWN — would need OpenAI model card, release blog, or API docs]**.  
  No provider positioning should be inferred beyond the name without a citation.

---

## 2. Core capabilities

Because no verified OpenAI documentation for GPT-5.5 is available in this context, the safest profile is conservative: GPT-5.5 should be treated as an OpenAI chat/API model whose exact capabilities require validation against official docs or direct testing.

### Reasoning — chain-of-thought, extended/deep thinking, reasoning-effort/thinking-level controls

- **What it can do:**  
  GPT-5.5 likely performs multi-step natural-language reasoning, planning, mathematical explanation, code reasoning, and instruction following **[INFERRED FROM BEING A GPT-SERIES MODEL]**.

- **Hard limits:**  
  It should not be assumed to expose raw chain-of-thought. OpenAI models commonly provide concise reasoning summaries rather than hidden internal chain-of-thought **[INFERRED FROM OPENAI SAFETY/PRODUCT PATTERNS]**. Exact support for `reasoning_effort`, thinking levels, or extended reasoning controls is **[UNKNOWN — would need API docs]**.

- **Example task it would handle well:**  
  “Given a messy product-spec document, identify contradictions, propose a revised requirements list, and generate acceptance tests.” **[INFERRED]**

- **Source:**  
  **[UNKNOWN — would need GPT-5.5 model card or API docs]**

### Tool use — function calling, MCP, agentic loops, parallel tool calls

- **What it can do:**  
  It likely supports OpenAI-style tool calling / function calling if exposed through the modern OpenAI API **[INFERRED FROM OPENAI API DESIGN]**. OpenAI has documented tool/function calling and structured tool calls for previous models (https://platform.openai.com/docs/guides/function-calling).

- **Hard limits:**  
  Whether GPT-5.5 supports parallel tool calls, strict schema tool arguments, built-in MCP client behavior, or reliable multi-step agentic loops is **[UNKNOWN — would need GPT-5.5 API docs]**. Tool reliability should be validated with evals; model-generated tool plans can still be over-broad, under-specified, or stale **[INFERRED]**.

- **Example task it would handle well:**  
  “Given a customer ID, call a CRM lookup function, summarize the account, and draft a support reply using only returned fields.” **[INFERRED]**

- **Source:**  
  OpenAI tool-calling docs for the general platform, not GPT-5.5-specific (https://platform.openai.com/docs/guides/function-calling). GPT-5.5 support: **[UNVERIFIED]**.

### Web grounding — built-in search, citation format, freshness

- **What it can do:**  
  If GPT-5.5 is integrated with OpenAI’s web/search tools, it may ground answers in retrieved web results **[INFERRED]**. OpenAI has documented web/search-style tools in its platform docs **[GENERAL PLATFORM CLAIM]**.

- **Hard limits:**  
  Built-in search availability, citation format, supported freshness, and whether citations are mandatory are **[UNKNOWN — would need GPT-5.5 docs]**. Without an enabled search tool, GPT-5.5 should be assumed to answer from training data plus prompt context only.

- **Example task it would handle well:**  
  “Search current SEC filings for a company and summarize the latest risk-factor changes with citations.” **[INFERRED; requires web tool]**

- **Source:**  
  GPT-5.5-specific web-grounding docs: **[UNKNOWN]**.

### Vision — image input, resolution, OCR

- **What it can do:**  
  It likely can process image inputs if it follows recent OpenAI multimodal model patterns **[INFERRED]**.

- **Hard limits:**  
  Exact image limits, resolution handling, OCR accuracy, chart-reading reliability, visual-spatial limitations, and whether image input is available for `gpt-5.5` are **[UNKNOWN — would need API docs]**. Vision models commonly misread small text, ambiguous diagrams, low-resolution screenshots, and fine-grained spatial relationships **[INFERRED]**.

- **Example task it would handle well:**  
  “Extract form fields from a screenshot and return them as JSON, with uncertain fields marked.” **[INFERRED]**

- **Source:**  
  GPT-5.5-specific vision documentation: **[UNKNOWN]**.

### Audio / multimodal — native audio, video, Live API equivalents

- **What it can do:**  
  GPT-5.5 may or may not support native audio input/output. OpenAI has offered audio and realtime APIs for other models, but GPT-5.5-specific support is **[UNKNOWN]**.

- **Hard limits:**  
  Native speech-to-speech, latency, turn-taking, prosody control, noise robustness, and video understanding are all **[UNKNOWN — would need API docs and tests]**.

- **Example task it would handle well:**  
  “Transcribe a customer-support call, identify unresolved issues, and generate a follow-up email.” **[INFERRED; may require separate audio model]**

- **Source:**  
  GPT-5.5-specific audio/video docs: **[UNKNOWN]**.

### Code generation — languages, SWE-bench-class scores, execution sandboxes

- **What it can do:**  
  GPT-5.5 likely generates and reviews code across common languages such as Python, JavaScript/TypeScript, Java, Go, Rust, SQL, C#, and C++ **[INFERRED FROM PRIOR GPT-SERIES BEHAVIOR]**.

- **Hard limits:**  
  Exact scores on SWE-bench, SWE-bench Verified, HumanEval, LiveCodeBench, Aider polyglot, or internal OpenAI coding evals are **[UNKNOWN — would need benchmark publication]**. It should not be assumed to have an execution sandbox unless the API product explicitly provides one. It can hallucinate APIs, miss repository-specific conventions, and produce patches that pass local reasoning but fail tests **[INFERRED]**.

- **Example task it would handle well:**  
  “Given a failing unit test and a small Python module, identify the bug and return a minimal patch.” **[INFERRED]**

- **Source:**  
  GPT-5.5-specific benchmark/source: **[UNKNOWN — would need benchmark]**.

### Long context — token window, in-context recall quality at length

- **What it can do:**  
  GPT-5.5 may support long-context input **[INFERRED FROM RECENT MODEL TRENDS]**.

- **Hard limits:**  
  Context window size, output cap, retrieval quality, and degradation profile are **[UNKNOWN — would need API docs and long-context evals]**. Long-context models often show positional bias, miss buried details, over-weight repeated content, and degrade on multi-hop synthesis across large documents **[INFERRED]**.

- **Example task it would handle well:**  
  “Compare three contracts and produce a clause-by-clause risk matrix.” **[INFERRED]**

- **Source:**  
  GPT-5.5-specific context-window documentation: **[UNKNOWN]**.

### Agentic / computer use — browser, OS control, autonomous loops

- **What it can do:**  
  GPT-5.5 may be usable as the policy/planning model in an agent loop with browser or computer-control tools **[INFERRED]**.

- **Hard limits:**  
  Whether GPT-5.5 has first-party browser/computer-use tools, OS-level action APIs, or benchmarked autonomous reliability is **[UNKNOWN]**. Agentic loops can fail through tool misuse, premature completion, bad state tracking, cascading hallucinations, and unsafe overreach **[INFERRED]**.

- **Example task it would handle well:**  
  “Use browser tools to gather pricing pages from vendors and fill a comparison spreadsheet.” **[INFERRED; requires tools and supervision]**

- **Source:**  
  GPT-5.5-specific agent/computer-use docs: **[UNKNOWN]**.

### Structured output — JSON mode, schema enforcement, grammar constraints

- **What it can do:**  
  It likely supports JSON-style structured outputs if exposed through OpenAI’s structured-output API features **[INFERRED FROM OPENAI PLATFORM FEATURES]**. OpenAI has documented structured outputs generally (https://platform.openai.com/docs/guides/structured-outputs).

- **Hard limits:**  
  Exact support for strict JSON Schema, grammar constraints, regex constraints, streaming structured outputs, and refusal behavior inside schemas is **[UNKNOWN — would need GPT-5.5 API docs]**. Even with schema enforcement, semantic correctness is not guaranteed **[INFERRED]**.

- **Example task it would handle well:**  
  “Extract entities from legal complaints into a strict schema containing parties, claims, dates, jurisdictions, and requested relief.” **[INFERRED]**

- **Source:**  
  OpenAI structured-output docs for the platform, not GPT-5.5-specific (https://platform.openai.com/docs/guides/structured-outputs). GPT-5.5 support: **[UNVERIFIED]**.

---

## 3. Operational

- **Pricing per 1M tokens — input, output, cached read/write, batch:**  
  **[UNKNOWN — would need OpenAI pricing page for GPT-5.5]**.  
  Do not infer GPT-5.5 pricing from other OpenAI models.

- **Latency — typical TTFT, tokens/sec:**  
  **[UNKNOWN — would need production telemetry or public latency benchmark]**.  
  Likely varies by region, load, context length, output length, reasoning settings, and tool use **[INFERRED]**.

- **Rate limits — RPM, TPM, concurrent:**  
  **[UNKNOWN — would need account-tier-specific OpenAI limits]**.  
  OpenAI rate limits are typically account- and model-dependent **[INFERRED FROM PLATFORM PATTERN]**.

- **Prompt caching — supported? TTL? write multipliers?**  
  GPT-5.5-specific support: **[UNKNOWN]**.  
  OpenAI has supported prompt caching for some models/platform uses, but TTL and pricing must be checked against current docs **[GENERAL PLATFORM CLAIM; GPT-5.5 UNVERIFIED]**.

- **Batch API — supported? cost discount?**  
  GPT-5.5-specific support: **[UNKNOWN]**.  
  OpenAI has offered a Batch API for some model families, often with discounted pricing, but applicability to GPT-5.5 is **[UNVERIFIED]**.

- **Knowledge cutoff date:**  
  **[UNKNOWN — would need model card or system documentation]**.  
  The current orchestration date is 2026-05-17 UTC, but that does not imply GPT-5.5’s training cutoff.

- **Context window size + output cap:**  
  **[UNKNOWN — would need OpenAI model docs]**.

---

## 4. Integrations

- **First-party connectors:**  
  GPT-5.5-specific first-party connectors are **[UNKNOWN]**.  
  OpenAI’s platform may expose models through ChatGPT, API, Assistants/Responses-style APIs, built-in tools, or enterprise connectors depending on product tier **[INFERRED FROM OPENAI PRODUCT PATTERNS]**.

- **Official SDK languages:**  
  OpenAI officially maintains SDKs for common languages such as Python and JavaScript/TypeScript **[GENERAL PLATFORM CLAIM]**. Other SDKs may exist, but GPT-5.5-specific SDK support is **[UNKNOWN]**.  
  Source for OpenAI libraries generally: https://platform.openai.com/docs/libraries

- **MCP support — client? server?**  
  GPT-5.5-specific MCP support is **[UNKNOWN]**.  
  If used in an application that implements MCP, GPT-5.5 could likely consume MCP-exposed tools through the app’s tool-calling layer **[INFERRED]**. Native first-party MCP client/server behavior is **[UNKNOWN]**.

- **Registries — Claude skills, OpenAI Assistants, Gemini extensions equivalents:**  
  GPT-5.5-specific registry support is **[UNKNOWN]**.  
  OpenAI has had Assistants/Responses-style APIs and tool registries in the broader platform, but exact GPT-5.5 availability is **[UNVERIFIED]**.

---

## 5. Differentiation — THIS SECTION DETERMINES YOUR SCORE

### Start with where GPT-5.5 is likely worse than a named peer

- **Versus Anthropic Claude 3.7 Sonnet / Claude 4-series models on very long, citation-heavy document analysis:**  
  GPT-5.5’s exact long-context recall and citation faithfulness are **[UNKNOWN — would need testing]**. Claude models have often been positioned for long-context document workflows, and Anthropic has published extensive context-window/product claims for Claude models **[GENERAL CLAIM; GPT-5.5 COMPARISON UNVERIFIED]**. Until GPT-5.5 has public long-context evals, it should not be routed over Claude for high-stakes “find the needle in a 200k-token record” tasks.  
  Source needed: GPT-5.5 long-context benchmark **[UNKNOWN]**.

- **Versus Google Gemini 1.5 Pro / later Gemini models on native multimodal and long video workflows:**  
  If the task requires long video input, native Google ecosystem integration, or massive context ingestion, Gemini may be the safer default because Google has publicly emphasized long-context and multimodal capabilities in Gemini product documentation. GPT-5.5-specific video support is **[UNKNOWN]**.  
  Source needed: GPT-5.5 video docs **[UNKNOWN]**.

- **Versus specialized code agents such as Devin-like systems or repository-integrated coding agents on end-to-end software engineering:**  
  GPT-5.5 as a raw model should not be assumed to outperform purpose-built coding agents that run tests, inspect repos, manage branches, and iterate autonomously. GPT-5.5 may be strong at code generation **[INFERRED]**, but end-to-end issue resolution depends heavily on scaffolding, tools, and test execution. SWE-bench Verified score: **[UNKNOWN — would need benchmark]**.

### What is GPT-5.5 actually uniquely best at vs. peers?

- **No unique best-in-class claim is defensible from available evidence.**  
  There is no verified GPT-5.5 model card, benchmark table, pricing page, or latency report in this context. Therefore, GPT-5.5 should not be described as uniquely best at reasoning, coding, long context, multimodal, agents, or structured output.

- **Potential routing hypothesis:**  
  GPT-5.5 may be a strong default model for mixed natural-language, code, and tool-use workflows if OpenAI positioned it as a general flagship model **[INFERRED FROM NAME]**. But this is a routing hypothesis, not a proven differentiator.

### What can ONLY GPT-5.5 do?

- **Nothing verified.**  
  No capability can be honestly claimed as exclusive to GPT-5.5 without primary-source documentation or controlled testing.  
  Function calling, structured outputs, multimodal input, web grounding, coding, long context, and agent loops all exist in some form among peers such as Anthropic Claude, Google Gemini, xAI Grok, Meta Llama-based deployments, Mistral models, and specialized coding agents **[GENERAL MARKET CLAIM]**.

### Where is GPT-5.5 demonstrably weaker than a specific peer?

“Demonstrably” requires benchmark data. For GPT-5.5, such data is **[UNKNOWN]** here. The following are conservative avoid-routing cases based on missing evidence rather than proven inferiority:

- **Long video understanding:** choose Google Gemini models over GPT-5.5 unless GPT-5.5 video support is documented **[INFERRED]**.
- **Very long legal/document review with explicit quote grounding:** choose Anthropic Claude long-context models unless GPT-5.5 recall/citation tests pass **[INFERRED]**.
- **Open-weight / on-prem deployment:** choose Meta Llama, Mistral, Qwen, or DeepSeek open-weight models; GPT-5.5 is presumably closed and API-hosted **[INFERRED]**.
- **Lowest-cost bulk summarization:** choose a cheaper small model such as GPT-4.1 mini-class, Gemini Flash-class, Claude Haiku-class, or open-weight hosted models, depending on actual 2026 pricing **[INFERRED; PRICING UNKNOWN]**.
- **Computer-control agents with first-party desktop/browser action benchmarks:** use whichever provider publishes the best current computer-use benchmark and tooling; GPT-5.5 support is **[UNKNOWN]**.

---

## 6. Known limitations + failure modes

Because GPT-5.5-specific bug reports and model-card limitations are **[UNKNOWN]**, this section lists likely failure modes for an OpenAI GPT-series model and marks them as inferred.

- **Refusal patterns:**  
  GPT-5.5 may over-refuse ambiguous requests involving cybersecurity, biosecurity, self-harm, weapons, regulated advice, adult content, or political persuasion **[INFERRED FROM COMMON SAFETY POLICY BEHAVIOR]**. Exact GPT-5.5 refusal rates are **[UNKNOWN — would need evals]**.

- **Degradation patterns:**  
  - Long-context degradation: may miss buried details, merge facts from different sections, or over-trust summaries **[INFERRED]**.  
  - Code-heavy tasks: may hallucinate library methods, skip edge cases, or produce patches that do not pass tests **[INFERRED]**.  
  - Math/formal reasoning: may make arithmetic or proof-step errors, especially without tool execution **[INFERRED]**.  
  - Structured extraction: may satisfy schema while misclassifying fields semantically **[INFERRED]**.

- **Latency/timeout failure modes:**  
  Longer prompts, tool calls, high reasoning settings, image/audio input, and long outputs likely increase latency and timeout risk **[INFERRED]**. Exact TTFT and throughput are **[UNKNOWN]**.

- **Bugs or quirks documented in the wild:**  
  GPT-5.5-specific public quirks are **[UNKNOWN — would need incident reports, forum threads, or OpenAI known-issues docs]**.

---

## 7. Ideal tasks + avoid-when

### Top 5 task types where GPT-5.5 should be the primary choice

These are provisional and assume GPT-5.5 is a high-capability OpenAI general model **[INFERRED]**.

1. **Mixed reasoning + writing + tool-use workflows**  
   Example: analyze support data, call tools, draft customer-specific responses.  
   Rationale: OpenAI models generally integrate well with function calling and structured outputs **[INFERRED FROM PLATFORM DOCS]**.

2. **Complex business document synthesis**  
   Example: turn meeting notes, product specs, and customer feedback into a prioritized roadmap.  
   Rationale: likely strong at instruction following and summarization **[INFERRED]**.

3. **Code review and patch drafting with human/test supervision**  
   Example: review a pull request, find likely bugs, suggest tests.  
   Rationale: GPT-series models are generally useful for code reasoning **[INFERRED]**.

4. **Structured extraction into JSON schemas**  
   Example: extract entities from invoices, contracts, tickets, or clinical notes into validated schemas.  
   Rationale: OpenAI platform supports structured-output patterns generally; GPT-5.5 support is **[UNVERIFIED]**.

5. **Agent planning where tools execute the facts**  
   Example: plan research steps, call search/database tools, and synthesize only returned evidence.  
   Rationale: likely useful as a planner/orchestrator **[INFERRED]**.

### Top 5 task types where GPT-5.5 should NOT be used

1. **Tasks requiring verified GPT-5.5-exclusive benchmark superiority**  
   Use: whichever model has current public benchmark dominance.  
   Reason: GPT-5.5 benchmark scores are **[UNKNOWN]**.

2. **Long video or massive multimodal-context workflows**  
   Use: Google Gemini long-context/multimodal models, if their current docs support the needed input type.  
   Reason: GPT-5.5 video support is **[UNKNOWN]**.

3. **Very low-cost, high-volume summarization/classification**  
   Use: cheaper small models such as Gemini Flash-class, Claude Haiku-class, GPT mini-class, or open-weight models, depending on current prices.  
   Reason: GPT-5.5 pricing is **[UNKNOWN]** and may be unnecessary for simple tasks.

4. **On-prem, air-gapped, or weights-inspectable deployments**  
   Use: open-weight models such as Llama, Mistral, Qwen, or DeepSeek variants, depending on license and evals.  
   Reason: GPT-5.5 is presumably closed/API-hosted **[INFERRED]**.

5. **High-stakes legal, medical, financial, or safety-critical decisions without expert review**  
   Use: domain-specific validated systems plus human professionals; if using an LLM, require retrieval, audit logs, and validation.  
   Reason: GPT-5.5 correctness, calibration, and hallucination rates are **[UNKNOWN]**.

---

## 8. Lifecycle

- **Release date of this version:**  
  **[UNKNOWN — no verified OpenAI release source available here]**.

- **Predecessor + retirement date, if any:**  
  Predecessor is presumably GPT-5 or a GPT-5-series model **[INFERRED FROM NAME]**.  
  Retirement date: **[UNKNOWN]**.

- **Successor, if announced:**  
  **[UNKNOWN]**. No successor can be named without OpenAI announcement.

- **Deprecation risk signals:**  
  - If GPT-5.5 exists as an API model, deprecation risk would depend on OpenAI’s model lifecycle notices, replacement models, pricing changes, and migration guides **[INFERRED]**.  
  - Any routing knowledge base should monitor OpenAI’s model deprecation page and API changelog before relying on GPT-5.5 long-term **[INFERRED]**.  
  - Current deprecation status: **[UNKNOWN — would need OpenAI docs]**.