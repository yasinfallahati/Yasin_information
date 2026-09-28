"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Locale } from "@/types/project";
import { isRtl } from "@/lib/i18n";
import LanguageField from "@/components/icons/LanguageIcons";

const copy: Record<
  Locale,
  { brand: string; headline: string; support: string; cta: string; ctaSecondary: string }
> = {
  fa: {
    brand: "یاسین فلاحتی",
    headline: "مهندس هوش مصنوعی و توسعه‌دهنده پایتون",
    support: "طراحی و پیاده‌سازی سیستم‌های نرم‌افزاری، اتوماسیون و یکپارچه‌سازی API.",
    cta: "مشاهده پروژه‌ها",
    ctaSecondary: "تماس",
  },
  en: {
    brand: "Yasin Fallahati",
    headline: "AI engineer and Python developer",
    support: "Software systems, automation, and API integration — built for reliability.",
    cta: "View projects",
    ctaSecondary: "Contact",
  },
  de: {
    brand: "Yasin Fallahati",
    headline: "KI-Ingenieur und Python-Entwickler",
    support: "Softwaresysteme, Automatisierung und API-Integration — auf Zuverlässigkeit ausgelegt.",
    cta: "Projekte ansehen",
    ctaSecondary: "Kontakt",
  },
};

export default function Hero() {
  const params = useParams();
  const locale = (params.locale as Locale) || "fa";
  const rtl = isRtl(locale);
  const reduce = useReducedMotion();
  const t = copy[locale];

  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 pt-28 sm:items-center sm:pb-24 sm:pt-20">
      <LanguageField />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.h1
            {...fade(0.1)}
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-bright sm:text-6xl lg:text-7xl"
          >
            {t.brand}
          </motion.h1>

          <motion.p
            {...fade(0.25)}
            className="mt-6 max-w-xl text-xl font-medium leading-snug text-soft sm:text-2xl"
          >
            {t.headline}
          </motion.p>

          <motion.p {...fade(0.4)} className="mt-4 max-w-md text-base leading-relaxed text-mute">
            {t.support}
          </motion.p>

          <motion.div {...fade(0.55)} className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href={`/${locale}/projects`}
              className="inline-flex items-center gap-2 border border-line bg-elevated px-5 py-2.5 text-sm font-medium text-bright transition-colors hover:border-accent-strong hover:text-accent-strong"
            >
              {t.cta}
              {rtl ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 border border-transparent px-5 py-2.5 text-sm font-medium text-mute transition-colors hover:text-bright"
            >
              {t.ctaSecondary}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
