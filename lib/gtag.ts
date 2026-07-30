declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const GOOGLE_ADS_CONVERSION_LABEL_INSCRIPTION =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL_INSCRIPTION;

export function reportInscriptionConversion() {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  if (!GOOGLE_ADS_ID || !GOOGLE_ADS_CONVERSION_LABEL_INSCRIPTION) return;

  window.gtag("event", "conversion", {
    send_to: `${GOOGLE_ADS_ID}/${GOOGLE_ADS_CONVERSION_LABEL_INSCRIPTION}`,
  });
}
