import Restack, { ServiceInput } from "@restackio/ai";
import { createTicket } from "./functions";
import { zendeskTaskQueue } from "./taskQueue";

export async function zendeskService({
  client,
  options = {},
}: {
  client: Restack;
  options?: ServiceInput["options"];
}) {
  await client.startService({
    taskQueue: zendeskTaskQueue,
    functions: { createTicket },
    options,
  });
}

zendeskService({ client: new Restack() }).catch((err) => {
  console.error("Error service:", err);
});
