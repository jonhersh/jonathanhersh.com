"use client";


const fields = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "firm", label: "Firm/Org", type: "text", required: false },
  { name: "phone", label: "Phone", type: "tel", required: false }
] as const;

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mwvnpvzg";

export function ContactForm() {
  return (
    <form
      className="subtle-card space-y-4"
      action={FORMSPREE_ENDPOINT}
      method="POST"
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

      {/* Honeypot. Formspree discards any submission where `_gotcha` is filled.
          Bots complete every field they find; humans never see this one. Hidden
          with inline styles rather than a utility class so it stays hidden even
          if the stylesheet fails to load — a visible honeypot would silently
          drop real inquiries. aria-hidden and tabIndex keep screen readers and
          keyboard navigation away from it. */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
      />

      <button type="submit" className="primary-btn">
        Send Inquiry
      </button>
    </form>
  );
}
