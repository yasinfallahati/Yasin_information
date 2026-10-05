"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ExternalLink } from "lucide-react";
import GithubIcon from "@/components/ui/GithubIcon";
import { Project, Locale } from "@/types/project";
import Badge from "@/components/ui/Badge";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const params = useParams();
  const locale = (params.locale as Locale) || "fa";
  const liveLabel = locale === "fa" ? "زنده" : "Live";

  return (
    <Link href={`/${locale}/projects/${project.slug}`} className="block h-full">
      <div className="group depth-card relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-panel p-6 transition-all duration-300">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/35 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-mute">
              {project.category}
            </span>
            {project.demo && (
              <span className="inline-flex items-center gap-1 rounded-full border border-accent/25 bg-accent/5 px-2 py-0.5 text-[10px] font-medium text-accent-strong">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {liveLabel}
              </span>
            )}
          </div>
          <div className="flex gap-1.5">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md p-1.5 text-mute transition-colors hover:bg-elevated hover:text-bright"
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
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        <h3 className="text-lg font-semibold tracking-tight text-bright transition-colors group-hover:text-accent-strong">
          {project.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-mute line-clamp-3">
          {project.description[locale]}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge>+{project.technologies.length - 4}</Badge>
          )}
        </div>
      </div>
    </Link>
  );
}
