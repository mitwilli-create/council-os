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
| 2026-05-18 | researcher | xai:grok-4 → grok-4.3 | call-model.mjs | ~$0.0097 | 3220 tok, 5924 chars out, 30515ms → runs/researcher-20260518-070912/round-1-xai-grok-4.md |
| 2026-05-18 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview | call-model.mjs | ~$0.0241 | 4826 tok, 488 chars out, 57065ms → runs/researcher-20260518-070912/round-1-google-gemini.md |
| 2026-05-18 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0205 | 4098 tok, 14538 chars out, 148260ms → runs/researcher-20260518-070912/round-1-perplexity-sonar-deep-research.md |
| 2026-05-18 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview-no-thinking | call-model.mjs | ~$0.0384 | 7677 tok, 8783 chars out, 67300ms → runs/researcher-20260518-070912/round-1-google-gemini.md |
| 2026-05-18 | researcher | xai:grok-4 → grok-4.3 | call-model.mjs | ~$0.0073 | 2425 tok, 2731 chars out, 15422ms → runs/researcher-20260518-070912/round-2-xai-grok-4.md |
| 2026-05-18 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview-no-thinking | call-model.mjs | ~$0.0303 | 6069 tok, 3814 chars out, 56996ms → runs/researcher-20260518-070912/round-2-google-gemini.md |
| 2026-05-18 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0451 | 9029 tok, 35461 chars out, 200822ms → runs/researcher-20260518-070912/round-2-perplexity-sonar-deep-research.md |
| 2026-05-19 | researcher | anthropic:claude-opus-4-7 → claude-opus-4-7 | call-model.mjs | ~$0.1772 | 11811 tok, 14516 chars out, 85559ms → runs/researcher-2026-05-18-companies-filter/round-1-claude-opus-4-7.md |
| 2026-05-19 | researcher | anthropic:claude-sonnet-4-6 → claude-sonnet-4-6 | call-model.mjs | ~$0.0599 | 9080 tok, 16644 chars out, 89225ms → runs/researcher-2026-05-18-companies-filter/round-1-claude-sonnet-4-6.md |
| 2026-05-19 | researcher | openai:gpt-5 → gpt-5.5 | call-model.mjs | ~$0.0571 | 8161 tok, 19003 chars out, 73870ms → runs/researcher-2026-05-18-companies-filter/round-1-gpt-5-5.md |
| 2026-05-19 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.1024 | 51191 tok, 1071 chars out, 27074ms → tmp/researcher-preipo/round1-grok-xsearch.md |
| 2026-05-19 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0486 | 9713 tok, 30395 chars out, 219439ms → tmp/researcher-preipo/round1-sonar-deep.md |
| 2026-05-19 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.0399 | 19973 tok, 3816 chars out, 23847ms → runs/researcher-20260518-234733/round-1-grok-4-x-search.md |
| 2026-05-19 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.0610 | 30512 tok, 3393 chars out, 15905ms → runs/researcher-20260518-234733/round-1-grok-4-x-search-v2.md |
| 2026-05-19 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0441 | 8819 tok, 33981 chars out, 234366ms → runs/researcher-20260518-234733/round-1-perplexity-sonar-deep.md |
| 2026-05-20 | researcher | openai:gpt-5 → gpt-5.5 | call-model.mjs | ~$0.0230 | 3291 tok, 6206 chars out, 46317ms → runs/researcher-2026-05-20-popout-ux/round-1-openai-gpt-5-5.md |
| 2026-05-20 | researcher | anthropic:claude-sonnet-4-6 → claude-sonnet-4-6 | call-model.mjs | ~$0.0172 | 2611 tok, 5498 chars out, 30709ms → runs/researcher-2026-05-20-toolbar/round-1-sonnet-4-6.md |
| 2026-05-20 | researcher | anthropic:claude-opus-4-7 → claude-opus-4-7 | call-model.mjs | ~$0.0543 | 3622 tok, 4966 chars out, 36000ms → runs/researcher-2026-05-20-toolbar/round-1-opus-4-7.md |
| 2026-05-20 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview-no-thinking | call-model.mjs | ~$0.0299 | 5988 tok, 6853 chars out, 33727ms → runs/researcher-2026-05-20-batch-actions-ux/round-1-gemini-3-1-pro.md |
| 2026-05-20 | researcher | openai:gpt-5 → gpt-5.5 | call-model.mjs | ~$0.0313 | 4467 tok, 9447 chars out, 40277ms → runs/researcher-2026-05-20-batch-actions-ux/round-1-gpt-5-5.md |
| 2026-05-20 | researcher | anthropic:claude-sonnet-4-6 → claude-sonnet-4-6 | call-model.mjs | ~$0.0309 | 4678 tok, 7750 chars out, 47046ms → runs/researcher-2026-05-20-batch-actions-ux/round-1-sonnet-4-6.md |
| 2026-05-20 | researcher | anthropic:claude-sonnet-4-6 → claude-sonnet-4-6 | call-model.mjs | ~$0.0094 | 1427 tok, 2381 chars out, 16055ms → runs/researcher-2026-05-20-toolbar/round-2-sonnet-4-6.md |
| 2026-05-20 | researcher | anthropic:claude-opus-4-7 → claude-opus-4-7 | call-model.mjs | ~$0.0314 | 2095 tok, 2539 chars out, 19559ms → runs/researcher-2026-05-20-toolbar/round-2-opus-4-7.md |
| 2026-05-20 | researcher | anthropic:opus + sonnet + openai:gpt-5-5 | 1 | 2.10 (est) | ~12k | 480000 |
| 2026-05-20 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview-no-thinking | call-model.mjs | ~$0.0231 | 4628 tok, 291 chars out, 20364ms → runs/researcher-2026-05-20-batch-actions-ux/round-2-gemini-3-1-pro.md |
| 2026-05-20 | researcher | anthropic:claude-sonnet-4-6 → claude-sonnet-4-6 | call-model.mjs | ~$0.0275 | 4172 tok, 3298 chars out, 24893ms → runs/researcher-2026-05-20-batch-actions-ux/round-2-sonnet-4-6.md |
| 2026-05-20 | researcher | openai:gpt-5 → gpt-5.5 | call-model.mjs | ~$0.0344 | 4918 tok, 3176 chars out, 40035ms → runs/researcher-2026-05-20-batch-actions-ux/round-2-gpt-5-5.md |
| 2026-05-20 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview-no-thinking | call-model.mjs | ~$0.0283 | 5660 tok, 2786 chars out, 30147ms → runs/researcher-2026-05-20-batch-actions-ux/round-2-gemini-3-1-pro.md |
| 2026-05-20 | dealbreaker | claude-opus-4-7 | impasse-break | ~$2.50 (est) | ~15k | 405000 |
| 2026-05-21 | researcher | anthropic:claude-sonnet-4-6 → claude-sonnet-4-6 | call-model.mjs | ~$0.0634 | 9599 tok, 18847 chars out, 104298ms → runs/researcher-typography-roles-2026-05-20/round-1-sonnet-4-6.md |
| 2026-05-21 | researcher | anthropic:claude-opus-4-7 → claude-opus-4-7 | call-model.mjs | ~$0.3619 | 24127 tok, 35038 chars out, 173508ms → runs/researcher-2026-05-20-finding-007/round-1-opus-4-7.md |
| 2026-05-21 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview | call-model.mjs | ~$0.0532 | 10632 tok, 14345 chars out, 69626ms → runs/researcher-typography-roles-2026-05-20/round-1-gemini.md |
| 2026-05-21 | researcher | anthropic:claude-sonnet-4-6 → claude-sonnet-4-6 | call-model.mjs | ~$0.0697 | 10567 tok, 22223 chars out, 123710ms → runs/researcher-typography-roles-2026-05-20/round-1-sonnet-4-6-retry.md |
| 2026-05-21 | researcher | anthropic:claude-sonnet-4-6 → claude-sonnet-4-6 | call-model.mjs | ~$0.1163 | 17616 tok, 33926 chars out, 175151ms → runs/researcher-2026-05-20-finding-007/round-1-sonnet-4-6.md |
| 2026-05-21 | researcher | anthropic:claude-sonnet-4-6 → claude-sonnet-4-6 | call-model.mjs | ~$0.0214 | 3244 tok, 4550 chars out, 28186ms → runs/researcher-typography-roles-2026-05-20/round-2-sonnet-4-6.md |
| 2026-05-21 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview | call-model.mjs | ~$0.0281 | 5623 tok, 3631 chars out, 39472ms → runs/researcher-typography-roles-2026-05-20/round-2-gemini.md |
| 2026-05-21 | researcher | anthropic:claude-sonnet-4-6 → claude-sonnet-4-6 | call-model.mjs | ~$0.0640 | 9696 tok, 24076 chars out, 117550ms → runs/researcher-2026-05-20-finding-007/round-1b-sonnet-4-6-continuation.md |
| 2026-05-21 | researcher | anthropic:claude-opus-4-7 → claude-opus-4-7 | call-model.mjs | ~$0.1533 | 10221 tok, 20198 chars out, 126087ms → runs/researcher-2026-05-20-finding-007/round-1b-opus-4-7-continuation.md |
| 2026-05-21 | researcher | anthropic:claude-opus-4-7 → claude-opus-4-7 | call-model.mjs | ~$0.1471 | 9808 tok, 14930 chars out, 95372ms → runs/researcher-2026-05-20-finding-007/round-2-opus-4-7.md |
| 2026-05-21 | researcher | anthropic:claude-sonnet-4-6 → claude-sonnet-4-6 | call-model.mjs | ~$0.0628 | 9518 tok, 23321 chars out, 135047ms → runs/researcher-2026-05-20-finding-007/round-2-sonnet-4-6.md |
| 2026-05-23 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0316 | 6320 tok, 26377 chars out, 65245ms → runs/researcher-2026-05-23-audit-agent-arch/round-1-perplexity-sonar-deep.md |
| 2026-05-23 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview-no-thinking | call-model.mjs | ~$0.0351 | 7028 tok, 6667 chars out, 66257ms → runs/researcher-2026-05-23-audit-agent-arch/round-1-gemini.md |
| 2026-05-23 | researcher | anthropic:claude-opus-4-7 → claude-opus-4-7 | call-model.mjs | ~$0.1753 | 11688 tok, 22176 chars out, 154389ms → runs/researcher-2026-05-23-audit-agent-arch/round-1-opus.md |
| 2026-05-23 | researcher | openai:gpt-5 → gpt-5.5 | call-model.mjs | ~$0.0575 | 8209 tok, 12788 chars out, 125159ms → runs/researcher-2026-05-23-audit-agent-arch/round-1-gpt5.md |
| 2026-05-23 | researcher | anthropic:claude-opus-4-7 → claude-opus-4-7 | call-model.mjs | ~$0.0958 | 6389 tok, 7943 chars out, 52761ms → runs/researcher-2026-05-23-regression-agent/round-1-opus.md |
| 2026-05-23 | researcher | anthropic:claude-sonnet-4-6 → claude-sonnet-4-6 | call-model.mjs | ~$0.0415 | 6285 tok, 10302 chars out, 59908ms → runs/researcher-2026-05-23-regression-agent/round-1-sonnet.md |
| 2026-05-23 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0338 | 6754 tok, 27191 chars out, 93428ms → runs/researcher-2026-05-23-regression-agent/round-1-perplexity.md |
| 2026-05-23 | researcher | anthropic:claude-sonnet-4-6 → claude-sonnet-4-6 | call-model.mjs | ~$0.0690 | 10447 tok, 24325 chars out, 142755ms → runs/researcher-2026-05-23-regression-agent/round-1b-sonnet.md |
| 2026-05-23 | researcher | anthropic:claude-opus-4-7 → claude-opus-4-7 | call-model.mjs | ~$0.1806 | 12042 tok, 22738 chars out, 147093ms → runs/researcher-2026-05-23-regression-agent/round-1b-opus.md |
| 2026-05-23 | researcher | inline-dealbreaker-mode-B | (no API call — researcher synthesized + dealbreaker inline) | ~$0.00 | 3 WebSearch calls, ~360s wall | researcher-report + dealbreaker-final |
| 2026-05-23 | researcher | anthropic:claude-haiku-4-5 → claude-haiku-4-5 | call-model.mjs | ~$0.0004 | 162 tok, 9 chars out, 2148ms → runs/researcher-20260523-143513/round-1-anthropic-claude-haiku-4-5.md |
| 2026-05-24 | researcher | perplexity:sonar-pro → perplexity:sonar-pro | call-model.mjs | ~$0.0242 | 3455 tok, 9456 chars out, 11396ms → runs/researcher-20260523-175829/round-1-perplexity-sonar-pro.md |
| 2026-05-24 | researcher | perplexity:sonar-pro → perplexity:sonar-pro | call-model.mjs | ~$0.0499 | 7129 tok, 21423 chars out, 43946ms → runs/researcher-20260523-175818-openclaw-migration/round-1-sonar-pro.md |
| 2026-05-24 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.0718 | 35889 tok, 5697 chars out, 21321ms → runs/researcher-20260523-175829/round-1-grok-4-3.md |
| 2026-05-24 | researcher | perplexity:sonar-pro → perplexity:sonar-pro | call-model.mjs | ~$0.0666 | 9520 tok, 32841 chars out, 80837ms → runs/researcher-20260523-cherry-picks-explainer/round-1-sonar-pro.md |
| 2026-05-24 | researcher | anthropic:claude-opus-4-7 → claude-opus-4-7 | call-model.mjs | ~$0.1115 | 7435 tok, 11516 chars out, 79226ms → runs/researcher-20260523-175818-openclaw-migration/round-1-opus-4-7.md |
| 2026-05-24 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview+google_search | call-model.mjs | ~$0.0393 | 7858 tok, 574 chars out, 62201ms → runs/researcher-20260523-175829/round-1-gemini-3-1-pro.md |
| 2026-05-24 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview+google_search | call-model.mjs | ~$0.0374 | 7475 tok, 655 chars out, 53646ms → runs/researcher-20260523-175856/round-1-gemini-3-1-pro.md |
| 2026-05-24 | researcher | anthropic:claude-opus-4-7 → claude-opus-4-7 | call-model.mjs | ~$0.1932 | 12877 tok, 26495 chars out, 171988ms → runs/researcher-20260523-cherry-picks-explainer/round-1-opus.md |
| 2026-05-24 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0218 | 4362 tok, 16334 chars out, 112076ms → runs/researcher-20260524-005938-notion-agents/round-1-sonar-deep-research.md |
| 2026-05-23 | researcher | anthropic:claude-opus-4-7 → claude-opus-4-7 | call-model.mjs | ~$0.27 | ~14k in + ~7k out | 188000ms → runs/researcher-20260523-cherry-picks-explainer/round-1-opus.md |
| 2026-05-23 | researcher | anthropic:claude-sonnet-4-6 → claude-sonnet-4-6 | wrap-timeout | ~$0.18 | ~14k in + ~10.7k out | 253704ms → runs/researcher-20260523-cherry-picks-explainer/round-1-sonnet.md |
| 2026-05-23 | researcher | perplexity:sonar-pro → sonar-pro | call-model.mjs --grounded | ~$0.13 | ~7k in + ~8k out (truncated max-tokens) | 102000ms → runs/researcher-20260523-cherry-picks-explainer/round-1-sonar-pro.md |
| 2026-05-23 | researcher | openai:gpt-5 → gpt-5.5 (reasoning-effort low) | wrap-timeout | ~$0.47 | ~14k in + ~15k out | 138786ms → runs/researcher-20260523-cherry-picks-explainer/round-1-gpt5.md |
| 2026-05-23 | researcher | (3 WebSearch verifications) | freshness-first + dispute-resolution | ~$0.00 | n/a | n/a → cherry-pick + empty-flag-version + 2.46-changelog |
| 2026-05-24 | researcher | perplexity:sonar-reasoning-pro → perplexity:sonar-reasoning-pro | call-model.mjs | ~$0.0216 | 7199 tok, 23829 chars out, 42720ms → runs/researcher-instance-d-pangram-20260524-155154/response-perplexity-vendor-news.md |
| 2026-05-24 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.0576 | 28816 tok, 4070 chars out, 11033ms → runs/researcher-instance-d-pangram-20260524-155154/response-grok-live-chatter.md |
| 2026-05-25 | researcher | perplexity:sonar-reasoning-pro → perplexity:sonar-reasoning-pro | call-model.mjs | ~$0.0204 | 6806 tok, 15917 chars out, 47156ms → runs/researcher-20260524-pre-apply-deepen/round-1-sonar-reasoning-pro.md |
| 2026-05-25 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview-no-thinking | call-model.mjs | ~$0.0577 | 11537 tok, 9805 chars out, 81547ms → runs/researcher-20260524-pre-apply-deepen/round-1-gemini.md |
| 2026-05-25 | researcher | perplexity:sonar-reasoning-pro → perplexity:sonar-reasoning-pro | call-model.mjs | ~$0.0317 | 10555 tok, 30293 chars out, 84331ms → runs/researcher-20260524-pre-apply-deepen/round-1b-sonar-extended.md |
| 2026-05-25 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview-no-thinking | call-model.mjs | ~$0.0801 | 16011 tok, 19413 chars out, 127658ms → runs/researcher-20260524-pre-apply-deepen/round-1b-gemini-extended.md |
| 2026-05-25 | researcher | perplexity:sonar-reasoning-pro → perplexity:sonar-reasoning-pro | call-model.mjs | ~$0.0428 | 14260 tok, 21722 chars out, 65306ms → runs/researcher-apply-now-ux-20260525-161408/round-1-sonar-reasoning-pro.md |
| 2026-05-25 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview | call-model.mjs | ~$0.1004 | 20081 tok, 22235 chars out, 91830ms → runs/researcher-apply-now-ux-20260525-161408/round-1-gemini-3-1-pro.md |
| 2026-05-26 | researcher | xai:grok-4 → grok-4.3 | call-model.mjs | ~$0.0051 | 1694 tok, 2414 chars out, 6357ms → runs/researcher-20260526-204718/round-1-grok.md |
| 2026-05-26 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview+google_search | call-model.mjs | ~$0.0379 | 7587 tok, 8450 chars out, 67230ms → runs/researcher-20260526-204718/round-1-gemini.md |
| 2026-05-26 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0554 | 11090 tok, 57424 chars out, 228673ms → runs/researcher-20260526-204718/round-1-perplexity.md |
| 2026-05-26 | researcher | xai:grok-4.3 | 1 | 0.0051 | 1694 | 6357 |
| 2026-05-26 | researcher | perplexity:sonar-deep-research | 1 | ~0.30 | ~25000 | ~180000 |
| 2026-05-26 | researcher | google:gemini-2.5-pro | 1 | ~0.20 | ~5000 | ~120000 |
| 2026-05-26 | researcher | hunter.io (API calls) | n/a | 0 | n/a | n/a |
| 2026-06-19 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview-no-thinking | call-model.mjs | ~$0.0551 | 11028 tok, 9544 chars out, 95564ms → runs/researcher-bayarea-rent-20260618-185422/round-1-gemini.md |
| 2026-06-19 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0621 | 12417 tok, 53102 chars out, 209013ms → runs/researcher-bayarea-rent-20260618-185422/round-1-perplexity.md |
| 2026-06-19 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.0863 | 43138 tok, 4563 chars out, 33549ms → runs/researcher-bayarea-rent-20260618-185422/round-1-grok.md |
| 2026-06-18 | researcher | google:gemini-3.1-pro-preview (grounded,Maps) | 1 | 0.0551 | 11028 | 95564 → runs/researcher-bayarea-rent-20260618-185422/round-1-gemini.md |
| 2026-06-18 | researcher | perplexity:sonar-deep-research | 1 | 0.0621 | 12417 | 209013 → runs/researcher-bayarea-rent-20260618-185422/round-1-perplexity.md |
| 2026-06-18 | researcher | xai:grok-4-x-search | 1 | 0.0863 | 43138 | 33549 → runs/researcher-bayarea-rent-20260618-185422/round-1-grok.md |
| 2026-06-18 | researcher | (4 WebSearch verifications) | freshness+dispute | 0.00 | n/a | n/a → bay-bridge-toll + pacific-place + oakland-rent + alameda-buildings |
| 2026-06-25 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0226 | 4528 tok, 17663 chars out, 170664ms → runs/researcher-20260625-191253/round-1-sonar.md |
| 2026-06-25 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.0489 | 24466 tok, 6388 chars out, 25851ms → runs/researcher-20260625-191253/round-1-grok.md |
| 2026-06-25 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0295 | 5905 tok, 27599 chars out, 185369ms → runs/researcher-20260625-191253/round-1-sonar-part2.md |
| 2026-06-25 | researcher | perplexity:sonar-deep-research | round-1 | 0.0226 | 4528 | 170664 |
| 2026-06-25 | researcher | xai:grok-4-x-search | round-1 | 0.0489 | 24466 | 25851 |
| 2026-06-25 | researcher | perplexity:sonar-deep-research | round-1-part2 | 0.0295 | 5905 | 185369 |
| 2026-06-25 | researcher | anthropic:claude-opus-4-7 | synthesis | ~0.40 | 168663 | 49324 |
| 2026-06-25 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.0663 | 33131 tok, 5320 chars out, 12457ms → runs/researcher-aie-wf-cards-20260625-125820/round-1-grok.md |
| 2026-06-25 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0369 | 7372 tok, 34543 chars out, 192262ms → runs/researcher-aie-wf-cards-20260625-125820/round-1-sonar.md |
| 2026-06-25 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview+google_search | call-model.mjs | ~$0.0314 | 6276 tok, 5921 chars out, 58604ms → runs/researcher-aie-wf-cards-20260625-125820/round-1-gemini.md |
| 2026-06-25 | researcher | perplexity:sonar-reasoning-pro → perplexity:sonar-reasoning-pro | call-model.mjs | ~$0.0068 | 2256 tok, 7409 chars out, 62531ms → runs/researcher-aie-wf-cards-20260625-125820/round-2-sonar.md |
| 2026-06-25 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview | call-model.mjs | ~$0.0145 | 2902 tok, 2452 chars out, 21143ms → runs/researcher-aie-wf-cards-20260625-125820/round-2-gemini.md |
| 2026-06-25 | researcher | xai:grok-4-x-search | aie-wf-cards-r1 | 0.0663 | 33131 | 12457 |
| 2026-06-25 | researcher | perplexity:sonar-deep-research | aie-wf-cards-r1 | 0.0369 | 7372 | 192262 |
| 2026-06-25 | researcher | google:gemini-3.1-pro-preview (grounded) | aie-wf-cards-r1 | 0.0314 | 6276 | 58604 |
| 2026-06-25 | researcher | perplexity:sonar-reasoning-pro | aie-wf-cards-r2 | 0.0068 | 2256 | 62531 |
| 2026-06-25 | researcher | google:gemini-3.1-pro-preview | aie-wf-cards-r2 | 0.0145 | 2902 | 21143 |
| 2026-06-25 | researcher | (2 WebSearch freshness: AIE-app + Blinq-multiprofile) | aie-wf-cards-verify | 0.00 | n/a | n/a |
| 2026-07-14 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview-no-thinking | call-model.mjs | ~$0.0322 | 6448 tok, 2449 chars out, 52246ms → runs/researcher-20260714-025421/round-1-gemini-3-1-pro.md |
| 2026-07-14 | researcher | anthropic:claude-opus-4-7 → claude-opus-4-7 | call-model.mjs | ~$0.0802 | 5349 tok, 7699 chars out, 58549ms → runs/researcher-20260714-025421/round-1-claude-opus-4-7.md |
| 2026-07-14 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview-no-thinking | call-model.mjs | ~$0.0349 | 6986 tok, 13965 chars out, 41535ms → runs/researcher-20260714-025421/round-1-gemini-3-1-pro.md |
| 2026-07-14 | researcher | anthropic:claude-opus-4-7 → claude-opus-4-7 | call-model.mjs | ~$0.1910 | 12735 tok, 26178 chars out, 177333ms → runs/researcher-20260714-025421/round-1-claude-opus-4-7.md |
| 2026-07-14 | researcher | openai:gpt-5 → gpt-5.5 | call-model.mjs | ~$0.0918 | 13113 tok, 37785 chars out, 186023ms → runs/researcher-20260714-025421/round-1-gpt-5-5.md |
| 2026-07-15 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.0683 | 34137 tok, 5786 chars out, 29497ms → runs/researcher-20260715-130000/round-1-grok-4-x-search.md |
| 2026-07-15 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview-no-thinking | call-model.mjs | ~$0.0500 | 10004 tok, 8960 chars out, 57353ms → runs/researcher-20260715-130000/round-1-gemini-3-1-pro.md |
| 2026-07-15 | researcher | perplexity:sonar-reasoning-pro → perplexity:sonar-reasoning-pro | call-model.mjs | ~$0.0173 | 5773 tok, 17955 chars out, 115382ms → runs/researcher-20260715-130000/round-1-sonar-reasoning-pro.md |
| 2026-07-15 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0372 | 7441 tok, 29361 chars out, 169352ms → runs/researcher-20260715-130000/round-1-sonar-deep-research.md |
| 2026-07-15 | researcher | perplexity:sonar-reasoning-pro → perplexity:sonar-reasoning-pro | call-model.mjs | ~$0.0197 | 6579 tok, 23342 chars out, 99308ms → runs/researcher-20260715-130000/round-1b-sonar-reasoning-pro-gapfill.md |
| 2026-07-15 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.0629 | 31469 tok, 2838 chars out, 19651ms → runs/researcher-20260715-130000/round-2-grok-4-x-search.md |
| 2026-07-15 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview-no-thinking | call-model.mjs | ~$0.0479 | 9576 tok, 3236 chars out, 61991ms → runs/researcher-20260715-130000/round-2-gemini-3-1-pro.md |
| 2026-07-15 | researcher | perplexity:sonar-reasoning-pro → perplexity:sonar-reasoning-pro | call-model.mjs | ~$0.0137 | 4555 tok, 14763 chars out, 68101ms → runs/researcher-20260715-130000/round-2-sonar-reasoning-pro.md |
| 2026-07-15 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.0162 | 8118 tok, 1149 chars out, 10789ms → 65a9ceaa-db5a-41d6-a42e-5334638fa06c/scratchpad/grok-verify-out.md |
| 2026-07-15 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.0248 | 12390 tok, 1776 chars out, 14283ms → 65a9ceaa-db5a-41d6-a42e-5334638fa06c/scratchpad/grok-sentiment-out.md |
| 2026-07-20 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0399 | 7981 tok, 33180 chars out, 225483ms → runs/researcher-20260720-mcp-vs-cli/round-1-sonar-deep-research.md |
| 2026-07-20 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0461 | 9211 tok, 39632 chars out, 157645ms → runs/researcher-20260720-mcp-vs-cli/round-2-sonar-deep-research.md |
| 2026-07-21 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.1109 | 55464 tok, 9236 chars out, 50072ms → runs/researcher-20260721-165245/round-1-grok-x-search.md |
| 2026-07-21 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0204 | 4086 tok, 15348 chars out, 274763ms → runs/researcher-20260721-165245/round-1-sonar-deep-research.md |
| 2026-07-21 | researcher | google:gemini-3-flash → gemini-3.5-flash+google_search | call-model.mjs | ~$0.0140 | 9310 tok, 1155 chars out, 79115ms → runs/researcher-20260721-165245/round-1-gemini-3-flash.md |
| 2026-07-21 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.0483 | 24137 tok, 3455 chars out, 23006ms → runs/researcher-20260721-165245/round-2-grok-x-search.md |
| 2026-07-21 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0229 | 4583 tok, 23088 chars out, 113859ms → runs/researcher-20260721-165245/round-2-sonar-deep-research.md |
