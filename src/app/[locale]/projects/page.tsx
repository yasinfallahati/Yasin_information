import type { Metadata } from "next";
import Link from "next/link";
import SmallProjects from "@/components/SmallProjects";
import { projects } from "@/content/projects";
import { contact, copy } from "@/content/site";
import { languageAlternates, resolveLocale } from "@/lib/i18n";

export async function generateMetadata({ params }: PageProps<"/[locale]/projects">): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  return {
    title: copy[locale].meta.workTitle,
    alternates: { canonical: `/${locale}/projects`, languages: languageAlternates("/projects") },
  };
}

export default async function WorkPage({ params }: PageProps<"/[locale]/projects">) {
  const locale = resolveLocale((await params).locale);
  const t = copy[locale];

  return (
    <>
      <div className="wrap pt-10 pb-12 lg:pt-16 lg:pb-16">
        <h1 className="display display-lg">{t.work.title}</h1>
        <p className="measure mt-6 text-lg text-muted lg:text-xl">{t.work.intro}</p>
      </div>

      <ul>
        {projects.map((project) => (
          <li key={project.slug}>
            <Link
              href={`/${locale}/projects/${project.slug}`}
              className={`band group block phase-${project.phase}`}
            >
              <span className="wrap grid gap-x-8 gap-y-2 py-8 lg:grid-cols-12 lg:items-baseline lg:py-12">
                <span className="lg:col-span-3">{project.scene[locale]}</span>
                <span className="display display-md group-hover:underline group-hover:underline-offset-8 lg:col-span-4">
                  {project.name[locale]}
                </span>
                <span className="band-soft lg:col-span-5">{project.tagline[locale]}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <section className="wrap py-16 lg:py-24">
        <h2 className="display display-md">{t.work.small}</h2>
        <div className="mt-8">
          <SmallProjects locale={locale} />
        </div>
        <p className="mt-8">
          <a className="text-link" href={contact.github} target="_blank" rel="noopener noreferrer">
            {t.more.github}
          </a>
        </p>
      </section>
    </>
  );
}
