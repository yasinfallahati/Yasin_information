"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type Locale, localeLabels, locales } from "@/lib/i18n";

export default function LanguageSwitcher({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname();
  const rest = pathname.split("/").slice(2).join("/");

  return (
    <nav aria-label={label} className="flex items-center gap-3 text-sm">
      {locales.map((target) =>
        target === locale ? (
          <span key={target} aria-current="true" lang={target} className="font-bold">
            {localeLabels[target].short}
          </span>
        ) : (
          <Link
            key={target}
            href={rest ? `/${target}/${rest}` : `/${target}`}
            hrefLang={target}
            lang={target}
            aria-label={localeLabels[target].name}
            className="text-muted hover:text-ink"
          >
            {localeLabels[target].short}
          </Link>
        )
      )}
    </nav>
  );
}
