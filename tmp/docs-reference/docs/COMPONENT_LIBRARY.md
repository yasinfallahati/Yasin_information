# SMG Portfolio V3 — Component Library

| Field | Value |
|-------|-------|
| **Document** | Component Library |
| **Version** | 3.0 |
| **Owner** | Saman Qasempour |
| **Status** | Active |
| **Last Updated** | 2026-08-07 |

---

## 1. Button

### Variants

| Variant | Background | Border | Text | Usage |
|---------|-----------|--------|------|-------|
| **Primary** | #3B82F6 | none | #FFFFFF | Main CTAs |
| **Secondary** | transparent | #3B82F6 | #3B82F6 | Secondary actions |
| **Ghost** | transparent | none | #94A3B8 | Tertiary actions |
| **Danger** | #EF4444 | none | #FFFFFF | Destructive actions |

### Sizes

| Size | Height | Padding | Font Size | Border Radius |
|------|--------|---------|-----------|---------------|
| **sm** | 32px | 8px 16px | 12px | 4px |
| **md** | 40px | 10px 20px | 14px | 8px |
| **lg** | 48px | 12px 24px | 16px | 8px |

### States

| State | Visual Change |
|-------|--------------|
| **Default** | Standard appearance |
| **Hover** | Background darken 10%, cursor pointer |
| **Active** | Background darken 15%, scale 0.98 |
| **Focus** | Ring 2px #3B82F6 + 2px offset |
| **Disabled** | Opacity 0.5, cursor not-allowed |
| **Loading** | Spinner replaces text, disabled |

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | 'primary' \| 'secondary' \| 'ghost' \| 'danger' | 'primary' | Button variant |
| `size` | 'sm' \| 'md' \| 'lg' | 'md' | Button size |
| `disabled` | boolean | false | Disabled state |
| `loading` | boolean | false | Loading state |
| `href` | string | — | Render as link |
| `target` | string | — | Link target |
| `onClick` | function | — | Click handler |
| `children` | ReactNode | — | Button content |

### Accessibility

- `aria-label` required when no text
- `aria-disabled` for disabled state
- `aria-busy` for loading state
- Keyboard: Enter/Space to activate
- Focus visible indicator

---

## 2. Card

### Variants

| Variant | Background | Border | Usage |
|---------|-----------|--------|-------|
| **Default** | #111827 | #1E293B | Project cards |
| **Elevated** | #111827 | #1E293B + shadow | Featured cards |
| **Ghost** | transparent | #1E293B | Value cards |

### Sizes

| Size | Padding | Border Radius | Usage |
|------|---------|---------------|-------|
| **sm** | 16px | 8px | Compact cards |
| **md** | 20px | 12px | Standard cards |
| **lg** | 24px | 16px | Featured cards |

### States

| State | Visual Change |
|-------|--------------|
| **Default** | Standard appearance |
| **Hover** | Border color change to #334155, slight scale |
| **Focus** | Ring 2px #3B82F6 |

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | 'default' \| 'elevated' \| 'ghost' | 'default' | Card variant |
| `size` | 'sm' \| 'md' \| 'lg' | 'md' | Card size |
| `hoverable` | boolean | false | Enable hover effect |
| `className` | string | — | Additional classes |
| `children` | ReactNode | — | Card content |

---

## 3. Badge

### Variants

| Variant | Background | Text | Border | Usage |
|---------|-----------|------|--------|-------|
| **Default** | rgba(59,130,246,0.1) | #3B82F6 | rgba(59,130,246,0.2) | Tags |
| **Success** | rgba(34,197,94,0.1) | #22C55E | rgba(34,197,94,0.2) | Live status |
| **Warning** | rgba(245,158,11,0.1) | #F59E0B | rgba(245,158,11,0.2) | In-dev status |
| **Muted** | rgba(100,116,139,0.1) | #64748B | rgba(100,116,139,0.2) | Inactive |

### Sizes

| Size | Height | Padding | Font Size | Border Radius |
|------|--------|---------|-----------|---------------|
| **sm** | 20px | 2px 8px | 10px | 4px |
| **md** | 24px | 4px 10px | 12px | 4px |
| **lg** | 28px | 4px 12px | 12px | 6px |

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | 'default' \| 'success' \| 'warning' \| 'muted' | 'default' | Badge variant |
| `size` | 'sm' \| 'md' \| 'lg' | 'md' | Badge size |
| `children` | ReactNode | — | Badge content |

---

## 4. Input

### States

| State | Border | Background | Text |
|-------|--------|------------|------|
| **Default** | #1E293B | #0B0F19 | #FFFFFF |
| **Focus** | #3B82F6 | #0B0F19 | #FFFFFF |
| **Error** | #EF4444 | #0B0F19 | #FFFFFF |
| **Disabled** | #1E293B | #111827 | #475569 |

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | string | 'text' | Input type |
| `placeholder` | string | — | Placeholder text |
| `error` | string | — | Error message |
| `disabled` | boolean | false | Disabled state |
| `label` | string | — | Label text |
| `required` | boolean | false | Required field |

---

## 5. Textarea

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `placeholder` | string | — | Placeholder text |
| `rows` | number | 6 | Number of rows |
| `error` | string | — | Error message |
| `disabled` | boolean | false | Disabled state |
| `label` | string | — | Label text |
| `required` | boolean | false | Required field |

---

## 6. Skill Card

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | LucideIcon | — | Skill icon |
| `label` | string | — | Skill name |

### States

| State | Visual Change |
|-------|--------------|
| **Default** | #111827 background, #1E293B border |
| **Hover** | #334155 border, slight scale |

---

## 7. Project Card

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `project` | Project | — | Project data |
| `featured` | boolean | false | Featured styling |

### Layout

```
┌─────────────────────┐
│  [Image] 160-200px  │
│                     │
│  Title              │
│  Description        │
│  [Tag] [Tag] [Tag]  │
│                     │
│  Status • GitHub    │
└─────────────────────┘
```

---

## 8. Timeline Item

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `year` | string | — | Year marker |
| `title` | string | — | Milestone title |
| `description` | string | — | Milestone description |
| `isLast` | boolean | false | Last item styling |

### Layout

```
●─── 2024
│   Title
│   Description
│
●─── 2025
│   Title
│   Description
│
●─── 2026  (isLast)
    Title
    Description
```

---

## 9. Social Link

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `href` | string | — | Link URL |
| `icon` | LucideIcon | — | Platform icon |
| `label` | string | — | Accessibility label |
| `platform` | string | — | Platform name |

### States

| State | Visual Change |
|-------|--------------|
| **Default** | #111827 bg, #1E293B border, #FFFFFF text |
| **Hover** | #334155 border, #3B82F6 text |

---

## 10. Container

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | 'sm' \| 'md' \| 'lg' | 'md' | Max width |
| `className` | string | — | Additional classes |
| `children` | ReactNode | — | Container content |

### Sizes

| Size | Max Width |
|------|-----------|
| **sm** | 768px |
| **md** | 1024px |
| **lg** | 1200px |

---

## Component File Structure

```
components/
├── ui/
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Badge.tsx
│   ├── Input.tsx
│   ├── Textarea.tsx
│   ├── Container.tsx
│   └── GlassCard.tsx
│
├── sections/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── FeaturedProject.tsx
│   ├── Journey.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
│
└── icons/
    └── (custom SVGs if needed)
```

---

**Document Version:** 3.0
**Last Updated:** 2026-08-07
**Status:** Active — Component Library
