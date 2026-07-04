import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CheckboxIcon from "@/components/CheckboxIcon";
import WarningIcon from "@/components/WarningIcon";
import DownloadButtons from "@/components/DownloadButtons";

export const metadata: Metadata = {
  title: "PVT France (Visa Vacances-Travail) : préparer son dossier — Veasy",
  description:
    "Prépare ton dossier PVT France sans erreur : checklist personnalisée, documents requis, timing intelligent. Veasy organise ton visa vacances travail étape par étape.",
};

const etapes = [
  {
    num: "01",
    title: "Vérifier son éligibilité",
    desc: "Confirme que ta nationalité et ton âge correspondent aux critères du Programme Vacances-Travail avec la France.",
  },
  {
    num: "02",
    title: "Rassembler les documents",
    desc: "Identifie les pièces requises par le consulat français selon ton profil. La liste varie selon ta nationalité.",
  },
  {
    num: "03",
    title: "Préparer son dossier",
    desc: "Obtiens, valide et organise chaque document en respectant les critères de conformité (format, date, signature).",
  },
  {
    num: "04",
    title: "Prendre rendez-vous",
    desc: "Réserve ton créneau au consulat français via France-Visas. Les places s'ouvrent 2 à 3 mois à l'avance.",
  },
  {
    num: "05",
    title: "Déposer sa demande",
    desc: "Présente ton dossier complet le jour du RDV. Chaque document doit être dans le bon format et toujours valide.",
  },
  {
    num: "06",
    title: "Préparer son départ",
    desc: "Une fois le visa obtenu, organise ton arrivée en France : logement, transport, formalités d'installation.",
  },
];


const erreurs = [
  {
    title: "Préparer des documents trop tôt",
    desc: "Le relevé bancaire et le certificat médical expirent après 3 mois. Si ton RDV est dans 4 mois, tu devras tout refaire.",
  },
  {
    title: "Oublier des pièces au dernier moment",
    desc: "Sans checklist structurée, il est facile de passer à côté d'un document — et de le découvrir la veille du RDV.",
  },
  {
    title: "Ne pas savoir dans quel ordre avancer",
    desc: "Certains documents dépendent d'autres. Commencer dans le mauvais ordre crée des blocages inutiles.",
  },
  {
    title: "Déposer un dossier non conforme",
    desc: "Un document au mauvais format, sans signature, ou avec une date incorrecte peut entraîner un refus immédiat.",
  },
  {
    title: "Recommencer des démarches à cause d'une expiration",
    desc: "Sans suivi des délais, on se retrouve à refaire des certificats ou des relevés qui ont expiré entre-temps.",
  },
];

const features = [
  {
    img: "/images/screen-boarding-pass.png",
    alt: "Veasy — checklist personnalisée PVT France",
    points: [
      { title: "Checklist personnalisée", desc: "Les exigences officielles du consulat, adaptées à ta nationalité. Rien de plus, rien de moins." },
      { title: "Explications document par document", desc: "Pour chaque pièce : ce que c'est, pourquoi le consulat le demande, comment l'obtenir." },
    ],
  },
  {
    img: "/images/screen-home-progression.png",
    alt: "Veasy — suivi de progression dossier visa",
    points: [
      { title: "Suivi de progression", desc: "Statut par document : à faire, en cours, validé. Tu vois ton dossier avancer en temps réel." },
      { title: "Mode Explorer", desc: "Explore ta checklist complète sans créer de compte. Tu t'engages quand tu es prêt." },
    ],
  },
  {
    img: "/images/screen-planning-timeline.png",
    alt: "Veasy — planning documents visa vacances travail",
    points: [
      { title: "Planning intelligent", desc: "Veasy calcule quand préparer chaque document selon ta date de départ et ton RDV consulaire." },
      { title: "Alertes sur les délais", desc: "Tu sais exactement quand demander chaque pièce. Zéro document expiré le jour J." },
    ],
  },
];

