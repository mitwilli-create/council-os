---
provider: xai
model: grok-4.20-multi-agent
capability: vision
chunk_id: 13-vision
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: self_research
confidence: medium
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [vision, image-input, ocr, multimodal]
related_chunks: [14-audio-multimodal, 41-known-limitations]
related_models: [xai/grok-4-3, google/gemini-3-1-pro, anthropic/claude-opus-4-7]
peer_comparisons:
  - peer: google/gemini-3-1-pro
    relation: weaker
    note: "Gemini 3.1 Pro supports video input; Grok 4.20 MA is image-only (jpg/png, up to ~20 MiB)."
  - peer: anthropic/claude-opus-4-7
    relation: comparable
    note: "Both support image input for OCR and visual analysis. Specific resolution/quality comparisons are [UNKNOWN]."
---

**Summary** — Grok 4.20 Multi-Agent supports image input (jpg/png, up to approximately 20 MiB) for OCR and visual analysis. No video input is supported. This is a categorical gap vs. Gemini 3.1 Pro, which has native video understanding.

**Specifics:**
- Supported formats: jpg, png.
- Size limit: up to approximately 20 MiB per image.
- Use cases: OCR on scanned documents, diagram analysis, visual Q&A.
- No video input: tasks requiring video understanding fail. Route to Gemini 3.1 Pro.
- No native audio input (see chunk 14-audio-multimodal).

**Compared to peers (sharpened by Dealbreaker):**
- vs. google/gemini-3-1-pro: Gemini supports video input; Grok 4.20 MA does not. Categorical gap for video-grounded tasks.
- vs. anthropic/claude-opus-4-7: Both support image input. Quality comparison on OCR/diagram tasks is [UNKNOWN].
- vs. openai/gpt-5-5: Both support image input. Quality comparison is [UNKNOWN].

**Known limitations on this axis:**
- jpg/png only; no gif, webp, tiff, or raw formats confirmed.
- No video input — hard gap vs. Gemini 3.1 Pro.
- Image quality benchmarks for this specific variant are [UNKNOWN — would need a benchmark].

**Sources:**
- xAI official models overview (internal reference `_official-models-overview.md` line 40)
