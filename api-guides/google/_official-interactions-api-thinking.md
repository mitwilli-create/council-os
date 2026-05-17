---
source_url: https://ai.google.dev/gemini-api/docs/interactions/thinking
fetched_at: 2026-05-17
source_authority: official_doc
provider: google
purpose: interactions-api-thinking
fetch_quality: faithful
---

# Gemini Thinking (Interactions API)

The Gemini 3 and 2.5 series models employ a "thinking process" that enhances reasoning and multi-step planning. When using thinking models, Gemini reasons internally before responding, with the Interactions API surfacing this reasoning through `thought` steps that appear chronologically in the `steps` array.

## Thought Step Structure

| Field | Required | Description |
|-------|----------|-------------|
| `signature` | ✅ Yes | Encrypted representation of internal reasoning state. Always present. |
| `summary` | ❌ No | Array of content (text and/or images) summarizing reasoning. May be empty. |

**Key API Difference:** In the Interactions API, thoughts are dedicated `thought` steps. The `generateContent` API has no dedicated thought blocks.

## Initiating Interactions with Thinking

### Python

```python
from google import genai

client = genai.Client()

interaction = client.interactions.create(
    model="gemini-3-flash-preview",
    input="Explain the concept of Occam's Razor and provide a simple, everyday example."
)
print(interaction.steps[-1].content[0].text)
```

### REST

```bash
curl -X POST "https://generativelanguage.googleapis.com/v1beta/interactions" \
  -H "x-goog-api-key: $GEMINI_API_KEY" \
  -H "Api-Revision: 2026-05-20" \
  -H 'Content-Type: application/json' \
  -d '{
    "model": "gemini-3-flash-preview",
    "input": "Explain the concept of Occams Razor and provide a simple example."
  }'
```

## Thought Summaries

Enable thought summaries with `thinking_summaries`:

```python
interaction = client.interactions.create(
    model="gemini-3-flash-preview",
    input="What is the sum of the first 50 prime numbers?",
    generation_config={
        "thinking_summaries": "auto"
    }
)

for step in interaction.steps:
    if step.type == "thought":
        print("Thought summary:")
        if step.summary:
            for content_block in step.summary:
                if content_block.type == "text":
                    print(content_block.text)
    elif step.type == "model_output":
        for content_block in step.content:
            if content_block.type == "text":
                print("Answer:", content_block.text)
```

### When Summaries May Be Empty

A thought block may contain ONLY a signature (no summary) when:
- Simple requests — model didn't reason enough
- `thinking_summaries: "none"` explicitly disables
- Certain thought content types (e.g., images) lack text summaries

Always handle empty/absent `summary`.

## Controlling Thinking

`thinking_level` parameter — same as generateContent API:

| Model | Default Thinking | Levels Supported |
|-------|------------------|------------------|
| gemini-3.1-pro-preview | On (high) | low, medium, high |
| gemini-3-flash-preview | On (high) | minimal, low, medium, high |
| gemini-3-pro-preview | On (high) | low, high |
| gemini-2.5-pro | On | low, medium, high |
| gemini-2.5-flash | On | low, medium, high |
| gemini-2.5-flash-lite | Off | low, medium, high |

```python
interaction = client.interactions.create(
    model="gemini-3-flash-preview",
    input="Provide a list of 3 famous physicists and their key contributions",
    generation_config={
        "thinking_level": "low"
    }
)
```

## Thought Signatures

### Stateful Mode (Recommended)

Default. Set `store: true` and pass `previous_interaction_id` in subsequent turns. Server automatically manages conversation state, including all thought blocks and signatures. No manual signature handling needed.

### Stateless Mode

If managing conversation state yourself:
- MUST always resend all `thought` blocks exactly as received.
- Don't remove or modify thought blocks from history.
- Switching models mid-session: resend the previous model's thought blocks. Backend manages compatibility.

**Note:** Built-in tools (Google Search, etc.) carry their own distinct signatures on call/result blocks. In stateless mode, must also resend these tool result signatures.

## Pricing

Response pricing = output tokens + thinking tokens. Total visible in `total_thought_tokens`:

```python
print("Thoughts tokens:", interaction.usage.total_thought_tokens)
print("Output tokens:", interaction.usage.total_output_tokens)
```

Pricing is based on FULL thought tokens, despite only summaries being output.

## Best Practices

- **Review reasoning** — analyze summaries to understand failures.
- **Control thinking budget** — for lengthy outputs, prompt to think less.
- **Simple tasks** — minimal thinking for fact retrieval / classification.
- **Moderate tasks** — default thinking for comparison/creative reasoning.
- **Complex tasks** — max thinking for advanced coding, math, multi-step planning.
