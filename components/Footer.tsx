import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A]">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <span className="text-xl font-extrabold text-white tracking-tight">Veasy</span>
        <div className="flex gap-6 text-[14px] text-[#A0AABB]">
          <Link href="/telecharger" className="hover:text-white transition-colors duration-200">
            App Store
          </Link>
          <Link href="/telecharger" className="hover:text-white transition-colors duration-200">
            Google Play
          </Link>
          <a href="#" className="hover:text-white transition-colors duration-200">
            Mentions légales
          </a>
          <a href="#" className="hover:text-white transition-colors duration-200">
            Confidentialité
          </a>
        </div>
        <span className="text-[13px] text-[#A0AABB]">
          © {new Date().getFullYear()} Veasy
        </span>
      </div>
    </footer>
  );
}
