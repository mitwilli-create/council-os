## Profile: Gemini 3 Flash (gemini-3-flash-preview)

This document is a technical profile for the Gemini 3 Flash model, revised following Round 1 Dealbreaker adjudication to correct fabricated operational data and restore accurate performance benchmarks.

### 1. Identity
- **Model Name:** Gemini 3 Flash.
- **Developer:** Google.
- **Release Date:** December 17, 2025 ([Source: Simon Willison](https://simonwillison.net/2025/Dec/17/gemini-3-flash/)).
- **Predecessor:** Gemini 2.5 Flash (`_official-models-overview.md` line 26).
- **Official API Model ID:** `gemini-3-flash-preview`.
- **Provider Positioning:** "Pro-level intelligence at the speed and pricing of Flash" and "Frontier-class performance at a fraction of typical costs" (`_official-gemini-3-api.md` line 67).

### 2. Core Capabilities

- **Reasoning:** 
    - **Capability:** Supports native chain-of-thought via a `thinking_level` parameter. It supports four levels: `minimal`, `low`, `medium`, and `high`. Gemini 3 Flash uniquely supports the `minimal` level, which Gemini 3.1 Pro does not (`_official-thinking.md` lines 77-84).
    - **Limits:** While it achieves ~90.4% on GPQA-Diamond, it is outperformed by Gemini 3.1 Pro on the hardest reasoning bands such as FrontierMath and ARC-AGI-2 [INFERRED].
    - **Example:** High-speed logical verification of complex legal clauses.
    - **Source:** [Google Blog](https://blog.google/products-and-platforms/products/gemini/gemini-3-flash/), [Vellum Benchmarks](https://www.vellum.ai/blog/google-gemini-3-benchmarks).

- **Tool Use:** 
    - **Capability:** Supports parallel function calling.
    - **Limits:** **Strict Requirement:** Gemini 3 Flash enforces mandatory **Thought Signatures** for all Function Calling and Image Generation requests. Failure to include/round-trip these signatures results in a 400 error. This requirement applies even at `thinking_level: minimal` (`_official-gemini-3-api.md` lines 178-180).
    - **Example:** Executing 10+ simultaneous database queries to aggregate a dashboard.
    - **Source:** `_official-gemini-3-api.md`.

- **Vision:** 
    - **Capability:** Native multimodal processing with the `media_resolution` parameter (`low`, `medium`, `high`, `ultra_high`) to balance cost and OCR accuracy.
    - **Limits:** Scoring ~81.2% on MMMU-Pro, it is Google's top-performing vision model, slightly edging out its sibling Gemini 3.1 Pro in this specific modality.
    - **Example:** High-fidelity OCR extraction from 500-page scanned PDF archives using `media_resolution: high`.
    - **Source:** [Google Blog](https://blog.google/products-and-platforms/products/gemini/gemini-3-flash/).

- **Code Generation:** 
    - **Capability:** Scores **~78% on SWE-bench Verified**.
    - **Limits:** Decisively beaten by **Anthropic Claude Opus 4.7 (87.6%)** and **GPT-5.5 [INFERRED]** on complex codebase-wide refactoring.
    - **Example:** Generating unit tests for legacy Python modules in an isolated sandbox.
    - **Source:** [BusinessAnalytics](https://businessanalytics.substack.com/p/google-achieves-78-coding-accuracy).

- **Long Context:** 
    - **Capability:** 1,048,576 (1M) token input window.
    - **Limits:** Near-perfect needle-in-a-haystack recall, though latency scales with context depth. Output is capped at 65,536 tokens.
    - **Example:** Summarizing a full day of video meetings via multimodal ingestion.
    - **Source:** `_official-gemini-3-api.md` line 78.

### 3. Operational

- **Pricing (per 1M tokens):** 
    - **Input:** $0.50
    - **Output:** $3.00
    - **Source:** `_official-gemini-3-api.md` line 78.
- **Context Window:** 1,048,576 tokens.
- **Output Cap:** 65,536 tokens (Note: SDKs may default to 8,192; callers must explicitly set `maxOutputTokens`).
- **Knowledge Cutoff:** January 2025.
- **Prompt Caching:** Supported. [INFERRED: ~90% discount on cached reads per peer standards, approx $0.05/1M].
- **Batch API:** Supported with 50% cost discount.
- **Latency:** Optimized for low Time-to-First-Token (TTFT). Performance is sensitive to the `thinking_level` parameter.
- **Critical Parameter Warning:** Google strongly recommends keeping `temperature` at **1.0**. Values below 1.0 (specifically 0.0) may cause degradation or infinite loops in complex reasoning tasks (`_official-gemini-3-api.md` line 172).

### 4. Integrations
- **First-party:** Vertex AI, Google AI Studio, Gemini Extensions (Workspace, Search, YouTube).
- **SDKs:** Python, JavaScript, Go, Swift, Android.
- **MCP Support:** [UNKNOWN — would need verification].
- **Live API:** Not natively supported by this specific model ID; requires routing to the `gemini-3.1-flash-live` family.

### 5. Differentiation

**Where peers beat Gemini 3 Flash:**
- **Reasoning/Hard Coding:** **Claude Opus 4.7** beats Gemini 3 Flash on SWE-bench Verified (87.6% vs 78%).
- **Frontier Reasoning:** **Gemini 3.1 Pro** outperforms Flash on GPQA (>92% vs 90.4%) and is the preferred choice for tasks requiring the highest possible accuracy where budget allows.

**Sibling Crossover & Cost Ratios:**
- **vs. Gemini 3.1 Pro:** Pro is **4x more expensive** for input/output at contexts <200k, and **8x/6x more expensive** at contexts >200k. 
    - *Crossover:* Route to Pro for GPQA >92% or ARC-AGI-2 tasks. Stay on Flash for vision (MMMU-Pro) and tasks where `thinking_level: minimal` is required for speed.
- **vs. Gemini 3.1 Flash-Lite:** Flash-Lite is **0.5x the cost** of Gemini 3 Flash ($0.25 input/$1.50 output).
    - *Crossover:* Route to Flash-Lite for high-throughput classification or simple extraction. Flash-Lite defaults to `thinking_level: minimal`.
- **vs. Gemini 3.1 Flash Live:** Route to Flash Live for sub-400ms bidirectional audio (A2A) tasks. Gemini 3 Flash is a text/multimodal batch/interactive model, not a real-time voice model.

**Unique Strength:**
- Gemini 3 Flash is currently the only model in its class that supports a granular 4-stage `thinking_level` ladder while maintaining an 80%+ MMMU-Pro vision score.

### 6. Known Limitations + Failure Modes
- **Thought Signature 400s:** The most common failure mode is failing to include the required Thought Signature in tool-calling or image-gen loops.
- **Temperature Loops:** Setting temperature to 0.0 for "determinism" often results in repetitive looping or degraded logic on this architecture; 1.0 is the required operational setting.
- **Refusal Patterns:** Known to over-refuse on requests involving real-time PII or medical diagnosis [INFERRED].
- **Long-Context Latency:** While recall is high at 1M tokens, TTFT increases significantly as the context window fills.

### 7. Ideal Tasks + Avoid-When

**Top 5 Ideal Tasks:**
1. **High-Volume Multimodal Extraction:** Processing PDFs/Videos using `media_resolution` controls.
2. **Agentic Loops:** Using `thinking_level: minimal` for fast tool-calling iterations.
3. **Large Document Reasoning:** Utilizing the 1M window for RAG-less search across entire codebases.
4. **OCR-Heavy Workflows:** Where MMMU-Pro performance is required at a non-Pro price point.
5. **Cost-Sensitive Reasoning:** Tasks requiring ~90% GPQA accuracy without 4x Pro pricing.

**Top 5 "Avoid-When":**
1. **Real-time Bidirectional Audio:** Use **Gemini 3.1 Flash Live**.
2. **State-of-the-art Coding:** Use **Claude Opus 4.7**.
3. **Highest-Complexity Math/Reasoning:** Use **Gemini 3.1 Pro**.
4. **Simple Classification at Scale:** Use **Gemini 3.1 Flash-Lite** (50% cheaper).
5. **Ultra-Low Latency "Dumb" Extraction:** Use **Nano Banana 2** for local/on-device speed.

### 8. Lifecycle
- **Version Release:** December 17, 2025.
- **Predecessor:** Gemini 2.5 Flash.
- **Sibling Retirement:** Gemini 3 Pro (Preview) was **deprecated and shut down on March 9, 2026**; it has been replaced by the Gemini 3.1 Pro family (`_official-models-overview.md` line 14).
- **Deprecation Risk:** Low; this is currently the flagship high-efficiency model for the 3-series.