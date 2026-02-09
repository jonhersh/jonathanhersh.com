import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { pageSeo, site } from "@/src/content/site";

export const metadata = buildMetadata(pageSeo.blog.title, pageSeo.blog.description, "/blog");

export default function BlogPage() {
  return (
    <section className="section-space">
      <div className="container-shell space-y-10">
        <header className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl">Writing</h1>
          <p className="mt-2 text-lg font-semibold text-brand-ocean">Artificially Optimistic</p>
          <p className="mt-5 leading-8 text-brand-ink/85">{site.blogPage.intro}</p>
          <a href={site.social.substack} target="_blank" rel="noreferrer" className="primary-btn mt-6">
            Read on Substack
          </a>
        </header>
      </div>
    </section>
  );
}
