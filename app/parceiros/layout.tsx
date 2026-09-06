import type { Metadata } from "next";

// Page interne : jamais indexée, jamais suivie.
export const metadata: Metadata = {
  title: "Premium partenaire",
  robots: { index: false, follow: false, nocache: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
