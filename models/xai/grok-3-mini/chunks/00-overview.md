---
provider: xai
model: grok-3-mini
capability: overview
chunk_id: 00-overview
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [identity, release, api-ids, positioning, lifecycle]
related_chunks: [20-pricing, 21-latency-throughput, 26-context-window, 40-unique-strengths, 50-release-history, 51-retirement-risk]
related_models: [xai/grok-4-3, xai/grok-4-20-multi-agent, anthropic/claude-opus-4-7, openai/gpt-5-5, google/gemini-3-1-pro]
peer_comparisons:
  - peer: xai/grok-4-3
    relation: weaker
    note: "grok-4.3 has 1M-token context and native video; grok-3-mini has 131k context and no video. grok-3-mini is 76% cheaper on input."
  - peer: xai/grok-4-20-multi-agent
    relation: weaker
    note: "grok-4.20-multi-agent adds parallel agent orchestration and x_search; grok-3-mini is 85% cheaper on input and 92% cheaper on output."
  - peer: anthropic/claude-opus-4-7
    relation: weaker
    note: "Opus 4.7 leads frontier multi-hop reasoning and SWE-bench-class agentic tasks; grok-3-mini is substantially cheaper for cost-sensitive reasoning batches."
---

**Summary** — Grok 3 Mini is xAI's lowest-cost surviving text-only model as of mid-2026, positioned for cost-sensitive reasoning workloads within a 131k-token context window. It is one of two text-only Grok models that survived the May 15, 2026 retirement wave that retired grok-3 base and the broader grok-4-{0709,fast,code-fast-1,imagine-image-pro} cohort. It was released February 19, 2025 alongside Grok 3 base and remains the permanent cheap-tier option in the post-retirement xAI lineup. Official API model ID: `grok-3-mini` (with an optional `reasoning` variant exposing effort-level controls).

**Specifics:**
- **May 15, 2026 retirement context:** grok-3 BASE was retired; grok-3-mini was explicitly preserved on the retirement page (`docs.x.ai/developers/migration/may-15-retirement`). It is now the cheapest surviving Grok model.
- **API model ID:** `grok-3-mini`; reasoning variant: `grok-3-mini-reasoning`. Source: xAI API reference docs.
- **Release date:** February 19, 2025 (joint Grok 3 / Grok 3 Mini launch). Source: xAI announcement.
- **Predecessor:** grok-2. Sibling (now retired): grok-3 base.
- **Provider positioning:** lowest-cost surviving model in post-retirement xAI lineup. Confirmed across Azure AI Foundry catalog and artificialanalysis.ai.
- **Modalities:** text + image input; text output only. No audio, no video, no native computer use.
- **Context window:** 131,072 tokens. Output cap not separately published.
- **Knowledge cutoff:** November 2024.

**Compared to peers (sharpened by Dealbreaker):**
- vs. xai/grok-4-3: grok-4.3 is ~4.2x more expensive on input ($1.25 vs. $0.30/MTok) and ~5x on output ($2.50 vs. $0.50/MTok); adds 1M-token context and native video. Route to grok-4.3 when >131k tokens or video input required.
- vs. xai/grok-4-20-multi-agent: grok-4.20-multi-agent ($2.00/$6.00) is 6.7x/12x more expensive; adds parallel agent orchestration and x_search. Route there for multi-agent calls.
- vs. anthropic/claude-opus-4-7: Opus 4.7 leads frontier multi-hop and agentic coding (SWE-bench Pro 64.3%); grok-3-mini AIME 95.8% is strong but unmatched on complex agentic pipelines.

**Known limitations on this axis:**
- No audio or video modality — categorical gap vs. grok-4.3 and Gemini 3.1 Pro.
- 131k context cap vs. 1M (grok-4.3) and 2M (grok-4.20-multi-agent) siblings.
- No deprecation risk signals published as of 2026-05-17, but the May 2026 retirement wave demonstrates xAI will retire models without extended notice.

**Sources:**
- [xAI migration/may-15-retirement](https://docs.x.ai/developers/migration/may-15-retirement)
- [artificialanalysis.ai/models/grok-3-mini-reasoning](https://artificialanalysis.ai/models/grok-3-mini-reasoning)
- [Azure AI Foundry catalog](https://ai.azure.com/explore/models)
