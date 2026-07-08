import type { MetadataRoute } from "next";

const locales = ["pt-BR", "fr", "en"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://veasy.pro";
  const pages = [
    { path: "",                  priority: 1.0 },
    { path: "/pvt-france",       priority: 0.9 },
    { path: "/comment-ca-marche", priority: 0.8 },
    { path: "/telecharger",      priority: 0.7 },
  ];

  return locales.flatMap((lang) =>
    pages.map(({ path, priority }) => ({
      url: `${base}/${lang}${path}`,
      lastModified: new Date(),
      priority,
    }))
  );
}
