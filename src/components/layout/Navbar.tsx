"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import GithubIcon from "@/components/ui/GithubIcon";
import { Locale } from "@/types/project";
import LanguageSwitcher from "./LanguageSwitcher";

const navItems = [
  { id: "home", href: "", fa: "خانه", en: "Home", de: "Startseite" },
  { id: "about", href: "about", fa: "درباره", en: "About", de: "Über mich" },
  { id: "projects", href: "projects", fa: "پروژه‌ها", en: "Projects", de: "Projekte" },
  { id: "skills", href: "skills", fa: "مهارت‌ها", en: "Skills", de: "Fähigkeiten" },
  { id: "journey", href: "journey", fa: "مسیر", en: "Journey", de: "Weg" },
  { id: "certificates", href: "certificates", fa: "گواهی‌ها", en: "Certificates", de: "Zertifikate" },
  { id: "contact", href: "contact", fa: "تماس", en: "Contact", de: "Kontakt" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const params = useParams();
  const pathname = usePathname();
  const locale = (params.locale as Locale) || "fa";

  return (
    <>
      <nav className="fixed top-0 start-0 end-0 z-50 border-b border-line bg-ink/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href={`/${locale}`}
            className="font-display text-base font-semibold tracking-tight text-bright"
          >
            Yasin
          </Link>

          <div className="hidden items-center gap-0.5 md:flex">
            {navItems.map((item) => {
              const href = item.href ? `/${locale}/${item.href}` : `/${locale}`;
              const isActive =
                pathname === href || (item.href === "" && pathname === `/${locale}`);
              return (
                <Link
                  key={item.id}
                  href={href}
                  className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                    isActive ? "text-bright" : "text-mute hover:text-soft"
                  }`}
                >
                  {item[locale]}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <LanguageSwitcher locale={locale} />
            <a
              href="https://github.com/yasinfallahati"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden p-2 text-mute transition-colors hover:text-bright sm:block"
              aria-label="GitHub"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <button
              className="p-2 text-mute transition-colors hover:text-bright md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-x-0 top-14 z-40 border-b border-line bg-panel md:hidden"
          >
            <div className="mx-auto max-w-6xl px-4 py-3">
              <div className="flex flex-col">
                {navItems.map((item) => {
                  const href = item.href ? `/${locale}/${item.href}` : `/${locale}`;
                  const isActive = pathname === href;
                  return (
                    <Link
                      key={item.id}
                      href={href}
                      onClick={() => setMobileOpen(false)}
                      className={`px-3 py-2.5 text-sm ${
                        isActive ? "text-bright" : "text-mute hover:text-soft"
                      }`}
                    >
                      {item[locale]}
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
