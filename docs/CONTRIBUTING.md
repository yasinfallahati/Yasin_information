# Contributing / راهنمای تغییرات / Mitwirken

## Update workflow / روند تغییر / Änderungsablauf

```powershell
npm.cmd run dev
# make and verify the change
npm.cmd run build
git add -A -- . ':!tmp'
git commit -m "describe the change"
git pull --rebase origin main
git push origin main
```

## Rules / قوانین / Regeln

- Do not commit `node_modules`, `dist`, `.vite`, tokens, or temporary reference folders.
- Preserve all three language entries when changing visitor-facing text.
- Do not use force-push on `main`.
- Build before pushing.
- Update the relevant document in this folder when architecture, content, or deployment changes.
