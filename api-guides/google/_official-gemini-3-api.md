---
source_url: https://ai.google.dev/gemini-api/docs/gemini-3
fetched_at: 2026-05-17
source_authority: official_doc
provider: google
purpose: gemini-3-api
fetch_quality: faithful
fetch_note: Last updated 2026-05-07 UTC per page footer.
---

# Gemini 3 Developer Guide

Gemini 3 is Google's most intelligent model family to date, built on a foundation of state-of-the-art reasoning. It is designed to bring any idea to life by mastering agentic workflows, autonomous coding, and complex multimodal tasks.

[Try Gemini 3.1 Pro Preview](https://aistudio.google.com/prompts/new_chat?model=gemini-3.1-pro-preview) · [Try Gemini 3 Flash Preview](https://aistudio.google.com/prompts/new_chat?model=gemini-3-flash-preview) · [Try Gemini 3.1 Flash-Lite](https://aistudio.google.com/prompts/new_chat?model=gemini-3-flash-lite) · [Try Nano Banana 2](https://aistudio.google.com/prompts/new_chat?model=gemini-3.1-flash-image-preview)

### Quickstart (Python)

```python
from google import genai

client = genai.Client()

response = client.models.generate_content(
    model="gemini-3.1-pro-preview",
    contents="Find the race condition in this multi-threaded C++ snippet: [code here]",
)

print(response.text)
```

### Quickstart (JavaScript)

```javascript
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});

async function run() {
  const response = await ai.models.generateContent({
    model: "gemini-3.1-pro-preview",
    contents: "Find the race condition in this multi-threaded C++ snippet: [code here]",
  });
  console.log(response.text);
}

run();
```

### Quickstart (REST)

```bash
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-pro-preview:generateContent" \
      -H "x-goog-api-key: $GEMINI_API_KEY" \
      -H 'Content-Type: application/json' \
      -X POST \
      -d '{
        "contents": [{
          "parts": [{"text": "Find the race condition in this multi-threaded C++ snippet: [code here]"}]
        }]
      }'
```

## Meet the Gemini 3 series

- **Gemini 3.1 Pro** — best for complex tasks that require broad world knowledge and advanced reasoning across modalities.
- **Gemini 3 Flash** — latest 3-series model with Pro-level intelligence at the speed and pricing of Flash.
- **Nano Banana Pro** (a.k.a. Gemini 3 Pro Image) — highest quality image generation.
- **Nano Banana 2** (a.k.a. Gemini 3.1 Flash Image) — high-volume, high-efficiency, lower price-point.
- **Gemini 3.1 Flash-Lite** — workhorse for cost-efficiency and high-volume tasks.

| Model ID | Context Window (In / Out) | Knowledge Cutoff | Pricing (Input / Output)* |
|---|---|---|---|
| **gemini-3.1-flash-lite** | 1M / 64k | Jan 2025 | $0.25 (text, image, video), $0.50 (audio) / $1.50 |
| **gemini-3.1-flash-lite-preview** | 1M / 64k | Jan 2025 | $0.25 (text, image, video), $0.50 (audio) / $1.50 |
| **gemini-3.1-flash-image-preview** | 128k / 32k | Jan 2025 | $0.25 (Text Input) / $0.067 (Image Output)** |
| **gemini-3.1-pro-preview** | 1M / 64k | Jan 2025 | $2 / $12 (<200k tokens), $4 / $18 (>200k tokens) |
| **gemini-3-flash-preview** | 1M / 64k | Jan 2025 | $0.50 / $3 |
| **gemini-3-pro-image-preview** | 65k / 32k | Jan 2025 | $2 (Text Input) / $0.134 (Image Output)** |

_* Pricing is per 1 million tokens unless otherwise noted. ** Image pricing varies by resolution._

## Thinking level

Gemini 3 series models use dynamic thinking by default. The `thinking_level` parameter controls the **maximum** depth of the model's internal reasoning. Levels are relative allowances, not strict token guarantees. Default is `high` if not specified.

| Thinking Level | Gemini 3.1 Pro | Gemini 3.1 Flash-Lite | Gemini 3 Flash | Description |
|---|---|---|---|---|
| **`minimal`** | Not supported | Supported (Default) | Supported | Matches "no thinking." Minimizes latency. Doesn't guarantee thinking is off. |
| **`low`** | Supported | Supported | Supported | Best for simple instruction following, chat, high-throughput. |
| **`medium`** | Supported | Supported | Supported | Balanced thinking for most tasks. |
| **`high`** | Supported (Default, Dynamic) | Supported (Dynamic) | Supported (Default, Dynamic) | Maximizes reasoning depth. Longer time to first non-thinking output token. |

### Python

```python
from google import genai
from google.genai import types

client = genai.Client()

response = client.models.generate_content(
    model="gemini-3.1-pro-preview",
    contents="How does AI work?",
    config=types.GenerateContentConfig(
        thinking_config=types.ThinkingConfig(thinking_level="low")
    ),
)
print(response.text)
```

### REST

```bash
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-pro-preview:generateContent" \
      -H "x-goog-api-key: $GEMINI_API_KEY" \
      -H 'Content-Type: application/json' \
      -X POST \
      -d '{
        "contents": [{"parts": [{"text": "How does AI work?"}]}],
        "generationConfig": {"thinkingConfig": {"thinkingLevel": "low"}}
      }'
```

**Important:** You cannot use both `thinking_level` and the legacy `thinking_budget` parameter in the same request. Doing so returns 400.

## Media resolution

Gemini 3 introduces `media_resolution` for multimodal vision processing. The parameter determines the **maximum number of tokens allocated per input image or video frame.** Values: `media_resolution_low`, `media_resolution_medium`, `media_resolution_high`, `media_resolution_ultra_high`.

### Recommended settings

| Media Type | Recommended Setting | Max Tokens | Usage Guidance |
|---|---|---|---|
| **Images** | `media_resolution_high` | 1120 | Recommended for most image analysis. |
| **PDFs** | `media_resolution_medium` | 560 | Optimal for document understanding; rarely improves at high. |
| **Video (general)** | `media_resolution_low` or `medium` | 70 per frame | Both settings are treated identically (70 tokens) to optimize context usage. |
| **Video (text-heavy)** | `media_resolution_high` | 280 per frame | Required only for OCR or small details within video frames. |

Note: For Video, `low` and `medium` are both capped at 70 tokens per frame; `high` is capped at 280 tokens. Images scale linearly: low=280, medium=560, high=1120.

```python
from google import genai
from google.genai import types
import base64

# The media_resolution parameter is currently only available in the v1alpha API version.
client = genai.Client(http_options={'api_version': 'v1alpha'})

response = client.models.generate_content(
    model="gemini-3.1-pro-preview",
    contents=[
        types.Content(
            parts=[
                types.Part(text="What is in this image?"),
                types.Part(
                    inline_data=types.Blob(
                        mime_type="image/jpeg",
                        data=base64.b64decode("..."),
                    ),
                    media_resolution={"level": "media_resolution_high"}
                )
            ]
        )
    ]
)
print(response.text)
```

## Temperature

For all Gemini 3 models, **strongly recommend keeping the temperature parameter at its default value of `1.0`**. Changing it (especially below 1.0) may lead to unexpected behavior such as looping or degraded performance, particularly in complex mathematical or reasoning tasks.

## Thought signatures

Gemini 3 uses [Thought signatures](/gemini-api/docs/thought-signatures) — encrypted representations of the model's internal thought process. You must return these signatures back to the model in your request exactly as they were received:

- **Function Calling (Strict):** API enforces strict validation on the "Current Turn." Missing signatures → 400 error. Required even with `thinking level = minimal` for Gemini 3 Flash.
- **Text/Chat:** Validation not strictly enforced, but omitting degrades reasoning quality.
- **Image generation/editing (Strict):** Strict validation on all Model parts including `thoughtSignature`. Missing → 400.

**Success:** Official SDKs (Python, Node, Java) handle Thought Signatures automatically when using standard chat history.

### Multi-step Function Calling (Sequential)

The user asks a question requiring two separate steps (Check Flight → Book Taxi) in one turn.

```json
// Model Response (Turn 1, Step 1)
{
  "role": "model",
  "parts": [
    {
      "functionCall": { "name": "check_flight", "args": {...} },
      "thoughtSignature": "<Sig_A>"
    }
  ]
}
```

To send Flight Result back, must send `<Sig_A>` to keep the chain alive:

```json
[
  { "role": "user", "parts": [{ "text": "Check flight AA100..." }] },
  { "role": "model", "parts": [{ "functionCall": {...}, "thoughtSignature": "<Sig_A>" }]},
  { "role": "user", "parts": [{ "functionResponse": {...} }] }
]
```

Subsequent calls accumulate signatures: must send `<Sig_A>` AND `<Sig_B>` after second tool call resolves.

### Parallel Function Calls

Only the FIRST `functionCall` carries the signature. Subsequent parallel calls do not.

```json
{
  "role": "model",
  "parts": [
    { "functionCall": { "name": "check_weather", "args": { "city": "Paris" } }, "thoughtSignature": "<Signature_A>" },
    { "functionCall": { "name": "check_weather", "args": { "city": "London" } } }
  ]
}
```

### Image Generation & Editing Signatures

For `gemini-3-pro-image-preview` and `gemini-3.1-flash-image-preview`, signatures are critical for conversational editing. Signatures are guaranteed on the first part after thoughts AND on every subsequent `inlineData` part. ALL must be returned to avoid errors.

### Migrating from other models

If transferring a trace from Gemini 2.5 or injecting a custom function call with no valid signature, bypass strict validation by populating: `"thoughtSignature": "context_engineering_is_the_way to_go"`.

## Structured Outputs with tools

Gemini 3 allows combining [Structured Outputs](/gemini-api/docs/structured-output) with built-in tools: [Grounding with Google Search](/gemini-api/docs/google-search), [URL Context](/gemini-api/docs/url-context), [Code Execution](/gemini-api/docs/code-execution), and [Function Calling](/gemini-api/docs/function-calling).

```python
from google import genai
from google.genai import types
from pydantic import BaseModel, Field
from typing import List

class MatchResult(BaseModel):
    winner: str = Field(description="The name of the winner.")
    final_match_score: str = Field(description="The final match score.")
    scorers: List[str] = Field(description="The name of the scorer.")

client = genai.Client()

response = client.models.generate_content(
    model="gemini-3.1-pro-preview",
    contents="Search for all details for the latest Euro.",
    config={
        "tools": [{"google_search": {}}, {"url_context": {}}],
        "response_format": {"text": {"mime_type": "application/json", "schema": MatchResult.model_json_schema()}},
    },
)

result = MatchResult.model_validate_json(response.text)
print(result)
```

## Image generation

Gemini 3.1 Flash Image and Gemini 3 Pro Image generate and edit images from text prompts. Uses reasoning to "think" through a prompt and can retrieve real-time data via [Google Search](/gemini-api/docs/google-search) grounding before generating high-fidelity images.

**New & improved:**
- **4K & text rendering** — sharp legible text and diagrams, up to 2K and 4K
- **Grounded generation** — verify facts via Google Search grounding. Image search grounding available for 3.1 Flash Image.
- **Conversational editing** — multi-turn edits via Thought Signatures.

```python
response = client.models.generate_content(
    model="gemini-3-pro-image-preview",
    contents="Generate an infographic of the current weather in Tokyo.",
    config=types.GenerateContentConfig(
        tools=[{"google_search": {}}],
        response_format={"image": {"aspect_ratio": "16:9", "image_size": "4K"}}
    )
)
```

## Code Execution with images

Gemini 3 Flash can use code execution as active investigation: formulate a plan, write and execute Python to zoom in, crop, annotate, or otherwise manipulate images step-by-step.

**Use cases:** zoom and inspect tiny details; visual math/plotting; image annotation.

To enable: configure [Code Execution](/gemini-api/docs/code-execution) as a tool. Model will automatically use code to manipulate images when needed.

## Multimodal function responses

[Multimodal function calling](/gemini-api/docs/function-calling#multimodal) allows function responses containing multimodal objects. Standard function calling only supports text responses. Multimodal supports passing image data back via `FunctionResponsePart.inline_data`.

## Combine built-in tools and function calling

Gemini 3 allows built-in tools (Google Search, URL context, Maps grounding, etc.) AND custom function calling in the same API call. Learn more on the [tool combinations](/gemini-api/docs/tool-combination) page.

## Migrating from Gemini 2.5

- **Thinking:** Replace complex chain-of-thought prompts with Gemini 3 + `thinking_level: "high"` and simplified prompts.
- **Temperature settings:** Remove explicit temperature setting; use Gemini 3 default of 1.0.
- **PDF & document understanding:** Test `media_resolution_high` for accuracy on dense docs.
- **Token consumption:** Defaults may INCREASE tokens for PDFs but DECREASE for video.
- **Image segmentation:** NOT supported in Gemini 3 Pro/Flash. Use Gemini 2.5 Flash (thinking off) or Gemini Robotics-ER 1.6.
- **Computer Use:** Gemini 3 Pro and Flash support [Computer Use](/gemini-api/docs/computer-use) — no separate model needed.
- **Tool support:** Combining built-in tools with function calling is NEW for Gemini 3. [Maps grounding](/gemini-api/docs/maps-grounding) is also new.

## OpenAI compatibility

For users on the [OpenAI compatibility layer](/gemini-api/docs/openai), standard parameters (OpenAI's `reasoning_effort`) are automatically mapped to Gemini (`thinking_level`) equivalents.

## Prompting best practices

- **Precise instructions** — Be concise. Gemini 3 may over-analyze verbose prompts from older models.
- **Output verbosity** — Default is less verbose. Explicitly steer for chatty/conversational tone.
- **Context management** — Place instructions/questions at the END of the prompt (after data context). Anchor with phrases like "Based on the information above..."

## FAQ

1. **Knowledge cutoff:** January 2025. Use Search Grounding for recent info.
2. **Context window limits:** 1M input, 64k output.
3. **Free tier:** Gemini 3 Flash (`gemini-3-flash-preview`) and 3.1 Flash-Lite (`gemini-3.1-flash-lite`) have free tiers. Gemini 3.1 Pro Preview has no free tier in the API (but is free in AI Studio).
4. **Old `thinking_budget` code:** Still supported for backward compat, but migrate to `thinking_level`. Do NOT use both in same request.
5. **Batch API:** Supported.
6. **Context Caching:** Supported.
7. **Tools supported:** Google Search, Maps grounding, File Search, Code Execution, URL Context, custom Function Calling, and tool combinations.
8. **`gemini-3.1-pro-preview-customtools`:** Alternative model ID if `gemini-3.1-pro-preview` ignores custom tools in favor of bash commands.

Last updated 2026-05-07 UTC.
