/**
 * Content integrity checks, run before `next build`.
 *
 * These are cross-file invariants TypeScript cannot express: `groundingPapers`
 * holds paper slugs as plain strings, so a typo compiles fine and silently
 * renders a practice-area page with no supporting research. That is exactly the
 * kind of failure nobody notices, because the page still looks finished.
 *
 * Parses the source text rather than importing it — these are .ts modules with
 * path aliases, and a regex read keeps this dependency-free.
 */
import { readFileSync } from "node:fs";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

const errors = [];
const research = read("src/content/research.ts");
const practice = read("src/content/practice-areas.ts");

const paperSlugs = new Set([...research.matchAll(/^\s{4}slug: "([^"]+)"/gm)].map((m) => m[1]));
const areaSlugs = [...practice.matchAll(/^\s{4}slug: "([^"]+)"/gm)].map((m) => m[1]);

if (paperSlugs.size === 0) errors.push("no paper slugs parsed from research.ts");
if (areaSlugs.length === 0) errors.push("no practice-area slugs parsed from practice-areas.ts");

// Every groundingPapers entry must resolve to a real paper.
for (const block of practice.matchAll(/groundingPapers: \[([^\]]*)\]/g)) {
  for (const [, slug] of block[1].matchAll(/"([^"]+)"/g)) {
    if (!paperSlugs.has(slug)) {
      errors.push(`practice-areas.ts references unknown paper slug: "${slug}"`);
    }
  }
}

// Slugs become URLs; duplicates would silently collide at build time.
const dupes = areaSlugs.filter((slug, i) => areaSlugs.indexOf(slug) !== i);
if (dupes.length) errors.push(`duplicate practice-area slugs: ${[...new Set(dupes)].join(", ")}`);

// The lead answer is the block most likely to be lifted verbatim by an answer
// engine. Too short says nothing; too long gets truncated mid-sentence.
for (const [, slug, lead] of practice.matchAll(
  /slug: "([^"]+)",[\s\S]{0,2000}?leadAnswer:\s*\n?\s*"((?:[^"\\]|\\.)*)"/g
)) {
  const words = lead.split(/\s+/).length;
  if (words < 35 || words > 85) {
    errors.push(`leadAnswer for "${slug}" is ${words} words; keep it between 35 and 85`);
  }
}

if (errors.length) {
  console.error("\ncontent check failed:\n");
  for (const error of errors) console.error(`  - ${error}`);
  console.error("");
  process.exit(1);
}

console.log(
  `content ok: ${paperSlugs.size} papers, ${areaSlugs.length} practice areas, all references resolve`
);
