import { NextResponse } from "next/server";
import { Resend } from "resend";

type CallRequestPayload = {
  brandName?: string;
  phone?: string;
  email?: string;
  websiteOrInstagram?: string;
  productFocus?: string;
  desiredFeeling?: string;
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

    if (!resendApiKey || !to || !from) {
      return NextResponse.json(
        {
          error:
            "Missing environment variables. Check RESEND_API_KEY, CALL_REQUEST_TO and CALL_REQUEST_FROM.",
        },
        { status: 500 },
      );
    }

    const body = (await request.json()) as CallRequestPayload;

    const brandName = clean(body.brandName);
    const phone = clean(body.phone);
    const email = clean(body.email);
    const websiteOrInstagram = clean(body.websiteOrInstagram);
    const productFocus = clean(body.productFocus);
    const desiredFeeling = clean(body.desiredFeeling);

    if (
      !brandName ||
      !phone ||
      !email ||
      !websiteOrInstagram ||
      !productFocus ||
      !desiredFeeling
    ) {
      return NextResponse.json(
        {
          error:
            "Brand name, phone, email, website/Instagram, product focus and desired feeling are required.",
        },
        { status: 400 },
      );
    }

    const resend = new Resend(resendApiKey);

    const { data, error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New M4F call request from ${brandName}`,
      html: `
        <div style="font-family: Arial, sans-serif; background: #050505; color: #f5f5f5; padding: 32px;">
          <div style="max-width: 640px; margin: 0 auto; border: 1px solid #222; padding: 24px; border-radius: 18px; background: #111111;">
            <p style="color: #E10600; letter-spacing: 4px; text-transform: uppercase; font-size: 12px; margin: 0 0 16px;">
              MOTION4FRAMES
            </p>

            <h1 style="margin: 0 0 24px; font-size: 28px;">
              New Call Request
            </h1>

            <p><strong>Brand name:</strong> ${escapeHtml(brandName)}</p>
            <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Website or Instagram:</strong> ${escapeHtml(websiteOrInstagram)}</p>
            <p><strong>Product focus:</strong> ${escapeHtml(productFocus)}</p>
            <p><strong>Desired feeling:</strong> ${escapeHtml(desiredFeeling)}</p>

            <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #222;">
              <p style="margin: 0; color: #aaa;">
                This request came from the Motion4Frames website.
              </p>
            </div>
          </div>
        </div>
      `,
      text: `
New Call Request

Brand name: ${brandName}
Phone: ${phone}
Email: ${email}
Website or Instagram: ${websiteOrInstagram}
Product focus: ${productFocus}
Desired feeling: ${desiredFeeling}

This request came from the Motion4Frames website.
      `,
    });

    if (error) {
      console.error("RESEND ERROR:", error);

      return NextResponse.json(
        { error: error.message || "Resend failed to send the email." },
        { status: 500 },
      );
    }

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