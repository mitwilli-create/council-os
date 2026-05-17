---
source_url: https://developers.openai.com/api/docs/models/all
fetched_at: 2026-05-17
source_authority: official_doc
provider: openai
purpose: models-overview
fetch_quality: faithful
---

# All models

Browse all available models and compare their capabilities.

## Frontier models

OpenAI's most advanced models, recommended for most tasks.

- **GPT-5.5** — A new class of intelligence for coding and professional work.
- **GPT-5.5 pro** — Version of GPT-5.5 that produces smarter and more precise responses.
- **GPT-5.4** — A more affordable model for coding and professional work.
- **GPT-5.4 pro** — Version of GPT-5.4 that produces smarter and more precise responses.
- **GPT-5.4 mini** — Our strongest mini model yet for coding, computer use, and subagents.
- **GPT-5.4 nano** — Our cheapest GPT-5.4-class model for simple high-volume tasks.
- **GPT-5 mini** — Near-frontier intelligence for cost sensitive, low latency, high volume workloads.
- **GPT-5 nano** — Fastest, most cost-efficient version of GPT-5.
- **GPT-5** — Previous intelligent reasoning model for coding and agentic tasks with configurable reasoning effort.
- **GPT-4.1** — Smartest non-reasoning model.

## Image

- **GPT Image 2** — State-of-the-art image generation model.
- **GPT Image 1.5** — Our previous image generation model.
- **chatgpt-image-latest** — Previous image model used in ChatGPT.
- **GPT Image 1** [Deprecated]
- **gpt-image-1-mini** — Cost-efficient version of GPT Image 1.
- **DALL·E 3** [Deprecated]
- **DALL·E 2** [Deprecated]

## Video

- **Sora 2** [Deprecated] — Flagship video generation with synced audio.
- **Sora 2 Pro** [Deprecated]

## Realtime & audio

- **gpt-realtime-2** — Reasoning model for realtime voice interactions.
- **gpt-realtime-translate** — Streaming speech-to-speech translation.
- **gpt-realtime-whisper** — Streaming speech-to-text for realtime transcription.
- **gpt-realtime-1.5** — Best voice model for audio in, audio out.
- **gpt-realtime** — Realtime text and audio I/O.
- **gpt-realtime-mini** — Cost-efficient version of GPT Realtime.
- **gpt-audio-1.5** — Best voice model for audio in, audio out with Chat Completions.
- **gpt-audio** — Audio I/O with Chat Completions API.
- **gpt-audio-mini** — Cost-efficient version of GPT Audio.
- **GPT-4o Audio / mini Audio** [Deprecated]
- **GPT-4o Realtime / mini Realtime** (mini deprecated)
- **GPT-4o Transcribe / mini Transcribe** — Speech-to-text.
- **GPT-4o Transcribe Diarize** — Speaker-identifying transcription.
- **GPT-4o mini TTS** — Text-to-speech.
- **TTS-1, TTS-1 HD** — TTS variants.
- **Whisper** — General-purpose speech recognition.

## Coding

- **GPT-5-Codex** [Deprecated]
- **GPT-5.3-Codex** — The most capable agentic coding model to date.
- **GPT-5.2-Codex** [Deprecated]
- **GPT-5.1 Codex** [Deprecated]
- **GPT-5.1-Codex-Max** [Deprecated]
- **GPT-5.1 Codex mini** [Deprecated]
- **codex-mini-latest** [Deprecated]

## Deep research

- **o3-deep-research** [Deprecated]
- **o4-mini-deep-research** [Deprecated]

## Open-weight models (Apache 2.0)

- **gpt-oss-120b** — Most powerful open-weight model, fits an H100 GPU.
- **gpt-oss-20b** — Medium-sized open-weight, low latency.

## More models

- **GPT-5.2** — Previous frontier with configurable reasoning effort.
- **GPT-5.1** — Best model for coding and agentic tasks with configurable reasoning effort.
- **GPT-5.2 pro** / **GPT-5 pro** — Pro versions of respective generations.
- **o3-pro** — o3 with more compute for better responses.
- **o3** — Reasoning model for complex tasks, succeeded by GPT-5.
- **o4-mini** [Deprecated] — Succeeded by GPT-5 mini.
- **GPT-4.1-mini** / **GPT-4.1 nano** (nano deprecated).
- **o1-pro / o1 / o1-mini / o1 Preview** — All deprecated.
- **computer-use-preview** [Deprecated].
- **GPT-4o Search Preview / mini Search Preview** — Both deprecated.
- **GPT-4.5 Preview** [Deprecated].
- **o3-mini** [Deprecated].
- **omni-moderation** — Identifies harmful content in text and images.
- **GPT-4o** — Fast, intelligent, flexible GPT model.
- **GPT-4o mini** — Fast, affordable small model.
- **GPT-4 Turbo** / **GPT-4 Turbo Preview** [Deprecated].
- **GPT-4** — Older high-intelligence GPT model.
- **GPT-3.5 Turbo** [Deprecated].
- **babbage-002, davinci-002** [Deprecated].
- **ChatGPT-4o** [Deprecated].
- **chat-latest** — Latest Instant model used in ChatGPT.
- **GPT-5.3 Chat / GPT-5.2 Chat** — ChatGPT variants.
- **GPT-5.1 Chat / GPT-5 Chat** [Deprecated].
- **text-embedding-3-large / 3-small / ada-002** — Embedding models (ada-002 older).
- **text-moderation / -stable** [Deprecated].

## ChatGPT models (not recommended for API use)

- **chat-latest** — Latest Instant model in ChatGPT.
- **GPT-5 Chat / ChatGPT-4o** [Deprecated].

---

**Notes for Council OS:**
- This list reveals model variants beyond what `sources.json` tracks. Consider whether to add: GPT-5.4 mini, GPT-5.4 nano, GPT-5 mini, GPT-5 nano, GPT-5.3-Codex (agentic coding flagship), gpt-realtime-2.
- o-series is end-of-life (o3, o4 succeeded by GPT-5 family); confirmed by retirement annotations.
