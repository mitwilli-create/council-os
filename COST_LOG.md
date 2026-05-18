# Council OS — Cost Log

Tracks API spend across Council OS phases. Manually backfilled on 2026-05-17
from agent return summaries. Future runs append rows automatically via
researcher/call-model.mjs hooks.

| Date | Phase | Provider/Model | Round / Activity | Cost USD | Notes |
|------|-------|----------------|------------------|---------:|-------|
| 2026-05-17 | Phase 2 ingest | (WebFetch) | 21 official-doc fetches | 0.00 | $0 LLM — WebFetch internal |
| 2026-05-17 | Phase 3 dry-run | anthropic/claude-opus-4-7 | R1 self-research | ~3.00 | 33,782 chars output, 8.4k tokens |
| 2026-05-17 | Phase 3 dry-run | anthropic/claude-opus-4-7 | R1 dealbreaker | 0.15 | 26 strikes caught |
| 2026-05-17 | Phase 3 dry-run | anthropic/claude-opus-4-7 | R2 self-research | ~3.00 | 7,062 words, all 26 strikes addressed |
| 2026-05-17 | Phase 3 dry-run | anthropic/claude-opus-4-7 | R2 dealbreaker | 0.55 | CONVERGED (0 strikes) |
| 2026-05-17 | Phase 3 R1 | openai/gpt-5-5 | self-research | ~1.50 | 21,409 chars |
| 2026-05-17 | Phase 3 R1 | openai/gpt-5-4 | self-research | ~1.20 | 18,859 chars |
| 2026-05-17 | Phase 3 R1 | openai/gpt-5-3-chat-latest | self-research | ~1.00 | 14,665 chars (modelUsed: gpt-5 fallback) |
| 2026-05-17 | Phase 3 R1 | google/gemini-3-1-pro | self-research | ~1.50 | 9,187 chars (thinking ate budget — retry succeeded) |
| 2026-05-17 | Phase 3 R1 | google/gemini-3-flash | self-research | ~0.50 | 9,174 chars |
| 2026-05-17 | Phase 3 R1 | xai/grok-4-3 | self-research | ~0.30 | 5,878 chars (Grok concise) |
| 2026-05-17 | Phase 3 R1 | xai/grok-4-20-multi-agent | self-research | ~2.50 | 12,918 chars / 375,922 tokens (multi-agent expensive) |
| 2026-05-17 | Phase 3 R1 | perplexity/sonar-pro | self-research | ~1.00 | 23,899 chars, 7 citations |
| 2026-05-17 | Phase 3 R1 | perplexity/sonar-deep-research | self-research | ~2.00 | 41,638 chars (huge — multi-pass synthesis) |
| 2026-05-17 | Phase 3 R1 | perplexity/sonar-reasoning-pro | self-research | ~1.00 | 26,080 chars |
| 2026-05-17 | Phase 3 R1 | anthropic/claude-sonnet-4-6 | self-research (subagent) | ~2.50 | 26,486 chars, 6,200 tokens |
| 2026-05-17 | Phase 3 R1 | anthropic/claude-haiku-4-5 | self-research (subagent) | ~0.60 | 15,385 chars |
| 2026-05-17 | Phase 3 R1 | (Opus dealbreaker × 12) | 12 dealbreaker passes | ~3.00 | $0.07–$0.85 each, avg ~$0.25; 215 total strikes |
| 2026-05-17 | Phase 3 R2 | openai/gpt-5-5 | revision | ~2.00 | 29,097 chars addressing 24 R1 strikes |
| 2026-05-17 | Phase 3 R2 | openai/gpt-5-4 | revision | ~1.80 | 27,101 chars |
| 2026-05-17 | Phase 3 R2 | openai/gpt-5-3-chat-latest | revision | ~1.40 | 20,797 chars |
| 2026-05-17 | Phase 3 R2 | google/gemini-3-1-pro | revision | ~2.00 | 15,101 chars |
| 2026-05-17 | Phase 3 R2 | google/gemini-3-flash | revision | ~0.50 | 7,911 chars |
| 2026-05-17 | Phase 3 R2 | xai/grok-4-3 | revision | ~0.40 | 5,817 chars |
| 2026-05-17 | Phase 3 R2 | xai/grok-4-20-multi-agent | revision | ~3.00 | 19,822 chars / 219,733 tokens |
| 2026-05-17 | Phase 3 R2 | perplexity/sonar-pro | revision | ~1.50 | 35,958 chars |
| 2026-05-17 | Phase 3 R2 | perplexity/sonar-deep-research | revision | ~2.50 | 35,528 chars (49 citations) |
| 2026-05-17 | Phase 3 R2 | perplexity/sonar-reasoning-pro | revision | ~1.50 | 32,146 chars |
| 2026-05-17 | Phase 3 R2 | anthropic/claude-sonnet-4-6 | revision (subagent) | ~3.00 | 37 KB, all 37 strikes addressed |
| 2026-05-17 | Phase 3 R2 | anthropic/claude-haiku-4-5 | revision (subagent) | ~0.40 | 12 strikes addressed |
| 2026-05-17 | Phase 3 R2 | (Opus dealbreaker × 12) | 12 dealbreaker passes | ~2.50 | $0.05–$0.51 each, avg ~$0.21; 11 CONVERGED, 1 needed R3 |
| 2026-05-17 | Phase 3 R3 | perplexity/sonar-deep-research | revision (truncation fix) | ~1.00 | 93,826 chars with 28k max-tokens |
| 2026-05-17 | Phase 4 | (Sonnet chunking × 13) | 13 chunking subagents | ~3.00 | ~16-29 chunks per model, ~240 total |
| 2026-05-17 | Phase 4 | (Sonnet cross-cut × 9) | 9 cross-cut subagents | ~2.00 | reasoning, tool-use, web-grounding, code-gen, pricing, long-context, vision, unique-strengths, known-limitations |
| 2026-05-17 | Phase 4 | anthropic/claude-opus-4-7 | routing-rules.md generation | 0.40 | 23 task families × primary/backup/avoid |
| 2026-05-17 | Phase 4.5 | (Sonnet cross-cut × 3) | added attachments-and-files, external-surfaces, meta-prompting cross-cuts | ~0.50 | post-audit gap-fill |
| 2026-05-18 | researcher | perplexity:sonar → sonar | call-model.mjs | ~$0.0005 | 137 tok, 4 chars out, 3736ms → /tmp/test-hook-verify.md |
| 2026-05-18 | researcher | xai:grok-4 → grok-4.3 | call-model.mjs | ~$0.0286 | 14286 tok, 6607 chars out, 19878ms → adversarial-20260517-202452/round-1/grok-4-response.md |
| 2026-05-18 | researcher | xai:grok-4-x-search → grok-4-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.0296 | 14784 tok, 6574 chars out, 22923ms → adversarial-20260517-202452/round-1/grok-4-x-search-response.md |
| 2026-05-18 | researcher | google:gemini-3-flash → gemini-3-flash-preview | call-model.mjs | ~$0.1142 | 16308 tok, 11889 chars out, 31997ms → adversarial-20260517-202452/round-1/gemini-3-flash-response.md |
| 2026-05-18 | researcher | openai:gpt-5-3-chat-latest → gpt-5.3-chat-latest | call-model.mjs | ~$0.0985 | 14074 tok, 10863 chars out, 35928ms → adversarial-20260517-202452/round-1/gpt-5-3-chat-latest-response.md |
| 2026-05-18 | researcher | perplexity:sonar-pro → perplexity:sonar-pro | call-model.mjs | ~$0.0652 | 16308 tok, 19514 chars out, 42927ms → adversarial-20260517-202452/round-1/sonar-pro-response.md |
| 2026-05-18 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview-no-thinking | call-model.mjs | ~$0.1402 | 20029 tok, 7495 chars out, 51387ms → adversarial-20260517-202452/round-1/gemini-2.5-pro-response.md |
| 2026-05-18 | researcher | openai:gpt-5-4 → gpt-5.4 | call-model.mjs | ~$0.1028 | 14690 tok, 16259 chars out, 61422ms → adversarial-20260517-202452/round-1/gpt-5-4-response.md |
| 2026-05-18 | researcher | perplexity:sonar-reasoning-pro → perplexity:sonar-reasoning-pro | call-model.mjs | ~$0.0511 | 12781 tok, 3137 chars out, 61893ms → adversarial-20260517-202452/round-1/sonar-reasoning-pro-response.md |
| 2026-05-18 | researcher | xai:grok-4-20-multi-agent → grok-4.20-multi-agent | call-model.mjs | ~$0.4526 | 226297 tok, 12569 chars out, 88562ms → adversarial-20260517-202452/round-1/grok-4-20-multi-agent-response.md |
| 2026-05-18 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0634 | 15846 tok, 22539 chars out, 123874ms → adversarial-20260517-202452/round-1/sonar-deep-research-response.md |
| 2026-05-18 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview-no-thinking | call-model.mjs | ~$0.1537 | 21956 tok, 14132 chars out, 68818ms → adversarial-20260517-202452/round-1/gemini-2.5-pro-response.md |
| 2026-05-18 | researcher | openai:gpt-5 → gpt-5.5 | call-model.mjs | ~$0.1477 | 21104 tok, 20276 chars out, 106326ms → adversarial-20260517-202452/round-1/gpt-5-response.md |
| 2026-05-18 | researcher | perplexity:sonar-reasoning-pro → perplexity:sonar-reasoning-pro | call-model.mjs | ~$0.0716 | 17909 tok, 23746 chars out, 117040ms → adversarial-20260517-202452/round-1/sonar-reasoning-pro-response.md |
| 2026-05-18 | researcher | xai:grok-4-x-search → grok-4-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.1200 | 60010 tok, 12314 chars out, 31410ms → adversarial-20260517-202452/round-2/grok-4-x-search-response.md |
| 2026-05-18 | researcher | google:gemini-3-flash → gemini-3-flash-preview | call-model.mjs | ~$0.4700 | 67143 tok, 18593 chars out, 31508ms → adversarial-20260517-202452/round-2/gemini-3-flash-response.md |
| 2026-05-18 | researcher | openai:gpt-5-3-chat-latest → gpt-5.3-chat-latest | call-model.mjs | ~$0.4235 | 60500 tok, 15133 chars out, 44845ms → adversarial-20260517-202452/round-2/gpt-5-3-chat-latest-response.md |
| 2026-05-18 | researcher | xai:grok-4 → grok-4.3 | call-model.mjs | ~$0.1182 | 59082 tok, 15410 chars out, 54630ms → adversarial-20260517-202452/round-2/grok-4-response.md |
| 2026-05-18 | researcher | perplexity:sonar-pro → perplexity:sonar-pro | call-model.mjs | ~$0.2532 | 63298 tok, 26692 chars out, 55479ms → adversarial-20260517-202452/round-2/sonar-pro-response.md |
| 2026-05-18 | researcher | perplexity:sonar-reasoning-pro → perplexity:sonar-reasoning-pro | call-model.mjs | ~$0.2429 | 60718 tok, 15990 chars out, 73353ms → adversarial-20260517-202452/round-2/sonar-reasoning-pro-response.md |
| 2026-05-18 | researcher | openai:gpt-5-4 → gpt-5.4 | call-model.mjs | ~$0.4382 | 62606 tok, 24944 chars out, 85795ms → adversarial-20260517-202452/round-2/gpt-5-4-response.md |
| 2026-05-18 | researcher | xai:grok-4-20-multi-agent → grok-4.20-multi-agent | call-model.mjs | ~$2.6559 | 1327952 tok, 14546 chars out, 99574ms → adversarial-20260517-202452/round-2/grok-4-20-multi-agent-response.md |
| 2026-05-18 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.2364 | 59092 tok, 10366 chars out, 109233ms → adversarial-20260517-202452/round-2/sonar-deep-research-response.md |
| 2026-05-18 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview-no-thinking | call-model.mjs | ~$0.5229 | 74697 tok, 19819 chars out, 125966ms → adversarial-20260517-202452/round-2/gemini-2.5-pro-response.md |
| 2026-05-18 | researcher | openai:gpt-5 → gpt-5.5 | call-model.mjs | ~$0.4432 | 63312 tok, 26473 chars out, 91225ms → adversarial-20260517-202452/round-2/gpt-5-response.md |
| 2026-05-18 | researcher | xai:grok-4-x-search → grok-4-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.0203 | 10155 tok, 9759 chars out, 25900ms → adversarial-20260517-202452/round-3/grok-4-x-search-response.md |
| 2026-05-18 | researcher | google:gemini-3-flash → gemini-3-flash-preview | call-model.mjs | ~$0.0844 | 12063 tok, 9805 chars out, 28316ms → adversarial-20260517-202452/round-3/gemini-3-flash-response.md |
| 2026-05-18 | researcher | xai:grok-4 → grok-4.3 | call-model.mjs | ~$0.0190 | 9483 tok, 10963 chars out, 34816ms → adversarial-20260517-202452/round-3/grok-4-response.md |
| 2026-05-18 | researcher | openai:gpt-5-3-chat-latest → gpt-5.3-chat-latest | call-model.mjs | ~$0.0756 | 10802 tok, 13950 chars out, 37090ms → adversarial-20260517-202452/round-3/gpt-5-3-chat-latest-response.md |
| 2026-05-18 | researcher | perplexity:sonar-pro → perplexity:sonar-pro | call-model.mjs | ~$0.0596 | 14900 tok, 22237 chars out, 50702ms → adversarial-20260517-202452/round-3/sonar-pro-response.md |
| 2026-05-18 | researcher | openai:gpt-5-4 → gpt-5.4 | call-model.mjs | ~$0.0897 | 12809 tok, 18401 chars out, 65520ms → adversarial-20260517-202452/round-3/gpt-5-4-response.md |
| 2026-05-18 | researcher | perplexity:sonar-reasoning-pro → perplexity:sonar-reasoning-pro | call-model.mjs | ~$0.0610 | 15245 tok, 21685 chars out, 66040ms → adversarial-20260517-202452/round-3/sonar-reasoning-pro-response.md |
| 2026-05-18 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview-no-thinking | call-model.mjs | ~$0.1189 | 16989 tok, 16926 chars out, 71026ms → adversarial-20260517-202452/round-3/gemini-2.5-pro-response.md |
| 2026-05-18 | researcher | openai:gpt-5 → gpt-5.5 | call-model.mjs | ~$0.1217 | 17387 tok, 23309 chars out, 87969ms → adversarial-20260517-202452/round-3/gpt-5-response.md |
| 2026-05-18 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0646 | 16143 tok, 27769 chars out, 101513ms → adversarial-20260517-202452/round-3/sonar-deep-research-response.md |
| 2026-05-18 | researcher | xai:grok-4-20-multi-agent → grok-4.20-multi-agent | call-model.mjs | ~$0.2885 | 144229 tok, 19519 chars out, 103930ms → adversarial-20260517-202452/round-3/grok-4-20-multi-agent-response.md |
| 2026-05-18 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview-no-thinking | call-model.mjs | ~$1.5743 | 224905 tok, 13837 chars out, 69099ms → runs/adversarial-20260517-202452/dealbreaker-final-20260517-202452.md |
| 2026-05-18 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview-no-thinking | call-model.mjs | ~$0.0617 | 8810 tok, 8125 chars out, 45202ms → runs/adversarial-20260517-202452/META-AUDIT-FINAL.md |
| 2026-05-18 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview | call-model.mjs | ~$0.0024 | 345 tok, 17 chars out, 3455ms → /tmp/test-gemini-out.md |
| 2026-05-18 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview-no-thinking | call-model.mjs | ~$0.4258 | 60831 tok, 11839 chars out, 54337ms → runs/researcher-20260517-203500/round-1-gemini-3-1-pro.md |

