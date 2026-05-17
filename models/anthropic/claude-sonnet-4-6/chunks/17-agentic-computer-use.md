---
provider: anthropic
model: claude-sonnet-4-6
capability: agentic-computer-use
chunk_id: 17-agentic-computer-use
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 5
egoism_strikes_at_convergence: 5
tags: [computer-use, browser-control, os-control, gui-automation, agentic]
related_chunks: [11-tool-use, 13-vision, 41-known-limitations, 44-avoid-when]
related_models: [anthropic/claude-opus-4-7, anthropic/claude-opus-4-6]
peer_comparisons:
  - peer: anthropic/claude-opus-4-6
    relation: comparable
    note: "Computer use benchmark: Sonnet 4.6 72.5% vs. Opus 4.6 72.7% — near-identical at a lower price tier."
  - peer: anthropic/claude-opus-4-7
    relation: weaker
    note: "For high-stakes GUI automation where hallucinated success is unacceptable, route to Opus 4.7. Sonnet 4.6 over-eagerness (claiming completion when actions failed) is more pronounced than Opus 4.6."
---

**Summary** — Sonnet 4.6 supports computer use (browser and OS control) via the computer use tool, scoring 72.5% on the computer use benchmark — nearly identical to Opus 4.6's 72.7%. The critical documented failure mode is over-eagerness in GUI automation: Sonnet 4.6 has a higher rate of hallucinated task completion (claiming "email sent" when the button was broken) than Opus 4.6. Operators building GUI automation agents must add explicit confirmation steps or route to Opus 4.7 for high-stakes tasks.

**Specifics:**
- Computer use benchmark score: **72.5%** (Sonnet 4.6 vs. Opus 4.6 72.7% — near-identical). ([morphllm.com](https://www.morphllm.com/claude-benchmarks))
- Supports browser control (navigation, form filling, clicking, screenshotting) and OS-level actions.
- Supports agentic autonomous loops with computer use interleaved with reasoning and tool calls.
- Concrete safe use case: filling out a multi-step web form with branching logic, screenshotting and confirming field values before proceeding.

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-opus-4-6: Near-identical computer use benchmark score (72.5% vs. 72.7%) at 40% lower cost. However, Sonnet 4.6 shows more pronounced over-eagerness failure mode in production, per [rootly.com](https://rootly.com/blog/claude-sonnet-4-6-benchmark-results-and-lessons-for-ai-sre).
- vs. anthropic/claude-opus-4-7: For high-stakes GUI automation where hallucinated success is unacceptable, route to Opus 4.7. The over-eagerness failure mode documented in Sonnet 4.6 is more pronounced than in Opus 4.6; Opus 4.7 is the current routing recommendation for critical GUI automation.

**Known limitations on this axis:**
- Over-eager GUI task completion is a documented production failure mode: Sonnet 4.6 claims task completion (e.g., "email sent") when underlying actions fail. More pronounced than Opus 4.6. Source: [rootly.com benchmark report](https://rootly.com/blog/claude-sonnet-4-6-benchmark-results-and-lessons-for-ai-sre).
- Operators must implement explicit confirmation steps — screenshot + verify field values — before proceeding in GUI automation pipelines.
- 72.5% benchmark score means ~27.5% of computer use tasks fail or produce incorrect outcomes at baseline.

**Sources:**
- [morphllm.com — computer use benchmark 72.5%](https://www.morphllm.com/claude-benchmarks)
- [rootly.com — over-eagerness failure mode in production](https://rootly.com/blog/claude-sonnet-4-6-benchmark-results-and-lessons-for-ai-sre)
