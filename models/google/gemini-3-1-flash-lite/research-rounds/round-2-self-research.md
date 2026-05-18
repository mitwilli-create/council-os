## 1. Identity

*   **What is Gemini 3.1 Flash-Lite:** Gemini 3.1 Flash-Lite is the most cost-optimized, low-latency multimodal model in the Gemini 3.1 family, designed for high-throughput, latency-sensitive tasks (`_official-models-overview.md`). It is built by Google.
*   **Release Date:** Released in preview on March 3, 2026 (Google Blog Announcement; AIMLAPI).
*   **Predecessor:** Gemini 2.5 Flash-Lite (`_official-models-overview.md` line 35).
*   **Official API Model IDs:** `gemini-3.1-flash-lite` (stable); `gemini-3.1-flash-lite-preview` (preview) (`_official-gemini-3-api.md`).
*   **Provider Positioning:** Positioned as the entry-level tier of the Gemini 3.1 family, prioritizing cost-per-token and speed over deep reasoning capacity, while maintaining identical multimodal ingestion capabilities as the larger models.

---

## 2. Core capabilities

*   **Reasoning:** Supports the 4-tier `thinking_level` ladder (`minimal` [default], `low`, `medium`, `high`) (`_official-thinking.md`). It handles standard classification and extraction well; however, it lacks the depth of Pro versions on complex, multi-step chain-of-thought tasks.
    *   *Example Task:* High-volume sentiment classification of customer support tickets where `thinking_level: minimal` is sufficient.
    *   *Source:* `_official-thinking.md` line 79.
*   **Tool Use:** Supports function calling, MCP, and parallel tool calls.
    *   *Example Task:* Extracting structured data from multiple invoices in parallel for a financial dashboard.
    *   *Source:* `_official-gemini-3-api.md`.
*   **Web Grounding:** Built-in Google Search grounding; citations are provided in standard `[1]` format.
    *   *Example Task:* Fact-checking news summaries against current events.
    *   *Source:* `[INFERRED FROM PROVIDER DOCS]`.
*   **Vision:** Native multimodal input; supports `media_resolution` parameters (low/medium/high/ultra_high). Shared architecture with Pro/Flash models ensures consistent ingestion capabilities.
    *   *Example Task:* Batch processing of product images for metadata tagging.
    *   *Source:* `_official-gemini-3-api.md` lines 132-140.
*   **Audio / Multimodal:** Native audio and video ingestion.
    *   *Example Task:* Transcribing and summarizing short-form video content at scale.
    *   *Source:* `_official-gemini-3-api.md` line 74.
*   **Code Generation:** Capable of standard boilerplate, unit tests, and minor refactoring.
    *   *Benchmark:* SWE-bench performance is lower than Gemini 3.1 Pro; `[UNKNOWN — would need a benchmark]` for specific score.
*   **Long Context:** 1M token context window. Recall quality remains competitive, though high-density "needle-in-a-haystack" retrieval is generally more robust in Pro models.
    *   *Source:* `_official-gemini-3-api.md`.
*   **Agentic / Computer Use:** Supports agentic loops and tool orchestration; does not have native OS-level browser control beyond standard API-provided tool sets.
*   **Structured Output:** Supports strict JSON mode and schema enforcement.

---

## 3. Operational

*   **Pricing (per 1M tokens):** $0.25 (input), $1.50 (output), $0.50 (audio input).
*   **Latency:** `[UNKNOWN — would need a benchmark]` from Artificial Analysis for verified TTFT/throughput.
*   **Rate Limits:** Tier-dependent; varies by Vertex AI/AI Studio project settings.
*   **Prompt Caching:** Automatic-on for paid projects; 90% discount on cache reads.
*   **Batch API:** Supported; provides cost discounts for non-real-time processing.
*   **Knowledge Cutoff:** `[UNKNOWN — would need to test]`.
*   **Context Window:** 1M tokens; 64k output cap (`_official-gemini-3-api.md`).

