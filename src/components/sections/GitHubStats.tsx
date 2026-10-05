"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useParams } from "next/navigation";
import { GitFork, Star, Users, Code2 } from "lucide-react";
import { Locale } from "@/types/project";
import { useGithub } from "@/hooks/useGithub";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import { useInView } from "@/hooks/useInView";

const sectionTitles: Record<Locale, { title: string; subtitle: string }> = {
  fa: { title: "گیت‌هاب", subtitle: "آمار مخازن و فعالیت واقعی" },
  en: { title: "GitHub", subtitle: "Live repository stats and activity" },
  de: { title: "GitHub", subtitle: "Live-Repository-Statistiken und Aktivität" },
};

const statLabels: Record<Locale, string[]> = {
  fa: ["مخزن", "ستاره", "دنبال‌کننده", "زبان"],
  en: ["Repos", "Stars", "Followers", "Languages"],
  de: ["Repos", "Sterne", "Follower", "Sprachen"],
};

export default function GitHubStats() {
  const params = useParams();
  const locale = (params.locale as Locale) || "fa";
  const { ref, isInView } = useInView(0.1);
  const reduce = useReducedMotion();
  const { stats, loading, error } = useGithub();
  const titles = sectionTitles[locale];

  const statIcons = [Code2, Star, Users, GitFork];
  const statValues = stats
    ? [stats.repos, stats.stars, stats.followers, Object.keys(stats.languages).length]
    : [0, 0, 0, 0];

  return (
    <section className="relative overflow-hidden py-24 sm:py-28" ref={ref}>
      <Container>
        <SectionTitle title={titles.title} subtitle={titles.subtitle} />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {statLabels[locale].map((label, i) => (
            <motion.div
              key={label}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <Card className="p-6 text-center">
                {(() => {
                  const Icon = statIcons[i];
                  return <Icon className="mx-auto mb-3 h-5 w-5 text-accent" />;
                })()}
                <div className="font-display text-2xl font-bold text-bright">
                  {loading ? "…" : error ? "—" : statValues[i]}
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.14em] text-mute">
                  {label}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {stats && Object.keys(stats.languages).length > 0 && (
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.35 }}
            className="mt-8"
          >
            <Card className="p-6">
              <h3 className="mb-4 text-sm font-semibold text-soft">
                {locale === "fa"
                  ? "توزیع زبان‌ها"
                  : locale === "de"
                    ? "Sprachverteilung"
                    : "Language distribution"}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {Object.entries(stats.languages)
                  .sort(([, a], [, b]) => b - a)
                  .map(([lang, count]) => (
                    <div
                      key={lang}
                      className="flex items-center gap-2 rounded-md border border-line bg-ink px-3 py-1.5 text-sm"
                    >
                      <span className="text-soft">{lang}</span>
                      <span className="text-xs text-mute">({count})</span>
                    </div>
                  ))}
              </div>
            </Card>
          </motion.div>
        )}
      </Container>
    </section>
  );
}
