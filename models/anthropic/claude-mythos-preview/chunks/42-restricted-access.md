---
provider: anthropic
model: claude-mythos-preview
capability: restricted-access
chunk_id: 42-restricted-access
last_research_round: 0
last_updated: 2026-05-18
verified_by_dealbreaker: true
source_authority: official_doc
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [access-control, project-glasswing, invitation-only, restricted, routing-constraint]
related_chunks: [00-overview, 43-ideal-tasks, 44-avoid-when]
related_models: []
peer_comparisons: []
---

# Restricted Access — Project Glasswing only

**Summary** — Claude Mythos Preview is NOT available via the public Claude API. Access is invitation-only via [Project Glasswing](https://anthropic.com/glasswing). This restriction is the load-bearing routing constraint for this model.

**Specifics:**
- **Public API:** unavailable. No `model: 'claude-mythos-preview'` endpoint on `api.anthropic.com/v1/messages` for non-Glasswing accounts.
- **Self-serve signup:** does NOT exist. Anthropic explicitly states "Access is invitation-only and there is no self-serve sign-up."
- **Acquisition path:** Anthropic-initiated outreach to vetted defensive-security partners under Project Glasswing.
- **`lib/council.mjs` status:** NOT wired. Adding a PROVIDERS slot would fail with HTTP 404/403 for non-Glasswing API keys.
- **Mitchell's status (as of 2026-05-18):** Not in Glasswing. Model is not callable from this stack.

**Routing implication:**
- All orchestration agents (`researcher.md`, `dealbreaker.md`, `council-of-models.md`) MUST treat Claude Mythos Preview as **structurally unavailable** for routing decisions.
- If a user task explicitly asks "use Mythos for this defensive-security task," the response should be: "Mythos is invitation-only via Project Glasswing — not available in this council. Closest alternatives: claude-opus-4-7 (general defensive analysis), claude-sonnet-4-6 (cost-efficient analysis), or external specialized tooling."
- If Mitchell obtains Glasswing access, this restriction lifts; promote the profile to full per-chunk research and add to `lib/council.mjs` PROVIDERS.

**Compared to peers (sharpened by Dealbreaker):**
- vs. publicly-available models: All other Anthropic Tier-1 models (Opus 4.7, Sonnet 4.6, Haiku 4.5) have public API access. Mythos is the only Anthropic model in the KB with this restriction.
- vs. other restricted models: None in the current KB lineup. Mythos is unique in being documented despite being unreachable.

**Known limitations on this axis:**
- All capability claims for Mythos come from public announcements + third-party reports (e.g., [VentureBeat Terminal-Bench coverage](https://venturebeat.com/ai/openais-gpt-5-5-is-here-and-its-no-potato-narrowly-beats-anthropics-claude-mythos-preview-on-terminal-bench-2-0) cites 82.0% — narrowly behind GPT-5.5's 82.7%). These cannot be verified by Mitchell first-hand without Glasswing access.
- Behavior, pricing, and API surface details are NOT public.
- Capability profile chunks 10-26 are intentionally NOT created in this KB to avoid speculative claims surviving as if verified. Add them only if Glasswing access is obtained.

**Sources:**
- [Anthropic models page](https://platform.claude.com/docs/en/docs/about-claude/models) — official statement on Glasswing restriction
- [Project Glasswing](https://anthropic.com/glasswing) — defensive cybersecurity program landing
- Meta-audit dispatch (2026-05-18) — Gemini-grounded verification of Glasswing restriction
