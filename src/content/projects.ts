import type { Localized } from "@/lib/i18n";

export type Phase = "morning" | "afternoon" | "evening" | "midnight";

export interface Shot {
  src: string;
  width: number;
  height: number;
  alt: Localized;
}

export interface Project {
  slug: string;
  phase: Phase;
  name: Localized;
  /** Where this software sits in the day. */
  scene: Localized;
  /** Short phrase for the day strip in the hero. */
  tagline: Localized;
  lead: Localized;
  problem: Localized;
  facts: Localized[];
  /** The real sequence the software runs through, in order. */
  flow: Localized[];
  decisions: { title: Localized; body: Localized }[];
  stack: string[];
  code: string;
  live?: string;
  shots: Shot[];
  phoneShot?: Shot;
  /** Lead with a drawn conversation when there is no product screen to show. */
  conversation?: boolean;
}

export const projects: Project[] = [
  {
    slug: "hamyar-madrese",
    phase: "morning",
    name: { fa: "همیار مدرسه", en: "Hamyar Madrese", de: "Hamyar Madrese" },
    scene: {
      fa: "صبح، در مدرسه",
      en: "Morning, at school",
      de: "Morgens in der Schule",
    },
    tagline: {
      fa: "حضور و غیاب و پیامک اولیا",
      en: "Attendance and parent SMS",
      de: "Anwesenheit und SMS an Eltern",
    },
    lead: {
      fa: "معاون مدرسه غیبت و تأخیر را ثبت می‌کند و سیستم خودش به اولیا پیامک می‌دهد. سامانه‌ای کاملاً فارسی و راست‌به‌چپ با تقویم شمسی، برای چند مدرسه روی یک پلتفرم.",
      en: "A school deputy records absences and late arrivals, and the system texts the parents. It runs many schools on one platform and is Persian, right-to-left and Jalali-calendar native.",
      de: "Die stellvertretende Schulleitung erfasst Fehlzeiten und Verspätungen, und das System benachrichtigt die Eltern per SMS. Eine Plattform für viele Schulen, vollständig auf Persisch, von rechts nach links und mit Jalali-Kalender.",
    },
    problem: {
      fa: "حضور و غیاب مدرسه کار هر روز است و اولیا باید خبردار شوند. هر مدرسه دادهٔ خودش را دارد و پنل پیامکی هم از جایی به جای دیگر فرق می‌کند. همیار مدرسه به هر مدرسه پنل جدا می‌دهد و تنظیم پیامک را در یک پنل مرکزی نگه می‌دارد، بدون اینکه برای تغییر سرویس‌دهنده به کد یا سرور دست بزنیم.",
      en: "Attendance is a daily job, parents need to hear about it, and every school has its own data while SMS providers differ from one to the next. Hamyar Madrese gives each school an isolated panel and keeps SMS setup in one central console, so changing provider touches neither code nor server.",
      de: "Anwesenheit ist tägliche Arbeit, Eltern müssen davon erfahren, jede Schule hat eigene Daten, und SMS-Anbieter unterscheiden sich. Hamyar Madrese gibt jeder Schule ein isoliertes Panel und bündelt die SMS-Einrichtung in einer zentralen Konsole. Ein Anbieterwechsel berührt weder Code noch Server.",
    },
    facts: [
      {
        fa: "دادهٔ هر مدرسه کاملاً از مدرسه‌های دیگر جداست",
        en: "Each school's data is strictly isolated from the others",
        de: "Die Daten jeder Schule sind strikt von den anderen getrennt",
      },
      {
        fa: "برگهٔ حضور معلم پیش از هر پیامک، تأیید معاون را می‌خواهد",
        en: "Teacher sheets need the deputy's approval before any SMS goes out",
        de: "Lehrerlisten brauchen eine Freigabe, bevor eine SMS rausgeht",
      },
      {
        fa: "کاوه‌نگار، SMS.ir، پارس‌گرین یا هر وب‌سرویس HTTP بدون تغییر کد",
        en: "Kavenegar, SMS.ir, ParsGreen or any HTTP service, with no code change",
        de: "Kavenegar, SMS.ir, ParsGreen oder jeder HTTP-Dienst, ohne Codeänderung",
      },
    ],
    flow: [
      { fa: "معلم برگهٔ حضور را می‌فرستد", en: "Teacher submits the sheet", de: "Lehrkraft reicht die Liste ein" },
      { fa: "معاون تأیید می‌کند", en: "Deputy approves it", de: "Schulleitung gibt sie frei" },
      { fa: "متن پیامک از قالب ساخته می‌شود", en: "SMS is filled from a template", de: "SMS entsteht aus einer Vorlage" },
      { fa: "پنل مرکزی ارسال می‌کند", en: "Central panel sends it", de: "Zentrales Panel versendet sie" },
      { fa: "وضعیت و خطا ثبت می‌شود", en: "Status and errors are logged", de: "Status und Fehler werden protokolliert" },
    ],
    decisions: [
      {
        title: { fa: "تأیید انسانی پیش از پیامک", en: "A person approves before an SMS", de: "Freigabe vor jeder SMS" },
        body: {
          fa: "پیامک غیبت به پدر و مادر می‌رسد، پس اشتباهش هزینه دارد. برگهٔ معلم تا تأیید معاون چیزی ارسال نمی‌کند.",
          en: "An absence text reaches a parent, so a wrong one costs something. A teacher's sheet sends nothing until the deputy approves it.",
          de: "Eine Fehlzeiten-SMS erreicht Eltern, ein Irrtum hat also Folgen. Die Liste einer Lehrkraft versendet nichts ohne Freigabe.",
        },
      },
      {
        title: { fa: "ورود دادهٔ واقعی ایرانی", en: "Real Iranian data entry", de: "Echte iranische Dateneingabe" },
        body: {
          fa: "فایل اکسل دانش‌آموزان با رقم فارسی و شمارهٔ ‎+98 هم درست خوانده می‌شود و تقویم شمسی در خود سیستم است، نه یک لایهٔ تبدیل روی آن.",
          en: "Student Excel files import correctly with Persian digits and +98 numbers, and the Jalali calendar is built in rather than converted on top.",
          de: "Excel-Dateien werden auch mit persischen Ziffern und +98-Nummern korrekt importiert, und der Jalali-Kalender ist fest eingebaut statt nachträglich umgerechnet.",
        },
      },
      {
        title: { fa: "امنیت پیش‌فرض", en: "Secure by default", de: "Standardmäßig sicher" },
        body: {
          fa: "کوکی فقط روی HTTPS، HSTS و CSRF فعال است، کلیدهای API پوشانده می‌شوند و آدرس سفارشی پیامک در برابر SSRF محافظت شده است.",
          en: "HTTPS-only cookies, HSTS and CSRF protection are on, API keys are masked, and custom SMS URLs are protected against SSRF.",
          de: "HTTPS-only-Cookies, HSTS und CSRF-Schutz sind aktiv, API-Schlüssel werden maskiert, und eigene SMS-URLs sind gegen SSRF abgesichert.",
        },
      },
    ],
    stack: ["Python", "Django", "PostgreSQL", "Gunicorn", "Nginx", "Chart.js", "jdatetime", "openpyxl"],
    code: "https://github.com/yasinfallahati/Hamrah-Madrese",
    live: "https://schoolhelper.ir",
    shots: [
      {
        src: "/projects/hamyar/02-dashboard.webp",
        width: 1440,
        height: 900,
        alt: {
          fa: "داشبورد معاون با غیبت‌های امروز و روند هفت‌روزه",
          en: "Deputy dashboard with today's absences and a seven-day trend",
          de: "Dashboard mit den heutigen Fehlzeiten und einem Sieben-Tage-Trend",
        },
      },
      {
        src: "/projects/hamyar/03-attendance.webp",
        width: 1440,
        height: 900,
        alt: {
          fa: "ثبت حضور و غیاب روزانهٔ کلاس",
          en: "Daily class attendance screen",
          de: "Tägliche Anwesenheitserfassung einer Klasse",
        },
      },
      {
        src: "/projects/hamyar/06-sms-panel.webp",
        width: 1440,
        height: 900,
        alt: {
          fa: "گزارش ارسال پیامک و قالب‌ها",
          en: "SMS delivery log and templates",
          de: "SMS-Protokoll und Vorlagen",
        },
      },
    ],
    phoneShot: {
      src: "/projects/hamyar/10-mobile-dashboard.webp",
      width: 390,
      height: 844,
      alt: {
        fa: "داشبورد همیار مدرسه در موبایل",
        en: "Hamyar Madrese dashboard on a phone",
        de: "Hamyar-Madrese-Dashboard auf dem Handy",
      },
    },
  },
  {
    slug: "fixo",
    phase: "afternoon",
    name: { fa: "Fixo", en: "Fixo", de: "Fixo" },
    scene: {
      fa: "بعدازظهر، پشت میز تعمیر",
      en: "Afternoon, at the repair counter",
      de: "Nachmittags an der Reparaturtheke",
    },
    tagline: {
      fa: "میز هوشمند تعمیر اندروید",
      en: "AI desk for Android repair",
      de: "KI-Arbeitsplatz für Android-Reparatur",
    },
    lead: {
      fa: "گوشی مشتری با USB وصل می‌شود و کارهای تکراری، از وای‌فای مغازه و نصب برنامه تا عیب‌یابی و بکاپ، با یک کلیک یا یک جمله انجام می‌شود.",
      en: "The customer's phone connects over USB, and the routine jobs, from shop Wi-Fi and app installs to diagnostics and backups, take one click or one sentence.",
      de: "Das Kundenhandy wird per USB verbunden, und die Routinearbeit, von WLAN und App-Installation bis zu Diagnose und Backup, braucht einen Klick oder einen Satz.",
    },
    problem: {
      fa: "پشت میز تعمیر نرم‌افزار، همان ده کار تمام روز تکرار می‌شود. Fixo هر کدام را به یک کلیک یا یک جمله تبدیل می‌کند، همه را از مسیر adb اجرا می‌کند و دقیقاً نشان می‌دهد چه دستوری اجرا شده است.",
      en: "A software-repair counter does the same ten things all day. Fixo turns each one into a click or a sentence, runs everything through adb, and shows exactly which commands ran.",
      de: "An einer Software-Reparaturtheke wiederholen sich den ganzen Tag dieselben zehn Aufgaben. Fixo macht aus jeder einen Klick oder einen Satz, führt alles über adb aus und zeigt genau, welche Befehle liefen.",
    },
    facts: [
      {
        fa: "هر کار، دستور دقیق adb را با کد خروج و خروجی برمی‌گرداند",
        en: "Every action returns the exact adb commands, exit codes and output",
        de: "Jede Aktion liefert die genauen adb-Befehle, Exit-Codes und Ausgaben",
      },
      {
        fa: "دستیار هوشمند با ۲۱ ابزار تایپ‌شده؛ تغییرهای پرریسک شبکه تأیید می‌خواهند",
        en: "AI agent with 21 typed tools; risky network changes ask for confirmation",
        de: "KI-Agent mit 21 typisierten Tools; riskante Netzwerkänderungen brauchen eine Bestätigung",
      },
      {
        fa: "همین قابلیت‌ها با دو سرور MCP برای هر کلاینت MCP در دسترس است",
        en: "The same abilities are exposed to any MCP client through two MCP servers",
        de: "Dieselben Funktionen stehen jedem MCP-Client über zwei MCP-Server bereit",
      },
    ],
    flow: [
      { fa: "کلیک یا یک جمله از تعمیرکار", en: "A click or a sentence", de: "Ein Klick oder ein Satz" },
      { fa: "دستیار ابزار مناسب را انتخاب می‌کند", en: "Agent picks a typed tool", de: "Agent wählt ein typisiertes Tool" },
      { fa: "تأیید برای کارهای پرریسک", en: "Confirmation for risky changes", de: "Bestätigung bei riskanten Änderungen" },
      { fa: "اجرا با adb روی گوشی", en: "adb runs it on the phone", de: "adb führt es auf dem Handy aus" },
      { fa: "نمایش مدرک اجرا", en: "Evidence comes back", de: "Der Nachweis kommt zurück" },
    ],
    decisions: [
      {
        title: { fa: "مدرک برای هر کار", en: "Evidence for every action", de: "Nachweis für jede Aktion" },
        body: {
          fa: "تعمیرکار باید بداند روی گوشی مشتری چه گذشته است. برای همین هر کار دستور، کد خروج و خروجی را نشان می‌دهد و رمز وای‌فای از آن حذف می‌شود.",
          en: "A technician has to know what happened on a customer's phone, so every action shows its commands, exit codes and output, with Wi-Fi passwords redacted.",
          de: "Technikerinnen und Techniker müssen wissen, was auf dem Kundenhandy passiert ist. Deshalb zeigt jede Aktion Befehle, Exit-Codes und Ausgaben, WLAN-Passwörter werden entfernt.",
        },
      },
      {
        title: { fa: "فقط روی همان لپ‌تاپ", en: "Bound to the laptop", de: "Nur auf dem Laptop" },
        body: {
          fa: "سرور فقط روی 127.0.0.1 گوش می‌دهد و درخواست با Host یا Origin غیرمحلی را رد می‌کند تا سایت‌های باز در مرورگر نتوانند گوشی را کنترل کنند.",
          en: "The server listens only on 127.0.0.1 and rejects non-local Host or Origin values, so other websites open on the laptop can't drive the phone.",
          de: "Der Server lauscht nur auf 127.0.0.1 und lehnt nicht lokale Host- oder Origin-Werte ab, damit andere geöffnete Websites das Handy nicht steuern können.",
        },
      },
      {
        title: { fa: "آن‌جا که باید، دست انسان", en: "Manual where it should be", de: "Manuell, wo es sein muss" },
        body: {
          fa: "دستیار با تعمیرکار پیش می‌رود، نه به‌جای او: کپچا و پیامک ثبت‌نام گوگل عمداً دستی مانده‌اند.",
          en: "The agent works with the technician rather than around them: CAPTCHA and SMS steps in Google signup stay manual by design.",
          de: "Der Agent arbeitet mit der Fachkraft statt an ihr vorbei: CAPTCHA und SMS bei der Google-Anmeldung bleiben bewusst manuell.",
        },
      },
    ],
    stack: ["TypeScript", "Node.js", "React", "Vite", "Vercel AI SDK", "MCP", "Zod", "adb"],
    code: "https://github.com/yasinfallahati/fixo",
    shots: [
      {
        src: "/projects/fixo/bench-desktop.webp",
        width: 1440,
        height: 900,
        alt: {
          fa: "میز کار Fixo با وضعیت گوشی متصل",
          en: "Fixo bench screen with the connected phone's status",
          de: "Fixo-Arbeitsansicht mit dem Status des verbundenen Handys",
        },
      },
    ],
    phoneShot: {
      src: "/projects/fixo/agent-en.webp",
      width: 1120,
      height: 2000,
      alt: {
        fa: "گفتگو با دستیار Fixo در نمای موبایل",
        en: "Chat with the Fixo agent at phone width",
        de: "Chat mit dem Fixo-Agenten in Handybreite",
      },
    },
  },
  {
    slug: "voice-desk",
    phase: "evening",
    name: { fa: "Voice Desk", en: "Voice Desk", de: "Voice Desk" },
    scene: {
      fa: "غروب، دور از لپ‌تاپ",
      en: "Evening, away from the laptop",
      de: "Abends, fern vom Laptop",
    },
    tagline: {
      fa: "کنترل لینوکس با صدا",
      en: "Linux control by voice",
      de: "Linux per Sprache steuern",
    },
    lead: {
      fa: "از تلگرام پیام صوتی می‌فرستی و دسکتاپ لینوکس بعد از تأیید تو اجرا می‌کند. تشخیص گفتار و مدل زبانی روی همان سیستم می‌مانند، نه در ابر.",
      en: "Send a voice note on Telegram and your Linux desktop acts on it once you confirm. Speech recognition and the language model stay on that machine, not in the cloud.",
      de: "Eine Sprachnachricht auf Telegram genügt, und der Linux-Desktop führt sie nach Ihrer Bestätigung aus. Spracherkennung und Sprachmodell bleiben auf dem Rechner, nicht in der Cloud.",
    },
    problem: {
      fa: "ربات‌های کنترل از راه دور معمولاً یا همه‌چیز را به ابر می‌فرستند یا یک شل بی‌حفاظ می‌دهند. Voice Desk استنتاج را روی همان سیستم نگه می‌دارد، دسترسی را به شناسهٔ تلگرام تو محدود می‌کند و زبان طبیعی را به کارهای قابل بازبینی تبدیل می‌کند.",
      en: "Remote-control bots usually send everything to the cloud or hand you a bare shell. Voice Desk keeps inference on your machine, locks access to your Telegram ID, and turns natural language into actions you can review.",
      de: "Fernsteuerungs-Bots schicken meist alles in die Cloud oder geben eine ungeschützte Shell frei. Voice Desk rechnet auf dem eigenen Gerät, beschränkt den Zugriff auf Ihre Telegram-ID und macht aus natürlicher Sprache überprüfbare Aktionen.",
    },
    facts: [
      {
        fa: "گفتار فارسی و انگلیسی با Whisper محلی به متن تبدیل می‌شود",
        en: "Local Whisper turns Persian and English speech into text",
        de: "Lokales Whisper wandelt persische und englische Sprache in Text um",
      },
      {
        fa: "دستور ساختهٔ مدل پیش از اجرا تأیید می‌خواهد",
        en: "Commands written by the model ask for confirmation before they run",
        de: "Vom Modell erzeugte Befehle brauchen vor der Ausführung eine Bestätigung",
      },
      {
        fa: "دسترسی فقط برای کاربران مجاز تلگرام است و الگوهای خطرناک شناسایی می‌شوند",
        en: "Only allowlisted Telegram users get in, and dangerous patterns are flagged",
        de: "Nur freigegebene Telegram-Nutzer haben Zugriff, und gefährliche Muster werden erkannt",
      },
    ],
    flow: [
      { fa: "پیام صوتی در تلگرام", en: "Voice note on Telegram", de: "Sprachnachricht auf Telegram" },
      { fa: "متن با Whisper محلی", en: "Transcript from local Whisper", de: "Transkript von lokalem Whisper" },
      { fa: "دستور پیشنهادی از Ollama", en: "Command proposed by Ollama", de: "Befehlsvorschlag von Ollama" },
      { fa: "تأیید تو", en: "You confirm", de: "Ihre Bestätigung" },
      { fa: "نتیجه و اسکرین‌شات در تلگرام", en: "Output and screenshot on Telegram", de: "Ausgabe und Screenshot auf Telegram" },
    ],
    decisions: [
      {
        title: { fa: "همه‌چیز روی همان سیستم", en: "Everything stays on the host", de: "Alles bleibt auf dem Host" },
        body: {
          fa: "مدل گفتار، وزن‌های مدل زبانی، دسترسی شل و اسکرین‌شات‌ها از سیستم بیرون نمی‌روند. تلگرام فقط کانال ارتباطی است.",
          en: "Speech models, LLM weights, shell privileges and screenshots stay on the host. Telegram is only the channel.",
          de: "Sprachmodelle, LLM-Gewichte, Shell-Rechte und Screenshots bleiben auf dem Host. Telegram ist nur der Kanal.",
        },
      },
      {
        title: { fa: "مدل پیشنهاد می‌دهد، تو تصمیم می‌گیری", en: "The model proposes, you decide", de: "Das Modell schlägt vor, Sie entscheiden" },
        body: {
          fa: "مدل زبانی فقط یک دستور و توضیحش را برمی‌گرداند. اجرای دستور زمان‌بندی دارد و کارهای مخرب تأیید صریح می‌خواهند.",
          en: "The LLM only returns one command and an explanation. Execution has a timeout, and destructive actions need explicit confirmation.",
          de: "Das LLM liefert nur einen Befehl mit Erklärung. Die Ausführung hat ein Zeitlimit, destruktive Aktionen brauchen eine ausdrückliche Bestätigung.",
        },
      },
      {
        title: { fa: "دیدن نتیجه از راه دور", en: "See the result from afar", de: "Das Ergebnis aus der Ferne sehen" },
        body: {
          fa: "اسکرین‌شات تکی و نمای زنده هر چند ثانیه یک بار نشان می‌دهند واقعاً چه روی صفحه رخ داده است.",
          en: "One-shot screenshots and a live view that refreshes every few seconds show what really happened on screen.",
          de: "Einzelne Screenshots und eine alle paar Sekunden aktualisierte Live-Ansicht zeigen, was wirklich auf dem Bildschirm geschah.",
        },
      },
    ],
    stack: ["Python", "Faster-Whisper", "Ollama", "Telegram Bot API", "ffmpeg", "Linux"],
    code: "https://github.com/yasinfallahati/voice-desk",
    shots: [],
    conversation: true,
  },
  {
    slug: "nabz-farda",
    phase: "midnight",
    name: { fa: "نبض فردا", en: "Nabz-e Farda", de: "Nabz-e Farda" },
    scene: {
      fa: "نیمه‌شب، در تحریریه",
      en: "Midnight, in the newsroom",
      de: "Um Mitternacht in der Redaktion",
    },
    tagline: {
      fa: "خبر فناوری به فارسی، هر شب",
      en: "Tech news in Persian, nightly",
      de: "Tech-News auf Persisch, jede Nacht",
    },
    lead: {
      fa: "هر شب ساعت ۰۰:۰۰ به وقت تهران، حدود ۲۶ منبع خبری انگلیسی خوانده می‌شود و نسخهٔ فارسی تازه‌ای از اخبار هوش مصنوعی، فناوری و بازی منتشر می‌شود، بدون سرور و پایگاه داده.",
      en: "Every night at 00:00 Tehran time, about 26 English feeds are read and a new Persian edition of AI, tech and gaming news goes live, with no server and no database.",
      de: "Jede Nacht um 00:00 Uhr Teheraner Zeit werden rund 26 englische Feeds gelesen, und eine neue persische Ausgabe mit KI-, Tech- und Gaming-News geht online, ohne Server und ohne Datenbank.",
    },
    problem: {
      fa: "خوانندهٔ فارسی‌زبان به خبر هوش مصنوعی، تراشه و بازی علاقه دارد، اما منابع مهم انگلیسی‌اند و تحریریهٔ شبانه‌روزی هم در دسترس نیست. نبض فردا این فاصله را با یک خط تولید خودکار پر می‌کند و خروجی‌اش یک پوشهٔ ساده از فایل‌های ایستاست.",
      en: "Persian readers care about AI launches, chips and game drops, but the sources that matter are in English and a 24/7 newsroom is out of reach. Nabz-e Farda closes that gap with an automated pipeline whose output is one plain folder of static files.",
      de: "Persische Leser interessieren sich für KI, Chips und Spiele, doch die wichtigen Quellen sind englisch und eine Redaktion rund um die Uhr ist unerreichbar. Nabz-e Farda schließt diese Lücke mit einer automatischen Pipeline, deren Ergebnis ein einfacher Ordner statischer Dateien ist.",
    },
    facts: [
      {
        fa: "خبر داغ هر سه ساعت در نوار استوری به‌روز می‌شود",
        en: "Breaking stories refresh every three hours",
        de: "Eilmeldungen werden alle drei Stunden aktualisiert",
      },
      {
        fa: "حدود ۸ پست شبانهٔ تلگرام، بدون انتشار تکراری",
        en: "About 8 Telegram posts a night, with no duplicates",
        de: "Rund 8 Telegram-Beiträge pro Nacht, ohne Dubletten",
      },
      {
        fa: "ریلز، کاروسل و استوری اینستاگرام از همان دادهٔ روز ساخته می‌شوند",
        en: "Instagram reels, carousels and stories are built from the same day data",
        de: "Instagram-Reels, Karussells und Stories entstehen aus denselben Tagesdaten",
      },
    ],
    flow: [
      { fa: "دریافت از حدود ۲۶ RSS", en: "Fetch about 26 RSS feeds", de: "Rund 26 RSS-Feeds abrufen" },
      { fa: "حذف تکراری و رتبه‌بندی", en: "Dedupe and rank", de: "Dubletten entfernen, ranken" },
      { fa: "تیتر و خلاصهٔ فارسی", en: "Persian headline and summary", de: "Persische Schlagzeile und Zusammenfassung" },
      { fa: "ساخت صفحه‌ها و تصویرها", en: "Build pages and images", de: "Seiten und Bilder bauen" },
      { fa: "انتشار روی Vercel و شبکه‌ها", en: "Deploy and post to channels", de: "Deployen und in Kanälen posten" },
    ],
    decisions: [
      {
        title: { fa: "بدون سرور و پایگاه داده", en: "No server, no database", de: "Kein Server, keine Datenbank" },
        body: {
          fa: "پوشهٔ public خودِ وب‌سایت است. جست‌وجو هم با یک فهرست ایستا در مرورگر انجام می‌شود، پس چیزی برای از کار افتادن در نیمه‌شب نمی‌ماند.",
          en: "The public folder is the website. Search runs in the browser over a static index, which leaves little that can fail at midnight.",
          de: "Der public-Ordner ist die Website. Die Suche läuft im Browser über einen statischen Index, nachts kann also wenig ausfallen.",
        },
      },
      {
        title: { fa: "فارسی درست، حتی روی تصویر", en: "Correct Persian, even in images", de: "Korrektes Persisch, auch in Bildern" },
        body: {
          fa: "کارت‌های Open Graph با Pillow و Raqm ساخته می‌شوند تا حروف فارسی درست به هم بچسبند و فقط خبرهای جدید دوباره ترسیم می‌شوند.",
          en: "Open Graph cards use Pillow and Raqm so Persian letters shape correctly, and only new or changed stories are redrawn.",
          de: "Open-Graph-Karten nutzen Pillow und Raqm für korrekte persische Buchstabenformen, neu gezeichnet werden nur neue oder geänderte Meldungen.",
        },
      },
      {
        title: { fa: "دو زمان‌بندی، بدون تداخل", en: "Two schedules, no overlap", de: "Zwei Zeitpläne ohne Überschneidung" },
        body: {
          fa: "نسخهٔ شبانه و به‌روزرسانی سه‌ساعته پوشهٔ یکسانی را منتشر می‌کنند، اما هیچ‌وقت هم‌زمان نمی‌شوند: ساعت ۰۰:۰۰ مال نسخهٔ کامل است.",
          en: "The nightly edition and the three-hourly pass deploy the same folder but never overlap: the midnight slot belongs to the full edition.",
          de: "Nachtausgabe und Drei-Stunden-Lauf deployen denselben Ordner, überschneiden sich aber nie: Der Mitternachtsslot gehört der vollen Ausgabe.",
        },
      },
    ],
    stack: ["Python", "feedparser", "Pillow", "Playwright", "ffmpeg", "Telegram Bot API", "Vercel"],
    code: "https://github.com/yasinfallahati/nabz-farda",
    live: "https://nabz-farda.vercel.app",
    shots: [
      {
        src: "/projects/nabz-farda/screenshot-home.webp",
        width: 1280,
        height: 1080,
        alt: {
          fa: "صفحهٔ اصلی نبض فردا با نوار استوری و خبر ویژه",
          en: "Nabz-e Farda homepage with the stories bar and a featured story",
          de: "Startseite von Nabz-e Farda mit Story-Leiste und Top-Meldung",
        },
      },
    ],
  },
];

