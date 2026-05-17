---
provider: openai
model: gpt-5-5
capability: known-limitations
chunk_id: 41-known-limitations
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [limitations, failure-modes, hallucination, degradation, refusal, latency]
related_chunks: [10-reasoning, 15-code-generation, 16-long-context, 44-avoid-when]
related_models:
  - anthropic/claude-opus-4-7
  - openai/gpt-5-3-codex
peer_comparisons:
  - peer: anthropic/claude-opus-4-7
    relation: weaker
    note: "SWE-bench Pro: GPT-5.5 58.6% vs 64.3% — concrete weakness on hard real-world SE tasks"
  - peer: anthropic/claude-opus-4-7
    relation: weaker
    note: "HLE: GPT-5.5 41.4% vs 46.9% — concrete weakness on broad academic reasoning"
  - peer: anthropic/claude-opus-4-7
    relation: weaker
    note: "MCP-Atlas: GPT-5.5 75.3% vs 77.3% — 2pp deficit on MCP-heavy workflows"
---

**Summary** — GPT-5.5's documented weaknesses include SWE-bench Pro (–5.7pp vs Claude Opus 4.7), Humanity's Last Exam (–5.5pp vs Claude Opus 4.7, –3pp vs Gemini 3.1 Pro), and MCP-Atlas (–2pp vs Claude Opus 4.7). Within OpenAI's lineup it is not the recommended model for IDE-style agentic coding (gpt-5.3-codex). General failure modes include long-context recall degradation, tool-loop persistence on wrong paths, and over-refusal on security/dual-use topics.

**Specifics:**

**Benchmark deficits (verified):**
- **SWE-bench Pro:** GPT-5.5 **58.6%** vs Claude Opus 4.7 **64.3%** (–5.7pp). Hardest real-world software engineering benchmark; route to Claude Opus 4.7 here.
- **Humanity's Last Exam:** GPT-5.5 **41.4%** vs Claude Opus 4.7 **46.9%** (–5.5pp) and Gemini 3.1 Pro **44.4%** (–3pp). GPT-5.5 is last among three named frontier peers on this benchmark.
- **MCP-Atlas:** GPT-5.5 **75.3%** vs Claude Opus 4.7 **77.3%** (–2pp). Claude Opus 4.7 is preferred for MCP-heavy production workflows.

**Within-OpenAI routing limitation:**
- OpenAI's own prompt guidance names `gpt-5.3-codex` as the recommended agentic coding model for IDE workflows, apply_patch, multi-hour sessions, and compaction-heavy code tasks. GPT-5.5 is not the top OpenAI choice for those workflows.

**General degradation patterns:**
- **Long context:** may miss single facts buried in large irrelevant inputs; recency and repetition bias remain.
- **Code-heavy tasks:** may make plausible but incorrect edits if tests are absent; may overgeneralize from adjacent code.
- **Math/formal reasoning:** can produce invalid proof steps or arithmetic errors without verification tooling.
- **Tool loops:** can persist too long on an incorrect plan if the environment returns ambiguous results.
- **Web tasks:** can over-trust low-quality search results unless instructed to prioritize primary sources.
- **Structured output:** may satisfy JSON syntax while failing semantic constraints.

**Latency/timeout risks:**
- Large prompts, large output caps, high reasoning settings, and tool-heavy loops can cause high latency or timeouts.
- Batch API is inappropriate for interactive/latency-sensitive workflows.

**Prompting style mismatch risk:**
- GPT-5.4-style process-heavy XML contracts may produce suboptimal results on GPT-5.5. Migration to shorter, outcome-first prompts is required when upgrading from GPT-5.4.

**Known limitations on this axis:**
- SWE-bench Verified narrow lead (88.7% vs 87.6%) has contamination concerns per Dealbreaker; do not use it to counterbalance the SWE-bench Pro loss.

**Sources:**
- Dealbreaker benchmark log (all named scores)
- OpenAI _official-prompt-guidance.md (Dealbreaker-cited; prompting style, Codex routing)
