# Council OS

A local knowledge base + routing system for every frontier-LLM version Mitchell
has API access to. Built by having each model research **itself** and the
Dealbreaker strip the resulting sycophancy and egoism.

## What this is

For every active version of every council-tier model — Anthropic Claude
(Opus/Sonnet/Haiku 4.x), OpenAI GPT-5 family (5.2 → 5.5 Pro), Google Gemini 3
series, xAI Grok 4.3 / 4.20 / 3, Perplexity Sonar family — this repo
maintains:

- A **profile** synthesized from the model's own self-research after it
  survived adversarial review.
- **Fine-grained chunks** along a fixed capability taxonomy, with frontmatter
  for RAG retrieval.
- **Mirrored official docs** from the provider's own site, locally indexed.
- **An audit trail** of every round of self-research and Dealbreaker pushback.
- **Provider-specific API-usage guides** (`api-guides/{provider}/`) that
  encode the current best practices for getting optimal output from that
  provider's API surface.

## Why it exists

- **Routing** — when Claude (or Mitchell) needs to call a model for a specific
  task, this KB tells them which version to call and why.
- **Grounding** — instead of asking models "are you good at X?" (they all say
  yes), this KB documents what each version is *actually* differentiated on,
  after self-flattery has been stripped.
- **Anti-egoism** — frontier models systematically over-claim their own
  uniqueness. The Dealbreaker explicitly hunts for "uniquely strong at X"
  claims that ignore peer models doing the same thing.
- **Onboarding** — when a new model version ships (and they ship constantly),
  the same loop reruns and only the chunk delta needs updating.

## Methodology — self-research, not council fan-out

**Each model researches itself.** Claude Opus 4.7 profiles Claude Opus 4.7.
GPT-5.5 profiles GPT-5.5. Etc. This is intentional:

1. It tests each model's self-awareness directly — does it know its own
   weaknesses, training cutoff, peer comparisons?
2. The bias surface is concentrated and predictable: every self-report will
   be sycophantic + egoistic. The Dealbreaker can hunt the same patterns
   model after model.
3. It scales linearly with the model count (vs. quadratic if every model
   profiled every other model).
4. Models with web grounding (Perplexity, Grok, Gemini) can ground their
   self-claims; models without (Claude, GPT-5) have to either mark claims
   `[INFERRED]` or fail the Dealbreaker.

The Dealbreaker then converses with each model across rounds, pushing back
on every sycophantic / egoistic / overclaimed / hedged statement until the
profile is genuinely defensible. Hard ceiling: 4 rounds per model.

## Layout

```
council-os/
├── README.md                 # This file
├── INDEX.md                  # Master nav
├── routing-rules.md          # Generated: which model for which task
├── taxonomy.md               # Capability axes + chunk frontmatter schema
├── COST_LOG.md               # Council/dealbreaker spend log
│
├── models/
│   ├── {provider}/                  # anthropic, openai, google, xai, perplexity
│   │   └── {version-slug}/
│   │       ├── profile.md           # Human-readable synthesis
│   │       ├── chunks/              # RAG-tagged capability chunks
│   │       ├── official-docs/       # Mirrored provider docs
│   │       └── research-rounds/     # Self-research ↔ Dealbreaker audit trail
│
├── api-guides/
│   └── {provider}/                  # API-optimization guidance per provider
│       └── *.md                     # prompt-caching, reasoning-effort, etc.
│
├── capabilities/                    # Cross-cuts (model X vs model Y vs ...)
│
├── prompts/
│   ├── self-research.md             # Template the target model receives
│   ├── dealbreaker-anti-sycophancy.md  # Template the dealbreaker receives
│   └── chunking-instructions.md     # Post-convergence chunking template
│
└── scripts/
    ├── sources.json                 # All known active model versions + doc URLs
    └── orchestrate.md               # Phase 2/3/4 runbook
```

## Source of truth

- **`models/{provider}/{version}/chunks/`** — chunks are the source of truth
  for routing. Each chunk is verified by the Dealbreaker and carries
  frontmatter noting confidence, sources, and last-research round.
- **`models/{provider}/{version}/profile.md`** — human-readable synthesis of
  the chunks. Regenerated when chunks change.
- **`models/{provider}/{version}/official-docs/`** — canonical provider
  documentation, mirrored locally for Dealbreaker grounding.
- **`models/{provider}/{version}/research-rounds/`** — full audit trail of
  the self-research ↔ Dealbreaker dialogue. Never edited by humans.
- **`api-guides/{provider}/`** — provider-wide API best-practice docs
  (prompt-caching mechanics, reasoning-effort tuning, structured outputs,
  state management). These are synthesized from official docs + Dealbreaker-
  verified self-research, then maintained.

## How to use the KB

For Claude or humans:

1. To route a task → read [`routing-rules.md`](routing-rules.md)
2. To optimize an API call for provider X → read `api-guides/{provider}/`
3. To compare a capability across models → read `capabilities/{capability}.md`
4. To deep-dive one model version → read `models/{provider}/{version}/profile.md`
5. To verify a specific claim → check the chunk in
   `models/{provider}/{version}/chunks/` (frontmatter shows verification
   status + sources)

## How to rebuild

See [`scripts/orchestrate.md`](scripts/orchestrate.md) for the full runbook.
Summary:

1. **Phase 2** — for each model version, WebFetch the provider's official docs
   into `models/{provider}/{version}/official-docs/`
2. **Phase 3** — for each model:
   - Call the model directly via its API with `prompts/self-research.md`
   - Pass the self-report to the Dealbreaker (`prompts/dealbreaker-anti-sycophancy.md`)
   - Dealbreaker returns challenges + verdict
   - Re-prompt the model with challenges → revise → re-adjudicate
   - Loop until Dealbreaker marks `converged: true` OR round 4 hard cap
3. **Phase 4** — chunk converged profile into
   `models/{provider}/{version}/chunks/`, regenerate `routing-rules.md` and
   `capabilities/` cross-cuts

## Hard rules

- Models research themselves. No "models researching each other" — that just
  re-mixes the same biases.
- The Dealbreaker treats sycophancy and egoism as the primary failure modes.
  Generic "highly capable" or "uniquely strong at X" gets stripped on sight.
- The hard ceiling for self-research ↔ Dealbreaker rounds per model is 4.
- Outbound model API calls cost real money. Every research round writes a
  row to `COST_LOG.md`.
- API-guides are documented per **provider**, not per version, because the
  optimization patterns (prompt caching, reasoning effort, structured
  outputs) are provider-API-level features that span versions.
