import { Locale } from "@/types/project";

export const locales: Locale[] = ["fa", "en", "de"];
export const defaultLocale: Locale = "fa";

export const localeNames: Record<Locale, string> = {
  fa: "فارسی",
  en: "English",
  de: "Deutsch",
};

export const localeFlags: Record<Locale, string> = {
  fa: "🇮🇷",
  en: "🇬🇧",
  de: "🇩🇪",
};

export function isRtl(locale: Locale): boolean {
  return locale === "fa";
}

export function getDirection(locale: Locale): "rtl" | "ltr" {
  return isRtl(locale) ? "rtl" : "ltr";
}
