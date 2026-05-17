---
source_url: https://developers.openai.com/api/docs/guides/structured-outputs
fetched_at: 2026-05-17
source_authority: official_doc
provider: openai
purpose: structured-outputs
fetch_quality: faithful
---

# Structured Model Outputs | OpenAI API

## Overview

Structured Outputs is a feature ensuring model responses adhere to a supplied JSON Schema, eliminating formatting validation concerns. The system guarantees valid JSON that conforms to your specified structure.

### Key Benefits

1. **Reliable type-safety:** No need to validate or retry incorrectly formatted responses
2. **Explicit refusals:** Safety-based model refusals are now programmatically detectable
3. **Simpler prompting:** Reduces need for strongly worded prompts to achieve consistent formatting

## Supported Models

Structured Outputs is available in GPT-4o and later models. Older models like `gpt-4-turbo` may use JSON mode instead.

## Function Calling vs Response Format

**When to use function calling:**
- Connecting models to tools, functions, and data in your system
- Building AI assistants that execute actions

**When to use response_format:**
- Structuring model output when responding to users
- Generating UIs with distinct component rendering

## Structured Outputs vs JSON Mode

| Feature | Structured Outputs | JSON Mode |
|---------|-------------------|-----------|
| Outputs valid JSON | Yes | Yes |
| Adheres to schema | Yes | No |
| Compatible models | `gpt-4o-mini`, `gpt-4o-2024-08-06`, and later | `gpt-3.5-turbo`, `gpt-4-*`, `gpt-4o-*` |
| Enabling | `response_format: { type: "json_schema", json_schema: {...}, "strict": true }` | `response_format: { type: "json_object" }` |

## Examples

### Chain of Thought

```python
from pydantic import BaseModel
from openai import OpenAI

client = OpenAI()

class Step(BaseModel):
    explanation: str
    output: str

class MathReasoning(BaseModel):
    steps: list[Step]
    final_answer: str

completion = client.chat.completions.parse(
    model="gpt-4o-2024-08-06",
    messages=[
        {"role": "system", "content": "Guide the user through the solution step by step."},
        {"role": "user", "content": "how can I solve 8x + 7 = -23"}
    ],
    response_format=MathReasoning,
)

math_reasoning = completion.choices[0].message.parsed
```

### Structured Data Extraction

```python
class ResearchPaperExtraction(BaseModel):
    title: str
    authors: list[str]
    abstract: str
    keywords: list[str]

completion = client.chat.completions.parse(
    model="gpt-4o-2024-08-06",
    messages=[
        {"role": "system", "content": "Extract structured data from research papers."},
        {"role": "user", "content": "..."}
    ],
    response_format=ResearchPaperExtraction,
)
```

### UI Generation (Recursive)

```python
from enum import Enum
from typing import List
from pydantic import BaseModel

class UIType(str, Enum):
    div = "div"
    button = "button"
    header = "header"
    section = "section"
    field = "field"
    form = "form"

class Attribute(BaseModel):
    name: str
    value: str

class UI(BaseModel):
    type: UIType
    label: str
    children: List["UI"]
    attributes: List[Attribute]

UI.model_rebuild()
```

### Moderation

```python
from enum import Enum
from typing import Optional
from pydantic import BaseModel

class Category(str, Enum):
    violence = "violence"
    sexual = "sexual"
    self_harm = "self_harm"

class ContentCompliance(BaseModel):
    is_violating: bool
    category: Optional[Category]
    explanation_if_violating: Optional[str]
```

## API Usage Pattern

### Define Object
Using Pydantic or Zod, create a data structure representing the desired JSON Schema.

### Supply in API Call
```python
completion = client.chat.completions.parse(
    model="gpt-4o-2024-08-06",
    messages=[...],
    response_format=MathResponse
)
```

### Handle Edge Cases
The model might not generate valid responses in cases of:
- Safety-based refusals
- Incomplete responses due to token limits
- Content filter triggers

### Manual JSON Schema Form

```python
response = client.chat.completions.create(
    model="gpt-4o-2024-08-06",
    messages=[...],
    response_format={
        "type": "json_schema",
        "json_schema": {
            "name": "math_response",
            "strict": True,
            "schema": {
                "type": "object",
                "properties": {
                    "steps": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "explanation": {"type": "string"},
                                "output": {"type": "string"},
                            },
                            "required": ["explanation", "output"],
                            "additionalProperties": False,
                        },
                    },
                    "final_answer": {"type": "string"},
                },
                "required": ["steps", "final_answer"],
                "additionalProperties": False,
            },
        },
    },
)
```

## Supported Schemas

Structured Outputs supports most JSON Schema features:
- Object types with required/optional properties
- Arrays with items constraints
- Nested objects and recursive structures
- Enums and constrained strings
- Nullable fields

## Note on Performance

For fine-tuned models, the first request with any schema has additional latency as the API processes it. Subsequent requests with the same schema have no additional latency. Other models don't have this limitation.