const comparatif = [
  { feature: "Liste des documents", siteInfo: true, veasy: true },
  { feature: "Ordre des démarches", siteInfo: false, veasy: true },
  { feature: "Planning personnalisé", siteInfo: false, veasy: true },
  { feature: "Suivi de progression", siteInfo: false, veasy: true },
  { feature: "Timing des documents", siteInfo: false, veasy: true },
  { feature: "Vue d'ensemble du dossier", siteInfo: false, veasy: true },
];

const faqs = [
  {
    q: "Qu'est-ce que le PVT France ?",
    a: "Le Programme Vacances-Travail (PVT) est un accord bilatéral entre la France et plusieurs pays (Brésil, Argentine, Canada, Australie, Mexique...). Il permet aux ressortissants éligibles de séjourner en France jusqu'à 1 an avec le droit de travailler, sans avoir à justifier d'un contrat de travail au préalable.",
  },
  {
    q: "Quels documents faut-il préparer pour le PVT France ?",
    a: "Le dossier comprend généralement : formulaire de demande, relevé bancaire, certificat médical, casier judiciaire, passeport, photos d'identité, assurance voyage, justificatif de domicile, reçu des frais de visa, lettre de motivation, billet d'avion, CV et diplômes. La liste exacte varie selon ta nationalité — Veasy te la génère automatiquement.",
  },
  {
    q: "Combien de temps faut-il pour préparer son dossier ?",
    a: "Entre 4 et 8 semaines selon ta situation. Certains documents (casier judiciaire, assurance) peuvent prendre du temps à obtenir. D'autres expirent vite, comme le relevé bancaire (3 mois). Veasy te génère un planning personnalisé selon ta date de départ.",
  },
  {
    q: "Quand faut-il commencer les démarches ?",
    a: "Au moins 3 mois avant ton départ prévu. Certains documents longs à obtenir (casier judiciaire, médecin agréé) doivent être anticipés. D'autres au contraire ne doivent pas être préparés trop tôt pour ne pas expirer.",
  },
  {
    q: "Comment éviter qu'un document expire avant le RDV ?",
    a: "C'est justement le problème que Veasy résout. L'app calcule automatiquement la fenêtre idéale pour préparer chaque document selon ta date de RDV consulaire, en tenant compte de leurs délais de validité respectifs.",
  },
  {
    q: "Les exigences sont-elles les mêmes pour tous les pays ?",
    a: "Non. La liste des documents, les montants exigés et certaines conditions varient selon ta nationalité et le consulat compétent. Veasy adapte automatiquement ta checklist à ton profil.",
  },
  {
    q: "Veasy est-il un service officiel ?",
    a: "Non, Veasy n'est pas affilié à un gouvernement. L'app agrège les exigences officielles publiées par le consulat français et les met à jour régulièrement. Tu restes toujours maître de ta démarche.",
  },
  {
    q: "Peut-on utiliser Veasy sans créer de compte ?",
    a: "Oui. Le Mode Explorer te permet de voir ta checklist complète et de naviguer dans les documents sans email ni mot de passe. Tu crées un compte uniquement quand tu veux sauvegarder ta progression.",
  },
  {
    q: "Que se passe-t-il si un document expire avant mon RDV ?",
    a: "Un document expiré peut entraîner le refus immédiat de ton dossier au consulat. C'est l'une des erreurs les plus fréquentes : le relevé bancaire et le certificat médical ont une validité de 3 mois seulement. Veasy calcule automatiquement la fenêtre idéale pour préparer chaque document selon ta date de RDV — tu ne présentes jamais un document expiré.",
  },
  {
    q: "Peut-on se faire refuser à cause d'un mauvais document ?",
    a: "Oui. Un mauvais format, une signature manquante, une photo non conforme ou un document délivré par un organisme non agréé suffisent pour un refus. Le consulat ne donne généralement pas de seconde chance sur place. Veasy t'accompagne dans la validation de chaque document avant le dépôt.",
  },
];

