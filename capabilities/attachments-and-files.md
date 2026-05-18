---
generated: 2026-05-17
covers_models: 13 (all Tier 1)
status: active
purpose: routing axis Mitchell explicitly requested — what file formats / attachment types each model accepts as input, and how that affects routing
---

# Attachments and Files — Cross-Model Comparison

**Axis:** what each model accepts as input attachment beyond plain text — images, PDFs, audio, video, generic files via Files API.

This is the dimension that decides: "Can this model directly ingest my attachment, or do I need to preprocess?" Routing impact is binary on each axis — either the model accepts the format natively or it doesn't.

## Comparison table

| Model | Image input | PDF native | Audio input | Video input | Files API | Max attachment size |
|---|---|---|---|---|---|---|
| `anthropic/claude-opus-4-7` | ✅ ~3.75 MP, ~2576px | ✅ native PDFs (Anthropic Files API or inline base64) | ❌ no native | ❌ no native | ✅ Files API + inline | 32 MB per file (Files API), 5 MB inline |
| `anthropic/claude-sonnet-4-6` | ✅ same as Opus | ✅ same as Opus | ❌ | ❌ | ✅ | same as Opus |
| `anthropic/claude-haiku-4-5` | ✅ same | ✅ same | ❌ | ❌ | ✅ | same |
| `openai/gpt-5-5` | ✅ 10.24 MP pixel budget per image | ✅ via Files API | ❌ (use gpt-realtime-2 for audio in) | ❌ (no native video; preprocess) | ✅ Files API | 512 MB per file |
| `openai/gpt-5-4` | ✅ same as 5.5 | ✅ via Files API | ❌ | ❌ | ✅ | same |
| `openai/gpt-5-3-chat-latest` | ✅ same | ✅ via Files API | ❌ | ❌ | ✅ | same |
| `google/gemini-3-1-pro` | ✅ image input + `media_resolution` knob | ✅ native PDF (recommended `media_resolution_medium`) | ✅ **native audio in, up to ~8.4 hours per prompt** | ✅ **native video in, up to ~1 hour per prompt** | ✅ Files API | 2 GB per file (Files API) |
| `google/gemini-3-flash` | ✅ image input + `media_resolution`; MMMU-Pro 81.2% (beats 3.1 Pro on vision) | ✅ native PDF | ✅ native audio | ✅ native video (lower fidelity than Pro) | ✅ Files API | same |
| `xai/grok-4-3` | ✅ 20 MiB max, jpg/png | ⚠️ inline only (no PDF-native flag in docs; treat as preprocess-to-image) | ⚠️ separate Voice API tier ($0.10/hr STT) | ✅ **native video input claimed in xAI launch** | ❌ no Files API equivalent | 20 MiB per image |
| `xai/grok-4-20-multi-agent` | ⚠️ same image constraints; multi-agent has limited attachment surface | ⚠️ preprocess | ❌ | ❌ | ❌ | 20 MiB per image |
| `perplexity/sonar-pro` | ❌ **text-only API; no attachment support of any kind** | ❌ | ❌ | ❌ | ❌ | N/A |
| `perplexity/sonar-deep-research` | ❌ text-only | ❌ | ❌ | ❌ | ❌ | N/A |
| `perplexity/sonar-reasoning-pro` | ❌ text-only | ❌ | ❌ | ❌ | ❌ | N/A |

## Tiered ranking by attachment surface

**Top tier — full multimodal in (image + PDF + audio + video):**
- `google/gemini-3-1-pro` — uniquely native on all four input modalities including 8.4 hr audio + 1 hr video in one prompt
- `google/gemini-3-flash` — same surface at Flash pricing

**Mid tier — image + PDF (text + visual docs):**
- All three Anthropic Claude models (Opus 4.7, Sonnet 4.6, Haiku 4.5)
- All three OpenAI GPT-5 family models (5.5, 5.4, 5.3-chat-latest)

**Limited tier — image only, no PDF, narrow attachment surface:**
- `xai/grok-4-3` (native video input claimed but no Files API)
- `xai/grok-4-20-multi-agent` (image + lossy multi-agent surface)

**Zero tier — text-only API, no attachments at all:**
- All three `perplexity/sonar-*` models — these are research endpoints, not orchestrators. Pre-process attachments through a vision/PDF model first, then pipe text to Sonar.

## Routing recommendations

| Attachment type | Primary | Backup | Avoid |
|---|---|---|---|
| Image OCR / document VQA | `google/gemini-3-flash` (MMMU-Pro 81.2%) | `anthropic/claude-opus-4-7` (DocVQA 93%) | All Perplexity (text-only) |
| PDF reading (text-heavy contract, paper) | `anthropic/claude-sonnet-4-6` (1M context fits) | `google/gemini-3-1-pro` (native PDF + `media_resolution_medium`) | All Perplexity |
| Audio transcription + reasoning | `google/gemini-3-1-pro` (native audio in) | OpenAI `gpt-realtime-2` (separate model) | Anthropic + xAI base (no native) |
| Video understanding | `google/gemini-3-1-pro` | `google/gemini-3-flash` | OpenAI/Anthropic (no native) |
| Mixed multimodal in one prompt | `google/gemini-3-1-pro` | None — only Gemini supports image+audio+video in one call | All others |
| Files API workflow (many docs, programmatic) | `google/gemini-3-1-pro` (2 GB per file) | `openai/gpt-5-5` (512 MB) | `anthropic` (32 MB cap), all `xai`/`perplexity` |

## Notable differentiators

- **Gemini family is the ONLY tier with native audio + video in.** If your task involves any audio/video, route to Gemini or pre-process before another model.
- **Perplexity is text-only across the board.** No image, PDF, audio, video, or Files API. Use a vision/PDF model upstream if attachments are involved.
- **Anthropic has the smallest Files API limit** (32 MB) but supports native PDF reading well — good for legal/financial document analysis where the docs are ≤32 MB.
- **OpenAI Files API allows 512 MB per file**, useful for large CSV/data ingestion workflows.
- **xAI has no Files API equivalent** — attachments are inline only, capped at 20 MiB per image. Don't route bulk-document workflows here.

## Sources

Derived from converged Tier 1 model profiles:
- `models/anthropic/{slug}/chunks/13-vision.md`
- `models/openai/{slug}/chunks/13-vision.md`
- `models/google/{slug}/chunks/13-vision.md` + `14-audio-multimodal.md`
- `models/xai/{slug}/chunks/13-vision.md`
- `models/perplexity/{slug}/chunks/13-vision.md` (all return "text-only API")
- Cross-referenced with `api-guides/{provider}/_official-*.md` for Files API specifics
