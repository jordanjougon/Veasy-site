import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CheckboxIcon from "@/components/CheckboxIcon";

export const metadata: Metadata = {
  title: "Comment préparer son dossier visa vacances travail — Veasy",
  description:
    "Comment organiser son dossier visa vacances travail (PVT) étape par étape : checklist personnalisée, suivi des documents, planning intelligent. Veasy guide chaque démarche.",
};

const steps = [
  {
    num: "01",
    title: "Ta checklist visa, configurée en une minute",
    desc: "Tu indiques ta nationalité et ta date de départ. Veasy charge immédiatement la liste exacte des documents requis par le consulat français pour ton profil.",
    detail:
      "Pas de liste générique copiée d'un forum. Veasy s'appuie sur les exigences officielles et les met à jour régulièrement. Tu sais exactement ce qu'on attend de toi — ni plus, ni moins.",
    points: [
      "Exigences officielles du consulat à jour",
      "Documents adaptés à ta nationalité",
      "Checklist prête en moins d'une minute",
    ],
    img: "/images/screen-boarding-pass.png",
    alt: "Veasy — configuration du profil PVT France",
  },
  {
    num: "02",
    title: "Suis chaque document de ton dossier PVT",
    desc: "Chaque pièce de ton dossier a son propre statut : à faire, en cours, validé. La barre de progression globale te montre en un coup d'œil où tu en es.",
    detail:
      "Pour chaque document, Veasy t'explique ce que c'est, pourquoi le consulat le demande, et comment l'obtenir. Tu uploads, tu valides les critères de conformité (date, format, signature), tu passes au suivant.",
    points: [
      "Statut par document : à faire, en cours, validé",
      "Guide d'obtention pour chaque pièce",
      "Validation de conformité intégrée",
    ],
    img: "/images/screen-home-progression.png",
    alt: "Veasy — suivi de progression dossier visa vacances travail",
  },
  {
    num: "03",
    title: "Le bon document visa vacances travail au bon moment",
    desc: "Certains documents expirent au bout de 3 mois. D'autres prennent du temps à obtenir. Veasy calcule automatiquement quand préparer chaque pièce selon ta date de départ.",
    detail:
      "Tu indiques la date de ton rendez-vous consulaire (ou ta date de départ si tu n'as pas encore de RDV). Veasy génère un planning clair, organisé par période. Zéro document expiré le jour du RDV.",
    points: [
      "Planning calculé selon ton RDV consulaire",
      "Alertes sur les délais de validité",
      "Zéro document expiré avant le jour J",
    ],
    img: "/images/screen-planning-timeline.png",
    alt: "Veasy — planning documents visa vacances travail",
  },
];

const faq = [
  {
    q: "Veasy est-il officiel ?",
    a: "Veasy n'est pas affilié à un gouvernement. Nous agrégeons les exigences officielles publiées par le consulat français et les mettons à jour régulièrement. Tu restes toujours maître de ta démarche.",
  },
  {
    q: "Est-ce que mes documents sont sécurisés ?",
    a: "Tes fichiers sont stockés sur Supabase (infrastructure AWS), chiffrés, et accessibles uniquement avec ton compte.",
  },
  {
    q: "L'app est-elle gratuite ?",
    a: "Oui, l'ensemble des fonctionnalités est gratuit pour démarrer et gérer ton dossier.",
  },
  {
    q: "Puis-je utiliser Veasy sans créer de compte ?",
    a: "Oui. Le Mode Explorer te permet de voir ta checklist complète et de naviguer dans les documents sans email ni mot de passe. Tu crées un compte uniquement quand tu veux sauvegarder ta progression.",
  },
];

export default function CommentCaMarchePage() {
  return (
    <>
      {/* ── INTRO ── */}
      <section className="bg-[#F0F7F7] px-6 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-[#C3E6EA] text-[#0091A5] text-[13px] font-semibold px-3 py-1 rounded-full mb-5 tracking-wide">
            Organiser son dossier visa
          </span>
          <h1 className="text-[32px] sm:text-[48px] font-extrabold text-[#1A1A1A] leading-[1.15] tracking-tight">
            Comment organiser son dossier visa vacances travail (PVT), étape par étape.
          </h1>
          <p className="mt-6 text-[18px] font-medium text-[#666666] leading-relaxed">
            Veasy ne se contente pas de te donner une liste. Il organise ton dossier, calcule tes délais et te guide à chaque étape.
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

      {/* ── FAQ ── */}
      <section className="py-20 px-6 bg-[#F0F7F7]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[26px] sm:text-[36px] font-extrabold text-[#1A1A1A] text-center mb-10">
            Questions fréquentes
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
            Prêt à démarrer ton dossier ?
          </h2>
          <p className="text-[#A0AABB] mb-8 text-[16px] font-medium">
            Gratuit · Multilingue · iOS & Android
          </p>
          <Link
            href="/telecharger"
            className="inline-flex items-center justify-center bg-[#0091A5] text-white text-[15px] font-bold px-8 py-4 rounded-full hover:bg-[#007A8C] hover:shadow-[0_4px_8px_rgba(0,145,165,0.30)] transition-all duration-200"
          >
            Télécharger Veasy — Gratuit
          </Link>
        </div>
      </section>
    </>
  );
}
