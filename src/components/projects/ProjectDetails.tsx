"use client";

import { useParams } from "next/navigation";
import { Project, Locale } from "@/types/project";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { ArrowDown } from "lucide-react";

interface ProjectDetailsProps {
  project: Project;
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  const params = useParams();
  const locale = (params.locale as Locale) || "fa";

  if (!project.longDescription) return null;

  return (
    <section className="py-12">
      <Container>
        <Card className="p-8">
          <h2 className="mb-4 text-2xl font-bold text-bright">
            {locale === "fa"
              ? "درباره پروژه"
              : locale === "de"
                ? "Über das Projekt"
                : "About this project"}
          </h2>
          <p className="text-lg leading-relaxed text-soft">{project.longDescription[locale]}</p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-mute">
                {locale === "fa"
                  ? "تکنولوژی‌ها"
                  : locale === "de"
                    ? "Technologien"
                    : "Technologies"}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-line bg-ink px-3 py-1.5 text-sm text-soft"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-mute">
                {locale === "fa" ? "دسته‌بندی" : locale === "de" ? "Kategorie" : "Category"}
              </h3>
              <span className="rounded-md border border-accent/25 bg-accent/10 px-3 py-1.5 text-sm uppercase text-accent-strong">
                {project.category}
              </span>
            </div>
          </div>
        </Card>

        {project.architecture && project.architecture.length > 0 && (
          <Card className="mt-8 p-8">
            <h2 className="mb-6 text-2xl font-bold text-bright">
              {locale === "fa"
                ? "معماری پروژه"
                : locale === "de"
                  ? "Projektarchitektur"
                  : "Project architecture"}
            </h2>
            <div className="flex flex-col items-center gap-2">
              {project.architecture.map((step, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="min-w-[200px] rounded-lg border border-line bg-ink px-6 py-3 text-center text-sm font-medium text-soft">
                    {step}
                  </div>
                  {i < project.architecture!.length - 1 && (
                    <ArrowDown className="my-2 h-4 w-4 text-accent/50" />
                  )}
                </div>
              ))}
            </div>
          </Card>
        )}
      </Container>
    </section>
  );
}
