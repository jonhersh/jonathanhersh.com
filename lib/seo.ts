import type { Metadata } from "next";
import type { PracticeArea } from "@/src/content/practice-areas";
import { abstractText, type Paper } from "@/src/content/research";
import { site } from "@/src/content/site";

type MetadataOptions = {
  /** Topical keywords. Ignored by Google ranking, but parsed by several AI crawlers. */
  keywords?: readonly string[];
  /** ISO date for content freshness signals. Defaults to the site-wide review date. */
  modified?: string;
  /** Override the OG image (defaults to the shared social card). */
  image?: string;
  /** "website" for hub pages, "article" for writing. */
  type?: "website" | "article";
};

export function buildMetadata(
  title: string,
  description: string,
  path: string,
  options: MetadataOptions = {}
): Metadata {
  const url = new URL(path, site.metadata.baseUrl).toString();
  const image = options.image ?? "/og.png";
  const modified = options.modified ?? site.metadata.lastReviewed;

  return {
    title,
    description,
    keywords: options.keywords ? [...options.keywords] : undefined,
    authors: [{ name: "Jonathan Hersh", url: site.metadata.baseUrl }],
    creator: "Jonathan Hersh",
    publisher: "Jonathan Hersh",
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
          url: image,
          width: 1200,
          height: 630,
          alt: "Jonathan Hersh, PhD — Economist, AI & Labor, Expert Witness"
        }
      ],
      locale: "en_US",
      type: options.type ?? "website",
      ...(options.type === "article" ? { modifiedTime: modified } : {})
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@jonathanhersh",
      images: [image]
    },
    other: {
      "article:modified_time": modified
    }
  };
}

/* ------------------------------------------------------------------ *
 * Schema.org builders
 *
 * These exist to make the site machine-readable for AI answer engines
 * (Google AI Overviews, ChatGPT Search, Perplexity, Claude). Every
 * builder returns a plain object; render it with <JsonLd>.
 * ------------------------------------------------------------------ */

const PERSON_ID = `${site.metadata.baseUrl}/#jonathan-hersh`;
const WEBSITE_ID = `${site.metadata.baseUrl}/#website`;

/** Compact reference to the Person node, so schema graphs stay deduplicated. */
const personRef = { "@id": PERSON_ID };

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: "Jonathan Hersh",
    givenName: "Jonathan",
    familyName: "Hersh",
    honorificSuffix: "PhD",
    url: site.metadata.baseUrl,
    mainEntityOfPage: site.metadata.baseUrl,
    image: `${site.metadata.baseUrl}/media/headshot.jpg`,
    sameAs: site.entity.sameAs,
    // ORCID appears in sameAs too, but a typed PropertyValue states *which*
    // authority file the identifier belongs to rather than leaving consumers to
    // infer it from the URL. This is the form Google and scholarly indexes read.
    identifier: {
      "@type": "PropertyValue",
      propertyID: "ORCID",
      value: "https://orcid.org/0000-0001-6786-5162"
    },
    email: `mailto:${site.social.email}`,
    jobTitle: "Associate Professor of Economics & Management Science",
    description: site.bios.short,
    disambiguatingDescription:
      "Economist and machine learning scientist at Chapman University researching how artificial intelligence reshapes labor markets, productivity, and platform competition. Serves as an expert witness in AI, antitrust, and technology damages litigation.",
    knowsLanguage: "en",
    worksFor: {
      "@type": "CollegeOrUniversity",
      name: "Chapman University",
      department: {
        "@type": "Organization",
        name: "Argyros School of Business and Economics"
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Orange",
        addressRegion: "CA",
        addressCountry: "US"
      }
    },
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: "Chapman University",
      department: "Argyros School of Business and Economics"
    },
    hasOccupation: [
      {
        "@type": "Occupation",
        name: "Economist",
        occupationalCategory: "19-3011.00",
        skills: site.entity.knowsAbout.join(", ")
      },
      {
        "@type": "Occupation",
        name: "Expert Witness Economist",
        occupationalCategory: "19-3011.00",
        skills:
          "Economic damages analysis, causal inference, antitrust economics, platform economics, AI model evaluation, expert reports and deposition testimony"
      }
    ],
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Boston University",
        sameAs: "https://en.wikipedia.org/wiki/Boston_University"
      },
      {
        "@type": "CollegeOrUniversity",
        name: "University of Chicago",
        sameAs: "https://en.wikipedia.org/wiki/University_of_Chicago"
      },
      {
        "@type": "CollegeOrUniversity",
        name: "University of Pennsylvania, Wharton School",
        sameAs: "https://en.wikipedia.org/wiki/Wharton_School"
      }
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        educationalLevel: "PhD",
        about: "Economics",
        recognizedBy: { "@type": "CollegeOrUniversity", name: "Boston University" }
      }
    ],
    award: site.entity.awards,
    knowsAbout: site.entity.knowsAbout,
    subjectOf: site.entity.notableCoverage.map((item) => ({
      "@type": "CreativeWork",
      name: item.title,
      publisher: { "@type": "Organization", name: item.outlet },
      url: item.url
    }))
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: site.metadata.baseUrl,
    name: site.metadata.siteName,
    description: site.metadata.description,
    inLanguage: "en-US",
    publisher: personRef,
    author: personRef,
    copyrightHolder: personRef
  };
}

