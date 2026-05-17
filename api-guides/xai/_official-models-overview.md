---
source_url: https://docs.x.ai/developers/models
fetched_at: 2026-05-17
source_authority: official_doc
provider: xai
purpose: models-overview
fetch_quality: summarized
fetch_note: WebFetch processor returned compressed view. Full pricing tables and per-model specs likely require Chrome MCP for faithful extraction. Auth-gated pages on docs.x.ai may be JS-rendered.
---

# Grok Models

## Model Pricing (Text)

Text-based models range from 1M to 2M context windows.
- Input: $1.25 / 1M tokens
- Output: $2.50 / 1M tokens
- `grok-4.20-multi-agent-0309` offers the largest context at 2M tokens.

## Imagine Pricing (Image / Video)

- Basic images: $0.02 / image
- Quality images: $0.05 / image
- Video generation: $0.050 / sec

## Voice Pricing (Audio)

- Realtime: $0.05 / min
- Text-to-speech: $15.00 / 1M characters
- Speech-to-text: $0.10 / hr (REST) or $0.20 / hr (streaming)

## Model Selection Guidance

For most applications, **Grok 4.3** is recommended as "the most intelligent and fastest model." Specialized APIs exist for audio, images, and video needs.

## Important Technical Notes

- Models lack knowledge of current events unless search tools are enabled
- Knowledge cutoff: **November 2024**
- Image inputs: max file size 20MiB, jpg/jpeg or png formats
- Model aliases follow naming conventions to facilitate automatic version upgrades

## Retirement Notice

Several legacy models will be retired May 15, 2026, with automatic redirection to grok-4.3 at standard pricing.

(Confirmed retirements per cross-reference with `career-ops/lib/council.mjs:174-178`:
`grok-4`, `grok-4-fast`, `grok-4-1-fast`, `grok-code-fast-1`, `grok-imagine-image-pro` — all redirect to grok-4.3 pricing.)
