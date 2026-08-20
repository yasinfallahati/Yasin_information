"use client";

import { motion } from "framer-motion";
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
  fa: { title: "پروژه‌های منتخب", subtitle: "نمونه‌کارهای برتر من", viewAll: "مشاهده همه پروژه‌ها" },
  en: { title: "Featured Projects", subtitle: "My highlighted work", viewAll: "View All Projects" },
  de: { title: "Ausgewählte Projekte", subtitle: "Meine Highlights", viewAll: "Alle Projekte ansehen" },
};

export default function FeaturedProjects() {
  const params = useParams();
  const locale = (params.locale as Locale) || "fa";
  const rtl = isRtl(locale);
  const { ref, isInView } = useInView(0.1);
  const featured = getFeaturedProjects().slice(0, 3);
  const titles = sectionTitles[locale];

  return (
    <section className="py-24" ref={ref}>
      <Container>
        <SectionTitle title={titles.title} subtitle={titles.subtitle} />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
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
                  <p className="mt-2 text-sm text-gray-400 line-clamp-2">
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
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href={`/${locale}/projects`}
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-500 transition-colors hover:text-blue-400"
          >
            {titles.viewAll}
            {rtl ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
          </Link>
        </div>
      </Container>
    </section>
  );
}
