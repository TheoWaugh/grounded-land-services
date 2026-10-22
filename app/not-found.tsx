import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

const popular = [
  { label: "Land Clearing", href: "/services/land-clearing" },
  { label: "Forestry Mulching", href: "/services/forestry-mulching" },
  { label: "Rock Removal", href: "/services/rock-removal" },
  { label: "All Services", href: "/services" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Case Studies", href: "/case-studies" },
];

export default function NotFound() {
  return (
    <section className="bg-white pt-32 pb-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="section-label mb-3">404</p>
        <h1 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-4">We couldn&apos;t find that page</h1>
        <p className="text-[#3a3a3c] text-lg leading-relaxed mb-8">
          It may have moved. Try one of these, or call or text{" "}
          <a href="tel:5125716700" data-track="not_found" className="font-semibold text-[#C4922A] hover:text-amber-600">
            (512) 571-6700
          </a>{" "}
          for a free estimate.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 text-left">
          {popular.map((p) => (
            <li key={p.href}>
              <Link
                href={p.href}
                className="block p-4 bg-[#f9f9f9] border border-gray-100 rounded-xl hover:border-amber-200 hover:bg-amber-50 transition-colors text-sm font-semibold text-[#0a0a0a]"
              >
                {p.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/contact#quote" className="btn-primary text-base">
          Get a Free Quote
        </Link>
      </div>
    </section>
  );
}
