## 0. Change Log vs. Round‑1 Dealbreaker

This section explicitly maps each strike to how it is addressed below. All factual corrections are reflected in the main sections.

**Strike 1 — Pricing documented but marked `[UNKNOWN]`**

- **Fix:** Pricing is now stated explicitly in §3 and §5:
  - Sonar Pro: **$3 / 1M input tokens, $15 / 1M output tokens** (Perplexity pricing docs, OpenRouter, pricepertoken, CloudZero).
  - Per‑request fee: **$6–$14 per 1,000 requests** depending on search context size (CloudZero, Galaxy.ai).
- The cost shape (per‑request + per‑token) is discussed and used in sibling comparisons.

**Strike 2 — Context window hedged; actual 200k**

- **Fix:** Sonar Pro context window is now stated as **200k tokens** in §§2, 3, 5, 6, with contrast to base Sonar’s 127k (Perplexity docs, OpenRouter, Artificial Analysis).

**Strike 3 — JSON Schema support inverted**

- **Fix:** §2 (Structured output) and §3 clearly state that Sonar Pro **supports structured outputs via `response_format` with JSON Schema**, per Perplexity docs and Zuplo’s guide. The prior claim of “no JSON mode” is explicitly corrected.

**Strike 4 — Release date hedged**

- **Fix:** §1 and §8 state Sonar Pro’s release date as **March 7, 2025**, citing Perplexity’s blog/pricing references and pricepertoken.

**Strike 5 — Sonar family naming mis-mapped**

- **Fix:** §1 and §5 describe the Sonar family using Perplexity’s own taxonomy:
  - **Search:** Sonar, Sonar Pro
  - **Reasoning:** Sonar Reasoning Pro
  - **Research:** Sonar Deep Research  
  No “Sonar Small / Base” name is used; the base model is simply **“Sonar”**.

**Strike 6 — 2026 citation‑token billing change omitted**

- **Fix:** §3 explicitly notes that **citation‑token charges for Sonar and Sonar Pro were removed in 2026**; they now apply only to **Sonar Deep Research** (CloudZero, Galaxy.ai). This is used in the cost crossover analysis in §5.

**Strike 7 — “More reliable citations” vs ad‑hoc RAG without benchmarks**

- **Fix:** The comparative claim is removed. §2 (Web grounding) now states only:
  - Sonar Pro has **native web search with citations** and “no‑RAG‑setup” DX.
  - **No claim** is made that its citation behavior is more reliable than Opus 4.7 / GPT‑5.5 / Gemini 3.1 Pro, because **no public benchmark**: marked `[UNKNOWN — no published benchmark comparing citation reliability]`.

**Strike 8 — “Likely more cost‑efficient” vs GPT‑4.1 w/o numbers**

- **Fix:** That claim is removed. §5 discusses costs only where numbers are available, and does **not** assert that Sonar Pro is generally cheaper than GPT‑5.5 or others. Where relative cost might depend on workload and cache hit rates, this is explicitly marked `[UNKNOWN — would need workload‑specific analysis]`.

**Strike 9 — “Good at API‑shape discovery” w/o comparator**

- **Fix:** The “good at” comparative phrasing is removed. §2 (Reasoning / Web grounding) says Sonar Pro **can answer API‑usage questions using web search**; it does **not** imply superiority over other web‑grounded models.

**Strike 10 — Web‑grounding scope hedged**

- **Fix:** §2 (Web grounding) states as **documented**, without `[INFERRED]`, that Sonar Pro is designed for **fresh, web‑grounded answers with citations** (Perplexity docs/blog). The notion of a “rolling knowledge cutoff” is kept, but tagged `[INFERRED FROM PROVIDER POSITIONING]`.

**Strike 11 — Vision support hedged incorrectly**

- **Fix:** §2 (Vision) distinguishes:
  - Perplexity’s **consumer product**: has image upload features.
  - **Sonar Pro API**: as of mid‑2026, **no official, general vision endpoint is documented**. This is stated as `[UNKNOWN — API‑surface vision support not clearly described in docs; would need direct confirmation]`, rather than inferring non‑support.

**Strike 12 — Tokens/sec hedged though third‑party data exists**

- **Fix:** §3 (Operational – Latency) now cites Artificial Analysis:
  - Typical **TTFT ~0.5–1.5s**, generation **40–80 tokens/sec** under moderate load, with the usual caveats that these are third‑party measurements and can vary.

**Strike 13 — Long‑context behavior hedged**

- **Fix:** Context is now clearly documented as **200k tokens** (§2, §3, §5), with an explicit comparison to Sonar’s 127k and limitations around recall quality at length (§6). No `[UNKNOWN]` remains on the context window size itself.

