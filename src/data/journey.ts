import { JourneyStep } from "@/types/common";

export const journeySteps: JourneyStep[] = [
  {
    id: "phase-1",
    phase: 1,
    title: {
      fa: "تسلط بر پایتون پیشرفته و فریمورک‌های وب",
      en: "Mastering Advanced Python & Web Frameworks",
      de: "Fortgeschrittenes Python & Web-Frameworks meistern",
    },
    description: {
      fa: "یادگیری مفاهیم پیشرفته پایتون، برنامه‌نویسی شی‌گرا، FastAPI و Flask",
      en: "Learning advanced Python concepts, OOP, FastAPI and Flask",
      de: "Fortgeschrittene Python-Konzepte, OOP, FastAPI und Flask lernen",
    },
    status: "in_progress",
    items: [
      {
        fa: "برنامه‌نویسی شی‌گرا",
        en: "Object-Oriented Programming",
        de: "Objektorientierte Programmierung",
      },
      {
        fa: "الگوهای پیشرفته FastAPI",
        en: "FastAPI Advanced Patterns",
        de: "Fortgeschrittene FastAPI-Muster",
      },
      {
        fa: "فلاسک و مایکروسرویس‌ها",
        en: "Flask & Microservices",
        de: "Flask & Microservices",
      },
      {
        fa: "Async/Await و همزمانی",
        en: "Async/Await & Concurrency",
        de: "Async/Await & Nebenläufigkeit",
      },
    ],
  },
  {
    id: "phase-2",
    phase: 2,
    title: {
      fa: "اتوماسیون آماده تولید",
      en: "Production-Ready Automation",
      de: "Produktionsreife Automatisierung",
    },
    description: {
      fa: "طراحی و پیاده‌سازی اتوماسیون‌های پیچیده با n8n و ادغام API",
      en: "Designing and implementing complex automations with n8n and API integration",
      de: "Entwurf und Implementierung komplexer Automatisierungen mit n8n und API-Integration",
    },
    status: "in_progress",
    items: [
      {
        fa: "گردش کار پیچیده n8n",
        en: "n8n Complex Workflows",
        de: "n8n komplexe Workflows",
      },
      {
        fa: "ادغام و اتوماسیون API",
        en: "API Integration & Automation",
        de: "API-Integration & Automatisierung",
      },
      {
        fa: "طراحی و بهینه‌سازی پایگاه داده",
        en: "Database Design & Optimization",
        de: "Datenbankdesign & Optimierung",
      },
      {
        fa: "استقرار و مبانی DevOps",
        en: "Deployment & DevOps Basics",
        de: "Bereitstellung & DevOps-Grundlagen",
      },
    ],
  },
  {
    id: "phase-3",
    phase: 3,
    title: {
      fa: "هوش مصنوعی و یادگیری ماشین",
      en: "AI & Machine Learning",
      de: "KI & Maschinelles Lernen",
    },
    description: {
      fa: "یادگیری مفاهیم هوش مصنوعی، یادگیری ماشین و پردازش زبان طبیعی",
      en: "Learning AI concepts, machine learning and natural language processing",
      de: "KI-Konzepte, maschinelles Lernen und Natural Language Processing lernen",
    },
    status: "planned",
    items: [
      {
        fa: "مبانی NumPy",
        en: "NumPy Fundamentals",
        de: "NumPy-Grundlagen",
      },
      {
        fa: "ت.visualize داده با Matplotlib",
        en: "Matplotlib Data Visualization",
        de: "Matplotlib Datenvisualisierung",
      },
      {
        fa: "مبانی یادگیری ماشین",
        en: "Fundamentals of ML",
        de: "Grundlagen des ML",
      },
      {
        fa: "NLP و ربات‌های پیشرفته",
        en: "NLP & Advanced Bots",
        de: "NLP & Erweiterte Bots",
      },
    ],
  },
  {
    id: "phase-4",
    phase: 4,
    title: {
      fa: "برتری فول‌استک",
      en: "Full-Stack Excellence",
      de: "Full-Stack-Exzellenz",
    },
    description: {
      fa: "تبدیل شدن به یک توسعه‌دهنده فول‌استک با مهارت‌های پیشرفته",
      en: "Becoming a full-stack developer with advanced skills",
      de: "Zu einem Full-Stack-Entwickler mit fortgeschrittenen Fähigkeiten werden",
    },
    status: "planned",
    items: [
      {
        fa: "الگوهای پیشرفته بک‌اند",
        en: "Advanced Backend Patterns",
        de: "Fortgeschrittene Backend-Muster",
      },
      {
        fa: "استقرار ابری (Docker, Kubernetes)",
        en: "Cloud Deployment (Docker, Kubernetes)",
        de: "Cloud-Bereitstellung (Docker, Kubernetes)",
      },
      {
        fa: "معماری سیستم و مقیاس‌پذیری",
        en: "System Architecture & Scaling",
        de: "Systemarchitektur & Skalierung",
      },
    ],
  },
];
