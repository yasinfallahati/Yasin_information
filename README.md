# Yasin Fallahati — Portfolio

Personal developer portfolio for **Yasin Fallahati** (یاسین فلاحتی) — AI Engineer, Python Developer, and Automation Builder.

## Tech Stack

- **Framework**: Next.js 16 (App Router, Static Export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## Features

- 🌐 **Three-language support**: Persian (RTL), English, German
- 🎨 **Dark premium developer aesthetic** with cyan/violet accent
- 📱 **Responsive design** — desktop, tablet, mobile
- 🔄 **Language persistence** via localStorage
- ⚡ **Static site generation** for fast loading
- 📊 **GitHub API integration** with client-side fetching
- 🔍 **Project filtering** by category and search
- 🎯 **SEO optimized** — metadata, sitemap, robots.txt, hreflang
- ♿ **Accessible** — keyboard navigation, semantic HTML, ARIA labels

## Architecture

```
src/
├── app/
│   ├── [locale]/           # Locale-based routing (fa/en/de)
│   │   ├── page.tsx        # Homepage
│   │   ├── about/
│   │   ├── projects/
│   │   │   ├── page.tsx    # Projects listing
│   │   │   └── [slug]/     # Project details
│   │   ├── skills/
│   │   ├── journey/
│   │   ├── certificates/
│   │   └── contact/
│   ├── layout.tsx          # Root layout
│   ├── sitemap.ts          # Dynamic sitemap
│   └── robots.ts           # Robots.txt
├── components/
│   ├── layout/             # Navbar, Footer, LanguageSwitcher
│   ├── sections/           # Hero, About, Skills, Projects, etc.
│   ├── projects/           # ProjectCard, ProjectGrid, etc.
│   └── ui/                 # Button, Card, Badge, Container, etc.
├── data/                   # Static data (projects, skills, etc.)
├── hooks/                  # Custom React hooks
├── lib/                    # Utilities (i18n, github, utils)
├── locales/                # Translation files (fa/en/de)
└── types/                  # TypeScript type definitions
```

## Installation

```bash
git clone https://github.com/yasinfallahati/Yasin_information.git
cd Yasin_information
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Build

```bash
npm run build
```

Output will be in the `out/` directory.

## Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

```
GITHUB_TOKEN=          # Optional: GitHub personal access token for higher rate limits
```

## Adding Projects

Edit `src/data/projects.ts` to add or modify projects:

```typescript
{
  slug: "my-project",
  name: "My Project",
  description: {
    fa: "توضیحات فارسی",
    en: "English description",
    de: "Deutsche Beschreibung",
  },
  category: "ai",           // ai | backend | automation | web | game | tools | telegram | data
  technologies: ["Python", "FastAPI"],
  github: "https://github.com/...",
  demo: "https://...",
  featured: true,
}
```

## Adding Translations

Edit files in `src/locales/`:

- `fa.json` — Persian
- `en.json` — English
- `de.json` — German

## Deployment

### GitHub Pages

The project is configured for static export. Push to GitHub and enable GitHub Pages:

1. Set source to `main` branch and `/ (root)` folder
2. Or use GitHub Actions with:

```yaml
- uses: actions/configure-pages@v5
- uses: actions/upload-pages-artifact@v3
  with:
    path: out
- uses: actions/deploy-pages@v4
```

## Sections

- **Hero** — Name, roles, stats, CTA buttons
- **About** — Core values and philosophy
- **Skills** — Technical skill groups with icons
- **Projects** — Featured projects with filtering
- **GitHub Stats** — Live GitHub statistics
- **Journey** — Learning roadmap with phases
- **Certificates** — Professional certifications
- **Contact** — Email and Telegram contact options

## License

MIT
