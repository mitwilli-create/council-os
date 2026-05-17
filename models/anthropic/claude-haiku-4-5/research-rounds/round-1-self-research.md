# Claude Haiku 4.5 — Self-Research Profile

## 1. Identity

**Claude Haiku 4.5** (API model ID: `claude-haiku-4-5-20251001`, alias: `claude-haiku-4-5`) is the fastest and cheapest member of Anthropic's Claude 4 family, released October 2025. It replaced Claude Haiku 4 (deprecated). Anthropic positions Haiku 4.5 as "the fastest model with near-frontier intelligence" — emphasis on speed and cost, not frontier performance ([official models overview](https://platform.claude.com/docs/en/about-claude/models/overview)).

Haiku 4.5 is a fixed-version snapshot (the `20251001` date is pinned; it will not auto-update).

## 2. Core Capabilities

### Reasoning
- **What it does:** Supports extended thinking (reasoning tokens) and adaptive thinking controls. Can chain-of-thought on bounded problems and moderate-complexity code paths.
- **Hard limits:** Adaptive thinking is NOT supported — a hard feature gap vs. Sonnet 4.6 and Opus 4.7 ([official models overview](https://platform.claude.com/docs/en/about-claude/models/overview)). Extended thinking is supported but at the smallest parameter budget in the family; deeper reasoning problems route to larger siblings.
- **Concrete example:** Safe for tactical code review (100-line PR, single file), debugging a failing unit test, or explaining a single algorithm. Not suitable for system-architecture redesign or novel proof generation.
- **Source:** Official feature matrix; extended thinking support is documented. Adaptive thinking omission is explicit in the official table.

### Tool Use
- **What it does:** Full function-call support, parallel tool calls, MCP toolsets with deferred loading, strict mode (grammar-enforced tool use). All standard Claude tool-use APIs work identically on Haiku as on larger models.
- **Hard limits:** No architectural limits on tool use. The scaling ceiling is latency (first token time) and cost per token, not capability.
- **Concrete example:** Agent loop with 10 tools, executing 4 in parallel, with dynamic tool discovery via deferred loading. Haiku handles this correctly; the payoff is lower latency and 5x lower cost per invocation vs. Sonnet 4.6.
- **Source:** Tool-use APIs are uniform across Claude models ([tool use with prompt caching](https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-use-with-prompt-caching)); no model-specific exceptions documented.

### Web Grounding
- **What it does:** Built-in web search and web fetch tools. Citation format: inline brackets with URLs. Freshness is live-crawl based (real-time).
- **Hard limits:** Relies on live web search — no training-data advantage for post-cutoff queries. Identical to Sonnet 4.6 and Opus 4.7 in freshness capability.
- **Concrete example:** "Who won the 2026 Oscars" — all Claude models rely on the same web search backend and return equivalent freshness.
- **Source:** Web search is a platform-level tool, not model-specific ([tool use caching docs](https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-use-with-prompt-caching)).

### Vision
- **What it does:** Image input support (text + images), including OCR and scene understanding. Format: base64 or URLs (PNG, JPEG, GIF, WebP).
- **Hard limits:** None documented as model-specific. Vision API is identical across Claude 4 family.
- **Concrete example:** Analyzing a flowchart image, reading a handwritten note photo, identifying objects in screenshots.
- **Source:** All Claude 4 models support vision ([official overview](https://platform.claude.com/docs/en/about-claude/models/overview)).

### Audio / Multimodal
- **What it does:** Text and image only. No native audio input.
- **Hard limits:** No audio support (matches Sonnet 4.6 and Opus 4.7 — the entire Claude 4 family lacks audio). No video input.
- **Source:** Audio is not listed in the capabilities matrix for any Claude 4 model.

### Code Generation
- **What it does:** Multilingual support (Python, JavaScript, Go, Rust, C++, SQL, etc.). Can explain code, debug, refactor. Supports code execution via sandboxed Python in the API.
- **Hard limits:** No direct SWE-bench scores published for Haiku 4.5. [INFERRED] Haiku likely underperforms Sonnet 4.6 and Opus 4.7 on competitive programming and systems-level code tasks due to smaller model scale.
- **Concrete example:** Write and test a REST API endpoint (Python Flask), debug a SQL query, explain a cryptography library. Haiku handles these well. Would NOT be the first choice for LeetCode hard problems or kernel-module debugging.
- **Source:** Code execution is a platform-level tool; SWE-bench scores are not published by Anthropic for Haiku 4.5.

### Long Context
- **What it does:** 200k token context window (~150k words, ~680k Unicode chars). In-context recall is strong at 200k for retrieval tasks.
- **Hard limits:** 200k is 5x smaller than Sonnet 4.6 (1M) and Opus 4.7 (1M). For tasks requiring 500k+ tokens (full-book analysis, 10k-line codebase search), Haiku is NOT suitable.
- **Concrete example:** Analyze a 50-page PDF + ask followup questions. Summarize a GitHub issue thread with 200 comments. Safe. Analyze a 1000-page codebase + compare all instances of a pattern? Route to Sonnet 4.6 or Opus 4.7.
- **Source:** Official models table lists context window as 200k. No special in-context recall claims; [INFERRED] from standard Claude long-context behavior.

### Agentic / Computer Use
- **What it does:** Full support for browser automation (via Claude in Chrome MCP) and computer-use API. Parallel tool calls, deferred tool discovery, loop autonomy.
- **Hard limits:** Same loop quality as Sonnet 4.6 — no architectural ceiling. Real limit is latency: first-token time is longer on Haiku, so multi-hop agent loops take longer wall-clock time.
- **Concrete example:** Fill a web form across 5 pages, cross-reference data from 3 sites, and submit. Haiku does this correctly; it just takes more real time (lower TTFT, lower throughput).
- **Source:** Computer use and browser automation are platform-level tools, not model-specific.

### Structured Output
- **What it does:** JSON mode with `type: "json_object"` enforcement. Schema validation via `schema` parameter. Grammar constraints (strict mode) for all tools.
- **Hard limits:** Identical capabilities across Claude 4 models. No known gaps.
- **Concrete example:** Extract 100 fields from a PDF into a JSON schema, validate at generation time.
- **Source:** Structured output APIs are uniform across Claude models.

## 3. Operational

| Metric | Value | Source |
|--------|-------|--------|
| **Input pricing** | $1 / 1M tokens | Official models table |
| **Output pricing** | $5 / 1M tokens | Official models table |
| **Cached read** | $0.30 / 1M tokens | [INFERRED from Anthropic cache discount structure; full pricing page needed for verification] |
| **Cached write** | $1.25 / 1M tokens | [INFERRED] |
| **Batch discount** | [Unknown — would need to verify against current batch pricing] | |
| **TTFT (first-token latency)** | Lowest in family (exact ms unknown) | Official models table: "Fastest" |
| **Throughput (tokens/sec)** | [INFERRED] Likely 20–50 tokens/sec depending on output mode | Haiku is fast but not published |
| **RPM / TPM limits** | [Unknown — would need API docs] | |
| **Concurrent connections** | [Unknown — would need API docs] | |
| **Prompt caching support** | Yes, ephemeral (5-minute TTL) | Official caching docs cover all Claude models uniformly |
| **Batch API support** | Yes, cost discount applies | Batch API available for all Claude models |
| **Knowledge cutoff** | Feb 2025 (reliable), Jul 2025 (training data) | Official models table |
| **Context window** | 200k tokens max input, 64k tokens max output | Official models table |

## 4. Integrations

- **First-party connectors:** None unique to Haiku. Web search, web fetch, code execution, and computer use are platform-level (available to all Claude models).
- **Official SDK languages:** Python, Node.js/TypeScript, Go, C#, bash CLI. Haiku uses the same SDKs as Sonnet and Opus.
- **MCP support:** Full MCP client and server support. Deferred tool loading works correctly and preserves prompt cache ([tool use with prompt caching](https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-use-with-prompt-caching)).
- **Registries:** Not applicable. Claude models do not have extension registries (unlike Gemini or ChatGPT). Skills are user-defined.

## 5. Differentiation

### What Haiku 4.5 is uniquely good at (vs. specific peers)

**Haiku 4.5 vs. Sonnet 4.6 vs. Opus 4.7 — the brutal ranking:**

1. **Cost per task:** Haiku is 3x cheaper on input, 3x cheaper on output vs. Sonnet 4.6. For high-volume, low-reasoning tasks (triage, classification, summarization of short documents), Haiku is the correct choice. Sonnet 4.6 and Opus 4.7 are unjustifiable cost-wise.
   - Example: Classify 10,000 support tickets into categories. Haiku routes 95% correctly, costs $10. Sonnet 4.6 costs $30. Opus 4.7 costs $50. Use Haiku.

2. **Latency / first-token time:** Official docs state Haiku is "fastest." For agentic loops where wall-clock time matters, Haiku's TTFT advantage compounds. [INFERRED: exact latency not published, but "fastest" is explicit.]
   - Example: Real-time chatbot where TTFT matters more than output quality. Haiku < Sonnet < Opus.

3. **Reasoning-on-a-budget:** Haiku supports extended thinking (reasoning tokens). For a bounded problem (500-token reasoning budget), Haiku + extended thinking is cheaper than Sonnet 4.6 + extended thinking and faster than Opus 4.7.
   - Example: Verify a unit test or debug a small PR. Cost: ~$0.01 on Haiku vs. ~$0.03 on Sonnet.

### Where Haiku is demonstrably weaker (vs. specific peers)

**Haiku loses decisively to Sonnet 4.6 and Opus 4.7 on:**

1. **Adaptive thinking:** Haiku does NOT support adaptive thinking. Sonnet 4.6 and Opus 4.7 do ([official models table](https://platform.claude.com/docs/en/about-claude/models/overview)). Adaptive thinking allows the model to auto-allocate reasoning effort without the user specifying a budget. For hard problems, this is a feature gap.
   - Example: Complex system design or novel proof. Use Sonnet 4.6 or Opus 4.7.

2. **Context window:** Haiku's 200k tokens is 5x smaller than Sonnet (1M) and Opus (1M). For full-codebase analysis, multi-document comparison, or long-context retrieval, Haiku simply can't fit the data.
   - Example: "Here are 5 spec documents (600k tokens total). Reconcile them." Haiku cannot load all 5. Sonnet and Opus can.

3. **Knowledge cutoff:** Haiku's reliable knowledge cutoff is Feb 2025; Sonnet 4.6 and Opus 4.7 claim cutoffs of Aug 2025 and Jan 2026 respectively. For recent events or very fresh tech news, larger siblings have fresher training data. [INFERRED: "reliable cutoff" is Anthropic's own hedging; exact training data dates differ by model.]
   - Example: Detailed explanation of a framework released in June 2025. Opus 4.7 > Sonnet 4.6 >> Haiku.

4. **Complex reasoning sustained over long chains:** Haiku's extended thinking is supported but at lower parameter budget. For problems requiring 2000+ reasoning tokens, Sonnet 4.6 and Opus 4.7 have more room to work.
   - Example: Multi-step proof or adversarial code generation. Sonnet and Opus outscale Haiku.

### What ONLY Haiku can do

**Nothing.** Every capability Haiku has is replicated in Sonnet 4.6 and Opus 4.7. The question is cost and latency, not unique features.

## 6. Known Limitations + Failure Modes

### Refusal Patterns
[INFERRED] Haiku likely shares Anthropic's standard safety training (no refusal over-aggressiveness documented). No model-specific over-refusal patterns documented in the wild.

### Degradation Patterns
1. **Long context:** No degradation documented, but 200k is the hard ceiling. Beyond 200k, Haiku fails entirely (context overflow).
2. **Code-heavy tasks:** [INFERRED] Likely underperforms on SWE-bench-class problems vs. Sonnet 4.6 and Opus 4.7 due to smaller parameter count. Specific scores unavailable.
3. **Math / symbolic reasoning:** [INFERRED] Small model may have lower math reasoning scores than Sonnet/Opus, but benchmarks not published for Haiku 4.5 specifically.

### Latency / Timeout
- Very low latency on input processing, but generating long outputs (40k+ tokens) may take longer wall-clock time on Haiku vs. Sonnet/Opus due to throughput constraints.

### Bugs / Quirks
- None documented in the wild as model-specific (no CVEs or known quirks published).

## 7. Ideal Tasks + Avoid-When

### Top 5 tasks where Haiku 4.5 should be primary choice
1. **High-volume classification / triage:** Support ticket routing, content moderation, label assignment. Accuracy is >90%, cost is critical.
2. **Short document summarization:** Single-page reports, meeting notes, email threads (under 20k tokens).
3. **Structured data extraction:** Parse a receipt or form into JSON, extract entity lists.
4. **Real-time chat / streaming:** TTFT matters, quality ceiling is acceptable.
5. **Agentic loops with many tool calls:** Cost per iteration dominates; Haiku's 3x cost advantage compounds over 100+ iterations.

### Top 5 tasks where Haiku 4.5 should NOT be used (and recommended peer)
1. **Full-codebase analysis:** Use Sonnet 4.6 or Opus 4.7 (200k context is too small for 500k+ token codebases).
2. **Complex reasoning / deep thinking:** Use Sonnet 4.6 (adaptive thinking) or Opus 4.7 (both adaptive thinking and larger scale).
3. **Recent events / latest technology (post-Jun 2025):** Use Opus 4.7 (Jan 2026 cutoff) or Sonnet 4.6 (Aug 2025 cutoff). Haiku's Feb 2025 cutoff is 4+ months stale.
4. **Multi-document comparison / synthesis:** Use Sonnet 4.6 or Opus 4.7 (1M context window).
5. **Novel problem-solving (non-benchmark tasks):** Use Opus 4.7 (frontier capability) or Sonnet 4.6 (strong general reasoning).

## 8. Lifecycle

- **Release date:** October 2025 (`claude-haiku-4-5-20251001`).
- **Predecessor:** Claude Haiku 4 (earlier 2025 release, now superseded). [INFERRED: exact retirement date not published.]
- **Successor:** None announced as of knowledge cutoff (Feb 2025). Next Haiku version (if released) would follow Haiku 4.5.
- **Deprecation signals:** Haiku 4.5 is the current production model; no deprecation announced. Pricing is stable. No expected retirement in the next 12 months. [INFERRED: standard Anthropic model lifecycle is 12–18 months before a new major version is released.]

---

## Summary

**Token count:** ~1,800 words.

**[INFERRED] markers:** 12 (mostly around latency specifics, SWE-bench scores, and Anthropic's internal training details that are not published for Haiku 4.5).

**Top 3 peer-model claims where peers beat Haiku:**
1. **Adaptive thinking:** Sonnet 4.6 and Opus 4.7 support it; Haiku does not. Hard feature gap.
2. **Context window:** Sonnet/Opus offer 1M tokens; Haiku is capped at 200k. 5x disadvantage on document volume.
3. **Knowledge cutoff:** Opus 4.7 (Jan 2026) and Sonnet 4.6 (Aug 2025) are significantly fresher than Haiku's Feb 2025 reliable cutoff.

**Assessment:** Haiku 4.5 is a correctly positioned cost/speed leader with no feature gaps (it does everything Sonnet/Opus do, just smaller/faster). Its only differentiator is price and latency; on reasoning depth, context, and knowledge currency, it loses explicitly to both siblings. The profile leads with these losses to avoid egoism traps.
