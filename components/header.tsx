"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/src/content/site";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-brand-ink/10 bg-brand-sand/95 backdrop-blur transition ${
        scrolled ? "shadow-nav" : ""
      }`}
    >
      <div className="container-shell flex h-20 items-center justify-between gap-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Jonathan Hersh, PhD
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
          {site.navItems.map((item) => (
            <Link key={item.label} href={item.href} className="text-sm font-medium text-brand-ink/85 hover:text-brand-ocean">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/media#contact" className="secondary-btn">
            Media Inquiries
          </Link>
          <Link href="/contact" className="primary-btn">
            Request a Consult
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex rounded-md border border-brand-ink/25 p-2 lg:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          <span className="sr-only">Menu</span>
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M3 5h14M3 10h14M3 15h14" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div id="mobile-menu" className="border-t border-brand-ink/10 bg-brand-sand lg:hidden">
          <div className="container-shell flex min-h-[70dvh] flex-col gap-1 py-6">
            {site.navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-md px-3 py-3 text-base font-medium hover:bg-brand-mist"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-auto space-y-2 py-4">
              <Link href="/media#contact" className="secondary-btn w-full" onClick={() => setIsOpen(false)}>
                Media Inquiries
              </Link>
              <Link href="/contact" className="primary-btn w-full" onClick={() => setIsOpen(false)}>
                Request a Consult
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
