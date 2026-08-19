import { useEffect, useState, useRef, useCallback } from 'react';
import Sidebar from './components/Sidebar';

const base = import.meta.env.BASE_URL;
const profile = {
  email: 'fallahatiasin829@gmail.com',
  telegram: 'https://t.me/Yasinfallahatiii',
  github: 'https://github.com/yasinfallahati'
};

/* ========================
   COPY — All 3 Languages
   ======================== */
const copy = {
  fa: {
    dir: 'rtl',
    role: 'مهندس هوش مصنوعی و بک‌اند',
    name: 'یاسین\nفلاحتی',
    lead: 'من سیستم‌هایی می‌سازم که فکر می‌کنند، یاد می‌گیرند و کار می‌کنند. از معماری داده تا ربات‌های هوشمند، هر خط کدی که می‌نویسم یک هدف دارد: ساده‌سازی زندگی.',
    explore: 'پروژه‌ها رو ببین',
    contact: 'بیایید حرف بزنیم',
    aboutLabel: 'دربارهٔ من',
    about: 'کد می‌نویسم.\nسیستم می‌سازم.\nمشکل حل می‌کنم.',
    aboutText: 'من یاسین فلاحتی هستم — مهندس نرم‌افزار با تمرکز بر هوش مصنوعی، بک‌اند و اتوماسیون. کار من تبدیل ایده‌های پیچیده به راه‌حل‌های ساده و کارآمد است. باور دارم بهترین سیستم‌ها، آن‌هایی هستند که کاربر حتی وجودشان را حس نمی‌کند.',
    skillTitle: 'roscope',
    skillsLabel: 'stack فنی',
    skills: 'ابزارهایی که\nباهاشون خلاقیت می‌کنم.',
    projectsLabel: 'Selected Work',
    projects: 'پروژه‌هایی که\nباهاشون افتخار می‌کنم.',
    projectText: 'هر پروژه یک داستان دارد — از چالش تا راه‌حل. این‌ها نمونه‌هایی از کارهای من هستند.',
    terminal: 'ترمینال',
    terminalHint: 'یه فرمان بزن...',
    all: 'همهٔ پروژه‌ها',
    available: 'آماده همکاری',
    contactLabel: 'ارتباط',
    contactTitle: 'یه پروژهٔ\nعالی در راهه.',
    subtitle: 'مهندس نرم‌افزار',
    value1Title: 'معماری',
    value1: 'سیستم‌هایی که امروز ساخته می‌شوند، فردا هم جواب بدهند.',
    value2Title: 'دقت',
    value2: 'جزئیات کوچک، تفاوت‌های بزرگ می‌سازند.',
    value3Title: 'یادگیری',
    value3: 'هر روز یک چیز جدید یاد می‌گیرم که فردا به کار بیاید.',
    github: 'گیت‌هاب',
    telegram: 'تلگرام'
  },
  en: {
    dir: 'ltr',
    role: 'AI & Backend Engineer',
    name: 'Yasin\nFallahati',
    lead: "I build systems that think, learn, and execute. From data architecture to intelligent automation — every line of code I write has one purpose: making complex things feel simple.",
    explore: 'See my work',
    contact: "Let's talk",
    aboutLabel: 'About me',
    about: 'I write code.\nI build systems.\nI solve problems.',
    aboutText: "I'm Yasin Fallahati — a software engineer focused on AI, backend, and automation. My work turns complex ideas into elegant, efficient solutions. I believe the best systems are the ones users never notice — they just work.",
    skillTitle: 'scope',
    skillsLabel: 'Tech Stack',
    skills: 'Tools I use to\nbring ideas to life.',
    projectsLabel: 'Selected Work',
    projects: "Projects I'm\nproud of.",
    projectText: 'Every project tells a story — from challenge to solution. Here are some of my recent works.',
    terminal: 'Terminal',
    terminalHint: 'Type a command...',
    all: 'All repositories',
    available: 'Open to work',
    contactLabel: 'Contact',
    contactTitle: "Something great\nis coming.",
    subtitle: 'Software Engineer',
    value1Title: 'Architecture',
    value1: 'Systems built today should still work tomorrow.',
    value2Title: 'Precision',
    value2: 'Small details create big differences.',
    value3Title: 'Growth',
    value3: 'Every day I learn something new that adds value tomorrow.',
    github: 'GitHub',
    telegram: 'Telegram'
  },
  de: {
    dir: 'ltr',
    role: 'AI- & Backend-Entwickler',
    name: 'Yasin\nFallahati',
    lead: 'Ich entwickle Systeme, die denken, lernen und arbeiten. Von Datenarchitektur bis intelligente Automatisierung — jede Zeile Code hat ein Ziel: Komplexes einfach machen.',
    explore: 'Projekte ansehen',
    contact: 'Kontakt aufnehmen',
    aboutLabel: 'Über mich',
    about: 'Ich schreibe Code.\nIch baue Systeme.\nIch löse Probleme.',
    aboutText: 'Ich bin Yasin Fallahati — Softwareentwickler mit Fokus auf KI, Backend und Automatisierung. Meine Arbeit verwandelt komplexe Ideen in elegante, effiziente Lösungen.',
    skillTitle: 'Umfang',
    skillsLabel: 'Tech-Stack',
    skills: 'Werkzeuge, mit\ndenen ich Ideen\numsetze.',
    projectsLabel: 'Ausgewählte Arbeit',
    projects: 'Projekte, auf\ndie ich stolz bin.',
    projectText: 'Jedes Projekt erzählt eine Geschichte — von der Herausforderung zur Lösung.',
    terminal: 'Terminal',
    terminalHint: 'Befehl eingeben...',
    all: 'Alle Repositories',
    available: 'Offen für neue Möglichkeiten',
    contactLabel: 'Kontakt',
    contactTitle: 'Etwas Großartiges\nkommt.',
    subtitle: 'Softwareentwickler',
    value1Title: 'Architektur',
    value1: 'Heute gebaute Systeme müssen auch morgen funktionieren.',
    value2Title: 'Präzision',
    value2: 'Kleine Details machen große Unterschiede.',
    value3Title: 'Entwicklung',
    value3: 'Jeden Tag lerne ich etwas Neues, das morgen nützlich ist.',
    github: 'GitHub',
    telegram: 'Telegram'
  }
};