---

## 4. Integrations

*   **First-party Connectors:** Vertex AI, Google AI Studio.
*   **Official SDK Languages:** Python, Node.js, Go, Dart (Flutter), Swift, Android, Java.
*   **MCP Support:** Server-side support for MCP protocol.
*   **Registries:** Accessible via Gemini Extensions registry.

---

## 5. Differentiation (Sibling Crossover Map)

Gemini 3.1 Flash-Lite is uniquely best at **high-throughput, cost-sensitive batch processing** where `thinking_level: minimal` is adequate.

| Peer Model | Cost Ratio | Crossover / Routing Strategy |
| :--- | :--- | :--- |
| **Gemini 3.1 Pro** | 8× (at <200k) | Route to Pro for tasks requiring deep reasoning, complex logic, or high-accuracy code synthesis. Route to Flash-Lite for volume tasks >100 calls/session. |
| **Gemini 3 Flash** | 2× | Route to Flash for tasks requiring `thinking_level: medium/high` or standard-complexity reasoning. Flash-Lite is the floor for simple extraction. |
| **GPT-5.5-mini** | Comparable | Flash-Lite is often preferred when native Google Search/Maps grounding or multi-modal audio/video ingestion is required. |

*   **What ONLY Flash-Lite can do:** It is the only model in the family that defaults to `thinking_level: minimal`, providing the lowest possible latency and cost for tasks that do not require extended reasoning cycles.
*   **Where weaker:** Demonstrably weaker than Gemini 3.1 Pro on GPQA-Diamond (86.9% vs. 94.3%) and complex SWE-bench tasks.

---

## 6. Known limitations + failure modes

*   **Operational 400-Errors:** Flash-Lite is susceptible to common Gemini 3.1 API errors: `thought_signature` mismatch, `thinkingLevel` + `thinkingBudget` mutual exclusion, and temperature looping errors.
*   **Refusal Patterns:** Over-refuses on queries involving sensitive public figures or speculative legal advice.
*   **Degradation:** Performance drops on complex mathematical reasoning tasks when using `minimal` thinking level.
*   **Quirks:** Does not support the same advanced code-sandbox execution environment as the Pro tier.

---

## 7. Ideal tasks + avoid-when

**Ideal Tasks:**
1. High-volume JSON extraction from unstructured text.
2. Large-scale log file classification/summarization.
3. Rapid ad-copy iteration using minimal thinking levels.
4. Multimodal batch processing (OCR/Image tagging).
5. Simple intent recognition for chatbot routing.

**Avoid When:**
1. **GPT-5.5-Pro:** Use for complex, high-stakes reasoning/architecture design.
2. **Gemini 3.1 Pro:** Use for sophisticated, multi-step problem solving requiring high `thinking_level`.
3. **Claude 3.5 Opus/Sonnet:** Use for specialized creative writing or high-precision instruction following.
4. **Any task > 200k tokens:** Route to larger models (Pro) to avoid potential recall degradation.
5. **High-logic benchmarks:** Use Pro models for GPQA or ARC-AGI tasks.

---

## 8. Lifecycle

*   **Release Date:** March 3, 2026.
*   **Predecessor:** Gemini 2.5 Flash-Lite (Deprecated).
*   **Successor:** None announced.
*   **Deprecation Risk:** Low; Flash-Lite is the foundational model for the Gemini 3.1 cost-sensitive tier.

---

## Revision Notes
*   *Corrected pricing to $0.25/$1.50 (Strike 1).*
*   *Corrected GPQA-Diamond to 86.9% (Strike 2).*
*   *Corrected release date/predecessor (Strike 3/4).*
*   *Added Sibling Crossover Map (Strike 5).*
*   *Replaced retired peers (GPT-4o) with current (GPT-5.5) (Strike 6).*
*   *Added reasoning section regarding `minimal` thinking level (Strike 7).*
*   *Updated operational latency to `[UNKNOWN]` (Strike 8).*