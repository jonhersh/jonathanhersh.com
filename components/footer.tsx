import Link from "next/link";
import { site } from "@/src/content/site";

export function Footer() {
  return (
    <footer className="border-t border-brand-ink/10 bg-white/60 py-10">
      <div className="container-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-brand-ink/75">© {new Date().getFullYear()} Jonathan Hersh, PhD</p>
        <div className="flex flex-wrap items-center gap-5 text-sm">
          <Link href="/contact" className="hover:text-brand-ocean">
            Contact
          </Link>
          <a href={site.social.substack} target="_blank" rel="noreferrer" className="hover:text-brand-ocean">
            Substack
          </a>
          <a href={site.social.x} target="_blank" rel="noreferrer" className="hover:text-brand-ocean">
            X (@jonathanhersh)
          </a>
        </div>
      </div>
    </footer>
  );
}
