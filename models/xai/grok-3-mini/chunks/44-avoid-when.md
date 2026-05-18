---
provider: xai
model: grok-3-mini
capability: avoid-when
chunk_id: 44-avoid-when
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [routing, avoid, escalation, limits, complex-agentic]
related_chunks: [00-overview, 41-known-limitations, 43-ideal-tasks, 17-agentic-computer-use, 14-audio-multimodal]
related_models: [xai/grok-4-3, xai/grok-4-20-multi-agent, anthropic/claude-opus-4-7, openai/gpt-5-5]
peer_comparisons:
  - peer: xai/grok-4-3
    relation: different-approach
    note: "grok-4.3 is the primary escalation target for context overflow (>131k) and video tasks."
  - peer: xai/grok-4-20-multi-agent
    relation: different-approach
    note: "grok-4.20-multi-agent is the escalation target for parallel multi-agent orchestration."
  - peer: anthropic/claude-opus-4-7
    relation: different-approach
    note: "Opus 4.7 / GPT-5.5 are the escalation targets for frontier multi-hop reasoning and complex agentic pipelines."
---

**Summary** — Do not route to grok-3-mini for tasks exceeding 131k tokens, requiring native video or audio, demanding frontier multi-hop reasoning, requiring parallel multi-agent orchestration in a single call, or needing highest possible output throughput for long generations. In each case, a named escalation target is available.

**Specifics — avoid when:**
- **1. Workload >131k tokens:** escalate to grok-4.3 (1M context). Hard failure at boundary — no partial degradation.
- **2. Native video or audio input required:** escalate to grok-4.3 (video) or a multimodal peer (Gemini 3.1 Pro, GPT-5.5 for audio). grok-3-mini cannot process these modalities.
- **3. Hard multi-hop reasoning or frontier agentic benchmarks:** escalate to Claude Opus 4.7 or GPT-5.5. grok-3-mini trails on GPQA-diamond and SWE-bench-class tasks by an unquantified margin.
- **4. Parallel multi-agent orchestration in a single call:** escalate to grok-4.20-multi-agent, which provides native parallel agent support and x_search. grok-3-mini cannot self-direct multi-agent patterns.
- **5. Highest output speed on very long generations:** grok-4.3 is reported at ~159 tok/s (similar throughput to grok-3-mini's ~163 tok/s but with much larger context); for truly throughput-critical long-form generation, benchmark both before committing.

**Compared to peers (sharpened by Dealbreaker):**
- vs. xai/grok-4-3: escalate here for context overflow and video. Cost is 4.2x higher but capability ceiling is substantially higher.
- vs. xai/grok-4-20-multi-agent: escalate here for multi-agent orchestration. Cost is 6.7x/12x higher but adds native parallel agents and x_search.
- vs. anthropic/claude-opus-4-7 / openai/gpt-5-5: escalate to either for frontier multi-hop reasoning, complex agentic pipelines, or computer-use tasks.

**Known limitations on this axis:**
- This routing table is based on published benchmarks and documented capabilities as of 2026-05-17. Verify escalation model availability before using in production.

**Sources:**
- [xAI model overview — May 2026](https://docs.x.ai/docs)
- [artificialanalysis.ai/models/grok-3-mini-reasoning](https://artificialanalysis.ai/models/grok-3-mini-reasoning)
