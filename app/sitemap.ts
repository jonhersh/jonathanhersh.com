import type { MetadataRoute } from "next";
import { getAllBlogPosts } from "@/lib/blog";
import { site } from "@/src/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/research", "/expert-witness", "/media", "/blog", "/book", "/contact"];

  const staticRoutes = routes.map((route) => ({
    url: `${site.metadata.baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8
  }));

  const blogRoutes = getAllBlogPosts().map((post) => ({
    url: `${site.metadata.baseUrl}/blog/${post.slug}`,
    lastModified: post.date || new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  return [...staticRoutes, ...blogRoutes];
}
