import Link from "next/link";
import { GRANT_GUIDE_PATH } from "@/lib/grant-guide";

const FlameIcon = () => (
  <svg className="w-6 h-6 text-[#C4922A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
  </svg>
);

/**
 * Points landowners to the Texas Mechanical Fuel Reduction Grant guide.
 * "banner": homepage strip. "box": service pages (near the cost section) and grant-related case studies.
 */
export default function GrantCallout({
  variant = "box",
  text = "Clearing cedar for wildfire safety? You may qualify for up to $2,000/acre back from Texas A&M Forest Service.",
  buttonLabel = "Read the grant guide",
}: {
  variant?: "banner" | "box";
  text?: string;
  buttonLabel?: string;
}) {
  const button = (
    <Link
      href={GRANT_GUIDE_PATH}
      className="inline-flex justify-center flex-shrink-0 px-5 py-2.5 bg-[#C4922A] text-black text-sm font-bold rounded-full hover:bg-amber-500 transition-colors"
    >
      {buttonLabel}
    </Link>
  );

  if (variant === "banner") {
    return (
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 rounded-2xl bg-[#0a0a0a] px-6 py-5 md:px-8">
        <div className="flex items-start gap-3 flex-1">
          <FlameIcon />
          <p className="text-white text-base leading-relaxed">{text}</p>
        </div>
        {button}
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 rounded-2xl border-2 border-[#C4922A]/40 bg-[#fdf8ee] p-5 my-6">
      <div className="flex items-start gap-3 flex-1">
        <FlameIcon />
        <p className="text-[15px] text-[#3a3a3c] leading-relaxed">{text}</p>
      </div>
      {button}
    </div>
  );
}
