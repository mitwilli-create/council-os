---
provider: anthropic
model: claude-sonnet-4-6
capability: avoid-when
chunk_id: 44-avoid-when
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 5
egoism_strikes_at_convergence: 5
tags: [routing, avoid, when-not-to-use, alternatives]
related_chunks: [40-unique-strengths, 43-ideal-tasks, 41-known-limitations]
related_models: [anthropic/claude-opus-4-7, anthropic/claude-haiku-4-5, google/gemini-3-1-pro, openai/gpt-5-5]
peer_comparisons:
  - peer: google/gemini-3-1-pro
    relation: weaker
    note: "Graduate-level science (GPQA Diamond): Gemini 3.1 Pro 94.3% vs. Sonnet 4.6 89.9% max effort. For precise scientific calculations, route to Gemini 3.1 Pro."
  - peer: openai/gpt-5-5
    relation: weaker
    note: "Audio and video input: GPT-5.5 has native audio and video; Sonnet 4.6 has none. Any audio/video pipeline routes to GPT-5.5."
  - peer: anthropic/claude-opus-4-7
    relation: weaker
    note: "High-stakes GUI automation, maximum-quality agentic coding (87.6% vs. 79.6% SWE-bench), and multi-turn MCP orchestration (77.3% vs. 61.3% MCP-Atlas) route to Opus 4.7."
  - peer: anthropic/claude-haiku-4-5
    relation: weaker
    note: "Simple high-volume latency-critical tasks under 200k tokens: Haiku 4.5 is 3x cheaper and fastest-class. Route to Haiku when the 6.3-point SWE-bench gap is acceptable."
---

**Summary** — Five routing scenarios where Sonnet 4.6 should NOT be used, with explicit alternatives. Each has a hard benchmark or structural reason, not a vague preference statement.

**Specifics:**

**Avoid 1 — Graduate-level scientific reasoning (GPQA-class tasks) requiring certainty:**
Route to **Gemini 3.1 Pro** (94.3% GPQA Diamond) or **Opus 4.7** (94.2%). At no-thinking baseline, Sonnet 4.6 is at 74.1% — 1 in 4 graduate-level science questions wrong. At max adaptive thinking effort, 89.9% — still ~10% error rate. For advanced physics, formal mathematical proofs, and scientific derivations requiring high certainty, the 4–5 point GPQA gap is operationally significant.

**Avoid 2 — Audio or video input processing:**
Route to **GPT-5.5**. Sonnet 4.6 accepts images only (JPEG, PNG, GIF, WEBP). No native audio input, no native audio output, no video input. GPT-5.5 and Gemini 3.1 Pro both support native audio/video modalities that Sonnet 4.6 does not. There is no workaround within the Anthropic model family.

**Avoid 3 — High-stakes GUI automation where hallucinated success is unacceptable:**
Route to **Claude Opus 4.7**. The over-eagerness failure mode — claiming task completion when underlying actions fail — is documented and more pronounced in Sonnet 4.6 than Opus 4.6. Source: [rootly.com](https://rootly.com/blog/claude-sonnet-4-6-benchmark-results-and-lessons-for-ai-sre). Any GUI automation pipeline where false success confirmation causes downstream damage should use Opus 4.7 with explicit confirmation gates.

**Avoid 4 — Simple, high-volume, latency-critical tasks under 200k tokens:**
Route to **Haiku 4.5**. At $1/$5 per MTok (3x cheaper), "Fastest" latency class, and SWE-bench Verified 73.3% (only 6.3 points below Sonnet 4.6 at one-third the price), Haiku 4.5 dominates this segment. Route to Haiku when the marginal cost-per-call delta exceeds the expected value of the 6.3-point pass-rate improvement. Above 200k tokens: Haiku 4.5 cannot be used.

**Avoid 5 — Multi-step agentic coding with maximum quality ceiling OR multi-turn MCP orchestration at scale:**
Route to **Claude Opus 4.7**. Opus 4.7 leads SWE-bench Verified by 8 points (87.6% vs. 79.6%), SWE-bench Pro by an unknown margin (64.3% vs. no Sonnet 4.6 score), and MCP-Atlas by 16 points (77.3% vs. 61.3%). When task-failure cost is high and the 1.67x price premium is justified, Opus 4.7 is the correct choice. Above ~5 chained tools with compounding error: Opus 4.7.

**Compared to peers (sharpened by Dealbreaker):**
- vs. google/gemini-3-1-pro: Prefer Gemini 3.1 Pro for GPQA-class science and for real-time web grounding (native Google Search integration). Sonnet 4.6 has no integrated search and trails by ~4.4 points at max thinking effort on GPQA.
- vs. openai/gpt-5-5: Prefer GPT-5.5 for all audio/video tasks and where GDPval 84.9% knowledge-work ceiling matters.
- vs. anthropic/claude-opus-4-7: Prefer Opus 4.7 for tasks where SWE-bench 8-point gap, GPQA 4-point gap, MCP-Atlas 16-point gap, or synchronous 128k output are operationally required.
- vs. anthropic/claude-haiku-4-5: Prefer Haiku 4.5 when task is under 200k tokens, latency is critical, and quality floor is acceptable at 73.3% SWE-bench Verified.

**Known limitations on this axis:**
- The 5 avoid scenarios listed cover the clearest routing cases. Mixed workloads (some tasks within Sonnet's strengths, some requiring Opus 4.7) require per-call routing logic.

**Sources:**
- [morphllm.com — GPQA Diamond scores](https://www.morphllm.com/claude-benchmarks)
- [artificialanalysis.ai — GPQA 89.9% max effort](https://artificialanalysis.ai/models/claude-sonnet-4-6-adaptive)
- [rootly.com — GUI over-eagerness](https://rootly.com/blog/claude-sonnet-4-6-benchmark-results-and-lessons-for-ai-sre)
- [Vellum — Opus 4.7 benchmarks](https://www.vellum.ai/blog/claude-opus-4-7-benchmarks-explained)
- [nxcode.io — MCP-Atlas 61.3%](https://www.nxcode.io/resources/news/claude-sonnet-4-6-complete-guide-benchmarks-pricing-2026)
- [MarkTechPost — GPT-5.5 audio/video](https://www.marktechpost.com/2026/04/23/openai-releases-gpt-5-5-a-fully-retrained-agentic-model-that-scores-82-7-on-terminal-bench-2-0-and-84-9-on-gdpval/)
