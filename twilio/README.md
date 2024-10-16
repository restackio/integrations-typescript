# @restackio/integrations-twilio

This package provides a Twilio integration for Restack, allowing you to easily incorporate Twilio functionality into your Restack-powered applications.

## Installation

To install the package, use npm or yarn:

```bash
npm install @restackio/integrations-twilio
```

## Usage

### Setting up the Twilio Service

To use the Twilio integration, you need to set up the Twilio service in your application:

```typescript
import Restack from "@restackio/ai";
import { twilioService } from "@restackio/integrations-twilio";
const client = new Restack();
twilioService({
   client,
   options: {
   rateLimit: 1, // Adjust as needed
},
}).catch((err) => {
  console.error("Error starting Twilio service:", err);
});
```

### Making a Twilio Call

You can use the `twilioCall` function to initiate a call:

```typescript
import { twilioCall } from "@restackio/integrations-twilio/functions";
const result = await twilioCall({
   accountSid: "YOUR_ACCOUNT_SID",
   authToken: "YOUR_AUTH_TOKEN",
   options: {
   to: "+1234567890",
   from: "+0987654321",
   url: "http://example.com/twiml",
   },
});
console.log("Call SID:", result.sid);
```

## Configuration

Make sure to set the following environment variables:

- `TWILIO_ACCOUNT_SID`: Your Twilio Account SID
- `TWILIO_AUTH_TOKEN`: Your Twilio Auth Token

You can also pass these credentials directly to the `twilioCall` function if needed.

## Available Functions

- `twilioCall`: Initiates a Twilio call


## Task Queue

The Twilio integration uses a dedicated task queue named "twilio" for processing Twilio-related tasks.

## Rate Limiting

The Twilio service is configured with a default rate limit of 1 request per second. You can adjust this in the `twilioService` options if needed, but be mindful of [Twilio's rate limits](https://help.twilio.com/articles/223180028).