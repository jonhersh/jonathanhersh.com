import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { pageSeo, site } from "@/src/content/site";

export const metadata = buildMetadata(pageSeo.media.title, pageSeo.media.description, "/media");

export default function MediaPage() {
  return (
    <section className="section-space">
      <div className="container-shell space-y-10">
        {/* Header */}
        <header className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.2em] text-brand-ocean">Press Room</p>
          <h1 className="mt-2 text-4xl md:text-5xl">Media &amp; Press Resources</h1>
          <p className="mt-5 leading-8 text-brand-ink/85">{site.mediaPage.intro}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="#contact" className="primary-btn">Media Inquiries</Link>
            <Link href="#headshots" className="secondary-btn">Download Headshots</Link>
          </div>
        </header>

        {/* Topics */}
        <section className="subtle-card">
          <h2 className="text-2xl">Topics I Can Comment On</h2>
          <ul className="mt-4 grid gap-3 md:grid-cols-2">
            {site.mediaPage.topicsForComment.map((topic) => (
              <li key={topic} className="rounded-xl border border-brand-ink/10 bg-brand-sand px-4 py-3">
                {topic}
              </li>
            ))}
          </ul>
        </section>

        {/* Media Appearances */}
        <section>
          <h2 className="text-2xl">Media Appearances</h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {site.mediaPage.items.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-xl border border-brand-ink/10 bg-white shadow-sm">
                <div className="relative h-52 w-full">
                  <Image
                    src={item.image}
                    alt={`${item.outlet} image for ${item.title}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-3 p-6">
                  <p className="inline-flex rounded-full bg-brand-mist px-3 py-1 text-xs font-semibold text-brand-ocean">
                    {item.type}
                  </p>
                  <h3 className="text-3xl leading-tight">{item.title}</h3>
                  <p className="text-base font-medium text-brand-ink/80">{item.outlet}</p>
                  <p className="text-sm text-brand-ink/65">{item.date}</p>
                  <p className="text-sm leading-7 text-brand-ink/80">{item.description}</p>
                  {item.tags && (
                    <ul className="flex flex-wrap gap-2" aria-label="Tags">
                      {item.tags.map((tag) => (
                        <li key={tag} className="rounded-full border border-brand-ink/15 px-3 py-1 text-xs text-brand-ink/80">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.href.startsWith("/") ? (
                    <Link href={item.href} className="secondary-btn mt-2">
                      {item.ctaLabel ?? "View item"}
                    </Link>
                  ) : (
                    <a href={item.href} target="_blank" rel="noreferrer" className="secondary-btn mt-2">
                      {item.ctaLabel ?? "View item"}
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Research Highlights for Journalists */}
        <section className="subtle-card">
          <h2 className="text-2xl">Research Highlights for Journalists</h2>
          <div className="mt-6 space-y-6">
            {site.mediaPage.researchHighlightsForMedia.map((item) => (
              <div key={item.title} className="border-l-4 border-brand-accent pl-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-brand-ink/85"><strong>Finding:</strong> {item.finding}</p>
                <p className="mt-1 text-sm text-brand-ink/85"><strong>Why it matters:</strong> {item.whyItMatters}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Selected Quotes */}
        <section className="subtle-card">
          <h2 className="text-2xl">Selected Quotes &amp; Talking Points</h2>
          <div className="mt-6 space-y-6">
            {site.mediaPage.selectedQuotes.map((q) => (
              <blockquote key={q.quote} className="border-l-4 border-brand-ocean pl-4">
                <p className="text-lg italic leading-8 text-brand-ink/90">&ldquo;{q.quote}&rdquo;</p>
                <cite className="mt-2 block text-sm font-medium not-italic text-brand-ink/60">&mdash; {q.context}</cite>
              </blockquote>
            ))}
          </div>
        </section>

        {/* Bios */}
        <section className="grid gap-6 md:grid-cols-2">
          <div className="subtle-card">
            <h2 className="text-xl font-semibold">Short Bio (50 words)</h2>
            <p className="mt-3 leading-7 text-brand-ink/85">{site.bios.short}</p>
            <p className="mt-2 text-xs text-brand-ink/50">Copy-ready for publication.</p>
          </div>
          <div className="subtle-card">
            <h2 className="text-xl font-semibold">Full Bio</h2>
            <div className="mt-3 space-y-3 leading-7 text-brand-ink/85">
              {site.bios.long.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Downloadable Headshots */}
        <section id="headshots" className="subtle-card">
          <h2 className="text-2xl">Headshots &amp; Photos</h2>
          <p className="mt-2 text-sm text-brand-ink/60">Right-click to save, or contact for high-resolution versions.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {site.mediaPage.headshots.map((photo) => (
              <div key={photo.label} className="overflow-hidden rounded-xl border border-brand-ink/10">
                <Image src={photo.src} alt={photo.label} width={400} height={400} className="h-auto w-full object-cover" />
                <p className="p-3 text-center text-sm text-brand-ink/75">{photo.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Media Inquiry CTA */}
        <section id="contact" className="rounded-xl bg-brand-ink px-8 py-10 text-white">
          <h2 className="text-3xl">Media Inquiries</h2>
          <p className="mt-4 max-w-2xl leading-8 text-white/90">
            For interview requests, expert commentary, speaking invitations, or press inquiries, please get in touch.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="primary-btn border border-white bg-white text-brand-ink hover:bg-brand-mist">
              Contact
            </Link>
            <a href={`mailto:${site.social.email}`} className="secondary-btn border-white text-white hover:bg-white/15">
              {site.social.email}
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}
