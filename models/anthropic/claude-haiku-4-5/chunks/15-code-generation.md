---
provider: anthropic
model: claude-haiku-4-5
capability: code-generation
chunk_id: 15-code-generation
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 5
egoism_strikes_at_convergence: 0
tags: [code-generation, swe-bench, repair, agentic-coding, batch]
related_chunks: [10-reasoning, 11-tool-use, 40-unique-strengths, 43-ideal-tasks]
related_models:
  - anthropic/claude-sonnet-4-6
  - anthropic/claude-opus-4-7
peer_comparisons:
  - peer: anthropic/claude-sonnet-4-6
    relation: comparable
    note: "SWE-bench score not directly compared in R2; Haiku 4.5's 73.3% is competitive but Sonnet 4.6 is the quality ceiling for single-pass precision on ambiguous codegen tasks."
  - peer: anthropic/claude-opus-4-7
    relation: weaker
    note: "Opus is the synthesis/judgment ceiling; prefer Haiku for high-volume bounded codegen (test generation, linting fixes, schema transforms) where throughput matters more than quality ceiling."
---

**Summary** — Claude Haiku 4.5 scores 73.3% on SWE-bench Verified, making it competitive for real-world software engineering tasks at Haiku pricing. The benchmark uses a two-tool scaffold with no test-time compute additions, establishing a clean baseline. The cost advantage makes Haiku the preferred model for high-volume bounded codegen workflows (test generation, automated refactoring, schema transforms, linting pipelines).

**Specifics:**
- SWE-bench Verified: 73.3% (50-run average, two-tool scaffold, no test-time compute; Anthropic-published, Oct 15, 2025)
- Benchmark methodology: 50-run average for statistical robustness; two-tool setup consistent with agentic scaffolding used in production
- Languages: full Claude 4 family breadth assumed; no language-specific limitations documented in R2
- Code repair: supported via iterative agentic loops with extended thinking enabled
- Batch codegen economics: at $1.00/MTok input + 50% Batch API discount, 10× throughput vs. Sonnet on fixed budgets for bounded codegen tasks
- Extended thinking enables structured code planning before generation — useful for multi-file refactors

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-sonnet-4-6: Haiku 4.5 competitive on SWE-bench; for single-pass precision on ambiguous or under-specified problems, Sonnet's adaptive thinking gives an edge. For high-volume well-specified codegen, Haiku wins on cost.
- vs. anthropic/claude-opus-4-7: Opus for architectural reasoning and synthesis; Haiku for worker-tier codegen at scale

**Known limitations on this axis:**
- SWE-bench uses two-tool scaffold; performance may differ with richer or simpler tool environments
- No execution sandbox documented natively — code execution requires external tool integration
- Adaptive thinking gap means Haiku cannot self-calibrate reasoning depth mid-task for particularly ambiguous bugs

**Sources:**
- [Anthropic Claude Haiku 4.5 announcement](https://www.anthropic.com/news/claude-haiku-4-5)
- [SWE-bench Verified leaderboard](https://www.swebench.com)
