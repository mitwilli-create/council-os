---
provider: perplexity
model: sonar-deep-research
capability: avoid-when
chunk_id: 44-avoid-when
last_research_round: 3
last_updated: 2026-05-17
verified_by_dealbreaker: false
source_authority: self_research
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [routing, avoid-when, code, multimodal, tools, high-throughput, etl, latency-sensitive]
related_chunks: [43-ideal-tasks, 41-known-limitations, 40-unique-strengths, 22-rate-limits, 21-latency-throughput]
related_models: [perplexity/sonar-pro, perplexity/sonar-reasoning-pro, openai/gpt-5-5, google/gemini-3-1-pro, anthropic/claude-opus-4-7, xai/grok-4-3]
peer_comparisons:
  - peer: openai/gpt-5-5
    relation: weaker
    note: "Route to GPT-5.5 for: code/SE workflows, tool-integrated research, strict JSON ETL. SDR cannot compete on any of these axes."
  - peer: google/gemini-3-1-pro
    relation: weaker
    note: "Route to Gemini 3.1 Pro for: multimodal research (images, charts, audio, video), Google Cloud integration."
  - peer: anthropic/claude-opus-4-7
    relation: weaker
    note: "Route to Claude Opus 4.7 for: custom tool/API integration via MCP, private data, hard reasoning under specification."
  - peer: xai/grok-4-3
    relation: weaker
    note: "Route to Grok 4.3 DeepSearch for: adversarial fact-checking and falsification-focused research tasks."
---

**Summary** — Sonar Deep Research should NOT be the default routing target. Five task categories are hard avoids: (1) software engineering workflows; (2) multimodal research requiring vision, audio, or video; (3) agentic workflows needing custom tool/API calls; (4) high-throughput or latency-sensitive applications; (5) strict ETL / schema-perfect JSON extraction. Within Perplexity, most tasks belong to Sonar Pro or Sonar Reasoning Pro. Across providers, SDR rarely wins categories where peers have formal benchmark leads.

**Specifics:**

1. **Software engineering / coding** — No published code benchmarks. Qualitatively unreliable on multi-file refactoring, test-driven repair, or complex algorithm implementation. Route to: GPT-5.5 (Terminal-Bench 82.7%, SWE-Bench Pro 58.6%) or Claude Opus 4.7 (SWE-Bench Pro 64.3%).

2. **Multimodal research (images, charts, scientific figures, audio, video)** — SDR is text-only. Route to: Gemini 3.1 Pro or GPT-5.5 with vision for image/video; Claude Opus 4.7 for mixed vision + tool tasks.

3. **Agentic workflows requiring custom API calls or browser control** — SDR cannot call user-defined functions or operate external systems. Route to: Claude Opus 4.7 + MCP for custom tool integration; GPT-5.5 with functions for arbitrary API calls; OpenAI Computer Use or Anthropic computer-use agents for browser/OS control.

4. **High-throughput or latency-sensitive applications** — 5 RPM limit, 20–60+ second latency. SDR cannot serve customer support bots, real-time tutoring, coding autocomplete, or bulk processing at scale. Route to: Sonar or Sonar Pro for high-RPM Perplexity workloads; any lightweight high-RPM chat model for latency-critical use cases.

5. **Strict ETL / schema-perfect structured extraction** — SDR's JSON output is soft-constrained; schema fidelity degrades for complex schemas. No batch discount confirmed. Route to: GPT-5.5 in strict JSON mode; specialized extraction pipelines.

**Within-Perplexity routing when NOT SDR:**
- Conversational Q&A and brainstorming → Sonar
- Moderate-depth search and long-context document Q&A → Sonar Pro
- Logic-intensive problems without broad web search → Sonar Reasoning Pro
- Bulk summarization of known web pages → Sonar Pro

**Compared to peers (sharpened by Dealbreaker):**
- vs. openai/gpt-5-5: SDR is outmatched on code, tool use, and structured output. GPT-5.5 is the routing default for those categories.
- vs. google/gemini-3-1-pro: Gemini is the routing default for any multimodal research task.
- vs. anthropic/claude-opus-4-7: Claude is the routing default for custom tool/private data integration.
- vs. xai/grok-4-3: Grok is the routing choice for adversarial fact-checking (DRA benchmark lead: ~46.9% vs. SDR's ~32.7% on falsification).

**Known limitations on this axis:**
- The "avoid" categories are based on SDR's known architecture constraints and qualitative behavior, not head-to-head benchmarks on all listed task types.

**Sources:**
- R3 self-research §§7.2–7.4 (round-3-self-research.md)
- R3 §5.1–5.4 differentiation and peer comparator tables
- DRA benchmark paper (falsification subset)
