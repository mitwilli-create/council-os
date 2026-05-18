---
provider: google
model: gemini-3-1-flash-lite
capability: vision
chunk_id: 13-vision
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [vision, multimodal, ocr, image-tagging, media-resolution]
related_chunks: [00-overview, 40-unique-strengths, 43-ideal-tasks]
related_models: [google/gemini-3-1-pro, google/gemini-3-flash]
peer_comparisons:
  - peer: google/gemini-3-1-pro
    relation: comparable
    note: "Shared multimodal architecture — consistent image ingestion capabilities; Pro may apply higher reasoning depth to image interpretation tasks."
---

**Summary** — Gemini 3.1 Flash-Lite supports native multimodal image input with `media_resolution` parameters (`low`, `medium`, `high`, `ultra_high`). Critically, a prior false claim that Flash-Lite had lower resolution processing than siblings was corrected at Dealbreaker Round 1 — the model shares the same image ingestion architecture as Pro and Flash, ensuring consistent ingestion capability. Cost advantage makes it particularly attractive for high-volume image batch processing.

**Specifics:**
- Native multimodal image input supported. Source: `_official-gemini-3-api.md lines 132-140`.
- `media_resolution` parameter supported with four levels: `low`, `medium`, `high`, `ultra_high`. Source: `_official-gemini-3-api.md lines 132-140`.
- Shared architecture with Pro and Flash: consistent ingestion capabilities (the claim of "lower resolution processing" for Flash-Lite was a fabrication struck at R1 — see verdict S2.5).
- Example ideal task: Batch processing of product images for metadata tagging at scale.
- Audio and video ingestion also natively supported (transcription, video summarization at scale).

**Compared to peers (sharpened by Dealbreaker):**
- vs. google/gemini-3-1-pro: Equivalent image ingestion capability; Pro applies deeper reasoning to complex visual interpretation tasks. For pure ingestion + simple tagging/OCR at volume, Flash-Lite's 8× cost advantage is decisive.
- vs. google/gemini-3-flash: Equivalent vision architecture; Flash-Lite preferred for high-volume simple vision tasks, Flash for tasks needing `thinking_level: medium` on ambiguous images.

**Known limitations on this axis:**
- No documented limitations specific to Flash-Lite's vision capability vs siblings — shared architecture applies.
- For tasks requiring deep visual reasoning (e.g., complex diagram interpretation, multi-image comparison), the reasoning depth limitation of `thinking_level: minimal` default may limit output quality.

**Sources:**
- `_official-gemini-3-api.md lines 132-140` (media_resolution, multimodal input)
- round-2-verdict.yaml (strike S2.5: "lower resolution processing" fabrication corrected)
