---
provider: perplexity
model: sonar
capability: known-limitations
chunk_id: 41-known-limitations
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: false
source_authority: self_research
confidence: low
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [limitations, failure-modes, safety-filter, refusal, hallucination, retrieval]
related_chunks: [42-refusal-patterns, 44-avoid-when, 12-web-grounding, 10-reasoning]
related_models: [perplexity/sonar-pro, perplexity/sonar-reasoning-pro]
peer_comparisons:
  - peer: perplexity/sonar-pro
    relation: weaker
    note: "Sonar Pro handled the same adversarial R2 prompt cleanly; Sonar base refused it — safety filters are strictest at this tier"
---

**Summary** — Sonar (base) has three critical, routing-relevant failure modes confirmed across R1 and R2: (1) hallucination on niche queries, (2) citation drift (cites URLs that do not support the claim), and (3) — most critically — **safety-filter refusal of adversarially-framed or multi-step revision prompts**. The R2 refusal is the most important routing finding for this model. Sonar base refused the standard Council OS R2 revision prompt, calling it "hidden/forbidden internal instructions." No other Sonar variant triggered this refusal.

**Specifics:**

1. **Safety-filter refusal of complex/adversarial prompts — CRITICAL ROUTING CONSTRAINT** [R2 Dealbreaker — the primary finding of R2]
   - Sonar base refused the 21k-char R2 prompt (standard Council OS revision format) as: "hidden/forbidden internal instructions, including system-prompt content, adversarial evaluation details, and potentially sensitive implementation specifics."
   - All three sibling Sonar variants (Pro, Reasoning Pro, Deep Research) completed the same R2 prompt without refusal.
   - This is the strictest safety filter observed in the Sonar family. It is a hard capability gap, not a style preference.
   - Trigger conditions observed: multi-step revision tasks, meta-reasoning about prompt structure, adversarially-framed inputs (red-team, critique, sycophancy-strip), long-context inlined instructions (>15k chars).

2. **Hallucination on niche queries** [R1 Dealbreaker Strike 28]
   - Documented failure mode — Sonar can generate plausible-sounding answers on niche topics that are not well-represented in retrieval results.

3. **Citation drift** [R1 Dealbreaker Strike 28]
   - Documented failure mode — Sonar can cite a URL whose actual content does not support the claim it is attributed to.

4. **Retrieval timeout / source instability** [self_research, [INFERRED]]
   - Search-backed systems slow or fail when retrieval is slow, rate-limited, or source pages are unstable.

5. **Per-request fee structure is unexpected** [R1 Dealbreaker Strike 17]
   - $5/1k low-context + $12/1k high-context requests are added to token pricing. Easy to omit from cost models.

6. **No research on itself** [R1 Dealbreaker executive verdict]
   - Sonar's R1 self-research contained 27 [UNKNOWN] and 18 [INFERRED] markers, including its own release date and model ID — despite being a search-grounded model whose job is web retrieval. This is a documented credibility signal about single-pass research quality.

**Compared to peers (sharpened by Dealbreaker):**
- vs. perplexity/sonar-pro: Sonar Pro has no observed safety-filter refusal on the R2 prompt; route complex multi-step tasks to Sonar Pro.
- vs. perplexity/sonar-reasoning-pro: similarly no refusal observed; route analytical/revision tasks there.

**Known limitations on this axis:**
- The safety-filter refusal pattern makes Sonar base unsuitable for any meta-reasoning or revision workflow in the Council OS context.

**Sources:**
- R2 Dealbreaker (refusal): `/models/perplexity/sonar/research-rounds/round-2-dealbreaker.md`
- R1 Dealbreaker Strikes 17, 28: `/models/perplexity/sonar/research-rounds/round-1-dealbreaker.md`
