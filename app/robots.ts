import type { MetadataRoute } from "next";
import { site } from "@/src/content/site";

/**
 * AI answer engines are named explicitly rather than left to the `*` rule.
 * Being explicit is a visibility signal, and it makes the policy reviewable:
 * both retrieval bots (fetch a page to answer a live query) and training bots
 * are allowed here. Training access builds background knowledge of the entity;
 * retrieval access is what produces citations today.
 *
 * To opt out of training while keeping citations, move GPTBot, Google-Extended,
 * Applebot-Extended, CCBot, and anthropic-ai into a disallow rule.
 */
const AI_CRAWLERS = [
  // OpenAI
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  // Anthropic
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  // Perplexity
  "PerplexityBot",
  "Perplexity-User",
  // Google / Microsoft AI surfaces
  "Google-Extended",
  "GoogleOther",
  // Meta
  "meta-externalagent",
  "FacebookBot",
  // Apple
  "Applebot",
  "Applebot-Extended",
  // Common Crawl — feeds many downstream models
  "CCBot",
  // Other assistants and indexers
  "Amazonbot",
  "cohere-ai",
  "Diffbot",
  "YouBot"
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/"
      },
      {
        userAgent: AI_CRAWLERS,
        allow: "/"
      }
    ],
    sitemap: `${site.metadata.baseUrl}/sitemap.xml`,
    host: site.metadata.baseUrl
  };
}
