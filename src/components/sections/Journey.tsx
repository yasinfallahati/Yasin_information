"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { CheckCircle, Clock, Circle } from "lucide-react";
import { Locale } from "@/types/project";
import { journeySteps } from "@/data/journey";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { useInView } from "@/hooks/useInView";

const sectionTitles: Record<Locale, { title: string; subtitle: string }> = {
  fa: { title: "مسیر یادگیری", subtitle: "نقشه راه توسعه حرفه‌ای من" },
  en: { title: "Learning Journey", subtitle: "My professional development roadmap" },
  de: { title: "Lernweg", subtitle: "Meine Roadmap zur beruflichen Entwicklung" },
};

const statusLabels: Record<Locale, Record<string, string>> = {
  fa: { completed: "تکمیل شده", in_progress: "در حال انجام", planned: "برنامه‌ریزی شده" },
  en: { completed: "Completed", in_progress: "In Progress", planned: "Planned" },
  de: { completed: "Abgeschlossen", in_progress: "In Bearbeitung", planned: "Geplant" },
};

const statusIcons = {
  completed: CheckCircle,
  in_progress: Clock,
  planned: Circle,
};

const statusColors = {
  completed: "text-emerald-400",
  in_progress: "text-blue-500",
  planned: "text-gray-500",
};

export default function Journey() {
  const params = useParams();
  const locale = (params.locale as Locale) || "fa";
  const { ref, isInView } = useInView(0.1);
  const titles = sectionTitles[locale];

  return (
    <section className="py-24" ref={ref}>
      <Container>
        <SectionTitle title={titles.title} subtitle={titles.subtitle} />

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-gray-700 to-gray-800 md:left-1/2" />

          <div className="space-y-12">
            {journeySteps.map((step, i) => {
              const StatusIcon = statusIcons[step.status];
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className={`relative flex flex-col gap-4 md:flex-row ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="rounded-xl border border-gray-700 bg-gray-800 p-6">
                      <div className="mb-3 flex items-center gap-2">
                        <StatusIcon className={`h-4 w-4 ${statusColors[step.status]}`} />
                        <span className={`text-xs font-medium ${statusColors[step.status]}`}>
                          {statusLabels[locale][step.status]}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-50">
                        {step.title[locale]}
                      </h3>
                      <p className="mt-2 text-sm text-gray-400">
                        {step.description[locale]}
                      </p>
                      <ul className="mt-4 space-y-1.5">
                        {step.items.map((item, j) => (
                          <li key={j} className="flex items-center gap-2 text-sm text-gray-400">
                            <span className="h-1 w-1 rounded-full bg-gray-600" />
                            {item[locale]}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="absolute left-4 md:left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center">
                    <div className={`h-3 w-3 rounded-full border-2 ${
                      step.status === "completed"
                        ? "border-emerald-400 bg-emerald-400"
                        : step.status === "in_progress"
                        ? "border-blue-500 bg-blue-500 animate-pulse"
                        : "border-gray-600 bg-gray-700"
                    }`} />
                  </div>

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
