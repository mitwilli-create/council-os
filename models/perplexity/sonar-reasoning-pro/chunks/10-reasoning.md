---
provider: perplexity
model: sonar-reasoning-pro
capability: reasoning
chunk_id: 10-reasoning
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 2
egoism_strikes_at_convergence: 1
tags: [reasoning, chain-of-thought, deepseek-r1, think-blocks, cot-visible]
related_chunks: [00-overview, 20-pricing, 40-unique-strengths, 41-known-limitations, 43-ideal-tasks]
related_models: [anthropic/claude-opus-4-7, openai/gpt-5-5, google/gemini-3-1-pro, perplexity/sonar-pro]
peer_comparisons:
  - peer: anthropic/claude-opus-4-7
    relation: different-approach
    note: "Opus 4.7 hides its CoT; callers receive only the final answer. Sonar Reasoning Pro exposes the full <think> trace — a structural advantage for audit workflows where the reasoning chain is the deliverable."
  - peer: openai/gpt-5-5
    relation: weaker
    note: "GPT-5.5 scores higher on GPQA-Diamond, MMLU, and ARC-AGI. Its internal CoT is also hidden. For pure benchmark reasoning Sonar Reasoning Pro is below GPT-5.5, but GPT-5.5 cannot export a visible CoT trace."
  - peer: google/gemini-3-1-pro
    relation: weaker
    note: "Gemini 3.1 Pro leads on graduate-level science benchmarks. Also hides CoT. Same tradeoff as vs. GPT-5.5: Gemini wins on benchmark ceiling; Sonar Reasoning Pro wins on CoT auditability."
---

**Summary** — Reasoning is Sonar Reasoning Pro's marquee capability. It runs explicit chain-of-thought derived from DeepSeek-R1 and, uniquely among widely-used web-grounded models, exposes that trace to the caller in a visible `<think>...</think>` block that appears before the final answer. The reasoning tokens inside `<think>` are billed separately at $3/1M, making the cost of additional reasoning transparent. There is no caller-controllable reasoning-effort knob analogous to Anthropic's `budget_tokens` or OpenAI's `reasoning_effort`; verbosity is emergent.

**Specifics:**
- Visible `<think>...</think>` block emitted before the final answer on reasoning-heavy tasks. Clients must strip or separately render this section if a clean UX is needed. ([DeepSeek-R1 GitHub examples](https://github.com/deepseek-ai/DeepSeek-R1))
- Reasoning tokens billed at **$3 / 1M tokens** — separate from input ($2/1M) and output ($8/1M). ([Perplexity pricing](https://docs.perplexity.ai/docs/getting-started/pricing))
- Typical DeepSeek-R1 reasoning traces on hard math/logic tasks: **12k–23k reasoning tokens**, costing $0.036–$0.069 per call in reasoning surcharge alone — often dominating total cost for short-input tasks.
- No `reasoning_effort`, `budget_tokens`, or analogous parameter. CoT verbosity is model-controlled. `[INFERRED FROM API DOCS LACKING SUCH PARAM]`
- Web search is integrated into the reasoning trace: retrieved documents can be cited and reasoned over inside `<think>`.
- DeepSeek-R1 reasoning style is designed for AIME-class math, bar-exam legal hypotheticals, and multi-step logic decomposition.

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-opus-4-7: Opus 4.7 scores ~94.2% GPQA-Diamond vs. DeepSeek-R1's baseline positioning below 90% on the same benchmark. However, Opus 4.7 exposes zero CoT to callers. For Council-style deliberations where the reasoning chain is audited downstream, Sonar Reasoning Pro's visible `<think>` is a hard structural advantage.
- vs. openai/gpt-5-5: Higher benchmark ceiling (GPQA, ARC-AGI), no visible CoT. Same tradeoff as Opus 4.7. Route GPT-5.5 when raw reasoning accuracy matters; route Sonar Reasoning Pro when reasoning transparency matters.
- vs. google/gemini-3-1-pro: Leads on graduate-science benchmarks (94.3% GPQA-Diamond vs. DeepSeek-R1's below-90% range). No visible CoT surface. Same structural split as vs. Opus 4.7 and GPT-5.5.
- vs. perplexity/sonar-pro: Sonar Pro has no CoT at all. Any task requiring visible step-by-step reasoning routes to Sonar Reasoning Pro within the Perplexity family.

**Known limitations on this axis:**
- Reasoning is not formally guaranteed correct; DeepSeek-R1 still hallucinates, especially with long or noisy retrieval inputs.
- No tunable reasoning depth. Callers cannot set a low-cost "light thinking" mode.
- 128k context: reasoning tokens compete with input context, shrinking effective document capacity on heavy-reasoning calls.
- `<think>` blocks displayed to end-users without stripping cause UX confusion. Applications must handle this explicitly.

**Sources:**
- [Perplexity Sonar Reasoning Pro docs](https://docs.perplexity.ai/docs/sonar/models/sonar-reasoning-pro)
- [Perplexity pricing — reasoning tokens](https://docs.perplexity.ai/docs/getting-started/pricing)
- [DeepSeek-R1 GitHub](https://github.com/deepseek-ai/DeepSeek-R1)
