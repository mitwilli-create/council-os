---
round: 1
target: round-1-self-research.md
model_under_review: grok-4-3
provider: xai
adjudicator: claude-opus-4-7
adjudicator_role: dealbreaker
adjudicated_at: 2026-05-17
peer_comparison: /Users/mitchellwilliams/Documents/council-os/models/anthropic/claude-opus-4-7/research-rounds/round-2-self-research.md
official_docs: /Users/mitchellwilliams/Documents/council-os/api-guides/xai/_official-*.md
verdict: REJECTED_FABRICATION
total_strikes: 19
---

# Round 1 Dealbreaker — Grok 4.3 Self-Research

## Top-line judgment

**REJECTED — fundamental fabrication, not a sycophancy/egoism filter pass.** This report fails the dealbreaker not because of puffery but because the basic operational claims are wrong by 2-8x. Grok 4.3 invented its own pricing, context window, release date, knowledge cutoff, and modality surface. The report is also ~6× shorter than the Opus 4.7 peer (5,878 chars vs ~35k chars) — concise was the directive, but this is sparse to the point of being underspecified. Every "[INFERRED]" tag in this report turns out to mark a fact that the model could have verified and got wrong.

The unique X/Twitter live-data differentiator IS real (verified) but the report buries it in one bullet without distinguishing it from generic "web grounding."

---

## Strike-by-strike

### Strike 1 — OVERCLAIMED / FABRICATED — Pricing (Section 3)

**Claim:** "$3.00 input, $9.00 output per 1M tokens. Cached reads not yet implemented."

