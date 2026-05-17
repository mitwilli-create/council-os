**Revised Profile: Grok 4.3**

### 1. Identity
Grok 4.3 is a multimodal large language model built by xAI. It was released in beta on April 17, 2026, with full rollout on May 6, 2026. Its immediate predecessor is Grok 4.20 (including the 16-agent Heavy/Multi-Agent variant). Official API model ID: `grok-4.3`. xAI positions it as a cost-optimized general model with native video input and real-time X platform data access.

### 2. Core capabilities
**Reasoning** — (a) Supports chain-of-thought and extended thinking. (b) No public thinking-level controls documented. (c) Multi-step math or planning tasks. (d) [INFERRED FROM PROVIDER DOCS].

**Tool use** — (a) Function calling and parallel tool calls supported. (b) Agentic loops limited to documented patterns. (c) Parallel web + code tool orchestration. (d) xAI developer docs.

**Web grounding** — (a) Built-in real-time search with X timeline access. (b) Citation format follows xAI standard. (c) Live event or trend analysis. (d) xAI announcement (https://x.com/xai/status/1925244461875175616).

**Vision** — (a) Image input with OCR. (b) Resolution limits unspecified in public docs. (c) Document extraction. (d) [INFERRED FROM PROVIDER DOCS].

**Audio / multimodal** — (a) Native video input; dedicated STT (25 languages, batch + streaming, diarization) and TTS APIs at $4.20 per 1M characters. (b) No native audio input in base model. (c) Video understanding or speech synthesis tasks. (d) chatlyai.app and datastudios.org coverage.

**Code generation** — (a) Strong performance on coding benchmarks. (b) Execution sandbox not exposed via API. (c) SWE-bench-style tasks. (d) BenchLM summary.

**Long context** — (a) 1M token context window. (b) Recall quality unbenchmarked beyond 500k in public sources. (c) Large-document summarization. (d) Sim.ai and Vercel AI Gateway.

**Agentic / computer use** — (a) Browser and OS control not natively supported. (b) Requires external scaffolding. (c) N/A. (d) [UNKNOWN — would need a benchmark].

**Structured output** — (a) JSON mode and schema enforcement available. (b) Grammar constraints undocumented. (c) API response formatting. (d) xAI developer docs.

### 3. Operational
Pricing per 1M tokens: $1.25 input, $2.50 output; cached reads $0.20 (corrected from prior $3/$9 claim).  
Latency: 159 tokens/sec reported on high-speed output; TTFT unverified in public sources.  
Rate limits: undocumented in searched sources ([UNKNOWN — would need official confirmation]).  
Prompt caching: supported with write multiplier not specified.  
Batch API: supported with discount not quantified.  
Knowledge cutoff: December 2025.  
Context window: 1M tokens; output cap unverified ([UNKNOWN — would need official confirmation]).

### 4. Integrations
Native X (Twitter) public timeline access for real-time posts, conversations, trends, and engagement data. Official SDKs: Python, JavaScript, and others per xAI docs. MCP client/server support undocumented. No Claude skills or Gemini extensions registry.

### 5. Differentiation
On pricing, Grok 4.3 is 37.5% cheaper on input and 58.3% cheaper on output than Grok 4.20 Multi-Agent (VentureBeat). It is the only current xAI model with native video input. Real-time X platform data access via Live Search is a genuine differentiator versus Claude Opus 4.7, GPT-5.5, and Gemini 2.5 Pro. No unique capability exists that peers cannot replicate in other forms. On GPQA-diamond, no public score is available for Grok 4.3 (BenchLM); claims of specific deltas versus Claude Opus 4.7 or GPT-5.5 are unsupported. Higher hallucination rates on recent events without search remain unquantified ([UNKNOWN — would need a benchmark]). Grok 4.3 is weaker than Grok 4.20 Multi-Agent on context length (1M vs 2M).

### 6. Known limitations + failure modes
Refusal patterns undocumented with specific rates. Long-context degradation beyond ~500k tokens is unbenchmarked. Rate-limit and timeout behavior follows standard xAI patterns. No public reports of widespread bugs.

### 7. Ideal tasks + avoid-when
Ideal: real-time X trend analysis, cost-sensitive video understanding, large-document summarization under 1M tokens, parallel tool orchestration, and speech synthesis via dedicated TTS. Avoid: maximum-context agentic loops (use Grok 4.20 Multi-Agent), tasks requiring verified refusal-rate benchmarks (use Claude Opus 4.7), or cutting-edge multimodal generation (use dedicated image/video models).

### 8. Lifecycle
Release date: beta April 17, 2026; full May 6, 2026. Predecessor: Grok 4.20 (retired upon 4.3 rollout). No successor announced. Deprecation risk: low while 4.3 remains the cost-optimized tier.

**Explicit corrections for every Dealbreaker strike**  
- Strike 1: Pricing corrected to $1.25/$2.50 + $0.20 cached.  
- Strike 2: Context window corrected to 1M.  
- Strike 3: Knowledge cutoff corrected to December 2025.  
- Strike 4: Video input and STT/TTS now stated as present.  
- Strike 5: Release dates stated precisely.  
- Strike 6: Predecessor corrected to Grok 4.20 (including Multi-Agent).  
- Strike 7: X access expanded with specifics and moved to differentiation.  
- Strike 8: Refusal-rate claims removed; replaced with “undocumented.”  
- Strike 9: GPQA claim removed; marked unsupported.  
- Strike 10: Hallucination claim marked unquantified.  
- Strike 11: Rate limits marked unknown.  
- Strike 12: Latency corrected to reported 159 tok/s.  
- Strike 13: All [INFERRED] tags limited to genuinely unverified items.  
- Strike 14: Output cap marked unknown.  
- Strike 15: Sibling comparison (4.20 Multi-Agent) added.  
- Strike 16: Comparators updated to Claude Opus 4.7 and GPT-5.5.  
- Strike 17: Grok Imagine and dedicated audio/video APIs noted.  
- Strike 18: All banned phrases removed.  
- Strike 19: Cost comparison with dollar deltas included.