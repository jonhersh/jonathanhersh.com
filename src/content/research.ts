/**
 * Peer-reviewed publication dataset.
 *
 * Derived from research_papers/research_papers.csv (titles, venues, authors,
 * publication links) and research_papers/research_papers.txt (abstract text).
 * Abstract prose is the author's own — do not paraphrase or regenerate it here.
 *
 * `abstract` is stored as semantic blocks so each paper page renders real
 * headings and lists rather than one opaque paragraph. Structured markup is
 * substantially easier for search and AI answer engines to extract.
 */

export type AbstractBlock =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };

export type Paper = {
  slug: string;
  title: string;
  venue: string;
  year: string;
  /** ISO date where a full date is known, otherwise the year. */
  datePublished: string;
  authors: string[];
  /** One-sentence extractable takeaway, shown as the lead answer. */
  keyFinding: string;
  abstract: AbstractBlock[];
  /** Canonical published version (publisher, DOI, or preprint). */
  publisherUrl?: string;
  pdfPath: string;
  imagePath: string;
};

export const papers: Paper[] = [
  {
    slug: "poverty-mapping-cnns-mexico",
    title: "Poverty Mapping Using Convolutional Neural Networks Trained on High and Medium Resolution Satellite Images, With an Application in Mexico",
    venue: "NeurIPS 2017 ML for the Developing World Workshop",
    year: "2017",
    datePublished: "2017-11-16",
    authors: ["Boris Babenko", "Jonathan Hersh", "David Newhouse", "Anusha Ramakrishnan", "Tom Swartz"],
    keyFinding: "Demonstrates how CNN models trained on satellite imagery can estimate poverty distribution with meaningful predictive power in low-data settings.",
    abstract: [
      { type: "p", text: "Mapping the spatial distribution of poverty in developing countries remains an important and costly challenge. These “poverty maps” are key inputs for poverty targeting, public goods provision, political accountability, and impact evaluation, that are all the more important given the geographic dispersion of the remaining bottom billion severely poor individuals. In this paper we train Convolutional Neural Networks (CNNs) to estimate poverty directly from high and medium resolution satellite images. We use both Planet and Digital Globe imagery with spatial resolutions of 3–5 m² and 50 cm² respectively, covering all 2 million km² of Mexico. Benchmark poverty estimates come from the 2014 MCS-ENIGH combined with the 2015 Intercensus and are used to estimate poverty rates for 2,456 Mexican municipalities. CNNs are trained using the 896 municipalities in the 2014 MCS-ENIGH. We experiment with several architectures (GoogleNet, VGG) and use GoogleNet as a final architecture where weights are fine-tuned from ImageNet. We find that:" },
      { type: "ol", items: ["The best models, which incorporate satellite-estimated land use as a predictor, explain approximately 57% of the variation in poverty in a validation sample of 10 percent of MCS-ENIGH municipalities.", "Across all MCS-ENIGH municipalities explanatory power reduces to 44% in a CNN prediction-and-landcover model.", "Predicted poverty from the CNN predictions alone explains 47% of the variation in poverty in the validation sample and 37% over all MCS-ENIGH municipalities.", "In urban areas we see slight improvements from using Digital Globe versus Planet imagery, which explain 61% and 54% of poverty variation respectively."] },
      { type: "p", text: "We conclude that CNNs can be trained end-to-end on satellite imagery to estimate poverty, although more work is needed to understand how the training process influences out-of-sample validation." },
    ],
    publisherUrl: "https://arxiv.org/pdf/1711.06323",
    pdfPath: "/research/2017_poverty_mapping_using_CNNs_Mexico.pdf",
    imagePath: "/research/2017_poverty_mapping_using_CNNs_Mexico_image.webp"
  },
  {
    slug: "big-data-in-economics",
    title: "Big Data in Economics",
    venue: "IZA World of Labor",
    year: "2018",
    datePublished: "2018-09-01",
    authors: ["Matthew Harding", "Jonathan Hersh"],
    keyFinding: "Explains how high-frequency, high-volume data and machine learning methods are transforming empirical economics and policy design.",
    abstract: [
      { type: "p", text: "Big Data refers to data sets of much larger size, higher frequency, and often more personalized information. Examples include data collected by smart sensors in homes or aggregation of tweets on Twitter. In small data sets, traditional econometric methods tend to outperform more complex techniques. In large data sets, however, machine learning methods shine. New analytic approaches are needed to make the most of Big Data in economics. Researchers and policymakers should thus pay close attention to recent developments in machine learning techniques if they want to fully take advantage of these new sources of Big Data." },
    ],
    publisherUrl: "https://www.econstor.eu/handle/10419/193433",
    pdfPath: "/research/2018_big_data_in_economics.pdf",
    imagePath: "/research/2018_big_data_in_economics_image.webp"
  },
  {
    slug: "piracy-website-blocking-consumer-behavior",
    title: "The Effect of Piracy Website Blocking on Consumer Behavior",
    venue: "MIS Quarterly",
    year: "2020",
    datePublished: "2020",
    authors: ["Brett Danaher", "Jonathan Hersh", "Michael D. Smith", "Rahul Telang"],
    keyFinding: "Finds that coordinated blocking of multiple piracy sites can meaningfully shift behavior toward legal consumption channels.",
    abstract: [
      { type: "p", text: "In this study, the authors examine what drives the success or failure of various supply-side anti-piracy enforcement actions, such as piracy website blocking. They analyze three court-ordered events affecting consumers in the United Kingdom:" },
      { type: "ol", items: ["ISPs blocking 53 video piracy sites in 2014", "ISPs blocking 19 piracy sites in 2013", "The blocking of a single dominant site, The Pirate Bay, in 2012"] },
      { type: "h", text: "Key Findings" },
      { type: "ul", items: ["Blocking 53 sites in 2014 caused treated users to decrease piracy and increase legal subscription site usage by 7–12%, along with growth in new paid subscriptions.", "Blocking 19 sites in 2013 produced similar results.", "Blocking only The Pirate Bay in 2012 led to no increase in legal site use, but did drive users to other unblocked piracy and VPN sites.", "Increased search and learning costs of finding new piracy channels help explain why blocking multiple sites is more effective than blocking a single dominant one."] },
      { type: "h", text: "Implication" },
      { type: "p", text: "To meaningfully increase legal IP use in the presence of a dominant piracy channel, enforcement must block multiple piracy sites to raise the overall cost of accessing pirated content — a nuance often missed in previous literature." },
    ],
    publisherUrl: "https://misq.umn.edu/misq/article-abstract/44/2/631/452/The-Effect-of-Piracy-Website-Blocking-on-Consumer?redirectedFrom=fulltext",
    pdfPath: "/research/2020_effect_of_piracy_website_blocking_UK.pdf",
    imagePath: "/research/2020_effect_of_piracy_website_blocking_UK_image.webp"
  },
  {
    slug: "monitoring-war-destruction-from-space",
    title: "Monitoring war destruction from space using machine learning",
    venue: "Proceedings of the National Academy of Sciences",
    year: "2021",
    datePublished: "2021",
    authors: ["Hannes Mueller", "Andre Groeger", "Jonathan Hersh", "Andrea Matranga", "Joan Serrat"],
    keyFinding: "Develops machine-learning methods to detect conflict-related infrastructure destruction at scale from satellite imagery.",
    abstract: [
      { type: "p", text: "Existing data on building destruction in conflict zones often rely on eyewitness reports or manual detection, making them scarce, incomplete, and potentially biased. This shortage of reliable data limits media reporting, humanitarian relief efforts, human-rights monitoring, reconstruction planning, and academic research." },
      { type: "p", text: "This article presents an automated method of measuring destruction in high-resolution satellite imagery using deep-learning techniques enhanced with label augmentation and spatiotemporal smoothing to interpret the structure and progression of destruction." },
      { type: "p", text: "As a proof of concept, the authors apply the method to the Syrian civil war, reconstructing destruction dynamics across major cities. Their approach produces destruction data with unprecedented resolution, frequency, and accuracy—making such information far more useful for researchers and practitioners." },
      { type: "h", text: "Methodological Contributions" },
      { type: "ol", items: ["Label augmentation: A new strategy for expanding destruction class labels using contextual assumptions and additional information.", "Two-stage classification process: Designed to smooth spatial and temporal noise inherent in high-resolution satellite data."] },
      { type: "p", text: "The model uses convolutional neural networks (CNNs) trained to detect features of destruction caused by heavy weaponry (e.g., artillery, bombing), such as rubble or bomb craters. The approach significantly improves the timeliness, resolution, and reliability of destruction data in conflict settings." },
    ],
    publisherUrl: "https://www.pnas.org/doi/abs/10.1073/pnas.2025400118",
    pdfPath: "/research/2021_monitoring_destruction_space-compressed.pdf",
    imagePath: "/research/2021_monitoring_destruction_space-compressed_image.webp"
  },
  {
    slug: "open-data-mapping-poverty-belize",
    title: "Open data for algorithms: mapping poverty in Belize using open satellite derived features and machine learning",
    venue: "Information Technology for Development",
    year: "2021",
    datePublished: "2021",
    authors: ["Jonathan Hersh", "Ryan Engstrom", "Michael Mann"],
    keyFinding: "Shows that open satellite feature sets can improve poverty prediction performance and reduce cost barriers for policy analytics.",
    abstract: [
      { type: "p", text: "Several methods have been proposed for using satellite imagery to model poverty. These include poverty mapping using convolutional neural networks applied either directly or via transfer learning on high-resolution satellite images, or combinations of methods that merge satellite imagery with standard approaches. However, many of these methods require proprietary imagery which, due to cost and infrequent acquisition, restricts practical deployment." },
      { type: "p", text: "This study investigates whether satellite-derived poverty maps can be improved by incorporating features from Sentinel-2 and MODIS, two open-source and freely available imagery sources. The authors estimate a poverty map for Belize that integrates spatial and time-series features extracted from these sensors, both with and without survey-derived variables." },
      { type: "p", text: "Results show an 8% improvement in model performance when open-source satellite features are included. The authors conclude that Open Data for Development should adopt open-data pipelines wherever possible." },
    ],
    publisherUrl: "https://www.tandfonline.com/doi/abs/10.1080/02681102.2020.1811945",
    pdfPath: "/research/2021_open_data_algorithms_mapping_poverty_belize_sat_ML.pdf",
    imagePath: "/research/2021_open_data_algorithms_mapping_poverty_belize_sat_ML_image.webp"
  },
  {
    slug: "car-accidents-smartphones-3g-coverage",
    title: "Car accidents, smartphone adoption and 3G coverage",
    venue: "Journal of Economic Behavior & Organization",
    year: "2022",
    datePublished: "2022",
    authors: ["Jonathan Hersh", "Bree J. Lang", "Matthew Lang"],
    keyFinding: "Links smartphone diffusion and network coverage to measurable increases in accident risk, with policy implications for road safety.",
    abstract: [
      { type: "p", text: "This paper examines the relationship between smartphone use by drivers and traffic accidents in California between 2001 and 2013. To estimate smartphone use, the authors first identify when the widespread adoption of modern smartphones began in 2009 following the release of the iPhone 3G and T-Mobile G1." },
      { type: "p", text: "Smartphone use estimates are combined with annual 3G coverage maps constructed from cellular tower information using a machine learning framework. Using a difference-in-differences design, the authors estimate the combined effect of smartphone adoption and 3G coverage on quarter-mile road segments." },
      { type: "p", text: "Controlling for census tract population density, road and year fixed effects, Poisson regression results show a statistically significant increase in traffic accident rates along road segments where smartphone use becomes possible. The preferred specification indicates that smartphones increase accident rates by 2.9%, resulting in approximately 3,500 additional accidents per year in California." },
      { type: "p", text: "Robustness checks and comparisons with individual-level studies support the findings. The results guide policies aimed at reducing distracted driving and cell phone–related accidents." },
    ],
    publisherUrl: "https://www.sciencedirect.com/science/article/pii/S0167268122000464",
    pdfPath: "/research/2022_car_accidents_cell_phones.pdf",
    imagePath: "/research/2022_car_accidents_cell_phones_image.webp"
  },
  {
    slug: "how-apis-create-growth-inverting-the-firm",
    title: "How APIs Create Growth by Inverting the Firm",
    venue: "Management Science",
    year: "2022",
    datePublished: "2022",
    authors: ["Seth G. Benzell", "Jonathan Hersh", "Marshall Van Alstyne"],
    keyFinding: "Documents growth gains from API adoption and platform openness, while quantifying associated governance and security tradeoffs.",
    abstract: [
      { type: "p", text: "Traditional asset management strategy has focused on creating barriers to entry and protecting proprietary assets to maintain competitive advantage. A new “Inverted Firm” paradigm has emerged in which firms share data to become platforms, opening digital services to third parties and capturing part of the external value they generate. This stands in contrast to the traditional pipeline model where firms create value internally." },
      { type: "p", text: "This paper quantitatively evaluates the impact of adopting an inverted firm model by examining Application Programming Interfaces (APIs), a critical enabling technology. Using both public data and proprietary data from a private API development firm, the authors document rapid growth of the API ecosystem and the expansion of app connectivity since 2005." },
      { type: "p", text: "Using difference-in-differences and synthetic control techniques, the paper finds that:" },
      { type: "ul", items: ["Public firms adopting public APIs grew 38.7% more than comparable non-adopters.", "No significant productivity gains are seen for firms using APIs solely for internal processes.", "Among adopters, those attracting more third-party complementors and gaining greater network centrality experience faster growth."] },
      { type: "p", text: "Leveraging variation in network centrality induced by API degradation, an instrumental variables analysis provides causal evidence of the role APIs play in boosting firm market value." },
      { type: "p", text: "However, the study also identifies a key downside: external API adoption increases vulnerability to data breaches." },
      { type: "p", text: "Overall, the findings suggest that APIs significantly and positively influence economic and firm-level growth, primarily through enabling an inverted firm model rather than enhancing traditional pipeline operations." },
    ],
    publisherUrl: "https://open.bu.edu/bitstream/handle/2144/49131/benzell-et-al-2023-how-apis-create-growth-by-inverting-the-firm.pdf?sequence=2",
    pdfPath: "/research/2022_how_APIs_create_growth_inverting_firm.pdf",
    imagePath: "/research/2022_how_APIs_create_growth_inverting_firm_image.webp"
  },
  {
    slug: "hybrid-unet-war-destruction-segmentation",
    title: "Hybrid U-Net: Semantic segmentation of high-resolution satellite images to detect war destruction",
    venue: "Machine Learning with Applications",
    year: "2022",
    datePublished: "2022",
    authors: ["Shima Nabiee", "Matthew Harding", "Jonathan Hersh", "Nader Bagherzadeh"],
    keyFinding: "Introduces a multi-scale segmentation architecture that improves detection of conflict damage in high-resolution satellite images.",
    abstract: [
      { type: "p", text: "Destruction caused by violent conflicts plays a significant role in understanding conflict dynamics, a growing area in economics and political science. However, existing data on conflict impacts typically come from news or eyewitness reports, which can be incomplete, unreliable, or biased. Using satellite imagery and deep learning techniques, the authors aim to extract objective, automated information on violent events." },
      { type: "p", text: "The authors construct a dataset of high-resolution satellite images of Syria, manually annotating destroyed areas at the pixel level. Using this dataset, they train and test semantic segmentation models to detect building damage of various sizes. A U-Net model is chosen for its strong performance on small and imbalanced datasets, although the raw U-Net architecture does not fully exploit multi-scale feature maps—an important factor for fine-grained segmentation, especially with high-resolution images." },
      { type: "p", text: "To address this limitation, the paper proposes a multi-scale feature fusion approach and designs a multi-scale skip-connected Hybrid U-Net for segmenting high-resolution satellite images. Experiments show that Hybrid U-Net and its variants produce strong segmentation performance in detecting various types of war-related building destruction." },
      { type: "p", text: "Notably, the Hybrid U-Net significantly improves segmentation results over standard U-Net:" },
      { type: "ul", items: ["Mean Intersection over Union (mIoU) improved by 7.05%", "Mean Dice Score improved by 8.09%"] },
      { type: "p", text: "These findings demonstrate that the proposed Hybrid U-Net architecture is more effective at detecting war-related destruction from high-resolution satellite imagery compared to baseline models." },
    ],
    publisherUrl: "https://www.sciencedirect.com/science/article/pii/S2666827022000688",
    pdfPath: "/research/2022_hybrid_UNET_semantic_segmentation_satellite_war_destruction.pdf",
    imagePath: "/research/2022_hybrid_UNET_semantic_segmentation_satellite_war_destruction_image.webp"
  },
  {
    slug: "poverty-from-space-satellite-imagery",
    title: "Poverty from Space: Using High Resolution Satellite Imagery for Estimating Economic Well-being",
    venue: "World Bank Economic Review",
    year: "2022",
    datePublished: "2022",
    authors: ["Ryan Engstrom", "Jonathan Hersh", "David Newhouse"],
    keyFinding: "Uses high-resolution imagery to estimate consumption and poverty with robust out-of-sample performance.",
    abstract: [
      { type: "p", text: "Can features extracted from high spatial resolution satellite imagery accurately estimate poverty and economic well-being? This study investigates that question by extracting both object and texture features from satellite images of Sri Lanka. These features are used to estimate poverty rates and average expected log consumption based on small-area estimates derived from census data for 1,291 administrative units." },
      { type: "p", text: "Extracted features include:" },
      { type: "ul", items: ["number and density of buildings", "prevalence of building shadows (proxying building height)", "number of cars", "length of roads", "types of agriculture", "roof material", "multiple texture and spectral indicators"] },
      { type: "p", text: "A linear regression model explains 49–61% of variation in average expected log consumption and 37–62% of variation in poverty rates. Estimates remain accurate across the consumption distribution and when extrapolating predictions into adjacent areas. Performance declines when fewer households are used to estimate ground-truth measures of poverty and welfare." },
    ],
    publisherUrl: "https://academic.oup.com/wber/article/36/2/382/6333255",
    pdfPath: "/research/2021_poverty_from_space_sri_lanka.pdf",
    imagePath: "/research/2021_poverty_from_space_sri_lanka_image.webp"
  },
  {
    slug: "sweet-diversity-colonial-goods-welfare-gains",
    title: "Sweet diversity: Colonial goods and the welfare gains from global trade after 1492",
    venue: "Explorations in Economic History",
    year: "2023",
    datePublished: "2023",
    authors: ["Jonathan Hersh", "Hans-Joachim Voth"],
    keyFinding: "Estimates large historical welfare gains from imported consumption variety and changing food baskets in Europe.",
    abstract: [
      { type: "p", text: "When did overseas trade start to matter for living standards? Traditional real-wage indices suggest that living standards in Europe stagnated before 1800. This paper argues that welfare may have risen substantially—but quietly—as a result of the influx of new goods." },
      { type: "p", text: "After 1492, colonial “luxuries” such as tea, coffee, and sugar became highly desirable. Combined with new staple foods like potatoes and tomatoes, overseas goods transformed European diets following the discovery of the Americas and the rounding of the Cape of Good Hope. By the late 18th century, they were household essentials in many countries." },
      { type: "p", text: "Using two standard methods to calculate welfare gains, the authors estimate the magnitude of increased variety. Although precision is difficult, the findings suggest that gains from greater variety may have boosted European real incomes by 10% or more, depending on assumptions." },
    ],
    publisherUrl: "https://www.sciencedirect.com/science/article/pii/S0014498322000468",
    pdfPath: "/research/2022_sweet_diversity_colonial_goods_and_welfare_gains_global_trade.pdf",
    imagePath: "/research/2022_sweet_diversity_colonial_goods_and_welfare_gains_global_trade_image.webp"
  },
  {
    slug: "bootleg-to-binge-megafilmeshd-shutdown",
    title: "From Bootleg to Binge: User Migration and Legal Demand Following Brazil’s MegafilmesHD Shutdown",
    venue: "Review of Economic Research on Copyright Issues",
    year: "2025",
    datePublished: "2025",
    authors: ["Brett Danaher", "Jonathan Hersh", "Michael D. Smith"],
    keyFinding: "Analyzes substitution between piracy and legal streaming after platform shutdown, with heterogeneous adoption effects by income.",
    abstract: [
      { type: "p", text: "In November 2015, the Brazilian Federal Police shut down MegafilmesHD.net, a major piracy streaming site that generated roughly 60 million monthly visits, making it the largest piracy site in Brazil at the time." },
      { type: "p", text: "The authors assemble a balanced click-stream panel of 2,557 Brazilian Internet users and estimate a generalized difference-in-differences model to measure the impact of the shutdown on both legal and illegal media consumption." },
      { type: "h", text: "Key Findings" },
      { type: "ul", items: ["The shutdown caused treated users to substitute toward other piracy streaming sites by 20% (measured in time: +61% minutes).", "Despite this diversion, users also increased their Netflix visits by 6% (+11% minutes)."] },
      { type: "p", text: "Because the dataset contains self-reported demographics, the study reveals who changes behavior after enforcement:" },
      { type: "ul", items: ["Men, urban residents, and professional-class users diverted most heavily toward alternative piracy sites.", "Income-constrained users (students and the unemployed) were least likely to adopt paid streaming following the shutdown."] },
      { type: "h", text: "Conclusion" },
      { type: "p", text: "Even a single-site shutdown can meaningfully increase legal streaming uptake in an emerging market. However, legal conversion is concentrated among higher-income users. The findings suggest that:" },
      { type: "ul", items: ["Price discrimination or", "Ad-supported versions of legal services"] },
      { type: "p", text: "may complement enforcement by attracting more price-sensitive consumers." },
    ],
    pdfPath: "/research/2025_megafilmes-shutdown-RERCI.pdf",
    imagePath: "/research/2025_megafilmes-shutdown-RERCI_image.webp"
  },
  {
    slug: "fighting-crime-online-judicial-site-blocking",
    title: "Fighting Crime Online: Options, evidence, and the empirical case for judicial site blocking in the U.S.",
    venue: "Communications of the ACM",
    year: "2025",
    datePublished: "2025",
    authors: ["Brett Danaher", "Jonathan Hersh", "Michael D. Smith", "Rahul Telang"],
    keyFinding: "Synthesizes evidence on judicial site blocking as a policy lever for reducing online criminal activity.",
    abstract: [
      { type: "p", text: "An overview of policy options and evidence on judicial site blocking in the U.S., arguing for its effectiveness as a tool to reduce online crime." },
    ],
    publisherUrl: "https://www.sciencedirect.com/science/article/pii/S0014498322000468",
    pdfPath: "/research/2025_FightingCrime_Smith_V03.pdf",
    imagePath: "/research/2025_FightingCrime_Smith_V03_image.webp"
  },
];

export function papersByNewest(): Paper[] {
  return [...papers].sort((a, b) => Number(b.year) - Number(a.year));
}

export function getPaper(slug: string): Paper | undefined {
  return papers.find((paper) => paper.slug === slug);
}

/** Flattened abstract text for meta descriptions and Schema.org `abstract`. */
export function abstractText(paper: Paper): string {
  return paper.abstract
    .map((block) => (block.type === "ul" || block.type === "ol" ? block.items.join(" ") : block.text))
    .join(" ");
}
