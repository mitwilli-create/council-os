---
source_url: https://developers.openai.com/api/docs/guides/reasoning-best-practices
fetched_at: 2026-05-17
source_authority: official_doc
provider: openai
purpose: reasoning-best-practices
fetch_quality: summarized
fetch_note: WebFetch processor summarized this page. Content references o3/o4-mini prominently — this page may not have been updated post-GPT-5 launch. Verify against current docs in Phase 3.
---

# Reasoning Best Practices

## Overview

OpenAI provides two model families: **reasoning models** (o3, o4-mini) designed for complex problem-solving, and **GPT models** (GPT-4.1) optimized for speed and efficiency. This guide explains when to use each and how to prompt reasoning models effectively.

> **Note:** This page references o3/o4-mini as the canonical reasoning models, but per OpenAI's models overview, the o-series has been succeeded by the GPT-5 family. The guidance below may apply to GPT-5 reasoning behavior by extension.

## Reasoning Models vs. GPT Models

**Reasoning models ("the planners"):**
- Excel at strategizing and complex problem-solving
- Handle ambiguous information effectively
- Ideal for domains requiring expert-level accuracy (math, science, engineering, finance, legal)

**GPT models ("the workhorses"):**
- Faster and more cost-efficient
- Better for straightforward, well-defined tasks
- Suited for execution rather than planning

### Selection Criteria

Choose reasoning models when:
- Accuracy and reliability matter most
- Facing complex, multistep problems
- Working with ambiguous information

Choose GPT models when:
- Speed and cost are priorities
- Tasks are well-defined
- Execution is more important than perfect accuracy

Most workflows combine both: "o-series for agentic planning and decision-making, GPT series for task execution."

## Seven Successful Use Cases

### 1. Navigating Ambiguous Tasks
Reasoning models excel at interpreting limited or disparate information, often asking clarifying questions rather than making assumptions.

### 2. Finding Needle in Haystack
These models pull relevant information from large unstructured datasets to answer specific questions accurately.

### 3. Relationships Across Complex Documents
Particularly strong with dense, multi-page materials like legal contracts and financial statements.

### 4. Multistep Agentic Planning
Reasoning models work as strategic "planners," breaking complex tasks into steps.

### 5. Visual Reasoning
o1 was the only reasoning model supporting vision capabilities, excelling at challenging visuals like ambiguous charts or poor-quality photos.

### 6. Code Review and Debugging
Effective at detecting subtle code changes across multiple files.

### 7. Evaluating Model Responses
Valuable for benchmarking and data validation, particularly in healthcare and sensitive fields.

## Effective Prompting Strategies

**Key principles:**
- Use developer messages instead of system messages (o1-2024-12-17+)
- Keep prompts simple and direct
- Avoid "think step by step" instructions
- Use markdown, XML tags, or section titles for clarity
- Try zero-shot first; add examples only if complexity demands
- Specify constraints explicitly
- Define precise success criteria
- Use `Formatting re-enabled` to enable markdown in responses

**Avoid:**
- Chain-of-thought prompting techniques
- Overly complex instructions

## Cost and Accuracy Optimization

For `o3` and `o4-mini` models:
- Use the Responses API with `store: true`
- Include reasoning items from previous requests
- Pass all reasoning items between the latest function call and previous user message
- This minimizes reasoning token usage while maintaining performance

Chat Completions API doesn't preserve reasoning items, potentially increasing token usage in complex agentic scenarios.
