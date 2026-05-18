---
provider: anthropic
model: claude-mythos-preview
capability: avoid-when
chunk_id: 44-avoid-when
last_research_round: 0
last_updated: 2026-05-18
verified_by_dealbreaker: true
source_authority: official_doc
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [routing, when-not-to-route, alternatives]
related_chunks: [00-overview, 42-restricted-access, 43-ideal-tasks]
related_models: [anthropic:claude-opus-4-7, anthropic:claude-sonnet-4-6, anthropic:claude-haiku-4-5]
peer_comparisons: []
---

# Avoid When — Do not route to Claude Mythos Preview

**Summary** — Mythos is restricted (see `42-restricted-access.md`) AND has narrow vertical positioning. Avoid routing here for the cases below; alternatives noted.

**Avoid for these task types (and the alternatives to use instead):**

1. **Anything Mitchell does NOT have Glasswing access for** — Without access, Mythos returns HTTP 403/404. Route to `anthropic:claude-opus-4-7` instead, even for defensive cybersec tasks. The Opus model can handle defensive cybersec workflows competently; Mythos is the optimization, not the requirement.

2. **General-purpose tasks (non-cybersec)** — Mythos is verticalized for defensive security. For general agentic coding, MCP orchestration, long-context reasoning, or browser/computer use: route to `anthropic:claude-opus-4-7`.

3. **High-volume / cost-bounded tasks** — **Mythos pricing is $25/$125 per MTok** (verified 2026-05-18, [llm-stats.com](https://llm-stats.com/blog/research/claude-mythos-preview-launch)), which is **5× Opus 4.6** and **25× Haiku 4.5**. Defensive-cybersec triage at scale (e.g., 1,000+ items) should use `anthropic:claude-haiku-4-5` (cost-floor, $1/$5 per MTok) with selective escalation to Opus 4.7 ($5/$25) for ambiguous cases. Mythos is only worth its premium for narrowly-defined defensive workflows where the capability gap matters AND budget is non-issue (e.g., Glasswing partner with allocated usage credits from Anthropic's $100M pool).

4. **Offensive / red-team / adversarial-generation tasks** — Anthropic's positioning is explicit: "defensive cybersecurity workflows." Mythos will refuse offensive prompts. For red-team work, use specialized tooling, not Mythos.

5. **Mission-critical schema-enforced extraction** — Mythos likely inherits Sonnet 4.6's structured-output strengths but this is unverified. Route to `anthropic:claude-sonnet-4-6` (strict grammar) for any task where schema enforcement is load-bearing.

6. **Time-sensitive / real-time-data tasks** — Mythos likely shares the Anthropic-family knowledge cutoff (Jan 2026 training data). For real-time data, route to grounded models: `xai:grok-4-x-search` (X timeline), `perplexity:sonar-pro` (web), or `google:gemini-2.5-pro` (Google grounding).

7. **Tasks requiring native audio, video, or vision-OCR primary** — Mythos's multimodal capabilities are unverified. Route to `google:gemini-3-1-pro` (1hr video, 8.4hr audio) or `google:gemini-3-flash` (vision OCR primary).

**Default rule for orchestration agents:**
- **Phase 1 check:** If `Mitchell.glasswing_access === false` (current state as of 2026-05-18) → Mythos is NOT a routing candidate, period. Skip without considering.
- **Phase 2 check (when access exists):** If task ∉ {defensive cybersec, threat-modeling, IR-response, secure-tooling-review, defensive-policy-drafting, defensive-scenario-sim} → route elsewhere even if access exists.

**Compared to peers (sharpened by Dealbreaker):**
- vs. Opus 4.7: Opus is the right choice for >90% of tasks that someone might consider Mythos for, including most defensive-cybersec analysis (Mythos's edge is narrow and unmeasured publicly).
- vs. Sonnet 4.6: Sonnet handles most cost-quality balanced cybersec analysis. Mythos isn't worth the access friction for casual cybersec work.

**Sources:**
- [Anthropic models page](https://platform.claude.com/docs/en/docs/about-claude/models)
- [Project Glasswing](https://anthropic.com/glasswing)
- Dealbreaker v2 audit appendix (2026-05-18)
