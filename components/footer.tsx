import Link from "next/link";
import { papersByNewest } from "@/src/content/research";
import { site } from "@/src/content/site";

/**
 * A full nav footer is the strongest internal-linking lever available on a site
 * this size: it puts every important URL one hop from every page, which helps
 * both crawl discovery and the way answer engines infer site structure.
 */
export function Footer() {
  const recentPapers = papersByNewest().slice(0, 4);

  return (
    <footer className="border-t border-brand-ink/10 bg-white/60 py-14">
      <div className="container-shell">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <p className="text-base font-semibold">Jonathan Hersh, PhD</p>
            <p className="mt-3 text-sm leading-7 text-brand-ink/75">
              Economist &middot; AI &amp; Labor &middot; Expert Witness
            </p>
            <a href={`mailto:${site.social.email}`} className="mt-3 inline-block text-sm underline">
              {site.social.email}
            </a>
          </div>

          <nav aria-label="Site">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-ink/60">Site</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {site.navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-brand-ink/80 hover:text-brand-ocean">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Recent research">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-ink/60">
              Recent research
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              {recentPapers.map((paper) => (
                <li key={paper.slug}>
                  <Link
                    href={`/research/${paper.slug}`}
                    className="line-clamp-2 text-brand-ink/80 hover:text-brand-ocean"
                  >
                    {paper.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/research" className="font-medium text-brand-ocean hover:underline">
                  All publications &rarr;
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Elsewhere">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-ink/60">
              Elsewhere
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={site.social.substack}
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand-ink/80 hover:text-brand-ocean"
                >
                  Artificially Optimistic
                </a>
              </li>
              <li>
                <a
                  href={site.social.x}
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand-ink/80 hover:text-brand-ocean"
                >
                  X (@jonathanhersh)
                </a>
              </li>
              <li>
                <a href="/cv.pdf" target="_blank" rel="noreferrer" className="text-brand-ink/80 hover:text-brand-ocean">
                  Curriculum Vitae (PDF)
                </a>
              </li>
              <li>
                <a href="/llms.txt" className="text-brand-ink/80 hover:text-brand-ocean">
                  llms.txt
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-brand-ink/10 pt-6">
          <p className="text-sm text-brand-ink/65">
            &copy; {new Date().getFullYear()} Jonathan Hersh, PhD
          </p>
        </div>
      </div>
    </footer>
  );
}
