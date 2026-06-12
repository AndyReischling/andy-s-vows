"use client";

import { useState } from "react";
import SectionTitle from "./SectionTitle";

const RECIPIENT = "andyreischling601@gmail.com";

const initialState = {
  name: "",
  partner: "",
  date: "",
  email: "",
  story: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialState);

  const update =
    (field: keyof typeof initialState) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = () => {
    const subject = `Vows inquiry — ${form.name || "(no name)"}`;
    const body = [
      `Your name: ${form.name}`,
      `Partner's name: ${form.partner}`,
      `Wedding date: ${form.date}`,
      `Email: ${form.email}`,
      "",
      "Tell me about your relationship:",
      form.story,
    ].join("\n");

    const mailto = `mailto:${RECIPIENT}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  const fieldClasses =
    "w-full border border-periwinkle/40 bg-bone px-4 py-3 font-body text-lg text-ink placeholder:text-ink/40 focus:border-periwinkle";
  const labelClasses =
    "mb-2 block font-serif text-sm uppercase tracking-[0.2em] text-periwinkle";

  return (
    <section
      id="contact"
      className="bg-oxblood panel-paper relative overflow-hidden scroll-mt-4"
    >
      <div className="relative z-10 mx-auto max-w-2xl px-6 py-24 sm:px-10">
        <SectionTitle lead="Book Your" script="Interview" tone="onDark" />

        <p className="mt-8 text-center font-body text-lg leading-snug text-bone/85 sm:text-xl">
          Tell me a little about the two of you. I&apos;ll take it from there.
        </p>

        <div className="mt-12 space-y-6">
          <div>
            <label htmlFor="name" className={labelClasses}>
              Your name
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              value={form.name}
              onChange={update("name")}
              className={fieldClasses}
            />
          </div>

          <div>
            <label htmlFor="partner" className={labelClasses}>
              Partner&apos;s name
            </label>
            <input
              id="partner"
              type="text"
              value={form.partner}
              onChange={update("partner")}
              className={fieldClasses}
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="date" className={labelClasses}>
                Wedding date
              </label>
              <input
                id="date"
                type="date"
                value={form.date}
                onChange={update("date")}
                className={fieldClasses}
              />
            </div>
            <div>
              <label htmlFor="email" className={labelClasses}>
                Email
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={update("email")}
                className={fieldClasses}
              />
            </div>
          </div>

          <div>
            <label htmlFor="story" className={labelClasses}>
              Tell me about your relationship
            </label>
            <textarea
              id="story"
              rows={5}
              value={form.story}
              onChange={update("story")}
              className={`${fieldClasses} resize-y`}
            />
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="w-full border border-periwinkle bg-periwinkle px-9 py-4 font-serif text-lg font-medium uppercase tracking-[0.18em] text-oxblood transition-colors hover:bg-transparent hover:text-periwinkle"
          >
            Book your interview.
          </button>

          <p className="text-center font-body text-sm italic text-bone/70">
            This opens your email app with everything filled in — just hit send.
          </p>

          <p className="text-center font-body text-base text-bone/90">
            Or just email me:{" "}
            <a
              href={`mailto:${RECIPIENT}`}
              className="text-periwinkle underline decoration-periwinkle/60 underline-offset-4 hover:decoration-periwinkle"
            >
              {RECIPIENT}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
