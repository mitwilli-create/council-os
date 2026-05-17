---
provider: perplexity
model: sonar-reasoning-pro
capability: audio-multimodal
chunk_id: 14-audio-multimodal
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 2
egoism_strikes_at_convergence: 1
tags: [audio, no-audio, text-only, multimodal, limitations]
related_chunks: [13-vision, 44-avoid-when]
related_models: [google/gemini-3-1-pro, openai/gpt-5-5]
peer_comparisons:
  - peer: google/gemini-3-1-pro
    relation: weaker
    note: "Gemini 3.1 Pro has native audio and video understanding via Live API and A2A. Sonar Reasoning Pro has none."
  - peer: openai/gpt-5-5
    relation: weaker
    note: "GPT-5.5 supports audio input/output. Sonar Reasoning Pro is text-only."
---

**Summary** — Sonar Reasoning Pro has no audio, video, or multimodal support of any kind. The Perplexity API for `sonar-reasoning-pro` is a text-in, text-out interface. There is no streaming microphone, Live API equivalent, or video frame ingestion.

**Specifics:**
- No audio input or output in the Perplexity API. `[INFERRED FROM DOCS LACKING ANY AUDIO PARAM]`
- No video understanding.
- No STT/TTS integration at the model layer.

**Compared to peers (sharpened by Dealbreaker):**
- vs. google/gemini-3-1-pro: Gemini 3.1 Pro has native audio understanding and real-time Live API. Sonar Reasoning Pro cannot compete on this axis.
- vs. openai/gpt-5-5: GPT-5.5 supports audio I/O. Route audio tasks there.

**Known limitations on this axis:**
- Hard absence. All audio/video work must be preprocessed into text before calling Sonar Reasoning Pro.

**Sources:**
- Absence of audio parameters in Perplexity API reference. `[INFERRED FROM DOCS]`
