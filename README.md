## Redesign TurnBnB Pricing Page

![TurnBnB Pricing Page](https://i.ibb.co.com/kVPgm4Hd/Screenshot-2025-08-25-at-13-41-40-2.png)

### Objective
Redesign the TurnBnB Pricing page to provide a clear, modern, and mobile-first layout.  The goal is to highlight pricing options for property owners, cleaning coordinators, and cleaning teams with improved readability, accessibility, and user experience. Deployed to Vercel [View Pricing Page](https://redesign-pricing.vercel.app/pricing)

### Tech Stack
- **Next.js** – Framework for building the pricing page with server-side rendering and static optimization.  
- **TypeScript** – For type safety and maintainable code.  
- **CSS (native)** – Custom styling without relying on utility-first frameworks.  
- **clsx** – Utility for conditional class management.  
- **class-variance-authority (CVA)** – To manage component variants and ensure consistent design patterns.  

### Integration Guide

How to integrate with your current Next.js project, then install the required dependencies.  

#### Using **npm**
```bash
npm install react-icons embla-carousel-react
npm install -D typescript @types/react @types/react-dom @types/node \
clsx class-variance-authority @eslint/eslintrc
```
#### Using **pnpm**
```bash
pnpm add react-icons embla-carousel-react
pnpm add -D typescript @types/react @types/react-dom @types/node \
clsx class-variance-authority eslint @eslint/eslintrc
```

### Global CSS Setup

Please copy the following CSS variables into your global or root stylesheet (e.g., `app/globals.css` or your main global CSS file).  
Place them inside the `:root` selector.

```css
:root {
  --primary: #0070E0;
  --light: #ffffff;
  --neutral: #000000;
  --muted: #A3A3A3;
  --gray: #f4f4f5;

  --border-default: #E5E7EB;
  --border-muted: #D1D5DB;
  --border-neutral: #000000;
  --border-light: #ffffff;
  
  --icon-default: #4F6169;
  --icon-neutral: #000000;
  --icon-light: #ffffff;

  /* Typography scale */
  --text-xs: 0.75rem;   /* 12px */
  --text-sm: 0.875rem;  /* 14px */
  --text-base: 1rem;    /* 16px */
  --text-lg: 1.125rem;  /* 18px */
  --text-xl: 1.25rem;   /* 20px */
  --text-2xl: 1.5rem;   /* 24px */
  --text-3xl: 1.875rem; /* 30px */
  --text-4xl: 2.25rem;  /* 36px */
  --text-5xl: 3rem;     /* 48px */
  --text-6xl: 3.75rem;  /* 60px */
  --text-7xl: 4.5rem;   /* 72px */
  --text-8xl: 6rem;     /* 96px */
  --text-9xl: 8rem;     /* 128px */

  /* Line-height */
  --leading-none: 1;
  --leading-tight: 1.25;
  --leading-snug: 1.375;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
  --leading-loose: 2;

  /* Breakpoints */
  --breakpoint-xs: 320px;
  --breakpoint-sm: 540px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
}
```

### Integration Guide

After adding the global CSS variables, please copy the following folders into your project.  
They should be placed inside your **root directory** (or inside `src/` if your project uses `src/` as the main source folder).

### Required Folders
- `constants/*`
- `app/pricing/*`
- `features/*`
- `components/ui/*`
- `utils/*`
- `context/*`

### Example Structure

If your project uses **src/**:
```bash
├── src
│   ├── app/
│      └── pricing
├── components/
│   ├── ui
├── constants
├── context/
└── features/
└── utils/
```

### Run on local development 
#### Using **npm**
```bash
npm run dev
```
#### Using **pnpm**
```bash
pnpm dev
```

---

### Need Help or Revisions?
If you run into any issues while setting this up or if there are parts that need to be revised, please let me know and I’ll make the necessary adjustments.

