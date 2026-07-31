type FaqItem = {
  question: string;
  answer: string;
};

/**
 * Native <details> accordion. Answers are present in the server-rendered HTML
 * whether or not an item is open, so AI crawlers and search engines can extract
 * them. Keep it a server component — no JS required to read the content.
 */
export function FaqAccordion({ items }: { items: readonly FaqItem[] }) {
  return (
    <div className="space-y-5">
      {items.map((item) => (
        <details
          key={item.question}
          className="group overflow-hidden rounded-2xl border border-brand-ink/10 bg-[#f2f4f7] shadow-sm"
        >
          <summary className="flex w-full cursor-pointer items-center justify-between gap-3 px-6 py-7 text-left text-2xl font-semibold text-brand-ink marker:content-none [&::-webkit-details-marker]:hidden">
            <span>{item.question}</span>
            <span className="text-brand-ocean transition group-open:rotate-45" aria-hidden="true">
              +
            </span>
          </summary>
          <div className="border-t border-brand-ink/10 bg-white px-6 py-5">
            <p className="text-base leading-8 text-brand-ink/85">{item.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
