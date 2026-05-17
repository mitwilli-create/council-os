---
source_url: https://platform.openai.com/docs/guides/structured-outputs
fetched_at: 2026-05-17
source_authority: official_doc
provider: openai
purpose: comprehensive guide to structured outputs, JSON schema adherence, and integration patterns
---

# Structured Outputs

## Overview

Structured outputs ensure model responses conform to specified JSON schemas, eliminating parsing and validation overhead.

## Feature Benefits

- **Guaranteed JSON validity**: Response always parses as valid JSON
- **Schema adherence**: All fields match specified types and constraints
- **No post-processing**: Skip regex parsing and validation
- **Type safety**: SDK can generate typed objects automatically

## Comparison with JSON Mode

| Aspect | JSON Mode | Structured Outputs |
|---|---|---|
| Valid JSON | Guaranteed | Guaranteed |
| Schema match | No guarantee | Guaranteed |
| Type safety | No | Yes |
| SDK support | Basic | Full (Pydantic/Zod) |
| Performance | Standard | Optimized |

## SDK Object Methods

### Pydantic (Python)

```python
from pydantic import BaseModel

class ExtractedData(BaseModel):
    title: str
    entities: list[str]
    sentiment: str

response = client.messages.create(
    model="gpt-5-5",
    max_tokens=1024,
    response_format=ExtractedData,
    messages=[...]
)

parsed = response.parsed  # Type: ExtractedData
```

### Zod (TypeScript)

```typescript
import { z } from 'zod'

const DataSchema = z.object({
  title: z.string(),
  entities: z.array(z.string()),
  sentiment: z.enum(['positive', 'negative', 'neutral'])
})

const response = await client.beta.messages.create({
  model: "gpt-5-5",
  max_tokens: 1024,
  response_format: DataSchema,
  messages: [...]
})

const parsed = response.parsed  // Type-safe object
```

## Manual Schema Specification

For manual schema definition (not recommended):

```python
{
  "type": "json_schema",
  "json_schema": {
    "name": "DataExtraction",
    "schema": {
      "type": "object",
      "properties": {
        "title": {"type": "string"},
        "entities": {
          "type": "array",
          "items": {"type": "string"}
        }
      },
      "required": ["title", "entities"]
    }
  }
}
```

## Use Cases

### Chain of Thought Output

```python
class ThinkingResponse(BaseModel):
    reasoning: str  # Model's thought process
    answer: str     # Final answer

response = client.messages.create(
    model="gpt-5-5",
    response_format=ThinkingResponse,
    messages=[...]
)
```

### Data Extraction

```python
class DocumentData(BaseModel):
    entities: list[str]
    relationships: dict[str, str]
    summary: str

# Extract structured data from unstructured text
```

### UI Generation

```python
class UIComponent(BaseModel):
    component_type: str
    props: dict[str, str]
    children: list['UIComponent']

# Generate UI structure automatically
```

### Moderation Classification

```python
class ModerationResult(BaseModel):
    is_safe: bool
    categories: list[str]
    confidence: float

# Guaranteed valid moderation response
```

## Validation and Error Handling

If response fails schema validation:
- **API rejects response**: Returns validation error
- **Model retries**: Attempts compliant response
- **Client side**: SDKs handle retry logic automatically

## Performance Implications

- **Deterministic output**: No parsing variance
- **Smaller responses**: No extraneous explanation
- **Faster validation**: Schema validation by API
- **Cost reduction**: Cleaner output, fewer tokens

## Best Practices

1. **Use SDK defaults**: Leverage Pydantic/Zod when possible
2. **Clear field descriptions**: Help model understand schema
3. **Optional fields**: Use when values may not always exist
4. **Nested objects**: Model supports arbitrary nesting depth
5. **Enum constraints**: Use for restricted choice fields
