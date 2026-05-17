---
provider: anthropic
model: claude-haiku-4-5
capability: vision
chunk_id: 13-vision
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: self_research
confidence: low
sycophancy_strikes_at_convergence: 5
egoism_strikes_at_convergence: 0
tags: [vision, image-input, ocr, multimodal]
related_chunks: [17-agentic-computer-use, 16-long-context]
related_models:
  - anthropic/claude-sonnet-4-6
peer_comparisons:
  - peer: anthropic/claude-sonnet-4-6
    relation: comparable
    note: "Assumed comparable image-input capability; pixel-budget specifics not verified for Haiku 4.5 vs Sonnet (R2 open minor strike S4)."
---

**Summary** — Claude Haiku 4.5 supports image input as part of Anthropic's multimodal Claude 4 family. The R2 self-research profile does not document pixel-budget limits or resolution caps for Haiku specifically — this was flagged as an open minor strike (S4) in the Dealbreaker verdict. OSWorld 50.7% implies functional screenshot/UI understanding for computer-use tasks, but detailed vision specs are pending.

**Specifics:**
- Image input: supported (inferred from Claude 4 family multimodal baseline and OSWorld benchmark context)
- Pixel budget / resolution limits: not documented in R2 profile [open minor omission, Dealbreaker S4]
- OCR quality: not benchmarked in R2 profile
- Computer-use screenshot understanding: implied by OSWorld 50.7% performance (Anthropic-published, Oct 15, 2025); Haiku can interpret UI screenshots in agentic scaffolds
- Formats: JPEG, PNG, GIF, WEBP supported across Claude family (Anthropic standard)

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-sonnet-4-6: comparable multimodal surface assumed; pixel-budget differences unverified — do not assume Haiku matches Sonnet's vision ceiling without testing

**Known limitations on this axis:**
- Pixel-budget and resolution caps not confirmed for Haiku 4.5 specifically (S4 residual from Dealbreaker)
- No dedicated vision benchmark (e.g., MMBench, MMMU) cited in R2 profile
- PDF visual understanding not documented for this version

**Sources:**
- [Anthropic Claude Haiku 4.5 announcement](https://www.anthropic.com/news/claude-haiku-4-5)
- [Anthropic vision docs](https://docs.anthropic.com/en/docs/build-with-claude/vision)
