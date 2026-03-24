"use server";

import { contactSchema } from "./schema";

type FormState = {
  success: boolean;
  error: string;
};

export async function submitContact(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const raw = {
    first_name: formData.get("first_name"),
    last_name: formData.get("last_name"),
    email: formData.get("email"),
    company: formData.get("company"),
    phone: formData.get("phone"),
    service: formData.get("service"),
    message: formData.get("message"),
  };

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    const firstError = parsed.error.issues[0]?.message ?? "Invalid form data";
    return { success: false, error: firstError };
  }

  const data = parsed.data;
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;

  if (!webhookUrl) {
    // If no webhook configured, log and succeed silently
    console.log("Contact form submission (no Slack webhook configured):", data);
    return { success: true, error: "" };
  }

  const slackMessage = {
    text: `New project inquiry from ${data.first_name} ${data.last_name}`,
    blocks: [
      {
        type: "header",
        text: {
          type: "plain_text",
          text: "New Project Inquiry",
        },
      },
      {
        type: "section",
        fields: [
          { type: "mrkdwn", text: `*Name:*\n${data.first_name} ${data.last_name}` },
          { type: "mrkdwn", text: `*Email:*\n${data.email}` },
          ...(data.company ? [{ type: "mrkdwn", text: `*Company:*\n${data.company}` }] : []),
          ...(data.phone ? [{ type: "mrkdwn", text: `*Phone:*\n${data.phone}` }] : []),
          ...(data.service ? [{ type: "mrkdwn", text: `*Service:*\n${data.service}` }] : []),
        ],
      },
      ...(data.message
        ? [
            {
              type: "section",
              text: {
                type: "mrkdwn",
                text: `*Project Description:*\n${data.message}`,
              },
            },
          ]
        : []),
    ],
  };

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(slackMessage),
    });

    if (!res.ok) {
      console.error("Slack webhook error:", res.status, await res.text());
      return { success: false, error: "Something went wrong. Please call us directly." };
    }

    return { success: true, error: "" };
  } catch (err) {
    console.error("Slack webhook error:", err);
    return { success: false, error: "Something went wrong. Please call us directly." };
  }
}
