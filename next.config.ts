import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.15"],
  async rewrites() {
    return [
      { source: "/", destination: "/pt-BR" },
      { source: "/pvt-france", destination: "/pt-BR/pvt-france" },
      { source: "/comment-ca-marche", destination: "/pt-BR/comment-ca-marche" },
      { source: "/telecharger", destination: "/pt-BR/telecharger" },
    ];
  },
};

export default nextConfig;
