import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactForm } from "@/components/contact-form";
import { FaqAccordion } from "@/components/faq-accordion";
import { JsonLd } from "@/components/json-ld";
import {
  breadcrumbSchema,
  buildMetadata,
  faqSchema,
  professionalServiceSchema,
  webPageSchema
} from "@/lib/seo";
import { practiceAreas } from "@/src/content/practice-areas";
import { pageSeo, site } from "@/src/content/site";

export const metadata = buildMetadata(
  pageSeo.expertWitness.title,
  pageSeo.expertWitness.description,
  "/expert-witness",
  {
    keywords: [
      "AI expert witness",
      "expert witness economist",
      "antitrust expert witness",
      "platform economics expert witness",
      "economic damages expert",
      "API access litigation",
      "algorithmic decision-making testimony"
    ]
  }
);

export default function ExpertWitnessPage() {
  return (
    <section className="section-space bg-[#ecebe8]/60">
      <div className="container-shell space-y-12">
        <Breadcrumbs
          trail={[
            { name: "Home", path: "/" },
            { name: "Expert Witness", path: "/expert-witness" }
          ]}
        />

        <header className="rounded-3xl border border-brand-ink/10 bg-white/85 px-8 py-12">
          <p className="text-sm uppercase tracking-[0.2em] text-brand-ocean">Jonathan Hersh, PhD</p>
          <h1 className="mt-2 text-4xl leading-tight md:text-6xl">{site.expertWitness.headline}</h1>
          {/* Lead answer — direct definition sized for snippet/AI extraction. */}
          <p className="mt-5 max-w-4xl border-l-4 border-brand-accent pl-5 text-lg font-medium leading-8 text-brand-ink">
            {site.expertWitness.leadAnswer}
          </p>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-brand-ink/85">{site.expertWitness.body}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="primary-btn">
              Request a Consult
            </Link>
            <Link href="/research" className="secondary-btn">
              Review Research
            </Link>
          </div>
        </header>

        {/* Practice areas — placed directly under the hero because these are
            the pages retaining counsel is actually looking for, and the hub
            page's job is to route them there quickly. */}
        <section className="rounded-3xl border border-brand-ink/10 bg-white/85 p-8 md:p-10">
          <h2 className="text-3xl md:text-4xl">Practice areas</h2>
          <p className="mt-3 max-w-3xl text-lg leading-8 text-brand-ink/80">
            Each area has a dedicated page covering the questions those matters turn on, the
            methods applied, and the peer-reviewed research behind the analysis.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {practiceAreas.map((area) => (
              <article
                key={area.slug}
                className="rounded-2xl border border-brand-ink/10 bg-[#ecebe8]/50 p-8"
              >
                <h3 className="text-2xl leading-tight">
                  <Link
                    href={`/expert-witness/${area.slug}`}
                    className="hover:text-brand-ocean"
                  >
                    {area.navLabel}
                  </Link>
                </h3>
                <p className="mt-3 text-base leading-7 text-brand-ink/80">{area.leadAnswer}</p>
                <Link
                  href={`/expert-witness/${area.slug}`}
                  className="mt-4 inline-block text-sm font-semibold text-brand-ocean hover:underline"
                >
                  {area.navLabel} detail →
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* Engagement Types */}
        <section className="rounded-3xl border border-brand-ink/10 bg-white/85 p-8 md:p-10">
          <h2 className="text-3xl md:text-4xl">What engagement types are available?</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {site.expertWitness.engagementTypes.map((type) => (
              <article key={type.title} className="subtle-card">
                <h3 className="text-xl font-semibold">{type.title}</h3>
                <p className="mt-3 text-sm leading-7 text-brand-ink/80">{type.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Litigation Domains */}
        <section className="rounded-3xl border border-brand-ink/10 bg-[#d8d8d8]/40 p-8 md:p-10">
          <h2 className="text-center text-4xl md:text-5xl">Which litigation domains are covered?</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {site.expertWitness.expertiseCards.map((card) => (
              <article key={card.title} className="rounded-2xl border border-brand-ink/10 bg-white/85 p-8">
                <h3 className="text-3xl leading-tight">{card.title}</h3>
                <p className="mt-4 text-lg leading-8 text-brand-ink/80">{card.description}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="grid gap-6 md:grid-cols-2">
          <section className="subtle-card">
            <h2 className="text-2xl">Primary Focus Areas</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-brand-ink/85">
              {site.expertWitness.areasOfTestimony.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="subtle-card">
            <h2 className="text-2xl">What deliverables are provided?</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-brand-ink/85">
              {site.expertWitness.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="subtle-card">
            <h2 className="text-2xl">Why retain Jonathan Hersh?</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-brand-ink/85">
              {site.expertWitness.whyMe.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="subtle-card">
            <h2 className="text-2xl">How does the engagement process work?</h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-brand-ink/85">
              {site.expertWitness.process.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </section>

          <section className="subtle-card">
            <h2 className="text-2xl">What matters is he typically retained for?</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-brand-ink/85">
              {site.expertWitness.retainedFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="subtle-card">
            <h2 className="text-2xl">What are his qualifications?</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-brand-ink/85">
              {site.expertWitness.qualifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="subtle-card">
            <h2 className="text-2xl">What should I know before reaching out?</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-brand-ink/85">
              {site.expertWitness.practicalInfo.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

        </div>

        <section>
          <h2 className="text-4xl leading-tight md:text-5xl">Frequently Asked Questions</h2>
          <p className="mt-4 max-w-5xl text-lg leading-relaxed text-brand-ink/80 md:text-2xl">
            Common questions about hiring an economist expert witness, including platform economics expert witness and AI labor economist expert witness matters.
          </p>
          <div className="mt-5">
            <FaqAccordion items={site.expertWitness.faq} />
          </div>
        </section>

        <section className="rounded-2xl border border-brand-ink/10 bg-white/85 p-8">
          <h2 className="text-3xl">Request a Consult</h2>
          <p className="mt-3 text-brand-ink/85">{site.expertWitness.contactCta}</p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </section>
        <p className="text-sm text-brand-ink/55">
          Last reviewed:{" "}
          <time dateTime={site.metadata.lastReviewed}>
            {new Date(`${site.metadata.lastReviewed}T00:00:00Z`).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
              timeZone: "UTC"
            })}
          </time>
        </p>
      </div>

      <JsonLd
        schema={[
          webPageSchema({
            path: "/expert-witness",
            name: pageSeo.expertWitness.title,
            description: pageSeo.expertWitness.description
          }),
          professionalServiceSchema(),
          faqSchema(site.expertWitness.faq, "/expert-witness"),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Expert Witness", path: "/expert-witness" }
          ])
        ]}
      />
    </section>
  );
}
