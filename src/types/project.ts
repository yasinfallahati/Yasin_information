export interface LocalizedString {
  fa: string;
  en: string;
  de: string;
}

export type Locale = "fa" | "en" | "de";

export type ProjectCategory =
  | "ai"
  | "backend"
  | "automation"
  | "telegram"
  | "web"
  | "data"
  | "tools"
  | "game";

export interface Project {
  slug: string;
  name: string;
  description: LocalizedString;
  longDescription?: LocalizedString;
  category: ProjectCategory;
  technologies: string[];
  github?: string;
  demo?: string;
  featured: boolean;
  image?: string;
  stats?: {
    stars?: number;
    forks?: number;
  };
}
