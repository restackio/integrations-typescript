import { CreateEmailOptions, CreateEmailRequestOptions } from "resend";
import { resendClient } from "../utils/client";


export async function resendSendEmail({ payload, options }: { payload: CreateEmailOptions, options?: CreateEmailRequestOptions }) {
    const resend = resendClient({ apiKey: process.env.RESEND_API_KEY });
    const { data, error } = await resend.emails.send(payload, options);

    if (error) {
        return console.error({ error });
    }

    console.log({ data });
}
