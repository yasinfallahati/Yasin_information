"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { Code2, Zap, BookOpen, MapPin, Briefcase } from "lucide-react";
import { Locale } from "@/types/project";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import { useInView } from "@/hooks/useInView";

const values = [
  { icon: Code2, key: 0 },
  { icon: Zap, key: 1 },
  { icon: BookOpen, key: 2 },
];

const titles: Record<Locale, string[]> = {
  fa: ["کدنویسی تمیز", "راه‌حل‌های سریع", "یادگیری مداوم"],
  en: ["Clean Code", "Fast Solutions", "Continuous Learning"],
  de: ["Sauberer Code", "Schnelle Lösungen", "Kontinuierliches Lernen"],
};

const descriptions: Record<Locale, string[]> = {
  fa: [
    "نوشتن کد خوانا، قابل نگهداری و با کیفیت بالا",
    "ساخت راه‌حل‌های سریع و مقیاس‌پذیر",
    "همیشه در حال یادگیری و رشد تکنیکال",
  ],
  en: [
    "Writing readable, maintainable, and high-quality code",
    "Building fast and scalable solutions",
    "Always learning and growing technically",
  ],
  de: [
    "Lesbaren, wartbaren und hochwertigen Code schreiben",
    "Schnelle und skalierbare Lösungen entwickeln",
    "Immer lernen und technisch wachsen",
  ],
};

const aboutTexts: Record<Locale, { intro: string; location: string; company: string }> = {
  fa: {
    intro: "من یاسین فلاحتی هستم، مهندس هوش مصنوعی و توسعه‌دهنده پایتون. تمرکز من بر ساخت راه‌حل‌های نرم‌افزاری هوشمند، اتوماسیون‌های کارآمد و ابزارهایی است که واقعاً زندگی را آسان‌تر می‌کنند.",
    location: "ایران",
    company: "شرکت تجارت الکترونیک شایسته",
  },
  en: {
    intro: "I'm Yasin Fallahati, an AI Engineer and Python Developer. My focus is on building smart software solutions, efficient automations, and tools that genuinely make life easier.",
    location: "Iran",
    company: "Shayesteh Iranian E-commerce Company",
  },
  de: {
    intro: "Ich bin Yasin Fallahati, KI-Ingenieur und Python-Entwickler. Mein Fokus liegt auf der Entwicklung intelligenter Softwarelösungen, effizienter Automatisierungen und Werkzeuge, die das Leben wirklich einfacher machen.",
    location: "Iran",
    company: "Shayesteh Iranian E-Commerce GmbH",
  },
};

export default function About() {
  const params = useParams();
  const locale = (params.locale as Locale) || "fa";
  const { ref, isInView } = useInView(0.1);

  const sectionTitle = {
    fa: "درباره من",
    en: "About Me",
    de: "Über mich",
  };

  const subtitle = {
    fa: "چه کسی هستم و چه کاری انجام می‌دهم",
    en: "Who I am and what I do",
    de: "Wer ich bin und was ich tue",
  };

  const about = aboutTexts[locale];

  return (
    <section className="py-24" ref={ref}>
      <Container>
        <SectionTitle title={sectionTitle[locale]} subtitle={subtitle[locale]} />

        {/* Bio text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center mb-12"
        >
          <p className="text-base text-gray-400 leading-relaxed">{about.intro}</p>
          <div className="mt-4 flex items-center justify-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              {about.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Briefcase className="h-3.5 w-3.5" />
              {about.company}
            </span>
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value, i) => (
            <motion.div
              key={value.key}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="p-6 h-full">
                <div className="mb-4 inline-flex rounded-lg bg-blue-500/10 p-2.5">
                  <value.icon className="h-5 w-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-50">
                  {titles[locale][value.key]}
                </h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                  {descriptions[locale][value.key]}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
