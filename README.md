# Yasin Fallahati — yasin_information

An editorial, dark-first portfolio for an AI and backend developer. Built with React and Vite, deployed through GitHub Pages, and synced with the repositories pinned on GitHub.

## Stack

- React 19
- Vite 7
- Vanilla CSS (custom design system, no UI library)
- GitHub Actions + GitHub GraphQL API
- GitHub Pages

## Features

- Responsive Persian/RTL interface with an English technical visual language
- Light and dark themes, persisted locally
- Accessible links and motion-conscious interaction
- Project cards generated from pinned repositories at `@yasinfallahati`
- Automated build and GitHub Pages deployment

## Local development

```bash
npm install
npm run dev
```

On Windows PowerShell, use `npm.cmd` if PowerShell blocks `npm.ps1`:

```powershell
npm.cmd install
npm.cmd run dev
```

## GitHub project sync

`.github/workflows/sync-pinned-projects.yml` fetches up to six pinned repositories every six hours, writes `public/pinned-projects.json`, builds the site, and deploys it. You can trigger it immediately from **Actions → Sync pinned GitHub projects → Run workflow**.

For the workflow to commit the refreshed JSON, enable **Settings → Actions → General → Workflow permissions → Read and write permissions**.

## Deployment

The workflow at `.github/workflows/deploy.yml` deploys every push to `main`. In GitHub, set **Settings → Pages → Source** to **GitHub Actions**.

The Vite base path is configured for this repository: `https://yasinfallahati.github.io/profileyasin/`.

## Structure

```text
src/              React components and styles
public/           Public project data
scripts/          GitHub GraphQL sync script
.github/workflows CI, sync, and deployment workflows
```