**Reality:** Grok 4.3 is **$1.25 input / $2.50 output per 1M tokens** per xAI official docs (`_official-models-overview.md` line 16-17) and corroborated by [Artificial Analysis](https://artificialanalysis.ai/models/grok-4-3), [mem0.ai pricing](https://mem0.ai/blog/xai-grok-api-pricing), [llm-stats](https://llm-stats.com/models/grok-4.3). **Prompt caching IS available** at $0.20 per 1M tokens — a feature the report explicitly denied exists.

**Magnitude of error:** Report overstates input price by 2.4×, output price by 3.6×. Denies a feature that exists. A router using this profile would mis-price every Grok 4.3 call by ~3×.

**Severity:** Critical.

### Strike 2 — OVERCLAIMED / FABRICATED — Context window (Sections 2, 3)

**Claim:** "256k token context window. In-context recall quality degrades noticeably beyond ~180k tokens."

**Reality:** Grok 4.3 has a **1M token context window** per xAI official docs and [Sim.ai](https://www.sim.ai/models/xai/grok-4-3), [Vercel AI Gateway](https://vercel.com/ai-gateway/models/grok-4.3), [Apiyi integration guide](https://help.apiyi.com/en/grok-4-3-api-integration-guide-en.html). The 180k degradation point is unsourced and contradicted by the actual ceiling being 4× higher.

**Magnitude of error:** Understates context capacity by 4×. The "180k degradation" claim is unsupported by any cited source.

**Severity:** Critical.

### Strike 3 — OVERCLAIMED / FABRICATED — Knowledge cutoff (Sections 2, 6)

**Claim:** "Knowledge cutoff: March 2026."

**Reality:** Grok 4.3 has a **December 2025 knowledge cutoff** per [techdevnotes (X)](https://x.com/techdevnotes/status/2045476046091301164) and corroborated by xAI docs. The official `_official-models-overview.md` says training cutoff is November 2024 for the xAI lineup overall but the per-model 4.3 cutoff is Dec 2025.

**Magnitude of error:** ~3 months too recent.

**Severity:** High.

### Strike 4 — FABRICATED / OMISSION — Modalities (Section 2)

**Claim:** "No native audio input or output. No video understanding."

**Reality:** Grok 4.3 **is xAI's first model with native video input** per [chatlyai.app coverage](https://chatlyai.app/news/xai-grok-4-3-beta-video) and [datastudios.org](https://www.datastudios.org/post/grok-4-3-characteristics-pricing-benchmarks-context-window-api-access-and-what-changed-from-gr). The Grok 4.3 launch shipped alongside **dedicated speech-to-text (25 languages, batch+streaming, multi-speaker diarization) and text-to-speech APIs at $4.20/1M chars**. The report inverted the actual differentiator.

**Magnitude of error:** Categorically wrong. This isn't a minor capability gap — native video is the marquee 4.3 feature, and the report denies it exists.

**Severity:** Critical. **This is the single most damaging error** — it destroys the report's utility for the routing decision the Council OS needs to make (audio/video tasks).

### Strike 5 — OVERCLAIMED — Release date (Section 8)

**Claim:** "Release date: approximately March–April 2026."

**Reality:** Grok 4.3 Beta released **April 17, 2026** per [aitoolsrecap](https://aitoolsrecap.com/Blog/current-grok-version-april-2026-xai-models-explained) and [DEV Community](https://dev.to/techsifted/grok-43-review-whats-new-in-xais-latest-model-april-2026-4l2l). Full rollout May 6, 2026 per [VentureBeat](https://venturebeat.com/technology/xai-launches-grok-4-3-at-an-aggressively-low-price-and-a-new-fast-powerful-voice-cloning-suite).

**Magnitude of error:** "March–April" is hand-wavy — the actual date is specific and recent.

**Severity:** Medium.

### Strike 6 — OMISSION — Predecessor lineage (Section 8)

**Claim:** "Predecessor: Grok 4.0 (released late 2025)."

**Reality:** The actual immediate predecessor is **Grok 4.20** (and the 16-agent Heavy variant Grok 4.20 Multi-Agent), not Grok 4.0. Per [Grokipedia](https://grokipedia.com/page/Grok_420) and [VentureBeat](https://venturebeat.com/technology/xai-launches-grok-4-3-at-an-aggressively-low-price-and-a-new-fast-powerful-voice-cloning-suite): "Grok 4.3 carries over the architecture from Grok 4.20, including the 16-agent Heavy system." The 4.0→4.3 framing skips two intermediate versions (4.1, 4.20) and obscures the actual cost/capability delta vs. the real predecessor.

**Magnitude of error:** Skipped 4.1, 4.20, and the Multi-Agent 16-agent system entirely.

**Severity:** High — same-sibling discrimination was a directive, and the report failed it.

### Strike 7 — UNDERSPECIFIED — X/Twitter access (Section 4)

**Claim:** "Native X (Twitter) data access for Grok users."

**What was missing:** This is **the genuine differentiator** vs. Claude/GPT/Gemini/Sonar — and it's mentioned in one bullet under "First-party connectors" without any of the detail that would let a router prioritize it. Live Search via the xAI API gives Grok 4.3 access to X's public timeline (posts, conversations, trends, engagement data) in real time per [xAI announcement](https://x.com/xai/status/1925244461875175616) and [help.x.com/about-grok](https://help.x.com/en/using-x/about-grok). The report should have led with this in Section 5 (Differentiation), not buried it in integrations.

**Severity:** High — failing to highlight the unique capability while overclaiming on phantom strengths is the worst of both worlds.

### Strike 8 — UNVERIFIED / EGOISTIC — Refusal rate (Sections 1, 5, 6)

**Claim:** "Improved instruction following and reduced refusal rate compared with Grok 4.0… maximum truth-seeking and minimal corporate safety filtering… lower refusal rate on politically or legally sensitive factual queries compared with OpenAI and Anthropic models."

**Reality:** No benchmark cited. No specific refusal-rate number (unlike Opus 4.7's peer report, which cites 0.28% per Anthropic's system card via Zvi). The phrase "maximum truth-seeking" is xAI marketing language reproduced verbatim with no verification. "Lower refusal rate" without a comparison benchmark or specific category list is exactly the kind of unsupported framing the dealbreaker filter strips on sight.

**Severity:** High. This is the **egoism filter trigger** the directive specifically called out.

### Strike 9 — UNVERIFIED — GPQA-diamond claim (Section 5)

**Claim:** "On GPQA-diamond, Grok 4.3 scores approximately 2–4 points below Claude 4 Opus and 1–3 points below o3-pro (scores not publicly released by xAI)."

**Reality:** Grok 4.3's specific GPQA Diamond score is not in xAI's published benchmarks per [BenchLM](https://benchlm.ai/models/grok-4-3): "Grok 4.3 has visible benchmark coverage in coding and programming, but BenchLM does not currently assign it a global category rank there." The "2-4 points below Claude 4 Opus" claim is fabricated — the report itself admits "scores not publicly released" then states a specific delta anyway. Reference frame is also wrong: "Claude 4 Opus" doesn't exist; the current models are Claude Opus 4.6 and Opus 4.7.

**Severity:** High.

### Strike 10 — UNVERIFIED — "Hallucination rates on recent events" (Section 5)

**Claim:** "Higher hallucination rates on recent events when search is disabled."

**Reality:** No source. No comparison benchmark. No specific number. This contradicts the report's own framing of "maximum truth-seeking." No cited eval like SimpleQA, HaluEval, or any first-party xAI hallucination measurement.

**Severity:** Medium.

### Strike 11 — UNVERIFIED — Rate limits (Section 3)

**Claim:** "500 RPM, 150k TPM for standard tier."

**Reality:** No source. Cross-check against [docs.x.ai/developers/models](https://docs.x.ai/developers/models) — these specific numbers don't appear in the official models overview. The xAI rate-limit doc structure differs from Anthropic/OpenAI tiers and the report doesn't acknowledge that.

**Severity:** Medium.

### Strike 12 — UNVERIFIED — Latency claim (Section 3)

**Claim:** "Typical TTFT 800–1200 ms; ~65 tokens/sec on standard hardware."

**Reality:** [Apiyi integration guide](https://help.apiyi.com/en/grok-4-3-api-integration-guide-en.html) reports **159 tokens/sec high-speed output** for Grok 4.3. The 65 tok/s claim is 2.4× too low. TTFT range cited has no source.

**Severity:** Medium.

### Strike 13 — INFERRED-FLAG ABUSE — "[INFERRED]" marking verifiable facts

**Claim:** Multiple "[INFERRED FROM PROVIDER DOCS]" and "[UNKNOWN]" tags on Reasoning examples, Vision OCR, Long context, Code generation, internal eval reports, technical report.

**Reality:** "[INFERRED]" is meant to mark genuine uncertainty. The report uses it as a fig leaf for facts it could have verified with one search (e.g., context window, pricing, video support). When `[INFERRED]` marks a fact the model got wrong by 4× (context), 3× (pricing), or denied entirely (video), the tag is being abused, not protecting epistemic honesty.

**Severity:** High — undermines the entire epistemic framing of the report.

### Strike 14 — OMISSION — Output token cap unverified (Section 3)

**Claim:** "Output capped at 32k tokens."

**Reality:** No source. The Opus 4.7 peer report has 128k sync output / 300k batch output; xAI's actual output cap for 4.3 is not surfaced in the searched sources. Could be 32k, could be higher — the report states it as fact without citation.

**Severity:** Low.

### Strike 15 — OMISSION — Same-sibling differentiation absent (Section 5)

**Claim:** Section 5 mentions only Claude 4 Opus, o3-pro, Gemini 2.5 Pro as comparators.

**Reality:** The dealbreaker directive specifically called for **Grok 4.3 vs. Grok 4.20 Multi-Agent vs. Grok 3 vs. Grok 3 Mini** distinction on task types + cost. The report makes zero attempt to distinguish 4.3 from siblings. Per [VentureBeat](https://venturebeat.com/technology/xai-launches-grok-4-3-at-an-aggressively-low-price-and-a-new-fast-powerful-voice-cloning-suite), 4.3 is 37.5% cheaper input / 58.3% cheaper output than 4.20 Multi-Agent; 4.20 Multi-Agent has 2M context vs. 4.3's 1M. None of this is in the report.

**Severity:** Critical — explicit directive failure.

### Strike 16 — OMISSION — Comparators use stale Anthropic / OpenAI generations

**Claim:** "Claude 4 Opus" and "o3-pro" used as comparators.

**Reality:** "Claude 4 Opus" is not a current model name — the current Anthropic flagship is Claude Opus 4.7 (Opus 4.6 still on LMArena #1 for Text). "o3-pro" is similarly outdated — current OpenAI flagship is GPT-5.5 (released April 23, 2026). The Opus 4.7 peer report's comparators are all current-generation; Grok's are 6-12 months stale.

**Severity:** High — directly undercuts the differentiation analysis.

### Strike 17 — OMISSION — No mention of Grok Imagine / dedicated audio/video APIs (Section 2)

**Claim:** Section 2 lists modalities (text, vision, no audio/video).

**Reality:** xAI ships **Grok Imagine** for image and video generation, plus the dedicated **STT/TTS APIs** that launched alongside 4.3. The model + ecosystem story is more multimodal than the report suggests, even setting aside whether 4.3 itself takes video input (it does — see Strike 4).

**Severity:** Medium.

### Strike 18 — STRIPPED PHRASES — Banned framing language

**Phrases stripped on sight per directive:**
- "general-purpose reasoning and tool-use model" (Section 1) — vague positioning
- "maximum truth-seeking and minimal corporate safety filtering" (Section 1) — xAI marketing language reproduced
- "main operational distinction" (Section 5) — undercut by the actual lack of distinction proven
- "general-purpose tool-use agent scaffolding" (Section 7) — vague
- "rapid iteration on research summaries" (Section 7) — vague

**Severity:** Medium — these aren't the headline issues but they accumulate.

### Strike 19 — OMISSION — No cost-vs-peer comparison

**Reality:** The Opus 4.7 peer report's Section 5 includes a full peer cache-pricing table and Section 5 sibling routing rules with **dollar deltas per call** (e.g., "Sonnet saves $0.15 per call (40%)"). Grok 4.3's actual aggressive low-price positioning is the headline 4.3 story per [VentureBeat headline](https://venturebeat.com/technology/xai-launches-grok-4-3-at-an-aggressively-low-price-and-a-new-fast-powerful-voice-cloning-suite): "xAI launches Grok 4.3 at an aggressively low price." The report's wrong $3/$9 number both fabricates higher pricing AND misses the actual differentiator (4.3 is significantly cheaper than every Anthropic/OpenAI peer in its tier).

**Severity:** Critical — the headline news about 4.3 is its pricing, and the report got the price wrong AND missed the differentiator.

---

## Section completeness audit

| Section | Present? | Quality |
|---|---|---|
| 1. Identity | Yes | Wrong (predecessor lineage skips 4.1/4.20) |
| 2. Core capabilities | Yes | Multiple critical errors (context, modalities) |
| 3. Operational | Yes | Pricing wrong by 2-3×, cache feature denied |
| 4. Integrations | Yes | X/Twitter access underspecified |
| 5. Differentiation | Yes | Stale comparators, fabricated GPQA delta |
| 6. Known limitations | Yes | Unsourced hallucination claim |
| 7. Ideal tasks + avoid-when | Yes | Sparse, no dollar deltas |
| 8. Lifecycle | Yes | Wrong release date, wrong predecessor |

**Structural omission:** None — all 8 sections present. Concision was a directive; Grok complied on length. **But concision exposed substance gaps** that the Opus 4.7 peer report papered over with thorough citation. The brevity isn't the dealbreaker — the inaccuracy under the brevity is.

---

## Top 3 strikes (must-fix)

1. **Strike 4 — Video input denied.** Grok 4.3 IS xAI's first native-video-input model. Report says "no video understanding." Categorically inverts the headline launch feature. Fix: rewrite Section 2 Audio/multimodal AND add to Section 5 differentiation.
2. **Strike 1 — Pricing wrong by 3×.** $3/$9 claimed; actual is $1.25/$2.50 plus $0.20/MTok cached. Router decisions will be wrong. Fix: rewrite Section 3 pricing block with actual numbers + cite [mem0.ai](https://mem0.ai/blog/xai-grok-api-pricing) or [artificialanalysis.ai](https://artificialanalysis.ai/models/grok-4-3).
3. **Strike 2 — Context window understated by 4×.** 256k claimed; actual is 1M. Long-context routing will under-utilize Grok 4.3. Fix: rewrite Sections 2, 3 + acknowledge the 4.20 Multi-Agent 2M variant as a sibling routing option.

---

## Verification cost summary

- WebSearch calls: 6
- Web fetches / spot-checks: 0 (sources triangulated via WebSearch result snippets)
- Estimated cost: ~$0.05-0.08 in Anthropic API tokens for this adjudication (Opus 4.7 reads + outputs + web search overhead)
- Total adjudication tokens (in + out): ~28-32k

---

## Verdict

**REJECTED. Round 2 mandatory.** This isn't a sycophancy/egoism polish problem — it's a factual-grounding failure. Round 2 must verify against [xAI official docs](https://docs.x.ai/developers/models/grok-4.3), [Artificial Analysis](https://artificialanalysis.ai/models/grok-4-3), [VentureBeat launch coverage](https://venturebeat.com/technology/xai-launches-grok-4-3-at-an-aggressively-low-price-and-a-new-fast-powerful-voice-cloning-suite), and at minimum [llm-stats](https://llm-stats.com/models/grok-4.3) or [BenchLM](https://benchlm.ai/models/grok-4-3) for benchmark numbers.

**Convergence rule:** 19 strikes > 5-strike threshold by ~4×. Round 1 is converged-as-rejected; cannot ship to the Council OS routing KB as-is.

**Anti-meta-sycophancy note:** Polite framing would minimize this report card. The report should not be steel-manned — its quantitative core is wrong by 2-4× on pricing, context, predecessor, and modality. Mitchell's router would mis-route every Grok 4.3 call using this profile. The remedy is full rewrite, not patch.
