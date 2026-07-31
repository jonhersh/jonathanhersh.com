"use client";

import { useState } from "react";

/**
 * The citation text renders server-side inside the <pre>, so it is present in
 * the static HTML for crawlers regardless of whether the copy button hydrates.
 */
export function CitationBlock({
  label,
  citation,
  mono = false
}: {
  label: string;
  citation: string;
  mono?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(citation);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (insecure context or denied) — the text is
      // selectable either way, so there is nothing to recover from.
    }
  }

  return (
    <div className="rounded-xl border border-brand-ink/10 bg-white/85 p-5">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-ocean">{label}</h3>
        <button
          type="button"
          onClick={copy}
          className="rounded-md border border-brand-ink/20 px-3 py-1 text-xs font-medium text-brand-ink/80 transition hover:bg-brand-mist"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre
        className={`mt-3 overflow-x-auto whitespace-pre-wrap break-words text-sm leading-7 text-brand-ink/85 ${
          mono ? "font-mono text-xs leading-6" : ""
        }`}
      >
        {citation}
      </pre>
    </div>
  );
}
