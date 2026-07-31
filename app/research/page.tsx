import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, buildMetadata, researchListSchema, webPageSchema } from "@/lib/seo";
import { papersByNewest } from "@/src/content/research";
import { pageSeo, site } from "@/src/content/site";

export const metadata = buildMetadata(pageSeo.research.title, pageSeo.research.description, "/research", {
  keywords: [
    "AI economics research",
    "labor market research",
    "platform economics",
    "applied machine learning",
    "satellite imagery poverty mapping",
    "peer-reviewed economics publications"
  ]
});

export default function ResearchPage() {
  const researchItems = papersByNewest();
  const paperSlugs: readonly string[] = site.researchPage.litigationRelevant.paperSlugs;
  const litigationPapers = researchItems.filter((item) => paperSlugs.includes(item.slug));

  return (
    <section className="section-space">
      <div className="container-shell space-y-10">
        <Breadcrumbs
          trail={[
            { name: "Home", path: "/" },
            { name: "Research", path: "/research" }
          ]}
        />

        <header className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl">Research</h1>
          <p className="mt-5 leading-8 text-brand-ink/85">{site.researchPage.description}</p>
          <a href="/cv.pdf" target="_blank" rel="noreferrer" className="primary-btn mt-6">
            Download CV
          </a>
        </header>

        {/* Selected Work Relevant to Litigation */}
        <section>
          <h2 className="text-2xl">Selected Research</h2>
          <p className="mt-2 text-sm leading-7 text-brand-ink/75">{site.researchPage.litigationRelevant.description}</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {litigationPapers.map((item) => (
              <article key={item.slug} className="subtle-card">
                <p className="text-xs uppercase tracking-wide text-brand-ocean">{item.venue}</p>
                <h3 className="mt-1 text-lg font-semibold">
                  <Link href={`/research/${item.slug}`} className="hover:text-brand-ocean">
                    {item.title}
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-7 text-brand-ink/80">{item.keyFinding}</p>
                <Link href={`/research/${item.slug}`} className="secondary-btn mt-3">
                  Read summary
                </Link>
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
              <article key={item.slug} className="overflow-hidden rounded-xl border border-brand-ink/10 bg-white shadow-sm">
                <Link href={`/research/${item.slug}`} className="block">
                  <div className="relative h-44 w-full">
                    <Image
                      src={item.imagePath}
                      alt={`Figure from ${item.title}`}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </Link>
                <div className="p-6">
                  <p className="inline-flex rounded-full bg-brand-mist px-3 py-1 text-xs font-semibold tracking-wide text-brand-ocean">
                    {item.venue}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold leading-snug">
                    <Link href={`/research/${item.slug}`} className="hover:text-brand-ocean">
                      {item.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm font-medium text-brand-ink/65">{item.year}</p>
                  <p className="mt-3 text-sm leading-7 text-brand-ink/80">{item.keyFinding}</p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <Link href={`/research/${item.slug}`} className="secondary-btn">
                      Abstract &amp; citation
                    </Link>
                    <a href={item.pdfPath} target="_blank" rel="noreferrer" className="secondary-btn">
                      PDF
                    </a>
                  </div>
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

      <JsonLd
        schema={[
          webPageSchema({
            path: "/research",
            name: pageSeo.research.title,
            description: pageSeo.research.description,
            type: "CollectionPage"
          }),
          researchListSchema(researchItems),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Research", path: "/research" }
          ])
        ]}
      />
    </section>
  );
}
