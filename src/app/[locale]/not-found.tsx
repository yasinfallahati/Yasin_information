"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { copy } from "@/content/site";
import { defaultLocale, hasLocale } from "@/lib/i18n";

export default function NotFound() {
  const { locale: value } = useParams<{ locale: string }>();
  const locale = hasLocale(value) ? value : defaultLocale;
  const t = copy[locale].notFound;

  return (
    <div className="wrap py-24 lg:py-40">
      <h1 className="display display-lg">{t.title}</h1>
      <p className="measure mt-6 text-lg text-muted">{t.body}</p>
      <p className="mt-8">
        <Link className="text-link font-semibold" href={`/${locale}`}>
          {t.back}
        </Link>
      </p>
    </div>
  );
}
