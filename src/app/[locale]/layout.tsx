import type { Metadata } from "next";
import { Syne, Manrope } from "next/font/google";
import { Locale } from "@/types/project";
import { isRtl, locales } from "@/lib/i18n";
import { SITE_URL } from "@/lib/constants";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "../globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const titles: Record<Locale, string> = {
  fa: "یاسین فلاحتی — اتوماسیون · هوش مصنوعی لوکال · فول‌استک",
  en: "Yasin Fallahati — Automation · Local-first AI · Full-stack",
  de: "Yasin Fallahati — Automatisierung · Local-first KI · Full-stack",
};

const descriptions: Record<Locale, string> = {
  fa: "پورتفولیوی یاسین فلاحتی — مهندس هوش مصنوعی و توسعه‌دهنده پایتون. اتوماسیون، محصولات local-first و فول‌استک.",
  en: "Portfolio of Yasin Fallahati — AI engineer & Python developer. Automation, local-first products, and full-stack.",
  de: "Portfolio von Yasin Fallahati — KI-Ingenieur & Python-Entwickler. Automatisierung, local-first Produkte und Full-stack.",
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc = locale as Locale;

  return {
    title: titles[loc],
    description: descriptions[loc],
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: `${SITE_URL}/${loc}`,
      languages: {
        fa: "/fa",
        en: "/en",
        de: "/de",
      },
    },
    openGraph: {
      title: titles[loc],
      description: descriptions[loc],
      type: "website",
      locale: loc === "fa" ? "fa_IR" : loc === "de" ? "de_DE" : "en_US",
      url: `${SITE_URL}/${loc}`,
      siteName: "Yasin Fallahati",
    },
    twitter: {
      card: "summary_large_image",
      title: titles[loc],
      description: descriptions[loc],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = locale as Locale;
  const dir = isRtl(loc) ? "rtl" : "ltr";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Yasin Fallahati",
    url: SITE_URL,
    jobTitle: "AI Engineer",
    description: descriptions[loc],
    sameAs: [
      "https://github.com/yasinfallahati",
      "https://t.me/yasinfallahatiiii",
      "https://instagram.com/yasinfallahatiiiii",
      "https://nabz-farda.vercel.app",
    ],
  };

  return (
    <html lang={locale} dir={dir} className={`${syne.variable} ${manrope.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <div className="site-shell">
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
