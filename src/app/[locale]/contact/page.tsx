import type { Metadata } from "next";
import { Locale } from "@/types/project";
import Contact from "@/components/sections/Contact";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc = locale as Locale;
  const titles: Record<Locale, string> = {
    fa: "ارتباط با من — یاسین فلاحتی",
    en: "Contact — Yasin Fallahati",
    de: "Kontakt — Yasin Fallahati",
  };
  return { title: titles[loc] };
}

export default function ContactPage() {
  return (
    <div className="pt-16">
      <Contact />
    </div>
  );
}