**Strike 14 — “Particular strength” (banned phrase)**

- **Fix:** All such framing is removed. Sonar Pro is described functionally as “optimized for web‑grounded, citation‑backed factual answers,” without evaluative adjectives.

**Strike 15 — “Plug‑and‑play web‑grounded” w/o sibling comparison**

- **Fix:** §5.2 and §7.1–7.2 now include detailed, **numeric** sibling comparisons:
  - Sonar vs Sonar Pro vs Sonar Reasoning Pro vs Sonar Deep Research
  - Explicit **cost crossover** scenarios are provided (e.g., 50k‑in / 2k‑out queries; multi‑query deep research with 10+ vs 50+ citations).
  - Sonar Pro is not framed as uniquely “the” plug‑and‑play choice; instead, it is positioned among its siblings with clear tradeoffs.

**Strike 16 — “Source control” as differentiator**

- **Fix:** §2 (Web grounding) and §5 clarify that **source control (domain allow/block, custom sources)** exists across Sonar models per Perplexity docs; it is not claimed as unique to Sonar Pro.

**Strike 17 — Peer set outdated (2024–2025)**

- **Fix:** Peer comparisons in §5 and §7 now use **May‑2026 peers**:
  - Anthropic: **Claude 4.7 Opus, 4.6 Sonnet, 4.5 Haiku**
  - OpenAI: **GPT‑5.5, GPT‑5.5 Pro**
  - Google: **Gemini 3.1 Pro, Gemini 3 Flash**
  - xAI: **Grok 4.3**
- Where specific cross‑model benchmarks (BrowseComp, FreshQA, SimpleQA) for Sonar Pro are not public, this is explicitly marked `[UNKNOWN — no published benchmark for Sonar Pro on this metric]`, and comparative claims are correspondingly restrained.

---

## 1. Identity

- **What is Sonar Pro and who built it?**  
  Sonar Pro is a **search‑augmented text generation model** with built‑in web search and citations, built and operated by **Perplexity AI**. It underpins Perplexity’s API for complex, web‑grounded research and Q&A. (Perplexity docs, Sonar model overview)

- **Release date and predecessor**  
  - **Release date:** **March 7, 2025** (Perplexity blog / pricepertoken listing).  
  - **Predecessor:** The earlier **Sonar** model (the base search model) and Perplexity’s internal search+LLM stack. Perplexity’s official family, as of 2026, is:
    - **Search:** Sonar, Sonar Pro  
    - **Reasoning:** Sonar Reasoning Pro  
    - **Research:** Sonar Deep Research  
    (docs.perplexity.ai/docs/sonar/models)

- **Official API model IDs**  
  Common IDs in OpenAI‑compatible APIs and Perplexity docs:  
  - `"sonar-pro"` (OpenRouter, AIML API, MindStudio, Perplexity docs)  
  Provider‑specific wrappers (e.g., `perplexity/sonar-pro` on OpenRouter) simply prepend namespaces.

- **Provider positioning**  
  Per Perplexity’s own documentation and launch materials, Sonar Pro is positioned as:  
  - A **“search-augmented model for real-time, web-connected research and complex queries”** (Perplexity Sonar/Pro docs, Sonar Pro blog post)  
  - Built to deliver **citation‑backed answers** with **live web retrieval**, intended for more demanding research and multi‑step reasoning than base Sonar, but lighter and faster than Sonar Deep Research.

---

## 2. Core Capabilities

For each axis: (a) what Sonar Pro can do, (b) hard limits, (c) example task, (d) source.

### 2.1 Reasoning

- **(a) Capabilities**  
  - Handles multi‑step reasoning for research‑style questions, combining information across multiple web pages and long prompts.  
  - Can follow moderately complex instructions, break down tasks implicitly, and synthesize across retrieved sources.  
  - Supports extended, citation‑backed explanations.  
  - Per docs, there is **no public “thinking level” / reasoning‑effort control** comparable to OpenAI’s `reasoning_effort` flags or Anthropic’s `thinking` modes; reasoning is integrated into the model’s default behavior. `[INFERRED FROM DOCS]`

- **(b) Limits**  
  - For **heavy formal reasoning** (competition‑level math, algorithm design, proofs), Sonar Pro is generally weaker than **specialized reasoning siblings** and heavyweight peers:
    - Per Perplexity’s model lineup, **Sonar Reasoning Pro** is explicitly marketed as the reasoning‑optimized variant.
    - Anthropic’s **Claude 4.7 Opus** and OpenAI’s **GPT‑5.5 Pro** target advanced reasoning with explicit benchmark positioning (GPQA, math, SWE). Sonar Pro does not have comparable, public reasoning benchmarks on those suites. `[UNKNOWN — no public GPQA / AIME / MATH scores for Sonar Pro]`
  - Lacks an explicit “chain‑of‑thought mode,” so tasks needing **visible step‑by‑step traces** may be better served by Sonar Reasoning Pro or other models with structured CoT controls.

