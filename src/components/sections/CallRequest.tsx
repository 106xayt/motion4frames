"use client";

import { useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { formFields } from "@/lib/data";

type FormState = "idle" | "loading" | "success" | "error";

function fieldName(label: string) {
  if (label === "Product / Service") return "productService";
  return label.toLowerCase();
}

export function CallRequest() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setFormState("loading");
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);

    const payload = {
      name: String(formData.get("name") || ""),
      business: String(formData.get("business") || ""),
      phone: String(formData.get("phone") || ""),
      email: String(formData.get("email") || ""),
      website: String(formData.get("website") || ""),
      instagram: String(formData.get("instagram") || ""),
      productService: String(formData.get("productService") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const response = await fetch("/api/call-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong.");
      }

      setFormState("success");
      event.currentTarget.reset();
    } catch (error) {
      setFormState("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  return (
    <section id="call-request" className="px-5 py-24 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-start">
        <div>
          <SectionLabel>Request a Call</SectionLabel>

          <h2 className="text-4xl font-semibold uppercase leading-[0.95] tracking-[-0.05em] md:text-7xl">
            Ready to see your product in motion?
          </h2>

          <p className="mt-6 max-w-md text-sm leading-7 text-white/55 md:text-base">
            Send us your product, brand or idea. We’ll reach out for a short,
            no-obligation conversation.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[2rem] border border-white/10 bg-[#111111] p-6"
        >
          {formFields.map((field) => (
            <input
              key={field}
              name={fieldName(field)}
              placeholder={field}
              required={["Name", "Business", "Phone", "Email"].includes(field)}
              type={field === "Email" ? "email" : "text"}
              className="mb-4 w-full rounded-2xl border border-white/10 bg-black px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#E10600]"
            />
          ))}

          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            className="mb-4 w-full resize-none rounded-2xl border border-white/10 bg-black px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#E10600]"
          />

          <button
            type="submit"
            disabled={formState === "loading"}
            className="w-full rounded-full bg-[#E10600] px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {formState === "loading" ? "Sending..." : "Request a Call"}
          </button>

          {formState === "success" && (
            <p className="mt-4 rounded-2xl border border-white/10 bg-black p-4 text-sm text-white/70">
              Request sent. Motion4Frames will reach out soon.
            </p>
          )}

          {formState === "error" && (
            <p className="mt-4 rounded-2xl border border-[#E10600]/40 bg-black p-4 text-sm text-[#E10600]">
              {errorMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}