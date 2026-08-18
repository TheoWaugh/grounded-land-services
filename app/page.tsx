"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ScrollReveal from "./components/ScrollReveal";
import QuoteForm from "./components/QuoteForm";
const services = [
  {
    title: "Forestry Mulching",
    desc: "Single-step clearing that grinds vegetation into nutrient-rich mulch — no burn piles, no hauling fees. Park-like results, immediately usable.",
    icon: "🌿",
    img: "/images/official/forestry-mulching.jpeg",
  },
  {
    title: "Land Clearing",
    desc: "Total site transformation — stump free, debris free, seed ready, and instantly mowable. Ideal for home builds, pasture expansion, and more.",
    icon: "🏗️",
    img: "/images/official/land-clearing.jpeg",
  },
  {
    title: "Cedar Tree Removal",
    desc: "Eliminate water-thieving invasive cedars consuming up to 30 gallons/day, restore pasture health, and create critical wildfire breaks.",
    icon: "🌲",
    img: "/images/official/cedar-removal.jpeg",
  },
  {
    title: "Rock & Cactus Removal",
    desc: "Remove embedded rocks and invasive cactus — including Prickly Pear — that overrun pastures and make land dangerous for livestock, horses, and people.",
    icon: "🪨",
    img: "/images/official/cactus-rock-removal.jpeg",
  },
  {
    title: "Rock Crushing",
    desc: "Process onsite stone into high-quality aggregate for driveways and pads — saving you the cost of hauling in external materials.",
    icon: "⛏️",
    img: "/images/official/rock-crushing.jpeg",
  },
  {
    title: "Fence Line Clearing",
    desc: "Clean, accessible perimeter lines for new fence installation or maintenance of existing borders — protecting your investment and property visibility.",
    icon: "🔒",
    img: "/images/official/fence-line-clearing.jpeg",
  },
];

const whyUs = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Licensed, Insured & Certified",
    desc: "Fully licensed operators with comprehensive insurance. Every project is completed to the highest professional standards.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "State-of-the-Art Equipment",
    desc: "Cutting-edge machinery including CAT excavators with high-flow mulching heads for maximum efficiency and precision.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Timely Project Completion",
    desc: "We respect your timeline. Detailed project reporting keeps you informed at every phase, from start to professional finish.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    title: "Eco-Friendly Practices",
    desc: "Our forestry mulching and clearing methods prioritize soil health, minimize erosion, and support native ecosystem regeneration.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Detailed Reporting",
    desc: "Complete project reports so you know exactly what was done, when, and how — full transparency from start to finish.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Years of Proven Experience",
    desc: "Deep expertise across diverse Texas terrain — hill country, rocky outcrops, dense cedar, and everything in between.",
  },
];

