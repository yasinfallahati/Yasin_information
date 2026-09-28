"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useParams } from "next/navigation";
import { Mail, Send } from "lucide-react";
import { Locale } from "@/types/project";
import Container from "@/components/ui/Container";
import { useInView } from "@/hooks/useInView";

const contactContent: Record<
  Locale,
  { title: string; description: string; emailCta: string; telegramCta: string }
> = {
  fa: {
    title: "تماس",
    description: "برای همکاری، پروژه یا پرسش فنی از طریق ایمیل یا تلگرام پیام بگذارید.",
    emailCta: "ایمیل",
    telegramCta: "تلگرام",
  },
  en: {
    title: "Contact",
    description: "For collaboration, projects, or technical questions — email or Telegram.",
    emailCta: "Email",
    telegramCta: "Telegram",
  },
  de: {
    title: "Kontakt",
    description: "Für Zusammenarbeit, Projekte oder technische Fragen — E-Mail oder Telegram.",
    emailCta: "E-Mail",
    telegramCta: "Telegram",
  },
};

export default function Contact() {
  const params = useParams();
  const locale = (params.locale as Locale) || "fa";
  const { ref, isInView } = useInView(0.15);
  const reduce = useReducedMotion();
  const content = contactContent[locale];

  return (
    <section className="relative overflow-hidden border-t border-line py-28" ref={ref}>
      <Container>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="relative mx-auto max-w-xl text-center"
        >
          <h2 className="font-display text-3xl font-bold tracking-tight text-bright sm:text-4xl">
            {content.title}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-mute">
            {content.description}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="mailto:yasinfallahati@gmail.com"
              className="inline-flex items-center justify-center gap-2 border border-line bg-elevated px-5 py-2.5 text-sm font-medium text-bright transition-colors hover:border-accent-strong"
            >
              <Mail className="h-4 w-4" />
              {content.emailCta}
            </a>
            <a
              href="https://t.me/yasinfallahatiiii"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-transparent px-5 py-2.5 text-sm font-medium text-mute transition-colors hover:text-bright"
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