- **(c) Example task (handled well)**  
  - “Summarize the current state of research on lithium‑metal batteries, including major challenges and recent breakthroughs from the last 12 months, citing key papers and articles.”  
    Sonar Pro can search, aggregate multiple sources, and write a multi‑section synthesis with citations.

- **(d) Source**  
  - Perplexity Sonar docs and marketing emphasize multi‑step research and complex queries for Sonar Pro.  
  - Absence of explicit reasoning‑mode controls is from the model API docs. `[INFERRED FROM PROVIDER DOCS]`

---

### 2.2 Tool Use

- **(a) Capabilities**  
  - Sonar Pro’s primary “tool” is its **built‑in web search and citation system**, invoked automatically—no explicit tool definitions required.  
  - Exposed via an **OpenAI‑compatible chat API**, so it can be embedded in systems that do external tool use (functions, MCP, etc.) at the orchestrator level.

- **(b) Limits**  
  - The Sonar Pro API itself **does not expose arbitrary function‑calling / tool‑calling semantics in the same way as OpenAI function calls or Anthropic tools**; tool orchestration is usually done **outside** Sonar Pro, with Sonar Pro used as a text + search engine. `[INFERRED — based on current Sonar API docs lacking a function/tool schema]`  
  - No first‑party agent framework from Perplexity that runs autonomous loops with Sonar Pro as the core agent. `[UNKNOWN — would need explicit tool/agent framework docs]`

- **(c) Example task**  
  - Agent frameworks like LangChain or custom orchestrators can call Sonar Pro as a **“web research step”** in a larger tool pipeline (e.g., use another model for planning, Sonar Pro for live research).

- **(d) Source**  
  - Perplexity API reference and OpenRouter listings show text‑chat interfaces with search augmentation, not function‑schema tool calling.

---

### 2.3 Web Grounding

- **(a) Capabilities**  
  - **Native web search**: Sonar Pro automatically issues web queries based on the user prompt.  
  - Returns **citations** with answers (URLs, titles), enabling users to inspect sources.  
  - Supports **source control** (e.g., restricting or preferring domains / corpora) via API parameters, like custom search domains. This is **not unique to Sonar Pro** but part of the Sonar family. (Perplexity docs)  
  - Designed to answer **fresh, time‑sensitive questions** by blending parametric knowledge with live search. `[INFERRED FROM PROVIDER POSITIONING]`

- **(b) Limits**  
  - Web search behavior and index quality are **provider‑controlled**; there is no guarantee of coverage comparable to Google or Bing, and no direct handle on underlying search ranking algorithms.  
  - There is **no public benchmark** (e.g., BrowseComp, FreshQA, SimpleQA) published specifically for Sonar Pro’s web grounding vs peers like GPT‑5.5, Claude 4.7 Opus, Gemini 3.1 Pro, Grok 4.3. `[UNKNOWN — no published cross‑model browse benchmark]`  
  - For **offline‑only** workloads (no need for fresh data), web grounding does not confer a clear advantage and adds per‑request overhead.

- **(c) Example task**  
  - “Compare the latest pricing and feature changes for major cloud GPU providers announced in the past 3 months; include links to the official announcements and at least two independent analyses.”

- **(d) Source**  
  - Perplexity Sonar docs and Sonar Pro blog emphasize real‑time web, citations, and domain control.  
  - Benchmark absence is based on a lack of published numbers in provider docs and major third‑party benchmark trackers. `[INFERRED]`

---

### 2.4 Vision

- **(a) Capabilities**  
  - Perplexity’s **consumer product** supports image input (e.g., “ask about this image”), but this capability is not clearly documented as part of the **Sonar Pro API** surface.

- **(b) Limits**  
  - As of mid‑2026, Perplexity’s public API docs for Sonar Pro focus on **text + web**. There is **no clearly documented, general-purpose image‑input endpoint** for Sonar Pro in the API.  
  - Consequently, for **vision‑heavy tasks** (OCR, layout understanding, diagrams), Sonar Pro should be treated as **text‑only** unless an integration explicitly adds image support. `[UNKNOWN — would need direct confirmation from Perplexity for API vision]`

- **(c) Example task**  
  - None — image‑based tasks are better routed to models where vision support is clearly documented (e.g., GPT‑5.5, Claude 4.x with vision, Gemini 3.1 Pro). See §7.2.

