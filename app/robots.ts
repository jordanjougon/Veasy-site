import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    // /parceiros et /p/ sont internes : rien à indexer.
    rules: { userAgent: "*", allow: "/", disallow: ["/parceiros", "/p/"] },
    sitemap: "https://veasy.pro/sitemap.xml",
  };
}
