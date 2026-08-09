# Yasin Fallahati — AI & Backend Portfolio

<p align="center">
  <strong>Multilingual portfolio for AI, backend, automation, and web development.</strong><br />
  پورتفولیوی چندزبانهٔ یاسین فلاحتی برای هوش مصنوعی، بک‌اند، اتوماسیون و وب<br />
  Mehrsprachiges Portfolio für KI, Backend, Automatisierung und Webentwicklung
</p>

<p align="center">
  <a href="https://yasinfallahati.github.io/profileyasin/">Live site</a> ·
  <a href="docs/README.md">Documentation</a> ·
  <a href="#local-development">Local development</a> ·
  <a href="#deployment">Deployment</a>
</p>

---

## Overview / معرفی / Überblick

| | |
|---|---|
| **Owner** | Yasin Fallahati / یاسین فلاحتی |
| **Role** | AI, backend, automation & web developer |
| **Languages** | فارسی (RTL), English, Deutsch |
| **Stack** | React 19, Vite, vanilla CSS |
| **Hosting** | GitHub Pages + GitHub Actions |
| **Project data** | GitHub pinned repositories |

## Highlights / ویژگی‌ها / Highlights

- 🌐 Persian, English, and German interface with persistent language selection.
- 🌓 Complete dark and light themes.
- 📱 Responsive floating navigation: sidebar, top dock, then mobile bottom dock.
- 🧩 Categorized skill inventory with program and concept icons.
- 💻 Interactive presentation terminal — safe, client-side, and not connected to a real shell.
- 📌 Project cards generated from pinned GitHub repositories.
- ♿ Keyboard-friendly controls and clear external links.

## Skills / مهارت‌ها / Fähigkeiten

| Area | Skills |
|---|---|
| **Backend** | Python, FastAPI, Flask, REST API, Async/Await, Microservices, Web Scraping, API Integration |
| **Frontend / Web** | HTML5, CSS3, Responsive Design, JavaScript, Web App Development |
| **AI & Data** | NumPy, Matplotlib, Data Processing, AI Integration, AI Scripts, Chatbots, AI API Integration |
| **Automation** | n8n, Python Automation, Telegram Bots, Workflow Automation, API Automation |
| **Tools** | Git, GitHub, VS Code, n8n |

## Local development / اجرای محلی / Lokale Entwicklung

### Prerequisites

- Node.js 20 or later
- npm

```powershell
git clone https://github.com/yasinfallahati/profileyasin.git
cd profileyasin
npm.cmd install
npm.cmd run dev
```

Open the local address shown by Vite, normally `http://localhost:5173`.

برای ویندوز از `npm.cmd` استفاده کنید تا محدودیت اجرای `npm.ps1` در PowerShell مشکلی ایجاد نکند.

Unter Windows kann `npm.cmd` verwendet werden, falls PowerShell `npm.ps1` blockiert.

### Production check

```powershell
npm.cmd run build
npm.cmd run preview
```

## Project structure / ساختار پروژه / Projektstruktur

```text
src/
  App.jsx                 content, application state, sections and icons
  main.jsx                React entry point
  styles.css              design system and responsive styles
  contact.css             floating navigation styles
  components/Sidebar.jsx  navigation controls
public/
  pinned-projects.json    synchronized pinned-project data
scripts/
  sync-pinned-projects.mjs GitHub GraphQL sync script
docs/                     multilingual product and engineering documentation
.github/workflows/        deployment and project-sync automation
```

## Updating selected projects / پروژه‌های منتخب / Ausgewählte Projekte

1. Open the GitHub profile and choose repositories in **Customize your pins**.
2. Open **Actions** in this repository.
3. Run **Sync pinned GitHub projects**.
4. The workflow updates `public/pinned-projects.json` and deploys the website.

For local testing, `public/pinned-projects.json` can be edited directly.

## Deployment / انتشار / Bereitstellung

This repository deploys to GitHub Pages whenever changes are pushed to `main`.

1. Open **Settings → Pages** in the GitHub repository.
2. Set **Source** to **GitHub Actions**.
3. Build, commit, rebase, and push:

```powershell
npm.cmd run build
git add -A -- . ':!tmp'
git commit -m "update portfolio"
git pull --rebase origin main
git push origin main
```

4. Wait for **Deploy portfolio** in GitHub Actions to finish.

The site is published at: **https://yasinfallahati.github.io/profileyasin/**

## Documentation / مستندات / Dokumentation

Detailed product, design, engineering, AI context, deployment, and contribution documents live in [docs/README.md](docs/README.md).

## Contact

- GitHub: [@yasinfallahati](https://github.com/yasinfallahati)
- Telegram: [@Yasinfallahatiii](https://t.me/Yasinfallahatiii)
- Email: [fallahatiasin829@gmail.com](mailto:fallahatiasin829@gmail.com)
