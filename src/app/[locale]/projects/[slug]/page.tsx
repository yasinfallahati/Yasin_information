import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectFigure from "@/components/ProjectFigure";
import { getProject, nextProject, projects } from "@/content/projects";
import { copy } from "@/content/site";
import { languageAlternates, resolveLocale } from "@/lib/i18n";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/projects/[slug]">): Promise<Metadata> {
  const { locale: value, slug } = await params;
  const locale = resolveLocale(value);
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.name[locale],
    description: project.lead[locale],
    alternates: {
      canonical: `/${locale}/projects/${slug}`,
      languages: languageAlternates(`/projects/${slug}`),
    },
  };
}

export default async function ProjectPage({ params }: PageProps<"/[locale]/projects/[slug]">) {
  const { locale: value, slug } = await params;
  const locale = resolveLocale(value);
  const project = getProject(slug);
  if (!project) notFound();

  const t = copy[locale].project;
  const next = nextProject(slug);
  const moreShots = project.shots.slice(1);

  return (
    <article className={`phase-${project.phase}`}>
      <header className="band">
        <div className="wrap pt-12 pb-14 lg:pt-20 lg:pb-20">
          <p className="text-lg font-semibold lg:text-xl">{project.scene[locale]}</p>
          <h1 className="display display-xl mt-2">{project.name[locale]}</h1>

          <div className="mt-10 grid items-start gap-x-16 gap-y-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-lg lg:text-xl">{project.lead[locale]}</p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                {project.live && (
                  <a className="action-primary" href={project.live} target="_blank" rel="noopener noreferrer">
                    {t.live}
                  </a>
                )}
                <a
                  className={project.live ? "text-link" : "action-primary"}
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.code}
                </a>
              </div>
            </div>
            <div className="lg:col-span-7">
              <ProjectFigure project={project} locale={locale} priority />
            </div>
          </div>
        </div>
      </header>

      <div className="wrap py-16 lg:py-24">
        <section className="grid gap-x-16 gap-y-4 lg:grid-cols-12">
          <h2 className="display display-md lg:col-span-4">{t.problem}</h2>
          <p className="measure text-lg lg:col-span-8 lg:text-xl">{project.problem[locale]}</p>
        </section>

        <section className="mt-16 lg:mt-24">
          <h2 className="display display-md">{t.flow}</h2>
          <ol className="flow mt-10">
            {project.flow.map((step) => (
              <li key={step.en} className="font-semibold">
                {step[locale]}
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-16 lg:mt-24">
          <h2 className="display display-md">{t.decisions}</h2>
          <div className="mt-10 grid gap-10 lg:grid-cols-3 lg:gap-12">
            {project.decisions.map((decision) => (
              <div key={decision.title.en} className="border-t-2 border-ink pt-4">
                <h3 className="text-xl font-bold">{decision.title[locale]}</h3>
                <p className="mt-3 text-muted">{decision.body[locale]}</p>
              </div>
            ))}
          </div>
        </section>

        {moreShots.length > 0 && (
          <section className="mt-16 lg:mt-24">
            <h2 className="display display-md">{t.screens}</h2>
            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              {moreShots.map((shot) => (
                <Image
                  key={shot.src}
                  src={shot.src}
                  width={shot.width}
                  height={shot.height}
                  alt={shot.alt[locale]}
                  sizes="(min-width: 64rem) 45vw, 100vw"
                  className="h-auto w-full border border-rule"
                />
              ))}
            </div>
          </section>
        )}

        <section className="mt-16 grid gap-x-16 gap-y-3 lg:mt-24 lg:grid-cols-12">
          <h2 className="display display-md lg:col-span-4">{t.stack}</h2>
          <p className="text-lg lg:col-span-8 lg:text-xl" dir="ltr">
            <span className={locale === "fa" ? "block text-right" : ""}>{project.stack.join(", ")}</span>
          </p>
        </section>
      </div>

      <Link href={`/${locale}/projects/${next.slug}`} className={`band group block phase-${next.phase}`}>
        <span className="wrap block py-14 lg:py-20">
          <span className="block text-lg">
            {t.next}: {next.scene[locale]}
          </span>
          <span className="display display-lg mt-2 block group-hover:underline group-hover:underline-offset-8">
            {next.name[locale]}
          </span>
        </span>
      </Link>
    </article>
  );
}
