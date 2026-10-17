import { NextResponse } from "next/server";
import { Resend } from "resend";

const FIELDS = ["name", "company", "contact", "need", "message", "source"] as const;
type Field = (typeof FIELDS)[number];

const LABELS: Record<Field, string> = {
  name: "Navn",
  company: "Bedrift",
  contact: "Telefon / e-post",
  need: "Behov",
  message: "Melding",
  source: "Skjema",
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim().slice(0, 2000) : "";
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
      console.error("Missing RESEND_API_KEY, CALL_REQUEST_TO or CALL_REQUEST_FROM");
      return NextResponse.json({ error: "Skjemaet er ikke satt opp riktig. Prøv igjen senere." }, { status: 500 });
    }

    const body = (await request.json()) as Partial<Record<Field, unknown>>;
    const data = Object.fromEntries(FIELDS.map((f) => [f, clean(body[f])])) as Record<Field, string>;

    if (!data.name || !data.contact || !data.need) {
      return NextResponse.json(
        { error: "Fyll inn navn, telefon eller e-post, og hva du trenger hjelp med." },
        { status: 400 },
      );
    }

    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.contact);
    const rows = FIELDS.filter((f) => data[f]);

    const { error } = await new Resend(resendApiKey).emails.send({
      from,
      to,
      ...(isEmail ? { replyTo: data.contact } : {}),
      subject: `Ny henvendelse (${data.need}) fra ${data.name}${data.company ? `, ${data.company}` : ""}`,
      html: `<div style="font-family:Arial,sans-serif;padding:24px">
        <p style="color:#E10600;letter-spacing:4px;font-size:12px">MOTION4FRAMES</p>
        <h1 style="font-size:22px">Ny henvendelse</h1>
        ${rows.map((f) => `<p><strong>${LABELS[f]}:</strong> ${escapeHtml(data[f]).replaceAll("\n", "<br>")}</p>`).join("")}
      </div>`,
      text: rows.map((f) => `${LABELS[f]}: ${data[f]}`).join("\n"),
    });

    if (error) {
      console.error("RESEND ERROR:", error);
      return NextResponse.json({ error: "Kunne ikke sende. Prøv igjen senere." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("CONTACT ERROR:", error);
    return NextResponse.json({ error: "Noe gikk galt. Prøv igjen." }, { status: 500 });
  }
}
