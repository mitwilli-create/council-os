---
provider: perplexity
model: sonar-reasoning-pro
capability: refusal-patterns
chunk_id: 42-refusal-patterns
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: self_research
confidence: low
sycophancy_strikes_at_convergence: 2
egoism_strikes_at_convergence: 1
tags: [refusals, safety, deepseek-r1, political, censorship]
related_chunks: [41-known-limitations, 44-avoid-when]
related_models: [anthropic/claude-opus-4-7, openai/gpt-5-5]
peer_comparisons:
  - peer: anthropic/claude-opus-4-7
    relation: different-approach
    note: "Opus 4.7 has well-documented refusal behavior with documented carve-outs for operator permissions. Sonar Reasoning Pro's exact refusal layer (DeepSeek vs. Perplexity) is less transparent."
---

**Summary** — Sonar Reasoning Pro inherits safety behavior from both DeepSeek-R1 and Perplexity's own moderation layer. The interaction between these two safety systems is not publicly documented, creating uncertainty about exact refusal patterns. Known risk areas include: political persuasion on elections/geopolitics, self-harm, explicit sexual content, and China-related political topics (from DeepSeek's training). Confidence is low — direct probing required for task-specific safety calibration.

**Specifics:**
- Dual safety layers: DeepSeek-R1 base model safety + Perplexity's own moderation. Exact interaction undocumented. `[INFERRED FROM PROVIDER POLICIES]`
- Likely refusal domains (consistent with mainstream LLM safety standards):
  - Targeted political persuasion, especially on elections and sensitive geopolitics.
  - Self-harm, explicit sexual content, disallowed weapons guidance.
- Additional sensitivity to China-related political topics documented in DeepSeek community discussions; Perplexity may apply its own filters on top. Exact behavior requires direct testing. `[INFERRED]`
- No published refusal taxonomy from Perplexity for `sonar-reasoning-pro`.

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-opus-4-7: Opus 4.7 has documented operator permission overrides and Constitutional AI-grounded refusal behavior. Sonar Reasoning Pro's refusal layer is less transparent.
- vs. openai/gpt-5-5: GPT-5.5 has published usage policies and system-level refusal docs. Same transparency gap vs. Sonar Reasoning Pro.

**Known limitations on this axis:**
- Low confidence: no published refusal taxonomy. Test before deploying in sensitive topic areas.

**Sources:**
- Perplexity API usage policies. `[INFERRED FROM PROVIDER POLICIES]`
- DeepSeek-R1 community discussions re: political topic behavior. `[INFERRED]`
