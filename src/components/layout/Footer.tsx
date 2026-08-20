"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { MessageCircle, Camera, Heart } from "lucide-react";
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
  { label: { fa: "ارتباط", en: "Contact", de: "Kontakt" }, href: "contact" },
];

export default function Footer() {
  const params = useParams();
  const locale = (params.locale as Locale) || "fa";

  return (
    <footer className="border-t border-gray-700 bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link href={`/${locale}`} className="text-xl font-bold text-gray-50">
              Yasin Fallahati
            </Link>
            <p className="mt-3 text-sm text-gray-300">
              {locale === "fa"
                ? "مهندس هوش مصنوعی · توسعه‌دهنده پایتون · سازنده اتوماسیون"
                : locale === "de"
                ? "KI-Ingenieur · Python-Entwickler · Automatisierungsbauer"
                : "AI Engineer · Python Developer · Automation Builder"}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-300">
              {locale === "fa" ? "لینک‌ها" : locale === "de" ? "Links" : "Links"}
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href ? `/${locale}/${link.href}` : `/${locale}`}
                    className="text-sm text-gray-400 transition-colors hover:text-gray-50"
                  >
                    {link.label[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-300">
              {locale === "fa" ? "ارتباط" : locale === "de" ? "Kontakt" : "Connect"}
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-800 hover:text-gray-50"
                  aria-label={link.name}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-gray-700 pt-8 sm:flex-row">
          <p className="text-xs text-gray-400">
            {locale === "fa"
              ? "طراحی و توسعه توسط یاسین فلاحتی"
              : locale === "de"
              ? "Gestaltet & Entwickelt von Yasin Fallahati"
              : "Designed & Developed by Yasin Fallahati"}
          </p>
          <p className="flex items-center gap-1 text-xs text-gray-400">
            {locale === "fa" ? "ساخته شده با" : locale === "de" ? "Erstellt mit" : "Built with"}{" "}
            <Heart className="h-3 w-3 text-red-500" fill="currentColor" /> Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
