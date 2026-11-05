import { smallProjects } from "@/content/projects";
import type { Locale } from "@/lib/i18n";

export default function SmallProjects({ locale }: { locale: Locale }) {
  return (
    <ul className="border-t border-rule">
      {smallProjects.map((project) => (
        <li key={project.name} className="border-b border-rule">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid gap-x-8 gap-y-1 py-5 lg:grid-cols-12 lg:items-baseline"
          >
            <span className="text-xl font-bold group-hover:underline group-hover:underline-offset-4 lg:col-span-3" dir="ltr">
              {project.name}
            </span>
            <span className="lg:col-span-6">{project.description[locale]}</span>
            <span className="text-sm text-muted lg:col-span-3 lg:text-end" dir="ltr">
              {project.stack}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
