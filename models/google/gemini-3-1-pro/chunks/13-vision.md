---
provider: google
model: gemini-3-1-pro
capability: vision
chunk_id: 13-vision
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: medium
sycophancy_strikes_at_convergence: 4
egoism_strikes_at_convergence: 1
tags: [vision, image-input, ocr, multimodal, spatial]
related_chunks:
  - 16-long-context
  - 40-unique-strengths
  - 41-known-limitations
related_models:
  - anthropic/claude-opus-4-7
peer_comparisons:
  - peer: anthropic/claude-opus-4-7
    relation: comparable
    note: "Both support native image interleaving and OCR. No head-to-head vision benchmark in the converged profile."
---

**Summary** — Gemini 3.1 Pro natively interleaves images and text within its 1M token context window, supporting spatial mapping and OCR across multiple images simultaneously. Image input is fully multimodal — not a bolt-on capability. The model does not support native API image generation; generating images requires routing to separate models (Veo 3.1 or Nano Banana 2). Resolution limits and per-image token costs are not documented in the converged profile.

**Specifics:**
- Native image input: images are processed inline with text in a single context pass; multiple images can be processed simultaneously. (Source: profile Section 2, https://ai.google.dev/docs/gemini_api/vision)
- Spatial mapping: can perform coordinate-level spatial reasoning across images. (Source: profile Section 2)
- OCR: can extract tabulated data from low-contrast technical diagrams. (Source: profile Section 2)
- Native image generation: NOT supported. Prompting native API image edits triggers 400 errors if metadata signatures are missing. Generating images requires routing to Veo 3.1 or Nano Banana 2. (Source: profile Section 2, Section 6)
- Example task: extracting tabulated data from a low-contrast technical diagram; multi-image spatial analysis. (Source: profile Section 2)

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-opus-4-7: comparable on image input and OCR. No head-to-head vision accuracy benchmark was included in the converged profile. Both models process images natively in context.
- Image generation: both Gemini 3.1 Pro and Claude Opus 4.7 require separate models/APIs for image generation — this is not a distinguishing gap.

**Known limitations on this axis:**
- No native image generation — requires routing to Veo 3.1 or Nano Banana 2. Attempting native image edits via the standard API triggers 400 errors if metadata signatures are missing. (Source: profile Section 2 and 6)
- Resolution limits and per-image token cost: not documented in the converged profile. (Source: profile)
- Video processing extracts frames at a fixed fps — does not cleanly interpret 60fps high-motion nuance. (Source: profile Section 2 audio/multimodal)

**Sources:**
- [Gemini API vision documentation](https://ai.google.dev/docs/gemini_api/vision)
- [Veo 3.1 image generation routing](https://ai.google.dev)
