import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import DownloadButtons from "@/components/DownloadButtons";
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
  return {
    title: t.metadata.home.title,
    description: t.metadata.home.description,
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
  const prefix = isFr ? "/fr" : isEn ? "/en" : "";

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
              <Link
                href={`${prefix}/telecharger`}
                className="inline-flex items-center justify-center whitespace-nowrap bg-[#0091A5] text-white text-[15px] font-bold px-6 py-3.5 rounded-full hover:bg-[#007A8C] hover:shadow-[0_4px_8px_rgba(0,145,165,0.30)] transition-all duration-200"
              >
                {h.ctaDownload}
              </Link>
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
          <Link
            href={`${prefix}/telecharger`}
            className="inline-flex items-center bg-[#0091A5] text-white text-[15px] font-bold px-8 py-4 rounded-full hover:bg-[#007A8C] hover:shadow-[0_4px_8px_rgba(0,145,165,0.30)] transition-all duration-200"
          >
            {h.explorerCta}
          </Link>
          <p className="mt-4 text-[13px] font-medium text-[#666666]">
            {h.explorerNote}
          </p>
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
            <DownloadButtons />
          </div>
        </div>
      </section>
    </>
  );
}
