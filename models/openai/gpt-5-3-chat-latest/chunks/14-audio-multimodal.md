---
provider: openai
model: gpt-5-3-chat-latest
capability: audio-multimodal
chunk_id: 14-audio-multimodal
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [audio, no-audio-support, no-video, routing-target, realtime]
related_chunks: [00-overview, 13-vision, 44-avoid-when]
related_models: [openai/gpt-realtime-2, openai/gpt-audio-1-5]
peer_comparisons:
  - peer: openai/gpt-realtime-2
    relation: different-approach
    note: "gpt-realtime-2 is the correct model for bi-directional audio; GPT-5.3 Chat has zero audio capability."
---

**Summary** — GPT-5.3 Chat does NOT support audio input, audio output, or video. Any speech, voice, or real-time audio use case must be routed to `gpt-realtime-2` (bi-directional audio) or `gpt-audio-1.5`. Video is also not supported on this model.

**Specifics:**
- Audio input: NOT SUPPORTED. (https://developers.openai.com/api/docs/models/gpt-5.3-chat-latest)
- Audio output: NOT SUPPORTED. (same)
- Video input: NOT SUPPORTED. [INFERRED — not listed on model page]
- Video output: NOT SUPPORTED. [INFERRED]
- Routing targets for audio: `gpt-realtime-2` (bi-directional streaming), `gpt-audio-1.5` (audio I/O). (Dealbreaker-cited OpenAI realtime/audio family)
- Routing targets for image generation: OpenAI Image generation model family (separate). [INFERRED]

**Compared to peers (sharpened by Dealbreaker):**
- vs. openai/gpt-realtime-2: gpt-realtime-2 is the purpose-built audio model; GPT-5.3 Chat cannot fulfill audio tasks at all.
- vs. google/gemini-3-1-pro: Gemini 3.1 Pro has native audio/video multimodal support; GPT-5.3 Chat has none. Significant capability gap for multimodal workloads.

**Known limitations on this axis:**
- Zero audio or video capability — this is a hard constraint, not a quality limitation.
- No workaround exists at the model level; must swap model for audio/video use cases.

**Sources:**
- [GPT-5.3 Chat model page](https://developers.openai.com/api/docs/models/gpt-5.3-chat-latest)
- [OpenAI realtime/audio family — Dealbreaker-cited]
