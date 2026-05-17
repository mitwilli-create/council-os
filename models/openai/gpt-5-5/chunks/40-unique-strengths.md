---
provider: openai
model: gpt-5-5
capability: unique-strengths
chunk_id: 40-unique-strengths
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [strengths, benchmark-leads, terminal-bench, arc-agi, browsecomp, differentiation]
related_chunks: [10-reasoning, 15-code-generation, 17-agentic-computer-use, 12-web-grounding, 43-ideal-tasks]
related_models:
  - anthropic/claude-opus-4-7
  - google/gemini-3-1-pro
  - openai/gpt-5-4
  - openai/gpt-5-5-pro
peer_comparisons:
  - peer: anthropic/claude-opus-4-7
    relation: stronger
    note: "Terminal-Bench 2.0: 82.7% vs 69.4% (+13.3pp) — GPT-5.5's largest single peer lead"
  - peer: anthropic/claude-opus-4-7
    relation: stronger
    note: "ARC-AGI-2: 85.0% vs 75.8% (+9.2pp)"
  - peer: google/gemini-3-1-pro
    relation: stronger
    note: "ARC-AGI-2: 85.0% vs 77.1% (+7.9pp)"
  - peer: openai/gpt-5-4
    relation: stronger
    note: "Terminal-Bench 2.0: 82.7% vs 75.1% (+7.6pp); ARC-AGI-2 +11.7pp"
  - peer: openai/gpt-5-5-pro
    relation: different-approach
    note: "Pro tier leads BrowseComp Pro (90.1% vs base GPT-5.5) at 6× cost; base GPT-5.5 is the cost-efficient agentic default"
---

**Summary** — GPT-5.5's three verified benchmark leads are Terminal-Bench 2.0 (82.7%), ARC-AGI-2 (85.0%), and BrowseComp Pro via the Pro tier (90.1%). These represent documented advantages over Claude Opus 4.7, Gemini 3.1 Pro, and GPT-5.4 on terminal-based agentic coding, abstraction reasoning, and multi-hop web research respectively. No capability category is exclusive to GPT-5.5 — but the specific combination of Responses API, 1.05M-token context, 128k output cap, and this benchmark profile is distinctive.

**Specifics:**

**Verified lead 1 — Terminal-Bench 2.0: 82.7%**
- Delta vs GPT-5.4: **+7.6pp** (from 75.1%).
- Delta vs Claude Opus 4.7: **+13.3pp** (from ~69.4%).
- WebSearch confirmed: openai.com/index/introducing-gpt-5-5, marktechpost.com/2026/04/23, venturebeat.com (narrowly beats Mythos Preview 82.0%).
- Task proxy: terminal-based, tool-using, command-line agent workflows.

**Verified lead 2 — ARC-AGI-2: 85.0%**
- Delta vs GPT-5.4: **+11.7pp**.
- Delta vs Claude Opus 4.7: **+9.2pp** (from 75.8%).
- Delta vs Gemini 3.1 Pro: **+7.9pp** (from 77.1%).
- WebSearch confirmed: officechai.com/ai/gpt-5-5-tops-arc-agi-2, blockchain.news, llm-stats.com leaderboard.
- Task proxy: novel abstraction, symbolic rule induction, puzzle-like transformations.

**Verified lead 3 — BrowseComp Pro: 90.1% (GPT-5.5 Pro tier)**
- Delta vs Claude Opus 4.7: **+10.8pp** (from 79.3%).
- NOTE: this figure is for GPT-5.5 Pro, not base GPT-5.5. Do not attribute to base model.
- Task proxy: multi-hop web research with primary-source citation requirements.

**Additional cited figure — GDPval: 84.9%**
- Source: Dealbreaker-cited OpenAI release notes / MarktechPost coverage (Apr 23 2026).
- No cross-provider peer comparison for GDPval in research materials; do not assert a peer lead.

**Output efficiency:**
- ~40% fewer output tokens vs GPT-5.4 on equivalent Codex tasks; effectively reduces the 2× sticker premium to ~20% on output-heavy workflows.

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-opus-4-7: GPT-5.5 leads on agentic terminal work (+13.3pp Terminal-Bench) and abstraction (+9.2pp ARC-AGI-2). Claude Opus 4.7 leads on SWE-bench Pro (+5.7pp), HLE (+5.5pp), and MCP-Atlas (+2pp). These are not contradictory — they define routing zones.
- vs. google/gemini-3-1-pro: GPT-5.5 leads ARC-AGI-2 (+7.9pp); Gemini 3.1 Pro leads HLE (+3pp). Route by task type.
- vs. openai/gpt-5-4: GPT-5.5 is the upgrade on agentic benchmarks; the migration cost is the prompting-style change.

**Known limitations on this axis:**
- No exclusive capability at the category level — tool calling, vision, code, structured output, and web grounding are all available in peers.
- BrowseComp 90.1% belongs to GPT-5.5 Pro; base GPT-5.5 performance on this benchmark is undocumented.
- GDPval 84.9% lacks peer comparison data in research materials.

**Sources:**
- [OpenAI: Introducing GPT-5.5](https://openai.com/index/introducing-gpt-5-5)
- [officechai.com: GPT-5.5 tops ARC-AGI-2](https://officechai.com/ai/gpt-5-5-tops-arc-agi-2)
- [MarktechPost Apr 23 2026](https://marktechpost.com/2026/04/23)
- [VentureBeat — Terminal-Bench coverage](https://venturebeat.com)
- Dealbreaker benchmark log
