"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white border-b border-[#E2EEF0] transition-shadow duration-200 ${
        scrolled ? "shadow-[0_3px_8px_rgba(0,0,0,0.08)]" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" aria-label="Veasy — Accueil">
          <img src="/veasy-logo.svg" alt="Veasy" className="h-8 w-auto select-none pointer-events-none" draggable={false} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-[#1A1A1A]">
          <Link
            href="/"
            className="hover:text-[#0091A5] transition-colors duration-200"
          >
            Accueil
          </Link>
          <Link
            href="/comment-ca-marche"
            className="hover:text-[#0091A5] transition-colors duration-200"
          >
            Comment ça marche
          </Link>
          <Link
            href="/pvt-france"
            className="hover:text-[#0091A5] transition-colors duration-200"
          >
            PVT France
          </Link>
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/telecharger"
          className="hidden md:inline-flex items-center bg-[#0091A5] text-white text-[15px] font-bold px-6 py-3 rounded-full hover:bg-[#007A8C] hover:shadow-[0_4px_8px_rgba(0,145,165,0.30)] transition-all duration-200"
        >
          Télécharger
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-[#666666]"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#E2EEF0] bg-white px-6 pb-6 flex flex-col gap-5 text-[15px] font-medium">
          <Link
            href="/"
            className="pt-5 text-[#1A1A1A] hover:text-[#0091A5] transition-colors"
            onClick={() => setOpen(false)}
          >
            Accueil
          </Link>
          <Link
            href="/comment-ca-marche"
            className="text-[#1A1A1A] hover:text-[#0091A5] transition-colors"
            onClick={() => setOpen(false)}
          >
            Comment ça marche
          </Link>
          <Link
            href="/pvt-france"
            className="text-[#1A1A1A] hover:text-[#0091A5] transition-colors"
            onClick={() => setOpen(false)}
          >
            PVT France
          </Link>
          <Link
            href="/telecharger"
            className="bg-[#0091A5] text-white text-center font-bold px-6 py-3 rounded-full hover:bg-[#007A8C] transition-colors"
            onClick={() => setOpen(false)}
          >
            Télécharger
          </Link>
        </div>
      )}
    </header>
  );
}
