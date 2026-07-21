# SMM Panel Landing Page

A marketing landing page for an SMM (Social Media Marketing) panel — built with Next.js and Tailwind CSS. It showcases the service's hero section, supported platforms, features, working process, and footer/contact info.

## Tech Stack

- **[Next.js 16](https://nextjs.org)** — App Router
- **[React 19](https://react.dev)**
- **[Tailwind CSS 4](https://tailwindcss.com)** — utility-first styling
- **[Framer Motion](https://www.framer.com/motion/)** — animations and transitions
- **[React Icons](https://react-icons.github.io/react-icons/)** — icon set (Feather, Font Awesome 6, etc.)

## Project Structure

```
src/
├── app/                # Next.js App Router
│   ├── layout.jsx      # Root layout (fonts, metadata)
│   ├── page.jsx        # Home page — composes all sections
│   └── globals.css     # Tailwind import + global styles
├── components/         # Page sections and shared UI
│   ├── ui/              # Small reusable UI primitives (e.g. Button)
│   ├── Navbar.jsx
│   ├── HeroSection.jsx
│   ├── PromotionServices.jsx
│   ├── AboutUs.jsx
│   ├── OurServices.jsx
│   ├── WorkingProcess.jsx
│   ├── Footer.jsx
│   └── Container.jsx    # Centered max-width wrapper
├── constants/
│   └── data.js          # Static content: nav links, services, platforms, steps
└── assets/              # Images used inside components (imported via `@/assets/...`)
```

The `@/*` import alias points to `src/*` (see `jsconfig.json`), e.g. `import Button from '@/components/ui/Button'`.

## Setup

```bash
# 1. Clone the repository
git clone <repository-url>
cd smm-panel-landingpage

# 2. Install dependencies
npm install
```

## Running the Project

**Development server** (with hot reload):

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

**Production build:**

```bash
npm run build
npm run start
```


## Notes

- Static content (navigation links, service platforms, working-process steps, etc.) lives in `src/constants/data.js` — update it there rather than hardcoding text in components.
- Images referenced by components live in `src/assets/` and are imported directly (optimized by `next/image`).
