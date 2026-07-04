"use client";

import Lottie from "lottie-react";
import animationData from "@/public/images/moving-folder.json";

export default function LottieHero() {
  return (
    <Lottie
      animationData={animationData}
      loop={true}
      className="w-full max-w-lg mx-auto"
    />
  );
}
