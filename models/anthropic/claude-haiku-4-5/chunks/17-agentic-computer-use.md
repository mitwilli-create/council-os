---
provider: anthropic
model: claude-haiku-4-5
capability: agentic-computer-use
chunk_id: 17-agentic-computer-use
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 5
egoism_strikes_at_convergence: 0
tags: [computer-use, osworld, agentic, browser-control, os-control]
related_chunks: [10-reasoning, 11-tool-use, 13-vision, 40-unique-strengths]
related_models:
  - anthropic/claude-sonnet-4-6
  - anthropic/claude-opus-4-7
peer_comparisons:
  - peer: anthropic/claude-sonnet-4-6
    relation: stronger
    note: "Haiku 4.5 OSWorld 50.7% exceeds Sonnet 4.6 at 42.2% on the same benchmark — a counter-intuitive result that makes Haiku the preferred model for computer-use orchestration within the Claude 4 family."
---

**Summary** — Claude Haiku 4.5 achieves OSWorld 50.7%, the highest computer-use score ever recorded for a Haiku model and — notably — exceeding Sonnet 4.6 (42.2%) on the same benchmark. This makes Haiku 4.5 the cost-optimal choice for agentic computer-use scaffolds within the Claude 4 family: better task completion at one-third the price. Extended thinking enables multi-step planning before action sequences are dispatched.

**Specifics:**
- OSWorld score: 50.7% (Anthropic-published, Oct 15, 2025; Haiku 4.5 highest-ever)
- Sibling comparison: Sonnet 4.6 OSWorld 42.2% — Haiku 4.5 is stronger on this specific benchmark
- Benchmark setup: standard OSWorld scaffold; head-to-head at identical scaffold depth not yet published
- Extended thinking supports deliberate pre-action planning in agentic loops
- Cost advantage: computer-use workflows are token-heavy; Haiku's 3× cost advantage vs. Sonnet compounds over long agentic sessions
- Supports browser control, OS-level actions, and screenshot-based UI interpretation within Anthropic's computer-use API surface

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-sonnet-4-6: stronger on OSWorld (50.7% vs 42.2%); for computer-use tasks, Haiku 4.5 is the recommended tier in the Claude 4 family unless adaptive thinking is specifically required
- vs. anthropic/claude-opus-4-7: Opus is the planning/synthesis orchestrator; Haiku executes the computer-use action loop at lower cost

**Known limitations on this axis:**
- OSWorld 50.7% is best-published but still leaves 49.3% failure rate — not suitable for unattended high-stakes automation without human-in-the-loop checkpoints
- Head-to-head comparison with Sonnet at identical scaffold depth not yet published; benchmark advantage may narrow or widen with different scaffolds
- Adaptive thinking absence means Haiku cannot self-correct its reasoning strategy mid-session if an unexpected UI state is encountered

**Sources:**
- [Anthropic Claude Haiku 4.5 announcement](https://www.anthropic.com/news/claude-haiku-4-5)
- [OSWorld benchmark](https://os-world.github.io)