export function professionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${site.metadata.baseUrl}/expert-witness#service`,
    name: "Jonathan Hersh Expert Witness Services",
    url: `${site.metadata.baseUrl}/expert-witness`,
    description:
      "Expert witness and economic consulting services focused on AI, labor markets, econometrics, and technology disputes.",
    areaServed: {
      "@type": "Country",
      name: "United States"
    },
    availableLanguage: "en",
    provider: personRef,
    founder: personRef,
    email: `mailto:${site.social.email}`,
    knowsAbout: site.entity.knowsAbout,
    serviceType: [
      "AI expert witness economist",
      "Platform economics expert witness",
      "Antitrust economics expert witness",
      "Economic damages expert witness",
      "Technology disputes expert witness",
      "API economics expert witness"
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Expert Witness Engagements",
      itemListElement: site.expertWitness.engagementTypes.map((type) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: type.title,
          description: type.description,
          provider: personRef
        }
      }))
    }
  };
}

/**
 * Per-practice-area Service markup. `professionalServiceSchema` describes the
 * practice as a whole; this narrows to one litigation domain so an answer
 * engine resolving "AI training data expert witness" finds a service entity
 * scoped to that phrase rather than a generic consulting listing.
 *
 * `about` carries the questions the matters turn on — those are the strings
 * that actually match how retaining counsel phrases a search.
 */
export function practiceAreaSchema(area: PracticeArea) {
  const url = `${site.metadata.baseUrl}/expert-witness/${area.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: area.title,
    url,
    description: area.leadAnswer,
    serviceType: area.keywords,
    provider: personRef,
    areaServed: {
      "@type": "Country",
      name: "United States"
    },
    isPartOf: { "@id": `${site.metadata.baseUrl}/expert-witness#service` },
    about: area.questions.map((question) => ({
      "@type": "Thing",
      name: question
    })),
    // Citations to the peer-reviewed work are what separate a substantiated
    // expert claim from an asserted one.
    citation: area.groundingPapers.map((slug) => ({
      "@id": `${site.metadata.baseUrl}/research/${slug}#article`
    }))
  };
}

/**
 * FAQPage markup — the single highest-impact schema type for AI answer
 * engines. Answers must match the visible page text verbatim.
 */
export function faqSchema(
  items: readonly { question: string; answer: string }[],
  pagePath: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${new URL(pagePath, site.metadata.baseUrl).toString()}#faq`,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function breadcrumbSchema(trail: readonly { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: new URL(crumb.path, site.metadata.baseUrl).toString()
    }))
  };
}

/**
 * ScholarlyArticle for a paper. Every coauthor is emitted as a Person so answer
 * engines can attribute the work correctly, and `sameAs` points at the canonical
 * published version rather than the local PDF copy.
 */
