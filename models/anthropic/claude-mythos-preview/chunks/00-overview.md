---
provider: anthropic
model: claude-mythos-preview
capability: overview
chunk_id: 00-overview
last_research_round: 0
last_updated: 2026-05-18
verified_by_dealbreaker: true
source_authority: official_doc (Anthropic models page + Project Glasswing announcement)
confidence: medium (no public API access, capability claims drawn from announcement only)
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [restricted, project-glasswing, cybersecurity, defensive-security, invitation-only]
related_chunks: []
related_models: [anthropic:claude-opus-4-7, anthropic:claude-sonnet-4-6]
peer_comparisons:
  - peer: openai/gpt-5-5
    relation: different-approach
    note: "GPT-5.5 narrowly beats Mythos on Terminal-Bench 2.0 (82.7% vs 82.0% per VentureBeat report), but Mythos is purpose-built for defensive cybersecurity workflows where Terminal-Bench is not the deciding axis"
---

# Claude Mythos Preview — Overview

**Status: DEFERRED — restricted access via Project Glasswing.**

**Summary** — Claude Mythos Preview is a specialized research-preview model from Anthropic
launched in April 2026 for defensive cybersecurity workflows. It is offered as part of
[Project Glasswing](https://anthropic.com/glasswing). Access is **invitation-only with
no self-serve signup** — the model is NOT callable from Mitchell's `lib/council.mjs`
unless and until he is admitted to the program. This KB entry exists so the routing
agents know WHY they cannot route to this model, not as an active dispatch target.

**Specifics:**
- Official Anthropic positioning: "research preview model for defensive cybersecurity workflows"
  — see [platform.claude.com models page](https://platform.claude.com/docs/en/docs/about-claude/models) under the Note block
- Released: April 2026
- Access: invitation-only via [Project Glasswing](https://anthropic.com/glasswing)
- Tier-1 frontier-class per third-party benchmark comparisons (VentureBeat reports 82.0% on Terminal-Bench 2.0, narrowly behind GPT-5.5's 82.7%)
- **Pricing (Glasswing partners only, verified 2026-05-18 meta-audit v2):** **$25 per million input tokens / $125 per million output tokens** — 5× the price of Claude Opus 4.6 ($5/$25). Sources: [llm-stats.com](https://llm-stats.com/blog/research/claude-mythos-preview-launch), [claudefa.st](https://claudefa.st/blog/models/claude-mythos), [llm-stats.com model page](https://llm-stats.com/models/claude-mythos-preview)
- **Program scope:** 12 founding Project Glasswing partners + 40 additional vetted organizations maintaining critical infrastructure. Anthropic committed $100M in usage credits for Mythos Preview + $4M direct donations to open-source security organizations
- **Surfaces (for authorized participants):** Claude API, Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry — but only for the ~52 vetted orgs
- Not in `lib/council.mjs` PROVIDERS — adding a slot would fail with HTTP 403 for non-Glasswing API keys

**Compared to peers (sharpened by Dealbreaker):**
- vs. `openai:gpt-5-5`: GPT-5.5 wins Terminal-Bench (82.7% vs 82.0%) but Mythos is purpose-built for adversarial cybersecurity scenarios where general-purpose agentic benchmarks may not capture the relevant edge.
- vs. `anthropic:claude-opus-4-7`: Opus is the general-purpose Anthropic flagship. Mythos is a specialized vertical preview, not a successor.

**Known limitations on this axis:**
- **Cannot be called from `lib/council.mjs`** (no public API; invitation-only).
- All capability claims are drawn from public announcements, not from self-research — confidence is `medium` not `high`.
- If Mitchell does obtain Glasswing access, this profile should be promoted to full per-chunk research (00-26, 30-33, 40-44, 50-52).

**Routing rule for orchestration agents:**
- If a task is explicitly about defensive cybersecurity AND Mitchell is in Glasswing AND a Mythos API endpoint exists: route here.
- Otherwise: do NOT include in council fan-out. Document the restriction inline if the user asks why.

**Sources:**
- [platform.claude.com models page](https://platform.claude.com/docs/en/docs/about-claude/models) — "Claude Mythos Preview is offered separately as a research preview model for defensive cybersecurity workflows as part of Project Glasswing. Access is invitation-only and there is no self-serve sign-up."
- [Project Glasswing](https://anthropic.com/glasswing)
- [VentureBeat coverage](https://venturebeat.com/ai/openais-gpt-5-5-is-here-and-its-no-potato-narrowly-beats-anthropics-claude-mythos-preview-on-terminal-bench-2-0) (Terminal-Bench comparison)
- Verification supplement W (meta-audit, 2026-05-18)
