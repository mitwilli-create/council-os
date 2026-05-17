---
provider: anthropic
model: claude-opus-4-7
capability: code-generation
chunk_id: 15-code-generation
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [code, swe-bench, agentic-coding, hallucination, instruction-literalism]
related_chunks: [10-reasoning, 11-tool-use, 17-agentic-computer-use, 40-unique-strengths, 41-known-limitations, 44-avoid-when]
related_models: [openai/gpt-5-5, google/gemini-3-1-pro, anthropic/claude-sonnet-4-6, anthropic/claude-haiku-4-5]
peer_comparisons:
  - peer: openai/gpt-5-5
    relation: stronger
    note: "SWE-bench Pro (harder split): Opus 4.7 64.3% vs. GPT-5.5 58.6% — 5.7-point lead. On the easier SWE-bench Verified split, GPT-5.5 leads (88.7% vs. 87.6%) but both numbers are suspect due to benchmark saturation."
  - peer: google/gemini-3-1-pro
    relation: stronger
    note: "SWE-bench Pro: Opus 4.7 64.3% vs. Gemini 3.1 Pro 54.2% — 10.1-point lead."
  - peer: anthropic/claude-sonnet-4-6
    relation: different-approach
    note: "On UX/maintainability-weighted real-world coding benchmarks, Sonnet 4.6 scored 68/100 vs. Opus 4.7 63/100 (Tyler Folkman 7-category test) at 40% lower cost. On SWE-bench Pro (test-correctness-only), Opus 4.7 leads but Sonnet 4.6 score is unpublished."
---

**Summary** — Code generation is Anthropic's stated headline improvement in Opus 4.7, driven by a SWE-bench Pro jump from 53.4% (Opus 4.6) to 64.3% — leading GPT-5.5 (58.6%) and Gemini 3.1 Pro (54.2%) among publicly-available frontier models. The improvement comes with a documented regression: Opus 4.7 is substantially better at following instructions literally, which means prompts written for earlier models can produce unexpected results. There is also an elevated hallucination rate for specific-looking code identifiers (commit SHAs, file paths, PR numbers).

**Specifics:**
- **SWE-bench Pro (harder split):** Opus 4.7 64.3% vs. GPT-5.5 58.6% vs. Gemini 3.1 Pro 54.2%. Claude Mythos Preview leads at 77.8% but is invitation-only. Sources: [Anthropic announcement](https://www.anthropic.com/news/claude-opus-4-7); [Scale Labs SWE-bench Pro leaderboard](https://labs.scale.com/leaderboard/swe_bench_pro_public); [BuildFastWithAI GPT-5.5 review](https://www.buildfastwithai.com/blogs/gpt-5-5-review-2026).
- **SWE-bench Pro jump:** 53.4% → 64.3% from Opus 4.6 → 4.7. Source: [Anthropic announcement](https://www.anthropic.com/news/claude-opus-4-7).
- **SWE-bench Verified (easier split):** GPT-5.5 leads at 88.7% vs. Opus 4.7 87.6%. Both numbers suspect — benchmark saturation; treat as tied within noise. Source: [marc0.dev leaderboard May 2026](https://www.marc0.dev/en/leaderboard).
- **Tyler Folkman real-world benchmark (7-category, terminal UI for disk-usage visualization):** Sonnet 4.6 68/100 vs. Opus 4.7 63/100 — Sonnet won at 40% lower cost. Source: [Tyler Folkman Substack](https://tylerfolkman.substack.com/p/i-tested-opus-47-against-sonnet-46).
- **Instruction-literalism regression (Anthropic-acknowledged):** "Opus 4.7 is substantially better at following instructions. Interestingly, this means that prompts written for earlier models can sometimes now produce unexpected results." Source: [Anthropic announcement](https://www.anthropic.com/news/claude-opus-4-7).
- **Hallucination rate on code identifiers:** Fabricated commit SHAs, file paths, PR numbers stated with same confidence as verified facts. Source: [claude-code GitHub issue #50235](https://github.com/anthropics/claude-code/issues/50235) (opened April 18, 2026, confirmed live in round-2 spot-check).

**Compared to peers (sharpened by Dealbreaker):**
- vs. openai/gpt-5-5: Opus 4.7 leads SWE-bench Pro by 5.7 points (64.3% vs. 58.6%). The harder Pro split is the more reliable signal — Verified is saturated.
- vs. google/gemini-3-1-pro: Opus 4.7 leads SWE-bench Pro by 10.1 points (64.3% vs. 54.2%).
- vs. anthropic/claude-sonnet-4-6: For UX/maintainability-weighted real-world coding, Sonnet 4.6 can beat Opus 4.7 at 40% lower cost (Tyler Folkman result). For hard multi-file refactoring with correctness-only rubrics, Opus 4.7 leads on SWE-bench Pro (Sonnet 4.6 Pro score is unpublished). Route via the task rubric, not model tier.

**Known limitations on this axis:**
- Fabricated code identifiers (commit SHAs, file paths, PR numbers) at high confidence — verify outputs against actual repo state before using.
- Prompts written for Opus 4.6 may produce unexpected results due to improved instruction-literalism — test migrated prompts explicitly.
- Sonnet 4.6 can beat Opus 4.7 on real-world full-stack tasks — use Sonnet when the rubric weights UX/maintainability.
- New tokenizer inflates token count 1.0–1.35× vs. Opus 4.6 — token-counting code must be recalibrated.

**Sources:**
- [Anthropic announcement — SWE-bench Pro jump, instruction-literalism](https://www.anthropic.com/news/claude-opus-4-7)
- [Scale Labs SWE-bench Pro leaderboard](https://labs.scale.com/leaderboard/swe_bench_pro_public)
- [BuildFastWithAI — GPT-5.5 SWE-bench scores](https://www.buildfastwithai.com/blogs/gpt-5-5-review-2026)
- [marc0.dev leaderboard May 2026 — SWE-bench Verified](https://www.marc0.dev/en/leaderboard)
- [Tyler Folkman Substack — Sonnet 4.6 vs. Opus 4.7](https://tylerfolkman.substack.com/p/i-tested-opus-47-against-sonnet-46)
- [claude-code GitHub issue #50235 — hallucinations](https://github.com/anthropics/claude-code/issues/50235)
