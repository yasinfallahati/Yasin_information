import type { Metadata } from "next";
import { Locale } from "@/types/project";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectGrid from "@/components/projects/ProjectGrid";
import { projects } from "@/data/projects";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc = locale as Locale;
  const titles: Record<Locale, string> = {
    fa: "پروژه‌ها — یاسین فلاحتی",
    en: "Projects — Yasin Fallahati",
    de: "Projekte — Yasin Fallahati",
  };
  return { title: titles[loc] };
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = locale as Locale;

  const titles: Record<Locale, { title: string; subtitle: string }> = {
    fa: { title: "پروژه‌های من", subtitle: "تمام پروژه‌ها و نمونه‌کارهای من" },
    en: { title: "My Projects", subtitle: "All my projects and work" },
    de: { title: "Meine Projekte", subtitle: "Alle meine Projekte und Arbeiten" },
  };

  return (
    <section className="pt-24 pb-16">
      <Container>
        <SectionTitle title={titles[loc].title} subtitle={titles[loc].subtitle} />
        <ProjectGrid projects={projects} />
      </Container>
    </section>
  );
}
