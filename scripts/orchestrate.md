# Orchestration Runbook

This is the runbook a Claude session follows to build or rebuild the
Council OS knowledge base. It's deliberately a markdown runbook (not a
shell script) because the orchestration involves agent calls, judgment
calls, and adaptive loops that don't fit a deterministic script.

## Phase 1 — Scaffold (one-time)

Done. The directory structure, prompts, taxonomy, and `sources.json` are
in place.

## Phase 2 — Ingest official docs (cheap, no LLM API spend)

For each provider in `sources.json`:

1. For each URL in `providers[P].provider_wide_docs`:
   - WebFetch the URL with prompt: "Return the full content of this page
     as faithful markdown — preserve headings, code blocks, tables, and
     inline links. Do not summarize."
   - Write to `api-guides/{provider}/_official-{purpose}.md`
   - Add YAML frontmatter:
     ```yaml
     ---
     source_url: <url>
     fetched_at: <ISO-date>
     source_authority: official_doc
     provider: <provider>
     purpose: <purpose>
     ---
     ```

2. For each model in `providers[P].models`:
   - Build a model-specific URL list (model card, pricing if separate,
     model-specific guide) by searching the provider's docs root for the
     `api_model_id`. WebFetch each.
   - Write to `models/{provider}/{version}/official-docs/_official-{purpose}.md`
   - Same frontmatter pattern.

3. Append a row to `COST_LOG.md` (Phase 2 is WebFetch-only; cost is $0
   but log for completeness).

## Phase 3 — Self-research ↔ Dealbreaker loop

**Per-model execution.** Run sequentially per model (avoid hammering provider
APIs in parallel — and the cost is easier to monitor).

### For each model M in `sources.json`:

#### Round 1 (initial self-research)

1. Read `prompts/self-research.md`.
2. Substitute placeholders: `{{MODEL_DISPLAY_NAME}}`, `{{API_MODEL_ID}}`,
   `{{PROVIDER}}` from `sources.json`.
3. Call M's API directly (use `lib/provider-client.mjs` patterns from
   `~/Documents/career-ops/` for client construction).
4. Save response to:
   `models/{provider}/{version}/research-rounds/round-1-self-research.md`.
5. Append cost row to `COST_LOG.md`.

#### Round N adjudication (Dealbreaker)

1. Read `prompts/dealbreaker-anti-sycophancy.md`.
2. Substitute placeholders:
   - `{{REPORT_PATH}}` = `models/{provider}/{version}/research-rounds/round-{N}-self-research.md`
   - `{{OFFICIAL_DOCS_DIR}}` = `models/{provider}/{version}/official-docs/`
   - `{{PRIOR_CHALLENGES_PATH}}` = `models/{provider}/{version}/research-rounds/round-{N-1}-dealbreaker.md` (only if N > 1)
   - `{{CONVERGED_PEER_PROFILES_DIR}}` = list of paths to any
     `models/*/*/profile.md` already converged
3. Either:
   - **Spawn the existing `dealbreaker` subagent** with the substituted
     prompt as input (preferred — leverages Mitchell's existing agent
     infrastructure)
   - OR call Claude (this session or a sonnet subagent) with the prompt
4. Save Dealbreaker output to:
   - Challenges: `models/{provider}/{version}/research-rounds/round-{N}-dealbreaker.md`
   - Verdict YAML: `models/{provider}/{version}/research-rounds/round-{N}-verdict.yaml`
5. Append cost row to `COST_LOG.md`.

#### Round N+1 (revision)

1. Read the verdict YAML.
2. If `converged: true` → exit the loop for this model. Proceed to "After
   convergence" below.
3. If `converged: false` AND `round < 4`:
   - Re-prompt M with `prompts/self-research.md` PLUS the round-N
     Dealbreaker challenges as additional context (use the "Round-N
     revision instructions" block at the bottom of `self-research.md`).
   - Save to `models/{provider}/{version}/research-rounds/round-{N+1}-self-research.md`.
   - Increment N and run Dealbreaker again.
4. If `round == 4` AND `converged: false`:
   - Set `abandoned: true` in the verdict.
   - Move on. The chunks will carry `confidence: low` and a note about
     unresolvable contention.

#### After convergence (per model)

1. Take the final converged self-research as the model's profile.
   - Copy to `models/{provider}/{version}/profile.md`.
   - Add header frontmatter:
     ```yaml
     ---
     model: <slug>
     provider: <provider>
     converged_at_round: <N>
     converged_date: <ISO-date>
     sycophancy_strikes_at_convergence: <count>
     egoism_strikes_at_convergence: <count>
     final_verdict: models/{provider}/{version}/research-rounds/round-{N}-verdict.yaml
     ---
     ```
2. Update `INDEX.md` row for this model: status → `converged`, round → N,
   converged → ✅.
3. Append a row to `COST_LOG.md` (final convergence summary).

## Phase 4 — Chunk + build cross-cuts + routing rules

Per-model after convergence:

1. Read `prompts/chunking-instructions.md`.
2. Substitute `{{PROFILE_PATH}}`, `{{VERDICT_PATH}}`, `{{CHUNKS_DIR}}`.
3. Run via this session OR a sonnet subagent (it's mostly mechanical
   extraction — sonnet is fine).
4. Verify all chunks have proper frontmatter (`scripts/validate-chunks.mjs`
   if it exists, otherwise manual spot-check).

After ALL models have converged AND chunked:

1. Generate `capabilities/{capability}.md` for every capability in the
   taxonomy. Each file aggregates the matching chunk from every model
   into a single comparison table + narrative.
2. Generate `routing-rules.md` from the chunks. For every common task
   type (deep research with citations, agentic browser, vision OCR, etc.),
   recommend a primary + backup model with chunk-cited rationale.
3. Update `INDEX.md` totals at the bottom.

## Cost discipline

- Every API call writes a row to `COST_LOG.md`.
- Before kicking off a new round, check the rolling 24h total in
  `COST_LOG.md`. If it exceeds Mitchell's session budget, pause and ask.
- Per-round cost estimate (rough):
  - Self-research call: $0.50 – $3.00 depending on model (Opus, GPT-5.5 Pro
    higher; Haiku, sonar lower)
  - Dealbreaker call: $0.50 – $1.50 (Claude or sonnet)
  - 4-round worst case per model: $4 – $18
  - 25 models worst case: $100 – $450

## Rebuilding for new model versions

When a new version ships (e.g., Claude Opus 4.8 in 6 months):

1. Update `sources.json` — add the new model under the right provider.
2. Run Phase 2 just for the new model.
3. Run Phase 3 just for the new model.
4. Run Phase 4 just for the new model + regenerate cross-cuts (other models
   don't need rechunking).

## Retiring deprecated models

When a model is retired (e.g., grok-4 on 2026-05-15):

1. Update `sources.json` — remove from `models{}`, add to `retired_models{}`.
2. Move the model directory: `mv models/{provider}/{version} models/_retired/`
3. Regenerate `routing-rules.md` so it stops recommending retired models.
4. Note the retirement in `INDEX.md`.
