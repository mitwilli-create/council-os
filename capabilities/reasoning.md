# Reasoning — Cross-Model Comparison

**Axis:** chain-of-thought, extended/deep thinking, problem decomposition, reasoning-effort/thinking-level controls.

**Last updated:** 2026-05-17 — synthesized from converged Tier 1 model profiles.

## Comparison table

| Model | Has reasoning surface? | Control knob | Default level | Key benchmark (with score) | Cost impact |
|-------|----------------------|--------------|---------------|---------------------------|-------------|
| claude-opus-4-7 | Yes — adaptive thinking | `thinking_effort: xhigh/high/medium/low` (implicit budget) | Adaptive auto-select | HLE 46.9%, GPQA-Diamond 94.2%, SWE-bench 87.6% | ~23.6s TTFT at xhigh; no budget cap exposed |
| claude-sonnet-4-6 | Yes — BOTH extended + adaptive | `thinking: {budget_tokens: N}` (explicit) OR adaptive | Adaptive; explicit budget available | GPQA-Diamond 74.1% baseline / 89.9% max-effort | Budget-controllable; only top-tier model with explicit cap |
| claude-haiku-4-5 | Yes — extended only | `thinking: {budget_tokens: N}` (explicit) | User-set budget | OSWorld 50.7% (agentic); no GPQA published | Adds latency; incompatible with sub-500ms targets |
| gpt-5-5 | Yes — reasoning controls | `reasoning.effort` + `phase` parameter | Not published | ARC-AGI-2 85.0%, HLE 41.4%, Terminal-Bench 2.0 82.7% | Highest per-call cost in OpenAI family |
| gpt-5-4 | Yes — effort knob | `reasoning_effort: none/low/medium/high/xhigh` | medium (implied) | No public GPQA; strong on long multi-doc synthesis | xhigh is an explicit cost trap per OpenAI |
| gpt-5-3-chat-latest | No reasoning surface | None — Instant tier | N/A (no control) | No published GPQA/MMLU | Cheapest OpenAI option; weakest on hard reasoning |
| gemini-3-1-pro | Yes — multi-tier thinking | `thinkingLevel: low/medium/high` (mutually exclusive with `thinkingBudget`) | high (cannot disable) | GPQA-Diamond 94.3%, ARC-AGI-2 77.1%, HLE 44.4% | Always incurs extended reasoning; 28.8–33.8s TTFT |
| gemini-3-flash | Yes — 4-level ladder | `thinking_level: minimal/low/medium/high` | Not set by default | GPQA-Diamond ~90.4% | Only model with `minimal` level; temp must be 1.0 |
| grok-4-3 | Partial — CoT implied | No documented API control | Unknown | No public GPQA score | Undocumented reasoning surface |
| grok-4-20-multi-agent | Yes — parallel debate | Effort level controls agent topology (4→16 agents) | low/medium = 4 agents | II: 49; GDPval-AA Elo 1179; SWE-bench [UNKNOWN] | 16-agent topology at xhigh adds significant latency |
| sonar-pro | No explicit surface | None | N/A | No GPQA/AIME published | Reasoning baked into generation; not tunable |
| sonar-deep-research | No explicit surface | None (internal adaptive step count) | Internal heuristics | HLE 21.1%, SimpleQA 93.9% (end-to-end system) | Reasoning tokens billed at $3/M; not user-controllable |
| sonar-reasoning-pro | Yes — visible CoT | None (verbosity emergent from DeepSeek-R1 base) | Always on for hard tasks | DeepSeek-R1 baseline (~<90% GPQA-Diamond) | $3/M reasoning tokens; 12k–23k tokens/call typical |

## Tiered ranking

