---
generated: 2026-05-18
source: adversarial-self-review dealbreaker-v2 (Sonnet 4.6 adjudication on Gemini v1 + web verification supplement)
status: active
related_files:
  - routing-rules.md (Avoid annotations should be tagged [WIRING-GAP] when applicable)
  - capabilities/external-surfaces.md
  - lib/council.mjs (provider client wiring)
---

# Deployment-Contingent Capabilities

Capabilities dictated by Mitchell's current `lib/council.mjs` wiring and the Claude Code SDK,
NOT intrinsic model weights. Check this file before assuming a capability is unavailable.

The Council OS exists to **route tasks to the best-fit model**. Routing decisions that
confuse "the model can't do this" with "we haven't wired this yet" lead to permanent
mis-routing. This file separates the two.

## Currently wired (available in Mitchell's setup)

| Capability | Models with wiring | Notes |
|---|---|---|
| Local file read/write | Anthropic models (orchestrator role via Claude Code Agent SDK) | The subagent IS the model; files are read/written by the orchestrator's harness, not by the model API directly |
| Terminal / shell execution | Anthropic models (orchestrator role) | Claude Code SDK only; GPT-5.5 has higher intrinsic Terminal-Bench score (82.7% vs Opus 4.7 69.4%) but no local wiring yet |
| Vision / image input | Gemini, OpenAI, Anthropic | All three families wired in `lib/council.mjs` |
| X/Twitter search | `xai:grok-4-x-search`, `xai:grok-4-3` (with x_search tool) | First-party `x_search` — no peer equivalent |
| Web grounding | `perplexity:*`, `google:gemini-*`, `xai:grok-4-x-search` | See routing-rules.md "Research + grounding" section |
| Multi-agent single-call | `xai:grok-4-20-multi-agent` | Only frontier model with this surface; uses `/v1/responses` endpoint (NOT `/v1/chat/completions`) |
| Native PDF input | `anthropic:*`, `google:gemini-*` (via Files API) | OpenAI requires multimodal preprocessing |
| Native video input | `xai:grok-4-3` (≤5min/1080p), `google:gemini-3-1-pro` (up to 1hr) | See routing-rules.md video duration split |

## NOT wired yet (capability exists; wiring missing)

| Capability | Model | Intrinsic score / spec | Action to unlock |
|---|---|---|---|
| Terminal execution (unattended) | `openai:gpt-5-5` | Terminal-Bench 2.0 = 82.7% (vs Opus 4.7 = 69.4%) | Add `~/.claude/skills/openai-terminal-agent.md` + OpenAI Codex API wiring or Anthropic-equivalent Agent SDK |
| Perplexity JSON schema output | `perplexity:sonar-reasoning-pro` | Native `response_format` JSON Schema (recursive schemas NOT supported) | Update `lib/council.mjs` parser to split `<think>...</think>` from JSON body (see D3 in dealbreaker-v2 plan) |
| Gemini grounding URLs | `google:gemini-3-1-pro` | Native `groundingMetadata.groundingChunks[].web.uri` | Fix `lib/council.mjs` Gemini blocks (L425, L448, L609, L778) to propagate `grounding_urls` array (see D2) |
| Anthropic native PROVIDERS slots | `anthropic:claude-opus-4-7`, `claude-sonnet-4-6`, `claude-haiku-4-5` | Available via Anthropic SDK | Add native PROVIDERS slots in `lib/council.mjs` for leaf dispatches (currently subagent-only — creates evidence-tier asymmetry in dealbreaker) |
| Google Antigravity Agentic IDE skills | `google:gemini-3-1-pro` | Uses `~/.gemini/antigravity/skills/` (global) or `<workspace>/.agents/skills/` (local) | Mirror Council OS skills to that directory for interoperability |

## Intrinsic vs deployment-contingent distinction

When evaluating model routing, ask: **"Is this a model capability gap or a wiring gap?"**

- If a model is listed in "NOT wired yet" above, do not route away from it permanently —
  fix the wiring instead.
- In `routing-rules.md`, "Avoid" labels for wiring-gap reasons should be tagged `[WIRING-GAP]`
  so they are distinguishable from genuine model weaknesses.
- The dealbreaker agent must check this file before classifying a claim as "unique-unsupported"
  — the absence of a capability in current wiring is NOT evidence the model lacks the capability.

## Anti-sycophancy reinstatement record

Two claims in the adversarial self-review (2026-05-17) were initially conceded by the
claiming model but later reinstated as architecturally sound:

1. **GPT-5.5 Terminal-Bench 82.7% leadership** — GPT-5.4 R2 critique caused GPT-5.5 to
   concede via the "Claude Code is the production substrate" framing. The benchmark
   is a primary capability fact; the right response is to build the wiring, not dismiss
   the capability.
2. **Sonnet 4.6 knowledge cutoff (Aug 2025) substantially postdates the dates other models
   suggested it should be downgraded to** — `sonar-deep-research` cited Anthropic's
   Transparency Hub but mis-attributed the legacy Sonnet 4.5/Opus 4.5/4.6 cutoff (May 2025)
   to Sonnet 4.6 (actual: Aug 2025 reliable, Jan 2026 training cutoff per
   https://platform.claude.com/docs/en/docs/about-claude/models).

Both reinstatements suggest the dealbreaker should default to web-verifying primary-source
critiques before accepting concessions, especially when the conceding model is contradicting
its own self-knowledge.
