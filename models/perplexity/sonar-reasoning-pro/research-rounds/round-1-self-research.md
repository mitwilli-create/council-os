## 1. Identity

- **What is Sonar Reasoning Pro and who built it?**  
  Sonar Reasoning Pro is a Perplexity-hosted large language model optimized for multi-step reasoning with integrated web retrieval. It is built and operated by Perplexity AI.  
  Source: Perplexity model docs describe it as “a high-performance reasoning model leveraging advanced multi-step Chain-of-Thought (CoT) reasoning and enhanced information retrieval” (https://docs.perplexity.ai/docs/sonar/models/sonar-reasoning-pro).

- **When was it released? What was its predecessor?**  
  - Predecessor: `sonar-reasoning`, which Perplexity explicitly marks as deprecated on **December 15, 2025**, with Sonar Reasoning Pro as its replacement (https://docs.perplexity.ai/docs/sonar/models/sonar-reasoning-pro).  
  - Release timing: Sonar Reasoning Pro was released shortly before or around that deprecation date as the direct successor. Exact day is not given in public docs.  
    → `[INFERRED FROM PROVIDER DOCS]` that the release was in late 2025.

- **Official API model ID(s).**  
  - Primary ID: `sonar-reasoning-pro` (Perplexity docs, PromptHub model card: https://www.prompthub.us/models/sonar-reasoning-pro).  
  - Earlier reasoning ID: `sonar-reasoning` (deprecated 2025-12-15).

- **Provider’s own positioning.**  
  Perplexity positions Sonar Reasoning Pro as:  
  - A “high-performance reasoning model” for “complex multi-step analysis and reasoning” and “advanced research with deep reasoning” (https://docs.perplexity.ai/docs/sonar/models/sonar-reasoning-pro).  
  - Best suited for tasks needing “advanced multi-step Chain-of-Thought (CoT) reasoning and enhanced information retrieval” (same source).


## 2. Core capabilities

For each axis: (a) what it can do, (b) hard limits, (c) example, (d) source.

### 2.1 Reasoning

- **(a) Capabilities**  
  - Designed specifically for multi-step reasoning and analysis with explicit chain-of-thought internally.  
  - Optimized for complex problem-solving that benefits from external web context and multi-hop reasoning (Perplexity docs: https://docs.perplexity.ai/docs/sonar/models/sonar-reasoning-pro).  
  - Handles long, structured arguments, decompositions, and comparisons better than Perplexity’s generic `sonar` models `[INFERRED]`.

- **(b) Hard limits**  
  - No documented user-facing control over “thinking level” like OpenAI’s `reasoning_effort` or o1/o3 “slow” modes; reasoning depth is mostly automatic `[INFERRED]`.  
  - Will still hallucinate when web results are sparse, misaligned, or not correctly interpreted, especially on niche technical questions `[INFERRED]`.  
  - Under heavy prompt constraints (strict JSON, no explanation), reasoning may be abbreviated.

- **(c) Example task it handles well**  
  - Multi-step comparative analysis: e.g., “Compare the energy, transmission, and deployment constraints for nationwide residential heat pump adoption in Germany vs. the UK, citing current policy documents and recent grid studies.”

- **(d) Source**  
  - Positioning & multi-step CoT emphasis from Perplexity docs (https://docs.perplexity.ai/docs/sonar/models/sonar-reasoning-pro).  
  - Behavior details `[INFERRED]` from role (reasoning-focused) and Perplexity’s general product behavior.

### 2.2 Tool use

- **(a) Capabilities**  
  - Perplexity exposes Sonar models through an OpenAI-compatible API, including `tools`/function-calling semantics (seen in community integrations like LiteLLM and custom providers: e.g., https://github.com/obsidianmd/obsidian-clipper/issues/363, https://github.com/BerriAI/litellm/discussions/8728).  
  - Supports parallel tool calls and agentic loops at the application layer (e.g., via frameworks like LiteLLM or LangChain) `[INFERRED]`.

- **(b) Hard limits**  
  - No native, provider-managed “agents” framework comparable to OpenAI Assistants or Anthropic Workflows; orchestration must be implemented by the caller `[INFERRED]`.  
  - No public MCP (Model Context Protocol) support as a first-class provider `[INFERRED]`.

- **(c) Example**  
  - Use Sonar Reasoning Pro as the “brain” in a research agent that:  
    1. Calls a custom scraping tool,  
    2. Summarizes the scrape,  
    3. Cross-checks with web search,  
    4. Emits a structured report.

- **(d) Source**  
  - OpenAI-compatible APIs and tool use discussed in community threads (e.g., LiteLLM discussion 8728).  
  - Lack of first-party agent framework `[INFERRED]`.

### 2.3 Web grounding

- **(a) Capabilities**  
  - Sonar Reasoning Pro is tightly integrated with Perplexity’s search layer (“enhanced information retrieval” – docs).  
  - It can run a web search before answering; only the **user message** drives retrieval, while the system prompt shapes how results are used (Prompt Guide: https://docs.perplexity.ai/docs/sonar/prompt-guide).  
  - Supports search controls (e.g., `search_domain_filter`, `search_recency_filter`) and options like `return_images`, `return_related_questions` via API parameters (LiteLLM / Perplexity threads such as https://github.com/BerriAI/litellm/discussions/8728).  
  - Produces answers with inline, URL-based citations to web sources `[INFERRED FROM PERPLEXITY PRODUCT BEHAVIOR]`.  
  - Freshness is near-real-time because retrieval hits the live web, not a fixed training snapshot `[INFERRED]`.

- **(b) Hard limits**  
  - System prompts cannot influence the search step, only the answer generation (Prompt Guide).  
  - If the web has little or conflicting content, the model may overgeneralize or pick low-quality sources.  
  - When explicitly disabled from searching (via parameters), it falls back to static training data, which has a hidden knowledge cutoff `[UNKNOWN — provider does not publish]`.

- **(c) Example**  
  - “Summarize the latest regulatory developments on the EU AI Act since mid‑2025, with citations to official EU documents and major news outlets.”

- **(d) Source**  
  - Retrieval mechanics and separation of system prompt vs search in Prompt Guide (https://docs.perplexity.ai/docs/sonar/prompt-guide).  
  - Parameter controls from API/community examples `[INFERRED FROM DISCUSSION 8728]`.

### 2.4 Vision

- **(a) Capabilities**  
  - No public documentation asserts that Sonar Reasoning Pro accepts image files as input.  
  - It can reason *about* images described in text (e.g., alt-text, captions), but that is standard text LLM behavior `[INFERRED]`.

- **(b) Hard limits**  
  - Likely **no native image input** endpoint for `sonar-reasoning-pro` (Perplexity docs for Sonar Reasoning Pro are text-only).  
  - No OCR, bounding box, or vision-tool APIs documented.

- **(c) Example**  
  - “Given this text description of a chart, infer what the underlying dataset might look like and what trends are likely being highlighted.”

- **(d) Source**  
  - Negative evidence from Perplexity docs (no mention of vision for Sonar Reasoning Pro). `[INFERRED]`.

### 2.5 Audio / multimodal

- **(a) Capabilities**  
  - No documented native audio or video input for `sonar-reasoning-pro`.  
  - Can process transcripts or textual descriptions, as with any text model `[INFERRED]`.

- **(b) Hard limits**  
  - No streaming ASR, TTS, or video analysis endpoints attributed to this model in Perplexity docs.  
  - Any audio handling must be done by external tools, then passed as text.

- **(c) Example**  
  - “Given a transcript of a 45‑minute technical podcast, extract the main arguments and disagreements and propose questions for follow‑up research.”

- **(d) Source**  
  - Absence of audio/multimodal claims in the Sonar Reasoning Pro docs `[INFERRED]`.

### 2.6 Code generation

- **(a) Capabilities**  
  - Can generate and refactor code in common languages (Python, JavaScript/TypeScript, Java, etc.) to support research workflows, data analysis, or prototype scripts `[INFERRED]`.  
  - Helps design algorithms, explain code, and reason about trade-offs when combined with web search.

- **(b) Hard limits**  
  - No official SWE-bench, HumanEval, or similar published scores for Sonar Reasoning Pro.  
  - Does not have a provider-managed execution sandbox; callers must execute code externally `[INFERRED]`.  
  - On large, multi-file projects, will be weaker than specialized coding models like OpenAI’s `o3-mini`/`o1` or dedicated code models `[INFERRED]`.

- **(c) Example**  
  - “Write a Python script that ingests a list of URLs, scrapes the HTML, and extracts and normalizes all tables into a single CSV; explain design decisions and edge cases.”

- **(d) Source**  
  - Code behavior `[INFERRED]` from general LLM capabilities; lack of benchmarks `[UNKNOWN — would need provider benchmarks]`.

### 2.7 Long context

- **(a) Capabilities**  
  - Perplexity documents a **128K token context length** for Sonar Reasoning Pro (https://docs.perplexity.ai/docs/sonar/models/sonar-reasoning-pro).  
  - Can ingest long documents, multi-document packs, or long conversations, and combine them with web search.  
  - Suitable for in-depth research dossiers and long-form reasoning `[INFERRED]`.

- **(b) Hard limits**  
  - As with most long-context models, attention over the full 128K may degrade: factual recall from early sections may get fuzzy, especially if combined with heavy web retrieval `[INFERRED]`.  
  - Output length is practically much smaller than context window; typical safe maximum is on the order of a few thousand tokens `[INFERRED]`.

- **(c) Example**  
  - “Read these 6 policy PDFs (~80K tokens total) and produce a synthesized 3,000‑token brief comparing policy options, with inline references to section numbers.”

- **(d) Source**  
  - 128K context from Perplexity docs.  
  - Degradation behavior `[INFERRED]` from general long-context LLM patterns.

### 2.8 Agentic / computer use

- **(a) Capabilities**  
  - Can be used as the core reasoning engine in custom agents that manage tools like browsers, file systems, and APIs via function-calling `[INFERRED]`.  
  - Works well when paired with frameworks (LiteLLM, LangChain, custom orchestrators) that handle retries, splitting, and tool routing.

- **(b) Hard limits**  
  - No first-party browser/OS-control agent product (unlike OpenAI Assistants with tools or some proprietary “AI desktop” agents).  
  - Must not be assumed to be safe as a fully autonomous agent without external safety checks `[INFERRED]`.

- **(c) Example**  
  - A research assistant that:  
    1. Uses a scraping tool,  
    2. Stores results in a vector DB,  
    3. Uses Sonar Reasoning Pro to query + synthesize reports.

- **(d) Source**  
  - Capabilities/limits `[INFERRED]` from API and ecosystem usage.

### 2.9 Structured output

- **(a) Capabilities**  
  - Supports JSON-like structured output via prompt instructions and OpenAI-style tool schemas `[INFERRED]`.  
  - Can follow explicit schemas reasonably well for moderate complexity.

- **(b) Hard limits**  
  - No dedicated “JSON mode” flag or strong native schema enforcement documented (unlike, for example, some OpenAI models with `response_format={"type":"json_object"}` semantics) `[INFERRED]`.  
  - Under heavy pressure (very complex schema + long context) it may drift or include commentary.

- **(c) Example**  
  - “Given this legal contract, extract parties, effective dates, termination clauses, governing law, and obligations into the following JSON schema…”

- **(d) Source**  
  - Structured output capabilities `[INFERRED]` from function/tool support and general LLM behavior.


## 3. Operational

> Many of these details are account- and time-dependent; where Perplexity does not publish stable numbers, they are marked `[UNKNOWN]`.

- **Pricing per 1M tokens (input, output, cached, batch)**  
  - Perplexity maintains a pricing page for API usage, but Sonar Reasoning Pro’s exact per‑1M pricing is not included in the provided docs.  
  - `[UNKNOWN — would need current Perplexity pricing page; prices may change frequently]`.

- **Latency: TTFT, tokens/sec**  
  - Typical latency for Perplexity’s Sonar models is on the order of hundreds of milliseconds to a couple of seconds TTFT for moderate prompts, with tens of tokens/sec streaming `[INFERRED FROM GENERAL PROVIDER BEHAVIOR]`.  
  - No official latency benchmarks in the docs. `[UNKNOWN — would need measurement]`.

- **Rate limits (RPM, TPM, concurrent)**  
  - Rate limits are tied to account tier (free, paid, enterprise) and not fully specified in public docs.  
  - `[UNKNOWN — would need Perplexity account documentation or dashboard]`.

- **Prompt caching**  
  - Perplexity markets “no training on customer data” for Sonar Reasoning Pro (docs), which implies careful handling of user content.  
  - There is no explicit public description of a token-level prompt caching mechanism (like OpenAI’s cache read/write multipliers).  
  - `[UNKNOWN — would need provider technical docs; assume no user-visible caching controls]`.

- **Batch API**  
  - Perplexity’s API is broadly OpenAI-compatible, but there is no explicit “batch” endpoint documented for Sonar Reasoning Pro in the provided sources.  
  - `[UNKNOWN — would need latest API reference]`.

- **Knowledge cutoff date**  
  - Underlying base model cutoff is not publicly documented.  
  - Effective knowledge for many tasks is current due to web search; however, offline training data still has some older cutoff.  
  - `[UNKNOWN — would need explicit provider statement]`.

- **Context window + output cap**  
  - Context window: **128K tokens** (Perplexity docs).  
  - Output cap: Not formally published; practically in the low-thousands of tokens per response `[INFERRED]`.


## 4. Integrations

- **First-party connectors**  
  - Perplexity focuses on API + web app; there is no public list of dedicated “connectors” like X/Twitter or Vertex AI Studio for Sonar Reasoning Pro specifically.  
  - Some third-party services (e.g., Make.com, Obsidian plugins, etc.) are experimenting with Sonar models via API (https://community.make.com/t/perplexitys-sonar-reasoning-pro/69186, https://github.com/obsidianmd/obsidian-clipper/issues/363).  
  - `[INFERRED]` that there is no special social or cloud platform connector beyond generic HTTP.

- **Official SDK languages**  
  - Perplexity offers an OpenAI-compatible HTTP API; there are lightweight official or semi-official SDKs/wrappers in at least **Python** and **JavaScript/TypeScript** `[INFERRED FROM PROVIDER ECOSYSTEM]`.  
  - Many users also access it via third-party SDKs like LiteLLM and LangChain (GitHub discussions).

- **MCP support (client/server)**  
  - No explicit mention of MCP support as a provider or client.  
  - `[UNKNOWN — would need explicit provider confirmation]`.

- **Registries (Claude skills, OpenAI Assistants tools, Gemini extensions)**  
  - Sonar Reasoning Pro is not a native participant in other vendors’ registries.  
  - It can be *used* through multi-provider orchestrators (e.g., LiteLLM, custom routers) but does not appear in OpenAI Assistants, Claude skills, or Gemini extensions catalogues `[INFERRED]`.


## 5. Differentiation

> Following the instructions, this section leads with weaknesses vs specific peers, then strengths.

### 5.1 Where Sonar Reasoning Pro is weaker vs specific peers

- **Code-heavy, large repository tasks**  
  - For tasks like multi-file refactors, complex debugging, or benchmarked coding tasks, OpenAI’s `o3-mini` / `o1` and earlier `gpt-4.1` models tend to outperform generic reasoning models on benchmarks like SWE-bench and HumanEval.  
  - Sonar Reasoning Pro has no published SWE-bench/HumanEval scores; peers do, and are optimized explicitly for software engineering.  
  - `[INFERRED — would need controlled benchmarks but this is the dominant industry pattern]`.

- **Strict tool-orchestration ecosystems**  
  - OpenAI’s `gpt-4.1` and reasoning series (via Assistants) and Anthropic’s Claude 3.5 Sonnet/Opus (via tool use + Workflows) provide richer first-party agent environments.  
  - Sonar Reasoning Pro requires custom orchestration, making it less convenient for teams standardized on Assistants or Claude tools for complex multi-tool flows `[INFERRED]`.

- **Vision & audio multimodal tasks**  
  - For direct image, document, and audio processing, models like **GPT‑4o** and **Gemini 1.5 Pro** (and successors) have strong multimodal pipelines, including OCR, vision, and audio.  
  - Sonar Reasoning Pro has no documented image/audio endpoints; it is text-only, so it is clearly weaker for end-to-end multimodal use cases.

- **Guardrail-rich enterprise deployments**  
  - Anthropic Claude 3.5 and 3 Opus and OpenAI o‑series models have extensive policy, safety tuning, and policy tooling (audit logs, moderation APIs, governance controls).  
  - Perplexity exposes Sonar Reasoning Pro via a simpler API, without equivalent depth of first-party governance tooling `[INFERRED]`.

### 5.2 Where Sonar Reasoning Pro is comparatively strong

- **Integrated web-grounded reasoning**  
  - Sonar Reasoning Pro is architected with Perplexity’s search pipeline; retrieval is not an add‑on but core to the product (Prompt Guide + model docs).  
  - This integration gives it an edge in *research-style workloads with up-to-date citations* compared to peers run in purely offline mode, especially when the integrator does not build their own retrieval pipeline `[INFERRED]`.

- **Long-context research with live search**  
  - Combining a **128K context** with integrated search makes it suited to tasks like: “read many long PDFs + triangulate with current web sources,” which some peers require more custom RAG infrastructure to match `[INFERRED]`.

- **Web-native fact checking and triangulation**  
  - Because retrieval is built-in and tunable via parameters, Sonar Reasoning Pro can more easily:  
    - Cross-check conflicting claims,  
    - Pull from multiple news and academic sources,  
    - Present explicit citations as part of its default behavior.  
  - This behavior is closer to a “live research assistant” than a conventional offline LLM `[INFERRED FROM PERPLEXITY PRODUCT DESIGN]`.

### 5.3 What ONLY Sonar Reasoning Pro can do (honest assessment)

- There is **no known task that only Sonar Reasoning Pro can perform** in principle.  
  - Competing models (GPT‑4.x / o‑series, Claude 3.x, Gemini 1.5/2.x) can also be wired to search backends and handle long-context reasoning.  
  - Sonar Reasoning Pro’s uniqueness lies mainly in *the combination of Perplexity’s search stack + this reasoning model as a turnkey service*, not in an exclusive capability that cannot be replicated.

### 5.4 Summary of differentiation vs named peers

- **Beats or is attractive vs:**  
  - Offline‑only GPT‑4.x / Claude 3.x deployments when the integrator wants **minimal custom RAG** and **strong web grounding** out of the box.  
- **Beaten by:**  
  - **OpenAI `o3-mini` / `o1` / `gpt-4.1`** for benchmarked coding and some math-heavy reasoning tasks.  
  - **GPT‑4o, Gemini 1.5 Pro** for multimodal workloads.  
  - **Claude 3.5 Sonnet/Opus** and OpenAI’s ecosystem when rich safety tooling and first-party agents are required.  
  - These judgments are `[INFERRED]` and would need head-to-head benchmarks (e.g., GPQA, MMLU, SWE-bench, ARC-AGI) for precise numbers, which Perplexity has not publicly provided for Sonar Reasoning Pro. `[UNKNOWN — would need benchmarks]`.


## 6. Known limitations + failure modes

- **Refusal patterns**  
  - As a Perplexity-hosted model, Sonar Reasoning Pro follows Perplexity’s content policies; it is more likely to refuse or sanitize:  
    - Explicitly harmful instructions (self-harm, weapon construction, targeted harassment).  
    - Certain medical, legal, or financial advice when questions are very prescriptive or high-risk `[INFERRED]`.  
  - Over-refusal can occur when web results are saturated with safety-aligned content (e.g., queries about “how to bypass X security feature”) `[INFERRED]`.

- **Degradation patterns**  
  - **Long-context drift:** With very long prompts near 128K tokens, it may mis-reference early details or mix sources, especially when lots of web snippets are injected.  
  - **Code-heavy prompts:** Without dedicated code optimization and benchmarks, complex multi-file or performance-critical code may be brittle or partially incorrect.  
  - **Math-heavy reasoning:** Advanced, multi-step formal math proofs or competition-level problems likely underperform specialized reasoning models like OpenAI `o1`/`o3-mini` or bespoke math LLMs `[INFERRED]`.

- **Latency/timeout failure modes**  
  - Because it performs web search before answering, latency can spike when:  
    - The query triggers many search requests (broad topics),  
    - Target sites are slow or blocked.  
  - Timeouts or degraded answers can appear when search results are truncated or fail, leading it to fall back more on static training data `[INFERRED]`.

- **Bugs or quirks seen in the wild**  
  - Community issues often involve:  
    - Misconfigured message roles or OpenAI-format mismatches (e.g., “invalid_message 400: After the (optional) system message(s), user and assistant roles should be alternating” in Obsidian Clipper using Perplexity as a custom provider – https://github.com/obsidianmd/obsidian-clipper/issues/363).  
    - Confusion about how search parameters (e.g., `search_domain_filter`, `return_images`) map through third-party wrappers (LiteLLM discussion 8728).  
  - These are more integration quirks than model defects, but they affect real-world behavior.

  
## 7. Ideal tasks + avoid-when

### 7.1 Top 5 ideal task types

1. **Deep, web-grounded research briefs**  
   - E.g., “Explain the current landscape of small modular reactors, referencing technical reports, recent regulatory filings, and major news coverage.”  
   - Leverages retrieval + reasoning.

2. **Policy and legal landscape overviews (non-binding)**  
   - E.g., “Summarize proposed and enacted AI regulations in the EU, US, and UK, with citations, and highlight key differences.”  
   - Requires current, multi-jurisdictional sources.

3. **Scientific literature reconnaissance**  
   - E.g., “Survey recent papers (last 1–2 years) on diffusion transformers for long-sequence modeling; categorize approaches and identify open questions.”  
   - Combines search with long-context summaries.

4. **Strategic / competitive analysis with live web data**  
   - E.g., “Compare the current positioning of top open-source LLMs vs. closed-source models, with citations to blogs, benchmarks, and press releases.”

5. **Complex reasoning with structured justification**  
   - E.g., “Given these scenario assumptions, walk through a step-by-step reasoning chain for why a particular market entry strategy is risky or attractive, citing data where possible.”

### 7.2 Top 5 avoid-when tasks (and better peers)

1. **Heavy multimodal (images, PDFs with layout, audio)**  
   - Avoid using Sonar Reasoning Pro for: invoice OCR, chart interpretation from images, video summarization.  
   - Prefer: **GPT‑4o**, **Gemini 1.5 Pro / successors**, or similar multimodal models.

2. **High-stakes coding / production-grade refactoring**  
   - Avoid for large codebase migrations, security-sensitive code, or automated PR generation.  
   - Prefer: **OpenAI `o3-mini` / `o1` / `gpt-4.1`**, or specialized code LLMs with measured SWE-bench and HumanEval performance.

3. **Formal math / proof-heavy reasoning**  
   - Avoid for competition-style math or formal verification.  
   - Prefer: **OpenAI `o1` / `o3-mini`** or other math-focused models where available.

4. **Environments needing deep, first-party governance tooling**  
   - For sectors demanding strong in-vendor governance (auditing tools, built-in red-teaming pipelines, policy management), Sonar Reasoning Pro is less equipped out-of-the-box.  
   - Prefer: **Claude 3.5 Sonnet/Opus** or **OpenAI enterprise offerings** where those controls are required `[INFERRED]`.

5. **Workflows tightly coupled to vendor-specific agent platforms**  
   - If a stack is already deeply integrated with OpenAI Assistants, Gemini extensions, or Claude tools, introducing Sonar Reasoning Pro may add friction.  
   - Prefer staying with the platform-native model (e.g., `gpt-4.1` with Assistants, Claude 3.5 with Workflows) unless there is a strong reason to add Perplexity.


## 8. Lifecycle

- **Release date of this version**  
  - Not explicitly given; Sonar Reasoning Pro appears as the replacement when `sonar-reasoning` is deprecated on **December 15, 2025** (https://docs.perplexity.ai/docs/sonar/models/sonar-reasoning-pro).  
  - `[INFERRED]` that it was released in late 2025.

- **Predecessor + retirement date**  
  - Predecessor: `sonar-reasoning`.  
  - Retirement/deprecation: **December 15, 2025** (explicitly noted in docs).

- **Successor (if announced)**  
  - As of the referenced docs, there is no officially announced successor to `sonar-reasoning-pro`.  
  - `[UNKNOWN — would need up-to-date provider announcements]`.

- **Deprecation risk signals**

  Indicators that Sonar Reasoning Pro might face deprecation in the future (none are currently confirmed, this is risk analysis):

  - Introduction of a new reasoning model in Perplexity docs with stronger branding (e.g., “Sonar Reasoning Ultra”) `[INFERRED]`.  
  - Provider markings like “legacy,” “beta,” or deprecation banners in docs or dashboard.  
  - Changes to the Supported Models list in Perplexity’s API reference removing or downgrading `sonar-reasoning-pro` (similar to how `sonar-reasoning` is labeled deprecated).

Overall, Sonar Reasoning Pro is best viewed as Perplexity’s **current-generation, web-integrated reasoning LLM**, optimized for research-style, multi-step analysis that benefits from live search and a large context window, but not as a specialized coding, multimodal, or agent-platform model.