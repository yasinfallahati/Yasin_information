import Link from "next/link";
import ProjectFigure from "@/components/ProjectFigure";
import SmallProjects from "@/components/SmallProjects";
import { projects } from "@/content/projects";
import { contact, copy } from "@/content/site";
import { resolveLocale } from "@/lib/i18n";

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const locale = resolveLocale((await params).locale);
  const t = copy[locale];

  return (
    <>
      <section className="hero">
        <div className="wrap flex flex-1 flex-col justify-center gap-8 py-10 lg:py-14">
          <h1 className="display display-xl max-w-[17ch]">{t.hero.title}</h1>
          <p className="measure text-lg text-muted lg:text-xl">{t.hero.body}</p>
        </div>

        <nav aria-label={t.dayLabel}>
          <p className="wrap pb-3 text-sm text-muted">{t.dayLabel}</p>
          <ol className="day-strip">
            {projects.map((project, order) => (
              <li key={project.slug} className="contents">
                <a
                  href={`#${project.slug}`}
                  className={`day-cell phase-${project.phase}`}
                  style={{ "--order": order } as React.CSSProperties}
                >
                  <span className="text-sm">{project.scene[locale]}</span>
                  <span>
                    <span className="block text-2xl leading-tight font-extrabold lg:text-4xl">
                      {project.name[locale]}
                    </span>
                    <span className="mt-1 block text-sm">{project.tagline[locale]}</span>
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </section>

      {projects.map((project, index) => (
        <section
          key={project.slug}
          id={project.slug}
          className={`band phase-${project.phase} ${index % 2 ? "band-flip" : ""}`}
        >
          <div className="wrap py-16 lg:py-28">
            <p className="text-lg font-semibold lg:text-xl">{project.scene[locale]}</p>
            <h2 className="display display-lg mt-2">{project.name[locale]}</h2>

            <div className="mt-10 grid items-start gap-x-16 gap-y-12 lg:mt-14 lg:grid-cols-12">
              <div className={`lg:col-span-5 ${index % 2 ? "lg:order-2" : ""}`}>
                <p className="text-lg lg:text-xl">{project.lead[locale]}</p>

                <ul className="mt-8">
                  {project.facts.map((fact) => (
                    <li key={fact.en} className="band-rule band-soft border-t py-3">
                      {fact[locale]}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <Link href={`/${locale}/projects/${project.slug}`} className="action-primary">
                    {t.project.open}
                  </Link>
                  {project.live ? (
                    <a className="text-link" href={project.live} target="_blank" rel="noopener noreferrer">
                      {t.project.live}
                    </a>
                  ) : (
                    <a className="text-link" href={project.code} target="_blank" rel="noopener noreferrer">
                      {t.project.code}
                    </a>
                  )}
                </div>
              </div>

              <div className={`lg:col-span-7 ${index % 2 ? "lg:order-1" : ""}`}>
                <ProjectFigure project={project} locale={locale} />
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="wrap py-16 lg:py-24">
        <h2 className="display display-md">{t.more.title}</h2>
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
