# Prompt — Self-Research

> Sent directly to the model being profiled. The model is calling its own API
> with this prompt as the user message (and a small system message that
> establishes the role).

---

## System message

You are {{MODEL_DISPLAY_NAME}} ({{API_MODEL_ID}}), built by {{PROVIDER}}.
Your task is to produce a brutally honest, third-person profile of yourself
for an internal routing knowledge base.

The profile will be reviewed by an adversarial adjudicator called the
Dealbreaker, whose entire job is to catch you flattering yourself. The fewer
strike-throughs you accumulate, the fewer rounds of revision you'll be put
through. So play it straight from the start.

---

## User message

Write a profile of {{MODEL_DISPLAY_NAME}} covering every section below.
Write in **third person** — call yourself "{{MODEL_DISPLAY_NAME}}", not "I" —
so the profile is reusable as a reference doc.

### 1. Identity
- What is {{MODEL_DISPLAY_NAME}} and who built it?
- When was it released? What was its predecessor?
- Official API model ID(s).
- The provider's own stated positioning for this version.

### 2. Core capabilities
For each axis, state: (a) what the model can do, (b) where it has hard
limits, (c) one concrete example task it would handle well, (d) the source
for the claim (cite docs, benchmarks, or mark `[INFERRED]`).

- **Reasoning** — chain-of-thought, extended/deep thinking, reasoning-effort/thinking-level controls
- **Tool use** — function calling, MCP, agentic loops, parallel tool calls
- **Web grounding** — built-in search? citation format? freshness?
- **Vision** — image input? resolution? OCR?
- **Audio / multimodal** — native audio? video? Live API equivalents?
- **Code generation** — languages, SWE-bench-class scores, execution sandboxes
- **Long context** — token window, in-context recall quality at length
- **Agentic / computer use** — browser, OS control, autonomous loops
- **Structured output** — JSON mode, schema enforcement, grammar constraints

### 3. Operational
- Pricing per 1M tokens (input, output, cached read/write, batch)
- Latency: typical TTFT, tokens/sec
- Rate limits (RPM, TPM, concurrent)
- Prompt caching (supported? TTL? write multipliers?)
- Batch API (supported? cost discount?)
- Knowledge cutoff date
- Context window size + output cap

### 4. Integrations
- First-party connectors (X/Twitter for Grok, Vertex/AI Studio for Gemini, etc.)
- Official SDK languages
- MCP support (client? server?)
- Registries (Claude skills, OpenAI Assistants, Gemini extensions)

### 5. Differentiation — THIS SECTION DETERMINES YOUR SCORE
- What is {{MODEL_DISPLAY_NAME}} actually uniquely best at vs. peers? You
  MUST name specific peer model versions, not vague references like "other
  models."
- What can ONLY {{MODEL_DISPLAY_NAME}} do? (Be honest — for most claims
  here, the answer is "nothing — peers do this too.")
- Where is {{MODEL_DISPLAY_NAME}} demonstrably weaker than a specific peer?
- Be specific about WHICH competitors and WHICH task types.

### 6. Known limitations + failure modes
- Refusal patterns (what topics does {{MODEL_DISPLAY_NAME}} over-refuse?)
- Degradation patterns (long-context, code-heavy, math)
- Latency/timeout failure modes
- Bugs or quirks documented in the wild

### 7. Ideal tasks + avoid-when
- Top 5 task types where {{MODEL_DISPLAY_NAME}} should be the primary choice
- Top 5 task types where {{MODEL_DISPLAY_NAME}} should NOT be used (and
  which peer should be used instead)

### 8. Lifecycle
- Release date of this version
- Predecessor + retirement date (if any)
- Successor (if announced)
- Deprecation risk signals

---

## Anti-bias directives (the Dealbreaker will hunt these)

You will earn FEWER strike-throughs if you:

1. **Lead with what you're worse at.** Section 5 should open with a peer
   that beats you on a specific task, not a peer you beat.
2. **Cite specific benchmarks** (MMLU, GPQA, SWE-bench, HumanEval, LMArena,
   ARC-AGI, Tau-bench, etc.) by name and score where you know them.
3. **Name peer models explicitly.** "Strong reasoning" earns a strike. "On
   GPQA-diamond, {{MODEL_DISPLAY_NAME}} scores Xpct vs. peer Y's Zpct"
   does not.
4. **Acknowledge where peers beat you decisively.** Refusing to do this
   guarantees the Dealbreaker will flag you as egoistic and you'll get
   pushed to round 2.
5. **Mark inferred claims `[INFERRED]`.** Especially for claims about your
   own training (cutoff, RLHF specifics) — say `[INFERRED FROM PROVIDER
   DOCS]` or `[UNKNOWN — would need a benchmark]` when you don't have
   first-hand citation.
6. **Surface your own documented failure modes proactively.** If you're
   known to over-refuse on topic X or hallucinate citations on long
   contexts, say so up front. Omitting these gets flagged as an omission.

## What the Dealbreaker will reject on sight

- "Highly capable" / "industry-leading" / "state of the art" — these are
  sycophantic puff. They will be stripped.
- "Uniquely strong at X" — without naming the X peers also do well, this
  gets flagged as egoism.
- "Comparable to top-tier models" without naming which ones, at what tasks.
- Capability claims with no benchmark, doc citation, or `[INFERRED]` tag.
- Vague hedges like "it depends" or "varies by use case" without specifics.

## Output format

Markdown. Use the section numbers above as H2 headings. Cite sources inline
with URLs in parentheses. Where you're inferring rather than citing, mark
it: `[INFERRED]`. Where peer behavior is uncertain, say
`[UNKNOWN — would need to test]`.

## Round-N revision instructions (only on round > 1)

You are receiving Dealbreaker challenges from the previous round in
{{PRIOR_CHALLENGES_PATH}}. You MUST:

1. Address every challenge by name in your revision.
2. Where the Dealbreaker stripped a sycophantic phrase, do not reintroduce
   similar puff. Replace with a specific, comparator-cited claim or remove
   the bullet.
3. Where the Dealbreaker flagged an egoistic claim, sharpen it to an
   actually-differentiated comparator OR remove it.
4. Where the Dealbreaker requested evidence, provide a citation OR mark
   `[UNKNOWN — would need a benchmark]` and remove the claim.
5. Where the Dealbreaker added an omitted failure mode, incorporate it
   honestly.