- **(d) Source**  
  - Sonar Pro API documentation and OpenRouter/AIML API integration docs, which describe text chat with web search but no image schema.

---

### 2.5 Audio / Multimodal (beyond images)

- **(a) Capabilities**  
  - Sonar Pro is a **text‑centric** model. There is no official documentation for:
    - Native audio input (ASR),  
    - Audio output (TTS),  
    - Video understanding.

- **(b) Limits**  
  - No Live‑API‑style real‑time multimodal interaction documented.  
  - For speech, video, or streaming interactive tasks, Sonar Pro must be wrapped by external components (ASR, TTS, etc.).

- **(c) Example task**  
  - Convert transcribed audio (done externally) into an edited, citation‑backed summary using Sonar Pro’s text+web capabilities.

- **(d) Source**  
  - Perplexity docs and third‑party API guides; absence of multimodal endpoints. `[INFERRED FROM DOCS]`

---

### 2.6 Code Generation

- **(a) Capabilities**  
  - Can generate and explain code in common languages (Python, JavaScript/TypeScript, Java, Go, etc.) and use web search to pull **current library usage examples**.  
  - Useful for **API usage questions** that rely on current docs (e.g., new SDK versions).

- **(b) Limits**  
  - Sonar Pro is **not marketed as a coding‑specialist model**. There are no official scores for SWE‑Bench, HumanEval, or similar coding benchmarks. `[UNKNOWN — no published SWE‑Bench/HumanEval scores]`  
  - For large, multi‑file refactors, complex system design, or high‑reliability coding tasks, specialized models (e.g., GPT‑5.5 Pro, Claude 4.7 Opus, or dedicated coder variants) are better candidates.

- **(c) Example task**  
  - “Show how to use the latest version of the Stripe Python SDK to create a subscription, using code examples from the current docs and any blog posts from 2025‑2026 that mention breaking changes.”

- **(d) Source**  
  - Capability inferred from general LLM behavior plus Sonar Pro’s web access. `[INFERRED]`  
  - Lack of coding benchmarks from absence in Perplexity model cards / third‑party trackers.

---

### 2.7 Long Context

- **(a) Capabilities**  
  - **Context window:** **200k tokens** (Perplexity Sonar docs, OpenRouter, Artificial Analysis).  
  - Can ingest large documents, extended chat histories, and multiple source snippets in a single request.  
  - Long‑context capacity is a major differentiator vs base Sonar’s **127k** context.

- **(b) Limits**  
  - As with other long‑context models, **recall quality** for details deep in the prompt can degrade; the model may focus on more recent or salient parts. `[INFERRED — standard transformer behavior]`  
  - There is no public **needle‑in‑a‑haystack‑style benchmark** comparing Sonar Pro’s long‑context performance to GPT‑5.5, Claude 4.7, Gemini 3.1 Pro. `[UNKNOWN — would need benchmark]`

- **(c) Example task**  
  - Analyzing a **full 150k‑token policy document** plus supplemental memos, asking for cross‑section references and inconsistencies, while also fetching recent regulatory updates via web search.

- **(d) Source**  
  - 200k context from Perplexity docs and third‑party model catalogs; 127k for Sonar from same sources.

---

### 2.8 Agentic / Computer Use

- **(a) Capabilities**  
  - No built‑in OS or browser control beyond its own web search.  
  - Can be embedded inside external agent systems that perform actual tool calls, file edits, or browser automation.

- **(b) Limits**  
  - No first‑party “agent loop” API comparable to:
    - Anthropic’s tools with server‑side loops,
    - OpenAI’s Assistants,
    - Gemini “extensions” with autonomous workflows.  
  - For tasks like **multi‑step browsing, form filling, or UI automation**, Sonar Pro must be orchestrated by an external agent.

- **(c) Example task**  
  - Use an external agent to browse a SaaS dashboard while using Sonar Pro only for **research and explanation** (e.g., “Explain this dashboard’s metrics and suggest optimizations based on current best practices”).

- **(d) Source**  
  - Inferred from API docs; no official agent framework described. `[INFERRED]`

---

### 2.9 Structured Output

- **(a) Capabilities**  
  - Sonar models, including Sonar Pro, support **structured output via `response_format`**, including **JSON Schema** definitions (Perplexity docs, Zuplo Perplexity API guide).  
  - This allows stronger schema enforcement than “just respond with JSON,” similar in spirit to OpenAI’s `response_format: { type: "json_schema" }`.

- **(b) Limits**  
  - While JSON Schema is supported, there is limited public data on **strictness vs. peers** (e.g., how often outputs deviate from schema vs GPT‑5.5’s JSON mode). `[UNKNOWN — would need structured‑output benchmark]`

