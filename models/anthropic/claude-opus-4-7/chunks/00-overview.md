---
provider: anthropic
model: claude-opus-4-7
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
related_chunks: [20-pricing, 21-latency-throughput, 26-context-window, 40-unique-strengths, 41-known-limitations]
related_models: [anthropic/claude-sonnet-4-6, anthropic/claude-haiku-4-5, anthropic/claude-opus-4-6, openai/gpt-5-5, google/gemini-3-1-pro]
peer_comparisons:
  - peer: openai/gpt-5-5
    relation: comparable
    note: "Both are top-tier generally-available models as of mid-2026; GPT-5.5 leads Terminal-Bench and BrowseComp, Opus 4.7 leads SWE-bench Pro and HLE."
  - peer: google/gemini-3-1-pro
    relation: comparable
    note: "Comparable general capability tier; Gemini 3.1 Pro adds native audio/video, lower base input price."
  - peer: anthropic/claude-sonnet-4-6
    relation: stronger
    note: "Opus 4.7 leads SWE-bench Pro and HLE; Sonnet 4.6 is 40% cheaper and retains Extended-thinking surface."
---

**Summary** — Claude Opus 4.7 is Anthropic's most-capable generally-available model as of mid-2026, positioned for complex reasoning and agentic coding. It accepts text and image input and produces text output only — no audio input, no audio output, no video input. It was released April 16, 2026 and replaces Claude Opus 4.6 (now Legacy). The pinned API identifier is `claude-opus-4-7` across all first-party surfaces; this is a snapshot ID, not an evergreen alias.

**Specifics:**
- **API model IDs:** `claude-opus-4-7` (Claude API, Vertex AI, Microsoft Foundry); `anthropic.claude-opus-4-7` (AWS Bedrock). Source: [`_official-models-overview.md`](https://platform.claude.com/docs/en/about-claude/models/overview).
- **Release date:** April 16, 2026. Sources: [Anthropic announcement](https://www.anthropic.com/news/claude-opus-4-7); [GitHub Changelog](https://github.blog/changelog/2026-04-16-claude-opus-4-7-is-generally-available/); [AWS Bedrock announcement](https://aws.amazon.com/blogs/aws/introducing-anthropics-claude-opus-4-7-model-in-amazon-bedrock/).
- **Anthropic's stated positioning (direct quote):** "Our most capable generally available model for complex reasoning and agentic coding," with "a step-change improvement in agentic coding over Claude Opus 4.6." Treat "step-change" as launch-marketing characterization, not a benchmark claim.
- **Modalities:** text + image input; text output only. No audio in, no audio out, no video in. Source: `_official-models-overview.md` line 19.
- **Predecessor:** Claude Opus 4.6 — now Legacy alongside Sonnet 4.5, Opus 4.5, Opus 4.1. Claude Sonnet 4 and Opus 4 retire June 15, 2026.
- **Adjacent model:** Claude Mythos Preview (invitation-only, defensive cybersecurity, Project Glasswing) — Anthropic states Opus 4.7 is "less broadly capable" than Mythos but Mythos is single-domain. Source: [Axios](https://www.axios.com/2026/04/16/anthropic-claude-opus-model-mythos); `_official-models-overview.md` line 47.
- **Knowledge cutoff:** January 2026 (reliable knowledge = training data cutoff, both Jan 2026 — anomalous alignment `[INFERRED]`). Source: `_official-models-overview.md` lines 39-40.
- **Deployment targets:** Claude API, Claude Platform on AWS, Amazon Bedrock (global + regional endpoints), Google Cloud Vertex AI (global, multi-region, regional), Microsoft Foundry.

**Compared to peers (sharpened by Dealbreaker):**
- vs. openai/gpt-5-5: GPT-5.5 leads Terminal-Bench 2.0 (82.7% vs. 69.4%), BrowseComp (90.1% vs. 79.3%), and SWE-bench Verified (88.7% vs. 87.6%); Opus 4.7 leads SWE-bench Pro (64.3% vs. 58.6%), MCP-Atlas (77.3% vs. 75.3%), and Humanity's Last Exam (46.9% vs. 41.4%).
- vs. google/gemini-3-1-pro: Both advertise 1M-token context; Gemini adds native audio/video in that window; Opus 4.7 leads SWE-bench Pro (64.3% vs. 54.2%) and HLE (46.9% vs. 44.4%); Gemini's base input price is lower ($2/MTok vs. $5/MTok).
- vs. anthropic/claude-opus-4-6: Opus 4.7 adds `xhigh` adaptive-thinking effort, 3.75MP vision ceiling, improved `computer_use` coordinates, SWE-bench Pro jump (53.4% → 64.3%); trades away Extended-thinking explicit-budget surface.

**Known limitations on this axis:**
- No audio or video modality — categorical gap vs. Gemini 3.1 Pro and GPT-5.5.
- New tokenizer emits 1.0–1.35× more tokens for the same input vs. Opus 4.6 — effective dollars-per-task is higher than the unchanged sticker implies.
- Pinned ID is snapshot, not evergreen — callers must update when Anthropic deprecates the 4.7 snapshot.
- Bedrock-direct and Vertex-direct callers operate on a different deprecation calendar than Claude API / Claude Platform on AWS callers.

**Sources:**
- [Anthropic models overview](https://platform.claude.com/docs/en/about-claude/models/overview)
- [Anthropic announcement](https://www.anthropic.com/news/claude-opus-4-7)
- [GitHub Changelog](https://github.blog/changelog/2026-04-16-claude-opus-4-7-is-generally-available/)
- [AWS Bedrock announcement](https://aws.amazon.com/blogs/aws/introducing-anthropics-claude-opus-4-7-model-in-amazon-bedrock/)
- [Axios — Mythos/Project Glasswing](https://www.axios.com/2026/04/16/anthropic-claude-opus-model-mythos)
