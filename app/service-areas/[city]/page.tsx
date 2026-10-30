import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { serviceAreas, slugify, getCityInfo, rockCrushingCities } from "@/data/service-areas";
import { cityFacts } from "@/data/city-facts";
import { servicePricing } from "@/data/service-pricing";
import { quoteServiceLabels } from "@/data/quote-services";
import { caseStudies } from "@/lib/case-studies";
import { cityLocal, localFaqs } from "@/data/city-local";
import { brandedTitle, metaDescription } from "@/lib/seo-title";
import BreadcrumbSchema from "@/app/components/BreadcrumbSchema";
import TrustStrip from "@/app/components/TrustStrip";
import QuoteSection from "@/app/components/QuoteSection";
import LocalProof from "@/app/components/LocalProof";
import FaqAccordion from "@/app/components/FaqAccordion";
import FaqPageSchema from "@/app/components/FaqPageSchema";

type PageParams = Promise<{ city: string }>;

// Same services and order as the city × service pages; rock services only in rockCrushingCities.
const hubServices = ["land-clearing", "forestry-mulching", "rock-removal", "rock-crushing", "demolition"];
const rockServices = ["rock-crushing", "rock-removal"];

// ["a", "b", "c"] → "a, b, and c"
const listJoin = (items: string[]) =>
  items.length < 3 ? items.join(" and ") : `${items.slice(0, -1).join(", ")}, and ${items.at(-1)}`;

function servicesFor(cityName: string) {
  return hubServices.filter((s) => !rockServices.includes(s) || rockCrushingCities.includes(cityName));
}

export async function generateStaticParams() {
  return Object.values(serviceAreas)
    .flat()
    .map((city) => ({ city: slugify(city) }));
}

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { city } = await params;
  const info = getCityInfo(city);
  if (!info) return {};
  const county = cityFacts[info.name]?.county;
  const offersRock = rockCrushingCities.includes(info.name);
  const what = `Land clearing, forestry mulching${offersRock ? ", rock removal" : ""} and demolition in ${info.name}${county ? `, ${county}` : ""}`;
  // Longest wording that still fits in 160 characters.
  const description =
    [
      `${what}, from Grounded Land Services in Bertram. Free on-site estimates: (512) 571-6700.`,
      `${what}. Free on-site estimates from Grounded Land Services: (512) 571-6700.`,
    ].find((d) => d.length <= 160) ?? metaDescription(`${what}. Free on-site estimates: (512) 571-6700.`);
  return {
    title: brandedTitle(`Land Clearing & Mulching in ${info.name}, TX`),
    description,
    alternates: {
      canonical: `https://www.groundedlandservices.com/service-areas/${city}`,
    },
  };
}

