import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { SITE_URL, locales } from "@/lib/i18n";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/projects", "/about", ...projects.map((p) => `/projects/${p.slug}`)];

  return locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${SITE_URL}/${locale}${path}`,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, `${SITE_URL}/${l}${path}`])),
      },
    }))
  );
}
