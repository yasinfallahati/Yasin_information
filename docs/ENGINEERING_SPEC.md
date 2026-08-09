# Engineering Specification / مشخصات فنی / Engineering-Spezifikation

## Architecture

```text
src/main.jsx          application entry and background mount
src/App.jsx           content, state, sections, icons
src/components/       reusable UI components
src/styles.css        design system and responsive styles
src/contact.css       floating sidebar styles
public/               deployable static data
scripts/              GitHub synchronization script
```

## English

The application is a Vite SPA built with React. Language and theme are stored in `localStorage`; `document.documentElement` receives `lang`, `dir`, and `data-theme`. Pinned project data is fetched at runtime from the Vite base path, making GitHub Pages subpath deployment safe.

## فارسی

برنامه یک SPA ساخته‌شده با React و Vite است. زبان و تم در `localStorage` ذخیره می‌شوند و روی `document.documentElement`، مقدارهای `lang`، `dir` و `data-theme` قرار می‌گیرد. اطلاعات پروژه‌های Pin‌شده در زمان اجرا و از base path مربوط به Vite دریافت می‌شود تا استقرار GitHub Pages با مسیر زیرپوشه نیز درست عمل کند.

## Deutsch

Die Anwendung ist eine React/Vite-SPA. Sprache und Theme liegen in `localStorage`; `lang`, `dir` und `data-theme` werden am Dokumentelement gesetzt. Angeheftete Projektdaten werden zur Laufzeit über den Vite-Basispfad geladen.

## Verification

```powershell
npm.cmd run build
```

The build must pass before every release.
