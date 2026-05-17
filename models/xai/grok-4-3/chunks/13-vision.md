---
provider: xai
model: grok-4-3
capability: vision
chunk_id: 13-vision
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: self_research
confidence: low
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [vision, image-input, ocr, multimodal]
related_chunks:
  - 14-audio-multimodal
  - 00-overview
related_models:
  - anthropic/claude-opus-4-7
  - google/gemini-3-1-pro
peer_comparisons:
  - peer: anthropic/claude-opus-4-7
    relation: comparable
    note: "Both support image input with OCR; resolution limits and MMMU-Pro scores for Grok 4.3 are unverified — cannot quantify the gap"
  - peer: google/gemini-3-flash
    relation: different-approach
    note: "Gemini 3 Flash has a verified MMMU-Pro score (~81.2%); Grok 4.3's vision benchmark score is not publicly available"
---

**Summary** — Grok 4.3 supports image input with OCR capability. Resolution limits are not specified in public documentation as of round 2. No MMMU-Pro or equivalent vision benchmark score is publicly available for Grok 4.3. Vision is a documented capability but not a verified differentiator — native video input (in chunk 14) is the more distinctive multimodal claim for this model version.

**Specifics:**
- Image input with OCR supported. (Source: [INFERRED FROM PROVIDER DOCS] — xAI multimodal API surface)
- Resolution limits unspecified in public sources. ([UNKNOWN — would need official confirmation])
- Suitable for: document extraction, image-to-text, chart reading. (Source: round-2-self-research.md section 2)
- No MMMU-Pro or public vision benchmark score found for `grok-4.3` in round-2 research. ([UNKNOWN — would need a benchmark])

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-opus-4-7: Both handle image input and OCR; no cross-model vision benchmark comparison available for Grok 4.3.
- vs. google/gemini-3-flash: Gemini 3 Flash has a verified MMMU-Pro benchmark. Grok 4.3 does not — routing decision on vision quality cannot be benchmarked yet.

**Known limitations on this axis:**
- Resolution caps not documented.
- No verified vision quality benchmarks (MMMU-Pro, DocVQA, or similar) for Grok 4.3.

**Sources:**
- round-2-self-research.md section 2 (Vision)
- xAI developer docs (multimodal API surface — [INFERRED])
