"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useParams } from "next/navigation";
import { MapPin, Briefcase } from "lucide-react";
import { Locale } from "@/types/project";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { useInView } from "@/hooks/useInView";

const aboutTexts: Record<
  Locale,
  {
    title: string;
    subtitle: string;
    intro: string;
    location: string;
    company: string;
    values: { t: string; d: string }[];
  }
> = {
  fa: {
    title: "درباره من",
    subtitle: "تمرکز، ابزارها و نحوه کار",
    intro:
      "یاسین فلاحتی هستم؛ مهندس هوش مصنوعی و توسعه‌دهنده پایتون. روی ساخت سیستم‌های نرم‌افزاری قابل نگهداری، اتوماسیون فرایندها، محصولات local-first و یکپارچه‌سازی سرویس‌ها کار می‌کنم. در شرکت تجارت الکترونیک شایسته فعالیت دارم.",
    location: "ایران",
    company: "شرکت تجارت الکترونیک شایسته",
    values: [
      { t: "کد قابل نگهداری", d: "ساختار شفاف، نام‌گذاری دقیق، بدون پیچیدگی غیرضروری." },
      { t: "اتوماسیون عملی", d: "کاهش کار دستی با اسکریپت، ربات و یکپارچه‌سازی API." },
      { t: "هوش مصنوعی لوکال", d: "ابزارهایی که روی سخت‌افزار خودتان اجرا می‌شوند — حریم خصوصی اول." },
    ],
  },
  en: {
    title: "About",
    subtitle: "Focus, tools, and working style",
    intro:
      "I'm Yasin Fallahati — an AI engineer and Python developer. I build maintainable software systems, process automation, local-first products, and service integrations. I work at Shayesteh Iranian E-commerce Company.",
    location: "Iran",
    company: "Shayesteh Iranian E-commerce Company",
    values: [
      { t: "Maintainable code", d: "Clear structure, precise naming, no unnecessary complexity." },
      { t: "Practical automation", d: "Less manual work through scripts, bots, and APIs." },
      { t: "Local-first AI", d: "Tools that run on your hardware — privacy by default." },
    ],
  },
  de: {
    title: "Über mich",
    subtitle: "Fokus, Tools und Arbeitsweise",
    intro:
      "Ich bin Yasin Fallahati — KI-Ingenieur und Python-Entwickler. Ich entwickle wartbare Softwaresysteme, Prozessautomatisierung, local-first Produkte und Service-Integrationen. Ich arbeite bei Shayesteh Iranian E-Commerce.",
    location: "Iran",
    company: "Shayesteh Iranian E-Commerce GmbH",
    values: [
      { t: "Wartbarer Code", d: "Klare Struktur, präzise Benennung, keine unnötige Komplexität." },
      { t: "Praktische Automatisierung", d: "Weniger Handarbeit durch Skripte, Bots und APIs." },
      { t: "Local-first KI", d: "Tools auf eigener Hardware — Privatsphäre zuerst." },
    ],
  },
};

export default function About() {
  const params = useParams();
  const locale = (params.locale as Locale) || "fa";
  const { ref, isInView } = useInView(0.12);
  const reduce = useReducedMotion();
  const about = aboutTexts[locale];

  return (
    <section className="relative overflow-hidden py-24 sm:py-28" ref={ref}>
      <Container>
        <SectionTitle title={about.title} subtitle={about.subtitle} />

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-base leading-relaxed text-soft sm:text-lg">{about.intro}</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-sm text-mute">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-panel px-3 py-1.5">
              <MapPin className="h-3.5 w-3.5 text-accent" />
              {about.location}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-panel px-3 py-1.5">
              <Briefcase className="h-3.5 w-3.5 text-violet" />
              {about.company}
            </span>
          </div>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-3">
          {about.values.map((v, i) => (
            <motion.div
              key={v.t}
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.1 + i * 0.08 }}
              className="rounded-xl border border-line bg-panel p-5 text-center sm:text-start"
            >
              <div className="mb-3 h-0.5 w-8 bg-gradient-to-r from-accent to-violet sm:mx-0 mx-auto" />
              <h3 className="text-base font-semibold text-bright">{v.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mute">{v.d}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
