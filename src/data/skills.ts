import { SkillGroup } from "@/types/common";

export const skillGroups: SkillGroup[] = [
  {
    id: "backend",
    name: {
      fa: "بک‌اند",
      en: "Backend",
      de: "Backend",
    },
    icon: "server",
    skills: [
      { name: "Python", level: "advanced" },
      { name: "FastAPI", level: "intermediate" },
      { name: "Flask", level: "intermediate" },
      { name: "REST API", level: "advanced" },
      { name: "Async/Await", level: "intermediate" },
    ],
  },
  {
    id: "ai-data",
    name: {
      fa: "هوش مصنوعی و داده",
      en: "AI & Data",
      de: "KI & Daten",
    },
    icon: "brain",
    skills: [
      { name: "NumPy", level: "intermediate" },
      { name: "Matplotlib", level: "intermediate" },
      { name: "Data Processing", level: "intermediate" },
      { name: "AI Integration", level: "intermediate" },
      { name: "Machine Learning", level: "beginner" },
    ],
  },
  {
    id: "automation",
    name: {
      fa: "اتوماسیون",
      en: "Automation",
      de: "Automatisierung",
    },
    icon: "zap",
    skills: [
      { name: "n8n", level: "intermediate" },
      { name: "Telegram Bots", level: "advanced" },
      { name: "Web Scraping", level: "intermediate" },
      { name: "Scripting", level: "advanced" },
      { name: "API Integration", level: "advanced" },
    ],
  },
  {
    id: "frontend",
    name: {
      fa: "فرانت‌اند",
      en: "Frontend",
      de: "Frontend",
    },
    icon: "layout",
    skills: [
      { name: "HTML5", level: "advanced" },
      { name: "CSS3", level: "intermediate" },
      { name: "Responsive Design", level: "intermediate" },
      { name: "JavaScript", level: "intermediate" },
    ],
  },
  {
    id: "tools",
    name: {
      fa: "ابزارها",
      en: "Tools",
      de: "Tools",
    },
    icon: "wrench",
    skills: [
      { name: "Git", level: "advanced" },
      { name: "GitHub", level: "advanced" },
      { name: "VS Code", level: "advanced" },
      { name: "Docker", level: "beginner" },
      { name: "Linux", level: "intermediate" },
    ],
  },
];
