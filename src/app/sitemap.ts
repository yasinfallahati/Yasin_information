import { MetadataRoute } from "next";

const SITE_URL = "https://yasinfallahati.github.io";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["fa", "en", "de"];
  const pages = ["", "about", "projects", "skills", "journey", "certificates", "contact"];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of pages) {
      const path = page ? `/${locale}/${page}` : `/${locale}`;
      entries.push({
        url: `${SITE_URL}${path}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: page === "" ? 1 : 0.8,
        alternates: {
          languages: {
            fa: `${SITE_URL}/${page ? "fa/" + page : "fa"}`,
            en: `${SITE_URL}/${page ? "en/" + page : "en"}`,
            de: `${SITE_URL}/${page ? "de/" + page : "de"}`,
          },
        },
      });
    }
  }

  return entries;
}
