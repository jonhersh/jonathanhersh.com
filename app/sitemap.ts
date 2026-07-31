import type { MetadataRoute } from "next";
import { papersByNewest } from "@/src/content/research";
import { site } from "@/src/content/site";

/**
 * Only canonical, content-bearing routes belong here. `/about` and `/expertise`
 * are redirect stubs (see public/_redirects) and render no content, so listing
 * them would point crawlers at empty pages.
 *
 * lastModified is pinned to the content review date rather than build time —
 * stamping `new Date()` on every build claims a freshness that isn't real and
 * teaches crawlers to ignore the signal.
 */
const routes = [
  { path: "", priority: 1.0, changeFrequency: "monthly" as const },
  { path: "/expert-witness", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/research", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/media", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/book", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/blog", priority: 0.6, changeFrequency: "weekly" as const },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" as const }
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = routes.map((route) => ({
    url: `${site.metadata.baseUrl}${route.path}`,
    lastModified: site.metadata.lastReviewed,
    changeFrequency: route.changeFrequency,
    priority: route.priority
  }));

  // Per-paper pages. These carry the abstracts and citations, so they are the
  // canonical citable unit for each publication — not the PDF.
  const paperRoutes = papersByNewest().map((paper) => ({
    url: `${site.metadata.baseUrl}/research/${paper.slug}`,
    lastModified: site.metadata.lastReviewed,
    changeFrequency: "yearly" as const,
    priority: 0.7
  }));

  return [...staticRoutes, ...paperRoutes];
}
