---
provider: google
model: gemini-3-1-flash-lite
capability: reasoning
chunk_id: 10-reasoning
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [reasoning, thinking-level, chain-of-thought, classification, minimal]
related_chunks: [00-overview, 40-unique-strengths, 41-known-limitations, 44-avoid-when]
related_models: [google/gemini-3-1-pro, google/gemini-3-flash]
peer_comparisons:
  - peer: google/gemini-3-1-pro
    relation: weaker
    note: "Pro reaches GPQA-Diamond 94.3% vs Flash-Lite 86.9%; use Pro for complex multi-step CoT."
  - peer: google/gemini-3-flash
    relation: weaker
    note: "Flash supports thinking_level: medium/high with stronger multi-step reasoning; Flash-Lite's sweet spot is minimal."
---

**Summary** — Gemini 3.1 Flash-Lite supports Google's 4-tier `thinking_level` ladder (`minimal`, `low`, `medium`, `high`), but its design center is `thinking_level: minimal` — making it the only Gemini 3.1 family model that defaults to the lowest reasoning cost and latency. It handles classification, extraction, and simple chain-of-thought well; complex multi-step reasoning shows a measurable quality gap vs Pro.

**Specifics:**
- 4-tier `thinking_level` ladder supported: `minimal` (default), `low`, `medium`, `high`. Source: `_official-thinking.md line 79`.
- Flash-Lite is the ONLY model in the Gemini 3.1 family where `thinking_level: minimal` is the default — this is what drives its cost/latency advantage. Source: `_official-thinking.md line 79` ("Supported (Default)" column for Flash-Lite).
- GPQA-Diamond benchmark: 86.9%. Peer: Gemini 3.1 Pro scores 94.3%. Source: Google Blog Announcement + cross-verified vs Pro R2.
- Complex mathematical reasoning degrades noticeably when `thinking_level` is kept at `minimal`; upgrading to `low` or `medium` partially recovers accuracy at added cost.
- Example ideal task: High-volume sentiment classification of customer support tickets where `thinking_level: minimal` is sufficient. Source: `_official-thinking.md line 79`.

**Compared to peers (sharpened by Dealbreaker):**
- vs. google/gemini-3-1-pro: 7.4-point GPQA gap (86.9% vs 94.3%); route to Pro for complex logic, architecture design, or tasks requiring `thinking_level: high`.
- vs. google/gemini-3-flash: Flash handles `thinking_level: medium/high` with better per-step accuracy; Flash-Lite should be routed to Flash for tasks that need extended reasoning at moderate cost.

**Known limitations on this axis:**
- Performance drops on complex mathematical reasoning when `thinking_level: minimal` is held fixed.
- `thinkingLevel` and `thinkingBudget` are mutually exclusive — passing both triggers a 400-error. Source: `_official-gemini-3-api.md line 172`.
- Temperature interaction: certain temperature values combined with thinking modes can cause looping errors. Source: `_official-gemini-3-api.md line 178, 180`.

**Sources:**
- `_official-thinking.md` (4-tier ladder, minimal default)
- Google Blog Announcement (GPQA-Diamond 86.9%)
- `_official-gemini-3-api.md` (400-error gotchas)
- round-2-verdict.yaml (spot check S2.2 + H7 verified)
