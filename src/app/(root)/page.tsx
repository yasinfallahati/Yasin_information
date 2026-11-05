import type { Metadata } from "next";
import { defaultLocale, localeLabels, locales } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Yasin Fallahati",
  alternates: { canonical: `/${defaultLocale}` },
};

export default function RootPage() {
  return (
    <>
      <meta httpEquiv="refresh" content={`0;url=/${defaultLocale}`} />
      <ul className="wrap space-y-2 py-24">
        {locales.map((locale) => (
          <li key={locale}>
            <a className="text-link" href={`/${locale}`} hrefLang={locale} lang={locale}>
              {localeLabels[locale].name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
