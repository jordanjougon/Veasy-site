import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://veasy.pro";
  const pages = ["", "/pvt-france", "/comment-ca-marche", "/telecharger"];
  const priority = (p: string) =>
    p === "" ? 1 : p === "/pvt-france" ? 0.9 : p === "/comment-ca-marche" ? 0.8 : 0.7;

  return [
    ...pages.map((p) => ({ url: `${base}/pt-BR${p}`, lastModified: new Date(), priority: priority(p) })),
    ...pages.map((p) => ({ url: `${base}/fr${p}`, lastModified: new Date(), priority: priority(p) })),
    ...pages.map((p) => ({ url: `${base}/en${p}`, lastModified: new Date(), priority: priority(p) })),
  ];
}