export interface SmallProject {
  name: string;
  url: string;
  description: Localized;
  stack: string;
}

export const smallProjects: SmallProject[] = [
  {
    name: "Attendance System",
    url: "https://github.com/yasinfallahati/Attendance-system",
    description: {
      fa: "حضور و غیاب با تشخیص چهره و خروجی اکسل، در یک برنامهٔ دسکتاپ",
      en: "Face-recognition attendance with Excel export, as a desktop app",
      de: "Anwesenheit per Gesichtserkennung mit Excel-Export, als Desktop-App",
    },
    stack: "Python, OpenCV",
  },
  {
    name: "Todo",
    url: "https://github.com/yasinfallahati/todo",
    description: {
      fa: "هدف‌ها، کارهای روزانه، نمودار و جلسه‌ها در یک صفحهٔ مرورگر",
      en: "Goals, daily tasks, charts and meetings on one browser page",
      de: "Ziele, Tagesaufgaben, Diagramme und Termine auf einer Browserseite",
    },
    stack: "HTML, CSS, JavaScript",
  },
  {
    name: "ClickHunt",
    url: "https://github.com/yasinfallahati/ClickHunt",
    description: {
      fa: "بازی دونفرهٔ تمام‌صفحه برای شکار نشانگر موس",
      en: "A two-player, full-screen cursor-hunt party game",
      de: "Ein Partyspiel für zwei, bei dem im Vollbild der Mauszeiger gejagt wird",
    },
    stack: "Python, Tkinter",
  },
  {
    name: "Quiz Game",
    url: "https://github.com/yasinfallahati/Quiz_game",
    description: {
      fa: "رقابت کوییز فارسی در هفت مرحله، با شش ثانیه برای هر سؤال",
      en: "A seven-level Persian quiz duel with six seconds per question",
      de: "Ein persisches Quizduell in sieben Stufen mit sechs Sekunden pro Frage",
    },
    stack: "Python",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function nextProject(slug: string): Project {
  const index = projects.findIndex((project) => project.slug === slug);
  return projects[(index + 1) % projects.length];
}
