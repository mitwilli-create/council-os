---
provider: anthropic
model: claude-mythos-preview
capability: pricing
chunk_id: 20-pricing
last_research_round: 0
last_updated: 2026-05-18
verified_by_dealbreaker: true
source_authority: official_doc (llm-stats.com, claudefa.st — multi-source verified)
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [pricing, cost, glasswing-credits, restricted-access]
related_chunks: [00-overview, 42-restricted-access, 44-avoid-when]
related_models: [anthropic:claude-opus-4-7, anthropic:claude-opus-4-6]
peer_comparisons:
  - peer: anthropic/claude-opus-4-7
    relation: weaker
    note: "Mythos $25/$125 is 5× Opus 4.7 sticker. Cost-quality only justifies Mythos when its narrow cybersec edge is decisive AND budget is non-issue (i.e., burning Glasswing credits)."
  - peer: anthropic/claude-haiku-4-5
    relation: weaker
    note: "Mythos $25/$125 is 25× Haiku 4.5 ($1/$5). For high-volume defensive triage, never Mythos."
---

# Claude Mythos Preview — Pricing

**Summary** — Mythos Preview is priced at **$25/$125 per million tokens** (input/output) for Glasswing partners — 5× Opus 4.6's $5/$25. Anthropic committed $100M in usage credits for Mythos across the ~52 vetted partner orgs, plus $4M in direct donations to open-source security organizations. For non-Glasswing users, pricing is academic — the model is not accessible.

**Specifics (multi-source verified 2026-05-18):**
- **Input: $25 per million tokens**
- **Output: $125 per million tokens**
- **Blended (~70/30 input/output split):** ~$55/MTok
- **Comparison:** 5× Claude Opus 4.6 ($5/$25). Same 5× ratio to Opus 4.7 ($5/$25 same sticker, plus 1.0-1.35× tokenizer inflation makes real cost gap narrower at the floor).
- **Anthropic's funding mechanism:** $100M in usage credits allocated across 12 founding Project Glasswing partners + 40 vetted critical-infrastructure organizations. The credit pool means individual cost-per-task may be effectively zero for participants up to their allocation.
- **Plus:** $4M in direct donations to open-source security organizations (Apache, OpenSSL Foundation, Internet Security Research Group, etc.)
- **Cost-log entry in this repo:** `lib/call-model.mjs` `appendCostLogRow` rate table includes `anthropic:claude-mythos-preview: 55` per MTok (blended) — updated 2026-05-18 (meta-audit v2 P0 #2) so the cost ledger doesn't underreport spend if a Mythos slot ever gets added to PROVIDERS.

**Compared to peers (sharpened by Dealbreaker):**
- vs. `anthropic:claude-opus-4-7` ($5/$25 + tokenizer inflation): Mythos costs 5× sticker. Only worth it for narrow defensive-cybersec tasks where Mythos's 90× exploit-development advantage materially changes outcomes — i.e., active offensive-research workflows under controlled conditions.
- vs. `openai:gpt-5-5` ($5/$15 blended ~$7): Mythos costs ~8× GPT-5.5 for similar reasoning/agentic benchmarks (within 1-2pts on most). The premium is for the cybersec vertical alignment, not for general capability.
- vs. `anthropic:claude-haiku-4-5` ($1/$5): Mythos costs ~25× Haiku. For high-volume defensive triage (e.g., ranking 10,000 vulnerability reports), Haiku is the right primary; reserve any Mythos burn for the top-priority items.

**Known limitations on this axis:**
- Pricing is only relevant for Glasswing participants. For Mitchell's current account, pricing is purely informational.
- The $100M usage-credit pool may give partner orgs effectively-free Mythos access up to allocation — which can distort cost-comparison if those partners publish workflows that assume free Mythos usage.
- Pricing does NOT include any premium for "responsible-use" auditing or red-team containment infrastructure that Glasswing partners likely also pay for.

**Sources:**
- [llm-stats.com Mythos launch + pricing](https://llm-stats.com/blog/research/claude-mythos-preview-launch)
- [claudefa.st Mythos breakdown](https://claudefa.st/blog/models/claude-mythos)
- [Project Glasswing partners + funding announcement](https://www.anthropic.com/project/glasswing)
- [llm-stats.com Mythos model page](https://llm-stats.com/models/claude-mythos-preview)
