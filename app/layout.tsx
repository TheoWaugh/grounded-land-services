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
    address: {
    "@type": "PostalAddress",
    streetAddress: "120 Walnut Canyon Dr",
    addressLocality: "Bertram",
    addressRegion: "TX",
    postalCode: "78605",
    addressCountry: "US",
  },
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
    reviewCount: "18",
  },
    review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "John Cortez" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "I highly recommend Logan and Grounded Land Services. Logan was professional, dependable, and clearly knew what he was doing. He took pride in his work, treated my property with respect, and delivered exactly what I hired him to do.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Steve King" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "Logan worked on our property behind our pool and did a wonderful job clearing just over 1/2 acre. We highly recommend Logan and Grounded Land Services! They are professional, trustworthy and hard working.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Debra Dobbs" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "Mac did a wonderful job cleaning out some brush and vines behind our house. Punctual, polite and thorough. Highly recommend!",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Mike Janak" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "Grounded Land Services cleared a 50' wide lane over 100 yards to our lake cove in Spicewood and then opened up a bucolic path through the trees to the boat dock. I have the highest recommendation for Logan and the work he does.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Mike Janak" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "I hired Grounded Land Services to clear a 50' x 300' path through heavily wooded, sloping terrain that was inundated with Huisache and Prickly Pear. Logan's attention to detail and especially the cleanup has my neighbors asking me for his business card.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Gary Gorton" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "Grounded Land Services is a rare find. Knowledgeable, professional, punctual and a fair price. Logan met and exceeded all of our expectations. We will definitely use him again.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Barrett Garrison" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "We couldn't be happier with the work Grounded Land Services and owner, Logan Arnold, did on our ranch in Spicewood, TX. Our ranch is in the best shape it has been in years, and we would gladly recommend them to anyone looking to care for their land the right way.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Mac Acevedo" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "Grounded Land Services did an amazing job removing all the rocks from our property. The crew showed up on time, worked hard, and left everything looking clean and ready to use. I wouldn't hesitate to recommend them to anyone needing rock removal.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Emil Millet" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "Grounded Land Services did an amazing job clearing our property in Buda, TX. They removed thick cedar and brush while protecting the trees we wanted to keep. Highly recommend Grounded Land Services!",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Evan Smith" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "I am truly grateful for the quality of work and attention to detail Logan provided when mulching my cedar piles. He is very professional and I highly recommend his services.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Christopher Durst" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "We really appreciate the work Logan and his team did for us at the Uhland Fall Fest. They truly helped us curate a raw, unusable piece of land into a beautiful, picturesque parkland for families to enjoy. First-class operation!",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Melissa Henson" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "Honest, fair price and goes above and beyond!",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "McKenzie Schultz" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "I had an excellent experience with Grounded Land Services! They cleared five acres of heavy underbrush for me efficiently and thoroughly. The results exceeded my expectations! It's clear they take pride in their work.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Melanie Madsen" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "GLS raked our hill country acreage to clean up brush and prep for grass. Looks smooth as can be now! Appreciate their time and flexibility! Job well done.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Dylan Gavit" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "On time, hard-working, nonstop, knowledgeable, easy to work with, generous, honest, good people, outstanding equipment, top-tier service. They mowed down giant cedar brush piles that had been there for at least 15 years down to nothing. 10/10 five star crew and business.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Kelley Arnold" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "Logan, owner of Grounded Land Services, is the hardest worker out there! He's got great attention to detail, does impeccable work, and operates his business with the utmost integrity and professionalism.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Jacque Mendenhall" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "We had a fantastic experience working with Grounded Land Services! From start to finish, the communication was clear and professional. Highly recommend for any land clearing or related projects.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Kathy Wendt" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "Grounded Land Services did an amazing job. He got rid of dead trees, branches, and stumps. He made our property looking great again. I highly recommend his services.",
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
        <Script id="meta-pixel" strategy="lazyOnload"></Script>
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
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}