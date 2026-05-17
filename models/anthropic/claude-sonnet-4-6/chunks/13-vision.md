---
provider: anthropic
model: claude-sonnet-4-6
capability: vision
chunk_id: 13-vision
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: medium
sycophancy_strikes_at_convergence: 5
egoism_strikes_at_convergence: 5
tags: [vision, image-input, ocr, multimodal, screenshot]
related_chunks: [16-long-context, 18-structured-output]
related_models: [anthropic/claude-opus-4-7, openai/gpt-5-5, google/gemini-3-1-pro]
peer_comparisons:
  - peer: openai/gpt-5-5
    relation: weaker
    note: "GPT-5.5 supports native audio and video input in addition to images. Sonnet 4.6 is image-only; no audio or video modality."
  - peer: google/gemini-3-1-pro
    relation: weaker
    note: "Gemini 3.1 Pro supports native video and audio alongside images. Sonnet 4.6 is image-only."
---

**Summary** — Claude Sonnet 4.6 accepts image input alongside text for standard vision tasks: OCR, diagram reading, screenshot analysis, and structured extraction from visual documents. Supported formats are JPEG, PNG, GIF, and WEBP. Multi-image inputs are supported within the context window. There is no native video or audio input modality.

**Specifics:**
- Accepts image input: JPEG, PNG, GIF, WEBP formats. (Documented in official models overview — not inferred.)
- Standard OCR and text extraction from images.
- Diagram and chart reading.
- Screenshot analysis with structured output extraction.
- Multi-image inputs supported within the 1M token context window.
- Concrete use case: parsing a complex financial table screenshot and producing structured JSON output.

**Compared to peers (sharpened by Dealbreaker):**
- vs. openai/gpt-5-5: GPT-5.5 accepts native audio and video alongside images. Sonnet 4.6 is image-only. For audio transcription, video understanding, or interleaved audio+video tasks, route to GPT-5.5.
- vs. google/gemini-3-1-pro: Gemini 3.1 Pro supports native video and audio input. For video understanding or multimodal pipelines requiring more than images, route to Gemini 3.1 Pro.
- vs. anthropic/claude-opus-4-7: Both models are image-input only within Anthropic's family. Vision capability parity within the Claude 4.x family — routing between Sonnet 4.6 and Opus 4.7 on vision is driven by other axes (cost, reasoning quality).

**Known limitations on this axis:**
- No native video input.
- No native audio input.
- No benchmarked vision quality score (e.g., MMBench, MMMU) found in the converged profile — confidence medium rather than high.

**Sources:**
- [Anthropic Official Models Overview](https://platform.claude.com/docs/en/about-claude/models/overview)
