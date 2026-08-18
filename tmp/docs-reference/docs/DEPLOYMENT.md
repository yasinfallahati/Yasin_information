# SMG Portfolio V3 — Deployment Specification

| Field | Value |
|-------|-------|
| **Document** | Deployment Specification |
| **Version** | 3.0 |
| **Owner** | Saman Qasempour |
| **Status** | Active |
| **Last Updated** | 2026-08-07 |

---

## 1. Hosting

### Primary: Vercel

| Attribute | Value |
|-----------|-------|
| **Platform** | Vercel |
| **Plan** | Free tier |
| **Build** | Automatic from GitHub |
| **SSL** | Automatic |
| **CDN** | Global edge network |
| **Domain** | samansmg.ir |

### Why Vercel?

- Native Next.js support
- Automatic deployments
- Free SSL
- Global CDN
- Zero config

---

## 2. Domain

| Attribute | Value |
|-----------|-------|
| **Domain** | samansmg.ir |
| **Registrar** | (Current registrar) |
| **DNS** | Vercel DNS |
| **SSL** | Automatic (Let's Encrypt) |

### DNS Records

| Type | Name | Value | TTL |
|------|------|-------|-----|
| **A** | @ | 76.76.21.21 | Auto |
| **CNAME** | www | cname.vercel-dns.com | Auto |

---

## 3. CI/CD

### GitHub Actions (Optional)

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run lint

  typecheck:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run typecheck

  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
```

---

## 4. Environment Variables

| Variable | Value | Environment |
|----------|-------|-------------|
| `NEXT_PUBLIC_SITE_URL` | https://samansmg.ir | Production |
| `NEXT_PUBLIC_GA_ID` | (Google Analytics) | Production |

---

## 5. Monitoring

| Tool | Purpose | Plan |
|------|---------|------|
| **Vercel Analytics** | Performance | Free |
| **Google Search Console** | SEO | Free |
| **Google Analytics** | Traffic | Free |
| **Sentry** | Error tracking | Free |

---

## 6. Backup

| Aspect | Strategy |
|--------|----------|
| **Code** | GitHub repository |
| **Content** | In code (no CMS) |
| **Images** | Public folder in repo |
| **Config** | Environment variables |

---

## 7. Deployment Checklist

### Before Deploy

- [ ] `npm run lint` passes
- [ ] `npm run build` succeeds
- [ ] No TypeScript errors
- [ ] All images optimized
- [ ] SEO metadata complete
- [ ] OG image present

### After Deploy

- [ ] Site loads correctly
- [ ] All sections visible
- [ ] Navigation works
- [ ] Forms submit correctly
- [ ] Social links work
- [ ] Mobile responsive
- [ ] Lighthouse > 95

---

## 8. Rollback

| Step | Action |
|------|--------|
| 1 | Go to Vercel dashboard |
| 2 | Find deployment |
| 3 | Click "Promote to Production" |
| 4 | Select previous deployment |

---

**Document Version:** 3.0
**Last Updated:** 2026-08-07
**Status:** Active — Deployment Specification
