import type { Paper } from "@/src/content/research";

/**
 * Copy-ready citations. These exist to make the work easy to cite correctly —
 * which is both a courtesy to researchers and a strong signal to answer engines,
 * which favor sources that present themselves as citable.
 */

type ParsedName = { given: string[]; family: string };

/** "Michael D. Smith" -> { given: ["Michael", "D."], family: "Smith" } */
function parseName(full: string): ParsedName {
  const parts = full.trim().split(/\s+/);
  if (parts.length === 1) {
    return { given: [], family: parts[0] };
  }
  return { given: parts.slice(0, -1), family: parts[parts.length - 1] };
}

function initials(given: string[]): string {
  return given
    .map((part) => (part.endsWith(".") ? part : `${part.charAt(0)}.`))
    .join(" ");
}

/** APA 7: Family, I. I., Family, I. I., & Family, I. I. */
function apaAuthors(authors: string[]): string {
  const formatted = authors.map((author) => {
    const { given, family } = parseName(author);
    return given.length ? `${family}, ${initials(given)}` : family;
  });

  if (formatted.length === 1) return formatted[0];
  if (formatted.length === 2) return `${formatted[0]}, & ${formatted[1]}`;
  return `${formatted.slice(0, -1).join(", ")}, & ${formatted[formatted.length - 1]}`;
}

export function apaCitation(paper: Paper): string {
  const authors = apaAuthors(paper.authors);
  const title = paper.title.replace(/\.$/, "");
  const tail = paper.publisherUrl ? ` ${paper.publisherUrl}` : "";
  return `${authors} (${paper.year}). ${title}. ${paper.venue}.${tail}`;
}

/** Stable key: first author family name + year + first meaningful title word. */
function bibtexKey(paper: Paper): string {
  const { family } = parseName(paper.authors[0] ?? "Hersh");
  const stopWords = new Set(["the", "a", "an", "of", "on", "in", "for", "from", "how", "and"]);
  const word =
    paper.title
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, "")
      .split(/\s+/)
      .find((w) => w.length > 3 && !stopWords.has(w)) ?? "paper";
  return `${family.toLowerCase()}${paper.year}${word}`;
}

export function bibtexCitation(paper: Paper): string {
  const authors = paper.authors
    .map((author) => {
      const { given, family } = parseName(author);
      return given.length ? `${family}, ${given.join(" ")}` : family;
    })
    .join(" and ");

  const lines = [
    `@article{${bibtexKey(paper)},`,
    `  title   = {${paper.title}},`,
    `  author  = {${authors}},`,
    `  journal = {${paper.venue}},`,
    `  year    = {${paper.year}}`
  ];

  if (paper.publisherUrl) {
    lines[lines.length - 1] += ",";
    lines.push(`  url     = {${paper.publisherUrl}}`);
  }

  lines.push("}");
  return lines.join("\n");
}
