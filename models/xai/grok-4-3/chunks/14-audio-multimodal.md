---
provider: xai
model: grok-4-3
capability: audio-multimodal
chunk_id: 14-audio-multimodal
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 2
tags: [video-input, native-video, tts, stt, multimodal, speech]
related_chunks:
  - 13-vision
  - 00-overview
  - 40-unique-strengths
related_models:
  - xai/grok-4-20-multi-agent
  - anthropic/claude-opus-4-7
peer_comparisons:
  - peer: anthropic/claude-opus-4-7
    relation: stronger
    note: "Opus 4.7 does not have native video input; Grok 4.3 is the only xAI model at this price tier with native video understanding"
  - peer: google/gemini-3-1-pro
    relation: different-approach
    note: "Gemini 3.1 Pro supports video via File API; Grok 4.3 accepts video natively — different integration path, not a clear quality comparison"
---

**Summary** — Grok 4.3 is the first xAI model at cost-optimized pricing to ship native video input. Supported formats are mp4, mov, and webm up to 5 minutes at 1080p resolution. This is a verified, headline-announced capability per the xAI April 2026 launch. Separately, xAI offers dedicated STT (25 languages, batch + streaming, diarization) and TTS APIs at two pricing tiers ($4.20/1M chars for standalone 5-voice basic; $15/1M chars for model-card baseline). Native audio input in the base `grok-4.3` model is not supported — audio features are routed through the dedicated STT/TTS API surfaces.

**Specifics:**
- Native video input: mp4, mov, webm. Max duration 5 minutes. Max resolution 1080p. (Source: chatlyai.app, aicerts.ai; xAI launch announcement)
- Dedicated STT API: 25 languages, batch + streaming mode, speaker diarization. (Source: datastudios.org coverage)
- TTS pricing — two tiers (inline patch from round-2-verdict.yaml Strike B):
  - Standalone simple tier (5 voices): $4.20 per 1M characters
  - Model-card baseline tier: $15.00 per 1M characters
  - Use $15/1M for cost estimation baseline; $4.20 only for explicit standalone-TTS routing.
- No native audio input in base model (`grok-4.3`). Audio tasks require the dedicated STT endpoint. (Source: round-2-self-research.md section 2)

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-opus-4-7: Opus 4.7 does not support native video input. For video understanding tasks at this capability tier, Grok 4.3 is the cross-provider choice.
- vs. google/gemini-3-1-pro: Both handle video; Gemini uses the File API upload path. Grok 4.3 accepts video natively in-context. No published quality comparison for video understanding between the two.

**Known limitations on this axis:**
- Video beyond 5 minutes requires chunking or alternative approach — not documented.
- TTS pricing tier disambiguation is critical: use $15/1M for conservative cost planning, not $4.20.
- STT quality (WER, language accuracy) not benchmarked in public sources.

**Sources:**
- [chatlyai.app — Grok 4.3 Beta Video](https://chatlyai.app/news/xai-grok-4-3-beta-video)
- [aicerts.ai — native video confirmation](https://aicerts.ai)
- [datastudios.org — STT/TTS API coverage](https://datastudios.org)
- round-2-verdict.yaml Strike B (TTS pricing disambiguation)
