---
provider: xai
model: grok-3-mini
capability: code-generation
chunk_id: 15-code-generation
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [code, codegen, livecodebench, python, javascript]
related_chunks: [10-reasoning, 40-unique-strengths, 43-ideal-tasks, 44-avoid-when]
related_models: [xai/grok-4-3, anthropic/claude-opus-4-7, openai/gpt-5-5]
peer_comparisons:
  - peer: anthropic/claude-opus-4-7
    relation: weaker
    note: "Opus 4.7 leads SWE-bench Pro (64.3%) for complex agentic coding; grok-3-mini has no SWE-bench score published. LCB 80.4% is strong for cost tier."
  - peer: openai/gpt-5-5
    relation: weaker
    note: "GPT-5.5 leads SWE-bench Verified (88.7%); grok-3-mini targets cost-sensitive code generation, not frontier agentic repair."
  - peer: xai/grok-4-3
    relation: weaker
    note: "grok-4.3 is the xAI flagship for code; grok-3-mini is appropriate when task complexity fits 131k context and cost per call matters."
---

**Summary** — Grok 3 Mini achieves LiveCodeBench 80.4%, placing it among the stronger compact code models. It supports Python, JavaScript, TypeScript, Rust, and Go. There is no published SWE-bench score, making comparison to frontier agentic coding models (Claude Opus 4.7, GPT-5.5) indirect. It is well-suited for cost-sensitive code generation and reasoning tasks that fit within 131k tokens.

**Specifics:**
- **LiveCodeBench:** 80.4%. Source: artificialanalysis.ai + xAI announcement.
- **SWE-bench:** no public score as of 2026-05-17. Do not assume parity with Opus 4.7 or GPT-5.5 on agentic code repair.
- **Supported languages:** Python, JavaScript, TypeScript, Rust, Go. Source: xAI model overview.
- **Execution sandbox:** not native at the model layer; available only via user-defined code-execution tool.
- **reasoning-effort for code:** `reasoning-effort=high` recommended for complex algorithmic problems; `low` sufficient for boilerplate generation.

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-opus-4-7: Opus 4.7 leads complex agentic code tasks (SWE-bench Pro 64.3%); grok-3-mini at LCB 80.4% is competitive for single-function or short-context code at 76–85% lower cost.
- vs. openai/gpt-5-5: GPT-5.5 leads SWE-bench Verified (88.7%); for competition-style code problems (LCB-class), grok-3-mini is a cost-effective alternative.
- vs. xai/grok-4-3: grok-4.3 has higher ceiling for long-context agentic code repair; grok-3-mini is cheaper for bounded code tasks.

**Known limitations on this axis:**
- No SWE-bench score — cannot make confident claims about complex multi-file agentic code repair quality.
- No native execution sandbox — callers must implement code-execution via tool use.
- Context limit of 131k may be tight for large codebases; grok-4.3 (1M) is preferred for repo-scale tasks.

**Sources:**
- [artificialanalysis.ai/models/grok-3-mini-reasoning](https://artificialanalysis.ai/models/grok-3-mini-reasoning)
- [xAI announcement — Grok 3 Mini](https://x.ai/news/grok-3)
