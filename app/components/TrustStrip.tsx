// Short proof points shown at the top of service/city pages and in the homepage hero.
// Review count must match Google (see .claude/skills/seo-optimizer/business-facts.md).
const GBP_URL = "https://share.google/GiUNVko4QWfbPBpOW";

export default function TrustStrip({ dark = false }: { dark?: boolean }) {
  const text = dark ? "text-white/80" : "text-[#3a3a3c]";
  const dot = dark ? "text-white/30" : "text-gray-300";
  return (
    <ul className={`flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm ${text}`}>
      <li>
        <a href={GBP_URL} target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">
          <span className="text-[#C4922A]" aria-hidden="true">★★★★★</span> 5.0 on Google (18 reviews)
        </a>
      </li>
      <li className={dot} aria-hidden="true">·</li>
      <li>Licensed &amp; insured</li>
      <li className={dot} aria-hidden="true">·</li>
      <li>Free on-site estimates</li>
      <li className={dot} aria-hidden="true">·</li>
      <li>Reply within 24 hrs</li>
    </ul>
  );
}
