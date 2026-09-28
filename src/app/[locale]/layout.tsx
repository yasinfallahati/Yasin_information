import type { Metadata } from "next";
import { Syne, Manrope } from "next/font/google";
import { Locale } from "@/types/project";
import { isRtl, locales } from "@/lib/i18n";
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
  fa: "یاسین فلاحتی — مهندس هوش مصنوعی",
  en: "Yasin Fallahati — AI Engineer",
  de: "Yasin Fallahati — KI-Ingenieur",
};

const descriptions: Record<Locale, string> = {
  fa: "پورتفولیوی یاسین فلاحتی — مهندس هوش مصنوعی، توسعه‌دهنده پایتون و اتوماسیون",
  en: "Portfolio of Yasin Fallahati — AI engineer, Python developer, and automation",
  de: "Portfolio von Yasin Fallahati — KI-Ingenieur, Python-Entwickler und Automatisierung",
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
    alternates: {
      canonical: `https://yasinfallahati.github.io/${loc}`,
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
      url: `https://yasinfallahati.github.io/${loc}`,
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
    url: "https://yasinfallahati.github.io",
    jobTitle: "AI Engineer",
    description: descriptions[loc],
    sameAs: [
      "https://github.com/yasinfallahati",
      "https://t.me/yasinfallahatiiii",
      "https://instagram.com/yasinfallahatiiiii",
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
