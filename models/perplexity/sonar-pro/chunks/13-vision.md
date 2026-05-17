---
provider: perplexity
model: sonar-pro
capability: vision
chunk_id: 13-vision
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: self_research
confidence: low
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 1
tags: [vision, image-input, multimodal, text-only]
related_chunks: [41-known-limitations, 44-avoid-when]
related_models: [openai/gpt-5-5, anthropic/claude-4-7-opus, google/gemini-3-1-pro, xai/grok-4-3]
peer_comparisons:
  - peer: openai/gpt-5-5
    relation: weaker
    note: "GPT-5.5 has documented image input support at the API level. Sonar Pro API does not clearly document vision endpoints."
  - peer: anthropic/claude-4-7-opus
    relation: weaker
    note: "Claude 4.x explicitly supports image input via the Messages API. Sonar Pro API does not."
  - peer: google/gemini-3-1-pro
    relation: weaker
    note: "Gemini 3.1 Pro supports image, audio, and video input. Sonar Pro is text-only at the API level."
---

**Summary** — Sonar Pro's API surface is text-only as of mid-2026. Perplexity's consumer product supports image upload, but this capability is not clearly documented as part of the Sonar Pro API. For any task involving image interpretation, OCR, diagram analysis, or visual layout understanding, route to a model with documented API-level vision support.

**Specifics:**
- Perplexity consumer product: supports image input (users can "ask about this image" in the web/mobile product).
- Sonar Pro API: no clearly documented, general-purpose image-input endpoint as of mid-2026. [UNKNOWN — would need direct confirmation from Perplexity for API vision]
- Treat Sonar Pro as text-only for API integrations unless an integration explicitly confirms image support.

**Compared to peers (sharpened by Dealbreaker):**
- vs. openai/gpt-5-5: GPT-5.5 has documented image input in the API. Route vision tasks there.
- vs. anthropic/claude-4-7-opus: Claude 4.x explicitly supports image input via the Messages API (base64 or URL). Route vision tasks there.
- vs. google/gemini-3-1-pro: Gemini 3.1 Pro supports image, audio, and video natively. Route vision tasks there.
- vs. xai/grok-4-3: Grok 4.3 explicitly supports image input. Route vision tasks there.

**Known limitations on this axis:**
- API-level vision support is not confirmed. Do not assume consumer-product image features translate to API capabilities.
- OCR, diagram parsing, chart reading, and any pixel-level visual tasks are out of scope for Sonar Pro at the API level.

**Sources:**
- Sonar Pro API documentation and OpenRouter/AIML API integration docs (text chat with web search, no image schema observed)
- [UNKNOWN — would need direct Perplexity confirmation for API vision]
