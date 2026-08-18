export type ServiceListItem = string | { label: string; href: string };

export interface ServiceMediaItem {
  type: "image" | "youtube";
  src: string; // image path, or YouTube video ID for youtube type
  alt?: string;
  caption?: string;
}

export interface ServicePageSection {
  heading?: string;
  subheading?: string;
  subheadingCentered?: boolean;
  paragraphs?: string[];
  listIntro?: string;
  list?: ServiceListItem[];
  listColumns?: 2 | 3 | 4;
  scenarios?: { icon: string; title: string; description: string }[];
  steps?: { title: string; description: string }[];
  note?: { text: string; linkLabel: string; href: string };
  media?: ServiceMediaItem[];
  videoCarousel?: { videoIds: string[]; captions?: string[] };
  loopingVideo?: { videoId: string; caption?: string };
comparison?: {
    left: { heading: string; paragraphs?: string[]; listIntro?: string; list?: string[]; image?: string; imageAlt?: string };
    right: { heading: string; paragraphs?: string[]; listIntro?: string; list?: string[]; image?: string; imageAlt?: string };
  };
  compareSlider?: {
    beforeSrc: string;
    beforeLabel: string;
    afterSrc: string;
    afterLabel: string;
  };
    closingParagraphs?: string[];
  emphasizeLastClosing?: boolean;
  iconCards?: { icon: string; title: string; description: string }[];
  iconCardsColumns?: 2 | 3 | 4;
  areaMapQuery?: string;
  ctaButton?: { label: string; href: string };
  relatedServices?: { label: string; href: string }[];
  industries?: string[];
}
export interface ServicePageContent {
  title: string;
  metaDescription: string;
  icon: string;
  heroImage: string;
  intro: string;
  sections: ServicePageSection[];
  faqs: { question: string; answer: string; link?: { label: string; href: string } }[];
  pricing: { range: string; unit: string; note: string };
}