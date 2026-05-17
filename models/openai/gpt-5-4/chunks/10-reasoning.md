---
provider: openai
model: gpt-5-4
capability: reasoning
chunk_id: 10-reasoning
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [reasoning, reasoning-effort, chain-of-thought, synthesis]
related_chunks: [11-tool-use, 15-code-generation, 16-long-context, 40-unique-strengths]
related_models: [openai/gpt-5-5, openai/gpt-5-4-mini]
peer_comparisons:
  - peer: openai/gpt-5-5
    relation: weaker
    note: "GPT-5.5 leads on ARC-AGI-2 by ~11.7 pp per third-party benchmarks"
  - peer: openai/gpt-5-4-mini
    relation: stronger
    note: "Base model handles ambiguous multi-step reasoning; mini degrades when steps must be inferred"
---

**Summary** — GPT-5.4 exposes an explicit `reasoning_effort` control (values: `none`, `low`, `medium`, `high`, `xhigh`) rather than showing raw chain-of-thought. It is documented as strong on evidence-rich synthesis, instruction fidelity over long outputs, and multi-document analysis. OpenAI explicitly warns against defaulting to `xhigh` without eval evidence — it adds cost and latency without consistent benefit.

**Specifics:**
- `reasoning_effort` parameter accepts: `none`, `low`, `medium`, `high`, `xhigh`. ([OpenAI prompt guidance](https://developers.openai.com/api/docs/guides/prompt-guidance))
- Documented strength: "long, messy, multi-document analysis requiring evidence-rich synthesis." ([OpenAI prompt guidance](https://developers.openai.com/api/docs/guides/prompt-guidance))
- `xhigh` is an anti-default: OpenAI says do not use unless evals prove benefit; avoidable cost and latency is the practical failure mode. ([OpenAI prompt guidance](https://developers.openai.com/api/docs/guides/prompt-guidance))
- This is not visible chain-of-thought — it is a reasoning-effort knob; internal process is not exposed. ([OpenAI prompt guidance](https://developers.openai.com/api/docs/guides/prompt-guidance))

**Compared to peers (sharpened by Dealbreaker):**
- vs. openai/gpt-5-5: weaker on ARC-AGI-2 by ~11.7 pp per third-party reporting; comparable on broader professional synthesis tasks where cost savings matter.
- vs. openai/gpt-5-4-mini: stronger; mini struggles when it must infer missing steps or resolve ambiguous instructions — use base for those cases.

**Known limitations on this axis:**
- No public benchmark card (MMLU, GPQA, etc.) from OpenAI included in supplied docs; routing teams cannot claim specific benchmark positions for base GPT-5.4 without running their own evals.
- `xhigh` reasoning effort is a cost trap if used as default without evidence it helps the target task.

**Sources:**
- [OpenAI prompt guidance](https://developers.openai.com/api/docs/guides/prompt-guidance)
- [llm-stats.com GPT-5.5 vs GPT-5.4](https://llm-stats.com/blog/research/gpt-5-5-vs-gpt-5-4)
