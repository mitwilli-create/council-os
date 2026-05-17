---
provider: openai
model: gpt-5-5
capability: agentic-computer-use
chunk_id: 17-agentic-computer-use
last_research_round: 2
last_updated: 2026-05-17
verified_by_dealbreaker: true
source_authority: dealbreaker_verified
confidence: high
sycophancy_strikes_at_convergence: 0
egoism_strikes_at_convergence: 0
tags: [agentic, computer-use, terminal-bench, arc-agi, tool-loops, mcp]
related_chunks: [11-tool-use, 10-reasoning, 15-code-generation, 40-unique-strengths]
related_models:
  - anthropic/claude-opus-4-7
  - openai/gpt-5-3-codex
peer_comparisons:
  - peer: anthropic/claude-opus-4-7
    relation: stronger
    note: "Terminal-Bench 2.0: GPT-5.5 82.7% vs Claude Opus 4.7 69.4% (+13.3pp) — strongest documented lead"
  - peer: anthropic/claude-opus-4-7
    relation: weaker
    note: "MCP-Atlas: GPT-5.5 75.3% vs Claude Opus 4.7 77.3% — Claude leads on MCP-heavy workflows"
---

**Summary** — GPT-5.5 is designed for agentic work using tool calls, web/browser tools, shell/code execution, MCP servers, and long-horizon loops. Terminal-Bench 2.0 (82.7%) is its strongest documented benchmark lead — 13.3pp ahead of Claude Opus 4.7. ARC-AGI-2 (85.0%) confirms abstraction-reasoning strength. MCP-Atlas (75.3%) is a deficit vs Claude Opus 4.7 (77.3%).

**Specifics:**
- **Terminal-Bench 2.0:** **82.7%** (WebSearch confirmed). Leads GPT-5.4 by +7.6pp and Claude Opus 4.7 by +13.3pp. This is GPT-5.5's largest single peer benchmark lead.
- **ARC-AGI-2:** **85.0%** (WebSearch confirmed). Leads Claude Opus 4.7 (75.8%) and Gemini 3.1 Pro (77.1%).
- **MCP-Atlas:** **75.3%** vs Claude Opus 4.7 **77.3%** — 2pp deficit; Claude Opus 4.7 is preferred for MCP-heavy production workflows by this metric.
- **Computer-use note:** GPT-5.5 does not have direct OS/browser control unless an external computer-use tool is attached. The deprecated `computer-use-preview` model should not be used; GPT-5.5 replaces it only when paired with browser/OS tooling in the Responses API.
- **Responses API surface:** primary route for tool attachment, agent loops, and multi-step workflows.

**Compared to peers (sharpened by Dealbreaker):**
- vs. anthropic/claude-opus-4-7: GPT-5.5 leads decisively on Terminal-Bench (82.7% vs 69.4%) for terminal-based, tool-using, command-line agent tasks. Claude Opus 4.7 leads on MCP-Atlas (77.3% vs 75.3%) for MCP-heavy production workflows. Choose based on which benchmark proxy is closer to your task.
- vs. openai/gpt-5-3-codex: Use Codex for IDE-style autonomous coding agents (apply_patch, multi-hour sessions, compaction). Use GPT-5.5 for broader agentic workflows that mix research, documents, web, and code.

**Known limitations on this axis:**
- No native OS/browser control; requires external tooling through Responses API.
- Can persist down an incorrect plan in long loops when environment feedback is ambiguous.
- `computer-use-preview` is deprecated per Dealbreaker; do not route to it.

**Sources:**
- [OpenAI: Introducing GPT-5.5](https://openai.com/index/introducing-gpt-5-5)
- [officechai.com: GPT-5.5 tops ARC-AGI-2](https://officechai.com/ai/gpt-5-5-tops-arc-agi-2)
- Dealbreaker benchmark log (MCP-Atlas, Terminal-Bench scores)
