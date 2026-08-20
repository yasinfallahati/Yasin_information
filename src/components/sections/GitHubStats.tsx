"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { GitFork, Star, Users, Code2 } from "lucide-react";
import { Locale } from "@/types/project";
import { useGithub } from "@/hooks/useGithub";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import { useInView } from "@/hooks/useInView";

const sectionTitles: Record<Locale, { title: string; subtitle: string }> = {
  fa: { title: "فعالیت گیت‌هاب", subtitle: "آمار و فعالیت من در گیت‌هاب" },
  en: { title: "GitHub Activity", subtitle: "My GitHub stats and activity" },
  de: { title: "GitHub-Aktivität", subtitle: "Meine GitHub-Statistiken und Aktivitäten" },
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
  const { stats, loading, error } = useGithub();
  const titles = sectionTitles[locale];

  const statIcons = [Code2, Star, Users, GitFork];
  const statValues = stats
    ? [stats.repos, stats.stars, stats.followers, Object.keys(stats.languages).length]
    : [0, 0, 0, 0];

  return (
    <section className="py-24 bg-gray-800/50" ref={ref}>
      <Container>
        <SectionTitle title={titles.title} subtitle={titles.subtitle} />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {statLabels[locale].map((label, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="p-6 text-center">
                {(() => {
                  const Icon = statIcons[i];
                  return <Icon className="mx-auto mb-3 h-5 w-5 text-blue-500" />;
                })()}
                <div className="text-2xl font-bold text-gray-50">
                  {loading ? "..." : error ? "--" : statValues[i]}
                </div>
                <div className="mt-1 text-xs text-gray-400 uppercase tracking-wider">{label}</div>
              </Card>
            </motion.div>
          ))}
        </div>

        {stats && Object.keys(stats.languages).length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8"
          >
            <Card className="p-6">
              <h3 className="mb-4 text-sm font-semibold text-gray-300">
                {locale === "fa" ? "توزیع زبان‌ها" : locale === "de" ? "Sprachverteilung" : "Language Distribution"}
              </h3>
              <div className="flex flex-wrap gap-3">
                {Object.entries(stats.languages)
                  .sort(([, a], [, b]) => b - a)
                  .map(([lang, count]) => (
                    <div
                      key={lang}
                      className="flex items-center gap-2 rounded-md bg-gray-900 border border-gray-700 px-3 py-1.5 text-sm"
                    >
                      <span className="text-gray-300">{lang}</span>
                      <span className="text-xs text-gray-500">({count})</span>
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
