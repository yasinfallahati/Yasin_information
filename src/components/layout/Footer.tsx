"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { MessageCircle, Camera } from "lucide-react";
import GithubIcon from "@/components/ui/GithubIcon";
import { Locale } from "@/types/project";

const socialLinks = [
  { name: "GitHub", url: "https://github.com/yasinfallahati", icon: GithubIcon },
  { name: "Telegram", url: "https://t.me/yasinfallahatiiii", icon: MessageCircle },
  { name: "Instagram", url: "https://instagram.com/yasinfallahatiiiii", icon: Camera },
];

const footerLinks = [
  { label: { fa: "خانه", en: "Home", de: "Startseite" }, href: "" },
  { label: { fa: "پروژه‌ها", en: "Projects", de: "Projekte" }, href: "projects" },
  { label: { fa: "مهارت‌ها", en: "Skills", de: "Fähigkeiten" }, href: "skills" },
  { label: { fa: "تماس", en: "Contact", de: "Kontakt" }, href: "contact" },
];

export default function Footer() {
  const params = useParams();
  const locale = (params.locale as Locale) || "fa";

  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link href={`/${locale}`} className="font-display text-lg font-semibold text-bright">
              Yasin<span className="text-accent">.</span> Fallahati
            </Link>
            <p className="mt-3 text-sm leading-6 text-mute">
              {locale === "fa"
                ? "اتوماسیون · هوش مصنوعی لوکال · فول‌استک"
                : locale === "de"
                  ? "Automatisierung · Local-first KI · Full-stack"
                  : "Automation · Local-first AI · Full-stack"}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-mute">
              {locale === "fa" ? "لینک‌ها" : "Links"}
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href ? `/${locale}/${link.href}` : `/${locale}`}
                    className="text-sm text-mute transition-colors hover:text-accent-strong"
                  >
                    {link.label[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-mute">
              {locale === "fa" ? "ارتباط" : locale === "de" ? "Kontakt" : "Connect"}
            </h3>
            <div className="flex gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-line p-2.5 text-mute transition-colors hover:border-accent/40 hover:text-accent"
                  aria-label={link.name}
                >
                  <link.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-line pt-6">
          <p className="text-xs text-mute">
            © {new Date().getFullYear()} Yasin Fallahati
          </p>
        </div>
      </div>
    </footer>
  );
}
