## 1. Identity
- **Name & Builder:** Gemini 3.1 Pro (built by Google DeepMind).
- **Release Date:** February 19, 2026 (Preview).
- **Predecessor:** Gemini 3 Pro (released November 18, 2025).
- **API Model ID(s):** `gemini-3.1-pro-preview`, `gemini-3.1-pro-preview-customtools`. 
- **Positioning:** Google DeepMind positions Gemini 3.1 Pro as its frontier reasoning model, focused on complex problem-solving, advanced software engineering, and reliable multi-step agentic execution over its predecessors. It deprecates manual "Deep Think" wrappers in favor of native thinking parameters. 

## 2. Core capabilities

- **Reasoning**
  - **(a) What it can do:** Features native internal chain-of-thought configured via a `thinking_level` parameter (options: low, medium, high) to balance latency and reasoning complexity.
  - **(b) Hard limits:** Severely underperforms Anthropic models on broad expert-level evaluation metrics.
  - **(c) Example:** Solving abstract visual logic puzzles. 
  - **(d) Source:** Google DeepMind Model Card / Vertex AI Documentation (May 2026).

- **Tool use**
  - **(a) What it can do:** Supports function calling, parallel tool calls, Model Context Protocol (MCP), and features a dedicated endpoint (`gemini-3.1-pro-preview-customtools`) heavily optimized for Bash and custom tool usage.
  - **(b) Hard limits:** Using the specialized `customtools` endpoint for standard queries that do not invoke custom tools causes documented quality fluctuations and response degradation.
  - **(c) Example:** Multi-step agentic workflow using an MCP client to fetch server logs and rewrite broken endpoints. 
  - **(d) Source:** Generative AI on Vertex AI Documentation (May 2026).

- **Web grounding**
  - **(a) What it can do:** Built-in grounding via Google Search and Google Maps.
  - **(b) Hard limits:** Performance drops meaningfully when handling blocklisted search contexts (scores 51.4% on "Search + Code" vs. Opus 4.6 at 53.1%).
  - **(c) Example:** Querying real-time financial market data to inform an economic projection.
  - **(d) Source:** DeepMind Benchmarks (Feb 2026).

- **Vision**
  - **(a) What it can do:** Processes multimodal inputs including images, video, and PDFs; excels at cloning UIs from screenshots and generating code-based animated SVGs.
  - **(b) Hard limits:** Does not support native API image generation (requires separate Veo 3.1 or Nano Banana 2 models). `[INFERRED]` Complex OCR on unaligned, chaotic layouts still suffers from hallucination.
  - **(c) Example:** Generating a functional React component directly from an uploaded dashboard mockup.
  - **(d) Source:** Google AI for Developers / Google Blog (Feb 2026).

- **Audio / multimodal**
  - **(a) What it can do:** Analyzes audio files natively alongside video and text. 
  - **(b) Hard limits:** Native audio *generation* is explicitly listed as unsupported in the text API endpoints. Output is purely text/code.
  - **(c) Example:** Transcribing a recorded project stand-up meeting and mapping action items to specific speakers.
  - **(d) Source:** Gemini 3.1 Pro Preview API Specs (Feb 2026).

- **Code generation**
  - **(a) What it can do:** High-level "vibe coding," capable of parsing entire repositories up to 1M tokens, and features native code execution sandboxes.
  - **(b) Hard limits:** On the SWE-Bench Pro (Public) benchmark, it tops out at 54.2%, failing to match dedicated coding models like GPT-5.3-Codex.
  - **(c) Example:** Finding a multi-threaded race condition in a C++ file.
  - **(d) Source:** DeepMind Benchmarks (Feb 2026).

- **Long context**
  - **(a) What it can do:** Supports an input context window of 1,048,576 tokens.
  - **(b) Hard limits:** Output length is heavily capped at a maximum of 65,536 tokens.
  - **(c) Example:** Parsing 1,000 pages of legal discovery PDFs to trace a single corporate entity.
  - **(d) Source:** Google AI Studio Limits / OpenRouter Specs.

