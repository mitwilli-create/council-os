---
provider: google
model: gemini-3-1-pro
capability: known-limitations
chunk_id: 41-known-limitations
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 4
egoism_strikes_at_convergence: 1
tags: [limitations, failure-modes, 400-errors, gotchas, temperature, timeout]
related_chunks:
  - 10-reasoning
  - 11-tool-use
  - 18-structured-output
  - 21-latency-throughput
  - 44-avoid-when
related_models:
  - anthropic/claude-opus-4-7
peer_comparisons:
  - peer: anthropic/claude-opus-4-7
    relation: weaker
    note: "Broad enterprise task completion (GDPval-AA Elo 1317 vs 1633), software engineering (SWE-Bench Pro 54.2% vs 64.3%), agentic orchestration (MCP-Atlas 73.9% vs 77.3%)."
---

**Summary** — Gemini 3.1 Pro has four documented operational 400-error gotchas, a temperature warning that impacts deterministic workflows, high latency that creates timeout risk, and conservative safety refusal patterns. On competitive benchmarks, it trails Claude Opus 4.7 on software engineering, enterprise task completion, and general intelligence. Its structured output silently produces empty strings on deeply nested schemas rather than throwing errors.

**Specifics:**
- Thought signatures (400 error): multi-turn function calling chains throw a strict 400 error if thought signatures from prior turns are not preserved. Common integration pitfall. (Source: profile Section 6, _official-gemini-3-api.md line 125)
- Thinking parameter mutex (400 error): setting both `thinkingLevel` and `thinkingBudget` simultaneously triggers a mutual-exclusion 400 error. (Source: profile Section 6, _official-gemini-3-api.md line 172)
- Image generation (400 error): prompting native API image edits without metadata signatures triggers 400 errors. Native image generation routes to Veo 3.1 / Nano Banana 2 — not available on this model's API surface. (Source: profile Section 6, _official-gemini-3-api.md line 178)
- Temperature warning: adjusting temperature away from `1.0` triggers an official Google warning about potential "looping" behavior. Deterministic workflows requiring temperature near `0.0` risk output loops. (Source: profile Section 6, _official-gemini-3-api.md line 180)
- Latency / timeout risk: TTFT of 28.8–33.8s regularly exceeds 30–40s at peak load. Clients with default connection wait times will timeout before first token. (Source: profile Section 6, Artificial Analysis)
- Refusal patterns: inherits Google's conservative safety protocols. Likely to over-refuse on medical advice, dual-use cybersecurity code, and high-stakes financial calculations. `[INFERRED]` (Source: profile Section 6)
- Software engineering: SWE-Bench Pro 54.2% vs Claude Opus 4.7's 64.3%. (Source: profile Section 5, Scale Labs)
- Enterprise task work: GDPval-AA Elo 1317 vs Claude Sonnet 4.6's 1633. (Source: Artificial Analysis, Spectrum AI Lab)
- Structured output: deeply nested schemas with conditional grammar constraints silently return empty strings instead of throwing an error. `[INFERRED]` (Source: profile Section 2)
- Mathematical theorem proving: degrades without external Python sandbox tools. (Source: profile Section 6)

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-opus-4-7: weaker on enterprise task completion (316-point Elo gap), software engineering (10.1-point SWE-Bench gap), agentic orchestration (3.4-point MCP-Atlas gap), and general intelligence (2.5-point HLE gap). (Source: profile Section 5, Dealbreaker R2 spot checks)

**Known limitations on this axis:**
- All four 400-error gotchas are verified against official Google documentation. They require explicit handling in any production SDK wrapper. (Source: _official-gemini-3-api.md lines 125, 172, 178, 180)
- Temperature limitation is unusual among frontier models — most support deterministic `temperature=0.0` without instability. (Source: profile Section 6)

**Sources:**
- [_official-gemini-3-api.md lines 125, 172, 178, 180](../../../api-guides/google/_official-gemini-3-api.md)
- [Artificial Analysis latency benchmarks (March 2026)](https://artificialanalysis.ai)
- [Scale Labs SWE-Bench Pro](https://scale.com/leaderboard)
