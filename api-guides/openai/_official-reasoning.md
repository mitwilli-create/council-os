---
source_url: https://developers.openai.com/api/docs/guides/reasoning
fetched_at: 2026-05-17
source_authority: official_doc
provider: openai
purpose: reasoning-models
fetch_quality: summarized
fetch_note: WebFetch processor summarized this page despite request for verbatim content.
---

# Reasoning Models

## Overview

OpenAI's reasoning models like GPT-5.5 use internal reasoning tokens before generating responses, enabling them to plan, use tools effectively, and solve complex multi-step tasks. These models excel at coding, scientific reasoning, and agentic workflows.

## Key Concepts

**Reasoning Tokens**: Models use these to "think" before responding. They occupy context window space and are billed as output tokens, though they remain invisible to users.

**Reasoning Effort Levels**:
- `none`: Latency-critical tasks without reasoning needs
- `low`: Efficient reasoning with modest latency increase
- `medium`: Default for GPT-5.5; balances quality and performance
- `high`: Complex debugging and deep planning
- `xhigh`: Deep research and asynchronous workflows

## Important Considerations

**Context Management**: Reserve at least 25,000 tokens for reasoning and outputs when experimenting. The exact reasoning token count appears in the response's `output_tokens_details`.

**Cost Control**: Use the `max_output_tokens` parameter to limit total generated tokens (reasoning plus output).

**Incomplete Responses**: If responses hit context limits with status `incomplete`, you may incur costs without receiving visible output.

## API Integration

The Responses API is recommended over Chat Completions for improved intelligence. When using function calling, pass back reasoning items from previous responses to maintain continuity.

## Best Practices

- Provide clear goals and constraints rather than prescribing steps
- Treat `reasoning.effort` as a tuning parameter
- Define completion criteria for agentic workflows
- For stateless modes, include `reasoning.encrypted_content` in the `include` parameter

Refer to the reasoning best practices guide for detailed prompting advice.
