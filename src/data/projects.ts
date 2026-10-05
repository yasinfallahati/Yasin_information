import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "nabz-farda",
    name: "Nabz Farda",
    description: {
      fa: "اخبار شبانهٔ فارسی هوش مصنوعی، تکنولوژی و گیم — سایت استاتیک + انتشار اینستاگرام و تلگرام",
      en: "Nightly Persian AI, tech & gaming news — static site with Instagram & Telegram publishing",
      de: "Nächtliche persische KI-, Tech- und Gaming-News — statische Seite mit Instagram- & Telegram-Publishing",
    },
    longDescription: {
      fa: "نبض فردا یک محصول خبری کاملاً خودکار است که هر شب مهم‌ترین اخبار هوش مصنوعی، تکنولوژی و بازی را از منابع معتبر جمع‌آوری، خلاصه و به فارسی منتشر می‌کند. خروجی شامل سایت استاتیک، فید RSS، و انتشار در اینستاگرام و تلگرام است.",
      en: "Nabz Farda is a fully automated news product that nightly collects, summarizes, and publishes the most important AI, tech, and gaming stories in Persian. Output includes a static site, RSS feed, and Instagram & Telegram publishing.",
      de: "Nabz Farda ist ein vollautomatisiertes Nachrichtenprodukt, das jede Nacht die wichtigsten KI-, Tech- und Gaming-Meldungen auf Persisch sammelt, zusammenfasst und veröffentlicht. Ausgabe umfasst eine statische Website, RSS-Feed sowie Instagram- und Telegram-Publishing.",
    },
    category: "automation",
    technologies: ["Python", "Next.js", "Static Export", "RSS", "Telegram API", "Instagram"],
    demo: "https://nabz-farda.vercel.app",
    featured: true,
    architecture: ["News ingest", "Summarization", "Static build", "Social publish"],
  },
  {
    slug: "nora",
    name: "NORA",
    description: {
      fa: "استودیوی هوش مصنوعی لوکال — چت و تولید تصویر روی سخت‌افزار خودتان (Ollama · ComfyUI)",
      en: "Private LAN AI studio — chat + image gen on your hardware (Ollama · ComfyUI)",
      de: "Privates LAN-KI-Studio — Chat + Bildgenerierung auf eigener Hardware (Ollama · ComfyUI)",
    },
    longDescription: {
      fa: "NORA یک استودیوی هوش مصنوعی خصوصی برای شبکهٔ محلی است. چت با مدل‌های Ollama و تولید تصویر با ComfyUI — بدون ارسال داده به کلود. مناسب برای حریم خصوصی و کار آفلاین.",
      en: "NORA is a private LAN AI studio. Chat with Ollama models and generate images via ComfyUI — no cloud data leaving your network. Built for privacy and offline work.",
      de: "NORA ist ein privates LAN-KI-Studio. Chat mit Ollama-Modellen und Bildgenerierung über ComfyUI — keine Cloud-Daten. Für Privatsphäre und Offline-Arbeit.",
    },
    category: "ai",
    technologies: ["Node.js", "Ollama", "ComfyUI", "OpenAI-compatible API", "Local AI"],
    github: "https://github.com/yasinfallahati/NORA",
    featured: true,
    architecture: ["LAN client", "Ollama runtime", "ComfyUI pipeline", "Privacy-first UI"],
  },
  {
    slug: "voice-desk",
    name: "Voice Desk",
    description: {
      fa: "کنترل دسکتاپ لینوکس با صدا از طریق تلگرام — Whisper و Ollama لوکال",
      en: "Command your Linux desktop by voice over Telegram — local Whisper + Ollama",
      de: "Linux-Desktop per Sprache über Telegram steuern — lokales Whisper + Ollama",
    },
    longDescription: {
      fa: "Voice Desk به شما اجازه می‌دهد دسکتاپ لینوکس را با پیام صوتی در تلگرام کنترل کنید. تشخیص گفتار با Whisper لوکال و استدلال با Ollama — بدون وابستگی به سرویس‌های ابری.",
      en: "Voice Desk lets you control a Linux desktop via Telegram voice messages. Local Whisper for speech recognition and Ollama for reasoning — no cloud dependency.",
      de: "Voice Desk steuert einen Linux-Desktop über Telegram-Sprachnachrichten. Lokales Whisper zur Spracherkennung und Ollama zum Reasoning — ohne Cloud-Abhängigkeit.",
    },
    category: "automation",
    technologies: ["Python", "Whisper", "Ollama", "Telegram Bot", "Linux"],
    github: "https://github.com/yasinfallahati/voice-desk",
    featured: true,
    architecture: ["Telegram voice", "Whisper STT", "Ollama intent", "Desktop actions"],
  },
  {
    slug: "chat-bot",
    name: "ChatBot AI",
    description: {
      fa: "رابط چت هوش مصنوعی با تنظیم API — اتصال به مدل دلخواه",
      en: "AI chat interface with configurable API — connect any model",
      de: "KI-Chat-Oberfläche mit konfigurierbarer API — beliebiges Modell anbinden",
    },
    longDescription: {
      fa: "یک رابط کاربری چت هوش مصنوعی با قابلیت تنظیم API. کاربران می‌توانند کلید API خود را در تنظیمات وارد کرده و از یک مدل هوش مصنوعی کامل استفاده کنند.",
      en: "An AI chat UI with configurable API settings. Enter your API key and use a complete AI model with conversation management.",
      de: "Eine KI-Chat-UI mit konfigurierbaren API-Einstellungen. API-Schlüssel eingeben und ein vollständiges Modell mit Conversationsverwaltung nutzen.",
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
      en: "Visual attendance system with Excel export",
      de: "Bildbasiertes Anwesenheitssystem mit Excel-Export",
    },
    longDescription: {
      fa: "سیستم حضور و غیاب مبتنی بر تصویر با شناسایی چهره و ثبت خودکار. خروجی در قالب اکسل — مناسب مدارس، شرکت‌ها و سازمان‌ها.",
      en: "Image-based attendance with face recognition and automatic recording. Excel export — suitable for schools, companies, and organizations.",
      de: "Bildbasierte Anwesenheit mit Gesichtserkennung und automatischer Registrierung. Excel-Export — für Schulen, Unternehmen und Organisationen.",
    },
    category: "ai",
    technologies: ["Python", "OpenCV", "Face Recognition", "Excel"],
    github: "https://github.com/yasinfallahati/Attendance-system",
    featured: false,
    architecture: ["Camera Input", "Face Detection", "Recognition Engine", "Excel Export"],
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
      fa: "دستیار هوش مصنوعی که با افزودن API به متخصص دواپس و سرور تبدیل می‌شود — مدیریت سرور، استقرار و عیب‌یابی.",
      en: "An AI assistant that becomes a DevOps specialist via API — server management, deployment, and troubleshooting.",
      de: "Ein KI-Assistent, der über API zum DevOps-Spezialisten wird — Serververwaltung, Deployment und Fehlerbehebung.",
    },
    category: "automation",
    technologies: ["HTML", "JavaScript", "AI API", "DevOps"],
    github: "https://github.com/yasinfallahati/devaps-bot-",
    featured: false,
    architecture: ["User Input", "AI Processing", "DevOps Commands", "Server Execution"],
  },
  {
    slug: "todo-dashboard",
    name: "Todo Dashboard",
    description: {
      fa: "داشبورد مدیریت کارهای روزانه",
      en: "Daily task management dashboard",
      de: "Tägliche Aufgabenverwaltung",
    },
    longDescription: {
      fa: "داشبورد مدرن برای ایجاد، ویرایش، حذف و پیگیری کارهای روزانه با رابط کاربری تمیز.",
      en: "Modern dashboard for creating, editing, deleting, and tracking daily tasks with a clean UI.",
      de: "Modernes Dashboard zum Erstellen, Bearbeiten, Löschen und Verfolgen täglicher Aufgaben.",
    },
    category: "web",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/yasinfallahati/todo",
    demo: "https://yasinfallahati.github.io/todo/",
    featured: false,
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
      fa: "دستیار ترمینالی با پایتون — اجرای دستورات، مدیریت فایل و اتوماسیون وظایف.",
      en: "Python terminal assistant — system commands, file management, and task automation.",
      de: "Python-Terminal-Assistent — Systembefehle, Dateiverwaltung und Aufgabenautomatisierung.",
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
      fa: "شبیه‌ساز بازی کوییز ایرانی",
      en: "Iranian quiz game simulator",
      de: "Iranischer Quizspiel-Simulator",
    },
    longDescription: {
      fa: "بازی کوییز تعاملی با سوالات متنوع، امتیازدهی و رابط کاربری جذاب.",
      en: "Interactive quiz with diverse questions, scoring, and an engaging UI.",
      de: "Interaktives Quiz mit vielfältigen Fragen, Punktesystem und ansprechender UI.",
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
      fa: "بازی سرعتی حافظه — اشیا را در کوتاه‌ترین زمان به خاطر بسپارید.",
      en: "Speed memory game — remember objects in the shortest time possible.",
      de: "Geschwindigkeits-Gedächtnisspiel — Objekte in kürzester Zeit merken.",
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
      fa: "ماشین حساب با پایتون",
      en: "Calculator built with Python",
      de: "Rechner mit Python",
    },
    longDescription: {
      fa: "ماشین حساب کامل با پشتیبانی از عملیات پایه و پیشرفته.",
      en: "Complete calculator supporting basic and advanced operations.",
      de: "Vollständiger Rechner mit grundlegenden und erweiterten Operationen.",
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
      en: "Queuing system for managing turns",
      de: "Warteschlangenverwaltungssystem",
    },
    longDescription: {
      fa: "سیستم نوبت‌دهی برای مدیریت صف‌ها — مناسب بانک‌ها، بیمارستان‌ها و مراکز خدماتی.",
      en: "Queuing system for managing turns — suitable for banks, hospitals, and service centers.",
      de: "Warteschlangensystem — geeignet für Banken, Krankenhäuser und Servicezentren.",
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
      fa: "وب‌سایت مسیر تبدیل شدن به برنامه‌نویس هوش مصنوعی",
      en: "Website guiding the path to becoming an AI developer",
      de: "Website zum Weg als KI-Entwickler",
    },
    longDescription: {
      fa: "سایت آموزشی با منابع، نقشه راه و توصیه‌های عملی برای مسیر هوش مصنوعی.",
      en: "Educational site with resources, roadmap, and practical advice for an AI career path.",
      de: "Bildungsseite mit Ressourcen, Fahrplan und praktischen Tipps für den KI-Karriereweg.",
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
