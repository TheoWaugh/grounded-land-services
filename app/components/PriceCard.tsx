// Estimated-cost tile that floats over the hero image on service and city × service pages.
export default function PriceCard({
  pricing,
  href,
  className = "",
}: {
  pricing: { range: string; unit: string; note: string };
  href: string;
  className?: string;
}) {
  return (
    <div className={`p-4 border-2 border-[#C4922A] rounded-2xl ${className}`}>
      <p className="text-[10px] font-semibold text-amber-800 uppercase tracking-wide mb-1">Estimated Cost</p>
      <p className="text-xl font-bold text-[#0a0a0a]">{pricing.range}</p>
      <p className="text-xs font-medium text-[#6e6e73] mb-2">{pricing.unit}</p>
      <p className="text-xs text-[#6e6e73] mb-3">{pricing.note}</p>
      <a
        href={href}
        className="block text-center w-full px-4 py-2 bg-[#C4922A] text-black font-semibold rounded-full hover:bg-amber-500 transition-colors text-sm"
      >
        Get a Free Estimate
      </a>
    </div>
  );
}
