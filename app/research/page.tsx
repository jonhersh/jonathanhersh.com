import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { pageSeo, selectedResearchByNewest, site } from "@/src/content/site";

export const metadata = buildMetadata(pageSeo.research.title, pageSeo.research.description, "/research");

export default function ResearchPage() {
  const researchItems = selectedResearchByNewest();
  const paperKeys: readonly string[] = site.researchPage.litigationRelevant.paperKeys;
  const litigationPapers = researchItems.filter((item) =>
    paperKeys.includes(item.title)
  );

  return (
    <section className="section-space">
      <div className="container-shell space-y-10">
        <header className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl">Research</h1>
          <p className="mt-5 leading-8 text-brand-ink/85">{site.researchPage.description}</p>
          <Link href="/cv.pdf" className="primary-btn mt-6">
            Download CV
          </Link>
        </header>

        {/* Selected Work Relevant to Litigation */}
        <section>
          <h2 className="text-2xl">Selected Research</h2>
          <p className="mt-2 text-sm leading-7 text-brand-ink/75">{site.researchPage.litigationRelevant.description}</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {litigationPapers.map((item) => (
              <article key={item.title} className="subtle-card">
                <p className="text-xs uppercase tracking-wide text-brand-ocean">{item.venue}</p>
                <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-brand-ink/80">{item.summary}</p>
                <a href={item.href} target="_blank" rel="noreferrer" className="secondary-btn mt-3">
                  Read Paper
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* Media-Ready Summaries */}
        <section className="rounded-2xl bg-brand-mist p-8">
          <h2 className="text-2xl">{site.researchPage.mediaReadySummaries.heading}</h2>
          <p className="mt-2 text-sm leading-7 text-brand-ink/75">{site.researchPage.mediaReadySummaries.description}</p>
          <div className="mt-6 space-y-6">
            {site.researchPage.mediaReadySummaries.items.map((item) => (
              <div key={item.paper} className="border-l-4 border-brand-accent pl-4">
                <h3 className="text-lg font-semibold">{item.paper}</h3>
                <p className="mt-1 text-sm"><strong>Finding:</strong> {item.finding}</p>
                <p className="mt-1 text-sm"><strong>Why it matters:</strong> {item.whyItMatters}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Research Interests */}
        <section>
          <h2 className="text-2xl">Research Interests</h2>
          <ul className="mt-4 grid gap-3 md:grid-cols-2">
            {site.researchPage.researchInterests.map((item) => (
              <li key={item} className="subtle-card">
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Publications */}
        <section>
          <h2 className="text-2xl">Publications &amp; Working Papers</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {researchItems.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-xl border border-brand-ink/10 bg-white shadow-sm">
                <div className="relative h-44 w-full">
                  <Image
                    src={item.image}
                    alt={`Preview image for ${item.title}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="inline-flex rounded-full bg-brand-mist px-3 py-1 text-xs font-semibold tracking-wide text-brand-ocean">
                    {item.venue}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold leading-snug">{item.title}</h3>
                  <p className="mt-2 text-sm font-medium text-brand-ink/65">{item.year}</p>
                  <p className="mt-3 text-sm leading-7 text-brand-ink/80">{item.summary}</p>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="secondary-btn mt-5"
                  >
                    Read paper (PDF)
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="rounded-xl border border-brand-ink/10 bg-white/70 p-6">
          <p className="text-sm text-brand-ink/80">Interested in applying this work to active litigation or policy questions?</p>
          <Link href="/contact" className="secondary-btn mt-4">
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
