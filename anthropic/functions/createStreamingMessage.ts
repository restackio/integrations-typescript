import { MessageCreateParamsStreaming, MessageStream } from '@anthropic-ai/sdk/resources/messages';
import { log } from "@restackio/ai/function";
import { anthropicClient } from "../utils/client";

/**
 * When creating a Message you can stream the response using server-sent events (SSE)
 *
 * @see {@link https://docs.anthropic.com/en/api/messages-streaming}
 */
export async function createStreamingMessage({
  headers = null,
  body,
  token,
}: {
  headers?: object | null;
  body: MessageCreateParamsStreaming;
  token?: string;
  }): Promise<MessageStream> {

  if (!body) {
    throw new Error(`Missing 'body' value`)
  }

  try {
    const anthropic = anthropicClient({ token });

    return anthropic.messages.stream(body, headers)

  } catch (error) {
    log.error("Anthropic Create Streaming Message error", { error });
    throw new Error(`Anthropic Create Streaming Message error ${error}`);
  }
}
