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
    <section className="pb-12 pt-24">
      <Container>
        <Link
          href={`/${locale}/projects`}
          className="mb-8 inline-flex items-center gap-2 text-sm text-mute transition-colors hover:text-bright"
        >
          {rtl ? <ArrowRight className="h-4 w-4" /> : <ArrowLeft className="h-4 w-4" />}
          {locale === "fa"
            ? "بازگشت به پروژه‌ها"
            : locale === "de"
              ? "Zurück zu Projekten"
              : "Back to projects"}
        </Link>

        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-mute">
            {project.category}
          </span>
          {project.featured && (
            <Badge variant="primary">
              {locale === "fa" ? "ویژه" : locale === "de" ? "Hervorgehoben" : "Featured"}
            </Badge>
          )}
          {project.demo && (
            <span className="inline-flex items-center gap-1 rounded-full border border-accent/25 bg-accent/5 px-2 py-0.5 text-[10px] font-medium text-accent-strong">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {locale === "fa" ? "زنده" : "Live"}
            </span>
          )}
        </div>

        <h1 className="font-display text-4xl font-bold tracking-tight text-bright sm:text-5xl">
          {project.name}
        </h1>

        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-soft">
          {project.description[locale]}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <ExternalLink className="h-4 w-4" />
              {locale === "fa" ? "نمایش زنده" : locale === "de" ? "Live-Demo" : "Live demo"}
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost border border-line"
            >
              <GithubIcon className="h-4 w-4" />
              {locale === "fa" ? "کد منبع" : locale === "de" ? "Quellcode" : "Source code"}
            </a>
          )}
        </div>
      </Container>
    </section>
  );
}
