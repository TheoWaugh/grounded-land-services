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
    quote: "We had a fantastic experience working with Grounded Land Services! From start to finish, the communication was clear and professional. He truly listened to what we needed and followed through with care and attention to detail. He completed work both before and after the July 4th flood, and we were impressed with his consistency, reliability, and the quality of the results. Highly recommend for any land clearing or related projects.",
  },
  {
    name: "Christopher Durst",
    quote: "We really appreciate the work Logan and his team did for us at the Uhland Fall Fest. They truly helped us curate a raw, unusable piece of land that was full of cedar trees and barbed mesquite into a beautiful, picturesque parkland for families to enjoy. I highly recommend these guys. Happy to discuss my experience by phone. First-class operation!",
  },
  {
    name: "Dylan Gavit",
    location: "Bertram, TX",
    quote: "On time, hard-working, nonstop, knowledgeable, easy to work with, generous, first responder supportive, like-minded, honest, good people, outstanding equipment, top-tier service, went out of their way multiple times to make sure my wife and I were satisfied in a patient manner. All around great people and land clearing company I see sky rocketing. More than fair prices for services. My wife and I recently bought 5 acres in Bertram, Texas. We found Grounded Land Services and gave them a try. Man are we glad we did. They were able to mow down giant cedar brush piles that had been there for at least 15 years down to nothing, worked all day and then some to get the job done and went out of their way to do a little extra on the house. These guys have been nothing short of amazing to work with — we sat in lawn chairs and watched them work meticulously yet efficiently. I would highly recommend them to anyone needing absolutely any sort of land clearing needed. 10/10 five star crew and business.",
  },
  {
    name: "Mckenzie Schultz",
    location: "Texas",
    quote: "I had an excellent experience with Grounded Land Services! They cleared five acres of heavy underbrush for me efficiently and thoroughly. The results exceeded my expectations! The crew was extremely professional and communicated clearly throughout the entire process. It's clear they take pride in their work. So happy with the results, would 100% recommend to anyone needing their services!",
  },
  {
    name: "Mike Janak",
    quote: "I hired Grounded Land Services to clear a 50 ft by 300 ft path through heavily wooded, sloping terrain that was inundated with Huisache and Prickly Pear. Walking that area before was a miserable experience and now it's a beautiful stroll on my property! Logan's attention to detail and especially the cleanup has my neighbors asking me for his business card.",
  },
  {
    name: "Barrett Garrison",
    location: "Spicewood, TX",
    quote: "We couldn't be happier with the work Grounded Land Services and owner, Logan Arnold, did on our ranch in Spicewood, TX. They took on a challenging property with a lot of cleanup needed, including removing trash and debris from a burned-down house and old, dilapidated sheds, while also clearing years of overgrown cedar across rough, rocky terrain. What impressed us most was the care and respect they showed for the land. They took the time to preserve the oaks and the trees we wanted to keep, while thoughtfully restoring the property and helping it reach its full potential. Their attention to detail, hard work, and understanding of the land truly made a difference. Logan and his team were dependable, punctual, friendly, and always one step ahead — anticipating challenges and helping us make good decisions throughout the process. It's clear they take pride in what they do, and we are grateful for the incredible transformation they helped create. Our ranch is in the best shape it has been in years, and we would gladly use Grounded Land Services again and recommend them to anyone looking to care for their land the right way.",
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
  {
    name: "Kathy Wendt",
    quote: "Grounded Land Services did an amazing job. He got rid of dead trees, branches, and stumps. He made our property looking great again. I highly recommend his services.",
  },
  {
    name: "Steve King",
    quote: "Logan worked on our property behind our pool and did a wonderful job clearing just over 1/2 acre. Logan's attention to detail coupled with methodical work ethic and a desire to do things the right way the first time lends to an outstanding finished product. He even found a source for the debris that saved us hundreds of dollars in dump truck removal costs! In addition, a neighbor asked me for his contact information! We highly recommend Logan and Grounded Land Services! They are professional, trustworthy and hard working. We are very happy and will be seeding soon with grass and Texas native flower seeds. Thanks to Grounded Land Services!!!",
  },
  {
    name: "John Cortez",
    location: "Burnet, TX",
    quote: "I highly recommend Logan and Grounded Land Services. I hired Logan to help clean up a couple years' worth of downed cedar trees, limbs, and other wood debris on my property, and he did an outstanding job. Logan was professional, dependable, and clearly knew what he was doing. He carefully stacked and burned the cedar and debris, managed the burn safely, and then went back over the area with his equipment to rake and clean up what remained. He did a great job clearing out the leftover cedar, rocks, and debris and left the property looking considerably better than when he started. What impressed me most was that Logan didn't just get the fire going and call it finished — he stayed focused on the entire job through the final cleanup. He took pride in his work, treated my property with respect, and delivered exactly what I hired him to do. I wouldn't hesitate to use Logan and Grounded Land Services again and would highly recommend him to anyone needing land clearing, cedar removal, burning, or general property cleanup.",
  },
];

const featuredNames = ["Jacque Mendenhall", "Christopher Durst", "Mckenzie Schultz"];

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div
      className="break-inside-avoid relative p-7 bg-white border border-gray-100 rounded-2xl hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group flex flex-col"
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-start">
        {featured.map((t) => (
          <TestimonialCard key={t.name} t={t} />
        ))}
      </div>

      {rest.length > 0 && (
        <>
          {showAll && (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [&>*]:mb-5 mt-5">
              {rest.map((t) => (
                <TestimonialCard key={t.name} t={t} />
              ))}
            </div>
          )}

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