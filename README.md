# Luminary Studio — Digital Agency Website

A premium, production-ready digital agency website built with **React 19 + Vite + Tailwind CSS v4 + GSAP**.

## Tech Stack

- **React 19** — UI framework
- **Vite 6** — build tool & dev server
- **Tailwind CSS v4** — utility-first styling
- **GSAP + ScrollTrigger** — scroll-driven and entrance animations
- **react-hook-form + Zod** — contact form validation
- **wouter** — lightweight client-side routing
- **lucide-react** — icons
- **@tanstack/react-query** — server state management (ready to wire up)

## Sections

1. Loading screen with branded GSAP entrance animation
2. Sticky navbar with glassmorphism on scroll + mobile drawer
3. Hero with animated geometric SVG illustration
4. About with scroll-triggered counter animations
5. Services as an editorial numbered list with expandable rows
6. Why Choose Us — three feature blocks
7. Featured Projects with real photography and hover overlays
8. Process — 6-step grid with sequential scroll animations
9. Client Testimonials — 2×2 layout
10. FAQ — custom accordion with animated icon
11. Contact form with validation (Name, Email, Company, Project Type, Budget, Message)
12. Footer with navigation and social links
13. Back-to-top button

---

## Getting Started in VS Code

### Prerequisites

- **Node.js** v18 or later — download from [nodejs.org](https://nodejs.org)
- **npm** v9 or later (included with Node.js)

### 1. Install dependencies

Open a terminal in the project root and run:

```bash
npm install
```

This will install all packages listed in `package.json`. It may take 1–2 minutes on first run.

### 2. Start the development server

```bash
npm run dev
```

Vite will start and automatically open **http://localhost:5173** in your browser.

The dev server supports **hot module replacement** — edits to any component update instantly without a full page reload.

### 3. Build for production

```bash
npm run build
```

The optimized output goes to the `dist/` folder. Serve it with any static host (Vercel, Netlify, GitHub Pages, etc.).

### 4. Preview the production build locally

```bash
npm run preview
```

Opens a local server at **http://localhost:4173** serving the `dist/` build.

---

## Project Structure

```
luminary-studio/
├── public/               Static assets served as-is
├── src/
│   ├── components/
│   │   ├── ui/           shadcn/ui base components (Radix UI)
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── WhyUs.tsx
│   │   ├── Projects.tsx
│   │   ├── Process.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── LoadingScreen.tsx
│   │   └── BackToTop.tsx
│   ├── pages/
│   │   ├── Home.tsx      Assembles all section components
│   │   └── not-found.tsx
│   ├── hooks/            Custom React hooks
│   ├── lib/              Utilities (cn helper, etc.)
│   ├── App.tsx           Root app with providers and router
│   ├── main.tsx          React entry point
│   └── index.css         Global styles + CSS custom properties
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## Customization

### Branding & Colors

All colors are defined as CSS custom properties in `src/index.css` inside the `:root` block:

```css
--primary: 221 83% 53%;    /* Royal Blue #2563EB */
--accent:  160 84% 39%;    /* Emerald Green #10B981 */
--foreground: 215 28% 17%; /* Dark Slate #1E293B */
```

Adjust any of these values to change the color scheme globally.

### Content

Each section is an isolated component in `src/components/`. Edit the copy, images, and data arrays directly in each file:

- **Projects** — update the `projects` array in `Projects.tsx` with real project data and Unsplash image URLs
- **Testimonials** — update the `testimonials` array in `Testimonials.tsx`
- **Services** — update the `services` array in `Services.tsx`
- **FAQ** — update the `faqs` array in `FAQ.tsx`

### Contact Form

The form in `Contact.tsx` currently shows a success message on submit without making a network call. To wire it up to a real backend, replace the `setTimeout` in the `onSubmit` function with a `fetch` or API call.

---

## Notes

- **No backend required** — this is a pure frontend static site
- **Fonts** — Inter is loaded from Google Fonts in `index.html` and `src/index.css`; requires an internet connection in development
- **Images** — project card photos are fetched directly from Unsplash CDN URLs; requires an internet connection
- **Dark mode** — intentionally disabled; the design uses a light theme only
