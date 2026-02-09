import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { pageSeo, selectedResearchByNewest, site } from "@/src/content/site";

export const metadata = buildMetadata(pageSeo.home.title, pageSeo.home.description, "/");

export default function HomePage() {
  const featuredResearch = selectedResearchByNewest().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section id="top" className="section-space">
        <div className="container-shell grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-brand-ocean">Economist &middot; AI &amp; Labor &middot; Expert Witness</p>
            <h1 className="mt-3 text-4xl leading-tight md:text-6xl">{site.hero.title}</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-brand-ink/85">{site.hero.body}</p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-brand-ink/85">{site.hero.helpLine}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={site.hero.ctas.primary.href} className="primary-btn">
                {site.hero.ctas.primary.label}
              </Link>
              <Link href={site.hero.ctas.secondary.href} className="secondary-btn">
                {site.hero.ctas.secondary.label}
              </Link>
              <Link href={site.hero.ctas.tertiary.href} className="secondary-btn">
                {site.hero.ctas.tertiary.label}
              </Link>
            </div>
          </div>
          <Image
            src="/media/headshot.jpg"
            alt="Jonathan Hersh, PhD"
            width={600}
            height={750}
            className="h-auto w-full rounded-lg"
            priority
          />
        </div>
      </section>

      {/* Logos */}
      <section className="py-10">
        <div className="container-shell">
          <p className="text-center text-sm uppercase tracking-[0.2em] text-brand-ink/50">
            {site.logoRow.heading}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {site.logoRow.items.map((logo) => (
              <Image
                key={logo.name}
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={40}
                className="h-8 w-auto object-contain opacity-60"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Audience paths */}
      <section className="section-space">
        <div className="container-shell grid gap-10 md:grid-cols-2">
          {site.home.audienceCards.map((card) => (
            <div key={card.title}>
              <h2 className="text-2xl">{card.title}</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-brand-ink/85">
                {card.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <Link
                href={card.cta.href}
                className={`mt-6 ${card.title === "Expert Witness" ? "primary-btn" : "secondary-btn"}`}
              >
                {card.cta.label}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Research */}
      <section className="section-space">
        <div className="container-shell">
          <h2 className="text-2xl">Research</h2>
          <p className="mt-4 max-w-3xl leading-8 text-brand-ink/85">{site.home.research.body}</p>
          <div className="mt-8 space-y-6">
            {featuredResearch.map((item) => (
              <article key={item.title}>
                <p className="text-sm text-brand-ink/60">{item.venue} &middot; {item.year}</p>
                <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
              </article>
            ))}
          </div>
          <Link href="/research" className="secondary-btn mt-8">
            View All Research
          </Link>
        </div>
      </section>

      {/* Expert Witness */}
      <section className="section-space">
        <div className="container-shell">
          <h2 className="text-2xl">Expert Witness</h2>
          <p className="mt-4 max-w-3xl leading-8 text-brand-ink/85">
            Expert analysis and testimony in disputes involving AI systems, platform economics, API access, economic damages, and technology-driven market power. My opinions are grounded in methods accepted by courts and published in peer-reviewed journals.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/expert-witness" className="secondary-btn">
              Expert Witness Services
            </Link>
            <Link href="/contact" className="primary-btn">
              Request a Consult
            </Link>
          </div>
        </div>
      </section>

      {/* Media */}
      <section className="section-space">
        <div className="container-shell">
          <h2 className="text-2xl">Media</h2>
          <p className="mt-4 max-w-3xl leading-8 text-brand-ink/85">{site.home.media.body}</p>
          <Link href="/media" className="secondary-btn mt-6">
            Media &amp; Press Resources
          </Link>
        </div>
      </section>

      {/* Writing */}
      <section className="section-space">
        <div className="container-shell">
          <h2 className="text-2xl">Writing</h2>
          <p className="mt-1 text-sm text-brand-ink/60">Artificially Optimistic</p>
          <p className="mt-4 max-w-3xl leading-8 text-brand-ink/85">{site.blogPage.intro}</p>
          <a href={site.social.substack} target="_blank" rel="noreferrer" className="secondary-btn mt-6">
            Read on Substack
          </a>
        </div>
      </section>

      {/* Book */}
      <section className="section-space">
        <div className="container-shell">
          <h2 className="text-2xl">Book</h2>
          <p className="mt-1 text-sm text-brand-ink/60">{site.bookPage.title}</p>
          <p className="mt-4 max-w-3xl leading-8 text-brand-ink/85">{site.bookPage.intro}</p>
          <Link href="/book" className="secondary-btn mt-6">
            View Book Page
          </Link>
        </div>
      </section>

      {/* Contact */}
      <section className="section-space">
        <div className="container-shell">
          <h2 className="text-2xl">Contact</h2>
          <p className="mt-4 max-w-3xl leading-8 text-brand-ink/85">
            For expert witness matters, media inquiries, or academic collaboration. Conflicts check available upon request.
          </p>
          <Link href="/contact" className="primary-btn mt-6">
            Request a Consult
          </Link>
        </div>
      </section>
    </>
  );
}
