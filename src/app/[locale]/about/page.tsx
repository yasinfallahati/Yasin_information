import type { Metadata } from "next";
import { Locale } from "@/types/project";
import About from "@/components/sections/About";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc = locale as Locale;
  const titles: Record<Locale, string> = {
    fa: "درباره من — یاسین فلاحتی",
    en: "About — Yasin Fallahati",
    de: "Über mich — Yasin Fallahati",
  };
  return { title: titles[loc] };
}

export default function AboutPage() {
  return (
    <div className="pt-16">
      <About />
    </div>
  );
}
