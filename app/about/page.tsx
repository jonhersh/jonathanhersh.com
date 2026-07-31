import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FaqAccordion } from "@/components/faq-accordion";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, buildMetadata, faqSchema, webPageSchema } from "@/lib/seo";
import { pageSeo, site } from "@/src/content/site";

export const metadata = buildMetadata(pageSeo.about.title, pageSeo.about.description, "/about", {
  keywords: [
    "Jonathan Hersh economist",
    "Chapman University economics professor",
    "AI labor economist",
    "machine learning economist",
    "expert witness economist biography"
  ]
});

export default function AboutPage() {
  const about = site.aboutPage;

  return (
    <section className="section-space">
      <div className="container-shell space-y-12">
        <Breadcrumbs
          trail={[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" }
          ]}
        />

        <header className="grid gap-10 md:grid-cols-[1.25fr_0.75fr] md:items-start">
          <div>
            <h1 className="text-4xl md:text-5xl">{about.title}</h1>
            {/* Lead answer — the extractable "who is" definition. */}
            <p className="mt-6 max-w-3xl border-l-4 border-brand-accent pl-5 text-lg font-medium leading-8 text-brand-ink">
              {about.leadAnswer}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="primary-btn">
                Request a Consult
              </Link>
              <a href="/cv.pdf" target="_blank" rel="noreferrer" className="secondary-btn">
                Download CV
              </a>
            </div>
          </div>
          <Image
            src="/media/headshot.webp"
            alt="Jonathan Hersh, PhD"
            width={1080}
            height={1616}
            sizes="(min-width: 768px) 33vw, 100vw"
            className="h-auto w-full rounded-lg"
            priority
          />
        </header>

        <section>
          <h2 className="text-2xl">Biography</h2>
          <div className="mt-5 max-w-3xl space-y-4 leading-8 text-brand-ink/85">
            {site.bios.long.split("\n\n").map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl">Education</h2>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
              <caption className="sr-only">Education history for Jonathan Hersh, PhD</caption>
              <tbody>
                {about.education.map((item) => (
                  <tr key={item.credential} className="border-b border-brand-ink/10 align-top">
                    <th scope="row" className="w-56 py-3 pr-6 font-semibold text-brand-ink">
                      {item.credential}
                    </th>
                    <td className="py-3 leading-7 text-brand-ink/85">{item.institution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl">Appointments &amp; experience</h2>
          <div className="mt-6 space-y-5">
            {about.appointments.map((item) => (
              <div key={`${item.role}-${item.org}`} className="border-l-4 border-brand-ocean pl-4">
                <h3 className="text-lg font-semibold">{item.role}</h3>
                <p className="text-sm font-medium text-brand-ink/70">{item.org}</p>
                <p className="mt-1 text-sm leading-7 text-brand-ink/80">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl">Recognition</h2>
          <ul className="mt-5 list-disc space-y-3 pl-5 leading-8 text-brand-ink/85">
            {about.recognition.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl">Research areas</h2>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {site.researchPage.researchInterests.map((item) => (
              <li key={item} className="subtle-card">
                {item}
              </li>
            ))}
          </ul>
          <Link href="/research" className="secondary-btn mt-6">
            View all research
          </Link>
        </section>

        <section>
          <h2 className="text-2xl">Frequently Asked Questions</h2>
          <div className="mt-6">
            <FaqAccordion items={about.faq} />
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
            path: "/about",
            name: pageSeo.about.title,
            description: pageSeo.about.description,
            type: "AboutPage"
          }),
          faqSchema(about.faq, "/about"),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" }
          ])
        ]}
      />
    </section>
  );
}