export default async function CityHubPage({ params }: { params: PageParams }) {
  const { city } = await params;
  const info = getCityInfo(city);
  if (!info) notFound();
  const { name, region, nearby } = info;
  const facts = cityFacts[name];
  const services = servicesFor(name);
  const studies = caseStudies.filter((s) => s.locationSlug === city || s.nearbyCitySlugs?.includes(city));
  const hasNearbyStudy = studies.some((s) => s.locationSlug !== city);
  const local = cityLocal[name];
  const faqs = localFaqs(name);

  const localFacts = facts
    ? [
        { label: "County", value: facts.county },
        { label: "Terrain", value: facts.terrain },
        { label: "Soil", value: facts.soil },
        { label: "Ground conditions", value: facts.groundConditions },
        { label: "Common trees", value: facts.trees },
        { label: "Vegetation", value: facts.vegetation },
        { label: "Invasive growth we clear most", value: facts.invasiveVegetation },
        { label: "Typical properties", value: facts.propertyTypes },
        { label: "Local landmarks", value: facts.nearby },
      ].filter((f): f is { label: string; value: string } => Boolean(f.value))
    : [];

  return (
    <section className="bg-white">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Service Areas", url: "/service-areas" },
          { name, url: `/service-areas/${city}` },
        ]}
      />
      <FaqPageSchema faqs={faqs} />

      <div className="max-w-3xl mx-auto px-6 pt-32 md:pt-36">
        <p className="section-label mb-3">{region}</p>
        <h1 className="text-4xl md:text-5xl font-bold text-[#0a0a0a] leading-tight mb-5">
          Land Clearing &amp; Site Work in {name}, Texas
        </h1>
        <p className="text-lg text-[#3a3a3c] leading-relaxed mb-6">
          Grounded Land Services provides {listJoin(services.map((s) => quoteServiceLabels[s].toLowerCase()))} in{" "}
          {name}
          {facts ? `, ${facts.county}` : ""}, working out of our base in Bertram, TX. Every estimate starts with a free
          on-site visit.
        </p>
        <TrustStrip />

        <div className="mt-12 mb-12">
          <h2 className="text-2xl font-bold text-[#0a0a0a] mb-5 flex items-center gap-3">
            <span className="w-1.5 h-6 bg-[#C4922A] rounded-full inline-block" />
            Services in {name}
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {services.map((s) => {
              const pricing = servicePricing[s];
              return (
                <li key={s}>
                  <Link
                    href={`/service-areas/${city}/${s}`}
                    className="block h-full p-4 bg-[#f9f9f9] border border-gray-100 rounded-xl hover:border-amber-200 hover:bg-amber-50 transition-colors"
                  >
                    <span className="block font-semibold text-[#0a0a0a]">
                      {quoteServiceLabels[s]} in {name}
                    </span>
                    {pricing && (
                      <span className="block text-sm text-[#6e6e73] mt-1">
                        {pricing.range} {pricing.unit}
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {localFacts.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#0a0a0a] mb-5 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-[#C4922A] rounded-full inline-block" />
              What {name} Land Is Like
            </h2>
            {local?.land.map((p, i) => (
              <p key={i} className="text-[#3a3a3c] leading-relaxed mb-4 text-[15px]">
                {p}
              </p>
            ))}
            <dl className="divide-y divide-gray-100 border-y border-gray-100">
              {localFacts.map((f) => (
                <div key={f.label} className="grid grid-cols-1 sm:grid-cols-[12rem_1fr] gap-1 sm:gap-4 py-3">
                  <dt className="text-sm font-semibold text-[#0a0a0a]">{f.label}</dt>
                  <dd className="text-sm text-[#3a3a3c] leading-relaxed first-letter:uppercase">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}

        {local ? (
          <LocalProof city={name} local={local} />
        ) : studies.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#0a0a0a] mb-5 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-[#C4922A] rounded-full inline-block" />
              Our Projects {hasNearbyStudy ? "in and Near" : "in"} {name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {studies.map((study) => (
                <Link
                  key={study.slug}
                  href={`/case-studies/${study.slug}`}
                  className="group block rounded-2xl overflow-hidden border-2 border-[#0a0a0a] bg-white card-hover"
                >
                  <div className="relative w-full aspect-[16/10]">
                    <Image
                      src={study.afterPhoto}
                      alt={study.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-[#0a0a0a] mb-1 group-hover:text-[#C4922A] transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-sm text-[#6e6e73]">
                      {study.acreage} · {study.timeline}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {faqs.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#0a0a0a] mb-6 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-[#C4922A] rounded-full inline-block" />
              {name} Landowner Questions
            </h2>
            <FaqAccordion faqs={faqs} />
          </div>
        )}

        <div className="mb-4">
          <h2 className="text-2xl font-bold text-[#0a0a0a] mb-5 flex items-center gap-3">
            <span className="w-1.5 h-6 bg-[#C4922A] rounded-full inline-block" />
            Nearby Areas We Serve
          </h2>
          <ul className="flex flex-wrap gap-2.5">
            {nearby.slice(0, 12).map((n) => (
              <li key={n}>
                <Link
                  href={`/service-areas/${slugify(n)}`}
                  className="inline-block text-sm font-medium text-[#0a0a0a] bg-white border-2 border-[#0a0a0a] rounded-full px-4 py-2 hover:bg-[#f5f5f5] transition-colors"
                >
                  {n}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <QuoteSection heading={`Get a Free Estimate in ${name}`} defaultCity={name} />
    </section>
  );
}
