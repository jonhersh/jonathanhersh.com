import { ContactForm } from "@/components/contact-form";
import { buildMetadata } from "@/lib/seo";
import { pageSeo, site } from "@/src/content/site";

export const metadata = buildMetadata(pageSeo.contact.title, pageSeo.contact.description, "/contact");

export default function ContactPage() {
  return (
    <section className="section-space">
      <div className="container-shell grid gap-8 md:grid-cols-[0.45fr_0.55fr]">
        <aside className="space-y-4">
          <h1 className="text-4xl md:text-5xl">Contact</h1>
          <p className="leading-8 text-brand-ink/85">{site.contactPage.intro}</p>
          <p className="text-sm">
            Email: <a href={`mailto:${site.social.email}`} className="underline">{site.social.email}</a>
          </p>
          <p className="text-sm">
            Substack: <a href={site.social.substack} target="_blank" rel="noreferrer" className="underline">{site.social.substack}</a>
          </p>
          <p className="text-sm">
            X: <a href={site.social.x} target="_blank" rel="noreferrer" className="underline">@jonathanhersh</a>
          </p>
        </aside>

        <ContactForm />
      </div>
    </section>
  );
}
