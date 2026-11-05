import type { Locale, Localized } from "@/lib/i18n";

export const contact = {
  email: "yasinfallahati@gmail.com",
  telegram: "https://t.me/yasinfallahatiiii",
  telegramHandle: "@yasinfallahatiiii",
  github: "https://github.com/yasinfallahati",
};

export const name: Localized = {
  fa: "یاسین فلاحتی",
  en: "Yasin Fallahati",
  de: "Yasin Fallahati",
};

export const role: Localized = {
  fa: "مهندس هوش مصنوعی و توسعه‌دهندهٔ پایتون",
  en: "AI engineer and Python developer",
  de: "KI-Ingenieur und Python-Entwickler",
};

interface Copy {
  comma: string;
  skipToContent: string;
  nav: { work: string; about: string; contact: string };
  languageLabel: string;
  hero: { title: string; body: string };
  dayLabel: string;
  project: {
    open: string;
    live: string;
    code: string;
    problem: string;
    flow: string;
    decisions: string;
    screens: string;
    stack: string;
    next: string;
    allWork: string;
  };
  more: { title: string; github: string };
  work: { title: string; intro: string; small: string };
  about: {
    title: string;
    intro: string[];
    workplaceLabel: string;
    workplace: string;
    locationLabel: string;
    location: string;
    principlesTitle: string;
    principles: { title: string; body: string }[];
    skillsTitle: string;
    certificatesTitle: string;
    certificateBy: string;
  };
  footer: { title: string; body: string; email: string; telegram: string; github: string };
  notFound: { title: string; body: string; back: string };
  meta: { title: string; description: string; workTitle: string; aboutTitle: string };
}

