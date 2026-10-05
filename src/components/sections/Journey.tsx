"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useParams } from "next/navigation";
import { CheckCircle, Clock, Circle } from "lucide-react";
import { Locale } from "@/types/project";
import { journeySteps } from "@/data/journey";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { useInView } from "@/hooks/useInView";

const sectionTitles: Record<Locale, { title: string; subtitle: string }> = {
  fa: { title: "مسیر یادگیری", subtitle: "نقشه راه توسعه حرفه‌ای" },
  en: { title: "Learning journey", subtitle: "Professional development roadmap" },
  de: { title: "Lernweg", subtitle: "Roadmap zur beruflichen Entwicklung" },
};

const statusLabels: Record<Locale, Record<string, string>> = {
  fa: { completed: "تکمیل شده", in_progress: "در حال انجام", planned: "برنامه‌ریزی شده" },
  en: { completed: "Completed", in_progress: "In progress", planned: "Planned" },
  de: { completed: "Abgeschlossen", in_progress: "In Bearbeitung", planned: "Geplant" },
};

const statusIcons = {
  completed: CheckCircle,
  in_progress: Clock,
  planned: Circle,
};

const statusColors = {
  completed: "text-accent-strong",
  in_progress: "text-violet-soft",
  planned: "text-mute",
};

export default function Journey() {
  const params = useParams();
  const locale = (params.locale as Locale) || "fa";
  const { ref, isInView } = useInView(0.1);
  const reduce = useReducedMotion();
  const titles = sectionTitles[locale];

  return (
    <section className="py-24 sm:py-28" ref={ref}>
      <Container>
        <SectionTitle title={titles.title} subtitle={titles.subtitle} />

        <div className="relative">
          <div className="absolute start-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-violet/30 to-transparent md:start-1/2" />

          <div className="space-y-10">
            {journeySteps.map((step, i) => {
              const StatusIcon = statusIcons[step.status];
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={step.id}
                  initial={reduce ? false : { opacity: 0, x: isEven ? -16 : 16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className={`relative flex flex-col gap-4 md:flex-row ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${isEven ? "md:text-end" : "md:text-start"}`}>
                    <div className="depth-card rounded-xl border border-line bg-panel p-6">
                      <div className="mb-3 flex items-center gap-2">
                        <StatusIcon className={`h-4 w-4 ${statusColors[step.status]}`} />
                        <span className={`text-xs font-medium ${statusColors[step.status]}`}>
                          {statusLabels[locale][step.status]}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-bright">{step.title[locale]}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-mute">
                        {step.description[locale]}
                      </p>
                      <ul className="mt-4 space-y-1.5">
                        {step.items.map((item, j) => (
                          <li key={j} className="flex items-center gap-2 text-sm text-mute">
                            <span className="h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                            {item[locale]}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="absolute start-4 flex h-8 w-8 -translate-x-1/2 items-center justify-center md:start-1/2">
                    <div
                      className={`h-2.5 w-2.5 rounded-full border-2 ${
                        step.status === "completed"
                          ? "border-accent bg-accent"
                          : step.status === "in_progress"
                            ? "border-violet bg-violet"
                            : "border-line bg-panel"
                      }`}
                    />
                  </div>

                  <div className="hidden flex-1 md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
