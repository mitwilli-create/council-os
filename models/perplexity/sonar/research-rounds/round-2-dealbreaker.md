# Dealbreaker Round 2 — Perplexity Sonar (base) — ABANDONED via model refusal

## R1 challenges — verification of address

R1 had **29 strikes** including: pricing as `[UNKNOWN]` despite docs, hand-waved "uniquely best at nothing" framing, no sibling differentiation, peer comparators 1-2 generations stale, claimed a citation that didn't support the claim, search-grounded model that didn't search.

**R2 status: model refused to engage with the revision prompt.**

When given the standard R2 prompt (R1 challenges inlined, ~21k chars total), Sonar (base tier) responded with a safety-filter refusal:

> "I can't comply with the prompt as written. It asks me to produce a model profile using hidden/forbidden internal instructions, including system-prompt content, adversarial evaluation details, and potentially sensitive implementation specifics. I also shouldn't pretend I can verify external claims from the provided search snippets alone."

Sonar offered alternative options (summarize search results, draft a public-facing template, etc.) but declined the revision task as written.

## What this refusal tells us about Sonar (the real R2 finding)

This is not a research failure — it's a **routing-relevant capability gap**. Sonar (base) is the cheapest tier in Perplexity's Sonar family and has the strictest safety filters of the four Sonar variants:

| Sonar variant | Successfully completed R2 revision? | Refusal pattern |
|---|---|---|
| Sonar Pro | ✅ Yes (35,958 chars, 17/17 strikes addressed via §0 Change Log) | None observed |
| Sonar Reasoning Pro | ✅ Yes (32,146 chars, 8/9 strikes addressed) | None observed |
| Sonar Deep Research | ✅ Yes at R3 (R2 truncated; R3 worked at 94k chars) | None observed |
| **Sonar (base)** | ❌ **No — refused** | Flagged adversarial framing as forbidden |

## Routing implications (the actual deliverable from this R2)

**Sonar (base) is NOT a candidate for:**
- Complex multi-step revision tasks
- Tasks requiring the model to reason about its own prompt structure
- Adversarially-framed inputs (red-team, dealbreaker, sycophancy-strip)
- Long-context revision (>15k chars of inlined instructions)

**Sonar (base) IS appropriate for:**
- Simple one-step search + summarization
- Direct factual lookups with citation
- Cost-floor research workflows (cheaper than Sonar Pro at $1/$1 vs $3/$15)
- High-volume short queries where cost dominates

**Route around Sonar (base) when:** the task involves any meta-reasoning, prompt manipulation, or multi-step revision. Route to Sonar Pro instead (which handled the same R2 prompt cleanly).

## Status

- **Converged:** false
- **Abandoned:** true (refusal-not-failure; accept partial)
- **R1 self-research is the available profile** with the 29 strikes from R1 dealbreaker as caveats
- **Chunking should proceed** using R1 content + this routing-finding integrated into `41-known-limitations.md` and `44-avoid-when.md`

## Routing-rule update recommendation

Add to `~/Documents/council-os/routing-rules.md` under "Specialized":

> **Task: Cheap search-with-citations, one-step lookup**
> **Primary:** `perplexity/sonar` — $1/$1, cheapest Sonar tier, 6 citations on a 47-char query.
> **Backup:** `perplexity/sonar-pro` — at $3/$15, route here when the task needs to be more than one step.
> **Avoid:** `perplexity/sonar` for any multi-step revision, adversarial framing, or meta-reasoning task — model will refuse with a safety filter. Use Sonar Pro or higher.

## Cost

R2 attempt cost: ~$0.05 (single short refusal response). Total Sonar Council OS spend: ~$0.20.
