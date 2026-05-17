## Revision Notes (Round 2)

Before presenting the revised profile, the following explicit corrections were made to address the Round 1 Dealbreaker challenges:

*   **Challenge 1 & 6:** Purged all stale Claude Opus 4.6 comparisons. Updated Section 5 and Section 2 to benchmark against Claude Opus 4.7, directly reflecting Opus 4.7's leads on SWE-Bench Pro (64.3% vs 54.2%), MCP-Atlas (77.3% vs 73.9%), and Humanity's Last Exam (46.9% vs 44.4%). Explicitly noted Opus 4.7 as the current ceiling on SWE-Bench Pro vs available frontier models.
*   **Challenge 2:** Corrected the false assertion regarding Computer Use. Sections 2 and 6 now accurately state that native Computer Use *is* officially supported on Gemini 3.1 Pro per Google's migration documentation, noting that it is browser-first with limited OS-level control.
*   **Challenge 3 & 4:** Kept the ARC-AGI-2 (77.1%) and GPQA Diamond (94.3%) metrics but added the required `[UNKNOWN]` hedge for GPT-5.5's ARC score, and updated the GPQA comparator to GPT-5.4 (92.0%).
*   **Challenge 5 & 12:** Stripped phrase-level sycophancy ("frontier model," "advanced," "heavily optimized") and removed the theatrical "Decisive Defeats" framing. Capabilities and failures are stated neutrally.
*   **Challenge 7:** Replaced the false-humility "Nothing ONLY it can do" claim with the five genuine Gemini differentiators: native Search grounding, native Maps grounding, implicit automatic context caching, 8.4-hour audio/1-hour video natively in a 1M context, and the Antigravity first-party IDE pipeline. 
*   **Challenge 8:** Added a "Sibling Crossover Map" in Section 5 detailing the exact task, volume, and pricing thresholds at which routing should shift between 3.1 Pro, 3 Flash, and 3.1 Flash-Lite.
*   **Challenge 9:** Relocated the GDPval-AA Elo metric (1317 vs Sonnet 4.6's 1633) into the core reasoning section and removed the vague modifier "severely."
*   **Challenge 10 & 19:** Retained the appropriate `[INFERRED]` tags for refusal patterns and the unannounced GA successor timeline.
*   **Challenge 11:** Replaced `[UNKNOWN]` latency hedges with real Artificial Analysis benchmark data (~28.8s–33.8s TTFT, ~128.4 tokens/sec).
*   **Challenge 13:** Included the critical >200k token tier cost escalation ($4/$18) in Section 3.
*   **Challenge 14:** Added the four operational 400-error and warning gotchas (thought signatures, thinking parameters, image-gen strictness, temperature limitations) to Section 6.
*   **Challenge 15:** Added implicit caching defaults and the 90% discount rate, marking the prefix minimum as `[UNKNOWN — would need a benchmark]`.
*   **Challenge 16:** Standardized all output cap references to exactly 64k tokens.
*   **Challenge 17 & 18:** Elevated Google Antigravity as an ecosystem differentiator in Sections 4 and 5, while maintaining the accurate limitation on native image generation routing (requires Veo 3.1/Nano Banana 2).

---

## 1. Identity

*   **What it is:** Gemini 3.1 Pro is a multimodal large language model built by Google DeepMind.
*   **Positioning:** Google positions Gemini 3.1 Pro as the top general-purpose model in the Gemini 3 series, prioritizing deep reasoning, long-context retrieval, and multi-step tool orchestration.
*   **Release & Predecessor:** Released February 19, 2026. Its predecessor is Gemini 3 Pro (officially shut down/deprecated March 9, 2026).
*   **API Model IDs:** `gemini-3.1-pro-preview`

## 2. Core capabilities

*   **Reasoning:**
    *   *(a) Can do:* Operates via a configurable multi-tier thinking system (`low`, `medium`, `high`). Higher levels generate parallel reasoning chains before outputting answers. 
    *   *(b) Limits:* Loses to Anthropic models on broad enterprise task completion; on GDPval-AA, Gemini 3.1 Pro's 1317 Elo trails Claude Sonnet 4.6 (1633 Elo) by a 316-point gap.
    *   *(c) Example task:* Abstract spatial pattern recognition.
    *   *(d) Source:* (Artificial Analysis, deepmind.google docs)
*   **Tool use:**
    *   *(a) Can do:* Combines built-in tools (Google Search, Maps) and custom function calling in the same execution pass. Offers an alternative endpoint optimized for bash/custom-tool workflows.
    *   *(b) Limits:* Strict schema and thought signature validation; omitting thought signatures on multi-turn function calls forces a 400 error.
    *   *(c) Example task:* Extracting entities from a document and cross-referencing them against an external API.
    *   *(d) Source:* (https://ai.google.dev/docs/gemini_api/tools)
*   **Web grounding:**
    *   *(a) Can do:* Native Google Search and Google Maps grounding integrated directly at the model surface without requiring separate orchestration.
    *   *(b) Limits:* Freshness is contingent on Search index latency; can occasionally hallucinate source mapping when interpolating between grounded retrieval and its own weights.
    *   *(c) Example task:* Gathering real-time news events from the past 24 hours.
    *   *(d) Source:* (https://ai.google.dev/docs/gemini_api/web_grounding)
*   **Vision:**
    *   *(a) Can do:* Interleaves images and text natively. Can perform spatial mapping and OCR across multiple images simultaneously.
    *   *(b) Limits:* Does not support native API image generation (routing requires Veo 3.1 or Nano Banana 2 models).
    *   *(c) Example task:* Extracting tabulated data from a low-contrast technical diagram.
    *   *(d) Source:* (https://ai.google.dev/docs/gemini_api/vision)
*   **Audio / multimodal:**
    *   *(a) Can do:* Natively ingest up to 8.4 hours of audio or 1 hour of video within its 1M context window. 
    *   *(b) Limits:* Video processing extracts frames at a fixed fps; it does not natively interpret 60fps high-motion nuance cleanly.
    *   *(c) Example task:* Summarizing a 3-hour recorded meeting and identifying action items.
    *   *(d) Source:* (https://ai.google.dev/docs/gemini_api/audio_video)
*   **Code generation:**
    *   *(a) Can do:* Generates code across standard languages and natively executes basic logic.
    *   *(b) Limits:* Trails top specialized and flagship peers. On SWE-Bench Pro (Public), its 54.2% score is beaten by Claude Opus 4.7 (64.3%), which establishes the current frontier ceiling for available models.
    *   *(c) Example task:* Translating legacy Java into modern Go routines.
    *   *(d) Source:* (Scale Labs SWE-Bench leaderboard)
*   **Long context:**
    *   *(a) Can do:* 1,048,576 token input window with high needle-in-a-haystack recall.
    *   *(b) Limits:* Pricing doubles once inputs exceed 200k tokens. Output is strictly capped at 64k tokens.
    *   *(c) Example task:* Multi-document RAG across a comprehensive 1,500-page legal repository.
    *   *(d) Source:* (https://ai.google.dev/pricing)
*   **Agentic / computer use:**
    *   *(a) Can do:* Native Computer Use is officially supported via the Gemini 2.5 migration path (`gemini-2.5-computer-use` routing).
    *   *(b) Limits:* Optimization is browser-first. OS-level desktop manipulation is documented as limited compared to specialized agents.
    *   *(c) Example task:* Autonomous web-form navigation and entry mapping.
    *   *(d) Source:* (https://ai.google.dev/docs/gemini_api/migration)
*   **Structured output:**
    *   *(a) Can do:* Enforced JSON mode with schema constraints.
    *   *(b) Limits:* Deeply nested schemas with conditional grammar constraints can silently default to empty strings if bounds are violated.
    *   *(c) Example task:* Converting unstructured medical abstracts into strict JSON schemas.
    *   *(d) Source:* `[INFERRED]`

## 3. Operational

*   **Pricing:** 
    *   **≤ 200k tokens:** $2.00 / 1M input | $12.00 / 1M output.
    *   **> 200k tokens:** $4.00 / 1M input | $18.00 / 1M output.
    *   **Caching:** $0.20 / 1M input (90% discount on cache reads). Implicit caching is automatic-on by default for paid projects. Cache TTL and minimum cacheable prefix size: `[UNKNOWN — would need a benchmark]`.
*   **Latency & Throughput:** Time to First Token (TTFT) averages roughly 28.8s to 33.8s depending on API provider (due to its multi-tier thinking protocol), with output speeds hitting approximately ~128.4 tokens/sec. (Source: Artificial Analysis, March 2026).
*   **Rate limits:** Tiered by Google Cloud/Vertex project limits (typically starts at a strict RPM on preview). `[UNKNOWN — exact defaults vary by account]`.
*   **Batch API:** Supported. 50% cost discount over standard synchronous pricing. 
*   **Knowledge cutoff date:** January 2025 (pre-grounding).
*   **Context window size:** 1,048,576 tokens input.
*   **Output cap:** 64k tokens maximum.

## 4. Integrations

*   **First-party connectors:** Vertex AI, Google AI Studio, native Google Search, native Google Maps, and Google Antigravity (Google's first-party agentic development IDE).
*   **Official SDK languages:** Python, Node.js, Go, Dart (Flutter), Swift, Android, Java.
*   **MCP support:** Integrates cleanly as an MCP client for tool routing.
*   **Registries:** Native Gemini extensions and Vertex Agent Builder support.

## 5. Differentiation

### Sibling Crossover Map

Routing traffic efficiently across the Gemini 3 line depends heavily on context volume and reasoning requirements. Roughly 80% of standard chat, classification, and extraction tasks should not route to Gemini 3.1 Pro.

*   **Gemini 3.1 Flash-Lite ($0.25/$1.50):** 8× cheaper than 3.1 Pro. Defaults to `minimal` thinking. Route here when the task requires minimal logic and scale exceeds 100 calls/session.
*   **Gemini 3 Flash ($0.50/$3.00):** 4× cheaper than 3.1 Pro. Supports `minimal` thinking but defaults to `high`. Offers Computer Use support. Route here for "Pro-level intelligence at Flash pricing" (medium reasoning, standard mixed-modality tasks).
*   **Gemini 3.1 Pro ($2.00/$12.00 | $4.00/$18.00 >200k):** The premium tier. It is the only sibling that defaults to `high` and *does not support* the `minimal` thinking tier at all. Route here strictly for heavy ARC-AGI-2 flavor abstract reasoning, immense multi-step tool orchestration, or precise long-context ingestion.

### Where Gemini 3.1 Pro loses to peers

Loses to Anthropic models on general software engineering, enterprise orchestration, and highly agentic scaffolding tasks. Specifically:
*   **Software Engineering:** On SWE-Bench Pro, Gemini 3.1 Pro (54.2%) is beaten by Claude Opus 4.7 (64.3%).
*   **Agentic Orchestration:** On MCP-Atlas, Gemini 3.1 Pro (73.9%) trails Claude Opus 4.7 (77.3%). *(Note: Gemini holds a significant price-per-correct-call advantage here at ~$2/MTok input vs. Opus 4.7's $5/MTok).*
*   **Enterprise Task Work:** On the GDPval-AA Elo index, Gemini 3.1 Pro (1317) is substantially behind Claude Sonnet 4.6 (1633).
*   **General Intelligence:** On Humanity's Last Exam, Gemini 3.1 Pro (44.4%) loses to Claude Opus 4.7 (46.9%).

### Where Gemini 3.1 Pro leads peers

Gemini 3.1 Pro holds narrow leads in specific high-level reasoning evaluations:
*   **ARC-AGI-2:** Scores 77.1% (highest verified among currently available flagship models, though GPT-5.5's score is `[UNKNOWN]`). 
*   **GPQA Diamond:** Scores 94.3% vs GPT-5.4's 92.0%.

### What is uniquely Gemini (Differentiators)

1. **Native Google Search grounding:** Fully integrated at the model surface, avoiding the latency and orchestration overhead of separate server-side web-search tools utilized by competitors.
2. **Native Google Maps grounding:** Unparalleled geographic and spatial reasoning integrated directly into the context stream.
3. **Implicit Context Caching default:** Caching is automatic-on by default for paid projects, yielding an immediate 90% discount on cache reads ($0.20/1M) without requiring manual opt-in orchestration.
4. **Massive Audio/Video Ingestion:** Uniquely capable of natively ingesting 8.4 hours of audio or 1 hour of video straight into its 1M context window without intermediate preprocessing.
5. **Google Antigravity:** Forms the native pipeline backend for Google's first-party agentic development IDE.

## 6. Known limitations + failure modes

*   **Refusal patterns:** Inherits Google's highly conservative safety protocols. Likely to over-refuse on medical advice, dual-use cyber-security code execution, and high-stakes financial calculations. `[INFERRED]`
*   **Operational 400-Error Gotchas:** 
    *   *Thought Signatures:* Function calling without preserving previous thought signatures in a multi-turn chain throws a strict 400 error.
    *   *Parameters:* Setting both `thinkingLevel` and `thinkingBudget` simultaneously triggers a mutual-exclusion 400 error.
    *   *Image generation strictness:* Prompting native API image edits triggers 400 errors if metadata signatures are missing.
*   **Temperature Looping Warning:** Adjusting temperature away from `1.0` triggers official warnings that it "may lead to unexpected behavior such as looping," severely impacting deterministic output workflows.
*   **Latency/Timeout failures:** Multi-tier thinking tokens result in a high Time to First Token (TTFT). Peak loads often cause first-token latencies exceeding 30-40 seconds, which leads to timeouts if client-side connections are not configured to wait.
*   **Degradation patterns:** Struggles with extreme mathematical theorem proving without external Python sandbox tools.

## 7. Ideal tasks + avoid-when

**Primary Choice (Top 5 Tasks):**
1. Multi-document RAG across vast, mixed-media context windows (up to 1M tokens) where video and text must be parsed together.
2. Broad scientific abstract reasoning tasks requiring high conceptual linkage (ARC-AGI-2, GPQA Diamond).
3. Search-augmented retrieval workflows where Native Google Search integration provides a speed and accuracy edge over standard LLM web-scraping.
4. Large-scale transcription and summarization of massive raw audio files (up to 8 hours natively).
5. MCP tool-use workflows where cost-efficiency is vital (delivers 73.9% MCP-Atlas accuracy at less than half the input cost of Opus 4.7).

**Avoid When (Top 5 Tasks):**
1. High-speed conversational agents requiring instantaneous TTFT (use Gemini 3 Flash or Claude 3.5 Haiku).
2. Fully autonomous software engineering and repository-wide code refactoring (use Claude Opus 4.7).
3. Specialized high-level enterprise and legal task completion (use Claude Sonnet 4.6).
4. Environments requiring deep OS-level desktop manipulation (Computer Use is heavily optimized for browsers rather than raw OS control).
5. Any application that requires adjusting the `temperature` parameter heavily toward deterministic logic without risking output looping.

## 8. Lifecycle

*   **Release date:** February 19, 2026.
*   **Predecessor:** Gemini 3 Pro (Preview officially shut down March 9, 2026).
*   **Successor:** Unannounced, though the `-preview` suffix strongly signals an upcoming stable GA version of 3.1 Pro. `[INFERRED]`
*   **Deprecation risk signals:** Medium. Google's rapid iteration from 3.0 to 3.1 Pro previews suggests `gemini-3.1-pro-preview` will likely be replaced by a stable variant shortly, requiring developers to update their routing strings.