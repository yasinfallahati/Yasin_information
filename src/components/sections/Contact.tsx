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
    title: "بیایید همکاری کنیم",
    description: "برای پروژه، اتوماسیون، یا ساخت محصول local-first — ایمیل یا تلگرام.",
    emailCta: "ارسال ایمیل",
    telegramCta: "تلگرام",
  },
  en: {
    title: "Let's work together",
    description: "For projects, automation, or local-first products — email or Telegram.",
    emailCta: "Send email",
    telegramCta: "Telegram",
  },
  de: {
    title: "Lass uns zusammenarbeiten",
    description: "Für Projekte, Automatisierung oder local-first Produkte — E-Mail oder Telegram.",
    emailCta: "E-Mail senden",
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
    <section className="relative overflow-hidden border-t border-line py-28 sm:py-32" ref={ref}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_100%,rgba(45,212,191,0.06),transparent)]" />
      <Container>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="relative mx-auto max-w-xl text-center"
        >
          <div className="mx-auto mb-5 h-px w-12 bg-gradient-to-r from-accent to-violet" />
          <h2 className="font-display text-3xl font-bold tracking-tight text-bright sm:text-4xl">
            {content.title}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-mute">
            {content.description}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="mailto:yasinfallahati@gmail.com" className="btn-primary">
              <Mail className="h-4 w-4" />
              {content.emailCta}
            </a>
            <a
              href="https://t.me/yasinfallahatiiii"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
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
