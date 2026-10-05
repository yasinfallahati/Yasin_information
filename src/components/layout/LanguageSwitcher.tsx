"use client";

import { usePathname, useRouter } from "next/navigation";
import { Locale } from "@/types/project";
import { locales, localeNames } from "@/lib/i18n";

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(newLocale: Locale) {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  }

  return (
    <div className="flex items-center gap-0.5 rounded-lg border border-line bg-panel p-0.5">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          className={`rounded-md px-2 py-1 text-xs font-medium transition-colors ${
            locale === loc
              ? "bg-elevated text-accent-strong"
              : "text-mute hover:text-soft"
          }`}
          aria-label={`Switch to ${localeNames[loc]}`}
          title={localeNames[loc]}
        >
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
