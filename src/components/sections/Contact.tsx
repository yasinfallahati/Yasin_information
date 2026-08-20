"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { Mail, Send } from "lucide-react";
import { Locale } from "@/types/project";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { useInView } from "@/hooks/useInView";

const contactContent: Record<Locale, { title: string; subtitle: string; description: string; emailCta: string; telegramCta: string }> = {
  fa: {
    title: "ارتباط با من",
    subtitle: "آماده همکاری و گفتگو",
    description: "همیشه خوشحالم که درباره پروژه‌های جدید، همکاری‌ها یا فقط گفتگوی فنی صحبت کنم.",
    emailCta: "ارسال ایمیل",
    telegramCta: "پیام در تلگرام",
  },
  en: {
    title: "Get In Touch",
    subtitle: "Ready to collaborate and connect",
    description: "Always happy to discuss new projects, collaborations, or just chat about tech.",
    emailCta: "Send Email",
    telegramCta: "Message on Telegram",
  },
  de: {
    title: "Kontakt aufnehmen",
    subtitle: "Bereit zur Zusammenarbeit und Vernetzung",
    description: "Immer gerne über neue Projekte, Zusammenarbeit oder einfach über Tech quatschen.",
    emailCta: "E-Mail senden",
    telegramCta: "Telegram Nachricht",
  },
};

export default function Contact() {
  const params = useParams();
  const locale = (params.locale as Locale) || "fa";
  const { ref, isInView } = useInView(0.1);
  const content = contactContent[locale];

  return (
    <section className="py-24" ref={ref}>
      <Container>
        <SectionTitle title={content.title} subtitle={content.subtitle} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-base text-gray-400 leading-relaxed">{content.description}</p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="mailto:yasinfallahati@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-400 hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Mail className="h-4 w-4" />
              {content.emailCta}
            </a>
            <a
              href="https://t.me/yasinfallahatiiii"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-700 px-6 py-3 text-sm font-medium text-gray-50 transition-all hover:bg-gray-800"
            >
              <Send className="h-4 w-4" />
              {content.telegramCta}
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
