import Anthropic from '@anthropic-ai/sdk';
import "dotenv/config";

export function anthropicClient({
  token = process.env.ANTHROPIC_API_KEY, // default value from Anthropic AI SDK
}: {
  token?: string;
}): Anthropic {
  if (!token) {
    throw new Error("Anthropic AI Token is missing");
  }

  const client = new Anthropic({
    apiKey: token,
  });

  return client;
}
