"use client";

import dynamic from "next/dynamic";

const LottieHero = dynamic(() => import("@/components/LottieHero"), {
  ssr: false,
  loading: () => <div className="w-full max-w-lg mx-auto aspect-square" />,
});

export default function LottieWrapper() {
  return <LottieHero />;
}
