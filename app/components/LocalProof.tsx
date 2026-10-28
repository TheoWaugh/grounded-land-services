import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/lib/case-studies";
import { testimonials } from "@/data/testimonials";
import { milesBetween } from "@/lib/bertram-distance";
import type { CityLocal } from "@/data/city-local";
import RichText from "./RichText";

// "Spicewood, TX" → "Spicewood"
const cityOf = (location: string) => location.split(",")[0].trim();

/** "In Bertram" for the page's own city, otherwise "Burnet · about 11 mi away". */
function placeLabel(pageCity: string, otherCity: string): string {
  if (otherCity === pageCity) return `In ${pageCity}`;
  const miles = milesBetween(pageCity, otherCity);
  return miles === null ? otherCity : `${otherCity} · about ${Math.round(miles)} mi away`;
}

/**
 * Our work in and near a priority city: the owner's experience, the city's case studies (or the
 * nearest ones, labeled with distance) and the matching Google reviews.
 */
export default function LocalProof({ city, local, service }: { city: string; local: CityLocal; service?: string }) {
  const experience =
    (service && local.serviceExperience?.[service as keyof NonNullable<CityLocal["serviceExperience"]>]) || local.experience;
  const studies = local.studies
    .map((slug) => caseStudies.find((c) => c.slug === slug))
    .filter((c): c is (typeof caseStudies)[number] => Boolean(c));
  const reviews = local.reviews
    .map((name) => testimonials.find((t) => t.name === name))
    .filter((t): t is (typeof testimonials)[number] => Boolean(t));
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

      {reviews.length > 0 && (
        <>
          <h3 className="text-lg font-bold text-[#0a0a0a] mt-10 mb-4">
            Reviews from {city} and Nearby
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-start">
            {reviews.map((t) => (
              <figure key={t.name} className="p-6 bg-white border border-gray-100 rounded-2xl">
                <div className="flex gap-0.5 mb-3" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#C4922A]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-[15px] text-[#2d2d2f] leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="pt-4 border-t border-gray-100">
                  <p className="text-sm font-bold text-[#0a0a0a]">{t.name}</p>
                  {t.location && (
                    <p className="text-xs text-[#6e6e73] tracking-wide">{placeLabel(city, cityOf(t.location))}</p>
                  )}
                </figcaption>
              </figure>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
