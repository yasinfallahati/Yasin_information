import { useEffect, useState, useRef, useCallback } from 'react';
import resumeUrl from '../assets/resume.pdf';
import Sidebar from './components/Sidebar';

const base = import.meta.env.BASE_URL;
const profile = {
  email: 'fallahatiasin829@gmail.com',
  telegram: 'https://t.me/Yasinfallahatiii',
  github: 'https://github.com/yasinfallahati'
};

const copy = {
  fa: {
    dir: 'rtl',
    role: 'توسعه‌دهندهٔ هوش مصنوعی و بک‌اند',
    name: 'یاسین\nفلاحتی',
    lead: 'سیستم‌های هوشمند، ساده و قابل‌اعتماد می‌سازم؛ از ایدهٔ اولیه تا محصولی که واقعاً به کار می‌آید.',
    explore: 'دیدن پروژه‌ها',
    contact: 'ارتباط با من',
    aboutLabel: 'دربارهٔ من',
    about: 'مهندسی خوب،\nبی‌صدا کار می‌کند.',
    aboutText: 'در مرز مهندسی بک‌اند، اتوماسیون و هوش مصنوعی کار می‌کنم؛ با تمرکز بر معماری روشن، کد قابل‌نگهداری و تجربه‌ای که برای آدم‌ها ساخته شده است.',
    skillsLabel: 'مهارت‌ها',
    skills: 'فناوری‌هایی که\nبا آن‌ها کار می‌کنم.',
    projectsLabel: 'پروژه‌ها',
    projects: 'پروژه‌های منتخب',
    projectText: 'پروژه‌ها و فناوری‌هایشان مستقیم از پروفایل GitHub به‌روز می‌شوند.',
    terminal: 'ترمینال',
    terminalHint: 'یک فرمان انتخاب کنید',
    all: 'همهٔ ریپوزیتوری‌ها',
    available: 'آماده برای فرصت‌های جدید',
    contactLabel: 'تماس',
    contactTitle: 'بیایید چیزی\nمفید بسازیم.',
    github: 'گیت‌هاب',
    telegram: 'تلگرام'
  },
  en: {
    dir: 'ltr',
    role: 'AI & Backend Engineer',
    name: 'Yasin\nFallahati',
    lead: 'I build intelligent systems that are simple, reliable, and genuinely useful — from first idea to a working product.',
    explore: 'Explore my work',
    contact: "Let's connect",
    aboutLabel: 'About me',
    about: 'Good engineering\nworks quietly.',
    aboutText: 'I work where backend engineering, automation, and applied AI meet — with a focus on clear architecture, maintainable code, and human-friendly products.',
    skillsLabel: 'Skills',
    skills: 'Technologies I\nwork with.',
    projectsLabel: 'Projects',
    projects: 'Featured projects',
    projectText: 'Projects and their technologies update directly from my GitHub profile.',
    terminal: 'Terminal',
    terminalHint: 'Pick a command',
    all: 'All repositories',
    available: 'Available for new opportunities',
    contactLabel: 'Contact',
    contactTitle: "Let's build something\nuseful together.",
    github: 'GitHub',
    telegram: 'Telegram'
  },
  de: {
    dir: 'ltr',
    role: 'AI- & Backend-Entwickler',
    name: 'Yasin\nFallahati',
    lead: 'Ich entwickle intelligente Systeme, die einfach, zuverlässig und wirklich nützlich sind.',
    explore: 'Projekte ansehen',
    contact: 'Kontakt',
    aboutLabel: 'Über mich',
    about: 'Gutes Engineering\narbeitet leise.',
    aboutText: 'Ich arbeite an der Schnittstelle von Backend-Engineering, Automatisierung und angewandter KI.',
    skillsLabel: 'Skills',
    skills: 'Technologien, mit\ndenen ich arbeite.',
    projectsLabel: 'Projekte',
    projects: 'Ausgewählte Projekte',
    projectText: 'Projekte werden direkt über mein GitHub-Profil aktualisiert.',
    terminal: 'Terminal',
    terminalHint: 'Befehl auswählen',
    all: 'Alle Repositories',
    available: 'Offen für neue Möglichkeiten',
    contactLabel: 'Kontakt',
    contactTitle: 'Lassen Sie uns etwas\nNützliches bauen.',
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
    help: 'about  ·  skills  ·  projects  ·  contact  ·  clear',
    about: 'AI and backend developer based in Iran.',
    skills: 'Python, FastAPI, AI, automation.',
    projects: 'Check the projects section below.',
    contact: profile.email,
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
      const msg = 'Command not found. Try: help';
      setLine(msg);
      setHistory((prev) => [...prev, { cmd: value, output: msg }]);
    }
  }, []);

  return (
    <div className="terminal-card" aria-label={t.terminal}>
      <div className="terminal-head">
        <span>
          <i />
          <i />
          <i />
        </span>
        {t.terminal}
      </div>
      <p>Welcome to Yasin&apos;s terminal.</p>
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
        <label>yasin@portfolio:~$</label>
        <input
          ref={inputRef}
          name="command"
          placeholder={t.terminalHint}
          autoComplete="off"
          spellCheck={false}
        />
      </form>
      {history.map((entry, i) => (
        <div key={i} className="terminal-result">
          <span style={{ color: 'var(--blue)' }}>{entry.cmd}</span>
          {entry.output && <p>{entry.output}</p>}
        </div>
      ))}
      {line && !history.length && <p className="terminal-result">{line}</p>}
    </div>
  );
}