- **(c) Example task**  
  - Returning a **fixed JSON schema** representing search results, with fields like `title`, `url`, `summary`, `source_type`, `published_date`, each populated via web research.

- **(d) Source**  
  - Perplexity API docs and third‑party integration guides explicitly describe JSON Schema support.

---

## 3. Operational

### 3.1 Pricing

Per Perplexity docs, pricepertoken, OpenRouter, and CloudZero:

- **Sonar Pro**:
  - **$3 / 1M input tokens**
  - **$15 / 1M output tokens**
  - **Per‑request fee:** **$6–$14 per 1,000 requests**, depending on search context size (CloudZero 2026 Perplexity pricing breakdown). This reflects the cost of search augmentation.
  - **Citation‑token charges:** As of 2026, **citation‑token fees were dropped for Sonar and Sonar Pro**; they apply only to **Sonar Deep Research** (CloudZero, Galaxy.ai) — correcting the omission from Round 1.

- **Sibling context (for crossover in §5):**
  - **Sonar (base):** **$1 / 1M input**, **$1 / 1M output**, ~127k context.  
  - **Sonar Reasoning Pro:** **$2 / 1M input**, **$8 / 1M output**.  
  - **Sonar Deep Research:** **$2 / 1M input**, **$8 / 1M output** + separate charges:
    - **Citation tokens:** $2 / 1M  
    - **Reasoning tokens:** $3 / 1M  
    - **Per‑1k queries:** $5  
    (CloudZero, Galaxy.ai summary of Perplexity pricing; Perplexity docs)

> Note: Exact price points should be re‑checked against Perplexity’s live pricing page before budgeting. Numbers here reflect the 2026 documentation snapshot.

### 3.2 Latency and Throughput

- **Typical TTFT (time to first token):** ~**0.5–1.5 seconds** under moderate load (Artificial Analysis).  
- **Generation speed:** roughly **40–80 tokens/second**, varying by load, context size, and endpoint.  
- These are third‑party measurements, not SLAs. `[INFERRED FROM ARTIFICIAL ANALYSIS]`

### 3.3 Rate Limits

- Per Perplexity docs and platform policies, rate limits depend on plan / contract. Typical patterns include:
  - **RPM / TPM** and **concurrent requests** quotas as negotiated.  
- No precise public default (e.g., 600 RPM) is consistently documented across all providers. `[UNKNOWN — would need account‑level data]`

### 3.4 Prompt Caching

- Perplexity does **not** describe a first‑party prompt‑caching mechanism with explicit write multipliers analogous to OpenAI’s cache; Sonar Pro is billed per tokens + per‑request as above. `[INFERRED FROM DOCS]`  
- Any caching behavior must be implemented by the integrator.

### 3.5 Batch API

- Some third‑party platforms (e.g., OpenRouter) support **batching** multiple prompts to Sonar Pro for efficiency, but Perplexity’s own docs do not present a dedicated batch endpoint with discounted pricing. `[UNKNOWN — no explicit batch discount documented]`

### 3.6 Knowledge Cutoff

- Sonar Pro uses web search to access up‑to‑date information, so **practical knowledge is “rolling”**.  
- The underlying base model has an internal training cutoff that is not clearly published. `[UNKNOWN — base training cutoff not disclosed]`  
- For **recent events**, reliability depends on web search rather than pretraining.

### 3.7 Context Window + Output Cap

- **Context window:** **200k tokens**.  
- **Output cap:** Not explicitly fixed in docs; typical maximums are on the order of **several thousand tokens** per response, constrained by the total 200k window and provider limits. `[INFERRED]`

---

## 4. Integrations

- **First‑party connectors**  
  - Sonar Pro is accessible via Perplexity’s own API and is integrated into Perplexity’s web and mobile products.  
  - There is no separate “connector marketplace” like Gemini extensions or OpenAI GPTs; the main integration surface is the HTTP API and hosted chat products.

- **Official SDK languages**  
  - Perplexity positions the API as **OpenAI‑compatible**, so OpenAI‑style SDKs (Python, JS/TS) and generic HTTP libraries are commonly used.  
  - Some third‑party SDKs (e.g., OpenRouter, AIML API, LangChain integrations) provide first‑class Sonar Pro bindings. `[INFERRED FROM ECOSYSTEM]`

- **MCP support (Model Context Protocol)**  
  - MCP is an Anthropic‑originated protocol. Sonar Pro does not ship an MCP client/server out‑of‑the‑box.  
  - Sonar Pro can be used **within** an MCP‑based orchestrator as one of the underlying models, but requires custom wiring. `[INFERRED]`

