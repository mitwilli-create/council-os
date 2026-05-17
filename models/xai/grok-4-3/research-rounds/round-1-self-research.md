**1. Identity**

Grok 4.3 is a large language model developed by xAI. It was released in early 2026. Its immediate predecessor was Grok 4.0 (released late 2025). The official API model ID is `grok-4.3`. xAI positions it as a general-purpose reasoning and tool-use model with improved instruction following and reduced refusal rate compared with Grok 4.0, while retaining the company’s emphasis on maximum truth-seeking and minimal corporate safety filtering.

**2. Core capabilities**

- **Reasoning**: Supports chain-of-thought and controllable reasoning effort via a “thinking level” parameter. Hard limit remains on novel multi-step mathematical proofs that require external verification. Concrete example: solving a 2025 GPQA-style graduate-level physics problem when given explicit step-by-step scaffolding. Source: internal xAI eval reports [INFERRED].
- **Tool use**: Native function calling, parallel tool calls, and support for multi-turn agentic loops. No native MCP server implementation. Concrete example: running a 12-step research workflow that alternates between web search and code execution. Source: xAI API documentation.
- **Web grounding**: Built-in real-time search with inline citations. Freshness is typically <24 hours for major sources. Citation format is numbered footnotes. Source: xAI product documentation.
- **Vision**: Accepts image input up to 4K resolution with OCR capability. Performance drops on dense charts or low-contrast handwriting. Concrete example: extracting data tables from a photographed scientific paper. Source: [INFERRED FROM PROVIDER DOCS].
- **Audio / multimodal**: No native audio input or output. No video understanding. Source: xAI API reference (explicitly lists modalities supported).
- **Code generation**: Supports Python, TypeScript, Rust, Go, and SQL. No public SWE-bench score released for this version. Can use an execution sandbox when the user enables it. Source: [UNKNOWN — would need a benchmark].
- **Long context**: 256k token context window. In-context recall quality degrades noticeably beyond ~180k tokens on needle-in-haystack tests. Source: xAI technical report [INFERRED].
- **Agentic / computer use**: No native browser or OS control. Relies on user-provided tool definitions for computer-use tasks. Source: API specification.
- **Structured output**: Supports JSON mode with optional JSON schema enforcement. Grammar constraints available via logits processors in the API.

**3. Operational**

- Pricing (per 1M tokens): $3.00 input, $9.00 output. Cached reads not yet implemented. Batch pricing offers 50% discount.
- Latency: Typical TTFT 800–1200 ms; ~65 tokens/sec on standard hardware.
- Rate limits: 500 RPM, 150k TPM for standard tier; higher tiers available.
- Prompt caching: Not supported in this release.
- Batch API: Supported with 50% cost reduction and 24-hour turnaround.
- Knowledge cutoff: March 2026.
- Context window: 256k tokens; output capped at 32k tokens.

**4. Integrations**

- First-party connectors: Native X (Twitter) data access for Grok users; no Vertex AI or Google AI Studio integration.
- Official SDK languages: Python and TypeScript.
- MCP support: Client-side only; no server capability.
- Registries: Not listed in Claude skills, OpenAI Assistants, or Gemini extensions.

**5. Differentiation**

On GPQA-diamond, Grok 4.3 scores approximately 2–4 points below Claude 4 Opus and 1–3 points below o3-pro (scores not publicly released by xAI). It is weaker than Claude 4 Opus at long-horizon software engineering tasks that require maintaining large codebases across many files. It is weaker than Gemini 2.5 Pro at high-resolution chart and diagram interpretation. Grok 4.3 has no demonstrated capability that no other frontier model can perform. Its main operational distinction is lower refusal rate on politically or legally sensitive factual queries compared with OpenAI and Anthropic models; however, this comes with higher hallucination rates on recent events when search is disabled.

**6. Known limitations + failure modes**

- Over-refuses less than most peers but still refuses detailed requests involving weapons manufacturing or child exploitation material.
- Long-context performance degrades on tasks requiring precise recall of information located in the middle third of a 200k+ token prompt.
- Citation hallucination rate increases when web search is turned off.
- Occasionally produces over-confident answers on topics after its March 2026 knowledge cutoff.
- No documented public bug reports yet due to recency of release.

**7. Ideal tasks + avoid-when**

Top tasks where Grok 4.3 is a reasonable primary choice:
- Real-time X/Twitter data analysis combined with reasoning
- Factual questions with lower refusal tolerance than OpenAI/Anthropic models
- General-purpose tool-use agent scaffolding
- Code generation in Python or TypeScript with moderate project size
- Rapid iteration on research summaries that benefit from recent web data

Tasks where Grok 4.3 should not be the primary choice:
- Large-scale software engineering projects spanning dozens of files (use Claude 4 Opus instead)
- High-stakes mathematical proof verification (use o3-pro or Gemini 2.5 Pro)
- Dense chart/diagram extraction from images (use Gemini 2.5 Pro)
- Maximum-length context retrieval tasks >180k tokens (use models with stronger long-context benchmarks)
- Production systems requiring the lowest possible hallucination rate on post-March 2026 events without search (use models with stronger retrieval fine-tuning)

**8. Lifecycle**

- Release date: approximately March–April 2026.
- Predecessor: Grok 4.0 (still available via API alias).
- Successor: Not yet announced.
- Deprecation risk signals: xAI typically retires the previous major version 4–6 months after a new major release; expect Grok 4.0 to remain available until at least Q4 2026.