export interface ComparisonSide {
  heading: string;
  paragraphs?: string[];
  listIntro?: string;
  list?: string[];
  image?: string;
  imageAlt?: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export type ServiceListItem = string | { label: string; href: string };

export interface ServiceSection {
  heading?: string;
  paragraphs?: string[];
  listIntro?: string;
  list?: ServiceListItem[];
  areasServed?: boolean;
  steps?: ProcessStep[];
  comparison?: {
    left: ComparisonSide;
    right: ComparisonSide;
  };
  compareSlider?: {
    beforeSrc: string;
    beforeLabel: string;
    afterSrc: string;
    afterLabel: string;
  };
  closingParagraphs?: string[];
  loopingVideo?: { videoId: string; caption?: string };
  areaMapQuery?: string;
  relatedServices?: { label: string; href: string }[];
  iconCards?: { icon: string; title: string; description: string }[];
  iconCardsColumns?: 2 | 3 | 4;
  ctaButton?: { label: string; href: string };
  media?: { type: "image" | "youtube"; src: string; alt?: string; caption?: string }[];
videoCarousel?: { videoIds: string[]; captions?: string[] };
}

export interface ServicePricing {
  label: string;
  range: string;
  unit: string;
  note: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceContent {
  title: string;
  metaDescription: string;
  sections: ServiceSection[];
  pricing?: ServicePricing;
  faqs?: ServiceFaq[];
  county?: string;
}