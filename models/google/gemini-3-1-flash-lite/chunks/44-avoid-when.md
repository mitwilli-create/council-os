---
provider: google
model: gemini-3-1-flash-lite
capability: avoid-when
chunk_id: 44-avoid-when
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [routing, avoid-when, routing-away, reasoning-gap, computer-use]
related_chunks: [41-known-limitations, 43-ideal-tasks, 10-reasoning, 17-agentic-computer-use]
related_models: [google/gemini-3-1-pro, google/gemini-3-flash]
peer_comparisons:
  - peer: google/gemini-3-1-pro
    relation: weaker
    note: "Route to Pro when complex reasoning, high thinking_level, GPQA-class tasks, or advanced code synthesis is required."
  - peer: google/gemini-3-flash
    relation: weaker
    note: "Route to Flash when thinking_level: medium/high meaningfully improves output quality for the task."
---

**Summary** — Avoid Gemini 3.1 Flash-Lite when the per-token quality gap between it and Pro (or Flash) actually matters for the task. The key test: if `thinking_level: minimal` produces acceptable output quality, Flash-Lite is right. If the task requires extended reasoning, complex code synthesis, precision long-context recall, or Computer Use — route away. The cost savings are real but not worth degraded output on high-stakes tasks.

**Specifics — when to route away and where:**

1. **Complex, high-stakes reasoning or architecture design** → Route to **Gemini 3.1 Pro** or **GPT-5.5-Pro**. Flash-Lite's GPQA-Diamond of 86.9% (vs Pro's 94.3%) represents a meaningful gap on tasks that require multi-step chain-of-thought at `thinking_level: high`.

2. **Sophisticated multi-step problem solving requiring `thinking_level: high`** → Route to **Gemini 3.1 Pro**. The 8× cost premium is justified when reasoning depth is the bottleneck.

3. **Specialized creative writing or high-precision instruction following** → Route to **Claude 3.5 Sonnet / Opus** (Anthropic). Flash-Lite at `thinking_level: minimal` does not match Claude's instruction-following precision on nuanced writing tasks.

4. **Tasks >200k tokens requiring precision needle-in-a-haystack recall** → Route to **Gemini 3.1 Pro**. Recall degradation at extreme context lengths is greater in Flash-Lite.

5. **GPQA-class, ARC-AGI, or high-logic benchmark-equivalent tasks** → Route to **Gemini 3.1 Pro**. The 7.4-point GPQA gap is real and actionable.

6. **Computer Use (browser/OS control)** → Route to **Gemini 3 Flash** (minimum tier) or **Gemini 3.1 Pro**. Flash-Lite explicitly does not support Computer Use. Source: `_official-gemini-3-api.md line 308`.

7. **Advanced code sandbox execution** → Route to **Gemini 3.1 Pro**. Flash-Lite does not have the Pro-tier code sandbox environment.

**The core routing test:**
- If `thinking_level: minimal` produces acceptable quality → Flash-Lite (cost wins).
- If `thinking_level: medium/high` is required → Flash or Pro (quality wins; calculate whether 2× or 8× premium is worth it).

**Known limitations on this axis:**
- "Avoid when" is task-specific, not model-absolute — Flash-Lite is not categorically weaker; it is weaker specifically on tasks that exceed `thinking_level: minimal` adequacy.

**Sources:**
- round-2-self-research.md Section 7, avoid-when list
- `_official-gemini-3-api.md line 308` (Computer Use exclusion)
- round-2-verdict.yaml (strike S7.2: retired GPT-4o avoid-when replaced with current peers)
- Google Blog Announcement (GPQA 86.9% vs Pro 94.3%)
