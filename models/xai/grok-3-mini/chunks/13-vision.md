---
provider: xai
model: grok-3-mini
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
related_chunks: [00-overview, 14-audio-multimodal]
related_models: [xai/grok-4-3, anthropic/claude-opus-4-7]
peer_comparisons:
  - peer: anthropic/claude-opus-4-7
    relation: different-approach
    note: "Opus 4.7 has a 3.75MP vision ceiling with documented OCR quality; grok-3-mini image resolution and OCR benchmarks are not publicly available."
  - peer: xai/grok-4-3
    relation: weaker
    note: "grok-4.3 supports native video input in addition to images; grok-3-mini supports images only."
---

**Summary** — Grok 3 Mini accepts image input (jpg/png formats confirmed). Resolution limits and OCR quality have not been benchmarked in public sources as of 2026-05-17. Vision capability is present but less documented than in flagship peers.

**Specifics:**
- **Image input:** supported (jpg/png). Source: Azure AI Foundry catalog entry.
- **Supported formats:** jpg, png confirmed; additional formats not documented publicly.
- **Resolution limits:** not published. [INFERRED] — assume standard web-resolution images work; very high-resolution document scans are untested.
- **OCR quality:** not benchmarked in public sources. Do not rely on grok-3-mini for high-accuracy document OCR without testing.
- **Video input:** not supported. Source: xAI model overview, May 2026.

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-opus-4-7: Opus 4.7 has a documented 3.75MP vision ceiling and tested OCR quality; grok-3-mini's image benchmarks are unpublished. Use Opus 4.7 when image quality and OCR accuracy are critical.
- vs. xai/grok-4-3: grok-4.3 adds native video understanding in addition to images. For video tasks, escalate to grok-4.3.

**Known limitations on this axis:**
- Resolution and OCR quality unquantified — test before deploying vision-intensive workflows.
- No video, audio, or document-type modalities beyond jpg/png images.

**Sources:**
- [Azure AI Foundry catalog](https://ai.azure.com/explore/models)
- [xAI model overview — May 2026](https://docs.x.ai/docs)
