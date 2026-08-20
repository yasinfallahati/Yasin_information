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
    <div className="flex items-center gap-0.5 rounded-lg bg-gray-800 p-0.5">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          className={`rounded-md px-2 py-1 text-xs font-medium transition-all ${
            locale === loc
              ? "bg-blue-500 text-white"
              : "text-gray-400 hover:text-gray-50 hover:bg-gray-700"
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
