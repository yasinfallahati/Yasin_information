"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { Search } from "lucide-react";
import { Project, Locale } from "@/types/project";
import { isRtl } from "@/lib/i18n";
import ProjectCard from "./ProjectCard";

interface ProjectGridProps {
  projects: Project[];
}

const categoryLabels: Record<Locale, Record<string, string>> = {
  fa: {
    all: "همه",
    ai: "هوش مصنوعی",
    backend: "بک‌اند",
    automation: "اتوماسیون",
    web: "وب",
    game: "بازی",
    tools: "ابزارها",
    telegram: "تلگرام",
    data: "داده",
  },
  en: {
    all: "All",
    ai: "AI",
    backend: "Backend",
    automation: "Automation",
    web: "Web",
    game: "Game",
    tools: "Tools",
    telegram: "Telegram",
    data: "Data",
  },
  de: {
    all: "Alle",
    ai: "KI",
    backend: "Backend",
    automation: "Automatisierung",
    web: "Web",
    game: "Spiel",
    tools: "Tools",
    telegram: "Telegram",
    data: "Daten",
  },
};

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const params = useParams();
  const locale = (params.locale as Locale) || "fa";
  const rtl = isRtl(locale);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("all");

  const categories = ["all", ...new Set(projects.map((p) => p.category))];
  const labels = categoryLabels[locale];

  const filtered = projects.filter((p) => {
    const matchesSearch =
      search === "" ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description[locale].toLowerCase().includes(search.toLowerCase()) ||
      p.technologies.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    const matchesCategory = category === "all" || p.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative max-w-md flex-1">
          <Search
            className={`absolute top-1/2 h-4 w-4 -translate-y-1/2 text-mute ${rtl ? "right-3" : "left-3"}`}
          />
          <input
            type="text"
            placeholder={
              locale === "fa"
                ? "جستجوی پروژه..."
                : locale === "de"
                  ? "Projekte suchen..."
                  : "Search projects..."
            }
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`w-full rounded-lg border border-line bg-panel py-2.5 text-sm text-bright placeholder-mute outline-none transition-colors focus:border-accent/40 focus:ring-1 focus:ring-accent/20 ${rtl ? "pl-4 pr-10" : "pr-4 pl-10"}`}
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
                category === cat
                  ? "border border-accent/35 bg-accent/15 text-accent-strong"
                  : "border border-line bg-panel text-mute hover:border-line hover:text-soft"
              }`}
            >
              {labels[cat] || cat}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="py-12 text-center text-mute">
          {locale === "fa"
            ? "پروژه‌ای یافت نشد"
            : locale === "de"
              ? "Keine Projekte gefunden"
              : "No projects found"}
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
