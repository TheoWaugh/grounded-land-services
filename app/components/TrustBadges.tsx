export default function TrustBadges() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
      <div className="flex items-center gap-3 p-5 bg-[#f9f9f9] border border-gray-100 rounded-2xl">
        <div className="w-10 h-10 rounded-full bg-[#C4922A] flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <p className="font-bold text-[#0a0a0a] text-sm">Licensed</p>
          <p className="text-xs text-[#6e6e73]">Fully licensed in Texas</p>
        </div>
      </div>

      <div className="flex items-center gap-3 p-5 bg-[#f9f9f9] border border-gray-100 rounded-2xl">
        <div className="w-10 h-10 rounded-full bg-[#C4922A] flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
        </div>
        <div>
          <p className="font-bold text-[#0a0a0a] text-sm">Insured</p>
          <p className="text-xs text-[#6e6e73]">Fully insured for your protection</p>
        </div>
      </div>

      <a
        href="https://www.google.com/search?q=Grounded+Land+Services&rlz=1C1RXMK_enUS962US962&sca_esv=75280e57e4653e14&biw=1278&bih=368&sxsrf=APpeQntaTYC15Ea8ryLP9gyMSfc_9mSYLw%3A1784781720275&ei=mJthau-0EK22qtsPg7mX4Qc&ved=0ahUKEwjv4MCD_ueVAxUtm2oFHYPcJXwQ4dUDCBA&uact=5&oq=Grounded+Land+Services&gs_lp=Egxnd3Mtd2l6LXNlcnAiFkdyb3VuZGVkIExhbmQgU2VydmljZXMyBxAjGLADGCcyChAAGEcY1gQYsAMyChAAGEcY1gQYsAMyChAAGEcY1gQYsAMyChAAGEcY1gQYsAMyChAAGEcY1gQYsANIxAZQAFgAcAF4AZABAJgBAKABAKoBALgBA8gBAJgCAaACBZgDAIgGAZAGBpIHATGgBwCyBwC4BwDCBwMyLTHIBwOACAE&sclient=gws-wiz-serp"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 p-5 bg-[#f9f9f9] border border-gray-100 rounded-2xl hover:border-amber-200 hover:bg-amber-50 transition-colors"
      >
        <div className="w-10 h-10 rounded-full bg-[#C4922A] flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        </div>
        <div>
<p className="font-bold text-[#0a0a0a] text-sm">5.0 on Google (11 reviews)</p>
          <p className="text-xs text-[#6e6e73]">Based on verified customer reviews</p>
        </div>
      </a>
    </div>
  );
}