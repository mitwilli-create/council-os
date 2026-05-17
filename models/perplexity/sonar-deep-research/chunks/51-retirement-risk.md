---
provider: perplexity
model: sonar-deep-research
capability: retirement-risk
chunk_id: 51-retirement-risk
last_research_round: 3
last_updated: 2026-05-17
verified_by_dealbreaker: false
source_authority: self_research
confidence: low
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [lifecycle, deprecation, retirement-risk, versioning, monitoring]
related_chunks: [50-release-history, 00-overview]
related_models: [perplexity/sonar-pro, perplexity/sonar-reasoning-pro]
peer_comparisons:
  - peer: openai/gpt-5-5
    relation: weaker
    note: "OpenAI publishes explicit lifecycle pages with deprecation dates. Perplexity has no equivalent public deprecation calendar."
---

**Summary** — Sonar Deep Research has no public deprecation date and no Perplexity deprecation calendar to monitor. It appears active in Perplexity's model catalog as of mid-2026. The only documented Sonar family retirement is `sonar-reasoning` → `sonar-reasoning-pro` (December 2025), which provided a short transition window. SDR is a flagship feature; abrupt removal in the near term is unlikely. Over a longer horizon, a successor deep research model (better LLM backbone, improved citation fidelity, optional tool use) is plausible. Integrators should build abstraction layers that can swap model IDs without major rework.

**Specifics:**
- Current status: active in Perplexity pricing docs and model catalog as of mid-2026. [INFERRED from R3 §8.3]
- No public deprecation notice or Perplexity deprecation calendar equivalent to OpenAI's lifecycle page.
- Single data point for Perplexity deprecation behavior: `sonar-reasoning` retired December 2025 with some transition overlap before `sonar-reasoning-pro` replaced it.
- No versioning transparency: `sonar-deep-research` model ID may silently alias to updated backends without announcement. Behavior regression tests are the only detection mechanism.
- Successor risk signals to monitor: (a) Perplexity blog/docs announcing a new deep research model; (b) Deep Research UX branding changes in consumer product; (c) new API response fields or parameters appearing; (d) rate limit or quota changes applied specifically to SDR.
- Near-term deprecation risk: low (flagship product position). Medium-term: moderate — a successor with better LLM backbone and citation fidelity is plausible within 12–24 months. [INFERRED]
- Design recommendation: use a model abstraction layer; never hard-code SDR behavior assumptions across versions.

**Compared to peers (sharpened by Dealbreaker):**
- vs. openai/gpt-5-5: OpenAI provides public deprecation schedules (e.g., gpt-4.1-2024-05-13 style naming with lifecycle pages). Perplexity's opacity is a risk differentiator.
- vs. anthropic/claude-opus-4-7: Anthropic announces model lifecycle publicly. Perplexity does not.

**Known limitations on this axis:**
- All deprecation risk assessment is inferred from the single `sonar-reasoning` precedent — single data point, low confidence.

**Sources:**
- R3 self-research §§8.1–8.4 (round-3-self-research.md)
- R2 dealbreaker verdict (s18_deprecation_lifecycle_missing — addressed in R3)
