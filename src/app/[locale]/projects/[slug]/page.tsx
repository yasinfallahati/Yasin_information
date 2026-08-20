import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Locale } from "@/types/project";
import { getProjectBySlug, projects } from "@/data/projects";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectDetails from "@/components/projects/ProjectDetails";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const loc = locale as Locale;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const titles: Record<Locale, string> = {
    fa: `${project.name} — یاسین فلاحتی`,
    en: `${project.name} — Yasin Fallahati`,
    de: `${project.name} — Yasin Fallahati`,
  };

  return {
    title: titles[loc],
    description: project.description[loc],
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectHero project={project} />
      <ProjectDetails project={project} />
    </>
  );
}
