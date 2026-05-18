---
generated: 2026-05-17
source: 13 converged Tier-1 model profiles (Round 2, except sonar-deep-research at Round 3)
status: active
---

# Council OS — Routing Rules

The "which model for which task" guide, built from the converged Tier-1 profiles
after the Council ↔ Dealbreaker loop. Use this when you (or a calling agent)
need to pick the right model for a specific job.

---

## How to read this guide

Every task family below follows the same shape:

```
## Task: <task description>

**Primary:** <provider/model-slug> — <one-line rationale with benchmark or pricing anchor>
- Evidence: [`models/{provider}/{slug}/chunks/{relevant-chunk}.md`](path)
- Confidence: <high|medium|low>

**Backup:** <provider/model-slug> — <when primary unavailable or fails>

**Avoid:** <provider/model-slug(s)> — <why specifically>
```

Notes on confidence:
- **high** — multiple converged profiles cite the same benchmark with a named comparator and the score gap is decisive (≥5 pts on the relevant benchmark, or a structural capability gap like "only X supports audio in").
- **medium** — one converged profile cites a benchmark with a comparator, or the gap is narrow (≤3 pts) and routing is decided on cost/latency instead.
- **low** — the routing decision rests on `[INFERRED]` or `[UNKNOWN]` markers in the profiles; treat as a working guess until benchmarked.

When two models are within noise on the headline metric, route on cost. When
named benchmarks are absent, that is called out explicitly with "no clear
winner — pick by cost" so the caller knows the choice is heuristic.

---

## Quick-reference matrix

