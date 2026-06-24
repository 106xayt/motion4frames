import { NextResponse } from "next/server";
import { Resend } from "resend";

type CallRequestPayload = {
  name?: string;
  business?: string;
  phone?: string;
  email?: string;
  website?: string;
  instagram?: string;
  productService?: string;
  message?: string;
};

function clean(value: unknown) {
  if (typeof value !== "string") return "";
  return value.trim();
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    const to = process.env.CALL_REQUEST_TO;
    const from = process.env.CALL_REQUEST_FROM;

    console.log("CALL_REQUEST_FROM:", from);
    console.log("CALL_REQUEST_TO:", to);
    console.log("RESEND KEY EXISTS:", Boolean(resendApiKey));

    if (!resendApiKey || !to || !from) {
      return NextResponse.json(
        {
          error:
            "Missing environment variables. Check RESEND_API_KEY, CALL_REQUEST_TO and CALL_REQUEST_FROM in .env.local.",
        },
        { status: 500 },
      );
    }

    const body = (await request.json()) as CallRequestPayload;

    const name = clean(body.name);
    const business = clean(body.business);
    const phone = clean(body.phone);
    const email = clean(body.email);
    const website = clean(body.website);
    const instagram = clean(body.instagram);
    const productService = clean(body.productService);
    const message = clean(body.message);

    if (!name || !business || !phone || !email) {
      return NextResponse.json(
        { error: "Name, business, phone and email are required." },
        { status: 400 },
      );
    }

    const resend = new Resend(resendApiKey);

    const { data, error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New M4F call request from ${business}`,
      html: `
        <div style="font-family: Arial, sans-serif; background: #050505; color: #f5f5f5; padding: 32px;">
          <div style="max-width: 640px; margin: 0 auto; border: 1px solid #222; padding: 24px; border-radius: 18px; background: #111111;">
            <p style="color: #E10600; letter-spacing: 4px; text-transform: uppercase; font-size: 12px; margin: 0 0 16px;">
              MOTION4FRAMES
            </p>

            <h1 style="margin: 0 0 24px; font-size: 28px;">
              New Call Request
            </h1>

            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Business:</strong> ${escapeHtml(business)}</p>
            <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Website:</strong> ${escapeHtml(website || "Not provided")}</p>
            <p><strong>Instagram:</strong> ${escapeHtml(instagram || "Not provided")}</p>
            <p><strong>Product / Service:</strong> ${escapeHtml(productService || "Not provided")}</p>

            <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #222;">
              <p style="margin-bottom: 8px;"><strong>Message:</strong></p>
              <p style="white-space: pre-line; color: #d9d9d9;">${escapeHtml(message || "No message provided.")}</p>
            </div>
          </div>
        </div>
      `,
      text: `
New Call Request

Name: ${name}
Business: ${business}
Phone: ${phone}
Email: ${email}
Website: ${website || "Not provided"}
Instagram: ${instagram || "Not provided"}
Product / Service: ${productService || "Not provided"}

Message:
${message || "No message provided."}
      `,
    });

    if (error) {
      console.error("RESEND ERROR:", error);

      return NextResponse.json(
        { error: error.message || "Resend failed to send the email." },
        { status: 500 },
      );
    }

    console.log("RESEND SUCCESS:", data);

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("CALL REQUEST ERROR:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      },
      { status: 500 },
    );
  }
}