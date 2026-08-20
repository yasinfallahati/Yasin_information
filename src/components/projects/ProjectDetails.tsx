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
          <h2 className="text-2xl font-bold text-gray-50 mb-4">
            {locale === "fa" ? "درباره پروژه" : locale === "de" ? "Über das Projekt" : "About This Project"}
          </h2>
          <p className="text-gray-400 leading-relaxed text-lg">
            {project.longDescription[locale]}
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
                {locale === "fa" ? "تکنولوژی‌ها" : locale === "de" ? "Technologien" : "Technologies"}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-gray-900 border border-gray-700 px-3 py-1.5 text-sm text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
                {locale === "fa" ? "دسته‌بندی" : locale === "de" ? "Kategorie" : "Category"}
              </h3>
              <span className="rounded-md bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 text-sm text-blue-400 uppercase">
                {project.category}
              </span>
            </div>
          </div>
        </Card>

        {project.architecture && project.architecture.length > 0 && (
          <Card className="mt-8 p-8">
            <h2 className="text-2xl font-bold text-gray-50 mb-6">
              {locale === "fa" ? "معماری پروژه" : locale === "de" ? "Projektarchitektur" : "Project Architecture"}
            </h2>
            <div className="flex flex-col items-center gap-2">
              {project.architecture.map((step, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="rounded-lg border border-gray-700 bg-gray-900 px-6 py-3 text-sm font-medium text-gray-300 min-w-[200px] text-center">
                    {step}
                  </div>
                  {i < project.architecture!.length - 1 && (
                    <ArrowDown className="my-2 h-4 w-4 text-blue-500/50" />
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
