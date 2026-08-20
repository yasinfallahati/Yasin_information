import { Locale } from "./project";

export type LocalizedString = Record<Locale, string>;

export interface NavItem {
  id: string;
  label: LocalizedString;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Certificate {
  id: string;
  name: LocalizedString;
  issuer: string;
  instructor?: string;
  date: string;
  image?: string;
  url?: string;
}

export interface JourneyStep {
  id: string;
  phase: number;
  title: LocalizedString;
  description: LocalizedString;
  status: "completed" | "in_progress" | "planned";
  items: LocalizedString[];
}

export interface SkillGroup {
  id: string;
  name: LocalizedString;
  icon: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level?: "beginner" | "intermediate" | "advanced" | "expert";
  icon?: string;
}
