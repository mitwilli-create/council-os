---
provider: perplexity
model: sonar-deep-research
capability: reasoning
chunk_id: 10-reasoning
last_research_round: 3
last_updated: 2026-05-17
verified_by_dealbreaker: false
source_authority: self_research
confidence: medium
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [reasoning, benchmarks, simpleqa, hle, dra, chain-of-thought]
related_chunks: [12-web-grounding, 43-ideal-tasks, 44-avoid-when, 40-unique-strengths, 41-known-limitations]
related_models: [openai/gpt-5-5, google/gemini-3-1-pro, perplexity/sonar-reasoning-pro]
peer_comparisons:
  - peer: openai/gpt-5-5
    relation: weaker
    note: "GPT-5.5 leads on formal reasoning benchmarks (GPQA-Diamond, ARC-AGI); SDR has no published scores in those domains."
  - peer: perplexity/sonar-reasoning-pro
    relation: comparable
    note: "Sonar Reasoning Pro is better for heavy reasoning without broad web search needs; SDR adds search overhead and cost without a reasoning gain for logic-only tasks."
---

**Summary** — Sonar Deep Research reasons multi-step over retrieved web content, producing long-form synthesis. Perplexity reports SimpleQA 93.9% and HLE 21.1% for the end-to-end Deep Research system. The DRA paper places Perplexity's deep research pipeline at ~32.7% on Type-II structural reasoning and ~19.9% average — solidly mid-pack, not apex. There is no publicly exposed "thinking level" or reasoning-effort knob; depth adapts internally. Hard limits emerge on formal proof, symbolic math, and code-heavy reasoning where dedicated reasoning models dominate.

**Specifics:**
- SimpleQA: 93.9% (Perplexity-reported, for the full pipeline, not isolated LLM). [INFERRED — provider self-report]
- Humanity's Last Exam (HLE): 21.1% (Perplexity-reported). [INFERRED — provider self-report]
- DRA benchmark paper: Perplexity deep research stack ~32.7% on Type-II structural reasoning, ~19.9% average across all system-types in the study. Grok Deep Research led the falsification subset at ~46.9%; Gemini-3 Pro DR and Qwen DR scored ~5.0% and ~4.1% respectively on that subset. [INFERRED — third-party study focused on Sonar Pro stack, not SDR directly]
- Reasoning tokens are billed separately at $3/M — evidence that the pipeline performs internal chain-of-thought steps, but Perplexity does not expose a user-facing reasoning-effort parameter. [INFERRED — Perplexity pricing docs]
- "Thinking-level 1–5" parameter described in R1 profile was a fabrication; explicitly retracted. No such parameter exists.
- Adaptive step count: the orchestration layer decides how many searches and reasoning steps to take based on internal cost/latency heuristics, not user-controlled budget.

**Compared to peers (sharpened by Dealbreaker):**
- vs. openai/gpt-5-5: GPT-5.5 has published GPQA-Diamond and ARC-AGI scores; SDR has none. For hard formal reasoning unrelated to web synthesis, prefer GPT-5.5.
- vs. google/gemini-3-1-pro: Gemini 3.1 Pro scored 44.4% on HLE vs. SDR's 21.1% — a 23-point gap, though both are system-level figures and may reflect different task coverage. [INFERRED from Spectrum AI Lab]
- vs. perplexity/sonar-reasoning-pro: Sonar Reasoning Pro is cheaper and designed for logic-intensive tasks that don't need extensive web search. Route there rather than SDR when the bottleneck is reasoning depth, not source breadth.
- Perplexity's own Q1 2025 marketing comparison (outperforming o3-mini, o1, Gemini Thinking, DeepSeek-R1) is now dated — those models have been superseded. Treat it as historical, not as current frontier evidence.

**Known limitations on this axis:**
- Published benchmark scores (SimpleQA, HLE) are end-to-end system figures, not isolated LLM capability signals.
- DRA study tested Sonar Pro stack; SDR-specific reasoning scores do not exist as of R3.
- Formal proof, multi-step algebra, competition math — SDR produces plausible but unreliable outputs; cross-check against external ground truth required.

**Sources:**
- R3 self-research §2.1 (round-3-self-research.md)
- DRA benchmark paper (cited in R3 §2.1)
- Perplexity marketing comparison flagged as Q1 2025 vintage
