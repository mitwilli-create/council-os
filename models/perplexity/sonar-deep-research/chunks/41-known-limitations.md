---
provider: perplexity
model: sonar-deep-research
capability: known-limitations
chunk_id: 41-known-limitations
last_research_round: 3
last_updated: 2026-05-17
verified_by_dealbreaker: false
source_authority: self_research
confidence: medium
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [limitations, truncation, citation-errors, latency, rate-limits, no-vision, no-tools]
related_chunks: [12-web-grounding, 21-latency-throughput, 22-rate-limits, 44-avoid-when, 13-vision, 11-tool-use]
related_models: [perplexity/sonar-pro, openai/gpt-5-5, anthropic/claude-opus-4-7]
peer_comparisons:
  - peer: openai/gpt-5-5
    relation: weaker
    note: "GPT-5.5 supports function calling, vision, and code. SDR lacks all three. GPT-5.5 also has formal SWE-Bench / Terminal-Bench scores; SDR has none."
  - peer: anthropic/claude-opus-4-7
    relation: weaker
    note: "Claude Opus 4.7 supports MCP-integrated tools, vision, 200k context, and hard JSON mode. SDR has none of these."
---

**Summary** — Sonar Deep Research's most operationally significant limitations: (1) silent output truncation with no error signal; (2) citation errors analogous to Sonar Pro's CJR-documented ~37% problem rate; (3) 5 RPM rate ceiling; (4) 20–60+ second latency; (5) no function calling or MCP client capability; (6) no vision or audio; (7) opaque knowledge cutoff; (8) non-deterministic outputs across identical prompts; (9) hallucinated documents on narrow topics.

**Specifics:**
- **Silent truncation:** Outputs end abruptly mid-section around 2,000–3,000 tokens with `finish_reason: stop` and no error. Most dangerous failure mode — appears as a complete result. Mitigation: detect abrupt endings heuristically; verify expected sections are present. [INFERRED from community reports]
- **Citation reliability:** CJR study of Sonar Pro stack found ~37% citations problematic. SDR uses the same retrieval-citation infrastructure → analogous failure classes plausible. Not a confirmed quantitative transfer. Must spot-check citations in high-stakes domains.
- **Rate limits:** 5 RPM default. See 22-rate-limits.
- **Latency:** 20–60+ seconds. See 21-latency-throughput.
- **No function calling / MCP client:** Cannot call user-defined APIs. See 11-tool-use, 32-mcp-support.
- **No vision/audio:** Text-only. See 13-vision.
- **Opaque knowledge cutoff:** [UNKNOWN — not disclosed]. See 25-knowledge-cutoff.
- **Non-determinism:** Identical prompts produce different source sets and conclusions across runs — changes in live web content compound stochastic search selection.
- **Document hallucination:** On narrow or speculative topics, SDR may confidently reference non-existent documents (e.g., invented OECD whitepaper), drawing on training patterns for real organizations.
- **Refusal patterns:** Over-refusal possible for borderline safety research questions (extremism analysis, war crimes documentation) even in legitimate academic contexts. [INFERRED]
- **Long-turn drift:** Early conversation constraints forgotten or compressed after many turns; restate requirements per-call for extended projects.
- **No granular search budget control:** Cannot cap number of searches or reasoning depth per query; cost and latency are variable and user-uncontrollable.

**Compared to peers (sharpened by Dealbreaker):**
- vs. openai/gpt-5-5: GPT-5.5 lacks the silent truncation problem, supports vision and function calling, and has published code benchmarks. SDR's limitations are more numerous.
- vs. anthropic/claude-opus-4-7: Claude has a documented 200k context, hard JSON mode, and MCP client. SDR's 128k window + soft JSON + no MCP client are all weaker.

**Known limitations on this axis:**
- This list is not exhaustive — SDR is a complex pipeline with undocumented internals; new failure modes may emerge.

**Sources:**
- R3 self-research §§6.1–6.6 (round-3-self-research.md)
- CJR study (cited in §6.4)
- Community truncation reports (cited in §2.7, §6.3)
