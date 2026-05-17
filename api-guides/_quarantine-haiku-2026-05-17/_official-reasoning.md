---
source_url: https://platform.openai.com/docs/guides/reasoning
fetched_at: 2026-05-17
source_authority: official_doc
provider: openai
purpose: comprehensive documentation on reasoning models, effort levels, reasoning tokens, and best practices
---

# Reasoning Models

## Overview

Reasoning models (o3, o4-mini) use extended thinking to work through complex problems before responding.

## Available Models

### o3 (Full Reasoning)
- **Full reasoning capability** for maximum accuracy
- **Context window**: 128,000 tokens
- **Best for**: Complex analysis, research, proof-based problems

### o4-mini (Lightweight Reasoning)
- **Efficient reasoning** for smaller problems
- **Faster inference** than o3
- **Best for**: Moderate complexity, real-time applications

## Effort Levels

The `thinking_budget` parameter controls reasoning depth:

| Level | Budget Range | Use Case | Cost |
|---|---|---|---|
| `none` | 0 | No reasoning; standard response | Lowest |
| `low` | 1,000 | Simple problems, quick answers | Low |
| `medium` | 5,000 | Moderate complexity | Medium |
| `high` | 15,000 | Complex analysis, detailed work | High |
| `xhigh` | 30,000+ | Maximum reasoning for hardest problems | Highest |

## Reasoning Tokens

- **Hidden by default**: User doesn't see reasoning process
- **Counted in usage**: Reasoning tokens counted as input tokens
- **Optional exposure**: Use `thinking.type` to request reasoning summary
- **Cost implication**: Higher thinking budget = more tokens, higher cost

## API Usage

```python
response = client.messages.create(
    model="o3",
    max_tokens=4096,
    thinking={
        "type": "enabled",
        "budget_tokens": 10000
    },
    messages=[
        {
            "role": "user",
            "content": "Solve this complex problem..."
        }
    ]
)
```

## Handling Incomplete Responses

If reasoning timeout occurs:
1. **Partial thinking**: Model may return incomplete reasoning
2. **Fallback behavior**: Provides best-effort response
3. **Retry strategy**: Lower thinking budget or simpler problem

## Reasoning Summaries

Request summary of reasoning process:

```python
"thinking": {
    "type": "enabled",
    "budget_tokens": 5000,
    "include_summary": True
}
```

## Phase Parameter for Tool Workflows

Orchestrate tool calls during reasoning:

```python
"thinking": {
    "phase": "planning"  # reasoning about which tools to call
}
```

Phases:
- **planning**: Reason about approach before tool calls
- **execution**: Use tools as part of reasoning
- **verification**: Verify tool results before final answer

## Best Practices

1. **Match effort to problem**: Don't over-allocate reasoning budget
2. **Use thinking summaries**: Understand model's approach without full reasoning
3. **Combine with tools**: Let reasoning guide tool selection
4. **Monitor costs**: Higher budgets mean higher token usage
5. **Test effort levels**: Benchmark performance across different budgets
