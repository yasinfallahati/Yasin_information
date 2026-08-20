import type { Metadata } from "next";
import { Locale } from "@/types/project";
import Certificates from "@/components/sections/Certificates";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc = locale as Locale;
  const titles: Record<Locale, string> = {
    fa: "گواهینامه‌ها — یاسین فلاحتی",
    en: "Certificates — Yasin Fallahati",
    de: "Zertifikate — Yasin Fallahati",
  };
  return { title: titles[loc] };
}

export default function CertificatesPage() {
  return (
    <div className="pt-16">
      <Certificates />
    </div>
  );
}
