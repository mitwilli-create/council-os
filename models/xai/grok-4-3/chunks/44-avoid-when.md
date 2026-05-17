---
provider: xai
model: grok-4-3
capability: avoid-when
chunk_id: 44-avoid-when
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [routing, avoid, computer-use, multi-agent, maximal-context, refusal-sensitive]
related_chunks:
  - 43-ideal-tasks
  - 17-agentic-computer-use
  - 41-known-limitations
  - 16-long-context
related_models:
  - xai/grok-4-20-multi-agent
  - anthropic/claude-opus-4-7
peer_comparisons:
  - peer: xai/grok-4-20-multi-agent
    relation: weaker
    note: "For tasks needing 2M context or 16-agent native orchestration, route to Grok 4.20 Multi-Agent — Grok 4.3 cannot match those capabilities"
  - peer: anthropic/claude-opus-4-7
    relation: weaker
    note: "For computer-use (browser/OS control) or tasks requiring documented refusal-rate predictability, route to Opus 4.7"
---

**Summary** — Avoid Grok 4.3 when the task requires: native browser or OS control (use Claude Opus 4.7), maximal-context agentic loops beyond 1M tokens (use Grok 4.20 Multi-Agent), or verified refusal-rate benchmarks (use Claude Opus 4.7). Also avoid for cutting-edge image/video generation (dedicated image/video models), tasks requiring the highest-accuracy reasoning benchmarks (no verified GPQA for routing), or workflows where the knowledge-cutoff conflict between Nov 2024 and Dec 2025 is load-bearing.

**Avoid routing here when:**
- Native browser or desktop OS control is required. Route to: `anthropic/claude-opus-4-7`. (Source: round-2-self-research.md section 7)
- Context requirements exceed 1M tokens. Route to: `xai/grok-4-20-multi-agent` (2M context). (Source: round-2-self-research.md section 5 — sibling comparison)
- Multi-agent native orchestration (16+ parallel agents) is required. Route to: `xai/grok-4-20-multi-agent`. (Source: round-2-self-research.md section 2)
- Task requires verified refusal-rate behavior prediction. Route to: `anthropic/claude-opus-4-7`. (Source: round-2-self-research.md section 7 — [UNKNOWN] for Grok 4.3)
- Cutting-edge image or video generation (not understanding) is required. Route to: dedicated image/video generation models. (Source: round-2-self-research.md section 7)
- Training-data knowledge past November 2024 is critical and `X_SEARCH` is not a viable substitute. The cutoff conflict makes Grok 4.3 unreliable for static knowledge tasks touching Nov 2024–Dec 2025. (Source: round-2-verdict.yaml Strike A)
- Verified coding quality benchmark is required for task selection. No public SWE-bench or equivalent score available. (Source: BenchLM)

**Compared to peers (sharpened by Dealbreaker):**
- These avoidance criteria are not weaknesses in isolation — they are routing boundaries. Grok 4.3 is strong on X data, video, and cost; it does not need to win on computer-use or multi-agent to be the right choice for its designed workloads.

**Sources:**
- round-2-self-research.md section 7 (Avoid-when)
- round-2-verdict.yaml Strike A (cutoff conflict)
- [BenchLM](https://benchlm.com) — no Grok 4.3 GPQA score
