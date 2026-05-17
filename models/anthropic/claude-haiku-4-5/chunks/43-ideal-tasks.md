---
provider: anthropic
model: claude-haiku-4-5
capability: ideal-tasks
chunk_id: 43-ideal-tasks
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 5
egoism_strikes_at_convergence: 0
tags: [routing, ideal-tasks, high-volume, batch, agentic-worker]
related_chunks: [00-overview, 20-pricing, 40-unique-strengths, 44-avoid-when]
related_models:
  - anthropic/claude-sonnet-4-6
  - anthropic/claude-opus-4-7
peer_comparisons:
  - peer: anthropic/claude-sonnet-4-6
    relation: stronger
    note: "For the task types listed here, Haiku 4.5 is the preferred routing choice over Sonnet: lower cost, competitive or superior performance."
---

**Summary** — Claude Haiku 4.5 is the optimal routing choice for high-volume bounded tasks where compute budget is predictable and quality requirements are met by its benchmark scores. Its combination of SWE-bench 73.3%, OSWorld 50.7%, extended thinking, and 10× cost advantage in cached batch workflows defines a clear routing profile: large-scale, schema-structured, agentic execution tasks.

**Specifics — ideal task types:**

1. **High-volume batch evaluation (100+ items):** triage scoring, offer evaluation, content classification, entity extraction. Cost/quality trade-off strongly favors Haiku + extended thinking over Sonnet on fixed budgets.

2. **Real-time agentic routing loops:** sub-2s decision steps, tool-selection chains, multi-step orchestration where compute budget per decision is known. Extended thinking enables deliberate reasoning without adaptive overhead.

3. **Cached context pipelines (16K+ shared static blocks):** prompt cache read at $0.10/MTok makes Haiku 3× cheaper per cache hit vs. base Sonnet rate. Any pipeline with a large shared system prompt, corpus, or tool schema should default to Haiku.

4. **Computer-use orchestration:** OSWorld 50.7% > Sonnet 4.6's 42.2% — Haiku is the Claude 4 family's best computer-use model at lower cost. Ideal for agentic browser/OS scaffolds with human-in-the-loop checkpoints.

5. **Automated code pipelines at scale:** SWE-bench 73.3% supports large-scale test generation, linting fix pipelines, schema transforms, and bounded refactoring workflows. Throughput advantage vs. Sonnet is 3–10× depending on caching.

6. **Structured extraction pipelines:** JSON schema enforcement via tool use + 50% Batch API discount = maximum cost efficiency for document parsing, data normalization, and structured output at volume.

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-sonnet-4-6: Haiku is the preferred model for all six task types above; Sonnet should only be chosen when adaptive thinking or client-facing quality is required

**Known limitations on this axis:**
- All ideal tasks assume bounded, predictable schemas — ambiguous or open-ended tasks degrade Haiku's advantage vs. Sonnet
- Ideal tasks also assume sufficient volume to amortize cache write costs

**Sources:**
- [Anthropic Claude Haiku 4.5 announcement](https://www.anthropic.com/news/claude-haiku-4-5)
- [Anthropic pricing page](https://www.anthropic.com/pricing)
- [OSWorld benchmark](https://os-world.github.io)
