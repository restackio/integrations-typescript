# Anthropic for Restack

This package provides an integration for Anthropic with Restack, allowing:

- [creating a message](https://docs.anthropic.com/en/api/messages)
- [creating a streaming message](https://docs.anthropic.com/en/api/messages-streaming)

## Installation

To install the package, use npm or yarn:

```bash
npm install @restackio/integrations-anthropic
```

## Configuration

Before using the Anthropic integration you need to set up your Anthropic API token. You can do this by setting an environment variable or passing it directly to the functions.

1. Set up environment variables:

```bash
ANTHROPIC_API_KEY=your_anthropic_api_token
```

2. Or pass them directly when calling the functions (see Usage section).

## Usage

### Starting the Anthropic Service

To start the Anthropic service, use the `anthropicService` function:

```typescript
import Restack from "@restackio/ai";
import { anthropicService } from "@restackio/integrations-anthropic";

const client = new Restack();

anthropicService({ client }).catch((err) => {
  console.error("Error starting Anthropic service:", err);
});
```

### Using the Anthropic Create Message Function

This function allows the [creation of a message](https://docs.anthropic.com/en/api/messages).

```typescript
import { createMessage } from "@restackio/integrations-anthropic/functions";

const result = await createMessage({
  headers, // optional
  body: {
    max_tokens: 100,
    messages: [{ "role": "user", "content": "What is your purpose?" }],
    model: 'claude-3-5-sonnet-20240620',
  },
  token = // optional if set in environment variables
});

console.log(result);
```

### Using the Anthropic Create Streaming Message Function

This function allows the [creation of a streaming message](https://docs.anthropic.com/en/api/messages-streaming).

```typescript
import { createStreamingMessage } from "@restackio/integrations-anthropic/functions";

const result = await createStreamingMessage({
  headers, // optional
  body: {
    max_tokens: 100,
    messages: [{ "role": "user", "content": "What is your purpose?" }],
    model: 'claude-3-5-sonnet-20240620',
  },
  token = // optional if set in environment variables
}).on('text', (text) => {
  console.log(text);
});

console.log(result);
```
