# Yasin — AI / Backend Developer Portfolio

A fast, responsive personal portfolio built to present backend engineering, AI experiments, and automation work with clarity.

The site is intentionally lightweight: no framework, no build step, and no unnecessary visual effects. Its featured-project section is automatically kept in sync with the repositories pinned on my GitHub profile.

## Highlights

- Dark-first interface with a saved light-mode preference
- Persian / RTL layout with responsive navigation
- Accessible structure: semantic sections, keyboard-friendly controls, skip link, and reduced-motion support
- Honest skill levels grouped by Backend, AI/ML, and Automation
- Dynamic GitHub projects section powered by pinned repositories
- Minimal footprint: plain HTML, CSS, and vanilla JavaScript

## Tech stack

| Area | Choice |
| --- | --- |
| Markup | HTML5 |
| Styling | Modern CSS, custom properties, responsive grid |
| Interaction | Vanilla JavaScript |
| Font | Vazirmatn + Inter |
| Project sync | GitHub Actions + GitHub GraphQL API |

## Project structure

```text
.
├── assets/                         # Resume and local visual assets
├── scripts/
│   └── sync-pinned-projects.mjs    # Fetches pinned repositories from GitHub
├── .github/workflows/
│   └── sync-pinned-projects.yml    # Scheduled GitHub Action
├── index.html
├── styles.css
├── script.js
└── pinned-projects.json            # Generated project data used by the site
```

## Run locally

Because this is a static site, any local server will work. For example:

```bash
npx serve .
```

Then open the local address shown in your terminal. Avoid opening `index.html` directly if you want to test project loading, because browsers restrict `fetch()` from local files.

## Automatic pinned-project sync

The Projects section is generated from repositories pinned on the GitHub profile [`@yasinfallahati`](https://github.com/yasinfallahati).

The workflow at `.github/workflows/sync-pinned-projects.yml` runs every six hours. It uses GitHub's built-in `GITHUB_TOKEN` to read the pinned repositories through the GraphQL API, updates `pinned-projects.json`, and commits the change back to the repository.

To refresh the list immediately:

1. Pin or unpin a repository on your GitHub profile.
2. Open this repository on GitHub.
3. Go to **Actions** → **Sync pinned GitHub projects**.
4. Select **Run workflow**.

> Ensure GitHub Actions has **Read and write permissions** for this repository: **Settings** → **Actions** → **General** → **Workflow permissions**.

No personal access token is exposed in the browser or committed to the repository.

## Customization

- Update personal copy, contact links, and hero content in `index.html`.
- Replace `assets/resume.pdf` with your current CV.
- Update colors in the `:root` variables inside `styles.css`.
- Add a description and homepage URL to each GitHub repository; they appear in the project cards automatically.

## Deployment

This project can be deployed to GitHub Pages, Vercel, Netlify, or any static hosting provider. For GitHub Pages, publish from the branch where the workflow commits `pinned-projects.json` so the refreshed projects are included in the deployed site.

## License

This portfolio is personal work. Feel free to use it as inspiration, but please do not publish it as your own unchanged portfolio.
