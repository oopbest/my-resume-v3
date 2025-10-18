# React + TypeScript + Vite

Project structure overview:

- `src/components` — Reusable, generic components
  - `ui/` shadcn/ui primitives
  - `theme-provider.tsx`
- `src/layout` — App chrome and wrappers
  - `Navbar.tsx`, `Footer.tsx`, `MainLayout.tsx`
- `src/sections` — Page sections and section-specific helpers
  - `AboutMe.tsx`, `Timeline.tsx`, `Skill.tsx`, `Portfolio.tsx`, `ContactForm.tsx`
  - `Avatar.tsx`, `ModeToggle.tsx`, `BackgroundBeamsDemo.tsx`, `FlipWord.tsx`, `ImageCarousel.tsx`, `SkillGrid.tsx`, `PortfioGrid.tsx`, `Topic.tsx`
- `src/data` — Static data
- `src/lib` — Generic utilities (`cn`)
- `src/utils` — App-specific utilities (`common.utils.ts`)

Path alias: `@` → `src` (see `tsconfig.json` and `vite.config.ts`).
