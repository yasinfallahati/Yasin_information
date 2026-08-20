"use client";

import { useParams } from "next/navigation";
import { Locale } from "@/types/project";

export function useLocale(): Locale {
  const params = useParams();
  return (params.locale as Locale) || "fa";
}
