---
provider: anthropic
model: claude-opus-4-7
capability: latency-throughput
chunk_id: 21-latency-throughput
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: medium
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [latency, throughput, ttft, streaming, fast-mode, adaptive-thinking]
related_chunks: [10-reasoning, 20-pricing, 26-context-window, 41-known-limitations]
related_models: [anthropic/claude-sonnet-4-6, anthropic/claude-haiku-4-5, openai/gpt-5-5]
peer_comparisons:
  - peer: anthropic/claude-sonnet-4-6
    relation: weaker
    note: "Anthropic's own positioning: Opus 4.7 'Moderate' latency vs. Sonnet 4.6 'Fast'. Standard use cases should prefer Sonnet for latency-sensitive work."
  - peer: anthropic/claude-haiku-4-5
    relation: weaker
    note: "Haiku 4.5 is positioned 'Fastest' by Anthropic — use for latency-critical high-volume tasks."
---

**Summary** — Claude Opus 4.7 has moderate latency in standard configuration (~0.85s P50 TTFT, 70–110 tokens/sec throughput) and slow latency in adaptive-reasoning max mode (~23.6s TTFT for `xhigh` effort). A Fast Mode option exists at ~2.5× the standard price, bumping throughput to ~150 tok/s. Anthropic explicitly positions this model as "Moderate" on comparative latency vs. Sonnet 4.6 ("Fast") and Haiku 4.5 ("Fastest"). Note: the BridgeBench latency citation from Round 1 was dropped after the URL was unverifiable in Round 2 — numbers below come from Digital Applied and Artificial Analysis only.

**Specifics:**
- **TTFT P50 (standard):** ~0.85s. Third-party measurement: 1.64s median in some configurations. Source: [Digital Applied latency benchmarks](https://www.digitalapplied.com/blog/ai-model-latency-benchmarks-2026-ttft-throughput); [Artificial Analysis](https://artificialanalysis.ai/models/claude-opus-4-7/providers).
- **TTFT at `xhigh` effort (adaptive-reasoning max):** ~23.6s. Streaming does NOT reduce this — thinking-phase output is not emitted to the stream until reasoning completes. The 23.6s figure is time-to-first-non-thinking-token. Source: [Digital Applied latency benchmarks](https://www.digitalapplied.com/blog/ai-model-latency-benchmarks-2026-ttft-throughput).
- **Throughput (standard):** 70–110 tokens/sec. Source: [Artificial Analysis](https://artificialanalysis.ai/models/claude-opus-4-7/providers).
- **Fast Mode:** ~150 tok/s at ~2.5× the standard price. Source: [Build Fast With AI on Fast Mode](https://www.buildfastwithai.com/blogs/claude-opus-4-7-fast-mode-guide); [Artificial Analysis](https://artificialanalysis.ai/models/claude-opus-4-7/providers).
- **Anthropic's comparative positioning:** "Moderate" — vs. Sonnet 4.6 "Fast" and Haiku 4.5 "Fastest." Source: `_official-models-overview.md` line 36.

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-sonnet-4-6: Sonnet 4.6 is faster by Anthropic's own positioning ("Fast" vs. "Moderate"). For latency-sensitive interactive tasks, prefer Sonnet 4.6.
- vs. anthropic/claude-haiku-4-5: Haiku 4.5 is fastest ("Fastest" per Anthropic). For latency-critical high-volume tasks, use Haiku 4.5.
- vs. openai/gpt-5-5: No direct latency benchmark comparison available in round-2 verified sources.

**Known limitations on this axis:**
- **`xhigh` effort TTFT of ~23.6s is incompatible with interactive UX** — show a "thinking…" affordance or route to a lower effort level.
- Streaming does not help during the adaptive-thinking phase — first-streaming-token equals end-of-thinking-phase.
- Fast Mode costs ~2.5× standard — factor into routing decisions for latency-vs-cost trade-offs.
- Third-party latency numbers vary by provider routing and load conditions — treat specific ms figures as directional, not guaranteed SLA.

**Sources:**
- [Digital Applied latency benchmarks 2026](https://www.digitalapplied.com/blog/ai-model-latency-benchmarks-2026-ttft-throughput)
- [Artificial Analysis — Opus 4.7 providers](https://artificialanalysis.ai/models/claude-opus-4-7/providers)
- [Build Fast With AI — Fast Mode guide](https://www.buildfastwithai.com/blogs/claude-opus-4-7-fast-mode-guide)
- [Anthropic models overview — comparative latency](https://platform.claude.com/docs/en/about-claude/models/overview)
