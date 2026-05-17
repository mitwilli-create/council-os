---
provider: google
model: gemini-3-flash
capability: avoid-when
chunk_id: 44-avoid-when
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [routing, avoid, real-time-audio, coding, reasoning-ceiling, classification]
related_chunks:
  - 43-ideal-tasks
  - 41-known-limitations
  - 40-unique-strengths
related_models:
  - google/gemini-3-1-flash-live
  - anthropic/claude-opus-4-7
  - google/gemini-3-1-pro
  - google/gemini-3-1-flash-lite
peer_comparisons:
  - peer: google/gemini-3-1-flash-live
    relation: different-approach
    note: "Flash Live is the correct model for sub-400ms bidirectional audio; Flash is not a real-time voice model"
  - peer: anthropic/claude-opus-4-7
    relation: weaker
    note: "Opus 4.7 is the routing target for production-grade complex coding (87.6% vs 78% SWE-bench)"
  - peer: google/gemini-3-1-pro
    relation: weaker
    note: "Pro is the routing target for GPQA >92% or ARC-AGI-2 tasks where top accuracy is non-negotiable"
  - peer: google/gemini-3-1-flash-lite
    relation: weaker
    note: "Flash-Lite is 50% cheaper for simple classification and extraction tasks where 4-stage thinking control is not needed"
---

**Summary** — Route away from Gemini 3 Flash in five clear scenarios: real-time bidirectional audio, state-of-the-art complex coding, highest-accuracy math/science reasoning, simple high-throughput classification at minimal cost, and ultra-low-latency on-device extraction. Each has a named preferred alternative.

**Specifics:**
1. **Real-time Bidirectional Audio:** Route to **Gemini 3.1 Flash Live** for sub-400ms A2A/audio tasks. Flash (`gemini-3-flash-preview`) is not a real-time voice model and does not support the Live API. (Source: round-2-self-research.md section 5)
2. **State-of-the-art Coding:** Route to **Anthropic Claude Opus 4.7** (87.6% SWE-bench Verified vs Flash's 78%) for complex, codebase-wide refactoring or production-grade autonomous code repair. (Source: round-2-self-research.md sections 2 and 5)
3. **Highest-Complexity Math / Reasoning:** Route to **Gemini 3.1 Pro** for GPQA >92%, FrontierMath, or ARC-AGI-2 tasks where top accuracy is non-negotiable and budget allows. (Source: round-2-self-research.md section 5)
4. **Simple Classification at Scale:** Route to **Gemini 3.1 Flash-Lite** ($0.25/$1.50 per 1M — 50% cheaper than Flash) for high-throughput classification, extraction, or summarization where reasoning depth beyond `minimal` is not needed. (Source: round-2-self-research.md section 5)
5. **Ultra-Low Latency On-Device Extraction:** Route to **Nano Banana 2** for local/on-device speed requirements. Flash is a cloud-hosted API model. (Source: round-2-self-research.md section 7)

**Compared to peers (sharpened by Dealbreaker):**
- Each avoid-when has an explicit named routing target — no ambiguous "use a different model" recommendations.

**Known limitations on this axis:**
- GPT-5.5 was referenced in the round-2 self-research as a coding peer [INFERRED]; the R2 Dealbreaker flagged this as a hedge-laundering strike. GPT-5.5 SWE-bench comparisons are not verified — Opus 4.7 is the confirmed stronger peer on coding.

**Sources:**
- round-2-self-research.md sections 2, 5, and 7
- [BusinessAnalytics — SWE-bench](https://businessanalytics.substack.com/p/google-achieves-78-coding-accuracy)
