---
provider: perplexity
model: sonar-reasoning-pro
capability: overview
chunk_id: 00-overview
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 2
egoism_strikes_at_convergence: 1
tags: [identity, positioning, deepseek-r1, sonar, perplexity]
related_chunks: [10-reasoning, 12-web-grounding, 40-unique-strengths, 43-ideal-tasks]
related_models: [perplexity/sonar-pro, perplexity/sonar-deep-research, anthropic/claude-opus-4-7, openai/gpt-5-5, google/gemini-3-1-pro]
peer_comparisons:
  - peer: perplexity/sonar-pro
    relation: different-approach
    note: "Sonar Pro: 200k context, no CoT, same token price. Sonar Reasoning Pro: 128k, visible <think> CoT, adds $3/1M reasoning surcharge. Choose Pro when context > 128k or CoT trace not needed."
  - peer: perplexity/sonar-deep-research
    relation: different-approach
    note: "Deep Research issues 5-10x more searches per task and is opaque (no visible CoT). Reasoning Pro = single-shot CoT with manual search control. Use Deep Research for exhaustive multi-phase synthesis."
  - peer: openai/gpt-5-5
    relation: weaker
    note: "GPT-5.5 has native function calling, larger context, higher benchmark ceiling. Sonar Reasoning Pro's only structural advantage: visible <think> trace + Perplexity search index."
---

**Summary** — Sonar Reasoning Pro is a hosted, web-grounded reasoning model served by Perplexity AI under the `sonar-reasoning-pro` model ID. Perplexity did not train the base model: it hosts and augments **DeepSeek-R1** (671B MoE, ~37B active parameters) with its own retrieval pipeline, citation layer, and billing surface. It succeeded `sonar-reasoning`, which was deprecated December 15, 2025. Perplexity positions it for complex multi-step reasoning, advanced research, and strategic decision-making where a visible chain-of-thought is required.

**Specifics:**
- Official model ID: `sonar-reasoning-pro` (Perplexity API, text-only). ([Perplexity model docs](https://docs.perplexity.ai/docs/sonar/models/sonar-reasoning-pro))
- Base model: **DeepSeek-R1**, open-source, 671B total parameters, ~37B active (Mixture-of-Experts). ([DeepSeek-R1 GitHub](https://github.com/deepseek-ai/DeepSeek-R1))
- Predecessor: `sonar-reasoning` — deprecated 2025-12-15. ([Sonar docs](https://docs.perplexity.ai/docs/sonar/models/sonar-reasoning-pro))
- Release window: late 2025, aligned with `sonar-reasoning` deprecation. Exact GA date not published. `[INFERRED FROM DEPRECATION DATE]`
- Provider positioning: "high-performance reasoning model leveraging advanced multi-step Chain-of-Thought reasoning and enhanced information retrieval." ([PromptHub model card](https://www.prompthub.us/models/sonar-reasoning-pro))

**Compared to peers (sharpened by Dealbreaker):**
- vs. perplexity/sonar-pro: Sonar Pro offers 200k context at the same $2/$8 per-1M-token price — no reasoning surcharge. Sonar Reasoning Pro is strictly worse on context window and strictly higher cost due to the $3/1M reasoning-token surcharge. The only reason to choose Reasoning Pro over Pro is the visible `<think>` trace.
- vs. perplexity/sonar-deep-research: Deep Research auto-orchestrates many searches; Reasoning Pro is single-shot with explicit CoT. For exhaustive open-ended research, Deep Research scales better. For audit-sensitive single-call reasoning, Reasoning Pro is correct.
- vs. openai/gpt-5-5: GPT-5.5 has native function calling, larger context, and higher benchmark scores across math/code/science. Sonar Reasoning Pro competes only on visible CoT + Perplexity search index pairing.

**Known limitations on this axis:**
- Perplexity hosts, not trains, the reasoning model. Quality on pure reasoning is bounded by DeepSeek-R1, not Perplexity's internal R&D.
- No exact GA release date published.

**Sources:**
- [Perplexity Sonar Reasoning Pro model docs](https://docs.perplexity.ai/docs/sonar/models/sonar-reasoning-pro)
- [DeepSeek-R1 GitHub](https://github.com/deepseek-ai/DeepSeek-R1)
- [PromptHub model card](https://www.prompthub.us/models/sonar-reasoning-pro)
