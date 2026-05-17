---
provider: anthropic
model: claude-opus-4-7
capability: agentic-computer-use
chunk_id: 17-agentic-computer-use
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [computer-use, osworld, terminal-bench, agentic, gui-automation]
related_chunks: [11-tool-use, 13-vision, 15-code-generation, 40-unique-strengths, 41-known-limitations, 44-avoid-when]
related_models: [openai/gpt-5-5, openai/gpt-5-4, anthropic/claude-opus-4-6]
peer_comparisons:
  - peer: openai/gpt-5-5
    relation: weaker
    note: "Terminal-Bench 2.0 (long-running autonomous shell agents): GPT-5.5 82.7% vs. Opus 4.7 69.4% — 13.3-point gap. Route unattended terminal-agent loops to GPT-5.5."
  - peer: openai/gpt-5-4
    relation: stronger
    note: "OSWorld-Verified (desktop GUI automation): Opus 4.7 78.0% vs. GPT-5.4 75.0% — 3-point lead."
  - peer: anthropic/claude-opus-4-6
    relation: stronger
    note: "Screen-coordinate mapping fixed (1:1 pixel mapping); 3.75MP resolution ceiling; both improve computer_use reliability."
---

**Summary** — Claude Opus 4.7 includes a first-party `computer_use` tool with the 3.75MP screenshot ceiling and fixed 1:1 screen-coordinate mapping. On OSWorld-Verified (desktop GUI automation), it scores 78.0% — ahead of GPT-5.4 (75.0%). However, on Terminal-Bench 2.0 (long-running autonomous shell/terminal agents), GPT-5.5 leads by a large 13.3-point gap (82.7% vs. 69.4%). GPT-5.5's OSWorld score is unknown, so the desktop-GUI lead may erode when published.

**Specifics:**
- **First-party `computer_use` tool** with 3.75MP screenshot ceiling and 1:1 pixel coordinate mapping. Source: [Anthropic announcement](https://www.anthropic.com/news/claude-opus-4-7); [MindStudio breakdown](https://www.mindstudio.ai/blog/claude-opus-47-benchmark-breakdown).
- **OSWorld-Verified:** Opus 4.7 78.0% vs. GPT-5.4 75.0% — 3-point lead. Sources: [MindStudio breakdown](https://www.mindstudio.ai/blog/claude-opus-47-benchmark-breakdown); [Vellum benchmark roundup](https://www.vellum.ai/blog/claude-opus-4-7-benchmarks-explained). GPT-5.5's OSWorld-Verified score is `[UNKNOWN]` as of round-2 search.
- **Terminal-Bench 2.0:** GPT-5.5 82.7% vs. Opus 4.7 69.4% — 13.3-point gap. Sources: [MarkTechPost coverage citing OpenAI release notes April 23, 2026](https://www.marktechpost.com/2026/04/23/openai-releases-gpt-5-5-a-fully-retrained-agentic-model-that-scores-82-7-on-terminal-bench-2-0-and-84-9-on-gdpval/); [llm-stats Terminal-Bench leaderboard](https://llm-stats.com/benchmarks/terminal-bench-2).
- **Claude Mythos Preview** scores 79.6% on OSWorld-Verified — 1.6 points above Opus 4.7 — but is invitation-only and not generally available.
- **Coordinate-mapping fix** for `computer_use` — scale-factor errors from Opus 4.6 removed. Source: [MindStudio breakdown](https://www.mindstudio.ai/blog/claude-opus-47-benchmark-breakdown).

**Compared to peers (sharpened by Dealbreaker):**
- vs. openai/gpt-5-5: Route unattended long-running terminal/shell agents to GPT-5.5 — 13.3-point Terminal-Bench 2.0 gap is large and decisive. For desktop GUI automation (OSWorld), Opus 4.7 leads GPT-5.4 but GPT-5.5's score is unknown.
- vs. openai/gpt-5-4: Opus 4.7 leads OSWorld-Verified by 3 points (78.0% vs. 75.0%).
- vs. anthropic/claude-opus-4-6: Substantial improvement from coordinate-mapping fix and 3× resolution ceiling — both directly impact `computer_use` reliability on high-DPI screens.

**Known limitations on this axis:**
- **Terminal-Bench 2.0 gap is 13.3 points** — do not use Opus 4.7 for unattended long-running shell agents when GPT-5.5 is available.
- **GPT-5.5 OSWorld score is `[UNKNOWN]`** — the desktop-GUI lead may erode when GPT-5.5 publishes its OSWorld number.
- **`xhigh` adaptive-thinking latency (~23.6s TTFT)** makes interactive agentic loops with frequent human-in-the-loop pauses slow at max reasoning effort.

**Sources:**
- [Anthropic announcement — coordinate fix, resolution](https://www.anthropic.com/news/claude-opus-4-7)
- [MindStudio breakdown — OSWorld, coordinate fix](https://www.mindstudio.ai/blog/claude-opus-47-benchmark-breakdown)
- [Vellum benchmark roundup — OSWorld](https://www.vellum.ai/blog/claude-opus-4-7-benchmarks-explained)
- [MarkTechPost — Terminal-Bench 2.0 GPT-5.5](https://www.marktechpost.com/2026/04/23/openai-releases-gpt-5-5-a-fully-retrained-agentic-model-that-scores-82-7-on-terminal-bench-2-0-and-84-9-on-gdpval/)
- [llm-stats Terminal-Bench leaderboard](https://llm-stats.com/benchmarks/terminal-bench-2)
