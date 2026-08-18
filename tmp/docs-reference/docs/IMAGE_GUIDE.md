# SMG Portfolio V3 — Image Guide

| Field | Value |
|-------|-------|
| **Document** | Image Specification |
| **Version** | 3.0 |
| **Owner** | Saman Qasempour |
| **Status** | Active |
| **Last Updated** | 2026-08-07 |

---

## 1. Hero Image

### Prompt (for AI generation)

**English:**

> Abstract dark gradient background with subtle blue and indigo mesh pattern. Minimal, clean, premium feel. Dark navy (#0B0F19) base with subtle blue (#3B82F6) and indigo (#6366F1) accents. No text, no objects, just abstract gradient mesh. Suitable for a technology brand website hero section.

**فارسی:**

> پس‌زمینه گرادیانت تاریک انتزاعی با الگوی مش آبی و ایندیگو ظریف. احساس مینیمال، تمیز، پرمیوم. پایه سرمه‌ای تاریک (#0B0F19) با ته‌رنگ‌های آبی (#3B82F6) و ایندیگو (#6366F1) ظریف. بدون متن، بدون اشیاء، فقط گرادیانت مش انتزاعی. مناسب بخش Hero وب‌سایت برند فناوری.

### Specifications

| Attribute | Value |
|-----------|-------|
| **Type** | Abstract gradient/mesh |
| **Colors** | #0B0F19, #111827, #3B82F6, #6366F1 |
| **Resolution** | 1920x1080 minimum |
| **Format** | WebP (preferred), PNG |
| **Quality** | 85% |
| **Animation** | Subtle gradient shift (optional) |

---

## 2. Project Images

### NexusOps

**Prompt:**

> Dark dashboard screenshot of a DevOps monitoring platform. Shows real-time metrics, server status, Docker containers, and alert panels. Dark theme (#0B0F19 background), blue accent (#3B82F6), clean UI, professional design. Technical, modern, minimal.

**Specifications:**

| Attribute | Value |
|-----------|-------|
| **Type** | Dashboard screenshot / mockup |
| **Background** | #0B0F19 or #111827 |
| **Accent** | #3B82F6 |
| **Resolution** | 1200x800 minimum |
| **Format** | WebP, PNG |
| **Padding** | 24px minimum |

### Other Projects

**Prompt:**

> Clean, minimal project screenshot on dark background. Professional, modern interface. Dark theme consistent with SMG brand. No text overlay.

**Specifications:**

| Attribute | Value |
|-----------|-------|
| **Type** | Screenshot / mockup |
| **Background** | #0B0F19 or #111827 |
| **Resolution** | 800x600 minimum |
| **Format** | WebP, PNG |

---

## 3. About Image

**Prompt:**

> Professional headshot on dark background. Clean, minimal, confident. Dark navy background (#0B0F19). Soft lighting, professional attire. High quality, sharp focus.

**Specifications:**

| Attribute | Value |
|-----------|-------|
| **Type** | Professional photo |
| **Background** | #0B0F19 or #111827 |
| **Resolution** | 400x400 minimum |
| **Format** | WebP, JPG |
| **Quality** | 90% |

---

## 4. Icons

### Library

| Library | Usage |
|---------|-------|
| **Lucide React** | Primary icon set |
| **Custom SVGs** | Brand-specific icons |

### Icon Specifications

| Attribute | Value |
|-----------|-------|
| **Style** | Outline (not filled) |
| **Stroke width** | 1.5px |
| **Sizes** | 16px, 20px, 24px, 32px |
| **Color** | Inherits from parent (currentColor) |

### Required Icons

| Icon | Usage | Source |
|------|-------|--------|
| Monitor | Skills - Linux | Lucide |
| Container | Skills - Docker | Lucide |
| Network | Skills - Kubernetes | Lucide |
| BarChart3 | Skills - Monitoring | Lucide |
| Brain | Skills - AI | Lucide |
| Settings | Skills - Automation | Lucide |
| Github | Social link | Lucide |
| Linkedin | Social link | Lucide |
| Send | Contact - Telegram | Lucide |
| Instagram | Social link | Lucide |
| ArrowDown | Hero scroll indicator | Lucide |
| ExternalLink | Project links | Lucide |
| Mail | Contact email | Lucide |

---

## 5. OG Image

**Prompt:**

> Social media preview image for a technology brand. Dark background (#0B0F19), "SMG" logo text in white, tagline "Building reliable systems and digital products" in gray. Clean, minimal, professional. 1200x630 aspect ratio.

**Specifications:**

| Attribute | Value |
|-----------|-------|
| **Type** | Social preview |
| **Resolution** | 1200x630px |
| **Format** | PNG |
| **Quality** | 95% |
| **Background** | #0B0F19 |
| **Text** | SMG (white) + tagline (gray) |

---

## 6. Favicon

**Specifications:**

| Attribute | Value |
|-----------|-------|
| **Type** | SMG mark |
| **Sizes** | 16x16, 32x32, 48x48, 64x64, 128x128, 192x192, 512x512 |
| **Format** | PNG (with transparency) |
| **Background** | Transparent or #0B0F19 |
| **Mark** | "SMG" text or abstract mark |

### Favicon Files

```
public/
├── favicon.ico          (32x32)
├── favicon-16x16.png    (16x16)
├── favicon-32x32.png    (32x32)
├── apple-touch-icon.png (180x180)
├── android-chrome-192x192.png
├── android-chrome-512x512.png
└── site.webmanifest
```

---

## Image Optimization Rules

| Rule | Standard |
|------|----------|
| **Format** | WebP (primary), PNG (fallback) |
| **Quality** | 85% photos, 95% graphics |
| **Lazy loading** | All images below the fold |
| **Alt text** | Descriptive, relevant, concise |
| **Dimensions** | Specify width/height to prevent CLS |
| **Responsive** | Serve multiple sizes |

---

**Document Version:** 3.0
**Last Updated:** 2026-08-07
**Status:** Active — Image Guide