const skillGroups = [
  {
    title: 'Backend',
    icon: 'server',
    items: [
      ['Python', 'python'],
      ['FastAPI', 'fastapi'],
      ['Flask', 'flask'],
      ['REST API', 'api'],
      ['Async / Await', 'async'],
      ['Microservices', 'microservices'],
      ['Web Scraping', 'scraping'],
      ['API Integration', 'integration']
    ]
  },
  {
    title: 'Frontend / Web',
    icon: 'web',
    items: [
      ['HTML5', 'html5'],
      ['CSS3', 'css3'],
      ['Responsive Design', 'responsive'],
      ['JavaScript', 'javascript'],
      ['Web App Development', 'webapp']
    ]
  },
  {
    title: 'AI & Data',
    icon: 'ai',
    items: [
      ['NumPy', 'numpy'],
      ['Matplotlib', 'matplotlib'],
      ['Data Processing', 'data'],
      ['AI Integration', 'ai'],
      ['AI Scripts', 'scripts'],
      ['Chatbot Development', 'chatbot'],
      ['AI API Integration', 'integration']
    ]
  },
  {
    title: 'Automation',
    icon: 'automation',
    items: [
      ['n8n', 'n8n'],
      ['Python Automation', 'python'],
      ['Telegram Bots', 'telegram'],
      ['Workflow Automation', 'workflow'],
      ['API Automation', 'automation']
    ]
  },
  {
    title: 'Tools',
    icon: 'tools',
    items: [
      ['Git', 'git'],
      ['GitHub', 'github'],
      ['VS Code', 'vscode'],
      ['n8n', 'n8n']
    ]
  }
];

/* ========================
   ICON COMPONENT
   ======================== */
