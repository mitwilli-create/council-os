---
source_url: https://docs.anthropic.com/claude/reference/tool-use-guide
fetched_at: 2026-05-17
source_authority: official_doc
provider: anthropic
purpose: comprehensive guide to tool use, function calling, and caching of tool definitions
---

# Tool Use Guide

## Overview

Tool use enables Claude to call external functions and integrate with APIs, databases, and services.

## Defining Tools

Tools are defined with name, description, and input schema:

```python
tools = [
    {
        "name": "get_weather",
        "description": "Get the current weather in a location",
        "input_schema": {
            "type": "object",
            "properties": {
                "location": {
                    "type": "string",
                    "description": "City name"
                },
                "unit": {
                    "type": "string",
                    "enum": ["celsius", "fahrenheit"]
                }
            },
            "required": ["location"]
        }
    }
]
```

## Tool Use Pattern

1. **Include tools in API request**
2. **Claude may invoke tools** in response (tool_use content blocks)
3. **Process tool calls** with actual implementations
4. **Send tool results** back to Claude
5. **Continue conversation** with Claude's final response

## Tool Caching for Efficiency

Cache tool definitions using `cache_control` to reduce redundant transmission:

```python
response = client.messages.create(
    model="claude-opus-4-7-20250505",
    max_tokens=1024,
    system=[
        {
            "type": "text",
            "text": "You are a helpful assistant with access to tools."
        }
    ],
    tools=tools,
    tool_choice="auto",
    messages=[...]
)
```

**With caching**, the same tools array is cached across requests, reducing input tokens and latency.

## Tool Interaction Examples

| Scenario | Tool Response | Claude Behavior |
|---|---|---|
| Success | `{"status": "ok", "data": "..."}` | Uses result in response |
| Error | `{"error": "Invalid location"}` | Handles gracefully, may retry |
| Not found | `{"status": "not_found"}` | Informs user or tries alternate |

## Best Practices

1. **Clear descriptions**: Help Claude understand when to use each tool
2. **Specific schemas**: Tightly constrain input validation
3. **Error handling**: Return meaningful error messages
4. **Batch operations**: Use parallel tool calls when possible
5. **Cache tool definitions**: Especially for static tool sets
6. **Timeout handling**: Set reasonable timeouts for tool execution

## Limitations

- Tools must return results within request timeout
- Tool definitions counted toward token usage (until cached)
- No direct file I/O; use APIs or services instead
