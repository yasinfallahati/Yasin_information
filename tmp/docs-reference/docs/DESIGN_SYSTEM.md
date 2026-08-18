# SMG Portfolio V3 — Design System

| Field | Value |
|-------|-------|
| **Document** | Design System |
| **Version** | 3.0 |
| **Owner** | Saman Qasempour |
| **Status** | Active |
| **Last Updated** | 2026-08-07 |

---

## 1. Color Tokens

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `--bg` | #0B0F19 | 11, 15, 25 | Page background |
| `--surface` | #111827 | 17, 24, 39 | Card backgrounds |
| `--surface-elevated` | #1E293B | 30, 41, 59 | Elevated elements |
| `--border` | #1E293B | 30, 41, 59 | Borders |
| `--border-light` | #334155 | 51, 65, 85 | Hover borders |
| `--primary` | #3B82F6 | 59, 130, 246 | Links, buttons |
| `--primary-light` | #60A5FA | 96, 165, 250 | Hover states |
| `--primary-dark` | #2563EB | 37, 99, 235 | Active states |
| `--accent` | #6366F1 | 99, 102, 241 | Secondary accent |
| `--accent-light` | #818CF8 | 129, 140, 248 | Hover secondary |
| `--text` | #FFFFFF | 255, 255, 255 | Headings |
| `--text-secondary` | #94A3B8 | 148, 163, 184 | Body text |
| `--text-muted` | #64748B | 100, 116, 139 | Labels |
| `--text-disabled` | #475569 | 71, 85, 105 | Disabled |
| `--success` | #22C55E | 34, 197, 94 | Live status |
| `--warning` | #F59E0B | 245, 158, 11 | In-dev status |
| `--error` | #EF4444 | 239, 68, 68 | Error states |
| `--info` | #3B82F6 | 59, 130, 246 | Info states |

---

## 2. Typography Scale

| Token | Size | Weight | Line Height | Letter Spacing | Font |
|-------|------|--------|-------------|----------------|------|
| `display` | 72px / 4.5rem | 700 | 1.1 | -0.02em | Geist |
| `h1` | 48px / 3rem | 700 | 1.2 | -0.015em | Geist |
| `h2` | 36px / 2.25rem | 600 | 1.3 | -0.01em | Geist |
| `h3` | 24px / 1.5rem | 600 | 1.4 | -0.005em | Geist |
| `h4` | 20px / 1.25rem | 500 | 1.4 | 0 | Geist |
| `body-lg` | 18px / 1.125rem | 400 | 1.6 | 0 | Geist |
| `body` | 16px / 1rem | 400 | 1.6 | 0 | Geist |
| `body-sm` | 14px / 0.875rem | 400 | 1.5 | 0 | Geist |
| `caption` | 12px / 0.75rem | 500 | 1.5 | 0.01em | Geist |
| `overline` | 12px / 0.75rem | 600 | 1.5 | 0.05em | Geist |
| `mono` | 14px / 0.875rem | 400 | 1.5 | 0 | Geist Mono |

### Responsive Typography

| Token | Mobile | Tablet | Desktop |
|-------|--------|--------|---------|
| `display` | 36px | 48px | 72px |
| `h1` | 28px | 36px | 48px |
| `h2` | 24px | 28px | 36px |
| `h3` | 20px | 24px | 24px |
| `body-lg` | 16px | 18px | 18px |
| `body` | 16px | 16px | 16px |

---

## 3. Spacing System

| Token | Value | Usage |
|-------|-------|-------|
| `--space-0` | 0px | Reset |
| `--space-1` | 4px | Tiny gaps |
| `--space-2` | 8px | Icon gaps, small padding |
| `--space-3` | 12px | Tag padding |
| `--space-4` | 16px | Component padding, mobile padding |
| `--space-5` | 20px | Card padding (mobile) |
| `--space-6` | 24px | Desktop padding, card padding |
| `--space-8` | 32px | Section gaps |
| `--space-10` | 40px | Large gaps |
| `--space-12` | 48px | Section title margin |
| `--space-16` | 64px | Section padding (mobile) |
| `--space-20` | 80px | Section padding (desktop) |

---

## 4. Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 4px | Tags, small elements |
| `--radius-md` | 8px | Buttons, inputs |
| `--radius-lg` | 12px | Cards |
| `--radius-xl` | 16px | Featured cards |
| `--radius-full` | 9999px | Pills, avatars |

---

## 5. Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | 0 1px 2px rgba(0,0,0,0.3) | Subtle elevation |
| `--shadow-md` | 0 4px 6px rgba(0,0,0,0.3) | Card hover |
| `--shadow-lg` | 0 10px 15px rgba(0,0,0,0.3) | Dropdown, modal |
| `--shadow-glow` | 0 0 20px rgba(59,130,246,0.15) | Primary glow |
| `--shadow-glow-accent` | 0 0 20px rgba(99,102,241,0.15) | Accent glow |

