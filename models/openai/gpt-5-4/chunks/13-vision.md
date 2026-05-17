---
provider: openai
model: gpt-5-4
capability: vision
chunk_id: 13-vision
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: medium
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [vision, image, ocr, multimodal, computer-use]
related_chunks: [17-agentic-computer-use, 14-audio-multimodal, 41-known-limitations]
related_models: []
peer_comparisons: []
---

**Summary** — GPT-5.4 accepts images in multimodal workflows. The key documented operational fact is that `detail: auto` is unreliable for OCR and computer-use scenarios — callers must specify the required detail level explicitly. Resolution ceilings and full capability bounds are not in the supplied source set.

**Specifics:**
- Image input is supported; OpenAI prompt guidance includes a concrete warning about the `detail` parameter, confirming practical image understanding is in scope. ([OpenAI prompt guidance](https://developers.openai.com/api/docs/guides/prompt-guidance))
- **`detail: auto` is unreliable for OCR/computer-use quality.** The prompt must specify the required image detail level explicitly. ([OpenAI prompt guidance](https://developers.openai.com/api/docs/guides/prompt-guidance))
- Concrete strong task: OCR-like extraction from screenshots or UI interpretation when the caller explicitly requests high detail and narrow output structure.
- Maximum resolution ceilings: **[UNKNOWN — would need model card/spec page]**.

**Compared to peers (sharpened by Dealbreaker):**
- No benchmark comparisons on vision specifically available in the supplied source set.

**Known limitations on this axis:**
- `detail: auto` is explicitly called out as a failure mode by OpenAI — do not rely on it for OCR or computer-use tasks.
- Full resolution spec is not confirmed in supplied sources; test high-res use cases before assuming parity with frontier vision models.

**Sources:**
- [OpenAI prompt guidance](https://developers.openai.com/api/docs/guides/prompt-guidance)
