import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import DownloadButtons from "@/components/DownloadButtons";
import TrackedLink from "@/components/TrackedLink";
import LottieHero from "@/components/LottieHero";
import CheckboxIcon from "@/components/CheckboxIcon";
import { getDictionary, hasLocale, supportedLocales } from "@/lib/getDictionary";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return supportedLocales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = await getDictionary(lang);
  const base = "https://veasy.pro";
  return {
    title: t.metadata.home.title,
    description: t.metadata.home.description,
    alternates: {
      canonical: `${base}/${lang}`,
      languages: {
        "fr": `${base}/fr`,
        "en": `${base}/en`,
        "pt-BR": `${base}/pt-BR`,
      },
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const t = await getDictionary(lang);
  const h = t.home;
  const isEn = lang === "en";
  const isFr = lang === "fr";
  const prefix = isFr ? "/fr" : isEn ? "/en" : "/pt-BR";

  const steps = [
    {
      num: "01",
      title: h.step1Title,
      desc: h.step1Desc,
      detail: h.step1Detail,
      points: h.step1Points,
      img: h.step1Img,
      alt: h.step1Alt,
    },
    {
      num: "02",
      title: h.step2Title,
      desc: h.step2Desc,
      detail: h.step2Detail,
      points: h.step2Points,
      img: h.step2Img,
      alt: h.step2Alt,
    },
    {
      num: "03",
      title: h.step3Title,
      desc: h.step3Desc,
      detail: h.step3Detail,
      points: h.step3Points,
      img: h.step3Img,
      alt: h.step3Alt,
    },
  ];

  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-[#F0F7F7] px-6 py-16 md:py-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Texte */}
          <div className="text-center md:text-left">
            <span className="inline-block bg-[#C3E6EA] text-[#0091A5] text-[13px] font-semibold px-3 py-1 rounded-full mb-5 tracking-wide">
              {h.badge}
            </span>
            <h1 className="text-[34px] sm:text-[48px] font-extrabold text-[#1A1A1A] leading-[1.12] tracking-tight">
              {h.h1Part1}{" "}
              <span className="text-[#0091A5]">{h.h1Highlight}</span>
            </h1>
            <p className="mt-5 text-[17px] font-medium text-[#666666] leading-relaxed">
              {h.subtitle}
            </p>
            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <TrackedLink
                href={`${prefix}/telecharger`}
                event="download_cta_click"
                eventData={{ location: "home_hero" }}
                className="inline-flex items-center justify-center whitespace-nowrap bg-[#0091A5] text-white text-[15px] font-bold px-6 py-3.5 rounded-full hover:bg-[#007A8C] hover:shadow-[0_4px_8px_rgba(0,145,165,0.30)] transition-all duration-200"
              >
                {h.ctaDownload}
              </TrackedLink>
              <Link
                href={`${prefix}/comment-ca-marche`}
                className="inline-flex items-center justify-center whitespace-nowrap border-[1.5px] border-[#0091A5] text-[#0091A5] text-[15px] font-bold px-6 py-3.5 rounded-full hover:bg-[rgba(0,145,165,0.06)] transition-all duration-200"
              >
                {h.ctaHowItWorks}
              </Link>
            </div>
            {/* Réassurance */}
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 justify-center md:justify-start">
              {h.reassurance.map((item: string) => (
                <span key={item} className="flex items-center gap-1.5 text-[13px] font-medium text-[#666666]">
                  <CheckboxIcon className="w-4 h-4 text-[#0091A5] flex-shrink-0" />
                  {item}
                </span>
              ))}
            </div>
          </div>
          {/* Illustration Lottie — desktop uniquement */}
          <div className="hidden md:flex justify-center">
            <LottieHero />
          </div>
        </div>
      </section>

      {/* ── QU'EST-CE QUE LE PVT ── */}
      <section className="py-16 px-6 bg-white border-b border-[#E2EEF0]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-[24px] sm:text-[30px] font-extrabold text-[#1A1A1A] mb-5">
            {h.pvtIntroTitle}
          </h2>
          <p className="text-[16px] font-medium text-[#666666] leading-relaxed mb-4">
            {h.pvtIntroPara1}
          </p>
          <p className="text-[16px] font-medium text-[#666666] leading-relaxed mb-7">
            {h.pvtIntroPara2}
          </p>
          <Link
            href={`${prefix}/pvt-france`}
            className="inline-flex items-center gap-1 text-[#0091A5] text-[15px] font-bold hover:text-[#007A8C] transition-colors duration-200"
          >
            {h.pvtIntroLink}
          </Link>
        </div>
      </section>

      {/* ── SOLUTION — 3 sections alternées ── */}
      <div>
        {steps.map((step, i) => (
          <section
            key={step.num}
            className={`py-20 px-6 ${i % 2 === 0 ? "bg-[#F4F4F4]" : "bg-white"}`}
          >
            <div
              className={`max-w-5xl mx-auto flex flex-col ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-12 items-center`}
            >
              {/* Screenshot */}
              <div className="flex-1 flex justify-center">
                <Image
                  src={step.img}
                  alt={step.alt}
                  width={280}
                  height={560}
                  className="rounded-2xl"
                />
              </div>
              {/* Texte */}
              <div className="flex-1 text-center md:text-left">
                <span className="text-[48px] font-extrabold text-[#0091A5] opacity-20 leading-none select-none">
                  {step.num}
                </span>
                <h2 className="text-[26px] sm:text-[32px] font-extrabold text-[#1A1A1A] mt-2 mb-4">
                  {step.title}
                </h2>
                <p className="text-[16px] font-semibold text-[#1A1A1A] leading-relaxed mb-4">
                  {step.desc}
                </p>
                <p className="text-[15px] font-medium text-[#666666] leading-relaxed mb-6">
                  {step.detail}
                </p>
                <ul className="flex flex-col gap-2">
                  {step.points.map((point: string) => (
                    <li key={point} className="flex items-center gap-3 justify-center md:justify-start">
                      <CheckboxIcon className="w-5 h-5 flex-shrink-0 text-[#0091A5]" />
                      <span className="text-[14px] font-medium text-[#1A1A1A]">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* ── MODE EXPLORER ── */}
      <section className="py-20 px-6 bg-[#F0F7F7]">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-[#C3E6EA] text-[#0091A5] text-[13px] font-semibold px-3 py-1 rounded-full mb-5">
            {h.explorerBadge}
          </span>
          <h2 className="text-[26px] sm:text-[36px] font-extrabold text-[#1A1A1A] mb-4">
            {h.explorerTitle}
          </h2>
          <p className="text-[17px] font-medium text-[#666666] leading-relaxed mb-8">
            {h.explorerDesc}
          </p>
          <TrackedLink
            href={`${prefix}/telecharger`}
            event="download_cta_click"
            eventData={{ location: "home_explorer" }}
            className="inline-flex items-center bg-[#0091A5] text-white text-[15px] font-bold px-8 py-4 rounded-full hover:bg-[#007A8C] hover:shadow-[0_4px_8px_rgba(0,145,165,0.30)] transition-all duration-200"
          >
            {h.explorerCta}
          </TrackedLink>
          <p className="mt-4 text-[13px] font-medium text-[#666666]">
            {h.explorerNote}
          </p>
        </div>
      </section>

      {/* ── SÉCURITÉ / CONFIANCE ── */}
      <section className="py-20 px-6 bg-[#F4F4F4]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#C3E6EA] text-[#0091A5] text-[13px] font-semibold px-3 py-1 rounded-full mb-5">
              {h.securityBadge}
            </span>
            <h2 className="text-[26px] sm:text-[34px] font-extrabold text-[#1A1A1A] mb-3">
              {h.securityTitle}
            </h2>
            <p className="text-[16px] font-medium text-[#666666] max-w-xl mx-auto">
              {h.securityDesc}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Stockage sécurisé */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_1px_4px_rgba(0,0,0,0.06)] border border-[#E2EEF0]">
              <div className="w-10 h-10 rounded-xl bg-[#E0F5F7] flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0091A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </div>
              <h3 className="text-[15px] font-bold text-[#1A1A1A] mb-2">{h.security1Title}</h3>
              <p className="text-[14px] font-medium text-[#666666] leading-relaxed">{h.security1Desc}</p>
            </div>
            {/* Données chiffrées */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_1px_4px_rgba(0,0,0,0.06)] border border-[#E2EEF0]">
              <div className="w-10 h-10 rounded-xl bg-[#E0F5F7] flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0091A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3 className="text-[15px] font-bold text-[#1A1A1A] mb-2">{h.security2Title}</h3>
              <p className="text-[14px] font-medium text-[#666666] leading-relaxed">{h.security2Desc}</p>
            </div>
            {/* Connexion sécurisée */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_1px_4px_rgba(0,0,0,0.06)] border border-[#E2EEF0]">
              <div className="w-10 h-10 rounded-xl bg-[#E0F5F7] flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0091A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <h3 className="text-[15px] font-bold text-[#1A1A1A] mb-2">{h.security3Title}</h3>
              <p className="text-[14px] font-medium text-[#666666] leading-relaxed">{h.security3Desc}</p>
            </div>
            {/* Aucun partage tiers */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_1px_4px_rgba(0,0,0,0.06)] border border-[#E2EEF0]">
              <div className="w-10 h-10 rounded-xl bg-[#E0F5F7] flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0091A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <line x1="23" y1="1" x2="1" y2="23"/>
                </svg>
              </div>
              <h3 className="text-[15px] font-bold text-[#1A1A1A] mb-2">{h.security4Title}</h3>
              <p className="text-[14px] font-medium text-[#666666] leading-relaxed">{h.security4Desc}</p>
            </div>
            {/* Contrôle utilisateur */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_1px_4px_rgba(0,0,0,0.06)] border border-[#E2EEF0]">
              <div className="w-10 h-10 rounded-xl bg-[#E0F5F7] flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0091A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="8" r="4"/>
                  <path d="M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
                  <polyline points="16 11 18 13 22 9"/>
                </svg>
              </div>
              <h3 className="text-[15px] font-bold text-[#1A1A1A] mb-2">{h.security5Title}</h3>
              <p className="text-[14px] font-medium text-[#666666] leading-relaxed">{h.security5Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-24 px-6 bg-[#1A1A1A] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[28px] sm:text-[40px] font-extrabold text-white mb-3">
            {h.ctaFinalTitle}
          </h2>
          <p className="text-[#A0AABB] mb-10 text-[16px] font-medium">
            {h.ctaFinalSubtitle}
          </p>
          <div className="inline-flex flex-col sm:flex-row gap-3 bg-white/5 rounded-2xl p-4">
            <DownloadButtons location="home_cta" />
          </div>
        </div>
      </section>
    </>
  );
}
