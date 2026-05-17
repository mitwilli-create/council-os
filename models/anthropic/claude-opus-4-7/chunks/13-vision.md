---
provider: anthropic
model: claude-opus-4-7
capability: vision
chunk_id: 13-vision
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: medium
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [vision, image-input, docvqa, ocr, computer-use, resolution]
related_chunks: [17-agentic-computer-use, 15-code-generation, 26-context-window, 40-unique-strengths, 41-known-limitations]
related_models: [openai/gpt-5-5, google/gemini-3-1-pro, anthropic/claude-opus-4-6]
peer_comparisons:
  - peer: google/gemini-3-1-pro
    relation: weaker
    note: "Gemini 3.1 Pro accepts video input natively; Opus 4.7 accepts images only."
  - peer: openai/gpt-5-5
    relation: weaker
    note: "GPT-5.5 accepts video input natively; Opus 4.7 accepts images only."
  - peer: anthropic/claude-opus-4-6
    relation: stronger
    note: "Opus 4.7 raised the per-image resolution ceiling to 3.75MP (~3× prior) and fixed computer_use screen-coordinate mapping errors."
---

**Summary** — Claude Opus 4.7 accepts image input at up to 2,576 pixels on the long edge (~3.75 megapixels), roughly 3× the prior Claude model ceiling. Improved screen-coordinate handling removes scale-factor errors that affected `computer_use` on Opus 4.6. DocVQA scores 93.0%; a preliminary single-source claim reports a 5–8 point lead on 50+ page PDF splits, but Anthropic has not published a first-party long-doc number — treat that sub-claim as unverified. No image generation. No video input.

**Specifics:**
- **Resolution ceiling:** 2,576 pixels on the long edge (~3.75 megapixels) — ~3× the per-image pixel budget of prior Claude models. Source: [Anthropic announcement](https://www.anthropic.com/news/claude-opus-4-7).
- **Screen-coordinate fix:** Coordinates in `computer_use` now map 1:1 with pixels, removing scale-factor errors from Opus 4.6. Source: [MindStudio breakdown](https://www.mindstudio.ai/blog/claude-opus-47-benchmark-breakdown).
- **DocVQA:** 93.0%. Source: [MindStudio breakdown](https://www.mindstudio.ai/blog/claude-opus-47-benchmark-breakdown).
- **Long-doc 50+ page PDF split lead:** MindStudio reports a 5–8 point lead — `[UNKNOWN — single third-party source only; Anthropic first-party long-doc number not published as of round-2 search]`. Do not route critical long-doc workloads based on this claim until corroborated.
- **No image generation.** No video input. Source: `_official-models-overview.md` line 19.
- **Cache note:** Toggling image presence in the prompt invalidates the messages cache. Source: `_official-tool-use-caching.md` line 71.

**Compared to peers (sharpened by Dealbreaker):**
- vs. google/gemini-3-1-pro: Gemini 3.1 Pro processes "1 hour of video in a single prompt" natively — a modality Opus 4.7 cannot match. For document-only workloads (images, PDFs), Opus 4.7 and Gemini 3.1 Pro are broadly comparable with the 93.0% DocVQA number as the only available Opus data point.
- vs. openai/gpt-5-5: GPT-5.5 accepts video input end-to-end; Opus 4.7 does not. No direct DocVQA comparison published for GPT-5.5 in round-2 verified sources.
- vs. anthropic/claude-opus-4-6: Opus 4.7 is materially better on vision via the 3× resolution increase and the coordinate-mapping fix for `computer_use`.

**Known limitations on this axis:**
- No video input — categorical gap vs. Gemini 3.1 Pro and GPT-5.5.
- Long-doc PDF lead (5–8 pts) is single-source and unverified by Anthropic first-party data. Treat as preliminary.
- Adding images to a prompt invalidates the messages cache — avoid toggling image presence between cached and uncached turns.

**Sources:**
- [Anthropic announcement — resolution ceiling](https://www.anthropic.com/news/claude-opus-4-7)
- [MindStudio breakdown — DocVQA + coordinate fix](https://www.mindstudio.ai/blog/claude-opus-47-benchmark-breakdown)
- [Google DeepMind Gemini 3.1 Pro model card via almcorp](https://almcorp.com/blog/gemini-3-1-pro-complete-guide/)
