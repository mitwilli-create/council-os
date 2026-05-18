---
source_url: https://x.ai/api
fetched_at: 2026-05-18
source_authority: official_doc_via_websearch_alternates
provider: xai
purpose: api-overview
fetch_quality: synthesized_from_search
fetch_note: Original x.ai/api landing page returns HTTP 403 to WebFetch (marketing landing, geofenced or JS-rendered). Synthesized from authoritative WebSearch results including x.ai/news + docs.x.ai/developers/introduction + 2026-05 product launches. Re-verify quarterly or after Grok product launch.
---

# xAI API Platform (synthesized from authoritative sources)

## Platform Overview

The xAI API is a toolkit for developers to integrate xAI's Grok models into their own applications, providing the building blocks to create new AI experiences. Built on `api.x.ai`.

## Core Integration Capabilities

- **SDK compatibility**: OpenAI-compatible AND Anthropic-compatible SDKs (drop-in replacement for either)
- **Native tool use** built into Grok 4 family
- **Two endpoints**:
  - `/v1/chat/completions` — standard chat for single-agent models (grok-4.3, grok-3-mini)
  - `/v1/responses` — required for multi-agent and tools-enabled flows (grok-4.20-multi-agent, grok-4-x-search). Chat completions on these returns HTTP 400

## Connector Integrations (Grok Web)

Launched 2026-05 — Grok Web now ships with deep integrations:

| Connector | Capability |
|---|---|
| **Google Workspace** | Gmail, Drive, Docs, Sheets, Calendar — read/write |
| **GitHub** | Repos, issues, pull requests — search code, summarize PRs, review changes |
| **SharePoint** | Document access + search |
| **Outlook** | Email + calendar |
| **OneDrive** | File access |
| **Notion** | Workspace integration |
| **Linear** | Issue management |
| **Bring Your Own MCP** | Connect any custom Model Context Protocol server — homegrown KBs, proprietary APIs, internal MCP gateways |

## 2026 Feature Releases (timeline)

### May 2026 — Grok 4.3
- Fastest, most intelligent xAI model to date
- ~40% input price cut vs Grok 4.20
- 1M token context window
- Native video input support
- 3 reasoning intensity levels

### March 2026 — Grok 4.20 Multi-Agent
- 4 or 16 sub-agents with leader-only output
- Encrypted sub-agent state
- 2M context window
- Required endpoint: `/v1/responses`

### Speech and Audio APIs
- **Grok Speech to Text**: low-latency transcription, real-time + batch endpoints, multilingual, speaker diarization, timestamps
- **Grok Text to Speech**: natural voice generation, expressive speech tags

### Grok Build (Coding Agent)
- CLI competing with Claude Code and OpenAI Codex CLI
- Parallel-subagent architecture
- Early beta for SuperGrok Heavy subscribers

### Grok Imagine API
- Unified video + image generation
- Quality Mode for higher realism (enterprise tier)

### Structured Outputs
- Production-ready typed responses

## Enterprise Features

- SOC 2 Type 2 compliance
- GDPR + CCPA compliance
- Zero Data Retention option
- Enterprise-grade SLA

## Council OS routing implications

- xAI's **OpenAI + Anthropic SDK compatibility** means existing council infra can drop in without per-provider client code (the existing `lib/council.mjs` xAI slots use raw fetch — could be simplified to OpenAI-compatible client)
- **`x_search` tool** (live X/Twitter timeline) is structurally exclusive to xAI; no peer offers comparable social-graph context
- **`/v1/responses` endpoint discipline**: multi-agent + tool-enabled flows MUST use this endpoint, not chat completions (per the documented HTTP 400 trap)
- **Connectors** (Workspace + GitHub + Notion + Linear) are a unique productivity-suite play comparable to Gemini in Workspace — captured in `capabilities/external-surfaces.md`

## Sources

- [x.ai/api landing](https://x.ai/api) (403 — JS-rendered)
- [docs.x.ai/developers/introduction](https://docs.x.ai/developers/introduction)
- [Grok 4.3 release coverage — help.apiyi.com](https://help.apiyi.com/en/grok-4-3-api-release-may-2026-news-en.html)
- [What's New in Grok 2026 — beginnersinai.org](https://beginnersinai.org/whats-new-grok-2026/)
- [xAI Grok API Pricing 2026 — aifreeapi.com](https://www.aifreeapi.com/en/posts/xai-grok-api-pricing)
- [Grok for Coding 2026 — verdent.ai](https://www.verdent.ai/guides/grok-for-coding-2026)
- [Releasebot xAI updates](https://releasebot.io/updates/xai)
