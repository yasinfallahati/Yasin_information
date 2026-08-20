import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "chat-bot",
    name: "ChatBot AI",
    description: {
      fa: "یک صفحه چت با هوش مصنوعی که با قرار دادن API در تنظیمات به یک مدل کامل تبدیل می‌شود",
      en: "An AI chat interface that becomes a full model by adding API keys in settings",
      de: "Eine KI-Chat-Oberfläche, die durch Hinzufügen von API-Schlüsseln in den Einstellungen zu einem vollständigen Modell wird",
    },
    longDescription: {
      fa: "یک رابط کاربری چت هوش مصنوعی با قابلیت تنظیم API. کاربران می‌توانند کلید API خود را در تنظیمات وارد کرده و از یک مدل هوش مصنوعی کامل استفاده کنند. این پروژه شامل رابط کاربری مدرن، مدیریت مکالمه و پشتیبانی از مدل‌های مختلف است.",
      en: "An AI chat user interface with configurable API settings. Users can enter their API key in settings and use a complete AI model. Features include modern UI, conversation management, and support for multiple models.",
      de: "Eine KI-Chat-Benutzeroberfläche mit konfigurierbaren API-Einstellungen. Benutzer können ihren API-Schlüssel in den Einstellungen eingeben und ein vollständiges KI-Modell verwenden. Features umfassen moderne UI, Conversationsverwaltung und Unterstützung für mehrere Modelle.",
    },
    category: "ai",
    technologies: ["JavaScript", "HTML", "CSS", "OpenAI API"],
    github: "https://github.com/yasinfallahati/chat-bot",
    featured: true,
    architecture: ["Frontend UI", "API Layer", "OpenAI API", "Response Handler"],
  },
  {
    slug: "attendance-system",
    name: "Attendance System",
    description: {
      fa: "سیستم حضور و غیاب تصویری با خروجی اکسل",
      en: "Visual attendance system with Excel export functionality",
      de: "Bildbasiertes Anwesenheitssystem mit Excel-Exportfunktion",
    },
    longDescription: {
      fa: "یک سیستم حضور و غیاب مبتنی بر تصویر که قابلیت شناسایی چهره و ثبت خودکار حضور را دارد. خروجی سیستم در قالب فایل اکسل ارائه می‌شود. این سیستم برای مدارس، شرکت‌ها و سازمان‌ها مناسب است.",
      en: "An image-based attendance system with face recognition and automatic attendance recording. The system outputs data in Excel format. Suitable for schools, companies, and organizations.",
      de: "Ein bildbasiertes Anwesenheitssystem mit Gesichtserkennung und automatischer Anwesenheitsregistrierung. Das System gibt Daten im Excel-Format aus. Geeignet für Schulen, Unternehmen und Organisationen.",
    },
    category: "ai",
    technologies: ["Python", "OpenCV", "Face Recognition", "Excel"],
    github: "https://github.com/yasinfallahati/Attendance-system",
    featured: true,
    architecture: ["Camera Input", "Face Detection", "Recognition Engine", "Database", "Excel Export"],
  },
  {
    slug: "devaps-bot",
    name: "DevOps Bot",
    description: {
      fa: "دستیار هوش مصنوعی متخصص دواپس و سرور",
      en: "AI assistant specialized in DevOps and server management",
      de: "KI-Assistent spezialisiert auf DevOps und Serververwaltung",
    },
    longDescription: {
      fa: "یک دستیار هوش مصنوعی که با افزودن API هوش مصنوعی به یک متخصص دواپس و سرور تبدیل می‌شود. این ربات می‌تواند در مدیریت سرور، استقرار اپلیکیشن و عیب‌یابی کمک کند.",
      en: "An AI assistant that becomes a DevOps and server specialist by adding an AI API. This bot can help with server management, application deployment, and troubleshooting.",
      de: "Ein KI-Assistent, der durch Hinzufügen einer KI-API zu einem DevOps- und Server-Spezialisten wird. Dieser Bot kann bei der Serververwaltung, Anwendungsbereitstellung und Fehlerbehebung helfen.",
    },
    category: "automation",
    technologies: ["HTML", "JavaScript", "AI API", "DevOps"],
    github: "https://github.com/yasinfallahati/devaps-bot-",
    featured: true,
    architecture: ["User Input", "AI Processing", "DevOps Commands", "Server Execution"],
  },
  {
    slug: "todo-dashboard",
    name: "Todo Dashboard",
    description: {
      fa: "داشبورد مدیریت کارهای روزانه",
      en: "Daily task management dashboard",
      de: "Tägliche Aufgabenverwaltung Dashboard",
    },
    longDescription: {
      fa: "یک داشبورد مدرن برای مدیریت و سازماندهی کارهای روزانه. شامل قابلیت‌های ایجاد، ویرایش، حذف و پیگیری وضعیت کارها با رابط کاربری زیبا و کاربرپسند.",
      en: "A modern dashboard for managing and organizing daily tasks. Includes features for creating, editing, deleting, and tracking task status with a beautiful and user-friendly interface.",
      de: "Ein modernes Dashboard zur Verwaltung und Organisation täglicher Aufgaben. Enthält Funktionen zum Erstellen, Bearbeiten, Löschen und Verfolgen des Aufgabenstatus mit einer schönen und benutzerfreundlichen Oberfläche.",
    },
    category: "web",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/yasinfallahati/todo",
    demo: "https://yasinfallahati.github.io/todo/",
    featured: true,
  },
  {
    slug: "jarvis",
    name: "Jarvis",
    description: {
      fa: "دستیار هوشمند مبتنی بر ترمینال",
      en: "Terminal-based intelligent assistant",
      de: "Terminalbasierter intelligenter Assistent",
    },
    longDescription: {
      fa: "یک دستیار هوشمند مبتنی بر ترمینال که با استفاده از پایتون ساخته شده است. این ابزار قابلیت‌های مختلفی از جمله اجرای دستورات سیستم، مدیریت فایل‌ها و اتوماسیون وظایف را ارائه می‌دهد.",
      en: "A terminal-based intelligent assistant built with Python. This tool provides various capabilities including system command execution, file management, and task automation.",
      de: "Ein terminalbasierter intelligenter Assistent, der mit Python erstellt wurde. Dieses Tool bietet verschiedene Funktionen wie Systembefehlausführung, Dateiverwaltung und Aufgabenautomatisierung.",
    },
    category: "automation",
    technologies: ["Python", "Shell", "Automation"],
    github: "https://github.com/yasinfallahati/jarvis",
    featured: false,
  },
  {
    slug: "quiz-game",
    name: "Quiz Game",
    description: {
      fa: "شبیه‌ساز از بازی کوییز گیم ایرانی",
      en: "Iranian quiz game simulator",
      de: "Iranisches Quizspiel-Simulator",
    },
    longDescription: {
      fa: "یک بازی کوییز تعاملی الهام گرفته از بازی‌های محبوب ایرانی. شامل سوالات متنوع، سیستم امتیازدهی و رابط کاربری جذاب.",
      en: "An interactive quiz game inspired by popular Iranian games. Features diverse questions, scoring system, and attractive user interface.",
      de: "Ein interaktives Quizspiel inspiriert von beliebten iranischen Spielen. Mit vielfältigen Fragen, Punktesystem und ansprechender Benutzeroberfläche.",
    },
    category: "game",
    technologies: ["Python", "Game Development"],
    github: "https://github.com/yasinfallahati/Quiz_game",
    featured: false,
  },
  {
    slug: "clickhunt",
    name: "ClickHunt",
    description: {
      fa: "یک کلیک، یک روح، یک ثانیه برای به خاطر سپردن",
      en: "One click. One ghost. One second to remember it.",
      de: "Ein Klick. Ein Geist. Eine Sekunde, um es zu merken.",
    },
    longDescription: {
      fa: "یک بازی سرعتی و هیجان‌انگیز که در آن باید در کوتاه‌ترین زمان ممکن اشیا را به خاطر بسپارید. این بازی مهارت‌های حافظه و سرعت عمل را به چالش می‌کشد.",
      en: "An exciting speed game where you must remember objects in the shortest time possible. This game challenges memory and quick action skills.",
      de: "Ein aufregendes Geschicklichkeitsspiel, bei dem Sie Objekte in kürzester Zeit merken müssen. Dieses Spiel fordert Gedächtnis und Schnelligkeit heraus.",
    },
    category: "game",
    technologies: ["Python", "Game Development"],
    github: "https://github.com/yasinfallahati/ClickHunt",
    featured: false,
  },
  {
    slug: "calculator",
    name: "Calculator",
    description: {
      fa: "ماشین حساب با زبان پایتون",
      en: "Calculator with Python language",
      de: "Rechner mit Python-Sprache",
    },
    longDescription: {
      fa: "یک ماشین حساب کامل ساخته شده با پایتون که از عملیات ریاضی پایه و پیشرفته پشتیبانی می‌کند.",
      en: "A complete calculator built with Python that supports basic and advanced mathematical operations.",
      de: "Ein vollständiger Rechner, der mit Python erstellt wurde und grundlegende und erweiterte mathematische Operationen unterstützt.",
    },
    category: "tools",
    technologies: ["Python"],
    github: "https://github.com/yasinfallahati/Calculator",
    featured: false,
  },
  {
    slug: "queuing-system",
    name: "Queuing System",
    description: {
      fa: "سیستم نوبت‌دهی",
      en: "Queuing system for managing queues",
      de: "Warteschlangenverwaltungssystem",
    },
    longDescription: {
      fa: "یک سیستم نوبت‌دهی هوشمند برای مدیریت صف‌ها و نوبت‌ها. مناسب برای بانک‌ها، بیمارستان‌ها و مراکز خدماتی.",
      en: "An intelligent queuing system for managing queues and turns. Suitable for banks, hospitals, and service centers.",
      de: "Ein intelligentes Warteschlangensystem zur Verwaltung von Warteschlangen und Reihenfolgen. Geeignet für Banken, Krankenhäuser und Servicezentren.",
    },
    category: "backend",
    technologies: ["Python"],
    github: "https://github.com/yasinfallahati/Queuing-system",
    featured: false,
  },
  {
    slug: "ai-developer-path",
    name: "AI Developer Path",
    description: {
      fa: "وب سایت مسیر تبدیل شدن به برنامه‌نویس هوش مصنوعی",
      en: "Website showing the path to becoming an AI programmer",
      de: "Website, die den Weg zum KI-Programmierer zeigt",
    },
    longDescription: {
      fa: "یک وب سایت آموزشی که مسیر تبدیل شدن به یک برنامه‌نویس هوش مصنوعی را نشان می‌دهد. شامل منابع آموزشی، نقشه راه و توصیه‌های عملی.",
      en: "An educational website showing the path to becoming an AI programmer. Includes learning resources, roadmap, and practical advice.",
      de: "Eine Bildungswebsite, die den Weg zum KI-Programmierer zeigt. Enthält Lernressourcen, Fahrplan und praktische Ratschläge.",
    },
    category: "web",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/yasinfallahati/AI-developeer",
    featured: false,
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: string): Project[] {
  return projects.filter((p) => p.category === category);
}

export function getAllCategories(): string[] {
  return [...new Set(projects.map((p) => p.category))];
}
