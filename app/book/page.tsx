import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { pageSeo, site } from "@/src/content/site";

export const metadata = buildMetadata(pageSeo.book.title, pageSeo.book.description, "/book");

const themes = [
  {
    title: "How AI Is Really Changing Work",
    description:
      "Understanding how AI and machine learning are fundamentally changing industries, business models, and competitive dynamics across the global economy."
  },
  {
    title: "Who Wins, Who Loses, and Why",
    description:
      "Exploring which jobs will be automated, which will be augmented, and what new opportunities will emerge in an AI-driven labor market."
  },
  {
    title: "The Skills That Will Matter Most",
    description:
      "Identifying the capabilities workers need to thrive in an AI-augmented workplace and strategies for continuous learning and adaptation."
  },
  {
    title: "A Roadmap for Workers and Companies",
    description:
      "Practical guidance for organizations implementing AI, managing workforce transitions, and building competitive advantage in the age of intelligent machines."
  },
  {
    title: "The New Social Contract",
    description:
      "Examining the broader societal implications of AI and the policy frameworks needed to ensure equitable and beneficial outcomes for all."
  },
  {
    title: "Humans + AI: A Better Way to Work",
    description:
      "Envisioning a future where humans and AI work together synergistically, combining the strengths of both to achieve unprecedented outcomes."
  }
];

const chapters = [
  {
    title: "What AI Can Actually Do",
    description:
      "Demystify artificial intelligence and machine learning with clear, accessible explanations of the core concepts and technologies driving the revolution."
  },
  {
    title: "Who\u2019s Getting Disrupted \u2014 and Who\u2019s Getting Ahead",
    description:
      "Understand the macroeconomic implications of AI adoption, from productivity gains to labor market disruptions and wealth distribution."
  },
  {
    title: "How to Make Yourself AI-Proof",
    description:
      "Actionable advice for individuals, organizations, and policymakers on preparing for and thriving in an AI-driven world."
  },
  {
    title: "Real-World Case Studies",
    description:
      "Learn from concrete examples of AI implementation across industries, including successes, failures, and lessons learned."
  }
];

export default function BookPage() {
  return (
    <section className="section-space">
      <div className="container-shell space-y-14">
        <header className="grid gap-10 md:grid-cols-[0.45fr_0.55fr] md:items-center">
          <div className="overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/media/ai_proof_jobs_image.png"
              alt="AI Proof Jobs book cover"
              width={600}
              height={900}
              className="h-auto w-full"
              priority
            />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-brand-ocean">Book</p>
            <h1 className="mt-2 text-4xl md:text-5xl">{site.bookPage.title}</h1>
            <p className="mt-5 text-lg leading-8 text-brand-ink/85">
              AI is transforming everything—but it doesn&apos;t have to leave workers behind. <em>AI Proof Jobs</em> breaks down which jobs are at risk, which are poised to grow, and what people can do today to build resilience in an AI-driven world. It&apos;s a handbook for anyone who wants to stay one step ahead of the machines.
            </p>
          </div>
        </header>

        <section className="rounded-2xl bg-[#e8e6e2] p-8 md:p-10">
          <div className="grid gap-6 md:grid-cols-3">
            {themes.map((theme) => (
              <article key={theme.title} className="text-center">
                <h3 className="text-xl font-semibold">{theme.title}</h3>
                <p className="mt-3 text-sm leading-7 text-brand-ink/80">{theme.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-brand-ink/10 bg-white/85 p-8 md:p-10">
          <h2 className="text-center text-3xl md:text-4xl">What You&apos;ll Learn</h2>
          <div className="mt-8 space-y-8">
            {chapters.map((chapter, index) => (
              <div key={chapter.title} className="flex gap-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-accent text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-xl font-semibold">{chapter.title}</h3>
                  <p className="mt-2 leading-7 text-brand-ink/80">{chapter.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="rounded-xl bg-brand-ink px-6 py-8 text-white">
          <p className="leading-7 text-white/90">For speaking, bulk orders, and early updates:</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href={site.social.substack} target="_blank" rel="noreferrer" className="primary-btn border border-white bg-white text-brand-ink hover:bg-brand-mist">
              Updates on Substack
            </a>
            <Link href="/contact" className="secondary-btn border-white text-white hover:bg-white/10">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
