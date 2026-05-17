---
provider: perplexity
model: sonar-pro
capability: code-generation
chunk_id: 15-code-generation
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: self_research
confidence: low
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 1
tags: [code-generation, sdk-usage, api-examples, web-grounded-code]
related_chunks: [12-web-grounding, 41-known-limitations, 44-avoid-when]
related_models: [openai/gpt-5-5-pro, anthropic/claude-4-7-opus, google/gemini-3-1-pro]
peer_comparisons:
  - peer: openai/gpt-5-5-pro
    relation: weaker
    note: "GPT-5.5 Pro has documented SWE-Bench and HumanEval performance. Sonar Pro has no published coding benchmarks."
  - peer: anthropic/claude-4-7-opus
    relation: weaker
    note: "Claude 4.7 Opus has documented strong SWE-Bench performance and supports large multi-file codebases. Sonar Pro is not positioned as a coding model."
  - peer: google/gemini-3-1-pro
    relation: weaker
    note: "Gemini 3.1 Pro has documented coding benchmark scores. Sonar Pro has none published."
---

**Summary** — Sonar Pro can generate and explain code in common languages (Python, JavaScript/TypeScript, Java, Go, etc.) and uses web search to surface current library usage examples — useful when an answer depends on the latest SDK docs or recently published migration guides. It is not marketed as a coding-specialist model and has no published scores on SWE-Bench, HumanEval, or similar benchmarks. For large multi-file refactors, complex debugging, or high-reliability codegen, specialized coding models are better candidates.

**Specifics:**
- Can answer API/library usage questions by fetching current official docs and recent blog posts during generation.
- Useful for tasks where the answer changes with library version (e.g., "how do I use the latest Stripe SDK for this pattern").
- No official scores on SWE-Bench, HumanEval, or comparable coding benchmarks. [UNKNOWN — no published scores]
- Not positioned as a coding-specialist model in Perplexity's documentation or marketing.
- Web-grounded code examples may surface from docs that are slightly out-of-date or from secondary sources; caller should verify against official docs. [INFERRED]

**Compared to peers (sharpened by Dealbreaker):**
- vs. openai/gpt-5-5-pro: Strong benchmark positioning on SWE-Bench class tasks. Route complex code tasks there.
- vs. anthropic/claude-4-7-opus: Claude 4.7 Opus handles multi-file refactors, debugging, and complex system design with documented coding strength. Route there for non-trivial code work.
- vs. google/gemini-3-1-pro: Gemini 3.1 Pro has documented coding benchmarks. Sonar Pro does not.

**Known limitations on this axis:**
- Multi-file refactors, complex algorithm design, and production-critical code tasks are higher-risk with Sonar Pro due to absence of coding benchmark validation.
- Web-retrieved code examples may reflect outdated API versions or community posts rather than official current docs.

**Sources:**
- Capability inferred from general LLM behavior plus Sonar Pro web access. [INFERRED]
- Absence of coding benchmarks from Perplexity model cards and third-party trackers.
