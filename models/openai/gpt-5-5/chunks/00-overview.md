---
provider: openai
model: gpt-5-5
capability: overview
chunk_id: 00-overview
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [identity, positioning, siblings, release, api-id]
related_chunks: [40-unique-strengths, 43-ideal-tasks, 44-avoid-when]
related_models:
  - openai/gpt-5-4
  - openai/gpt-5-5-pro
  - openai/gpt-5-3-codex
peer_comparisons:
  - peer: anthropic/claude-opus-4-7
    relation: comparable
    note: "Direct frontier-tier peer; cross-provider comparisons in chunks 40/41/43/44"
  - peer: google/gemini-3-1-pro
    relation: comparable
    note: "Cross-provider frontier peer; benchmark comparisons in chunks 40/41"
---

**Summary** — GPT-5.5 is OpenAI's April 2026 frontier model in the GPT-5.x family, positioned for coding, professional work, long-horizon reasoning, and agentic/tool-heavy workflows. It is a closed, API-hosted model (not open-weight); OpenAI's open-weight family is separate (gpt-oss-120b, gpt-oss-20b). Its direct predecessor is GPT-5.4, not GPT-5.

**Specifics:**
- **Builder:** OpenAI.
- **Release date:** April 23–24, 2026. Triple-confirmed by WebSearch: openai.com/index/introducing-gpt-5-5, marktechpost.com/2026/04/23, officechai.com.
- **Official API model ID:** `gpt-5.5`. Pro sibling: `gpt-5.5-pro` (exact API string unverified).
- **Predecessor:** GPT-5.4. OpenAI prompt guidance explicitly documents "New in GPT-5.5 vs GPT-5.4."
- **Provider-stated positioning:** "A new class of intelligence for coding and professional work" (OpenAI _official-models-overview.md, cited by Dealbreaker).
- **Closest OpenAI siblings:** gpt-5.4, gpt-5.4-pro, gpt-5.4-mini, gpt-5.4-nano, gpt-5-mini, gpt-5-nano, gpt-5.3-codex, gpt-realtime-2, gpt-audio-1.5, gpt-realtime-translate, gpt-realtime-whisper, GPT Image 2.
- **Open-weight vs. closed:** GPT-5.5 is closed/hosted. OpenAI's open-weight line (gpt-oss-120b, gpt-oss-20b) is separate.

**Compared to peers (sharpened by Dealbreaker):**
- vs. openai/gpt-5-4: GPT-5.5 is the successor; it uses shorter outcome-first prompts (vs. GPT-5.4's process-heavy XML contracts), has a larger context window, and benchmarks higher on Terminal-Bench 2.0 (+7.6pp) and ARC-AGI-2 (+11.7pp). See 43-ideal-tasks for routing split.
- vs. openai/gpt-5-5-pro: Pro is the same generation but 6x higher price; the Pro tier targets high-value multi-hop research (BrowseComp Pro 90.1%).
- vs. openai/gpt-5-3-codex: Codex is the recommended agentic-coding route; GPT-5.5 is for mixed reasoning/research/tools workflows.

**Known limitations on this axis:**
- API model ID for the Pro variant (`gpt-5.5-pro` exact string) is unverified.
- Knowledge cutoff date not documented in the research materials.

**Sources:**
- [OpenAI: Introducing GPT-5.5](https://openai.com/index/introducing-gpt-5-5)
- [MarktechPost Apr 23 2026](https://marktechpost.com/2026/04/23)
- [OpenAI platform docs](https://platform.openai.com/docs)
