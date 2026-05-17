---
provider: google
model: gemini-3-1-pro
capability: code-generation
chunk_id: 15-code-generation
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 4
egoism_strikes_at_convergence: 1
tags: [code-generation, swe-bench, codegen, software-engineering, avoid-when]
related_chunks:
  - 10-reasoning
  - 17-agentic-computer-use
  - 44-avoid-when
related_models:
  - anthropic/claude-opus-4-7
peer_comparisons:
  - peer: anthropic/claude-opus-4-7
    relation: weaker
    note: "SWE-Bench Pro: 54.2% vs 64.3% — Opus 4.7 holds the current frontier ceiling for available models."
---

**Summary** — Gemini 3.1 Pro generates code across standard languages and natively executes basic logic. However, software engineering is not a strength axis for this model. On SWE-Bench Pro (Public), it scores 54.2% — a meaningful 10.1-point gap behind Claude Opus 4.7's 64.3%, which holds the current frontier ceiling among available models. For repository-wide refactoring, autonomous software engineering, or complex debugging loops, route to Claude Opus 4.7.

**Specifics:**
- SWE-Bench Pro (Public): 54.2%. Claude Opus 4.7 scores 64.3% — the current frontier ceiling for available models. (Source: Scale Labs SWE-Bench leaderboard, Dealbreaker R2 spot check)
- Standard language support: generates code across common languages (Python, Go, Java, JavaScript, etc.). (Source: profile Section 2)
- Native code execution: basic logic execution available natively. (Source: profile Section 2)
- Example task: translating legacy Java into modern Go routines. (Source: profile Section 2)
- Mathematical theorem proving degrades without an external Python sandbox. (Source: profile Section 6)

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-opus-4-7: weaker by 10.1 points on SWE-Bench Pro (54.2% vs 64.3%). Opus 4.7 is the recommended choice for software engineering tasks. (Source: Scale Labs leaderboard, Dealbreaker R2)
- The gap is large enough to be a routing-decision signal, not just a benchmark footnote. Fully autonomous software engineering should not route here.

**Known limitations on this axis:**
- 10.1-point SWE-Bench Pro gap vs. Claude Opus 4.7 — consistently trailing on repository-wide software engineering tasks. (Source: profile Section 5)
- Struggles with mathematical theorem proving without external Python sandbox tool support. (Source: profile Section 6)
- High TTFT (28.8s–33.8s) makes iterative code debug loops slow. (Source: Artificial Analysis)

**Sources:**
- [Scale Labs SWE-Bench Pro leaderboard](https://scale.com/leaderboard)
- [Dealbreaker R2 verdict spot checks](../research-rounds/round-2-verdict.yaml)
