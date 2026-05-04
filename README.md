# Pramanika Legal — Website

Official website for **Pramanika Legal**, a professional law firm. Built with Next.js App Router, React 19, Tailwind CSS v4, and TypeScript.

---

## Tech Stack

| Layer       | Technology                        |
|-------------|-----------------------------------|
| Framework   | Next.js 16 (App Router)           |
| Language    | TypeScript                        |
| Styling     | Tailwind CSS v4                   |
| Runtime     | React 19                          |
| Deployment  | Vercel (recommended)              |

---

## Project Standards

### Directory Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout — metadata, fonts, global wrappers
│   ├── page.tsx                # Home page (/)
│   ├── about/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── team/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   └── blog/
│       ├── page.tsx
│       └── [slug]/
│           └── page.tsx
├── components/
│   ├── layout/                 # Navbar, Footer, etc.
│   ├── ui/                     # Reusable UI primitives (Button, Card, etc.)
│   └── sections/               # Page-level sections (Hero, Services, etc.)
├── lib/                        # Utilities, helpers, constants
└── types/                      # Shared TypeScript types
```

---

### SEO Rules (Critical)

Every page **must** export a `metadata` object (or `generateMetadata` for dynamic routes). This is a hard requirement — no page ships without it.

```ts
// app/about/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Pramanika Legal",
  description: "Learn about Pramanika Legal — our founding story, values, and the team behind your legal success.",
  openGraph: {
    title: "About Us | Pramanika Legal",
    description: "...",
    url: "https://pramanikelegal.com/about",
    siteName: "Pramanika Legal",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};
```

Root `layout.tsx` holds the **default / fallback** metadata (site name, default OG image, robots, canonical base URL).

---

### `"use client"` Policy

Next.js App Router renders everything as **Server Components by default**. We keep it that way as much as possible for SEO and performance.

**Rule:** Add `"use client"` **only** at the lowest possible component that actually needs it. Never add it to a page file or layout.

| Add `"use client"` when...                        | Do NOT add for...                  |
|---------------------------------------------------|------------------------------------|
| `useState` / `useEffect` / `useRef`               | Static content display             |
| Event handlers (`onClick`, `onChange`, etc.)      | Fetching data (use Server Components)|
| Browser-only APIs (`window`, `localStorage`, etc.)| Any component that can stay server |
| Third-party libs that require client context      |                                    |

Pattern — isolate interactivity into a small leaf component:

```tsx
// components/layout/MobileMenuButton.tsx  ← "use client" lives HERE
"use client";
export function MobileMenuButton() { ... }

// components/layout/Navbar.tsx  ← stays a Server Component
import { MobileMenuButton } from "./MobileMenuButton";
export function Navbar() {
  return <nav>...<MobileMenuButton /></nav>;
}
```

---

### Code Style

- **TypeScript strict mode** — no `any`, explicit return types on all exported functions.
- **Named exports** everywhere; default exports only for Next.js page/layout files (required by the framework).
- **No inline styles** — Tailwind utility classes only. Extract repeated class strings into `cn()` helper or component variants.
- **Component naming** — PascalCase for components, kebab-case for files (`hero-section.tsx`).
- **Imports order**: React → Next.js → third-party → internal (`@/components`, `@/lib`) → types → styles.
- Keep components **under 150 lines**. Extract sub-components when growing beyond that.

---

### Performance

- Use `next/image` for **all** images — never raw `<img>` tags.
- Use `next/font` for fonts — loaded at build time, no layout shift.
- Lazy-load heavy sections with `next/dynamic` where appropriate.
- Avoid large client bundles — keep `"use client"` components lean.

---

### Accessibility

- Semantic HTML: `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`, `<article>`.
- Every interactive element must be keyboard-navigable and have visible focus styles.
- All images require descriptive `alt` text.
- Color contrast must meet WCAG AA minimum (4.5:1 for body text).

---

### UI Layout Structure

To ensure consistency and accessibility, pages should be structured using semantic HTML tags. Avoid excessive `<div>` nesting where proper semantic elements can be used.

**Standard Page Anatomy:**
```html
<header>Navbar</header>
<main>
  <section>Hero</section>
  <section>Services</section>
  <section>Features</section>
  <section>Testimonials</section>
  <section>Contact</section>
</main>
<footer>Footer</footer>
```

---

### Design System & Theming

*Awaiting full Figma design screenshots. The following base will be updated as the design evolves.*

**Colors:**
- Primary Blue: `#2E31CA`
- Black
- White

**Typography:**
- Sans-serif: `Roboto`
- Serif: `Roboto Serif`

**Global Styles Strategy:**
To maintain strict design consistency with the Figma files, we will define global typography styles (headings `h1`-`h6`, paragraphs `p`, etc.) in our global CSS or Tailwind base layer. As we extract layout and style properties from Figma, they will be translated into highly reusable, consistent global styles rather than inline utility repetition.

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment Variables

Create a `.env.local` file at the root (never commit this):

```env
NEXT_PUBLIC_SITE_URL=https://pramanikelegal.com
```

---

## Planned Pages

| Route          | Description                        |
|----------------|------------------------------------|
| `/`            | Home — Hero, Services overview, CTA|
| `/about`       | Firm story, values, credentials    |
| `/services`    | Practice areas                     |
| `/team`        | Attorney profiles                  |
| `/blog`        | Legal insights & articles          |
| `/contact`     | Contact form, office details       |
