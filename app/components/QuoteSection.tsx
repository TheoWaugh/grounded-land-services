import Link from "next/link";
import QuoteForm from "./QuoteForm";

// Bottom-of-page quote form for service and city pages (target of every "#quote" link).
export default function QuoteSection({
  heading,
  defaultService,
  defaultCity,
}: {
  heading: string;
  defaultService?: string;
  defaultCity?: string;
}) {
  return (
    <section id="quote" className="mt-16 w-full bg-[#0a0a0a] py-14 px-6 scroll-mt-44">
      <div className="max-w-xl mx-auto">
        <p className="section-label-light mb-3 text-center">Free Estimate</p>
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-3 text-center">{heading}</h2>
        <p className="text-white/65 text-base mb-8 text-center">
          Tell us a little about the property. Prefer to talk?{" "}
          <a href="tel:5125716700" data-track="quote_section" className="text-[#D4A840] font-semibold underline">
            Call
          </a>{" "}
          or{" "}
          <a href="sms:5125716700" data-track="quote_section" className="text-[#D4A840] font-semibold underline">
            text
          </a>{" "}
          (512) 571-6700.
        </p>
        <QuoteForm dark defaultService={defaultService} defaultCity={defaultCity} />
        <div className="text-center mt-8">
          <Link href="/case-studies" className="text-white/60 text-sm underline hover:text-white">
            See our completed projects
          </Link>
        </div>
      </div>
    </section>
  );
}
