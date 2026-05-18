---
provider: anthropic
model: claude-mythos-preview
capability: knowledge-cutoff
chunk_id: 25-knowledge-cutoff
last_research_round: 0
last_updated: 2026-05-18
verified_by_dealbreaker: true
source_authority: official_doc (AWS Bedrock model card, llm-stats.com)
confidence: medium
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [knowledge-cutoff, training-data-freshness, restricted-access]
related_chunks: [00-overview, 42-restricted-access]
related_models: [anthropic:claude-opus-4-7, anthropic:claude-sonnet-4-6]
peer_comparisons:
  - peer: anthropic/claude-opus-4-7
    relation: weaker
    note: "Mythos cutoff Dec 2025 < Opus 4.7 reliable cutoff Jan 2026. Marginal — both are within a month."
---

# Claude Mythos Preview — Knowledge Cutoff

**Summary** — Mythos Preview has a knowledge cutoff of **December 2025**. Slightly older than Opus 4.7 (reliable cutoff Jan 2026) but newer than Sonnet 4.6 (Aug 2025).

**Specifics (verified 2026-05-18):**
- **Knowledge cutoff: December 2025** (per [llm-stats.com Mythos page](https://llm-stats.com/models/claude-mythos-preview) + Pluralsight coverage)
- **Released:** April 7-8, 2026 (the gap between cutoff and release is ~4 months — typical for Anthropic flagship preview models)
- **Compared to Anthropic family per [Anthropic models page](https://platform.claude.com/docs/en/docs/about-claude/models):**

| Model | Reliable knowledge cutoff |
|---|---|
| Opus 4.7 | Jan 2026 |
| **Mythos Preview** | **Dec 2025** |
| Sonnet 4.6 | Aug 2025 |
| Haiku 4.5 | Feb 2025 |

**Compared to peers (sharpened by Dealbreaker):**
- vs. `anthropic:claude-opus-4-7`: Opus 4.7's cutoff is ~1 month newer. For time-sensitive cybersec context (e.g., recent CVEs), Opus 4.7 has the marginal freshness advantage — but Mythos compensates with its CyberGym 83.1% PoC reproduction rate (which presumably reflects training on vulnerability corpora).
- vs. grounded models (`google:gemini-2.5-pro`, `perplexity:sonar-*`, `xai:grok-4-x-search`): Any grounded model has effectively-current knowledge via runtime search. For truly time-sensitive defensive analysis, route to a grounded model + Mythos is NOT the right tool.

**Known limitations on this axis:**
- The Dec 2025 cutoff means Mythos was trained BEFORE Anthropic's own April 2026 Opus 4.7 release. Mythos has no first-party knowledge of its sibling's existence or capabilities.
- Sources (e.g., llm-stats) are aggregator pages; the cutoff is not documented on Anthropic's primary models page (Mythos has a separate note block, not a row in the latest-models table).
- For any vulnerability that emerged after Dec 2025, Mythos requires manual disclosure via the prompt — it cannot reach for it via grounding (no `web_search` tool documented for Mythos).

**Sources:**
- [llm-stats.com Mythos Preview page](https://llm-stats.com/models/claude-mythos-preview)
- [Pluralsight: What is Claude Mythos?](https://www.pluralsight.com/resources/blog/ai-and-data/what-is-claude-mythos)
- [Amazon Bedrock Mythos model card](https://docs.aws.amazon.com/bedrock/latest/userguide/model-card-anthropic-claude-mythos-preview.html)
