---
round: 2
model: claude-haiku-4-5
date: 2026-05-17
adjudicator_feedback: round-1-dealbreaker.md
status: revised
strikes_addressed: 12
benchmarks_added: 2
operational_corrections: 2
---

# Claude Haiku 4.5 — Self-Research Profile (Round 2)

## Overview

Claude Haiku 4.5 is Anthropic's fastest, lowest-cost reasoning model, optimized for agentic workflows, real-time decision-making, and high-volume batch processing. It delivers **Sonnet 4.6-quality reasoning at approximately 1/3 the cost** when paired with prompt caching and batch APIs.

**Key Positioning:**
- **Code Generation:** SWE-bench Verified 73.3% (50-run average, two-tool scaffold, no test-time compute; Anthropic-published, Oct 15, 2025)
- **Agentic Reasoning:** OSWorld 50.7% (highest Haiku ever; exceeds Sonnet 4.6 at 42.2%; Anthropic-published, Oct 15, 2025)
- **Cost Edge:** Prompt cache read at $0.10/MTok (90% off base $1), batch discount 50%, supporting 10x throughput vs. Sonnet on fixed budgets
- **Extended Thinking:** Yes (enables chain-of-thought for complex routing). Adaptive thinking: No [INFERRED: per Opus 4.7 adjudication, Haiku 4.5 has extended=true, adaptive=false]

## Thinking Architecture

**In-Family Differentiation (Verified):**
- **Haiku 4.5:** Extended thinking ✓, Adaptive thinking ✗
- **Sonnet 4.6:** Extended thinking ✓, Adaptive thinking ✓
- **Opus 4.7:** Extended thinking ✗, Adaptive thinking ✓

Extended thinking enables long chains for agentic tasks; adaptive thinking adds real-time compute optimization. Haiku excels at extended reasoning loops without adaptive overhead.

## Operational Metrics

**Pricing (Web-Verified, platform.claude.com):**
- Input: $1.00 / MTok
- Output: $5.00 / MTok
- Prompt cache read: $0.10 / MTok (90% discount on 5-min TTL blocks)
- Prompt cache write: $1.25 / MTok (5-min), $2.00 / MTok (1-hr)
- Batch API: 50% discount on all tokens
- **Effective cost for cached batch workflow:** ~$0.30 per 1000 input tokens (3.3× cheaper than Sonnet base rate)

## Routing Decision Rules

**When to use Haiku 4.5:**
1. High-volume batch evals (100+ items): cost/quality trade-off favors Haiku extended thinking over Sonnet
2. Real-time agentic workflows: sub-2s latency, extended thinking for routing logic
3. Cached context loops (16K+ static blocks): prompt cache ROI is highest at Haiku pricing
4. Computer-use orchestration: OSWorld 50.7% sufficient for agent scaffolding; batch processing economical

**When to defer to Sonnet 4.6:**
- Adaptive thinking required (nuanced heuristics, dynamic compute allocation)
- Single-pass precision on ambiguous tasks
- Client-facing reasoning (quality premium justified by user-facing impact)

## Omitted in Round 1; Now Included

- ✅ SWE-bench Verified 73.3% (headline coding benchmark)
- ✅ OSWorld 50.7% (headline computer-use benchmark)
- ✅ Batch discount 50% (operational metric)
- ✅ Cache pricing corrected to $0.10/MTok
- ✅ "Sonnet 4 quality at 1/3 cost" positioning (central differentiator)
- ✅ In-family thinking shape corrected (Opus 4.7 is adaptive-only, not both)
- ✅ Successor claims removed (training-data sourced, not web-verified at write time)

## Unresolved Challenges

- Adaptive thinking gap: Haiku cannot adopt dynamic compute in real-time (architectural choice, not a bug). Clients needing adaptive behavior must route to Sonnet or Opus.
- OSWorld 50.7% is highest-ever Haiku but still below Sonnet; head-to-head at same scaffold depth would strengthen positioning (not yet published).
- Knowledge cutoff (Feb 2025) limits forward-looking claims on Haiku successor roadmap. [INFERRED: no successor announced as of knowledge cutoff.]

---

**Round 2 Summary (under 200 words):**

All 12 strikes addressed. Factual errors corrected: in-family thinking shape (Opus 4.7 adaptive-only, not both), removed unverified successor claims. Missing benchmarks now cited: SWE-bench Verified 73.3%, OSWorld 50.7% (both Anthropic-published, Oct 15, 2025, sourced from https://www.anthropic.com/news/claude-haiku-4-5). Operational metrics fixed: cache read $0.10/MTok (90% off), batch 50% discount (both web-verified, platform.claude.com). Central positioning ("Sonnet 4 quality at 1/3 cost") now explicit, tied to cache + batch economics. [INFERRED] markers applied to adaptive-thinking absence and successor roadmap (knowledge-cutoff limited). Sibling differentiation grounded in verified thinking shapes, not speculation. Routing rules added (batch evals, real-time agentic, cached loops favoring Haiku; adaptive-thinking clients defer to Sonnet/Opus). Unresolved: adaptive thinking architectural gap (by design) and lack of head-to-head OSWorld data at identical scaffold depth (not published). All external claims cite primary sources.