const testimonials = [
  {
    name: "Barrett Garrison",
    location: "Spicewood, TX",
    rating: 5,
    text: "We couldn't be happier with the work Grounded Land Services and owner, Logan Arnold, did on our ranch in Spicewood, TX. They took on a challenging property with a lot of cleanup needed, including removing trash and debris from a burned-down house and old, dilapidated sheds, while also clearing years of overgrown cedar across rough, rocky terrain. What impressed us most was the care and respect they showed for the land. They took the time to preserve the oaks and the trees we wanted to keep, while thoughtfully restoring the property and helping it reach its full potential. Their attention to detail, hard work, and understanding of the land truly made a difference. Logan and his team were dependable, punctual, friendly, and always one step ahead — anticipating challenges and helping us make good decisions throughout the process. It's clear they take pride in what they do, and we are grateful for the incredible transformation they helped create. Our ranch is in the best shape it has been in years, and we would gladly use Grounded Land Services again and recommend them to anyone looking to care for their land the right way.",
  },
  {
    name: "John Cortez",
    location: "Burnet, TX",
    rating: 5,
    text: "I highly recommend Logan and Grounded Land Services. I hired Logan to help clean up a couple years' worth of downed cedar trees, limbs, and other wood debris on my property, and he did an outstanding job. Logan was professional, dependable, and clearly knew what he was doing. He carefully stacked and burned the cedar and debris, managed the burn safely, and then went back over the area with his equipment to rake and clean up what remained. He did a great job clearing out the leftover cedar, rocks, and debris and left the property looking considerably better than when he started. What impressed me most was that Logan didn't just get the fire going and call it finished — he stayed focused on the entire job through the final cleanup. He took pride in his work, treated my property with respect, and delivered exactly what I hired him to do. I wouldn't hesitate to use Logan and Grounded Land Services again and would highly recommend him to anyone needing land clearing, cedar removal, burning, or general property cleanup.",
  },
  {
    name: "Dylan Gavit",
    location: "Bertram, TX",
    rating: 5,
    text: "On time, hard-working, nonstop, knowledgeable, easy to work with, generous, first responder supportive, like-minded, honest, good people, outstanding equipment, top-tier service, went out of their way multiple times to make sure my wife and I were satisfied in a patient manner. All around great people and land clearing company I see sky rocketing. More than fair prices for services. My wife and I recently bought 5 acres in Bertram, Texas. We found Grounded Land Services and gave them a try. Man are we glad we did. They were able to mow down giant cedar brush piles that had been there for at least 15 years down to nothing, worked all day and then some to get the job done and went out of their way to do a little extra on the house. These guys have been nothing short of amazing to work with — we sat in lawn chairs and watched them work meticulously yet efficiently. I would highly recommend them to anyone needing absolutely any sort of land clearing needed. 10/10 five star crew and business.",
  },
  {
    name: "Christopher Durst",
    location: "Uhland, TX",
    rating: 5,
    text: "We really appreciate the work Logan and his team did for us at the Uhland Fall Fest. They truly helped us curate a raw, unusable piece of land that was full of cedar trees and barbed mesquite into a beautiful, picturesque parkland for families to enjoy. I highly recommend these guys. Happy to discuss my experience by phone. First-class operation!",
  },
  {
    name: "Mike Janak",
    location: "Spicewood, Texas",
    rating: 5,
    text: "I hired Grounded Land Services to clear a 50' x 300' path through heavily wooded, sloping terrain that was inundated with Huisache and Prickly Pear. Walking that area before was a miserable experience and now it's a beautiful stroll on my property! Logan's attention to detail and especially the cleanup has my neighbors asking me for his business card.",
  },
  {
    name: "Steve King",
    location: "Bertram, Texas",
    rating: 5,
    text: "Logan worked on our property behind our pool and did a wonderful job clearing just over 1/2 acre. Logan's attention to detail coupled with methodical work ethic and a desire to do things the right way the first time lends to an outstanding finished product. He even found a source for the debris that saved us hundreds of dollars in dump truck removal costs! In addition, a neighbor asked me for his contact information! We highly recommend Logan and Grounded Land Services! They are professional, trustworthy and hard working. We are very happy and will be seeding soon with grass and Texas native flower seeds. Thanks to Grounded Land Services!!!",
  },
  {
    name: "Mckenzie Schultz",
    location: "Luling, Texas",
    rating: 5,
    text: "I had an excellent experience with Grounded Land Services! They cleared five acres of heavy underbrush for me efficiently and thoroughly. The results exceeded my expectations! The crew was extremely professional and communicated clearly throughout the entire process. It's clear they take pride in their work. So happy with the results, would 100% recommend to anyone needing their services!",
  },
  {
    name: "Jacque Mendenhall",
    location: "Bertram, Texas",
    rating: 5,
    text: "We had a fantastic experience working with Grounded Land Services! From start to finish, the communication was clear and professional. He truly listened to what we needed and followed through with care and attention to detail. He completed work both before and after the July 4th flood, and we were impressed with his consistency, reliability, and the quality of the results. Highly recommend for any land clearing or related projects.",
  },
  {
    name: "Kelley Arnold",
    location: "Bertram, Texas",
    rating: 5,
    text: "Logan, owner of Grounded Land Services, is the hardest worker out there! He has great attention to detail, does impeccable work, a work ethic that far exceeds his years, is honest and operates his business with the utmost integrity and professionalism.",
  },
  {
    name: "Evan Smith",
    location: "Bertram, Texas",
    rating: 5,
    text: "I am truly grateful for the quality of work and attention to detail Logan provided when mulching my cedar piles. He is very professional and I highly recommend his services. It's been a refreshing process to have a job done well and on time. Thanks Logan!",
  },
  {
    name: "Gary Gorton",
    location: "Lago Vista, Texas",
    rating: 5,
    text: "Ground Land Services is a rare find. Knowledgeable, professional, punctual and a fair price. Logan met and exceeded all of our expectations. We will definitely use him again.",
  },
  {
    name: "Kathy Wendt",
    location: "Burnet, Texas",
    rating: 5,
    text: "Grounded Land Services did an amazing job. He got rid of dead trees, branches, and stumps. He made our property looking great again. I highly recommend his services.",
  },
  {
    name: "Melanie Madsen",
    location: "Hill Country, TX",
    rating: 5,
    text: "GLS raked our hill country acreage to clean up brush and prep for grass. Looks smooth as can be now! Appreciate their time and flexibility. Job well done.",
  },

];

