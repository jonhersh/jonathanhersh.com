import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { FaqAccordion } from "@/components/faq-accordion";
import { buildMetadata, professionalServiceSchema } from "@/lib/seo";
import { pageSeo, site } from "@/src/content/site";

export const metadata = buildMetadata(pageSeo.expertWitness.title, pageSeo.expertWitness.description, "/expert-witness");

export default function ExpertWitnessPage() {
  return (
    <section className="section-space bg-[#ecebe8]/60">
      <div className="container-shell space-y-12">
        <header className="rounded-3xl border border-brand-ink/10 bg-white/85 px-8 py-12">
          <p className="text-sm uppercase tracking-[0.2em] text-brand-ocean">Jonathan Hersh, PhD</p>
          <h1 className="mt-2 text-4xl leading-tight md:text-6xl">{site.expertWitness.headline}</h1>
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

        {/* Engagement Types */}
        <section className="rounded-3xl border border-brand-ink/10 bg-white/85 p-8 md:p-10">
          <h2 className="text-3xl md:text-4xl">Engagement Types</h2>
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
          <h2 className="text-center text-4xl md:text-5xl">Litigation Domains</h2>
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
            <h2 className="text-2xl">Deliverables</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-brand-ink/85">
              {site.expertWitness.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="subtle-card">
            <h2 className="text-2xl">Why Retain Me</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-brand-ink/85">
              {site.expertWitness.whyMe.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="subtle-card">
            <h2 className="text-2xl">Engagement Process</h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-brand-ink/85">
              {site.expertWitness.process.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
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
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema()) }}
      />
    </section>
  );
}
