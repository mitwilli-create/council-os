---
provider: perplexity
model: sonar-deep-research
capability: code-generation
chunk_id: 15-code-generation
last_research_round: 3
last_updated: 2026-05-17
verified_by_dealbreaker: false
source_authority: self_research
confidence: medium
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [code, swe-bench, coding, routing, no-benchmarks]
related_chunks: [10-reasoning, 41-known-limitations, 44-avoid-when]
related_models: [openai/gpt-5-5, anthropic/claude-opus-4-7, perplexity/sonar-pro]
peer_comparisons:
  - peer: openai/gpt-5-5
    relation: weaker
    note: "GPT-5.5 Terminal-Bench 82.7%, SWE-Bench Pro 58.6%. SDR has no published code benchmarks and qualitative behavior suggests significantly lower reliability."
  - peer: anthropic/claude-opus-4-7
    relation: weaker
    note: "Claude Opus 4.7 SWE-bench Pro 64.3%. SDR has no equivalent scores and is not marketed for code."
---

**Summary** — Sonar Deep Research can produce code snippets in many languages, leveraging retrieved examples from the web, but it is not optimized as a code assistant. No SWE-Bench, HumanEval, or coding-focused benchmark scores exist for SDR. Its comparative advantage is code-adjacent research (surveying libraries, comparing frameworks, finding documentation) rather than implementation, refactoring, or test-driven patch generation. For serious software engineering, route to GPT-5.5 or Claude Opus 4.7.

**Specifics:**
- No published SWE-Bench Pro, Terminal-Bench, HumanEval, or Codeforces scores for SDR. [INFERRED — would need a benchmark]
- Qualitative ceiling: generates simple scripts using standard libraries when prompted with concrete task descriptions (e.g., "Python script to read arXiv abstracts into SQLite"). Fails on multi-file refactoring, subtle logical correctness, and hallucinated APIs.
- Code-adjacent research strength: surveying libraries, comparing implementations, finding documentation, summarizing framework trade-offs — these leverage SDR's web-grounding and are within its design envelope.
- GPT-5.5 reference: Terminal-Bench 82.7%, SWE-Bench Pro 58.6%. Claude Opus 4.7: SWE-Bench Pro 64.3%. [from verified peer profiles]
- Perplexity's marketing for Deep Research focuses on research and analysis, not code benchmarks — a telling omission.

**Compared to peers (sharpened by Dealbreaker):**
- vs. openai/gpt-5-5: GPT-5.5 dominates on code correctness, test execution, and multi-file patch. Use GPT-5.5 for any coding task with a test suite.
- vs. anthropic/claude-opus-4-7: Claude Opus 4.7 leads SWE-Bench Pro. Use Claude for agentic refactoring with correctness verification.
- vs. perplexity/sonar-pro: For code-research questions (not implementation), Sonar Pro is cheaper and adequate. Reserve SDR for tasks that also require broad source synthesis.

**Known limitations on this axis:**
- Subtle logical errors, inconsistent variable naming, hallucinated APIs in non-trivial codebases.
- No sandbox for test execution — cannot verify its own code output.
- Multi-file or multi-service architecture work is high-risk.

**Sources:**
- R3 self-research §2.6 (round-3-self-research.md)
- GPT-5.5 and Claude Opus 4.7 peer profiles
