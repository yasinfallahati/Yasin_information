# SMG Portfolio V3 — SEO Specification

| Field | Value |
|-------|-------|
| **Document** | SEO Specification |
| **Version** | 3.0 |
| **Owner** | Saman Qasempour |
| **Status** | Active |
| **Last Updated** | 2026-08-07 |

---

## 1. Metadata

### Title Tag

| Page | Title | Length |
|------|-------|--------|
| **Home** | SMG — DevOps Engineer & AI Developer \| Building Reliable Systems | 62 chars |

### Meta Description

| Page | Description | Length |
|------|-------------|--------|
| **Home** | Portfolio of Saman Qasempour — DevOps Engineer building scalable infrastructure, automation systems, and AI-powered solutions with Linux, Docker, and modern technologies. | 165 chars |

### Meta Keywords

```
DevOps, Infrastructure, Linux, Docker, Kubernetes, AI, Automation,
Saman Qasempour, SMG, Portfolio, Backend, Python, TypeScript, Next.js,
Cloud, CI/CD, Monitoring, DevOps Engineer, NexusOps
```

---

## 2. Open Graph

| Property | Value |
|----------|-------|
| `og:title` | SMG — DevOps Engineer & AI Developer |
| `og:description` | Building reliable systems and digital products |
| `og:type` | website |
| `og:url` | https://samansmg.ir |
| `og:image` | /og-image.png |
| `og:image:width` | 1200 |
| `og:image:height` | 630 |
| `og:locale` | en_US |
| `og:site_name` | SMG |

---

## 3. Twitter Card

| Property | Value |
|----------|-------|
| `twitter:card` | summary_large_image |
| `twitter:title` | SMG — DevOps Engineer & AI Developer |
| `twitter:description` | Building reliable systems and digital products |
| `twitter:image` | /og-image.png |

---

## 4. Structured Data (JSON-LD)

### Person Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Saman Qasempour",
  "alternateName": "SMG",
  "url": "https://samansmg.ir",
  "jobTitle": "DevOps Engineer & AI Developer",
  "worksFor": {
    "@type": "Organization",
    "name": "SMG"
  },
  "knowsAbout": [
    "DevOps",
    "Linux",
    "Docker",
    "Kubernetes",
    "AI",
    "Automation",
    "Python",
    "TypeScript",
    "Next.js"
  ],
  "sameAs": [
    "https://github.com/SamanQasempour",
    "https://linkedin.com/in/samansmg",
    "https://instagram.com/saman_s.m.g",
    "https://t.me/Saman_Qasempour"
  ]
}
```

### WebSite Schema

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "SMG",
  "url": "https://samansmg.ir",
  "description": "Building reliable systems and digital products",
  "author": {
    "@type": "Person",
    "name": "Saman Qasempour"
  }
}
```

---

## 5. Robots

### robots.txt

```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/

Sitemap: https://samansmg.ir/sitemap.xml
```

---

## 6. Sitemap

### Auto-generated (next/sitemap)

```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://samansmg.ir',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
```

---

## 7. Canonical URL

| Page | Canonical |
|------|-----------|
| **Home** | https://samansmg.ir |

---

## 8. Heading Hierarchy

| Level | Content | Count |
|-------|---------|-------|
| **H1** | SMG (brand name in Hero) | 1 |
| **H2** | Section titles (About, Skills, Projects, etc.) | 6 |
| **H3** | Subsection titles | Variable |
| **H4** | Card titles | Variable |

### Rules

| Rule | Standard |
|------|----------|
| **H1 per page** | Exactly 1 |
| **Heading order** | Never skip levels (h1 → h3) |
| **H1 content** | Brand name or main heading |

---

## 9. Image SEO

| Rule | Standard |
|------|----------|
| **Alt text** | Descriptive, relevant |
| **File names** | kebab-case, descriptive |
| **Lazy loading** | Below the fold |
| **Dimensions** | Specify width/height |

### Example

```html
<img 
  src="/images/nexusops.png" 
  alt="NexusOps DevOps dashboard showing server monitoring" 
  width="1200" 
  height="800"
  loading="lazy"
/>
```

---

## 10. Performance for SEO

| Metric | Target | Impact |
|--------|--------|--------|
| **LCP** | < 2.5s | Ranking factor |
| **FID** | < 100ms | Ranking factor |
| **CLS** | < 0.1 | Ranking factor |
| **Mobile-friendly** | Yes | Ranking factor |
| **HTTPS** | Yes | Ranking factor |

---

## 11. Lighthouse Goals

| Category | Target |
|----------|--------|
| **Performance** | > 95 |
| **Accessibility** | > 95 |
| **Best Practices** | > 95 |
| **SEO** | 100 |

---

**Document Version:** 3.0
**Last Updated:** 2026-08-07
**Status:** Active — SEO Specification