function Icon({ name, size = 22 }) {
  const paths = {
    github: (
      <path
        fill="currentColor"
        stroke="none"
        d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.61.07-.61 1 .07 1.52 1.02 1.52 1.02.88 1.52 2.31 1.08 2.88.82.09-.64.35-1.08.63-1.33-2.22-.25-4.56-1.1-4.56-4.95 0-1.1.4-2 1.03-2.7-.1-.26-.45-1.28.1-2.67 0 0 .84-.27 2.75 1.03a9.5 9.5 0 0 1 5 0c1.9-1.3 2.74-1.03 2.74-1.03.55 1.39.2 2.41.1 2.67.64.7 1.03 1.6 1.03 2.7 0 3.86-2.34 4.69-4.57 4.94.36.31.68.9.68 1.8v2.67c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
      />
    ),
    telegram: (
      <path
        fill="currentColor"
        stroke="none"
        d="M21.4 4.6 18.1 20c-.25 1.09-.9 1.36-1.83.85l-5.05-3.72-2.44 2.35c-.27.27-.5.5-1.02.5l.36-5.14 9.36-8.46c.4-.36-.09-.56-.63-.2L5.28 13.47.3 11.91c-1.08-.34-1.1-1.08.23-1.6L20 2.8c.9-.33 1.68.2 1.4 1.8Z"
      />
    ),
    python: (
      <path d="M8 5h7a3 3 0 0 1 3 3v3H9a3 3 0 0 0-3 3V8a3 3 0 0 1 2-3Zm8 14H9a3 3 0 0 1-3-3v-3h9a3 3 0 0 0 3-3v6a3 3 0 0 1-2 3ZM9 8h.01M15 16h.01" />
    ),
    web: (
      <path d="M3 5h18v14H3V5Zm0 3h18M7 7h.01M10 7h.01M12 15l2-2-2-2M10 11l-2 2 2 2" />
    ),
    ai: (
      <path d="M12 3a3 3 0 0 1 5.1 2.14A3 3 0 0 1 19.86 9 3 3 0 0 1 19 14.1a3 3 0 0 1-5.14 2.76A3 3 0 0 1 9 17a3 3 0 0 1-2.86-4.1A3 3 0 0 1 6.14 9 3 3 0 0 1 9 5.14 3 3 0 0 1 12 3Zm0 5.2a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6Z" />
    ),
    email: (
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Zm16 2-8 5-8-5v12h16V6Z" />
    ),
    arrow: (
      <path d="M5 12h14M12 5l7 7-7 7" />
    )
  };
  return (
    <svg
      className={`icon icon-${name}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}

/* ========================
   SKILL ICON
   ======================== */
const brandedIcons = new Set([
  'python', 'fastapi', 'flask', 'html5', 'css3', 'javascript',
  'numpy', 'matplotlib', 'n8n', 'git', 'github', 'vscode', 'telegram'
]);

const conceptIcons = {
  api: '⌘', async: '↻', microservices: '◇', scraping: '⌕',
  integration: '⟷', responsive: '▣', webapp: '▤', data: '▦',
  scripts: '$_', chatbot: '◌', workflow: '⇢', automation: '⚙',
  tools: '⌁', server: '▰'
};

function SkillIcon({ name }) {
  return brandedIcons.has(name) ? (
    <img
      className="skill-logo"
      src={`https://cdn.simpleicons.org/${name}/8ba9ff`}
      alt=""
      loading="lazy"
    />
  ) : (
    <span className="concept-icon">{conceptIcons[name] || '✦'}</span>
  );
}

/* ========================
   TERMINAL COMPONENT
   ======================== */
function Terminal({ t }) {
  const [line, setLine] = useState('');
  const [history, setHistory] = useState([]);
  const inputRef = useRef(null);

  const commands = {
    help: 'about  ·  skills  ·  projects  ·  contact  ·  whoami  ·  clear',
    about: 'AI & backend engineer. I build intelligent systems that solve real problems.',
    skills: 'Python, FastAPI, AI, n8n, Telegram Bots, Web Scraping, Microservices.',
    projects: 'Check the projects section below ↑',
    contact: profile.email,
    whoami: 'Yasin Fallahati — Engineer, Builder, Problem Solver.',
    clear: ''
  };

  const run = useCallback((value) => {
    const cmd = value.toLowerCase().trim();
    if (cmd === 'clear') {
      setLine('');
      setHistory([]);
    } else if (commands[cmd]) {
      const newLine = commands[cmd];
      setLine(newLine);
      setHistory((prev) => [...prev, { cmd: value, output: newLine }]);
    } else {
      const msg = 'bash: command not found. Try: help';
      setLine(msg);
      setHistory((prev) => [...prev, { cmd: value, output: msg }]);
    }
  }, []);

  return (
    <div className="terminal-card" aria-label={t.terminal}>
      <div className="terminal-head">
        <span><i /><i /><i /></span>
        {t.terminal}
      </div>
      <div className="terminal-body">
        <p className="terminal-welcome">
          <span className="terminal-green">Welcome to</span> Yasin&apos;s Portfolio Terminal <span className="terminal-version">v2.0</span>
        </p>
        <p className="terminal-muted">
          Type <b>help</b> for available commands.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const val = e.currentTarget.command.value;
            if (val.trim()) run(val);
            e.currentTarget.reset();
          }}
        >
          <label>
            <span className="terminal-user">yasin</span>
            <span className="terminal-at">@</span>
            <span className="terminal-host">portfolio</span>
            <span className="terminal-colon">:~$</span>
          </label>
          <input
            ref={inputRef}
            name="command"
            placeholder={t.terminalHint}
            autoComplete="off"
            spellCheck={false}
          />
        </form>
        <div className="terminal-history">
          {history.map((entry, i) => (
            <div key={i} className="terminal-entry">
              <p className="terminal-cmd">
                <span className="terminal-prompt">yasin@portfolio:~$</span> {entry.cmd}
              </p>
              {entry.output && <p className="terminal-output">{entry.output}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ========================
   FLOATING PARTICLES — Immersive
   ======================== */
function FloatingParticles() {
  const particles = Array.from({ length: 30 }).map((_, i) => {
    const colors = [
      'rgba(74, 142, 255, 0.6)',
      'rgba(139, 92, 246, 0.5)',
      'rgba(6, 182, 212, 0.45)',
      'rgba(74, 142, 255, 0.4)',
      'rgba(16, 185, 129, 0.35)'
    ];
    const size = 1.5 + Math.random() * 4;
    return (
      <div
        key={i}
        className="particle"
        style={{
          '--delay': `${Math.random() * 8}s`,
          '--duration': `${18 + Math.random() * 25}s`,
          '--x': `${Math.random() * 100}%`,
          '--y': `${60 + Math.random() * 40}%`,
          '--size': `${size}px`,
          background: colors[i % colors.length],
          boxShadow: `0 0 ${size * 3}px ${colors[i % colors.length]}`
        }}
      />
    );
  });
  return (
    <div className="particles-container" aria-hidden="true">
      {particles}
    </div>
  );
}

/* ========================
   TEXT REVEAL COMPONENT — 3D Flip
   ======================== */
function TextReveal({ text, className = '', delay = 0 }) {
  return (
    <span className={`text-reveal ${className}`} style={{ animationDelay: `${delay}s` }}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          className="text-reveal-char"
          style={{ animationDelay: `${delay + i * 0.035}s` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
}

/* ========================
   COUNTER ANIMATION — Immersive
   ======================== */
function AnimatedCounter({ value, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const end = parseInt(value);
    const duration = 2200;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(eased * end);
      setCount(current);
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, value]);

  return <span ref={ref} className="counter">{count}{suffix}</span>;
}

/* ========================
   PROJECT CARD
   ======================== */
function Project({ project, index }) {
  const tags = [...new Set([project.language, ...(project.topics || [])])]
    .filter(Boolean)
    .slice(0, 4);

  return (
    <article
      className="project-card"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="project-art">
        <div className="project-art-bg" />
        <span className="project-icon">{'</>'}</span>
        <b>{project.name}</b>
      </div>
      <div className="project-content">
        <h3>{project.name}</h3>
        <p>{project.description || 'A project built with care and curiosity.'}</p>
        <div className="tags">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="project-link">
        <Icon name="github" size={16} />
        <span>View on GitHub</span>
        <Icon name="arrow" size={14} />
      </a>
    </article>
  );
}

/* ========================
   SCROLL ANIMATIONS
   ======================== */
function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    );

    const elements = document.querySelectorAll('.animate-in, .stagger-in');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

/* ========================
   MOUSE 3D TRACKING
   ======================== */
function useMouseParallax() {
  useEffect(() => {
    const cards = document.querySelectorAll('.value-card, .project-card, .terminal-card, .social-link, .contact-email');
    const handleMouseMove = (e) => {
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty('--mouse-x', `${x}%`);
        card.style.setProperty('--mouse-y', `${y}%`);
      });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
}

/* ========================
   SCROLL PROGRESS
   ======================== */
function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '3px',
        width: `${progress}%`,
        background: 'linear-gradient(90deg, #4a8eff, #8b5cf6, #06b6d4)',
        zIndex: 9999,
        transition: 'width 0.1s linear',
        boxShadow: '0 0 12px rgba(74, 142, 255, 0.5), 0 0 30px rgba(139, 92, 246, 0.3)',
        borderRadius: '0 2px 2px 0'
      }}
      aria-hidden="true"
    />
  );
}

/* ========================
   PARALLAX HOOK
   ======================== */
function useParallax() {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const hero = document.querySelector('.hero');
      if (hero) {
        const rate = scrolled * 0.3;
        hero.style.setProperty('--parallax-y', `${rate}px`);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}

/* ========================
   MAIN APP
   ======================== */
export default function App() {
  const [lang, setLang] = useState(
    () => localStorage.getItem('portfolio-language') || 'fa'
  );
  const [theme, setTheme] = useState(
    () => localStorage.getItem('portfolio-theme') || 'dark'
  );
  const [projects, setProjects] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const t = copy[lang];

  useScrollAnimation();
  useParallax();
  useMouseParallax();

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = t.dir;
    localStorage.setItem('portfolio-language', lang);
  }, [lang, t.dir]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    fetch(`${base}pinned-projects.json`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data) => setProjects(data.projects || []))
      .catch(() => setProjects([]));
  }, []);

  const nav = [
    { id: 'home', icon: '⌂', label: 'Home' },
    { id: 'about', icon: '◌', label: t.aboutLabel },
    { id: 'skills', icon: '⌘', label: t.skillsLabel },
    { id: 'projects', icon: '▣', label: t.projectsLabel },
    { id: 'contact', icon: '✉', label: 'Contact' }
  ];

  return (
    <div className={`app-shell ${loaded ? 'loaded' : ''}`}>
      <ScrollProgress />
      <FloatingParticles />
      <Sidebar
        items={nav}
        lang={lang}
        setLang={setLang}
        theme={theme}
        setTheme={setTheme}
      />

      <main>
        {/* ===== HERO ===== */}
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="hero-status">
              <span className="status">
                <i />
                {t.available}
              </span>
            </div>
            <p className="eyebrow hero-role">{t.role}</p>
            <h1 className="hero-name">
              {t.name.split('\n').map((part, i) => (
                <span key={part} className={`hero-name-line hero-name-line-${i}`}>
                  <TextReveal text={part} delay={0.3 + i * 0.2} />
                </span>
              ))}
            </h1>
            <p className="lead hero-lead">{t.lead}</p>
            <div className="actions">
              <a className="button primary glow-button" href="#projects">
                <span>{t.explore}</span>
                <Icon name="arrow" size={18} />
              </a>
              <a className="button glass-button" href={`mailto:${profile.email}`}>
                <Icon name="email" size={18} />
                <span>{t.contact}</span>
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <AnimatedCounter value="6" suffix="+" />
                <span>Projects</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <AnimatedCounter value="5" suffix="+" />
                <span>Skills</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <AnimatedCounter value="100" suffix="%" />
                <span>Passion</span>
              </div>
            </div>
          </div>
          <div className="hero-terminal">
            <Terminal t={t} />
          </div>
        </section>

        {/* ===== ABOUT ===== */}
        <section className="section about animate-in" id="about">
          <div className="section-header">
            <p className="eyebrow">{t.aboutLabel}</p>
            <h2 className="section-title">
              {t.about.split('\n').map((part, i) => (
                <span key={part} className="title-line" style={{ animationDelay: `${i * 0.15}s` }}>
                  {part}
                </span>
              ))}
            </h2>
          </div>
          <p className="section-intro">{t.aboutText}</p>
          <div className="value-grid">
            {[
              ['◇', t.value1Title, t.value1],
              ['↯', t.value2Title, t.value2],
              ['✦', t.value3Title, t.value3]
            ].map(([icon, title, text], i) => (
              <article
                key={title}
                className="value-card stagger-in"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="value-icon">
                  <span>{icon}</span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <div className="value-card-glow" />
              </article>
            ))}
          </div>
        </section>

        {/* ===== SKILLS ===== */}
        <section className="section skills-section animate-in" id="skills">
          <div className="section-header">
            <p className="eyebrow">{t.skillsLabel}</p>
            <h2 className="section-title">
              {t.skills.split('\n').map((part, i) => (
                <span key={part} className="title-line" style={{ animationDelay: `${i * 0.15}s` }}>
                  {part}
                </span>
              ))}
            </h2>
          </div>
          <div className="skill-groups">
            {skillGroups.map((group, i) => (
              <article
                className="skill-group stagger-in"
                key={group.title}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <header>
                  <div className="skill-icon-wrapper">
                    <SkillIcon name={group.icon} />
                  </div>
                  <h3>{group.title}</h3>
                  <small>{group.items.length}</small>
                </header>
                <div className="skill-items">
                  {group.items.map(([name, icon], j) => (
                    <span
                      className="skill-pill"
                      key={`${group.title}-${name}`}
                      style={{ animationDelay: `${j * 0.05}s` }}
                    >
                      <SkillIcon name={icon} />
                      {name}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ===== PROJECTS ===== */}
        <section className="section projects animate-in" id="projects">
          <div className="section-header">
            <p className="eyebrow">{t.projectsLabel}</p>
            <h2 className="section-title">{t.projects}</h2>
          </div>
          <p className="section-intro">{t.projectText}</p>
          <div className="project-grid">
            {projects.length ? (
              projects.map((project, i) => (
                <Project key={project.githubUrl} project={project} index={i} />
              ))
            ) : (
              <article className="project-empty">
                <div className="empty-icon">📋</div>
                <p>Pinned projects will appear here after GitHub sync.</p>
              </article>
            )}
          </div>
          <a
            className="all-link"
            href={`${profile.github}?tab=repositories`}
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="github" size={18} />
            <span>{t.all}</span>
            <Icon name="arrow" size={16} />
          </a>
        </section>

        {/* ===== CONTACT ===== */}
        <section className="contact animate-in" id="contact">
          <div className="contact-inner">
            <p className="eyebrow">{t.contactLabel}</p>
            <h2 className="contact-title">
              {t.contactTitle.split('\n').map((part, index) =>
                index ? (
                  <em key={part}>{part}</em>
                ) : (
                  <span key={part}>
                    {part}
                    <br />
                  </span>
                )
              )}
            </h2>
            <a href={`mailto:${profile.email}`} className="contact-email">
              <Icon name="email" size={20} />
              <span>{profile.email}</span>
              <Icon name="arrow" size={16} />
            </a>
            <div className="social-links">
              <a href={profile.github} target="_blank" rel="noreferrer" className="social-link">
                <Icon name="github" size={20} />
                <span>{t.github}</span>
              </a>
              <a href={profile.telegram} target="_blank" rel="noreferrer" className="social-link">
                <Icon name="telegram" size={20} />
                <span>{t.telegram}</span>
              </a>
            </div>
          </div>
          <div className="contact-bg-text" aria-hidden="true">
            {t.contactTitle.split('\n')[0]}
          </div>
        </section>
      </main>
    </div>
  );
}