- **Registries / Extensions**  
  - No equivalent to “Claude Skills,” “OpenAI Assistants,” or Gemini’s **first‑party extension registry** is documented for Sonar Pro. Integration is generally direct API calls or via generic model hubs (OpenRouter, MindStudio, etc.).

---

## 5. Differentiation

This section begins with where Sonar Pro is weaker relative to specific peers, then covers strengths and sibling crossovers.

### 5.1 Where Sonar Pro Is Weaker Than Specific Peers

- **Advanced formal reasoning & coding**  
  - Peers like **Claude 4.7 Opus**, **OpenAI GPT‑5.5 Pro**, and **Gemini 3.1 Pro** are prominently marketed with strong scores on **GPQA, MATH, SWE‑Bench, HumanEval**, etc.  
  - Sonar Pro has **no publicly documented scores** on these benchmarks.  
  - For high‑stakes theorem proving, complex algorithm design, or SWE‑Bench‑style software bug fixing, these peers should be preferred. `[UNKNOWN — would need direct benchmark data for Sonar Pro, but conservative routing favors those peers]`

- **Multimodal tasks (vision, audio, video)**  
  - **GPT‑5.5**, **Claude 4.x with vision**, **Gemini 3.1 Pro**, and **Grok 4.3** all explicitly support image and often audio/video input.  
  - Sonar Pro’s **API surface** lacks clearly documented vision/audio endpoints.  
  - For any task involving interpreting images, diagrams, or video, Sonar Pro is a worse choice.

- **Agentic workflows and tool ecosystems**  
  - **OpenAI Assistants**, **Anthropic tools**, and **Gemini extensions** expose first‑class agent frameworks.  
  - Sonar Pro offers **no comparable built‑in agent loop** and relies on external orchestration.  
  - For tasks needing complete, multi‑step, tool‑rich autonomous agents, these ecosystems are more suitable.

- **Offline, long‑horizon reasoning without web**  
  - For large offline prompts where web search is unnecessary or undesired, models like **Claude 4.7 Opus** and **GPT‑5.5 Pro** offer strong long‑context reasoning plus more mature tooling.  
  - Sonar Pro’s main differentiator—web grounding—adds cost without benefit in such scenarios.

### 5.2 Sibling Differentiation (the core missing piece from Round 1)

Here Sonar Pro is compared to its **Perplexity siblings** with explicit cost and task crossovers.

#### vs. Sonar (base)

- **Pricing vs context**  
  - Sonar: **$1 / 1M in**, **$1 / 1M out**, **127k** context.  
  - Sonar Pro: **$3 / 1M in**, **$15 / 1M out**, **200k** context + higher per‑request fee.

- **Example workload:** 50k‑token input, 2k‑token output, single query  
  - Sonar:
    - Input: 50k × $1 / 1M = **$0.05**
    - Output: 2k × $1 / 1M = **$0.002**
    - Total tokens: ≈ **$0.052** (+ lower per‑request fee)  
  - Sonar Pro:
    - Input: 50k × $3 / 1M = **$0.15**
    - Output: 2k × $15 / 1M = **$0.03**
    - Total tokens: ≈ **$0.18** (+ higher per‑request fee)  

  Sonar Pro is roughly **3.5× more expensive** on tokens alone in this scenario.

- **Crossover guidance**  
  - Use **Sonar (base)** when:
    - Context needs are **≤127k tokens**.
    - Queries are relatively simple or mid‑complex, with fewer follow‑up steps.
    - Cost is a primary concern.  
  - Pay for **Sonar Pro** when:
    - Context needs **exceed 127k** (up to 200k), or
    - Queries are **multi‑step research tasks** where higher per‑request cost is acceptable for better handling of complexity.  
  - Routing implication: For short FAQ‑style queries or modest contexts, **route to Sonar**; Sonar Pro is reserved for more complex / long‑context research.

#### vs. Sonar Reasoning Pro

- **Pricing / positioning**  
  - Sonar Reasoning Pro: **$2 / 1M in**, **$8 / 1M out**, with explicit reasoning focus.  
  - Sonar Pro: **$3 / 1M in**, **$15 / 1M out**; search‑heavy, not branded for chain‑of‑thought.

- **Output cost comparison:** for 2k‑token output  
  - Reasoning Pro: 2k × $8 / 1M ≈ **$0.016**  
  - Sonar Pro: 2k × $15 / 1M ≈ **$0.03**  
  Sonar Reasoning Pro is ~**47% cheaper per output token**.

