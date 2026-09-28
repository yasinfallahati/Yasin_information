"use client";

import { usePathname, useRouter } from "next/navigation";
import { Locale } from "@/types/project";
import { locales, localeNames, localeFlags } from "@/lib/i18n";

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(newLocale: Locale) {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  }

  return (
    <div className="flex items-center gap-0.5 border border-line bg-panel p-0.5">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          className={`px-2 py-1 text-xs font-medium transition-colors ${
            locale === loc
              ? "bg-elevated text-bright"
              : "text-mute hover:text-soft"
          }`}
          aria-label={`Switch to ${localeNames[loc]}`}
          title={localeNames[loc]}
        >
          <span className="mr-1">{localeFlags[loc]}</span>
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
