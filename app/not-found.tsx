import Link from "next/link";
import { papersByNewest } from "@/src/content/research";
import { site } from "@/src/content/site";

export default function NotFound() {
  const recentPapers = papersByNewest().slice(0, 4);

  return (
    <section className="section-space">
      <div className="container-shell max-w-3xl">
        <p className="text-sm uppercase tracking-[0.2em] text-brand-ocean">404</p>
        <h1 className="mt-3 text-4xl md:text-5xl">Page not found</h1>
        <p className="mt-5 leading-8 text-brand-ink/85">
          That page doesn&apos;t exist, or it may have moved. Here&apos;s where to go instead.
        </p>

        <div className="mt-10 grid gap-10 sm:grid-cols-2">
          <nav aria-label="Main sections">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-ink/60">Sections</h2>
            <ul className="mt-4 space-y-2">
              {site.navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-brand-ink/85 hover:text-brand-ocean">
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
                  <Link href={`/research/${paper.slug}`} className="text-brand-ink/85 hover:text-brand-ocean">
                    {paper.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <Link href="/" className="primary-btn mt-10">
          Back to home
        </Link>
      </div>
    </section>
  );
}
