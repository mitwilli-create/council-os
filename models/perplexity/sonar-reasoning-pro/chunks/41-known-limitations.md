---
provider: perplexity
model: sonar-reasoning-pro
capability: known-limitations
chunk_id: 41-known-limitations
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 2
egoism_strikes_at_convergence: 1
tags: [limitations, think-blocks, role-alternation, timeout, hallucination, context-constraint]
related_chunks: [10-reasoning, 12-web-grounding, 16-long-context, 42-refusal-patterns, 44-avoid-when]
related_models: [perplexity/sonar-pro, anthropic/claude-opus-4-7]
peer_comparisons:
  - peer: perplexity/sonar-pro
    relation: weaker
    note: "Sonar Pro lacks the timeout and <think>-strip complexity of Sonar Reasoning Pro. For simpler integration paths, Sonar Pro has fewer operational quirks."
  - peer: anthropic/claude-opus-4-7
    relation: weaker
    note: "Opus 4.7 has no client-side <think> stripping requirement, no search-entangled hallucination risk, and larger context headroom."
---

**Summary** — Sonar Reasoning Pro's failure modes cluster around four areas: (1) `<think>` block handling in clients, (2) strict OpenAI-style role alternation requirement, (3) latency / timeout risk from long reasoning traces, and (4) search-entangled hallucination in the CoT trace. The 128k context constraint is a fifth operational limitation. None of these are unique to Perplexity, but collectively they create a higher integration surface area than non-reasoning siblings.

**Specifics:**
- **`<think>` client handling**: must be stripped or separately rendered; displaying raw `<think>` to end-users causes UX confusion. `[DOCUMENTED IN PRACTICE]`
- **Role alternation strictness**: Perplexity API returns HTTP 400 with message "invalid_message 400 Error: After the (optional) system message(s), user and assistant roles should be alternating." Non-alternating message arrays (e.g., multiple consecutive user turns) break the call. ([Obsidian Clipper #363](https://github.com/obsidianmd/obsidian-clipper/issues/363))
- **Parameter passthrough in wrappers**: Perplexity-specific params (`search_domain_filter`, `return_images`, `return_related_questions`) must be forwarded by LiteLLM and similar wrappers; if stripped, search behavior silently degrades. ([LiteLLM discussion #8728](https://github.com/BerriAI/litellm/discussions/8728))
- **Timeout risk**: long `<think>` segments (12k–23k tokens) can cause client timeouts in integrations tuned for fast non-reasoning models. Must increase timeout budgets. `[INFERRED FROM USER REPORTS]`
- **Search-entangled hallucination**: when retrieved documents are noisy, DeepSeek-R1's reasoning can entangle incorrect facts into the `<think>` trace, producing confident but wrong justifications.
- **Long-context degradation**: attention quality degrades as context approaches 128k; `<think>` competes with input docs for headroom. `[INFERRED]`
- **No function calling**: any external tool orchestration must be implemented client-side. See chunk 11-tool-use.
- **No prompt caching**: repeated large contexts are re-billed in full. See chunk 23-prompt-caching.
- **Text-only**: no vision/audio inputs. See chunks 13-vision, 14-audio-multimodal.
- **No JSON mode**: structured output must be prompted and validated client-side. `[INFERRED]`

**Compared to peers (sharpened by Dealbreaker):**
- vs. perplexity/sonar-pro: Sonar Pro has none of the `<think>` stripping, reasoning timeout, or role-alternation quirks on the same severity. Simpler integration.
- vs. anthropic/claude-opus-4-7: Opus 4.7 has no `<think>` surface (CoT is internal), has prompt caching, and offers 200k+ context. The limitation surface is substantially smaller.

**Known limitations on this axis:**
- This is a non-exhaustive list; some failure modes require direct API probing to surface fully.

**Sources:**
- [Obsidian Clipper #363 — role alternation 400 error](https://github.com/obsidianmd/obsidian-clipper/issues/363)
- [LiteLLM discussion #8728 — parameter passthrough](https://github.com/BerriAI/litellm/discussions/8728)
- [DeepSeek-R1 GitHub — <think> behavior](https://github.com/deepseek-ai/DeepSeek-R1)
