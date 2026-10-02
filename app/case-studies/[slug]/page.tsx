import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import BeforeAfterSlider from "../../components/BeforeAfterSlider";
import { caseStudies } from "@/lib/case-studies";
import { equipmentPhotos } from "@/data/equipment-photos";
import CaseStudyGallery from "../../components/CaseStudyGallery";


type PageParams = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return {};
  return {
    title: study.title,
    description: study.description,
    alternates: {
      canonical: `https://www.groundedlandservices.com/case-studies/${slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: { params: PageParams }) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) notFound();

  const allPhotos = [study.afterPhoto, ...(study.galleryPhotos ?? [])];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Case Studies", url: "/case-studies" },
          { name: study.title, url: `/case-studies/${study.slug}` },
        ]}
      />

      {/* Hero photo */}
      <section className="relative h-72 md:h-[28rem] overflow-hidden bg-[#0a0a0a]">
        <Image
          src={study.afterPhoto}
          alt={study.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10" />
        <div className="absolute bottom-0 left-0 right-0 max-w-5xl mx-auto w-full px-6 pb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            {study.services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="px-3 py-1 bg-[#C4922A] text-black text-xs font-semibold rounded-full hover:bg-amber-500 transition-colors"
              >
                {s.label}
              </Link>
            ))}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white">{study.title}</h1>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Stats bar */}
        <div className="grid grid-cols-3 gap-4 mb-10 p-5 bg-[#f9f9f9] rounded-2xl">
          <div className="text-center">
            <p className="text-[10px] font-semibold text-[#6e6e73] uppercase tracking-wide mb-1">Location</p>
            <Link href={`/service-areas/${study.locationSlug}/${study.services[0]?.slug ?? "land-clearing"}`} className="text-base font-bold text-[#0a0a0a] hover:text-[#C4922A] transition-colors">
              {study.location}
            </Link>
          </div>
          <div className="text-center">
            <p className="text-[10px] font-semibold text-[#6e6e73] uppercase tracking-wide mb-1">Acreage</p>
            <p className="text-base font-bold text-[#0a0a0a]">{study.acreage}</p>
          </div>
          <div className="text-center">
            <p className="text-[10px] font-semibold text-[#6e6e73] uppercase tracking-wide mb-1">Timeline</p>
            <p className="text-base font-bold text-[#0a0a0a]">{study.timeline}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-lg text-[#3a3a3c] leading-relaxed mb-4">{study.description}</p>
        {study.longDescription && (
          <p className="text-[#3a3a3c] leading-relaxed mb-6">{study.longDescription}</p>
        )}

        {study.beforePhoto && (
          <div className="mb-10">
            <BeforeAfterSlider
              beforeSrc={study.beforePhoto}
              beforeLabel="Before"
              afterSrc={study.afterPhoto}
              afterLabel="After"
            />
            <p className="text-center text-xs text-[#6e6e73] mt-2">Drag the slider to compare</p>
          </div>
        )}

        {/* Photo gallery */}
        {allPhotos.length > 1 && (
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-[#0a0a0a] mb-1">Check Out Some Pictures From This Job!</h2>
            <p className="text-xs font-semibold text-[#6e6e73] uppercase tracking-wide mb-3">Project Photos</p>
            <CaseStudyGallery photos={allPhotos} title={study.title} />
          </div>
        )}

        {/* Equipment used */}
        {study.equipmentUsed && study.equipmentUsed.length > 0 && (
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-[#0a0a0a] mb-3">Equipment Used</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {study.equipmentUsed.map((eq) => {
                const photo = equipmentPhotos[eq.equipmentId];
                return (
                  <Link
                    key={eq.equipmentId}
                    href={`/equipment#${eq.equipmentId}`}
                    className="group block rounded-2xl overflow-hidden border-2 border-[#0a0a0a] bg-white card-hover"
                  >
                    {photo && (
                      <div className="relative w-full aspect-[4/3]">
                        <Image
                          src={photo.image}
                          alt={eq.label}
                          fill
                          className="object-cover"
                          style={{ objectPosition: photo.imagePosition ?? "center" }}
                          sizes="(max-width: 768px) 50vw, 33vw"
                        />
                      </div>
                    )}
                    <p className="text-center text-base font-semibold text-[#0a0a0a] py-3 px-3 group-hover:text-[#C4922A] transition-colors">
                      {eq.label}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        

        {/* Videos */}
        {study.videoIds && study.videoIds.length > 0 && (
          <div className="mb-10">
            <p className="text-xs font-semibold text-[#6e6e73] uppercase tracking-wide mb-3">Project Video</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {study.videoIds.map((id) => (
                <div key={id} className="relative aspect-video rounded-xl overflow-hidden bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${id}`}
                    title="Project video"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="bg-[#0a0a0a] rounded-2xl py-10 px-6 text-center">
          <p className="text-white text-xl font-bold mb-4">Have a similar project in mind?</p>
          <Link
            href={`/contact?service=${encodeURIComponent(study.services[0]?.label ?? "")}#quote`}
            className="inline-block px-8 py-4 bg-[#C4922A] rounded-full text-black font-bold text-base hover:bg-amber-500 transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </>
  );
}