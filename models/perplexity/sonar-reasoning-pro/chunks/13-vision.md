---
provider: perplexity
model: sonar-reasoning-pro
capability: vision
chunk_id: 13-vision
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 2
egoism_strikes_at_convergence: 1
tags: [vision, no-vision, text-only, limitations, multimodal]
related_chunks: [14-audio-multimodal, 44-avoid-when]
related_models: [google/gemini-3-1-pro, openai/gpt-5-5, anthropic/claude-opus-4-7]
peer_comparisons:
  - peer: google/gemini-3-1-pro
    relation: weaker
    note: "Gemini 3.1 Pro has native image, video, and audio understanding. Sonar Reasoning Pro is text-only. Any vision task routes away from Sonar Reasoning Pro."
  - peer: openai/gpt-5-5
    relation: weaker
    note: "GPT-5.5 supports vision (image input). Sonar Reasoning Pro does not."
  - peer: anthropic/claude-opus-4-7
    relation: weaker
    note: "Opus 4.7 supports image input and document vision. Sonar Reasoning Pro is text-only."
---

**Summary** — Sonar Reasoning Pro is text-only. It does not accept image inputs, cannot perform OCR, and has no native diagram or PDF-image understanding. Any vision or multimodal preprocessing must occur upstream via a separate model or tool, with results fed into Sonar Reasoning Pro as text.

**Specifics:**
- No image input parameter in the Perplexity API for `sonar-reasoning-pro`. ([PromptHub model card](https://www.prompthub.us/models/sonar-reasoning-pro))
- No OCR, no diagram interpretation, no PDF image extraction.
- Vision must be handled upstream (e.g., a separate vision model) before calling Sonar Reasoning Pro.

**Compared to peers (sharpened by Dealbreaker):**
- vs. google/gemini-3-1-pro: Gemini 3.1 Pro natively ingests images, video frames, and audio. No comparison on this axis — Sonar Reasoning Pro is absent.
- vs. openai/gpt-5-5: GPT-5.5 supports vision. Route multimodal tasks there.
- vs. anthropic/claude-opus-4-7: Opus 4.7 supports image input and document vision (PDF images). Route there for vision-dependent reasoning.

**Known limitations on this axis:**
- Hard absence: no workaround within the model. Must use a separate vision model if image understanding is required.

**Sources:**
- [PromptHub model card — no vision](https://www.prompthub.us/models/sonar-reasoning-pro)
- Absence of image parameters in Perplexity API reference. `[INFERRED FROM DOCS]`
