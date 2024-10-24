import { Resend } from 'resend';
import "dotenv/config";

let clientResend: Resend;

export function resendClient({
  apiKey = process.env.RESEND_API_KEY,
}: {
  apiKey: string;
}) {
  if (!apiKey) {
    throw new Error("API key is required to create Resend client.");
  }

  if (!clientResend) {
    clientResend = new Resend(apiKey);
  }
  return clientResend;
}