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
| 2026-07-23 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview | call-model.mjs | ~$0.0197 | 3943 tok, 419 chars out, 28296ms → runs/researcher-20260722-185129/round-1-gemini-2-5-pro.md |
| 2026-07-23 | researcher | perplexity:sonar-reasoning-pro → perplexity:sonar-reasoning-pro | call-model.mjs | ~$0.0024 | 795 tok, 127 chars out, 34834ms → runs/researcher-20260722-185129/round-1-sonar-reasoning-pro.md |
| 2026-07-23 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.0717 | 35844 tok, 5980 chars out, 37050ms → runs/researcher-20260722-185129/round-1-grok-4-x-search.md |
| 2026-07-23 | researcher | perplexity:sonar-reasoning-pro → perplexity:sonar-reasoning-pro | call-model.mjs | ~$0.0082 | 2717 tok, 8665 chars out, 43029ms → runs/researcher-20260722-185129/round-1b-sonar-reasoning-pro.md |
| 2026-07-23 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview-no-thinking | call-model.mjs | ~$0.0454 | 9086 tok, 5949 chars out, 66227ms → runs/researcher-20260722-185129/round-1b-gemini-2-5-pro.md |
| 2026-07-23 | researcher | xai:grok-4 → grok-4.5 | call-model.mjs | ~$0.0032 | 1064 tok, 176 chars out, 1314ms → runs/researcher-20260722-191359/round-1-grok.md |
| 2026-07-23 | researcher | xai:grok-4 → grok-4.5 | call-model.mjs | ~$0.0032 | 1064 tok, 178 chars out, 1743ms → runs/researcher-20260722-191359/round-1-grok.md |
| 2026-07-23 | researcher | perplexity:sonar-reasoning-pro → perplexity:sonar-reasoning-pro | call-model.mjs | ~$0.0119 | 3971 tok, 13903 chars out, 81525ms → runs/researcher-20260722-191359/round-1-sonar.md |
| 2026-07-23 | researcher | xai:grok-4 → grok-4.5 | call-model.mjs | ~$0.0033 | 1104 tok, 194 chars out, 1709ms → runs/researcher-20260722-191359/round-1-grok.md |
| 2026-07-23 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview | call-model.mjs | ~$0.0314 | 6276 tok, 5673 chars out, 46764ms → runs/researcher-20260722-191359/round-1-gemini.md |
| 2026-07-23 | researcher | perplexity:sonar-reasoning-pro → perplexity:sonar-reasoning-pro | call-model.mjs | ~$0.0087 | 2906 tok, 9106 chars out, 41155ms → runs/researcher-20260722-194249/round-1-sonar-reasoning-pro.md |
| 2026-07-23 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.0477 | 23862 tok, 5470 chars out, 32645ms → runs/researcher-20260722-194249/round-1-grok-4-x-search.md |
| 2026-07-23 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview+google_search | call-model.mjs | ~$0.0260 | 5205 tok, 585 chars out, 40662ms → runs/researcher-20260722-194249/round-1-gemini-3-1-pro.md |
| 2026-07-23 | researcher | xai:grok-4 → grok-4.5 | call-model.mjs | ~$0.0024 | 806 tok, 158 chars out, 1644ms → runs/researcher-20260722-195819/round-1-grok.md |
| 2026-07-23 | researcher | perplexity:sonar-reasoning-pro → perplexity:sonar-reasoning-pro | call-model.mjs | ~$0.0068 | 2262 tok, 7721 chars out, 46411ms → runs/researcher-20260722-195819/round-1-sonar.md |
| 2026-07-23 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.0652 | 32580 tok, 5348 chars out, 37461ms → runs/researcher-20260722-195819/round-1b-grok.md |
| 2026-07-23 | researcher | perplexity:sonar-reasoning-pro → perplexity:sonar-reasoning-pro | call-model.mjs | ~$0.0102 | 3397 tok, 12206 chars out, 83457ms → runs/researcher-20260722-195819/round-1b-sonar.md |
| 2026-07-23 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.0613 | 30637 tok, 5107 chars out, 33610ms → runs/researcher-20260722-203228/round-1-xai-grok-4-x-search.md |
| 2026-07-23 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview+google_search | call-model.mjs | ~$0.0172 | 3439 tok, 2526 chars out, 68695ms → runs/researcher-20260722-203228/round-1-google-gemini-2.5-pro.md |
| 2026-07-23 | researcher | perplexity:sonar-reasoning-pro → perplexity:sonar-reasoning-pro | call-model.mjs | ~$0.0052 | 1729 tok, 4597 chars out, 83505ms → runs/researcher-20260722-203228/round-1-perplexity-sonar-reasoning-pro.md |
| 2026-07-23 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.0743 | 37148 tok, 2781 chars out, 23173ms → runs/researcher-20260722-203228/round-2-xai-grok-4-x-search.md |
| 2026-07-23 | researcher | perplexity:sonar-reasoning-pro → perplexity:sonar-reasoning-pro | call-model.mjs | ~$0.0102 | 3386 tok, 11214 chars out, 27473ms → runs/researcher-20260722-203228/round-2-perplexity-sonar-reasoning-pro.md |
| 2026-07-23 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview+google_search | call-model.mjs | ~$0.0313 | 6259 tok, 3363 chars out, 44520ms → runs/researcher-20260722-203228/round-2-google-gemini-2.5-pro.md |
| 2026-07-23 | researcher | xai:grok-4 → grok-4.5 | call-model.mjs | ~$0.0037 | 1247 tok, 152 chars out, 1244ms → runs/researcher-20260723-034928/round-1-grok.md |
| 2026-07-23 | researcher | perplexity:sonar-reasoning-pro → perplexity:sonar-reasoning-pro | call-model.mjs | ~$0.0060 | 1997 tok, 5627 chars out, 126743ms → runs/researcher-20260723-034928/round-1-sonar-reasoning-pro.md |
| 2026-07-23 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.0786 | 39318 tok, 6546 chars out, 42774ms → runs/researcher-20260723-034928/round-1-grok.md |
| 2026-07-23 | researcher | openai:gpt-5 → gpt-5.6-sol | call-model.mjs | ~$0.0293 | 4181 tok, 13304 chars out, 55071ms → runs/researcher-20260723-034928/round-1-gpt-5.md |
| 2026-07-23 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.0960 | 47976 tok, 5988 chars out, 40035ms → runs/researcher-20260722-211825/round-1-xai-grok-4-x-search.md |
| 2026-07-23 | researcher | perplexity:sonar-reasoning-pro → perplexity:sonar-reasoning-pro | call-model.mjs | ~$0.0140 | 4658 tok, 15630 chars out, 48996ms → runs/researcher-20260722-211825/round-1-perplexity-sonar-reasoning-pro.md |
| 2026-07-23 | researcher | openai:gpt-5 → gpt-5.6-sol | call-model.mjs | ~$0.0598 | 8538 tok, 22528 chars out, 156885ms → runs/researcher-20260722-211825/round-1-openai-gpt-5.md |
| 2026-07-22 | researcher | perplexity:sonar-reasoning-pro+xai:grok-4-x-search+openai:gpt-5 | 1 | 1.20 | ~ | ~ |
| 2026-07-23 | researcher | xai:grok-4 → grok-4.5 | call-model.mjs | ~$0.0025 | 834 tok, 157 chars out, 3307ms → runs/researcher-20260723-090900/round-1-xai_grok-4.md |
| 2026-07-23 | researcher | perplexity:sonar-pro → perplexity:sonar-pro | call-model.mjs | ~$0.0234 | 3347 tok, 12333 chars out, 36523ms → runs/researcher-20260723-090900/round-1-perplexity_sonar-pro.md |
| 2026-07-23 | researcher | xai:grok-4 → grok-4.5 | call-model.mjs | ~$0.0025 | 844 tok, 176 chars out, 2574ms → runs/researcher-20260723-090900/round-1b-xai_grok-4.md |
| 2026-07-23 | researcher | openai:gpt-5 → gpt-5.6-sol | call-model.mjs | ~$0.0399 | 5704 tok, 7318 chars out, 89000ms → runs/researcher-20260723-090900/round-1b-openai_gpt-5.md |
| 2026-07-23 | researcher | xai:grok-4 → grok-4.5 | call-model.mjs | ~$0.0044 | 1468 tok, 311 chars out, 4862ms → runs/researcher-20260723-092831/round-1-grok.md |
| 2026-07-23 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview | call-model.mjs | ~$0.0529 | 10588 tok, 5161 chars out, 68460ms → runs/researcher-20260723-092831/round-1-gemini.md |
| 2026-07-23 | researcher | perplexity:sonar-reasoning-pro → perplexity:sonar-reasoning-pro | call-model.mjs | ~$0.0140 | 4656 tok, 15016 chars out, 109501ms → runs/researcher-20260723-092831/round-1-sonar.md |
| 2026-07-23 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.1149 | 57449 tok, 5590 chars out, 27300ms → runs/researcher-20260723-164230/round-1-xai-grok-4-x-search.md |
| 2026-07-23 | researcher | perplexity:sonar-reasoning-pro → perplexity:sonar-reasoning-pro | call-model.mjs | ~$0.0037 | 1222 tok, 2105 chars out, 62288ms → runs/researcher-20260723-164230/round-1-perplexity-sonar-reasoning-pro.md |
| 2026-07-23 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.0810 | 40487 tok, 6312 chars out, 27168ms → runs/researcher-20260723-125800/round-1-grok-x-search.md |
| 2026-07-23 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview-no-thinking | call-model.mjs | ~$0.0324 | 6471 tok, 6316 chars out, 50937ms → runs/researcher-20260723-125800/round-1-gemini.md |
| 2026-07-23 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0247 | 4946 tok, 20726 chars out, 166644ms → runs/researcher-20260723-125800/round-1-sonar-deep-research.md |
| 2026-07-23 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.1437 | 71832 tok, 6204 chars out, 36933ms → runs/researcher-20260723-125800/round-2-grok-verify.md |
| 2026-07-23 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview-no-thinking | call-model.mjs | ~$0.0587 | 11748 tok, 7992 chars out, 81782ms → runs/researcher-20260723-125800/round-2-gemini-verify.md |
| 2026-07-23 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0355 | 7091 tok, 33045 chars out, 195852ms → runs/researcher-20260723-125800/round-2-sonar.md |
| 2026-07-23 | researcher | perplexity:sonar-deep-research+xai:grok-4-x-search+google:gemini-3.1-pro | 1+2 | 0.376 | ~ | 580000 |
| 2026-07-23 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.1107 | 55355 tok, 5472 chars out, 27576ms → runs/researcher-20260723-131900/round-1-grok.md |
| 2026-07-23 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview+google_search | call-model.mjs | ~$0.0361 | 7218 tok, 5268 chars out, 54423ms → runs/researcher-20260723-131900/round-1-gemini.md |
| 2026-07-23 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0120 | 2408 tok, 7971 chars out, 91380ms → runs/researcher-20260723-131900/round-1-sonar.md |
| 2026-07-23 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.0565 | 28267 tok, 1945 chars out, 19625ms → runs/researcher-20260723-131900/round-2-grok.md |
| 2026-07-23 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview+google_search | call-model.mjs | ~$0.0298 | 5954 tok, 3751 chars out, 36770ms → runs/researcher-20260723-131900/round-2-gemini.md |
| 2026-07-23 | researcher | perplexity:sonar-reasoning-pro → perplexity:sonar-reasoning-pro | call-model.mjs | ~$0.0079 | 2649 tok, 6456 chars out, 42906ms → runs/researcher-20260723-131900/round-2-sonar.md |
| 2026-07-23 | researcher | perplexity:sonar-deep-research+xai:grok-4-x-search+google:gemini-3.1-pro (R1) + sonar-reasoning-pro+grok+gemini (R2) | 1+2 | 0.253 | ~ | 300000 |
| 2026-07-23 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.1093 | 54665 tok, 8514 chars out, 33361ms → runs/researcher-20260723-133500/round-1-grok.md |
| 2026-07-23 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview | call-model.mjs | ~$0.0144 | 2884 tok, 1288 chars out, 76087ms → runs/researcher-20260723-133500/round-1-gemini.md |
| 2026-07-23 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0286 | 5722 tok, 23162 chars out, 131822ms → runs/researcher-20260723-133500/round-1-sonar.md |
| 2026-07-23 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview-no-thinking | call-model.mjs | ~$0.0500 | 9995 tok, 9777 chars out, 68291ms → runs/researcher-20260723-133500/round-1-gemini-retry.md |
| 2026-07-23 | researcher | perplexity:sonar-reasoning-pro → perplexity:sonar-reasoning-pro | call-model.mjs | ~$0.0069 | 2299 tok, 6101 chars out, 68154ms → runs/researcher-20260723-133500/round-1b-sonar.md |
| 2026-07-23 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.0491 | 24553 tok, 5217 chars out, 25612ms → runs/researcher-20260723-133500/round-2-grok.md |
| 2026-07-23 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview+google_search | call-model.mjs | ~$0.0590 | 11790 tok, 5158 chars out, 76343ms → runs/researcher-20260723-133500/round-2-gemini.md |
| 2026-07-23 | researcher | perplexity:sonar-reasoning-pro → perplexity:sonar-reasoning-pro | call-model.mjs | ~$0.0117 | 3893 tok, 10820 chars out, 78589ms → runs/researcher-20260723-133500/round-2-sonar.md |
| 2026-07-23 | researcher | perplexity:sonar-deep-research+xai:grok-4-x-search+google:gemini-3.1-pro+perplexity:sonar-reasoning-pro | 1+2 (memory-mgmt stack-search) | 0.329 | ~ | 720000 |
| 2026-07-23 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.0554 | 27712 tok, 4820 chars out, 27524ms → runs/researcher-20260723-142400/round-1-grok.md |
| 2026-07-23 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview+google_search | call-model.mjs | ~$0.0363 | 7266 tok, 5845 chars out, 49970ms → runs/researcher-20260723-142400/round-1-gemini.md |
| 2026-07-23 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0238 | 4755 tok, 19989 chars out, 127076ms → runs/researcher-20260723-142400/round-1-sonar.md |
| 2026-07-23 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.0470 | 23506 tok, 2199 chars out, 20455ms → runs/researcher-20260723-142400/round-2-grok.md |
| 2026-07-23 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview+google_search | call-model.mjs | ~$0.0374 | 7471 tok, 2143 chars out, 46492ms → runs/researcher-20260723-142400/round-2-gemini.md |
| 2026-07-23 | researcher | perplexity:sonar-reasoning-pro → perplexity:sonar-reasoning-pro | call-model.mjs | ~$0.0053 | 1781 tok, 3895 chars out, 74187ms → runs/researcher-20260723-142400/round-2-sonar.md |
| 2026-07-23 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.0890 | 44506 tok, 7822 chars out, 37090ms → runs/researcher-20260723-1440/round-1-grok.md |
| 2026-07-23 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview+google_search | call-model.mjs | ~$0.0469 | 9383 tok, 5939 chars out, 70473ms → runs/researcher-20260723-1440/round-1-gemini.md |
| 2026-07-23 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0327 | 6549 tok, 29871 chars out, 110725ms → runs/researcher-20260723-1440/round-1-sonar.md |
| 2026-07-23 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.0493 | 24655 tok, 4155 chars out, 27378ms → runs/researcher-20260723-1440/round-2-grok.md |
| 2026-07-23 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview+google_search | call-model.mjs | ~$0.0275 | 5504 tok, 2975 chars out, 35255ms → runs/researcher-20260723-1440/round-2-gemini.md |
| 2026-07-23 | researcher | perplexity:sonar-reasoning-pro → perplexity:sonar-reasoning-pro | call-model.mjs | ~$0.0084 | 2799 tok, 8500 chars out, 65485ms → runs/researcher-20260723-1440/round-2-sonar.md |
| 2026-07-23 | researcher | perplexity:sonar-deep-research+xai:grok-4-x-search+google:gemini-3.1-pro+perplexity:sonar-reasoning-pro | 1+2 (teacher-systems stack-search) | 0.254 | ~ | 540000 |
| 2026-07-24 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.0736 | 36797 tok, 7039 chars out, 30553ms → runs/researcher-20260724-1055/round-1-grok.md |
| 2026-07-24 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview+google_search | call-model.mjs | ~$0.0397 | 7941 tok, 6753 chars out, 55705ms → runs/researcher-20260724-1055/round-1-gemini.md |
| 2026-07-24 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0681 | 13628 tok, 60540 chars out, 257572ms → runs/researcher-20260724-1055/round-1-sonar.md |
| 2026-07-24 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.0770 | 38520 tok, 2775 chars out, 29002ms → runs/researcher-20260724-1055/round-2-grok.md |
| 2026-07-24 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview+google_search | call-model.mjs | ~$0.0441 | 8829 tok, 3544 chars out, 55054ms → runs/researcher-20260724-1055/round-2-gemini.md |
| 2026-07-24 | researcher | perplexity:sonar-reasoning-pro → perplexity:sonar-reasoning-pro | call-model.mjs | ~$0.0130 | 4331 tok, 13189 chars out, 94805ms → runs/researcher-20260724-1055/round-2-sonar.md |
| 2026-07-24 | researcher | perplexity:sonar-deep-research+xai:grok-4-x-search+google:gemini-3.1-pro+perplexity:sonar-reasoning-pro | 1+2 (certs-and-training stack-search) | 0.3155 | ~110k tok | 620000 |
| 2026-07-24 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview+google_search | call-model.mjs | ~$0.0391 | 7830 tok, 5348 chars out, 54474ms → runs/researcher-20260724-123900/round-1-gemini.md |
| 2026-07-24 | researcher | xai:grok-4-20-multi-agent → grok-4.20-multi-agent | call-model.mjs | ~$2.0641 | 516034 tok, 13081 chars out, 112022ms → runs/researcher-20260724-123900/round-1-grok-ma.md |
| 2026-07-24 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0188 | 3768 tok, 13535 chars out, 127255ms → runs/researcher-20260724-123900/round-1-sdr.md |
| 2026-07-24 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview | call-model.mjs | ~$0.0259 | 5187 tok, 5000 chars out, 32168ms → runs/researcher-20260724-123900/round-2-gemini.md |
| 2026-07-24 | researcher | xai:grok-4-20-multi-agent → grok-4.20-multi-agent | call-model.mjs | ~$0.5977 | 149434 tok, 4025 chars out, 46815ms → runs/researcher-20260724-123900/round-2-grok-ma.md |
| 2026-07-24 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0614 | 12288 tok, 57003 chars out, 188105ms → runs/researcher-20260724-123900/round-1-sdr-retry.md |
| 2026-07-24 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.0851 | 42554 tok, 5804 chars out, 30649ms → runs/researcher-20260724-1306/round-1-grok.md |
| 2026-07-24 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0259 | 5176 tok, 20365 chars out, 175425ms → runs/researcher-20260724-1306/round-1-sdr.md |
| 2026-07-24 | researcher | perplexity:sonar-reasoning-pro → perplexity:sonar-reasoning-pro | call-model.mjs | ~$0.0084 | 2804 tok, 7206 chars out, 46126ms → runs/researcher-20260724-1306/round-2-sonar.md |
| 2026-07-24 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.0241 | 12033 tok, 3877 chars out, 21672ms → runs/researcher-20260724-1306/round-2-grok.md |
| 2026-07-24 | researcher | perplexity:sonar-deep-research+xai:grok-4-x-search+perplexity:sonar-reasoning-pro | 1+2 (writing-toolkit stack-search) | 0.1435 | ~63k tok | 1440000 |
| 2026-07-24 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.0772 | 38590 tok, 6787 chars out, 27034ms → runs/researcher-20260724-1352/round-1-grok.md |
| 2026-07-24 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview+google_search | call-model.mjs | ~$0.0579 | 11579 tok, 6845 chars out, 76839ms → runs/researcher-20260724-1352/round-1-gemini.md |
| 2026-07-24 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0697 | 13939 tok, 58350 chars out, 251145ms → runs/researcher-20260724-1352/round-1-sdr.md |
| 2026-07-24 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.1077 | 53853 tok, 6312 chars out, 31558ms → runs/researcher-20260724-1352/round-2-grok.md |
| 2026-07-24 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview+google_search | call-model.mjs | ~$0.0662 | 13236 tok, 5810 chars out, 80880ms → runs/researcher-20260724-1352/round-2-gemini.md |
| 2026-07-24 | researcher | perplexity:sonar-reasoning-pro → perplexity:sonar-reasoning-pro | call-model.mjs | ~$0.0266 | 8858 tok, 26359 chars out, 93958ms → runs/researcher-20260724-1352/round-2-sonar.md |
| 2026-07-24 | researcher | perplexity:sonar-deep-research+xai:grok-4-x-search+google:gemini-3-1-pro+perplexity:sonar-reasoning-pro | 1+2 (certs-and-training stack-search) | 0.4053 | ~90k tok | 780000 |
| 2026-07-24 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.0938 | 46913 tok, 4404 chars out, 27694ms → runs/researcher-20260724-142900/round-1-grok.md |
| 2026-07-24 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0589 | 11788 tok, 52345 chars out, 233565ms → runs/researcher-20260724-142900/round-1-sdr.md |
| 2026-07-24 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview+google_search | call-model.mjs | ~$0.0507 | 10132 tok, 5484 chars out, 61095ms → runs/researcher-20260724-142900/round-2-gemini.md |
| 2026-07-24 | researcher | perplexity:sonar-deep-research+xai:grok-4-x-search+google:gemini-2.5-pro | 1+2 (delta: prior-art sweep + github) | 0.2034 | ~69k tok | 1140000 |
| 2026-07-24 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.0916 | 45794 tok, 6070 chars out, 32338ms → runs/researcher-20260724-1445/round-1-xai_grok-4-x-search.md |
| 2026-07-24 | researcher | google:gemini-3-flash → gemini-3.5-flash+google_search | call-model.mjs | ~$0.0140 | 9329 tok, 9092 chars out, 49951ms → runs/researcher-20260724-1445/round-1-google_gemini-3-flash.md |
| 2026-07-24 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0544 | 10876 tok, 47308 chars out, 195458ms → runs/researcher-20260724-1445/round-1-perplexity_sonar-deep-research.md |
| 2026-07-24 | researcher | openai:gpt-5-4-pro → gpt-5.4 | call-model.mjs | ~$0.0450 | 8999 tok, 32988 chars out, 87683ms → runs/researcher-20260724-1445/round-1-openai_gpt-5-4-pro.md |
| 2026-07-24 | researcher | openai:gpt-5-4-pro → gpt-5.4 | call-model.mjs | ~$0.0106 | 2112 tok, 5116 chars out, 15490ms → runs/researcher-20260724-1445/round-2-openai_gpt-5-4-pro.md |
| 2026-07-24 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.0383 | 19138 tok, 2015 chars out, 15721ms → runs/researcher-20260724-1445/round-2-xai_grok-4-x-search.md |
| 2026-07-24 | researcher | google:gemini-3-flash → gemini-3.5-flash+google_search | call-model.mjs | ~$0.0118 | 7872 tok, 4383 chars out, 32038ms → runs/researcher-20260724-1445/round-2-google_gemini-3-flash.md |
| 2026-07-25 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.0764 | 38189 tok, 7630 chars out, 30569ms → runs/researcher-20260724-182000/round-1-grok-x-search.md |
| 2026-07-25 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview | call-model.mjs | ~$0.0232 | 4638 tok, 432 chars out, 42705ms → runs/researcher-20260724-182000/round-1-gemini.md |
| 2026-07-25 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0331 | 6625 tok, 27795 chars out, 98430ms → runs/researcher-20260724-182000/round-1-sonar-deep-research.md |
| 2026-07-25 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview+google_search | call-model.mjs | ~$0.0566 | 11321 tok, 7371 chars out, 71751ms → runs/researcher-20260724-182000/round-1-gemini-retry.md |
| 2026-07-25 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0556 | 11128 tok, 53673 chars out, 206140ms → runs/researcher-20260724-182000/round-2-sonar.md |
| 2026-07-25 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.0262 | 13104 tok, 1673 chars out, 14837ms → runs/researcher-20260724-182000/round-2-dialogue-grok.md |
| 2026-07-25 | researcher | perplexity:sonar-reasoning-pro → perplexity:sonar-reasoning-pro | call-model.mjs | ~$0.0044 | 1452 tok, 3474 chars out, 25345ms → runs/researcher-20260724-182000/round-2-dialogue-sonar.md |
| 2026-07-25 | researcher | openai:gpt-5 → gpt-5.6-sol | call-model.mjs | ~$0.0827 | 11808 tok, 31965 chars out, 182739ms → runs/researcher-20260724-182000/round-2-gpt5.md |
| 2026-07-24 | researcher | perplexity:sonar-deep-research+xai:grok-4-x-search+google:gemini-3.1-pro+openai:gpt-5.6-sol+perplexity:sonar-reasoning-pro | 1+2+dialogue (certs/training residual pass) | 0.3582 | ~98k tok | 1140000 |
| 2026-07-27 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.0930 | 46492 tok, 11650 chars out, 44914ms → runs/researcher-20260727-113505/round-1-grok-4-x-search.md |
| 2026-07-27 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview-no-thinking | call-model.mjs | ~$0.0482 | 9641 tok, 8610 chars out, 55071ms → runs/researcher-20260727-113505/round-1-gemini-3-1-pro.md |
| 2026-07-27 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0291 | 5830 tok, 19539 chars out, 172867ms → runs/researcher-20260727-113505/round-1-sonar-deep-research.md |
| 2026-07-27 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.0744 | 37176 tok, 8183 chars out, 29496ms → runs/researcher-20260727-113505/round-2-grok-4-x-search.md |
| 2026-07-27 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview-no-thinking | call-model.mjs | ~$0.0344 | 6875 tok, 5088 chars out, 42744ms → runs/researcher-20260727-113505/round-2-gemini-3-1-pro.md |
| 2026-07-27 | researcher | perplexity:sonar-reasoning-pro → perplexity:sonar-reasoning-pro | call-model.mjs | ~$0.0059 | 1963 tok, 3172 chars out, 60847ms → runs/researcher-20260727-113505/round-2-sonar-reasoning-pro.md |
| 2026-08-04 | researcher | openai:gpt-5 → gpt-5.6-sol | call-model.mjs | ~$0.0514 | 7342 tok, 10593 chars out, 114721ms → runs/researcher-20260804-021114/round-1-openai-gpt-5.md |
| 2026-08-04 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0113 | 2263 tok, 6290 chars out, 134754ms → runs/researcher-20260804-021114/round-1-perplexity-sonar-deep-research.md |
| 2026-08-06 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.0649 | 32448 tok, 9976 chars out, 35493ms → 1884f5ed-32f8-479d-accf-c8737d4d6876/scratchpad/grok-x-search-answer.md |
| 2026-08-06 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.0509 | 25471 tok, 6231 chars out, 25847ms → runs/researcher-20260806-164700/round-1-grok-4-x-search.md |
| 2026-08-06 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview-no-thinking | call-model.mjs | ~$0.0373 | 7456 tok, 6902 chars out, 42803ms → runs/researcher-20260806-164700/round-1-gemini-3-1-pro.md |
| 2026-08-06 | researcher | perplexity:sonar-reasoning-pro → perplexity:sonar-reasoning-pro | call-model.mjs | ~$0.0237 | 7901 tok, 25212 chars out, 91937ms → runs/researcher-20260806-164700/round-1-sonar-reasoning-pro.md |
| 2026-08-07 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.0327 | 16346 tok, 3172 chars out, 21634ms → runs/researcher-20260806-164700/round-2-grok-4-x-search.md |
| 2026-08-07 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview-no-thinking | call-model.mjs | ~$0.0292 | 5831 tok, 3023 chars out, 33874ms → runs/researcher-20260806-164700/round-2-gemini-3-1-pro.md |
| 2026-08-07 | researcher | perplexity:sonar-reasoning-pro → perplexity:sonar-reasoning-pro | call-model.mjs | ~$0.0048 | 1601 tok, 2024 chars out, 53546ms → runs/researcher-20260806-164700/round-2-sonar-reasoning-pro.md |
| 2026-08-07 | researcher | perplexity:sonar-reasoning-pro → perplexity:sonar-reasoning-pro | call-model.mjs | ~$0.0008 | 271 tok, 532 chars out, 76523ms → 1884f5ed-32f8-479d-accf-c8737d4d6876/scratchpad/pplx-smoke-out.md |
| 2026-08-07 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.0330 | 16520 tok, 5269 chars out, 25185ms → 1884f5ed-32f8-479d-accf-c8737d4d6876/scratchpad/council-grok.md |
| 2026-08-07 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview | call-model.mjs | ~$0.0213 | 4263 tok, 3382 chars out, 28055ms → 1884f5ed-32f8-479d-accf-c8737d4d6876/scratchpad/council-gemini.md |
| 2026-08-07 | researcher | openai:codex-subscription → openai:codex-subscription | call-model.mjs | ~$0.0000 | 0 tok, 10701 chars out, 446684ms → 1884f5ed-32f8-479d-accf-c8737d4d6876/scratchpad/council-gpt5-sub.md |
| 2026-08-07 | researcher | openai:gpt-5 → openai:gpt-5 | call-model.mjs | ~$0.0000 | 0 tok, 6 chars out, 3688ms → 1884f5ed-32f8-479d-accf-c8737d4d6876/scratchpad/route-test-out.md |
| 2026-08-07 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.0792 | 39599 tok, 10304 chars out, 31861ms → runs/researcher-20260806-215300/round-1-grok.md |
| 2026-08-07 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview+google_search | call-model.mjs | ~$0.0578 | 11561 tok, 11120 chars out, 73777ms → runs/researcher-20260806-215300/round-1-gemini.md |
| 2026-08-07 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0188 | 3766 tok, 9547 chars out, 510435ms → runs/researcher-20260806-215300/round-1-sdr.md |
| 2026-08-07 | researcher | perplexity:sonar-reasoning-pro → perplexity:sonar-reasoning-pro | call-model.mjs | ~$0.0330 | 11009 tok, 35741 chars out, 526056ms → runs/researcher-20260806-215300/round-1-srp.md |
| 2026-08-07 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.0829 | 41475 tok, 7733 chars out, 25823ms → runs/researcher-20260806-215300/round-2-grok.md |
| 2026-08-07 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview | call-model.mjs | ~$0.0656 | 13121 tok, 6849 chars out, 85847ms → runs/researcher-20260806-215300/round-2-gemini.md |
| 2026-08-07 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.1037 | 51844 tok, 12225 chars out, 33664ms → runs/researcher-20260807-115400/r1-grok-x-search.md |
| 2026-08-07 | researcher | google:gemini-2.5-pro → gemini-3.1-pro-preview-no-thinking | call-model.mjs | ~$0.0423 | 8465 tok, 9971 chars out, 63379ms → runs/researcher-20260807-115400/r1-gemini-pro.md |
| 2026-08-07 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.0739 | 36931 tok, 11638 chars out, 33968ms → career-ops/reports/reddit-memory-sprawl-grok-2026-08-07.md |
| 2026-08-07 | researcher | perplexity:sonar-pro → perplexity:sonar-pro | call-model.mjs | ~$0.0080 | 1141 tok, 1573 chars out, 6823ms → career-ops/reports/reddit-memory-sprawl-perplexity-2026-08-07.md |
| 2026-08-07 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.0700 | 34988 tok, 7350 chars out, 35267ms → runs/researcher-20260807-155900/round-1-xai-grok-4-x-search.md |
| 2026-08-07 | researcher | perplexity:sonar-reasoning-pro → perplexity:sonar-reasoning-pro | call-model.mjs | ~$0.0099 | 3297 tok, 9878 chars out, 60240ms → runs/researcher-20260807-155900/round-1-perplexity-sonar-reasoning-pro.md |
| 2026-08-07 | researcher | perplexity:sonar-reasoning-pro → perplexity:sonar-reasoning-pro | call-model.mjs | ~$0.0057 | 1914 tok, 5382 chars out, 171516ms → runs/researcher-20260807-155900/round-1-perplexity-sonar-reasoning-pro-followup.md |
| 2026-08-11 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0378 | 7554 tok, 37198 chars out, 129704ms → private/tmp/career-ops-apply-pack-research-perplexity.out.md |
| 2026-08-11 | researcher | xai:grok-4-20-multi-agent → grok-4.20-multi-agent | call-model.mjs | ~$4.9351 | 1233786 tok, 11469 chars out, 93362ms → private/tmp/career-ops-apply-pack-research-grok.out.md |
| 2026-08-12 | researcher | xai:grok-4-20-multi-agent → grok-4.20-multi-agent | call-model.mjs | ~$4.1595 | 1039871 tok, 13567 chars out, 111016ms → runs/researcher-20260812-112900/round-1-grok-4-20-multi-agent.md |
| 2026-08-12 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0365 | 7304 tok, 31992 chars out, 186205ms → runs/researcher-20260812-112900/round-1-sonar-deep-research.md |
| 2026-08-12 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0497 | 9936 tok, 47258 chars out, 198801ms → runs/researcher-20260812-112900/round-1b-sonar-deep-research-part2.md |
| 2026-08-12 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0571 | 11421 tok, 53810 chars out, 196501ms → tmp/db-adj/out-pplx.md |
| 2026-08-12 | researcher | xai:grok-4-20-multi-agent → grok-4.20-multi-agent | call-model.mjs | ~$4.3501 | 1087532 tok, 8600 chars out, 94955ms → tmp/db-adj/out-grok.md |
| 2026-08-15 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.1437 | 71837 tok, 9359 chars out, 39048ms → runs/researcher-20260815-0418/round-1-grok-4-x-search.md |
| 2026-08-15 | researcher | google:gemini-3.1-pro → gemini-3.1-pro-preview+google_search | call-model.mjs | ~$0.0585 | 8357 tok, 12346 chars out, 62616ms → runs/researcher-20260815-0418/round-1-gemini-3.1-pro.md |
| 2026-08-15 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0702 | 14035 tok, 63557 chars out, 251509ms → runs/researcher-20260815-0418/round-1-sonar-deep-research.md |
| 2026-08-15 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.0595 | 29760 tok, 7726 chars out, 33237ms → runs/researcher-20260815-0418/round-2-grok-4-x-search.md |
| 2026-08-15 | researcher | google:gemini-3.1-pro → gemini-3.1-pro-preview | call-model.mjs | ~$0.0484 | 6920 tok, 10426 chars out, 74241ms → runs/researcher-20260815-0418/round-2-gemini-3.1-pro.md |
| 2026-08-15 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0458 | 9154 tok, 39093 chars out, 232753ms → runs/researcher-20260815-0418/round-2-sonar-deep-research.md |
| 2026-08-15 | researcher | google:gemini-3.1-pro → gemini-3.1-pro-preview | call-model.mjs | ~$0.0734 | 10484 tok, 6651 chars out, 51924ms → runs/researcher-20260815-045918/round-1-gemini-3.1-pro.md |
| 2026-08-15 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0552 | 11034 tok, 48246 chars out, 225694ms → runs/researcher-20260815-045918/round-1-sonar-deep-research.md |
| 2026-08-15 | researcher | google:gemini-3.1-pro → gemini-3.1-pro-preview+google_search | call-model.mjs | ~$0.0819 | 11695 tok, 4715 chars out, 102662ms → runs/researcher-20260815-045918/round-2-gemini-3.1-pro.md |
| 2026-08-15 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0537 | 10748 tok, 46754 chars out, 172919ms → runs/researcher-20260815-045918/round-2-sonar-deep-research.md |
| 2026-08-15 | researcher | grok-cli:grok-4.6 → grok-4.6 (subscription; xAI API 403 failover) | round-1 | ~$0.0000 | 0 tok, 25661 chars out, ~330000ms → runs/researcher-20260815-045918/round-1-grok-cli-grok-4.6.md |
| 2026-08-15 | researcher | grok-cli:grok-4.6 → grok-4.6 (subscription) | round-2 | ~$0.0000 | 0 tok, 16123 chars out, ~210000ms → runs/researcher-20260815-045918/round-2-grok-cli-grok-4.6.md |
| 2026-08-15 | researcher | xai:grok-4-20-multi-agent → FAILED HTTP 403 team credits/monthly limit 7cfbabd4-6e99-482b-9cc8-ed452d028fa1 | round-1 | ~$0.0000 | 0 tok, 0 chars out, fail → runs/researcher-20260815-045918/round-1-grok-4-20-multi-agent.md.log |
| 2026-08-15 | researcher | xai:grok-4-x-search → FAILED HTTP 403 same team | round-1-failover | ~$0.0000 | 0 tok, 0 chars out, fail → runs/researcher-20260815-045918/round-1-grok-4-x-search.md.log |
| 2026-08-15 | researcher | google:gemini-3.1-pro → gemini-3.1-pro-preview | call-model.mjs | ~$0.0700 | 10003 tok, 9704 chars out, 50903ms → runs/researcher-20260815-122022/round-1-gemini-3.1-pro.md |
| 2026-08-15 | researcher | xai:grok-4-20-multi-agent → grok-4.20-multi-agent | call-model.mjs | ~$7.9215 | 1980363 tok, 17548 chars out, 135441ms → runs/researcher-20260815-122022/round-1-grok-4-20-multi-agent.md |
| 2026-08-15 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0729 | 14586 tok, 62236 chars out, 215505ms → runs/researcher-20260815-122022/round-1-sonar-deep-research.md |
| 2026-08-15 | researcher | google:gemini-3.1-pro → gemini-3.1-pro-preview | call-model.mjs | ~$0.0764 | 10912 tok, 6952 chars out, 64865ms → runs/researcher-20260815-122022/round-2-gemini-3.1-pro.md |
| 2026-08-15 | researcher | xai:grok-4-20-multi-agent → grok-4.20-multi-agent | call-model.mjs | ~$3.6433 | 910835 tok, 9531 chars out, 101686ms → runs/researcher-20260815-122022/round-2-grok-4-20-multi-agent.md |
| 2026-08-15 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0460 | 9199 tok, 38534 chars out, 163098ms → runs/researcher-20260815-122022/round-2-sonar-deep-research.md |
| 2026-08-18 | researcher | xai:grok-4-20-multi-agent → grok-4.20-multi-agent | call-model.mjs | ~$5.9963 | 1499085 tok, 13971 chars out, 214974ms → runs/researcher-20260818-033800/round-1-grok-4-20-multi-agent.md |
| 2026-08-18 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0432 | 8642 tok, 31940 chars out, 262853ms → runs/researcher-20260818-033800/round-1-sonar-deep-research.md |
| 2026-08-19 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.0755 | 37771 tok, 5125 chars out, 26237ms → runs/researcher-20260819-134900/round-1-xai-grok-4-x-search.md |
| 2026-08-19 | researcher | xai:grok-4-20-multi-agent → grok-4.20-multi-agent | call-model.mjs | ~$8.0720 | 2018007 tok, 17821 chars out, 136321ms → runs/researcher-20260819-134900/round-1-xai-grok-4-20-multi-agent.md |
| 2026-08-19 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0603 | 12061 tok, 47791 chars out, 262671ms → runs/researcher-20260819-134900/round-1-perplexity-sonar-deep-research.md |
| 2026-08-19 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0691 | 13815 tok, 61558 chars out, 192762ms → runs/researcher-20260819-134900/round-1b-perplexity-sonar-deep-research-partB.md |
| 2026-08-19 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.0818 | 40902 tok, 7447 chars out, 28139ms → runs/researcher-20260819-144500/round-1-grok-x-search.md |
| 2026-08-19 | researcher | google:gemini-3.1-pro → gemini-3.1-pro-preview+google_search | call-model.mjs | ~$0.0644 | 9193 tok, 5336 chars out, 67705ms → runs/researcher-20260819-144500/round-1-gemini-3.1-pro.md |
| 2026-08-19 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0604 | 12084 tok, 57205 chars out, 176683ms → runs/researcher-20260819-144500/round-1-sonar-B.md |
| 2026-08-19 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0474 | 9478 tok, 38285 chars out, 238069ms → runs/researcher-20260819-144500/round-1-sonar-A.md |
| 2026-08-19 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0381 | 7615 tok, 35001 chars out, 192890ms → runs/researcher-20260819-144500/round-1b-sonar-F.md |
| 2026-08-19 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0628 | 12566 tok, 59769 chars out, 199792ms → runs/researcher-20260819-144500/round-1b-sonar-E.md |
| 2026-08-19 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0489 | 9789 tok, 48210 chars out, 169770ms → runs/researcher-20260819-144500/round-1c-sonar-G.md |
| 2026-08-19 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.0577 | 28852 tok, 7060 chars out, 23431ms → runs/researcher-20260819-150900/round-1-xai-grok-4-x-search.md |
| 2026-08-19 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0479 | 9588 tok, 46796 chars out, 166107ms → runs/researcher-20260819-150900/round-1-perplexity-sonar-deep-research.md |
| 2026-08-19 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0268 | 5355 tok, 27729 chars out, 138273ms → runs/researcher-20260819-150900/round-1b-perplexity-item5.md |
| 2026-08-19 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.0713 | 35631 tok, 7105 chars out, 28325ms → runs/researcher-20260819-153000/round-1-A-grok-x-search.md |
| 2026-08-19 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0288 | 5754 tok, 28459 chars out, 112649ms → runs/researcher-20260819-153000/round-1-C1-pplx-item5.md |
| 2026-08-19 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0265 | 5302 tok, 23052 chars out, 112024ms → runs/researcher-20260819-153000/round-1-C2-pplx-items1234.md |
| 2026-08-19 | researcher | xai:grok-4-20-multi-agent → grok-4.20-multi-agent | call-model.mjs | ~$5.9210 | 1480257 tok, 13292 chars out, 117471ms → runs/researcher-20260819-153000/round-1-B-grok-multi-agent.md |
| 2026-08-19 | researcher | xai:grok-4-20-multi-agent → grok-4.20-multi-agent | call-model.mjs | ~$2.7335 | 683373 tok, 3987 chars out, 48071ms → runs/researcher-20260819-153000/round-2-grok.md |
| 2026-08-19 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0115 | 2308 tok, 5454 chars out, 55429ms → runs/researcher-20260819-153000/round-2-pplx.md |
| 2026-08-20 | researcher | xai:grok-4-x-search → grok-4-1-fast-reasoning+web_search+x_search | call-model.mjs | ~$0.0559 | 27968 tok, 6890 chars out, 26691ms → runs/researcher-20260820-110500/round-1-grok.md |
| 2026-08-20 | researcher | perplexity:sonar-deep-research → perplexity:sonar-deep-research | call-model.mjs | ~$0.0065 | 1291 tok, 547 chars out, 266403ms → runs/researcher-20260820-110500/round-1-perplexity.md |
