import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceContent } from "@/lib/service-content";
import FaqAccordion from "@/app/components/FaqAccordion";
import TrustBadges from "@/app/components/TrustBadges";
import Testimonials from "@/app/components/Testimonials";
import ServiceHeroImage from "@/app/components/ServiceHeroImage";
import ServiceStickyTitle from "@/app/components/ServiceStickyTitle";
import { serviceImages, serviceAltText } from "@/data/service-images";
import { slugify } from "@/data/service-areas";
import { serviceImagePosition } from "@/data/service-image-position";
import RichText from "@/app/components/RichText";
import LoopingVideo from "@/app/components/LoopingVideo";
import BreadcrumbSchema from "@/app/components/BreadcrumbSchema";

type PageParams = Promise<{ city: string; service: string }>;

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const { city, service } = await params;
  const result = getServiceContent(city, service);
  if (!result) return {};
  return {
    title: result.content.title,
    description: result.content.metaDescription,
  };
}

const quoteFormLabels: Record<string, string> = {
  "land-clearing": "Land Clearing",
  "forestry-mulching": "Forestry Mulching",
  "rock-crushing": "Rock Crushing",
  "demolition": "Demolition",
};

export default async function ServicePage({ params }: { params: PageParams }) {
  const { city, service } = await params;
  const result = getServiceContent(city, service);
  if (!result) notFound();
  const { content, cityName } = result;
  const quoteLabel = quoteFormLabels[service] ?? "";
  const quoteHref = `/contact?service=${encodeURIComponent(quoteLabel)}#quote`;
  const imageSrc = serviceImages[service];
  const imageAlt = serviceAltText[service] ?? content.title;

return (
    <section className="bg-white">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Service Areas", url: "/service-areas" },
          { name: cityName, url: `/service-areas/${city}` },
          { name: quoteFormLabels[service] ?? content.title, url: `/service-areas/${city}/${service}` },
        ]}
      />
<ServiceStickyTitle title={content.title} />

