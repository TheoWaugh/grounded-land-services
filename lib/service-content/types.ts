export interface ComparisonSide {
  heading: string;
  paragraphs?: string[];
  listIntro?: string;
  list?: string[];
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface ServiceSection {
  heading?: string;
  paragraphs?: string[];
  listIntro?: string;
  list?: string[];
  areasServed?: boolean;
  steps?: ProcessStep[];
  comparison?: {
    left: ComparisonSide;
    right: ComparisonSide;
  };
  loopingVideo?: { videoId: string; caption?: string };
  areaMapQuery?: string;
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