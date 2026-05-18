---
source_url: https://www.perplexity.ai/api-platform
fetched_at: 2026-05-18
source_authority: official_doc_via_websearch_alternates
provider: perplexity
purpose: api-platform
fetch_quality: synthesized_from_search
fetch_note: Original perplexity.ai/api-platform landing page is JS-rendered and returns HTTP 403 to WebFetch. Synthesized from authoritative WebSearch results including perplexity.ai official blog + Sonar Pro launch announcement + Search API launch + docs.perplexity.ai/feature-roadmap. Re-verify quarterly.
---

# Perplexity API Platform (synthesized from authoritative sources)

## Platform Overview

The Perplexity API Platform is a unified developer API that combines AI model access, real-time web search across 200+ billion indexed URLs, text embeddings, and agentic orchestration under a single API key.

## Core APIs (three primary surfaces)

| API | Purpose | Typical use |
|---|---|---|
| **Sonar API** | Rapid delivery of natural language answers grounded in live web search | Direct Q&A with citations; replaces external search + LLM pipeline |
| **Agentic Research API** | Advanced scenarios requiring explicit reasoning control and iterative tool use | Multi-step research workflows with controllable depth |
| **Search API** | Exposes Perplexity's search and ranking infrastructure for custom RAG solutions | Bring-your-own-LLM RAG pipelines; bulk URL retrieval |

## Sonar tiers (what we route in Council OS)

| Tier | Pricing | Context | Positioning |
|---|---|---|---|
| **Sonar** (base) | $1 / 1M tokens | 127k | Fast, cheapest tier — bounded one-step queries |
| **Sonar Pro** | $3 in / $15 out | 200k | Deeper context, 2x retrieval, JSON schema support |
| **Sonar Reasoning** | priced separately | 128k | Chain-of-thought + grounding |
| **Sonar Reasoning Pro** | $2 / $8 + $3/M reasoning + $5/1k searches | 128k | Visible CoT + citations |
| **Sonar Deep Research** | $2 in / $8 out + $2/M citation + $3/M reasoning + $5/1k search queries | 128k | Multi-step research with hundreds of sources |

## Search API

- $5 per 1,000 requests, no token costs
- Returns structured ranked results with regional filters (ISO country codes), date range filters, domain allow/deny lists (up to 20 per request), multi-query bundling of up to 5 queries per call
- Direct access to Perplexity's 200B+ URL search index

## Developer Integration

- **OpenAI-compatible API**: switch from OpenAI by changing base URL + model name; no other code changes
- **Authentication**: API keys, rapid onboarding through OpenAI-compatible or Perplexity-native SDKs
- **Granular configuration**: search depth, source selection, retrieval strategy

## Roadmap

- Enhanced integrations with LangChain, LlamaIndex
- Native support for popular development environments
- Workflow automation integration with CI/CD pipelines
- Feature roadmap published at https://docs.perplexity.ai/feature-roadmap

## Council OS routing implications

- Use **Sonar Search API** for bulk URL retrieval workflows (cheaper per query than Sonar Pro when you don't need synthesis)
- Use **OpenAI-compatible mode** when migrating an existing OpenAI client to Perplexity for search-grounded responses
- Multi-query bundling (5 per call) is unique among council members for batched lookups
- Domain allow/deny lists (`search_domain_filter`) is a meta-prompting technique already captured in `capabilities/meta-prompting.md`

## Sources

- [Perplexity API Platform landing page](https://www.perplexity.ai/api-platform) (403 — JS-rendered)
- [Introducing the Sonar Pro API](https://www.perplexity.ai/hub/blog/introducing-the-sonar-pro-api)
- [Introducing the Perplexity Search API](https://www.perplexity.ai/hub/blog/introducing-the-perplexity-search-api)
- [Perplexity API Platform on Product Hunt](https://www.producthunt.com/products/perplexity-api-platform)
- [API Roadmap](https://docs.perplexity.ai/feature-roadmap)
