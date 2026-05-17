---
provider: openai
model: gpt-5-5
capability: ideal-tasks
chunk_id: 43-ideal-tasks
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [routing, ideal-tasks, when-to-use, task-selection, sibling-routing]
related_chunks: [40-unique-strengths, 44-avoid-when, 15-code-generation, 17-agentic-computer-use, 12-web-grounding]
related_models:
  - openai/gpt-5-4
  - openai/gpt-5-5-pro
  - openai/gpt-5-3-codex
  - anthropic/claude-opus-4-7
peer_comparisons:
  - peer: openai/gpt-5-4
    relation: stronger
    note: "GPT-5.5 is the upgrade when agentic benchmark quality matters; GPT-5.4 preferred when cost or existing prompt contracts dominate"
  - peer: openai/gpt-5-5-pro
    relation: different-approach
    note: "Use Pro when task is high-value multi-hop research and cost/latency are secondary; use base for most agentic workflows"
  - peer: openai/gpt-5-3-codex
    relation: different-approach
    note: "Use Codex for IDE/apply_patch/persistence-heavy coding; use GPT-5.5 for mixed research+code+tools"
---

**Summary** — Route to GPT-5.5 for terminal-based/tool-heavy agentic work, large-context professional synthesis, mixed reasoning+tools+documents+code, abstraction-heavy tasks matching ARC-AGI-2, and high-value web research (use Pro tier for BrowseComp-class tasks). Within OpenAI's own lineup, GPT-5.5 is the default for these mixed workflows; Codex is preferred for pure IDE/agentic-coding.

**Specifics:**

**Task type 1 — Terminal/tool-heavy agent workflows**
- Why: Terminal-Bench 2.0 **82.7%**, leads GPT-5.4 by +7.6pp and Claude Opus 4.7 by +13.3pp.
- Examples: shell-based debugging, infra diagnosis, CI pipeline repair, multi-step command execution with tools.
- Differentiation: prefer GPT-5.5 over Claude Opus 4.7 specifically for terminal/tool-loop tasks. Use gpt-5.3-codex instead if the workflow is IDE-native (apply_patch, long coding session, compaction).

**Task type 2 — Large-context professional synthesis**
- Why: 1,050,000-token context, 128k output cap.
- Examples: analyzing large litigation records, diligence room review, 600k-token codebase analysis, multi-document cross-referencing.
- Differentiation: context window is a documented capability; use over smaller-context models when the task genuinely requires >200k tokens.

**Task type 3 — Mixed reasoning + tools + documents + code**
- Why: GPT-5.5 is optimized for multi-modal professional workflows, not pure coding or pure reasoning.
- Examples: research a regulation, inspect internal documents, generate implementation tasks, draft code snippets — all in one workflow.
- Differentiation: use GPT-5.5 over gpt-5.3-codex when the coding component is only one part of a broader professional task.

**Task type 4 — Abstraction-heavy puzzle/reasoning (ARC-AGI-2 proxy)**
- Why: ARC-AGI-2 **85.0%**, leads GPT-5.4 (+11.7pp), Claude Opus 4.7 (+9.2pp), Gemini 3.1 Pro (+7.9pp).
- Examples: novel rule induction, symbolic transformation, pattern abstraction, non-standard logic puzzles.
- Differentiation: prefer GPT-5.5 over all named peers for this task type based on benchmark evidence.

**Task type 5 — High-value web research with search tools**
- Why: GPT-5.5 Pro BrowseComp **90.1%** leads Claude Opus 4.7 by 10.8pp. Base GPT-5.5 score undocumented separately.
- Examples: multi-hop due diligence with citations to primary government/legal/financial sources.
- Differentiation: use GPT-5.5 Pro for cost-tolerant high-stakes research; test base GPT-5.5 vs Claude Opus 4.7 for standard web research before assuming BrowseComp parity.

**Same-sibling routing table:**

| Choose | When |
|---|---|
| GPT-5.4 | Bounded, structured task; existing GPT-5.4 prompt contracts; cost sensitivity; short, deterministic outputs |
| GPT-5.5 (base) | Open-ended, agentic, long-horizon; Terminal-Bench/ARC-AGI-2/BrowseComp performance matters; prompt migration acceptable; output efficiency offsets cost |
| GPT-5.5 Pro | High-value multi-hop research or hard novel reasoning; cost/latency secondary; BrowseComp-class task |
| gpt-5.3-codex | IDE-style coding, apply_patch, multi-hour sessions, compaction-heavy code workflows |
| mini/nano | High-volume extraction, classification, routing, labeling, short summarization; latency + cost dominate |

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-opus-4-7: GPT-5.5 for terminal-agent and abstraction tasks; Claude Opus 4.7 for hard SE (SWE-bench Pro) and broad academic reasoning (HLE).
- vs. google/gemini-3-1-pro: GPT-5.5 for ARC-AGI-2 proxy tasks; Gemini 3.1 Pro for HLE-class broad academic.

**Known limitations on this axis:**
- BrowseComp 90.1% is GPT-5.5 Pro; do not use as routing justification for base GPT-5.5.
- Routing to GPT-5.5 for coding tasks should exclude pure IDE/Codex-style workflows.

**Sources:**
- Dealbreaker benchmark log (all named scores)
- OpenAI _official-prompt-guidance.md (Dealbreaker-cited; Codex routing, prompting style)
