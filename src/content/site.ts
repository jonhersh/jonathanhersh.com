export type NavItem = { label: string; href: string };

type LogoItem = {
  name: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

type AudienceCard = {
  title: string;
  bullets: string[];
  cta: { label: string; href: string };
};

type EngagementType = {
  title: string;
  description: string;
};

export const site = {
  metadata: {
    siteName: "Jonathan Hersh, PhD",
    title: "Jonathan Hersh, PhD | Economist, AI & Labor",
    description:
      "Jonathan Hersh, PhD is a tenured economist and AI researcher offering expert witness services, economic analysis, and research on labor markets and technology.",
    baseUrl: "https://jonathanhersh.com",
    /** Bump when site content is materially reviewed. Feeds freshness signals. */
    lastReviewed: "2026-07-31"
  },
  /**
   * Entity facts used for Schema.org and llms.txt. Answer engines resolve a
   * person by cross-referencing these; keep them accurate and specific.
   */
  entity: {
    /**
     * Authoritative profiles for the same person. This is how answer engines and
     * Google's Knowledge Graph consolidate a personal entity — the more
     * corroborating institutional and scholarly profiles are linked from one
     * canonical hub, the more confidently the entity resolves.
     */
    sameAs: [
      "https://www.chapman.edu/our-faculty/jonathan-hersh.aspx",
      // ORCID is the canonical author identifier for researchers; answer engines
      // and Wikidata both treat it as an authority file, so it leads the
      // scholarly profiles here.
      "https://orcid.org/0000-0001-6786-5162",
      "https://scholar.google.com/citations?user=0aH3TXMAAAAJ",
      "https://wol.iza.org/authors/jonathan-hersh",
      "https://artificiallyoptimistic.substack.com",
      "https://x.com/jonathanhersh"
    ],
    awards: [
      "BBVA Foundation Award for Best Contribution from Statistics and Operations Research Using Data Science and Big Data (2023)"
    ],
    knowsAbout: [
      "Economics",
      "Artificial Intelligence",
      "Labor Markets",
      "Machine Learning",
      "Causal Inference",
      "Econometrics",
      "Expert Witness Testimony",
      "Platform Economics",
      "API Strategy",
      "Antitrust Economics",
      "Economic Damages Analysis",
      "Computer Vision",
      "Satellite Imagery Analysis",
      "Future of Work",
      "Technology Policy"
    ],
    notableCoverage: [
      {
        outlet: "NPR (KUOW)",
        title: "Research finds how AI will impact demographics differently",
        url: "https://www.kuow.org/stories/research-finds-how-ai-will-impact-demographics-differently"
      }
    ],
    /**
     * Compact, extractable credential table. Tables are among the highest-value
     * formats for AI answer extraction.
     */
    quickFacts: [
      { label: "Role", value: "Associate Professor of Economics & Management Science (tenured)" },
      { label: "Institution", value: "Argyros School of Business and Economics, Chapman University" },
      { label: "PhD", value: "Economics, Boston University" },
      { label: "Prior degrees", value: "University of Chicago; The Wharton School, University of Pennsylvania" },
      { label: "Published in", value: "Management Science, PNAS, MIS Quarterly, NeurIPS, World Bank Economic Review, Communications of the ACM" },
      { label: "Award", value: "2023 BBVA Foundation Award for Data Science and Big Data" },
      { label: "Industry experience", value: "Machine learning scientist at Workhelix; data scientist at the World Bank and Inter-American Development Bank" },
      { label: "Previously taught at", value: "MIT and Wellesley College" },
      { label: "Expert witness focus", value: "AI systems, antitrust in digital markets, platform and API economics, economic damages" },
      { label: "Initial case assessment", value: "Typically 3–5 business days" }
    ]
  },
  navItems: [
    { label: "About", href: "/about" },
    { label: "Research", href: "/research" },
    { label: "Media", href: "/media" },
    { label: "Expert Witness", href: "/expert-witness" },
    { label: "Writing", href: "/blog" },
    { label: "Book", href: "/book" },
    { label: "Contact", href: "/contact" }
  ] as NavItem[],
  social: {
    substack: "https://artificiallyoptimistic.substack.com",
    x: "https://x.com/jonathanhersh",
    email: "hello@jonathanhersh.com"
  },
  hero: {
    title: "Jonathan Hersh, PhD",
    subtitle: "Economist \u00b7 AI & Labor \u00b7 Expert Witness",
    body: "I study how technology\u2014especially artificial intelligence\u2014reshapes work, productivity, and economic opportunity. I\u2019m a tenured professor of economics and management science, a data scientist, and a consultant working at the intersection of AI, labor markets, and real-world decision-making. My work combines rigorous economic research with modern machine learning to understand how new technologies actually change behavior, outcomes, and incentives. My work begins with peer-reviewed research and extends into legal, policy, and public discourse.",
    helpLine:
      "I help legal teams quantify damages and explain AI/platform economics under scrutiny\u2014and help journalists translate technical issues into clear stories.",
    chips: [
      "Tenured Associate Professor",
      "AI/ML Researcher",
      "Published Economist"
    ],
    ctas: {
      primary: { label: "Request a Consult", href: "/contact" },
      secondary: { label: "Media Inquiries", href: "/media#contact" },
      tertiary: { label: "View Research", href: "/research" }
    }
  },
  logoRow: {
    heading: "Published In & Featured By",
    /**
     * Logos render at a fixed height with auto width, so a wrong declared ratio
     * reflows the whole row as each one loads. These are the true intrinsic sizes.
     */
    items: [
      { name: "Management Science", src: "/logos/management-science.webp", alt: "Management Science", width: 320, height: 133 },
      { name: "PNAS", src: "/logos/pnas.webp", alt: "Proceedings of the National Academy of Sciences", width: 320, height: 168 },
      { name: "MIS Quarterly", src: "/logos/mis-quarterly.webp", alt: "MIS Quarterly", width: 320, height: 123 },
      { name: "NeurIPS", src: "/logos/neurips.svg", alt: "NeurIPS", width: 471, height: 212 },
      { name: "World Bank", src: "/logos/world-bank.webp", alt: "World Bank", width: 320, height: 179 },
      { name: "MIT", src: "/logos/mit.webp", alt: "MIT", width: 320, height: 257 },
      { name: "Wharton", src: "/logos/wharton.webp", alt: "Wharton School", width: 300, height: 300 },
      { name: "University of Chicago", src: "/logos/uchicago.webp", alt: "University of Chicago", width: 225, height: 225 },
      { name: "Boston University", src: "/logos/boston-university.webp", alt: "Boston University", width: 320, height: 180 },
      { name: "Chapman University", src: "/logos/chapman.webp", alt: "Chapman University", width: 234, height: 234 }
    ] as LogoItem[]
  },
  bios: {
    short:
      "Jonathan Hersh is an economist and machine learning scientist at Chapman University. His research on AI\u2019s impact on work has been published in Management Science, PNAS, and NeurIPS, and featured on NPR\u2019s Weekend Edition. He is the author of the forthcoming book AI-Proof Jobs and writes Artificially Optimistic.",
    long: "Jonathan Hersh is an Associate Professor of Economics and Management Science at the Argyros School of Business at Chapman University. His research focuses on how artificial intelligence is transforming business, labor, and society, with particular emphasis on workforce dynamics and managerial decision-making. He applies machine learning to unstructured data\u2014such as text, images, and satellite imagery\u2014to develop predictive and causal models that inform strategy and policy in data-scarce environments.\n\nProfessor Hersh has worked as a machine learning scientist at Workhelix, a Series A startup focused on AI workforce strategy, and as a data scientist for the World Bank and the Inter-American Development Bank. His research has been published in leading journals including Management Science, MIS Quarterly, the Proceedings of the National Academy of Sciences, and NeurIPS.\n\nIn 2023, he received the BBVA Foundation Award for Best Contribution from Statistics and Operations Research Using Data Science and Big Data for his work using AI to estimate war-related infrastructure damage. He has been featured on NPR\u2019s Weekend Edition, Bloomberg, and The Economist.\n\nHe is the author of the forthcoming book AI-Proof Jobs: Future-Proof Your Career with Skills AI Can\u2019t Replace and writes the newsletter Artificially Optimistic. Professor Hersh holds a Ph.D. in Economics from Boston University, and degrees from the University of Chicago and the Wharton School of the University of Pennsylvania. He teaches machine learning and data science courses to undergraduate and MBA students, and previously taught at MIT and Wellesley College."
  },
  home: {
    audienceCards: [
      {
        title: "Expert Witness",
        bullets: [
          "Economic damages and liability analysis in AI, platform, and technology disputes",
          "Expert reports, depositions, and trial testimony",
          "Conflicts check and initial assessment within days"
        ],
        cta: { label: "Request a Consult", href: "/contact" }
      },
      {
        title: "Media & Speaking",
        bullets: [
          "Research featured in top academic journals and discussed in major media outlets including NPR",
          "Clear explanations of AI\u2019s impact on jobs, platforms, and the economy",
          "Available for interviews, background conversations, and rapid-response commentary"
        ],
        cta: { label: "Media Inquiries", href: "/media#contact" }
      }
    ] as AudienceCard[],
    research: {
      heading: "Research",
      body: "My research focuses on the economic impacts of technology, with particular emphasis on artificial intelligence, labor markets, and applied machine learning. I publish in peer-reviewed journals, work with large-scale administrative and behavioral data, and regularly collaborate with engineers, data scientists, and policymakers.",
      ctaLabel: "View Research",
      ctaHref: "/research"
    },
    expertise: {
      heading: "About",
      bullets: [
        "AI Strategy and Societal Impacts",
        "Human-AI Collaboration & Decision Support",
        "Platform Economics",
        "API and Technology Strategy",
        "AI for Social Good & Development"
      ],
      ctaLabel: "About Jonathan",
      ctaHref: "/about"
    },
    media: {
      heading: "Media",
      body: "My work and commentary have been featured by major media outlets, including NPR, where I\u2019ve discussed how AI is changing work and economic opportunity.",
      ctaLabel: "Media Appearances",
      ctaHref: "/media"
    },
    /**
     * Lead answer block. Answers "Who is Jonathan Hersh?" in the first ~55 words
     * so it can be lifted whole into an AI Overview or assistant response.
     */
    summary:
      "Jonathan Hersh, PhD is a tenured Associate Professor of Economics and Management Science at Chapman University\u2019s Argyros School of Business and Economics, and an expert witness in technology litigation. He researches how artificial intelligence reshapes labor markets, productivity, and platform competition, and has published in Management Science, PNAS, MIS Quarterly, and NeurIPS.",
    /**
     * Entity-establishing FAQ. These mirror the questions people actually ask
     * assistants about a named expert, and are marked up as FAQPage.
     */
    faq: [
      {
        question: "Who is Jonathan Hersh?",
        answer:
          "Jonathan Hersh is a tenured Associate Professor of Economics and Management Science at Chapman University\u2019s Argyros School of Business and Economics. He is an economist and machine learning scientist who studies how artificial intelligence changes work, productivity, and market competition. He also serves as an expert witness in litigation involving AI systems, digital platforms, and technology-driven economic damages."
      },
      {
        question: "What does Jonathan Hersh research?",
        answer:
          "His research covers AI adoption and worker productivity, labor market adjustment to new technologies, platform and API economics, and economic measurement using machine learning and computer vision. He applies machine learning to unstructured data such as text, images, and satellite imagery to build predictive and causal models for settings where conventional data is scarce."
      },
      {
        question: "Where has Jonathan Hersh\u2019s research been published?",
        answer:
          "His work has appeared in Management Science, the Proceedings of the National Academy of Sciences (PNAS), MIS Quarterly, NeurIPS, the World Bank Economic Review, the Journal of Economic Behavior & Organization, Communications of the ACM, and Explorations in Economic History. In 2023 he received the BBVA Foundation Award for Best Contribution from Statistics and Operations Research Using Data Science and Big Data."
      },
      {
        question: "Is Jonathan Hersh available as an expert witness?",
        answer:
          "Yes. He is retained in disputes involving AI and algorithmic decision-making, antitrust and competition in digital markets, platform conduct and API access restrictions, and economic damages in technology cases. Engagements include expert reports, depositions, and trial testimony. A confidentiality and conflicts review is completed at intake, and initial assessments are typically scoped within 3\u20135 business days."
      },
      {
        question: "What are Jonathan Hersh\u2019s credentials?",
        answer:
          "He holds a PhD in Economics from Boston University, with prior degrees from the University of Chicago and the Wharton School at the University of Pennsylvania. He has worked as a machine learning scientist at Workhelix and as a data scientist for the World Bank and the Inter-American Development Bank, and has taught at MIT and Wellesley College in addition to Chapman University."
      },
      {
        question: "How do I contact Jonathan Hersh for media or consulting?",
        answer:
          "Email hello@jonathanhersh.com or use the contact form on this site. He is available for interviews, background conversations, and rapid-response commentary on AI and labor markets, and for expert witness and consulting engagements. Press materials, bios, and headshots are available on the media page."
      }
    ]
  },
  researchPage: {
    description:
      "My research examines how technology\u2014particularly artificial intelligence\u2014affects labor markets, productivity, inequality, and organizational decision-making. I use tools from economics, statistics, and machine learning to measure real-world impacts, often combining large administrative datasets with novel data sources. Much of my work is motivated by a simple question: how do new technologies change what people do, and who benefits as a result?",
    researchInterests: [
      "AI Strategy and Societal Impacts",
      "Human-AI Collaboration & Decision Support",
      "Platform Economics",
      "API and Technology Strategy",
      "AI for Social Good & Development"
    ],
    areasOfFocus: [
      "AI adoption and worker productivity",
      "Labor market adjustment to new technologies",
      "Measurement using machine learning and computer vision",
      "Economic development and institutional constraints"
    ],
    litigationRelevant: {
      heading: "Selected Work Relevant to Litigation",
      description:
        "These publications are particularly relevant to expert witness matters involving platform economics, website blocking damages, AI performance evaluation, and technology-driven market dynamics.",
      /** Slugs from src/content/research.ts \u2014 more robust than matching on title strings. */
      paperSlugs: [
        "how-apis-create-growth-inverting-the-firm",
        "piracy-website-blocking-consumer-behavior",
        "bootleg-to-binge-megafilmeshd-shutdown",
        "fighting-crime-online-judicial-site-blocking"
      ]
    },
    mediaReadySummaries: {
      heading: "Media-Ready Summaries",
      description:
        "Quick-reference summaries for journalists covering AI, labor, and technology policy.",
      items: [
        {
          paper: "How APIs Create Growth by Inverting the Firm",
          finding:
            "API adoption drives firm growth by enabling external developers to build on internal capabilities, but introduces governance and security tradeoffs.",
          whyItMatters:
            "Explains the economic logic behind platform openness\u2014and why restricting API access can be anticompetitive."
        },
        {
          paper: "Monitoring war destruction from space using machine learning",
          finding:
            "Machine learning models trained on satellite imagery can detect conflict-related building destruction at scale.",
          whyItMatters:
            "Won the 2023 BBVA Foundation Award. Enables damage monitoring in conflict zones where ground access is impossible."
        },
        {
          paper: "The Effect of Piracy Website Blocking on Consumer Behavior",
          finding:
            "Coordinated blocking of piracy sites shifts consumer behavior toward legal channels.",
          whyItMatters:
            "Provides the empirical foundation for judicial site-blocking policy in the US and internationally."
        }
      ]
    }
  },
  aboutPage: {
    title: "About Jonathan Hersh",
    /** Direct-answer block (~55 words) sized for featured-snippet extraction. */
    leadAnswer:
      "Jonathan Hersh, PhD is a tenured Associate Professor of Economics and Management Science at Chapman University\u2019s Argyros School of Business and Economics. He is an economist and machine learning scientist studying how artificial intelligence reshapes work, productivity, and market competition, and serves as an expert witness in technology litigation.",
    intro:
      "I\u2019m an economist and AI researcher focused on how technology changes work, firm behavior, and economic opportunity. My work spans academic research, industry data science, and public-facing analysis.",
    highlights: [
      "Tenured Associate Professor of Economics & Management Science",
      "Research at the frontier of AI, labor markets, and platform economics",
      "Applied work on APIs, technology strategy, and data-driven decision systems",
      "Published scholarship across economics, management, and machine learning venues"
    ],
    education: [
      { credential: "PhD, Economics", institution: "Boston University" },
      { credential: "Graduate study", institution: "University of Chicago" },
      { credential: "Undergraduate study", institution: "The Wharton School, University of Pennsylvania" }
    ],
    appointments: [
      {
        role: "Associate Professor of Economics & Management Science",
        org: "Argyros School of Business and Economics, Chapman University",
        detail: "Tenured faculty. Teaches machine learning and data science to undergraduate and MBA students."
      },
      {
        role: "Machine Learning Scientist",
        org: "Workhelix",
        detail: "Series A startup focused on AI workforce strategy."
      },
      {
        role: "Data Scientist",
        org: "The World Bank",
        detail: "Applied machine learning and economic measurement for development programs."
      },
      {
        role: "Data Scientist",
        org: "Inter-American Development Bank",
        detail: "Economic measurement and predictive modeling in data-scarce environments."
      },
      {
        role: "Previously taught at",
        org: "MIT and Wellesley College",
        detail: "Economics and applied data science instruction."
      }
    ],
    recognition: [
      "2023 BBVA Foundation Award for Best Contribution from Statistics and Operations Research Using Data Science and Big Data, for work using AI to estimate war-related infrastructure damage",
      "Peer-reviewed publications in Management Science, PNAS, MIS Quarterly, and NeurIPS",
      "Research and commentary featured on NPR\u2019s Weekend Edition, Bloomberg, and The Economist"
    ],
    faq: [
      {
        question: "Where did Jonathan Hersh study?",
        answer:
          "He holds a PhD in Economics from Boston University. He also studied at the University of Chicago and at the Wharton School of the University of Pennsylvania."
      },
      {
        question: "Where does Jonathan Hersh teach?",
        answer:
          "He is a tenured Associate Professor of Economics and Management Science at the Argyros School of Business and Economics at Chapman University in Orange, California, where he teaches machine learning and data science to undergraduate and MBA students. He previously taught at MIT and Wellesley College."
      },
      {
        question: "What awards has Jonathan Hersh received?",
        answer:
          "In 2023 he received the BBVA Foundation Award for Best Contribution from Statistics and Operations Research Using Data Science and Big Data, recognizing his work using machine learning and satellite imagery to estimate war-related infrastructure damage. That research was published in the Proceedings of the National Academy of Sciences."
      },
      {
        question: "What industry experience does Jonathan Hersh have?",
        answer:
          "He has worked as a machine learning scientist at Workhelix, a Series A startup focused on AI workforce strategy, and as a data scientist for the World Bank and the Inter-American Development Bank. This applied work informs his expert witness practice, where technical questions about models and data are often central."
      }
    ]
  },
  expertWitness: {
    headline: "AI Expert Witness & Economic Consulting",
    /** Direct-answer block (~55 words) sized for featured-snippet extraction. */
    leadAnswer:
      "An AI expert witness economist analyzes and testifies about how algorithms, data, and market structure produce economic harm in litigation. Jonathan Hersh, PhD is a tenured economics professor retained in disputes over AI systems, platform conduct, API access restrictions, and antitrust claims in digital markets — providing expert reports, depositions, and trial testimony.",
    body: "I provide expert analysis and testimony in complex litigation involving artificial intelligence, digital platforms, and technology-driven economic harm. My work focuses on matters where legal outcomes depend on a clear, rigorous understanding of algorithms, data, market structure, and economic impact. I am frequently retained in disputes involving AI systems, platform conduct, API access, and alleged anticompetitive or exclusionary behavior, with an emphasis on methodological rigor, transparency, and clarity under adversarial scrutiny.",
    areasOfTestimony: [
      "AI and algorithmic decision-making",
      "Antitrust and competition in digital markets",
      "Economic damages in technology disputes",
      "Platform economics, APIs, and access restrictions"
    ],
    expertiseCards: [
      {
        title: "AI & Algorithmic Systems",
        description:
          "Expert evaluation of model behavior, performance claims, algorithmic decision-making, and causal impact in legal settings, with explanations built for non-technical audiences."
      },
      {
        title: "Antitrust & Competition in Digital Markets",
        description:
          "Economic analysis of platform power, exclusionary conduct, API restrictions, interoperability, self-preferencing, tying, and competitive effects in fast-moving software ecosystems."
      },
      {
        title: "Economic Damages in Technology Disputes",
        description:
          "Damages analysis for de-platforming, website blocking, API throttling or termination, and related losses using causal inference, counterfactual modeling, and robustness checks."
      },
      {
        title: "Platform Economics & APIs",
        description:
          "Assessment of platform governance, API strategy, developer ecosystems, and downstream business impact where technical design choices intersect with economic harm."
      }
    ],
    engagementTypes: [
      {
        title: "Expert Reports",
        description:
          "Written expert reports and declarations with supporting exhibits, designed for admissibility and clarity under scrutiny."
      },
      {
        title: "Depositions & Testimony",
        description:
          "Deposition preparation and live testimony, including cross-examination support and rebuttal analysis."
      },
      {
        title: "Consulting Support",
        description:
          "Pre-litigation consulting, case strategy input, data assessment, and behind-the-scenes analytical support for trial teams."
      }
    ] as EngagementType[],
    deliverables: [
      "Expert reports and declarations",
      "Exhibit preparation and data visualizations",
      "Replication packages with documented methodology",
      "Deposition and trial testimony",
      "Rebuttal reports and supplemental analyses"
    ],
    whyMe: [
      "Peer-reviewed publications in Management Science, PNAS, MIS Quarterly, and NeurIPS",
      "Teaches machine learning and data science to MBA and undergraduate students",
      "Industry experience as a machine learning scientist at an AI workforce strategy startup",
      "Former data scientist for the World Bank and Inter-American Development Bank",
      "Trained economist with deep applied data science experience across academic and industry settings"
    ],
    contactCta:
      "For expert witness matters or consulting, request a consult (conflicts check available).",
    retainedFor: [
      "Alleged anticompetitive conduct involving APIs or interoperability",
      "Economic damages from website blocking or platform exclusion",
      "AI performance claims and model evaluation disputes",
      "Labor and productivity impacts of AI adoption",
      "Technology-driven market power and exclusion theories"
    ],
    qualifications: [
      "Tenured Associate Professor of Economics & Management Science",
      "PhD Economist with applied data science experience",
      "Peer-reviewed researcher and published author",
      "Extensive experience presenting technical analysis in adversarial settings"
    ],
    process: [
      "Initial consultation to assess theory of harm, timelines, and data availability",
      "Data review and empirical analysis, including model development and robustness checks",
      "Written expert reports, deposition support, and testimony as needed"
    ],
    practicalInfo: [
      "Confidentiality and conflicts review completed at intake.",
      "Typical initial assessments are scoped within 3-5 business days.",
      "All analyses are conducted with an emphasis on reproducibility and admissibility.",
      "Preferred data formats include CSV extracts, platform logs, and documentation of key business rules."
    ],
    faq: [
      {
        question: "What types of cases do you typically work on?",
        answer:
          "I am typically retained in disputes involving AI systems, algorithmic decision-making, platform conduct, API access restrictions, economic damages from de-platforming or website blocking, and antitrust claims in technology markets. I also consult on labor market impacts of AI adoption."
      },
      {
        question: "Do you work on antitrust cases involving APIs and interoperability?",
        answer:
          "Yes. I work on disputes involving API access restrictions, interoperability limits, self-preferencing, and other forms of alleged exclusionary conduct in digital markets. My published research on API ecosystems and platform growth is directly relevant to these matters."
      },
      {
        question: "Can you evaluate AI model performance claims in litigation?",
        answer:
          "Yes. I evaluate model behavior, claims about performance and reliability, and whether observed outcomes can be causally attributed to AI adoption or algorithmic decisions. I regularly teach and publish on these methods."
      },
      {
        question: "What is your process for conflicts and intake?",
        answer:
          "I conduct a confidentiality and conflicts review at intake before engaging on any matter. A short matter summary, jurisdiction, procedural posture, deadlines, and a high-level list of available data are usually enough for an initial assessment."
      },
      {
        question: "How quickly can you turn around an initial assessment?",
        answer:
          "Initial assessments are often possible within 3\u20135 business days, depending on urgency and data readiness. I can support compressed litigation timelines when needed."
      },
      {
        question: "What deliverables do you provide?",
        answer:
          "I provide expert reports, declarations, exhibits, replication packages with documented methodology, deposition and trial testimony, and rebuttal analyses. All work is conducted with emphasis on reproducibility and admissibility."
      }
    ]
  },
  mediaPage: {
    intro:
      "My research and commentary regularly appear in public discussions about technology, AI, and the future of work. I\u2019m available for interviews, background conversations, and rapid-response commentary.",
    items: [
      {
        type: "Media Interview",
        outlet: "NPR (KUOW)",
        title: "Research finds how AI will impact demographics differently",
        href: "https://www.kuow.org/stories/research-finds-how-ai-will-impact-demographics-differently",
        ctaLabel: "Listen to Segment",
        date: "April 5, 2025",
        image: "/media/headshot.webp",
        description:
          "Interview on how AI exposure differs across workers, why regional labor impacts vary, and what policymakers should monitor as adoption accelerates.",
        tags: ["AI", "Labor Markets", "Economic Opportunity"]
      },
      {
        type: "Presentation",
        outlet: "Chapman University Panel",
        title: "AI and Your Job: How Will AI Affect Employment In SoCal",
        href: "/contact",
        ctaLabel: "Inquire About Speaking",
        date: "Speaking Session \u00b7 60 minutes",
        image: "/media/speaking-stage.webp",
        description:
          "A panel of Chapman University experts discussing how AI is reshaping labor demand in Southern California, which jobs are most affected, and how workers and firms can prepare for the rapidly changing future of work.",
        tags: ["AI", "Artificial Intelligence", "Future of Work", "Automation"]
      }
    ],
    topicsForComment: [
      "How AI is changing the nature of work and which jobs are most exposed",
      "Platform economics, antitrust, and API access disputes",
      "Economic damages from de-platforming and website blocking",
      "Using satellite imagery and machine learning for conflict monitoring",
      "AI workforce strategy and firm-level adoption decisions",
      "Digital piracy, site blocking, and consumer behavior shifts"
    ],
    /** Dimensions are the sources' true intrinsic sizes — a mismatch causes layout shift. */
    headshots: [
      { label: "Professional headshot", src: "/media/headshot.webp", width: 1080, height: 1616 },
      { label: "Teaching / speaking", src: "/media/headshot-teaching.webp", width: 1400, height: 933 },
      { label: "On stage", src: "/media/speaking-stage.webp", width: 1280, height: 720 }
    ],
    selectedQuotes: [
      {
        quote:
          "AI won\u2019t replace jobs\u2014it will replace tasks. The question is which tasks, for whom, and how fast.",
        context: "On AI and labor market disruption"
      },
      {
        quote:
          "The firms that win in the AI era won\u2019t be the ones that automate the most\u2014they\u2019ll be the ones that figure out how to combine human judgment with machine speed.",
        context: "On AI workforce strategy"
      }
    ],
    researchHighlightsForMedia: [
      {
        title: "AI and Work",
        finding:
          "AI exposure varies significantly by demographics and region, creating uneven labor market effects.",
        whyItMatters:
          "Policymakers need targeted interventions, not one-size-fits-all responses to AI adoption."
      },
      {
        title: "APIs and Platform Growth",
        finding:
          "API adoption drives measurable firm growth through platform openness, but introduces governance tradeoffs.",
        whyItMatters:
          "Helps explain why API access restrictions are at the center of major antitrust disputes."
      },
      {
        title: "Website Blocking and Consumer Behavior",
        finding:
          "Coordinated blocking of piracy sites meaningfully shifts users toward legal consumption.",
        whyItMatters:
          "Provides empirical evidence for policy debates about judicial site blocking."
      },
      {
        title: "War Damage Detection from Space",
        finding:
          "Machine learning models can detect conflict-related infrastructure destruction at scale from satellite imagery.",
        whyItMatters:
          "Won the BBVA Foundation Award; enables monitoring in areas where ground access is impossible."
      }
    ]
  },
  blogPage: {
    newsletterName: "Artificially Optimistic",
    /** Direct-answer block sized for extraction. */
    leadAnswer:
      "Artificially Optimistic is a newsletter by Jonathan Hersh, PhD, an economist and machine learning scientist at Chapman University. It covers how artificial intelligence is changing work, which jobs and tasks are most exposed, and what the economic evidence actually shows — written for readers who want analysis rather than hype.",
    intro:
      "AI will make the world better. Getting there will be messy. An economist and machine learning scientist writing honestly about work, displacement, and the human side of the AI economy.",
    topics: [
      "How AI adoption reallocates tasks within jobs, and which roles absorb the change",
      "What productivity studies do and do not establish about AI at work",
      "Platform and API economics, and why access disputes keep reaching courts",
      "Labor market evidence on who gains and who is displaced",
      "Practical guidance for workers and firms adapting to AI"
    ],
    featuredPosts: [
      {
        title: "AI and Labor Market Reallocation",
        href: "https://artificiallyoptimistic.substack.com"
      }
    ]
  },
  bookPage: {
    title: "AI Proof Jobs",
    fullTitle: "AI-Proof Jobs: Future-Proof Your Career with Skills AI Can’t Replace",
    intro:
      "I\u2019m currently working on a book focused on how artificial intelligence is transforming work\u2014and what workers, firms, and policymakers can do to adapt. The book draws on economic research, real-world case studies, and hands-on experience working with AI systems in practice.",
    toc: [
      "How AI changes task design and productivity",
      "Why labor market transitions are uneven",
      "Firm strategy, adoption risk, and governance",
      "Policy choices for resilient employment"
    ]
  },
  contactPage: {
    intro:
      "For expert witness matters, consulting, media inquiries, or academic collaboration, please get in touch. Conflicts check available upon request."
  }

} as const;


export const pageSeo = {
  home: {
    title: "Jonathan Hersh, PhD | AI Expert Witness Economist & Researcher",
    description:
      "Tenured economist and AI researcher offering expert witness services in technology disputes, economic damages analysis, and research on AI, labor markets, and platform economics."
  },
  research: {
    title: "Jonathan Hersh, PhD | AI & Economics Research",
    description:
      "Peer-reviewed research on AI, labor markets, platform economics, and applied machine learning. Published in Management Science, PNAS, NeurIPS, and MIS Quarterly."
  },
  about: {
    title: "About Jonathan Hersh, PhD | Economist & AI Researcher",
    description:
      "Jonathan Hersh, PhD is a tenured Associate Professor of Economics and Management Science at Chapman University. Biography, education, appointments, awards, and research areas."
  },
  expertWitness: {
    title: "AI Expert Witness Economist | Jonathan Hersh, PhD",
    description:
      "Expert witness economist for AI, platform economics, antitrust, API disputes, and technology damages litigation. Reports, depositions, and testimony."
  },
  media: {
    title: "Jonathan Hersh, PhD | Press Room & Media Resources",
    description:
      "Press resources, bios, headshots, and expert commentary topics. Featured on NPR, Bloomberg, and The Economist."
  },
  blog: {
    title: "Jonathan Hersh, PhD | Artificially Optimistic \u2013 Writing on AI & Economics",
    description:
      "Essays on AI, economics, labor markets, and practical policy implications from Artificially Optimistic on Substack."
  },
  book: {
    title: "Jonathan Hersh, PhD | Book",
    description:
      "About AI Proof Jobs, a forthcoming book on AI, labor transitions, and adaptation strategies for workers and firms."
  },
  contact: {
    title: "Jonathan Hersh, PhD | Contact",
    description:
      "Contact Jonathan Hersh for expert witness inquiries, consulting, and academic collaboration."
  }
} as const;
