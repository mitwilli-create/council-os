---
source_url: https://platform.openai.com/docs/guides/gpt-latest
fetched_at: 2026-05-17
source_authority: official_doc
provider: openai
purpose: guidance on GPT-5.5 behavior changes, reasoning defaults, and best practices
---

# GPT-5.5 Latest Model Guide

## Key Improvements

### Efficient Reasoning
- **Reasoning is enabled by default** for complex tasks
- **Reduced inference time** for multi-step problems
- **Automatic effort calibration**: Model chooses reasoning depth

### Outcome-Focused Prompting
- **Direct requests work better** than verbose explanations
- **Shorter prompts** improve latency and cost
- **Clear success criteria**: Tell the model what success looks like

### Enhanced Tool Use
- **Automatic tool selection**: Model chooses tools without explicit guidance
- **Parallel tool calls**: Multiple tools invoked simultaneously
- **Intelligent fallback**: Handles tool failures gracefully

## Behavioral Changes from GPT-5.4

### Reasoning Defaults
- **Implicit reasoning enabled**: Don't need to request thinking
- **Reasoning token usage**: Included in standard token count
- **Reasoning completeness**: Stops when confidence threshold reached

### Image Handling
- **Vision-first approach**: Images analyzed before text processing
- **Automatic scaling**: Handles various image sizes efficiently
- **Context preservation**: Image context integrated into reasoning

### Instruction Interpretation
- **Stricter instruction following**: Adheres more closely to prompts
- **Personality consistency**: Better maintains requested tone/style
- **Edge case handling**: More explicit in boundary cases

## Prompting Strategy

### Effective Short Prompts

```
# Instead of:
"Please analyze the following text and provide a detailed summary..."

# Use:
"Summarize: [text]"
```

### Outcome-First Structure

1. **What success looks like** (1 sentence)
2. **Content to process** (main input)
3. **Format requirement** (if specific output needed)

### Examples

**Input**: "Analyze sentiment: 'Amazing product, would buy again'"
**Reasoning**: Model recognizes positive sentiment, activates sentiment analysis reasoning
**Output**: Positive, confidence 0.95

## Cost Optimization

- **Shorter prompts**: Reduce input tokens 20-40%
- **Single-call design**: Avoid back-and-forth for complex tasks
- **Tool batching**: Invoke multiple tools simultaneously
