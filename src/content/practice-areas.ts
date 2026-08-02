/**
 * Expert witness practice areas.
 *
 * Each area gets its own page because retaining counsel searches by the thing
 * they are litigating ("AI training data damages expert"), not by a person.
 * One combined page competes for none of those queries and gives an answer
 * engine nothing specific to cite.
 *
 * Structure mirrors src/content/research.ts: semantic blocks so pages render
 * real headings and lists, which are substantially easier for search and AI
 * answer engines to extract than one opaque paragraph.
 *
 * `groundingPapers` holds slugs from research.ts. Peer-reviewed publications
 * are the verifiable part of an expert claim — the pages link to them rather
 * than asserting expertise unsupported.
 */

export type PracticeBlock =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "ul"; items: string[] };

export type PracticeArea = {
  slug: string;
  /** Page H1. */
  title: string;
  /** Short label for cards and navigation. */
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  /** ~55-word direct answer, sized for featured-snippet and AI extraction. */
  leadAnswer: string;
  /** What the matters actually turn on. Question-shaped for AI retrieval. */
  questions: string[];
  /** Methods applied, stated concretely enough to be assessed. */
  methods: string[];
  body: PracticeBlock[];
  /** Slugs from research.ts that evidence this area. */
  groundingPapers: string[];
  /**
   * Anonymized engagement summaries. No party names, no case numbers, no
   * venue unless independently public — protective orders are the norm.
   */
  engagements: string[];
  faq: { question: string; answer: string }[];
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "ai-training-data",
    title: "AI Training Data & Copyright Expert Witness",
    navLabel: "AI Training Data & Copyright",
    metaTitle: "AI Training Data Expert Witness Economist | Jonathan Hersh, PhD",
    metaDescription:
      "Economic expert witness on AI training data, copyright, and market harm. Analyzes substitution, lost licensing markets, and damages. Deposed in an AI training data matter.",
    keywords: [
      "AI training data expert witness",
      "AI copyright expert witness",
      "training data damages expert",
      "market harm AI copyright",
      "generative AI litigation economist",
      "shadow library training data",
      "fair use market harm economist"
    ],
    leadAnswer:
      "In AI training data litigation, an economic expert quantifies whether a model's training and output caused market harm to the works it was trained on. Jonathan Hersh, PhD is an economist who analyzes substitution between AI outputs and original works, lost licensing markets, and the acquisition of training corpora — and has been deposed in an AI training data matter.",
    questions: [
      "Did the model's outputs substitute for the original works, or complement them?",
      "Was there a functioning licensing market for this training data, and what was it worth?",
      "How was the training corpus acquired, and does the acquisition channel change the economic analysis?",
      "Can observed harm to the rightsholder be separated from unrelated market trends?",
      "What is the correct counterfactual — what would sales, licensing, or consumption have looked like absent the alleged conduct?"
    ],
    methods: [
      "Counterfactual demand modeling to separate alleged harm from background market trends",
      "Difference-in-differences and synthetic control estimation on consumption and sales panels",
      "Substitution and displacement analysis adapted from the empirical piracy literature",
      "Licensing-market valuation where a comparable market exists or can be constructed",
      "Model evaluation and output-similarity analysis using applied machine learning"
    ],
    body: [
      {
        type: "p",
        text: "AI training data disputes are, economically, questions about substitution. A rightsholder alleges that a model was built on their work and that the resulting outputs displaced demand for it. Answering that requires separating the effect of the alleged conduct from everything else moving in the market at the same time — the same identification problem that two decades of empirical work on digital copyright has been built around."
      },
      {
        type: "h",
        text: "Why piracy economics applies to training data"
      },
      {
        type: "p",
        text: "Where a training corpus was assembled from unlicensed sources, the economic question is not new. It is the acquisition-and-displacement question that the piracy literature has studied with quasi-experimental methods since the early 2000s: when works are obtained outside the licensed channel, how much licensed demand is actually displaced, and how much would have existed anyway? My published research is in that literature — on website blocking, site shutdowns, and the measurable effect of enforcement on legal consumption. The estimation problem in an AI training data matter is structurally the same, and the same identification standards apply."
      },
      {
        type: "h",
        text: "Where damages theories tend to fail"
      },
      {
        type: "ul",
        items: [
          "Assuming one-to-one displacement — that every AI output substitutes for a sale — without estimating the substitution rate.",
          "Valuing a licensing market that did not exist and was not going to, or ignoring one that demonstrably did.",
          "Attributing a revenue decline to the model when sector-wide trends explain it, with no control group or counterfactual.",
          "Conflating the acquisition of training data with harm from model outputs; these are separate economic events and may carry different damages.",
          "Relying on aggregate model capability claims rather than measured behavior on the works at issue."
        ]
      },
      {
        type: "p",
        text: "My work in these matters is to build the counterfactual carefully, state the assumptions it rests on, and test whether the result survives when those assumptions are varied — then explain the result to a non-technical audience without softening what the data does and does not show."
      }
    ],
    groundingPapers: [
      "piracy-website-blocking-consumer-behavior",
      "fighting-crime-online-judicial-site-blocking",
      "bootleg-to-binge-megafilmeshd-shutdown"
    ],
    engagements: [
      "Retained in a matter involving a Fortune 100 company concerning AI training data. Provided economic analysis and was deposed. Details are limited by confidentiality."
    ],
    faq: [
      {
        question: "Have you testified in an AI training data case?",
        answer:
          "I have been retained in an AI training data matter involving a Fortune 100 company and was deposed in that engagement. I have not yet testified at trial. Further detail is limited by confidentiality obligations."
      },
      {
        question: "How do you quantify market harm from generative AI outputs?",
        answer:
          "By estimating substitution rather than assuming it. That means constructing a counterfactual for what demand would have been absent the alleged conduct, using difference-in-differences, synthetic control, or comparable quasi-experimental designs where the data supports them, and reporting how sensitive the estimate is to the assumptions behind it."
      },
      {
        question: "Does research on piracy actually apply to AI training data?",
        answer:
          "The identification problem is the same. Both ask how much licensed demand was displaced when works were obtained outside the licensed channel, and both require separating that effect from background market movement. The empirical piracy literature spent two decades developing methods for exactly this, and my peer-reviewed work is in it."
      },
      {
        question: "Can you work on either side of these matters?",
        answer:
          "Yes. The methods do not change with the retaining party, and I run a conflicts check before accepting any engagement."
      }
    ]
  },
  {
    slug: "piracy-copyright-damages",
    title: "Piracy, Copyright Enforcement & Damages Expert Witness",
    navLabel: "Piracy & Copyright Enforcement",
    metaTitle: "Piracy & Copyright Damages Expert Witness Economist | Jonathan Hersh, PhD",
    metaDescription:
      "Economist and expert witness on piracy damages, website blocking, site shutdowns, and copyright enforcement effectiveness. Four peer-reviewed publications in the field.",
    keywords: [
      "piracy damages expert witness",
      "copyright enforcement economist",
      "website blocking expert",
      "site blocking damages",
      "piracy economics expert witness",
      "demand displacement piracy",
      "copyright damages economist"
    ],
    leadAnswer:
      "Piracy and copyright enforcement disputes turn on how much licensed demand unlicensed access actually displaced. Jonathan Hersh, PhD is an economist whose peer-reviewed research measures exactly this — the effect of website blocking, site shutdowns, and enforcement on legal consumption — published in MIS Quarterly, Communications of the ACM, and the Review of Economic Research on Copyright Issues.",
    questions: [
      "How much licensed consumption did the unlicensed channel actually displace?",
      "Did enforcement change behavior, or did traffic simply migrate to substitute sites?",
      "What is the counterfactual level of legal consumption absent the infringing service?",
      "Which users converted to paid consumption after enforcement, and which did not?",
      "Is the claimed per-unit harm consistent with observed substitution behavior?"
    ],
    methods: [
      "Quasi-experimental estimation of displacement using clickstream and consumption panels",
      "Difference-in-differences designs with treated and control user populations",
      "Analysis of substitution to alternative unlicensed services — the 'hydra effect'",
      "Heterogeneity analysis by income, demographics, and prior consumption behavior",
      "Assessment of opposing damages models against the published empirical record"
    ],
    body: [
      {
        type: "p",
        text: "The central empirical claim in most copyright damages disputes is a displacement rate: the share of unlicensed consumption that would have been licensed consumption instead. That number is frequently assumed rather than estimated, and the assumption usually drives the damages figure more than any other input."
      },
      {
        type: "h",
        text: "What the published evidence actually shows"
      },
      {
        type: "ul",
        items: [
          "Blocking a single infringing site generally does little — traffic disperses to substitutes faster than they can be addressed, an effect documented across drug marketplaces, commercial sex advertising, and media piracy.",
          "Blocking multiple sites simultaneously does measurably reduce piracy and increase legal consumption; scale is what distinguishes effective enforcement from symbolic enforcement.",
          "Even a single-site shutdown can raise legal streaming uptake in some markets, but conversion concentrates among higher-income users while price-constrained users migrate to other unlicensed sources.",
          "Notice-and-takedown has measurable effects where it reaches — targeted copyright protection produced a 14% sales increase in one quasi-experimental study — but has little purchase on foreign services."
        ]
      },
      {
        type: "p",
        text: "Each of those findings is from peer-reviewed work, three of them my own. In litigation this matters in both directions: it supports well-grounded damages claims and it undercuts inflated ones. A displacement assumption that contradicts the published record is not difficult to expose under cross-examination."
      },
      {
        type: "h",
        text: "Who I work with"
      },
      {
        type: "p",
        text: "Rightsholders, platforms, and defendants. I take the same methodological position regardless of the retaining party, which is the only position that survives adversarial scrutiny."
      }
    ],
    groundingPapers: [
      "piracy-website-blocking-consumer-behavior",
      "fighting-crime-online-judicial-site-blocking",
      "bootleg-to-binge-megafilmeshd-shutdown"
    ],
    engagements: [],
    faq: [
      {
        question: "What qualifies you as an expert on piracy damages?",
        answer:
          "Peer-reviewed publication in the field. My research on the effect of piracy website blocking on consumer behavior appeared in MIS Quarterly, my work on judicial site blocking in Communications of the ACM, and my study of user migration after Brazil's MegafilmesHD shutdown in the Review of Economic Research on Copyright Issues. This is the literature these cases are litigated against."
      },
      {
        question: "How is a displacement rate actually estimated?",
        answer:
          "With a treated group and a control group. You need a population exposed to the change — a block, a shutdown, an enforcement action — and a comparable population that was not, then you estimate the difference in consumption between them over time. Absent that structure, a displacement rate is an assumption, not an estimate."
      },
      {
        question: "Do you evaluate opposing experts' damages models?",
        answer:
          "Yes. Rebuttal work is a substantial part of these engagements, most often testing whether a damages model's displacement assumptions are consistent with the published empirical record and whether its counterfactual is identified at all."
      }
    ]
  },
  {
    slug: "platform-data-measurement",
    title: "Platform Data & Measurement Expert Witness",
    navLabel: "Platform Data & Measurement",
    metaTitle: "Platform Data & Measurement Expert Witness | Jonathan Hersh, PhD",
    metaDescription:
      "Expert witness economist on platform data, metrics, and measurement disputes — what telemetry, logs, and platform-reported figures can and cannot establish in litigation.",
    keywords: [
      "platform data expert witness",
      "measurement expert witness",
      "metrics dispute expert",
      "telemetry data litigation",
      "platform metrics economist",
      "data quality expert witness",
      "attribution measurement expert"
    ],
    leadAnswer:
      "Platform data disputes turn on whether the numbers a platform reports measure what a party claims they measure. Jonathan Hersh, PhD is an economist who evaluates platform metrics, telemetry, logs, and attribution methodology in litigation — assessing sampling, definitional changes, and inference from proxies, and explaining what the data can and cannot establish.",
    questions: [
      "What does this metric actually count, and has its definition changed over the period at issue?",
      "Is the underlying data a census or a sample, and how was it weighted?",
      "How much of the reported figure is measured versus modeled or imputed?",
      "Does the attribution methodology support the causal claim being made from it?",
      "Are the gaps and anomalies in the log data material to the conclusion?"
    ],
    methods: [
      "Reconstruction of metric definitions and audit of definitional changes over time",
      "Assessment of sampling design, weighting, and coverage in platform-reported data",
      "Separation of measured quantities from modeled or imputed ones",
      "Validation of proxy measures against ground truth where independent data exists",
      "Evaluation of attribution models and the causal claims drawn from them"
    ],
    body: [
      {
        type: "p",
        text: "Platform-reported numbers get treated in litigation as if they were direct observations. They rarely are. Most are the output of a measurement pipeline with a definition, a sampling design, an attribution model, and a revision history — and disputes frequently turn on a property of that pipeline rather than on the conduct itself."
      },
      {
        type: "h",
        text: "The recurring problems"
      },
      {
        type: "ul",
        items: [
          "A metric's definition changed mid-period, so a before-and-after comparison is measuring two different things.",
          "A figure presented as counted is partly modeled, and the model's assumptions are doing the work.",
          "Attribution logic assigns outcomes to a channel by rule, then the rule's output is cited as causal evidence.",
          "Sampling coverage differs systematically across the groups being compared.",
          "Log gaps are treated as zeros rather than as missing data."
        ]
      },
      {
        type: "h",
        text: "Why measurement is my area"
      },
      {
        type: "p",
        text: "Much of my published research is measurement under difficult conditions: estimating economic well-being from satellite imagery where survey data does not exist, and detecting war destruction from space using machine learning. That work is entirely about how far you can trust an inferred quantity, how to validate a proxy against ground truth, and how to characterize uncertainty honestly. Platform metrics present the same problem with better data and higher stakes."
      }
    ],
    groundingPapers: [
      "poverty-from-space-satellite-imagery",
      "monitoring-war-destruction-from-space",
      "open-data-mapping-poverty-belize",
      "how-apis-create-growth-inverting-the-firm"
    ],
    engagements: [],
    faq: [
      {
        question: "What kinds of measurement disputes do you work on?",
        answer:
          "Matters where a platform-reported figure is contested — engagement or usage metrics, advertising delivery and attribution, telemetry and server logs, and any dispute where a party's damages or liability theory rests on a number the platform itself produced."
      },
      {
        question: "Can platform metrics be used to prove causation?",
        answer:
          "Sometimes, but not on their own. Attribution models assign outcomes to channels by rule, and the rule's output is a bookkeeping result rather than a causal estimate. Establishing causation requires a design that identifies it — an experiment, a natural experiment, or a defensible counterfactual."
      },
      {
        question: "Do you work with raw log data?",
        answer:
          "Yes, and I prefer it. Platform-reported summaries have already had definitional and attribution decisions baked into them; raw logs let those decisions be examined rather than assumed. Documentation of business rules matters as much as the data itself."
      }
    ]
  },
  {
    slug: "antitrust-digital-markets",
    title: "Antitrust & Digital Markets Expert Witness",
    navLabel: "Antitrust & Digital Markets",
    metaTitle: "Antitrust & Digital Markets Expert Witness Economist | Jonathan Hersh, PhD",
    metaDescription:
      "Expert witness economist on antitrust in digital markets — API access, interoperability, self-preferencing, platform foreclosure, and competitive effects. Published in Management Science.",
    keywords: [
      "antitrust expert witness economist",
      "digital markets antitrust expert",
      "API access litigation expert",
      "interoperability expert witness",
      "platform foreclosure economist",
      "self-preferencing expert witness",
      "competitive effects digital platforms"
    ],
    leadAnswer:
      "Antitrust disputes in digital markets turn on whether a platform's design and access decisions foreclosed competition or simply reflected it. Jonathan Hersh, PhD is an economist who analyzes API access restrictions, interoperability, self-preferencing, and platform foreclosure — with peer-reviewed research in Management Science on how APIs restructure firm boundaries and growth.",
    questions: [
      "Did the access restriction foreclose rivals, or reflect ordinary product design?",
      "What is the relevant market when the product is an interface rather than a good?",
      "How dependent were complementors on the platform, and what alternatives existed?",
      "What happened to downstream entry, pricing, and output after the conduct?",
      "Can the claimed efficiency justification be tested against the data?"
    ],
    methods: [
      "Analysis of platform and complementor dependence using developer and usage data",
      "Competitive-effects analysis of access, pricing, and interoperability changes",
      "Event-study and difference-in-differences estimation around policy changes",
      "Market definition analysis for interface and platform products",
      "Testing efficiency justifications against observed outcomes"
    ],
    body: [
      {
        type: "p",
        text: "API and interoperability disputes are hard because the conduct at issue is usually indistinguishable, on its face, from ordinary product management. Rate limits, deprecations, and tier changes are routine engineering decisions that can also foreclose a rival. Separating the two requires looking at what actually happened to dependent firms afterward, not at the stated rationale."
      },
      {
        type: "h",
        text: "What the research contributes"
      },
      {
        type: "p",
        text: "My work in Management Science on how APIs create growth by inverting the firm studies how programmatic interfaces move activity across firm boundaries and what that does to growth for both the platform and the firms building on it. That gives a structural account of platform-complementor dependence — the relationship at the center of most access disputes — grounded in data rather than in analogy to physical bottlenecks."
      },
      {
        type: "h",
        text: "Where these cases are won and lost"
      },
      {
        type: "ul",
        items: [
          "Market definition, when the product is an interface rather than a thing.",
          "Whether the foreclosure theory has a testable prediction, or only a narrative.",
          "Whether the efficiency justification was contemporaneous or constructed for litigation.",
          "Whether observed harm to a complementor reflects foreclosure or its own competitive position."
        ]
      }
    ],
    groundingPapers: ["how-apis-create-growth-inverting-the-firm"],
    engagements: [],
    faq: [
      {
        question: "What antitrust matters do you take?",
        answer:
          "Digital-market matters where the economics are technical: API access and termination, interoperability restrictions, self-preferencing, tying in software ecosystems, and platform foreclosure theories. I work for plaintiffs and defendants."
      },
      {
        question: "How do you distinguish foreclosure from ordinary product design?",
        answer:
          "By examining outcomes rather than intent. Foreclosure has testable implications for complementor entry, exit, pricing, and output. If a theory of harm makes no prediction that could fail against the data, it is a narrative rather than an economic analysis, and it will be treated as one."
      },
      {
        question: "Do you have published research in this area?",
        answer:
          "Yes — 'How APIs Create Growth by Inverting the Firm,' published in Management Science, on how programmatic interfaces reallocate activity across firm boundaries and affect growth for platforms and complementors."
      }
    ]
  }
];

export function getPracticeArea(slug: string): PracticeArea | undefined {
  return practiceAreas.find((area) => area.slug === slug);
}

/**
 * Reverse lookup: which practice areas cite this paper. Paper pages attract
 * academic and journalist traffic; this is the only path from that audience to
 * the litigation pages, and it is derived rather than hand-maintained so the
 * two directions cannot drift apart.
 */
export function practiceAreasForPaper(paperSlug: string): PracticeArea[] {
  return practiceAreas.filter((area) => area.groundingPapers.includes(paperSlug));
}
