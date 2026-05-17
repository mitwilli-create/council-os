---
source_url: https://ai.google.dev/gemini-api/docs/prompting-strategies
fetched_at: 2026-05-17
source_authority: official_doc
provider: google
purpose: prompt-design
fetch_quality: summarized
fetch_note: WebFetch processor returned compressed structure with full headings preserved.
---

# Prompt Design Strategies (Gemini API)

## Overview

Prompt design is the process of creating natural language requests that elicit accurate, high-quality responses from language models. "Prompt engineering is iterative" — experiment with these guidelines as starting points.

## Core Strategies

### Clear and Specific Instructions

Four input types:

- **Question input** — direct questions the model answers
- **Task input** — specific tasks for the model to perform
- **Entity input** — items for the model to operate on
- **Completion input** — partial content for the model to complete

### Constraints and Response Format

You can specify constraints on prompt reading and response generation. Tell models what to do AND what not to do. Explicitly define desired response formats (tables, lists, paragraphs).

### Zero-Shot vs Few-Shot Prompts

Few-shot prompts include examples showing correct patterns. Zero-shot prompts provide no examples. Documentation states: **"We recommend to always include few-shot examples in your prompts."**

Consistent formatting across examples is essential — maintain uniform structure, XML tags, whitespace, and newlines.

### Adding Context

Include necessary information in prompts rather than assuming the model possesses background knowledge.

### Breaking Down Complex Prompts

For intricate use cases:
- Create separate prompts per instruction
- Chain prompts sequentially (output of one → input of next)
- Aggregate results from parallel operations on different data portions

## Parameter Experimentation

- **Max output tokens** — maximum response length
- **Temperature** — controls randomness (0 = deterministic; higher = more creative)
- **topK** — selects from top K most probable tokens
- **topP** — selects tokens until probability sum reaches topP value
- **stop_sequences** — defines where generation stops

**"When using Gemini 3 models, we strongly recommend keeping the temperature at its default value of 1.0."**

## Iteration Strategies

When refining prompts:
- Experiment with different phrasings
- Try analogous task formulations
- Adjust content ordering within prompts

## Gemini 3 Best Practices

- State goals clearly and concisely
- Use consistent structural delimiters (XML tags or Markdown)
- Explicitly define ambiguous terms
- Control output verbosity through explicit requests
- Place critical instructions at the beginning or in system instructions
- Supply large context blocks BEFORE specific questions

### Example Template

```
<role>
You are Gemini 3, a specialized assistant for [domain].
</role>

<instructions>
1. Plan
2. Execute
3. Validate
4. Format
</instructions>

<constraints>
- Verbosity: [level]
- Tone: [style]
</constraints>

<output_format>
[Specify structure]
</output_format>
```

## Agentic Workflows

Steer behavior across three dimensions:

**Reasoning and Strategy** — Logical decomposition depth, problem diagnosis, information exhaustiveness.

**Execution and Reliability** — Adaptability to new data, persistence in error recovery, risk assessment logic.

**Interaction and Output** — Ambiguity handling, verbosity levels, precision requirements.

## Tools and Grounding (Anti-Hallucination)

- **Google Search grounding** — connects models to real-time web content for obscure or recent facts
- **Code execution** — enables Python code generation for arithmetic, counting, or calculations
