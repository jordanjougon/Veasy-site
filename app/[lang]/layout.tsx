import type { Metadata, Viewport } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import LangAttribute from "@/components/LangAttribute";
import { getDictionary, supportedLocales } from "@/lib/getDictionary";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

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
  const isFr = lang === "fr";
  const isEn = lang === "en";
  const canonicalUrl = isFr
    ? "https://veasy.pro/fr"
    : isEn
    ? "https://veasy.pro/en"
    : "https://veasy.pro/pt-BR";
  return {
    title: t.metadata.siteTitle,
    description: t.metadata.siteDescription,
    openGraph: {
      title: t.metadata.ogTitle,
      description: t.metadata.ogDescription,
      url: canonicalUrl,
      siteName: "Veasy",
      locale: isFr ? "fr_FR" : isEn ? "en_US" : "pt_BR",
      type: "website",
    },
    alternates: {
      languages: {
        "pt-BR": "https://veasy.pro/pt-BR",
        fr: "https://veasy.pro/fr",
        en: "https://veasy.pro/en",
      },
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <>
      <LangAttribute lang={lang} />
      <Nav lang={lang} />
      <main className="flex-1 pt-16">{children}</main>
      <Footer lang={lang} />
    </>
  );
}
