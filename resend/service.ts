import Restack, { ServiceInput } from "@restackio/ai";
import { resendTaskQueue } from "./taskQueue"
import { resendSendEmail } from "./functions"

// rate limit limit https://resend.com/docs/api-reference/introduction#rate-limit

export async function resendService({
  client,
  options = {
    rateLimit: 2,
    maxConcurrentFunctionRuns: 100,
  },
}: {
  client: Restack;
  options?: ServiceInput["options"];
}) {
  await client.startService({
    taskQueue: resendTaskQueue,
    functions: { resendSendEmail },
    options,
  });
}

resendService({ client: new Restack() }).catch((err) => {
  console.error("Error service:", err);
});
