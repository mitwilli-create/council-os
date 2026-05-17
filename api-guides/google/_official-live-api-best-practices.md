---
source_url: https://ai.google.dev/gemini-api/docs/live-api/best-practices
fetched_at: 2026-05-17
source_authority: official_doc
provider: google
purpose: live-api-best-practices
fetch_quality: summarized
fetch_note: WebFetch processor compressed but preserved key recommendations.
---

# Live API Best Practices

## Overview

Optimization strategies for the Live API (currently in preview). Covers system design, tool configuration, and session management.

## System Instructions Design

Four-part structure:

1. **Agent Persona** — Define agent's name, role, characteristics. Include accent and language preferences.
2. **Conversational Rules** — Distinguish one-time elements from ongoing conversational loops.
3. **Tool Invocation** — Distinct sentences describing when and how to invoke each function.
4. **Guardrails** — Boundaries; use precise terms like "unmistakably."

## Tool Definition Best Practices

Tools should include "clear definitions specifying names, descriptions, parameters, and invocation conditions."

## Streaming and Audio

- Send audio in 20–40ms chunks
- Handle interruption signals by discarding client-side buffers when `"interrupted": true` received
- Resample microphone input to 16kHz before transmission
- Avoid buffering input audio significantly before sending

## Session Management

- Enable context window compression (audio tokens accumulate at ~25 per second)
- Implement session resumption using tokens valid for 2 hours
- Monitor GoAway messages for graceful disconnection
- Use `generationComplete` signals for UI updates

## Language Specification

Match API's `language_code` to user language. Include instructions like:

```
RESPOND IN {OUTPUT_LANGUAGE}. YOU MUST RESPOND UNMISTAKABLY IN {OUTPUT_LANGUAGE}.
```

## Billing Model

Live API uses a compounding cost model: "all tokens present in the session context window" are charged per turn. Audio tokens billed at standard rates plus transcription surcharges when enabled.
