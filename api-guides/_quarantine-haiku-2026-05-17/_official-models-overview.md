---
source_url: https://platform.openai.com/docs/models
fetched_at: 2026-05-17
source_authority: official_doc
provider: openai
purpose: current model lineup including reasoning models, vision models, coding models, and pricing
---

# OpenAI Models

## Frontier Reasoning Models

### GPT-5.5 (Latest)
- **Advanced reasoning** with outcome-focused prompting
- **Context window**: 128,000 tokens
- **Input price**: $0.40/M tokens
- **Output price**: $1.60/M tokens
- **Capabilities**: Efficient reasoning, multi-step problem solving, enhanced tool use

### GPT-5.4
- **Strong reasoning** with extensive task coverage
- **Context window**: 128,000 tokens
- **Input price**: $0.20/M tokens
- **Output price**: $0.80/M tokens
- **Capabilities**: General reasoning, code generation, analysis

### GPT-5
- **Balanced performance** across tasks
- **Context window**: 128,000 tokens
- **Input price**: $0.15/M tokens
- **Output price**: $0.60/M tokens

### GPT-5.3-Codex
- **Specialized for code** generation and analysis
- Optimized for programming tasks

## Vision Models

### GPT Image 2
- **Advanced image generation** and understanding
- Supports vision input from messages API
- State-of-the-art image capabilities

## Real-Time Models

- **Audio streaming** support
- **Low latency** for conversation
- API: `/v1/realtime`

## Reasoning Models

### o4-mini
- **Lightweight reasoning** for smaller tasks
- **Faster inference** than full reasoning models

### o3
- **Full reasoning capability**
- **Effort levels**: none, low, medium, high, xhigh
- **Hidden reasoning**: Reasoning tokens not visible to user by default

## Open-Weight Models

- **Available via API**: Using standard `/v1/chat/completions`
- **Community models**: Mistral, Llama, etc.

## Model Selection Matrix

| Use Case | Recommended Model | Rationale |
|---|---|---|
| General tasks, high volume | GPT-5.5 | Latest, efficient |
| Code generation | GPT-5.3-Codex | Specialized for programming |
| Simple queries | GPT-5 | Cost-effective |
| Image tasks | GPT Image 2 | State-of-the-art vision |
| Real-time audio | Realtime Models | Low latency streaming |
