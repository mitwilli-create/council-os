---
capability: pricing
last_updated: 2026-05-17
covers_models:
  - anthropic/claude-opus-4-7
  - anthropic/claude-sonnet-4-6
  - anthropic/claude-haiku-4-5
  - openai/gpt-5-5
  - openai/gpt-5-4
  - openai/gpt-5-3-chat-latest
  - google/gemini-3-1-pro
  - google/gemini-3-flash
  - xai/grok-4-3
  - xai/grok-4-20-multi-agent
  - perplexity/sonar-pro
  - perplexity/sonar-deep-research
  - perplexity/sonar-reasoning-pro
source_authority: dealbreaker_verified (12/13 models); sonar-deep-research: self_research
notes: >
  All figures in USD per million tokens unless otherwise stated.
  Workload column = 50k input + 2k output tokens, synchronous, uncached.
  Perplexity per-request fees and xAI sub-agent multipliers are NOT included in
  the workload column — see Hidden Costs section.
---

# Pricing Cross-Cut — Tier 1 Models

## Unified Comparison Table

Sorted by base output cost (cheapest → most expensive).

| Model | Input $/M | Output $/M | Cache read $/M | Batch discount | Special fees | 50k-in/2k-out $ |
|---|---|---|---|---|---|---|
| google/gemini-3-flash | $0.50 | $3.00 | ~$0.05 [inferred] | 50% off | none | **$0.031** |
| anthropic/claude-haiku-4-5 | $1.00 | $5.00 | $0.10 | 50% off | none | **$0.060** |
| xai/grok-4-3 | $1.25 | $2.50 | $0.20 | unquantified | TTS $4.20–$15/1M chars | **$0.068** |
| openai/gpt-5-3-chat-latest | $1.75 | $14.00 | $0.175 | unconfirmed | none | **$0.116** |
| xai/grok-4-20-multi-agent | $2.00 | $6.00 | ~$0.20 [inferred] | inferred | sub-agent 2–16× multiplier | **$0.112** sticker / **$0.22–$1.79** realized |
| perplexity/sonar-reasoning-pro | $2.00 | $8.00 | none documented | none documented | +$3/M reasoning tokens; +$2/M citations; +$5/1k searches | **$0.116** + surcharges |
| perplexity/sonar-deep-research | $2.00 | $8.00 | limited | none documented | +$3/M reasoning; +$2/M citations; +$5/1k searches | **$0.116** + surcharges |
| google/gemini-3-1-pro | $2.00 | $12.00 | $0.20 (auto) | 50% off | 200k token cliff → $4/$18 | **$0.124** |
| openai/gpt-5-4 | $2.50 | $15.00 | ~$0.25 [unverified 1st party] | unconfirmed | none | **$0.155** |
| anthropic/claude-sonnet-4-6 | $3.00 | $15.00 | $0.30 | 50% off | none | **$0.180** |
| perplexity/sonar-pro | $3.00 | $15.00 | none documented | none documented | +$6–$14/1k requests | **$0.180** + per-req fee |
| anthropic/claude-opus-4-7 | $5.00 | $25.00 | $0.50 | 50% off | tokenizer inflation 1.0–1.35× | **$0.300** |
| openai/gpt-5-5 | $5.00 | $30.00 | unverified | 50% off | none | **$0.310** |
| openai/gpt-5-5-pro | $30.00 | $180.00 | unknown | unknown | none | **$1.860** |

**Cache read rates** apply to repeated prefixes after a cache-write. Anthropic requires explicit `cache_control` opt-in. Google Gemini 3.1 Pro caches automatically on paid projects. OpenAI and xAI caching details are partially unverified — check live pricing pages before budgeting.

---

## Price Tiers

### Tier A — Under $2/M output (cheap-volume)

| Model | Output $/M | Notes |
|---|---|---|
| google/gemini-3-flash | $3.00 | Best price-per-quality in this tier; 4-stage thinking control |
| xai/grok-4-3 | $2.50 | Cheapest output in the set; 1M context window |
| anthropic/claude-haiku-4-5 | $5.00 | 10× cheaper than Sonnet in cached batch; best Anthropic-family worker |

