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

  return (
    <Link href={`/${locale}/projects/${project.slug}`} className="block h-full">
      <div className="group relative h-full rounded-xl border border-gray-700 bg-gray-800 p-6 transition-all duration-300 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-xs font-medium text-blue-500 uppercase tracking-wider">
            {project.category}
          </span>
          <div className="flex gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 transition-colors hover:text-blue-400"
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
                className="text-gray-500 transition-colors hover:text-blue-400"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        <h3 className="text-lg font-semibold text-gray-50 group-hover:text-blue-400 transition-colors">
          {project.name}
        </h3>
        <p className="mt-2 text-sm text-gray-400 line-clamp-3">
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
