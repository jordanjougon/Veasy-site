import Link from "next/link";

interface FooterProps {
  lang: string;
}

export default function Footer({ lang }: FooterProps) {
  const isFr = lang === "fr";
  const isEn = lang === "en";
  const prefix = isFr ? "/fr" : isEn ? "/en" : "";

  const labels = isFr
    ? { legalNotice: "Mentions légales", privacy: "Confidentialité" }
    : isEn
    ? { legalNotice: "Legal notice", privacy: "Privacy" }
    : { legalNotice: "Aviso legal", privacy: "Privacidade" };

  return (
    <footer className="bg-[#1A1A1A]">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <span className="text-xl font-extrabold text-white tracking-tight">Veasy</span>
        <div className="flex gap-6 text-[14px] text-[#A0AABB]">
          <Link href={`${prefix}/telecharger`} className="hover:text-white transition-colors duration-200">
            App Store
          </Link>
          <Link href={`${prefix}/telecharger`} className="hover:text-white transition-colors duration-200">
            Google Play
          </Link>
          <a href="#" className="hover:text-white transition-colors duration-200">
            {labels.legalNotice}
          </a>
          <a href="#" className="hover:text-white transition-colors duration-200">
            {labels.privacy}
          </a>
        </div>
        <span className="text-[13px] text-[#A0AABB]">
          © {new Date().getFullYear()} Veasy
        </span>
      </div>
    </footer>
  );
}
