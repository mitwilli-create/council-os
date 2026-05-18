---
provider: anthropic
model: claude-mythos-preview
capability: ideal-tasks
chunk_id: 43-ideal-tasks
last_research_round: 0
last_updated: 2026-05-18
verified_by_dealbreaker: true
source_authority: official_doc
confidence: medium
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [routing, defensive-security, ideal-task-types]
related_chunks: [00-overview, 42-restricted-access, 44-avoid-when]
related_models: [anthropic:claude-opus-4-7, openai:gpt-5-5]
peer_comparisons:
  - peer: openai/gpt-5-5
    relation: comparable
    note: "GPT-5.5 narrowly beats Mythos on Terminal-Bench 2.0 (82.7% vs 82.0%) but Mythos is purpose-built for defensive cybersec where Terminal-Bench is not the deciding axis"
---

# Ideal Tasks — When to route to Claude Mythos Preview

**SUBJECT TO ACCESS CONSTRAINT:** This chunk is academic until Mitchell joins Project Glasswing — see `42-restricted-access.md`.

**Summary** — Claude Mythos Preview is purpose-built for defensive cybersecurity workflows. Per Anthropic's positioning, it is offered "separately as a research preview model for defensive cybersecurity workflows." When Mitchell has access, route the following task types here.

**Ideal task families (with Glasswing access):**

1. **Threat-model analysis of own systems** — Analyzing your own infrastructure/code/architecture for vulnerabilities you want to defend against. Specifically: identifying attack surfaces, ranking severity, recommending mitigations.

2. **Defensive incident response** — Post-incident forensic analysis where the workflow is "how did the attacker get in" and "how do we prevent recurrence." NOT for active red-team / offensive operations.

3. **Security-tooling code review** — Reviewing your own security tooling (SIEM rules, EDR configurations, IDS signatures, OWASP-style mitigations) for correctness, gaps, false-positive risk.

4. **Defensive cybersec policy + compliance drafting** — Writing security policies, compliance frameworks, secure-coding standards, incident-response playbooks calibrated to your org's threat model.

5. **Adversarial scenario simulation (defensive-framing)** — "If an attacker did X, how would our defenses respond?" Where the OUTPUT is defensive improvements, not offensive playbooks.

**Specifics:**
- Anthropic's positioning explicitly bounds this to *defensive* work. Mythos is not positioned for general agentic tasks (use Opus 4.7) or general coding (use Sonnet 4.6).
- Third-party benchmark reference: VentureBeat reports Terminal-Bench 2.0 = 82.0% (narrowly behind GPT-5.5 at 82.7%) — agentic capability is comparable to flagship models but the vertical specialty matters more than raw benchmark for routing.

**Compared to peers (sharpened by Dealbreaker):**
- vs. `anthropic/claude-opus-4-7`: Opus 4.7 is the general-purpose flagship; Mythos is the cybersec-vertical preview. For defensive cybersec tasks where Glasswing access exists, prefer Mythos. For everything else, prefer Opus 4.7.
- vs. `openai/gpt-5-5`: GPT-5.5 narrowly beats on Terminal-Bench but lacks the cybersec-vertical training signal Anthropic claims for Mythos.

**Known limitations on this axis:**
- This routing recommendation is **conditional on Glasswing access**. Without access, route defensive-cybersec tasks to `anthropic:claude-opus-4-7` instead.
- The "defensive only" boundary is Anthropic-enforced and likely encoded in the model's training. Attempting offensive use cases will be refused per Anthropic's safety stance.

**Sources:**
- [Anthropic models page](https://platform.claude.com/docs/en/docs/about-claude/models) — Glasswing positioning
- [Project Glasswing](https://anthropic.com/glasswing) — program description
- [VentureBeat coverage](https://venturebeat.com/ai/openais-gpt-5-5-is-here-and-its-no-potato-narrowly-beats-anthropics-claude-mythos-preview-on-terminal-bench-2-0) — Terminal-Bench comparison
