---
provider: anthropic
model: claude-opus-4-7
capability: avoid-when
chunk_id: 44-avoid-when
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [routing, avoid, terminal-bench, browsecomp, audio, triage, cost-routing]
related_chunks: [40-unique-strengths, 41-known-limitations, 43-ideal-tasks, 20-pricing, 21-latency-throughput]
related_models: [openai/gpt-5-5, google/gemini-3-1-pro, anthropic/claude-sonnet-4-6, anthropic/claude-haiku-4-5]
peer_comparisons:
  - peer: openai/gpt-5-5
    relation: weaker
    note: "Terminal-Bench 2.0 (-13.3 pts) and BrowseComp (-10.8 pts) — route those task classes to GPT-5.5."
  - peer: google/gemini-3-1-pro
    relation: different-approach
    note: "Any task requiring audio input, video input, or audio output — Opus 4.7 cannot accept these modalities."
  - peer: anthropic/claude-haiku-4-5
    relation: weaker
    note: "High-volume bounded classification/triage: Haiku 4.5 is 80% cheaper with no material quality loss for bounded tasks."
  - peer: anthropic/claude-sonnet-4-6
    relation: weaker
    note: "Real-world full-stack coding with UX/maintainability rubric: Sonnet 4.6 scored 68/100 vs. Opus 4.7 63/100 at 40% lower cost."
---

**Summary** — Do NOT route to Claude Opus 4.7 for five task classes where other models are decisively better: (1) unattended long-running terminal/shell agents → GPT-5.5; (2) multi-page web research / browse synthesis → GPT-5.5; (3) audio input, video input, or audio output → Gemini 3.1 Pro or GPT-5.5; (4) high-volume classification / triage / single-shot extraction → Claude Haiku 4.5; (5) real-world full-stack coding where the rubric weights UX/maintainability → Claude Sonnet 4.6.

**Specifics:**

1. **Unattended long-running terminal / shell agents → use GPT-5.5.**
   - Terminal-Bench 2.0: GPT-5.5 82.7% vs. Opus 4.7 69.4% — 13.3-point gap. This is a large, routing-relevant delta, not noise.
   - Sources: [MarkTechPost coverage](https://www.marktechpost.com/2026/04/23/openai-releases-gpt-5-5-a-fully-retrained-agentic-model-that-scores-82-7-on-terminal-bench-2-0-and-84-9-on-gdpval/); [llm-stats Terminal-Bench leaderboard](https://llm-stats.com/benchmarks/terminal-bench-2).

2. **Multi-page web research / browse synthesis → use GPT-5.5.**
   - BrowseComp: GPT-5.5 Pro 90.1% vs. Opus 4.7 79.3% — 10.8-point gap. Also routing-relevant.
   - Sources: [BuildFastWithAI GPT-5.5 review](https://www.buildfastwithai.com/blogs/gpt-5-5-review-2026); [Vellum benchmark roundup](https://www.vellum.ai/blog/claude-opus-4-7-benchmarks-explained).

3. **Audio input / video input / audio output → use Gemini 3.1 Pro or GPT-5.5.**
   - Opus 4.7 is text + image input, text output only — a categorical capability gap.
   - Gemini 3.1 Pro: "natively processes text, images, audio, video" — 8.4 hours audio or 1 hour video per prompt. Source: [Google DeepMind Gemini 3.1 Pro model card via almcorp](https://almcorp.com/blog/gemini-3-1-pro-complete-guide/).
   - GPT-5.5: "unifies text, image, audio, and video in a single architecture." Source: [OpenAI Introducing GPT-5.5](https://openai.com/index/introducing-gpt-5-5/).

4. **High-volume classification / triage / single-shot extraction → use Claude Haiku 4.5.**
   - Haiku 4.5 is 80% cheaper ($1/$5 vs. $5/$25 per MTok). Per-1,000-item delta at 5k input / 500 output: Opus 4.7 ≈ $31; Haiku ≈ $7.50 — ~$23.50 savings per 1,000 items.
   - Haiku 4.5 still supports Extended thinking (which Opus 4.7 lost).
   - Route crossover: when the task is bounded and verifiable AND per-call quality delta is below ~10 points on the task's own rubric AND volume exceeds ~100 calls per session.

5. **Real-world full-stack coding where rubric weights UX / maintainability → use Claude Sonnet 4.6.**
   - Tyler Folkman 7-category custom benchmark (terminal UI for disk-usage visualization): Sonnet 4.6 68/100 vs. Opus 4.7 63/100 at 40% lower cost.
   - Cost delta: 50k input / 5k output → Opus 4.7 ≈ $0.375; Sonnet 4.6 ≈ $0.225 — Sonnet saves $0.15/call.
   - Also route to Sonnet 4.6 when: (a) task fits inside 64k output tokens AND has a well-scoped acceptance test, OR (b) effective context need exceeds ~555k words (Sonnet 4.6 holds ~750k words in 1M tokens).
   - Source: [Tyler Folkman Substack](https://tylerfolkman.substack.com/p/i-tested-opus-47-against-sonnet-46).

**Compared to peers (sharpened by Dealbreaker):**
- vs. openai/gpt-5-5: The two avoid-when gaps (Terminal-Bench, BrowseComp) are measured and large. These are not qualitative judgments — route away from Opus 4.7 for these task classes.
- vs. google/gemini-3-1-pro: Audio/video is a categorical gap — Gemini is the only viable option for those input modalities in the Council.
- vs. anthropic/claude-haiku-4-5: For bounded high-volume tasks, the 80% cost savings with no material quality loss make Haiku the default routing choice.
- vs. anthropic/claude-sonnet-4-6: For most general-purpose work, Sonnet 4.6 is the routing default — 40% cheaper, more effective context per token, retains Extended-thinking.

**Known limitations on this axis:**
- GPT-5.5's OSWorld-Verified score is unknown — if published and Opus 4.7's desktop-GUI lead erodes, add desktop GUI automation to this avoid-when list.
- Sonnet 4.6 SWE-bench Pro score is unpublished — the routing crossover between Opus 4.7 and Sonnet 4.6 on hard coding tasks is benchmarked only on the Pro split (Sonnet score unknown).

**Sources:**
- [MarkTechPost — Terminal-Bench 2.0](https://www.marktechpost.com/2026/04/23/openai-releases-gpt-5-5-a-fully-retrained-agentic-model-that-scores-82-7-on-terminal-bench-2-0-and-84-9-on-gdpval/)
- [llm-stats Terminal-Bench leaderboard](https://llm-stats.com/benchmarks/terminal-bench-2)
- [BuildFastWithAI — BrowseComp](https://www.buildfastwithai.com/blogs/gpt-5-5-review-2026)
- [almcorp — Gemini 3.1 Pro audio/video](https://almcorp.com/blog/gemini-3-1-pro-complete-guide/)
- [OpenAI — GPT-5.5 modalities](https://openai.com/index/introducing-gpt-5-5/)
- [Tyler Folkman Substack — Sonnet vs. Opus real-world coding](https://tylerfolkman.substack.com/p/i-tested-opus-47-against-sonnet-46)
