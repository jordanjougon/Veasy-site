import type { Viewport } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";
import { Providers } from "./providers";
import { GOOGLE_ADS_ID } from "@/lib/gtag";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className={manrope.variable} suppressHydrationWarning>
      <body
        className="min-h-screen flex flex-col bg-white text-[#1A1A1A] font-sans antialiased"
        suppressHydrationWarning
      >
        <Providers>{children}</Providers>
        {GOOGLE_ADS_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-ads-gtag" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GOOGLE_ADS_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
