# Capability Taxonomy

Each model-version profile is chunked along these axes. Chunks are numbered
for sort stability and grouped by category. Provider-wide API-optimization
guidance lives in `api-guides/{provider}/`, not in per-version chunks.

## Identity (00)

- `00-overview.md` — what is this model, who built it, when released, official API model ID, company positioning, vs. siblings in the same family

## Core capabilities (10–19)

- `10-reasoning.md` — chain-of-thought, extended/deep thinking, problem decomposition, reasoning-effort/thinking-level controls
- `11-tool-use.md` — function calling, MCP, agentic loops, parallel tool calls
- `12-web-grounding.md` — built-in search, citation behavior, freshness, source domain controls
- `13-vision.md` — image input, resolution limits, OCR quality
- `14-audio-multimodal.md` — STT/TTS, native audio (Live/A2A), video understanding
- `15-code-generation.md` — codegen, repair, languages, execution sandbox, SWE-bench-class evals
- `16-long-context.md` — context window, retrieval quality at length, in-context recall
- `17-agentic-computer-use.md` — browser, OS control, autonomous loops
- `18-structured-output.md` — JSON mode, schema enforcement, grammar constraints

## Operational (20–29)

- `20-pricing.md` — $/1M tokens input/output, cached read/write, batch
- `21-latency-throughput.md` — typical TTFT, tokens/sec, p50/p99
- `22-rate-limits.md` — RPM, TPM, concurrent
- `23-prompt-caching.md` — supported? TTL? cache-write multipliers? cache invalidation triggers?
- `24-batch-api.md` — supported? cost discount? SLA?
- `25-knowledge-cutoff.md` — training data freshness date
- `26-context-window.md` — token capacity, input/output split, output cap

## Integration (30–39)

- `30-connectors.md` — first-party connectors (X/Twitter for Grok, Vertex/AI Studio for Gemini, etc.)
- `31-sdks-apis.md` — official SDK languages, API surface (Messages vs. Responses vs. Chat Completions vs. Interactions vs. Live)
- `32-mcp-support.md` — MCP server/client compatibility
- `33-skills-registry.md` — Claude-specific skills, OpenAI Assistants, Gemini extensions

## Judgment (40–49)

- `40-unique-strengths.md` — what this VERSION is actually uniquely best at vs. its peers (both same-provider siblings AND cross-provider competitors)
- `41-known-limitations.md` — failure modes, gotchas, degradation patterns
- `42-refusal-patterns.md` — what topics does it over-refuse
- `43-ideal-tasks.md` — when to route to this version
- `44-avoid-when.md` — when to route elsewhere (and where)

## Lifecycle (50–59)

- `50-release-history.md` — version timeline within the family
- `51-retirement-risk.md` — deprecation signals, replacement paths
- `52-changelog-since-prior.md` — what changed vs. the prior version

## Chunk frontmatter schema

Every chunk file MUST begin with this YAML frontmatter:

```yaml
---
provider: anthropic                        # provider directory
model: claude-opus-4-7                     # version slug
canonical_slot: null                       # optional provider:slot routing name when it differs from the stable profile ID
resolved_api_model: null                   # optional current API model returned for that canonical slot
capability: tool-use                       # axis from above
chunk_id: 11-tool-use                      # NN-capability
last_research_round: 0                     # integer 0..4
last_updated: 2026-05-17                   # ISO date
verified_by_dealbreaker: false             # true after convergence
source_authority: pending                  # pending | self_research | official_doc | dealbreaker_verified
confidence: pending                        # pending | low | medium | high
sycophancy_strikes_at_convergence: 0       # count of phrases dealbreaker stripped
egoism_strikes_at_convergence: 0           # count of egoistic claims dealbreaker sharpened
tags: []                                   # 3-5 lowercase tags
related_chunks: []                         # other chunks in same model that interact
related_models: []                         # other versions (any provider) with comparable capability
peer_comparisons:                          # explicit named peer comparisons for this capability
  - peer: openai/gpt-5-5
    relation: comparable | weaker | stronger | different-approach
    note: "..."
---
```

## Body format

Every chunk body follows this shape:

```markdown
**Summary** — one plain-language paragraph.

**Specifics:**
- Bullet with concrete detail, source-cited.
- ...

**Compared to peers (sharpened by Dealbreaker):**
- vs. {provider}/{version}: how this version differs (stronger/weaker/different-approach), with the specific task type the comparison applies to.
- ...

**Known limitations on this axis:**
- ...

**Sources:**
- [link 1](url)
- [link 2](url)
```

## Confidence levels

- **high** — claim corroborated by official docs AND survived ≥2 Dealbreaker rounds
- **medium** — corroborated by official docs OR survived ≥1 Dealbreaker round with named peer comparator
- **low** — single-source self-claim, marked `[INFERRED]` in the profile
- **pending** — not yet researched

## Source authority

- **pending** — placeholder, not yet researched
- **self_research** — claim originated in the model's self-research, survived Dealbreaker
- **official_doc** — claim extracted from provider's official documentation
- **dealbreaker_verified** — claim was challenged across ≥2 rounds and survived

## Per-provider API guides — separate taxonomy

`api-guides/{provider}/` follows a per-provider taxonomy reflecting that
provider's API surface, not a uniform one. Example shape for Anthropic:

```
api-guides/anthropic/
├── 00-api-surface-overview.md
├── 10-prompt-caching.md
├── 11-extended-thinking.md
├── 12-tool-use.md
├── 13-batch-api.md
├── 14-computer-use.md
├── 15-vision.md
├── 16-pdfs.md
└── 99-deprecation-schedule.md
```

The per-provider taxonomy is documented in `api-guides/{provider}/README.md`
when that guide is built.
