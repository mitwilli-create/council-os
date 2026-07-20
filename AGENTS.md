# AGENTS.md — council-os

Read `~/Documents/mission-control/WORKSPACE.md` first: it defines the multi-agent lane rules for this machine. Your lane here (Codex) is building; Claude Code reviews your output and owns orchestration/memory. CodeRabbit reviews commits and PRs automatically.

## What this repo is

A knowledge base, not an app: converged capability profiles of frontier LLMs (Anthropic, OpenAI, Google, xAI, Perplexity) that feed `routing-rules.md` and `routing-tree.json`, the "which model for which task" source used by Mitchell's agents. Each model researches itself via its own API; a Dealbreaker pass strips sycophancy/egoism; results are chunked along the fixed taxonomy in `taxonomy.md`. 16 Tier-1 models converged as of the last full rebuild (2026-05-17).

## Hard constraints

- **Chunks are the source of truth.** `models/{provider}/{version}/chunks/*.md` carry mandatory YAML frontmatter per `taxonomy.md`. `profile.md` is derived and regenerated, never hand-edited. `research-rounds/` is an append-only audit trail, never edited.
- **Research rounds spend real API money.** Never run `scripts/call-model.mjs` or `scripts/refresh.sh` on your own initiative; Mitchell triggers paid research rounds. Your default work here is editing knowledge files and scripts, not calling models.
- **Every API call gets a `COST_LOG.md` row** (model, round, cost). `scripts/call-model.mjs` does this; don't add call paths that skip it.
- **Dealbreaker ceiling is 4 rounds per model;** past that, mark the profile `abandoned: true` rather than looping.
- **Staleness is the failure mode.** Model retirements, pricing changes, and API-surface changes (documented in INDEX.md and routing-rules.md) must flow through to routing. Any claim you add to the knowledge files carries a date. (This doc's own repo-state notes are as of 2026-07-08.)
- **API keys live in `.env` / `.env.local`** (gitignored). No credentials anywhere in tracked files.

## Commands

No `package.json`; scripts run directly:

- Call a model + log cost: `node scripts/call-model.mjs` (Mitchell-triggered only; see Hard constraints)
- Regenerate routing tree from chunks: `node scripts/build-routing-tree.mjs`
- Orchestrated refresh: `scripts/refresh.sh` (Mitchell-triggered only; runbook: `scripts/orchestrate.md`)
- No test suite; verify by regenerating `routing-tree.json` and checking it parses and reflects the chunk edits.

## Conventions

- Knowledge files are Markdown with YAML frontmatter; follow the chunk schema in `taxonomy.md` exactly (chunk_id, confidence, source_authority, sycophancy/egoism strikes, peer_comparisons).
- Canonical model IDs and official-doc URLs live in `scripts/sources.json`; tier membership in `scripts/tier-1.json`. Update those, not ad-hoc copies.
- Cross-model comparisons go in `capabilities/*.md`; per-provider API practice in `api-guides/{provider}/`.

---

<!-- BEGIN STANDING-RULES (Mitchell global, installed 2026-07-18) -->
## Standing rules (global)

These apply to any Claude instance working in this repo, including off-machine (CI, collaborators, cloud agents):

1. **Freshness re-anchor.** Before acting on the first input of a session, and again after any gap over ~3 hours, web-search to confirm the current Pacific date/time (PST/PDT-aware) and scan the task topic for anything that changed since your knowledge cutoff, before relying on training-data recall. Re-check any pending "today/tomorrow" commitment against the confirmed date.
2. **Stack-search before building.** At the start of any new build / feature / reusable tool, first research what already exists (X, Reddit, Hacker News, Discord, dev forums, package registries) for highly-rated, peer-recommended solutions. Report BUILD-vs-ADOPT with sources; bias to ADOPT over BUILD unless there is a real, audience-worthy gap. Build for an audience, not just yourself.
<!-- END STANDING-RULES -->
