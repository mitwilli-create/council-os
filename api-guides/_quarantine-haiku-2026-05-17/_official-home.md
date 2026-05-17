---
source_url: https://docs.perplexity.ai/home
fetched_at: 2026-05-17
source_authority: official_doc
provider: perplexity
purpose: Perplexity API platform overview with available APIs, quick access links, and supported languages
---

# Perplexity API Platform Documentation

## Overview

The Perplexity API Platform enables developers to integrate real-time, web-wide research and Q&A capabilities into their applications through multiple specialized APIs.

## Quick Access

- **Documentation Index**: https://docs.perplexity.ai/llms.txt
- **Console/API Keys**: https://console.perplexity.ai
- **Quickstart Guide**: Available at `/docs/getting-started/quickstart`

## Available APIs

### 1. Agent API

**Purpose**: "Access third-party models with web search tools and presets"

- **Documentation**: `/docs/agent-api/quickstart`
- **Frontier models**: Supports OpenAI's GPT-5.4 and GPT-5.2
- **Web search integration**: Built-in search tools
- **Source filtering**: Control which domains are searched
- **Structured responses**: JSON schema support for programmatic use

### 2. Search API

**Purpose**: "Get raw, ranked web search results with advanced filtering and real-time data"

- **Documentation**: `/docs/search/quickstart`
- **Structured results**: Returns titles and URLs
- **Batch operations**: Process multiple queries efficiently
- **Advanced filtering**: Domain restrictions, recency controls

### 3. Embeddings API

**Purpose**: "Generate high-quality embeddings for semantic search and RAG pipelines"

- **Documentation**: `/docs/embeddings/quickstart`
- **Vector generation**: High-quality semantic embeddings
- **Retrieval applications**: Support for RAG and semantic search

## Use Case Examples

The platform supports multiple development approaches:

### 1. Web Search
Query multiple topics with batch requests and retrieve ranked results

### 2. Frontier Models
Leverage cutting-edge AI models for complex tasks via Agent API

### 3. Source Filtering
Restrict searches to specific domains (e.g., arxiv.org) and control recency

### 4. Structured Results
Request responses in JSON schema format for programmatic processing

## Supported Languages

- **Python**: Full SDK support
- **TypeScript/JavaScript**: Complete API integration
- **cURL/Bash**: Direct HTTP API access

## Documentation Structure

- **Getting Started**: Quickstart guides for each API
- **Reference**: Detailed endpoint documentation
- **Examples**: Code samples in multiple languages
- **Guides**: Advanced usage patterns and best practices

## Integration Patterns

### With Web Search
Combine Agent API with real-time search for current-aware reasoning

### With Retrieval
Use Embeddings API with Search API for RAG implementations

### With Batch Processing
Leverage batch endpoints for high-volume applications