**Top tier (deep reasoning):**
- **claude-opus-4-7** — HLE leader at 46.9%; GPQA-Diamond 94.2%. Best for broad academic, multi-domain, and code reasoning. Trade-off: no explicit budget control, ~23.6s TTFT at xhigh.
- **gemini-3-1-pro** — GPQA-Diamond leader at 94.3%, ARC-AGI-2 77.1%. Best for graduate-level science and abstract spatial reasoning. Trade-off: cannot disable thinking, always slow (28.8–33.8s TTFT), not suited for conversational loops.
- **gpt-5-5** — ARC-AGI-2 leader at 85.0%, strongest on abstract puzzle/pattern reasoning and long-horizon agentic tasks (Terminal-Bench 2.0 82.7%). Trade-off: weakest of the three on HLE (41.4%).

**Mid tier:**
- **claude-sonnet-4-6** — Only top-tier model with explicit `budget_tokens` control AND adaptive thinking. GPQA-Diamond 89.9% at max effort, 74.1% at baseline. Ideal for pipelines that need precise compute budgeting or where Opus 4.7's API migration cost is prohibitive.
- **gemini-3-flash** — GPQA-Diamond ~90.4%, full 4-level thinking ladder including `minimal`. Best mid-tier for speed-adaptive agentic loops; the only Tier 1 model that can serve both sub-200ms (minimal) and near-Pro accuracy (high) from the same endpoint.
- **gpt-5-4** — Strong on multi-document synthesis; explicit `reasoning_effort` knob. No public benchmark card. Solid production default within OpenAI family when GPT-5.5 cost is a concern.
- **sonar-reasoning-pro** — Unique: only model that exposes a visible `<think>...</think>` trace to callers. Weaker on raw benchmark ceiling vs. top tier but structurally superior for audit workflows, Council deliberations, and tasks where the reasoning chain is the deliverable.

**Lightweight (not reasoning-specialized):**
- **claude-haiku-4-5** — Extended thinking available but no adaptive surface; benchmarks not published on standard reasoning suites. Best for bounded agentic chains with predictable depth.
- **grok-4-3** — CoT-capable but no documented reasoning API controls; no public GPQA score. Treat as opaque.
- **grok-4-20-multi-agent** — Reasoning via parallel-agent debate, not a single chain; unique hallucination-reduction architecture (65% reduction per xAI). Weaker on standard benchmarks than grok-4-3 on a per-call basis.
- **sonar-pro** — No reasoning surface; best for web-grounded synthesis with clean final answers.
- **sonar-deep-research** — Internally adaptive multi-step reasoning but HLE only 21.1% (vs. 44.4% for Gemini 3.1 Pro). For formal reasoning, route elsewhere.
- **gpt-5-3-chat-latest** — No reasoning controls whatsoever. Instant tier only. Avoid for multi-step math, logic, or hard decomposition.

## Routing recommendations

- **For hard math / logic / graduate-level science:** **gemini-3-1-pro** (GPQA-Diamond 94.3%, ARC-AGI-2 77.1%) or **claude-opus-4-7** (GPQA-Diamond 94.2%, HLE leader 46.9%). If latency is acceptable for both (~25–35s TTFT), choose by task type: Gemini for abstract reasoning / science, Opus for broad academic + code.
- **For multi-step planning where CoT trace is auditable:** **sonar-reasoning-pro** — the only model that emits a visible `<think>` block. Used in Council deliberations where reasoning transparency is required. Secondary: **claude-sonnet-4-6** with explicit `budget_tokens` for controllable depth.
- **For cheap / fast reasoning with tunable depth:** **gemini-3-flash** (`thinking_level: minimal` → `high`); or **claude-sonnet-4-6** with a low `budget_tokens` cap.
- **For abstract pattern / puzzle reasoning (ARC-AGI-2 class):** **gpt-5-5** (85.0% ARC-AGI-2), ahead of Gemini 3.1 Pro (77.1%) and Opus 4.7 (75.8%).
- **For long-horizon agentic / autonomous tasks:** **gpt-5-5** (Terminal-Bench 2.0 82.7%) or **claude-opus-4-7** (SWE-bench 87.6%); choose by task type.
- **For explicit reasoning budget control:** **claude-sonnet-4-6** only — the only Tier 1 model exposing `budget_tokens`. (Haiku 4.5 also supports it but lacks adaptive fallback.)
- **Avoid for reasoning-heavy work:** gpt-5-3-chat-latest (no controls), sonar-deep-research (HLE 21.1%), grok-4-3 (undocumented surface), grok-4-20-multi-agent (parallel-debate hallucination risk on divergent tasks).

