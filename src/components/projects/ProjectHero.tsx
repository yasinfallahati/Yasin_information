"use client";

import { useParams } from "next/navigation";
import { ExternalLink, ArrowLeft, ArrowRight } from "lucide-react";
import GithubIcon from "@/components/ui/GithubIcon";
import Link from "next/link";
import { Project, Locale } from "@/types/project";
import { isRtl } from "@/lib/i18n";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";

interface ProjectHeroProps {
  project: Project;
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  const params = useParams();
  const locale = (params.locale as Locale) || "fa";
  const rtl = isRtl(locale);

  return (
    <section className="pt-24 pb-12">
      <Container>
        <Link
          href={`/${locale}/projects`}
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-50 transition-colors mb-8"
        >
          {rtl ? <ArrowRight className="h-4 w-4" /> : <ArrowLeft className="h-4 w-4" />}
          {locale === "fa" ? "بازگشت به پروژه‌ها" : locale === "de" ? "Zurück zu Projekten" : "Back to Projects"}
        </Link>

        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-medium text-blue-500 uppercase tracking-wider">
            {project.category}
          </span>
          {project.featured && (
            <Badge variant="primary">
              {locale === "fa" ? "ویژه" : locale === "de" ? "Hervorgehoben" : "Featured"}
            </Badge>
          )}
        </div>

        <h1 className="text-4xl font-bold text-gray-50 sm:text-5xl">
          {project.name}
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-gray-400">
          {project.description[locale]}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="mt-8 flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-400 hover:shadow-blue-500/30"
            >
              <GithubIcon className="h-4 w-4" />
              {locale === "fa" ? "کد منبع" : locale === "de" ? "Quellcode" : "Source Code"}
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-700 px-6 py-3 text-sm font-medium text-gray-50 transition-all hover:bg-gray-800"
            >
              <ExternalLink className="h-4 w-4" />
              {locale === "fa" ? "نمایش زنده" : locale === "de" ? "Live-Demo" : "Live Demo"}
            </a>
          )}
        </div>
      </Container>
    </section>
  );
}
