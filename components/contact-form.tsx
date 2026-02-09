"use client";


const fields = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "company", label: "Company", type: "text", required: false },
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

      <button type="submit" className="primary-btn">
        Send Inquiry
      </button>
    </form>
  );
}