## Notable differentiators

- **claude-sonnet-4-6 is the only Tier 1 model with both explicit budget control AND adaptive thinking.** Opus 4.7 dropped the `budget_tokens` surface entirely — any existing pipeline using extended thinking on Opus 4.6 must migrate to Sonnet 4.6 or Haiku 4.5, not Opus 4.7.
- **gemini-3-1-pro cannot disable thinking.** The `minimal` tier is not available — every call incurs full extended reasoning overhead. This makes it unsuitable for conversational loops despite its benchmark leadership.
- **sonar-reasoning-pro is the only web-grounded model that exposes a visible CoT trace.** All other top-tier models hide their chain-of-thought. This is a hard structural differentiator for Council-style audit workflows.
- **gpt-5-5 leads on ARC-AGI-2 (85.0%) but trails on HLE (41.4%) vs. Opus 4.7 (46.9%) and Gemini 3.1 Pro (44.4%).** The "strongest overall reasoner" claim is benchmark-dependent — no single model wins across all dimensions.
- **Grok 4.20 Multi-Agent uses a parallel-agent debate architecture** (4–16 agents) instead of a single extended reasoning trace. It achieves claimed 65% hallucination reduction but underperforms grok-4-3 on every published intelligence index. The architecture is only an advantage for high-consensus factual tasks, not for hard formal reasoning.
- **Sonnet 4.6 experienced a quality regression (March 9 – April 7, 2026)** when Anthropic quietly lowered reasoning effort from high to medium. Reverted April 7 after 1,400+ frustration events. Operators should validate reasoning effort settings post-deployment.

## Sources

- anthropic/claude-opus-4-7: [chunks/10-reasoning.md](../models/anthropic/claude-opus-4-7/chunks/10-reasoning.md)
- anthropic/claude-sonnet-4-6: [chunks/10-reasoning.md](../models/anthropic/claude-sonnet-4-6/chunks/10-reasoning.md)
- anthropic/claude-haiku-4-5: [chunks/10-reasoning.md](../models/anthropic/claude-haiku-4-5/chunks/10-reasoning.md)
- openai/gpt-5-5: [chunks/10-reasoning.md](../models/openai/gpt-5-5/chunks/10-reasoning.md)
- openai/gpt-5-4: [chunks/10-reasoning.md](../models/openai/gpt-5-4/chunks/10-reasoning.md)
- openai/gpt-5-3-chat-latest: [chunks/10-reasoning.md](../models/openai/gpt-5-3-chat-latest/chunks/10-reasoning.md)
- google/gemini-3-1-pro: [chunks/10-reasoning.md](../models/google/gemini-3-1-pro/chunks/10-reasoning.md)
- google/gemini-3-flash: [chunks/10-reasoning.md](../models/google/gemini-3-flash/chunks/10-reasoning.md)
- xai/grok-4-3: [chunks/10-reasoning.md](../models/xai/grok-4-3/chunks/10-reasoning.md)
- xai/grok-4-20-multi-agent: [chunks/10-reasoning.md](../models/xai/grok-4-20-multi-agent/chunks/10-reasoning.md)
- perplexity/sonar-pro: [chunks/10-reasoning.md](../models/perplexity/sonar-pro/chunks/10-reasoning.md)
- perplexity/sonar-deep-research: [chunks/10-reasoning.md](../models/perplexity/sonar-deep-research/chunks/10-reasoning.md)
- perplexity/sonar-reasoning-pro: [chunks/10-reasoning.md](../models/perplexity/sonar-reasoning-pro/chunks/10-reasoning.md)
