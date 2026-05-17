---
provider: perplexity
model: sonar-deep-research
capability: ideal-tasks
chunk_id: 43-ideal-tasks
last_research_round: 3
last_updated: 2026-05-17
verified_by_dealbreaker: false
source_authority: self_research
confidence: medium
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [routing, ideal-tasks, literature-review, policy-analysis, market-intel, synthesis, web-grounding]
related_chunks: [40-unique-strengths, 44-avoid-when, 12-web-grounding, 20-pricing, 22-rate-limits]
related_models: [perplexity/sonar-pro, perplexity/sonar-reasoning-pro, openai/gpt-5-5, google/gemini-3-1-pro]
peer_comparisons:
  - peer: perplexity/sonar-pro
    relation: stronger
    note: "For the five ideal-task categories below, SDR's search fan-out and synthesis depth are worth the 5–10× cost premium over Sonar Pro. For all other tasks, Sonar Pro should be used."
  - peer: openai/gpt-5-5
    relation: comparable
    note: "GPT-5.5 with browsing overlaps on ideal tasks 1–3; SDR's advantage is turnkey Perplexity integration and citation UI. GPT-5.5 is better when the research output also requires code or tool use."
---

**Summary** — Route to Sonar Deep Research only when all three conditions hold: (a) the query explicitly warrants exhaustive multi-source synthesis; (b) the user can accept 20–60+ second latency; (c) cost premium over Sonar Pro is justified by breadth of coverage required. Within Perplexity's lineup, SDR should handle a minority of queries — the escalation tier. The five primary ideal-task categories are listed below. The Sonar Pro vs. SDR crossover decision is the most critical routing judgment for Perplexity ecosystem users.

**Specifics:**

1. **Comprehensive literature and landscape reviews** — "Summarize the current state of research on foundation models for protein design: key papers, open challenges, emerging directions." SDR can search across preprints, blogs, conference proceedings, and commentary to produce a multi-thousand-token synthesis with citations. Ideal when breadth of source coverage matters more than speed or cost.

2. **Multi-jurisdiction policy and regulatory analysis** — "Compare data localization requirements in India, Brazil, and the EU for cloud service providers." SDR's search fan-out covers official documents, expert commentary, and news simultaneously. Produces citation-dense structured comparisons.

3. **Competitive and market intelligence (open-sourceable scope)** — "Overview of recent product launches and strategic moves in the vector database market (vendors X, Y, Z)." SDR aggregates press releases, blog posts, and technical documentation. Useful for internal planning; not appropriate for NDA-protected or proprietary sources.

4. **Cross-disciplinary synthesis** — "How have advances in reinforcement learning influenced modern recommender systems and online advertising?" Tasks requiring coherent weaving of knowledge from multiple domains where web-sourced material is rich.

5. **Educational explainers with source references** — "Beginner guide to zk-SNARKs with links to foundational papers and tutorials." SDR surfaces varied resources while providing coherent explanations.

**Sibling crossover guidance (Sonar Pro vs. SDR — centerpiece decision for Perplexity users):**
- Use Sonar Pro if: moderate search depth is sufficient, user wants results in seconds, cost sensitivity exists, or the task is document Q&A on user-supplied content.
- Use Sonar Reasoning Pro if: the bottleneck is complex reasoning without broad web search needs.
- Use SDR if: the task requires breadth-first web exploration across many sources and the user explicitly wants a deep research report and will wait for it.
- Escalation pattern: start with Sonar Pro; upgrade to SDR only when Sonar Pro returns insufficient coverage or depth.

**Compared to peers (sharpened by Dealbreaker):**
- vs. perplexity/sonar-pro: SDR is the escalation target; Sonar Pro handles 90%+ of Perplexity workloads cheaper and faster.
- vs. openai/gpt-5-5: For ideal tasks 1–3, GPT-5.5 with browsing is a credible alternative. Use GPT-5.5 when the research must feed downstream code generation or tool use.
- vs. google/gemini-3-1-pro: For ideal tasks involving scientific literature with figures/charts, Gemini is better (multimodal). SDR is text-only.

**Known limitations on this axis:**
- No benchmark evidence that SDR outperforms peers on these five categories; routing recommendations are based on design envelope alignment and qualitative behavior, not head-to-head task benchmarks.
- Cost is unpredictable — ideal tasks 1–3 may trigger extensive searches and high reasoning token counts.

**Sources:**
- R3 self-research §§7.1–7.4 (round-3-self-research.md)
- R3 §5.3 sibling differentiation table
