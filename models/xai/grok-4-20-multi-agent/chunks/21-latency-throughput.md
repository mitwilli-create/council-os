---
provider: xai
model: grok-4.20-multi-agent
capability: latency-throughput
chunk_id: 21-latency-throughput
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: medium
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [latency, ttft, throughput, 16-agent, interactive-ux, disqualifying]
related_chunks: [00-overview, 11-tool-use, 20-pricing, 44-avoid-when]
related_models: [xai/grok-4-3, anthropic/claude-opus-4-7, openai/gpt-5-5]
peer_comparisons:
  - peer: xai/grok-4-3
    relation: weaker
    note: "Grok 4.3 is a single-pass model with substantially lower latency. For any latency-sensitive task, route to Grok 4.3."
  - peer: anthropic/claude-opus-4-7
    relation: weaker
    note: "Claude Opus 4.7 single-agent TTFT is substantially lower than 16-agent xhigh Grok 4.20 MA wall-clock time."
  - peer: openai/gpt-5-5
    relation: weaker
    note: "Single-agent models from any provider have lower latency than Grok 4.20 MA at 16-agent depth."
---

**Summary** — Grok 4.20 Multi-Agent has a latency tax that is disqualifying for interactive UX at 16-agent depth. TTFT is several seconds to tens of seconds at 16-agent xhigh effort. Wall-clock time is dominated by the slowest sub-agent plus the leader synthesis step. This is an architectural consequence of parallel agent coordination, not a configuration issue.

**Specifics:**
- TTFT: several seconds to tens of seconds at 16-agent depth [INFERRED from architectural description and third-party reports].
- Wall-clock time dominated by: slowest sub-agent runtime + leader synthesis step.
- 4-agent low/medium effort: lower latency than 16-agent, but still higher than single-agent models.
- 16-agent xhigh effort: latency disqualifying for interactive UX — do not use for chatbots, real-time assistants, or any latency-sensitive surface.
- Throughput: [UNKNOWN — no published tokens/sec for this variant].
- p50/p99 latency: [UNKNOWN — no published percentiles].
- Best-fit use pattern: async/batch research tasks where latency budget is minutes, not seconds.

**Compared to peers (sharpened by Dealbreaker):**
- vs. xai/grok-4-3: Grok 4.3 single-pass model has substantially lower latency. For any interactive or latency-sensitive task, route to Grok 4.3.
- vs. anthropic/claude-opus-4-7: Claude Opus 4.7 single-agent TTFT is far lower than Grok 4.20 MA at 16-agent xhigh. For interactive deployments, Claude wins.
- vs. openai/gpt-5-5: Any single-agent model has lower interactive latency than Grok 4.20 MA at 16-agent depth.

**Known limitations on this axis:**
- TTFT and wall-clock time at 16-agent xhigh are disqualifying for interactive UX — hard routing rule.
- No published p50/p99 latency or tokens/sec for this variant [UNKNOWN].
- Latency tax is architectural — not improvable by configuration.

**Sources:**
- [xAI Multi-Agent docs](https://docs.x.ai/developers/model-capabilities/text/multi-agent) [INFERRED for quantified latency from architecture description]
- Round-2 verdict: latency_tax_acknowledged verified at §3 line 32 + §6 line 63