{imageSrc && (
        <div className="relative">
          <ServiceHeroImage
            src={imageSrc}
            alt={imageAlt}
            objectPosition={serviceImagePosition[service] ?? "center"}
          />
          {content.pricing && (
<div className="absolute top-20 right-4 md:top-24 md:right-6 z-10 w-56 md:w-64 p-4 bg-white/95 backdrop-blur-sm border-2 border-[#C4922A] rounded-2xl shadow-lg">
              <p className="text-[10px] font-semibold text-amber-800 uppercase tracking-wide mb-1">
                Estimated Cost
              </p>
              <p className="text-xl font-bold text-[#0a0a0a]">
                {content.pricing.range}
              </p>
              <p className="text-xs font-medium text-[#6e6e73] mb-2">
                {content.pricing.unit}
              </p>
              <p className="text-xs text-[#6e6e73] mb-3">{content.pricing.note}</p>
              <a
                href={quoteHref}
                className="block text-center w-full px-4 py-2 bg-[#C4922A] text-black font-semibold rounded-full hover:bg-amber-500 transition-colors text-sm"
              >
                Get a Free Estimate
              </a>
            </div>
          )}
        </div>
      )}

      <div className="max-w-3xl mx-auto px-6">

        {content.sections.map((section, i) => (
          <div key={i} className="mb-12">
            {section.heading && (
              <h2 className="text-2xl font-bold text-[#0a0a0a] mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-[#C4922A] rounded-full inline-block" />
                {section.heading}
              </h2>
            )}

{section.paragraphs?.map((p, j) => (
              <p key={j} className="text-[#3a3a3c] leading-relaxed mb-4 text-[15px]">
                <RichText text={p} />
              </p>
            ))}

            {section.listIntro && (
              <p className="font-semibold text-amber-800 mb-3 mt-2">{section.listIntro}</p>
            )}

{section.list && !section.areasServed && (
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-2">
                {section.list.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-[#1d1d1f] bg-[#f9f9f9] border border-gray-100 rounded-xl px-3.5 py-2.5"
                  >
                    <svg
                      className="w-4 h-4 text-[#C4922A] flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {section.list && section.areasServed && (
              <>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-2">
                  {section.list.map((item) => (
                    <li key={item}>
                      <a
                        href={`/service-areas/${slugify(item)}/${service}`}
                        className="flex items-start gap-2 text-sm text-[#1d1d1f] bg-[#f9f9f9] border border-gray-100 rounded-xl px-3.5 py-2.5 hover:border-amber-200 hover:bg-amber-50 transition-colors"
                      >
                        <svg
                          className="w-4 h-4 text-[#C4922A] flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{item}</span>
                      </a>
                    </li>
                  ))}
                </ul>

                {content.county && (
                  <div className="mt-6 rounded-2xl overflow-hidden border border-gray-100">
                    <iframe
                      title={`Map of ${content.county}`}
                      width="100%"
                      height="320"
                      style={{ border: 0 }}
                      loading="lazy"
                      src={`https://www.google.com/maps?q=${encodeURIComponent(
                        content.county + ", Texas"
                      )}&output=embed`}
                    />
                  </div>
                )}
              </>
            )}

{section.steps && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
                {section.steps.map((step, idx) => (
                  <div
                    key={step.title}
                    className="flex flex-col gap-2 p-4 bg-[#f9f9f9] border border-gray-100 rounded-2xl"
                  >
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0a0a0a] text-[#C4922A] font-bold text-sm flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <div>
                      <h3 className="font-bold text-[#0a0a0a] mb-1">{step.title}</h3>
                      <p className="text-sm text-[#3a3a3c] leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {section.areaMapQuery && (
              <div className="mt-6 rounded-2xl overflow-hidden border border-gray-100">
                <iframe
                  title={`Map of ${section.areaMapQuery}`}
                  width="100%"
                  height="320"
                  style={{ border: 0 }}
                  loading="lazy"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(section.areaMapQuery)}&output=embed`}
                />
              </div>
            )}
            {section.loopingVideo && (
              <LoopingVideo
                videoId={section.loopingVideo.videoId}
                caption={section.loopingVideo.caption}
              />
            )}

            {section.comparison && (
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 items-start mt-2">
                {(["left", "right"] as const).map((side, idx) => {
                  const data = section.comparison![side];
                  return (
                    <div key={side} className="contents md:contents">
                      {idx === 1 && (
                        <div className="flex md:flex-col items-center justify-center py-2 md:py-0">
                          <span className="w-10 h-10 rounded-full bg-[#0a0a0a] text-[#C4922A] font-bold text-xs flex items-center justify-center">
                            VS
                          </span>
                        </div>
                      )}
                      <div className="p-5 bg-[#f9f9f9] border border-gray-100 rounded-2xl">
                        <h3 className="font-bold text-[#0a0a0a] mb-3">{data.heading}</h3>
                        {data.paragraphs?.map((p, j) => (
                          <p key={j} className="text-[#3a3a3c] leading-relaxed mb-3 text-sm">
                            {p}
                          </p>
                        ))}
                        {data.listIntro && (
                          <p className="font-semibold text-amber-800 mb-2 text-sm">
                            {data.listIntro}
                          </p>
                        )}
                        {data.list && (
                          <ul className="space-y-1.5">
                            {data.list.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-2 text-sm text-[#1d1d1f]"
                              >
                                <svg
                                  className="w-3.5 h-3.5 text-[#C4922A] flex-shrink-0 mt-1"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2.5}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}

        {content.faqs && content.faqs.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#0a0a0a] mb-6 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-[#C4922A] rounded-full inline-block" />
              Frequently Asked Questions
            </h2>
            <FaqAccordion faqs={content.faqs} />
          </div>
        )}

        <TrustBadges />

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#0a0a0a] mb-6 flex items-center gap-3">
            <span className="w-1.5 h-6 bg-[#C4922A] rounded-full inline-block" />
            What Our Customers Say
          </h2>
          <Testimonials />
        </div>

</div>

<div className="mt-16 w-full bg-[#0a0a0a] py-10 px-6 text-center">
        <div className="max-w-sm mx-auto mb-8">
          <a
            href="/gallery"
            className="flex items-center justify-center px-8 py-4 bg-[#C4922A] rounded-full text-black font-bold text-base hover:bg-amber-500 transition-colors"
          >
            View Our Completed Jobs
          </a>
        </div>
        <p className="text-white text-2xl font-bold mb-2">
          Ready to get started in{" "}
          {content.title.split(" in ")[1]?.replace(", Texas", "") ?? "your area"}?
        </p>
        <p className="text-white/70 text-base">
          Fill out the &ldquo;Request a Quote&rdquo; form below!
        </p>
        <p className="text-white/70 text-base">
          Or give us a call for immediate assistance!
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-6">

        {content.faqs && content.faqs.length > 0 && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: content.faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer,
                  },
                })),
              }),
            }}
          />
        )}
      </div>
    </section>
  );
}