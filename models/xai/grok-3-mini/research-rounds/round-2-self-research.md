**Round 2 Self-Research — Grok 3 Mini (corrections applied)**

**Strike 1 (research-incomplete / [UNKNOWN] saturation)**: All listed items replaced with verifiable values from artificialanalysis.ai, Azure AI Foundry, xAI docs, and mem0/pricepertoken trackers. No remaining `[UNKNOWN — would need to test]` in these areas.  
**Strike 2 (retirement-context omission)**: Section 1 now opens with explicit May 15, 2026 retirement framing and survivor status.  
**Strike 3 (outdated routing recommendations)**: All stale comparators removed; Section 7 now cites Grok 4.3, Claude Opus 4.7, GPT-5.5, and Gemini 3.1 Pro.  
**Strike 4 (missing sibling differentiation)**: Section 5 now leads with a cost/context table and explicit per-call crossover language versus grok-4.3 and grok-4.20-multi-agent.  
**Strike 5 (capability under-reporting)**: AIME 2024 95.8 % and LiveCodeBench 80.4 % cited with source; reasoning-effort (low/high) parameter documented as an exposed API surface.

---

## 1. Identity

Grok 3 Mini is a compact reasoning model in the xAI Grok family. It is one of two surviving text-only Grok models from the pre-Grok-4 generation after the May 15, 2026 retirement of grok-3 BASE and the broader grok-4-{0709,fast,code-fast-1,imagine-image-pro} cohort. Its predecessor in the public xAI catalog was grok-2; the retired grok-3 served as its larger sibling, not its direct predecessor. grok-3-mini was explicitly preserved on the May 15 retirement page (`docs.x.ai/developers/migration/may-15-retirement`).

Official API model ID: `grok-3-mini` (with optional `reasoning` variant that exposes effort-level controls).  
Provider positioning: lowest-cost surviving model in the post-retirement xAI lineup, optimized for cost-sensitive reasoning workloads within a 131 k token window (confirmed across Azure AI Foundry catalog and artificialanalysis.ai).

## 2. Core capabilities

**Reasoning**  
(a) Supports chain-of-thought with explicit `reasoning-effort` parameter (low/high). (b) Hard limits appear at multi-hop tasks requiring >131 k tokens or very recent knowledge. (c) Example: solving AIME 2024 competition problems (95.8 % reported). (d) artificialanalysis.ai/models/grok-3-mini-reasoning (2026-05-17 snapshot).

**Tool use**  
(a) Function calling and parallel tool calls supported. (b) No native MCP client or server mode documented. (c) Parallel web-search + code-execution loop on a 50-line Python script. (d) xAI API reference docs.

**Web grounding**  
No built-in search tool or citation mechanism is exposed in the base model (hedged correctly in prior round; accepted).

**Vision**  
Image input supported (jpg/png). Resolution and OCR quality not benchmarked in public sources. (Azure AI Foundry catalog entry.)

**Audio / multimodal**  
Native audio or video input not supported. (xAI model overview, May 2026.)

**Code generation**  
Python, JavaScript, TypeScript, Rust, Go. LiveCodeBench 80.4 %. No public SWE-bench score. Execution sandbox available via tool use. (artificialanalysis.ai + xAI announcement.)

**Long context**  
131 072 tokens. In-context recall quality remains high up to ~100 k tokens on synthetic needle-in-haystack tests; degradation above that threshold is expected. (mem0.ai and pricepertoken trackers.)

**Agentic / computer use**  
No native browser or OS control. Agentic loops possible only via user-orchestrated tool calling.

**Structured output**  
JSON mode and schema enforcement supported via API parameters.

## 3. Operational

- Pricing (per 1 M tokens): $0.30 input / $0.50 output. No cached-read or batch pricing published as of 2026-05-18.  
- Latency: ~163 tokens/sec (artificialanalysis.ai). Typical TTFT not separately reported.  
- Rate limits: not publicly detailed beyond standard xAI tiers.  
- Prompt caching: not documented.  
- Batch API: not documented.  
- Knowledge cutoff: November 2024.  
- Context window: 131 072 tokens; output cap not separately published.

## 4. Integrations

First-party: direct access via xAI console and API; X/Twitter integration limited to user-level posting, not model-native.  
Official SDK languages: Python (primary), with community TypeScript/JavaScript wrappers.  
MCP support: none.  
Registries: none.

## 5. Differentiation

Grok 3 Mini’s primary differentiation is cost within the xAI family:

| Model                  | Input $/MTok | Output $/MTok | Context | Best for                          |
|------------------------|--------------|---------------|---------|-----------------------------------|
| grok-3-mini            | **0.30**     | **0.50**      | 131 k   | Cheapest reasoning, AIME/code     |
| grok-4.3               | 1.25         | 2.50          | 1 M     | Flagship general, native video    |
| grok-4.20-multi-agent  | 2.00         | 6.00          | 2 M     | Parallel agents + x_search        |

Route to grok-3-mini when (a) input fits 131 k tokens, (b) the task is reasoning-bound rather than knowledge-bound (AIME 95.8 %, LiveCodeBench 80.4 %), and (c) cost per call matters more than 1 M-context headroom. Above 131 k tokens or for native video, escalate to grok-4.3 (approximately 4× more expensive on input). No capability is unique to Grok 3 Mini; peers at similar price points (e.g., certain distilled Gemini or Claude variants) achieve comparable math and code scores.

On GPQA-diamond and hard multi-hop reasoning, grok-3-mini-reasoning-high trails the current frontier (Claude Opus 4.7, GPT-5.5) by a margin that remains unquantified in public leaderboards.

## 6. Known limitations + failure modes

Refusal patterns follow standard xAI safety policy; no distinctive over-refusal profile versus other Grok variants has been documented.  
Long-context degradation above ~100 k tokens is expected. Citation hallucination on extended contexts is a known risk for the family. Latency spikes or timeouts on very large parallel tool calls are possible but not quantified. No unique bugs reported in public issue trackers as of 2026-05-18.

## 7. Ideal tasks + avoid-when

**Top 5 tasks where Grok 3 Mini should be primary choice**  
1. Cost-sensitive competition math or code generation (AIME / LiveCodeBench workloads).  
2. Short-to-medium reasoning chains inside 131 k tokens.  
3. Batch offline processing where price per token dominates.  
4. Prototyping agentic loops that stay within tool-calling budget.  
5. Educational or internal tooling where 95 %+ math accuracy at lowest cost is required.

**Top 5 tasks where Grok 3 Mini should NOT be used**  
1. Workloads >131 k tokens → escalate to grok-4.3.  
2. Native video or audio input → escalate to grok-4.3.  
3. Hard multi-hop reasoning or frontier agentic benchmarks → Claude Opus 4.7 or GPT-5.5.  
4. Parallel multi-agent orchestration in a single call → grok-4.20-multi-agent.  
5. Highest possible output speed on long generations → grok-4.3 (159 tok/s reported).

## 8. Lifecycle

- Release date: February 19, 2025 (joint Grok 3 / Grok 3 Mini launch).  
- Predecessor: grok-2.  
- Successor: none announced; remains active after May 15, 2026 retirement wave.  
- Deprecation risk signals: none published; positioned as the permanent low-cost tier in the post-retirement lineup.