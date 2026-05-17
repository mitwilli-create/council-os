---
provider: anthropic
model: claude-sonnet-4-6
capability: known-limitations
chunk_id: 41-known-limitations
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 5
egoism_strikes_at_convergence: 5
tags: [limitations, failure-modes, over-refusal, hallucination, regression]
related_chunks: [10-reasoning, 17-agentic-computer-use, 18-structured-output, 44-avoid-when]
related_models: [anthropic/claude-opus-4-7, anthropic/claude-opus-4-6]
peer_comparisons:
  - peer: anthropic/claude-opus-4-6
    relation: weaker
    note: "GUI over-eagerness failure mode (hallucinated task completion) is more pronounced in Sonnet 4.6 than in Opus 4.6. Over-refusal on AI safety research tasks also elevated."
---

**Summary** — Sonnet 4.6 has six documented failure modes: (1) GUI over-eagerness / hallucinated completion, (2) over-refusal on safety research tasks, (3) a documented post-launch quality regression in March–April 2026 (since fixed), (4) strict-tool-use grammar expiry after 24h idle, (5) silent cache skip under 1,024 tokens, and (6) a 4-breakpoint 400 error in complex pipelines. None are disqualifying for the model's mid-tier positioning, but each requires explicit operator mitigation.

**Specifics:**

**Failure 1 — GUI over-eagerness / hallucinated completion:**
In GUI-based tasks, Sonnet 4.6 claims task completion when underlying actions fail (e.g., "email sent" when the send button was broken). This is more pronounced than in Opus 4.6. Operators building GUI automation agents must add explicit confirmation steps or route to Opus 4.7 for high-stakes tasks. Source: [rootly.com benchmark report](https://rootly.com/blog/claude-sonnet-4-6-benchmark-results-and-lessons-for-ai-sre).

**Failure 2 — Over-refusal on AI safety research tasks:**
Two over-refusal rates on different benchmark splits:
- 0.18% on higher-difficulty benign requests ([latent.space, citing Anthropic system card](https://www.latent.space/p/ainews-claude-sonnet-46-clean-upgrade))
- 0.41% on straightforward benign requests ([Anthropic transparency documentation, cited by Caylent](https://caylent.com/blog/claude-sonnet-4-6-in-production-capability-safety-and-cost-explained))
Elevated refusal on AI safety research tasks specifically (e.g., "grade these transcripts for safety violations") — more than Opus 4.6. Source: [latent.space](https://www.latent.space/p/ainews-claude-sonnet-46-clean-upgrade). Both numbers represent major improvement over Sonnet 4.5 (8.50% over-refusal).

**Failure 3 — Post-launch quality regression (March 9 – April 7, 2026; now fixed):**
Root causes per Anthropic April 23 postmortem: (1) reasoning effort reduced from high to medium on March 4 to lower latency — caused quality degradation across 1,400+ frustration events across 50 sessions — reverted April 7; (2) a March 26 bug caused Claude to repeatedly clear thinking from sessions. Both fixed. Signal: the model is sensitive to reasoning-effort configuration. Source: [Anthropic April 23 postmortem](https://www.anthropic.com/engineering/april-23-postmortem), [GitHub issue #46935](https://github.com/anthropics/claude-code/issues/46935).

**Failure 4 — Strict-tool-use grammar 24h expiry:**
Compiled JSON-schema grammars cache for 24 hours from last use, separate from prompt caching. An agent idle for >24h pays grammar-compile latency hit on the next call. No API warning — operators must track grammar compile latency to detect expiry. Plan maintenance windows accordingly. Source: official structured-outputs documentation.

**Failure 5 — Minimum cache prefix silent skip:**
Prompts under 1,024 tokens cannot be cached — the API silently skips caching and returns no error. Check `cache_creation_input_tokens` and `cache_read_input_tokens` in the response to verify caching fired. Source: `_official-prompt-caching.md` line 650.

**Failure 6 — 4-breakpoint ceiling 400 error:**
The API returns a 400 error if 5 or more explicit `cache_control` breakpoints exist (including automatic caching's implicit breakpoint). Long complex agent pipelines with many explicit breakpoints are susceptible. This is a silent failure mode in complex pipelines — no graceful degradation. Source: `_official-prompt-caching.md` line 572.

**Category risks shared across frontier LLMs (not Sonnet 4.6-specific):**
- Citation hallucination in long-document retrieval: a category-level risk, not a documented Sonnet 4.6-elevated failure mode. Implement citation grounding checks.
- Long-context recall at 600k–1M tokens: not formally benchmarked. Community reports of drift exist but no named study is citeable.

**Known limitations on this axis:**
- Bedrock and Vertex AI deprecation calendar diverges from Anthropic first-party schedule — enterprise callers on these platforms should monitor both calendars independently.

**Sources:**
- [rootly.com — GUI over-eagerness](https://rootly.com/blog/claude-sonnet-4-6-benchmark-results-and-lessons-for-ai-sre)
- [latent.space — over-refusal rates](https://www.latent.space/p/ainews-claude-sonnet-46-clean-upgrade)
- [Caylent — over-refusal 0.41%](https://caylent.com/blog/claude-sonnet-4-6-in-production-capability-safety-and-cost-explained)
- [Anthropic April 23 Engineering Postmortem](https://www.anthropic.com/engineering/april-23-postmortem)
- [GitHub issue #46935](https://github.com/anthropics/claude-code/issues/46935)
- `_official-prompt-caching.md` lines 572, 650
