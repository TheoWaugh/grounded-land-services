import { Metadata } from "next";
import FaqAccordion from "@/app/components/FaqAccordion";
import { servicesContent } from "@/lib/services-content";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Grounded Land Services",
  description: "Answers to common questions about land clearing, forestry mulching, rock crushing, demolition, and every service Grounded Land Services offers across Central Texas.",
};

export default function FaqPage() {
  const serviceKeys = Object.keys(servicesContent);

  const allFaqs = serviceKeys.flatMap((key) => {
    const content = servicesContent[key];
    return content.faqs.map((faq) => ({
      ...faq,
      serviceTitle: content.title,
    }));
  });

  return (
    <>
      <section className="relative h-64 md:h-80 flex items-end overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-12">
          <p className="section-label-light mb-2">Grounded Land Services</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Frequently Asked Questions</h1>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#6e6e73] text-lg leading-relaxed mb-12 max-w-2xl">
            Answers to the most common questions about our services, pricing, and process. Don&apos;t see what you&apos;re looking for? Give us a call at{" "}
            <a href="tel:5125716700" className="font-semibold text-[#C4922A] hover:text-amber-600 transition-colors">
              (512) 571-6700
            </a>.
          </p>

          <FaqAccordion faqs={allFaqs} />
        </div>
      </section>
    </>
  );
}