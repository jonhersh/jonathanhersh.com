import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, buildMetadata, webPageSchema } from "@/lib/seo";
import { pageSeo, site } from "@/src/content/site";

export const metadata = buildMetadata(pageSeo.blog.title, pageSeo.blog.description, "/blog", {
  keywords: [
    "Artificially Optimistic newsletter",
    "AI and work newsletter",
    "AI economics writing",
    "future of work analysis"
  ]
});

export default function BlogPage() {
  const blog = site.blogPage;

  return (
    <section className="section-space">
      <div className="container-shell space-y-10">
        <Breadcrumbs
          trail={[
            { name: "Home", path: "/" },
            { name: "Writing", path: "/blog" }
          ]}
        />

        <header className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl">Writing</h1>
          <p className="mt-2 text-lg font-semibold text-brand-ocean">{blog.newsletterName}</p>
          {/* Lead answer — states plainly what the newsletter is and who writes it. */}
          <p className="mt-6 max-w-3xl border-l-4 border-brand-accent pl-5 text-lg font-medium leading-8 text-brand-ink">
            {blog.leadAnswer}
          </p>
          <p className="mt-5 leading-8 text-brand-ink/85">{blog.intro}</p>
          <a href={site.social.substack} target="_blank" rel="noreferrer" className="primary-btn mt-6">
            Read on Substack
          </a>
        </header>

        <section>
          <h2 className="text-2xl">What the newsletter covers</h2>
          <ul className="mt-5 list-disc space-y-3 pl-5 leading-8 text-brand-ink/85">
            {blog.topics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="subtle-card">
            <h2 className="text-xl font-semibold">Peer-reviewed research</h2>
            <p className="mt-3 text-sm leading-7 text-brand-ink/80">
              The newsletter draws on published work in Management Science, PNAS, MIS Quarterly, and
              NeurIPS. Each paper has a page with its abstract and citation.
            </p>
            <Link href="/research" className="secondary-btn mt-4">
              Browse research
            </Link>
          </div>
          <div className="subtle-card">
            <h2 className="text-xl font-semibold">The book</h2>
            <p className="mt-3 text-sm leading-7 text-brand-ink/80">
              {site.bookPage.fullTitle} develops these arguments at length for workers, firms, and
              policymakers.
            </p>
            <Link href="/book" className="secondary-btn mt-4">
              About the book
            </Link>
          </div>
        </section>
      </div>

      <JsonLd
        schema={[
          webPageSchema({
            path: "/blog",
            name: pageSeo.blog.title,
            description: pageSeo.blog.description,
            type: "CollectionPage"
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Writing", path: "/blog" }
          ])
        ]}
      />
    </section>
  );
}
