# SMG Portfolio V3 — Motion System

| Field | Value |
|-------|-------|
| **Document** | Motion System |
| **Version** | 3.0 |
| **Owner** | Saman Qasempour |
| **Status** | Active |
| **Last Updated** | 2026-08-07 |

---

## 1. Hover Effects

### Button Hover

| Property | Default | Hover | Duration |
|----------|---------|-------|----------|
| **Background** | #3B82F6 | #2563EB | 150ms |
| **Scale** | 1 | 1.02 | 150ms |
| **Shadow** | none | 0 0 20px rgba(59,130,246,0.3) | 150ms |

### Card Hover

| Property | Default | Hover | Duration |
|----------|---------|-------|----------|
| **Border** | #1E293B | #334155 | 150ms |
| **Scale** | 1 | 1.01 | 150ms |
| **Shadow** | none | 0 4px 6px rgba(0,0,0,0.3) | 150ms |

### Link Hover

| Property | Default | Hover | Duration |
|----------|---------|-------|----------|
| **Color** | #94A3B8 | #3B82F6 | 150ms |

### Social Link Hover

| Property | Default | Hover | Duration |
|----------|---------|-------|----------|
| **Border** | #1E293B | #334155 | 150ms |
| **Color** | #FFFFFF | #3B82F6 | 150ms |

---

## 2. Scroll Animations

### Fade In Up

| Property | Value |
|----------|-------|
| **Initial** | opacity: 0, translateY: 20px |
| **Final** | opacity: 1, translateY: 0 |
| **Duration** | 600ms |
| **Easing** | ease-out |
| **Trigger** | Scroll into view |
| **Once** | true |

### Fade In

| Property | Value |
|----------|-------|
| **Initial** | opacity: 0 |
| **Final** | opacity: 1 |
| **Duration** | 600ms |
| **Easing** | ease-out |
| **Trigger** | Scroll into view |
| **Once** | true |

### Stagger Children

| Property | Value |
|----------|-------|
| **Stagger** | 100ms between children |
| **Animation** | Fade in up |
| **Duration** | 600ms per child |

### Scale In

| Property | Value |
|----------|-------|
| **Initial** | scale: 0.9, opacity: 0 |
| **Final** | scale: 1, opacity: 1 |
| **Duration** | 400ms |
| **Easing** | ease-out |

---

## 3. Page Transitions

### Section Reveal

| Property | Value |
|----------|-------|
| **Animation** | Fade in up |
| **Duration** | 600ms |
| **Stagger** | 200ms between sections |

### Smooth Scroll

| Property | Value |
|----------|-------|
| **Behavior** | smooth |
| **Duration** | 500ms |
| **Easing** | ease-in-out |

---

## 4. Loading States

### Button Loading

| Property | Value |
|----------|-------|
| **Animation** | Spinner rotation |
| **Duration** | 1s infinite |
| **Easing** | linear |

### Page Loading

| Property | Value |
|----------|-------|
| **Animation** | Skeleton pulse |
| **Duration** | 1.5s infinite |
| **Easing** | ease-in-out |

---

## 5. Micro Interactions

### Navbar Glass Effect

| Property | Value |
|----------|-------|
| **Trigger** | Scroll down |
| **Animation** | Background fade in |
| **Duration** | 200ms |
| **Easing** | ease-out |

### Scroll Indicator Bounce

| Property | Value |
|----------|-------|
| **Animation** | Vertical bounce |
| **Duration** | 2s infinite |
| **Easing** | ease-in-out |

### Active Section Indicator

| Property | Value |
|----------|-------|
| **Animation** | Underline appear |
| **Duration** | 150ms |
| **Easing** | ease |

### Counter Animation

| Property | Value |
|----------|-------|
| **Animation** | Count up from 0 |
| **Duration** | 1500ms |
| **Easing** | ease-out |
| **Trigger** | Scroll into view |

---

## 6. Animation Rules

| Rule | Standard |
|------|----------|
| **Performance** | Use transform/opacity only |
| **Duration** | 100-600ms maximum |
| **Easing** | ease-out for entries, ease-in for exits |
| **Respect** | prefers-reduced-motion |
| **Once** | viewport={{ once: true }} |
| **Stagger** | 100ms between items |

---

## 7. Framer Motion Config

```typescript
// Entry animation
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

// Stagger container
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Scale in
const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.4, ease: "easeOut" }
};
```

---

**Document Version:** 3.0
**Last Updated:** 2026-08-07
**Status:** Active — Motion System
