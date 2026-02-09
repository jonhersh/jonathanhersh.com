export type NavItem = { label: string; href: string };

type ResearchItem = {
  title: string;
  venue: string;
  year: string;
  href: string;
  image: string;
  summary: string;
};

type LogoItem = {
  name: string;
  src: string;
  alt: string;
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
    baseUrl: "https://jonathanhersh.com"
  },
  navItems: [
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
    items: [
      { name: "Management Science", src: "/logos/management-science.jpg", alt: "Management Science" },
      { name: "PNAS", src: "/logos/pnas.jpg", alt: "Proceedings of the National Academy of Sciences" },
      { name: "MIS Quarterly", src: "/logos/mis-quarterly.png", alt: "MIS Quarterly" },
      { name: "NeurIPS", src: "/logos/neurips.svg", alt: "NeurIPS" },
      { name: "World Bank", src: "/logos/world-bank.jpg", alt: "World Bank" },
      { name: "MIT", src: "/logos/mit.png", alt: "MIT" },
      { name: "Wharton", src: "/logos/wharton.png", alt: "Wharton School" },
      { name: "University of Chicago", src: "/logos/uchicago.png", alt: "University of Chicago" },
      { name: "Boston University", src: "/logos/boston-university.png", alt: "Boston University" },
      { name: "Chapman University", src: "/logos/chapman.gif", alt: "Chapman University" }
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
    }
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
      paperKeys: [
        "How APIs Create Growth by Inverting the Firm",
        "The Effect of Piracy Website Blocking on Consumer Behavior",
        "From Bootleg to Binge: User Migration and Legal Demand Following Brazil\u2019s MegafilmesHD Shutdown",
        "Fighting Crime Online: Options, evidence, and the empirical case for judicial site blocking in the U.S."
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
  expertisePage: {
    intro:
      "I work at the intersection of economics, artificial intelligence, and applied data science. My background spans academic research, industry data science, and consulting. This allows me to translate rigorous methods into clear, defensible insights for courts, firms, and policymakers.",
    sections: [
      {
        title: "AI Strategy and Societal Impacts",
        description:
          "Economic analysis of how AI reshapes labor demand, productivity, competitive dynamics, and long-run institutional outcomes."
      },
      {
        title: "Human-AI Collaboration & Decision Support",
        description:
          "Study of how people and organizations use AI systems in real decisions, including performance effects, incentives, and governance."
      },
      {
        title: "Platform Economics",
        description:
          "Research on digital platforms, network effects, market structure, and policy-relevant outcomes in technology-mediated markets."
      },
      {
        title: "API and Technology Strategy",
        description:
          "Evidence-based analysis of API ecosystems, software usage metrics, product strategy, and the economics of technology adoption."
      },
      {
        title: "AI for Social Good & Development",
        description:
          "Applied machine learning and economic measurement for development, poverty mapping, and public-interest technology initiatives."
      }
    ]
  },
  aboutPage: {
    title: "About",
    intro:
      "I\u2019m an economist and AI researcher focused on how technology changes work, firm behavior, and economic opportunity. My work spans academic research, industry data science, and public-facing analysis.",
    overview:
      "If you\u2019re new here, start on the homepage for a full overview, then explore research, media, and expert witness services in detail.",
    highlights: [
      "Tenured Associate Professor of Economics & Management Science",
      "Research at the frontier of AI, labor markets, and platform economics",
      "Applied work on APIs, technology strategy, and data-driven decision systems",
      "Published scholarship across economics, management, and machine learning venues"
    ],
    startCta: {
      label: "Go to Site Start",
      href: "/#top"
    }
  },
  expertWitness: {
    headline: "AI Expert Witness & Economic Consulting",
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
        image: "/media/headshot.jpg",
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
        image: "/media/speaking-stage.jpg",
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
    headshots: [
      { label: "Professional headshot", src: "/media/headshot.jpg" },
      { label: "Teaching / speaking", src: "/media/headshot-teaching.jpg" },
      { label: "On stage", src: "/media/speaking-stage.jpg" }
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
    intro:
      "AI will make the world better. Getting there will be messy. An economist and machine learning scientist writing honestly about work, displacement, and the human side of the AI economy.",
    featuredPosts: [
      {
        title: "AI and Labor Market Reallocation",
        href: "https://artificiallyoptimistic.substack.com"
      }
    ]
  },
  bookPage: {
    title: "AI Proof Jobs",
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
  },
  selectedResearch: [
    {
      title:
        "Poverty Mapping Using Convolutional Neural Networks Trained on High and Medium Resolution Satellite Images, With an Application in Mexico",
      venue: "NeurIPS 2017 ML for the Developing World Workshop",
      year: "2017",
      href: "/research/2017_poverty_mapping_using_CNNs_Mexico.pdf",
      image: "/research/2017_poverty_mapping_using_CNNs_Mexico_image.png",
      summary:
        "Demonstrates how CNN models trained on satellite imagery can estimate poverty distribution with meaningful predictive power in low-data settings."
    },
    {
      title: "Big Data in Economics",
      venue: "IZA World of Labor",
      year: "2018",
      href: "/research/2018_big_data_in_economics.pdf",
      image: "/research/2018_big_data_in_economics_image.png",
      summary:
        "Explains how high-frequency, high-volume data and machine learning methods are transforming empirical economics and policy design."
    },
    {
      title: "The Effect of Piracy Website Blocking on Consumer Behavior",
      venue: "MIS Quarterly",
      year: "2020",
      href: "/research/2020_effect_of_piracy_website_blocking_UK.pdf",
      image: "/research/2020_effect_of_piracy_website_blocking_UK_image.png",
      summary:
        "Finds that coordinated blocking of multiple piracy sites can meaningfully shift behavior toward legal consumption channels."
    },
    {
      title: "Monitoring war destruction from space using machine learning",
      venue: "Proceedings of the National Academy of Sciences",
      year: "2021",
      href: "/research/2021_monitoring_destruction_space-compressed.pdf",
      image: "/research/2021_monitoring_destruction_space-compressed_image.png",
      summary:
        "Develops machine-learning methods to detect conflict-related infrastructure destruction at scale from satellite imagery."
    },
    {
      title:
        "Open data for algorithms: mapping poverty in Belize using open satellite derived features and machine learning",
      venue: "Information Technology for Development",
      year: "2021",
      href: "/research/2021_open_data_algorithms_mapping_poverty_belize_sat_ML.pdf",
      image: "/research/2021_open_data_algorithms_mapping_poverty_belize_sat_ML_image.png",
      summary:
        "Shows that open satellite feature sets can improve poverty prediction performance and reduce cost barriers for policy analytics."
    },
    {
      title: "Poverty from Space: Using High Resolution Satellite Imagery for Estimating Economic Well-being",
      venue: "World Bank Economic Review",
      year: "2022",
      href: "/research/2021_poverty_from_space_sri_lanka.pdf",
      image: "/research/2021_poverty_from_space_sri_lanka_image.png",
      summary:
        "Uses high-resolution imagery to estimate consumption and poverty with robust out-of-sample performance."
    },
    {
      title: "Car accidents, smartphone adoption and 3G coverage",
      venue: "Journal of Economic Behavior & Organization",
      year: "2022",
      href: "/research/2022_car_accidents_cell_phones.pdf",
      image: "/research/2022_car_accidents_cell_phones_image.png",
      summary:
        "Links smartphone diffusion and network coverage to measurable increases in accident risk, with policy implications for road safety."
    },
    {
      title: "How APIs Create Growth by Inverting the Firm",
      venue: "Management Science",
      year: "2022",
      href: "/research/2022_how_APIs_create_growth_inverting_firm.pdf",
      image: "/research/2022_how_APIs_create_growth_inverting_firm_image.png",
      summary:
        "Documents growth gains from API adoption and platform openness, while quantifying associated governance and security tradeoffs."
    },
    {
      title: "Hybrid U-Net: Semantic segmentation of high-resolution satellite images to detect war destruction",
      venue: "Machine Learning with Applications",
      year: "2022",
      href: "/research/2022_hybrid_UNET_semantic_segmentation_satellite_war_destruction.pdf",
      image: "/research/2022_hybrid_UNET_semantic_segmentation_satellite_war_destruction_image.png",
      summary:
        "Introduces a multi-scale segmentation architecture that improves detection of conflict damage in high-resolution satellite images."
    },
    {
      title: "Sweet diversity: Colonial goods and the welfare gains from global trade after 1492",
      venue: "Explorations in Economic History",
      year: "2023",
      href: "/research/2022_sweet_diversity_colonial_goods_and_welfare_gains_global_trade.pdf",
      image: "/research/2022_sweet_diversity_colonial_goods_and_welfare_gains_global_trade_image.png",
      summary:
        "Estimates large historical welfare gains from imported consumption variety and changing food baskets in Europe."
    },
    {
      title:
        "Fighting Crime Online: Options, evidence, and the empirical case for judicial site blocking in the U.S.",
      venue: "Communications of the ACM",
      year: "2025",
      href: "/research/2025_FightingCrime_Smith_V03.pdf",
      image: "/research/2025_FightingCrime_Smith_V03_image.png",
      summary:
        "Synthesizes evidence on judicial site blocking as a policy lever for reducing online criminal activity."
    },
    {
      title:
        "From Bootleg to Binge: User Migration and Legal Demand Following Brazil\u2019s MegafilmesHD Shutdown",
      venue: "Review of Economic Research on Copyright Issues",
      year: "2025",
      href: "/research/2025_megafilmes-shutdown-RERCI.pdf",
      image: "/research/2025_megafilmes-shutdown-RERCI_image.png",
      summary:
        "Analyzes substitution between piracy and legal streaming after platform shutdown, with heterogeneous adoption effects by income."
    }
  ] as ResearchItem[]
} as const;

export function selectedResearchByNewest() {
  return [...site.selectedResearch].sort((a, b) => Number(b.year) - Number(a.year));
}

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
    title: "Jonathan Hersh, PhD | About",
    description:
      "Overview of Jonathan Hersh, PhD: economist, AI researcher, and expert witness focused on labor, platforms, APIs, and technology strategy."
  },
  expertise: {
    title: "Jonathan Hersh, PhD | About",
    description:
      "Overview of Jonathan Hersh, PhD: economist, AI researcher, and expert witness focused on labor, platforms, APIs, and technology strategy."
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