- **Agentic / computer use**
  - **(a) What it can do:** Strong multi-step tool and search chaining, achieving 69.2% on MCP Atlas (outperforming Opus 4.6's 59.5%).
  - **(b) Hard limits:** Native "Computer Use" (pixel-level OS manipulation) is officially *not supported* on 3.1 Pro, despite being supported on the lighter Gemini 3 Flash.
  - **(c) Example:** Running sequential Python commands in the execution sandbox to clean dataset anomalies.
  - **(d) Source:** Google AI Studio Feature Matrix (May 2026).

- **Structured output**
  - **(a) What it can do:** JSON mode and strict schema enforcement.
  - **(b) Hard limits:** `[INFERRED]` Highly nested, recursive JSON schemas occasionally drop keys or break schema compliance if the `thinking_level` is set too low.
  - **(c) Example:** Forcing a prompt response into a predefined schema of user profiles and contact information.
  - **(d) Source:** Gemini 3 Developer Guide.

## 3. Operational
- **Pricing per 1M tokens:** $2.00 input, $12.00 output.
- **Latency:** `[UNKNOWN — would need a benchmark]`
- **Rate limits:** `[UNKNOWN — would need a benchmark]` 
- **Prompt caching:** Supported. `[INFERRED]` Subject to standard Context Caching pricing.
- **Batch API:** Supported. `[INFERRED]` Subject to standard Batch discount rates.
- **Knowledge cutoff date:** January 2025.
- **Context window size + output cap:** 1,048,576 token input max, 65,536 token output max.

## 4. Integrations
- **First-party connectors:** Google AI Studio, Vertex AI, Gemini CLI, Google Antigravity (agentic development platform), Android Studio, NotebookLM.
- **Official SDK languages:** Python, JavaScript/Node.js. `[INFERRED]` Go and Java.
- **MCP support:** Supported heavily (client-side evaluation logic).
- **Registries:** Built-in integration with Google Search, Google Maps, and Code Execution. 

## 5. Differentiation — THIS SECTION DETERMINES YOUR SCORE
- **Decisive Defeats:** Gemini 3.1 Pro is decisively beaten by Anthropic models on Expert Task validation. On the GDPval-AA Elo benchmark, Gemini 3.1 Pro scores a dismal 1317 Elo, radically trailing Sonnet 4.6 (1633 Elo) and Opus 4.6 (1606 Elo). It is also demonstrably weaker than specialized peer code models; on SWE-Bench Pro (Public), its 54.2% score loses to GPT-5.3-Codex (56.8%) and GPT-5.2 (55.6%). Finally, on Search + Code workflows involving blocklists, Opus 4.6 beats Gemini 3.1 Pro (53.1% vs 51.4%).
- **What Gemini 3.1 Pro is actually uniquely best at:** Gemini 3.1 Pro outperforms peers significantly on abstract reasoning puzzles, scoring 77.1% on ARC-AGI-2 compared to Opus 4.6 (68.8%), Sonnet 4.6 (58.3%), and GPT-5.2 (52.9%). It also holds a narrow lead on GPQA Diamond (94.3% vs GPT-5.2's 92.4%) and Terminal-Bench 2.0 (68.5% vs Opus 4.6's 65.4%). 
- **What ONLY Gemini 3.1 Pro can do:** Nothing. Features like 1M-token windows, tool calling, and structured outputs are standard across all major 2026 competitors (GPT-5 series, Claude 4.6 series).

## 6. Known limitations + failure modes
- **Refusal patterns:** `[INFERRED]` Inherits Google's highly conservative safety protocols, occasionally over-refusing benign code injections, scraping requests, or security audit scripts on the grounds of "harmful instructions."
- **Degradation patterns:** Using the `gemini-3.1-pro-preview-customtools` endpoint for prompts that do not require custom tools heavily degrades standard answer quality. 
- **Latency/timeout failure modes:** Utilizing `thinking_level: HIGH` drastically increases Time-To-First-Token (TTFT), potentially causing timeouts on synchronous client-side API wrappers. 
- **Bugs or quirks documented in the wild:** Native Computer Use is explicitly not supported on the 3.1 Pro model via AI Studio, confusing users who expect the flagship Pro model to possess the same OS manipulation features available in the smaller Gemini 3 Flash model. 

## 7. Ideal tasks + avoid-when
**Top 5 task types where Gemini 3.1 Pro should be the primary choice:**
1. Abstract visual logic and pattern solving (ARC-AGI-2).
2. Deep document analysis across ultra-long contexts (1M tokens).
3. "Vibe coding" entire applications visually via screenshot-to-code pipelines.
4. Terminal/Bash multi-step agentic workflows (using the dedicated `customtools` endpoint).
5. Retrieving complex scientific knowledge (GPQA Diamond).

**Top 5 task types where Gemini 3.1 Pro should NOT be used:**
1. Evaluating high-level expert tasks (Use Sonnet 4.6 or Opus 4.6).
2. High-complexity, single-attempt software engineering jobs (Use GPT-5.3-Codex).
3. Direct Desktop "Computer Use" / OS control (Use Gemini 3 Flash or Sonnet 4.6).
4. Generating native audio responses (Use GPT-4o / GPT-5 series).
5. Generating pixel-based images (Use Google Nano Banana 2, Veo 3.1, or OpenAI DALL-E 3/4).

## 8. Lifecycle
- **Release date of this version:** February 19, 2026 (Public Preview).
- **Predecessor + retirement date:** Gemini 3 Pro Preview (Released Nov 18, 2025; discontinued March 26, 2026).
- **Successor:** Unannounced, though the `-preview` suffix strongly signals an upcoming stable GA version of 3.1 Pro.
- **Deprecation risk signals:** High for the preview string (`gemini-3.1-pro-preview`). Developers should expect to migrate to a stable endpoint soon.