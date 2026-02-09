"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

export function FaqAccordion({ items }: { items: readonly FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-5">
      {items.map((item, index) => (
        <div
          key={item.question}
          className="overflow-hidden rounded-2xl border border-brand-ink/10 bg-[#f2f4f7] shadow-sm"
        >
          <button
            type="button"
            className="flex w-full items-center justify-between gap-3 px-6 py-7 text-left text-2xl font-semibold text-brand-ink"
            onClick={() => setOpenIndex((current) => (current === index ? null : index))}
            aria-expanded={openIndex === index}
            aria-controls={`faq-panel-${index}`}
          >
            <span>{item.question}</span>
            <span
              className={`text-brand-ocean transition ${openIndex === index ? "rotate-45" : ""}`}
              aria-hidden="true"
            >
              +
            </span>
          </button>
          {openIndex === index && (
            <div id={`faq-panel-${index}`} className="border-t border-brand-ink/10 bg-white px-6 py-5">
              <p className="text-base leading-8 text-brand-ink/85">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
