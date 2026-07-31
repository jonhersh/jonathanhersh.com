import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CitationBlock } from "@/components/citation-block";
import { JsonLd } from "@/components/json-ld";
import { apaCitation, bibtexCitation } from "@/lib/citation";
import { breadcrumbSchema, buildMetadata, scholarlyArticleSchema } from "@/lib/seo";
import { getPaper, papers, papersByNewest, type AbstractBlock } from "@/src/content/research";

export function generateStaticParams() {
  return papers.map((paper) => ({ slug: paper.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const paper = getPaper(params.slug);
  if (!paper) {
    return buildMetadata("Paper not found", "This paper does not exist.", `/research/${params.slug}`);
  }

  return buildMetadata(
    `${paper.title} | Jonathan Hersh, PhD`,
    // Prefer the curated one-sentence finding; it reads better as a SERP snippet
    // than the opening line of the abstract.
    `${paper.keyFinding} Published in ${paper.venue} (${paper.year}).`,
    `/research/${paper.slug}`,
    {
      type: "article",
      keywords: [paper.venue, ...paper.title.split(/[\s:,]+/).filter((w) => w.length > 5)]
    }
  );
}

function AbstractBody({ blocks }: { blocks: readonly AbstractBlock[] }) {
  return (
    <div className="mt-6 space-y-5">
      {blocks.map((block, index) => {
        if (block.type === "h") {
          return (
            <h3 key={index} className="text-xl font-semibold text-brand-ink">
              {block.text}
            </h3>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={index} className="list-disc space-y-2 pl-6 leading-8 text-brand-ink/85">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }
        if (block.type === "ol") {
          return (
            <ol key={index} className="list-decimal space-y-2 pl-6 leading-8 text-brand-ink/85">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          );
        }
        return (
          <p key={index} className="leading-8 text-brand-ink/85">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}

export default function PaperPage({ params }: { params: { slug: string } }) {
  const paper = getPaper(params.slug);
  if (!paper) notFound();

  const related = papersByNewest()
    .filter((item) => item.slug !== paper.slug)
    .slice(0, 3);

  return (
    <section className="section-space">
      <div className="container-shell max-w-4xl space-y-10">
        <Breadcrumbs
          trail={[
            { name: "Home", path: "/" },
            { name: "Research", path: "/research" },
            { name: paper.title, path: `/research/${paper.slug}` }
          ]}
        />

        <header>
          <p className="text-sm uppercase tracking-[0.2em] text-brand-ocean">{paper.venue}</p>
          <h1 className="mt-3 text-3xl leading-tight md:text-4xl">{paper.title}</h1>
          <p className="mt-4 text-sm text-brand-ink/70">
            {paper.authors.join(" · ")} &middot;{" "}
            <time dateTime={paper.datePublished}>{paper.year}</time>
          </p>

          {/* Lead answer — the extractable one-sentence takeaway. */}
          <p className="mt-6 border-l-4 border-brand-accent pl-5 text-lg font-medium leading-8 text-brand-ink">
            {paper.keyFinding}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {paper.publisherUrl && (
              <a href={paper.publisherUrl} target="_blank" rel="noreferrer" className="primary-btn">
                Read the published version
              </a>
            )}
            <a href={paper.pdfPath} target="_blank" rel="noreferrer" className="secondary-btn">
              Download PDF
            </a>
          </div>
        </header>

        <section>
          <h2 className="text-2xl">Abstract</h2>
          <AbstractBody blocks={paper.abstract} />
        </section>

        <section>
          <h2 className="text-2xl">How to cite this paper</h2>
          <div className="mt-6 space-y-6">
            <CitationBlock label="APA" citation={apaCitation(paper)} />
            <CitationBlock label="BibTeX" citation={bibtexCitation(paper)} mono />
          </div>
        </section>

        <section>
          <h2 className="text-2xl">Publication details</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
              <tbody>
                <tr className="border-b border-brand-ink/10 align-top">
                  <th scope="row" className="w-44 py-3 pr-6 font-semibold">Venue</th>
                  <td className="py-3 text-brand-ink/85">{paper.venue}</td>
                </tr>
                <tr className="border-b border-brand-ink/10 align-top">
                  <th scope="row" className="py-3 pr-6 font-semibold">Year</th>
                  <td className="py-3 text-brand-ink/85">{paper.year}</td>
                </tr>
                <tr className="border-b border-brand-ink/10 align-top">
                  <th scope="row" className="py-3 pr-6 font-semibold">Authors</th>
                  <td className="py-3 text-brand-ink/85">{paper.authors.join(", ")}</td>
                </tr>
                {paper.publisherUrl && (
                  <tr className="border-b border-brand-ink/10 align-top">
                    <th scope="row" className="py-3 pr-6 font-semibold">Published version</th>
                    <td className="py-3">
                      <a href={paper.publisherUrl} target="_blank" rel="noreferrer" className="underline break-all">
                        {paper.publisherUrl}
                      </a>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl">Related research</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {related.map((item) => (
              <article key={item.slug} className="subtle-card">
                <p className="text-xs uppercase tracking-wide text-brand-ocean">{item.venue}</p>
                <h3 className="mt-2 text-base font-semibold leading-snug">
                  <Link href={`/research/${item.slug}`} className="hover:text-brand-ocean">
                    {item.title}
                  </Link>
                </h3>
              </article>
            ))}
          </div>
        </section>

        <div className="rounded-xl border border-brand-ink/10 bg-white/70 p-6">
          <p className="text-sm text-brand-ink/80">
            Interested in applying this work to active litigation or policy questions?
          </p>
          <Link href="/contact" className="secondary-btn mt-4">
            Request a Consult
          </Link>
        </div>
      </div>

      <JsonLd
        schema={[
          scholarlyArticleSchema(paper, { full: true }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Research", path: "/research" },
            { name: paper.title, path: `/research/${paper.slug}` }
          ])
        ]}
      />
    </section>
  );
}
