---
source_url: https://ai.google.dev/gemini-api/docs/thinking
fetched_at: 2026-05-17
source_authority: official_doc
provider: google
purpose: thinking
fetch_quality: faithful
---

# Gemini thinking

The Gemini 3 and 2.5 series models use an internal "thinking process" that significantly improves their reasoning and multi-step planning abilities, making them highly effective for complex tasks such as coding, advanced mathematics, and data analysis.

## Generating content with thinking

```python
from google import genai

client = genai.Client()
prompt = "Explain the concept of Occam's Razor and provide a simple, everyday example."
response = client.models.generate_content(
    model="gemini-3-flash-preview",
    contents=prompt
)
print(response.text)
```

## Thought summaries

Thought summaries are summarized versions of the model's raw thoughts. Enable with `includeThoughts: true` in request config. Access via iterating `response.candidates[0].content.parts` checking the `thought` boolean.

```python
response = client.models.generate_content(
  model="gemini-3-flash-preview",
  contents="What is the sum of the first 50 prime numbers?",
  config=types.GenerateContentConfig(
    thinking_config=types.ThinkingConfig(include_thoughts=True)
  )
)

for part in response.candidates[0].content.parts:
  if not part.text:
    continue
  if part.thought:
    print("Thought summary:", part.text)
  else:
    print("Answer:", part.text)
```

### Streaming with thoughts

```python
for chunk in client.models.generate_content_stream(
    model="gemini-3-flash-preview",
    contents=prompt,
    config=types.GenerateContentConfig(
      thinking_config=types.ThinkingConfig(include_thoughts=True)
    )
):
  for part in chunk.candidates[0].content.parts:
    if not part.text:
      continue
    elif part.thought:
      print("Thoughts:", part.text)
    else:
      print("Answer:", part.text)
```

## Controlling thinking

Gemini models engage in dynamic thinking by default. Two parameters control thinking behavior:

### Thinking levels (Gemini 3)

`thinkingLevel` parameter — recommended for Gemini 3 onwards.

| Thinking Level | Gemini 3.1 Pro | Gemini 3.1 Flash-Lite | Gemini 3 Flash | Description |
|---|---|---|---|---|
| **`minimal`** | Not supported | Supported (Default) | Supported | Matches "no thinking." May still think minimally on complex coding. |
| **`low`** | Supported | Supported | Supported | Best for simple instruction following, chat, high throughput. |
| **`medium`** | Supported | Supported | Supported | Balanced for most tasks. |
| **`high`** | Supported (Default, Dynamic) | Supported (Dynamic) | Supported (Default, Dynamic) | Maximum reasoning depth; longer time to first output token. |

You cannot disable thinking for Gemini 3.1 Pro. Gemini 3 Flash and Flash-Lite also don't support full thinking-off; `minimal` likely won't think but doesn't guarantee.

Gemini 2.5 series models don't support `thinkingLevel`; use `thinkingBudget` instead.

### Thinking budgets (Gemini 2.5)

`thinkingBudget` — token-count guide for reasoning. Use `thinkingLevel` for Gemini 3.

| Model | Default | Range | Disable thinking | Dynamic thinking |
|---|---|---|---|---|
| **2.5 Pro** | Dynamic | `128`–`32768` | N/A: cannot disable | `thinkingBudget = -1` (Default) |
| **2.5 Flash** | Dynamic | `0`–`24576` | `thinkingBudget = 0` | `thinkingBudget = -1` (Default) |
| **2.5 Flash Preview** | Dynamic | `0`–`24576` | `thinkingBudget = 0` | `thinkingBudget = -1` (Default) |
| **2.5 Flash Lite** | Off | `512`–`24576` | `thinkingBudget = 0` | `thinkingBudget = -1` |
| **2.5 Flash Lite Preview** | Off | `512`–`24576` | `thinkingBudget = 0` | `thinkingBudget = -1` |
| **Robotics-ER 1.6 Preview** | Dynamic | `0`–`24576` | `thinkingBudget = 0` | `thinkingBudget = -1` (Default) |
| **2.5 Flash Live Native Audio Preview (09-2025)** | Dynamic | `0`–`24576` | `thinkingBudget = 0` | `thinkingBudget = -1` (Default) |

## Thought signatures

The Gemini API is stateless. In multi-turn interactions, Gemini returns thought signatures — encrypted representations of the model's internal thought process — to maintain reasoning context.

- **Gemini 2.5 models** return signatures when thinking is enabled AND request includes function calling.
- **Gemini 3 models** may return signatures for ALL part types. ALWAYS pass them back as received. REQUIRED for function-calling signatures.

The [Google GenAI SDK](/gemini-api/docs/libraries) automatically handles thought signatures. Only need manual handling if modifying history or using REST API.

Constraints:
- Return ENTIRE response (all parts) back to the model in subsequent turns.
- Don't concatenate parts with signatures.
- Don't merge a part with a signature with a part without one.

## Pricing

When thinking is on, response pricing = output tokens + thinking tokens. Total thinking tokens visible in `thoughtsTokenCount` field.

```python
print("Thoughts tokens:", response.usage_metadata.thoughts_token_count)
print("Output tokens:", response.usage_metadata.candidates_token_count)
```

Thinking models generate full thoughts to improve final response quality, then output [summaries](#thought-summaries). Pricing is based on FULL thought tokens despite only summaries being output.

## Best practices

**Debugging and steering:**
- **Review reasoning** — analyze thought summaries to understand failures and improve prompts.
- **Guide thinking** — for lengthy outputs, prompt the model to think less.

**Task complexity:**
- **Easy tasks (Thinking OFF):** fact retrieval, classification ("Where was DeepMind founded?", "Is this email a meeting request?")
- **Medium tasks (Default):** comparison, creative reasoning ("Analogize photosynthesis and growing up")
- **Hard tasks (Max thinking):** AIME math, complex coding ("Solve AIME 2025 problem 1", "Write efficient Python web app with auth")

## Supported models

Thinking is supported on all 3 and 2.5 series models. Works with all Gemini tools and capabilities.
