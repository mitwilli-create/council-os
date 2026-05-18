---
provider: xai
model: grok-3-mini
capability: audio-multimodal
chunk_id: 14-audio-multimodal
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [audio, video, multimodal, not-supported]
related_chunks: [00-overview, 13-vision, 44-avoid-when]
related_models: [xai/grok-4-3, google/gemini-3-1-pro, openai/gpt-5-5]
peer_comparisons:
  - peer: xai/grok-4-3
    relation: weaker
    note: "grok-4.3 supports native video input; grok-3-mini does not support video or audio."
  - peer: google/gemini-3-1-pro
    relation: weaker
    note: "Gemini 3.1 Pro supports native audio and video within its 1M context; grok-3-mini supports neither."
  - peer: openai/gpt-5-5
    relation: weaker
    note: "GPT-5.5 supports audio input/output natively; grok-3-mini does not."
---

**Summary** — Grok 3 Mini does not support native audio or video input or output. It is a text-and-image-only model. This is a categorical gap versus flagship multimodal peers. Do not route audio or video tasks to this model.

**Specifics:**
- **Audio input:** not supported. Source: xAI model overview, May 2026.
- **Audio output (TTS):** not supported.
- **Video input:** not supported. Source: xAI model overview, May 2026.
- **Native live/streaming audio:** not supported.

**Compared to peers (sharpened by Dealbreaker):**
- vs. xai/grok-4-3: grok-4.3 adds native video understanding — a direct escalation path for video tasks.
- vs. google/gemini-3-1-pro: Gemini 3.1 Pro supports audio and video natively within 1M context; grok-3-mini has no equivalent. For audio/video workloads, Gemini or GPT-5.5 are the appropriate choices.
- vs. openai/gpt-5-5: GPT-5.5 supports audio modalities; grok-3-mini does not.

**Known limitations on this axis:**
- No audio or video modality — categorical missing capability.
- Any workflow requiring audio transcription, audio generation, or video understanding must use a different model.

**Sources:**
- [xAI model overview — May 2026](https://docs.x.ai/docs)
