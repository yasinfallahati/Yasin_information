# SMG Portfolio V3 — Master Specification

| Field | Value |
|-------|-------|
| **Document** | Master Specification |
| **Version** | 3.0 |
| **Owner** | Saman Qasempour |
| **Brand** | SMG |
| **Website** | samansmg.ir |
| **Status** | Active |
| **Last Updated** | 2026-08-07 |

---

## Executive Summary

This is the master specification for SMG Portfolio V3 — the next-generation personal brand website for Saman Qasempour. It merges all specification documents into a single source of truth.

### Key Facts

| Field | Value |
|-------|-------|
| **Brand** | SMG |
| **Owner** | Saman Qasempour |
| **Type** | Technology Brand Website |
| **Tech Stack** | Next.js 15 + TypeScript + Tailwind CSS |
| **Hosting** | Vercel |
| **Domain** | samansmg.ir |
| **Status** | Active Development |

---

## Document Index

| # | Document | File | Purpose |
|---|----------|------|---------|
| 1 | PRD | `PRD.md` | Product Requirements |
| 2 | Product Strategy | `PRODUCT_STRATEGY.md` | Why we build |
| 3 | Product Architecture | `PRODUCT_ARCHITECTURE.md` | How it's organized |
| 4 | Product Rules | `PRODUCT_RULES.md` | Rules and principles |
| 5 | Brand Book | `BRAND_BOOK.md` | Brand identity |
| 6 | UX Specification | `UX_SPEC.md` | User experience |
| 7 | UI Specification | `UI_SPEC.md` | User interface |
| 8 | Design System | `DESIGN_SYSTEM.md` | Design tokens |
| 9 | Component Library | `COMPONENT_LIBRARY.md` | UI components |
| 10 | Content | `CONTENT.md` | Content strategy |
| 11 | Image Guide | `IMAGE_GUIDE.md` | Image specifications |
| 12 | Motion System | `MOTION_SYSTEM.md` | Animations |
| 13 | Engineering Spec | `ENGINEERING_SPEC.md` | Technical implementation |
| 14 | SEO Spec | `SEO_SPEC.md` | Search optimization |
| 15 | Deployment | `DEPLOYMENT.md` | Deployment process |

---

## Brand Identity

### Brand Name
**SMG** = Saman Qasempour

### Brand Promise
> "Building reliable systems and digital products."

### Brand Values
1. Engineering Excellence
2. Reliability
3. Innovation
4. Simplicity
5. Transparency

### Brand Personality
- Confident (80%)
- Technical (90%)
- Minimal (80%)
- Reliable (90%)
- Professional (80%)

### Color System

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg` | #0B0F19 | Page background |
| `--surface` | #111827 | Card backgrounds |
| `--primary` | #3B82F6 | Links, buttons |
| `--accent` | #6366F1 | Secondary accent |
| `--text` | #FFFFFF | Headings |
| `--text-secondary` | #94A3B8 | Body text |

### Typography

| Token | Size | Weight | Font |
|-------|------|--------|------|
| `display` | 72px | 700 | Geist |
| `h1` | 48px | 700 | Geist |
| `h2` | 36px | 600 | Geist |
| `body` | 16px | 400 | Geist |

---

## Site Structure

### Sections

| Section | Purpose | Priority |
|---------|---------|----------|
| **Hero** | Brand message, first impression | P0 |
| **About** | Who, what, why | P0 |
| **Skills** | Technical capabilities | P1 |
| **Projects** | Capability evidence | P0 |
| **Journey** | Trust building | P2 |
| **Contact** | Conversion | P1 |

### Navigation

```
Home → About → Skills → Projects → Journey → Contact
```

---

## Technical Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 15.x | Framework |
| React | 19.x | UI library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Styling |
| Framer Motion | 12.x | Animations |
| Lucide React | latest | Icons |
| Geist | latest | Font |

---

## Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse | > 95 |
| LCP | < 2.5s |
| FID | < 100ms |
| CLS | < 0.1 |

---

## Deployment

| Aspect | Value |
|--------|-------|
| **Platform** | Vercel |
| **Domain** | samansmg.ir |
| **SSL** | Automatic |
| **CDN** | Global |
| **CI/CD** | Automatic from GitHub |

---

## Roadmap

| Version | Theme | Timeline |
|---------|-------|----------|
| **V3** | Brand Foundation | 2026 |
| **V4** | Content Platform | 2027 |
| **V5** | Product Platform | 2028 |
| **V6** | Ecosystem | 2029+ |

---

## Product Principles

1. **Purpose Over Decoration** — Every section must justify its existence
2. **Evidence Over Claims** — Show, don't tell
3. **Performance Over Visual Effects** — Fast beats flashy
4. **Accessibility Before Aesthetics** — If someone can't use it, it doesn't matter
5. **Quality Over Quantity** — One excellent project beats ten mediocre ones
6. **Timeless Over Trendy** — Trends fade, quality remains
7. **Specific Over Generic** — Details build credibility
8. **Trust Through Transparency** — Open source, honest journey
9. **Simplicity Is Sophistication** — The best design is invisible
10. **Systems Over Individual Decisions** — Build a system, not a website

---

## Quick Reference

### Colors
```
Background: #0B0F19
Surface: #111827
Primary: #3B82F6
Accent: #6366F1
Text: #FFFFFF
Text Secondary: #94A3B8
```

### Spacing
```
4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px, 80px
```

### Border Radius
```
4px (sm), 8px (md), 12px (lg), 16px (xl), 9999px (full)
```

### Breakpoints
```
sm: 640px, md: 768px, lg: 1024px, xl: 1280px
```

---

**Document Version:** 3.0
**Last Updated:** 2026-08-07
**Status:** Active — Master Specification
