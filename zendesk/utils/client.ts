import { createClient } from "node-zendesk";
import type { ZendeskClient } from "node-zendesk";
import "dotenv/config";

export function zendeskClient({
  token = process.env.ZENDESK_TOKEN,
  subdomain = process.env.ZENDESK_SUBDOMAIN,
  username = process.env.ZENDESK_USERNAME,
}: {
  token: string;
  subdomain: string;
  username: string;
}): ZendeskClient {
  if (!token) {
    throw new Error("Zendesk Token is missing");
  }

  if (!subdomain) {
    throw new Error("Zendesk Subdomain is missing");
  }

  if (!username) {
    throw new Error("Zendesk Username is missing");
  }

  const client = createClient({
    subdomain,
    token,
    username,
  });

  return client;
}
