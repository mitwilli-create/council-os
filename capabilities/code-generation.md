---
capability: code-generation
last_updated: 2026-05-17
research_round: 2
models_covered: 13
---

# Code Generation — Cross-Model Comparison

## Benchmark Table

| Model | SWE-bench Verified | SWE-bench Pro | Terminal-Bench 2.0 | Tyler Folkman (7-cat) | Execution Sandbox | Confidence |
|---|---|---|---|---|---|---|
| **anthropic/claude-opus-4-7** | 87.6% | **64.3%** | 69.4% | 63/100 | No (external) | High |
| **anthropic/claude-sonnet-4-6** | 79.6% | unpublished | — | **68/100** | No (external) | High |
| **anthropic/claude-haiku-4-5** | 73.3% | — | — | — | No (external) | High |
| **openai/gpt-5-5** | 88.7% | 58.6% | **82.7%** | — | Via tools | High |
| **openai/gpt-5-4** | — | 57.7% | 75.1% | — | Via tools | Medium |
| **openai/gpt-5-3-chat-latest** | — | — | — | — | No (external) | Low |
| **google/gemini-3-1-pro** | — | 54.2% | — | — | Basic native | High |
| **google/gemini-3-flash** | ~78% | — | — | — | Basic native | High |
| **xai/grok-4-3** | — | — | — | — | No (API) | Low |
| **xai/grok-4-20-multi-agent** | — (~75% single-agent) | — | — | — | Yes (built-in) | Medium |
| **perplexity/sonar-pro** | — | — | — | — | No | Low |
| **perplexity/sonar-deep-research** | — | — | — | — | No | Medium |
| **perplexity/sonar-reasoning-pro** | — | — | — | — | No | Low |

**SWE-bench Verified note:** The easier split is approaching saturation at the frontier (87–89% band); the harder SWE-bench Pro split is the more reliable routing signal.

---

## Tiered Ranking

### Tier 1 — Hard SE tasks and correctness-first agentic coding

**Claude Opus 4.7** leads on SWE-bench Pro (64.3%) — the most reliable benchmark for multi-file, multi-step real-world SE work. This is the right call when the task rubric is correctness, test passing, and repository-wide coherence.

**GPT-5.5** leads on Terminal-Bench 2.0 (82.7%, +13pp over Opus 4.7) — the routing signal for terminal-native, tool-using agentic coding pipelines. Loses to Opus on SWE-bench Pro by 5.7pp.

**Cost caveat:** OpenAI's own recommendation for IDE-style agentic coding is `gpt-5.3-codex` (apply_patch, persistence, multi-hour sessions), not GPT-5.5. GPT-5.5 is for mixed workflows where coding is one component.

### Tier 2 — Real-world quality and cost efficiency

**Claude Sonnet 4.6** wins on Tyler Folkman's UX/maintainability-weighted 7-category rubric (68/100 vs. Opus 4.7's 63/100) at 40% lower cost. SWE-bench Verified 79.6%. The right model when the deliverable is production-shipped code with human-readable structure, not just a passing test suite.

**Gemini 3 Flash** (~78% SWE-bench Verified) is competitive for well-scoped, isolated code tasks at Flash pricing. Not suitable for multi-file codebase work.

**Claude Haiku 4.5** (73.3% SWE-bench Verified) is the high-throughput worker for bounded, well-specified codegen: test generation, linting fixes, schema transforms. 10x throughput at Sonnet cost with Batch API.

### Tier 3 — Research-adjacent, not primary code models

**Gemini 3.1 Pro** (54.2% SWE-bench Pro) trails Opus by 10.1pp — a routing-decision gap, not a footnote. High TTFT (28–34s) makes iterative debug loops slow. Not recommended for autonomous SE.

**GPT-5.4** (57.7% SWE-bench Pro, 75.1% Terminal-Bench) is the affordable step below GPT-5.5, but ships a documented "frontend anti-slop prompt block" requirement — generic UI prompts produce over-decorated output without it.

**Grok 4.20 Multi-Agent** has a built-in `code_execution` sandbox (unique in the tier) and ~75% single-agent SWE-bench. Best xAI option if parallel agent code debate is the workflow; otherwise Grok 4.3 is cheaper.

**Grok 4.3** — no public SWE-bench or equivalent score. Qualitative claims from BenchLM only. Do not route production code tasks here without empirical side-by-side testing.

### Not for code generation

**Perplexity Sonar Pro / Sonar Deep Research / Sonar Reasoning Pro** — none have published coding benchmarks. No execution sandbox. Sonar Deep Research's own profile explicitly flags this limitation. Their code-adjacent value is web-grounded library research, documentation lookup, and framework comparison — not implementation.

---

## Routing Recommendations

| Task | Recommended model | Reason |
|---|---|---|
| Hard multi-file SE / correctness-first | Claude Opus 4.7 | SWE-bench Pro leader (64.3%) |
| Terminal/tool-using agentic pipelines | GPT-5.5 | Terminal-Bench 2.0 leader (82.7%) |
| IDE-style apply_patch / long sessions | gpt-5.3-codex | OpenAI's stated recommendation |
| UX-weighted full-stack features | Claude Sonnet 4.6 | Beats Opus on Tyler Folkman rubric at 40% lower cost |
| High-volume bounded codegen (tests, lint, schema) | Claude Haiku 4.5 | 10x throughput at batch pricing |
| Well-scoped isolated tasks at low cost | Gemini 3 Flash | ~78% SWE-bench at Flash pricing |
| Parallel agent code debate | Grok 4.20 Multi-Agent | Only model in tier with built-in execution sandbox |
| Library/SDK research, doc lookup | Perplexity Sonar Pro | Web-grounded, not implementation |
| Framework comparison, migration research | Perplexity Sonar Deep Research | Source synthesis strength |

