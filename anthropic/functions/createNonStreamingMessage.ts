import { Message, MessageCreateParamsNonStreaming } from '@anthropic-ai/sdk/resources/messages';
import { log } from "@restackio/ai/function";
import { anthropicClient } from "../utils/client";

/**
 * Send a structured list of input messages with text and/or image content,
 * and the model will generate the next message in the conversation.
 *
 * @see {@link https://docs.anthropic.com/en/api/messages}
 */
export async function createNonStreamingMessage({
  headers = null,
  body,
  token,
}: {
  headers?: object | null;
  body: MessageCreateParamsNonStreaming;
  token?: string;
}): Promise<Message> {

  if (!text) {
    throw new Error(`Missing 'text' value`)
  }

  try {
    const anthropic = anthropicClient({ token });

    const response = await anthropic.messages.create(body, headers);

    return response;

  } catch (error) {
    log.error("Anthropic Create Non Streaming Message error", { error });
    throw new Error(`Anthropic Create Non Streaming Message error ${error}`);
  }
}
