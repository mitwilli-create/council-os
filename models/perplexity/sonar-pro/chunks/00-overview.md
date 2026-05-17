---
provider: perplexity
model: sonar-pro
capability: overview
chunk_id: 00-overview
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 1
tags: [identity, overview, search-augmented, perplexity, api]
related_chunks: [40-unique-strengths, 12-web-grounding, 43-ideal-tasks, 44-avoid-when]
related_models: [perplexity/sonar, perplexity/sonar-reasoning-pro, perplexity/sonar-deep-research]
peer_comparisons:
  - peer: openai/gpt-5-5
    relation: different-approach
    note: "Both offer native web grounding; GPT-5.5 wraps a general-purpose reasoning model with browsing, Sonar Pro is purpose-built as a search-augmented text model. GPT-5.5 has stronger coding and reasoning benchmarks."
  - peer: google/gemini-3-1-pro
    relation: different-approach
    note: "Gemini 3.1 Pro offers native search grounding via Google Search; Sonar Pro uses Perplexity's own search index. Gemini 3.1 Pro has documented multimodal support; Sonar Pro does not at the API level."
  - peer: anthropic/claude-4-7-opus
    relation: weaker
    note: "Claude 4.7 Opus targets advanced reasoning (GPQA, MATH) with explicit benchmark positioning; Sonar Pro has no published scores on those suites. Sonar Pro trades deep reasoning for built-in web retrieval."
---

**Summary** — Sonar Pro is a search-augmented text generation model built and operated by Perplexity AI, designed to deliver citation-backed answers using live web retrieval. It sits at the mid-tier of Perplexity's Sonar family, positioned above base Sonar (more context, more complex queries) and below Sonar Deep Research (single-call vs. multi-pass exhaustive research). Released March 7, 2025, it is accessed via an OpenAI-compatible chat API under the model ID `sonar-pro`.

**Specifics:**
- Official API model ID: `sonar-pro` (also `perplexity/sonar-pro` on OpenRouter and similar hubs).
- Released: March 7, 2025 (Perplexity blog / pricepertoken listing).
- Perplexity's Sonar family as of 2026: Search (Sonar, Sonar Pro), Reasoning (Sonar Reasoning Pro), Research (Sonar Deep Research). There is no "Sonar Small" or "Sonar Base" — the base is simply "Sonar."
- Provider positioning: "search-augmented model for real-time, web-connected research and complex queries" (Perplexity Sonar/Pro docs). Note: GPT-5.5, Claude 4.7, and Gemini 3.1 Pro also offer native web grounding — this is a category Sonar Pro competes in, not an exclusive capability.
- Context window: 200k tokens vs. Sonar's 127k — the primary hard-spec differentiator within the family.

**Compared to peers (sharpened by Dealbreaker):**
- vs. perplexity/sonar: Sonar Pro costs ~3.5x more on tokens and has a higher per-request fee, but supports 200k context (vs. 127k) and handles more complex multi-step research queries.
- vs. perplexity/sonar-reasoning-pro: Sonar Reasoning Pro is cheaper per output token (~47% less) and explicitly optimized for step-by-step reasoning; Sonar Pro is the search-heavy, citation-focused sibling.
- vs. perplexity/sonar-deep-research: Deep Research runs multi-pass exhaustive loops (minutes per task, additional citation/reasoning token fees); Sonar Pro is a single-call research tool (seconds per response, no citation-token surcharge as of 2026).
- vs. openai/gpt-5-5: Both do native web grounding; GPT-5.5 additionally has strong public reasoning and coding benchmarks. Sonar Pro has no published scores on GPQA, MATH, SWE-Bench, or HumanEval.
- vs. anthropic/claude-4-7-opus: Claude 4.7 Opus is preferred for advanced reasoning, complex coding, and offline long-context work. Sonar Pro trades those capabilities for built-in citation-backed search.

**Known limitations on this axis:**
- The "search-augmented" positioning slightly overstates exclusivity — 2026 frontier models from OpenAI, Anthropic, and Google also offer native browsing. The differentiator is Perplexity's specific search stack + pricing model, not a unique category.
- No public deprecation warnings as of mid-2026, but Perplexity's model lineup should be rechecked against official docs periodically as SKUs evolve.

**Sources:**
- [Perplexity Sonar models overview](https://docs.perplexity.ai/docs/sonar/models)
- [Perplexity Sonar Pro launch blog](https://blog.perplexity.ai)
- [pricepertoken — sonar-pro](https://pricepertoken.com)
- [OpenRouter — perplexity/sonar-pro](https://openrouter.ai/perplexity/sonar-pro)
