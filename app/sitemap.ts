import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://veasy.pro";
  return [
    { url: `${base}/`,                    lastModified: new Date(), priority: 1.0 },
    { url: `${base}/pvt-france`,          lastModified: new Date(), priority: 0.9 },
    { url: `${base}/comment-ca-marche`,   lastModified: new Date(), priority: 0.8 },
    { url: `${base}/telecharger`,         lastModified: new Date(), priority: 0.7 },
  ];
}
