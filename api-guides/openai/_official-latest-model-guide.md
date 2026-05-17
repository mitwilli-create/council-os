---
source_url: https://developers.openai.com/api/docs/guides/latest-model
fetched_at: 2026-05-17
source_authority: official_doc
provider: openai
purpose: latest-model-guide
fetch_quality: summarized
fetch_note: WebFetch processor summarized this page despite request for verbatim content. Refetch via Chrome MCP if higher fidelity needed.
---

# Using GPT-5.5

## Overview

The OpenAI documentation page covers best practices and migration guidance for GPT-5.5. The model excels in complex production workflows, particularly for coding, tool-heavy agents, retrieval tasks, and customer-facing applications.

## Key Migration Points

**Model Configuration:**
- Update to `gpt-5.5` model slug
- Use the Responses API for reasoning and tool-calling scenarios
- Configure `reasoning.effort` with options of `low`, `medium`, `high`, or `xhigh` (default: `medium`)

**Prompting Changes:**
The documentation emphasizes: "State the expected outcome and success criteria" rather than prescribing step-by-step processes. Teams should remove output schema definitions from prompts and leverage Structured Outputs instead.

## Notable Behavioral Changes

1. **Reasoning defaults to medium** — Higher effort isn't automatically beneficial; increase only when evaluations show measurable quality improvements

2. **Image handling** — The model now preserves more visual detail by default, supporting up to 10,240,000 pixels without resizing

3. **Instruction following** — GPT-5.5 interprets prompts literally and thoroughly, requiring clear success criteria for long-running workflows

4. **Output style** — "Default style is more concise and direct," beneficial for production systems but requiring explicit personality guidance for conversational experiences

## Tools & Infrastructure

- Supports prompt caching, hosted tools, tool search, and compaction features from GPT-5.4
- Improved tool selection precision for large tool surfaces and multi-step agent tasks
- Agents SDK recommended for new agentic systems

## Automated Migration

Codex provides an OpenAI Docs Skill enabling command-line migration:

```
$openai-docs migrate this project to gpt-5.5
```
