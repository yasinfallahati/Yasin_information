import type { Metadata } from "next";
import { copy } from "@/content/site";
import { estedad, schibsted } from "@/lib/fonts";
import { locales } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "404",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={`${estedad.variable} ${schibsted.variable}`}>
      <body>
        <div className="wrap py-24 lg:py-40">
          <div className="grid gap-12 lg:grid-cols-3">
            {locales.map((locale) => (
              <div key={locale} lang={locale} dir={locale === "fa" ? "rtl" : "ltr"}>
                <h1 className="text-3xl font-extrabold">{copy[locale].notFound.title}</h1>
                <p className="mt-4 text-muted">{copy[locale].notFound.body}</p>
                <p className="mt-6">
                  <a className="text-link font-semibold" href={`/${locale}`}>
                    {copy[locale].notFound.back}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </body>
    </html>
  );
}
