---
source_url: https://docs.x.ai/developers/release-notes
fetched_at: 2026-05-17
source_authority: official_doc_via_websearch_alternates
provider: xai
purpose: release-notes
fetch_quality: synthesized_from_search
fetch_note: Original docs.x.ai/developers/release-notes is JS-rendered with no extractable content via WebFetch. This mirror synthesized from authoritative WebSearch results including the official `docs.x.ai/developers/migration/may-15-retirement` page + 2026-05 launch coverage. Re-verify quarterly or after a Grok product launch.
---

# xAI Release Notes (synthesized from authoritative sources)

## May 15, 2026 — Model Retirement (BREAKING)

Effective **May 15, 2026 at 12:00 PM PT**, the following 8 models were retired from the xAI API. Requests to retired model slugs now automatically redirect to `grok-4.3`:

| Retired model slug | Recommended replacement |
|---|---|
| `grok-4-1-fast-reasoning` | `grok-4.3` (for reasoning workloads) |
| `grok-4-1-fast-non-reasoning` | `grok-4.20-non-reasoning` (for non-reasoning workloads) |
| `grok-4-fast-reasoning` | `grok-4.3` |
| `grok-4-fast-non-reasoning` | `grok-4.20-non-reasoning` |
| `grok-4-0709` | `grok-4.3` |
| `grok-code-fast-1` | `grok-4.3` (for code) |
| **`grok-3`** | `grok-4.3` |
| `grok-imagine-image-pro` | `grok-imagine-image` |

**Impact on Council OS:** `grok-3` is retired. The Tier-1 lineup still calls `xai:grok-4` which auto-escalates to `grok-4.3` (working). `grok-3-mini` was NOT in the retirement list and remains active. Do NOT add `grok-3` as a new slot.

**Source for retirement:** [docs.x.ai/developers/migration/may-15-retirement](https://docs.x.ai/developers/migration/may-15-retirement)

## Grok 4.3 — Current Flagship (Launched 2026-05-06)

- **Context window:** 1M tokens
- **Pricing:** $1.25 per 1M input tokens, $2.50 per 1M output tokens
- **Reasoning effort levels:** 3 (low, medium, high)
- **Native video input:** confirmed in launch
- **Positioning:** "most intelligent and fastest model xAI has built"

## Grok 4.20 Multi-Agent (Beta 0309)

- **Endpoint:** `/v1/responses` (NOT `/v1/chat/completions` — returns HTTP 400)
- **Pricing:** $2/M input, $6/M output (sticker — 2-16x multiplier at xhigh agent depth)
- **Context window:** 2M tokens
- **Topology:** 4 or 16 sub-agents, leader-only output, encrypted sub-state
- **Built-in tools:** `web_search`, `x_search` (native to xAI ecosystem)

## Other May 2026 Updates

- **Quality Mode** added to Grok Imagine API (image generation) — higher realism, stronger text rendering, better creative control. Enterprise tier.
- **Connectors** launched in Grok Web — deep integrations with SharePoint, Outlook, OneDrive, Google Workspace, Notion, GitHub, Linear. This is xAI's productivity-suite play, comparable to Gemini in Workspace.

## Notes on monitoring

- **Official release notes page** (`docs.x.ai/developers/release-notes`) is JS-rendered; WebFetch returns an empty shell. Use one of these monitoring alternatives:
  - `https://releasebot.io/updates/xai` — third-party mirror with structured changelog entries
  - `https://x.ai/news` — official news page (less granular than release-notes)
  - `https://docs.x.ai/developers/migration/{slug}` — migration guides for specific retirements
- **Council OS refresh signal:** if `xai:grok-4` slot starts returning errors or unexpected modelUsed values, check the retirement page for new entries.

## Sources

- [docs.x.ai/developers/migration/may-15-retirement](https://docs.x.ai/developers/migration/may-15-retirement) (official retirement list)
- [docs.x.ai/developers/models](https://docs.x.ai/developers/models) (current model catalog)
- [help.apiyi.com/en/grok-4-3-release-xai-api-model-retirement-en.html](https://help.apiyi.com/en/grok-4-3-release-xai-api-model-retirement-en.html) (migration guide)
- [releasebot.io/updates/xai](https://releasebot.io/updates/xai) (third-party changelog mirror)
- [grok.com/release-notes](https://grok.com/release-notes) (product release notes — different from API release notes)
