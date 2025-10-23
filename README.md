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

# Unit Test

To exercise each case in src/components/ui/button.test.tsx:6-20, run Vitest in a way that limits execution to that file so the output clearly shows the two specs:

- `npx vitest run src/components/ui/button.test.tsx`
  Runs the file once and prints the result for renders with default styles and text and merges custom class names. Each should report ✓ when passing.

While developing, the watch UI is handy:

- `npm run test:watch -- src/components/ui/button.test.tsx`
  Launches Vitest’s watch mode scoped to the file. You can use the interactive menu (o, p, etc.) to re-run by filename or test name, and add .only to a specific it(...)  
  block when you want to focus on a single case (it.only("merges custom class names", ...)).

Both tests rely on the expect assertions: the first checks the button renders with default text and classes, the second verifies custom classes are merged. If either  
 breaks, Vitest highlights the failing assertion so you can adjust the component as needed.
