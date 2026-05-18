---
generated: 2026-05-17
covers_models: 13 (all Tier 1) — but axis is provider-level, not version-level
status: active
purpose: routing axis Mitchell explicitly requested — browser extensions, native apps, OS integrations, and other surfaces giving each model access to resources beyond raw API
---

# External Surfaces — Cross-Provider Comparison

**Axis:** the surfaces each model is accessible from BEYOND the standard chat-completions API — browser extensions, desktop/mobile apps, OS integrations, IDE plugins. These matter for routing because the same model can have wildly different effective capabilities depending on which surface invokes it.

**Why this axis matters:** Calling Claude via `lib/council.mjs` gives you the raw API. Calling Claude via Claude in Chrome MCP gives you authenticated browser session + DOM manipulation + tab control. Same model, very different effective surface.

## Comparison table (provider-level — applies to all that provider's Tier 1 models)

| Provider | Native browser extension | Desktop app | Mobile app | IDE / CLI integration | OS-level integration | Authenticated surface unique advantage |
|---|---|---|---|---|---|---|
| **Anthropic Claude** | **Claude in Chrome** (MCP, official) — DOM read + click + form-fill + tab management + JS exec. Tier-gated per-app (read/click/full) | Claude Desktop (macOS/Windows) | Claude mobile (iOS/Android) | **Claude Code** (CLI), Claude code extensions for VS Code / JetBrains | computer-use tool (OS control with permission) | Authenticated web sessions across any site the user is logged into; full computer use via OS-level tool |
| **OpenAI GPT-5** | ChatGPT browser extension (Chrome/Safari/Edge) — page summarize + chat in tab | ChatGPT Desktop (macOS/Windows) | ChatGPT mobile (iOS/Android) — voice mode, screen sharing | OpenAI Codex CLI, OpenAI Apps SDK | Custom GPTs / Assistants (server-side persistent context) | Persistent assistants with file libraries; ChatGPT mobile screen-share for live agent assistance |
| **Google Gemini** | Gemini in Chrome (built-in via @gemini) | Gemini app (limited; primarily web at gemini.google.com) | Gemini mobile (Android — replaces Google Assistant; iOS app) | Gemini CLI, Android Studio Gemini, Firebase Studio, **Google Antigravity Agentic IDE** (uses `~/.gemini/antigravity/skills/` global + `<workspace>/.agents/skills/` local YAML skill files — added 2026-05-18 per meta-audit) | **Gemini in Google Workspace** (Docs, Sheets, Slides, Gmail, Meet) | Native integration into the entire Google productivity suite; Android OS assistant replacement |
| **xAI Grok** | Grok web (grok.com) | Grok Desktop (limited release) | **Grok inside the X app** (native social integration — sees timeline + can post) | xAI API only (no first-party CLI as of 2026-05) | None | **Live X/Twitter timeline access** — only model with first-party social-graph context |
| **Perplexity Sonar** | **Perplexity Comet browser** (native browser product) + Perplexity browser extension (Chrome/Safari/Firefox) | Perplexity Desktop (limited) | Perplexity mobile (iOS/Android) | Perplexity API only | None | Comet is a full Perplexity-native browser — search is the first-class UX, not a feature bolted onto generic browsing |

## Tiered ranking by surface breadth

**Top tier — most surfaces, biggest effective capability expansion beyond API:**
- **Anthropic Claude** — Claude in Chrome (browser MCP), Claude Code CLI, computer-use tool, Desktop+Mobile apps. Most surfaces with the most powerful tool capability (DOM + OS).
- **Google Gemini** — Workspace integration is unique. Gemini in Docs/Sheets/Gmail/Meet is genuinely first-class, not a wrapper. Plus Android OS replacement.

**Mid tier — solid app + extension presence:**
- **OpenAI GPT-5** — strong mobile (voice + screen share) + desktop + browser extension. Assistants give server-side persistence others lack.
- **Perplexity Sonar** — Comet browser is unique among council members.

**Narrow tier — surface is mainly its native social platform:**
- **xAI Grok** — primary surface is Grok-inside-X. No CLI, no MCP, but uniquely has live X-graph context as a native built-in (not bolted on).

