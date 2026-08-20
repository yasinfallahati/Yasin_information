"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { Server, Brain, Zap, Layout, Wrench } from "lucide-react";
import { Locale } from "@/types/project";
import { skillGroups } from "@/data/skills";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import { useInView } from "@/hooks/useInView";

const iconMap: Record<string, React.ElementType> = {
  server: Server,
  brain: Brain,
  zap: Zap,
  layout: Layout,
  wrench: Wrench,
};

const sectionTitles: Record<Locale, { title: string; subtitle: string }> = {
  fa: { title: "مهارت‌های من", subtitle: "تکنولوژی‌ها و ابزارهایی که با آن‌ها کار می‌کنم" },
  en: { title: "My Skills", subtitle: "Technologies and tools I work with" },
  de: { title: "Meine Fähigkeiten", subtitle: "Technologien und Tools, mit denen ich arbeite" },
};

export default function Skills() {
  const params = useParams();
  const locale = (params.locale as Locale) || "fa";
  const { ref, isInView } = useInView(0.1);
  const titles = sectionTitles[locale];

  return (
    <section className="py-24 bg-gray-800/50" ref={ref}>
      <Container>
        <SectionTitle title={titles.title} subtitle={titles.subtitle} />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = iconMap[group.icon] || Server;
            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="p-6 h-full">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-lg bg-blue-500/10 p-2">
                      <Icon className="h-5 w-5 text-blue-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-50">
                      {group.name[locale]}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="inline-flex items-center rounded-md bg-gray-900 border border-gray-700 px-2.5 py-1 text-xs font-medium text-gray-300 transition-all hover:border-blue-500/30 hover:text-blue-400"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
