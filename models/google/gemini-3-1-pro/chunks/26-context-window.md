---
provider: google
model: gemini-3-1-pro
capability: context-window
chunk_id: 26-context-window
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 4
egoism_strikes_at_convergence: 1
tags: [context-window, 1m-tokens, output-cap, token-capacity]
related_chunks:
  - 16-long-context
  - 20-pricing
  - 40-unique-strengths
related_models:
  - anthropic/claude-opus-4-7
  - openai/gpt-5-5
peer_comparisons:
  - peer: anthropic/claude-opus-4-7
    relation: stronger
    note: "1M token input context with native audio/video. Opus 4.7 context window not documented in the converged profile for direct comparison."
---

**Summary** — Gemini 3.1 Pro has a 1,048,576 token input context window — one million tokens — supporting native audio, video, image, and text interleaving within a single context pass. Output is strictly capped at 64,000 tokens. A pricing cliff activates at 200k input tokens, doubling both input and output rates. This is the largest context window among documented frontier models in the Council OS at this research round.

**Specifics:**
- Input context: 1,048,576 tokens. (Source: profile Section 3, https://ai.google.dev/pricing)
- Output cap: 64,000 tokens maximum — strictly enforced regardless of input size. (Source: profile Section 3)
- Pricing cliff: inputs crossing 200k tokens double the per-token rate ($2→$4 input, $12→$18 output). (Source: profile Section 3)
- Implicit caching is available at the token level: 90% discount on cache reads ($0.20/1M). Auto-on by default for paid projects. (Source: profile Section 3)
- Audio and video count toward the 1M token budget: 8.4 hours audio ≈ fills a substantial portion; 1 hour video similarly. Exact token-per-second rates for audio/video not specified in the profile. (Source: profile Section 2)
- Needle-in-a-haystack recall: documented as high at 1M. Exact recall decay curve not provided. (Source: profile Section 2)

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-opus-4-7: Gemini's 1M context with native audio/video ingestion is structurally larger and more inclusive than documented for Opus 4.7. Opus 4.7's context limit not stated in the profile.
- vs. openai/gpt-5-5: GPT-5.5 context window not documented in the converged profile. No direct comparison available.

**Known limitations on this axis:**
- Output cap of 64k tokens is a hard ceiling — large synthesis tasks across 1M token inputs must be decomposed into multiple passes if output exceeds 64k. (Source: profile Section 3)
- 200k pricing cliff requires explicit budget modeling for large-document pipelines. (Source: profile Section 3)
- Cache TTL and minimum prefix size unknown — limits precise cache cost modeling. (Source: profile Section 3)

**Sources:**
- [Gemini API pricing](https://ai.google.dev/pricing)
- [Gemini 3.1 Pro model card](https://deepmind.google)
