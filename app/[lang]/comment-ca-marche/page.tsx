import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CheckboxIcon from "@/components/CheckboxIcon";
import TrackedLink from "@/components/TrackedLink";
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
    title: t.metadata.commentCaMarche.title,
    description: t.metadata.commentCaMarche.description,
    alternates: {
      canonical: `${base}/${lang}/comment-ca-marche`,
      languages: {
        "fr": `${base}/fr/comment-ca-marche`,
        "en": `${base}/en/comment-ca-marche`,
        "pt-BR": `${base}/pt-BR/comment-ca-marche`,
      },
    },
  };
}

export default async function CommentCaMarchePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const t = await getDictionary(lang);
  const c = t.commentCaMarche;
  const isEn = lang === "en";
  const isFr = lang === "fr";
  const prefix = isFr ? "/fr" : isEn ? "/en" : "/pt-BR";

  const steps = [
    {
      num: c.step1Num,
      title: c.step1Title,
      desc: c.step1Desc,
      detail: c.step1Detail,
      points: c.step1Points,
      img: c.step1Img,
      alt: c.step1Alt,
    },
    {
      num: c.step2Num,
      title: c.step2Title,
      desc: c.step2Desc,
      detail: c.step2Detail,
      points: c.step2Points,
      img: c.step2Img,
      alt: c.step2Alt,
    },
    {
      num: c.step3Num,
      title: c.step3Title,
      desc: c.step3Desc,
      detail: c.step3Detail,
      points: c.step3Points,
      img: c.step3Img,
      alt: c.step3Alt,
    },
  ];

  const faq = [
    { q: c.faq1Q, a: c.faq1A },
    { q: c.faq2Q, a: c.faq2A },
    { q: c.faq3Q, a: c.faq3A },
    { q: c.faq4Q, a: c.faq4A },
  ];

  return (
    <>
      {/* ── INTRO ── */}
      <section className="bg-[#F0F7F7] px-6 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-[#C3E6EA] text-[#0091A5] text-[13px] font-semibold px-3 py-1 rounded-full mb-5 tracking-wide">
            {c.badge}
          </span>
          <h1 className="text-[32px] sm:text-[48px] font-extrabold text-[#1A1A1A] leading-[1.15] tracking-tight">
            {c.h1}
          </h1>
          <p className="mt-6 text-[18px] font-medium text-[#666666] leading-relaxed">
            {c.subtitle}
          </p>
        </div>
      </section>

      {/* ── 3 SECTIONS ALTERNÉES ── */}
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

      {/* ── FAQ ── */}
      <section className="py-20 px-6 bg-[#F0F7F7]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[26px] sm:text-[36px] font-extrabold text-[#1A1A1A] text-center mb-10">
            {c.faqTitle}
          </h2>
          <div className="flex flex-col gap-3">
            {faq.map((item) => (
              <details key={item.q} className="group bg-white rounded-2xl border border-[#E2EEF0]">
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

      {/* ── CTA ── */}
      <section className="py-24 px-6 bg-[#1A1A1A] text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-[28px] sm:text-[40px] font-extrabold text-white mb-3">
            {c.ctaTitle}
          </h2>
          <p className="text-[#A0AABB] mb-8 text-[16px] font-medium">
            {c.ctaSubtitle}
          </p>
          <TrackedLink
            href={`${prefix}/telecharger`}
            event="download_cta_click"
            eventData={{ location: "comment_ca_marche_cta" }}
            className="inline-flex items-center justify-center bg-[#0091A5] text-white text-[15px] font-bold px-8 py-4 rounded-full hover:bg-[#007A8C] hover:shadow-[0_4px_8px_rgba(0,145,165,0.30)] transition-all duration-200"
          >
            {c.ctaButton}
          </TrackedLink>
        </div>
      </section>
    </>
  );
}
