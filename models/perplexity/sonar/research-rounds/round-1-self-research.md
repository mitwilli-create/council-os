# 1. Identity

Sonar is Perplexity’s search-grounded assistant/model line, built by Perplexity and surfaced in Perplexity’s product and API offerings. [INFERRED from provider docs and product naming; public docs/pages are needed for exact lineage]

- **Who built it:** Perplexity.
- **When released:** The exact release date of the specific “Sonar” version is **[UNKNOWN — would need a product announcement or release notes]**.
- **Predecessor:** Likely Perplexity’s earlier answer/search product lineage rather than a clearly documented model predecessor; **[UNKNOWN — would need a specific release note]**.
- **Official API model ID(s):** **[UNKNOWN — would need current API docs]**
- **Provider positioning:** Sonar is positioned as a **search-first, web-grounded** assistant for answers with citations rather than a pure general-purpose frontier model. [INFERRED]

# 2. Core capabilities

## Reasoning

- **What it can do:** Sonar can answer multi-step questions and synthesize information from retrieved sources. [INFERRED]
- **Hard limits:** It is not reliably described as a dedicated “reasoning model” with exposed chain-of-thought or explicit thinking-effort controls in the public material I have here. [UNKNOWN — would need docs]
- **Example task:** Summarize the tradeoffs between two products using current web sources and produce a concise recommendation.
- **Source:** Perplexity product positioning and search-grounded behavior are reflected in public references to its answer-with-citations workflow. (https://community.openai.com/t/what-exactly-does-a-system-msg-do/459409) [This URL is only an indirect mention of system messages, not a Sonar spec; exact Sonar reasoning docs needed]

## Tool use

- **What it can do:** Sonar is designed around web retrieval/search and answer synthesis; tool-like behavior is central to the product. [INFERRED]
- **Hard limits:** Public evidence here does not confirm function calling, MCP, or parallel tool calls. [UNKNOWN — would need docs]
- **Example task:** Use retrieved web pages to answer “What changed in the latest API pricing docs?”
- **Source:** Perplexity’s web-grounded product behavior is broadly documented by the product itself, but I do not have a primary Sonar API tool-spec citation here. [UNKNOWN]

## Web grounding

- **What it can do:** Web grounding is Sonar’s core strength: it is built to search, retrieve, and cite sources in responses. [INFERRED]
- **Hard limits:** Freshness depends on retrieval quality and source availability; it can still miss niche, paywalled, or rapidly changing information. [INFERRED]
- **Example task:** Answer “What is the latest policy change in a public SDK docs page?” with citations.
- **Source:** Search-grounded behavior is the defining product pattern for Perplexity-style assistants. [INFERRED]

## Vision

- **What it can do:** **[UNKNOWN — would need Sonar multimodal docs]**
- **Hard limits:** **[UNKNOWN]**
- **Example task:** OCR a screenshot of a settings page.
- **Source:** **[UNKNOWN]**

## Audio / multimodal

- **What it can do:** **[UNKNOWN]**
- **Hard limits:** **[UNKNOWN]**
- **Example task:** Interpret a short voice memo or video clip.
- **Source:** **[UNKNOWN]**

## Code generation

- **What it can do:** Sonar can likely explain code and generate snippets when asked, but I do not have benchmark-backed evidence for competitive code performance. [INFERRED]
- **Hard limits:** No verified SWE-bench-class score or execution sandbox claim here. [UNKNOWN]
- **Example task:** Draft a Python script to call an API and parse JSON.
- **Source:** **[UNKNOWN — would need benchmarks/docs]**

## Long context

- **What it can do:** It can handle multi-document synthesis from retrieved sources and longer threads better than a short-context-only assistant. [INFERRED]
- **Hard limits:** Exact token window and long-context recall quality are **[UNKNOWN]**.
- **Example task:** Compare three long technical docs and produce a requirements matrix.
- **Source:** **[UNKNOWN]**

## Agentic / computer use

- **What it can do:** Sonar appears oriented toward answer generation with search rather than autonomous browser/OS control. [INFERRED]
- **Hard limits:** No verified browser automation or computer-use loop claim here. [UNKNOWN]
- **Example task:** N/A for autonomous computer use; better suited to research than control.
- **Source:** **[UNKNOWN]**

## Structured output

- **What it can do:** It can probably produce JSON or schema-shaped text if instructed, but I do not have confirmation of native JSON mode or grammar constraints. [INFERRED]
- **Hard limits:** Native structured-output guarantees are **[UNKNOWN]**.
- **Example task:** Return a research summary as a JSON object with fields for claim, source, and confidence.
- **Source:** **[UNKNOWN]**

# 3. Operational

- **Pricing per 1M tokens:** **[UNKNOWN — would need current pricing docs]**
- **Latency / TTFT / tokens/sec:** **[UNKNOWN]**
- **Rate limits:** **[UNKNOWN]**
- **Prompt caching:** **[UNKNOWN]**
- **Batch API:** **[UNKNOWN]**
- **Knowledge cutoff date:** For a search-grounded system, a single static cutoff is less meaningful; the effective freshness is retrieval-dependent. **[INFERRED]**
- **Context window size + output cap:** **[UNKNOWN]**

# 4. Integrations

- **First-party connectors:** **[UNKNOWN]**
- **Official SDK languages:** **[UNKNOWN]**
- **MCP support:** **[UNKNOWN]**
- **Registries:** **[UNKNOWN]**

# 5. Differentiation — THIS SECTION DETERMINES YOUR SCORE

Sonar’s clearest advantage is **search-grounded, citation-backed answering on current information**, especially when compared with general-purpose models that do not natively prioritize web retrieval. On that axis, it is most plausibly strongest versus:

- **GPT-4.1** on *freshness-aware answer-with-sources workflows* when the task is primarily “find the current answer and cite it,” rather than deep offline reasoning. **[INFERRED; would need head-to-head tests]**
- **Claude 4 Sonnet** on *default web-research style responses* if Sonar’s product ships retrieval more directly in the core loop. **[INFERRED]**
- **Gemini 2.5 Pro** on *simple web Q&A with citations* if the user wants a more opinionated research answer rather than a large general model. **[INFERRED]**

What Sonar is **actually uniquely best at**:
- Likely **nothing in an absolute sense**. Most of its useful behaviors overlap with peers once those peers are paired with search tools or browsing. **[INFERRED]**
- Its practical uniqueness is the **productized combination** of search, synthesis, and citations in a Perplexity-style UX. That is a product advantage, not a model-only monopoly. **[INFERRED]**

Where Sonar is likely weaker than specific peers:
- **Claude 4 Sonnet / Claude Opus 4** on long-form writing, instruction fidelity, and some deep reasoning workflows. **[INFERRED]**
- **GPT-4.1** on code-heavy agentic tasks and structured developer workflows, especially when tool orchestration matters. **[INFERRED]**
- **Gemini 2.5 Pro** on very long-context multimodal tasks, if the task spans large documents or images/video. **[INFERRED]**
- **OpenAI o3 / similar reasoning-specialist models** on hard math/proof-style reasoning. **[INFERRED]**

Bottom line: Sonar’s edge is **research utility**, not a clearly documented monopoly on model intelligence.

# 6. Known limitations + failure modes

- **Refusal patterns:** I do not have evidence that Sonar has unusual over-refusal behavior beyond whatever policy layer Perplexity applies. **[UNKNOWN]**
- **Degradation patterns:** Likely to degrade on tasks that need:
  - very deep formal reasoning,
  - exact code execution,
  - large-scale long-context recall without retrieval,
  - or non-web multimodal understanding. **[INFERRED]**
- **Latency/timeout failure modes:** Search-backed systems can slow down or fail when retrieval is slow, rate-limited, or source pages are unstable. **[INFERRED]**
- **Bugs/quirks in the wild:** I do not have a verified catalog of Sonar-specific bugs. **[UNKNOWN]**

# 7. Ideal tasks + avoid-when

## Top 5 task types where Sonar should be the primary choice

1. **Current-events research with citations**
2. **Product/docs lookups**
3. **Comparative shopping or software/vendor comparisons**
4. **Quick literature/web survey with source links**
5. **Fact-checking a claim against current public sources**

## Top 5 task types where Sonar should NOT be used

1. **Hard math/proof reasoning** — use **OpenAI o3** or **Claude Opus 4** instead. [INFERRED]
2. **Complex code-agent workflows** — use **GPT-4.1** or a coding-specialist agent stack. [INFERRED]
3. **Very large-context synthesis across many long files** — use **Gemini 2.5 Pro**. [INFERRED]
4. **Autonomous browser/OS control** — use a model/product with explicit computer-use support. [UNKNOWN]
5. **Tasks where source quality matters more than recency and you need offline certainty** — use a stronger reasoning model with your own curated documents. [INFERRED]

# 8. Lifecycle

- **Release date of this version:** **[UNKNOWN — would need a launch announcement]**
- **Predecessor + retirement date:** **[UNKNOWN]**
- **Successor (if announced):** **[UNKNOWN]**
- **Deprecation risk signals:** If Perplexity renames or folds Sonar into a broader model family, the model ID and API surface could change. **[INFERRED]**

If you want, I can turn this into a **fully sourced version** by doing a second pass with live web research and replacing the [UNKNOWN]/[INFERRED] items with citations.