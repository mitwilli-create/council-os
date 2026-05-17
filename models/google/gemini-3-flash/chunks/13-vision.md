---
provider: google
model: gemini-3-flash
capability: vision
chunk_id: 13-vision
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [vision, multimodal, ocr, mmmu-pro, media-resolution]
related_chunks:
  - 40-unique-strengths
  - 43-ideal-tasks
  - 16-long-context
related_models:
  - google/gemini-3-1-pro
  - anthropic/claude-opus-4-7
peer_comparisons:
  - peer: google/gemini-3-1-pro
    relation: stronger
    note: "Flash scores ~81.2% MMMU-Pro, slightly edging out Gemini 3.1 Pro in this specific modality"
---

**Summary** — Gemini 3 Flash delivers Google's top vision performance at non-Pro pricing. It scores ~81.2% on MMMU-Pro, slightly exceeding Gemini 3.1 Pro in this specific modality. A dedicated `media_resolution` parameter (`low`, `medium`, `high`, `ultra_high`) lets callers trade OCR accuracy against token cost — a capability absent from most competing models. This makes it the recommended routing target for high-volume document OCR workflows where Pro-level vision quality is required without Pro-level pricing.

**Specifics:**
- MMMU-Pro benchmark: ~81.2% — Google's highest-performing vision model and slightly above Gemini 3.1 Pro on this specific benchmark. (Source: [Google Blog](https://blog.google/products-and-platforms/products/gemini/gemini-3-flash/))
- `media_resolution` parameter: `low`, `medium`, `high`, `ultra_high`. Controls per-image token cost vs. OCR accuracy. (Source: round-2-self-research.md section 2)
- Supports native multimodal processing: images, PDFs, video frames within the 1M context window.
- Ideal for high-fidelity OCR extraction from large scanned document archives using `media_resolution: high`.

**Compared to peers (sharpened by Dealbreaker):**
- vs. google/gemini-3-1-pro: Flash slightly outperforms Pro on MMMU-Pro (~81.2% vs. Pro's score). For vision-heavy workflows at scale, Flash is the more cost-effective routing target.
- vs. google/gemini-3-1-flash-lite: Flash-Lite does not document equivalent `media_resolution` control or MMMU-Pro performance; Flash is preferred for OCR-critical pipelines.

**Known limitations on this axis:**
- `ultra_high` resolution setting increases token consumption significantly — callers must budget for this when processing large image sets.
- Video understanding latency scales with frame count and context depth.

**Sources:**
- [Google Blog — Gemini 3 Flash](https://blog.google/products-and-platforms/products/gemini/gemini-3-flash/)
- round-2-self-research.md section 2 (Vision)