export const copy: Record<Locale, Copy> = {
  fa: {
    comma: "،",
    skipToContent: "رفتن به محتوا",
    nav: { work: "کارها", about: "درباره من", contact: "تماس" },
    languageLabel: "انتخاب زبان",
    hero: {
      title: "نرم‌افزاری می‌سازم که از صبح تا نیمه‌شب سر کار است.",
      body: "مهندس هوش مصنوعی و توسعه‌دهندهٔ پایتونم. برای مدرسه، میز تعمیر موبایل و تحریریهٔ خبر سیستم ساخته‌ام؛ جاهایی که نرم‌افزار باید هر روز بی‌دردسر کار کند.",
    },
    dayLabel: "یک روز با نرم‌افزارهای من",
    project: {
      open: "جزئیات پروژه",
      live: "دیدن سایت",
      code: "کد در گیت‌هاب",
      problem: "مسئله",
      flow: "مسیر کار",
      decisions: "تصمیم‌های مهم",
      screens: "تصویرها",
      stack: "ساخته‌شده با",
      next: "بعد از این",
      allWork: "همهٔ کارها",
    },
    more: { title: "کارهای کوچک‌تر", github: "همهٔ مخزن‌ها در گیت‌هاب" },
    work: {
      title: "کارها",
      intro: "چهار سیستم که هر کدام یک بخش از روز را جلو می‌برند، و چند پروژهٔ کوچک‌تر.",
      small: "کارهای کوچک‌تر",
    },
    about: {
      title: "درباره من",
      intro: [
        "یاسین فلاحتی هستم، مهندس هوش مصنوعی و توسعه‌دهندهٔ پایتون. بیشتر کارم ساختن سیستم‌هایی است که یک کار تکراری و واقعی را از دوش آدم‌ها برمی‌دارند: حضور و غیاب مدرسه، کارهای روزمرهٔ تعمیرگاه موبایل، یا تولید شبانهٔ خبر.",
        "نرم‌افزارهایم را اول برای کاربر فارسی‌زبان طراحی می‌کنم؛ با راست‌به‌چپ درست، تقویم شمسی و رقم فارسی، نه به‌عنوان یک ترجمهٔ بعدی.",
      ],
      workplaceLabel: "محل کار",
      workplace: "شرکت تجارت الکترونیک شایسته",
      locationLabel: "محل زندگی",
      location: "ایران",
      principlesTitle: "چطور کار می‌کنم",
      principles: [
        {
          title: "انسان، کار پرریسک را تأیید می‌کند",
          body: "در همیار مدرسه، Fixo و Voice Desk کاری که اشتباهش هزینه دارد پیش از اجرا تأیید می‌خواهد.",
        },
        {
          title: "داده تا جایی که می‌شود نزدیک می‌ماند",
          body: "Voice Desk گفتار و مدل را روی همان سیستم اجرا می‌کند و سرور Fixo فقط روی همان لپ‌تاپ در دسترس است.",
        },
        {
          title: "سیستم نشان می‌دهد چه کرده است",
          body: "دستور اجراشده در Fixo، وضعیت هر پیامک در همیار مدرسه و نتیجه و اسکرین‌شات در Voice Desk قابل دیدن است.",
        },
      ],
      skillsTitle: "ابزارها",
      certificatesTitle: "دوره‌ها",
      certificateBy: "مدرس:",
    },
    footer: {
      title: "کاری دارید که باید هر روز درست انجام شود؟",
      body: "برای همکاری، پروژه یا پرسش فنی برایم بنویسید.",
      email: "ایمیل",
      telegram: "تلگرام",
      github: "گیت‌هاب",
    },
    notFound: {
      title: "این صفحه پیدا نشد.",
      body: "ممکن است آدرس عوض شده باشد. کارها از صفحهٔ اصلی در دسترس‌اند.",
      back: "رفتن به صفحهٔ اصلی",
    },
    meta: {
      title: "یاسین فلاحتی، مهندس هوش مصنوعی و توسعه‌دهندهٔ پایتون",
      description:
        "سیستم‌هایی برای مدرسه، میز تعمیر موبایل و تحریریهٔ خبر؛ ساختهٔ یاسین فلاحتی، مهندس هوش مصنوعی و توسعه‌دهندهٔ پایتون.",
      workTitle: "کارها",
      aboutTitle: "درباره من",
    },
  },
  en: {
    comma: ",",
    skipToContent: "Skip to content",
    nav: { work: "Work", about: "About", contact: "Contact" },
    languageLabel: "Choose language",
    hero: {
      title: "I build software that's on the job from morning to midnight.",
      body: "I'm an AI engineer and Python developer. I've built systems for schools, phone-repair counters and a newsroom: places where software has to work every day without fuss.",
    },
    dayLabel: "A day with my software",
    project: {
      open: "Read the project",
      live: "Visit the site",
      code: "Code on GitHub",
      problem: "The problem",
      flow: "How the work flows",
      decisions: "Key decisions",
      screens: "Screens",
      stack: "Built with",
      next: "Next up",
      allWork: "All work",
    },
    more: { title: "Smaller projects", github: "All repositories on GitHub" },
    work: {
      title: "Work",
      intro: "Four systems that each carry part of the day, plus a few smaller projects.",
      small: "Smaller projects",
    },
    about: {
      title: "About",
      intro: [
        "I'm Yasin Fallahati, an AI engineer and Python developer. Most of my work is building systems that take a repetitive, real job off people's hands: school attendance, the routine at a phone-repair counter, or a nightly news edition.",
        "I design for Persian speakers first, with proper right-to-left layout, the Jalali calendar and Persian digits, rather than adding them as a later translation.",
      ],
      workplaceLabel: "Works at",
      workplace: "Shayesteh Iranian E-commerce Company",
      locationLabel: "Based in",
      location: "Iran",
      principlesTitle: "How I work",
      principles: [
        {
          title: "People approve what's risky",
          body: "In Hamyar Madrese, Fixo and Voice Desk, actions that are costly to get wrong ask for confirmation before they run.",
        },
        {
          title: "Data stays as close as it can",
          body: "Voice Desk runs speech and the model on the machine itself, and Fixo's server is reachable only from its own laptop.",
        },
        {
          title: "Systems show what they did",
          body: "Fixo shows the commands it ran, Hamyar Madrese logs every SMS, and Voice Desk sends back output and screenshots.",
        },
      ],
      skillsTitle: "Tools",
      certificatesTitle: "Courses",
      certificateBy: "Instructor:",
    },
    footer: {
      title: "Got a job that has to go right every day?",
      body: "Write to me about a collaboration, a project or a technical question.",
      email: "Email",
      telegram: "Telegram",
      github: "GitHub",
    },
    notFound: {
      title: "This page wasn't found.",
      body: "The address may have changed. All the work is on the home page.",
      back: "Go to the home page",
    },
    meta: {
      title: "Yasin Fallahati, AI engineer and Python developer",
      description:
        "Systems for schools, phone-repair counters and a newsroom, built by Yasin Fallahati, AI engineer and Python developer.",
      workTitle: "Work",
      aboutTitle: "About",
    },
  },
  de: {
    comma: ",",
    skipToContent: "Zum Inhalt springen",
    nav: { work: "Arbeiten", about: "Über mich", contact: "Kontakt" },
    languageLabel: "Sprache wählen",
    hero: {
      title: "Ich baue Software, die von morgens bis Mitternacht im Einsatz ist.",
      body: "Ich bin KI-Ingenieur und Python-Entwickler. Ich habe Systeme für Schulen, Handy-Reparaturtheken und eine Nachrichtenredaktion gebaut: Orte, an denen Software jeden Tag reibungslos laufen muss.",
    },
    dayLabel: "Ein Tag mit meiner Software",
    project: {
      open: "Zum Projekt",
      live: "Website ansehen",
      code: "Code auf GitHub",
      problem: "Das Problem",
      flow: "So läuft die Arbeit",
      decisions: "Wichtige Entscheidungen",
      screens: "Ansichten",
      stack: "Gebaut mit",
      next: "Als Nächstes",
      allWork: "Alle Arbeiten",
    },
    more: { title: "Kleinere Projekte", github: "Alle Repositories auf GitHub" },
    work: {
      title: "Arbeiten",
      intro: "Vier Systeme, die jeweils einen Teil des Tages tragen, dazu einige kleinere Projekte.",
      small: "Kleinere Projekte",
    },
    about: {
      title: "Über mich",
      intro: [
        "Ich bin Yasin Fallahati, KI-Ingenieur und Python-Entwickler. Meistens baue ich Systeme, die Menschen eine wiederkehrende, echte Aufgabe abnehmen: die Anwesenheit in der Schule, die Routine an der Reparaturtheke oder eine nächtliche Nachrichtenausgabe.",
        "Ich entwerfe zuerst für persischsprachige Nutzer, mit korrektem Rechts-nach-links-Layout, Jalali-Kalender und persischen Ziffern, statt das später nachzurüsten.",
      ],
      workplaceLabel: "Arbeitgeber",
      workplace: "Shayesteh Iranian E-Commerce Company",
      locationLabel: "Standort",
      location: "Iran",
      principlesTitle: "Wie ich arbeite",
      principles: [
        {
          title: "Menschen geben Riskantes frei",
          body: "In Hamyar Madrese, Fixo und Voice Desk brauchen Aktionen, bei denen ein Fehler teuer wäre, vorher eine Bestätigung.",
        },
        {
          title: "Daten bleiben möglichst nah",
          body: "Voice Desk führt Sprache und Modell auf dem Rechner selbst aus, und der Fixo-Server ist nur vom eigenen Laptop erreichbar.",
        },
        {
          title: "Systeme zeigen, was sie getan haben",
          body: "Fixo zeigt die ausgeführten Befehle, Hamyar Madrese protokolliert jede SMS, und Voice Desk schickt Ausgaben und Screenshots zurück.",
        },
      ],
      skillsTitle: "Werkzeuge",
      certificatesTitle: "Kurse",
      certificateBy: "Dozent:",
    },
    footer: {
      title: "Haben Sie eine Aufgabe, die jeden Tag sitzen muss?",
      body: "Schreiben Sie mir zu einer Zusammenarbeit, einem Projekt oder einer technischen Frage.",
      email: "E-Mail",
      telegram: "Telegram",
      github: "GitHub",
    },
    notFound: {
      title: "Diese Seite wurde nicht gefunden.",
      body: "Vielleicht hat sich die Adresse geändert. Alle Arbeiten finden Sie auf der Startseite.",
      back: "Zur Startseite",
    },
    meta: {
      title: "Yasin Fallahati, KI-Ingenieur und Python-Entwickler",
      description:
        "Systeme für Schulen, Handy-Reparaturtheken und eine Nachrichtenredaktion, gebaut von Yasin Fallahati, KI-Ingenieur und Python-Entwickler.",
      workTitle: "Arbeiten",
      aboutTitle: "Über mich",
    },
  },
};

