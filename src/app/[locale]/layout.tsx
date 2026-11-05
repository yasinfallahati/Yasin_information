import type { Metadata } from "next";
import { contact, copy, name, role } from "@/content/site";
import { estedad, schibsted } from "@/lib/fonts";
import {
  SITE_URL,
  isRtl,
  languageAlternates,
  locales,
  resolveLocale,
} from "@/lib/i18n";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "../globals.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LayoutProps<"/[locale]">): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const { title, description } = copy[locale].meta;

  return {
    metadataBase: new URL(SITE_URL),
    title: { default: title, template: `%s | ${name[locale]}` },
    description,
    alternates: { canonical: `/${locale}`, languages: languageAlternates() },
    openGraph: {
      title,
      description,
      type: "website",
      locale: { fa: "fa_IR", en: "en_US", de: "de_DE" }[locale],
      url: `/${locale}`,
      siteName: name[locale],
      images: [{ url: "/og.png", width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const locale = resolveLocale((await params).locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: name[locale],
    url: `${SITE_URL}/${locale}`,
    jobTitle: role[locale],
    sameAs: [contact.github, contact.telegram],
  };

  return (
    <html
      lang={locale}
      dir={isRtl(locale) ? "rtl" : "ltr"}
      className={`${estedad.variable} ${schibsted.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <a href="#main" className="skip-link">
          {copy[locale].skipToContent}
        </a>
        <Header locale={locale} />
        <main id="main">{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
