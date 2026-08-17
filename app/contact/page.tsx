import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import QuoteForm from "../components/QuoteForm";

const faqs = [
  {
    q: "How do I get a quote?",
    a: "Fill out the form on this page or call us at (512) 571-6700. Owner and operator Logan will reach out to discuss your project, walk the land if needed, and provide a detailed quote — completely free.",
  },
  {
    q: "Do you travel for projects?",
    a: "Yes! We service most of Texas, including Austin, San Antonio, Houston, Dallas, and hundreds of cities in between. Check our Service Areas page for the full list.",
  },
  {
    q: "How long does a land clearing project take?",
    a: "It depends on acreage, terrain, and the services required. We provide a timeline estimate with every quote and keep you updated throughout the project.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Absolutely. Grounded Land Services is fully licensed, insured, and operated by certified professionals. Your property and our team are protected on every job.",
  },
  {
    q: "What's the difference between forestry mulching and traditional clearing?",
    a: "Forestry mulching is a single-step process that grinds vegetation into mulch on-site — no hauling, no burn piles. Traditional clearing removes all material and stumps, leaving a fully clean slate. Both have ideal use cases depending on your goals.",
  },
  {
    q: "Do you offer financing or payment plans?",
    a: "Contact us to discuss payment options for larger projects. We're committed to making land transformation accessible for every property owner.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-64 md:h-80 flex items-end overflow-hidden bg-[#0a0a0a]">
        <Image
          src="/images/work/IMG_1809.jpeg"
          alt="Contact Grounded Land Services"
          fill
          priority
          className="object-cover opacity-50"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-12">
          <p className="section-label-light mb-2">Let&apos;s Get Started</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Contact Us</h1>
        </div>
      </section>

      {/* Contact info strip */}
      <section className="bg-[#1d1d1f] py-10 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <a href="tel:5125716700" className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-full bg-[#C4922A] flex items-center justify-center flex-shrink-0 group-hover:bg-[#D4A840] transition-colors">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <p className="text-white/40 text-xs mb-0.5 uppercase tracking-wide">Phone</p>
              <p className="text-white font-medium">(512) 571-6700</p>
            </div>
          </a>

          <a href="mailto:Logan@groundedlandservices.com" className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-full bg-[#C4922A] flex items-center justify-center flex-shrink-0 group-hover:bg-[#D4A840] transition-colors">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-white/40 text-xs mb-0.5 uppercase tracking-wide">Email</p>
              <p className="text-white font-medium break-all">Logan@groundedlandservices.com</p>
            </div>
          </a>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#C4922A] flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p className="text-white/40 text-xs mb-0.5 uppercase tracking-wide">Service Area</p>
              <p className="text-white font-medium">All of Texas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main quote form section */}
      <section id="quote" className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <ScrollReveal animation="reveal-left">
              <p className="section-label-light mb-4">Free Estimate</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Request Your<br />Free Quote
              </h2>
              <p className="text-white/65 text-lg leading-relaxed mb-10">
                Tell us about your project and we&apos;ll get back to you quickly with a detailed, no-obligation estimate. Every job starts with understanding your land and your goals.
              </p>

              {/* What to expect */}
              <div className="space-y-4">
                <p className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-3">What to Expect</p>
                {[
                  { step: "01", title: "You Submit the Form", desc: "Fill out your contact info and project details." },
                  { step: "02", title: "Logan Reaches Out", desc: "Expect a call or email within 24 hours." },
                  { step: "03", title: "Land Walk & Quote", desc: "We assess your property and provide a detailed estimate." },
                  { step: "04", title: "Project Begins", desc: "Schedule your start date and transform your land." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <span className="text-[#D4A840] font-bold text-sm w-7 flex-shrink-0">{item.step}</span>
                    <div>
                      <p className="text-white font-medium text-sm">{item.title}</p>
                      <p className="text-white/50 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal animation="reveal-right">
              <QuoteForm dark={true} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Social links */}
      <section className="py-16 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center">
            <p className="section-label-light mb-4">Follow Our Work</p>
            <h2 className="text-2xl font-bold text-white mb-8">
              See the Latest Projects on Social Media
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <a
                href="https://www.instagram.com/Grounded.LandServices"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-6 py-4 rounded-2xl transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="font-medium">@Grounded.LandServices</span>
              </a>
              <a
                href="https://www.facebook.com/GroundedLandServices"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-6 py-4 rounded-2xl transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="font-medium">Grounded Land Services</span>
              </a>
              <a
                href="https://www.tiktok.com/@grounded.land.services"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-6 py-4 rounded-2xl transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
                <span className="font-medium">@grounded.land.services</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-[#f5f5f7]">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <p className="section-label mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a]">
              Frequently Asked Questions
            </h2>
          </ScrollReveal>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={([0, 100, 200, 300, 400, 500] as const)[i]}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-[#0a0a0a] mb-2">{faq.q}</h3>
                  <p className="text-[#6e6e73] text-sm leading-relaxed">{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-12">
            <p className="text-[#6e6e73] mb-4">Still have questions?</p>
            <a href="tel:5125716700" className="btn-dark">
              Call (512) 571-6700
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
