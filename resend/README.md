# Restack Resend Integration

This package provides an integration for Resend's email services within the Restack AI framework.

## Installation

To install the Resend integration, use npm or yarn:

```bash
npm install @restackio/integrations-resend
```

## Configuration

Before using the Resend integration, make sure to set up your Resend API key. You can do this by setting the `RESEND_API_KEY` environment variable or by passing the API key directly to the client.

## Usage

### Initializing the Resend Service

To start the Resend service:

```typescript
// services.ts
import Restack from "@restackio/ai";
import { resendService } from "@restackio/integrations-resend";

export async function services() {
  const client = new Restack();
  resendService({ client }).catch((err) => {
    console.error("Error starting Resend service:", err);
  });
}

services().catch((err) => {
  console.error("Error running services:", err);
});
```

### Available Functions

This integration provides the main function:

1. `resendSendEmail`: Send emails using Resend

#### Sending Emails

```typescript
// sendEmailWorkflow.ts
import { log, step } from "@restackio/ai/workflow";
import * as resendFunctions from "@restackio/integrations-resend/functions";
import { resendTaskQueue } from "@restackio/integrations-resend/taskQueue";

export async function sendEmailWorkflow() {
  const result = await step<typeof resendFunctions>({
    taskQueue: resendTaskQueue,
  }).resendSendEmail({
    payload: {
      to: "recipient@example.com",
      subject: "Hello from Resend",
      body: "This is a test email.",
    },
  });
  log.info("result", { result });
}
```