/* ========================
   PROJECT CARD
   ======================== */
function Project({ project }) {
  const tags = [...new Set([project.language, ...(project.topics || [])])]
    .filter(Boolean)
    .slice(0, 4);

  return (
    <article className="project-card">
      <div className="project-art">
        <span>{'</>'}</span>
        <b>{project.name}</b>
      </div>
      <h3>{project.name}</h3>
      <p>{project.description || 'A project built with care and curiosity.'}</p>
      <div className="tags">
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <a href={project.githubUrl} target="_blank" rel="noreferrer">
        <Icon name="github" size={17} /> GitHub <b>↗</b>
      </a>
    </article>
  );
}

/* ========================
   SCROLL ANIMATION HOOK
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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.animate-in');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
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

  const t = copy[lang];

  useScrollAnimation();

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

  const valueProps = [
    ['◇', 'Architecture', 'Clear systems, designed to last.'],
    ['↯', 'Reliability', 'Details that make products dependable.'],
    ['✦', 'Curiosity', 'Always learning the next useful thing.']
  ];

  return (
    <div className="app-shell">
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
            <span className="status">
              <i />
              {t.available}
            </span>
            <p className="eyebrow">{t.role}</p>
            <h1>
              {t.name.split('\n').map((part) => (
                <span key={part}>{part}</span>
              ))}
            </h1>
            <p className="lead">{t.lead}</p>
            <div className="actions">
              <a className="button primary" href="#projects">
                {t.explore} <b>→</b>
              </a>
              <a className="button" href={`mailto:${profile.email}`}>
                {t.contact} <b>↗</b>
              </a>
            </div>
          </div>
          <Terminal t={t} />
        </section>

        {/* ===== ABOUT ===== */}
        <section className="section about animate-in" id="about">
          <p className="eyebrow">{t.aboutLabel}</p>
          <h2>
            {t.about.split('\n').map((part) => (
              <span key={part}>{part}</span>
            ))}
          </h2>
          <p className="section-intro">{t.aboutText}</p>
          <div className="value-grid">
            {valueProps.map(([icon, title, text]) => (
              <article key={title}>
                <span>{icon}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ===== SKILLS ===== */}
        <section className="section skills-section animate-in" id="skills">
          <p className="eyebrow">{t.skillsLabel}</p>
          <h2>
            {t.skills.split('\n').map((part) => (
              <span key={part}>{part}</span>
            ))}
          </h2>
          <div className="skill-groups">
            {skillGroups.map((group) => (
              <article className="skill-group" key={group.title}>
                <header>
                  <SkillIcon name={group.icon} />
                  <h3>{group.title}</h3>
                  <small>{group.items.length}</small>
                </header>
                <div>
                  {group.items.map(([name, icon]) => (
                    <span
                      className="skill-pill"
                      key={`${group.title}-${name}`}
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
          <p className="eyebrow">{t.projectsLabel}</p>
          <h2>{t.projects}</h2>
          <p className="section-intro">{t.projectText}</p>
          <div className="project-grid">
            {projects.length ? (
              projects.map((project) => (
                <Project key={project.githubUrl} project={project} />
              ))
            ) : (
              <article className="project-empty">
                Pinned projects will appear here after GitHub sync.
              </article>
            )}
          </div>
          <a
            className="all-link"
            href={`${profile.github}?tab=repositories`}
            target="_blank"
            rel="noreferrer"
          >
            {t.all} ↗
          </a>
        </section>

        {/* ===== CONTACT ===== */}
        <section className="contact animate-in" id="contact">
          <p className="eyebrow">{t.contactLabel}</p>
          <h2>
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
          <a href={`mailto:${profile.email}`}>
            {profile.email}
            <b>↗</b>
          </a>
          <p className="social-links">
            <a href={profile.github} target="_blank" rel="noreferrer">
              <Icon name="github" /> {t.github}
            </a>
            <a href={profile.telegram} target="_blank" rel="noreferrer">
              <Icon name="telegram" /> {t.telegram}
            </a>
          </p>
        </section>
      </main>
    </div>
  );
}
