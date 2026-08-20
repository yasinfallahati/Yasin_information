import type { Metadata } from "next";
import { Locale } from "@/types/project";
import Journey from "@/components/sections/Journey";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc = locale as Locale;
  const titles: Record<Locale, string> = {
    fa: "مسیر یادگیری — یاسین فلاحتی",
    en: "Journey — Yasin Fallahati",
    de: "Lernweg — Yasin Fallahati",
  };
  return { title: titles[loc] };
}

export default function JourneyPage() {
  return (
    <div className="pt-16">
      <Journey />
    </div>
  );
}
