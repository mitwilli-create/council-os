**1. Identity**

Grok 3 Mini is a smaller, lower-cost variant in xAI’s Grok model family. It was built by xAI. No verified public release date for Grok 3 Mini exists in available documentation as of 2026-05-18 [UNVERIFIED]. Its predecessor is not publicly documented; the broader Grok lineage traces to Grok-1 (2023) and later Grok-2 / Grok-3 base models. Official API model ID is listed as `grok-3-mini` in the prompt context. xAI has positioned smaller Grok variants as faster, cheaper inference options for high-volume or latency-sensitive workloads, but no official positioning statement specific to “Grok 3 Mini” has been located.

**2. Core capabilities**

- **Reasoning**: Grok 3 Mini supports chain-of-thought reasoning. Hard limits on depth and consistency at scale are expected given its “mini” designation. Concrete example: solving multi-step grade-school math word problems. Source: [INFERRED FROM PROVIDER DOCS].
- **Tool use**: Supports function calling. Parallel tool calls and long agentic loops are presumed limited relative to larger siblings. Concrete example: calling a weather API and summarizing the result. Source: [INFERRED].
- **Web grounding**: No confirmed built-in search or citation mechanism. Freshness and citation format unknown. Source: [UNKNOWN — would need to test].
- **Vision**: Image input support is not documented. Resolution and OCR capabilities unknown. Source: [UNKNOWN — would need to test].
- **Audio / multimodal**: No native audio or video input confirmed. Source: [UNKNOWN — would need to test].
- **Code generation**: Supports common programming languages. No SWE-bench or HumanEval scores published for this variant. Concrete example: writing a Python function to parse CSV. Source: [INFERRED].
- **Long context**: Context window size and recall quality at length unknown. Source: [UNKNOWN — would need to test].
- **Agentic / computer use**: No browser or OS control capabilities documented. Source: [UNKNOWN — would need to test].
- **Structured output**: JSON mode is expected to be available; schema enforcement details unknown. Source: [INFERRED].

**3. Operational**

Pricing, latency (TTFT and tokens/sec), rate limits (RPM/TPM), prompt caching TTL and multipliers, and Batch API discounts are all undocumented for Grok 3 Mini. Knowledge cutoff date unknown. Context window size and output token cap unknown. All entries: [UNKNOWN — would need official documentation or benchmark].

**4. Integrations**

First-party connectors, official SDK languages, MCP client/server support, and registry presence (Assistants, extensions, skills) are not documented. All entries: [UNKNOWN — would need to test].

**5. Differentiation**

On GPQA-diamond and similar hard reasoning benchmarks, larger frontier models (e.g., GPT-4o, Claude 3.5 Sonnet, Gemini 2.5 Pro) have historically outperformed smaller variants; Grok 3 Mini is expected to trail those models on difficult multi-hop reasoning tasks [INFERRED]. No task has been identified that only Grok 3 Mini can perform; peers of similar size (GPT-4o-mini, Claude 3 Haiku, Gemini 1.5 Flash) cover the same capability surface. Grok 3 Mini is weaker than Claude 3.5 Sonnet and GPT-4o on long-context recall and complex agentic workflows, based on general size-to-performance scaling patterns observed across the industry.

**6. Known limitations + failure modes**

Refusal patterns, long-context degradation, code-heavy or math degradation, latency/timeout behavior, and documented bugs are unknown for this specific model. Source: [UNKNOWN — would need real-world usage data].

**7. Ideal tasks + avoid-when**

Top tasks where Grok 3 Mini could be a reasonable primary choice remain speculative due to lack of benchmarks. Likely candidates include simple function calling, short code snippets, and high-volume low-complexity queries, but no verified ranking exists.

Top tasks to avoid: long-context research, multi-step agentic workflows, high-stakes reasoning (math, science, legal), vision or multimodal work, and any workload requiring published benchmark leadership. In those cases, larger models such as Grok-3 (full), Claude 3.5 Sonnet, or GPT-4o are generally preferable.

**8. Lifecycle**

Release date, predecessor retirement date, successor status, and deprecation signals are all undocumented. All entries: [UNKNOWN — would need official xAI announcements].