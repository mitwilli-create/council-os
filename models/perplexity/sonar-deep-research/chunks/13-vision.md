---
provider: perplexity
model: sonar-deep-research
capability: vision
chunk_id: 13-vision
last_research_round: 3
last_updated: 2026-05-17
verified_by_dealbreaker: false
source_authority: self_research
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 2
tags: [vision, text-only, no-image-input, multimodal, routing]
related_chunks: [14-audio-multimodal, 41-known-limitations, 44-avoid-when]
related_models: [google/gemini-3-1-pro, openai/gpt-5-5, anthropic/claude-opus-4-7]
peer_comparisons:
  - peer: google/gemini-3-1-pro
    relation: weaker
    note: "Gemini 3.1 Pro supports image, audio, and video input natively. SDR is text-only."
  - peer: openai/gpt-5-5
    relation: weaker
    note: "GPT-4.1/GPT-5.5 with vision handles image inputs. SDR has no image encoder."
  - peer: anthropic/claude-opus-4-7
    relation: weaker
    note: "Claude Opus 4.7 supports image input at 3.75MP per image. SDR is text-only."
---

**Summary** — Sonar Deep Research is text-only. It has no image input support, no visual encoder, and no OCR capability. The R1 profile fabricated a "512×512 resolution limit" and "92% OCR accuracy" — both explicitly retracted in R2 and confirmed absent in R3. Perplexity's API schema for SDR accepts only textual prompts. Passing an image URL or base64 in the text prompt yields no useful output. Route all vision, OCR, and multimodal tasks to Gemini 3.1 Pro, GPT-4.1/5.5 with vision, or Claude Opus 4.7.

**Specifics:**
- Input modalities: text only. No `image_url`, `image_base64`, or media attachment parameters in SDR's API schema. [INFERRED from Perplexity API docs and aggregator model cards]
- Vision claims retracted: "512×512 resolution limit" and "92% OCR accuracy" from R1 were fabrications with no provider documentation or independent evaluation support.
- If an image URL is injected into a text prompt, SDR will attempt to interpret the URL text — it has no visual encoder and cannot parse pixels.
- Workflow for mixed vision + deep research: pass the image to a vision-capable model first (Gemini 3.1 Pro, GPT-5.5 with vision, Claude Opus 4.7) → extract text/description → pipe to SDR for deep web-grounded synthesis if needed.

**Compared to peers (sharpened by Dealbreaker):**
- vs. google/gemini-3-1-pro: Gemini is the routing default for any task involving images, diagrams, charts, or video frames.
- vs. openai/gpt-5-5: GPT-5.5 with image input handles scanned PDFs, charts, screenshots. SDR cannot.
- vs. anthropic/claude-opus-4-7: Claude Opus 4.7 supports high-resolution image input. Use Claude for document vision tasks before optionally piping to SDR.

**Known limitations on this axis:**
- Interpreting charts, scientific figures, scanned PDFs, or any pixel-based content: hard block — SDR is the wrong model entirely.

**Sources:**
- R3 self-research §2.4 (round-3-self-research.md)
- R1/R2 retraction history (round-2-verdict.yaml, s9_vision_ocr)
