"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { Code2, Zap, BookOpen } from "lucide-react";
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

  return (
    <section className="py-24" ref={ref}>
      <Container>
        <SectionTitle title={sectionTitle[locale]} subtitle={subtitle[locale]} />

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