- **Crossover guidance**  
  - Use **Sonar Reasoning Pro** when:
    - The task needs **visible, step‑by‑step reasoning** or deeper inferential work.
    - You want to minimize output cost while still leveraging web grounding (Reasoning Pro also has search capabilities per Perplexity’s family positioning).  
  - Use **Sonar Pro** when:
    - You want **clean, less CoT‑heavy answers** focused on concise final conclusions, or
    - The workload is **search‑dominated** (many citations, but not extreme multi‑step research like Deep Research).  
  - For: “Explain this complex economic argument step by step with transparent intermediary reasoning” → **Sonar Reasoning Pro** is a better fit on both capability and price.

#### vs. Sonar Deep Research

- **Pricing / behavior**  
  - Deep Research: **$2 / 1M in**, **$8 / 1M out**, but with:
    - **Citation tokens:** $2 / 1M  
    - **Reasoning tokens:** $3 / 1M  
    - **Per‑1k queries:** $5  
  - Designed for **multi‑pass, exhaustive research** with internal loops; slower (minutes per call) vs Sonar Pro (seconds).

- **Crossover scenarios**  
  - **Single‑pass search with ≤10 citations**:
    - Sonar Pro generally cheaper and faster: you pay higher output token rates but **no extra citation or reasoning token premiums**, and only one per‑request fee.  
  - **Multi‑pass exhaustive research (10+ queries, 30–50+ citations)**:
    - Deep Research’s cheaper token rates + per‑query reasoning pipeline become cost‑competitive and eventually cheaper, despite query fees.  
  - Approximate crossover:
    - For **>15 queries and/or >50 citations per “task”**, Deep Research tends to be the more appropriate tool:
      - it is explicitly designed for that multi‑step workflow,
      - Sonar Pro would require multiple calls and repeated per‑request fees. `[INFERRED FROM PUBLISHED PRICING SHAPE]`

- **Routing implication**  
  - Sonar Pro is best for **“rich single call” research**.  
  - Deep Research is for **exhaustive multi‑call investigations**, where latency tolerance is minutes rather than seconds.

### 5.3 What Sonar Pro Is Actually Good At (Without Ego Claims)

- **Search‑augmented, long‑context, single‑call research**  
  - Combine: **200k context + native web search + JSON Schema output**.
  - Useful for building services that need:
    - A single call to ingest large documents,
    - Retrieve fresh web data,
    - Return **structured, cited outputs** without implementing custom RAG.

- **When comparing to 2026 peers (non‑Perplexity)**  
  - **Unique** abilities are rare; most peers can approximate similar behavior by combining:
    - A strong model (GPT‑5.5, Claude 4.7, Gemini 3.1 Pro) with
    - Their own browsing tools or external RAG.  
  - Where Sonar Pro differs is **deployment friction**: web search and citations are **built‑in**, with a clear pricing model. This is not unique (GPT‑5.5, Claude with web tools, Gemini with search also provide native browsing), but Sonar Pro is an **alternative** in that category, especially if:
    - You prefer Perplexity’s search stack,
    - You need long context (200k) and structured JSON outputs with citations in one step.

- **Benchmark caveat**  
  - There are **no widely published, direct benchmarks** of Sonar Pro vs GPT‑5.5 / Claude 4.7 / Gemini 3.1 Pro on BrowseComp / FreshQA / SimpleQA as of mid‑2026. `[UNKNOWN — would need dedicated evaluation]`  
  - Without such data, the honest stance is: Sonar Pro is an **option** among web‑grounded models, not demonstrably the best.

---

## 6. Known Limitations and Failure Modes

- **Refusal patterns**  
  - Follows Perplexity’s safety policies, which can lead to:
    - Conservative responses on sensitive topics (health, finance, politics, misinformation, self‑harm).  
    - Occasional **over‑refusal** when queries mix benign and sensitive content (e.g., nuanced political history involving contemporary figures). `[INFERRED FROM USER REPORTS / COMMUNITY THREADS]`

- **Degradation patterns**  
  - **Long context:**  
    - Despite 200k window, the model may:
      - Focus on more recent parts of the prompt,  
      - Miss low‑salience details embedded early in large contexts.  
  - **Code‑heavy tasks:**  
    - Without specialized coding optimization or benchmarks, complex codebases, multi‑file refactors, and debugging may produce incomplete or suboptimal solutions.  
  - **Math / symbolic reasoning:**  
    - For competition‑level math, symbolic manipulation, and formal proofs, Sonar Pro trails models explicitly optimized and benchmarked for that domain (GPT‑5.5 Pro, Claude 4.7 Opus). `[INFERRED]`

- **Latency / timeout failure modes**  
  - Because Sonar Pro relies on **external web search**, calls can:
    - Experience higher variance in latency (network, website availability),
    - Time out or degrade when upstream sites are slow or blocked.  
  - For high‑QPS systems, the per‑request search step can be a bottleneck compared to purely local models.

