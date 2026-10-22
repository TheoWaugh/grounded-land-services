import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";
import MobileActionBar from "./components/MobileActionBar";
import ClickTracker from "./components/ClickTracker";
import Script from "next/script";
import { serviceAreas } from "@/data/service-areas";

const BASE_URL = "https://www.groundedlandservices.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Central Texas Land Clearing & Forestry Mulching | Grounded",
    template: "%s | Grounded Land Services",
  },
  description:
    "Land clearing, forestry mulching & rock removal across Central Texas and the Hill Country, based in Bertram. Licensed & insured. Free estimates: (512) 571-6700.",
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
    title: "Central Texas Land Clearing & Forestry Mulching | Grounded Land Services",
    description:
      "Land clearing, forestry mulching, cedar and rock removal across Central Texas and the Hill Country. Based in Bertram. Licensed & insured. Free estimates.",
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
    title: "Central Texas Land Clearing & Forestry Mulching | Grounded Land Services",
    description:
      "Land clearing, forestry mulching, cedar and rock removal across Central Texas and the Hill Country. Free estimates. (512) 571-6700.",
    images: ["/images/official/homepage.jpeg"],
  },
  alternates: {
    canonical: BASE_URL,
  },
};

const dayHours = (days: string[], opens: string, closes: string) => ({
  "@type": "OpeningHoursSpecification",
  dayOfWeek: days,
  opens,
  closes,
});

// JSON-LD Local Business structured data for Google & AI
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${BASE_URL}/#business`,
  name: "Grounded Land Services",
  description:
    "Grounded Land Services is a land clearing and site development company based in Bertram, Texas, serving Central Texas, the Hill Country, and the San Antonio area. Services include forestry mulching, traditional land clearing, cedar tree removal, rock removal, rock crushing, site preparation, utility trenching, underbrushing, fence line clearing, dirt work, driveways, retaining walls, demolition, and site cleanup.",
  url: BASE_URL,
  telephone: "+15125716700",
  email: "Logan@groundedlandservices.com",
  foundingDate: "2025",
  logo: `${BASE_URL}/logos.png`,
  image: `${BASE_URL}/images/official/homepage.jpeg`,
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Check, Credit Card",
    address: {
    "@type": "PostalAddress",
    addressLocality: "Bertram",
    addressRegion: "TX",
    postalCode: "78605",
    addressCountry: "US",
  },
  areaServed: Object.values(serviceAreas)
    .flat()
    .map((city) => ({
      "@type": "City",
      name: `${city}, TX`,
      containedInPlace: { "@type": "State", name: "Texas" },
    })),
  openingHoursSpecification: [
    dayHours(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], "06:00", "18:00"),
    dayHours(["Saturday", "Sunday"], "08:00", "17:00"),
  ],
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
    "https://share.google/GiUNVko4QWfbPBpOW",
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
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KW3HPEJTNW"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KW3HPEJTNW');
          `}
        </Script>

        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="lazyOnload">
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
      <body className="min-h-full flex flex-col antialiased pb-[calc(4rem+env(safe-area-inset-bottom))] md:pb-0">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatWidget />
        <MobileActionBar />
        <ClickTracker />
      </body>
    </html>
  );
}