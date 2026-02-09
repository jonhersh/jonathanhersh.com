import type { Metadata } from "next";
import { site } from "@/src/content/site";

export function buildMetadata(title: string, description: string, path: string): Metadata {
  const url = new URL(path, site.metadata.baseUrl).toString();

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName: site.metadata.siteName,
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: "Jonathan Hersh, PhD"
        }
      ],
      locale: "en_US",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.png"]
    }
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jonathan Hersh",
    honorificSuffix: "PhD",
    url: site.metadata.baseUrl,
    sameAs: [site.social.x, site.social.substack],
    email: `mailto:${site.social.email}`,
    jobTitle: "Associate Professor of Economics & Management Science",
    affiliation: {
      "@type": "Organization",
      name: "Chapman University",
      department: "Argyros School of Business"
    },
    alumniOf: [
      { "@type": "Organization", name: "Boston University" },
      { "@type": "Organization", name: "University of Chicago" },
      { "@type": "Organization", name: "University of Pennsylvania, Wharton School" }
    ],
    knowsAbout: [
      "Economics",
      "Artificial Intelligence",
      "Labor Markets",
      "Machine Learning",
      "Causal Inference",
      "Expert Witness",
      "Platform Economics",
      "API Strategy",
      "Antitrust Economics"
    ],
    description: site.bios.short
  };
}

export function professionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Jonathan Hersh Expert Witness Services",
    url: `${site.metadata.baseUrl}/expert-witness`,
    description:
      "Expert witness and economic consulting services focused on AI, labor markets, econometrics, and technology disputes.",
    areaServed: "United States",
    provider: {
      "@type": "Person",
      name: "Jonathan Hersh"
    },
    serviceType: [
      "AI expert witness economist",
      "Platform economics expert witness",
      "Antitrust economics expert witness",
      "Economic damages expert witness",
      "Technology disputes expert witness",
      "API economics expert witness"
    ]
  };
}
