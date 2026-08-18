import { Metadata } from "next";
import { notFound } from "next/navigation";
import FaqAccordion from "@/app/components/FaqAccordion";
import TrustBadges from "@/app/components/TrustBadges";
import Testimonials from "@/app/components/Testimonials";
import ServiceHeroImage from "@/app/components/ServiceHeroImage";
import ServiceMedia from "@/app/components/ServiceMedia";
import VideoCarousel from "@/app/components/VideoCarousel";
import Image from "next/image";
import BeforeAfterSlider from "@/app/components/BeforeAfterSlider";
import ServiceStickyTitle from "@/app/components/ServiceStickyTitle";
import { servicesContent } from "@/lib/services-content";
import { serviceImagePosition } from "@/data/service-image-position";
import RichText from "@/app/components/RichText";
import LoopingVideo from "@/app/components/LoopingVideo";
import BreadcrumbSchema from "@/app/components/BreadcrumbSchema";

type PageParams = Promise<{ service: string }>;

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const { service } = await params;
  const content = servicesContent[service];
  if (!content) return {};
  return { title: content.title, description: content.metaDescription };
}

export default async function ServiceDetailPage({ params }: { params: PageParams }) {
  const { service } = await params;
  const content = servicesContent[service];
  if (!content) notFound();

  const quoteHref = `/contact?service=${encodeURIComponent(content.title)}#quote`;

return (
    <section className="bg-white">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: content.title, url: `/services/${service}` },
        ]}
      />
      <ServiceStickyTitle title={content.title} />

<div className="pt-8 relative">
        <ServiceHeroImage
          src={content.heroImage}
          alt={content.title}
          objectPosition={serviceImagePosition[service] ?? "center"}
        />

