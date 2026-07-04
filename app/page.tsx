import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import DownloadButtons from "@/components/DownloadButtons";
import LottieHero from "@/components/LottieHero";
import CheckboxIcon from "@/components/CheckboxIcon";

export const metadata: Metadata = {
  title: "Veasy — Prépare ton visa vacances travail simplement",
  description:
    "Veasy organise ton dossier visa vacances travail (PVT) : checklist personnalisée, timing des documents, validation étape par étape. Disponible gratuitement sur iOS & Android.",
};


const steps = [
  {
    num: "01",
    title: "Ta checklist visa vacances travail, prête en une minute",
    desc: "Veasy crée un profil sur-mesure pour ta route — avec toutes les exigences de ton consulat, rien de plus.",
    detail: "Indique ta nationalité et ta date de départ. Veasy charge immédiatement la liste exacte des documents requis par le consulat français pour ton profil. Pas de documents inutiles, pas d'oublis.",
    points: ["Exigences officielles à jour", "Documents adaptés à ta nationalité", "Checklist prête en moins d'une minute"],
    img: "/images/screen-boarding-pass.png",
    alt: "Veasy — profil PVT France Brésil",
  },
  {
    num: "02",
    title: "Tu sais exactement où tu en es",
    desc: "Chaque document avance. La barre de progression te montre en un coup d'œil ce qui est fait, ce qui reste.",
    detail: "Fini les listes de choses à faire éparpillées entre des onglets, des groupes WhatsApp et des PDF. Veasy centralise tout. Tu coches, tu uploads, tu valides — et tu vois ton dossier avancer en temps réel.",
    points: ["Statut par document : à faire, en cours, validé", "Upload et validation intégrés", "Progression globale du dossier visible en un coup d'œil"],
    img: "/images/screen-home-progression.png",
    alt: "Veasy — suivi de progression dossier visa",
  },
  {
    num: "03",
    title: "Timing des documents : zéro erreur, zéro expiration",
    desc: "Certains documents du visa vacances travail expirent après 3 mois. Veasy calcule le bon moment pour préparer chaque pièce.",
    detail: "Certains documents expirent au bout de 3 mois. D'autres prennent du temps à obtenir. Veasy calcule automatiquement le bon moment pour préparer chaque pièce, selon ta date de départ et ton rendez-vous consulaire.",
    points: ["Planning calculé selon ton RDV", "Alertes sur les délais de validité", "Zéro document expiré avant le jour J"],
    img: "/images/screen-planning-timeline.png",
    alt: "Veasy — planning documents visa vacances travail",
  },
];


export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-[#F0F7F7] px-6 py-16 md:py-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Texte */}
          <div className="text-center md:text-left">
            <span className="inline-block bg-[#C3E6EA] text-[#0091A5] text-[13px] font-semibold px-3 py-1 rounded-full mb-5 tracking-wide">
              Visa Vacances Travail · PVT France
            </span>
            <h1 className="text-[34px] sm:text-[48px] font-extrabold text-[#1A1A1A] leading-[1.12] tracking-tight">
              Prépare ton visa vacances travail{" "}
              <span className="text-[#0091A5]">sans stress.</span>
            </h1>
            <p className="mt-5 text-[17px] font-medium text-[#666666] leading-relaxed">
              Veasy organise ton dossier visa vacances travail : checklist personnalisée, timing calculé, zéro document expiré.
            </p>
            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Link
                href="/telecharger"
                className="inline-flex items-center justify-center whitespace-nowrap bg-[#0091A5] text-white text-[15px] font-bold px-6 py-3.5 rounded-full hover:bg-[#007A8C] hover:shadow-[0_4px_8px_rgba(0,145,165,0.30)] transition-all duration-200"
              >
                Télécharger gratuitement
              </Link>
              <Link
                href="/comment-ca-marche"
                className="inline-flex items-center justify-center whitespace-nowrap border-[1.5px] border-[#0091A5] text-[#0091A5] text-[15px] font-bold px-6 py-3.5 rounded-full hover:bg-[rgba(0,145,165,0.06)] transition-all duration-200"
              >
                Comment ça marche
              </Link>
            </div>
            {/* Réassurance */}
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 justify-center md:justify-start">
              {["Gratuit", "iOS & Android", "Sans compte pour commencer"].map((item) => (
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
                  {step.points.map((point) => (
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
            Zéro friction
          </span>
          <h2 className="text-[26px] sm:text-[36px] font-extrabold text-[#1A1A1A] mb-4">
            Explore ton dossier avant même de créer un compte.
          </h2>
          <p className="text-[17px] font-medium text-[#666666] leading-relaxed mb-8">
            Le Mode Explorer te permet de voir ta checklist complète, de naviguer dans les documents et de tester le planning — sans email, sans mot de passe.
          </p>
          <Link
            href="/telecharger"
            className="inline-flex items-center bg-[#0091A5] text-white text-[15px] font-bold px-8 py-4 rounded-full hover:bg-[#007A8C] hover:shadow-[0_4px_8px_rgba(0,145,165,0.30)] transition-all duration-200"
          >
            Lancer le Mode Explorer
          </Link>
          <p className="mt-4 text-[13px] font-medium text-[#666666]">
            Aucun compte requis · Disponible sur iOS & Android
          </p>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-24 px-6 bg-[#1A1A1A] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[28px] sm:text-[40px] font-extrabold text-white mb-3">
            Ton dossier PVT, prêt pour le jour du RDV.
          </h2>
          <p className="text-[#A0AABB] mb-10 text-[16px] font-medium">
            Gratuit · Multilingue · iOS & Android
          </p>
          {/* Badges sur fond légèrement contrasté pour la visibilité */}
          <div className="inline-flex flex-col sm:flex-row gap-3 bg-white/5 rounded-2xl p-4">
            <DownloadButtons />
          </div>
        </div>
      </section>
    </>
  );
}
