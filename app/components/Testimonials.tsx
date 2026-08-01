"use client";

import { useState } from "react";

export interface Testimonial {
  name: string;
  location?: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Jacque Mendenhall",
    quote: "We had a fantastic experience working with Grounded Land Services! From start to finish, the communication was clear and professional. He completed work both before and after the July 4th flood, and we were impressed with his consistency, reliability, and the quality of the results. Highly recommend for any land clearing or related projects.",
  },
  {
    name: "Christopher Durst",
    quote: "We really appreciate the work Logan and his team did for us at the Uhland Fall Fest. They truly helped us curate a raw, unusable piece of land that was full of cedar trees and barbed mesquite into a beautiful, picturesque parkland for families to enjoy. I highly recommend these guys. First-class operation!",
  },
  {
    name: "Dylan Gavit",
    location: "Bertram, TX",
    quote: "On time, hard-working, nonstop, knowledgeable, easy to work with, generous, honest, good people, outstanding equipment, top-tier service. My wife and I recently bought 5 acres in Bertram, Texas, and Grounded Land Services mowed down giant cedar brush piles that had been there for at least 15 years down to nothing — working all day and then some to get the job done. More than fair prices. 10/10 five star crew and business.",
  },
  {
    name: "McKenzie Schultz",
    quote: "I had an excellent experience with Grounded Land Services! They cleared five acres of heavy underbrush efficiently and thoroughly. The results exceeded my expectations! The owner, Logan, was very communicative throughout the entire process and provided great service. I can't recommend Grounded Land Services enough!",
  },
  {
    name: "Mike Janak",
    quote: "I hired Grounded Land Services to clear a 50 ft by 300 ft path through heavily wooded, sloping terrain that was inundated with Huisache and Prickly Pear. Walking that area before was a miserable experience and now it's a beautiful stroll on my property! Logan's attention to detail and especially the cleanup has my neighbors asking me for his business card.",
  },
  {
    name: "Barrett Garrison",
    location: "Spicewood, TX",
    quote: "We couldn't be happier with the work Grounded Land Services and owner, Logan Arnold, did on our ranch in Spicewood, TX. They took on a challenging property with a lot of cleanup needed, clearing years of overgrown cedar across rough, rocky terrain. What impressed us most was the care and respect they showed for the land — they preserved the oaks and trees we wanted to keep while restoring the property to its full potential. Logan and his team were dependable, punctual, and always one step ahead. Our ranch is in the best shape it has been in years, and we would gladly recommend them to anyone looking to care for their land the right way.",
  },
  {
    name: "Melanie Madsen",
    quote: "GLS raked our hill country acreage to clean up brush and prep for grass. Looks smooth as can be now! Appreciate their time and flexibility! Job well done.",
  },
  {
    name: "Evan Smith",
    quote: "I am truly grateful for the quality of work and attention to detail Logan provided when mulching my cedar piles. He is very professional and I highly recommend his services. It's been a refreshing process to have a job done well and on time. Thanks Logan!",
  },
  {
    name: "Emil Millet",
    location: "Buda, TX",
    quote: "Grounded Land Services did an amazing job clearing our property in Buda, TX. They removed thick cedar and brush while protecting the trees we wanted to keep. The crew was professional, on time, and left the property clean and ready for our next project. If you need land clearing in Central Texas, I highly recommend Grounded Land Services!",
  },
];

const featuredNames = ["Jacque Mendenhall", "Christopher Durst", "Dylan Gavit"];

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div
      className="break-inside-avoid relative p-7 bg-white border border-gray-100 rounded-2xl hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group"
    >
      <svg
        className="absolute top-6 right-6 w-9 h-9 text-amber-100 group-hover:text-amber-200 transition-colors duration-300"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
      </svg>

      <div className="flex gap-0.5 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4 text-[#C4922A]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>

      <p className="text-[15px] text-[#2d2d2f] leading-relaxed mb-6 relative z-10">
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#D4A840] to-[#C4922A] flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-sm">
          {t.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div>
          <p className="text-sm font-bold text-[#0a0a0a]">{t.name}</p>
          {t.location && <p className="text-xs text-[#6e6e73] tracking-wide">{t.location}</p>}
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false);

  const featured = featuredNames
    .map((name) => testimonials.find((t) => t.name === name))
    .filter((t): t is Testimonial => Boolean(t));

  const rest = testimonials
    .filter((t) => !featuredNames.includes(t.name))
    .sort((a, b) => b.quote.length - a.quote.length);

  return (
    <div>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [&>*]:mb-5">
        {featured.map((t) => (
          <TestimonialCard key={t.name} t={t} />
        ))}
      </div>

      {rest.length > 0 && (
        <>
          <div
            className={`grid transition-all duration-500 ease-in-out ${
              showAll ? "grid-rows-[1fr] opacity-100 mt-5" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [&>*]:mb-5">
                {rest.map((t) => (
                  <TestimonialCard key={t.name} t={t} />
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-[#0a0a0a] rounded-full text-sm font-semibold text-[#0a0a0a] hover:bg-[#f5f5f5] transition-colors"
            >
              {showAll ? "Show Less" : `See More Reviews (${rest.length})`}
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </>
      )}
    </div>
  );
}