const galleryImages = [
  { src: "/images/work/IMG_1809.jpeg", wide: true },
  { src: "/images/work/0D85F6BC-81E3-48AD-ABF8-A506D42A0520.jpeg", wide: false },
  { src: "/images/work/dji_fly_20251216_170548_0077_1768262973755_photo.jpeg", wide: false },
  { src: "/images/work/F6E63EEB-DC78-41A9-AD5D-C83E2F489DAA.jpeg", wide: true },
  { src: "/images/work/IMG_1890.jpeg", wide: false },
  { src: "/images/work/IMG_7145.jpeg", wide: false },
];
function TestimonialSlider() {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(testimonials.length / perPage);

  const goTo = (p: number) => setPage((p + totalPages) % totalPages);
  const current = testimonials.slice(page * perPage, page * perPage + perPage);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-h-[280px]">
        {current.map((t) => (
          <div key={t.name} className="testimonial-card h-full flex flex-col">
            <div className="stars text-lg mb-4">{"★".repeat(t.rating)}</div>
            <p className="text-[#1d1d1f] text-sm leading-relaxed flex-1 mb-6">
              &ldquo;{t.text}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#C4922A] flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                {t.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <p className="font-semibold text-[#0a0a0a] text-sm">{t.name}</p>
                <p className="text-[#6e6e73] text-xs">{t.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={() => goTo(page - 1)}
          className="w-10 h-10 rounded-full bg-white border border-gray-200 hover:border-[#C4922A] flex items-center justify-center transition-colors"
          aria-label="Previous testimonials"
        >
          <svg className="w-4 h-4 text-[#0a0a0a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === page ? "bg-[#C4922A]" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial page ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => goTo(page + 1)}
          className="w-10 h-10 rounded-full bg-white border border-gray-200 hover:border-[#C4922A] flex items-center justify-center transition-colors"
          aria-label="Next testimonials"
        >
          <svg className="w-4 h-4 text-[#0a0a0a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
export default function Home() {
  return (
    <>
      {/* ══════════ HERO ══════════ */}
      <section className="relative h-screen min-h-[600px] flex items-end overflow-hidden">
        <Image
          src="/images/official/homepage-pic.JPG"
          alt="Grounded Land Services — transforming Texas land"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 hero-overlay" />

       <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-24 md:pb-32 flex flex-col items-start text-left">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight max-w-4xl mb-6">
           Reclaim Your Land.<br />
          </h1>
          <p className="text-white/75 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            Premier land clearing and site development across Central Texas. Power, precision, and the professional finish your property deserves.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact#quote" className="btn-primary text-base">
              Get a Free Quote
            </Link>
            <Link href="/services" className="btn-secondary text-base">
              View Services
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10">
          <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ══════════ STATS STRIP ══════════ */}
      <section className="bg-[#0a0a0a] py-10 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { stat: "100+", label: "Projects Completed" },
            { stat: "5★", label: "Average Rating" },
            { stat: "Central Texas", label: "Coverage" },
            { stat: "Licensed", label: "& Certified" },
          ].map((item, i) => (
            <div key={i}>
              <p className="text-3xl font-bold text-white mb-1">{item.stat}</p>
              <p className="text-white/40 text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════ SERVICES ══════════ */}
      <section className="py-14 md:py-20 px-6 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="section-label mb-3">What We Do</p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0a0a0a] leading-tight max-w-lg">
                Comprehensive Land<br />Solutions
              </h2>
              <Link href="/services" className="btn-dark self-start md:self-auto">
                All Services →
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ScrollReveal
                key={service.title}
                animation="reveal"
                delay={([0, 100, 200, 300, 400, 500] as const)[i]}
              >
                <Link href={`/services#${service.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="group block rounded-2xl overflow-hidden bg-white card-hover">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={service.img}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-[#0a0a0a] text-lg mb-2 group-hover:text-[#C4922A] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[#6e6e73] text-sm leading-relaxed">{service.desc}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ FEATURE IMAGE ══════════ */}
      <section className="relative h-[70vh] min-h-[400px] overflow-hidden">
        <Image
          src="/images/service-pics/IMG_0628.jpeg"
          alt="Grounded Land Services CAT excavator on cleared Texas land"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="relative z-10 h-full flex items-center px-6">
          <div className="max-w-7xl mx-auto w-full">
            <ScrollReveal animation="reveal-left">
              <p className="section-label-light mb-4">Precision. Power. Performance.</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-xl mb-6">
                State-of-the-Art Equipment for Every Job
              </h2>
              <p className="text-white/70 text-lg max-w-md mb-8 leading-relaxed">
                Our fleet of CAT excavators and high-flow mulching heads handles the toughest terrain Texas has to offer.
              </p>
              <Link href="/gallery" className="btn-ghost">
                View Our Work →
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════ WHY US ══════════ */}
      <section className="py-14 md:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-10">
            <p className="section-label mb-3">Why Choose Us</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a0a0a] leading-tight mb-4">
              Unmatched Expertise &<br />Dedication to Your Land
            </h2>
            <p className="text-[#6e6e73] text-lg max-w-2xl mx-auto leading-relaxed">
              At Grounded Land Services, we bring unmatched expertise and cutting-edge equipment to every project. Our team's precision and attention to detail ensure your land transformation is completed efficiently, safely, and to the highest standards.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, i) => (
              <ScrollReveal
                key={item.title}
                animation="reveal"
                delay={([0, 100, 200, 300, 400, 500] as const)[i]}
              >
                <div className="flex gap-4 p-6 rounded-2xl bg-[#f5f5f7] hover:bg-white hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#C4922A] flex items-center justify-center text-white flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0a0a0a] mb-2">{item.title}</h3>
                    <p className="text-[#6e6e73] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ GALLERY PREVIEW ══════════ */}
      <section className="py-14 md:py-20 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
              <div>
                <p className="section-label-light mb-3">Our Work</p>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Results That Speak<br />for Themselves
                </h2>
              </div>
              <Link href="/gallery" className="btn-primary self-start md:self-auto">
                Full Gallery →
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {galleryImages.map(({ src }, i) => (
              <ScrollReveal
                key={src}
                animation="reveal-scale"
                delay={([0, 100, 200, 300, 400, 500] as const)[i]}
              >
                <Link href="/gallery" className="gallery-item block rounded-xl overflow-hidden aspect-[4/3]">
                  <Image
                    src={src}
                    alt={`Grounded Land Services project ${i + 1}`}
                    width={600}
                    height={400}
                    className="gallery-img"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

            {/* ══════════ SERVICE AREAS PREVIEW ══════════ */}
      <section className="py-12 px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <p className="section-label mb-3">Coverage</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-4">
              Serving Central Texas Property Owners 
            </h2>
            <p className="text-[#6e6e73] mb-8 max-w-xl mx-auto">
              No matter where your property is located, Grounded Land Services travels statewide to provide professional land clearing, forestry mulching, demolition, rock crushing, and site preparation services.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8 max-w-3xl mx-auto">
              {["Austin", "San Antonio", "Houston", "Dallas", "Marble Falls", "Fredericksburg", "Dripping Springs", "Kerrville", "Georgetown", "Round Rock", "Bastrop", "Waco"].map((city) => (
                <Link key={city} href="/service-areas" className="px-3 py-1.5 rounded-full bg-[#f5f5f7] text-[#1d1d1f] text-sm hover:bg-gray-200 transition-colors">
                  {city}
                </Link>
              ))}
              <Link href="/service-areas" className="px-3 py-1.5 rounded-full bg-[#C4922A]/15 text-[#8B6618] text-sm font-medium hover:bg-[#C4922A]/25 transition-colors">
                +100 more cities →
              </Link>
            </div>
            <Link href="/service-areas" className="btn-dark">
              View All Service Areas
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════ TESTIMONIALS ══════════ */}
      <section className="py-14 md:py-20 px-6 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-10">
            <p className="section-label mb-3">Customer Reviews</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a0a0a] leading-tight">
              What Our Clients Say
            </h2>
          </ScrollReveal>

          <TestimonialSlider />
        </div>
      </section>

      {/* ══════════ QUOTE FORM ══════════ */}
      <section id="quote" className="py-14 md:py-20 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal animation="reveal-left">
              <p className="section-label-light mb-4">Free Estimate</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Ready to Transform<br />Your Property?
              </h2>
              <p className="text-white/65 text-lg leading-relaxed mb-10">
                Fill out the form and Logan will reach out to discuss your project, walk the land, and provide a detailed quote — at no cost to you.
              </p>
              <div className="space-y-5">
                <a href="tel:5125716700" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs mb-0.5">Call us directly</p>
                    <p className="text-white font-medium">(512) 571-6700</p>
                  </div>
                </a>
                <a href="mailto:Logan@groundedlandservices.com" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs mb-0.5">Email us</p>
                    <p className="text-white font-medium">Logan@groundedlandservices.com</p>
                  </div>
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="reveal-right">
              <QuoteForm dark={true} />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
