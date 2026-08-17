"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "FAQs", href: "/faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  const headerBg = scrolled
    ? "bg-black/95 backdrop-blur-xl border-b border-[#C4922A]/20 shadow-[0_4px_24px_rgba(0,0,0,0.6)]"
    : isHome
    ? "bg-transparent"
    : "bg-black/95 backdrop-blur-xl border-b border-[#C4922A]/20";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}>
<div className="w-full px-6 lg:px-10 h-20 flex items-center justify-between">        <Link href="/" className="flex items-center group">
<Image
            src="/logos.png"
            alt="Grounded Land Services"
            width={480}
            height={240}
            quality={100}
className="h-16 md:h-20 w-auto object-contain transition-opacity group-hover:opacity-85"          />
        </Link>

        {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
className={`nav-link text-lg transition-colors ${                pathname === link.href ? "!text-[#C4922A] font-medium" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
<div className="hidden md:flex items-center gap-5">
<a href="tel:5125716700"
            className="nav-link text-lg"
            onClick={() => {
              if (typeof window !== "undefined" && (window as any).fbq) {
                (window as any).fbq("track", "Contact");
              }
            }}
          >
            (512) 571-6700
          </a>
          <Link
            href="/contact"
            className="btn-primary text-sm px-5 py-2.5"
            onClick={() => {
              if (typeof window !== "undefined" && (window as any).fbq) {
                (window as any).fbq("track", "Contact");
              }
            }}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"} bg-black/98 backdrop-blur-xl border-t border-[#C4922A]/20`}>
        <nav className="px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/85 text-base font-medium py-2 border-b border-white/10 hover:text-[#D4A840] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a href="tel:5125716700" className="text-white/85 text-base font-medium py-2 border-b border-white/10">
            (512) 571-6700
          </a>
          <Link href="/contact" className="btn-primary mt-2 text-center">
            Get a Free Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
