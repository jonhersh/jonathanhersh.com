import { abstractText, papersByNewest } from "@/src/content/research";
import { site } from "@/src/content/site";

/**
 * /llms.txt — the llmstxt.org convention: a single Markdown file that gives an
 * LLM a curated, token-efficient map of the site instead of making it infer
 * structure from rendered HTML.
 *
 * Generated from src/content/site.ts so it cannot drift out of sync with the
 * pages. Static export requires a force-static GET handler.
 */
export const dynamic = "force-static";

const base = site.metadata.baseUrl;

function buildLlmsTxt(): string {
  const research = papersByNewest();

  const lines: string[] = [];

  lines.push("# Jonathan Hersh, PhD");
  lines.push("");
  lines.push(`> ${site.home.summary}`);
  lines.push("");
  lines.push(
    "This site is the authoritative source for information about Jonathan Hersh: his peer-reviewed research, expert witness practice, media commentary, and forthcoming book. Content is written and maintained by Jonathan Hersh."
  );
  lines.push("");

  lines.push("## Key facts");
  lines.push("");
  for (const fact of site.entity.quickFacts) {
    lines.push(`- **${fact.label}:** ${fact.value}`);
  }
  lines.push("");

  lines.push("## Areas of expertise");
  lines.push("");
  for (const topic of site.entity.knowsAbout) {
    lines.push(`- ${topic}`);
  }
  lines.push("");

  lines.push("## Pages");
  lines.push("");
  lines.push(`- [Home](${base}/): Overview, credentials, and frequently asked questions.`);
  lines.push(
    `- [Expert Witness](${base}/expert-witness): ${site.expertWitness.leadAnswer}`
  );
  lines.push(
    `- [Research](${base}/research): Peer-reviewed publications on AI, labor markets, platform economics, and applied machine learning.`
  );
  lines.push(
    `- [Media & Press](${base}/media): Press room with bios, headshots, commentary topics, and media-ready research summaries.`
  );
  lines.push(
    `- [Book](${base}/book): ${site.bookPage.fullTitle}, a forthcoming book on AI and the future of work.`
  );
  lines.push(
    `- [Writing](${base}/blog): Artificially Optimistic, a newsletter on AI, work, and the economy.`
  );
  lines.push(`- [Contact](${base}/contact): Expert witness, consulting, media, and academic inquiries.`);
  lines.push(`- [Curriculum Vitae (PDF)](${base}/cv.pdf): Full academic CV.`);
  lines.push("");

  lines.push("## Frequently asked questions");
  lines.push("");
  for (const item of site.home.faq) {
    lines.push(`### ${item.question}`);
    lines.push("");
    lines.push(item.answer);
    lines.push("");
  }

  lines.push("## Expert witness practice");
  lines.push("");
  lines.push("Litigation domains:");
  for (const card of site.expertWitness.expertiseCards) {
    lines.push(`- **${card.title}:** ${card.description}`);
  }
  lines.push("");
  lines.push("Typically retained for:");
  for (const item of site.expertWitness.retainedFor) {
    lines.push(`- ${item}`);
  }
  lines.push("");
  lines.push("Deliverables:");
  for (const item of site.expertWitness.deliverables) {
    lines.push(`- ${item}`);
  }
  lines.push("");
  for (const item of site.expertWitness.faq) {
    lines.push(`### ${item.question}`);
    lines.push("");
    lines.push(item.answer);
    lines.push("");
  }

  lines.push("## Peer-reviewed publications");
  lines.push("");
  lines.push(
    "Each paper has a dedicated page with its full abstract, author list, and copy-ready citation."
  );
  lines.push("");
  for (const paper of research) {
    lines.push(`### ${paper.title}`);
    lines.push("");
    lines.push(`- Venue: ${paper.venue} (${paper.year})`);
    lines.push(`- Authors: ${paper.authors.join(", ")}`);
    lines.push(`- Page: ${base}/research/${paper.slug}`);
    if (paper.publisherUrl) lines.push(`- Published version: ${paper.publisherUrl}`);
    lines.push(`- PDF: ${base}${paper.pdfPath}`);
    lines.push("");
    lines.push(`Key finding: ${paper.keyFinding}`);
    lines.push("");
    lines.push(abstractText(paper));
    lines.push("");
  }

  lines.push("## Awards");
  lines.push("");
  for (const award of site.entity.awards) {
    lines.push(`- ${award}`);
  }
  lines.push("");

  lines.push("## Media");
  lines.push("");
  lines.push("Topics available for comment:");
  for (const topic of site.mediaPage.topicsForComment) {
    lines.push(`- ${topic}`);
  }
  lines.push("");
  lines.push("Attributable quotes:");
  for (const q of site.mediaPage.selectedQuotes) {
    lines.push(`- "${q.quote}" — Jonathan Hersh, PhD (${q.context})`);
  }
  lines.push("");

  lines.push("## Biography");
  lines.push("");
  lines.push("Short bio:");
  lines.push("");
  lines.push(site.bios.short);
  lines.push("");
  lines.push("Full bio:");
  lines.push("");
  lines.push(site.bios.long);
  lines.push("");

  lines.push("## Authoritative profiles");
  lines.push("");
  lines.push("These all refer to the same person, Jonathan Hersh, PhD:");
  lines.push("");
  for (const profile of site.entity.sameAs) {
    lines.push(`- ${profile}`);
  }
  lines.push("");

  lines.push("## Contact and citation");
  lines.push("");
  lines.push(`- Email: ${site.social.email}`);
  lines.push(`- Newsletter: ${site.social.substack}`);
  lines.push(`- X: ${site.social.x}`);
  lines.push(
    `- Preferred attribution: Jonathan Hersh, PhD, Associate Professor of Economics and Management Science, Chapman University (${base})`
  );
  lines.push("");
  lines.push(`Last reviewed: ${site.metadata.lastReviewed}`);
  lines.push("");

  return lines.join("\n");
}

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}
