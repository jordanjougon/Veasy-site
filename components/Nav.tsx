"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

interface NavProps {
  lang: string;
}

export default function Nav({ lang }: NavProps) {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setOpen(false);
    setLangOpen(false);
  }, [pathname]);

  // Close lang dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isEn = lang === "en";
  const isFr = lang === "fr";
  const prefix = isFr ? "/fr" : isEn ? "/en" : "";

  const langHrefs = {
    "pt-BR": "/pt-BR",
    fr: "/fr",
    en: "/en",
  };

  const setLangCookie = (locale: string) => {
    document.cookie = `preferred-lang=${locale}; path=/; max-age=31536000; SameSite=Lax`;
  };

  const labels = isFr
    ? {
        home: "Accueil",
        howItWorks: "Comment ça marche",
        pvtFrance: "PVT France",
        download: "Télécharger",
        logoAriaLabel: "Veasy — Accueil",
        openMenu: "Ouvrir le menu",
        closeMenu: "Fermer le menu",
      }
    : isEn
    ? {
        home: "Home",
        howItWorks: "How it works",
        pvtFrance: "WHV France",
        download: "Download",
        logoAriaLabel: "Veasy — Home",
        openMenu: "Open menu",
        closeMenu: "Close menu",
      }
    : {
        home: "Início",
        howItWorks: "Como funciona",
        pvtFrance: "PVT França",
        download: "Baixar",
        logoAriaLabel: "Veasy — Início",
        openMenu: "Abrir menu",
        closeMenu: "Fechar menu",
      };

  return (
    <>
      {/* ── HEADER FIXE ── */}
      <header
        className={`fixed inset-x-0 top-0 z-50 bg-white border-b border-[#E2EEF0] transition-shadow duration-200${
          scrolled ? " shadow-[0_3px_8px_rgba(0,0,0,0.08)]" : ""
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">

          {/* Logo */}
          <Link
            href={prefix || "/"}
            aria-label={labels.logoAriaLabel}
            className="shrink-0"
          >
            <img
              src="/veasy-logo.svg"
              alt="Veasy"
              className="h-8 w-auto"
              draggable={false}
            />
          </Link>

          {/* Desktop nav — masqué sur mobile */}
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-[#1A1A1A]">
            <Link href={prefix || "/"} className="hover:text-[#0091A5] transition-colors duration-200">
              {labels.home}
            </Link>
            <Link href={`${prefix}/comment-ca-marche`} className="hover:text-[#0091A5] transition-colors duration-200">
              {labels.howItWorks}
            </Link>
            <Link href={`${prefix}/pvt-france`} className="hover:text-[#0091A5] transition-colors duration-200">
              {labels.pvtFrance}
            </Link>
          </nav>

          {/* Desktop CTA — masqué sur mobile */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            {/* Language dropdown */}
            <div className="relative" ref={langRef}>
              <button
                type="button"
                onClick={() => setLangOpen((v) => !v)}
                className="flex items-center gap-1 text-[13px] font-semibold text-[#666666] hover:text-[#0091A5] border border-[#E2EEF0] px-3 py-1.5 rounded-full transition-colors duration-200"
                style={{ touchAction: "manipulation", WebkitTapHighlightColor: "transparent" }}
              >
                {lang === "pt-BR" ? "PT" : lang.toUpperCase()}
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true" className={`transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}>
                  <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-1.5 bg-white border border-[#E2EEF0] rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.10)] overflow-hidden z-50 min-w-[80px]">
                  {(["pt-BR", "fr", "en"] as const).map((l) => (
                    <Link
                      key={l}
                      href={langHrefs[l]}
                      onClick={() => { setLangCookie(l); setLangOpen(false); }}
                      className={`flex items-center px-4 py-2.5 text-[13px] font-semibold transition-colors duration-150 ${
                        lang === l
                          ? "text-[#0091A5] bg-[#F0F7F7]"
                          : "text-[#1A1A1A] hover:bg-[#F4F4F4]"
                      }`}
                    >
                      {l === "pt-BR" ? "Português" : l === "fr" ? "Français" : "English"}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href={`${prefix}/telecharger`}
              className="inline-flex items-center bg-[#0091A5] text-white text-[15px] font-bold px-6 py-3 rounded-full hover:bg-[#007A8C] hover:shadow-[0_4px_8px_rgba(0,145,165,0.30)] transition-all duration-200"
            >
              {labels.download}
            </Link>
          </div>

          {/* Burger — mobile uniquement */}
          <button
            type="button"
            aria-label={open ? labels.closeMenu : labels.openMenu}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden shrink-0 flex items-center justify-center w-11 h-11 rounded-lg text-[#1A1A1A] hover:bg-[#F4F4F4] transition-colors duration-150"
            style={{ touchAction: "manipulation", WebkitTapHighlightColor: "transparent" }}
          >
            {open ? (
              /* Croix */
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            ) : (
              /* Hamburger */
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* ── MENU MOBILE ── */}
      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-16 z-40 bg-white border-b border-[#E2EEF0] shadow-[0_4px_12px_rgba(0,0,0,0.08)] md:hidden"
        >
          <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
            <Link
              href={prefix || "/"}
              className="flex items-center h-12 px-3 rounded-lg text-[15px] font-medium text-[#1A1A1A] hover:bg-[#F4F4F4] transition-colors"
              onClick={() => setOpen(false)}
            >
              {labels.home}
            </Link>
            <Link
              href={`${prefix}/comment-ca-marche`}
              className="flex items-center h-12 px-3 rounded-lg text-[15px] font-medium text-[#1A1A1A] hover:bg-[#F4F4F4] transition-colors"
              onClick={() => setOpen(false)}
            >
              {labels.howItWorks}
            </Link>
            <Link
              href={`${prefix}/pvt-france`}
              className="flex items-center h-12 px-3 rounded-lg text-[15px] font-medium text-[#1A1A1A] hover:bg-[#F4F4F4] transition-colors"
              onClick={() => setOpen(false)}
            >
              {labels.pvtFrance}
            </Link>
            <div className="mt-2 pt-3 border-t border-[#E2EEF0] flex flex-col gap-2">
              <Link
                href={`${prefix}/telecharger`}
                className="flex items-center justify-center h-12 bg-[#0091A5] text-white text-[15px] font-bold rounded-full hover:bg-[#007A8C] transition-colors"
                onClick={() => setOpen(false)}
              >
                {labels.download}
              </Link>
              {/* Language switcher */}
              <div className="flex flex-col gap-1">
                {(["pt-BR", "fr", "en"] as const).map((l) => (
                  <Link
                    key={l}
                    href={langHrefs[l]}
                    onClick={() => { setLangCookie(l); setOpen(false); }}
                    className={`flex items-center h-11 px-4 rounded-xl text-[14px] font-semibold transition-colors ${
                      lang === l
                        ? "bg-[#F0F7F7] text-[#0091A5]"
                        : "text-[#666666] hover:bg-[#F4F4F4]"
                    }`}
                  >
                    {l === "pt-BR" ? "Português" : l === "fr" ? "Français" : "English"}
                    {lang === l && (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="ml-auto">
                        <path d="M3 8l3.5 3.5L13 4.5" stroke="#0091A5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