export default function PvtFrancePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-[#F0F7F7] px-6 py-16 md:py-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-[#C3E6EA] text-[#0091A5] text-[13px] font-semibold px-3 py-1 rounded-full mb-5 tracking-wide">
              Guide PVT France
            </span>
            <h1 className="text-[32px] sm:text-[44px] font-extrabold text-[#1A1A1A] leading-[1.15] tracking-tight">
              Préparer son dossier PVT France (visa vacances travail) sans erreur.
            </h1>
            <p className="mt-5 text-[17px] font-medium text-[#666666] leading-relaxed">
              Le PVT France demande de gérer une dizaine de documents administratifs avec des
              délais de validité différents. Sans organisation, il est facile de se perdre —
              ou de devoir tout recommencer.
            </p>
            <div className="mt-8">
              <Link
                href="/telecharger"
                className="inline-flex items-center justify-center bg-[#0091A5] text-white text-[15px] font-bold px-7 py-3.5 rounded-full hover:bg-[#007A8C] hover:shadow-[0_4px_8px_rgba(0,145,165,0.30)] transition-all duration-200"
              >
                Télécharger Veasy gratuitement
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/screen-home-progression.png"
              alt="Veasy — application PVT France"
              width={280}
              height={560}
              className="rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* ── COMPRENDRE LE PVT FRANCE ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[26px] sm:text-[36px] font-extrabold text-[#1A1A1A] mb-8">
            Qu&apos;est-ce que le PVT France ?
          </h2>
          <div className="flex flex-col gap-6 text-[16px] font-medium text-[#444444] leading-relaxed">
            <p>
              Le <strong>Programme Vacances-Travail (PVT)</strong> est un accord bilatéral entre
              la France et plusieurs pays dont le Brésil, l&apos;Argentine, le Canada,
              l&apos;Australie et le Mexique. Il permet aux ressortissants éligibles de séjourner
              en France <strong>jusqu&apos;à 1 an</strong> avec le droit de travailler, sans
              avoir à justifier d&apos;un contrat au préalable.
            </p>
            <p>
              L&apos;objectif du PVT est de faciliter les échanges culturels entre jeunes adultes
              (généralement entre 18 et 30 ou 35 ans selon les pays). C&apos;est un visa unique
              qui combine tourisme, immersion culturelle et possibilité de travailler pour
              financer son séjour.
            </p>
            <p>
              La difficulté ne réside pas dans la compréhension du visa lui-même, mais dans la{" "}
              <strong>préparation du dossier</strong> : plusieurs documents à réunir, des délais
              de validité à respecter, un rendez-vous consulaire à anticiper. C&apos;est
              exactement ce que Veasy organise pour toi.
            </p>
          </div>
        </div>
      </section>

      {/* ── LES GRANDES ÉTAPES ── */}
      <section className="py-20 px-6 bg-[#F4F4F4]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[26px] sm:text-[36px] font-extrabold text-[#1A1A1A] text-center mb-12">
            Les grandes étapes de la préparation
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {etapes.map((step) => (
              <div key={step.num} className="bg-white rounded-2xl border border-[#E2EEF0] p-6 shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
                <span className="text-[36px] font-extrabold text-[#0091A5] opacity-20 leading-none select-none block mb-3">
                  {step.num}
                </span>
                <h3 className="text-[16px] font-bold text-[#1A1A1A] mb-2">{step.title}</h3>
                <p className="text-[14px] font-medium text-[#666666] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LES DOCUMENTS ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[26px] sm:text-[36px] font-extrabold text-[#1A1A1A] mb-4">
            Les documents du dossier PVT France varient selon ton profil
          </h2>
          <p className="text-[16px] font-medium text-[#666666] leading-relaxed mb-8">
            Un dossier PVT France regroupe plusieurs catégories de documents : pièces
            d&apos;identité, justificatifs financiers, documents médicaux, assurance,
            et justificatifs du projet. Mais la liste exacte ne s&apos;applique pas à
            tout le monde de la même façon.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              {
                label: "Ta nationalité",
                desc: "Chaque pays a un accord spécifique avec la France qui définit ses propres exigences.",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253M3 12c0 .778.099 1.533.284 2.253" />
                  </svg>
                ),
              },
              {
                label: "Ton consulat",
                desc: "Les conditions de dépôt et les documents acceptés varient d'un consulat à l'autre.",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                  </svg>
                ),
              },
              {
                label: "Ton timing",
                desc: "Certains documents expirent après 3 mois. Préparer trop tôt, c'est devoir tout recommencer.",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
            ].map((item) => (
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
            Veasy génère automatiquement ta checklist selon ton profil, t&apos;explique
            chaque document et calcule le bon moment pour le préparer.
          </p>
          <div className="flex justify-center">
            <Link
              href="/telecharger"
              className="inline-flex items-center justify-center bg-[#0091A5] text-white text-[15px] font-bold px-7 py-3.5 rounded-full hover:bg-[#007A8C] hover:shadow-[0_4px_8px_rgba(0,145,165,0.30)] transition-all duration-200"
            >
              Obtenir ma checklist personnalisée
            </Link>
          </div>
        </div>
      </section>

      {/* ── LES ERREURS FRÉQUENTES ── */}
      <section className="py-20 px-6 bg-[#F4F4F4]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[26px] sm:text-[36px] font-extrabold text-[#1A1A1A] mb-4">
            Les erreurs qui font rater un dossier PVT France
          </h2>
          <p className="text-[16px] font-medium text-[#666666] leading-relaxed mb-8">
            La plupart des problèmes ne viennent pas d&apos;un manque d&apos;information, mais
            d&apos;un manque d&apos;organisation.
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

      {/* ── COMMENT VEASY SIMPLIFIE ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#C3E6EA] text-[#0091A5] text-[13px] font-semibold px-3 py-1 rounded-full mb-5">
              Veasy
            </span>
            <h2 className="text-[26px] sm:text-[36px] font-extrabold text-[#1A1A1A] mb-4">
              Comment Veasy simplifie la préparation
            </h2>
            <p className="text-[16px] font-medium text-[#666666] max-w-xl mx-auto leading-relaxed">
              Veasy ne remplace pas les informations officielles. Il t&apos;aide à les organiser.
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
                  className="rounded-2xl"
                />
                <div className="w-full flex flex-col gap-4">
                  {f.points.map((p) => (
                    <div key={p.title}>
                      <div className="flex items-center gap-2 mb-1">
                        <CheckboxIcon className="w-5 h-5 flex-shrink-0 text-[#0091A5]" />
                        <span className="text-[15px] font-bold text-[#1A1A1A]">{p.title}</span>
                      </div>
                      <p className="text-[13px] font-medium text-[#666666] leading-relaxed pl-7">{p.desc}</p>
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
            Pourquoi Veasy plutôt qu&apos;une simple liste ?
          </h2>
          <p className="text-[16px] font-medium text-[#666666] text-center leading-relaxed mb-10">
            Les sites d&apos;information te donnent la liste. Veasy t&apos;aide à l&apos;exécuter.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-[#E2EEF0] bg-white shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
            <table className="w-full text-[14px]">
              <thead>
                <tr className="border-b border-[#E2EEF0]">
                  <th className="text-left py-4 px-6 font-semibold text-[#666666] w-1/2">
                    Fonctionnalité
                  </th>
                  <th className="py-4 px-4 font-semibold text-[#A0AABB] text-center">
                    Sites d&apos;info
                  </th>
                  <th className="py-4 px-4 font-bold text-[#0091A5] text-center">Veasy</th>
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
            Questions fréquentes sur le PVT France
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

      {/* ── CTA FINAL ── */}
      <section className="py-24 px-6 bg-[#1A1A1A] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[28px] sm:text-[40px] font-extrabold text-white mb-4">
            Tu connais les étapes. Maintenant organise ton dossier.
          </h2>
          <p className="text-[#A0AABB] text-[16px] font-medium mb-10 leading-relaxed">
            Laisse Veasy t&apos;aider à organiser ton dossier, suivre tes documents et savoir
            exactement quand effectuer chaque démarche.
          </p>
          <div className="inline-flex flex-col sm:flex-row gap-3 bg-white/5 rounded-2xl p-4 mb-6">
            <DownloadButtons />
          </div>
          <p className="text-[13px] font-medium text-[#A0AABB]">
            Mode Explorer disponible sans création de compte
          </p>
        </div>
      </section>
    </>
  );
}