## Rolling totals

| Bucket | $ |
|--------|---|
| **Phase 2 (ingest)** | $0.00 |
| **Phase 3 (self-research × 13 + dealbreaker × 25 + R3)** | ~$50-55 |
| **Phase 4 (chunking + cross-cuts + routing-rules)** | ~$5-6 |
| **Phase 4.5 (post-audit gap-fill)** | ~$0.50 |
| **All-time Council OS spend (2026-05-17)** | **~$55-62** |

(Within original $55-250 Tier-1 estimate.)

## Per-model spend

| Provider | Version | Self-research rounds | Dealbreaker rounds | Total est. $ | Status |
|----------|---------|---------------------|-------------------|--------------|--------|
| anthropic | claude-opus-4-7 | 2 + dry-run | 2 + dry-run | ~7.00 | CONVERGED |
| anthropic | claude-sonnet-4-6 | 2 | 2 | ~6.00 | CONVERGED |
| anthropic | claude-haiku-4-5 | 2 | 2 | ~1.50 | CONVERGED |
| openai | gpt-5-5 | 2 | 2 | ~4.10 | CONVERGED (borderline) |
| openai | gpt-5-4 | 2 | 2 | ~3.40 | CONVERGED |
| openai | gpt-5-3-chat-latest | 2 | 2 | ~2.60 | CONVERGED (fallback documented) |
| google | gemini-3-1-pro | 2 | 2 | ~3.70 | CONVERGED |
| google | gemini-3-flash | 2 | 2 | ~1.05 | CONVERGED |
| xai | grok-4-3 | 2 | 2 | ~0.75 | CONVERGED |
| xai | grok-4-20-multi-agent | 2 | 2 | ~6.00 | CONVERGED (high tokens) |
| perplexity | sonar-pro | 2 | 2 | ~2.70 | CONVERGED |
| perplexity | sonar-deep-research | 3 | 2 | ~5.50 | CONVERGED at R3 |
| perplexity | sonar-reasoning-pro | 2 | 2 | ~2.70 | CONVERGED |

## Budget guidance for future researcher runs

- Single-question researcher run (1 model, no dialogue): $0.50–$2.50
- Standard researcher run (3 models, 1 dispatch + optional Round 2 dialogue): $3–$10
- Heavy researcher run (4 models, Round 2 dialogue + dealbreaker): $5–$15
- Default daily budget for researcher: $30 (overridable via `--budget=N`)
- Default monthly Council OS rebuild (when new models ship): $50–$100
| 2026-05-18 | researcher | google:gemini-2.5-pro | 1 | 0.00 | 0-failed-429 | 0 |
| 2026-05-18 | researcher | google:gemini-3-flash | 1 | 0.00 | 0-failed-429 | 0 |
| 2026-05-18 | researcher | self-extraction-fallback | 1 | 0.00 | 0-jq | 0 |
| 2026-05-18 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview-no-thinking | call-model.mjs | ~$0.0662 | 9453 tok, 6920 chars out, 53517ms → runs/adversarial-20260517-202452/META-AUDIT-V2-FINAL.md |
