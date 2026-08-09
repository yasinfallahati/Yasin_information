# SMG Portfolio V3 — UI Specification

| Field | Value |
|-------|-------|
| **Document** | UI Specification |
| **Version** | 3.0 |
| **Owner** | Saman Qasempour |
| **Brand** | SMG |
| **Website** | samansmg.ir |
| **Status** | Active |
| **Last Updated** | 2026-08-07 |
| **Depends On** | All previous documents |

---

## Table of Contents

- [1. Navbar](#1-navbar)
- [2. Hero](#2-hero)
- [3. About](#3-about)
- [4. Skills](#4-skills)
- [5. Projects](#5-projects)
- [6. Featured Project](#6-featured-project)
- [7. Journey](#7-journey)
- [8. Contact](#8-contact)
- [9. Footer](#9-footer)

---

# 1. Navbar

## Layout

### Desktop (≥1024px)

```
┌─────────────────────────────────────────────────────────────┐
│  [Logo/Name]                    [Nav Links]    [Social]     │
│  ← 24px →                      ← gap 32px →  ← gap 16px → │
│                                                             │
│  Height: 64px                                              │
│  Max-width: 1200px (centered)                              │
└─────────────────────────────────────────────────────────────┘
```

### Tablet (768px-1023px)

```
┌─────────────────────────────────────────┐
│  [Logo/Name]              [Nav Links]   │
│  ← 24px →                ← gap 24px →  │
│                                         │
│  Height: 64px                          │
│  Padding: 0 24px                       │
└─────────────────────────────────────────┘
```

### Mobile (<768px)

```
┌─────────────────────┐
│  [Logo/Name]  [☰]   │
│  ← 16px →    ← 16→ │
│                     │
│  Height: 56px      │
│  Padding: 0 16px   │
└─────────────────────┘
```

## Spacing

| Element | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| **Container padding-x** | 24px | 24px | 16px |
| **Logo to nav gap** | auto | auto | auto |
| **Nav link gap** | 32px | 24px | — |
| **Social link gap** | 16px | — | — |
| **Nav height** | 64px | 64px | 56px |

## Colors

| Element | Default | Scrolled | Mobile Menu |
|---------|---------|----------|-------------|
| **Background** | transparent | rgba(11, 15, 25, 0.8) + backdrop-blur | #0B0F19 |
| **Text** | #FFFFFF | #FFFFFF | #FFFFFF |
| **Text hover** | #3B82F6 | #3B82F6 | #3B82F6 |
| **Active indicator** | #3B82F6 | #3B82F6 | #3B82F6 |
| **Border** | none | rgba(30, 41, 59, 0.5) | none |

## Typography

| Element | Size | Weight | Font |
|---------|------|--------|------|
| **Logo/Name** | 20px | 600 | Geist |
| **Nav links** | 14px | 500 | Geist |
| **Social icons** | 20px | — | Lucide |

## Animation

| Interaction | Animation | Duration | Easing |
|-------------|-----------|----------|--------|
| **Scroll down** | Background fade in | 200ms | ease-out |
| **Scroll up** | Background fade out | 200ms | ease-out |
| **Link hover** | Color change | 150ms | ease |
| **Mobile menu open** | Slide down + fade | 200ms | ease-out |
| **Mobile menu close** | Slide up + fade | 200ms | ease-in |
| **Active section** | Underline appear | 150ms | ease |

## Responsive Breakpoints

| Breakpoint | Layout Change |
|------------|---------------|
| **≥1024px** | Full nav + social links |
| **768-1023px** | Nav links only (no social) |
| **<768px** | Hamburger menu |

## Arabic

### لایوت

#### دسکتاپ (≥1024px)

```
┌─────────────────────────────────────────────────────────────┐
│  [لوگو/نام]                   [لینک‌های ناوبری]  [اجتماعی]  │
│  ← ۲۴px →                   ← gap ۳۲px →  ← gap ۱۶px →  │
│                                                             │
│  ارتفاع: ۶۴px                                             │
│  حداکثر عرض: ۱۲۰۰px (مرکز شده)                            │
└─────────────────────────────────────────────────────────────┘
```

#### تبلت (768px-1023px)

```
┌─────────────────────────────────────────┐
│  [لوگو/نام]              [لینک‌ها]      │
│  ← ۲۴px →                ← gap ۲۴px →  │
│                                         │
│  ارتفاع: ۶۴px                         │
│  پدینگ: ۰ ۲۴px                        │
└─────────────────────────────────────────┘
```

#### موبایل (<768px)

```
┌─────────────────────┐
│  [لوگو/نام]  [☰]   │
│  ← ۱۶px →    ← ۱۶→ │
│                     │
│  ارتفاع: ۵۶px     │
│  پدینگ: ۰ ۱۶px    │
└─────────────────────┘
```

---

# 2. Hero

## Layout

### Desktop (≥1024px)

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                                                             │
│                      [SMG]                                  │
│                      ← centered →                           │
│                                                             │
│                      Building reliable                      │
│                      systems and digital                    │
│                      products                               │
│                                                             │
│                                                             │
│                                                             │
│                         ↓                                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘

Height: 100vh
Content: Vertically + Horizontally centered
```

### Mobile (<768px)

```
┌─────────────────────┐
│                     │
│                     │
│      [SMG]          │
│                     │
│      Building       │
│      reliable       │
│      systems        │
│      and digital    │
│      products       │
│                     │
│                     │
│        ↓            │
│                     │
└─────────────────────┘

Height: 100vh (100dvh on mobile)
```

## Spacing

| Element | Desktop | Mobile |
|---------|---------|--------|
| **Container padding-x** | 24px | 16px |
| **Brand name margin-bottom** | 24px | 16px |
| **Tagline max-width** | 600px | 100% |
| **Scroll indicator bottom** | 40px | 24px |

## Colors

| Element | Color |
|---------|-------|
| **Background** | #0B0F19 |
| **Background gradient** | radial-gradient(ellipse at center, #111827 0%, #0B0F19 70%) |
| **Brand name** | #FFFFFF |
| **Tagline** | #94A3B8 |
| **Scroll indicator** | #64748B |

## Typography

| Element | Size | Weight | Line Height | Font |
|---------|------|--------|-------------|------|
| **Brand name "SMG"** | 72px (display) | 700 | 1.1 | Geist |
| **Tagline** | 20px (h4) | 400 | 1.6 | Geist |
| **Scroll indicator** | 24px | — | — | Lucide |

## Animation

| Element | Animation | Details |
|---------|-----------|---------|
| **Brand name** | Fade in + slide up | 600ms, delay 200ms, ease-out |
| **Tagline** | Fade in + slide up | 600ms, delay 400ms, ease-out |
| **Scroll indicator** | Bounce | 2s infinite, ease-in-out |
| **Background** | Subtle gradient shift | 20s infinite, ease-in-out |

## Responsive Breakpoints

| Breakpoint | Layout Change |
|------------|---------------|
| **≥1024px** | Full display size, horizontal layout |
| **768-1023px** | Slightly smaller display |
| **<768px** | Stacked layout, smaller text |

## Arabic

### لایوت

#### دسکتاپ (≥1024px)

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                                                             │
│                      [SMG]                                  │
│                      ← مرکز شده →                           │
│                                                             │
│                      ساختن سیستم‌های                        │
│                      قابل اعتماد و                          │
│                      محصولات دیجیتال                        │
│                                                             │
│                                                             │
│                                                             │
│                         ↓                                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘

ارتفاع: ۱۰۰vh
محتوا: عمودی + افقی مرکز شده
```

---

# 3. About

## Layout

### Desktop (≥1024px)

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  About Us                                                   │
│  ← 80px top padding →                                      │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                                                     │   │
│  │  [Mission Statement]                                │   │
│  │  Max-width: 800px                                   │   │
│  │                                                     │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌───────────┐ ┌───────────┐ ┌───────────┐ ┌───────────┐  │
│  │  Value 1  │ │  Value 2  │ │  Value 3  │ │  Value 4  │  │
│  │  [Icon]   │ │  [Icon]   │ │  [Icon]   │ │  [Icon]   │  │
│  │  Title    │ │  Title    │ │  Title    │ │  Title    │  │
│  │  Desc     │ │  Desc     │ │  Desc     │ │  Desc     │  │
│  └───────────┘ └───────────┘ └───────────┘ └───────────┘  │
│                                                             │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐          │
│  │  8+     │ │  25+    │ │  3+     │ │  8      │          │
│  │Projects │ │  Tech   │ │  Years  │ │  OSS    │          │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘          │
│                                                             │
│                         ← 80px bottom padding →            │
└─────────────────────────────────────────────────────────────┘
```

### Mobile (<768px)

```
┌─────────────────────┐
│                     │
│  About Us           │
│  ← 60px top →       │
│                     │
│  [Mission Statement]│
│                     │
│  ┌───────────────┐  │
│  │  Value 1      │  │
│  │  [Icon] Title │  │
│  │  Desc         │  │
│  └───────────────┘  │
│  ┌───────────────┐  │
│  │  Value 2      │  │
│  └───────────────┘  │
│  ┌───────────────┐  │
│  │  Value 3      │  │
│  └───────────────┘  │
│  ┌───────────────┐  │
│  │  Value 4      │  │
│  └───────────────┘  │
│                     │
│  ┌─────┐ ┌─────┐   │
│  │ 8+  │ │ 25+ │   │
│  └─────┘ └─────┘   │
│  ┌─────┐ ┌─────┐   │
│  │ 3+  │ │  8  │   │
│  └─────┘ └─────┘   │
│                     │
│  ← 60px bottom →   │
└─────────────────────┘
```

## Spacing

| Element | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| **Section padding-y** | 80px | 64px | 60px |
| **Section padding-x** | 24px | 24px | 16px |
| **Title margin-bottom** | 48px | 40px | 32px |
| **Mission margin-bottom** | 64px | 48px | 40px |
| **Values grid gap** | 32px | 24px | 16px |
| **Stats grid gap** | 24px | 16px | 12px |
| **Value icon margin-bottom** | 16px | 16px | 12px |
| **Value title margin-bottom** | 8px | 8px | 6px |

## Colors

| Element | Color |
|---------|-------|
| **Section title** | #FFFFFF |
| **Mission text** | #94A3B8 |
| **Value title** | #FFFFFF |
| **Value description** | #94A3B8 |
| **Value icon** | #3B82F6 |
| **Stat number** | #3B82F6 |
| **Stat label** | #94A3B8 |
| **Value card background** | rgba(17, 24, 39, 0.5) |
| **Value card border** | rgba(30, 41, 59, 0.5) |

## Typography

| Element | Size | Weight | Line Height | Font |
|---------|------|--------|-------------|------|
| **Section title** | 36px (h2) | 600 | 1.3 | Geist |
| **Mission text** | 18px (body-lg) | 400 | 1.6 | Geist |
| **Value title** | 20px (h4) | 500 | 1.4 | Geist |
| **Value description** | 14px (body-sm) | 400 | 1.5 | Geist |
| **Stat number** | 36px (h2) | 700 | 1.2 | Geist |
| **Stat label** | 14px (caption) | 500 | 1.5 | Geist |

## Animation

| Element | Animation | Trigger |
|---------|-----------|---------|
| **Section title** | Fade in + slide up | Scroll into view |
| **Mission text** | Fade in | Scroll into view |
| **Value cards** | Fade in + slide up (staggered) | Scroll into view |
| **Stat numbers** | Count up | Scroll into view |

## Responsive Breakpoints

| Breakpoint | Layout Change |
|------------|---------------|
| **≥1024px** | 4-column values grid, 4-column stats |
| **768-1023px** | 2-column values grid, 4-column stats |
| **<768px** | 1-column values grid, 2-column stats |

---

# 4. Skills

## Layout

### Desktop (≥1024px)

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  Tech Stack                                                 │
│  ← 80px top padding →                                      │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  Backend                                            │   │
│  │  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐          │   │
│  │  │Node │ │Py   │ │Go   │ │DB   │ │API  │          │   │
│  │  └─────┘ └─────┘ └─────┘ └─────┘ └─────┘          │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  DevOps                                             │   │
│  │  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐          │   │
│  │  │Docker│ │K8s │ │CI/CD│ │Linux│ │Terra│          │   │
│  │  └─────┘ └─────┘ └─────┘ └─────┘ └─────┘          │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  AI / ML                                            │   │
│  │  ┌─────┐ ┌─────┐ ┌─────┐                           │   │
│  │  │LLM  │ │RAG  │ │Auto │                           │   │
│  │  └─────┘ └─────┘ └─────┘                           │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│                         ← 80px bottom padding →            │
└─────────────────────────────────────────────────────────────┘
```

### Mobile (<768px)

```
┌─────────────────────┐
│                     │
│  Tech Stack         │
│  ← 60px top →       │
│                     │
│  ┌───────────────┐  │
│  │  Backend      │  │
│  │  ┌───┐ ┌───┐ │  │
│  │  │   │ │   │ │  │
│  │  └───┘ └───┘ │  │
│  │  ┌───┐ ┌───┐ │  │
│  │  │   │ │   │ │  │
│  │  └───┘ └───┘ │  │
│  └───────────────┘  │
│  ┌───────────────┐  │
│  │  DevOps       │  │
│  └───────────────┘  │
│  ┌───────────────┐  │
│  │  AI / ML      │  │
│  └───────────────┘  │
│                     │
│  ← 60px bottom →   │
└─────────────────────┘
```

## Spacing

| Element | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| **Section padding-y** | 80px | 64px | 60px |
| **Section padding-x** | 24px | 24px | 16px |
| **Title margin-bottom** | 48px | 40px | 32px |
| **Category margin-bottom** | 32px | 24px | 20px |
| **Category title margin-bottom** | 16px | 12px | 12px |
| **Skills grid gap** | 12px | 10px | 8px |

## Colors

| Element | Color |
|---------|-------|
| **Section title** | #FFFFFF |
| **Category title** | #94A3B8 |
| **Skill card background** | #111827 |
| **Skill card border** | #1E293B |
| **Skill card hover border** | #334155 |
| **Skill icon** | #3B82F6 |
| **Skill text** | #FFFFFF |

## Typography

| Element | Size | Weight | Font |
|---------|------|--------|------|
| **Section title** | 36px (h2) | 600 | Geist |
| **Category title** | 14px (caption) | 600 | Geist |
| **Skill name** | 14px (body-sm) | 400 | Geist |

## Animation

| Element | Animation | Trigger |
|---------|-----------|---------|
| **Section title** | Fade in + slide up | Scroll into view |
| **Category titles** | Fade in | Scroll into view |
| **Skill cards** | Fade in (staggered) | Scroll into view |
| **Skill card hover** | Border color change + scale | Hover |

## Responsive Breakpoints

| Breakpoint | Layout Change |
|------------|---------------|
| **≥1024px** | Full grid layout |
| **768-1023px** | Slightly reduced grid |
| **<768px** | Stacked categories, 2-column skill grid |

---

# 5. Projects

## Layout

### Desktop (≥1024px)

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  Projects                                                   │
│  ← 80px top padding →                                      │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  Featured: NexusOps                                 │   │
│  │  ┌─────────────────────────────────────────────┐   │   │
│  │  │  [Image/Screenshot]                          │   │   │
│  │  │                                              │   │   │
│  │  │  NexusOps                                    │   │   │
│  │  │  AI-powered DevOps Control Center            │   │   │
│  │  │                                              │   │   │
│  │  │  [Tag] [Tag] [Tag] [Tag]                    │   │   │
│  │  │                                              │   │   │
│  │  │  [GitHub] [Demo]                             │   │   │
│  │  └─────────────────────────────────────────────┘   │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌───────────┐ ┌───────────┐ ┌───────────┐                │
│  │  Project  │ │  Project  │ │  Project  │                │
│  │  [Image]  │ │  [Image]  │ │  [Image]  │                │
│  │  Title    │ │  Title    │ │  Title    │                │
│  │  Desc     │ │  Desc     │ │  Desc     │                │
│  │  [Tags]   │ │  [Tags]   │ │  [Tags]   │                │
│  └───────────┘ └───────────┘ └───────────┘                │
│                                                             │
│                         ← 80px bottom padding →            │
└─────────────────────────────────────────────────────────────┘
```

### Mobile (<768px)

```
┌─────────────────────┐
│                     │
│  Projects           │
│  ← 60px top →       │
│                     │
│  ┌───────────────┐  │
│  │ Featured      │  │
│  │ [Image]       │  │
│  │ NexusOps      │  │
│  │ Desc          │  │
│  │ [Tags]        │  │
│  │ [GitHub]      │  │
│  └───────────────┘  │
│                     │
│  ┌───────────────┐  │
│  │ Project 1     │  │
│  └───────────────┘  │
│  ┌───────────────┐  │
│  │ Project 2     │  │
│  └───────────────┘  │
│  ┌───────────────┐  │
│  │ Project 3     │  │
│  └───────────────┘  │
│                     │
│  ← 60px bottom →   │
└─────────────────────┘
```

## Spacing

| Element | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| **Section padding-y** | 80px | 64px | 60px |
| **Section padding-x** | 24px | 24px | 16px |
| **Title margin-bottom** | 48px | 40px | 32px |
| **Featured card margin-bottom** | 48px | 40px | 32px |
| **Project grid gap** | 24px | 20px | 16px |
| **Card padding** | 24px | 20px | 16px |
| **Card image height** | 200px | 180px | 160px |
| **Tag gap** | 8px | 8px | 6px |
| **Tag padding** | 4px 12px | 4px 10px | 4px 8px |

## Colors

| Element | Color |
|---------|-------|
| **Section title** | #FFFFFF |
| **Featured card background** | #111827 |
| **Featured card border** | #1E293B |
| **Featured card hover border** | #3B82F6 |
| **Project card background** | #111827 |
| **Project card border** | #1E293B |
| **Project card hover border** | #334155 |
| **Project title** | #FFFFFF |
| **Project description** | #94A3B8 |
| **Tag background** | rgba(59, 130, 246, 0.1) |
| **Tag text** | #3B82F6 |
| **Tag border** | rgba(59, 130, 246, 0.2) |
| **Status: live** | #22C55E |
| **Status: in-development** | #F59E0B |
| **Status: planned** | #64748B |
| **Button (GitHub)** | transparent + #3B82F6 border |
| **Button (Demo)** | #3B82F6 background |

## Typography

| Element | Size | Weight | Font |
|---------|------|--------|------|
| **Section title** | 36px (h2) | 600 | Geist |
| **Featured title** | 24px (h3) | 600 | Geist |
| **Featured description** | 16px (body) | 400 | Geist |
| **Project title** | 18px (body-lg) | 500 | Geist |
| **Project description** | 14px (body-sm) | 400 | Geist |
| **Tag text** | 12px (caption) | 500 | Geist |
| **Status text** | 12px (caption) | 500 | Geist |

## Animation

| Element | Animation | Trigger |
|---------|-----------|---------|
| **Section title** | Fade in + slide up | Scroll into view |
| **Featured card** | Fade in + slide up | Scroll into view |
| **Project cards** | Fade in + slide up (staggered) | Scroll into view |
| **Card hover** | Border color change + slight scale | Hover |
| **Tag hover** | Background color change | Hover |

## Responsive Breakpoints

| Breakpoint | Layout Change |
|------------|---------------|
| **≥1024px** | Featured full width, 3-column project grid |
| **768-1023px** | Featured full width, 2-column project grid |
| **<768px** | Featured full width, 1-column project grid |

---

# 6. Featured Project

## Layout

### Desktop (≥1024px)

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                                                     │   │
│  │  [Full-width Image/Screenshot]                      │   │
│  │  Height: 400px                                      │   │
│  │                                                     │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                                                     │   │
│  │  NexusOps                    [Status: In Dev]       │   │
│  │                                                     │   │
│  │  AI-powered DevOps Control Center for managing      │   │
│  │  infrastructure, servers, Docker environments,      │   │
│  │  logs, monitoring and automation.                   │   │
│  │                                                     │   │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐            │   │
│  │  │Next.js   │ │TypeScript│ │Docker    │            │   │
│  │  └──────────┘ └──────────┘ └──────────┘            │   │
│  │  ┌──────────┐ ┌──────────┐                         │   │
│  │  │DevOps    │ │AI        │                         │   │
│  │  └──────────┘ └──────────┘                         │   │
│  │                                                     │   │
│  │  ┌──────────────────┐  ┌──────────────────┐        │   │
│  │  │  View on GitHub  │  │  Live Demo       │        │   │
│  │  └──────────────────┘  └──────────────────┘        │   │
│  │                                                     │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Spacing

| Element | Desktop | Mobile |
|---------|---------|--------|
| **Image height** | 400px | 200px |
| **Content padding** | 32px | 20px |
| **Title margin-bottom** | 16px | 12px |
| **Description margin-bottom** | 24px | 16px |
| **Tags gap** | 8px | 6px |
| **Tags margin-bottom** | 24px | 16px |
| **Buttons gap** | 16px | 12px |

## Colors

| Element | Color |
|---------|-------|
| **Card background** | #111827 |
| **Card border** | #1E293B |
| **Title** | #FFFFFF |
| **Description** | #94A3B8 |
| **Status badge** | as defined in brand book |
| **Tag background** | rgba(59, 130, 246, 0.1) |
| **Tag text** | #3B82F6 |
| **GitHub button** | transparent + #3B82F6 border |
| **Demo button** | #3B82F6 background |

## Typography

| Element | Size | Weight | Font |
|---------|------|--------|------|
| **Title** | 24px (h3) | 600 | Geist |
| **Description** | 16px (body) | 400 | Geist |
| **Tag text** | 12px (caption) | 500 | Geist |
| **Button text** | 14px (body-sm) | 500 | Geist |

## Animation

| Element | Animation | Trigger |
|---------|-----------|---------|
| **Image** | Fade in | Scroll into view |
| **Content** | Fade in + slide up | Scroll into view |
| **Tags** | Fade in (staggered) | Scroll into view |
| **Buttons** | Hover scale + shadow | Hover |

---

# 7. Journey

## Layout

### Desktop (≥1024px)

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  Journey                                                    │
│  ← 80px top padding →                                      │
│                                                             │
│  ─────────────●──────────────●──────────────●─────          │
│              2024           2025           2026             │
│                                                             │
│              Started        Linux &        DevOps &         │
│              Programming    Server         AI               │
│                                                             │
│              Began          Dived deep     Building         │
│              exploring      into Linux     infrastructure   │
│              programming    systems        automation       │
│                                                             │
│                         ← 80px bottom padding →            │
└─────────────────────────────────────────────────────────────┘
```

### Mobile (<768px)

```
┌─────────────────────┐
│                     │
│  Journey            │
│  ← 60px top →       │
│                     │
│  ●─── 2024          │
│  │   Started        │
│  │   Programming    │
│  │                  │
│  ●─── 2025          │
│  │   Linux &        │
│  │   Server         │
│  │                  │
│  ●─── 2026          │
│      DevOps &       │
│      AI             │
│                     │
│  ← 60px bottom →   │
└─────────────────────┘
```

## Spacing

| Element | Desktop | Mobile |
|---------|---------|--------|
| **Section padding-y** | 80px | 60px |
| **Section padding-x** | 24px | 16px |
| **Title margin-bottom** | 48px | 32px |
| **Timeline line left** | 50% | 24px |
| **Timeline item gap** | 48px | 32px |
| **Timeline dot size** | 16px | 12px |
| **Timeline content padding-left** | 48px | 40px |

## Colors

| Element | Color |
|---------|-------|
| **Section title** | #FFFFFF |
| **Timeline line** | #1E293B |
| **Timeline dot** | #3B82F6 |
| **Timeline dot border** | #0B0F19 |
| **Year** | #3B82F6 |
| **Title** | #FFFFFF |
| **Description** | #94A3B8 |

## Typography

| Element | Size | Weight | Font |
|---------|------|--------|------|
| **Section title** | 36px (h2) | 600 | Geist |
| **Year** | 14px (caption) | 600 | Geist |
| **Title** | 18px (body-lg) | 500 | Geist |
| **Description** | 14px (body-sm) | 400 | Geist |

## Animation

| Element | Animation | Trigger |
|---------|-----------|---------|
| **Section title** | Fade in + slide up | Scroll into view |
| **Timeline items** | Fade in (staggered) | Scroll into view |
| **Timeline dots** | Scale up | Scroll into view |

## Responsive Breakpoints

| Breakpoint | Layout Change |
|------------|---------------|
| **≥1024px** | Horizontal centered timeline |
| **<768px** | Vertical left-aligned timeline |

---

# 8. Contact

## Layout

### Desktop (≥1024px)

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  Get in Touch                                               │
│  ← 80px top padding →                                      │
│                                                             │
│  ┌───────────────────────────┐ ┌───────────────────────┐   │
│  │                           │ │                       │   │
│  │  [Name]                   │ │  Social Links         │   │
│  │  ─────────────────────── │ │                       │   │
│  │                           │ │  ┌─────────────────┐  │   │
│  │  [Email]                  │ │  │ GitHub          │  │   │
│  │  ─────────────────────── │ │  └─────────────────┘  │   │
│  │                           │ │  ┌─────────────────┐  │   │
│  │  [Message]                │ │  │ LinkedIn        │  │   │
│  │  ─────────────────────── │ │  └─────────────────┘  │   │
│  │  ─────────────────────── │ │  ┌─────────────────┐  │   │
│  │  ─────────────────────── │ │  │ Telegram        │  │   │
│  │                           │ │  └─────────────────┘  │   │
│  │  [Send Message]           │ │  ┌─────────────────┐  │   │
│  │                           │ │  │ Instagram       │  │   │
│  │                           │ │  └─────────────────┘  │   │
│  └───────────────────────────┘ │                       │   │
│                                └───────────────────────┘   │
│                                                             │
│                         ← 80px bottom padding →            │
└─────────────────────────────────────────────────────────────┘
```

### Mobile (<768px)

```
┌─────────────────────┐
│                     │
│  Get in Touch       │
│  ← 60px top →       │
│                     │
│  ┌───────────────┐  │
│  │  [Name]       │  │
│  │  ─────────── │  │
│  │  [Email]      │  │
│  │  ─────────── │  │
│  │  [Message]    │  │
│  │  ─────────── │  │
│  │  ─────────── │  │
│  │  ─────────── │  │
│  │  [Send]       │  │
│  └───────────────┘  │
│                     │
│  ┌───────────────┐  │
│  │  Social Links │  │
│  │  GitHub       │  │
│  │  LinkedIn     │  │
│  │  Telegram     │  │
│  │  Instagram    │  │
│  └───────────────┘  │
│                     │
│  ← 60px bottom →   │
└─────────────────────┘
```

## Spacing

| Element | Desktop | Mobile |
|---------|---------|--------|
| **Section padding-y** | 80px | 60px |
| **Section padding-x** | 24px | 16px |
| **Title margin-bottom** | 48px | 32px |
| **Form to social gap** | 48px | 32px |
| **Form field gap** | 24px | 16px |
| **Form label margin-bottom** | 8px | 8px |
| **Input height** | 48px | 48px |
| **Textarea height** | 160px | 120px |
| **Button margin-top** | 8px | 8px |
| **Social link gap** | 12px | 10px |

## Colors

| Element | Color |
|---------|-------|
| **Section title** | #FFFFFF |
| **Form background** | #111827 |
| **Form border** | #1E293B |
| **Input background** | #0B0F19 |
| **Input border** | #1E293B |
| **Input border focus** | #3B82F6 |
| **Input text** | #FFFFFF |
| **Input placeholder** | #64748B |
| **Label text** | #94A3B8 |
| **Button background** | #3B82F6 |
| **Button text** | #FFFFFF |
| **Button hover** | #2563EB |
| **Social link background** | #111827 |
| **Social link border** | #1E293B |
| **Social link hover border** | #334155 |
| **Social link text** | #FFFFFF |
| **Error text** | #EF4444 |
| **Success text** | #22C55E |

## Typography

| Element | Size | Weight | Font |
|---------|------|--------|------|
| **Section title** | 36px (h2) | 600 | Geist |
| **Form label** | 14px (body-sm) | 500 | Geist |
| **Input text** | 16px (body) | 400 | Geist |
| **Input placeholder** | 16px (body) | 400 | Geist |
| **Button text** | 16px (body) | 500 | Geist |
| **Social link text** | 14px (body-sm) | 500 | Geist |

## Animation

| Element | Animation | Trigger |
|---------|-----------|---------|
| **Section title** | Fade in + slide up | Scroll into view |
| **Form** | Fade in + slide up | Scroll into view |
| **Social links** | Fade in (staggered) | Scroll into view |
| **Input focus** | Border color change | Focus |
| **Button hover** | Background color change | Hover |
| **Social link hover** | Border color change | Hover |
| **Form submit** | Loading state | Submit |
| **Form success** | Success message | Submit success |

## Form States

| State | Visual |
|-------|--------|
| **Default** | Border #1E293B |
| **Focus** | Border #3B82F6 + slight glow |
| **Error** | Border #EF4444 + error message |
| **Success** | Success message + form reset |
| **Loading** | Button shows spinner |

## Responsive Breakpoints

| Breakpoint | Layout Change |
|------------|---------------|
| **≥1024px** | 2-column layout (form + social) |
| **<768px** | Single column (form top, social bottom) |

---

# 9. Footer

## Layout

### Desktop (≥1024px)

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                                                     │   │
│  │  SMG        Home  About  Skills  Projects  Contact │   │
│  │                                                     │   │
│  │  ─────────────────────────────────────────────────  │   │
│  │                                                     │   │
│  │  © 2026 SMG. Building reliable systems.            │   │
│  │                                                     │   │
│  │  GitHub  LinkedIn  Telegram  Instagram              │   │
│  │                                                     │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Mobile (<768px)

```
┌─────────────────────┐
│                     │
│  SMG                │
│  Home  About        │
│  Skills  Projects   │
│  Contact            │
│                     │
│  ─────────────────  │
│                     │
│  © ۲۰۲۶ SMG        │
│  Building reliable  │
│  systems.           │
│                     │
│  GitHub  LinkedIn   │
│  Telegram Instagram │
│                     │
└─────────────────────┘
```

## Spacing

| Element | Desktop | Mobile |
|---------|---------|--------|
| **Padding-y** | 40px | 32px |
| **Padding-x** | 24px | 16px |
| **Logo to nav gap** | 32px | 24px |
| **Nav gap** | 24px | 16px |
| **Divider margin-y** | 24px | 16px |
| **Copyright to social gap** | 16px | 12px |

## Colors

| Element | Color |
|---------|-------|
| **Background** | #0B0F19 |
| **Border top** | #1E293B |
| **Logo** | #FFFFFF |
| **Nav links** | #94A3B8 |
| **Nav links hover** | #FFFFFF |
| **Copyright text** | #64748B |
| **Social links** | #94A3B8 |
| **Social links hover** | #FFFFFF |

## Typography

| Element | Size | Weight | Font |
|---------|------|--------|------|
| **Logo** | 20px | 600 | Geist |
| **Nav links** | 14px | 400 | Geist |
| **Copyright** | 12px (caption) | 400 | Geist |
| **Social links** | 14px (body-sm) | 400 | Geist |

## Responsive Breakpoints

| Breakpoint | Layout Change |
|------------|---------------|
| **≥1024px** | Horizontal layout |
| **<768px** | Stacked layout |

---

# Appendix: UI Specification Summary

## Section Comparison Table

| Section | Padding Y | Title Size | Background |
|---------|-----------|------------|------------|
| **Navbar** | 0 | 20px | transparent/glass |
| **Hero** | 0 | 72px | gradient |
| **About** | 80px | 36px | #0B0F19 |
| **Skills** | 80px | 36px | #0B0F19 |
| **Projects** | 80px | 36px | #0B0F19 |
| **Featured** | — | 24px | #111827 |
| **Journey** | 80px | 36px | #0B0F19 |
| **Contact** | 80px | 36px | #0B0F19 |
| **Footer** | 40px | 20px | #0B0F19 |

## Color Token Summary

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg` | #0B0F19 | Page background |
| `--surface` | #111827 | Card backgrounds |
| `--border` | #1E293B | Borders |
| `--primary` | #3B82F6 | Links, buttons |
| `--text` | #FFFFFF | Headings |
| `--text-secondary` | #94A3B8 | Body text |
| `--text-muted` | #64748B | Labels |

---

**Document Version:** 3.0
**Last Updated:** 2026-08-07
**Author:** SMG / Saman Qasempour
**Status:** Active — UI Specification
