---
provider: openai
model: gpt-5-5
capability: avoid-when
chunk_id: 44-avoid-when
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [routing, avoid-when, anti-patterns, task-routing, sibling-routing]
related_chunks: [41-known-limitations, 43-ideal-tasks, 15-code-generation, 10-reasoning]
related_models:
  - anthropic/claude-opus-4-7
  - openai/gpt-5-3-codex
  - openai/gpt-5-4
  - google/gemini-3-1-pro
peer_comparisons:
  - peer: anthropic/claude-opus-4-7
    relation: weaker
    note: "SWE-bench Pro 58.6% vs 64.3%; HLE 41.4% vs 46.9%; MCP-Atlas 75.3% vs 77.3% — three concrete avoid-when signals"
  - peer: openai/gpt-5-3-codex
    relation: weaker
    note: "OpenAI's own guidance routes IDE/apply_patch/agentic coding to Codex, not GPT-5.5"
---

**Summary** — Avoid GPT-5.5 for hard SWE-bench Pro-class software engineering (use Claude Opus 4.7), IDE-style autonomous coding agents (use gpt-5.3-codex), realtime voice/audio (use gpt-realtime-2 or gpt-audio-1.5), very high-volume bounded extraction (use mini/nano siblings), and hardest-knowledge academic tasks (use Claude Opus 4.7 or Gemini 3.1 Pro).

**Specifics:**

**Avoid 1 — Hard SWE-bench Pro-class software engineering**
- Why: GPT-5.5 **58.6%** vs Claude Opus 4.7 **64.3%** (–5.7pp) on SWE-bench Pro.
- Route to: Claude Opus 4.7. Also test gpt-5.3-codex for agentic SE tasks.
- Do not rely on SWE-bench Verified (88.7%) to counterbalance; Dealbreaker notes contamination concerns.

**Avoid 2 — IDE-style autonomous coding agents**
- Why: OpenAI's own prompt guidance routes apply_patch, IDE-native workflows, multi-hour coding sessions, and compaction-heavy code tasks to `gpt-5.3-codex`.
- Route to: `gpt-5.3-codex`.
- GPT-5.5 is for mixed workflows where coding is one component; it is not the OpenAI-recommended pure coding agent.

**Avoid 3 — Realtime voice, transcription, translation, audio-native assistants**
- Why: GPT-5.5 is not the dedicated audio/realtime model.
- Route to: `gpt-realtime-2`, `gpt-audio-1.5`, `gpt-realtime-translate`, or `gpt-realtime-whisper` depending on the use case.
- Do not route native low-latency audio I/O or voice-first interactions to GPT-5.5.

**Avoid 4 — Very high-volume bounded extraction, classification, routing, labeling**
- Why: GPT-5.5's price ($5/$30 per 1M) is unjustified for simple validated tasks where a mini/nano model is sufficient.
- Route to: `gpt-5.4-nano`, `gpt-5-nano`, or appropriate mini-tier siblings.
- GPT-5.5's output is worth its cost only when a bad answer is materially costly or long-context synthesis is needed.

**Avoid 5 — Broadest hardest-knowledge academic reasoning (HLE proxy)**
- Why: GPT-5.5 **41.4%** vs Claude Opus 4.7 **46.9%** and Gemini 3.1 Pro **44.4%** on Humanity's Last Exam — last of three named peers.
- Route to: Claude Opus 4.7 (46.9%) or Gemini 3.1 Pro (44.4%) for tasks where HLE is the best proxy benchmark.

**Avoid 6 — Image generation**
- Why: GPT-5.5 is not the image-generation model.
- Route to: `GPT Image 2`.

**Avoid 7 — Deprecated-model pattern maintenance**
- Do not build new workflows on deprecated OpenAI models (o3, o4-mini, GPT-5.1 family, GPT-5.2-Codex, computer-use-preview, GPT-4.5 Preview, Sora 2/Pro, etc.). These are displaced; migrate to current active models.

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-opus-4-7: Three benchmark-backed avoid signals — SWE-bench Pro (–5.7pp), HLE (–5.5pp), MCP-Atlas (–2pp). These are routing signals, not indictments; GPT-5.5 leads Claude on three other benchmarks.
- vs. openai/gpt-5-3-codex: OpenAI's own guidance is explicit — Codex for IDE/agentic-coding; GPT-5.5 for mixed workflows.
- vs. google/gemini-3-1-pro: Gemini 3.1 Pro preferred for HLE-class tasks (44.4% vs 41.4%).

**Known limitations on this axis:**
- These avoid-when signals are benchmark-derived; real task performance may differ from benchmark proxies.
- Refusal patterns (security/dual-use content) may cause unexpected failures in certain research or pen-test workflows — see OpenAI safety policy.

**Sources:**
- Dealbreaker benchmark log (all named scores)
- OpenAI _official-prompt-guidance.md (Dealbreaker-cited; Codex routing)
- [OpenAI platform docs](https://platform.openai.com/docs)
