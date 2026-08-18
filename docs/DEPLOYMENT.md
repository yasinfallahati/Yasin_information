# Deployment / استقرار / Bereitstellung

## English

GitHub Pages deploys automatically after a push to `main` through `.github/workflows/deploy.yml`.

1. In GitHub repository settings, set **Pages → Source** to **GitHub Actions**.
2. Verify the build locally: `npm.cmd run build`.
3. Commit and push your change.
4. Open the **Actions** tab and wait for **Deploy portfolio** to complete.
5. Open `https://yasinfallahati.github.io/profileyasin/`.

## فارسی

بعد از push به شاخهٔ `main`، فایل `.github/workflows/deploy.yml` سایت را خودکار روی GitHub Pages منتشر می‌کند.

1. در تنظیمات ریپو، **Pages → Source** را روی **GitHub Actions** قرار دهید.
2. ابتدا build محلی را بررسی کنید: `npm.cmd run build`.
3. تغییرات را commit و push کنید.
4. در تب **Actions** منتظر تکمیل **Deploy portfolio** بمانید.
5. سایت را در لینک بالا باز کنید.

## Deutsch

Nach einem Push auf `main` veröffentlicht `.github/workflows/deploy.yml` die Seite automatisch auf GitHub Pages. Unter **Pages → Source** muss **GitHub Actions** gewählt sein. Vor dem Push lokal mit `npm.cmd run build` prüfen und anschließend den Workflow **Deploy portfolio** abwarten.

## Pinned projects sync

Run **Sync pinned GitHub projects** manually from GitHub Actions or wait for its schedule. It updates `public/pinned-projects.json`; pin repositories on the GitHub profile to control the selection.
