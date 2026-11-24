import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/lib/case-studies";
import { cityOf, placeLabel } from "@/lib/place-label";
import type { CityLocal } from "@/data/city-local";
import LocalReviews from "./LocalReviews";
import RichText from "./RichText";

/**
 * Our work in and near a priority city: the owner's experience, the city's case studies (or the
 * nearest ones, labeled with distance) and the matching Google reviews.
 */
export default function LocalProof({ city, local, service }: { city: string; local: CityLocal; service?: string }) {
  const experience =
    (service && local.serviceExperience?.[service as keyof NonNullable<CityLocal["serviceExperience"]>]) || local.experience;
  const studySlugs =
    (service && local.serviceStudies?.[service as keyof NonNullable<CityLocal["serviceStudies"]>]) || local.studies;
  const studies = studySlugs
    .map((slug) => caseStudies.find((c) => c.slug === slug))
    .filter((c): c is (typeof caseStudies)[number] => Boolean(c));
  const reviewNames =
    (service && local.serviceReviews?.[service as keyof NonNullable<CityLocal["serviceReviews"]>]) || local.reviews;
  const hasLocalStudy = studies.some((s) => cityOf(s.location) === city);

  return (
    <div id="local-proof" className="mb-12 scroll-mt-28">
      <h2 className="text-2xl font-bold text-[#0a0a0a] mb-4 flex items-center gap-3">
        <span className="w-1.5 h-6 bg-[#C4922A] rounded-full inline-block" />
        {hasLocalStudy ? `Our Work in ${city}` : `Our Work Near ${city}`}
      </h2>
      {experience.map((p, i) => (
        <p key={i} className="text-[#3a3a3c] leading-relaxed mb-4 text-[15px]">
          <RichText text={p} />
        </p>
      ))}

      {studies.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
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
                <p className="text-xs font-semibold uppercase tracking-wide text-[#C4922A] mb-1">
                  {placeLabel(city, cityOf(study.location))}
                </p>
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
      )}

      {reviewNames.length > 0 && (
        <>
          <h3 className="text-lg font-bold text-[#0a0a0a] mt-10 mb-4">
            Reviews from {city} and Nearby
          </h3>
          <LocalReviews city={city} names={reviewNames} />
        </>
      )}
    </div>
  );
}
