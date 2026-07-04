import type { Metadata } from "next";
import Link from "next/link";
import DownloadButtons from "@/components/DownloadButtons";
import CheckboxIcon from "@/components/CheckboxIcon";

export const metadata: Metadata = {
  title: "Télécharger Veasy — Checklist visa vacances travail gratuite",
  description:
    "Télécharge Veasy gratuitement sur iOS et Android. Checklist PVT personnalisée, timing intelligent, aucun compte requis pour commencer.",
};

const features = [
  "Checklist personnalisée selon ton consulat",
  "Timing calculé pour chaque document",
  "Multilingue · iOS & Android",
];

export default function TelechargerPage() {
  return (
    <>
      <section className="flex-1 flex items-center justify-center px-6 py-24 bg-[#F0F7F7]">
        <div className="max-w-lg w-full flex flex-col items-center gap-10">

          {/* Titre */}
          <div className="text-center">
            <h1 className="text-[28px] sm:text-[40px] font-extrabold text-[#1A1A1A] leading-[1.15] tracking-tight">
              Télécharge Veasy — Ta checklist visa vacances travail gratuite
            </h1>
          </div>

          {/* Boutons stores officiels */}
          <DownloadButtons className="justify-center" />

          {/* QR Code */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-32 h-32 bg-white rounded-2xl border border-[#E2EEF0] shadow-[0_1px_4px_rgba(0,0,0,0.06)] flex items-center justify-center text-[#A0AABB] text-xs text-center p-2">
              QR Code
            </div>
            <p className="text-[13px] font-medium text-[#666666]">
              Sur ordinateur ? Scanne depuis ton téléphone.
            </p>
          </div>

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
              Pas encore convaincu ?{" "}
              <strong className="text-[#0091A5]">Lance le Mode Explorer dans l&apos;app</strong>{" "}
              — aucun compte requis pour découvrir ce que Veasy fait pour ton dossier.
            </p>
          </div>

          {/* Lien retour */}
          <Link
            href="/comment-ca-marche"
            className="text-[#0091A5] text-[14px] font-semibold hover:text-[#007A8C] transition-colors duration-200"
          >
            ← Voir comment ça marche
          </Link>
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
          <div className="inline-flex flex-col sm:flex-row gap-3 bg-white/5 rounded-2xl p-4">
            <DownloadButtons />
          </div>
        </div>
      </section>
    </>
  );
}
