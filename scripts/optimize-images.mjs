#!/usr/bin/env node
/**
 * Compress everything in public/ down to display size.
 *
 * Why this exists: `output: "export"` in next.config.mjs forces
 * `images.unoptimized`, so Next does no resizing or format conversion at build
 * time — every byte in public/ ships to the browser exactly as committed. Source
 * assets here were full-resolution (one research figure was 2856x1900 / 7.3 MB
 * rendered into a ~530x176 box), which wrecks LCP on the research page.
 *
 * So we optimize at rest instead. Originals are preserved outside public/ in
 * research_papers/ and photos/ at the repo root, so this is reversible.
 *
 * Requires ImageMagick (`brew install imagemagick`). Re-runnable and idempotent:
 * files already at or below the target width are only re-encoded if that
 * actually saves bytes.
 *
 *   node scripts/optimize-images.mjs [--dry-run]
 */

import { execFileSync } from "node:child_process";
import { readdirSync, statSync, renameSync, unlinkSync, existsSync } from "node:fs";
import { join, extname, basename, dirname } from "node:path";

const DRY_RUN = process.argv.includes("--dry-run");
const PUBLIC_DIR = "public";

/**
 * Max rendered width per directory, doubled for high-DPI screens.
 * Research figures render ~530px wide, logos ~100px, headshots ~600px.
 */
const RULES = [
  { dir: "public/research", maxWidth: 1200, quality: 82 },
  { dir: "public/logos", maxWidth: 320, quality: 85 },
  { dir: "public/media", maxWidth: 1400, quality: 82 }
];

const RASTER = new Set([".png", ".jpg", ".jpeg", ".gif"]);

function sh(cmd, args) {
  return execFileSync(cmd, args, { encoding: "utf8" }).trim();
}

function width(file) {
  return Number(sh("magick", ["identify", "-format", "%[fx:w]", `${file}[0]`]));
}

function kb(bytes) {
  return `${(bytes / 1024).toFixed(1)} KB`;
}

function walk(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).flatMap((entry) => {
    const full = join(dir, entry);
    return statSync(full).isDirectory() ? walk(full) : [full];
  });
}

let totalBefore = 0;
let totalAfter = 0;
const changes = [];

for (const rule of RULES) {
  for (const file of walk(rule.dir)) {
    const ext = extname(file).toLowerCase();
    if (!RASTER.has(ext)) continue;

    const before = statSync(file).size;
    totalBefore += before;

    // Encode to WebP at the display width. Keeping the original extension would
    // be a lie about the bytes; instead we write a .webp sibling and rewrite the
    // references in src/content/site.ts and src/content/research.ts.
    const target = join(dirname(file), `${basename(file, ext)}.webp`);
    const w = width(file);
    const resize = w > rule.maxWidth ? ["-resize", `${rule.maxWidth}>`] : [];

    if (DRY_RUN) {
      changes.push({ file, target, before, after: null, w, resize: resize.length > 0 });
      totalAfter += before;
      continue;
    }

    // -auto-orient MUST come before -strip. Several source photos carry an EXIF
    // orientation tag (headshot.jpg is orientation 6, rotated 90 degrees);
    // stripping metadata first discards the tag and bakes in a sideways image.
    sh("magick", [
      `${file}[0]`,
      "-auto-orient",
      ...resize,
      "-strip",
      "-quality",
      String(rule.quality),
      target
    ]);
    const after = statSync(target).size;

    if (after >= before && ext === ".webp") {
      unlinkSync(target);
      totalAfter += before;
      continue;
    }

    totalAfter += after;
    changes.push({ file, target, before, after, w, resize: resize.length > 0 });
    if (file !== target) unlinkSync(file);
  }
}

for (const c of changes.sort((a, b) => b.before - a.before)) {
  const after = c.after === null ? "(dry run)" : kb(c.after);
  console.log(`${kb(c.before).padStart(10)} -> ${after.padStart(10)}  ${c.file}`);
}

console.log(
  `\n${changes.length} files  ${kb(totalBefore)} -> ${kb(totalAfter)}  ` +
    `(${(100 * (1 - totalAfter / totalBefore)).toFixed(1)}% smaller)`
);
if (DRY_RUN) console.log("Dry run — nothing written.");
