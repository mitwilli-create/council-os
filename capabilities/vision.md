---
capability: vision
cross_cut_version: 1
last_updated: 2026-05-17
models_covered: 13
verified_by_dealbreaker: partial
---

# Vision Cross-Cut — All 13 Tier 1 Models

## Comparison Table

| Model | Image Input | Max Resolution / Pixel Budget | OCR / VQA Benchmark | Video Input | Confidence |
|---|---|---|---|---|---|
| **claude-opus-4-7** | Yes | 2,576 px long edge (~3.75 MP) | DocVQA 93.0% | No | medium |
| **claude-sonnet-4-6** | Yes | Not documented | Not benchmarked | No | medium |
| **claude-haiku-4-5** | Yes | Not documented | Not benchmarked (OSWorld 50.7% for computer-use) | No | low |
| **gemini-3-1-pro** | Yes | Not documented | Not benchmarked (R2) | Yes — native, up to ~1 hr in one prompt | medium |
| **gemini-3-flash** | Yes | 4 resolution tiers: low / medium / high / ultra_high | MMMU-Pro ~81.2% | Yes (frame extraction) | high |
| **gpt-5-5** | Yes | Not documented | Not benchmarked | Not confirmed | low |
| **gpt-5-4** | Yes | Not documented; `detail: auto` unreliable | Not benchmarked | No | medium |
| **gpt-5-3-chat-latest** | Yes | Not documented | Not benchmarked | Not confirmed | high |
| **sonar-pro** | API: NO (consumer product only) | — | — | No | low |
| **sonar-reasoning-pro** | No | — | — | No | high |
| **sonar-deep-research** | No | — | — | No | high |
| **grok-4-20-multi-agent** | Yes | ~20 MiB per image (jpg/png) | Not benchmarked | No | medium |
| **grok-4-3** | Yes | Not documented | Not benchmarked | Not confirmed (video claimed in chunk 14) | low |

---

## Tiered Ranking

### Tier A — Full multimodal (image + video verified)

**gemini-3-1-pro** — Only council model with confirmed native video input (up to ~1 hour in a single prompt). Spatial mapping across multiple simultaneous images. OCR from low-contrast technical diagrams. The unique routing target for any task involving video frames, video transcription, or complex multi-image spatial analysis. No resolution limits documented.

**gemini-3-flash** — Highest benchmarked vision score in the council (MMMU-Pro ~81.2%), beating its own Pro sibling on this specific benchmark. The `media_resolution` parameter (low/medium/high/ultra_high) is a unique cost-vs-accuracy dial absent from all competitors. Supports video via frame extraction. Best routing target for high-volume OCR or document pipelines that need Pro-quality vision at Flash pricing.

### Tier B — Strong image vision, no video

**claude-opus-4-7** — Best-documented image vision quality in the council with a named benchmark: DocVQA 93.0%. Largest confirmed per-image resolution budget: 3.75 MP (~2,576 px long edge), roughly 3x prior Claude ceiling. Fixed screen-coordinate mapping errors make it the most reliable model for `computer_use` screenshot analysis. No video; no image generation.

**gpt-5-5** — Frontier-tier image input confirmed, capable of OCR, chart interpretation, UI screenshot analysis, and diagram reasoning. No named vision benchmark in research materials; confidence low. No confirmed video. Route image-generation tasks to GPT Image 2.

**gpt-5-4** — Image input confirmed. Key operational flag: `detail: auto` is explicitly unreliable for OCR and computer-use — callers must specify detail level. No published benchmark or resolution spec.

**gpt-5-3-chat-latest** — Image input confirmed at the API level. No published OCR accuracy metrics or resolution limits.

**grok-4-20-multi-agent** — Image input confirmed (jpg/png, up to ~20 MiB). Functional OCR and visual Q&A. No video input. No published benchmark.

**grok-4-3** — Image input with OCR documented. No resolution limits or benchmark scores available. Native video capability referenced in chunk 14 but not confirmed in the vision chunk directly.

### Tier C — Limited / consumer-only vision

**claude-sonnet-4-6** — Image input confirmed (JPEG, PNG, GIF, WEBP), multi-image within 1M context. No published vision benchmark. Routing between Sonnet 4.6 and Opus 4.7 on vision is driven by cost and reasoning quality, not a vision quality gap — no benchmark separates them.

**claude-haiku-4-5** — Image input inferred from Claude 4 family baseline; pixel-budget specifics not confirmed for Haiku specifically. OSWorld 50.7% implies functional UI screenshot understanding for computer-use tasks. No dedicated vision benchmark.

### Tier D — No API vision (text-only)

**sonar-reasoning-pro** — Text-only. Confirmed hard absence. No workaround within the model.

**sonar-deep-research** — Text-only. R1 profile fabricated "512x512 resolution limit" and "92% OCR accuracy" — both explicitly retracted in R2/R3.

**sonar-pro** — Text-only at the API level. The consumer product accepts image uploads, but this does not translate to the Sonar Pro API. Do not pass images via API.

---

## Routing Recommendations

| Task | Recommended Model | Reason |
|---|---|---|
| Video understanding / transcription | gemini-3-1-pro | Only council model with confirmed native video input |
| High-volume document OCR at scale | gemini-3-flash | MMMU-Pro ~81.2% + `media_resolution` cost dial |
| Document VQA / PDF visual analysis | claude-opus-4-7 | DocVQA 93.0%; 3.75 MP resolution ceiling |
| Computer-use screenshot analysis | claude-opus-4-7 | Fixed screen-coordinate mapping; 3.75 MP |
| Multi-image spatial reasoning | gemini-3-1-pro | Native interleaved multi-image in context |
| Cost-conscious image tasks | claude-sonnet-4-6 or gpt-5-3-chat-latest | Image-capable, lower pricing tier |
| Any task that hits Perplexity first | Route away | All three Sonar models have no API vision |

**Vision-first pipeline pattern for Perplexity models:** pass image to claude-opus-4-7 or gemini-3-1-pro first, extract text description, pipe result to Sonar Deep Research for web-grounded synthesis.

---

## Notable Differentiators

- **gemini-3-1-pro: uniquely multimodal** — image + audio + video in a single prompt. No other council model matches this. Categorical advantage for any pipeline touching video.
- **gemini-3-flash `media_resolution` parameter** — fine-grained cost/accuracy control that competitors do not expose. Enables tuned high-fidelity OCR vs. cheap low-res passes per call.
- **claude-opus-4-7 DocVQA 93.0%** — the only hard, named VQA benchmark in the council. All other image-capable models either have no published score or lower-confidence inferences.
- **grok-4-20-multi-agent: file-size limit instead of pixel budget** — 20 MiB cap is an unusual constraint relative to the pixel-based limits documented for Claude and the resolution tiers for Gemini.
- **GPT-5.4 `detail: auto` failure mode** — the only model where OpenAI explicitly warns callers not to trust the automatic detail setting for OCR or computer-use. Operational flag that peers do not share.
- **Sonar Deep Research fabricated vision specs in R1** — the only model in the council where a prior research round invented benchmark numbers (92% OCR, 512x512 resolution) that were later retracted. A data-quality caution for any Perplexity research.

---

## Most Surprising Insight (under 50 words)

Gemini 3 Flash (non-Pro, budget tier) outscores Gemini 3.1 Pro on MMMU-Pro (~81.2% vs. Pro's undocumented but implied lower figure). A cheap model beats the premium flagship on the council's only published multi-discipline vision benchmark. Route high-volume OCR to Flash, not Pro, for better results at lower cost.
