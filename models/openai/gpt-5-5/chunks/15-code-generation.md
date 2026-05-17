---
provider: openai
model: gpt-5-5
capability: code-generation
chunk_id: 15-code-generation
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [code, swe-bench, terminal-bench, codegen, debugging, agentic-coding]
related_chunks: [10-reasoning, 11-tool-use, 17-agentic-computer-use, 41-known-limitations, 44-avoid-when]
related_models:
  - anthropic/claude-opus-4-7
  - openai/gpt-5-3-codex
  - openai/gpt-5-4
peer_comparisons:
  - peer: anthropic/claude-opus-4-7
    relation: weaker
    note: "SWE-bench Pro: GPT-5.5 58.6% vs Claude Opus 4.7 64.3% — Claude leads on hard real-world SE tasks"
  - peer: anthropic/claude-opus-4-7
    relation: stronger
    note: "Terminal-Bench 2.0: GPT-5.5 82.7% vs Claude Opus 4.7 69.4% (+13.3pp) — GPT-5.5 leads on terminal/tool-using agent coding"
  - peer: openai/gpt-5-4
    relation: stronger
    note: "Terminal-Bench 2.0: GPT-5.5 82.7% vs GPT-5.4 75.1% (+7.6pp)"
  - peer: openai/gpt-5-3-codex
    relation: different-approach
    note: "Codex is OpenAI's recommended model for IDE/apply_patch/agentic-coding; GPT-5.5 is for mixed workflows"
---

**Summary** — GPT-5.5 writes, edits, reviews, debugs, and reasons over code across common languages. Its Terminal-Bench 2.0 score (82.7%) is a documented lead over both GPT-5.4 and Claude Opus 4.7. However, it loses to Claude Opus 4.7 on SWE-bench Pro (58.6% vs 64.3%), and within OpenAI's own lineup, gpt-5.3-codex is the recommended model for IDE-style agentic coding workflows.

**Specifics:**
- **Terminal-Bench 2.0:** GPT-5.5 **82.7%** (WebSearch confirmed: openai.com/index/introducing-gpt-5-5, marktechpost.com/2026/04/23, venturebeat.com). Delta vs GPT-5.4: **+7.6pp**. Delta vs Claude Opus 4.7: **+13.3pp**.
- **SWE-bench Pro:** GPT-5.5 **58.6%** vs Claude Opus 4.7 **64.3%** — GPT-5.5 loses by 5.7pp on hard real-world software engineering tasks (Dealbreaker benchmark log).
- **SWE-bench Verified:** GPT-5.5 **88.7%** vs Claude Opus 4.7 **87.6%** — narrow GPT-5.5 lead, but Dealbreaker notes contamination concerns on this split; do not override the SWE-bench Pro loss.
- **Languages:** Python, JavaScript/TypeScript, Go, Java, C#, C/C++, Rust, SQL, shell, infrastructure-as-code (inferred from frontier positioning; no per-language benchmark in research materials).
- **Output efficiency:** ~40% fewer output tokens for equivalent Codex tasks vs GPT-5.4, per Dealbreaker pricing summary. Partially offsets the 2× sticker price increase.
- **Agentic coding route:** `gpt-5.3-codex` is OpenAI's recommended model for IDE agents, apply_patch, multi-hour coding sessions, and compaction-heavy workflows (OpenAI prompt guidance, cited by Dealbreaker).

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-opus-4-7: GPT-5.5 wins Terminal-Bench 2.0 (+13.3pp) but loses SWE-bench Pro (–5.7pp). Route to Claude Opus 4.7 for difficult real-world SE tasks. Route to GPT-5.5 for terminal/tool-using agent code workflows.
- vs. openai/gpt-5-3-codex: Use Codex for IDE-style coding, apply_patch, persistence, compaction. Use GPT-5.5 when coding is one component of a broader mixed workflow.
- vs. openai/gpt-5-4: GPT-5.5 leads on Terminal-Bench (+7.6pp); migration cost is the prompting-style change.

**Known limitations on this axis:**
- Loses to Claude Opus 4.7 on SWE-bench Pro — do not use as default for the hardest software engineering tasks without testing.
- SWE-bench Verified narrow lead has contamination concerns; do not rely on it.
- May make plausible but incorrect edits if tests are absent; may overgeneralize from adjacent code.
- Not OpenAI's recommended IDE/agentic-coding model (that is gpt-5.3-codex).

**Sources:**
- [OpenAI: Introducing GPT-5.5](https://openai.com/index/introducing-gpt-5-5)
- [MarktechPost Apr 23 2026](https://marktechpost.com/2026/04/23)
- Dealbreaker benchmark log (SWE-bench Pro, SWE-bench Verified scores)
