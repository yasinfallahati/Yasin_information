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

const sectionTitles: Record<Locale, { title: string; subtitle: string; viewAll: string; live: string }> = {
  fa: {
    title: "پروژه‌های منتخب",
    subtitle: "محصولات واقعی — اتوماسیون، هوش مصنوعی لوکال، وب",
    viewAll: "همه پروژه‌ها",
    live: "زنده",
  },
  en: {
    title: "Selected work",
    subtitle: "Real products — automation, local-first AI, web",
    viewAll: "All projects",
    live: "Live",
  },
  de: {
    title: "Ausgewählte Arbeiten",
    subtitle: "Echte Produkte — Automatisierung, Local-first-KI, Web",
    viewAll: "Alle Projekte",
    live: "Live",
  },
};

export default function FeaturedProjects() {
  const params = useParams();
  const locale = (params.locale as Locale) || "fa";
  const rtl = isRtl(locale);
  const { ref, isInView } = useInView(0.1);
  const reduce = useReducedMotion();
  const featured = getFeaturedProjects().slice(0, 4);
  const titles = sectionTitles[locale];

  return (
    <section className="relative overflow-hidden py-24 sm:py-28" ref={ref}>
      <Container>
        <SectionTitle title={titles.title} subtitle={titles.subtitle} />

        <div className="grid gap-5 md:grid-cols-2">
          {featured.map((project, i) => (
            <motion.article
              key={project.slug}
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group depth-card relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-panel p-6 sm:p-7"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-mute">
                    {project.category}
                  </span>
                  {project.demo && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-accent/25 bg-accent/5 px-2 py-0.5 text-[10px] font-medium text-accent-strong">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                      {titles.live}
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-md p-1.5 text-mute transition-colors hover:bg-elevated hover:text-bright"
                      aria-label={`${project.name} GitHub`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <GithubIcon className="h-4 w-4" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-md p-1.5 text-mute transition-colors hover:bg-elevated hover:text-accent"
                      aria-label={`${project.name} demo`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

              <Link href={`/${locale}/projects/${project.slug}`} className="flex flex-1 flex-col">
                <h3 className="text-xl font-semibold tracking-tight text-bright transition-colors group-hover:text-accent-strong">
                  {project.name}
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-mute line-clamp-3">
                  {project.description[locale]}
                </p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge>+{project.technologies.length - 4}</Badge>
                  )}
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href={`/${locale}/projects`}
            className="inline-flex items-center gap-2 text-sm font-medium text-soft transition-colors hover:text-accent-strong"
          >
            {titles.viewAll}
            {rtl ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
          </Link>
        </div>
      </Container>
    </section>
  );
}
