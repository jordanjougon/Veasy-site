import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import DownloadButtons from "@/components/DownloadButtons";
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
    title: t.metadata.telecharger.title,
    description: t.metadata.telecharger.description,
    alternates: {
      canonical: `${base}/${lang}/telecharger`,
      languages: {
        "fr": `${base}/fr/telecharger`,
        "en": `${base}/en/telecharger`,
        "pt-BR": `${base}/pt-BR/telecharger`,
      },
    },
  };
}

export default async function TelechargerPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const t = await getDictionary(lang);
  const d = t.telecharger;
  const isEn = lang === "en";
  const isFr = lang === "fr";
  const prefix = isFr ? "/fr" : isEn ? "/en" : "/pt-BR";

  const features = [d.feature1, d.feature2, d.feature3];

  return (
    <>
      <section className="flex-1 flex items-center justify-center px-6 py-24 bg-[#F0F7F7]">
        <div className="max-w-lg w-full flex flex-col items-center gap-10">

          {/* Titre */}
          <div className="text-center flex flex-col items-center gap-5">
            <Image
              src="/images/app-icon.png"
              alt="Veasy"
              width={80}
              height={80}
              className="rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.1)]"
            />
            <h1 className="text-[28px] sm:text-[40px] font-extrabold text-[#1A1A1A] leading-[1.15] tracking-tight">
              {d.h1}
            </h1>
          </div>

          {/* Boutons stores officiels */}
          <DownloadButtons className="justify-center" location="telecharger_hero" />

          {/* Récap valeur */}
          <div className="w-full bg-white rounded-2xl border border-[#E2EEF0] shadow-[0_1px_4px_rgba(0,0,0,0.06)] py-6 px-8 flex flex-col gap-4">
            {features.map((label) => (
              <div key={label} className="flex items-center gap-3">
                <CheckboxIcon className="w-5 h-5 flex-shrink-0 text-[#0091A5]" />
                <span className="text-[14px] font-semibold text-[#1A1A1A]">{label}</span>
              </div>
            ))}
          </div>

          {/* Rappel mode Explorer */}
          <div className="w-full bg-[#E0F5F7] rounded-2xl border border-[#C3E6EA] p-6 text-center">
            <p className="text-[14px] font-medium text-[#1A1A1A] leading-relaxed">
              {d.explorerNote.split(d.explorerHighlight)[0]}
              <strong className="text-[#0091A5]">{d.explorerHighlight}</strong>
              {d.explorerNote.split(d.explorerHighlight)[1]}
            </p>
          </div>

          {/* Lien retour */}
          <Link
            href={`${prefix}/comment-ca-marche`}
            className="text-[#0091A5] text-[14px] font-semibold hover:text-[#007A8C] transition-colors duration-200"
          >
            {d.backLink}
          </Link>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-24 px-6 bg-[#1A1A1A] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[28px] sm:text-[40px] font-extrabold text-white mb-3">
            {d.ctaFinalTitle}
          </h2>
          <p className="text-[#A0AABB] mb-10 text-[16px] font-medium">
            {d.ctaFinalSubtitle}
          </p>
          <div className="inline-flex flex-col sm:flex-row gap-3 bg-white/5 rounded-2xl p-4">
            <DownloadButtons location="telecharger_cta_final" />
          </div>
        </div>
      </section>
    </>
  );
}
