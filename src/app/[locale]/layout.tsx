import type { Metadata } from "next";
import { Inter, Vazirmatn } from "next/font/google";
import { Locale } from "@/types/project";
import { isRtl, locales } from "@/lib/i18n";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
  display: "swap",
});

const titles: Record<Locale, string> = {
  fa: "یاسین فلاحتی — مهندس هوش مصنوعی",
  en: "Yasin Fallahati — AI Engineer",
  de: "Yasin Fallahati — KI-Ingenieur",
};

const descriptions: Record<Locale, string> = {
  fa: "پورتفولیوی یاسین فلاحتی — مهندس هوش مصنوعی، توسعه‌دهنده پایتون و سازنده اتوماسیون",
  en: "Portfolio of Yasin Fallahati — AI Engineer, Python Developer, and Automation Builder",
  de: "Portfolio von Yasin Fallahati — KI-Ingenieur, Python-Entwickler und Automatisierungsbauer",
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
    <html lang={locale} dir={dir} className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${vazirmatn.variable}`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
