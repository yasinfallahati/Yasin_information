# Yasin Fallahati, portfolio

Personal portfolio for **Yasin Fallahati** (یاسین فلاحتی), AI engineer and Python developer. Live at [profileyasin.vercel.app](https://profileyasin.vercel.app/).

The site is organised around one idea: a day with the software he builds. Morning at a school (Hamyar Madrese), afternoon at a phone-repair counter (Fixo), evening away from the laptop (Voice Desk), midnight in a newsroom (Nabz-e Farda). Each part of the day has its own colour, used on the home page, the work list and the project pages.

## Stack

- Next.js 16 (App Router, static export)
- TypeScript
- Tailwind CSS v4
- Estedad for Persian and Schibsted Grotesk for English and German, self-hosted through `next/font`

Pages are Server Components. The only client JavaScript written for the site is the language switcher and the `[locale]` not-found page.

## Languages

Persian (default, right-to-left), English and German, routed as `/fa`, `/en` and `/de`.

## Structure

```
src/
├── app/
│   ├── (root)/             # "/" redirects to /fa
│   ├── [locale]/           # Home, work, project pages, about
│   ├── global-not-found.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
├── content/
│   ├── projects.ts         # Four main projects and the smaller ones
│   └── site.ts             # Interface copy, contact details, tools, courses
└── lib/                    # Locale helpers and fonts
public/projects/            # Project screenshots (WebP)
```

## Development

```bash
npm install
npm run dev
```

```bash
npm run build
```

The build output goes to `out/`.

## Editing content

All text lives in `src/content/`. Every string has `fa`, `en` and `de` versions, and TypeScript reports a missing translation. To add a main project, add an entry to `projects` in `src/content/projects.ts` and put its screenshots in `public/projects/`.

## License

MIT