---

## 6. Grid

| Token | Value | Usage |
|-------|-------|-------|
| `--grid-columns` | 12 | Base grid |
| `--grid-gutter` | 24px | Column gap |
| `--grid-max-width` | 1200px | Content max width |
| `--grid-padding` | 24px | Side padding |

### Grid Breakpoints

| Token | Value | Columns | Gutter |
|-------|-------|---------|--------|
| `--bp-xs` | 0px | 4 | 16px |
| `--bp-sm` | 640px | 8 | 16px |
| `--bp-md` | 768px | 8 | 24px |
| `--bp-lg` | 1024px | 12 | 24px |
| `--bp-xl` | 1280px | 12 | 24px |
| `--bp-2xl` | 1536px | 12 | 24px |

---

## 7. Breakpoints

| Token | Min Width | Target |
|-------|-----------|--------|
| `xs` | 0px | Mobile portrait |
| `sm` | 640px | Mobile landscape |
| `md` | 768px | Tablet |
| `lg` | 1024px | Desktop |
| `xl` | 1280px | Large desktop |
| `2xl` | 1536px | Ultra-wide |

---

## 8. Motion Tokens

| Token | Duration | Easing | Usage |
|-------|----------|--------|-------|
| `--duration-fast` | 100ms | ease | Micro interactions |
| `--duration-normal` | 150ms | ease | Hover states |
| `--duration-slow` | 200ms | ease-out | Transitions |
| `--duration-slower` | 300ms | ease-out | Page transitions |
| `--duration-slowest` | 600ms | ease-out | Entry animations |
| `--ease-in` | cubic-bezier(0.4, 0, 1, 1) | — | Exit animations |
| `--ease-out` | cubic-bezier(0, 0, 0.2, 1) | — | Entry animations |
| `--ease-in-out` | cubic-bezier(0.4, 0, 0.2, 1) | — | General transitions |
| `--spring` | cubic-bezier(0.34, 1.56, 0.64, 1) | — | Bounce effects |

---

## 9. Glass Effect

| Token | Value | Usage |
|-------|-------|-------|
| `--glass-bg` | rgba(17, 24, 39, 0.8) | Glass background |
| `--glass-blur` | blur(12px) | Glass blur |
| `--glass-border` | rgba(30, 41, 59, 0.5) | Glass border |

### Glass CSS

```css
.glass {
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-border);
}
```

---

## 10. Z-Index Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--z-base` | 0 | Default |
| `--z-elevated` | 10 | Elevated elements |
| `--z-dropdown` | 20 | Dropdowns, tooltips |
| `--z-sticky` | 30 | Sticky elements |
| `--z-navbar` | 40 | Navigation bar |
| `--z-modal` | 50 | Modals, overlays |
| `--z-toast` | 60 | Toast notifications |
| `--z-tooltip` | 70 | Tooltips |

---

## Design Tokens (CSS Variables)

```css
:root {
  /* Colors */
  --bg: #0B0F19;
  --surface: #111827;
  --surface-elevated: #1E293B;
  --border: #1E293B;
  --border-light: #334155;
  --primary: #3B82F6;
  --primary-light: #60A5FA;
  --primary-dark: #2563EB;
  --accent: #6366F1;
  --accent-light: #818CF8;
  --text: #FFFFFF;
  --text-secondary: #94A3B8;
  --text-muted: #64748B;
  --success: #22C55E;
  --warning: #F59E0B;
  --error: #EF4444;

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;

  /* Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.3);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.3);
  --shadow-lg: 0 10px 15px rgba(0,0,0,0.3);
  --shadow-glow: 0 0 20px rgba(59,130,246,0.15);

  /* Motion */
  --duration-fast: 100ms;
  --duration-normal: 150ms;
  --duration-slow: 200ms;
  --duration-slower: 300ms;
  --duration-slowest: 600ms;
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);

  /* Glass */
  --glass-bg: rgba(17, 24, 39, 0.8);
  --glass-blur: blur(12px);
  --glass-border: rgba(30, 41, 59, 0.5);

  /* Z-Index */
  --z-base: 0;
  --z-elevated: 10;
  --z-dropdown: 20;
  --z-sticky: 30;
  --z-navbar: 40;
  --z-modal: 50;
  --z-toast: 60;
  --z-tooltip: 70;

  /* Grid */
  --grid-max-width: 1200px;
  --grid-padding: 24px;
}
```

---

**Document Version:** 3.0
**Last Updated:** 2026-08-07
**Status:** Active — Design System