### Tier B — $5–15/M output (mid-tier)

| Model | Output $/M | Notes |
|---|---|---|
| google/gemini-3-1-pro | $12.00 | 2.5× cheaper input than Opus; 2M context; pricing cliff at 200k |
| openai/gpt-5-4 | $15.00 | Half the cost of GPT-5.5; competitive SWE-bench gap |
| anthropic/claude-sonnet-4-6 | $15.00 | 40% cheaper than Opus; lowest Anthropic cache prefix (1,024 tokens) |
| perplexity/sonar-pro | $15.00 | Add $6–$14/1k requests on top; penalizes high-call-volume workloads |
| openai/gpt-5-3-chat-latest | $14.00 | Instant tier; 128k/16k caps; OpenAI does NOT recommend for production |

### Tier C — $15+/M output (premium)

| Model | Output $/M | Notes |
|---|---|---|
| xai/grok-4-20-multi-agent | $6.00 sticker ($48–$96 realized at xhigh) | Multiplier makes this the most expensive model in practice |
| anthropic/claude-opus-4-7 | $25.00 | Tokenizer inflation adds 0–35% effective cost on top of sticker |
| openai/gpt-5-5 | $30.00 | ~40% fewer output tokens vs. GPT-5.4 on Codex tasks — effective premium ~20% |
| perplexity/sonar-deep-research | $8.00 + reasoning/citation/search | Illustrative run: $0.41 for 7k output tokens |
| perplexity/sonar-reasoning-pro | $8.00 + $3/M reasoning tokens | Reasoning surcharge dominates; 12k CoT = $0.036 extra/call |
| openai/gpt-5-5-pro | $180.00 | 6× GPT-5.5; reserve for highest-stakes research only |

---

## Routing Recommendations

### Cheap-volume / high-throughput
Use when cost is the dominant constraint and tasks are bounded (classification, triage, extraction, short-schema evaluation).

1. **google/gemini-3-flash** — best absolute cost; automatic caching; 1M context
2. **anthropic/claude-haiku-4-5** — best Anthropic-ecosystem worker; 10× cheaper than Sonnet in cached batch
3. **xai/grok-4-3** — cheapest output in the set; 1M context; xAI-native workloads

### Mid-tier / balanced quality-cost
Use when the premium-tier quality ceiling is not required but bounded tasks have real quality stakes.

1. **google/gemini-3-1-pro** — 2.5× cheaper input than Opus; strong multi-tool reasoning; watch 200k cliff
2. **anthropic/claude-sonnet-4-6** — routing default in the Anthropic family; adaptive thinking; lowest Anthropic cache prefix
3. **openai/gpt-5-4** — half the cost of GPT-5.5; competitive on coding/professional work

### Premium-only
Reserve for orchestration, synthesis, final judgment, SWE-bench-Pro-class agentic tasks, or where a wrong output is materially more expensive than model cost.

1. **anthropic/claude-opus-4-7** — peak code/reasoning quality; computer use; account for tokenizer inflation
2. **openai/gpt-5-5** — max agentic/Terminal-Bench accuracy; 40% output-token efficiency vs. GPT-5.4
3. **xai/grok-4-20-multi-agent** — only when the task genuinely requires parallel sub-agent debate at scale; budget for 2–16× multiplier

### Search-augmented / web-grounded
For tasks requiring real-time web retrieval, use Perplexity models, but apply strict routing:
- **Sonar** ($1/$1) for casual Q&A or ≤127k context
- **Sonar Pro** for 200k context or complex single-call research — include per-request fee in budget
- **Sonar Reasoning Pro** for tasks requiring visible chain-of-thought — account for reasoning-token surcharge
- **Sonar Deep Research** only for exhaustive multi-source synthesis (>15 searches expected); costs are non-linearly unpredictable

---

