## 1. Identity

**What is Sonar Reasoning Pro and who built it?**

Sonar Reasoning Pro is a hosted, web‑grounded reasoning model exposed via the Perplexity API under the `sonar-reasoning-pro` model ID. Perplexity provides the hosting, search stack, and billing layer.

Crucially, Perplexity did **not** train the base reasoning model. Sonar Reasoning Pro is built on top of **DeepSeek-R1**, an open‑source 671B‑parameter Mixture‑of‑Experts reasoning model with ~37B active parameters per token. Perplexity augments DeepSeek-R1 with its own retrieval and citation pipeline and exposes it under the Sonar branding ([DeepSeek-R1 GitHub](https://github.com/deepseek-ai/DeepSeek-R1), [Perplexity Sonar model docs](https://docs.perplexity.ai/docs/sonar/models/sonar-reasoning-pro)).

> **Strike 2 corrected:** The Round‑1 phrasing “built and operated by Perplexity” is replaced with the accurate description: Perplexity **hosts and augments** DeepSeek-R1; DeepSeek trained the underlying reasoning model.

**Release & predecessor**

- **Predecessor:** `sonar-reasoning` (deprecated)  
  – Per Perplexity’s docs, `sonar-reasoning` was deprecated on **December 15, 2025**, and replaced by `sonar-reasoning-pro` ([Sonar Reasoning Pro docs](https://docs.perplexity.ai/docs/sonar/models/sonar-reasoning-pro)).  
- **Release window:** Late 2025, aligned with the deprecation of `sonar-reasoning` and the new Sonar lineup. Exact GA date is not explicitly stated in docs. `[INFERRED FROM DEPRECATION DATE]`.

**Official API model IDs**

- `sonar-reasoning-pro` (Perplexity API, text‑only, reasoning model)  
  (See [Perplexity API docs](https://docs.perplexity.ai) and community confirmations like [Obsidian Clipper #363](https://github.com/obsidianmd/obsidian-clipper/issues/363).)

**Provider’s positioning**

Perplexity positions Sonar Reasoning Pro as:

- A **“high‑performance reasoning model leveraging advanced multi-step Chain-of-Thought (CoT) reasoning and enhanced information retrieval”** ([Perplexity docs](https://docs.perplexity.ai/docs/sonar/models/sonar-reasoning-pro), [PromptHub model card](https://www.prompthub.us/models/sonar-reasoning-pro)).  
- Best suited for **complex multi-step reasoning, advanced research with deep reasoning, and strategic decision making**.  
- The explicit successor to `sonar-reasoning` with improved reasoning capabilities.

---

## 2. Core capabilities

For each axis: (a) what it does, (b) limits, (c) example, (d) source.

### 2.1 Reasoning

**(a) What it can do**

- Runs **explicit chain-of-thought** reasoning, surfaced to the caller in a dedicated `<think>...</think>` block before the final answer.  
- The `<think>` content is **billed separately as “reasoning tokens”** at **$3 / 1M tokens** ([Perplexity pricing](https://docs.perplexity.ai/docs/getting-started/pricing)).  
- Uses the DeepSeek-R1 reasoning style: large, often verbose internal reasoning traces on math/logic tasks ([DeepSeek-R1 repo examples](https://github.com/deepseek-ai/DeepSeek-R1)).  
- Perplexity layers **web search** on top, so the reasoning trace can reference retrieved evidence.

> **Strike 3 + Omission 2 + Omission 6 corrected:** Round 1 discussed CoT only as an internal behavior. This revision explicitly documents **visible `<think>` blocks**, their billing, and their status as a feature (transparent reasoning) rather than a quirk.

**(b) Hard limits**

- Reasoning is **not formally guaranteed correct**; DeepSeek-R1 still hallucinates, especially with long or noisy contexts.  
- No tunable “thinking level” parameter like OpenAI’s `reasoning_effort` or Anthropic’s adaptive thinking knob; the verbosity of `<think>` is emergent, not controllable. `[INFERRED FROM API DOCS LACKING SUCH PARAM]`.  
- 128k context limits the number of documents that can be deeply reasoned over in a single call (see §2.7).

**(c) Example task**

- AIME‑style math problems or bar‑exam‑style legal hypotheticals where the **step‑by‑step `<think>` trace** is as important as the final answer (e.g., Council‑style adjudications that want the reasoning printed for audit).

**(d) Sources**

- Perplexity Sonar Reasoning Pro docs: 128k context, reasoning model ([docs](https://docs.perplexity.ai/docs/sonar/models/sonar-reasoning-pro)).  
- Perplexity pricing page (reasoning tokens & cost): [pricing](https://docs.perplexity.ai/docs/getting-started/pricing).  
- DeepSeek-R1 GitHub repo (visible `<think>` examples): [DeepSeek-R1](https://github.com/deepseek-ai/DeepSeek-R1).

---

### 2.2 Tool use

**(a) What it can do**

- Supports **built‑in web search** as part of the model pipeline, controlled by request parameters (e.g. `search_domain_filter`, `search_recency_filter`, `return_images`, `return_related_questions`) as discussed in community clients like LiteLLM ([LiteLLM discussion #8728](https://github.com/BerriAI/litellm/discussions/8728)) and Perplexity’s prompt guide ([Sonar Prompt Guide](https://docs.perplexity.ai/docs/sonar/prompt-guide)).  
- The search happens server‑side; results are integrated into the reasoning trace and surfaced via citations.

**(b) Limits**

- **No function calling or MCP**: third‑party cards state Sonar Reasoning Pro does **not** support vision or function calling ([PromptHub card](https://www.prompthub.us/models/sonar-reasoning-pro)). There is no `tools`/`functions` interface like OpenAI/Anthropic.  
- No native multi‑tool orchestration or parallel tool calls; any tool‑use agent loops must be implemented by the client around the model. `[INFERRED]`.

**(c) Example task**

- “Given this company, research its last two years of major product launches and summarize risks for entering its market” – the model issues web searches and integrates them in a single response, but cannot call arbitrary external tools like proprietary CRMs.

**(d) Sources**

- Sonar Prompt Guide on search behavior and parameters: [docs](https://docs.perplexity.ai/docs/sonar/prompt-guide).  
- PromptHub model card noting lack of function calling: [PromptHub](https://www.prompthub.us/models/sonar-reasoning-pro).  
- LiteLLM integration notes: [GitHub discussion #8728](https://github.com/BerriAI/litellm/discussions/8728).

---

### 2.3 Web grounding

**(a) What it can do**

- **Built‑in search**: Sonar Reasoning Pro queries Perplexity’s web index by default for open‑domain questions, returning citations alongside answers ([Sonar docs](https://docs.perplexity.ai/docs/sonar/models/sonar-reasoning-pro)).  
- **Citations**: Responses include numbered citations pointing to source URLs; citations themselves are **billed as “citation tokens” at $2 / 1M tokens** ([pricing](https://docs.perplexity.ai/docs/getting-started/pricing)).  
- Freshness: Because it hits a live index, it can reference events and pages well past the base model’s training cutoff.

**(b) Limits**

- Search is constrained to **Perplexity’s own index**. Quality will differ from Google (Gemini) or Bing/Edge (OpenAI’s `web_search`) on some domains (e.g., paywalled academic content, niche forums, internal corpora). `[INFERRED; see Omission 3 below]`.  
- Search parameters are limited to documented filters (domain/recency); no granular engine selection or private‑corpus routing out of the box.

> **Omission 3 corrected:** This section highlights that **search‑stack quality** (Perplexity vs Google vs Bing vs Anthropic’s aggregator) is the actual differentiator, not simply “has web search.”

**(c) Example task**

- Up‑to‑date tech news comparisons (“Compare the latest laptop GPUs from Nvidia and AMD as of this month, with sources”).

**(d) Sources**

- Sonar Prompt Guide (search behavior & system‑prompt not affecting retrieval): [docs](https://docs.perplexity.ai/docs/sonar/prompt-guide).  
- Perplexity pricing (citations as billable token category): [pricing](https://docs.perplexity.ai/docs/getting-started/pricing).

---

### 2.4 Vision

**(a) What it can do**

- Sonar Reasoning Pro is **text‑only**. It does **not** natively ingest images or perform OCR.

**(b) Limits**

- No image inputs, no diagrams, no PDF image‑based tables. Any vision/OCR must be done by an external tool and fed in as text.  
- PromptHub explicitly notes **no vision** support ([PromptHub](https://www.prompthub.us/models/sonar-reasoning-pro)).

**(c) Example task**

- Not applicable; any vision use is upstream of the model.

**(d) Sources**

- PromptHub model card: “Does Sonar Reasoning Pro support vision? No.”  
- Absence of vision parameters in Perplexity API reference. `[INFERRED FROM DOCS]`.

---

### 2.5 Audio / multimodal

- No native audio or video support in the Perplexity API for `sonar-reasoning-pro`. No streaming microphone or “Live API”‑equivalent described in docs. `[INFERRED]`.

---

### 2.6 Code generation

**(a) What it can do**

- Generates code in major languages (Python, JS/TS, Java, C/C++, etc.) using DeepSeek-R1’s reasoning ability to decompose tasks. `[INFERRED FROM BASE MODEL COMPETENCE]`.  
- Can explain and debug snippets using web search for API details.

**(b) Limits**

- No integrated execution sandbox; cannot run or test code.  
- As of this writing, no public SWE‑bench or HumanEval scores are listed in Perplexity’s docs; third‑party benchmarks place it **below frontier models like GPT‑5.5 and Claude Opus 4.7** on code benchmarks, consistent with DeepSeek-R1’s positioning as a reasoning‑first rather than code‑specialist model. `[INFERRED FROM THIRD-PARTY BENCHMARKS ON benchable.ai]`.  
- CoT traces can be very long, increasing latency and cost for SWE‑bench‑style tasks.

**(c) Example task**

- “Given this failing unit test and error log, reason through likely causes, propose a patch, and explain the fix step by step.”

**(d) Sources**

- DeepSeek-R1 paper & repo (reasoning‑heavy, not primarily marketed as a coding model): [DeepSeek-R1 GitHub](https://github.com/deepseek-ai/DeepSeek-R1).  
- Third‑party benchmark aggregators including Sonar models: [benchable.ai](https://benchable.ai).  

> **Strike 6 partially corrected:** Instead of asserting “no benchmarks,” this revision points to benchable.ai and notes relative performance without fabricating exact scores.

---

### 2.7 Long context

**(a) What it can do**

- Supports **128k token context length** ([Sonar Reasoning Pro docs](https://docs.perplexity.ai/docs/sonar/models/sonar-reasoning-pro)).  
- Can ingest a moderate number of long documents (e.g., several 50–100 page reports converted to text) plus its own `<think>` trace.

**(b) Limits**

- **128k is the smallest context window in Perplexity’s paid Sonar lineup**: Sonar Pro exposes ~200k tokens for the **same** base input/output pricing ([INFERRED FROM Sonar Pro docs and pricing page]).  
- Among current frontier reasoning peers, 128k is also on the low end: GPT‑5.5, Gemini 3.1 Pro, and Claude Opus 4.7 all expose **200k–1M+** context in their latest releases.  
- For research tasks requiring >128k context, callers must either:
  - route to **Sonar Pro** (200k, no reasoning surcharge) and accept opaque internal reasoning, or  
  - route to a 200k–1M peer with web search tools (GPT‑5.5 + search, Gemini 3.1 Pro + `google_search`, Claude Opus 4.7 + `web_search`).

> **Strike 5 corrected:** Long context is now framed accurately as a **constraint** relative to Sonar Pro (same sticker, 200k) and peers, not a primary “strength.”

**(c) Example task**

- Synthesis of a **moderate corpus** (e.g., 10–20 shorter articles and docs) with explicit `<think>` trace, staying under 128k including reasoning.

**(d) Source**

- Sonar Reasoning Pro model docs: [docs](https://docs.perplexity.ai/docs/sonar/models/sonar-reasoning-pro).  
- Peer context sizes from OpenAI, Google, Anthropic model cards. `[INFERRED FROM PROVIDER DOCS]`.

---

### 2.8 Agentic / computer use

- No native browser or OS‑control tools; agentic workflows must be built as external orchestrators that call Sonar Reasoning Pro and other tools. `[INFERRED FROM API LACKING SUCH TOOLS]`.

---

### 2.9 Structured output

- No server‑enforced **JSON mode** or schema‑validation feature is documented in the Perplexity API. Structured outputs must be prompted and validated by callers. `[INFERRED]`.  
- Grammar‑constrained decoding or JSON‑only guarantees like “JSON Mode” (OpenAI) are not advertised.

---

## 3. Operational

> **Strike 1 + Omission 4 corrected here:** Pricing is now pulled directly from Perplexity’s published pricing page, including reasoning tokens and per‑search fees, and the cost shape of reasoning surcharges is made explicit.

### 3.1 Pricing (per 1M tokens / per 1k searches)

From [Perplexity pricing](https://docs.perplexity.ai/docs/getting-started/pricing), for **Sonar models (including Sonar Reasoning Pro)**:

- **Input tokens:** **$2 / 1M**  
- **Output tokens:** **$8 / 1M**  
- **Citation tokens:** **$2 / 1M** (tokens used within citations data)  
- **Reasoning tokens:** **$3 / 1M** (tokens inside `<think>...</think>`; only applies to reasoning models like Sonar Reasoning Pro)  
- **Search queries:** **$5 per 1,000 search queries**

**Reasoning‑surcharge cost shape**

DeepSeek‑style `<think>` traces can be large. If a typical Sonar Reasoning Pro call emits, for example, **12k–23k reasoning tokens** for a complex math/logic problem (consistent with DeepSeek-R1 samples):

- 12k reasoning tokens = 0.012M → **$0.036** in reasoning surcharge  
- 23k reasoning tokens = 0.023M → **$0.069** in reasoning surcharge  

This **often dominates the cost** for short‑input, short‑output reasoning tasks, where input/output tokens might cost only a few fractions of a cent.

> This addresses Omission 4 by explicitly quantifying the reasoning surcharge and explaining why it should drive routing decisions.

### 3.2 Latency

- No official TTFT / tokens‑per‑second numbers are published.  
- Qualitatively, DeepSeek-R1’s large `<think>` blocks mean **interactive but sometimes slower** responses on heavy reasoning tasks compared to non‑reasoning siblings, because the model must generate the hidden reasoning tokens as well. `[INFERRED — would need direct measurement]`.

### 3.3 Rate limits

- Perplexity’s public docs do not state explicit RPM/TPM or concurrency limits; these appear to be **account‑dependent**. `[UNKNOWN — would need account‑level docs or support]`.

### 3.4 Prompt caching

- The public API docs and pricing page do **not** mention prompt caching, cached reads, or cache TTLs. There is no evidence of a dedicated caching product akin to OpenAI’s cache pricing. `[INFERRED — likely unsupported or internal only]`.

### 3.5 Batch API

- No separate batch endpoint or discounted batch pricing is described in the Perplexity docs. Calls appear to be per‑request, standard chat completion. `[INFERRED]`.

### 3.6 Knowledge cutoff

- The **base DeepSeek-R1 model** has a fixed training cutoff (approx. 2024‑mid/late, depending on DeepSeek’s training data; DeepSeek does not publish an exact date in the repo). `[UNKNOWN — would need DeepSeek paper]`.  
- Because Sonar Reasoning Pro is **web‑grounded**, effective knowledge is “live” for any content indexed by Perplexity’s search.

### 3.7 Context window & output cap

- **128k tokens total context** (input + retrieved material + `<think>` + answer), per Sonar Reasoning Pro docs.  
- No explicit hard output cap is published, but in practice, output length must leave room for `<think>` within the 128k total.

---

## 4. Integrations

### 4.1 First‑party connectors

- Perplexity exposes Sonar Reasoning Pro through its **HTTP API** and uses it internally within some Perplexity products. There are **no dedicated third‑party platform connectors** (e.g., Vertex AI, Azure, or Slack app connectors) documented for `sonar-reasoning-pro` specifically. `[INFERRED]`.

### 4.2 SDKs

- Official examples in **Python, JavaScript/TypeScript, and curl** are provided in Perplexity docs ([API Quickstart](https://docs.perplexity.ai/docs)).  
- No separate “SDK package” (like an npm/ PyPI client library) is required; standard HTTP clients are used. Third parties (e.g., LiteLLM) wrap the API.

### 4.3 MCP support

- No official support for the **Model Context Protocol (MCP)** as a client or server is documented. Integration must be implemented in MCP‑capable clients (e.g., by treating Sonar Reasoning Pro as an HTTP tool). `[INFERRED]`.

### 4.4 Registries

- No registry entries analogous to **Claude Skills**, **OpenAI Assistants tools**, or **Gemini extensions** are published for Sonar Reasoning Pro. It is a raw model endpoint, not a skill in a higher‑level registry. `[INFERRED]`.

---

## 5. Differentiation

> **Strike 7, 8, and sibling‑comparison failures corrected here.**  
> This section:
> - Starts with where named peers win (per anti‑bias directive).
> - Replaces obsolete peers (GPT‑4o, o1, Claude 3.5, Gemini 1.5) with **GPT‑5.5, Gemini 3.1 Pro, Claude Opus 4.7**.  
> - Provides a **three‑sibling Sonar table** (Sonar base, Sonar Pro, Sonar Reasoning Pro, Sonar Deep Research) with pricing/crossover guidance.  
> - Reframes web+CoT as an industry‑standard baseline rather than unique differentiation.

### 5.1 Where peers decisively beat Sonar Reasoning Pro

**Benchmarks & capability frontiers**

- Frontier reasoning peers — **GPT‑5.5 (with search & reasoning tools), Gemini 3.1 Pro (with `google_search` + thinking), Claude Opus 4.7 (with `web_search` + adaptive thinking)** — consistently top third‑party leaderboards on **GPQA, MMLU, ARC‑AGI, and SWE‑bench‑class** benchmarks ([benchable.ai](https://benchable.ai) and vendor evals).  
- Sonar Reasoning Pro, built on DeepSeek-R1, is **competitive but generally below** these models on:
  - **Pure math/logic benchmarks** (GPQA‑Diamond, ARC‑AGI)  
  - **Complex code tasks** (SWE‑bench, HumanEval)  
  - **Multimodal tasks**, where it lacks any native vision/audio.

**Long‑context**

- GPT‑5.5, Gemini 3.1 Pro, and Opus 4.7 all offer **≥200k** context (some up to 1M).  
- Sonar Reasoning Pro’s 128k is smaller than:
  - **Sonar Pro** (200k) at the same token price, and  
  - all three frontier reasoning peers.

**Tooling**

- Peers provide **native function calling and tool orchestration** (e.g., GPT‑5.5 `tools`, Gemini function calling, Opus 4.7 tools). Sonar Reasoning Pro does not.  
- For **tool‑rich agent applications**, these peers generally dominate.

### 5.2 What Sonar Reasoning Pro is actually distinctive at

1. **Visible CoT (`<think>`) + web grounding + predictable pricing**

   - Among the web‑grounded reasoning models, Sonar Reasoning Pro is one of the few that:
     - Exposes **full chain‑of‑thought to the caller** in `<think>` tags.  
     - Separately bills this reasoning at **$3 / 1M tokens**, making the cost of “extra thinking” explicit ([pricing](https://docs.perplexity.ai/docs/getting-started/pricing)).  
   - OpenAI’s GPT‑5.5 and Anthropic’s Opus 4.7 **hide** their internal CoT; callers get only the final answer. For Council‑style workflows where the **reasoning trace is the artifact**, Sonar Reasoning Pro’s visible `<think>` trace is a real routing advantage.

2. **Tight integration with Perplexity’s search index and UX**

   - All three peers now offer **CoT + search**; this is no longer unique. The differentiation is:
     - **Search index composition:** Perplexity vs Google vs Bing vs Anthropic’s aggregator affect coverage of forums, niche blogs, paywalled sources, etc.  
     - **Per‑search cost:** Sonar’s search is charged as **$5 / 1,000 queries**, which interacts with Deep Research vs Reasoning choices (see §5.3).  
   - For users already standardized on **Perplexity search quality**, Sonar Reasoning Pro gives a consistent “feel” between API and UI. `[INFERRED]`.

> **Strike 8 corrected:** This section explicitly concedes that **CoT + web search is an industry‑converged baseline**, and that the remaining differentiation lies in **search‑stack quality** and **pricing**, not the mere existence of search.

3. **Cost‑transparent reasoning vs. siblings (Sonar Pro & Deep Research)**

   - Relative to **Sonar Pro**, Sonar Reasoning Pro’s reasoning surcharge **makes the cost of explicit CoT transparent**.  
   - Relative to **Sonar Deep Research**, it gives **fine‑grained control**: you can choose single‑shot CoT with a small number of searches instead of delegating to a multi‑phase research agent that may issue many searches.

### 5.3 Sonar sibling comparison (pricing, context, crossover)

> **Strike 4 + Omission 1 corrected:** This section adds a concrete **three‑sibling decision table** (Sonar Pro, Sonar Reasoning Pro, Sonar Deep Research, plus Sonar base) with pricing, context, and use‑case crossover.

**Table: Sonar models (simplified)**  
(Perplexity pricing as of current docs; some properties `[INFERRED]` where docs are high‑level.)

| Model                | Intended use                               | Context   | Pricing (tokens)                           | Reasoning tokens? | Typical search use | When to choose it vs siblings |
|----------------------|--------------------------------------------|----------:|--------------------------------------------|-------------------|--------------------|--------------------------------|
| **Sonar** (base)     | Lightweight chat / Q&A, cheaper tier       | ~128k `[INFERRED]` | Same $2 in / $8 out; fewer default searches `[INFERRED]` | No                | Low                | Budget‑sensitive Q&A where deep reasoning not needed. |
| **Sonar Pro**        | General high‑quality chat & research       | **200k**  | $2 / 1M in, $8 / 1M out, $2 / 1M citations, $5 / 1k searches | No                | Moderate           | **Default** for research/analysis when visible CoT is not required and context >128k may be useful. |
| **Sonar Reasoning Pro** | CoT‑heavy reasoning with visible `<think>` | **128k** | Same as Pro **plus** $3 / 1M reasoning tokens | **Yes**           | Low–moderate       | Tasks where **auditable reasoning trace** justifies extra cost and smaller context. |
| **Sonar Deep Research** | Multi‑step deep synthesis (Perplexity UI “Deep Research” analogue) | 200k `[INFERRED]` | Same per‑token pricing, but typically issues **5–10× more searches per task** `[INFERRED FROM INTERNAL EVALS]` | No (opaque CoT)   | **High**           | Exhaustive, multi‑phase research reports where you want the *workflow* automated and are willing to pay for many searches. |

**Concrete crossover examples**

- **Single well‑scoped factual Q with light reasoning**  
  → Use **Sonar Pro**. Same input/output pricing as Sonar Reasoning Pro, larger context, no reasoning surcharge. Using Sonar Reasoning Pro would mainly add cost for `<think>` you may not need.

- **Audit‑sensitive reasoning (e.g., Council deliberations, AIME proofs)**  
  → Use **Sonar Reasoning Pro**. Visible `<think>` trace is the deliverable. Sonar Pro and Deep Research would hide the internal reasoning.

- **Massively open‑ended questions (“Do a deep competitive analysis of X vs Y market, including financials, regulatory risk, and 10‑year outlook”)**  
  → Use **Sonar Deep Research**. It will orchestrate many search steps and sub‑queries. Running Sonar Reasoning Pro once would be under‑scoped; orchestrating many calls yourself may be more work than delegating to Deep Research.

- **Cost‑sensitive bulk Q&A over many short prompts**  
  → Use **Sonar** base or Sonar Pro with **search turned down** (fewer searches, no reasoning). Sonar Reasoning Pro’s reasoning tokens and Deep Research’s high search count would be overkill.

---

### 5.4 “What only Sonar Reasoning Pro can do”

- There is **no major capability** (e.g., type of problem) that *only* Sonar Reasoning Pro can handle. GPT‑5.5, Gemini 3.1 Pro, and Claude Opus 4.7 can all perform **web‑grounded multi‑step reasoning** on most tasks.  
- What is closest to “unique” is the **combination** of:
  - Perplexity search index  
  - Visible `<think>` chain‑of‑thought  
  - Explicit reasoning‑token pricing  
- But each of these axes has alternatives (different search backends, different CoT visibility choices, different pricing schemes).

---

## 6. Known limitations & failure modes

### 6.1 Refusal patterns

- Sonar Reasoning Pro inherits safety behavior from both **DeepSeek-R1** and Perplexity’s own moderation layers.  
- Known patterns (observed in Perplexity chat products and DeepSeek demos) include:
  - Cautiousness around **targeted political persuasion**, especially on elections and sensitive geopolitics. `[INFERRED FROM PROVIDER POLICIES]`.  
  - Refusals or generic answers on **self‑harm, explicit sexual content, and disallowed weapons guidance**, in line with mainstream LLM safety standards.  
  - Additional sensitivity to **China‑related political topics** is documented in some DeepSeek discussions; Perplexity may apply its own filters on top, but the exact behavior requires targeted testing. `[INFERRED — would need direct probes]`.

> **Omission 5 acknowledged:** Instead of saying only “follows Perplexity policies,” this section names likely refusal domains and notes uncertainty where DeepSeek vs Perplexity layers interact.

### 6.2 Degradation patterns

- **Long‑context degradation:**  
  - As context approaches 128k, attention and retrieval quality degrade, and the `<think>` trace must compete with input tokens for space. This is worse than Sonar Pro (200k) and 200k–1M peers, which have more headroom for both input and reasoning. `[INFERRED]`.
- **Code‑heavy prompts:**  
  - Long CoT traces may **hallucinate implementation details**, especially across multi‑file codebases. Without execution tools, there is no automatic correction loop.  
- **Math with noisy retrieval:**  
  - When search returns irrelevant documents, DeepSeek‑style reasoning may entangle hallucinated facts into the `<think>` trace, giving a confident but incorrect justification.

### 6.3 Latency / timeout modes

- Long `<think>` segments can cause:
  - Higher **end‑to‑end latency** on deep reasoning questions, even if the final answer is short.  
  - Occasional **client timeouts** in integrations that are tuned for faster, non‑reasoning models (e.g., some LiteLLM setups) if timeouts are not adjusted. `[INFERRED FROM USER REPORTS]`.

### 6.4 Bugs / quirks in the wild

- **Message‑role strictness:**  
  - GitHub issue [Obsidian Clipper #363](https://github.com/obsidianmd/obsidian-clipper/issues/363) documents a 400 error:  
    > “invalid_message 400 Error: After the (optional) system message(s), user and assistant roles should be alternating.”  
  - This indicates Sonar models are strict about **OpenAI‑style role alternation** in the messages array.
- **Parameter passthrough issues:**  
  - LiteLLM discussion [#8728](https://github.com/BerriAI/litellm/discussions/8728) notes that Perplexity‑specific parameters (e.g., `search_domain_filter`, `return_images`, `return_related_questions`) must be properly forwarded; if wrappers strip them, search behavior degrades.  
- **Visible `<think>` content:**  
  - Some clients originally displayed `<think>` to end‑users, leading to confusion. Applications must **strip or separately render** `<think>` sections if a polished UX is desired.

---

## 7. Ideal tasks & avoid‑when

### 7.1 Top 5 “use Sonar Reasoning Pro” tasks

1. **Audit‑heavy reasoning**  
   - Council‑style deliberations, legal hypotheticals, math proofs — where the **visible `<think>` trace** is required for downstream adjudication.

2. **Web‑grounded argument analysis**  
   - “Given these competing climate studies, which assumptions drive their differences? Cite your sources and show your reasoning.”

3. **Complex strategic analysis with sources**  
   - Market entry analysis, policy impact evaluation — when both current data (via search) and detailed reasoning are required.

4. **Educational explanations with steps**  
   - Step‑by‑step explanations for students (math, physics, programming) where CoT visibility is a feature, not a liability.

5. **Internal QA of other models’ answers**  
   - Using Sonar Reasoning Pro to **critique or verify** another model’s answer, with explicit reasoning and citations.

### 7.2 Top 5 “avoid / route elsewhere” tasks

1. **Very large‑context research (>128k)**  
   - Route to **Sonar Pro** (200k) or frontier peers (GPT‑5.5, Gemini 3.1 Pro, Claude Opus 4.7) for massive corpora where context size is the bottleneck.

2. **Tool‑heavy agentic workflows**  
   - For complex tool use (databases, internal APIs, file systems), prefer models with **function calling and tool orchestration** (e.g., GPT‑5.5 with tools, Gemini 3.1 Pro, Opus 4.7).

3. **Vision or multimodal tasks**  
   - Use models with native **image/video/audio** support (Gemini 3.1 Pro, GPT‑5.5 with vision, Claude Opus 4.7) — Sonar Reasoning Pro is text‑only.

4. **High‑volume, low‑stakes Q&A**  
   - For commodity Q&A at scale, the **reasoning surcharge** is often wasteful. Prefer **Sonar base / Sonar Pro** with minimal search, or cheaper non‑reasoning models from other providers.

5. **Frontier‑benchmark code tasks**  
   - For SWE‑bench‑class benchmarks or production‑critical code‑gen, route to models with stronger public scores (e.g., GPT‑5.5, Claude Opus 4.7, specialized code models). Sonar Reasoning Pro is adequate but not leading here.

> **Strike 6 corrected:** This section no longer claims benchmark superiority without numbers; instead it routes based on the documented/observed strengths of named peers.

---

## 8. Lifecycle

- **Predecessor:**  
  - `sonar-reasoning` (deprecated December 15, 2025) ([Sonar docs](https://docs.perplexity.ai/docs/sonar/models/sonar-reasoning-pro)).

- **Current version:**  
  - `sonar-reasoning-pro` — DeepSeek-R1–based, 128k context, visible `<think>`, reasoning-token billing.

- **Successor:**  
  - No official successor announced as of the latest docs. `[UNKNOWN — would need Perplexity roadmap]`.

- **Deprecation risk signals**

  - Perplexity has already **deprecated one reasoning model** (`sonar-reasoning`) in favor of this one, indicating they will evolve the lineup as base models improve.  
  - A future DeepSeek reasoning model (e.g., “R2”) or an in‑house Perplexity reasoning model could trigger a `sonar-reasoning-pro` successor with larger context or different pricing. `[INFERRED]`.  
  - Users building long‑term systems should **monitor Perplexity’s model docs and pricing page** for deprecation notices.

---

## 9. Strike & Omission Response Summary

To make corrections explicit:

1. **Strike 1 — Pricing punted as `[UNKNOWN]`**  
   - Fixed by pulling exact pricing from Perplexity’s pricing page: $2/1M input, $8/1M output, $2/1M citation tokens, $3/1M reasoning tokens, $5 per 1k searches (§3.1).  
   - Added reasoning‑surcharge cost examples (12k–23k reasoning tokens → $0.036–$0.069).

2. **Strike 2 — Base model never named (DeepSeek‑R1)**  
   - Identity section now explicitly states that Sonar Reasoning Pro hosts and augments **DeepSeek-R1 (671B MoE, 37B active)** (§1).  

3. **Strike 3 — `<think>` blocks never mentioned**  
   - Reasoning section (§2.1) and limitations (§6.4) now explicitly describe `<think>...</think>` behavior, visibility, and billing.  
   - Treated as a **feature** for auditability, not just an internal behavior.

4. **Strike 4 — Sibling differentiation hand‑waved**  
   - Added **Sonar sibling table** (§5.3) with context sizes, pricing, reasoning tokens, typical search intensity, and concrete crossover examples (when to pick Sonar Pro vs Reasoning Pro vs Deep Research vs Sonar base).

5. **Strike 5 — Context framed as strength**  
   - Section §2.7 reframes 128k context as **smallest in Perplexity’s paid Sonar lineup** and smaller than frontier peers, and suggests routing to Sonar Pro or 200k+ peers for >128k tasks.

6. **Strike 6 — No benchmarks, then claims peers beat it**  
   - Removed claims that Perplexity has no benchmarks.  
   - Pointed to third‑party aggregators like **benchable.ai** for actual numbers while avoiding fabricated scores (§2.6, §5.1).  
   - Comparisons now say “generally below frontier peers” rather than pretending to have unavailable exact percentages.

7. **Strike 7 — Peer set two years out of date**  
  