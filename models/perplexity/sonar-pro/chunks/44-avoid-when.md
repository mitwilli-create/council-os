---
provider: perplexity
model: sonar-pro
capability: avoid-when
chunk_id: 44-avoid-when
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 1
tags: [routing, avoid-when, deflection, cross-provider, sibling-routing]
related_chunks: [43-ideal-tasks, 41-known-limitations, 40-unique-strengths, 13-vision, 15-code-generation, 17-agentic-computer-use]
related_models: [openai/gpt-5-5, openai/gpt-5-5-pro, anthropic/claude-4-7-opus, anthropic/claude-4-6-sonnet, google/gemini-3-1-pro, xai/grok-4-3, perplexity/sonar, perplexity/sonar-reasoning-pro, perplexity/sonar-deep-research]
peer_comparisons:
  - peer: openai/gpt-5-5-pro
    relation: weaker
    note: "Route complex coding, algorithm design, and advanced reasoning tasks to GPT-5.5 Pro. It has documented SWE-Bench and GPQA performance; Sonar Pro does not."
  - peer: anthropic/claude-4-7-opus
    relation: weaker
    note: "Route formal reasoning, complex coding, and offline long-context analysis to Claude 4.7 Opus. Also preferred for tasks in established agent frameworks (Anthropic tools + MCP)."
  - peer: google/gemini-3-1-pro
    relation: weaker
    note: "Route vision, audio, video, and multimodal tasks to Gemini 3.1 Pro. It has documented multimodal support; Sonar Pro does not at the API level."
  - peer: perplexity/sonar
    relation: weaker
    note: "Route simple or short-context queries (≤127k) to base Sonar — ~3.5x cheaper on tokens for the same web-grounding capability."
  - peer: perplexity/sonar-reasoning-pro
    relation: weaker
    note: "Route CoT-heavy or step-by-step reasoning tasks to Sonar Reasoning Pro — ~47% cheaper per output token and explicitly optimized for reasoning."
  - peer: perplexity/sonar-deep-research
    relation: weaker
    note: "Route exhaustive multi-pass investigations (>15 queries or >50 citations, minutes latency OK) to Sonar Deep Research."
---

**Summary** — Sonar Pro should not be used for vision tasks (no documented API-level image input), complex coding or formal reasoning (no benchmark data, weaker than specialized models), autonomous multi-tool agents (no first-party agent loop), exhaustive multi-pass research (Deep Research is better), or simple low-context queries (base Sonar is ~3.5x cheaper). The "avoid" list maps directly to the sibling crossover and peer analysis from the Dealbreaker-verified profile.

**Top 5 task types where Sonar Pro should NOT be used — and where to route instead:**

1. **Vision tasks (images, diagrams, charts, OCR)**
   - Route to: **GPT-5.5**, **Claude 4.x with vision**, or **Gemini 3.1 Pro**
   - Reason: Sonar Pro API has no documented image-input endpoint. All three alternatives have confirmed API-level vision support.

2. **High-stakes, complex coding and debugging**
   - Route to: **GPT-5.5 Pro** or **Claude 4.7 Opus**
   - Reason: Both have documented SWE-Bench and HumanEval performance. Sonar Pro has no published coding benchmarks. For large multi-file refactors or production-critical codegen, the risk of unknown capability is too high.

3. **Pure offline reasoning (air-gapped, no web allowed, or web is irrelevant)**
   - Route to: **Claude 4.7 Opus**, **GPT-5.5**, or **Gemini 3.1 Pro** with browsing disabled
   - Reason: Sonar Pro's web search machinery adds cost and latency without benefit in offline contexts, and may be incompatible with air-gapped constraints. These alternatives have stronger documented reasoning without web dependency.

4. **Autonomous multi-tool agents or complex workflows**
   - Route to: **OpenAI Assistants + GPT-5.5**, **Anthropic tools + Claude 4.7 / 4.6**, **Gemini 3.1 Pro + extensions**, or **Grok 4.3** (for X-native workflows)
   - Reason: Sonar Pro has no first-party agent framework. It can be a component inside an external orchestrator but cannot serve as the core agent engine.

5. **Exhaustive, multi-hour, multi-query research**
   - Route to: **Sonar Deep Research** (same provider)
   - Reason: For tasks requiring >15 queries or >50 citations, Deep Research's specialized multi-pass pipeline and cheaper token rates (at scale) make it both more capable and cost-effective. Sonar Pro would require multiple separate calls with repeated per-request fees.

**Within-family avoid signals:**
- Simple/short queries (≤127k context) → **Sonar** (~3.5x cheaper)
- Step-by-step CoT reasoning → **Sonar Reasoning Pro** (~47% cheaper per output token, purpose-built)
- Exhaustive multi-pass research → **Sonar Deep Research**

**Known limitations on this axis:**
- "Avoid for coding" is conservative given no benchmark data — Sonar Pro may handle routine coding tasks adequately. The avoid signal is for high-stakes or benchmarked-quality requirements.

**Sources:**
- [Perplexity Sonar model family docs](https://docs.perplexity.ai/docs/sonar/models)
- Round-2 self-research §5.1, §5.2, §7.2
- [CloudZero 2026 Perplexity pricing](https://www.cloudzero.com)
