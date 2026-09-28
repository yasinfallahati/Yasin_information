"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ExternalLink, ArrowRight, ArrowLeft } from "lucide-react";
import GithubIcon from "@/components/ui/GithubIcon";
import { Locale } from "@/types/project";
import { isRtl } from "@/lib/i18n";
import { getFeaturedProjects } from "@/data/projects";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";
import { useInView } from "@/hooks/useInView";

const sectionTitles: Record<Locale, { title: string; subtitle: string; viewAll: string }> = {
  fa: {
    title: "پروژه‌های منتخب",
    subtitle: "نمونه کارهای اخیر",
    viewAll: "همه پروژه‌ها",
  },
  en: {
    title: "Selected projects",
    subtitle: "Recent work",
    viewAll: "All projects",
  },
  de: {
    title: "Ausgewählte Projekte",
    subtitle: "Aktuelle Arbeiten",
    viewAll: "Alle Projekte",
  },
};

export default function FeaturedProjects() {
  const params = useParams();
  const locale = (params.locale as Locale) || "fa";
  const rtl = isRtl(locale);
  const { ref, isInView } = useInView(0.1);
  const reduce = useReducedMotion();
  const featured = getFeaturedProjects().slice(0, 3);
  const titles = sectionTitles[locale];

  return (
    <section className="relative overflow-hidden py-24" ref={ref}>
      <Container>
        <SectionTitle title={titles.title} subtitle={titles.subtitle} />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <motion.article
              key={project.slug}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group flex h-full flex-col border-t border-line pt-5"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-[0.14em] text-mute">
                  {project.category}
                </span>
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-mute transition-colors hover:text-bright"
                      aria-label={`${project.name} GitHub`}
                    >
                      <GithubIcon className="h-4 w-4" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-mute transition-colors hover:text-bright"
                      aria-label={`${project.name} demo`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

              <Link href={`/${locale}/projects/${project.slug}`} className="flex flex-1 flex-col">
                <h3 className="text-lg font-semibold text-bright transition-colors group-hover:text-accent-strong">
                  {project.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-mute line-clamp-2">
                  {project.description[locale]}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge>+{project.technologies.length - 3}</Badge>
                  )}
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href={`/${locale}/projects`}
            className="inline-flex items-center gap-2 text-sm font-medium text-soft transition-colors hover:text-bright"
          >
            {titles.viewAll}
            {rtl ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
          </Link>
        </div>
      </Container>
    </section>
  );
}
