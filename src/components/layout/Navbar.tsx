"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import GithubIcon from "@/components/ui/GithubIcon";
import { Locale } from "@/types/project";
import { isRtl } from "@/lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";

const navItems = [
  { id: "home", href: "", fa: "خانه", en: "Home", de: "Startseite" },
  { id: "about", href: "about", fa: "درباره من", en: "About", de: "Über mich" },
  { id: "projects", href: "projects", fa: "پروژه‌ها", en: "Projects", de: "Projekte" },
  { id: "skills", href: "skills", fa: "مهارت‌ها", en: "Skills", de: "Fähigkeiten" },
  { id: "journey", href: "journey", fa: "مسیر یادگیری", en: "Journey", de: "Lernweg" },
  { id: "certificates", href: "certificates", fa: "گواهینامه‌ها", en: "Certificates", de: "Zertifikate" },
  { id: "contact", href: "contact", fa: "ارتباط", en: "Contact", de: "Kontakt" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const params = useParams();
  const pathname = usePathname();
  const locale = (params.locale as Locale) || "fa";
  const rtl = isRtl(locale);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-700 bg-gray-900/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href={`/${locale}`}
            className="text-lg font-bold text-gray-50"
          >
            <span className="text-blue-500">
              YF
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const href = item.href ? `/${locale}/${item.href}` : `/${locale}`;
              const isActive = pathname === href || (item.href === "" && pathname === `/${locale}`);
              return (
                <Link
                  key={item.id}
                  href={href}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-blue-500"
                      : "text-gray-300 hover:text-gray-50"
                  }`}
                >
                  {item[locale]}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <LanguageSwitcher locale={locale} />
            <a
              href="https://github.com/yasinfallahati"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden text-gray-400 hover:text-gray-50 transition-colors sm:block"
              aria-label="GitHub"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <button
              className="md:hidden text-gray-400 hover:text-gray-50"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 border-b border-gray-700 bg-gray-900/95 backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto max-w-6xl px-4 py-4">
              <div className="flex flex-col gap-1">
                {navItems.map((item) => {
                  const href = item.href ? `/${locale}/${item.href}` : `/${locale}`;
                  const isActive = pathname === href;
                  return (
                    <Link
                      key={item.id}
                      href={href}
                      onClick={() => setMobileOpen(false)}
                      className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                        isActive
                          ? "text-blue-500"
                          : "text-gray-300 hover:text-gray-50 hover:bg-gray-800"
                      }`}
                    >
                      {item[locale]}
                    </Link>
                  );
                })}
                <a
                  href="https://github.com/yasinfallahati"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium text-gray-400 hover:text-gray-50 hover:bg-gray-800"
                >
                  <GithubIcon className="h-4 w-4" />
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