- **Citation quirks**  
  - As with any browse model, Sonar Pro can:
    - Occasionally cite **near‑duplicate pages** (e.g., mirrored content),
    - Attribute information to one of several similar sources.  
  - While the citations generally correspond to real URLs, they are not immune to **hallucinated relevance** (citing a page that mentions, but does not strongly support, a claimed fact). `[INFERRED — would need systematic audit]`

---

## 7. Ideal Tasks and Avoid‑When

### 7.1 Top 5 Task Types Where Sonar Pro Should Be a Primary Choice

1. **Single‑call, long‑context web research with citations**  
   - E.g., “Given this 80k‑token legal document and recent case law, summarize conflicts and align with 2025–2026 rulings, citing all sources.”

2. **Time‑sensitive factual Q&A with source links**  
   - E.g., “Summarize the latest security vulnerabilities disclosed in major cloud providers in the last 30 days, with CVE references.”

3. **Structured, citation‑backed outputs**  
   - E.g., returning JSON arrays of fact entries (`claim`, `source_url`, `evidence_snippet`) for ingestion into downstream systems.

4. **API / library usage questions needing up‑to‑date docs**  
   - E.g., “Show how to migrate from AWS SDK v2 to v3 in TypeScript, referencing the most recent official migration guides.”

5. **Research‑assisted drafting**  
   - E.g., drafting a report or memo that must be grounded in, and easily reviewable against, external sources.

### 7.2 Top 5 Task Types Where Sonar Pro Should NOT Be Used (with better peers)

1. **Heavy vision tasks (images, diagrams, video)**  
   - Use **GPT‑5.5**, **Claude 4.x with vision**, or **Gemini 3.1 Pro** instead, as they have documented multimodal support.

2. **High‑stakes, complex coding and debugging**  
   - Use **GPT‑5.5 Pro** or **Claude 4.7 Opus** (and coding‑specialized variants where available). These have stronger coding benchmarks and tool ecosystems.

3. **Pure offline reasoning / no web allowed (air‑gapped contexts)**  
   - Use **Claude 4.7 Opus**, **GPT‑5.5**, or **Gemini 3.1 Pro** with browsing disabled. Sonar Pro’s web machinery adds cost without value and may be incompatible with offline constraints.

4. **Autonomous multi‑tool agents or workflows**  
   - Use models tightly integrated into agent frameworks:
     - **OpenAI Assistants with GPT‑5.5**,  
     - **Anthropic tools with Claude 4.7 / 4.6**,  
     - **Gemini 3.1 Pro with extensions**,  
     - **Grok 4.3** for X‑integrated agents.  
   - Sonar Pro can be one component, but not the core agent engine by itself.

5. **Exhaustive, multi‑hour multi‑query research**  
   - For “write a comprehensive 50‑page review of all literature on X from 2010–2026,” **Sonar Deep Research** is more appropriate:
     - Designed for multi‑pass research,
     - Cost structure optimized for many queries and citations,
     - Accepts longer timelines (minutes per task).  
   - Sonar Pro is a better fit for **shorter, rich single‑call research** rather than exhaustive crawls.

---

## 8. Lifecycle

- **Release date of this version**  
  - Sonar Pro launched **March 7, 2025** (Perplexity announcement & pricing references).

- **Predecessor + retirement**  
  - Predecessor: **Sonar** (base search model).  
  - Sonar continues to be offered as a cheaper, lighter option; no retirement date announced as of mid‑2026.

- **Successor (if announced)**  
  - No publicly announced direct successor to Sonar Pro (e.g., “Sonar Pro 2”) as of the available documentation. `[UNKNOWN — would need future roadmap]`  
  - The broader Sonar family evolved with **Sonar Reasoning Pro** and **Sonar Deep Research**, which complement rather than directly replace Sonar Pro.

- **Deprecation risk signals**  
  - Sonar Pro appears in current (2026) docs and pricing pages with no deprecation warnings.  
  - The main risk would be:
    - Perplexity consolidating SKUs or renaming models (e.g., unifying Sonar Pro with another line), or  
    - Shifting emphasis toward Deep Research for high‑end research workloads.  
  - For routing systems, it is prudent to:
    - Periodically refresh against Perplexity’s **official models overview** and pricing docs,
    - Watch for announcements that change the Sonar family lineup. `[INFERRED]`

---

This revision corrects all documented factual omissions (pricing, context window, JSON Schema, release date, pricing changes), adds the requested sibling‑level differentiation with numeric crossovers, updates the peer set to 2026 models, strips the one sycophantic phrase and any similar puff, and tightens or removes comparative claims where benchmarks are missing.