---

## Notable Differentiators

**The Opus/Sonnet inversion.** Opus 4.7 leads Sonnet 4.6 by 8pp on SWE-bench Verified and by an unknown margin on SWE-bench Pro. But Sonnet 4.6 beats Opus 4.7 by 5 points on a 7-category real-world rubric that weights UX, maintainability, and ANSI/vim-key correctness. This is not noise — Opus 4.7 had specific failures in that test (no vim keys, broken ANSI sequences). Routing depends on the rubric that governs the actual deliverable.

**Instruction-literalism regression in Opus 4.7.** Anthropic acknowledges that Opus 4.7 is "substantially better at following instructions," which means prompts written for Opus 4.6 can produce unexpected results. Migrated prompts require explicit re-testing. Opus 4.7 also fabricates commit SHAs, file paths, and PR numbers at high confidence (GitHub issue #50235) — verify all code identifiers against actual repo state before use.

**Terminal-Bench is GPT-5.5's clearest win.** The +13.3pp margin over Opus 4.7 on Terminal-Bench 2.0 is the largest verified gap between any two Tier 1 models on a published benchmark. For terminal-native agent workflows, GPT-5.5 is not a lateral choice — it is meaningfully better.

**Empirical: GPT-5.5 returned empty content on a 12k-char design-spec codegen prompt** via `call-model.mjs` (career-ops ARCH.42, 2026-05-20). Possible interaction with prompt length or wrapper. Re-test before routing long-form design-spec codegen here. Surfaced by ARCH.42 dealbreaker; logged as `data/council-eval-2026-05-23-dispatch.log` entry showing `completion_tokens: 0, latency_ms: 120000, quality: "empty"`. Not a known failure mode for GPT-5.5 at the published benchmarks — investigate before routing similar shapes.

**GPT-5.4's frontend slop problem.** OpenAI ships a dedicated frontend anti-slop prompt block because generic "build a UI" prompts produce over-decorated, low-signal output. This is an unusually documented, concrete failure mode for a frontier model.

**The only built-in execution sandbox.** Grok 4.20 Multi-Agent is the only model in this tier with a built-in `code_execution` server-side tool. All other models requiring code execution must integrate external sandboxes.

**Perplexity models have zero published coding benchmarks.** All three Sonar variants have no SWE-bench, HumanEval, or equivalent scores. Sonar Deep Research's own profile explicitly declines the coding-model positioning.

---

## Sources

- [Anthropic — Claude Opus 4.7 announcement (SWE-bench Pro 64.3%, instruction-literalism)](https://www.anthropic.com/news/claude-opus-4-7)
- [Scale Labs — SWE-bench Pro leaderboard](https://labs.scale.com/leaderboard/swe_bench_pro_public)
- [BuildFastWithAI — GPT-5.5 review (SWE-bench Verified 88.7%)](https://www.buildfastwithai.com/blogs/gpt-5-5-review-2026)
- [marc0.dev — SWE-bench leaderboard May 2026](https://www.marc0.dev/en/leaderboard)
- [OpenAI — Introducing GPT-5.5 (Terminal-Bench 82.7%)](https://openai.com/index/introducing-gpt-5-5)
- [Tyler Folkman, Substack — Sonnet 4.6 68/100 vs. Opus 4.7 63/100](https://tylerfolkman.substack.com/p/i-tested-opus-47-against-sonnet-46)
- [nxcode.io — Sonnet 4.6 SWE-bench Verified 79.6%](https://www.nxcode.io/resources/news/claude-sonnet-4-6-complete-guide-benchmarks-pricing-2026)
- [morphllm.com — Haiku 4.5 SWE-bench 73.3%](https://www.morphllm.com/claude-benchmarks)
- [Anthropic — Claude Haiku 4.5 announcement](https://www.anthropic.com/news/claude-haiku-4-5)
- [llm-stats.com — GPT-5.5 vs GPT-5.4 (Terminal-Bench 75.1%)](https://llm-stats.com/blog/research/gpt-5-5-vs-gpt-5-4)
- [OpenAI models overview (GPT-5.4 coding positioning)](https://developers.openai.com/api/docs/models/all)
- [BusinessAnalytics — Gemini 3 Flash ~78% coding accuracy](https://businessanalytics.substack.com/p/google-achieves-78-coding-accuracy)
- [Scale Labs — Gemini 3.1 Pro SWE-bench Pro 54.2%](https://scale.com/leaderboard)
- [xAI Multi-Agent docs — code_execution tool](https://docs.x.ai/developers/model-capabilities/text/multi-agent)
- [claude-code GitHub issue #50235 — Opus 4.7 hallucinated identifiers](https://github.com/anthropics/claude-code/issues/50235)
- [benchable.ai — Sonar Reasoning Pro third-party benchmarks](https://benchable.ai)
