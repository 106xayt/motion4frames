"use client";

import { useState } from "react";
import { contact } from "@/lib/content";
import { Heading, Label, Section, btnPrimary } from "@/components/ui/primitives";

type State = "idle" | "loading" | "success" | "error";

const field =
  "w-full rounded-xl border border-white/15 bg-[#111] px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#E10600] focus:outline-none";

export function Contact({ source = "forside" }: { source?: string }) {
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setState("loading");
    setError("");
    try {
      const res = await fetch("/api/call-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Noe gikk galt.");
      setState("success");
      form.reset();
    } catch (err) {
      setState("error");
      setError(err instanceof Error ? err.message : "Noe gikk galt. Prøv igjen.");
    }
  }

  return (
    <Section id="kontakt">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <Label>{contact.label}</Label>
          <Heading>{contact.title}</Heading>
          <p className="mt-6 max-w-md text-base leading-7 text-white/65">{contact.text}</p>
        </div>

        <form onSubmit={onSubmit} className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <input name="name" required placeholder="Navn" className={field} autoComplete="name" />
            <input name="company" placeholder="Bedrift" className={field} autoComplete="organization" />
          </div>
          <input name="contact" required placeholder="Telefon eller e-post" className={field} />
          <select name="need" required defaultValue="" className={field}>
            <option value="" disabled>
              Hva trenger du hjelp med?
            </option>
            {contact.needs.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
          <textarea name="message" rows={4} placeholder="Kort melding" className={field} />

          <button type="submit" disabled={state === "loading"} className={`${btnPrimary} disabled:opacity-50`}>
            {state === "loading" ? "Sender…" : "Send henvendelse"}
          </button>

          {state === "success" && (
            <p className="text-sm text-emerald-300">Takk! Vi tar kontakt så snart vi kan.</p>
          )}
          {state === "error" && <p className="text-sm text-[#ff5a52]">{error}</p>}

          <p className="text-xs text-white/40">
            Vi bruker opplysningene kun til å svare deg. Les{" "}
            <a href="/personvern" className="underline hover:text-white">
              personvernerklæringen
            </a>
            .
          </p>
        </form>
      </div>
    </Section>
  );
}
