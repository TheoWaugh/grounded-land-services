import Link from "next/link";
import { testimonials } from "@/data/testimonials";
import { cityOf, placeLabel } from "@/lib/place-label";

/** Google review cards for a city page, by reviewer name (data/testimonials.ts), each labeled with its place. */
export default function LocalReviews({ city, names }: { city: string; names: string[] }) {
  const reviews = names
    .map((name) => testimonials.find((t) => t.name === name))
    .filter((t): t is (typeof testimonials)[number] => Boolean(t));

  return (
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
            {t.caseStudy && (
              <Link href={`/case-studies/${t.caseStudy}`} className="inline-block mt-2 text-xs font-semibold text-[#C4922A] hover:underline">
                See this project →
              </Link>
            )}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
