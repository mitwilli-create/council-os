---
provider: perplexity
model: sonar-pro
capability: known-limitations
chunk_id: 41-known-limitations
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: self_research
confidence: medium
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 1
tags: [limitations, failure-modes, degradation, latency-variance, refusal]
related_chunks: [44-avoid-when, 10-reasoning, 13-vision, 15-code-generation, 17-agentic-computer-use]
related_models: [perplexity/sonar-reasoning-pro, anthropic/claude-4-7-opus, openai/gpt-5-5-pro]
peer_comparisons:
  - peer: anthropic/claude-4-7-opus
    relation: weaker
    note: "For formal reasoning, complex coding, and offline long-context work, Claude 4.7 Opus is more reliable due to documented benchmark performance. Sonar Pro has no published scores on those axes."
  - peer: openai/gpt-5-5-pro
    relation: weaker
    note: "GPT-5.5 Pro has documented SWE-Bench, GPQA, and MATH performance. Sonar Pro's capability on those dimensions is unknown."
---

**Summary** — Sonar Pro's key failure modes cluster around four areas: (1) formal reasoning and math where no benchmarks exist; (2) vision and multimodal tasks where API-level support is undocumented; (3) latency variance introduced by the mandatory web search step; and (4) citation quality issues including near-duplicate sourcing and hallucinated relevance. It also has no agentic framework, no coding benchmarks, and conservative safety filtering that can over-refuse on mixed-content queries.

**Specifics:**

Reasoning and coding gaps:
- No published GPQA, AIME, MATH, SWE-Bench, or HumanEval scores. [UNKNOWN]
- For competition-level math, symbolic reasoning, algorithm design, or large multi-file refactors, capability is unknown and likely weaker than explicitly benchmarked peers.

Vision and multimodal:
- API-level image input not clearly documented. Do not assume consumer product vision features exist at the API level. [UNKNOWN]
- Audio, video, and multimodal interaction: not supported. [INFERRED FROM DOCS]

Latency and reliability:
- Web search step introduces higher latency variance than offline models.
- Network failures or blocked upstream sites can cause timeouts or degraded responses.
- High-QPS workloads face throughput bottlenecks from per-request search overhead.

Long-context recall:
- Despite 200k window, model may focus on recent or prominent content; low-salience early-prompt details can be missed. [INFERRED — standard transformer behavior]
- No needle-in-a-haystack benchmark published. [UNKNOWN]

Citation quality:
- Can cite near-duplicate pages or mirror sites.
- Citations can attribute information to a page that mentions but does not strongly support a claimed fact (hallucinated relevance). [INFERRED — would need systematic audit]

Safety filtering:
- Follows Perplexity's safety policies; can over-refuse on nuanced political, health, financial, or mixed-content queries. [INFERRED FROM USER REPORTS]

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-4-7-opus: Claude 4.7 Opus is better for formal reasoning, coding, and offline long-context tasks. Sonar Pro's capability on those axes is undocumented.
- vs. openai/gpt-5-5-pro: GPT-5.5 Pro has documented performance on reasoning, coding, and math. Use it for those tasks.

**Known limitations on this axis:**
- Many limitations are [INFERRED] or [UNKNOWN] — would benefit from direct testing or published benchmarks.

**Sources:**
- Perplexity API docs (absence of vision/audio endpoints)
- User reports and community threads (over-refusal patterns) [INFERRED]
- Standard transformer behavior literature (long-context recall degradation) [INFERRED]
