import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CheckboxIcon from "@/components/CheckboxIcon";
import WarningIcon from "@/components/WarningIcon";
import TrackedLink from "@/components/TrackedLink";
import DownloadButtons from "@/components/DownloadButtons";
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
    title: t.metadata.pvtFrance.title,
    description: t.metadata.pvtFrance.description,
    alternates: {
      canonical: `${base}/${lang}/pvt-france`,
      languages: {
        "fr": `${base}/fr/pvt-france`,
        "en": `${base}/en/pvt-france`,
        "pt-BR": `${base}/pt-BR/pvt-france`,
      },
    },
  };
}

export default async function PvtFrancePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const t = await getDictionary(lang);
  const p = t.pvtFrance;
  const isEn = lang === "en";
  const isFr = lang === "fr";
  const prefix = isFr ? "/fr" : isEn ? "/en" : "/pt-BR";

  const etapes = [
    { num: p.etape1Num, title: p.etape1Title, desc: p.etape1Desc },
    { num: p.etape2Num, title: p.etape2Title, desc: p.etape2Desc },
    { num: p.etape3Num, title: p.etape3Title, desc: p.etape3Desc },
    { num: p.etape4Num, title: p.etape4Title, desc: p.etape4Desc },
    { num: p.etape5Num, title: p.etape5Title, desc: p.etape5Desc },
    { num: p.etape6Num, title: p.etape6Title, desc: p.etape6Desc },
  ];

  const erreurs = [
    { title: p.error1Title, desc: p.error1Desc },
    { title: p.error2Title, desc: p.error2Desc },
    { title: p.error3Title, desc: p.error3Desc },
    { title: p.error4Title, desc: p.error4Desc },
    { title: p.error5Title, desc: p.error5Desc },
  ];

  const features = [
    {
      img: p.feature1Img,
      alt: p.feature1Alt,
      points: [
        { title: p.feature1Point1Title, desc: p.feature1Point1Desc },
        { title: p.feature1Point2Title, desc: p.feature1Point2Desc },
      ],
    },
    {
      img: p.feature2Img,
      alt: p.feature2Alt,
      points: [
        { title: p.feature2Point1Title, desc: p.feature2Point1Desc },
        { title: p.feature2Point2Title, desc: p.feature2Point2Desc },
      ],
    },
    {
      img: p.feature3Img,
      alt: p.feature3Alt,
      points: [
        { title: p.feature3Point1Title, desc: p.feature3Point1Desc },
        { title: p.feature3Point2Title, desc: p.feature3Point2Desc },
      ],
    },
  ];

  const comparatif = [
    { feature: p.comparatifRow1, siteInfo: true, veasy: true },
    { feature: p.comparatifRow2, siteInfo: false, veasy: true },
    { feature: p.comparatifRow3, siteInfo: false, veasy: true },
    { feature: p.comparatifRow4, siteInfo: false, veasy: true },
    { feature: p.comparatifRow5, siteInfo: false, veasy: true },
    { feature: p.comparatifRow6, siteInfo: false, veasy: true },
  ];

  const faqs = [
    { q: p.faq1Q, a: p.faq1A },
    { q: p.faq2Q, a: p.faq2A },
    { q: p.faq3Q, a: p.faq3A },
    { q: p.faq4Q, a: p.faq4A },
    { q: p.faq5Q, a: p.faq5A },
    { q: p.faq6Q, a: p.faq6A },
    { q: p.faq7Q, a: p.faq7A },
    { q: p.faq8Q, a: p.faq8A },
    { q: p.faq9Q, a: p.faq9A },
    { q: p.faq10Q, a: p.faq10A },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const docFactors = [
    {
      label: p.docsFactor1Label,
      desc: p.docsFactor1Desc,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253M3 12c0 .778.099 1.533.284 2.253" />
        </svg>
      ),
    },
    {
      label: p.docsFactor2Label,
      desc: p.docsFactor2Desc,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
        </svg>
      ),
    },
    {
      label: p.docsFactor3Label,
      desc: p.docsFactor3Desc,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* ── HERO ── */}
      <section className="bg-[#F0F7F7] px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-[#C3E6EA] text-[#0091A5] text-[13px] font-semibold px-3 py-1 rounded-full mb-5 tracking-wide">
            {p.badge}
          </span>
          <h1 className="text-[32px] sm:text-[44px] font-extrabold text-[#1A1A1A] leading-[1.15] tracking-tight">
            {p.h1}
          </h1>
          <p className="mt-5 text-[17px] font-medium text-[#666666] leading-relaxed">
            {p.heroDesc}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <TrackedLink
              href={`${prefix}/telecharger`}
              event="download_cta_click"
              eventData={{ location: "pvt_france_hero" }}
              className="inline-flex items-center justify-center bg-[#0091A5] text-white text-[15px] font-bold px-7 py-3.5 rounded-full hover:bg-[#007A8C] hover:shadow-[0_4px_8px_rgba(0,145,165,0.30)] transition-all duration-200"
            >
              {p.heroCta}
            </TrackedLink>
            <a
              href="#pvt"
              className="inline-flex items-center justify-center border-[1.5px] border-[#0091A5] text-[#0091A5] text-[15px] font-bold px-7 py-3.5 rounded-full hover:bg-[rgba(0,145,165,0.06)] transition-all duration-200"
            >
              {p.heroCtaSecondary}
            </a>
          </div>
        </div>
      </section>

      {/* ── COMPRENDRE LE PVT ── */}
      <section id="pvt" className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[26px] sm:text-[36px] font-extrabold text-[#1A1A1A] mb-8">
            {p.whatIsTitle}
          </h2>
          <div className="flex flex-col gap-6 text-[16px] font-medium text-[#444444] leading-relaxed">
            <p>{p.whatIsPara1}</p>
            <p>{p.whatIsPara2}</p>
            <p>
              {(() => {
                const bold = p.whatIsPara3Bold as string | undefined;
                if (bold && p.whatIsPara3.includes(bold)) {
                  const [before, after] = p.whatIsPara3.split(bold);
                  return <>{before}<strong>{bold}</strong>{after}</>;
                }
                return p.whatIsPara3;
              })()}
            </p>
          </div>
        </div>
      </section>

      {/* ── LES GRANDES ÉTAPES ── */}
      <section id="etapes" className="py-20 px-6 bg-[#F4F4F4]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[26px] sm:text-[36px] font-extrabold text-[#1A1A1A] text-center mb-12">
            {p.stepsTitle}
          </h2>
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-[#E2EEF0]" />
            <div className="flex flex-col gap-0">
              {etapes.map((step, i) => (
                <div key={step.num} className={`relative flex gap-6 ${i < etapes.length - 1 ? "pb-8" : ""}`}>
                  <div className="w-10 h-10 rounded-full bg-[#0091A5] flex items-center justify-center text-white text-[12px] font-bold flex-shrink-0 z-10">
                    {step.num}
                  </div>
                  <div className="flex-1 bg-white rounded-2xl border border-[#E2EEF0] p-5 shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
                    <h3 className="text-[15px] font-bold text-[#1A1A1A] mb-1">{step.title}</h3>
                    <p className="text-[14px] font-medium text-[#666666] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── LES DOCUMENTS ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[26px] sm:text-[36px] font-extrabold text-[#1A1A1A] mb-4">
            {p.docsTitle}
          </h2>
          <p className="text-[16px] font-medium text-[#666666] leading-relaxed mb-8">
            {p.docsDesc}
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {docFactors.map((item) => (
              <div key={item.label} className="flex flex-col gap-3 p-5 bg-white border border-[#E2EEF0] rounded-2xl shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
                <div className="w-9 h-9 rounded-xl bg-[#F0F7F7] flex items-center justify-center text-[#0091A5] flex-shrink-0">
                  {item.icon}
                </div>
                <span className="text-[14px] font-bold text-[#1A1A1A]">{item.label}</span>
                <span className="text-[13px] font-medium text-[#666666] leading-relaxed">{item.desc}</span>
              </div>
            ))}
          </div>
          <p className="text-[15px] font-semibold text-[#1A1A1A] mb-6">
            {p.docsCta1}
          </p>
          <div className="flex justify-center">
            <TrackedLink
              href={`${prefix}/telecharger`}
              event="download_cta_click"
              eventData={{ location: "pvt_france_docs" }}
              className="inline-flex items-center justify-center bg-[#0091A5] text-white text-[15px] font-bold px-7 py-3.5 rounded-full hover:bg-[#007A8C] hover:shadow-[0_4px_8px_rgba(0,145,165,0.30)] transition-all duration-200"
            >
              {p.docsCta2}
            </TrackedLink>
          </div>
        </div>
      </section>

      {/* ── LES ERREURS FRÉQUENTES ── */}
      <section className="py-20 px-6 bg-[#F4F4F4]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[26px] sm:text-[36px] font-extrabold text-[#1A1A1A] mb-4">
            {p.errorsTitle}
          </h2>
          <p className="text-[16px] font-medium text-[#666666] leading-relaxed mb-8">
            {p.errorsDesc}
          </p>
          <div className="flex flex-col gap-4">
            {erreurs.map((err) => (
              <div key={err.title} className="bg-white rounded-2xl border border-[#E2EEF0] p-6 flex gap-4 shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
                <WarningIcon className="w-6 h-6 flex-shrink-0 mt-0.5 text-[#FF8400]" />
                <div>
                  <p className="text-[15px] font-bold text-[#1A1A1A] mb-1">{err.title}</p>
                  <p className="text-[14px] font-medium text-[#666666] leading-relaxed">{err.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MODE EXPLORER ── */}
      <section className="py-20 px-6 bg-[#F0F7F7]">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-[#C3E6EA] text-[#0091A5] text-[13px] font-semibold px-3 py-1 rounded-full mb-5">
            {p.explorerBadge}
          </span>
          <h2 className="text-[26px] sm:text-[36px] font-extrabold text-[#1A1A1A] mb-4">
            {p.explorerTitle}
          </h2>
          <p className="text-[17px] font-medium text-[#666666] leading-relaxed mb-8">
            {p.explorerDesc}
          </p>
          <TrackedLink
            href={`${prefix}/telecharger`}
            event="download_cta_click"
            eventData={{ location: "pvt_france_explorer" }}
            className="inline-flex items-center bg-[#0091A5] text-white text-[15px] font-bold px-8 py-4 rounded-full hover:bg-[#007A8C] hover:shadow-[0_4px_8px_rgba(0,145,165,0.30)] transition-all duration-200"
          >
            {p.explorerCta}
          </TrackedLink>
          <p className="mt-4 text-[13px] font-medium text-[#666666]">
            {p.explorerNote}
          </p>
        </div>
      </section>

      {/* ── COMMENT VEASY SIMPLIFIE ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#C3E6EA] text-[#0091A5] text-[13px] font-semibold px-3 py-1 rounded-full mb-5">
              {p.howVeasyBadge}
            </span>
            <h2 className="text-[26px] sm:text-[36px] font-extrabold text-[#1A1A1A] mb-4">
              {p.howVeasyTitle}
            </h2>
            <p className="text-[16px] font-medium text-[#666666] max-w-xl mx-auto leading-relaxed">
              {p.howVeasyDesc}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.alt} className="flex flex-col items-center gap-6">
                <Image
                  src={f.img}
                  alt={f.alt}
                  width={200}
                  height={400}
                  className="rounded-[1.8rem] border-[6px] border-[#1A1A1A] shadow-[0_8px_24px_rgba(0,0,0,0.18)]"
                />
                <div className="w-full flex flex-col gap-4">
                  {f.points.map((pt) => (
                    <div key={pt.title}>
                      <div className="flex items-center gap-2 mb-1">
                        <CheckboxIcon className="w-5 h-5 flex-shrink-0 text-[#0091A5]" />
                        <span className="text-[15px] font-bold text-[#1A1A1A]">{pt.title}</span>
                      </div>
                      <p className="text-[13px] font-medium text-[#666666] leading-relaxed pl-7">{pt.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARATIF ── */}
      <section className="py-20 px-6 bg-[#F4F4F4]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[26px] sm:text-[36px] font-extrabold text-[#1A1A1A] text-center mb-4">
            {p.comparatifTitle}
          </h2>
          <p className="text-[16px] font-medium text-[#666666] text-center leading-relaxed mb-10">
            {p.comparatifDesc}
          </p>
          <div className="overflow-x-auto rounded-2xl border border-[#E2EEF0] bg-white shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
            <table className="w-full text-[14px]">
              <thead>
                <tr className="border-b border-[#E2EEF0]">
                  <th className="text-left py-4 px-6 font-semibold text-[#666666] w-1/2">
                    {p.comparatifColFeature}
                  </th>
                  <th className="py-4 px-4 font-semibold text-[#A0AABB] text-center">
                    {p.comparatifColSiteInfo}
                  </th>
                  <th className="py-4 px-4 font-bold text-[#0091A5] text-center">{p.comparatifColVeasy}</th>
                </tr>
              </thead>
              <tbody>
                {comparatif.map((row, i) => (
                  <tr key={row.feature} className={i < comparatif.length - 1 ? "border-b border-[#E2EEF0]" : ""}>
                    <td className="py-4 px-6 font-medium text-[#1A1A1A]">{row.feature}</td>
                    <td className="py-4 px-4">
                      <div className="flex justify-center">
                        {row.siteInfo ? (
                          <CheckboxIcon className="w-5 h-5 text-[#0091A5]" />
                        ) : (
                          <svg className="w-5 h-5 text-[#C7C7CC]" fill="currentColor" viewBox="0 0 18 18">
                            <path d="M9 16.5C4.858 16.5 1.5 13.142 1.5 9S4.858 1.5 9 1.5 16.5 4.858 16.5 9 13.142 16.5 9 16.5zm2.561-11.06L9 8.001 6.439 5.44 5.379 6.5 7.94 9.061l-2.561 2.56 1.06 1.061L9 10.122l2.561 2.56 1.06-1.06-2.56-2.561 2.56-2.561-1.06-1.061z" />
                          </svg>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex justify-center">
                        <CheckboxIcon className="w-5 h-5 text-[#0091A5]" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 px-6 bg-[#F0F7F7]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[26px] sm:text-[36px] font-extrabold text-[#1A1A1A] text-center mb-10">
            {p.faqTitle}
          </h2>
          <div className="flex flex-col gap-3">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group bg-white rounded-2xl border border-[#E2EEF0]"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 font-bold text-[15px] text-[#1A1A1A] list-none">
                  {item.q}
                  <span className="ml-4 text-[#A0AABB] flex-shrink-0 text-lg">▾</span>
                </summary>
                <p className="px-6 pb-5 text-[15px] font-medium text-[#666666] leading-relaxed">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── SÉCURITÉ / CONFIANCE ── */}
      <section className="py-20 px-6 bg-[#F4F4F4]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#C3E6EA] text-[#0091A5] text-[13px] font-semibold px-3 py-1 rounded-full mb-5">
              {p.securityBadge}
            </span>
            <h2 className="text-[26px] sm:text-[34px] font-extrabold text-[#1A1A1A] mb-3">
              {p.securityTitle}
            </h2>
            <p className="text-[16px] font-medium text-[#666666] max-w-xl mx-auto">
              {p.securityDesc}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl p-6 shadow-[0_1px_4px_rgba(0,0,0,0.06)] border border-[#E2EEF0]">
              <div className="w-10 h-10 rounded-xl bg-[#E0F5F7] flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0091A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </div>
              <h3 className="text-[15px] font-bold text-[#1A1A1A] mb-2">{p.security1Title}</h3>
              <p className="text-[14px] font-medium text-[#666666] leading-relaxed">{p.security1Desc}</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-[0_1px_4px_rgba(0,0,0,0.06)] border border-[#E2EEF0]">
              <div className="w-10 h-10 rounded-xl bg-[#E0F5F7] flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0091A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3 className="text-[15px] font-bold text-[#1A1A1A] mb-2">{p.security2Title}</h3>
              <p className="text-[14px] font-medium text-[#666666] leading-relaxed">{p.security2Desc}</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-[0_1px_4px_rgba(0,0,0,0.06)] border border-[#E2EEF0]">
              <div className="w-10 h-10 rounded-xl bg-[#E0F5F7] flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0091A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <h3 className="text-[15px] font-bold text-[#1A1A1A] mb-2">{p.security3Title}</h3>
              <p className="text-[14px] font-medium text-[#666666] leading-relaxed">{p.security3Desc}</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-[0_1px_4px_rgba(0,0,0,0.06)] border border-[#E2EEF0]">
              <div className="w-10 h-10 rounded-xl bg-[#E0F5F7] flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0091A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <line x1="23" y1="1" x2="1" y2="23"/>
                </svg>
              </div>
              <h3 className="text-[15px] font-bold text-[#1A1A1A] mb-2">{p.security4Title}</h3>
              <p className="text-[14px] font-medium text-[#666666] leading-relaxed">{p.security4Desc}</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-[0_1px_4px_rgba(0,0,0,0.06)] border border-[#E2EEF0]">
              <div className="w-10 h-10 rounded-xl bg-[#E0F5F7] flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0091A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="8" r="4"/>
                  <path d="M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
                  <polyline points="16 11 18 13 22 9"/>
                </svg>
              </div>
              <h3 className="text-[15px] font-bold text-[#1A1A1A] mb-2">{p.security5Title}</h3>
              <p className="text-[14px] font-medium text-[#666666] leading-relaxed">{p.security5Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-24 px-6 bg-[#1A1A1A] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[28px] sm:text-[40px] font-extrabold text-white mb-4">
            {p.ctaFinalTitle}
          </h2>
          <p className="text-[#A0AABB] text-[16px] font-medium mb-10 leading-relaxed">
            {p.ctaFinalDesc}
          </p>
          <div className="inline-flex flex-col sm:flex-row gap-3 bg-white/5 rounded-2xl p-4 mb-6">
            <DownloadButtons location="pvt_france_cta" />
          </div>
          <div className="mt-2 bg-white/5 rounded-2xl px-6 py-4 max-w-md mx-auto">
            <p className="text-[14px] font-semibold text-white mb-1">
              {p.ctaFinalExplorerTitle}
            </p>
            <p className="text-[13px] font-medium text-[#A0AABB]">
              {p.ctaFinalExplorerDesc}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