| Task family | Primary | Backup | Avoid |
|---|---|---|---|
| Deep web research with citations | perplexity/sonar-deep-research | openai/gpt-5-5-pro (BrowseComp 90.1%) | anthropic/claude-opus-4-7 (BrowseComp 79.3%) |
| Quick factual lookup with citations | perplexity/sonar-pro | google/gemini-3-1-pro (native Search) | openai/gpt-5-3-chat-latest (no built-in web) |
| Real-time X/Twitter signal | xai/grok-4-3 | xai/grok-4-20-multi-agent | all non-xAI models (no first-party x_search) |
| Multi-source reasoning + synthesis | perplexity/sonar-reasoning-pro | xai/grok-4-20-multi-agent | perplexity/sonar-pro (no visible CoT) |
| Hard math/logic reasoning | anthropic/claude-opus-4-7 | google/gemini-3-1-pro | perplexity/sonar-pro (no benchmarks) |
| Multi-step tool planning (MCP) | anthropic/claude-opus-4-7 (MCP-Atlas 77.3%) | openai/gpt-5-5 (75.3%) | google/gemini-3-flash (no MCP confirmed) |
| Long-document / legal / financial analysis | anthropic/claude-sonnet-4-6 (1M / ~750k words) | google/gemini-3-1-pro | perplexity/sonar-reasoning-pro (128k) |
| High-stakes single-response synthesis | anthropic/claude-opus-4-7 | google/gemini-3-1-pro | openai/gpt-5-3-chat-latest (Instant tier) |
| Agentic coding (long-horizon, multi-file) | anthropic/claude-opus-4-7 (SWE-Pro 64.3%) | openai/gpt-5-5 | google/gemini-3-flash |
| One-shot code generation | anthropic/claude-sonnet-4-6 | openai/gpt-5-4 | openai/gpt-5-3-chat-latest |
| Code review + debugging | anthropic/claude-opus-4-7 | openai/gpt-5-5 | perplexity/sonar-* family |
| Large-codebase migration / refactor | anthropic/claude-opus-4-7 | openai/gpt-5-5 (Terminal-Bench 82.7%) | anthropic/claude-haiku-4-5 (200k cap) |
| Vision: photo understanding | google/gemini-3-1-pro | anthropic/claude-opus-4-7 | perplexity/* (text-only API) |
| Vision: document / screenshot OCR | google/gemini-3-flash (MMMU-Pro 81.2%) | anthropic/claude-opus-4-7 (DocVQA 93.0%) | perplexity/* (no vision API) |
| Audio: native dialogue (A2A) | google/gemini-3-1-pro (8.4hr audio) | openai/gpt-5-5 (multimodal) | all Anthropic, Perplexity, xAI (no native audio) |
| Video understanding | google/gemini-3-1-pro (1hr video) | openai/gpt-5-5 | xai/grok-4-3 (video input present but unbenchmarked) |
| High-volume cheap factual queries | anthropic/claude-haiku-4-5 | google/gemini-3-flash | anthropic/claude-opus-4-7 (5x cost) |
| Long-context (>200k tokens) | anthropic/claude-sonnet-4-6 (1M) | google/gemini-3-1-pro (1M, audio/video too) | anthropic/claude-haiku-4-5 (200k cap) |
| Structured output / JSON schema | anthropic/claude-sonnet-4-6 (strict grammar) | openai/gpt-5-4 | perplexity/sonar-reasoning-pro (soft only) |
| Cost-sensitive workloads (mini/nano) | anthropic/claude-haiku-4-5 | google/gemini-3-flash | anthropic/claude-opus-4-7 |
| Browser / computer use | anthropic/claude-opus-4-7 (OSWorld 78.0%) | google/gemini-3-1-pro (browser-first) | perplexity/* (no native) |
| Multi-agent parallel orchestration | xai/grok-4-20-multi-agent | (no peer offers single-API parallel agents) | xai/grok-4-3 (single-pass) |
| Council "lead" orchestrator | anthropic/claude-opus-4-7 | google/gemini-3-1-pro | smaller / cheaper siblings |
| **Cost-floor: cheapest model for bounded factual lookups** | google/gemini-3-1-flash-lite ($0.25/$1.50) | xai/grok-3-mini ($0.30/$0.50) | perplexity/sonar for complex tasks (safety filter blocks revision prompts) |
| **Cheapest grounded search-with-citations** | perplexity/sonar ($1/$1) for single-step queries | perplexity/sonar-pro ($3/$15) when multi-step or adversarial framing needed | sonar (base) for ANY revision / meta-reasoning task — refuses |
| **High-volume / cheap factual queries** | anthropic/claude-haiku-4-5 ($1/$5) | google/gemini-3-1-flash-lite ($0.25/$1.50) | premium-tier models (10x cost overhead) |

---

## Research + grounding

### Task: Deep web research with citations across hundreds of sources

**Primary:** `perplexity/sonar-deep-research` — Purpose-built multi-stage pipeline (dozens of searches, hundreds of sources, multi-step synthesis, citation tokens billed separately). The only model in the lineup where deep research is the *product*, not a tool layered on a generic chat model.
- Evidence: [`models/perplexity/sonar-deep-research/research-rounds/round-3-self-research.md`](models/perplexity/sonar-deep-research/research-rounds/round-3-self-research.md) §§2.3, 3.1, 5.2
- Confidence: medium (no public head-to-head benchmark vs. GPT-5.5 Pro Deep Research; routing leans on architecture + price-per-deep-run, not a benchmark gap)

**Backup:** `openai/gpt-5-5-pro` — BrowseComp 90.1% vs. Sonar Deep Research [UNKNOWN]. Use when the workload is a single high-stakes multi-hop research run and the 6× sticker premium over base GPT-5.5 ($30/$180) is justified by failure cost. Source: GPT-5.5 R2 profile §5.

**Avoid:** `anthropic/claude-opus-4-7` (BrowseComp 79.3% — 10.8 pts behind GPT-5.5 Pro), `anthropic/claude-haiku-4-5` (too cheap a model for multi-hop research; quality ceiling too low), and base `perplexity/sonar-pro` for genuinely exhaustive multi-pass research (Sonar Pro is the "single rich call" tier, Deep Research is the multi-pass tier — Sonar Pro's own profile says >15 queries / >50 citations is Deep Research's crossover).

---

### Task: Quick factual lookup with citations

**Primary:** `perplexity/sonar-pro` — $3/$15 with built-in web search + JSON Schema output + 200k context in a single API call. No external RAG to wire up. After Perplexity dropped citation-token charges for Sonar Pro in 2026, the cost shape is predictable: $0.18 token cost on a 50k-in / 2k-out query plus the per-request fee.
- Evidence: [`models/perplexity/sonar-pro/research-rounds/round-2-self-research.md`](models/perplexity/sonar-pro/research-rounds/round-2-self-research.md) §§2.3, 3.1
- Confidence: high

**Backup:** `google/gemini-3-1-pro` — Native Google Search grounding integrated at model surface (no separate orchestration); $2/$12 ≤200k. Use when the lookup also needs Maps grounding or when the corpus is already on Vertex AI.

**Avoid:** `openai/gpt-5-3-chat-latest` (no built-in web; would need an external fetch tool), and `anthropic/claude-*` (web_search exists but toggling it invalidates the system + messages cache, which makes ad-hoc lookups expensive in long sessions).

---

### Task: Real-time / social-signal awareness (X/Twitter chatter)

**Primary:** `xai/grok-4-3` — Native `x_search` over the public X timeline is xAI-only as of mid-2026. Claude Opus 4.7, GPT-5.5, and Gemini 3.1 Pro have no first-party X retrieval surface. Grok 4.3 is 38–58% cheaper than Grok 4.20 Multi-Agent ($1.25/$2.50 vs. $2/$6) and wins on Intelligence Index for non-collaborative tasks.
- Evidence: [`models/xai/grok-4-3/research-rounds/round-2-self-research.md`](models/xai/grok-4-3/research-rounds/round-2-self-research.md) §§2.3, 5; [`models/xai/grok-4-20-multi-agent/research-rounds/round-2-self-research.md`](models/xai/grok-4-20-multi-agent/research-rounds/round-2-self-research.md) §4
- Confidence: high (structural exclusivity — no peer has the surface)

**Backup:** `xai/grok-4-20-multi-agent` — When X-search needs to be cross-verified by parallel agent debate in a single API call (4 or 16 agents, encrypted sub-thoughts available). The 2-16× sub-agent token billing multiplier means $0.10 single-agent queries can cost $0.40–$1.60 — only worth it when external scaffolding on Grok 4.3 would cost more than the multi-agent premium.

**Avoid:** Any non-xAI model when X discourse is the corpus. Web-search tools on Claude/GPT/Gemini can hit X.com, but quality, freshness, and engagement signals are all worse than first-party `x_search`.

---

### Task: Multi-source synthesis with reasoning (auditable CoT)

**Primary:** `perplexity/sonar-reasoning-pro` — Built on DeepSeek-R1; exposes the chain-of-thought in `<think>...</think>` blocks (billed at $3/1M reasoning tokens). When the *trace* is the deliverable — Council deliberations, AIME proofs, legal hypotheticals — this is the only model that makes the reasoning explicit and auditable.
- Evidence: [`models/perplexity/sonar-reasoning-pro/research-rounds/round-2-self-research.md`](models/perplexity/sonar-reasoning-pro/research-rounds/round-2-self-research.md) §§2.1, 5.2
- Confidence: high (structural — competitors hide their CoT)

**Backup:** `xai/grok-4-20-multi-agent` — When the synthesis benefits from parallel agent debate (hallucination reduction cited at 65–83%). Different mechanism (parallel agents with leader synthesis) but produces a similar "many perspectives → one answer" effect at a similar price ($2/$6 sticker before sub-agent multiplier).

**Avoid:** `perplexity/sonar-pro` (no visible CoT; hides exactly what makes Reasoning Pro worth its premium), and `anthropic/claude-opus-4-7` adaptive thinking (silently truncates internal reasoning when implicit budget hits — no exposed knob, no warning to caller).

---

## Reasoning + analysis

### Task: Hard math / logic problems

**Primary:** `anthropic/claude-opus-4-7` — Humanity's Last Exam 46.9% vs. GPT-5.5 41.4% and Gemini 3.1 Pro 44.4%; GPQA Diamond 94.2% essentially tied with Gemini 3.1 Pro at 94.3%. Adaptive thinking handles graduate-level problems with tight specification.
- Evidence: [`models/anthropic/claude-opus-4-7/research-rounds/round-2-self-research.md`](models/anthropic/claude-opus-4-7/research-rounds/round-2-self-research.md) §§2 Reasoning, 5
- Confidence: high (multiple cross-citations: Opus, Sonnet, GPT-5.5, Gemini profiles all corroborate the HLE ordering)

**Backup:** `google/gemini-3-1-pro` — Wins GPQA Diamond at 94.3% vs. Opus 4.7's 94.2% (statistical tie). Route here when the task is science-heavy and you want a different family's bias. Gemini also leads ARC-AGI-2 at 77.1% among publicly available models.

**Avoid:** `perplexity/sonar-pro` and `sonar-reasoning-pro` (no published GPQA / AIME / MATH scores; benchable.ai puts the family below frontier peers). `anthropic/claude-sonnet-4-6` at no-thinking baseline drops to 74.1% GPQA — 1-in-4 wrong on graduate science is too high a floor for math/logic.

---

### Task: Multi-step planning with named tools (MCP)

**Primary:** `anthropic/claude-opus-4-7` — MCP-Atlas 77.3% vs. GPT-5.5 75.3% (2.0 pt lead), Gemini 3.1 Pro 73.9%, GPT-5.4 68.1%. `defer_loading` preserves prefix cache when new tools are discovered through tool-search — Anthropic-specific.
- Evidence: [`models/anthropic/claude-opus-4-7/research-rounds/round-2-self-research.md`](models/anthropic/claude-opus-4-7/research-rounds/round-2-self-research.md) §§2 Tool use, 5
- Confidence: high (4-way named comparison)

**Backup:** `openai/gpt-5-5` — 2-point gap is narrow; if the task has fewer than ~5 tools or is single-turn, Opus's MCP-Atlas lead shrinks and GPT-5.5's `phase` parameter + Responses API + Terminal-Bench strength (82.7%) makes it competitive.

**Avoid:** `google/gemini-3-flash` (MCP support [UNKNOWN — would need verification]), `perplexity/sonar-*` (no first-party function calling / MCP), and `xai/grok-4-20-multi-agent` (no client-side function calling — only remote MCP, which means existing tool inventories require a migration tax).

---

### Task: Document analysis (legal, financial, long PDFs)

**Primary:** `anthropic/claude-sonnet-4-6` — 1M context window holds ~750k words vs. Opus 4.7's ~555k words (Opus's new tokenizer packs less English text per token). $3/$15 vs. Opus's $5/$25 — 40% cheaper. Extended thinking surface retained for budget-controlled deep reads.
- Evidence: [`models/anthropic/claude-sonnet-4-6/research-rounds/round-2-self-research.md`](models/anthropic/claude-sonnet-4-6/research-rounds/round-2-self-research.md) §2 Long context
- Confidence: high (effective-context-per-token is a structural advantage)

**Backup:** `google/gemini-3-1-pro` — Same 1M context plus native Google Search grounding for fact-checking citations in the document against current law/filings. Watch the >200k pricing tier doubling ($4/$18).

**Avoid:** `perplexity/sonar-reasoning-pro` (128k cap — smallest in Perplexity's paid Sonar lineup), and `anthropic/claude-haiku-4-5` (200k context cap rules out anything >50 pages).

---

### Task: High-stakes single-response synthesis where accuracy matters most

**Primary:** `anthropic/claude-opus-4-7` — Humanity's Last Exam lead, MCP-Atlas lead, SWE-bench Pro lead, OSWorld lead. When you only get one shot at the answer and accuracy beats cost, Opus 4.7 sits at the top of the price/quality curve across reasoning + tools + coding + GUI.
- Evidence: [`models/anthropic/claude-opus-4-7/research-rounds/round-2-self-research.md`](models/anthropic/claude-opus-4-7/research-rounds/round-2-self-research.md) §§5, 7
- Confidence: high

**Backup:** `google/gemini-3-1-pro` — When the task benefits from Search grounding inside the synthesis. GPQA Diamond 94.3% vs. Opus 94.2% is a tie at the top.

**Avoid:** `openai/gpt-5-3-chat-latest` (OpenAI's own docs say *do not use Instant family for production* — use GPT-5.5 instead), and any "mini/nano/haiku" tier on a single-shot high-stakes task.

---

## Code generation

### Task: Agentic coding (long-horizon, multi-file edits)

**Primary:** `anthropic/claude-opus-4-7` — SWE-bench Pro 64.3% vs. GPT-5.5 58.6% and Gemini 3.1 Pro 54.2%. The harder split; the easier SWE-bench Verified split has memorization concerns at every frontier lab. Pair with the `text_editor` / `bash` / `computer_use` first-party tools for end-to-end agentic loops.
- Evidence: [`models/anthropic/claude-opus-4-7/research-rounds/round-2-self-research.md`](models/anthropic/claude-opus-4-7/research-rounds/round-2-self-research.md) §§2 Code generation, 5
- Confidence: high (Scale Labs SWE-bench Pro leaderboard, 3-way comparison)

**Backup:** `openai/gpt-5-5` — Terminal-Bench 2.0 82.7% vs. Opus 4.7 69.4% (13.3 pt gap). When the agent is unattended and runs as a long shell loop rather than an IDE-integrated session, GPT-5.5 wins. If the project is a Codex-style IDE agent specifically, `openai/gpt-5-3-codex` is the OpenAI-recommended sibling (per GPT-5.5's own profile §5).

**Avoid:** `google/gemini-3-flash` (SWE-bench Verified 78% — meaningfully behind both leaders), and `perplexity/sonar-*` (no execution sandbox; not benchmarked on SWE-bench-class).

---

### Task: One-shot code generation (single function / file)

**Primary:** `anthropic/claude-sonnet-4-6` — SWE-bench Verified 79.6% at $3/$15, Tyler Folkman's 7-category UX-weighted rubric scored Sonnet 4.6 at 68/100 vs. Opus 4.7's 63/100 (5-point Sonnet lead at 40% lower cost). When the rubric weights maintainability and UX alongside correctness, Sonnet wins.
- Evidence: [`models/anthropic/claude-sonnet-4-6/research-rounds/round-2-self-research.md`](models/anthropic/claude-sonnet-4-6/research-rounds/round-2-self-research.md) §§2 Code generation, 5
- Confidence: high

**Backup:** `openai/gpt-5-4` — $2.50/$15 (cheaper input than Sonnet); positioned by OpenAI as "a more affordable model for coding and professional work." 0.9 pts behind GPT-5.5 on SWE-bench Pro at half the sticker price. Use when budget is the binding constraint.

**Avoid:** `openai/gpt-5-3-chat-latest` (Instant tier, OpenAI explicitly recommends against production use), and `xai/grok-4-20-multi-agent` (sub-agent token multiplier makes one-shot codegen 2-16× more expensive than necessary).

---

### Task: Code review + debugging

**Primary:** `anthropic/claude-opus-4-7` — Higher SWE-bench Pro means it spots subtler bugs; literal instruction-following (post-4.7) makes it less likely to hand-wave past a problem. Watch the documented hallucination of commit SHAs / file paths / PR numbers — verify any identifier it cites.
- Evidence: [`models/anthropic/claude-opus-4-7/research-rounds/round-2-self-research.md`](models/anthropic/claude-opus-4-7/research-rounds/round-2-self-research.md) §6
- Confidence: medium (no clean "code review" benchmark; routing inferred from SWE-bench + tool-use leads)

**Backup:** `openai/gpt-5-5` — Strong on agentic loops; `phase` parameter helps distinguish reviewer-notes from final verdict in a multi-step review workflow.

**Avoid:** `perplexity/sonar-*` (no code execution sandbox; can't verify suspected bugs). `anthropic/claude-haiku-4-5` (acceptable for triage/labeling PRs but not for substantive review).

---

### Task: Migration / refactoring (large codebases)

**Primary:** `anthropic/claude-opus-4-7` — SWE-bench Pro lead + 1M context + 128k synchronous output cap (vs. Sonnet 4.6's 64k cap). For a refactor that must produce one coherent diff across many files, Opus's output cap matters.
- Evidence: [`models/anthropic/claude-opus-4-7/research-rounds/round-2-self-research.md`](models/anthropic/claude-opus-4-7/research-rounds/round-2-self-research.md) §§2 Long context, 7
- Confidence: high

**Backup:** `openai/gpt-5-5` — Terminal-Bench 82.7%; use when the refactor will run as an unattended shell-based agent loop rather than an interactive session. GPT-5.5 has 1,050,000-token context and 128k output cap per its profile.

**Avoid:** `anthropic/claude-haiku-4-5` (200k context cap — cannot hold a large codebase + tests + commits in one prompt), and `xai/grok-4-3` (1M context but output cap is [UNKNOWN]; risky for a single-pass refactor).

---

## Multimodal

### Task: Vision — photo understanding

**Primary:** `google/gemini-3-1-pro` — Native multimodal across text + images + audio + video in one model. Interleaves images and text natively; performs spatial mapping and OCR across multiple images simultaneously. The widest-coverage option for general photo understanding.
- Evidence: [`models/google/gemini-3-1-pro/research-rounds/round-2-self-research.md`](models/google/gemini-3-1-pro/research-rounds/round-2-self-research.md) §2 Vision
- Confidence: high

**Backup:** `anthropic/claude-opus-4-7` — DocVQA 93.0%; image input up to 2,576 px on the long edge (~3.75 MP per image, ~3× prior Claude models). Coordinates map 1:1 to pixels — important for any vision task that combines with computer use.

**Avoid:** `perplexity/sonar-*` (API surface is text-only — Perplexity's consumer product has image upload, but the Sonar Pro API doesn't expose general vision), and `xai/grok-4-20-multi-agent` (no audio/video; jpg/png only, ~20 MiB cap).

---

### Task: Vision — document / screenshot OCR

**Primary:** `google/gemini-3-flash` — MMMU-Pro 81.2% (Google's top vision score, edges out Gemini 3.1 Pro on this specific modality), with `media_resolution` parameter to balance cost and OCR accuracy at $0.50/$3.00.
- Evidence: [`models/google/gemini-3-flash/research-rounds/round-2-self-research.md`](models/google/gemini-3-flash/research-rounds/round-2-self-research.md) §§2 Vision, 7
- Confidence: high

**Backup:** `anthropic/claude-opus-4-7` — DocVQA 93.0% on standard document images; MindStudio claims a 5–8 pt lead on 50+ page PDF split (single-source — treat as preliminary until Anthropic publishes first-party long-doc numbers). Use when the document is long-form (forensic PDF review) and OCR + reasoning need to happen in the same call.

**Avoid:** `perplexity/sonar-*` (no vision API), `openai/gpt-5-4` with `detail: auto` (OpenAI's own docs warn `auto` is unreliable for OCR / computer use — specify `detail: high` explicitly if routing here).

---

### Task: Audio — native dialogue (A2A)

**Primary:** `google/gemini-3-1-pro` — Natively ingests up to 8.4 hours of audio in a single prompt; the audio is *inside* the 1M-token context window rather than transcribed-then-reasoned-over.
- Evidence: [`models/google/gemini-3-1-pro/research-rounds/round-2-self-research.md`](models/google/gemini-3-1-pro/research-rounds/round-2-self-research.md) §2 Audio
- Confidence: high (structural — peer audio is bolt-on)

**Backup:** `openai/gpt-5-5` (paired with realtime siblings) — Per GPT-5.5's own profile, route native audio to `gpt-realtime-2`, `gpt-audio-1.5`, `gpt-realtime-translate`, or `gpt-realtime-whisper` rather than to base GPT-5.5. For sub-400ms bidirectional voice, `google/gemini-3-1-flash-live` is the named target.

**Avoid:** All Anthropic models (Opus 4.7, Sonnet 4.6, Haiku 4.5 — categorically no audio), all Perplexity models (text-only API), and base xAI Grok variants (Grok 4.3 has dedicated STT/TTS APIs at $4.20/1M chars but no native audio input in the base model).

---

### Task: Video understanding

**Primary:** `google/gemini-3-1-pro` — Up to 1 hour of video natively in the 1M context window. Video frames extracted at a fixed fps — does not interpret 60fps high-motion nuance cleanly.
- Evidence: [`models/google/gemini-3-1-pro/research-rounds/round-2-self-research.md`](models/google/gemini-3-1-pro/research-rounds/round-2-self-research.md) §2 Audio
- Confidence: high (only model in the lineup that explicitly takes video in)

**Backup:** `openai/gpt-5-5` — Multimodal architecture unifies text/image/audio/video; specifics of video API surface are [UNKNOWN — would need current OpenAI video API docs] per GPT-5.5's own profile.

**Avoid:** `xai/grok-4-3` (video input is documented as present but unbenchmarked and likely thin), and all Anthropic / Perplexity (no video).

---

## Operational

### Task: High-volume cheap factual queries

**Primary:** `anthropic/claude-haiku-4-5` — $1/$5 (80% cheaper than Opus 4.7), SWE-bench Verified 73.3% (only 6.3 pts behind Sonnet 4.6 at 1/3 the price), Extended thinking still supported. The canonical career-ops triage example: 1,000 items at 5k input / 500 output ≈ $7.50 on Haiku vs. ~$31 on Opus.
- Evidence: [`models/anthropic/claude-haiku-4-5/research-rounds/round-2-self-research.md`](models/anthropic/claude-haiku-4-5/research-rounds/round-2-self-research.md); [`models/anthropic/claude-opus-4-7/research-rounds/round-2-self-research.md`](models/anthropic/claude-opus-4-7/research-rounds/round-2-self-research.md) §5 (Haiku crossover)
- Confidence: high

**Backup:** `google/gemini-3-flash` — $0.50/$3.00 (cheaper input than Haiku, more expensive output). Use when the task is vision-heavy (Flash has the better MMMU-Pro score) or when the workload is already on Vertex.

**Avoid:** `anthropic/claude-opus-4-7` (5× cost for marginal quality on bounded tasks), `xai/grok-4-20-multi-agent` (sub-agent multiplier on cheap queries is wasteful), and `perplexity/sonar-deep-research` (5 RPM cap, multi-second latency, $0.41 per illustrative query).

---

### Task: Long-context document analysis (>200k tokens)

**Primary:** `anthropic/claude-sonnet-4-6` — 1M context with effective ~750k word coverage (35% more text per token than Opus 4.7 because of the older tokenizer). $3/$15. Minimum cacheable prefix is 1,024 tokens (vs. 4,096 on Opus 4.7), so short-prompt high-volume workloads in the 1,024–4,095 token range can use prompt caching on Sonnet but cannot on Opus.
- Evidence: [`models/anthropic/claude-sonnet-4-6/research-rounds/round-2-self-research.md`](models/anthropic/claude-sonnet-4-6/research-rounds/round-2-self-research.md) §§2 Long context, 5
- Confidence: high

**Backup:** `google/gemini-3-1-pro` — Same 1M context plus native audio/video stream ingestion within the window. Use when the long context includes media, not just text. Watch the >200k pricing tier ($4/$18).

**Avoid:** `anthropic/claude-haiku-4-5` (200k cap), `perplexity/sonar-reasoning-pro` (128k — smallest in Perplexity's paid lineup), and `openai/gpt-5-3-chat-latest` (128k context, 16k output cap — silently drops 272k of context if migrating from chat-latest's 400k window).

---

### Task: Structured output extraction (JSON schema enforcement)

**Primary:** `anthropic/claude-sonnet-4-6` — Strict tool use (`strict: true`) and JSON outputs (`output_config.format`) compile JSON schemas into a grammar that constrains generation. Compiled grammars cache for 24 hours from last use. At $3/$15 the per-item cost is well below Opus.
- Evidence: [`models/anthropic/claude-sonnet-4-6/research-rounds/round-2-self-research.md`](models/anthropic/claude-sonnet-4-6/research-rounds/round-2-self-research.md) §2 Structured output
- Confidence: high

**Backup:** `openai/gpt-5-4` — Structured outputs via `response_format`; OpenAI's prompt guidance warns that mini models can ignore "output nothing else" — scoped instructions are safer. Use when the upstream pipeline is already on the OpenAI Responses API.

**Avoid:** `perplexity/sonar-reasoning-pro` (no server-enforced JSON mode; soft prompting only), and `openai/gpt-5-3-chat-latest` (supports `response_format: json_schema` but the Instant tier strictness is documented to drift on deeply nested schemas).

---

### Task: Cost-sensitive workloads (mini / nano tier)

**Primary:** `anthropic/claude-haiku-4-5` — $1/$5 with Extended thinking, 200k context, OSWorld 50.7% (highest Haiku ever — exceeds Sonnet 4.6's 42.2% on computer use). Cache-warm batch cost ~$0.30 per 1k input tokens.
- Evidence: [`models/anthropic/claude-haiku-4-5/research-rounds/round-2-self-research.md`](models/anthropic/claude-haiku-4-5/research-rounds/round-2-self-research.md)
- Confidence: high

**Backup:** `google/gemini-3-flash` ($0.50/$3.00) or `google/gemini-3-1-flash-lite` ($0.25/$1.50) — Flash-Lite is 8× cheaper than Gemini 3.1 Pro on input and 8× cheaper on output, defaults to `minimal` thinking. Route here when scale exceeds ~100 calls/session and the task is bounded extraction.

**Avoid:** All "Pro" tier models for tasks that don't need them. `xai/grok-4-20-multi-agent` is the worst pick (the multi-agent overhead defeats the purpose of cheap workloads).

---

## Specialized

### Task: Browser automation / computer use

**Primary:** `anthropic/claude-opus-4-7` — OSWorld-Verified 78.0% vs. GPT-5.4 75.0%. First-party `computer_use` tool with 3.75 MP screenshot ceiling and coordinates that map 1:1 to pixels (fixes a Sonnet/Opus 4.6 scale-factor bug). GPT-5.5's OSWorld score is [UNKNOWN — would need a benchmark] so Opus is still the named leader.
- Evidence: [`models/anthropic/claude-opus-4-7/research-rounds/round-2-self-research.md`](models/anthropic/claude-opus-4-7/research-rounds/round-2-self-research.md) §2 Agentic
- Confidence: medium (Opus leads the verified comparison, but GPT-5.5 hasn't been measured)

**Backup:** `google/gemini-3-1-pro` — Native Computer Use via the Gemini 2.5 migration path (`gemini-2.5-computer-use` routing). Browser-first optimization; documented as weaker than specialized agents on OS-level desktop manipulation. Use for web-form navigation specifically.

**Avoid:** `perplexity/sonar-*` (no native browser/OS control beyond their own web search), `xai/grok-*` (no native computer use), and `anthropic/claude-sonnet-4-6` (over-eager GUI completion is a documented failure mode — claims "email sent" when the send button is broken).

---

### Task: Multi-agent parallel orchestration

**Primary:** `xai/grok-4-20-multi-agent` — The only frontier model that exposes parallel-agent collaboration (4 or 16 agents, leader-only output, optional encrypted sub-thoughts) in a single API call. Hallucination reduction cited at 65–83% (xAI's own measurement) and 78% non-hallucination on Artificial Analysis's Omniscience.
- Evidence: [`models/xai/grok-4-20-multi-agent/research-rounds/round-2-self-research.md`](models/xai/grok-4-20-multi-agent/research-rounds/round-2-self-research.md) §5
- Confidence: high (structural exclusivity)

**Backup:** None — peers (Claude Opus 4.7, GPT-5.5, Gemini 3.1 Pro) can replicate the *outcome* via external scaffolding (run N parallel calls, synthesize with a final-call lead), but they don't offer the single-API surface. If the multi-agent token billing multiplier (2-16× cost) makes the API unaffordable, route to Opus 4.7 with explicit caller-side parallel orchestration.

**Avoid:** `xai/grok-4-3` for tasks that *do* need parallel agent debate (single-pass model). Conversely, route there for anything that doesn't need multi-agent — Grok 4.3 wins on Intelligence Index, GDPval-AA Elo, cost, and latency for single-agent tasks.

---

### Task: Council-of-models orchestration (which model to call as "lead")

**Primary:** `anthropic/claude-opus-4-7` — When orchestrating other models in a Council pattern, the "lead" needs (a) strong reasoning to evaluate other models' outputs, (b) reliable MCP tool calling to delegate to peers, (c) high-quality structured output for the final synthesis. Opus 4.7 leads MCP-Atlas (77.3%), Humanity's Last Exam (46.9%), and SWE-bench Pro — the relevant axes for an orchestrator.
- Evidence: [`models/anthropic/claude-opus-4-7/research-rounds/round-2-self-research.md`](models/anthropic/claude-opus-4-7/research-rounds/round-2-self-research.md) §§2 Tool use, 5
- Confidence: high

**Backup:** `google/gemini-3-1-pro` — When the orchestrator also needs Search grounding to fact-check peer outputs in flight, or when audio/video are part of the corpus the Council is reasoning over. ARC-AGI-2 lead (77.1%) also useful for abstraction-heavy adjudication.

**Avoid:** Smaller/cheaper siblings (Haiku, Flash, mini, nano) as the lead — the orchestrator's reasoning quality bounds the Council's output ceiling. Also avoid `xai/grok-4-20-multi-agent` as the lead specifically (its no-client-side-function-calling constraint adds friction when the orchestrator needs to call arbitrary custom tools, not just remote MCP).

---

*Auto-generated from converged Tier-1 profiles. Re-run `scripts/orchestrate.md` Phase 4 after any model profile updates.*
