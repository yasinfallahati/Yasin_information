"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowRight, ArrowLeft } from "lucide-react";
import GithubIcon from "@/components/ui/GithubIcon";
import { Locale } from "@/types/project";
import { isRtl } from "@/lib/i18n";
import Container from "@/components/ui/Container";

export default function Hero() {
  const params = useParams();
  const locale = (params.locale as Locale) || "fa";
  const rtl = isRtl(locale);

  const t = (key: string) => {
    const translations: Record<string, Record<Locale, string>> = {
      greeting: { fa: "سلام، من", en: "Hi, I'm", de: "Hallo, ich bin" },
      name: { fa: "یاسین فلاحتی", en: "Yasin Fallahati", de: "Yasin Fallahati" },
      role1: { fa: "مهندس هوش مصنوعی", en: "AI Engineer", de: "KI-Ingenieur" },
      role2: { fa: "توسعه‌دهنده پایتون", en: "Python Developer", de: "Python-Entwickler" },
      role3: { fa: "سازنده اتوماسیون", en: "Automation Builder", de: "Automatisierungsbauer" },
      bio: {
        fa: "راه‌حل‌های هوشمند می‌سازم که ساده، قابل اعتماد و واقعاً مفید هستند.",
        en: "Building intelligent solutions that are simple, reliable, and genuinely useful.",
        de: "Intelligente Lösungen entwickeln, die einfach, zuverlässig und wirklich nützlich sind.",
      },
      cta_projects: { fa: "مشاهده پروژه‌ها", en: "View Projects", de: "Projekte ansehen" },
      cta_github: { fa: "گیت‌هاب من", en: "My GitHub", de: "Mein GitHub" },
      stat_repos: { fa: "مخزن", en: "Repos", de: "Repos" },
      stat_stars: { fa: "ستاره", en: "Stars", de: "Sterne" },
      stat_followers: { fa: "دنبال‌کننده", en: "Followers", de: "Follower" },
    };
    return translations[key]?.[locale] || key;
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gray-950" />

      {/* Subtle blue glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-blue-500/[0.04] blur-[128px]" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Neural network nodes */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute top-20 right-20 h-64 w-64 text-blue-500/[0.06]" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="40" r="3" fill="currentColor" />
          <circle cx="60" cy="80" r="2.5" fill="currentColor" />
          <circle cx="140" cy="80" r="2.5" fill="currentColor" />
          <circle cx="40" cy="130" r="2" fill="currentColor" />
          <circle cx="80" cy="140" r="2" fill="currentColor" />
          <circle cx="120" cy="140" r="2" fill="currentColor" />
          <circle cx="160" cy="130" r="2" fill="currentColor" />
          <line x1="100" y1="40" x2="60" y2="80" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
          <line x1="100" y1="40" x2="140" y2="80" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
          <line x1="60" y1="80" x2="40" y2="130" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
          <line x1="60" y1="80" x2="80" y2="140" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
          <line x1="140" y1="80" x2="120" y2="140" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
          <line x1="140" y1="80" x2="160" y2="130" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
        </svg>
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-gray-700 bg-gray-800 px-4 py-1.5 text-xs text-gray-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {locale === "fa" ? "آماده همکاری" : locale === "de" ? "Zur Zusammenarbeit bereit" : "Open to opportunities"}
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base text-gray-300"
          >
            {t("greeting")}
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-5xl font-bold tracking-tight text-gray-50 sm:text-6xl lg:text-7xl"
          >
            {t("name")}
          </motion.h1>

          {/* Roles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 flex flex-col gap-1"
          >
            <span className="text-xl font-medium text-blue-500 sm:text-2xl">
              {t("role1")}
            </span>
            <span className="text-lg text-gray-300 sm:text-xl">
              {t("role2")} · {t("role3")}
            </span>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 max-w-xl text-base text-gray-400 leading-relaxed"
          >
            {t("bio")}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href={`/${locale}/projects`}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-400 hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98]"
            >
              {t("cta_projects")}
              {rtl ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
            </Link>
            <a
              href="https://github.com/yasinfallahati"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-700 px-6 py-3 text-sm font-medium text-gray-50 transition-all hover:bg-gray-800"
            >
              <GithubIcon className="h-4 w-4" />
              {t("cta_github")}
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 grid grid-cols-3 gap-12"
          >
            {[
              { value: "22+", label: t("stat_repos") },
              { value: "6+", label: t("stat_stars") },
              { value: "8", label: t("stat_followers") },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-gray-50 sm:text-3xl">{stat.value}</div>
                <div className="mt-1 text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="h-5 w-8 rounded-full border border-gray-600 flex justify-center pt-1.5"
        >
          <div className="h-1 w-1 rounded-full bg-gray-400" />
        </motion.div>
      </div>
    </section>
  );
}