export const skillGroups: { name: Localized; items: string[] }[] = [
  {
    name: { fa: "بک‌اند", en: "Backend", de: "Backend" },
    items: ["Python", "Django", "FastAPI", "Flask", "PostgreSQL", "Node.js", "REST API"],
  },
  {
    name: { fa: "هوش مصنوعی", en: "AI", de: "KI" },
    items: ["Ollama", "Faster-Whisper", "Vercel AI SDK", "MCP", "OpenCV", "NumPy", "Matplotlib"],
  },
  {
    name: { fa: "اتوماسیون", en: "Automation", de: "Automatisierung" },
    items: ["n8n", "Telegram Bot API", "Playwright", "adb", "ffmpeg", "Web scraping"],
  },
  {
    name: { fa: "فرانت‌اند", en: "Frontend", de: "Frontend" },
    items: ["TypeScript", "React", "Next.js", "Vite", "HTML", "CSS"],
  },
  {
    name: { fa: "زیرساخت", en: "Infrastructure", de: "Infrastruktur" },
    items: ["Linux", "Git", "Nginx", "Gunicorn", "Docker", "Vercel"],
  },
];

export const certificates: { name: Localized; issuer: string; instructor: string; year: string }[] = [
  {
    name: { fa: "مبانی داکر", en: "Docker Fundamentals", de: "Docker-Grundlagen" },
    issuer: "FaraDars",
    instructor: "Jadi Mirmirani",
    year: "2026",
  },
  {
    name: {
      fa: "مدیریت محصول هوش مصنوعی",
      en: "Artificial Intelligence Product Management",
      de: "KI-Produktmanagement",
    },
    issuer: "FaraDars",
    instructor: "Dr. Mostapha Kalami Heris",
    year: "2026",
  },
];