<div className="absolute top-20 right-4 md:top-24 md:right-6 z-10 w-56 md:w-64 p-4 bg-white/95 backdrop-blur-sm border-2 border-[#C4922A] rounded-2xl shadow-lg">
          <p className="text-[10px] font-semibold text-amber-800 uppercase tracking-wide mb-1">
            Estimated Cost
          </p>
          <p className="text-xl font-bold text-[#0a0a0a]">{content.pricing.range}</p>
          <p className="text-xs font-medium text-[#6e6e73] mb-2">{content.pricing.unit}</p>
          <p className="text-xs text-[#6e6e73] mb-3">{content.pricing.note}</p>
          <a
            href={quoteHref}
            className="block text-center w-full px-4 py-2 bg-[#C4922A] text-black font-semibold rounded-full hover:bg-amber-500 transition-colors text-sm"
          >
            Get a Free Estimate
          </a>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6">
        <p className="text-lg text-[#3a3a3c] leading-relaxed mb-10 mt-8"><RichText text={content.intro} /></p>
{content.sections.map((section, i) => (
          <div key={i} className={section.heading ? "mb-12 pt-2" : "mb-10"}>
            {section.heading && (
              <>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5 flex items-center gap-3">
                  <span className="w-1.5 h-7 bg-gradient-to-b from-[#D4A840] to-[#C4922A] rounded-full inline-block" />
                  {section.heading}
                </h2>
              </>
            )}
            {section.subheading && (
              <h3
                className={
                  section.subheadingCentered
                    ? "text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-3 mt-8 text-center"
                    : "text-lg font-bold text-[#0a0a0a] mb-3 mt-8 pb-2 border-b border-amber-100"
                }
              >
                {section.subheading}
              </h3>
            )}
{section.paragraphs?.map((p, j) => (
                <p key={j} className="text-[#3a3a3c] leading-relaxed mb-4 text-[15px]">
                  <RichText text={p} />
                </p>
              ))}
            {section.listIntro && (
                <p className="font-semibold text-amber-800 mb-3 mt-2">{section.listIntro}</p>
              )}
{section.list && (
              <ul
                className={`grid grid-cols-2 gap-2.5 mt-2 ${
                  section.listColumns === 4
                    ? "sm:grid-cols-3 lg:grid-cols-4"
                    : section.listColumns === 3
                    ? "sm:grid-cols-3"
                    : "sm:grid-cols-2"
                }`}
              >
                {section.list.map((item) => {
                  const isLink = typeof item !== "string";
                  const label = isLink ? item.label : item;
const content = (
                    <>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0a0a0a] flex-shrink-0" />
                      <span>{label}</span>
                    </>
                  );
                  return (
                    <li key={label}>
                      {isLink ? (
                        <a
                          href={item.href}
                          className="flex items-center gap-2 text-sm font-medium text-[#0a0a0a] bg-white border-2 border-[#0a0a0a] rounded-full px-4 py-2.5 hover:bg-[#f5f5f5] hover:shadow-md transition-all justify-center text-center"
                        >
                          {content}
                        </a>
                      ) : (
                        <div className="flex items-center gap-2 text-sm font-medium text-[#0a0a0a] bg-white border-2 border-[#0a0a0a] rounded-full px-4 py-2.5 justify-center text-center">
                          {content}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
              
{section.videoCarousel && (
              <VideoCarousel
                videoIds={section.videoCarousel.videoIds}
                captions={section.videoCarousel.captions}
              />
            )}
{section.comparison && (
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 items-start mt-2">
                <div>
                  <div className="p-5 bg-white border-2 border-[#0a0a0a] rounded-2xl">
                    <h3 className="font-bold text-[#0a0a0a] mb-3">{section.comparison.left.heading}</h3>
                    {section.comparison.left.paragraphs?.map((p, j) => (
                      <p key={j} className="text-[#3a3a3c] leading-relaxed mb-3 text-sm">
                        {p}
                      </p>
                    ))}
                    {section.comparison.left.listIntro && (
                      <p className="font-semibold text-amber-800 mb-2 text-sm">{section.comparison.left.listIntro}</p>
                    )}
                    {section.comparison.left.list && (
                      <ul className="space-y-1.5">
                        {section.comparison.left.list.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-[#1d1d1f]">
                            <svg className="w-3.5 h-3.5 text-[#C4922A] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  {section.comparison.left.image && (
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden mt-3">
                      <Image
                        src={section.comparison.left.image}
                        alt={section.comparison.left.imageAlt ?? section.comparison.left.heading}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  )}
                </div>

                <div className="flex md:flex-col items-center justify-center py-2 md:py-0">
                  <span className="w-10 h-10 rounded-full bg-[#0a0a0a] text-[#C4922A] font-bold text-xs flex items-center justify-center">
                    VS
                  </span>
                </div>

                <div>
                  <div className="p-5 bg-white border-2 border-[#0a0a0a] rounded-2xl">
                    <h3 className="font-bold text-[#0a0a0a] mb-3">{section.comparison.right.heading}</h3>
                    {section.comparison.right.paragraphs?.map((p, j) => (
                      <p key={j} className="text-[#3a3a3c] leading-relaxed mb-3 text-sm">
                        {p}
                      </p>
                    ))}
                    {section.comparison.right.listIntro && (
                      <p className="font-semibold text-amber-800 mb-2 text-sm">{section.comparison.right.listIntro}</p>
                    )}
                    {section.comparison.right.list && (
                      <ul className="space-y-1.5">
                        {section.comparison.right.list.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-[#1d1d1f]">
                            <svg className="w-3.5 h-3.5 text-[#C4922A] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  {section.comparison.right.image && (
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden mt-3">
                      <Image
                        src={section.comparison.right.image}
                        alt={section.comparison.right.imageAlt ?? section.comparison.right.heading}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  )}
                </div>
              </div>
            )}
{section.compareSlider && (
              <div className="mt-6">
                <BeforeAfterSlider
                  beforeSrc={section.compareSlider.beforeSrc}
                  beforeLabel={section.compareSlider.beforeLabel}
                  afterSrc={section.compareSlider.afterSrc}
                  afterLabel={section.compareSlider.afterLabel}
                />
                <p className="text-center text-xs text-[#6e6e73] mt-2">
                  Drag the slider to compare
                </p>
              </div>
            )}
            {section.note && (
              <p className="text-sm text-[#6e6e73] mt-4">
                {section.note.text}{" "}
                <a href={section.note.href} className="font-semibold text-[#C4922A] hover:text-amber-600 transition-colors">
                  {section.note.linkLabel}
                </a>
              </p>
            )}
            {section.closingParagraphs?.map((p, j) => {
              const isLast = j === (section.closingParagraphs?.length ?? 0) - 1;
              return isLast ? (
                <div key={j} className="my-10 py-8 border-y border-gray-200 text-center">
                  <p className="text-[#0a0a0a] leading-snug text-xl md:text-2xl font-light tracking-wide uppercase max-w-xl mx-auto">
                    <RichText text={p} />
                  </p>
                  <div className="w-10 h-px bg-[#C4922A] mx-auto mt-6" />
                </div>
              ) : (
                <p key={j} className="text-[#3a3a3c] leading-relaxed mt-4 text-[15px]">
                  <RichText text={p} />
                </p>
              );
            })}
{section.iconCards && (
              <div
                className={`grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2 ${
                  section.iconCardsColumns === 4
                    ? "lg:grid-cols-4"
                    : section.iconCardsColumns === 3
                    ? "lg:grid-cols-3"
                    : ""
                }`}
              >
{section.iconCards.map((card) => (
                  <div
                    key={card.title}
                    className="p-5 bg-white border-2 border-[#0a0a0a] rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#C4922A] flex items-center justify-center text-2xl mb-4 shadow-sm">
                      {card.icon}
                    </div>
                    <h3 className="font-bold text-[#0a0a0a] mb-1.5">{card.title}</h3>
                    <p className="text-sm leading-relaxed text-[#6e6e73]">{card.description}</p>
                  </div>
                ))}
              </div>
            )}
{section.media && <ServiceMedia items={section.media} />}

            {section.scenarios && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mt-2">
                {section.scenarios.map((s) => (
                  <div key={s.title} className="flex gap-3">
                    <span className="text-xl flex-shrink-0 mt-0.5">{s.icon}</span>
                    <div>
                      <h4 className="font-bold text-[#0a0a0a] text-[15px] mb-1">{s.title}</h4>
                      <p className="text-sm text-[#6e6e73] leading-relaxed">{s.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {section.areaMapQuery && (
              <div className="mt-6 rounded-2xl overflow-hidden border border-gray-100">
                <iframe
                  title="Service area map"
                  width="100%"
                  height="320"
                  style={{ border: 0 }}
                  loading="lazy"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(section.areaMapQuery)}&output=embed`}
                />
              </div>
            )}



            {section.relatedServices && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-2">
                {section.relatedServices.map((r) => (
                  <a 
                    key={r.label}
                   href={r.href}
                    className="flex items-center justify-between gap-2 p-4 bg-white border-2 border-[#0a0a0a] rounded-xl hover:border-amber-200 hover:bg-amber-50 transition-colors text-sm font-semibold text-[#0a0a0a]"
                  >
                    {r.label}
                    <svg className="w-4 h-4 text-[#C4922A] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                ))}
              </div>
            )}
                        {section.ctaButton && !section.steps && (
              <div className="mt-6 text-center">
                <a
                  href={section.ctaButton.href}
                  className="inline-block px-6 py-3 bg-[#C4922A] text-black font-semibold rounded-full hover:bg-amber-500 transition-colors text-sm"
                >
                  {section.ctaButton.label}
                </a>
              </div>
            )}

            {section.industries && (
              <div className="flex flex-wrap gap-2 mt-2">
                {section.industries.map((ind) => (
                  <span
                    key={ind}
                    className="px-4 py-2 bg-white border-2 border-[#0a0a0a] rounded-full text-sm font-medium text-[#1d1d1f]"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            )}
{section.steps && (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
                  {section.steps.map((step, idx) => (
                    <div key={step.title} className="flex flex-col gap-2 p-4 bg-white border-2 border-[#0a0a0a] rounded-2xl">
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
                {section.loopingVideo && (
                  <LoopingVideo
                    videoId={section.loopingVideo.videoId}
                    caption={section.loopingVideo.caption}
                  />
                )}
                {section.ctaButton && (
                  <div className="mt-6 text-center">
                    <a
                      href={section.ctaButton.href}
                      className="inline-block px-6 py-3 bg-[#C4922A] text-black font-semibold rounded-full hover:bg-amber-500 transition-colors text-sm"
                    >
                      {section.ctaButton.label}
                    </a>
                  </div>
                )}
              </>
            )}
          </div>
        ))}

        <TrustBadges />

        <div className="mb-16">
          <div className="text-center mb-8">
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-[#C4922A] mb-2">
              Customer Reviews
            </p>
            <h2 className="text-3xl font-bold text-[#0a0a0a]">What Our Customers Say</h2>
          </div>
          <Testimonials />
        </div>

        {content.faqs.length > 0 && (
          <div className="mb-12 -mx-6 md:-mx-10 px-6 md:px-10 py-10 bg-gradient-to-b from-[#faf9f7] to-white rounded-3xl">
            <div className="text-center mb-8">
              <p className="text-xs font-bold tracking-[0.15em] uppercase text-[#C4922A] mb-2">
                Common Questions
              </p>
              <h2 className="text-3xl font-bold text-[#0a0a0a]">Frequently Asked Questions</h2>
            </div>
            <FaqAccordion faqs={content.faqs} />
          </div>
        )}
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
          Ready to get started with {content.title.toLowerCase()}?
        </p>
        <p className="text-white/70 text-base">
          Fill out the &ldquo;Request a Quote&rdquo; form below!
        </p>
        <p className="text-white/70 text-base">
          Or give us a call for immediate assistance!
        </p>
      </div>

      {content.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: content.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
              })),
            }),
          }}
        />
      )}
    </section>
  );
}