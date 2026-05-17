---
provider: anthropic
model: claude-opus-4-7
capability: ideal-tasks
chunk_id: 43-ideal-tasks
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [routing, ideal-tasks, swe-bench-pro, mcp-atlas, computer-use, hle, long-doc]
related_chunks: [40-unique-strengths, 41-known-limitations, 44-avoid-when, 15-code-generation, 17-agentic-computer-use, 10-reasoning]
related_models: [openai/gpt-5-5, google/gemini-3-1-pro, anthropic/claude-sonnet-4-6, anthropic/claude-haiku-4-5]
peer_comparisons:
  - peer: openai/gpt-5-5
    relation: stronger
    note: "On SWE-bench Pro, HLE, and MCP-Atlas — the three primary routing signals for ideal Opus 4.7 tasks."
  - peer: google/gemini-3-1-pro
    relation: stronger
    note: "On SWE-bench Pro and HLE; not on audio/video tasks."
---

**Summary** — Route to Claude Opus 4.7 when the task falls into one of five categories where its benchmark leads are clear and cost-justified: (1) multi-file agentic refactoring with a correctness-only test suite; (2) multi-turn MCP tool-calling agents with ≥5 tools; (3) long-document OCR / forensic PDF review at 50+ pages; (4) desktop GUI automation via `computer_use`; or (5) hard graduate-level reasoning under tight specification. Below those thresholds, Sonnet 4.6 or Haiku 4.5 should be preferred.

**Specifics:**

1. **Multi-file agentic refactoring with a test suite to verify against.**
   - SWE-bench Pro 64.3% — 5.7 pts over GPT-5.5 (58.6%) and 10.1 pts over Gemini 3.1 Pro (54.2%).
   - Caveat: real-world UX-weighted benchmarks can flip to Sonnet 4.6 (Tyler Folkman: Sonnet 68/100 vs. Opus 63/100 at 40% lower cost). Route here only when the rubric weights correctness over UX.
   - Sources: [Scale Labs SWE-bench Pro leaderboard](https://labs.scale.com/leaderboard/swe_bench_pro_public); [Anthropic announcement](https://www.anthropic.com/news/claude-opus-4-7).

2. **Multi-turn MCP tool-calling agents with ≥5 tools where tool-call accuracy compounds across turns.**
   - MCP-Atlas 77.3% — 2.0 pts over GPT-5.5 (75.3%). `defer_loading` preserves prefix cache during tool discovery.
   - Re-evaluate routing if the task is single-turn or has fewer than ~5 tools — the lead shrinks.
   - Sources: [Vellum benchmark roundup](https://www.vellum.ai/blog/claude-opus-4-7-benchmarks-explained); [renovateqr GPT-5.5 review](https://renovateqr.com/blog/gpt-5-5-review-benchmarks-2026).

3. **Long-document OCR / forensic PDF review of 50+ page documents at full resolution (3.75MP per image).**
   - DocVQA 93.0%; MindStudio reports 5–8 point lead on 50+ page split (single source, preliminary).
   - Do not rely on this routing signal until Anthropic publishes a first-party long-doc number.
   - Source: [MindStudio breakdown](https://www.mindstudio.ai/blog/claude-opus-47-benchmark-breakdown).

4. **Desktop GUI automation via the first-party `computer_use` tool.**
   - OSWorld-Verified 78.0% vs. GPT-5.4 75.0%. GPT-5.5 OSWorld score `[UNKNOWN]` — re-evaluate when published.
   - Sources: [MindStudio breakdown](https://www.mindstudio.ai/blog/claude-opus-47-benchmark-breakdown); [Vellum](https://www.vellum.ai/blog/claude-opus-4-7-benchmarks-explained).

5. **Hard graduate-level reasoning under tight specification.**
   - Humanity's Last Exam 46.9% — 5.5 pts over GPT-5.5 (41.4%) and 2.5 pts over Gemini 3.1 Pro (44.4%).
   - Source: [Spectrum AI Lab](https://spectrumailab.com/blog/gemini-3-1-pro-vs-claude-opus-4-7-vs-gpt-5-5-decision-framework-2026).

**Compared to peers (sharpened by Dealbreaker):**
- vs. openai/gpt-5-5: Opus 4.7 is the routing choice for SWE-bench-Pro-class refactoring, MCP-Atlas-class multi-turn tooling, and HLE-class reasoning. GPT-5.5 is the routing choice for terminal agents and multi-page web research.
- vs. google/gemini-3-1-pro: Opus 4.7 is the routing choice for code and reasoning tasks. Gemini is the routing choice when the task involves audio or video input.
- vs. anthropic/claude-sonnet-4-6: Use Opus 4.7 only when the task exceeds Sonnet 4.6's capability on hard correctness benchmarks. Sonnet 4.6 routes most general work at 40% lower cost.

**Known limitations on this axis:**
- Ideal-task #3 (long-doc OCR) is single-source — treat as provisional routing until corroborated.
- Ideal-task #4 (desktop GUI) may lose its lead vs. GPT-5.5 when OSWorld-Verified score publishes for GPT-5.5.
- Even on SWE-bench Pro, Sonnet 4.6 can beat Opus 4.7 on UX-weighted real-world coding — use the right rubric for routing.

**Sources:**
- [Scale Labs SWE-bench Pro leaderboard](https://labs.scale.com/leaderboard/swe_bench_pro_public)
- [Vellum benchmark roundup](https://www.vellum.ai/blog/claude-opus-4-7-benchmarks-explained)
- [Spectrum AI Lab — HLE](https://spectrumailab.com/blog/gemini-3-1-pro-vs-claude-opus-4-7-vs-gpt-5-5-decision-framework-2026)
- [MindStudio breakdown](https://www.mindstudio.ai/blog/claude-opus-47-benchmark-breakdown)
- [Tyler Folkman Substack](https://tylerfolkman.substack.com/p/i-tested-opus-47-against-sonnet-46)
