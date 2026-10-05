"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowRight, ArrowLeft, Sparkles } from "lucide-react";
import { Locale } from "@/types/project";
import { isRtl } from "@/lib/i18n";
import LanguageField from "@/components/icons/LanguageIcons";

const copy: Record<
  Locale,
  {
    brand: string;
    roles: string[];
    headline: string;
    support: string;
    cta: string;
    ctaSecondary: string;
    available: string;
  }
> = {
  fa: {
    brand: "یاسین فلاحتی",
    roles: ["اتوماسیون", "هوش مصنوعی لوکال", "فول‌استک"],
    headline: "سیستم‌های هوشمند، اتوماسیون قابل اعتماد، محصول واقعی",
    support:
      "مهندس هوش مصنوعی و توسعه‌دهنده پایتون — ساخت ابزارهای local-first، اتوماسیون فرایندها و وب‌اپلیکیشن‌های تمیز.",
    cta: "مشاهده پروژه‌ها",
    ctaSecondary: "گفتگو کنیم",
    available: "آماده‌ی همکاری",
  },
  en: {
    brand: "Yasin Fallahati",
    roles: ["Automation", "Local-first AI", "Full-stack"],
    headline: "Intelligent systems. Reliable automation. Real products.",
    support:
      "AI engineer & Python developer — building local-first tools, process automation, and clean full-stack apps.",
    cta: "View projects",
    ctaSecondary: "Let's talk",
    available: "Open to work",
  },
  de: {
    brand: "Yasin Fallahati",
    roles: ["Automatisierung", "Local-first KI", "Full-stack"],
    headline: "Intelligente Systeme. Zuverlässige Automatisierung. Echte Produkte.",
    support:
      "KI-Ingenieur & Python-Entwickler — local-first Tools, Prozessautomatisierung und saubere Full-Stack-Apps.",
    cta: "Projekte ansehen",
    ctaSecondary: "Lass uns reden",
    available: "Offen für Zusammenarbeit",
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
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden pb-20 pt-28 sm:items-center sm:pb-28 sm:pt-24">
      <LanguageField />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div {...fade(0.05)} className="mb-6 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/25 bg-accent/5 px-3 py-1 text-xs font-medium text-accent-strong">
              <Sparkles className="h-3 w-3" />
              {t.available}
            </span>
          </motion.div>

          <motion.p
            {...fade(0.1)}
            className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-mute"
          >
            {t.brand}
          </motion.p>

          <motion.h1
            {...fade(0.18)}
            className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-bright sm:text-5xl lg:text-6xl"
          >
            {t.headline}
          </motion.h1>

          <motion.div {...fade(0.3)} className="mt-6 flex flex-wrap gap-2">
            {t.roles.map((role) => (
              <span key={role} className="role-chip">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {role}
              </span>
            ))}
          </motion.div>

          <motion.p
            {...fade(0.4)}
            className="mt-6 max-w-xl text-base leading-relaxed text-soft sm:text-lg"
          >
            {t.support}
          </motion.p>

          <motion.div {...fade(0.52)} className="mt-10 flex flex-wrap items-center gap-3">
            <Link href={`/${locale}/projects`} className="btn-primary">
              {t.cta}
              {rtl ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
            </Link>
            <Link href={`/${locale}/contact`} className="btn-ghost">
              {t.ctaSecondary}
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="accent-line absolute inset-x-0 bottom-0" />
    </section>
  );
}