export function scholarlyArticleSchema(paper: Paper, options: { full?: boolean } = {}) {
  const url = `${site.metadata.baseUrl}/research/${paper.slug}`;

  return {
    ...(options.full ? { "@context": "https://schema.org" } : {}),
    "@type": "ScholarlyArticle",
    "@id": `${url}#article`,
    name: paper.title,
    headline: paper.title,
    abstract: abstractText(paper),
    description: paper.keyFinding,
    datePublished: paper.datePublished,
    author: paper.authors.map((name) =>
      name === "Jonathan Hersh" ? personRef : { "@type": "Person", name }
    ),
    url,
    ...(paper.publisherUrl ? { sameAs: paper.publisherUrl } : {}),
    isPartOf: {
      "@type": "Periodical",
      name: paper.venue
    },
    publisher: {
      "@type": "Organization",
      name: paper.venue
    },
    associatedMedia: {
      "@type": "MediaObject",
      encodingFormat: "application/pdf",
      contentUrl: `${site.metadata.baseUrl}${paper.pdfPath}`
    },
    inLanguage: "en"
  };
}

/** ItemList of peer-reviewed work — gives answer engines a citable publication record. */
export function researchListSchema(items: readonly Paper[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${site.metadata.baseUrl}/research#publications`,
    name: "Peer-reviewed publications by Jonathan Hersh, PhD",
    description:
      "Peer-reviewed research on artificial intelligence, labor markets, platform economics, and applied machine learning.",
    numberOfItems: items.length,
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    itemListElement: items.map((paper, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${site.metadata.baseUrl}/research/${paper.slug}`,
      item: scholarlyArticleSchema(paper)
    }))
  };
}

/**
 * Media appearances as an ItemList, and pull quotes as Quotation nodes.
 * Quotations give answer engines an attributable, ready-to-use statement —
 * exactly the shape they reach for when summarizing an expert's view.
 */
export function mediaSchema(opts: {
  appearances: readonly {
    type: string;
    outlet: string;
    title: string;
    href: string;
    date: string;
    description: string;
  }[];
  quotes: readonly { quote: string; context: string }[];
}) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "@id": `${site.metadata.baseUrl}/media#appearances`,
      name: "Media appearances and speaking engagements",
      numberOfItems: opts.appearances.length,
      itemListElement: opts.appearances.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "CreativeWork",
          name: item.title,
          abstract: item.description,
          url: item.href.startsWith("http")
            ? item.href
            : new URL(item.href, site.metadata.baseUrl).toString(),
          publisher: { "@type": "Organization", name: item.outlet },
          about: personRef,
          contributor: personRef
        }
      }))
    },
    ...opts.quotes.map((q, index) => ({
      "@context": "https://schema.org",
      "@type": "Quotation",
      "@id": `${site.metadata.baseUrl}/media#quote-${index + 1}`,
      text: q.quote,
      about: q.context,
      creator: personRef,
      spokenByCharacter: personRef
    }))
  ];
}

export function bookSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Book",
    "@id": `${site.metadata.baseUrl}/book#ai-proof-jobs`,
    name: site.bookPage.fullTitle,
    alternateName: site.bookPage.title,
    author: personRef,
    inLanguage: "en",
    bookFormat: "https://schema.org/Hardcover",
    abstract: site.bookPage.intro,
    about: [
      "Artificial intelligence and employment",
      "Future of work",
      "Career strategy",
      "Labor economics",
      "Automation"
    ],
    publishingPrinciples: `${site.metadata.baseUrl}/research`,
    url: `${site.metadata.baseUrl}/book`
  };
}

/**
 * Generic WebPage node with a freshness signal, bound to the WebSite graph.
 * Use on pages that have no more specific page type.
 */
export function webPageSchema(opts: {
  path: string;
  name: string;
  description: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
}) {
  const url = new URL(opts.path, site.metadata.baseUrl).toString();

  return {
    "@context": "https://schema.org",
    "@type": opts.type ?? "WebPage",
    "@id": `${url}#page`,
    url,
    name: opts.name,
    description: opts.description,
    dateModified: site.metadata.lastReviewed,
    inLanguage: "en-US",
    isPartOf: { "@id": WEBSITE_ID },
    about: personRef,
    author: personRef,
    publisher: personRef
  };
}

/**
 * ProfilePage wrapper for the homepage. Signals to answer engines that this
 * site is the authoritative source about the Person entity.
 */
export function profilePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${site.metadata.baseUrl}/#profile`,
    url: site.metadata.baseUrl,
    name: site.metadata.title,
    dateModified: site.metadata.lastReviewed,
    isPartOf: { "@id": WEBSITE_ID },
    mainEntity: personRef,
    about: personRef
  };
}
