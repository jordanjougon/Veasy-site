import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Veasy — Prépare ton visa vacances travail sans te perdre",
  description:
    "Veasy organise ton dossier visa vacances travail : checklist personnalisée, timing calculé, validation document par document. Télécharge gratuitement.",
  openGraph: {
    title: "Veasy — Prépare ton visa vacances travail sans te perdre",
    description:
      "Checklist personnalisée, timing intelligent, validation de conformité. Ton dossier visa, organisé.",
    url: "https://veasy.app",
    siteName: "Veasy",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={manrope.variable}>
      <body className="min-h-screen flex flex-col bg-white text-[#1A1A1A] font-sans antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
