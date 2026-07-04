"use client";

import { useState } from "react";
import { ImageCard } from "@/components/ui/ImageCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { formFields } from "@/lib/data";

type FormState = "idle" | "loading" | "success" | "error";

export function CallRequest() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setFormState("loading");
    setErrorMessage("");

    const payload = {
      brandName: String(formData.get("brandName") || ""),
      phone: String(formData.get("phone") || ""),
      email: String(formData.get("email") || ""),
      websiteOrInstagram: String(formData.get("websiteOrInstagram") || ""),
      productFocus: String(formData.get("productFocus") || ""),
      desiredFeeling: String(formData.get("desiredFeeling") || ""),
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
      form.reset();
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
    <section
      id="case-collaboration"
      className="overflow-hidden bg-[#0A0A0A] px-5 py-20 text-white md:px-10 md:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_0.9fr] md:items-start md:gap-12">
        <div>
          <SectionLabel>Request a Call</SectionLabel>

          <h2 className="text-[2.7rem] font-semibold uppercase leading-[0.92] tracking-[-0.06em] md:text-7xl">
            Want to see what your product could become?
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-white/60 md:text-base">
            We are selecting product-based businesses for Motion4Frames case
            collaborations.
          </p>

          <p className="mt-5 max-w-xl text-sm leading-7 text-white/60 md:text-base">
            We start with one product. We build the product DNA. We create the
            visual direction. We prepare the product for launch-ready content.
          </p>

          <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E10600] md:text-xs md:tracking-[0.28em]">
            Selected products only.
          </p>

          <div className="mt-8 md:mt-10">
            <ImageCard
              src="/images/bil/bil9.jpg"
              alt="Motion4Frames final case collaboration visual"
              eyebrow="Case collaboration"
              label="Built around one product"
              className="h-[260px] md:h-[460px]"
              imageClassName="object-cover object-[center_50%]"
            />
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[2rem] border border-white/10 bg-black p-5 transition duration-300 hover:border-[#E10600] hover:shadow-[0_0_55px_rgba(225,6,0,0.18)] md:p-6"
        >
          <p className="mb-6 text-sm leading-6 text-white/55">
            Request a short, no-obligation call. Send your product, contact
            details or Instagram, and Motion4Frames will reach out.
          </p>

          {formFields.map((field) => (
            <input
              key={field.name}
              name={field.name}
              placeholder={field.label}
              required={field.required}
              type={field.type}
              className="mb-4 w-full rounded-2xl border border-white/10 bg-[#111111] px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/30 hover:border-[#E10600]/60 focus:border-[#E10600]"
            />
          ))}

          <button
            type="submit"
            disabled={formState === "loading"}
            className="w-full rounded-full border border-[#E10600] bg-[#E10600] px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-transparent hover:text-[#E10600] hover:shadow-[0_0_35px_rgba(225,6,0,0.35)] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {formState === "loading" ? "Sending..." : "Request a call"}
          </button>

          <div className="mt-5 space-y-2 text-sm text-white/45">
            <p>
              Instagram:{" "}
              <a
                href="https://www.instagram.com/motion4frames"
                className="rounded-full border border-transparent px-2 py-1 text-white transition hover:border-[#E10600] hover:text-[#E10600]"
              >
                @motion4frames
              </a>
            </p>
          </div>

          {formState === "success" && (
            <p className="mt-4 rounded-2xl border border-white/10 bg-[#111111] p-4 text-sm text-white/70">
              Request sent. Motion4Frames will reach out soon.
            </p>
          )}

          {formState === "error" && (
            <p className="mt-4 rounded-2xl border border-[#E10600]/40 bg-[#111111] p-4 text-sm text-[#E10600]">
              {errorMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}