import Link from "next/link";
import { copy, name } from "@/content/site";
import type { Locale } from "@/lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header({ locale }: { locale: Locale }) {
  const { nav, languageLabel } = copy[locale];

  return (
    <header className="wrap flex min-h-18 flex-wrap items-center gap-x-8 gap-y-1 py-3">
      <Link href={`/${locale}`} className="me-auto text-lg font-bold">
        {name[locale]}
      </Link>
      <nav className="flex items-center gap-5 sm:gap-7">
        <Link href={`/${locale}/projects`} className="hover:underline hover:underline-offset-4">
          {nav.work}
        </Link>
        <Link href={`/${locale}/about`} className="hover:underline hover:underline-offset-4">
          {nav.about}
        </Link>
        <a href="#contact" className="hover:underline hover:underline-offset-4">
          {nav.contact}
        </a>
      </nav>
      <LanguageSwitcher locale={locale} label={languageLabel} />
    </header>
  );
}
