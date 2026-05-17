---
source_url: https://developers.openai.com/cookbook/examples/gpt-5/gpt-5-2_prompting_guide
fetched_at: 2026-05-17
source_authority: official_doc
provider: openai
purpose: gpt-5-2-prompting-cookbook
fetch_quality: faithful_partial
fetch_note: Followed 308 redirect from cookbook.openai.com. WebFetch processor compressed some sections but preserved key code blocks and templates.
---

# GPT-5.2 Prompting Guide

## 1. Introduction

GPT-5.2 serves as the newest flagship model for enterprise and agentic workloads, with emphasis on "higher accuracy, stronger instruction following, and more disciplined execution across complex workflows." This model builds upon GPT-5.1, enhancing token efficiency and reducing verbosity while strengthening "structured reasoning, tool grounding, and multimodal understanding."

The guide emphasizes that while GPT-5.2 functions effectively without optimization, "small changes to prompt structure, verbosity constraints, and reasoning settings often translate into large gains in correctness, latency, and developer trust."

## 2. Key Behavioral Differences

Compared to prior models, GPT-5.2 offers:

- More deliberate scaffolding with clearer intermediate structure
- Lower verbosity by default while remaining prompt-sensitive
- Stronger instruction adherence with reduced user intent drift
- Tool efficiency trade-offs requiring optimization via prompting
- Conservative grounding bias favoring "correctness and explicit reasoning"

## 3. Prompting Patterns

### 3.1 Controlling Verbosity and Output Shape

```
<output_verbosity_spec>
- Default: 3–6 sentences or ≤5 bullets for typical answers.
- For simple "yes/no + short explanation" questions: ≤2 sentences.
- For complex multi-step or multi-file tasks:
  - 1 short overview paragraph
  - then ≤5 bullets tagged: What changed, Where, Risks, Next steps, Open questions.
```

Key principle: "Avoid long narrative paragraphs; prefer compact bullets and short sections."

### 3.2 Preventing Scope Drift

```
<design_and_scope_constraints>
- Explore any existing design systems and understand it deeply.
- Implement EXACTLY and ONLY what the user requests.
- No extra features, no added components, no UX embellishments.
```

### 3.3 Long-Context and Recall

For documents exceeding ~10k tokens, produce "a short internal outline of the key sections relevant to the user's request" and re-ground constraints before answering.

### 3.4 Handling Ambiguity & Hallucination Risk

When underspecified: "explicitly call this out and ask up to 1–3 precise clarifying questions, OR present 2–3 plausible interpretations with clearly labeled assumptions."

For high-risk contexts, include self-checks that "briefly re-scan your own answer for unstated assumptions, specific numbers or claims not grounded in context, overly strong language."

## 4. Compaction (Extending Effective Context)

The `/responses/compact` endpoint performs "loss-aware compression pass over prior conversation state, returning encrypted, opaque items that preserve task-relevant information while dramatically reducing token footprint."

**Best practices:**
- Monitor context usage and plan compaction after major milestones
- Keep prompts functionally identical when resuming
- Treat compacted items as opaque

Example code:

```python
from openai import OpenAI
import json

client = OpenAI()

response = client.responses.create(
   model="gpt-5.2",
   input=[
       {"role": "user", "content": "write a very long poem about a dog."},
   ]
)

output_json = [msg.model_dump() for msg in response.output]

compacted_response = client.responses.compact(
   model="gpt-5.2",
   input=[
       {"role": "user", "content": "write a very long poem about a dog."},
       output_json[0]
   ]
)

print(json.dumps(compacted_response.model_dump(), indent=2))
```

## 5. Agentic Steerability & User Updates

Clamp verbosity: "Send brief updates (1–2 sentences) only when you start a new major phase of work, or discover something that changes the plan."

Key requirement: "Each update must include at least one concrete outcome ('Found X', 'Confirmed Y', 'Updated Z')."

## 6. Tool-Calling and Parallelism

Best practices:
- Describe tools in 1–2 sentences
- Encourage parallelism for "scanning codebases, vector stores, or multi-entity operations"
- Require verification steps for "high-impact operations (orders, billing, infra changes)"

Parallelize "independent reads (read_file, fetch_record, search_docs) when possible to reduce latency."

## 7. Structured Extraction, PDF, and Office Workflows

GPT-5.2 shows "strong improvements" here. Recommendations:

- Always provide schema or JSON shape
- Use structured outputs for strict schema adherence
- Ask for "extraction completeness" and "handle missing fields explicitly"
- Set missing fields to null "rather than guessing"

## 8. Prompt Migration Guide to GPT-5.2

| Current Model | Target Model | Target reasoning_effort | Notes |
|---------------|--------------|------------------------|-------|
| GPT-4o | GPT-5.2 | none | Treat as "fast/low-deliberation" |
| GPT-4.1 | GPT-5.2 | none | Same as GPT-4o |
| GPT-5 | GPT-5.2 | same except minimal → none | Preserve effort selection |
| GPT-5.1 | GPT-5.2 | same value | Adjust only after evals |

**Migration steps:**
1. Switch models without prompt changes initially
2. Pin reasoning_effort to match prior model's profile
3. Run evals for baseline
4. Tune prompts only if regressions appear
5. Re-run evals after each change

## 9. Web Search and Research

- "Specify the research bar up front: Tell the model how you want to perform search"
- "Constrain ambiguity by instruction, not questions"
- Require breadth: "Do not ask clarifying questions; instead cover all plausible user intents"

```
<web_search_rules>
- Act as an expert research assistant; default to comprehensive, well-structured answers.
- Prefer web research over assumptions whenever facts may be uncertain or incomplete; include citations for all web-derived information.
- Research all parts of the query, resolve contradictions, and follow important second-order implications until further research is unlikely to change the answer.
```

## Appendix: Web Research Agent Prompt Highlights

- "Never invent facts. If you can't verify something, say so clearly"
- Default to detailed answers unless brevity is requested
- Mandatory web browsing for time-sensitive, niche, or navigational queries
- Citation placement after "each paragraph (or tight block of closely related sentences)"
- Deep research continuing "until additional searching is unlikely to materially change the answer"
