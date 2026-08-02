import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FaqAccordion } from "@/components/faq-accordion";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, buildMetadata, faqSchema, practiceAreaSchema } from "@/lib/seo";
import {
  getPracticeArea,
  practiceAreas,
  type PracticeBlock
} from "@/src/content/practice-areas";
import { getPaper } from "@/src/content/research";
import { site } from "@/src/content/site";

export function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const area = getPracticeArea(params.slug);
  if (!area) {
    return buildMetadata(
      "Practice area not found",
      "This practice area does not exist.",
      `/expert-witness/${params.slug}`
    );
  }

  return buildMetadata(area.metaTitle, area.metaDescription, `/expert-witness/${area.slug}`, {
    keywords: area.keywords
  });
}

function Body({ blocks }: { blocks: readonly PracticeBlock[] }) {
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
        return (
          <p key={index} className="leading-8 text-brand-ink/85">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}

export default function PracticeAreaPage({ params }: { params: { slug: string } }) {
  const area = getPracticeArea(params.slug);
  if (!area) notFound();

  // Grounding papers are validated at build time by scripts/check-content.mjs,
  // so a missing slug fails the build rather than rendering an empty section.
  const papers = area.groundingPapers.map(getPaper).filter(Boolean);
  const others = practiceAreas.filter((item) => item.slug !== area.slug);

  return (
    <section className="section-space bg-[#ecebe8]/60">
      <div className="container-shell space-y-12">
        <Breadcrumbs
          trail={[
            { name: "Home", path: "/" },
            { name: "Expert Witness", path: "/expert-witness" },
            { name: area.navLabel, path: `/expert-witness/${area.slug}` }
          ]}
        />

        <header className="rounded-3xl border border-brand-ink/10 bg-white/85 px-8 py-12">
          <p className="text-sm uppercase tracking-[0.2em] text-brand-ocean">
            Expert Witness Practice Area
          </p>
          <h1 className="mt-2 text-4xl leading-tight md:text-5xl">{area.title}</h1>
          {/* Lead answer — direct definition sized for snippet/AI extraction. */}
          <p className="mt-5 max-w-4xl border-l-4 border-brand-accent pl-5 text-lg font-medium leading-8 text-brand-ink">
            {area.leadAnswer}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="primary-btn">
              Request a Consult
            </Link>
            <Link href="/expert-witness" className="secondary-btn">
              All Practice Areas
            </Link>
          </div>
        </header>

        <section className="rounded-3xl border border-brand-ink/10 bg-white/85 px-8 py-10">
          <h2 className="text-2xl">What these cases turn on</h2>
          <ul className="mt-6 space-y-3 leading-8 text-brand-ink/85">
            {area.questions.map((question) => (
              <li key={question} className="border-l-2 border-brand-ocean/30 pl-4">
                {question}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-3xl border border-brand-ink/10 bg-white/85 px-8 py-10">
          <h2 className="text-2xl">Analysis</h2>
          <Body blocks={area.body} />
        </section>

        <section className="rounded-3xl border border-brand-ink/10 bg-white/85 px-8 py-10">
          <h2 className="text-2xl">Methods applied</h2>
          <ul className="mt-6 list-disc space-y-2 pl-6 leading-8 text-brand-ink/85">
            {area.methods.map((method) => (
              <li key={method}>{method}</li>
            ))}
          </ul>
        </section>

        {area.engagements.length > 0 ? (
          <section className="rounded-3xl border border-brand-ink/10 bg-white/85 px-8 py-10">
            <h2 className="text-2xl">Relevant engagements</h2>
            <ul className="mt-6 space-y-4 leading-8 text-brand-ink/85">
              {area.engagements.map((engagement) => (
                <li key={engagement} className="border-l-2 border-brand-accent/40 pl-4">
                  {engagement}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {papers.length > 0 ? (
          <section>
            <h2 className="text-2xl">Peer-reviewed research grounding this work</h2>
            <p className="mt-3 max-w-3xl text-brand-ink/80">
              Published, citable research in this area — the verifiable basis for the analysis
              above.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {papers.map((paper) => (
                <article key={paper!.slug} className="subtle-card">
                  <p className="text-xs uppercase tracking-wide text-brand-ocean">
                    {paper!.venue} · {paper!.year}
                  </p>
                  <h3 className="mt-2 text-base font-semibold leading-snug">
                    <Link href={`/research/${paper!.slug}`} className="hover:text-brand-ocean">
                      {paper!.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-brand-ink/75">{paper!.keyFinding}</p>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        <section className="rounded-3xl border border-brand-ink/10 bg-white/85 px-8 py-10">
          <h2 className="text-2xl">Frequently asked questions</h2>
          <div className="mt-6">
            <FaqAccordion items={area.faq} />
          </div>
        </section>

        <section>
          <h2 className="text-2xl">Other practice areas</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {others.map((item) => (
              <article key={item.slug} className="subtle-card">
                <h3 className="text-base font-semibold leading-snug">
                  <Link href={`/expert-witness/${item.slug}`} className="hover:text-brand-ocean">
                    {item.navLabel}
                  </Link>
                </h3>
              </article>
            ))}
          </div>
        </section>

        <div className="rounded-xl border border-brand-ink/10 bg-white/70 p-6">
          <p className="text-sm text-brand-ink/80">{site.expertWitness.contactCta}</p>
          <Link href="/contact" className="secondary-btn mt-4">
            Request a Consult
          </Link>
        </div>
      </div>

      <JsonLd
        schema={[
          practiceAreaSchema(area),
          faqSchema(area.faq, `/expert-witness/${area.slug}`),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Expert Witness", path: "/expert-witness" },
            { name: area.navLabel, path: `/expert-witness/${area.slug}` }
          ])
        ]}
      />
    </section>
  );
}