## Hidden Costs — Critical Callouts

### 1. Grok 4.20 Multi-Agent sub-agent billing multiplier
**This is the biggest hidden cost trap in the set.**
The $2/$6 sticker applies per token — including all sub-agent tokens and tool tokens. At 4-agent low/medium effort, effective output cost is 2–4× sticker. At 16-agent xhigh effort: 8–16×. Realized output cost at xhigh: **$48–$96 per 1M effective output tokens** vs. the $6 sticker. Teams comparing sticker prices face systematic budget overruns. Use Grok 4.3 (no multiplier) or a non-xAI model for tasks that don't require parallel debate.

### 2. Perplexity per-request fees (Sonar Pro) and multi-dimension billing (SDR, Reasoning Pro)
Sonar Pro charges **$6–$14 per 1,000 requests** on top of token costs (band mapping not published). High-call-volume workloads — e.g., 10,000 API calls/day — add $60–$140/day before a single token is counted. Sonar Deep Research and Sonar Reasoning Pro also bill separately for reasoning tokens ($3/M), citation tokens ($2/M), and search queries ($5/1k). An SDR call emitting 74k reasoning tokens + 20k citation tokens + 18 searches costs ~$0.41 for 7k visible output tokens — the visible output is ~17% of total cost.

### 3. Anthropic cache invalidation on context toggles (Opus 4.7)
Anthropic's `cache_control` is opt-in and position-sensitive. Any change to a cached prefix position invalidates the cache and triggers a new write at $6.25–$10/MTok. Pipelines that dynamically insert content before a cached block — e.g., per-call tool results injected at the top — will continuously re-write cache rather than hit it. Additionally, Opus 4.7's minimum cacheable prefix is **4,096 tokens**, meaning short-prompt, high-volume workloads receive zero cache benefit. The 1-hour TTL write costs 2× the 5-minute write — use only when reuse genuinely spans an hour.

### 4. Gemini 3.1 Pro 200k token pricing cliff
Input/output costs **double** at 200k tokens (from $2/$12 to $4/$18 per MTok). Any pipeline processing large documents at volume must model the threshold explicitly. A document at 195k tokens costs $0.39/M input; the same document at 205k tokens costs $0.82/M input — a 110% jump for a 5% context increase.

### 5. Opus 4.7 tokenizer inflation
The new Claude Opus 4.7 tokenizer emits 1.0–1.35× more tokens for identical input vs. Opus 4.6. The sticker price ($5/$25) is unchanged, but effective per-task cost is materially higher. Token-counting code calibrated against Opus 4.6 underestimates 4.7 costs. Recalibrate before budgeting.

---

## Summary (under 200 words)

**Cheapest 3 (50k-in/2k-out workload):**
1. Gemini 3 Flash — $0.031 (automatic caching, 1M context, no special fees)
2. Haiku 4.5 — $0.060 (best Anthropic worker; 10× cheaper than Sonnet in cached batch)
3. Grok 4.3 — $0.068 (cheapest output in the set at $2.50/M; 1M context)

**Most expensive 3:**
1. GPT-5.5 Pro — $1.86 (6× GPT-5.5; reserve for highest-value research)
2. GPT-5.5 — $0.31 (premium justified by Terminal-Bench/ARC-AGI-2 headroom)
3. Opus 4.7 — $0.30 (+ tokenizer inflation adds 0–35% effective cost on top)

**Biggest hidden-cost trap:** Grok 4.20 Multi-Agent. The $2/$6 sticker becomes $48–$96/M effective output tokens at 16-agent xhigh depth — a 16× multiplier invisible in sticker comparisons.

**Most surprising price-per-quality insight:** Gemini 3 Flash ($0.50/$3.00) delivers ~90.4% GPQA and top-tier MMMU-Pro vision at 4–8× less than Gemini 3.1 Pro. For the majority of reasoning and vision tasks, the cost to move from Flash to Pro buys less than 2% GPQA improvement — a poor trade-off for most workloads.
