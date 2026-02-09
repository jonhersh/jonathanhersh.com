"use client";

import { FormEvent } from "react";
import { site } from "@/src/content/site";

const fields = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "firm", label: "Firm/Org", type: "text", required: false },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "phone", label: "Phone", type: "tel", required: false },
  { name: "matterType", label: "Matter type", type: "text", required: true },
  { name: "jurisdiction", label: "Jurisdiction", type: "text", required: false },
  { name: "deadlines", label: "Deadlines", type: "text", required: false },
  { name: "needs", label: "What you need", type: "text", required: true },
  { name: "dataAvailable", label: "Data available (Y/N)", type: "text", required: false }
] as const;

export function ContactForm() {
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

  const mailtoFallback = (event: FormEvent<HTMLFormElement>) => {
    if (endpoint) {
      return;
    }

    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const pairs = Array.from(formData.entries()).map(([key, value]) => `${key}: ${value}`);
    const body = encodeURIComponent(pairs.join("\n"));
    const subject = encodeURIComponent("Expert Witness Inquiry");
    window.location.href = `mailto:${site.social.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form
      className="subtle-card space-y-4"
      action={endpoint || undefined}
      method={endpoint ? "POST" : undefined}
      onSubmit={mailtoFallback}
    >
      <div className="grid gap-4 md:grid-cols-2">
        {fields.map((field) => (
          <label key={field.name} className="text-sm font-medium text-brand-ink/90">
            {field.label}
            <input
              className="mt-1 w-full rounded-md border border-brand-ink/20 bg-white px-3 py-2"
              name={field.name}
              type={field.type}
              required={field.required}
            />
          </label>
        ))}
      </div>

      <label className="block text-sm font-medium text-brand-ink/90">
        Message
        <textarea
          name="message"
          required
          rows={5}
          className="mt-1 w-full rounded-md border border-brand-ink/20 bg-white px-3 py-2"
        />
      </label>

      <button type="submit" className="primary-btn">
        Send Inquiry
      </button>
    </form>
  );
}
