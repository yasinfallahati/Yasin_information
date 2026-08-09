# SMG Portfolio V3 — Engineering Specification

| Field | Value |
|-------|-------|
| **Document** | Engineering Specification |
| **Version** | 3.0 |
| **Owner** | Saman Qasempour |
| **Status** | Active |
| **Last Updated** | 2026-08-07 |

---

## 1. Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 15.x | React framework (App Router) |
| **React** | 19.x | UI library |
| **TypeScript** | 5.x | Type safety (strict mode) |
| **Tailwind CSS** | 4.x | Styling (CSS-first config) |
| **Framer Motion** | 12.x | Animations |
| **Lucide React** | latest | Icons |
| **Geist** | latest | Primary font |
| **clsx** | 2.x | Conditional classnames |

### Scripts

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## 2. Folder Structure

```
smg-portfolio/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Main page (assembles sections)
│   ├── globals.css         # Tailwind, design tokens
│   ├── robots.txt          # SEO: robots
│   └── sitemap.ts          # SEO: sitemap generator
│
├── components/
│   ├── ui/                 # Reusable UI primitives
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Input.tsx
│   │   ├── Textarea.tsx
│   │   ├── Container.tsx
│   │   └── GlassCard.tsx
│   │
│   └── sections/           # Page sections
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Skills.tsx
│       ├── Projects.tsx
│       ├── FeaturedProject.tsx
│       ├── Journey.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
│
├── data/
│   ├── projects.ts         # Projects data
│   └── stack.ts            # Tech stack data
│
├── lib/
│   ├── constants.ts        # Site config, nav links, etc.
│   └── utils.ts            # cn() utility
│
├── public/
│   ├── images/             # Project images
│   ├── favicon.ico
│   └── og-image.png
│
├── .ai/                    # AI documentation
├── docs/                   # Project specifications
├── AGENTS.md               # AI agent instructions
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

---

## 3. Naming Convention

| Type | Convention | Example |
|------|-----------|---------|
| **Components** | PascalCase | `Button.tsx`, `GlassCard.tsx` |
| **Pages** | lowercase | `page.tsx`, `layout.tsx` |
| **Utilities** | camelCase | `cn.ts`, `formatDate.ts` |
| **Constants** | UPPER_SNAKE | `SITE_CONFIG` |
| **Types** | PascalCase | `Project`, `NavItem` |
| **CSS classes** | camelCase (custom) | `glassCard`, `gradientText` |

---

## 4. TypeScript Rules

```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

### Rules

| Rule | Standard |
|------|----------|
| **Strict mode** | Always |
| **any type** | Forbidden |
| **Implicit returns** | Forbidden |
| **Unused variables** | Error |

---

## 5. Component Rules

| Rule | Standard |
|------|----------|
| **Type** | Functional only |
| **Export** | Named export |
| **Props** | TypeScript interface |
| **Styling** | Tailwind CSS only |
| **State** | Minimal, local |
| **Side effects** | useEffect with deps |
| **Accessibility** | aria-label on all interactive |
| **Animation** | viewport={{ once: true }} |

---

## 6. API Structure

### Data Files

```typescript
// data/projects.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  github?: string;
  demo?: string;
  featured?: boolean;
  status: "live" | "in-development" | "planned";
}

export const projects: Project[] = [...];
```

### Constants

```typescript
// lib/constants.ts
export const SITE_CONFIG = {
  name: "SMG",
  fullName: "Saman Qasempour",
  title: "Saman Qasempour | DevOps Engineer & AI Developer",
  description: "...",
  url: "https://samansmg.ir",
  ogImage: "/og-image.png",
  email: "samann1389@gmail.com",
  links: {
    github: "https://github.com/SamanQasempour",
    linkedin: "https://linkedin.com/in/samansmg",
    instagram: "https://instagram.com/saman_s.m.g",
    telegram: "https://t.me/Saman_Qasempour",
  },
} as const;
```

---

## 7. Performance Targets

| Metric | Target |
|--------|--------|
| **Lighthouse** | > 95 |
| **LCP** | < 2.5s |
| **FID** | < 100ms |
| **CLS** | < 0.1 |
| **TTFB** | < 600ms |
| **FCP** | < 1.8s |
| **Total Weight** | < 500KB |

---

## 8. Security

| Rule | Standard |
|------|----------|
| **HTTPS** | Enforced |
| **CSP** | Content Security Policy headers |
| **Dependencies** | Regular audit |
| **Secrets** | Never in code |

---

## 9. Git Convention

| Type | Usage |
|------|-------|
| **feat** | New feature |
| **fix** | Bug fix |
| **docs** | Documentation |
| **style** | Code style (no logic change) |
| **refactor** | Code refactoring |
| **test** | Adding tests |
| **chore** | Build/config changes |

### Format

```
feat: add contact form validation
fix: resolve mobile menu animation
docs: update README
```

---

**Document Version:** 3.0
**Last Updated:** 2026-08-07
**Status:** Active — Engineering Specification
