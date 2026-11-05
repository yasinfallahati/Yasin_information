import { notFound } from "next/navigation";

export const locales = ["fa", "en", "de"] as const;

export type Locale = (typeof locales)[number];

export type Localized = Record<Locale, string>;

export const defaultLocale: Locale = "fa";

export const SITE_URL = "https://profileyasin.vercel.app";

export const localeLabels: Record<Locale, { short: string; name: string }> = {
  fa: { short: "فا", name: "فارسی" },
  en: { short: "EN", name: "English" },
  de: { short: "DE", name: "Deutsch" },
};

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function resolveLocale(value: string): Locale {
  if (!hasLocale(value)) notFound();
  return value;
}

export function isRtl(locale: Locale): boolean {
  return locale === "fa";
}

export function languageAlternates(path = ""): Record<string, string> {
  return Object.fromEntries(locales.map((locale) => [locale, `/${locale}${path}`]));
}
