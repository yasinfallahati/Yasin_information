"use client";

import type { ComponentType } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useParams } from "next/navigation";
import { Locale } from "@/types/project";
import { skillGroups } from "@/data/skills";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { useInView } from "@/hooks/useInView";
import {
  PythonIcon,
  skillGroupIcons,
} from "@/components/icons/LanguageIcons";

const sectionTitles: Record<Locale, { title: string; subtitle: string }> = {
  fa: {
    title: "مهارت‌ها",
    subtitle: "زبان‌ها، فریم‌ورک‌ها و ابزارهای کاری",
  },
  en: {
    title: "Skills",
    subtitle: "Languages, frameworks, and working tools",
  },
  de: {
    title: "Fähigkeiten",
    subtitle: "Sprachen, Frameworks und Arbeitswerkzeuge",
  },
};

export default function Skills() {
  const params = useParams();
  const locale = (params.locale as Locale) || "fa";
  const { ref, isInView } = useInView(0.1);
  const reduce = useReducedMotion();
  const titles = sectionTitles[locale];

  return (
    <section className="relative overflow-hidden border-y border-line py-24" ref={ref}>
      <Container>
        <SectionTitle title={titles.title} subtitle={titles.subtitle} />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon =
              (skillGroupIcons[group.id as keyof typeof skillGroupIcons] as
                | ComponentType<{ size?: number; className?: string }>
                | undefined) || PythonIcon;
            return (
              <motion.div
                key={group.id}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="border border-line bg-panel p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-accent">
                    <Icon size={28} />
                  </span>
                  <h3 className="text-base font-semibold text-bright">{group.name[locale]}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center border border-line bg-ink px-2.5 py-1 text-xs font-medium text-soft"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
