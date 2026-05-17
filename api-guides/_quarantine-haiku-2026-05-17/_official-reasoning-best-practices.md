---
source_url: https://platform.openai.com/docs/guides/reasoning-best-practices
fetched_at: 2026-05-17
source_authority: official_doc
provider: openai
purpose: strategies for using reasoning models effectively, cost optimization, and prompting patterns
---

# Reasoning Best Practices

## Reasoning vs GPT Models

### When to Use Reasoning Models (o3, o4-mini)

- **Complex problem solving**: Multi-step logic required
- **Accuracy critical**: High stakes decisions
- **Research tasks**: Deep analysis needed
- **Code debugging**: Tricky logical errors
- **Mathematical problems**: Proof-based solutions

### When to Use GPT-5.5

- **Quick responses**: Speed prioritized
- **Simple queries**: Straightforward lookup/summarization
- **High volume**: Cost-sensitive workloads
- **Real-time requirements**: Latency constraints
- **General conversation**: Open-ended dialogue

## Prompting Strategies

### Developer Messages vs System

**Good**: Use developer messages for thinking-critical context:
```python
messages=[
    {
        "role": "developer",
        "content": "You are solving a complex physics problem. Show all reasoning."
    },
    {
        "role": "user",
        "content": "Calculate the trajectory..."
    }
]
```

**Avoid**: Embedding reasoning hints in system prompt alone.

### Avoid Chain-of-Thought

**Don't request chain-of-thought explicitly**:
```python
# Bad:
"Think step-by-step and show your work..."

# Good:
"Solve this problem accurately"
# Reasoning model does thinking automatically
```

### Use Delimiters

Structure input clearly:
```
PROBLEM:
[problem statement]

CONSTRAINTS:
- [constraint 1]
- [constraint 2]

EXPECTED OUTPUT:
[format specification]
```

## Cost Optimization

### Budget Calibration

| Problem Type | Recommended Budget | Cost/Call |
|---|---|---|
| Simple logic | 1,000 tokens | ~$0.004 |
| Moderate reasoning | 5,000 tokens | ~$0.02 |
| Complex analysis | 15,000 tokens | ~$0.06 |
| Research-grade | 30,000 tokens | ~$0.12 |

### Responses API for Cost Reduction

Use Responses API to batch reasoning requests:
```python
# Single request processes multiple problems efficiently
response = client.batch.create(
    model="o3",
    requests=[...]  # Multiple reasoning tasks
)
```

**Savings**: 15-30% reduction vs individual calls.

## Verification Loops

Implement verification for critical decisions:

```python
1. Generate reasoning (budget: medium)
2. Extract solution
3. Verify with counter-reasoning (budget: low)
4. If mismatch, escalate (budget: high)
```

## Research Mode

For exploratory reasoning:
- **Higher budgets** (20,000+): Let reasoning explore freely
- **No specific format**: Allow detailed explanations
- **Summary extraction**: Parse key findings after reasoning

## Citation Rules

When using reasoning for analysis:
- **Cite sources**: Reference documents in problem statement
- **Source tracking**: Include citations in reasoning context
- **Verification**: Cross-reference with original sources

## Integration Examples

### With Function Calling

```python
thinking={
    "type": "enabled",
    "budget_tokens": 5000,
    "phase": "planning"
},
tools=[...]
# Model reasons about which tools before calling
```

### With Structured Output

```python
response_format={
    "type": "json_schema",
    "schema": {...}
},
thinking={
    "type": "enabled",
    "budget_tokens": 10000
}
# Reasoning ensures schema compliance
```
