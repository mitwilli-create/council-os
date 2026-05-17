---
source_url: https://ai.google.dev/gemini-api/docs/models
fetched_at: 2026-05-17
source_authority: official_doc
provider: google
purpose: models-overview
fetch_quality: faithful
---

# Models

## Warning

"Gemini 3 Pro Preview is deprecated and has been shut down March 9, 2026. Migrate to Gemini 3.1 Pro Preview to avoid service disruption."

## Gemini 3

- **Gemini 3.1 Pro** (Preview) — Advanced intelligence with complex problem-solving and agentic capabilities
- **Gemini 3 Flash** (Preview) — Frontier-class performance at a fraction of typical costs
- **Gemini 3.1 Flash-Lite** (Stable & Preview) — Frontier-class performance optimized for efficiency
- **Nano Banana 2** (Preview) — High-efficiency image generation and editing
- **Nano Banana Pro** (Preview) — State-of-the-art image generation and editing
- **Gemini 3.1 Flash Live** (New Preview) — Low-latency Live API for real-time dialogue
- **Gemini 3.1 Flash TTS** (New Preview) — Powerful, low-latency speech generation

## Gemini 2.5 Flash

- **Gemini 2.5 Flash** — Best price-performance for low-latency, high-volume reasoning tasks
- **Nano Banana** — Native image generation and editing for fast workflows
- **Gemini 2.5 Flash Live Preview** — Real-time conversational agents with sub-second audio streaming
- **Gemini 2.5 Flash TTS Preview** — Controllable text-to-speech with style and pacing control

## Gemini 2.5 Flash-Lite

- **Gemini 2.5 Flash-Lite** — Fastest and most budget-friendly multimodal model in the 2.5 family

## Gemini 2.5 Pro

- **Gemini 2.5 Pro** — Most advanced model for complex tasks with deep reasoning and coding
- **Gemini 2.5 Pro TTS Preview** — High-fidelity speech synthesis for podcasts and audiobooks

## Audio Models

- Gemini 3.1 Flash Live Preview
- Gemini 3.1 Flash TTS Preview
- Gemini 2.5 Flash Live Preview
- Gemini 2.5 Flash TTS Preview
- Gemini 2.5 Pro TTS Preview

## Generative Media Models

- Nano Banana 2 Preview
- Veo 3.1 Preview — Cinematic video generation with synchronized audio
- Nano Banana Pro Preview
- Veo 3.1 Lite Preview
- Nano Banana
- Imagen 4 — Text-to-image with fast generation and 2K resolution

## Music Generation Models

- Lyria 3 Pro Preview — Full-length songs with structural coherence
- Lyria 3 Clip Preview — Short musical clips up to 30 seconds
- Lyria RealTime Experimental — High-fidelity music with real-time streaming

## Tool and Agent Models

- **Computer Use Preview** — Automates browser tasks by interpreting screens and performing actions
- **Gemini Deep Research Preview** — Autonomous multi-step research across hundreds of sources
- **Gemini Deep Research Max Preview** — Maximum comprehensiveness for context gathering

## Specialized Task Models

- **Gemini Embedding 2** — Multimodal embedding mapping text, images, video, audio, and PDFs
- **Gemini Embedding** — High-dimensional vectors for semantic search and RAG
- **Gemini Robotics-ER 1.6 Preview** — Embodied reasoning for robotic agents

## Previous Models (Deprecated)

- Gemini 2.0 Flash (Deprecated)
- Gemini 2.0 Flash-Lite (Deprecated)
- Gemini 3 Pro Preview (Shut down 2026-03-09)

## Model Version Name Patterns

**Stable**: Points to specific stable models that typically don't change
- Example: `gemini-2.5-flash`

**Preview**: May be used for production; will have billing enabled and deprecation notice of at least 2 weeks
- Example: `gemini-2.5-flash-preview-09-2025`

**Latest**: Points to the latest release; receives 2-week notice before version changes
- Example: `gemini-flash-latest`

**Experimental**: Not suitable for production; may have restrictive rate limits and availability subject to change
- Example: Experimental models updated frequently with latest features

---

**Notes for Council OS sources.json:**
- Gemini 3.1 Flash-Lite is in BOTH stable + preview, not just preview as my sources.json captures.
- Add: Gemini 3.1 Flash TTS Preview (out of council scope but documenting).
- "Gemini 3 Pro Preview" auto-redirects to gemini-3.1-pro-preview (per career-ops lib/council.mjs already noted).
