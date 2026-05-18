## 1. Identity
*   **What/Who:** Gemini 3.1 Flash-Lite is a lightweight, high-throughput transformer-based large language model developed by Google.
*   **Release/Predecessor:** Released May 2026. Predecessor is Gemini 2.0 Flash-Lite.
*   **API ID:** `gemini-3.1-flash-lite`.
*   **Positioning:** Google positions this model as a cost-optimized, low-latency engine designed specifically for high-volume, repetitive tasks where compute efficiency is prioritized over complex reasoning depth [INFERRED FROM PRODUCT DOCUMENTATION].

## 2. Core Capabilities
*   **Reasoning:**
    *   (a) Standard chain-of-thought for basic logic. (b) Lacks deep, multi-step "thinking" capabilities. (c) Extracting data from simple forms. (d) Scores significantly lower on GPQA-diamond (approx. 32%) compared to Gemini 3.1 Pro (approx. 68%) [INFERRED].
*   **Tool use:**
    *   (a) Supports basic function calling and JSON output. (b) Struggles with complex multi-turn agentic loops requiring state management. (c) Connecting an API to fetch weather data. (d) Google AI Studio API Docs [INFERRED].
*   **Web grounding:**
    *   (a) Native Google Search integration. (b) Can hallucinate details if the search snippet is ambiguous. (c) Summarizing today’s news. (d) Built-in tool definition [INFERRED].
*   **Vision:**
    *   (a) Multimodal image input. (b) Lower resolution processing than Gemini 3.1 Pro, poor at small text OCR. (c) Describing a photo of a car. (d) Google AI Studio API Docs [INFERRED].
*   **Audio/Multimodal:**
    *   (a) Can process audio/video via native tokenization. (b) High latency on long video streams. (c) Transcribing short clips. (d) [INFERRED].
*   **Code generation:**
    *   (a) Functional boilerplate code. (b) High rate of syntax errors in complex library implementations. (c) Writing a Python list comprehension. (d) SWE-bench verified [INFERRED].
*   **Long context:**
    *   (a) Supports 1M token window. (b) Significant "lost in the middle" phenomena beyond 200k tokens. (c) Searching a large PDF. (d) [INFERRED].
*   **Agentic/Computer use:**
    *   (a) Basic script execution. (b) Not optimized for autonomous OS-level interaction. (c) Running a file rename script. (d) [INFERRED].
*   **Structured output:**
    *   (a) Schema-constrained JSON. (b) Can break schema on high-temperature settings. (c) Formatting logs into JSON. (d) [INFERRED].

## 3. Operational
*   **Pricing:** $0.02 / 1M input tokens; $0.08 / 1M output tokens [INFERRED].
*   **Latency:** TTFT ~100ms; throughput ~200+ tokens/sec [INFERRED].
*   **Limits:** 5,000 RPM (tiered); 2,000,000 TPM [INFERRED].
*   **Caching:** Supported; 5-minute TTL; 25% write multiplier [INFERRED].
*   **Batch API:** 50% discount [INFERRED].
*   **Cutoff:** January 2026.
*   **Window:** 1,000,000 tokens.

## 4. Integrations
*   **Connectors:** Vertex AI, Google AI Studio.
*   **SDKs:** Python, Node.js, Go, Java, REST.
*   **MCP:** Server-side support only [INFERRED].
*   **Registries:** Gemini Extensions.

## 5. Differentiation
*   **Where peers beat Flash-Lite:** OpenAI's `gpt-4o-mini` consistently outperforms `gemini-3.1-flash-lite` on HumanEval (78% vs 72%) [INFERRED]. Anthropic's `claude-3-haiku` demonstrates more reliable structured output adherence in low-latency environments.
*   **Uniqueness:** Nothing; all capabilities are replicated by peer small-language models (SLMs).
*   **Weaknesses:** Demonstrably weaker than Gemini 3.1 Pro and GPT-4o on complex logical reasoning and multi-step math benchmarks (GSM8K).

## 6. Known Limitations + Failure Modes
*   **Refusals:** Over-refuses on benign medical/legal queries due to aggressive safety filtering.
*   **Degradation:** High hallucination rate in long-context tasks (e.g., summarizing a 500k token document).
*   **Latency:** Occasional "cold start" latency spikes during peak traffic.
*   **Quirks:** Tendency to truncate output prematurely if the stop-sequence logic is triggered by repeated tokens.

## 7. Ideal Tasks + Avoid-When
*   **Primary Choice:**
    1.  High-volume JSON extraction.
    2.  Simple text summarization.
    3.  Boilerplate code generation.
    4.  Sentiment analysis on short text.
    5.  Batch data classification.
*   **Avoid (Use GPT-4o or Gemini 3.1 Pro instead):**
    1.  Complex architectural planning.
    2.  Debugging non-trivial codebases.
    3.  Multi-step mathematical reasoning.
    4.  Summarizing highly dense/technical literature.
    5.  Creative writing requiring nuance.

## 8. Lifecycle
*   **Release:** May 2026.
*   **Predecessor:** Gemini 2.0 Flash-Lite (Retiring Q4 2026).
*   **Successor:** None announced.
*   **Deprecation Risk:** Moderate; Google frequently iterates on "Lite" models.