## Antigravity IDE skill mirroring (added 2026-05-18, meta-audit P2)

Google's Antigravity Agentic IDE uses YAML-format skill files in:
- **Global:** `~/.gemini/antigravity/skills/`
- **Workspace-scoped:** `<workspace-root>/.agents/skills/`

When Mitchell installs Antigravity, mirror these Council OS skills there for full interoperability:
- `~/.claude/skills/sonar-structured-research.md` → `~/.gemini/antigravity/skills/sonar-structured-research.yaml` (convert frontmatter to YAML body)
- `~/.claude/skills/openai-terminal-agent.md` → `~/.gemini/antigravity/skills/openai-terminal-agent.yaml`
- `~/.claude/agents/researcher.md` → `~/.gemini/antigravity/skills/researcher.yaml`
- `~/.claude/agents/dealbreaker.md` → `~/.gemini/antigravity/skills/dealbreaker.yaml`

A mirror script (`scripts/mirror-skills-to-antigravity.mjs`) should be written when Antigravity is installed. As of 2026-05-18, `~/.gemini/` does not exist on Mitchell's system; this is documented for future deployment.

## Routing recommendations

| Task | Best surface to invoke | Why |
|---|---|---|
| Authenticated web action (any login-gated site) | **Claude in Chrome MCP** | Only surface with full DOM + auth-session access + tab/window control. Use this for LinkedIn edits, GitHub web actions, dashboard navigation, etc. |
| Native browser scraping (no auth needed) | Claude in Chrome MCP OR Perplexity Comet | Claude for fine DOM control; Perplexity Comet for search-first workflows |
| Live timeline / social signal (X/Twitter) | **Grok in X app** OR `xai:grok-4-x-search` via API | Only first-party X-graph surface. API gives same access programmatically. |
| Email / calendar / docs work | **Gemini in Google Workspace** | Only model natively wired into Gmail/Calendar/Docs/Sheets. No copy-paste required. |
| Voice-first / hands-free | **ChatGPT mobile voice mode** OR Gemini mobile | Best mobile voice UX. Anthropic + xAI weaker here. |
| Code-in-editor | **Claude Code CLI** OR Gemini in Android Studio | Both have strong IDE integration. Claude Code for general dev; Gemini for Android specifically. |
| Server-side persistent assistant with file library | OpenAI Assistants / GPTs | Unique server-side state model. Anthropic + Google lack this exact pattern. |
| OS-level automation (open apps, control mouse) | **Claude computer-use tool** | Only model with first-party OS control. |

## Notable differentiators

- **Anthropic uniquely owns the authenticated-browser-action surface** via Claude in Chrome. No peer matches the depth of DOM + tab + auth + JS exec via official MCP.
- **Google uniquely owns workspace integration** — Gmail/Docs/Sheets/Calendar/Meet with Gemini as a first-class participant, not a chat sidebar.
- **xAI uniquely owns the X/Twitter native surface** — the model lives inside the social product, not as an API consumer of social data.
- **Perplexity uniquely owns the search-first browser** with Comet — others bolt search into existing browsers; Perplexity built the browser around search.
- **OpenAI uniquely owns the persistent-assistant pattern** via the Assistants API — long-running server-side state with file libraries and threads.

## Sources

This axis is mostly NOT in the converged Tier 1 profiles (those focus on API capabilities). Built from:
- Anthropic Claude in Chrome MCP documentation + standing memory feedback note (`feedback_browser_automation_default.md`)
- OpenAI ChatGPT product surfaces from current `developers.openai.com` documentation
- Google Gemini product surfaces from `ai.google.dev/gemini-api/docs/models` + `blog.google` product announcements
- xAI Grok surfaces from `x.com` (the social product) + `x.ai/api`
- Perplexity surfaces from `perplexity.ai/api-platform` + Comet browser launch coverage

**Note:** Surface availability can change faster than API capability. Re-validate this cross-cut on a quarterly basis or when a provider launches a new surface (e.g., a new browser extension).
