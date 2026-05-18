---
provider: anthropic
model: claude-mythos-preview
capability: tool-use
chunk_id: 11-tool-use
last_research_round: 0
last_updated: 2026-05-18
verified_by_dealbreaker: true
source_authority: official_doc (public sources from llm-stats.com, anthropic.com/red, Cloud Security Alliance)
confidence: medium
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [tool-use, agentic, swe-bench, browsecomp, restricted-access, defensive-security]
related_chunks: [00-overview, 10-reasoning, 17-agentic-computer-use, 41-known-limitations, 42-restricted-access]
related_models: [anthropic:claude-opus-4-7, openai:gpt-5-5]
peer_comparisons:
  - peer: anthropic/claude-opus-4-7
    relation: stronger
    note: "Mythos SWE-bench Verified 93.9% vs Opus 4.7 ~78-83%. Mythos exploits vulnerabilities at 90× Opus 4.6's rate per Anthropic red team."
  - peer: openai/gpt-5-5
    relation: stronger
    note: "Mythos SWE-bench Pro 77.8% vs GPT-5.5 ~58% — substantial coding lead. But Mythos is RESTRICTED."
---

# Claude Mythos Preview — Tool Use & Agentic Capabilities

**[INFERRED FROM PUBLIC SOURCES — capability not first-hand testable without Glasswing access]**

**Summary** — Mythos posts the highest SWE-bench Verified score of any documented model (93.9%) and demonstrates extreme autonomous tool-use capability in the cybersec vertical, including chaining 4 vulnerabilities in a browser exploit and writing JIT heap sprays to escape sandboxes. BrowseComp 86.9% indicates strong web-grounded research.

**Specifics (verified via public sources):**
- **SWE-bench Verified: 93.9%** — highest documented score; new state-of-the-art ([NxCode](https://www.nxcode.io/resources/news/claude-mythos-benchmarks-93-swe-bench-every-record-broken-2026))
- **SWE-bench Pro: 77.8%**
- **BrowseComp: 86.9%** — multi-hop adversarial browsing
- **OSWorld: 79.6%** — desktop GUI automation
- **Tool surface:** standard Anthropic API tool use (function calling, parallel tool calls, MCP). Per Bedrock docs, supports text + image input, adaptive thinking.
- **Native cybersec tool capabilities** (the load-bearing differentiator per Anthropic's red team disclosure):
  - Autonomously discovered thousands of previously unknown vulnerabilities across major OS + browsers
  - Discovered a 27-year-old OpenBSD bug
  - Exploit-development rate ~90× higher than Opus 4.6
  - 83.1% first-attempt success on CyberGym proof-of-concept exploit reproduction
  - Demonstrated capability to chain 4 vulnerabilities into a working browser exploit (JIT heap spray escaping both renderer and OS sandboxes)
  - Autonomous local privilege escalation via race conditions + KASLR-bypass

**Compared to peers (sharpened by Dealbreaker):**
- vs. `anthropic:claude-opus-4-7`: Mythos leads SWE-bench Verified by ~10-15 pts. For general agentic coding, Opus 4.7 is the routable choice (no Glasswing friction). For defensive cybersec tool use specifically, Mythos's 90× exploit-dev rate is a structural advantage — but only callable by the ~52 vetted organizations.
- vs. `openai:gpt-5-5`: Mythos leads SWE-bench Pro 77.8% vs GPT-5.5 ~58%, BrowseComp 86.9% vs GPT-5.5's varies. GPT-5.5 wins Terminal-Bench (82.7% vs Mythos 82.0%) by 0.7pt — within noise.
- vs. `xai:grok-4-3` (with x_search): Mythos has no first-party X/social grounding. For social-signal tasks, route to Grok — Mythos's tool advantage is general agentic + cybersec, not social.

**Known limitations on this axis:**
- All capability claims sourced from Anthropic's own red-team disclosure + third-party coverage; no independent benchmark replication exists for the cybersec-specific claims.
- The "90× Opus 4.6" exploit-dev rate is Anthropic-published; no methodology document available publicly.
- Cannot be invoked from `lib/council.mjs` — adding a slot would 403 for non-Glasswing API keys.

**Sources:**
- [llm-stats.com Mythos benchmarks](https://llm-stats.com/models/claude-mythos-preview)
- [Anthropic red team disclosure](https://red.anthropic.com/2026/mythos-preview/)
- [Cloud Security Alliance assessment](https://labs.cloudsecurityalliance.org/research/ai-vuln-discovery-containment-claude-mythos-v1-0-csa-styled/)
- [Startup Defense — Mythos zero-day analysis](https://www.startupdefense.io/blog/claude-mythos-ai-finds-zero-days-missed-for-decades)
- [Amazon Bedrock Mythos model card](https://docs.aws.amazon.com/bedrock/latest/userguide/model-card-anthropic-claude-mythos-preview.html)
