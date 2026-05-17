# Prompt — Chunk a converged model profile

After the self-research ↔ Dealbreaker loop converges on a model profile,
this prompt splits the profile into RAG-friendly chunks per the taxonomy.

## Inputs

- Converged profile: {{PROFILE_PATH}}
- Final Dealbreaker verdict YAML: {{VERDICT_PATH}}
- Taxonomy: `../../../taxonomy.md`
- Output chunks directory: {{CHUNKS_DIR}}

## Process

For each capability axis in `taxonomy.md`:

1. Extract the relevant content from the converged profile.
2. Write a chunk file at `{{CHUNKS_DIR}}/{NN}-{capability}.md`.
3. Include frontmatter exactly per the schema in `taxonomy.md`.
4. If the profile says nothing about this axis: write a placeholder chunk
   with body `**Summary** — Not documented for this version. Unknown if
   supported. Test before relying on.` and frontmatter `confidence: low`,
   `source_authority: pending`.
5. Cross-reference peer chunks in `related_chunks`.
6. Cross-reference peer model versions with comparable capabilities in
   `related_models`.
7. Populate `peer_comparisons` with EXPLICIT named peers and the Dealbreaker-
   sharpened comparison from section 5 of the profile.

## Frontmatter inheritance from Dealbreaker verdict

From the final verdict YAML, set:
- `verified_by_dealbreaker: true` (all chunks of a converged profile)
- `sycophancy_strikes_at_convergence: <verdict.sycophantic_strikes>`
- `egoism_strikes_at_convergence: <verdict.egoistic_strikes>`
- `confidence`:
  - **high** if the chunk's claims all reference benchmarks or official docs
  - **medium** if claims are Dealbreaker-verified with named peer
    comparators but no benchmark
  - **low** if claims are `[INFERRED]` and survived only as caveat

## Body format

Every chunk body MUST follow this shape:

```markdown
**Summary** — one plain-language paragraph.

**Specifics:**
- Bullet with concrete detail, source-cited.
- ...

**Compared to peers (sharpened by Dealbreaker):**
- vs. {provider}/{version}: how this version differs (stronger / weaker /
  different-approach), with the specific task type the comparison applies to.
- ...

**Known limitations on this axis:**
- ...

**Sources:**
- [link 1](url)
- [link 2](url)
```

## After chunking

1. Regenerate `routing-rules.md` from the chunks across all converged models.
2. Update or create `capabilities/{capability}.md` cross-cuts comparing this
   model's chunk-N against all other converged models' chunk-N.
3. Append a row to `COST_LOG.md` if any API calls were made during chunking.
