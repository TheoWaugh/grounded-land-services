import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";
import Script from "next/script";

const BASE_URL = "https://www.groundedlandservices.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Grounded Land Services | Premier Land Clearing & Site Development — Texas",
    template: "%s | Grounded Land Services",
  },
  description:
    "Grounded Land Services is Texas's premier land clearing and site development company. Specializing in forestry mulching, cedar removal, rock crushing, site preparation, utility trenching, and underbrushing. Serving Austin, San Antonio, Houston, Dallas, and 100+ Texas cities. Licensed, insured, and certified. Call (512) 571-6700 for a free quote.",
  keywords: [
    "land clearing Texas",
    "forestry mulching Texas",
    "cedar removal Texas",
    "rock crushing Texas",
    "site preparation Texas",
    "land clearing Austin",
    "land clearing San Antonio",
    "land clearing Houston",
    "land clearing Hill Country",
    "brush clearing Texas",
    "underbrushing Texas",
    "fence line clearing Texas",
    "tree pile shredding",
    "dirt work Texas",
    "land development Texas",
    "Grounded Land Services",
    "Logan land clearing",
    "acreage clearing Texas",
    "wildfire mitigation Texas",
    "invasive cedar removal Texas",
  ],
  authors: [{ name: "Grounded Land Services" }],
  creator: "Grounded Land Services",
  publisher: "Grounded Land Services",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Grounded Land Services",
    title: "Grounded Land Services | Premier Land Clearing & Site Development — Texas",
    description:
      "Transform your raw acreage into a functional, high-value property. Expert forestry mulching, land clearing, cedar removal, rock crushing, and site development across Texas. Licensed & insured. Free quotes.",
    images: [
      {
        url: "/images/official/homepage.jpeg",
        width: 1200,
        height: 630,
        alt: "Grounded Land Services — aerial view of cleared Texas land",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grounded Land Services | Land Clearing & Site Development — Texas",
    description:
      "Premier land clearing, forestry mulching, cedar removal, rock crushing, and site development across Texas. Free quotes. (512) 571-6700.",
    images: ["/images/official/homepage.jpeg"],
  },
  alternates: {
    canonical: BASE_URL,
  },
};

// JSON-LD Local Business structured data for Google & AI
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/#business`,
  name: "Grounded Land Services",
  alternateName: "GLS",
  description:
    "Grounded Land Services is a premier land clearing and site development company in Texas, dedicated to transforming raw acreage into functional, high-value assets. Specializing in forestry mulching, traditional land clearing, cedar tree removal, rock crushing, site preparation, utility trenching, underbrushing, fence line clearing, dirt work, driveways, retaining walls, demolition, and site cleanup.",
  url: BASE_URL,
  telephone: "+15125716700",
  email: "Logan@groundedlandservices.com",
  logo: `${BASE_URL}/logo.png`,
  image: `${BASE_URL}/images/official/homepage.jpeg`,
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Check, Credit Card",
  areaServed: {
    "@type": "State",
    name: "Texas",
    containedIn: { "@type": "Country", name: "United States" },
  },
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: { "@type": "GeoCoordinates", latitude: 30.2672, longitude: -97.7431 },
    geoRadius: "500000",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Land Clearing & Site Development Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Forestry Mulching", description: "Single-step land clearing using high-flow mulching head to grind vegetation into nutrient-rich mulch. No burn piles, no hauling." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Land Clearing", description: "Complete site transformation — stump-free, debris-free, seed-ready, and instantly mowable acreage." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cedar Tree Removal", description: "Removal of invasive cedar trees that consume up to 30 gallons of groundwater per day. Wildfire mitigation and pasture restoration." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Rock Crushing", description: "On-site processing of stone into high-quality aggregate for driveways and pads." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Site Preparation", description: "Precision clearing, debris removal, and expert grading for construction-ready land." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Utility Trenching", description: "Excavation of underground pathways for water, electrical, gas, and communication lines." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Underbrushing", description: "Strategic clearing of dense thickets while preserving mature canopy trees." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fence Line Clearing", description: "Brush and debris removal along property boundaries for new or existing fencing." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tree Pile Shredding", description: "On-site processing of downed trees and woody debris into organic mulch." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Site Cleanup", description: "Post-construction debris removal and land restoration to a clean, move-in-ready finish." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dirt Work & Grading", description: "Precision soil grading, leveling, and movement for drainage and structural foundation." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Driveways", description: "Gravel, crushed rock, and prepared-base driveway construction with proper compaction and crowning." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Retaining Walls", description: "Engineered walls to hold back soil, prevent erosion, and create level usable space." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Demolition", description: "Safe teardown and complete removal of old structures." } },
    ],
  },
  sameAs: [
    "https://www.instagram.com/Grounded.LandServices",
    "https://www.facebook.com/GroundedLandServices",
    "https://www.tiktok.com/@grounded.land.services",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    bestRating: "5",
    worstRating: "1",
    reviewCount: "7",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Dylan Gavit" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "On time, hard-working, nonstop, knowledgeable, easy to work with. They mowed down giant cedar brush piles that had been there for at least 15 years down to nothing. 10/10 five star crew.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Mckenzie Schults" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "They cleared five acres of heavy underbrush efficiently and thoroughly. The results exceeded my expectations! The crew was extremely professional and communicated clearly throughout.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Kelley Arnold" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "Logan is the hardest worker out there! Great attention to detail, does impeccable work, operates with utmost integrity and professionalism.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Mike Janak" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "Logan cleared a 50x300 path through heavily wooded, sloping terrain. Walking that area before was miserable and now it's a beautiful stroll. His attention to detail has my neighbors asking for his card.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '896533396485925');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=896533396485925&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}